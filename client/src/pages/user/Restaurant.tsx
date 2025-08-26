import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserRestaurant() {
  return (
    <Layout 
      title="Restaurant Menu" 
      subtitle="Explore our delicious menu and place orders"
    >
      <Card>
        <CardHeader>
          <CardTitle>Restaurant Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Restaurant menu and ordering features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
