import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, Plus, AlertTriangle, CheckCircle2, Camera, FileText, 
  Package, ChevronRight, Sparkles, TrendingUp, Filter
} from 'lucide-react';
import Card from '../../components/core/Card';
import Button from '../../components/core/Button';
import Badge from '../../components/core/Badge';
import AICard from '../../components/core/AICard';
import { pantryItems, getCategoryCount } from '../../data/mockData';

const categoryMeta: Record<string, { emoji: string; color: string; bg: string }> = {
  Vegetables: { emoji: '🥦', color: 'text-brand-sage-600', bg: 'bg-brand-sage-50' },
  Protein: { emoji: '🍗', color: 'text-brand-coral-600', bg: 'bg-brand-coral-50' },
  Dairy: { emoji: '🥛', color: 'text-brand-sky-600', bg: 'bg-brand-sky-50' },
  Staples: { emoji: '🌾', color: 'text-brand-zest-600', bg: 'bg-brand-zest-50' },
  Condiments: { emoji: '🫙', color: 'text-brand-plum-600', bg: 'bg-brand-plum-50' },
  Beverages: { emoji: '☕', color: 'text-info', bg: 'bg-info-bg' },
  Snacks: { emoji: '🥜', color: 'text-warning', bg: 'bg-warning-bg' },
};

const expiringCount = pantryItems.filter(i => i.expiryDays <= 3 && i.expiryDays >= 0).length;
const categoryCounts = getCategoryCount();

