import React from 'react'

export default function SpacingSection() {
  return (
    <>
      <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="spacing" aria-labelledby="spacing-heading">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">⊞ Spacing</div>
          <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="spacing-heading">Spacing System</h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">An 8-point base grid system that creates visual rhythm and harmony across all layouts.</p>
        </div>

        <div className="flex flex-col gap-4" role="list">
          {[
            { label: '--space-1 · 4px', width: '4px' },
            { label: '--space-2 · 8px', width: '8px' },
            { label: '--space-3 · 12px', width: '12px' },
            { label: '--space-4 · 16px', width: '16px' },
            { label: '--space-5 · 20px', width: '20px' },
            { label: '--space-6 · 24px', width: '24px' },
            { label: '--space-8 · 32px', width: '32px' },
            { label: '--space-10 · 40px', width: '40px' },
            { label: '--space-12 · 48px', width: '48px' },
            { label: '--space-16 · 64px', width: '64px' },
            { label: '--space-20 · 80px', width: '80px' },
            { label: '--space-24 · 96px', width: '96px' },
          ].map((space) => (
            <div className="flex items-center gap-4" role="listitem" key={space.label}>
              <div className="w-[140px] shrink-0 text-sm font-medium text-text-secondary">{space.label}</div>
              <div className="h-[24px] bg-brand-light rounded-sm border border-brand-muted" style={{ width: space.width }}></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="radius" aria-labelledby="radius-heading">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">◻ Radius</div>
          <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="radius-heading">Radius System</h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">Friendly, modern geometry. Larger radii for prominent surfaces. Tighter radii for dense content.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6" role="list">
          {[
            { label: 'xs · 4px', radius: 'var(--radius-xs)' },
            { label: 'sm · 8px', radius: 'var(--radius-sm)' },
            { label: 'md · 12px', radius: 'var(--radius-md)' },
            { label: 'lg · 16px', radius: 'var(--radius-lg)' },
            { label: 'xl · 20px', radius: 'var(--radius-xl)' },
            { label: '2xl · 24px', radius: 'var(--radius-2xl)' },
            { label: '3xl · 32px', radius: 'var(--radius-3xl)' },
            { label: 'Pill · 999px', radius: 'var(--radius-pill)' },
            { label: 'Full · Circle', radius: 'var(--radius-full)' },
          ].map((item) => (
            <div className="flex flex-col items-center gap-3" role="listitem" key={item.label}>
              <div className="w-[64px] h-[64px] bg-brand shadow-sm" style={{ borderRadius: item.radius }}></div>
              <div className="text-[11px] font-semibold text-text-tertiary text-center uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="elevation" aria-labelledby="elevation-heading">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">◈ Elevation</div>
          <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="elevation-heading">Elevation System</h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">Layered depth creates hierarchy. Hover each block to feel the transition.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-8" role="list">
          {[
            { label: 'Flat\nborder only', shadow: 'none', border: '1px solid var(--color-border)' },
            { label: 'xs\nDividers', shadow: 'var(--shadow-xs)' },
            { label: 'sm\nChips', shadow: 'var(--shadow-sm)' },
            { label: 'md\nCards', shadow: 'var(--shadow-md)' },
            { label: 'lg\nDropdowns', shadow: 'var(--shadow-lg)' },
            { label: 'xl\nModals', shadow: 'var(--shadow-xl)' },
            { label: '2xl\nSheets', shadow: 'var(--shadow-2xl)' },
          ].map((item, idx) => (
            <div className="flex flex-col items-center gap-4" role="listitem" key={idx}>
              <div className="w-[100px] h-[100px] bg-card-bg rounded-xl transition-transform duration-normal ease-spring hover:-translate-y-[4px]" style={{ boxShadow: item.shadow, border: item.border }}></div>
              <div className="text-xs font-medium text-text-secondary text-center whitespace-pre-line">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
