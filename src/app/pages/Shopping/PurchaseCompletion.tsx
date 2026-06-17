import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Check, Plus } from 'lucide-react';
import Button from '../../components/core/Button';

export default function PurchaseCompletion() {
  const navigate = useNavigate();
  const [synced, setSynced] = useState(false);

  const handleSync = () => {
    setSynced(true);
    setTimeout(() => {
      navigate('/home');
    }, 2500);
  };

  if (synced) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-bg-base px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-success-bg flex items-center justify-center mb-5 border-4 border-white shadow-sm">
          <Check className="w-10 h-10 text-success" />
        </div>
        <h2 className="text-2xl font-extrabold text-text-primary mb-2">Inventory Updated!</h2>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          14 items successfully added to your pantry. AI has predicted their expiry dates.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-bg-base px-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center pt-10">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center z-10 relative">
            <ShoppingBag className="w-10 h-10 text-brand" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-success text-white flex items-center justify-center border-4 border-bg-base z-20 shadow-sm">
            <Check className="w-5 h-5" />
          </div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mb-3">Order Placed</h1>
        <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-[280px]">
          Your grocery order has been successfully placed on Zepto. It will arrive in 10 minutes.
        </p>

        <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-5 w-full">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-3">Next Step</p>
          <div className="flex gap-4 items-center mb-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
              <Plus className="w-5 h-5 text-brand" />
            </div>
            <div>
              <p className="font-extrabold text-text-primary text-sm">Sync to Inventory</p>
              <p className="text-xs text-text-secondary mt-0.5">Auto-add all 14 items to your pantry</p>
            </div>
          </div>
          <Button fullWidth onClick={handleSync}>
            Sync 14 Items Now
          </Button>
        </div>
      </div>
      
      <div className="pb-10 pt-4">
        <Button variant="ghost" fullWidth onClick={() => navigate('/home')}>
          Skip for now
        </Button>
      </div>
    </div>
  );
}
