import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Thermometer,
  Droplets,
  CloudRain,
  Target,
  Eye,
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  TrendingUp,
  Waves,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const sparklineData = [
  { value: 28 },
  { value: 29 },
  { value: 27 },
  { value: 30 },
  { value: 28 },
  { value: 31 },
  { value: 29 },
];

interface PublicHomePageProps {
  onLoginClick: () => void;
}

export function PublicHomePage({ onLoginClick }: PublicHomePageProps) {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({ nama: '', email: '', pesan: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646307343632-0a35b2ed681f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJheSUyMGJlYWNoJTIwYWVyaWFsfGVufDF8fHx8MTc2Mjg4MzQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ujung Kulon Ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0077b6]/80 via-[#00b4d8]/70 to-[#0077b6]/80"></div>
        </div>

        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                "
              />
            </path>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Sistem Pemantauan Laut <br />
            <span className="text-[#90e0ef]">Ujung Kulon</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#caf0f8]">
            Pantau kondisi laut, suhu permukaan, dan prediksi curah hujan secara real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.getElementById('data-laut')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-14 px-8 bg-white text-primary hover:bg-[#caf0f8] rounded-xl shadow-2xl text-lg"
            >
              Lihat Data Laut
            </Button>
            <Button
              onClick={onLoginClick}
              className="h-14 px-8 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:from-[#0096c7] hover:to-[#005f8e] rounded-xl shadow-2xl text-lg"
            >
              Masuk Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Tentang Marine AI Ujung Kulon</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistem pemantauan laut berbasis kecerdasan buatan untuk wilayah pesisir Banten
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573483387033-3121eaa077d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjByZXNlYXJjaCUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjI4ODM0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tim Peneliti"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Marine AI Ujung Kulon adalah platform inovatif yang menggabungkan teknologi kecerdasan buatan dengan
                pemantauan ekosistem laut di Taman Nasional Ujung Kulon, Banten. Sistem ini dirancang untuk mendukung
                konservasi, penelitian, dan prediksi kondisi laut secara real-time.
              </p>

              {/* Misi Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div>
        </div>
      </section>

      {/* Data Laut Section */}
      <section id="data-laut" className="py-20 bg-gradient-to-br from-[#caf0f8] to-[#90e0ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Data Laut Real-Time</h2>
            <p className="text-xl text-muted-foreground">Parameter oceanografi terkini dari perairan Ujung Kulon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Temperature Card */}
            <Card className="border-2 border-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Suhu Permukaan Laut</CardTitle>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center shadow-lg">
                    <Thermometer className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl text-primary">29.2</h3>
                    <span className="text-xl text-muted-foreground">°C</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+1.8% vs minggu lalu</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={sparklineData}>
                    <Line type="monotone" dataKey="value" stroke="#0077b6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Chlorophyll Card */}
            <Card className="border-2 border-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Klorofil (CHL)</CardTitle>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#48cae4] flex items-center justify-center shadow-lg">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl text-primary">2.8</h3>
                    <span className="text-xl text-muted-foreground">mg/m³</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Kondisi normal</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={sparklineData}>
                    <Line type="monotone" dataKey="value" stroke="#00b4d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Rainfall Card */}
            <Card className="border-2 border-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Prediksi Curah Hujan</CardTitle>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#48cae4] to-[#90e0ef] flex items-center justify-center shadow-lg">
                    <CloudRain className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl text-primary">78</h3>
                    <span className="text-xl text-muted-foreground">mm</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Prediksi 7 hari</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={sparklineData}>
                    <Line type="monotone" dataKey="value" stroke="#48cae4" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={onLoginClick}
              className="h-14 px-8 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl shadow-2xl text-lg"
            >
              Lihat Detail di Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-20 bg-[#caf0f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Hubungi Kami</h2>
            <p className="text-xl text-muted-foreground">
              Ada pertanyaan? Kami siap membantu Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input
                      id="nama"
                      placeholder="Masukkan nama Anda"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pesan">Pesan</Label>
                    <Textarea
                      id="pesan"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="rounded-xl min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl shadow-lg"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2">Alamat</h4>
                      <p className="text-muted-foreground">
                        Jl. Raya Labuan – Sumur<br />
                        Taman Nasional Ujung Kulon<br />
                        Pandeglang, Banten 42264
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2">Telepon</h4>
                      <p className="text-muted-foreground">+62 253 801234</p>
                      <p className="text-muted-foreground">+62 812 3456 7890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2">Email</h4>
                      <p className="text-muted-foreground">info@marineai-ujungkulon.id</p>
                      <p className="text-muted-foreground">support@marineai-ujungkulon.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#023e8a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Column 1: Navigasi Cepat */}
            <div>
              <h3 className="text-xl mb-4">Navigasi Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => document.getElementById('beranda')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#90e0ef] transition-colors">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#90e0ef] transition-colors">
                    Tentang
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('data-laut')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#90e0ef] transition-colors">
                    Data Laut
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Kontak */}
            <div>
              <h3 className="text-xl mb-4">Kontak</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 253 801234</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@marineai-ujungkulon.id</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ujung Kulon, Banten</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Sosial Media */}
            <div>
              <h3 className="text-xl mb-4">Sosial Media</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p>© 2025 Marine AI Ujung Kulon – Dikelola oleh Sistem Informasi Kelautan</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}