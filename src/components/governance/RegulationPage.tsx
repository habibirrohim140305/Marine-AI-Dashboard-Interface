import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';
import { Badge } from '../ui/badge';

const regulations = [
  {
    title: 'UNCLOS (United Nations Convention on the Law of the Sea)',
    category: 'Internasional',
    description: 'Konvensi PBB tentang Hukum Laut yang mengatur hak dan kewajiban negara di zona maritim',
    status: 'Aktif',
    year: '1982',
  },
  {
    title: 'UU No. 31 Tahun 2004 tentang Perikanan',
    category: 'Nasional',
    description: 'Undang-undang yang mengatur pengelolaan perikanan di Indonesia',
    status: 'Aktif',
    year: '2004',
  },
  {
    title: 'Permen KKP No. 2/2015 tentang Larangan Penggunaan Alat Tangkap Pukat Hela dan Pukat Tarik',
    category: 'Peraturan Menteri',
    description: 'Peraturan tentang larangan penggunaan alat tangkap yang merusak',
    status: 'Aktif',
    year: '2015',
  },
  {
    title: 'Permen KKP No. 71/2016 tentang Jalur Penangkapan Ikan',
    category: 'Peraturan Menteri',
    description: 'Pengaturan jalur dan zona penangkapan ikan berdasarkan ukuran kapal',
    status: 'Aktif',
    year: '2016',
  },
];

const zones = [
  { name: 'Zona Ekonomi Eksklusif (ZEE)', area: '200 mil laut', color: 'bg-blue-500' },
  { name: 'Zona Konservasi Ujung Kulon', area: '443 km²', color: 'bg-green-500' },
  { name: 'Zona Larangan Tangkap', area: '125 km²', color: 'bg-red-500' },
  { name: 'Zona Penangkapan Tradisional', area: '0-4 mil laut', color: 'bg-yellow-500' },
];

const policyRecommendations = [
  {
    title: 'Pembatasan Kuota Tangkapan Ikan Kakap',
    priority: 'Tinggi',
    basis: 'Data menunjukkan penurunan populasi 15% dalam 6 bulan terakhir',
    recommendation: 'Kurangi kuota menjadi 70% dari tahun lalu selama 12 bulan',
  },
  {
    title: 'Perluasan Zona Larangan Tangkap',
    priority: 'Sedang',
    basis: 'Deteksi aktivitas illegal fishing di area breeding ground',
    recommendation: 'Tambah zona larangan 25 km² di area timur laut',
  },
  {
    title: 'Pemantauan Kapal Asing',
    priority: 'Tinggi',
    basis: 'Peningkatan deteksi kapal asing tanpa izin sebesar 23%',
    recommendation: 'Perkuat patroli dan sistem monitoring real-time',
  },
];

export function RegulationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f9ff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Regulasi & Kebijakan Maritim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kerangka hukum dan rekomendasi kebijakan untuk pengelolaan laut berkelanjutan
          </p>
        </div>

        {/* Maritime Zones Map */}
        <section className="mb-16">
          <Card className="shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white">
              <CardTitle className="text-2xl">Regulasi Zona Maritim</CardTitle>
              <p className="text-white/80 text-sm">Pembagian zona dan regulasi di perairan Ujung Kulon</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-[#90e0ef] to-[#0077b6] h-[400px] flex items-center justify-center">
                {/* Simplified Zone Visualization */}
                <div className="relative w-full h-full p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
                    {zones.map((zone, idx) => (
                      <div
                        key={idx}
                        className={`${zone.color} bg-opacity-40 backdrop-blur-sm rounded-2xl border-4 border-white shadow-2xl p-6 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer`}
                      >
                        <Scale className="w-12 h-12 mb-3" />
                        <h3 className="text-center mb-2">{zone.name}</h3>
                        <p className="text-sm text-center opacity-90">{zone.area}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Regulations List */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl mb-4">Daftar Regulasi Relevan</h2>
            <p className="text-muted-foreground">Peraturan yang menjadi dasar hukum pengelolaan laut</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {regulations.map((reg, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                        <h3 className="text-lg">{reg.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{reg.description}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {reg.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Tahun: {reg.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-green-600">{reg.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Policy Recommendations */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl mb-4">Rekomendasi Kebijakan</h2>
            <p className="text-muted-foreground">Saran kebijakan berdasarkan analisis data AI</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {policyRecommendations.map((policy, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl">{policy.title}</h3>
                        <Badge
                          variant={policy.priority === 'Tinggi' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          Prioritas {policy.priority}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Dasar Analisis:</p>
                          <p className="text-sm">{policy.basis}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Rekomendasi:</p>
                          <p className="text-sm bg-muted/50 p-3 rounded-lg">{policy.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
