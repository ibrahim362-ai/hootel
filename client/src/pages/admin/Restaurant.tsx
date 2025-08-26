import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Restaurant() {
  return (
    <Layout 
      title="Restaurant Management" 
      subtitle="Manage menu items, orders, and inventory"
    >
      <Card>
        <CardHeader>
          <CardTitle>Restaurant Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Restaurant management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
