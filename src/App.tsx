import { useState } from 'react';
import { GovernanceNavbar } from './components/governance/GovernanceNavbar';
import { GovernanceHome } from './components/governance/GovernanceHome';
import { AboutPage } from './components/governance/AboutPage';
import { AnalyticsModelPage } from './components/governance/AnalyticsModelPage';
import { RegulationPage } from './components/governance/RegulationPage';
import { ReportPage } from './components/governance/ReportPage';
import { ContactPage } from './components/governance/ContactPage';
import { LoginPage } from './components/governance/LoginPage';
import { DashboardGovernance } from './components/governance/DashboardGovernance';
import { GovernanceSidebar } from './components/governance/GovernanceSidebar';
import { GovernanceTopbar } from './components/governance/GovernanceTopbar';

type PublicPage = 'beranda' | 'tentang' | 'data-analisis' | 'peta' | 'regulasi' | 'laporan' | 'kontak' | 'login';
type DashboardPage = 'dashboard' | 'prediksi' | 'ai-model' | 'regulasi-dashboard' | 'laporan-dashboard' | 'pengaturan';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPublicPage, setCurrentPublicPage] = useState<PublicPage>('beranda');
  const [currentDashboardPage, setCurrentDashboardPage] = useState<DashboardPage>('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentDashboardPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPublicPage('beranda');
  };

  const handlePublicNavigate = (page: PublicPage) => {
    setCurrentPublicPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDashboardNavigate = (page: string) => {
    if (page === 'logout') {
      handleLogout();
    } else {
      setCurrentDashboardPage(page as DashboardPage);
    }
  };

  const getDashboardTitle = () => {
    const titles: Record<DashboardPage, string> = {
      'dashboard': 'Dashboard Utama',
      'prediksi': 'Prediksi Populasi & Tangkapan',
      'ai-model': 'Model AI & Analytics',
      'regulasi-dashboard': 'Manajemen Regulasi',
      'laporan-dashboard': 'Laporan & Publikasi',
      'pengaturan': 'Pengaturan Sistem',
    };
    return titles[currentDashboardPage].replace('Dashboard', 'MarInsight');
  };

  // Public Pages
  if (!isLoggedIn) {
    if (currentPublicPage === 'login') {
      return <LoginPage onLogin={handleLogin} onBack={() => setCurrentPublicPage('beranda')} />;
    }

    return (
      <>
        <GovernanceNavbar 
          currentPage={currentPublicPage} 
          onNavigate={handlePublicNavigate}
        />
        <div className="pt-16">
          {currentPublicPage === 'beranda' && <GovernanceHome onNavigate={handlePublicNavigate} />}
          {currentPublicPage === 'tentang' && <AboutPage />}
          {currentPublicPage === 'data-analisis' && <AnalyticsModelPage />}
          {currentPublicPage === 'peta' && (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl mb-4">Peta Interaktif</h2>
                <p className="text-muted-foreground">Silakan login untuk mengakses peta lengkap</p>
              </div>
            </div>
          )}
          {currentPublicPage === 'regulasi' && <RegulationPage />}
          {currentPublicPage === 'laporan' && <ReportPage />}
          {currentPublicPage === 'kontak' && <ContactPage />}
        </div>
      </>
    );
  }

  // Dashboard Pages (after login)
  return (
    <div className="min-h-screen bg-background">
      <GovernanceSidebar currentPage={currentDashboardPage} onNavigate={handleDashboardNavigate} />
      <div className="md:ml-64">
        <GovernanceTopbar title={getDashboardTitle()} />
        <main className="mt-16 p-6">
          {currentDashboardPage === 'dashboard' && <DashboardGovernance />}
          {currentDashboardPage === 'prediksi' && (
            <div className="text-center py-20">
              <h2 className="text-2xl mb-4">Halaman Prediksi</h2>
              <p className="text-muted-foreground">Fitur prediksi dalam pengembangan</p>
            </div>
          )}
          {currentDashboardPage === 'ai-model' && <AnalyticsModelPage />}
          {currentDashboardPage === 'regulasi-dashboard' && <RegulationPage />}
          {currentDashboardPage === 'laporan-dashboard' && <ReportPage />}
          {currentDashboardPage === 'pengaturan' && (
            <div className="text-center py-20">
              <h2 className="text-2xl mb-4">Pengaturan Sistem</h2>
              <p className="text-muted-foreground">Fitur pengaturan dalam pengembangan</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
