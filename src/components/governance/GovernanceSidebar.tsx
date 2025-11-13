import { LayoutDashboard, LineChart, Brain, Map, Scale, FileText, Settings, LogOut, Shield, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface GovernanceSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'prediksi', icon: LineChart, label: 'Prediksi' },
  { id: 'ai-model', icon: Brain, label: 'Model AI' },
  { id: 'peta-dashboard', icon: Map, label: 'Peta' },
  { id: 'regulasi-dashboard', icon: Scale, label: 'Regulasi' },
  { id: 'laporan-dashboard', icon: FileText, label: 'Laporan' },
  { id: 'pengaturan', icon: Settings, label: 'Pengaturan' },
];

export function GovernanceSidebar({ currentPage, onNavigate }: GovernanceSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-20 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <img src="MarInsight2.png" alt="Smart Marine Governance Logo" className="h-10 w-auto" />
            <div>
              <h2 className="text-sidebar-foreground text-sm leading-tight">Smart Marine</h2>
              <p className="text-xs text-sidebar-foreground/70">Governance</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#0077b6] flex items-center justify-center shadow-lg mx-auto">
            <Shield className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="text-sm">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <button
          onClick={() => onNavigate('logout')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
          title={collapsed ? 'Keluar' : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Keluar</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center px-4 py-2 rounded-xl bg-sidebar-accent/30 text-sidebar-foreground/70 hover:bg-sidebar-accent/50 transition-all duration-200"
        >
          <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </aside>
  );
}
