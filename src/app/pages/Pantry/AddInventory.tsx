import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, FileText, ShoppingBag, Plus, ChevronRight, Zap } from 'lucide-react';
import PageHeader from '../../components/core/PageHeader';
import Card from '../../components/core/Card';

export default function AddInventory() {
  const navigate = useNavigate();

  const options = [
    {
      id: 'photo',
      title: 'Scan Kitchen / Fridge',
      desc: 'Point camera at your shelves to auto-detect items',
      icon: Camera,
      route: '/pantry/scan',
      color: 'text-brand',
      bg: 'bg-brand-50',
      border: 'border-brand/20'
    },
    {
      id: 'receipt',
      title: 'Scan Receipt',
      desc: 'Extract items, quantities, and prices automatically',
      icon: FileText,
      route: '/pantry/receipt',
      color: 'text-brand-sage-600',
      bg: 'bg-brand-sage-50',
      border: 'border-brand-sage-200'
    },
    {
      id: 'import',
      title: 'Import Orders',
      desc: 'Connect Blinkit, Zepto, Swiggy Instamart, or BigBasket',
      icon: ShoppingBag,
      route: '/pantry/import',
      color: 'text-brand-sky-600',
      bg: 'bg-brand-sky-50',
      border: 'border-brand-sky-200'
    },
    {
      id: 'manual',
      title: 'Manual Entry',
      desc: 'Type or speak to add items one by one',
      icon: Plus,
      route: '/pantry/manual',
      color: 'text-text-secondary',
      bg: 'bg-bg-sunken',
      border: 'border-border-subtle'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <PageHeader title="Add to Inventory" subtitle="4 ways to restock" backRoute="" />

      <div className="px-5 pt-4 pb-8 flex-1 flex flex-col gap-4">
        {/* Fast Action Banner */}
        <div className="bg-gradient-to-br from-brand-zest-400 to-brand-coral-500 rounded-3xl p-5 text-white flex items-center justify-between mb-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Zap className="w-4 h-4 text-brand-zest-100" />
              <p className="text-xs font-bold text-brand-zest-100 uppercase tracking-widest">Fastest Way</p>
            </div>
            <p className="font-extrabold text-lg">Auto-Sync Accounts</p>
            <p className="text-sm text-white/80 mt-1 max-w-[200px]">Never log groceries manually again.</p>
          </div>
          <button onClick={() => navigate('/pantry/import')} className="bg-white text-brand-coral-600 font-bold px-4 py-2 rounded-xl text-sm shadow-sm active:scale-95 transition-transform">
            Connect
          </button>
        </div>

        {/* Options Grid */}
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => navigate(opt.route)}
              className={`flex items-center gap-4 bg-bg-elevated border border-border-subtle rounded-2xl p-4 text-left hover:border-border-strong hover:shadow-sm active:scale-[0.99] transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${opt.bg} ${opt.border} border`}>
                <opt.icon className={`w-6 h-6 ${opt.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-text-primary text-base mb-0.5">{opt.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{opt.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-text-tertiary group-hover:text-text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
