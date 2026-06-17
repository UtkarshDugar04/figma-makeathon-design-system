import React from 'react'

export default function ButtonsSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="buttons" aria-labelledby="buttons-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">⊕ Buttons</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="buttons-heading">Button System</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">Pill-shaped buttons with expressive colored shadows. Each variant has a clear semantic purpose.</p>
      </div>

      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Primary Actions</div>
      <div className="flex flex-wrap gap-4 items-center">
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-brand text-white shadow-[0_4px_12px_rgba(240,123,12,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(240,123,12,0.4)] active:scale-95 py-3.5 px-6 text-base" aria-label="Scan Kitchen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          Scan Kitchen
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-brand text-white shadow-[0_4px_12px_rgba(240,123,12,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(240,123,12,0.4)] active:scale-95 py-2.5 px-5 text-sm" aria-label="View Meals">View Meals</button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-brand text-white shadow-[0_4px_12px_rgba(240,123,12,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(240,123,12,0.4)] active:scale-95 py-1.5 px-4 text-xs" aria-label="Add Item">+ Add Item</button>
      </div>

      <hr className="my-10 border-border-subtle border-t" />
      
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Variants</div>
      <div className="flex flex-wrap gap-4 items-center">
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-brand text-white shadow-[0_4px_12px_rgba(240,123,12,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(240,123,12,0.4)] active:scale-95 py-2.5 px-5 text-sm">Primary — Zest</button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-secondary text-white shadow-[0_4px_12px_hsla(147,32%,38%,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_hsla(147,32%,38%,0.4)] active:scale-95 py-2.5 px-5 text-sm">Secondary — Sage</button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-brand-sky-500 text-white shadow-[0_4px_12px_hsla(198,72%,40%,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_hsla(198,72%,40%,0.4)] active:scale-95 py-2.5 px-5 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          AI Suggest
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-transparent border-2 border-border-strong text-text-primary hover:border-text-primary hover:bg-bg-sunken active:scale-95 py-2.5 px-5 text-sm">Outline</button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-transparent border-2 border-transparent text-text-secondary hover:bg-bg-sunken hover:text-text-primary active:scale-95 py-2.5 px-5 text-sm">Ghost</button>
        <button className="inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-all duration-normal ease-spring bg-error-bg text-error hover:bg-error hover:text-white active:scale-95 py-2.5 px-5 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Discard
        </button>
      </div>
    </section>
  )
}
