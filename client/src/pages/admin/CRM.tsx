import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CRM() {
  return (
    <Layout 
      title="Customer Relations" 
      subtitle="Manage customer relationships, campaigns, and feedback"
    >
      <Card>
        <CardHeader>
          <CardTitle>CRM Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Customer relationship management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
