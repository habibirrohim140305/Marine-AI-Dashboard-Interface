import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', rainfall: 45, predicted: 50 },
  { month: 'Feb', rainfall: 52, predicted: 55 },
  { month: 'Mar', rainfall: 48, predicted: 52 },
  { month: 'Apr', rainfall: 61, predicted: 65 },
  { month: 'May', rainfall: 75, predicted: 78 },
  { month: 'Jun', rainfall: 82, predicted: 85 },
  { month: 'Jul', rainfall: 88, predicted: 92 },
  { month: 'Aug', rainfall: 79, predicted: 82 },
  { month: 'Sep', rainfall: null, predicted: 75 },
  { month: 'Oct', rainfall: null, predicted: 68 },
  { month: 'Nov', rainfall: null, predicted: 55 },
  { month: 'Dec', rainfall: null, predicted: 48 },
];

export function RainfallChart() {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Predicted Rainfall Trends</CardTitle>
        <p className="text-sm text-muted-foreground">Monthly rainfall predictions (mm)</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0066cc" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0066cc" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00bcd4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f7" />
            <XAxis 
              dataKey="month" 
              stroke="#5a7a8f"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#5a7a8f"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0f2f7',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="rainfall"
              stroke="#0066cc"
              strokeWidth={2}
              fill="url(#rainfallGradient)"
              name="Actual"
            />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="#00bcd4"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="url(#predictedGradient)"
              name="Predicted"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
