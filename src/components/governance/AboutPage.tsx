import { Card, CardContent } from '../ui/card';
import { Target, Users, Shield, Brain, BarChart3, FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f9ff]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Tentang Smart Marine Governance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistem terpadu untuk pemantauan, analisis, dan dukungan kebijakan pengelolaan laut berkelanjutan
          </p>
        </div>

        {/* Problem Background */}
        <section className="mb-16">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl mb-6">Latar Belakang Masalah</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Perairan Ujung Kulon menghadapi tantangan kompleks dalam pengelolaan sumber daya laut, termasuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Penurunan populasi ikan akibat overfishing</li>
                      <li>Aktivitas illegal fishing yang sulit dipantau</li>
                      <li>Kurangnya data real-time untuk pengambilan keputusan</li>
                      <li>Kesulitan dalam penegakan regulasi maritim</li>
                      <li>Dampak perubahan iklim terhadap ekosistem laut</li>
                    </ul>
                    <p>
                      Smart Marine Governance hadir sebagai solusi terintegrasi yang menggabungkan teknologi AI, 
                      Business Intelligence, dan sistem pemantauan real-time untuk mendukung pengambilan keputusan yang lebih baik dalam pengelolaan sumber daya laut.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] p-8 lg:p-12 flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1670383050616-682df7d57b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZ292ZXJubWVudCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyODg4ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Team Meeting"
                    className="rounded-xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI & BI Integration */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Integrasi AI & Business Intelligence</h2>
            <p className="text-muted-foreground">Teknologi canggih untuk analisis dan prediksi akurat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#00b4d8]/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">Artificial Intelligence</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Prediksi populasi ikan menggunakan LSTM Neural Networks</li>
                  <li>• Deteksi anomali aktivitas kapal dengan Random Forest</li>
                  <li>• Analisis citra satelit dengan CNN untuk pemetaan ekosistem</li>
                  <li>• Natural Language Processing untuk analisis regulasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8]/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">Business Intelligence</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Dashboard interaktif untuk monitoring real-time</li>
                  <li>• Analisis tren jangka panjang dengan data historis</li>
                  <li>• Visualisasi spasial untuk pemetaan zona maritim</li>
                  <li>• Laporan otomatis untuk pengambilan keputusan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Tujuan Sistem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#00b4d8]/20 hover:shadow-xl hover:-translate-y-2 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3">Prediksi Populasi Ikan</h3>
                <p className="text-sm text-muted-foreground">
                  Menggunakan machine learning untuk memprediksi stok ikan dan memberikan rekomendasi kuota tangkapan berkelanjutan
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8]/20 hover:shadow-xl hover:-translate-y-2 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3">Analitik Aktivitas Kapal</h3>
                <p className="text-sm text-muted-foreground">
                  Pemantauan real-time pergerakan kapal untuk mendeteksi pola mencurigakan dan potensi illegal fishing
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00b4d8]/20 hover:shadow-xl hover:-translate-y-2 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#48cae4] to-[#90e0ef] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3">Dasar Hukum & Kebijakan</h3>
                <p className="text-sm text-muted-foreground">
                  Integrasi dengan regulasi UNCLOS dan Permen KKP untuk memastikan kepatuhan hukum dan rekomendasi kebijakan
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team & Partners */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Tim & Mitra Kolaborasi</h2>
            <p className="text-muted-foreground">Kerja sama lintas sektor untuk tata kelola laut yang berkelanjutan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">Tim Inti</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dr. Ahmad Susanto - Data Scientist & Marine Ecologist</li>
                      <li>• Ir. Siti Nurhaliza, M.Sc - GIS & Remote Sensing Specialist</li>
                      <li>• Budi Hartono, S.T., M.T. - Software Engineer</li>
                      <li>• Dr. Lestari Putri - Maritime Law Expert</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">Mitra Strategis</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Kementerian Kelautan dan Perikanan RI</li>
                      <li>• Balai Taman Nasional Ujung Kulon</li>
                      <li>• Institut Teknologi Bandung (ITB)</li>
                      <li>• World Wildlife Fund (WWF) Indonesia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
