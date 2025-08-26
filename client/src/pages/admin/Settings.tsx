import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Settings() {
  return (
    <Layout 
      title="System Settings" 
      subtitle="Configure system settings and user roles"
    >
      <Card>
        <CardHeader>
          <CardTitle>Settings Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            System settings and configuration features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
