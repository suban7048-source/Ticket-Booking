import React from 'react';
import { useApp } from '../../context/AppContext';
import { Home, Search, Calendar, MessageSquare, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { page, setPage, role, setIsAuthModalOpen, setAuthMode, unreadNotificationCount } = useApp();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-lg">
      <button
        onClick={() => setPage('landing')}
        className={`flex flex-col items-center gap-1 p-1.5 rounded-xl transition-colors ${
          page === 'landing' ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px]">Home</span>
      </button>

      <button
        onClick={() => setPage('discovery')}
        className={`flex flex-col items-center gap-1 p-1.5 rounded-xl transition-colors ${
          page === 'discovery' ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Search className="w-5 h-5" />
        <span className="text-[10px]">Search</span>
      </button>

      <button
        onClick={() => setPage(role === 'customer' ? 'customer-dashboard' : 'provider-dashboard')}
        className={`flex flex-col items-center gap-1 p-1.5 rounded-xl transition-colors relative ${
          page === 'customer-dashboard' || page === 'provider-dashboard' ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[10px]">Bookings</span>
      </button>

      <button
        onClick={() => {
          setPage(role === 'customer' ? 'customer-dashboard' : 'provider-dashboard');
        }}
        className="flex flex-col items-center gap-1 p-1.5 rounded-xl text-slate-500 hover:text-slate-800 transition-colors relative"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-[10px]">Messages</span>
      </button>

      <button
        onClick={() => {
          setAuthMode('login');
          setIsAuthModalOpen(true);
        }}
        className="flex flex-col items-center gap-1 p-1.5 rounded-xl text-slate-500 hover:text-slate-800 transition-colors"
      >
        <User className="w-5 h-5" />
        <span className="text-[10px]">Profile</span>
      </button>
    </div>
  );
};
