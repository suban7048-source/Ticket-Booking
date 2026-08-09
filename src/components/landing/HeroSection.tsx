import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, MapPin, ShieldCheck, Star, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setFilters, setPage, setIsAuthModalOpen, setAuthMode } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Downtown / Central');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({
      ...prev,
      searchQuery: searchQuery,
      location: selectedLocation !== 'All Locations' ? selectedLocation : 'All Locations'
    }));
    setPage('discovery');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-brand-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified & Background-Checked Local Professionals</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Find Trusted Local Services, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-sky-300">Anytime.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Book reliable professionals near you for everyday services — quickly, safely, and conveniently.
            </p>

            {/* Interactive Search Card */}
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-elevated text-slate-900 max-w-2xl mx-auto lg:mx-0 border border-slate-100/20 mt-8">
              <form onSubmit={handleHeroSearch} className="flex flex-col sm:flex-row items-center gap-3">
                
                {/* Service Search Input */}
                <div className="flex-1 flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl w-full border border-slate-200/80 focus-within:border-brand-500 focus-within:bg-white transition-all">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="What service do you need? (e.g. Plumbing, Cleaning)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm w-full font-medium placeholder-slate-400 focus:outline-none text-slate-900"
                  />
                </div>

                {/* Location Selector */}
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-2xl sm:w-48 w-full border border-slate-200/80 focus-within:border-brand-500 focus-within:bg-white transition-all">
                  <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="bg-transparent text-xs font-semibold text-slate-800 w-full focus:outline-none cursor-pointer"
                  >
                    <option value="Downtown / Central">Downtown / Central</option>
                    <option value="West End Heights">West End Heights</option>
                    <option value="Eastside Park">Eastside Park</option>
                    <option value="Suburban Hills">Suburban Hills</option>
                    <option value="All Locations">All Locations</option>
                  </select>
                </div>

                {/* Primary CTA */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 shrink-0"
                >
                  Find Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Popular tags below input */}
              <div className="mt-3 px-2 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto pb-1">
                <span className="font-semibold text-slate-400 shrink-0">Popular:</span>
                {['Plumbing', 'Deep Clean', 'Electrician', 'AC Tuneup', 'Handyman'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSearchQuery(tag);
                      setFilters(prev => ({ ...prev, searchQuery: tag }));
                      setPage('discovery');
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors text-[11px] font-medium text-slate-700 shrink-0"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group"
              >
                Are you a skilled professional? 
                <span className="text-brand-400 group-hover:underline font-bold">Become a Provider →</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-800 text-center lg:text-left">
              <div>
                <p className="text-2xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-1">
                  10,000+
                </p>
                <p className="text-xs text-slate-400 font-medium">Verified Local Pros</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-1">
                  4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                </p>
                <p className="text-xs text-slate-400 font-medium">Average Service Rating</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-1">
                  15 Mins
                </p>
                <p className="text-xs text-slate-400 font-medium">Average Response Time</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800/80 group">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
                  alt="Verified Professional"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 bg-emerald-500/90 text-white rounded-full text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ID Verified & Insured
                  </span>
                  <h3 className="text-xl font-bold">Marcus Vance</h3>
                  <p className="text-xs text-slate-300">Master Plumber • 12+ Yrs Experience • 4.9★ (128 reviews)</p>
                </div>
              </div>

              {/* Floating Badge Card 1 */}
              <div className="absolute -top-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3 animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Same-Day Booking</p>
                  <p className="text-[10px] text-slate-500">Available slots today</p>
                </div>
              </div>

              {/* Floating Badge Card 2 */}
              <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-4 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3 animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Guaranteed Work</p>
                  <p className="text-[10px] text-slate-500">100% money-back safety</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
