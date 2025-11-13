import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Plus, Brain, Bell } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <p className="text-sm text-muted-foreground">Common tasks and operations</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#0066cc] to-[#0066cc] hover:from-[#0052a3] hover:to-[#0052a3] transition-all">
          <Plus className="w-5 h-5" />
          Add New Prediction
        </Button>
        <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#00bcd4] to-[#00bcd4] hover:from-[#0097a7] hover:to-[#0097a7] transition-all">
          <Brain className="w-5 h-5" />
          Run AI Model
        </Button>
        <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#4dd0e1] to-[#4dd0e1] hover:from-[#26c6da] hover:to-[#26c6da] transition-all">
          <Bell className="w-5 h-5" />
          View Alerts
        </Button>
      </CardContent>
    </Card>
  );
}
