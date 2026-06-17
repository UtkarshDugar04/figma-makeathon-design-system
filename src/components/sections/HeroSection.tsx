import React from 'react'
// If an image asset is used, import it, or use absolute path as it was.
// The original used src="./assets/hero_food_illustration_1781548296048.png"

export default function HeroSection() {
  return (
    <section 
      className="bg-bg-sunken dark:bg-[#1a1715] py-20 px-10 relative overflow-hidden border-b border-border-subtle before:absolute before:-top-[80px] before:-right-[80px] before:w-[320px] before:h-[320px] before:bg-[radial-gradient(circle,hsla(33,93%,60%,0.08)_0%,transparent_70%)] before:pointer-events-none" 
      id="hero" 
      aria-labelledby="hero-heading"
    >
      <div className="relative z-[1] grid grid-cols-2 gap-16 items-center max-w-[1200px]">
        <div className="hero-content">
          <div className="inline-flex items-center gap-2 text-brand text-sm font-bold tracking-widest uppercase mb-4">✦ Design System · v1.0</div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter leading-tight text-text-primary mb-6" id="hero-heading">
            The Visual Foundation for<br />
            <span>Household Food OS</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            A complete, production-ready design language built for a proactive household food companion. 
            Not inventory software. Not a recipe app. A caring, intelligent partner for better food decisions.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-brand tracking-tight">5</span>
              <span className="text-xs text-text-tertiary font-medium tracking-wide uppercase mt-[2px]">Brand Colors</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-brand tracking-tight">8pt</span>
              <span className="text-xs text-text-tertiary font-medium tracking-wide uppercase mt-[2px]">Grid System</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-brand tracking-tight">120+</span>
              <span className="text-xs text-text-tertiary font-medium tracking-wide uppercase mt-[2px]">Design Tokens</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-brand tracking-tight">WCAG</span>
              <span className="text-xs text-text-tertiary font-medium tracking-wide uppercase mt-[2px]">AA Compliant</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/hero_food_illustration_1781548296048.png"
            alt="Fresh ingredients arranged on a kitchen counter — top-down editorial view"
            className="w-full rounded-3xl shadow-2xl block"
            loading="eager"
          />
          <div className="absolute bottom-4 left-4 bg-bg-glass nav-blur border border-bg-glass-border rounded-xl py-3 px-4 flex items-center gap-3">
            <div className="w-[36px] h-[36px] bg-brand-zest-500 rounded-sm flex items-center justify-center">✦</div>
            <div>
              <div className="text-xs font-semibold text-text-primary leading-[1.4]">AI-Powered Suggestions</div>
              <div className="text-[10px] text-text-tertiary">3 meals ready with your pantry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
