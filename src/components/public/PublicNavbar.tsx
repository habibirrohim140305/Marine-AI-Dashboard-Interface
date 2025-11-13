import { useState, useEffect } from 'react';
import { Waves, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

interface PublicNavbarProps {
  onNavigate: (section: string) => void;
  onLoginClick: () => void;
}

export function PublicNavbar({ onNavigate, onLoginClick }: PublicNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'data-laut', label: 'Data Laut' }
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8] flex items-center justify-center shadow-lg">
              <Waves className="w-7 h-7 text-white" />
            </div>
            <div className="hidden md:block">
              <h2 className="text-xl text-primary">Marine AI</h2>
              <p className="text-xs text-muted-foreground">Ujung Kulon</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button
              onClick={onLoginClick}
              className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl shadow-lg"
            >
              Masuk Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
                className="block w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onLoginClick}
              className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#005f8e] hover:to-[#0096c7] rounded-xl shadow-lg"
            >
              Masuk Dashboard
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
