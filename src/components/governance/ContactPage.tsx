import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Mail, Phone, MapPin, Users, Github, Send } from 'lucide-react';

const partners = [
  { name: 'Kementerian Kelautan dan Perikanan RI', type: 'Pemerintah' },
  { name: 'Balai Taman Nasional Ujung Kulon', type: 'Konservasi' },
  { name: 'Institut Teknologi Bandung', type: 'Akademik' },
  { name: 'WWF Indonesia', type: 'NGO' },
  { name: 'LIPI - Oseanografi', type: 'Riset' },
  { name: 'Universitas Indonesia', type: 'Akademik' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    institusi: '',
    pesan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera.');
    setFormData({ nama: '', email: '', institusi: '', pesan: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f9ff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Kontak & Kolaborasi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bergabunglah dalam penelitian atau hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        {/* Contact Form & Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Isi formulir di bawah ini untuk menghubungi tim kami
                </p>
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
                    <Label htmlFor="institusi">Institusi / Organisasi</Label>
                    <Input
                      id="institusi"
                      placeholder="Universitas / Lembaga"
                      value={formData.institusi}
                      onChange={(e) => setFormData({ ...formData, institusi: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pesan">Pesan</Label>
                    <Textarea
                      id="pesan"
                      placeholder="Tulis pesan atau pertanyaan Anda..."
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="rounded-xl min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Alamat</h3>
                      <p className="text-sm text-muted-foreground">
                        Marine Smart Governance Center<br />
                        Jl. Raya Labuan – Sumur<br />
                        Taman Nasional Ujung Kulon<br />
                        Pandeglang, Banten 42264<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Telepon</h3>
                      <p className="text-sm text-muted-foreground">
                        +62 253 801234 (Kantor)<br />
                        +62 812 3456 7890 (Hotline)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        governance@marineai.id<br />
                        research@marineai.id<br />
                        support@marineai.id
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2">Open Source</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Kode sumber dan dokumentasi tersedia di GitHub
                      </p>
                      <a
                        href="https://github.com/marine-governance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        github.com/marine-governance
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Mitra Kolaborasi</h2>
            <p className="text-muted-foreground">Kerja sama lintas sektor untuk tata kelola laut berkelanjutan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-1">{partner.name}</h4>
                      <p className="text-xs text-muted-foreground">{partner.type}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Collaboration CTA */}
        <section>
          <Card className="shadow-2xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl mb-4">Bergabung dalam Penelitian</h2>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                  Kami mengundang peneliti, akademisi, dan praktisi untuk berkolaborasi dalam pengembangan sistem 
                  tata kelola laut berbasis AI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="h-12 px-8 bg-white text-primary hover:bg-[#caf0f8] rounded-xl text-lg">
                    Gabung Penelitian
                  </Button>
                  <Button className="h-12 px-8 bg-transparent border-2 border-white hover:bg-white/10 rounded-xl text-lg">
                    Kirim Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
