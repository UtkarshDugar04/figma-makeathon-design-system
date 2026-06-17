import React from 'react'

export default function ColorSystemSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="colors" aria-labelledby="colors-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">◉ Color</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="colors-heading">Color System</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          A deliberate, expressive palette rooted in warmth and nature. Five brand families, 
          each with purpose — Zest (energy), Sage (freshness), Coral (urgency), Sky (intelligence), Plum (community).
        </p>
      </div>

      <div className="grid gap-8">
        <div className="grid gap-4">
          <div className="text-sm font-bold text-text-secondary tracking-wide uppercase">Zest — Primary Brand</div>
          <div className="flex gap-2 flex-wrap">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
              <div key={`zest-${weight}`} className="flex flex-col items-center gap-2">
                <div 
                  className="w-[72px] h-[72px] rounded-lg shadow-sm relative cursor-pointer transition-all duration-normal ease-spring hover:scale-[1.08] hover:-translate-y-[2px] hover:shadow-lg" 
                  style={{ 
                    background: `var(--brand-zest-${weight})`,
                    ...(weight === 500 ? { outline: '3px solid var(--color-text-primary)', outlineOffset: '2px' } : {})
                  }} 
                  title={`zest-${weight}`}
                ></div>
                <span className="text-[10px] font-medium text-text-tertiary text-center">{weight}{weight === 500 ? ' ●' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="text-sm font-bold text-text-secondary tracking-wide uppercase">Sage — Secondary Brand</div>
          <div className="flex gap-2 flex-wrap">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
              <div key={`sage-${weight}`} className="flex flex-col items-center gap-2">
                <div 
                  className="w-[72px] h-[72px] rounded-lg shadow-sm relative cursor-pointer transition-all duration-normal ease-spring hover:scale-[1.08] hover:-translate-y-[2px] hover:shadow-lg" 
                  style={{ 
                    background: `var(--brand-sage-${weight})`,
                    ...(weight === 500 ? { outline: '3px solid var(--color-text-primary)', outlineOffset: '2px' } : {})
                  }}
                ></div>
                <span className="text-[10px] font-medium text-text-tertiary text-center">{weight}{weight === 500 ? ' ●' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="text-sm font-bold text-text-secondary tracking-wide uppercase">Coral — Energy & Urgency</div>
          <div className="flex gap-2 flex-wrap">
            {[50, 100, 200, 300, 400, 500, 600, 700].map((weight) => (
              <div key={`coral-${weight}`} className="flex flex-col items-center gap-2">
                <div 
                  className="w-[72px] h-[72px] rounded-lg shadow-sm relative cursor-pointer transition-all duration-normal ease-spring hover:scale-[1.08] hover:-translate-y-[2px] hover:shadow-lg" 
                  style={{ 
                    background: `var(--brand-coral-${weight})`,
                    ...(weight === 500 ? { outline: '3px solid var(--color-text-primary)', outlineOffset: '2px' } : {})
                  }}
                ></div>
                <span className="text-[10px] font-medium text-text-tertiary text-center">{weight}{weight === 500 ? ' ●' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid gap-4">
            <div className="text-sm font-bold text-text-secondary tracking-wide uppercase">Sky — AI & Intelligence</div>
            <div className="flex gap-2 flex-wrap">
              {[50, 100, 200, 300, 400, 500].map((weight) => (
                <div key={`sky-${weight}`} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-[72px] h-[72px] rounded-lg shadow-sm relative cursor-pointer transition-all duration-normal ease-spring hover:scale-[1.08] hover:-translate-y-[2px] hover:shadow-lg" 
                    style={{ 
                      background: `var(--brand-sky-${weight})`,
                      ...(weight === 400 ? { outline: '3px solid var(--color-text-primary)', outlineOffset: '2px' } : {})
                    }}
                  ></div>
                  <span className="text-[10px] font-medium text-text-tertiary text-center">{weight}{weight === 400 ? ' ●' : ''}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="text-sm font-bold text-text-secondary tracking-wide uppercase">Plum — Community & Premium</div>
            <div className="flex gap-2 flex-wrap">
              {[50, 100, 200, 300, 400, 500].map((weight) => (
                <div key={`plum-${weight}`} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-[72px] h-[72px] rounded-lg shadow-sm relative cursor-pointer transition-all duration-normal ease-spring hover:scale-[1.08] hover:-translate-y-[2px] hover:shadow-lg" 
                    style={{ 
                      background: `var(--brand-plum-${weight})`,
                      ...(weight === 400 ? { outline: '3px solid var(--color-text-primary)', outlineOffset: '2px' } : {})
                    }}
                  ></div>
                  <span className="text-[10px] font-medium text-text-tertiary text-center">{weight}{weight === 400 ? ' ●' : ''}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="grid gap-4">
          <div className="text-sm font-bold text-text-secondary tracking-wide uppercase" style={{ marginBottom: 'var(--space-4)' }}>Expiry Risk Colors</div>
          <div className="flex gap-2 p-4 bg-card-bg border border-card-border rounded-xl shadow-sm flex-wrap" role="list" aria-label="Expiry risk color indicators">
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(147,55%,92%)', color: 'hsl(147,55%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[#22774d] dark:bg-[#52c186]"></div> Fresh (14+ days)
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(93,60%,90%)', color: 'hsl(93,60%,26%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[#42721d] dark:bg-[#7abf3c]"></div> Good (7–13 days)
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(48,100%,90%)', color: 'hsl(40,90%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[#917608] dark:bg-[#c2a41d]"></div> Watch Out (4–6 days)
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(33,100%,90%)', color: 'hsl(28,90%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[#914608] dark:bg-[#eb9c5e]"></div> Use Soon (2–3 days)
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(12,82%,92%)', color: 'hsl(8,80%,30%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[#931f0e] dark:bg-[#eb5e4d]"></div> Urgent (Today/Tomorrow)
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(0,72%,92%)', color: 'hsl(0,72%,30%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[#930e0e] dark:bg-[#eb4d4d]"></div> Expired
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="text-sm font-bold text-text-secondary tracking-wide uppercase" style={{ marginBottom: 'var(--space-4)' }}>Nutrition Macro Colors</div>
          <div className="flex gap-2 p-4 bg-card-bg border border-card-border rounded-xl shadow-sm flex-wrap" role="list" aria-label="Nutrition color indicators">
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(24,100%,93%)', color: 'hsl(24,90%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(24,90%,28%)]"></div> Protein
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(48,100%,90%)', color: 'hsl(40,90%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(40,90%,28%)]"></div> Carbohydrates
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(12,85%,92%)', color: 'hsl(8,80%,30%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(8,80%,30%)]"></div> Healthy Fats
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(147,50%,92%)', color: 'hsl(147,50%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(147,50%,28%)]"></div> Dietary Fiber
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(198,72%,92%)', color: 'hsl(198,70%,28%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(198,70%,28%)]"></div> Vitamins
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold" style={{ background: 'hsl(270,46%,92%)', color: 'hsl(270,46%,30%)' }} role="listitem">
              <div className="w-[8px] h-[8px] rounded-full bg-[hsl(270,46%,30%)]"></div> Minerals
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
