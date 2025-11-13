import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface KPICardProps {
  title: string;
  value: string;
  unit: string;
  change: number;
  icon: LucideIcon;
  color: string;
}

export function KPICard({ title, value, unit, change, icon: Icon, color }: KPICardProps) {
  const isPositive = change > 0;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">{title}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl">{value}</h3>
              <span className="text-muted-foreground">{unit}</span>
            </div>
            <div className={`flex items-center gap-1 mt-3 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm">
                {isPositive ? '+' : ''}{change}% vs last week
              </span>
            </div>
          </div>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
