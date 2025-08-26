import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserGym() {
  return (
    <Layout 
      title="Fitness Classes" 
      subtitle="Join our fitness classes and stay healthy"
    >
      <Card>
        <CardHeader>
          <CardTitle>Fitness Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Fitness class booking features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
