import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Reports() {
  return (
    <Layout 
      title="Reports & Analytics" 
      subtitle="View detailed reports and analytics"
    >
      <Card>
        <CardHeader>
          <CardTitle>Reports Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Reports and analytics features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
