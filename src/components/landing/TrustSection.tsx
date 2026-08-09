import React from 'react';
import { ShieldCheck, UserCheck, DollarSign, Headset, Award, Lock } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustFeatures = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-600" />,
      title: 'Background Checked Professionals',
      desc: 'Every provider undergoes criminal record checks, license verification, and identity audits before listing.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-600" />,
      title: 'Upfront & Transparent Pricing',
      desc: 'No hidden surcharges or surprise costs. See fixed or hourly rates clearly before you confirm.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: '100% Quality Satisfaction Guarantee',
      desc: 'If the completed work does not meet professional standards, we step in to make it right.'
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-600" />,
      title: 'Secure & Escrow-style Booking',
      desc: 'Payments are held securely and released only after the service is marked complete to your satisfaction.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" /> Built On Trust & Reliability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Safety & Peace of Mind Come First
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            LocalFix sets the industry standard for home service safety, provider verification, and booking protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/60 hover:border-brand-500/50 transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-bold text-base text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
