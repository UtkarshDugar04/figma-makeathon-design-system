import React from 'react'

export default function InputsSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="inputs" aria-labelledby="inputs-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">⌨ Inputs</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="inputs-heading">Input Components</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">Clean, focused inputs with brand-colored focus rings. Designed for quick data entry in kitchen contexts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs font-bold tracking-wide text-text-primary uppercase" htmlFor="search-pantry">Search Pantry</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input type="search" className="w-full bg-bg-sunken border border-border-subtle text-text-primary text-sm font-medium rounded-xl px-4 py-3 pl-11 transition-all duration-normal ease-spring outline-none focus:bg-bg-elevated focus:border-brand focus:ring-4 focus:ring-brand-light placeholder-text-disabled" id="search-pantry" placeholder="Search ingredients, meals, or recipes..." aria-label="Search pantry items" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-wide text-text-primary uppercase" htmlFor="add-ingredient">Add Ingredient</label>
          <input type="text" className="w-full bg-bg-sunken border border-border-subtle text-text-primary text-sm font-medium rounded-xl px-4 py-3 transition-all duration-normal ease-spring outline-none focus:bg-bg-elevated focus:border-brand focus:ring-4 focus:ring-brand-light placeholder-text-disabled" id="add-ingredient" placeholder="e.g. Organic Spinach" aria-label="Ingredient name" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-wide text-text-primary uppercase" htmlFor="quantity">Quantity</label>
          <input type="text" className="w-full bg-bg-sunken border border-border-subtle text-text-primary text-sm font-medium rounded-xl px-4 py-3 transition-all duration-normal ease-spring outline-none focus:bg-bg-elevated focus:border-brand focus:ring-4 focus:ring-brand-light placeholder-text-disabled" id="quantity" placeholder="e.g. 200g · 1 bunch · 3 cans" aria-label="Ingredient quantity" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-wide text-text-primary uppercase" htmlFor="expiry-date">Expiry Date</label>
          <input type="date" className="w-full bg-bg-sunken border border-border-subtle text-text-primary text-sm font-medium rounded-xl px-4 py-3 transition-all duration-normal ease-spring outline-none focus:bg-bg-elevated focus:border-brand focus:ring-4 focus:ring-brand-light placeholder-text-disabled" id="expiry-date" aria-label="Expiry date" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-wide text-text-primary uppercase" htmlFor="notes">Notes</label>
          <input type="text" className="w-full bg-bg-sunken border border-border-subtle text-text-primary text-sm font-medium rounded-xl px-4 py-3 transition-all duration-normal ease-spring outline-none focus:bg-bg-elevated focus:border-brand focus:ring-4 focus:ring-brand-light placeholder-text-disabled" id="notes" placeholder="e.g. Left side of fridge" aria-label="Storage notes" />
        </div>
      </div>

      <hr className="my-10 border-border-subtle border-t" />

      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Filter Tags</div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
        <button className="flex items-center gap-2 py-2 px-4 rounded-pill text-sm font-semibold transition-all duration-fast border border-transparent bg-text-primary text-bg-elevated shadow-sm" aria-pressed="true">All</button>
        <button className="flex items-center gap-2 py-2 px-4 rounded-pill text-sm font-semibold transition-all duration-fast border border-border-strong text-text-secondary bg-transparent hover:bg-bg-sunken hover:border-text-tertiary hover:text-text-primary" aria-pressed="false">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/><path d="M9 22v-4"/></svg>
          Produce
        </button>
        <button className="flex items-center gap-2 py-2 px-4 rounded-pill text-sm font-semibold transition-all duration-fast border border-border-strong text-text-secondary bg-transparent hover:bg-bg-sunken hover:border-text-tertiary hover:text-text-primary" aria-pressed="false">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16c.5-1.5 1-3 1-4.5A5.5 5.5 0 0 0 11.5 6a7.5 7.5 0 0 0-6 3c-1.5 2-1 5.5.5 7s4.5 1.5 6 .5c1.5-1 2.5-.5 4 1z"/><circle cx="9" cy="11" r="1"/></svg>
          Protein
        </button>
        <button className="flex items-center gap-2 py-2 px-4 rounded-pill text-sm font-semibold transition-all duration-fast border border-border-strong text-text-secondary bg-transparent hover:bg-bg-sunken hover:border-text-tertiary hover:text-text-primary" aria-pressed="false">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12V10L14 6H10L6 10z"/><path d="M6 12h12"/><circle cx="12" cy="15" r="1"/></svg>
          Dairy
        </button>
      </div>
    </section>
  )
}
