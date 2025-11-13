import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { AlertCircle, AlertTriangle, Info, Plus, X } from 'lucide-react';

interface Alert {
  id: string;
  title: string;
  level: 'info' | 'warning' | 'danger';
  message: string;
  timestamp: string;
}

const initialAlerts: Alert[] = [
  {
    id: 'ALT-001',
    title: 'High Temperature Anomaly',
    level: 'warning',
    message: 'Temperature in Pacific Zone A exceeds normal range by 3.2°C',
    timestamp: '2025-11-11 10:45',
  },
  {
    id: 'ALT-002',
    title: 'Low Chlorophyll Detected',
    level: 'info',
    message: 'Chlorophyll levels in Indian Ocean Zone B dropped to 1.2 mg/m³',
    timestamp: '2025-11-11 09:30',
  },
  {
    id: 'ALT-003',
    title: 'Critical Rainfall Prediction',
    level: 'danger',
    message: 'Extreme rainfall predicted in Atlantic Zone C: 145mm in next 24h',
    timestamp: '2025-11-11 08:15',
  },
  {
    id: 'ALT-004',
    title: 'Model Accuracy Update',
    level: 'info',
    message: 'AI model retrained with new data. Accuracy improved to 94.3%',
    timestamp: '2025-11-10 22:00',
  },
];

export function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    level: 'info' as 'info' | 'warning' | 'danger',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAlert: Alert = {
      id: `ALT-${String(alerts.length + 1).padStart(3, '0')}`,
      ...formData,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
    };
    setAlerts([newAlert, ...alerts]);
    setFormData({ title: '', level: 'info', message: '' });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  const getAlertConfig = (level: string) => {
    switch (level) {
      case 'info':
        return {
          icon: Info,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-900',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-900',
          iconBg: 'bg-yellow-100',
          iconColor: 'text-yellow-600',
        };
      case 'danger':
        return {
          icon: AlertCircle,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-900',
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600',
        };
      default:
        return {
          icon: Info,
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-900',
          iconBg: 'bg-gray-100',
          iconColor: 'text-gray-600',
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground">Monitor and manage system alerts</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-[#0066cc] to-[#00bcd4] hover:from-[#0052a3] hover:to-[#0097a7] rounded-xl shadow-lg"
        >
          <Plus className="w-4 h-4 mr-2" />
          {showForm ? 'Cancel' : 'Create Alert'}
        </Button>
      </div>

      {/* Create Alert Form */}
      {showForm && (
        <Card className="transition-all duration-300 shadow-xl">
          <CardHeader>
            <CardTitle>Create New Alert</CardTitle>
            <p className="text-sm text-muted-foreground">Admin/Editor only</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Alert Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., High Temperature Anomaly"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Alert Level</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value: 'info' | 'warning' | 'danger') =>
                    setFormData({ ...formData, level: value })
                  }
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="danger">Danger</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe the alert details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-[100px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0066cc] to-[#00bcd4] hover:from-[#0052a3] hover:to-[#0097a7] rounded-xl"
              >
                Create Alert
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Alerts List */}
      <div className="space-y-4">
        <h2 className="text-lg">Active Alerts ({alerts.length})</h2>
        {alerts.map((alert) => {
          const config = getAlertConfig(alert.level);
          const Icon = config.icon;

          return (
            <Card
              key={alert.id}
              className={`transition-all duration-300 hover:shadow-xl border-2 ${config.borderColor} ${config.bgColor}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${config.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${config.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={config.textColor}>{alert.title}</h3>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${config.iconBg} ${config.iconColor} uppercase`}
                          >
                            {alert.level}
                          </span>
                        </div>
                        <p className={`${config.textColor} opacity-80 mb-2`}>{alert.message}</p>
                        <div className="flex items-center gap-4 text-sm opacity-60">
                          <span>ID: {alert.id}</span>
                          <span>•</span>
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(alert.id)}
                        className={`${config.iconColor} hover:bg-white/50 rounded-lg`}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Info Alerts</p>
                <h3 className="text-2xl text-blue-600">
                  {alerts.filter((a) => a.level === 'info').length}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warnings</p>
                <h3 className="text-2xl text-yellow-600">
                  {alerts.filter((a) => a.level === 'warning').length}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Critical</p>
                <h3 className="text-2xl text-red-600">
                  {alerts.filter((a) => a.level === 'danger').length}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
