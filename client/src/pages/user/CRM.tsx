import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserCRM() {
  return (
    <Layout 
      title="Rewards & Offers" 
      subtitle="Check your loyalty points and exclusive offers"
    >
      <Card>
        <CardHeader>
          <CardTitle>Rewards Program</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Rewards and loyalty program features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
