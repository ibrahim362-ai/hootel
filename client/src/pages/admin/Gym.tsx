import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Gym() {
  return (
    <Layout 
      title="Fitness Center" 
      subtitle="Manage gym memberships, classes, and equipment"
    >
      <Card>
        <CardHeader>
          <CardTitle>Fitness Center Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Fitness center management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
