import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Package, Calendar, Users, ShoppingCart } from 'lucide-react';

const navItems = [
  { to: '/home', icon: Home, label: 'Home' },
  { to: '/pantry', icon: Package, label: 'Pantry' },
  { to: '/planner', icon: Calendar, label: 'Planner' },
  { to: '/community', icon: Users, label: 'Community' },
  { to: '/shopping/list', icon: ShoppingCart, label: 'Shop' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-nav-bg border-t border-nav-border pb-[env(safe-area-inset-bottom)] z-50 nav-blur shadow-[0_-4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center w-full px-1 pt-1 pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || 
            (item.to === '/shopping/list' && location.pathname.startsWith('/shopping'));
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-normal w-[64px] relative"
            >
              <div className={`flex flex-col items-center gap-1 transition-all duration-normal ${isActive ? 'scale-105' : 'scale-100'}`}>
                {isActive && (
                  <div className="absolute inset-0 bg-brand-light rounded-xl" />
                )}
                <item.icon
                  className={`w-[22px] h-[22px] relative z-10 transition-colors duration-normal ${
                    isActive ? 'text-brand' : 'text-text-tertiary'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[10px] leading-tight font-bold relative z-10 transition-colors duration-normal ${
                  isActive ? 'text-brand' : 'text-text-tertiary'
                }`}>
                  {item.label}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
