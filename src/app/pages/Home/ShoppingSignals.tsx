import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/core/Card';
import Button from '../../components/core/Button';
import { ChevronLeft, ShoppingCart, TrendingDown, CalendarDays } from 'lucide-react';

export default function ShoppingSignals() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-bg-base p-6">
      <div className="flex items-center gap-4 pt-4 mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-bg-sunken text-text-secondary">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-extrabold text-text-primary">Shopping Signals</h1>
      </div>

      <div className="space-y-8 flex-1 pb-24">
        <p className="text-sm text-text-secondary">Prevent future shortages before they happen.</p>

        {/* Predicted Shortages */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-error" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary">Predicted Shortages</h2>
          </div>
          <div className="space-y-3">
            <Card padding="sm" className="flex items-center justify-between border-l-4 border-l-error bg-bg-elevated">
              <div>
                <h3 className="font-bold text-text-primary">Eggs</h3>
                <p className="text-xs text-text-secondary">Runs out in 2 days based on habits.</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-error">Critical</span>
              </div>
            </Card>
            <Card padding="sm" className="flex items-center justify-between border-l-4 border-l-warning bg-bg-elevated">
              <div>
                <h3 className="font-bold text-text-primary">Whole Wheat Bread</h3>
                <p className="text-xs text-text-secondary">Runs out in 4 days.</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-warning">Warning</span>
              </div>
            </Card>
          </div>
        </section>

        {/* Upcoming Planner Requirements */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5 text-brand" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary">Planner Needs</h2>
          </div>
          <Card padding="md" className="bg-brand-50 border-brand">
            <p className="text-sm text-brand-900 mb-4">
              Your generated meal plan for next week requires ingredients you don't currently have.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex justify-between text-sm">
                <span className="font-medium text-text-primary">Chicken Breast</span>
                <span className="text-text-secondary">Need 2 lbs</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="font-medium text-text-primary">Olive Oil</span>
                <span className="text-text-secondary">Need 1 bottle</span>
              </li>
            </ul>
            <Button size="sm" variant="outline" fullWidth onClick={() => navigate('/planner')}>
              View Meal Plan
            </Button>
          </Card>
        </section>

        {/* Low Inventory */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">Low Staples</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card padding="sm" className="text-center border-border-subtle bg-bg-elevated">
              <div className="text-2xl mb-1">🍚</div>
              <h3 className="font-bold text-text-primary text-sm">Basmati Rice</h3>
              <p className="text-[10px] text-text-tertiary">&lt; 10% remaining</p>
            </Card>
            <Card padding="sm" className="text-center border-border-subtle bg-bg-elevated">
              <div className="text-2xl mb-1">☕</div>
              <h3 className="font-bold text-text-primary text-sm">Coffee Beans</h3>
              <p className="text-[10px] text-text-tertiary">~3 days left</p>
            </Card>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-bg-base border-t border-border-subtle">
        <Button size="lg" fullWidth onClick={() => navigate('/shopping/list')} icon={<ShoppingCart className="w-5 h-5" />}>
          Generate Shopping Cart
        </Button>
      </div>
    </div>
  );
}
