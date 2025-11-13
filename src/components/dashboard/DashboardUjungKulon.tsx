import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Thermometer, Droplets, CloudRain, TrendingUp, TrendingDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';

const rainfallData = [
  { bulan: 'Jan', hujan: 65, prediksi: 68 },
  { bulan: 'Feb', hujan: 72, prediksi: 75 },
  { bulan: 'Mar', hujan: 68, prediksi: 70 },
  { bulan: 'Apr', hujan: 75, prediksi: 78 },
  { bulan: 'Mei', hujan: 82, prediksi: 85 },
  { bulan: 'Jun', hujan: 88, prediksi: 90 },
  { bulan: 'Jul', hujan: 95, prediksi: 98 },
  { bulan: 'Agu', hujan: 89, prediksi: 92 },
  { bulan: 'Sep', hujan: null, prediksi: 85 },
  { bulan: 'Okt', hujan: null, prediksi: 78 },
  { bulan: 'Nov', hujan: null, prediksi: 70 },
  { bulan: 'Des', hujan: null, prediksi: 65 },
];

const recentPredictions = [
  { lokasi: 'Perairan Barat Ujung Kulon', theta: '29.2°C', chl: '2.8 mg/m³', hujan: '78 mm', akurasi: 95 },
  { lokasi: 'Selat Panaitan', theta: '28.8°C', chl: '2.5 mg/m³', hujan: '82 mm', akurasi: 92 },
  { lokasi: 'Teluk Handeuleum', theta: '29.5°C', chl: '3.1 mg/m³', hujan: '75 mm', akurasi: 94 },
  { lokasi: 'Pantai Peucang', theta: '28.3°C', chl: '2.2 mg/m³', hujan: '68 mm', akurasi: 88 },
  { lokasi: 'Pulau Badul', theta: '29.0°C', chl: '2.6 mg/m³', hujan: '80 mm', akurasi: 91 },
];

export function DashboardUjungKulon() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <p className="text-muted-foreground">
          Pemantauan real-time kondisi laut dan prediksi cuaca wilayah Ujung Kulon
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Suhu Permukaan Laut</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl">29.2</h3>
                  <span className="text-muted-foreground">°C</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+1.8% dari minggu lalu</span>
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
                <p className="text-sm text-muted-foreground mb-2">Kadar Klorofil (CHL)</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl">2.8</h3>
                  <span className="text-muted-foreground">mg/m³</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">Kondisi normal</span>
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
                <p className="text-sm text-muted-foreground mb-2">Prediksi Curah Hujan</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl">78</h3>
                  <span className="text-muted-foreground">mm</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-blue-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">7 hari ke depan</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#48cae4] to-[#90e0ef] flex items-center justify-center shadow-lg">
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
            <CardTitle>Tren Curah Hujan</CardTitle>
            <p className="text-sm text-muted-foreground">Prediksi curah hujan bulanan (mm)</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={rainfallData}>
                <defs>
                  <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0077b6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0077b6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00b4d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#caf0f8" />
                <XAxis dataKey="bulan" stroke="#075985" style={{ fontSize: '12px' }} />
                <YAxis stroke="#075985" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #caf0f8',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="hujan"
                  stroke="#0077b6"
                  strokeWidth={2}
                  fill="url(#rainfallGradient)"
                  name="Aktual"
                />
                <Area
                  type="monotone"
                  dataKey="prediksi"
                  stroke="#00b4d8"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fill="url(#predictedGradient)"
                  name="Prediksi"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
            <p className="text-sm text-muted-foreground">Tugas umum</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#0077b6] to-[#0077b6] hover:from-[#005f8e] hover:to-[#005f8e] rounded-xl">
              Tambah Prediksi
            </Button>
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#00b4d8] to-[#00b4d8] hover:from-[#0096c7] hover:to-[#0096c7] rounded-xl">
              Jalankan Model AI
            </Button>
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-[#48cae4] to-[#48cae4] hover:from-[#00b4d8] hover:to-[#00b4d8] rounded-xl">
              Lihat Peta
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Predictions Table */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Prediksi Terbaru</CardTitle>
          <p className="text-sm text-muted-foreground">Prediksi AI untuk wilayah Ujung Kulon</p>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Suhu (θ)</TableHead>
                  <TableHead>Klorofil (CHL)</TableHead>
                  <TableHead>Prediksi Hujan</TableHead>
                  <TableHead>Akurasi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPredictions.map((pred, idx) => (
                  <TableRow key={idx} className="hover:bg-muted/30 transition-colors">
                    <TableCell>{pred.lokasi}</TableCell>
                    <TableCell>{pred.theta}</TableCell>
                    <TableCell>{pred.chl}</TableCell>
                    <TableCell>{pred.hujan}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden max-w-[80px]">
                          <div
                            className={`h-full ${
                              pred.akurasi >= 90
                                ? 'bg-green-500'
                                : pred.akurasi >= 85
                                ? 'bg-blue-500'
                                : 'bg-yellow-500'
                            }`}
                            style={{ width: `${pred.akurasi}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{pred.akurasi}%</span>
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
        <p>© 2025 Marine AI Ujung Kulon – Sistem Informasi Kelautan Banten</p>
      </footer>
    </div>
  );
}
