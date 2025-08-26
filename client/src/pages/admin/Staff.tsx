import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Staff() {
  return (
    <Layout 
      title="Staff Management" 
      subtitle="Manage staff members, ratings, and performance"
    >
      <Card>
        <CardHeader>
          <CardTitle>Staff Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Staff management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
