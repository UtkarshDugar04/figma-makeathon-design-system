import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Droplet, Zap, ChevronRight, Target, Plus } from 'lucide-react';
import Card from '../../components/core/Card';
import Button from '../../components/core/Button';
import ProgressBar from '../../components/core/ProgressBar';
import AICard from '../../components/core/AICard';
import { weeklyMealPlan, nutritionGoals } from '../../data/mockData';

export default function PlannerDashboard() {
  const navigate = useNavigate();
  const today = new Date();
  const todayIndex = 1; // Tue - for demo

  const weekAvgProtein = Math.round(weeklyMealPlan.reduce((a, b) => a + b.totalProtein, 0) / 7);
  const weekAvgCalories = Math.round(weeklyMealPlan.reduce((a, b) => a + b.totalCalories, 0) / 7);

  return (
    <div className="flex flex-col bg-bg-base min-h-screen">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-0.5">Meal</p>
        <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">Planner</h1>
        <p className="text-sm text-text-secondary mt-0.5">Future Decision Making</p>
      </div>

      <div className="px-5 pb-6 flex flex-col gap-5">
        {/* Weekly Calendar */}
        <Card padding="md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-extrabold text-text-primary">This Week</h2>
            <button
              onClick={() => navigate('/planner/week')}
              className="text-xs font-bold text-brand flex items-center gap-0.5 hover:underline"
            >
              Full View <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex justify-between gap-1">
            {weeklyMealPlan.map((day, i) => {
              const isToday = i === todayIndex;
              const hasMeals = true;
              return (
                <button
                  key={day.day}
                  onClick={() => navigate('/planner/day', { state: { day } })}
                  className={`flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-2xl flex-1 transition-all active:scale-95 ${
                    isToday ? 'bg-brand shadow-sm' : 'hover:bg-bg-sunken'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isToday ? 'text-white/70' : 'text-text-tertiary'}`}>
                    {day.day}
                  </span>
                  <span className={`text-base font-extrabold ${isToday ? 'text-white' : 'text-text-primary'}`}>
                    {day.dateNum}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isToday ? 'bg-white' : hasMeals ? 'bg-brand' : 'bg-bg-sunken'}`} />
                </button>
              );
            })}
          </div>
        </Card>

        {/* Today's Meals Preview */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-extrabold text-text-primary">Today's Plan</h2>
            <button onClick={() => navigate('/planner/day', { state: { day: weeklyMealPlan[todayIndex] } })} className="text-xs font-bold text-brand hover:underline flex items-center gap-0.5">
              Edit <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            {['breakfast', 'lunch', 'dinner'].map(mealTime => {
              const todayPlan = weeklyMealPlan[todayIndex];
              const meal = todayPlan.meals[mealTime as keyof typeof todayPlan.meals];
              const labels: Record<string, string> = { breakfast: '🌅 Breakfast', lunch: '☀️ Lunch', dinner: '🌙 Dinner' };
              return (
                <button
                  key={mealTime}
                  onClick={() => navigate('/recipe')}
                  className="flex items-center gap-3 bg-bg-elevated border border-border-subtle rounded-2xl px-4 py-3 hover:shadow-sm active:scale-[0.99] transition-all text-left"
                >
                  <span className="text-xl">{meal.emoji}</span>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">{labels[mealTime]}</p>
                    <p className="font-bold text-text-primary text-sm mt-0.5">{meal.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-text-primary">{meal.calories} kcal</p>
                    <p className="text-[10px] text-text-tertiary">{meal.protein}g protein</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Weekly Optimization Scores */}
        <Card padding="md">
          <h2 className="font-extrabold text-text-primary mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-brand" />
            Weekly Optimization
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { icon: Flame, label: 'Nutrition Score', value: 94, color: 'brand' as const, iconColor: 'text-brand' },
              { icon: Droplet, label: 'Waste Reduction', value: 88, color: 'success' as const, iconColor: 'text-success' },
              { icon: Zap, label: 'Convenience', value: 76, color: 'sky' as const, iconColor: 'text-brand-sky-500' },
            ].map(score => (
              <div key={score.label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-bg-sunken flex items-center justify-center flex-shrink-0`}>
                  <score.icon className={`w-5 h-5 ${score.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-text-primary">{score.label}</span>
                    <span className="text-sm font-extrabold text-text-primary">{score.value}%</span>
                  </div>
                  <ProgressBar value={score.value} color={score.color} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insight */}
        <AICard title="Weekly Intelligence">
          This week's plan covers <strong className="text-brand-plum-800">avg {weekAvgProtein}g protein/day</strong> — 
          within 3g of your goal. Wednesday is under-planned (56g protein). 
          Adding Paneer Bhurji at dinner closes the gap.
        </AICard>

        {/* CTA */}
        <Button size="lg" fullWidth icon={<Target className="w-5 h-5" />} onClick={() => navigate('/planner/generate')}>
          Generate Next Week's Plan
        </Button>
        <Button variant="outline" fullWidth onClick={() => navigate('/planner/nutrition')}>
          View Nutrition Analysis
        </Button>
      </div>
    </div>
  );
}