export default function PantryOverview() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showAddMenu, setShowAddMenu] = useState(false);

  const addOptions = [
    { icon: Camera, label: 'Photo Scan', sub: 'Take a photo of items', route: '/pantry/photo', color: 'text-brand' },
    { icon: FileText, label: 'Receipt Scan', sub: 'Scan grocery receipt', route: '/pantry/receipt', color: 'text-success' },
    { icon: Package, label: 'Import Order', sub: 'BigBasket, Zepto etc.', route: '/pantry/import', color: 'text-info' },
    { icon: Plus, label: 'Add Manually', sub: 'Enter item details', route: '/pantry/add', color: 'text-text-secondary' },
  ];

  return (
    <div className="flex flex-col bg-bg-base min-h-screen">
      {/* ---- HEADER ---- */}
      <div className="px-5 pt-6 pb-4 flex justify-between items-start">
        <div>
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-0.5">Your</p>
          <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">Pantry</h1>
          <p className="text-sm text-text-secondary mt-0.5">{pantryItems.length} items · Household Memory</p>
        </div>
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => navigate('/pantry/list')}
            className="w-10 h-10 rounded-full bg-bg-sunken flex items-center justify-center text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-all"
          >
            <Filter className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-sm hover:bg-brand-hover transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ---- ADD MENU DROPDOWN ---- */}
      {showAddMenu && (
        <div className="mx-5 mb-4">
          <Card padding="sm" className="border-border-strong shadow-lg">
            <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest mb-2 px-1">Add Items</p>
            <div className="grid grid-cols-2 gap-2">
              {addOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => { setShowAddMenu(false); navigate(opt.route); }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-bg-sunken transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-bg-sunken flex items-center justify-center flex-shrink-0">
                    <opt.icon className={`w-4 h-4 ${opt.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{opt.label}</p>
                    <p className="text-[10px] text-text-tertiary">{opt.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ---- SEARCH ---- */}
      <div className="px-5 mb-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-tertiary pointer-events-none" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search ingredients..."
            className="w-full bg-bg-sunken border border-border-subtle rounded-2xl py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-muted focus:ring-2 focus:ring-brand/10 transition-all font-medium"
          />
        </div>
      </div>

      {/* ---- INVENTORY HEALTH CARDS ---- */}
      <div className="px-5 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/pantry/list')}
            className="bg-success-bg border border-success/20 rounded-2xl p-4 text-left hover:shadow-sm active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span className="text-[10px] font-bold text-success uppercase tracking-widest">Confidence</span>
            </div>
            <p className="text-2xl font-extrabold text-text-primary">High</p>
            <p className="text-xs text-text-tertiary font-medium mt-0.5">Scanned 2h ago</p>
          </button>
          <button
            onClick={() => navigate('/pantry/expiry')}
            className="bg-warning-bg border border-warning/20 rounded-2xl p-4 text-left hover:shadow-sm active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <span className="text-[10px] font-bold text-warning uppercase tracking-widest">Expiring</span>
            </div>
            <p className="text-2xl font-extrabold text-warning">{expiringCount} Items</p>
            <p className="text-xs text-warning/70 font-bold mt-0.5">In next 3 days</p>
          </button>
        </div>
      </div>

      {/* ---- AI INSIGHT ---- */}
      <div className="px-5 mb-5">
        <AICard title="Pantry Intelligence">
          You have enough ingredients to make <strong className="text-brand-plum-800">7 full meals</strong> this week.
          Spinach and chicken expire tomorrow — cook{' '}
          <button onClick={() => navigate('/home/recommendation')} className="text-brand-plum-800 font-bold underline underline-offset-2">
            Lemon Herb Chicken
          </button>{' '}
          tonight to prevent 400g of waste.
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-brand-plum-100">
            <TrendingUp className="w-3.5 h-3.5 text-brand-plum-500" />
            <span className="text-[11px] text-brand-plum-600 font-semibold">
              Pantry health: 92% · 58 items tracked
            </span>
          </div>
        </AICard>
      </div>

      {/* ---- CATEGORIES ---- */}
      <div className="px-5 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-extrabold text-text-primary">Categories</h2>
          <button
            onClick={() => navigate('/pantry/list')}
            className="text-xs font-bold text-brand flex items-center gap-0.5 hover:underline"
          >
            All items <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {Object.entries(categoryMeta).map(([cat, meta]) => (
            <button
              key={cat}
              onClick={() => navigate('/pantry/category', { state: { category: cat } })}
              className={`${meta.bg} rounded-2xl p-3.5 flex items-center gap-3 hover:shadow-sm active:scale-[0.98] transition-all text-left border border-transparent hover:border-border-subtle`}
            >
              <span className="text-2xl">{meta.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className={`font-bold text-sm ${meta.color}`}>{cat}</p>
                <p className="text-xs text-text-tertiary font-medium">{categoryCounts[cat] || 0} items</p>
              </div>
              <span className="w-6 h-6 rounded-full bg-white/60 flex items-center justify-center">
                <ChevronRight className="w-3 h-3 text-text-tertiary" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ---- QUICK EXPIRY PREVIEW ---- */}
      <div className="px-5 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-extrabold text-text-primary">Expiring Soon</h2>
          <button
            onClick={() => navigate('/pantry/expiry')}
            className="text-xs font-bold text-brand flex items-center gap-0.5 hover:underline"
          >
            See timeline <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {pantryItems
            .filter(i => i.expiryDays <= 5 && i.expiryDays >= 0)
            .slice(0, 4)
            .map(item => (
              <button
                key={item.id}
                onClick={() => navigate('/pantry/item', { state: { item } })}
                className="flex items-center gap-3 bg-bg-elevated border border-border-subtle rounded-xl px-3.5 py-2.5 hover:border-border-strong hover:shadow-sm active:scale-[0.99] transition-all text-left"
              >
                <span className="text-xl">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-text-primary text-sm">{item.name}</p>
                  <p className="text-xs text-text-tertiary">{item.quantity} {item.unit}</p>
                </div>
                <Badge
                  variant={item.expiryDays <= 1 ? 'critical' : item.expiryDays <= 3 ? 'expiring' : 'neutral'}
                  size="xs"
                >
                  {item.expiryDays === 0 ? 'Today' : item.expiryDays === 1 ? 'Tomorrow' : `${item.expiryDays}d`}
                </Badge>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
