import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Shifts() {
  return (
    <Layout 
      title="My Shifts" 
      subtitle="View your work schedule and shift details"
    >
      <Card>
        <CardHeader>
          <CardTitle>Shifts Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Shift management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
