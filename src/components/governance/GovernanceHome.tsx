import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Fish, Ship, AlertTriangle, TrendingUp, TrendingDown, MapPin, ArrowRight, Shield, Eye, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const fishPopulationData = [
  { value: 85 }, { value: 82 }, { value: 88 }, { value: 90 }, { value: 87 }, { value: 89 }, { value: 92 },
];

const shipActivityData = [
  { value: 45 }, { value: 52 }, { value: 48 }, { value: 55 }, { value: 51 }, { value: 58 }, { value: 62 },
];

const violationRiskData = [
  { value: 12 }, { value: 15 }, { value: 10 }, { value: 18 }, { value: 14 }, { value: 11 }, { value: 9 },
];

const monitoringPoints = [
  { id: 1, name: 'Sensor Utara', lat: 'N-1', status: 'Aktif', temp: '28.5°C' },
  { id: 2, name: 'Sensor Selatan', lat: 'S-1', status: 'Aktif', temp: '29.1°C' },
  { id: 3, name: 'Sensor Timur', lat: 'E-1', status: 'Warning', temp: '30.2°C' },
  { id: 4, name: 'Sensor Barat', lat: 'W-1', status: 'Aktif', temp: '28.8°C' },
];

interface GovernanceHomeProps {
  onNavigate: (page: string) => void;
}

export function GovernanceHome({ onNavigate }: GovernanceHomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img src="ujung kulon2.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left text-white animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
            🌊 Powered by AI & Business Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Smart Marine Governance System
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#caf0f8] max-w-3xl leading-relaxed">
            Sistem pemantauan laut dan dukungan kebijakan berbasis AI untuk Ujung Kulon, Banten
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onNavigate('login')}
              className="h-14 px-8 bg-white text-primary hover:bg-[#caf0f8] rounded-xl shadow-2xl text-lg"
            >
              Lihat Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => onNavigate('data-analisis')}
              className="h-14 px-8 bg-gradient-to-r from-[#00b4d8]/80 to-[#0077b6]/80 hover:from-[#00b4d8] hover:to-[#0077b6] backdrop-blur-sm rounded-xl shadow-2xl text-lg border-2 border-white/30"
            >
              Telusuri Data
            </Button>
          </div>
        </div>
      </section>

      {/* Indicator Cards */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Ringkasan Indikator Real-Time</h2>
            <p className="text-muted-foreground">Data terkini dari sistem pemantauan Ujung Kulon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fish Population */}
            <Card className="border-2 border-[#00b4d8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Populasi Ikan</CardTitle>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center shadow-lg">
                    <Fish className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl text-primary">92</h3>
                    <span className="text-xl text-muted-foreground">Indeks</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+5.7% dari bulan lalu</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={fishPopulationData}>
                    <Line type="monotone" dataKey="value" stroke="#0077b6" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Ship Activity */}
            <Card className="border-2 border-[#00b4d8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Aktivitas Kapal</CardTitle>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center shadow-lg">
                    <Ship className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl text-primary">62</h3>
                    <span className="text-xl text-muted-foreground">Kapal/hari</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+12 kapal dari rata-rata</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={shipActivityData}>
                    <Line type="monotone" dataKey="value" stroke="#00b4d8" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Violation Risk */}
            <Card className="border-2 border-destructive/30 hover:shadow-2xl hover:-translate-y-2 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Risiko Pelanggaran</CardTitle>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-destructive to-orange-500 flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl text-destructive">9</h3>
                    <span className="text-xl text-muted-foreground">Peringatan</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-green-600">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm">-3 dari minggu lalu</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={violationRiskData}>
                    <Line type="monotone" dataKey="value" stroke="#dc2626" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Integrasi AI & Business Intelligence</h2>
            <p className="text-muted-foreground">
              Teknologi canggih untuk analisis dan prediksi akurat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Artificial Intelligence</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Prediksi populasi ikan menggunakan LSTM Neural Networks</li>
                  <li>Deteksi anomali aktivitas kapal dengan Random Forest</li>
                  <li>Analisis citra satelit dengan CNN untuk pemetaan ekosistem</li>
                  <li>Natural Language Processing untuk analisis regulasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Business Intelligence</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Dashboard interaktif untuk monitoring real-time</li>
                  <li>Analisis tren jangka panjang dengan data historis</li>
                  <li>Visualisasi spasial untuk pemetaan zona maritim</li>
                  <li>Laporan otomatis untuk pengambilan keputusan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Marine Smart Governance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Tentang Smart Marine Governance</h2>
            <p className="text-muted-foreground">
              Smart Marine Governance adalah platform inovatif yang dirancang untuk mendukung pengelolaan sumber daya laut
              secara efisien dan berbasis data. Dengan teknologi canggih, platform ini memberikan wawasan mendalam untuk
              pengambilan keputusan yang lebih baik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">Konservasi</h3>
                <p className="text-sm text-muted-foreground">Melindungi ekosistem laut</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">Penelitian</h3>
                <p className="text-sm text-muted-foreground">Data ilmiah akurat</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">Prediksi</h3>
                <p className="text-sm text-muted-foreground">Ramalan kondisi laut</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Tujuan Sistem</h2>
            <p className="text-muted-foreground">
              Mendukung pengelolaan sumber daya laut yang berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">Konservasi</h3>
                <p className="text-sm text-muted-foreground">Melindungi ekosistem laut</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">Penelitian</h3>
                <p className="text-sm text-muted-foreground">Data ilmiah akurat</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8] hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">Prediksi</h3>
                <p className="text-sm text-muted-foreground">Ramalan kondisi laut</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#023e8a] text-white py-12">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
              <h3 class="text-xl mb-4">Smart Marine Governance</h3>
              <p class="text-white/70 mb-4">
                Sistem pemantauan dan tata kelola laut berbasis AI untuk mendukung kebijakan konservasi dan pengelolaan perikanan berkelanjutan di Ujung Kulon, Banten.
              </p>
            </div>
            
            <div>
              <h4 class="mb-4">Kontak</h4>
              <p class="text-white/70 text-sm mb-2">
                Jl. Raya Labuan – Sumur<br />
                Ujung Kulon, Banten 42264
              </p>
              <p class="text-white/70 text-sm">
                Email: governance@marineai.id<br />
                Tel: +62 253 801234
              </p>
            </div>

            <div>
              <h4 class="mb-4">Tautan</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="https://github.com" class="text-white/70 hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href="#" class="text-white/70 hover:text-white transition-colors">Dokumentasi API</a></li>
                <li><a href="#" class="text-white/70 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" class="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div class="border-t border-white/20 pt-6 text-center text-sm text-white/70">
            © 2025 Smart Marine Governance – Ujung Kulon, Banten. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
