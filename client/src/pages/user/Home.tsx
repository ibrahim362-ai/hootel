import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserHome() {
  return (
    <Layout 
      title="Welcome to Our Hotel" 
      subtitle="Discover our services and book your perfect stay"
    >
      <Card>
        <CardHeader>
          <CardTitle>Guest Home</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Guest home page features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
