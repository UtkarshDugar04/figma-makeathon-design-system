import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Share2, ChevronRight, Plus, Users, Heart } from 'lucide-react';
import Card from '../../components/core/Card';
import Button from '../../components/core/Button';
import Badge from '../../components/core/Badge';
import { communityListings, impactStats } from '../../data/mockData';

export default function CommunityHome() {
  const navigate = useNavigate();
  const offers = communityListings.filter(l => l.type === 'offer');
  const requests = communityListings.filter(l => l.type === 'request');

  return (
    <div className="flex flex-col bg-bg-base min-h-screen">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex justify-between items-start">
        <div>
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-0.5">Food</p>
          <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">Community</h1>
          <p className="text-sm text-text-secondary mt-0.5">Food Rescue Network</p>
        </div>
        <Button variant="outline" size="sm" icon={<MapPin className="w-4 h-4" />} onClick={() => navigate('/community/map')}>
          Map
        </Button>
      </div>

      <div className="px-5 pb-6 flex flex-col gap-5">
        {/* Impact Strip */}
        <div className="bg-gradient-to-r from-brand-sage-500 to-brand-sage-600 rounded-2xl px-5 py-4 flex justify-around">
          {[
            { value: '142', label: 'Meals Rescued' },
            { value: '85 kg', label: 'Food Saved' },
            { value: '48', label: 'People Helped' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-extrabold text-white">{stat.value}</p>
              <p className="text-[10px] font-bold text-white/70 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* My Surplus CTA */}
        <button
          onClick={() => navigate('/community/create')}
          className="flex items-center gap-3 bg-brand-light border border-brand/20 rounded-2xl px-4 py-3.5 hover:bg-brand hover:text-white hover:border-brand transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center group-hover:bg-white/20">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-extrabold text-brand group-hover:text-white">Share Surplus Food</p>
            <p className="text-xs text-brand/70 group-hover:text-white/70">List expiring items for neighbors</p>
          </div>
          <ChevronRight className="w-4 h-4 text-brand group-hover:text-white/70" />
        </button>

        {/* Offers Nearby */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-extrabold text-text-primary">Available Nearby</h2>
            <Badge variant="success" dot>{offers.length} offers</Badge>
          </div>
          <div className="flex flex-col gap-3">
            {offers.slice(0, 4).map(listing => (
              <button
                key={listing.id}
                onClick={() => navigate('/community/listing', { state: { listing } })}
                className="flex gap-3.5 bg-bg-elevated border border-border-subtle rounded-2xl p-4 text-left hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-sage-400 rounded-l-2xl" />
                <div className="w-14 h-14 bg-bg-sunken rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {listing.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-extrabold text-text-primary text-sm">{listing.item}</p>
                    <Badge variant="success" size="xs">Offer</Badge>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-2">{listing.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-text-tertiary flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{listing.distanceKm} km
                    </span>
                    <span className="text-[10px] font-bold text-text-tertiary flex items-center gap-1">
                      <Star className="w-3 h-3 text-warning" />{listing.hostTrustScore}
                    </span>
                    {listing.expiryHours && (
                      <span className="text-[10px] font-bold text-warning">
                        Expires in {listing.expiryHours}h
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Requests */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-extrabold text-text-primary">Community Requests</h2>
            <Badge variant="info" dot>{requests.length} needs</Badge>
          </div>
          <div className="flex flex-col gap-2.5">
            {requests.map(listing => (
              <button
                key={listing.id}
                onClick={() => navigate('/community/listing', { state: { listing } })}
                className="flex gap-3.5 bg-bg-elevated border border-border-subtle rounded-2xl p-3.5 text-left hover:shadow-sm active:scale-[0.99] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-sky-400 rounded-l-2xl" />
                <span className="text-xl mt-0.5">{listing.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className="font-bold text-text-primary text-sm">{listing.item}</p>
                    <Badge variant="info" size="xs">Request</Badge>
                  </div>
                  <p className="text-xs text-text-secondary line-clamp-1">{listing.description}</p>
                  <p className="text-[10px] text-text-tertiary mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />{listing.distanceKm} km · {listing.hostName}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* History Link */}
        <button
          onClick={() => navigate('/community/history')}
          className="flex items-center justify-center gap-2 text-sm font-bold text-text-secondary hover:text-brand transition-colors py-2"
        >
          <Heart className="w-4 h-4" />
          View My Exchange History
        </button>
      </div>
    </div>
  );
}
