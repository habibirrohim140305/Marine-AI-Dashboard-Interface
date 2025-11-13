import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Shield, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6] via-[#00b4d8] to-[#48cae4]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md relative z-10 shadow-2xl">
        <CardHeader className="space-y-4 pb-8">
          <div className="flex justify-center">
            <img src="MarInsight.png" alt="Smart Marine Governance Logo" className="h-20 w-auto" />
          </div>
          <CardTitle className="text-center text-2xl">Smart Marine Governance</CardTitle>
          <CardDescription className="text-center">
            Selamat datang di Smart Marine Governance. Silakan masuk untuk melanjutkan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl"
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-primary hover:underline">
                Lupa password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl"
            >
              Masuk ke Smart Marine Governance
            </Button>
          </form>
          
          <div className="mt-6">
            <Button
              onClick={onBack}
              variant="outline"
              className="w-full h-12 rounded-xl flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Demo: admin / password
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
