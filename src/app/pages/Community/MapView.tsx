import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Filter, Navigation } from 'lucide-react';

export default function MapView() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-bg-base relative">
      {/* Map Background (Mock) */}
      <div className="absolute inset-0 bg-[#e5e3df]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #cfcdca 1px, transparent 1px), linear-gradient(to bottom, #cfcdca 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        {/* Mock Map Features */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#c2dcb3] rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-8 bg-[#a5c2df] rotate-45 blur-md opacity-60" />
      </div>

      {/* Header overlay */}
      <div className="absolute top-0 inset-x-0 pt-12 px-5 z-10 flex gap-3 pointer-events-none">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto">
          <ChevronLeft className="w-6 h-6 text-text-primary" />
        </button>
        <div className="flex-1 bg-white rounded-full shadow-md flex items-center px-4 pointer-events-auto">
          <span className="font-bold text-sm text-text-primary">Koramangala, Bangalore</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto">
          <Filter className="w-5 h-5 text-text-primary" />
        </button>
      </div>

      {/* Map Pins */}
      <button onClick={() => navigate('/community/listing')} className="absolute top-1/3 left-1/3 w-12 h-12 bg-success text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10 hover:scale-110 transition-transform">
        <span className="text-xl">🍅</span>
      </button>
      <button onClick={() => navigate('/community/listing')} className="absolute top-1/2 right-1/3 w-12 h-12 bg-success text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10 hover:scale-110 transition-transform">
        <span className="text-xl">🍞</span>
      </button>
      <button onClick={() => navigate('/community/listing')} className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-info text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10 hover:scale-110 transition-transform">
        <span className="text-lg">❓</span>
      </button>

      {/* My Location */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand rounded-full border-2 border-white shadow-md z-10">
        <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-50" />
      </div>

      {/* Bottom Sheet */}
      <div className="absolute bottom-0 inset-x-0 bg-bg-base rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-20 pb-safe">
        <div className="w-12 h-1.5 bg-border-strong rounded-pill mx-auto mt-3 mb-4" />
        <div className="px-5 pb-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-lg font-extrabold text-text-primary">Nearby Activity</h2>
              <p className="text-sm text-text-secondary">4 offers · 2 requests within 2km</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand">
              <Navigation className="w-5 h-5 fill-current" />
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {[
              { emoji: '🍅', title: 'Fresh Tomatoes', dist: '0.4 km', type: 'offer' },
              { emoji: '🍞', title: 'Sourdough Bread', dist: '0.8 km', type: 'offer' },
              { emoji: '🥛', title: 'Need Milk', dist: '1.2 km', type: 'request' },
            ].map((item, i) => (
              <button key={i} onClick={() => navigate('/community/listing')} className={`flex-shrink-0 w-48 rounded-2xl p-3 border text-left flex gap-3 ${
                item.type === 'offer' ? 'bg-success-bg border-success/20' : 'bg-info-bg border-info/20'
              }`}>
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm line-clamp-1">{item.title}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{item.dist}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
