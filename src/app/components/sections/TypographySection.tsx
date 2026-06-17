import React from 'react'

export default function TypographySection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="typography" aria-labelledby="typography-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">T Typography</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="typography-heading">Typography System</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Plus Jakarta Sans is the primary typeface — modern, geometric, warm, and highly readable at all sizes.
          Optimized for mobile-first reading in kitchen environments.
        </p>
      </div>

      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Type Scale</div>
      <div className="flex flex-col gap-6" role="list">
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">Display</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">60px · 800 · −0.04em</div>
          </div>
          <div className="flex-1 text-text-primary text-6xl font-extrabold tracking-tighter">Dinner tonight</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">H1</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">48px · 800 · −0.04em</div>
          </div>
          <div className="flex-1 text-text-primary text-5xl font-extrabold tracking-tighter">Your Pantry</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">H2</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">36px · 800 · −0.02em</div>
          </div>
          <div className="flex-1 text-text-primary text-4xl font-extrabold tracking-tight">Meal Suggestions</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">H3</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">30px · 700 · −0.02em</div>
          </div>
          <div className="flex-1 text-text-primary text-3xl font-bold tracking-tight">Expiring This Week</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">H4</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">24px · 700 · −0.02em</div>
          </div>
          <div className="flex-1 text-text-primary text-2xl font-bold tracking-tight">Mediterranean Bowl</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">H5</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">20px · 700 · 0em</div>
          </div>
          <div className="flex-1 text-text-primary text-xl font-bold">Pantry Overview</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">Body Large</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">18px · 400 · 0em</div>
          </div>
          <div className="flex-1 text-text-primary text-lg leading-relaxed">You have 3 items expiring within 48 hours. Based on what's in your fridge, you can make 5 different meals tonight.</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">Body</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">15px · 400 · 0em</div>
          </div>
          <div className="flex-1 text-text-primary text-base leading-relaxed">Scan your kitchen to instantly understand your pantry. Our AI identifies ingredients and tracks expiry dates automatically, so you never waste food again.</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">Small</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">13px · 500 · 0em</div>
          </div>
          <div className="flex-1 text-text-secondary text-sm font-medium">2 portions · 380 kcal · 35 min</div>
        </div>
        <div className="flex items-baseline gap-8 py-5 border-b border-border-subtle" role="listitem">
          <div className="w-[120px] shrink-0">
            <div className="text-xs font-semibold text-text-tertiary tracking-wide">Caption</div>
            <div className="text-[10px] text-text-disabled mt-[2px]">12px · 600 · +0.06em</div>
          </div>
          <div className="flex-1 text-text-tertiary text-xs font-semibold tracking-wider uppercase">PANTRY · EXPIRY TRACKING · AI MEALS</div>
        </div>
      </div>

      <hr className="my-10 border-border-subtle border-t" />
      
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Font Weights</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mt-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2">
          <div className="text-2xl text-text-primary font-light">Light 300</div>
          <div className="text-xs text-text-tertiary font-medium">Subtle emphasis, large headers</div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2">
          <div className="text-2xl text-text-primary font-regular">Regular 400</div>
          <div className="text-xs text-text-tertiary font-medium">Body copy, descriptions</div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2">
          <div className="text-2xl text-text-primary font-medium">Medium 500</div>
          <div className="text-xs text-text-tertiary font-medium">UI labels, secondary info</div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2">
          <div className="text-2xl text-text-primary font-semibold">Semibold 600</div>
          <div className="text-xs text-text-tertiary font-medium">Buttons, nav items, badges</div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2">
          <div className="text-2xl text-text-primary font-bold">Bold 700</div>
          <div className="text-xs text-text-tertiary font-medium">Card titles, section heads</div>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2">
          <div className="text-2xl text-text-primary font-extrabold">ExtraBold 800</div>
          <div className="text-xs text-text-tertiary font-medium">Display, hero moments</div>
        </div>
      </div>
    </section>
  )
}
