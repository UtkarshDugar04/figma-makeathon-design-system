import React from 'react'

export default function PrinciplesSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="principles" aria-labelledby="principles-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">✦ Foundation</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="principles-heading">Design Principles</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Six core principles guide every decision in Household Food OS. From motion to microcopy, 
          every element must earn its place by serving these principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm">
          <div className="w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--brand-zest-100)', color: 'var(--brand-zest-600)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Flow-Driven, Not Dashboard</div>
          <p className="text-sm text-text-secondary leading-relaxed">The interface continuously answers "what's next?" — guiding users through a meaningful sequence rather than presenting a wall of options simultaneously.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm">
          <div className="w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--brand-sage-100)', color: 'var(--brand-sage-600)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Proactive, Not Reactive</div>
          <p className="text-sm text-text-secondary leading-relaxed">The product anticipates needs before users feel them. Surface expiry warnings before food goes bad. Suggest meals before hunger strikes. Act before being asked.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm">
          <div className="w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--brand-sky-100)', color: 'var(--brand-sky-600)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Intelligence, Not Complexity</div>
          <p className="text-sm text-text-secondary leading-relaxed">AI is woven through the entire experience, not isolated in a feature. It reduces cognitive load — simplifying decisions rather than adding another thing to manage.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm">
          <div className="w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--brand-plum-100)', color: 'var(--brand-plum-500)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Encouraging, Never Judgemental</div>
          <p className="text-sm text-text-secondary leading-relaxed">Food choices are personal and emotional. The product celebrates wins, gently redirects habits, and never makes users feel guilty about expiry or nutrition.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm">
          <div className="w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--brand-coral-100)', color: 'var(--brand-coral-500)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Speed as Respect</div>
          <p className="text-sm text-text-secondary leading-relaxed">Every interaction must be fast. Scannable cards. One-tap actions. Instant feedback. Delay is a failure of respect for the user's time in their busy kitchen life.</p>
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm">
          <div className="w-[48px] h-[48px] rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--brand-sage-100)', color: 'var(--brand-sage-600)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Accessible by Default</div>
          <p className="text-sm text-text-secondary leading-relaxed">WCAG 2.2 AA is the minimum. Touch targets &ge;44px, meaningful color + shape + text redundancy, proper heading hierarchy, and screen reader support from day one.</p>
        </div>
      </div>
    </section>
  )
}
