import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown, FaFilter, FaDownload } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
  searchable?: boolean;
  exportable?: boolean;
  filterable?: boolean;
  className?: string;
}

export function DataTable({ 
  columns, 
  data, 
  title, 
  searchable = true, 
  exportable = true, 
  filterable = true,
  className = '' 
}: DataTableProps) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handle sorting
  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredData(sorted);
  };

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  // Handle export
  const handleExport = () => {
    const csv = [
      columns.map(col => col.label).join(','),
      ...filteredData.map(row =>
        columns.map(col => row[col.key]).join(',')
      )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'data'}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <FaSort className="text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? 
      <FaSortUp className="text-primary" /> : 
      <FaSortDown className="text-primary" />;
  };

  return (
    <motion.div
      className={`bg-card rounded-2xl border border-border ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {title && (
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          )}
          
          <div className="flex items-center gap-2">
            {searchable && (
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-64"
                data-testid="input-search-table"
              />
            )}
            
            {exportable && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                data-testid="button-export"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Export
              </Button>
            )}
            
            {filterable && (
              <Button
                variant="outline"
                size="sm"
                data-testid="button-filter"
              >
                <FaFilter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`text-left py-4 px-6 font-medium text-muted-foreground ${column.className || ''}`}
                >
                  {column.sortable ? (
                    <button
                      className="flex items-center space-x-2 hover:text-foreground transition-colors"
                      onClick={() => handleSort(column.key)}
                      data-testid={`sort-${column.key}`}
                    >
                      <span>{column.label}</span>
                      {getSortIcon(column.key)}
                    </button>
                  ) : (
                    <span>{column.label}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                className="border-b border-border hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.05 }}
                data-testid={`row-${rowIndex}`}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`py-4 px-6 ${column.className || ''}`}
                    data-testid={`cell-${column.key}-${rowIndex}`}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]
                    }
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            data-testid="no-data"
          >
            <p className="text-muted-foreground">No data found</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
