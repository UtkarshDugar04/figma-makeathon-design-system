import React from 'react';
import { Sparkles } from 'lucide-react';

interface AICardProps {
  children: React.ReactNode;
  title?: string;
  compact?: boolean;
  className?: string;
}

export default function AICard({ children, title, compact = false, className = '' }: AICardProps) {
  return (
    <div className={`bg-brand-plum-50 border border-brand-plum-200 rounded-2xl ${compact ? 'p-3' : 'p-4'} ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-brand-plum-100 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-brand-plum-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-plum-500">{title}</span>
        </div>
      )}
      <div className="text-sm text-brand-plum-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
