import React from 'react'

export default function IllustrationsSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="illustrations" aria-labelledby="illustrations-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">□ Illustrations</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="illustrations-heading">Illustration System</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Editorial-quality illustrations that feel part of the same brand as food photography. 
          Warm, geometric, optimistic, and human — never corporate or generic.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
        <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden shadow-sm flex flex-col group">
          <img className="w-full aspect-[4/3] object-cover transition-transform duration-moderate ease-spring group-hover:scale-105" src="./assets/hero_food_illustration_1781548296048.png" alt="Kitchen scene with fresh ingredients arranged top-down — hero illustration" loading="lazy" />
          <div className="p-4 bg-bg-elevated relative z-10">
            <div className="text-sm font-bold text-text-primary mb-1">Kitchen Hero</div>
            <div className="text-xs text-text-tertiary">Home screen · Onboarding</div>
          </div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden shadow-sm flex flex-col group">
          <img className="w-full aspect-[4/3] object-cover transition-transform duration-moderate ease-spring group-hover:scale-105" src="./assets/pantry_empty_state_1781548315286.png" alt="Empty refrigerator illustration — warm coral and cream palette" loading="lazy" />
          <div className="p-4 bg-bg-elevated relative z-10">
            <div className="text-sm font-bold text-text-primary mb-1">Empty Pantry</div>
            <div className="text-xs text-text-tertiary">Empty state · First-time user</div>
          </div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden shadow-sm flex flex-col group">
          <img className="w-full aspect-[4/3] object-cover transition-transform duration-moderate ease-spring group-hover:scale-105" src="./assets/ai_assistant_illustration_1781548350865.png" alt="Abstract AI assistant illustration with warm geometric orbs" loading="lazy" />
          <div className="p-4 bg-bg-elevated relative z-10">
            <div className="text-sm font-bold text-text-primary mb-1">AI Companion</div>
            <div className="text-xs text-text-tertiary">AI onboarding · Voice screen</div>
          </div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden shadow-sm flex flex-col group">
          <img className="w-full aspect-[4/3] object-cover transition-transform duration-moderate ease-spring group-hover:scale-105" src="./assets/community_illustration_1781548363261.png" alt="Neighbours sharing food in a warm community setting" loading="lazy" />
          <div className="p-4 bg-bg-elevated relative z-10">
            <div className="text-sm font-bold text-text-primary mb-1">Community</div>
            <div className="text-xs text-text-tertiary">Exchange · Community tab</div>
          </div>
        </div>
      </div>

      <hr className="my-10 border-border-subtle border-t" />

      {/* Illustration Guidelines */}
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Illustration Guidelines</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 mb-1" style={{ background: 'var(--brand-zest-100)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-zest-600)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.63-.77 1.63-1.7 0-.42-.16-.82-.44-1.16-.3-.37-.47-.86-.47-1.39 0-1 1.05-1.75 2.1-1.75H17c3 0 5-2.25 5-5 0-5.5-4.5-10-10-10z"/></svg>
          </div>
          <div className="text-base font-bold text-text-primary">Color Harmony</div>
          <p className="text-sm text-text-secondary leading-relaxed">Illustrations use the same 5 brand families. Cream backgrounds. Zest + Coral + Sage as primary shapes. Never introduce colors outside the brand palette.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 mb-1" style={{ background: 'var(--brand-sage-100)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sage-600)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
          </div>
          <div className="text-base font-bold text-text-primary">Strong Shapes</div>
          <p className="text-sm text-text-secondary leading-relaxed">Rounded, geometric forms. Bold silhouettes with high contrast. Minimal detail. Illustrations must be legible at 80×80px thumbnail size.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 mb-1" style={{ background: 'var(--brand-sky-100)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sky-600)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div className="text-base font-bold text-text-primary">Warm Optimism</div>
          <p className="text-sm text-text-secondary leading-relaxed">Every illustration should evoke a positive emotional response. Warm light, friendly characters, clear narrative. Never clinical or neutral.</p>
        </div>
      </div>
    </section>
  )
}
