import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmployerDashboard() {
  return (
    <Layout 
      title="Staff Dashboard" 
      subtitle="Your tasks, shifts, and work overview"
    >
      <Card>
        <CardHeader>
          <CardTitle>Staff Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Staff dashboard features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
