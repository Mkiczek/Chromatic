import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const meta: Meta = {
  title: 'Examples/CRMUnderwriterDashboard',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Dashboard: Story = {
  render: () => (
    <div className="min-h-screen grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
      {/* Header */}
      <header className="col-span-2 row-start-1 bg-muted flex items-center justify-between px-6">
        <h1 className="text-lg font-semibold">Underwriter CRM Dashboard</h1>
        <div className="flex items-center gap-4">
          <Input placeholder="Search..." className="w-64" />
          <Button>Notifications</Button>
          <Button variant="outline">User</Button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="row-span-2 border-r bg-background p-4 space-y-4">
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start">Dashboard</Button>
          <Button variant="ghost" className="justify-start">Accounts</Button>
          <Button variant="ghost" className="justify-start">Policies</Button>
          <Button variant="ghost" className="justify-start">Claims</Button>
          <Button variant="ghost" className="justify-start">Submissions</Button>
          <Button variant="ghost" className="justify-start">Risk Analytics</Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Active Accounts */}
          <Card>
            <CardHeader>
              <CardTitle>Active Accounts</CardTitle>
              <CardDescription>Total active accounts under management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">234</div>
            </CardContent>
          </Card>

          {/* Policies to Review */}
          <Card>
            <CardHeader>
              <CardTitle>Policies to Review</CardTitle>
              <CardDescription>Policies awaiting your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">7</div>
            </CardContent>
          </Card>

          {/* Claims in Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Claims in Progress</CardTitle>
              <CardDescription>Claims requiring your review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-600">3</div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Recent Activities & Client Info */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Recent updates and activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>🟢 Policy reviewed – ABC Corp</p>
              <p>🔴 Claim denied – XYZ Ltd</p>
              <p>🟠 Policy renewal – Acme Insurance</p>
              <p>🟢 Client contacted – Smith Enterprises</p>
            </CardContent>
          </Card>

          {/* Client Details */}
          <Card>
            <CardHeader>
              <CardTitle>Client Details</CardTitle>
              <CardDescription>Details of selected client account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="font-semibold">ABC Corporation</div>
              <p className="text-sm text-muted-foreground">Account number: 10234</p>
              <p className="text-sm">Address: 1234 Corporate Blvd, City, State</p>
              <p className="text-sm">Policy Expiry: 12/31/2025</p>
              <Badge variant="outline" className="w-max">High Risk</Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  ),
};
