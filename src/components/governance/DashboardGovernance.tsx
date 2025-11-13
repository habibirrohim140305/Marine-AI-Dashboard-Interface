import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Fish, Ship, AlertTriangle, TrendingUp, TrendingDown, AlertCircle, CheckCircle, MapPin, Thermometer, Droplets } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

const monthlyTrendData = [
  { month: 'Jun', populasi: 85, kapal: 45, pelanggaran: 12 },
  { month: 'Jul', populasi: 82, kapal: 52, pelanggaran: 15 },
  { month: 'Agu', populasi: 88, kapal: 48, pelanggaran: 10 },
  { month: 'Sep', populasi: 90, kapal: 55, pelanggaran: 18 },
  { month: 'Okt', populasi: 87, kapal: 51, pelanggaran: 14 },
  { month: 'Nov', populasi: 92, kapal: 62, pelanggaran: 9 },
];

const recentPredictions = [
  { lokasi: 'Perairan Utara Ujung Kulon', populasi: 92, confidence: 94, risiko: 'Rendah', status: 'normal' },
  { lokasi: 'Selat Panaitan', populasi: 78, confidence: 88, risiko: 'Sedang', status: 'warning' },
  { lokasi: 'Teluk Handeuleum', populasi: 95, confidence: 96, risiko: 'Rendah', status: 'normal' },
  { lokasi: 'Zona Konservasi A', populasi: 68, confidence: 85, risiko: 'Tinggi', status: 'alert' },
  { lokasi: 'Perairan Barat', populasi: 88, confidence: 92, risiko: 'Rendah', status: 'normal' },
];

const notifications = [
  { type: 'warning', message: 'Deteksi aktivitas kapal tidak terdaftar di Zona Konservasi A', time: '15 menit lalu', priority: 'Tinggi' },
  { type: 'success', message: 'Prediksi populasi ikan bulan Desember berhasil dijalankan', time: '1 jam lalu', priority: 'Normal' },
  { type: 'alert', message: 'Penurunan populasi ikan di Selat Panaitan -8%', time: '3 jam lalu', priority: 'Tinggi' },
  { type: 'info', message: 'Laporan bulanan November siap diunduh', time: '5 jam lalu', priority: 'Normal' },
];

export function DashboardGovernance() {
  const [data, setData] = useState([]);
  const [averageTemperature, setAverageTemperature] = useState('N/A');
  const [averageChlorophyll, setAverageChlorophyll] = useState('N/A');
  const [averageCatch, setAverageCatch] = useState('N/A');

  useEffect(() => {
    // Load CSV data
    Papa.parse('/dummy_marine_data.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const parsedData = result.data;
        setData(parsedData);

        // Calculate averages
        const tempSum = parsedData.reduce((sum, row) => sum + (row.suhu_laut || 0), 0);
        const chlorophyllSum = parsedData.reduce((sum, row) => sum + (row.klorofil || 0), 0);
        const catchSum = parsedData.reduce((sum, row) => sum + (row.hasil_tangkapan || 0), 0);

        setAverageTemperature((tempSum / parsedData.length).toFixed(2));
        setAverageChlorophyll((chlorophyllSum / parsedData.length).toFixed(2));
        setAverageCatch((catchSum / parsedData.length).toFixed(2));
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <p className="text-muted-foreground">
          Ringkasan data real-time sistem pemantauan dan tata kelola laut Ujung Kulon
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Rata-rata Suhu Laut</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl">{averageTemperature}</h3>
                  <span className="text-muted-foreground">°C</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#0096c7] flex items-center justify-center shadow-lg">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Rata-rata Klorofil</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl">{averageChlorophyll}</h3>
                  <span className="text-muted-foreground">mg/m³</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Rata-rata Hasil Tangkapan</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl">{averageCatch}</h3>
                  <span className="text-muted-foreground">kg</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#48cae4] to-[#90e0ef] flex items-center justify-center shadow-lg">
                <Fish className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Indeks Populasi Ikan</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl">92</h3>
                  <span className="text-muted-foreground">/ 100</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+5.7% dari bulan lalu</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#0096c7] flex items-center justify-center shadow-lg">
                <Fish className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Aktivitas Kapal Harian</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl">62</h3>
                  <span className="text-muted-foreground">kapal</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-blue-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+12 dari rata-rata</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center shadow-lg">
                <Ship className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Peringatan Pelanggaran</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl text-destructive">9</h3>
                  <span className="text-muted-foreground">deteksi</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-green-600">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm">-3 dari minggu lalu</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-destructive to-orange-500 flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Tren 6 Bulan Terakhir</CardTitle>
            <p className="text-sm text-muted-foreground">Populasi ikan, aktivitas kapal, dan pelanggaran</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyTrendData}>
                <defs>
                  <linearGradient id="populasiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0077b6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0077b6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="kapalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00b4d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#caf0f8" />
                <XAxis dataKey="month" style={{ fontSize: '12px' }} />
                <YAxis style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #caf0f8',
                    borderRadius: '12px',
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="populasi"
                  stroke="#0077b6"
                  strokeWidth={2}
                  fill="url(#populasiGradient)"
                  name="Populasi Ikan"
                />
                <Area
                  type="monotone"
                  dataKey="kapal"
                  stroke="#00b4d8"
                  strokeWidth={2}
                  fill="url(#kapalGradient)"
                  name="Aktivitas Kapal"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Notifikasi & Peringatan</CardTitle>
            <p className="text-sm text-muted-foreground">Alert sistem terkini</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {notifications.map((notif, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-l-4 ${
                    notif.type === 'alert'
                      ? 'border-l-destructive bg-destructive/5'
                      : notif.type === 'warning'
                      ? 'border-l-orange-500 bg-orange-50'
                      : notif.type === 'success'
                      ? 'border-l-green-500 bg-green-50'
                      : 'border-l-blue-500 bg-blue-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {notif.type === 'alert' && <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />}
                    {notif.type === 'warning' && <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />}
                    {notif.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />}
                    {notif.type === 'info' && <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />}
                    <div className="flex-1">
                      <p className="text-sm mb-1">{notif.message}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{notif.time}</span>
                        <Badge variant={notif.priority === 'Tinggi' ? 'destructive' : 'secondary'} className="text-xs">
                          {notif.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Predictions Table */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Prediksi Populasi Terkini</CardTitle>
          <p className="text-sm text-muted-foreground">Hasil prediksi AI untuk berbagai zona di Ujung Kulon</p>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Indeks Populasi</TableHead>
                  <TableHead>Confidence</TableHead>
                  <TableHead>Risiko Overfishing</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPredictions.map((pred, idx) => (
                  <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {pred.lokasi}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{pred.populasi}</span>
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${pred.populasi}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{pred.confidence}%</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          pred.risiko === 'Tinggi'
                            ? 'destructive'
                            : pred.risiko === 'Sedang'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {pred.risiko}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {pred.status === 'normal' && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {pred.status === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                        {pred.status === 'alert' && <AlertCircle className="w-4 h-4 text-destructive" />}
                        <span className="text-sm capitalize">{pred.status}</span>
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
        <p>© 2025 Smart Marine Governance – Ujung Kulon, Banten</p>
      </footer>
    </div>
  );
}