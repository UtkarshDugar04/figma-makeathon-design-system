import React from 'react'

export default function JourneySection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="journey" aria-labelledby="journey-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">↓ Experience Flow</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="journey-heading">The Connected Journey</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Users never jump between disconnected tools. They flow through a continuous, intelligent sequence.
          The design language must support and reinforce this progression at every step.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative" role="list" aria-label="User journey steps">
        {/* We can style this better but keeping it close to the original classes */}
        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-zest-100)', color: 'var(--brand-zest-600)' }} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Kitchen Scan</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[44px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>
        
        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-sage-100)', color: 'var(--brand-sage-600)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Inventory Understanding</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[112px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-coral-100)', color: 'var(--brand-coral-500)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Expiry Awareness</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[180px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-sky-100)', color: 'var(--brand-sky-500)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Meal Recommendations</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[248px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-plum-100)', color: 'var(--brand-plum-500)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Recipe Exploration</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[316px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-zest-100)', color: 'var(--brand-zest-600)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6V13.87z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Cooking Support</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[384px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-sage-100)', color: 'var(--brand-sage-600)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Nutrition Progress</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[452px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-zest-100)', color: 'var(--brand-zest-500)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Shopping Decisions</div>
        </div>
        <div className="w-[2px] h-[32px] absolute left-[21px] top-[520px] -z-10" aria-hidden="true" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex items-center gap-6 relative z-10" role="listitem">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'var(--brand-plum-100)', color: 'var(--brand-plum-500)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="9" r="3"/><path d="M2 21v-1a7 7 0 0 1 14 0v1"/><path d="M17 12a5 5 0 0 1 5 5v1"/></svg>
          </div>
          <div className="text-lg font-semibold text-text-primary">Community Opportunities</div>
        </div>
      </div>
    </section>
  )
}
