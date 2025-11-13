import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Thermometer, Droplets, CloudRain, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const rainfallData = [
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

const recentPredictions = [
  { location: 'Pacific Ocean - Zone A', theta: '28.5°C', chl: '2.3 mg/m³', rain: '85 mm', confidence: 95 },
  { location: 'Indian Ocean - Zone B', theta: '29.2°C', chl: '1.8 mg/m³', rain: '92 mm', confidence: 88 },
  { location: 'Atlantic - Zone C', theta: '27.8°C', chl: '2.1 mg/m³', rain: '78 mm', confidence: 92 },
  { location: 'Arctic Ocean - Zone D', theta: '2.1°C', chl: '0.9 mg/m³', rain: '45 mm', confidence: 78 },
  { location: 'Mediterranean - Zone E', theta: '26.5°C', chl: '1.5 mg/m³', rain: '62 mm', confidence: 91 },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <p className="text-muted-foreground">
          Real-time oceanographic predictions and analytics powered by AI
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Sea Surface Temperature</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl">28.5</h3>
                  <span className="text-muted-foreground">°C</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+2.3% vs last week</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#1976d2] flex items-center justify-center shadow-lg">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Chlorophyll Level (CHL)</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl">2.3</h3>
                  <span className="text-muted-foreground">mg/m³</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-red-600">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm">-1.2% vs last week</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#26c6da] flex items-center justify-center shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Rain Prediction</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl">85</h3>
                  <span className="text-muted-foreground">mm</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+5.7% vs last week</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4dd0e1] to-[#80deea] flex items-center justify-center shadow-lg">
                <CloudRain className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rainfall Chart */}
        <Card className="lg:col-span-2 transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Predicted Rainfall Trends</CardTitle>
            <p className="text-sm text-muted-foreground">Monthly rainfall predictions (mm)</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={rainfallData}>
                <defs>
                  <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0066cc" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0066cc" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00bcd4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f7" />
                <XAxis dataKey="month" stroke="#5a7a8f" style={{ fontSize: '12px' }} />
                <YAxis stroke="#5a7a8f" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0f2f7',
                    borderRadius: '12px',
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

        {/* Quick Actions */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <p className="text-sm text-muted-foreground">Common tasks</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#0066cc] to-[#0066cc] hover:from-[#0052a3] hover:to-[#0052a3] rounded-xl">
              Add Prediction
            </Button>
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#00bcd4] to-[#00bcd4] hover:from-[#0097a7] hover:to-[#0097a7] rounded-xl">
              Run AI Model
            </Button>
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#4dd0e1] to-[#4dd0e1] hover:from-[#26c6da] hover:to-[#26c6da] rounded-xl">
              View Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Menambahkan bagian Prediksi Populasi & Tangkapan */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Prediksi Populasi & Tangkapan</h2>
            <p className="text-muted-foreground">
              Analisis berbasis AI untuk memprediksi populasi ikan dan hasil tangkapan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Prediksi Populasi Ikan</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Model LSTM untuk analisis tren populasi</li>
                  <li>Data historis dan real-time</li>
                  <li>Visualisasi grafik populasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Prediksi Hasil Tangkapan</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Model prediksi hasil tangkapan berbasis AI</li>
                  <li>Analisis faktor lingkungan</li>
                  <li>Rekomendasi zona penangkapan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Predictions Table */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Recent Predictions</CardTitle>
          <p className="text-sm text-muted-foreground">Latest AI-generated predictions</p>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Location</TableHead>
                  <TableHead>Temperature (θ)</TableHead>
                  <TableHead>Chlorophyll (CHL)</TableHead>
                  <TableHead>Predicted Rain</TableHead>
                  <TableHead>Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPredictions.map((pred, idx) => (
                  <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
                    <TableCell>{pred.location}</TableCell>
                    <TableCell>{pred.theta}</TableCell>
                    <TableCell>{pred.chl}</TableCell>
                    <TableCell>{pred.rain}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden max-w-[80px]">
                          <div
                            className={`h-full ${
                              pred.confidence >= 90
                                ? 'bg-green-500'
                                : pred.confidence >= 80
                                ? 'bg-blue-500'
                                : 'bg-yellow-500'
                            }`}
                            style={{ width: `${pred.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{pred.confidence}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground py-6 border-t border-border">
        <p>© Marine AI Dashboard 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}
