import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';

const predictions = [
  {
    id: 'PRD-001',
    location: 'Pacific Ocean - Zone A',
    parameter: 'Temperature',
    value: '28.5°C',
    confidence: 95,
    status: 'Verified',
    timestamp: '2 mins ago',
  },
  {
    id: 'PRD-002',
    location: 'Indian Ocean - Zone B',
    parameter: 'Chlorophyll',
    value: '2.3 mg/m³',
    confidence: 88,
    status: 'Pending',
    timestamp: '15 mins ago',
  },
  {
    id: 'PRD-003',
    location: 'Atlantic - Zone C',
    parameter: 'Rainfall',
    value: '85 mm',
    confidence: 92,
    status: 'Verified',
    timestamp: '1 hour ago',
  },
  {
    id: 'PRD-004',
    location: 'Arctic Ocean - Zone D',
    parameter: 'Temperature',
    value: '2.1°C',
    confidence: 78,
    status: 'Review',
    timestamp: '2 hours ago',
  },
  {
    id: 'PRD-005',
    location: 'Mediterranean - Zone E',
    parameter: 'Chlorophyll',
    value: '1.8 mg/m³',
    confidence: 91,
    status: 'Verified',
    timestamp: '3 hours ago',
  },
];

export function PredictionsTable() {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Recent Predictions</CardTitle>
        <p className="text-sm text-muted-foreground">Latest AI-generated oceanographic predictions</p>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>ID</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Parameter</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {predictions.map((prediction) => (
                <TableRow key={prediction.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="text-primary">{prediction.id}</TableCell>
                  <TableCell>{prediction.location}</TableCell>
                  <TableCell>{prediction.parameter}</TableCell>
                  <TableCell>{prediction.value}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${
                            prediction.confidence >= 90
                              ? 'bg-green-500'
                              : prediction.confidence >= 80
                              ? 'bg-blue-500'
                              : 'bg-yellow-500'
                          }`}
                          style={{ width: `${prediction.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground min-w-[3ch]">
                        {prediction.confidence}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        prediction.status === 'Verified'
                          ? 'default'
                          : prediction.status === 'Pending'
                          ? 'secondary'
                          : 'outline'
                      }
                    >
                      {prediction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{prediction.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
