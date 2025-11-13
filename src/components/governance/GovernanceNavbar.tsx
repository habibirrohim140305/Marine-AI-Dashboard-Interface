import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import logo from '../../../MarInsight.png';

interface GovernanceNavbarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

export function GovernanceNavbar({ currentPage, onNavigate }: GovernanceNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'data-analisis', label: 'Data & Analisis' },
    { id: 'regulasi', label: 'Regulasi' },
    { id: 'laporan', label: 'Laporan' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-3 group"
          >
            <img src="MarInsight2.png" alt="Smart Marine Governance Logo" className="h-10 w-auto" />
            <div className="flex items-center gap-3">
              <img src="MarInsight.png" alt="MarInsight Logo" className="h-10 w-auto" />
              <div>
                <h2 className="text-lg text-primary leading-tight">MarInsight Dashboard</h2>
                <p className="text-xs text-muted-foreground">Ujung Kulon, Banten</p>
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  currentPage === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('login')}
              className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl"
            >
              Masuk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl ${
                  currentPage === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => onNavigate('login')}
              className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] rounded-xl"
            >
              Masuk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
