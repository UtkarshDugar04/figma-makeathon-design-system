import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ShoppingCart, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/core/PageHeader';

export default function ShoppingListGeneration() {
  const navigate = useNavigate();
  const [generating, setGenerating] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/shopping/list');
    }, 3000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-base px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-zest-400 to-brand-coral-500 flex items-center justify-center mb-8 shadow-xl relative">
        <div className="absolute inset-0 border-4 border-white/30 rounded-full border-t-white animate-spin" />
        <ShoppingCart className="w-10 h-10 text-white" />
      </div>
      
      <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mb-4">Drafting Shopping List...</h2>
      
      <div className="space-y-4 w-full max-w-[280px]">
        <div className="flex items-center gap-3 text-sm font-semibold text-text-secondary">
          <CheckCircle2 className="w-4 h-4 text-success" /> Scanning pantry for low stock
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-text-secondary">
          <CheckCircle2 className="w-4 h-4 text-success" /> Cross-referencing meal plan
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-text-tertiary opacity-70">
          <span className="w-4 h-4 rounded-full border-2 border-border-strong animate-pulse" /> Optimizing prices across platforms
        </div>
      </div>
    </div>
  );
}
