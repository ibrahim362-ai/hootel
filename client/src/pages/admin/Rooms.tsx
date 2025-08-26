import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FaBed, FaPlus, FaEdit, FaTrash, FaWifi, FaTv } from 'react-icons/fa';
import { Layout } from '@/components/layout/Layout';
import DataTable from '@/components/tables/DataTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';
import { Room } from '@shared/schema';

const roomColumns = [
  {
    key: 'number',
    label: 'Room Number',
    sortable: true,
    render: (value: string) => (
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <FaBed className="text-primary" />
        </div>
        <span className="font-medium">{value}</span>
      </div>
    )
  },
  {
    key: 'type',
    label: 'Type',
    sortable: true,
    render: (value: string) => (
      <Badge variant="outline" className="capitalize">
        {value}
      </Badge>
    )
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (value: string) => {
      const statusColors = {
        available: 'bg-green-100 text-green-800 border-green-200',
        occupied: 'bg-blue-100 text-blue-800 border-blue-200',
        cleaning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        maintenance: 'bg-red-100 text-red-800 border-red-200',
      };
      return (
        <Badge className={statusColors[value as keyof typeof statusColors] || ''}>
          {value}
        </Badge>
      );
    }
  },
  {
    key: 'price',
    label: 'Price/Night',
    sortable: true,
    render: (value: string) => `$${value}`
  },
  {
    key: 'amenities',
    label: 'Amenities',
    render: (value: string[]) => (
      <div className="flex flex-wrap gap-1">
        {value?.slice(0, 3).map((amenity, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {amenity === 'WiFi' && <FaWifi className="mr-1" />}
            {amenity === 'TV' && <FaTv className="mr-1" />}
            {amenity}
          </Badge>
        ))}
        {value?.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{value.length - 3}
          </Badge>
        )}
      </div>
    )
  },
  {
    key: 'actions',
    label: 'Actions',
    render: (_: any, room: Room) => (
      <div className="flex space-x-2">
        <Button size="sm" variant="ghost" data-testid={`edit-room-${room.id}`}>
          <FaEdit className="h-4 w-4 text-blue-600" />
        </Button>
        <Button size="sm" variant="ghost" data-testid={`delete-room-${room.id}`}>
          <FaTrash className="h-4 w-4 text-red-600" />
        </Button>
      </div>
    )
  },
];

export default function Rooms() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newRoom, setNewRoom] = useState({
    number: '',
    type: 'standard',
    price: '',
    amenities: ['WiFi', 'TV', 'AC']
  });

  const { toast } = useToast();

  const { data: rooms, isLoading } = useQuery<Room[]>({
    queryKey: ['/api/rooms'],
  });

  const handleAddRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement room creation API call
    toast({
      title: "Room added successfully!",
      description: `Room ${newRoom.number} has been created`,
    });
    setIsAddDialogOpen(false);
    setNewRoom({
      number: '',
      type: 'standard', 
      price: '',
      amenities: ['WiFi', 'TV', 'AC']
    });
  };

  if (isLoading) {
    return (
      <Layout title="Rooms Management">
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title="Rooms Management" 
      subtitle="Manage your hotel rooms, pricing, and availability"
    >
      <div className="space-y-6">
        
        {/* Room Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Rooms', value: rooms?.length || 0, color: 'blue' },
            { label: 'Available', value: rooms?.filter(r => r.status === 'available').length || 0, color: 'green' },
            { label: 'Occupied', value: rooms?.filter(r => r.status === 'occupied').length || 0, color: 'purple' },
            { label: 'Maintenance', value: rooms?.filter(r => r.status === 'maintenance').length || 0, color: 'red' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                      <FaBed className={`text-${stat.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add Room Dialog */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">All Rooms</h2>
            <p className="text-muted-foreground">Manage room details and availability</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button data-testid="button-add-room">
                <FaPlus className="mr-2 h-4 w-4" />
                Add Room
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Room</DialogTitle>
                <DialogDescription>
                  Create a new room with details and amenities.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleAddRoom} className="space-y-4">
                <div>
                  <Label htmlFor="room-number">Room Number</Label>
                  <Input
                    id="room-number"
                    value={newRoom.number}
                    onChange={(e) => setNewRoom({...newRoom, number: e.target.value})}
                    placeholder="e.g., 101"
                    required
                    data-testid="input-room-number"
                  />
                </div>
                
                <div>
                  <Label htmlFor="room-type">Room Type</Label>
                  <Select value={newRoom.type} onValueChange={(value) => setNewRoom({...newRoom, type: value})}>
                    <SelectTrigger data-testid="select-room-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="deluxe">Deluxe</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="room-price">Price per Night ($)</Label>
                  <Input
                    id="room-price"
                    type="number"
                    value={newRoom.price}
                    onChange={(e) => setNewRoom({...newRoom, price: e.target.value})}
                    placeholder="120"
                    required
                    data-testid="input-room-price"
                  />
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" data-testid="button-create-room">
                    Create Room
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Rooms Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <DataTable
            columns={roomColumns}
            data={rooms || []}
            searchable
            exportable
            filterable
          />
        </motion.div>
      </div>
    </Layout>
  );
}
