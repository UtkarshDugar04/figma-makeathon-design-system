import React from 'react'

export default function MotionSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="motion" aria-labelledby="motion-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">◌ Motion</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="motion-heading">Motion Principles</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Motion must feel purposeful, not decorative. Every transition serves navigation clarity, attention direction, or emotional response.
          Hover each block to feel the difference between easing curves.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6" role="list">
        <div className="bg-bg-sunken border border-border-subtle rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer h-[180px]" role="listitem" aria-label="Spring easing demonstration">
          <div className="w-[40px] h-[40px] rounded-full transition-transform duration-moderate ease-spring group-hover:scale-[1.5]" style={{ background: 'linear-gradient(135deg, var(--brand-zest-400), var(--brand-zest-600))' }}></div>
          <div className="text-sm font-semibold text-text-primary text-center">Spring Scale</div>
          <div className="text-[10px] font-mono text-text-tertiary bg-bg-elevated py-1 px-2 rounded-md">ease-spring</div>
        </div>
        <div className="bg-bg-sunken border border-border-subtle rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer h-[180px]" role="listitem" aria-label="Bounce easing demonstration">
          <div className="w-[40px] h-[40px] rounded-full transition-transform duration-moderate ease-bounce group-hover:-translate-y-6" style={{ background: 'linear-gradient(135deg, var(--brand-sage-400), var(--brand-sage-600))' }}></div>
          <div className="text-sm font-semibold text-text-primary text-center">Bounce Lift</div>
          <div className="text-[10px] font-mono text-text-tertiary bg-bg-elevated py-1 px-2 rounded-md">ease-bounce</div>
        </div>
        <div className="bg-bg-sunken border border-border-subtle rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer h-[180px]" role="listitem" aria-label="Decelerate easing demonstration">
          <div className="w-[40px] h-[40px] rounded-full transition-transform duration-slow ease-decelerate translate-x-[-20px] opacity-50 group-hover:translate-x-[20px] group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, var(--brand-sky-400), var(--brand-plum-400))' }}></div>
          <div className="text-sm font-semibold text-text-primary text-center">Decelerate Entry</div>
          <div className="text-[10px] font-mono text-text-tertiary bg-bg-elevated py-1 px-2 rounded-md">ease-decelerate</div>
        </div>
        <div className="bg-bg-sunken border border-border-subtle rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer h-[180px]" role="listitem" aria-label="Pulse animation demonstration">
          <div className="w-[40px] h-[40px] rounded-full transition-all duration-normal ease-standard group-hover:shadow-[0_0_0_8px_rgba(235,94,77,0.2)]" style={{ background: 'linear-gradient(135deg, var(--brand-coral-400), var(--brand-zest-400))' }}></div>
          <div className="text-sm font-semibold text-text-primary text-center">Pulse (AI State)</div>
          <div className="text-[10px] font-mono text-text-tertiary bg-bg-elevated py-1 px-2 rounded-md">ease-standard</div>
        </div>
      </div>

      <hr className="my-10 border-border-subtle border-t" />

      {/* Duration Tokens */}
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Duration Tokens</div>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse" aria-label="Motion duration tokens">
          <thead>
            <tr className="border-b border-border-strong text-left text-[11px] uppercase tracking-wider text-text-tertiary font-bold">
              <th className="py-3 px-4 w-1/4">Token</th>
              <th className="py-3 px-4 w-[100px]">Value</th>
              <th className="py-3 px-4">Usage</th>
            </tr>
          </thead>
          <tbody className="text-sm text-text-primary">
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--duration-instant</td>
              <td className="py-3 px-4">50ms</td>
              <td className="py-3 px-4 text-text-secondary">Immediate state toggles, switch flips</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--duration-fast</td>
              <td className="py-3 px-4">100ms</td>
              <td className="py-3 px-4 text-text-secondary">Hover states, icon transforms</td>
            </tr>
            <tr className="border-b border-border-subtle bg-brand-light">
              <td className="py-3 px-4 font-mono font-bold text-brand">--duration-normal</td>
              <td className="py-3 px-4 font-bold text-brand">200ms</td>
              <td className="py-3 px-4 text-brand">Button presses, small component transitions <span className="text-[10px] font-semibold bg-white text-brand px-1.5 py-0.5 rounded ml-2 uppercase tracking-wide">Default</span></td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--duration-moderate</td>
              <td className="py-3 px-4">300ms</td>
              <td className="py-3 px-4 text-text-secondary">Card hover lifts, tab switching</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--duration-slow</td>
              <td className="py-3 px-4">400ms</td>
              <td className="py-3 px-4 text-text-secondary">Progress bars, macro fill animations</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--duration-deliberate</td>
              <td className="py-3 px-4">600ms</td>
              <td className="py-3 px-4 text-text-secondary">Modal entry, bottom sheet slide-up</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--duration-cinematic</td>
              <td className="py-3 px-4">800ms</td>
              <td className="py-3 px-4 text-text-secondary">Progress ring draw, success celebration</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
