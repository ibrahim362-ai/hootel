import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmployerProfile() {
  return (
    <Layout 
      title="My Profile" 
      subtitle="View and update your profile information"
    >
      <Card>
        <CardHeader>
          <CardTitle>Profile Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Profile management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
