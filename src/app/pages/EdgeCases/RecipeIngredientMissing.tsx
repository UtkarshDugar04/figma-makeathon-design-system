import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, ShoppingCart, Repeat, X } from 'lucide-react';
import PageHeader from '../../components/core/PageHeader';
import Button from '../../components/core/Button';

export default function RecipeIngredientMissing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-bg-sunken transition-colors">
          <X className="w-6 h-6 text-text-secondary" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-extrabold text-text-primary">Can't cook this yet</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center mb-6">
          <ChefHat className="w-10 h-10 text-brand" />
        </div>
        
        <h2 className="text-xl font-extrabold text-text-primary tracking-tight mb-2">Missing Ingredients</h2>
        <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-[280px]">
          You are missing <span className="font-bold text-text-primary">Eggs</span> and <span className="font-bold text-text-primary">Parmesan</span> to make the Carbonara.
        </p>

        <div className="w-full space-y-3">
          <Button fullWidth onClick={() => navigate('/shopping/list')} icon={<ShoppingCart className="w-5 h-5" />}>
            Add missing to Shopping List
          </Button>
          <Button variant="outline" fullWidth onClick={() => navigate('/recommendations/stack')} icon={<Repeat className="w-5 h-5" />}>
            Show alternative recipes
          </Button>
        </div>
      </div>
    </div>
  );
}
