import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, HeartPulse, Target, TrendingDown, Clock, Leaf, 
  DollarSign, ChevronRight, Play, AlertTriangle, ShoppingBag,
  Sparkles, Zap, Users
} from 'lucide-react';
import Card from '../../components/core/Card';
import Button from '../../components/core/Button';
import Badge from '../../components/core/Badge';
import { householdSnapshot, pantryItems, recipes, notifications } from '../../data/mockData';

const expiringItems = pantryItems.filter(i => i.expiryDays <= 2 && i.expiryDays >= 0);
const criticalItems = pantryItems.filter(i => i.expiryDays <= 1 && i.expiryDays >= 0);
const todayRecipe = recipes[0];
const altRecipes = recipes.slice(1, 4);
const unreadCount = notifications.filter(n => !n.read).length;

export default function HomeDashboard() {
  const navigate = useNavigate();
  const [cookLoading, setCookLoading] = useState(false);

  const handleCook = () => {
    setCookLoading(true);
    setTimeout(() => navigate('/recipe'), 600);
  };

  return (
    <div className="flex flex-col bg-bg-base min-h-screen">
      {/* ---- HEADER ---- */}
      <div className="px-5 pt-6 pb-4 flex justify-between items-start">
        <div>
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-1">Wednesday, Jun 18</p>
          <h1 className="text-2xl font-extrabold text-text-primary tracking-tight leading-tight">
            What should I<br />do today?
          </h1>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => navigate('/notifications')}
            className="relative w-10 h-10 rounded-full bg-bg-sunken flex items-center justify-center text-text-secondary hover:text-brand hover:bg-brand-light transition-all"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-bg-base animate-pulse" />
            )}
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-zest-400 to-brand-coral-400 flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity"
          >
            <span className="font-extrabold text-white text-sm">UD</span>
          </button>
        </div>
      </div>

      {/* ---- HOUSEHOLD SNAPSHOT ---- */}
      <div className="px-5 mb-5">
        <div className="grid grid-cols-3 gap-2.5">
          <button
            onClick={() => navigate('/home/insights')}
            className="bg-gradient-to-br from-brand-zest-50 to-brand-zest-100 border border-brand-zest-200 rounded-2xl p-3 flex flex-col items-center text-center hover:shadow-md transition-all active:scale-95"
          >
            <HeartPulse className="w-5 h-5 text-brand mb-1.5" />
            <span className="text-[9px] font-bold text-brand uppercase tracking-widest">Health</span>
            <span className="text-xl font-extrabold text-brand">{householdSnapshot.healthScore}%</span>
          </button>
          <button
            onClick={() => navigate('/home/insights')}
            className="bg-bg-elevated border border-border-subtle rounded-2xl p-3 flex flex-col items-center text-center hover:shadow-md transition-all active:scale-95"
          >
            <Target className="w-5 h-5 text-brand-sky-500 mb-1.5" />
            <span className="text-[9px] font-bold text-text-tertiary uppercase tracking-widest">Protein</span>
            <span className="text-xl font-extrabold text-text-primary">{householdSnapshot.proteinToday}g</span>
            <span className="text-[9px] text-text-tertiary">of {householdSnapshot.proteinGoal}g</span>
          </button>
          <button
            onClick={() => navigate('/home/impact')}
            className="bg-bg-elevated border border-border-subtle rounded-2xl p-3 flex flex-col items-center text-center hover:shadow-md transition-all active:scale-95"
          >
            <TrendingDown className="w-5 h-5 text-success mb-1.5" />
            <span className="text-[9px] font-bold text-text-tertiary uppercase tracking-widest">Saved</span>
            <span className="text-xl font-extrabold text-text-primary">₹{(householdSnapshot.moneySavedThisMonth / 1000).toFixed(1)}k</span>
          </button>
        </div>
      </div>

      {/* ---- EXPIRY ALERT BANNER (if critical items) ---- */}
      {criticalItems.length > 0 && (
        <div className="mx-5 mb-5">
          <button
            onClick={() => navigate('/home/expiry-center')}
            className="w-full bg-error-bg border border-error/20 rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-error/10 transition-colors active:scale-[0.98]"
          >
            <div className="w-8 h-8 rounded-xl bg-error/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4 h-4 text-error" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold text-error">
                {criticalItems.length} item{criticalItems.length > 1 ? 's' : ''} expire{criticalItems.length === 1 ? 's' : ''} tomorrow
              </p>
              <p className="text-xs text-error/70 font-medium">
                {criticalItems.map(i => i.name).join(' · ')}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-error/60 flex-shrink-0" />
          </button>
        </div>
      )}

      {/* ---- TONIGHT'S RECOMMENDATION ---- */}
      <div className="px-5 mb-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-extrabold text-text-primary">Tonight's Recommendation</h2>
          <button
            onClick={() => navigate('/recommendations/stack')}
            className="text-xs font-bold text-brand flex items-center gap-0.5 hover:underline"
          >
            See all <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <Card
          interactive
          padding="none"
          onClick={() => navigate('/home/recommendation')}
          className="overflow-hidden border-border-strong"
        >
          {/* Hero area */}
          <div className={`h-36 bg-gradient-to-br ${todayRecipe.bgGradient} relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl opacity-80" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>
                {todayRecipe.emoji}
              </span>
            </div>
            {/* Match score badge */}
            <div className="absolute top-3 left-3">
              <Badge variant="brand" size="sm">
                <Sparkles className="w-3 h-3" />
                {todayRecipe.matchScore}% Match
              </Badge>
            </div>
            {/* Tags */}
            <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
              {todayRecipe.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-black/30 backdrop-blur-sm text-white rounded-pill text-[10px] font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-extrabold text-text-primary mb-0.5">{todayRecipe.name}</h3>
            <p className="text-sm text-text-secondary mb-3">{todayRecipe.description}</p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Clock className="w-4 h-4 text-text-tertiary flex-shrink-0" />
                <span className="font-semibold">{todayRecipe.prepTime + todayRecipe.cookTime} min</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Target className="w-4 h-4 text-brand-sky-400 flex-shrink-0" />
                <span className="font-semibold">{todayRecipe.nutrition.protein}g Protein</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Leaf className="w-4 h-4 text-success flex-shrink-0" />
                <span className="font-semibold">Prevents {todayRecipe.wastePreventionGrams}g waste</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <DollarSign className="w-4 h-4 text-success flex-shrink-0" />
                <span className="font-semibold">Saves ₹{todayRecipe.savingsRupees}</span>
              </div>
            </div>

            {/* AI Reasoning */}
            <div className="flex items-start gap-2 bg-brand-plum-50 border border-brand-plum-100 rounded-xl px-3 py-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-plum-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-brand-plum-700 font-medium leading-relaxed">{todayRecipe.aiReason}</p>
            </div>

            <Button
              fullWidth
              size="lg"
              icon={<Play className="w-4 h-4" />}
              onClick={(e) => { e.stopPropagation(); handleCook(); }}
              className={cookLoading ? 'opacity-75' : ''}
            >
              {cookLoading ? 'Loading...' : 'Cook This Now'}
            </Button>
          </div>
        </Card>
      </div>

      {/* ---- ALTERNATIVES ---- */}
      <div className="px-5 mb-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-extrabold text-text-primary">Alternatives</h2>
          <button
            onClick={() => navigate('/recommendations/stack')}
            className="text-xs font-bold text-brand flex items-center gap-0.5 hover:underline"
          >
            More <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 snap-x">
          {altRecipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => navigate('/recipe')}
              className="min-w-[155px] snap-center flex-shrink-0 bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all text-left"
            >
              <div className={`h-20 bg-gradient-to-br ${recipe.bgGradient} flex items-center justify-center`}>
                <span className="text-4xl">{recipe.emoji}</span>
              </div>
              <div className="p-3">
                <p className="font-bold text-text-primary text-sm truncate">{recipe.name}</p>
                <p className="text-xs text-text-tertiary mt-0.5">{recipe.prepTime + recipe.cookTime} min · {recipe.nutrition.protein}g protein</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ---- QUICK ACTIONS ---- */}
      <div className="px-5 mb-6">
        <h2 className="text-base font-extrabold text-text-primary mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/home/expiry-center')}
            className="flex items-center gap-3 p-3.5 bg-warning-bg border border-warning/20 rounded-2xl hover:shadow-sm active:scale-95 transition-all text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4.5 h-4.5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">{expiringItems.length} Expiring</p>
              <p className="text-xs text-text-secondary">This week</p>
            </div>
          </button>
          <button
            onClick={() => navigate('/shopping/list')}
            className="flex items-center gap-3 p-3.5 bg-info-bg border border-info/20 rounded-2xl hover:shadow-sm active:scale-95 transition-all text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-info/10 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-4.5 h-4.5 text-info" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">14 Items</p>
              <p className="text-xs text-text-secondary">Shopping list</p>
            </div>
          </button>
          <button
            onClick={() => navigate('/planner')}
            className="flex items-center gap-3 p-3.5 bg-success-bg border border-success/20 rounded-2xl hover:shadow-sm active:scale-95 transition-all text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4.5 h-4.5 text-success" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">7 Days</p>
              <p className="text-xs text-text-secondary">Meals planned</p>
            </div>
          </button>
          <button
            onClick={() => navigate('/community')}
            className="flex items-center gap-3 p-3.5 bg-brand-sky-50 border border-brand-sky-200 rounded-2xl hover:shadow-sm active:scale-95 transition-all text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-sky-100 flex items-center justify-center flex-shrink-0">
              <Users className="w-4.5 h-4.5 text-brand-sky-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">8 Nearby</p>
              <p className="text-xs text-text-secondary">Food listings</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
