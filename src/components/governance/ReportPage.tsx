import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';
import { Badge } from '../ui/badge';

const reports = [
  {
    title: 'Laporan Bulanan - November 2024',
    type: 'Bulanan',
    date: '2024-11-30',
    size: '2.4 MB',
    format: 'PDF',
    summary: 'Analisis populasi ikan, aktivitas kapal, dan tren ekosistem laut bulan November',
  },
  {
    title: 'Laporan Triwulan Q3 2024',
    type: 'Triwulanan',
    date: '2024-09-30',
    size: '5.8 MB',
    format: 'PDF',
    summary: 'Ringkasan komprehensif data 3 bulan terakhir dengan rekomendasi kebijakan',
  },
  {
    title: 'Data Aktivitas Kapal - November 2024',
    type: 'Data CSV',
    date: '2024-11-30',
    size: '1.2 MB',
    format: 'CSV',
    summary: 'Raw data aktivitas kapal yang terdeteksi selama bulan November',
  },
  {
    title: 'Prediksi AI - Desember 2024',
    type: 'Prediksi',
    date: '2024-12-01',
    size: '0.8 MB',
    format: 'PDF',
    summary: 'Hasil prediksi populasi ikan dan curah hujan untuk bulan Desember',
  },
];

const publications = [
  {
    title: 'Machine Learning untuk Prediksi Stok Ikan di Perairan Ujung Kulon',
    authors: 'Dr. Ahmad Susanto, Ir. Siti Nurhaliza',
    journal: 'Journal of Marine Science and Technology',
    year: '2024',
    doi: '10.1234/jmst.2024.001',
  },
  {
    title: 'Analisis Spasial Aktivitas Illegal Fishing Menggunakan CNN dan Satelit Imagery',
    authors: 'Budi Hartono, Dr. Lestari Putri',
    journal: 'Indonesian Journal of Fisheries',
    year: '2024',
    doi: '10.5678/ijf.2024.042',
  },
  {
    title: 'Penerapan LSTM untuk Forecasting Curah Hujan Berbasis Data Oceanografi',
    authors: 'Dr. Ahmad Susanto, Team Marine AI',
    journal: 'International Conference on AI & Ocean',
    year: '2023',
    doi: '10.9101/icaio.2023.156',
  },
];

const monthlyStats = [
  { month: 'Juli', reports: 3, downloads: 127 },
  { month: 'Agustus', reports: 4, downloads: 145 },
  { month: 'September', reports: 5, downloads: 168 },
  { month: 'Oktober', reports: 3, downloads: 132 },
  { month: 'November', reports: 4, downloads: 159 },
];

export function ReportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f9ff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Laporan & Publikasi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Akses laporan berkala, publikasi ilmiah, dan data mentah untuk analisis lanjutan
          </p>
        </div>

        {/* Stats Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2 border-[#00b4d8]/30">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl mb-1">32</h3>
                <p className="text-sm text-muted-foreground">Total Laporan</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#00b4d8]/30">
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl mb-1">1,247</h3>
                <p className="text-sm text-muted-foreground">Total Unduhan</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#00b4d8]/30">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl mb-1">12</h3>
                <p className="text-sm text-muted-foreground">Publikasi Ilmiah</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#00b4d8]/30">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl mb-1">Nov 2024</h3>
                <p className="text-sm text-muted-foreground">Laporan Terbaru</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Download Reports */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl mb-4">Unduh Laporan</h2>
            <p className="text-muted-foreground">Laporan berkala dan dataset untuk analisis</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {reports.map((report, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="text-lg">{report.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{report.summary}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="outline" className="text-xs">{report.type}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {report.date}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {report.size} • {report.format}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl whitespace-nowrap">
                      <Download className="w-4 h-4 mr-2" />
                      Unduh {report.format}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl mb-4">Publikasi Ilmiah</h2>
            <p className="text-muted-foreground">Hasil penelitian yang telah dipublikasikan</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-xs text-muted-foreground">
                      <strong>{pub.journal}</strong> • {pub.year}
                    </span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      DOI: {pub.doi}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Monthly Summary */}
        <section>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Ringkasan Bulanan</CardTitle>
              <p className="text-sm text-muted-foreground">Aktivitas laporan 5 bulan terakhir</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {monthlyStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{stat.month}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Laporan</p>
                        <p>{stat.reports}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Unduhan</p>
                        <p>{stat.downloads}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
