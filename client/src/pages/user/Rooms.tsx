import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserRooms() {
  return (
    <Layout 
      title="Browse Rooms" 
      subtitle="Find and book the perfect room for your stay"
    >
      <Card>
        <CardHeader>
          <CardTitle>Room Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Room booking features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
