import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Property() {
  return (
    <Layout 
      title="Property Management" 
      subtitle="Manage assets, maintenance, and vendors"
    >
      <Card>
        <CardHeader>
          <CardTitle>Property Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Property management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
