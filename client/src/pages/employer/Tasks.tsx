import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Tasks() {
  return (
    <Layout 
      title="My Tasks" 
      subtitle="View and manage your assigned tasks"
    >
      <Card>
        <CardHeader>
          <CardTitle>Tasks Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Task management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
