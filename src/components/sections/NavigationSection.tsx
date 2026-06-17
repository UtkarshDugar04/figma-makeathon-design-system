import React from 'react'

export default function NavigationSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="navigation" aria-labelledby="navigation-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">⊡ Navigation</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="navigation-heading">Navigation Components</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">A floating pill nav that feels soft, premium, and frictionless. The active item expands with a tinted pill containing icon and label. Inactive items remain icon-only with low visual weight.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Bottom Navigation — Floating Pill (Home Active)</div>
          <div className="bg-bg-sunken p-10 rounded-2xl border border-border-subtle flex items-center justify-center relative overflow-hidden h-[200px]">
            <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-bg-glass nav-blur border border-bg-glass-border p-2 rounded-pill flex gap-2 shadow-lg" aria-label="Primary navigation">
              <div className="flex items-center gap-2 py-2 px-4 rounded-pill bg-brand text-text-on-brand cursor-pointer shadow-sm transition-all duration-normal" role="button" aria-label="Home — current page" aria-current="page" tabIndex={0}>
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
                    <path d="M9 21V12h6v9"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">Home</span>
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full text-text-tertiary hover:bg-bg-glass hover:text-text-primary cursor-pointer transition-all duration-fast" role="button" aria-label="Pantry" tabIndex={0}>
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
                    <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full text-text-tertiary hover:bg-bg-glass hover:text-text-primary cursor-pointer transition-all duration-fast" role="button" aria-label="Meals" tabIndex={0}>
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
                    <path d="M2 20h20"/>
                    <path d="M6 20V10M18 20V10"/>
                    <path d="M6 10a6 6 0 0 1 12 0"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full text-text-tertiary hover:bg-bg-glass hover:text-text-primary cursor-pointer transition-all duration-fast" role="button" aria-label="Community" tabIndex={0}>
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="100%" height="100%">
                    <circle cx="9" cy="7" r="4"/>
                    <circle cx="17" cy="9" r="3"/>
                    <path d="M2 21v-1a7 7 0 0 1 14 0v1"/>
                    <path d="M17 12a5 5 0 0 1 5 5v1"/>
                  </svg>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Tab Bar</div>
            <div className="flex items-center gap-1 bg-bg-sunken p-1 rounded-lg border border-border-subtle" role="tablist" aria-label="Content sections">
              <div className="py-1.5 px-4 rounded-md bg-bg-elevated text-text-primary text-sm font-semibold shadow-sm cursor-pointer" role="tab" aria-selected="true" tabIndex={0}>All Items</div>
              <div className="py-1.5 px-4 rounded-md text-text-secondary text-sm font-medium hover:text-text-primary cursor-pointer transition-colors" role="tab" aria-selected="false" tabIndex={-1}>Expiring</div>
              <div className="py-1.5 px-4 rounded-md text-text-secondary text-sm font-medium hover:text-text-primary cursor-pointer transition-colors" role="tab" aria-selected="false" tabIndex={-1}>Proteins</div>
              <div className="py-1.5 px-4 rounded-md text-text-secondary text-sm font-medium hover:text-text-primary cursor-pointer transition-colors" role="tab" aria-selected="false" tabIndex={-1}>Produce</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Segmented Control</div>
            <div className="inline-flex bg-bg-sunken p-1 rounded-lg border border-border-subtle" role="group" aria-label="View toggle">
              <button className="py-1.5 px-4 text-sm font-semibold rounded-md bg-bg-elevated text-text-primary shadow-sm border-none" aria-pressed="true">Grid</button>
              <button className="py-1.5 px-4 text-sm font-medium rounded-md text-text-secondary bg-transparent border-none hover:text-text-primary" aria-pressed="false">List</button>
              <button className="py-1.5 px-4 text-sm font-medium rounded-md text-text-secondary bg-transparent border-none hover:text-text-primary" aria-pressed="false">Map</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
