import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserProfile() {
  return (
    <Layout 
      title="My Profile" 
      subtitle="Manage your account and booking preferences"
    >
      <Card>
        <CardHeader>
          <CardTitle>Guest Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Guest profile management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
