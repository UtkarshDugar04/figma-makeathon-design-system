import React from 'react'

export default function AISection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="ai" aria-labelledby="ai-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">✦ AI</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="ai-heading">AI Components</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          The AI assistant isn't isolated in a chat screen. It's woven throughout the interface. 
          Sky and Plum create a distinct AI visual language that's intelligent but warm — never cold or robotic.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {/* AI Suggestion Card */}
        <article className="bg-card-bg border border-card-border rounded-card shadow-card overflow-hidden transition-all duration-moderate ease-spring cursor-pointer hover:-translate-y-1 hover:shadow-card-hover group ai-card" aria-label="AI meal suggestion">
          <div className="ai-card-header">
            <div className="ai-avatar" aria-hidden="true">✦</div>
            <div>
              <div className="ai-label">AI Suggestion</div>
              <div className="text-xs text-text-tertiary">Based on your pantry</div>
            </div>
          </div>
          <div className="ai-card-body">
            <p className="ai-message">
              Your spinach expires <strong>tomorrow</strong>. You also have eggs, parmesan, and garlic. You could make a quick <strong>spinach frittata</strong> — it takes 15 minutes and uses all 4 items. Want me to generate the recipe?
            </p>
            <div className="ai-prompt-chips" role="group" aria-label="Suggested responses">
              <button className="prompt-chip">Yes, show recipe →</button>
              <button className="prompt-chip">Other ideas</button>
              <button className="prompt-chip">Skip for now</button>
            </div>
          </div>
        </article>

        {/* AI Meal Planning */}
        <article className="bg-card-bg border border-card-border rounded-card shadow-card overflow-hidden transition-all duration-moderate ease-spring cursor-pointer hover:-translate-y-1 hover:shadow-card-hover group ai-card" aria-label="AI weekly meal plan suggestion">
          <div className="ai-card-header">
            <div className="ai-avatar" aria-hidden="true" style={{ background: 'hsla(198,72%,50%,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-sky-600)' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <div className="ai-label">Weekly Meal Plan</div>
              <div className="text-xs text-text-tertiary">Generated from 24 pantry items</div>
            </div>
          </div>
          <div className="ai-card-body">
            <p className="ai-message">
              I've planned <strong>5 meals for this week</strong> using your current pantry. This uses 89% of your ingredients and prevents all 3 expiring items from going to waste.
            </p>
            <div className="ai-prompt-chips" role="group" aria-label="Suggested responses">
              <button className="prompt-chip">View meal plan</button>
              <button className="prompt-chip">Adjust preferences</button>
              <button className="prompt-chip">Share with household</button>
            </div>
          </div>
        </article>

        {/* AI Voice State */}
        <article className="bg-card-bg border border-card-border rounded-card shadow-card overflow-hidden transition-all duration-moderate ease-spring cursor-pointer hover:-translate-y-1 hover:shadow-card-hover group flex flex-col items-center justify-center p-10 gap-6 min-h-[240px]" style={{ background: 'linear-gradient(145deg, var(--color-bg-elevated), var(--brand-sky-50))' }} aria-label="AI voice interaction state">
          <div className="relative w-20 h-20">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ 
              background: 'linear-gradient(135deg, var(--brand-sky-400), var(--brand-plum-400))',
              boxShadow: '0 0 0 12px hsla(198,72%,50%,0.12), 0 0 0 24px hsla(198,72%,50%,0.06)',
              animation: 'voicePulse 2s ease-in-out infinite'
            }} role="img" aria-label="AI assistant listening">✦</div>
          </div>
          <div className="text-center">
            <div className="text-base font-semibold text-text-primary mb-1">Listening...</div>
            <div className="text-sm text-text-tertiary">"What can I make with spinach tonight?"</div>
          </div>
          <div className="flex gap-1" aria-hidden="true">
            <div className="voice-bar w-1 rounded-sm bg-brand-sky-400" style={{ height: '16px', animationDelay: '0s' }}></div>
            <div className="voice-bar w-1 rounded-sm bg-brand-sky-400" style={{ height: '28px', animationDelay: '0.1s' }}></div>
            <div className="voice-bar w-1 rounded-sm bg-brand-plum-400" style={{ height: '20px', animationDelay: '0.2s' }}></div>
            <div className="voice-bar w-1 rounded-sm bg-brand-plum-400" style={{ height: '36px', animationDelay: '0.15s' }}></div>
            <div className="voice-bar w-1 rounded-sm bg-brand-sky-400" style={{ height: '24px', animationDelay: '0.05s' }}></div>
            <div className="voice-bar w-1 rounded-sm bg-brand-plum-400" style={{ height: '32px', animationDelay: '0.25s' }}></div>
            <div className="voice-bar w-1 rounded-sm bg-brand-sky-400" style={{ height: '18px', animationDelay: '0.3s' }}></div>
          </div>
        </article>

        {/* AI Shopping Guidance */}
        <article className="bg-card-bg border border-card-border rounded-card shadow-card overflow-hidden transition-all duration-moderate ease-spring cursor-pointer hover:-translate-y-1 hover:shadow-card-hover group ai-card" aria-label="AI shopping guidance">
          <div className="ai-card-header">
            <div className="ai-avatar" aria-hidden="true" style={{ background: 'hsla(198,72%,50%,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-sky-600)' }}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </div>
            <div>
              <div className="ai-label">Shopping Insight</div>
              <div className="text-xs text-text-tertiary">Smart replenishment</div>
            </div>
          </div>
          <div className="ai-card-body">
            <p className="ai-message">
              You'll run out of <strong>olive oil, garlic, and eggs</strong> within a week. Adding these to your next shop will cover all 5 planned meals. Estimated cost: <strong>~$12</strong>.
            </p>
            <div className="ai-prompt-chips" role="group" aria-label="Suggested responses">
              <button className="prompt-chip">Add to shopping list</button>
              <button className="prompt-chip">See alternatives</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
