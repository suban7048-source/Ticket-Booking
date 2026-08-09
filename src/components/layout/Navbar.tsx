import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { NotificationCenter } from '../common/NotificationCenter';
import { 
  Wrench, Search, User, ShieldCheck, 
  ChevronDown, LayoutDashboard, UserCheck, Menu, X, ArrowRight, Sparkles 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    role, setRole, 
    page, setPage, 
    setIsAuthModalOpen, 
    setAuthMode,
    filters, setFilters, openDiscoveryWithCategory
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');

  const handleNavSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearch.trim()) {
      setFilters(prev => ({ ...prev, searchQuery: navSearch }));
      setPage('discovery');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-6 xl:gap-8 shrink-0">
            <button 
              onClick={() => setPage('landing')} 
              className="flex items-center gap-2.5 group text-left focus:outline-none shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="hidden min-[380px]:block">
                <span className="font-extrabold text-xl text-slate-900 tracking-tight flex items-center gap-1 leading-none">
                  Local<span className="text-brand-600">Fix</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                </span>
                <span className="text-[10px] text-slate-600 font-extrabold tracking-wider block mt-0.5 uppercase">
                  Service Platform
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links - Dark High Contrast Text */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-extrabold text-slate-900">
              <button 
                onClick={() => setPage('discovery')}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  page === 'discovery' 
                    ? 'text-brand-600 bg-brand-50 font-black' 
                    : 'hover:text-brand-600 hover:bg-slate-100'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => setPage('discovery')}
                className="px-3.5 py-2 rounded-xl text-slate-900 hover:text-brand-600 hover:bg-slate-100 transition-all whitespace-nowrap"
              >
                Find Providers
              </button>
              <button 
                onClick={() => {
                  setPage('landing');
                  setTimeout(() => {
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-3.5 py-2 rounded-xl text-slate-900 hover:text-brand-600 hover:bg-slate-100 transition-all whitespace-nowrap"
              >
                How It Works
              </button>
              <button 
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
                className="px-3.5 py-2 rounded-xl text-brand-700 bg-brand-50 border border-brand-200/80 hover:bg-brand-100 transition-all whitespace-nowrap font-extrabold"
              >
                Become a Provider
              </button>
            </nav>
          </div>

          {/* Center Search Bar (Desktop XL) */}
          <form onSubmit={handleNavSearchSubmit} className="hidden xl:flex items-center relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-600 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search plumbing, cleaning..."
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              className="w-full bg-slate-100 border border-slate-300 focus:border-brand-600 focus:bg-white text-xs font-bold rounded-full py-2.5 pl-9 pr-4 text-slate-900 placeholder-slate-500 focus:outline-none transition-all shadow-2xs"
            />
          </form>

          {/* Right Actions & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Role Switcher Pill */}
            <div className="hidden sm:flex items-center bg-slate-200/70 p-1 rounded-xl border border-slate-300 text-xs font-bold">
              <button
                onClick={() => {
                  setRole('customer');
                  setPage('customer-dashboard');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  role === 'customer' 
                    ? 'bg-white text-brand-700 shadow-xs font-black' 
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <User className="w-3.5 h-3.5 text-brand-600" /> Customer
              </button>
              <button
                onClick={() => {
                  setRole('provider');
                  setPage('provider-dashboard');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  role === 'provider' 
                    ? 'bg-slate-900 text-white shadow-xs font-black' 
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" /> Provider View
              </button>
            </div>

            {/* Notification Bell */}
            <NotificationCenter />

            {/* User Dashboard & Distinct High-Contrast Auth Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(role === 'customer' ? 'customer-dashboard' : 'provider-dashboard')}
                className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all border whitespace-nowrap ${
                  page === 'customer-dashboard' || page === 'provider-dashboard'
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100 shadow-2xs'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-brand-600" />
                Dashboard
              </button>

              {/* Distinct High-Visibility Log In Button */}
              <button
                onClick={() => {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-black transition-all shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 text-white" />
                Log In
              </button>

              {/* Get Started Button */}
              <button
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
                className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl text-xs font-black transition-all shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap"
              >
                Get Started <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl focus:outline-none hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-fade-in shadow-lg">
          <form onSubmit={handleNavSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search services or providers..."
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-xl text-sm py-2.5 pl-9 pr-4 text-slate-800 focus:outline-none"
            />
          </form>

          {/* Role selector in mobile drawer */}
          <div className="bg-slate-100 p-1.5 rounded-xl flex items-center justify-between text-xs font-bold">
            <button
              onClick={() => {
                setRole('customer');
                setPage('customer-dashboard');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-lg text-center ${role === 'customer' ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-500'}`}
            >
              Customer Mode
            </button>
            <button
              onClick={() => {
                setRole('provider');
                setPage('provider-dashboard');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-lg text-center ${role === 'provider' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500'}`}
            >
              Provider Mode
            </button>
          </div>

          <nav className="flex flex-col space-y-2 font-medium text-sm text-slate-700">
            <button
              onClick={() => { setPage('discovery'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Find Services & Professionals
            </button>
            <button
              onClick={() => { setPage(role === 'customer' ? 'customer-dashboard' : 'provider-dashboard'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 font-bold text-brand-600"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => {
                setPage('landing');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              How It Works
            </button>
            <button
              onClick={() => {
                setAuthMode('signup');
                setIsAuthModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-500"
            >
              Become a Service Provider
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => { setAuthMode('login'); setIsAuthModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-extrabold text-sm text-center shadow-sm flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" /> Log In / Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
