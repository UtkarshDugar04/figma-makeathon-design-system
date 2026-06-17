import React from 'react'

export default function TokensSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="tokens" aria-labelledby="tokens-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">{'{}'} Tokens</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="tokens-heading">Design Token Architecture</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Three-tier token system: Raw values → Brand tokens → Semantic tokens. 
          Engineers consume only semantic tokens, never raw values.
        </p>
      </div>

      {/* Token Hierarchy */}
      <div className="bg-card-bg border border-card-border rounded-card p-8 mb-8 shadow-card">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="bg-brand-zest-100 text-brand-zest-700 py-3 px-5 rounded-xl font-bold text-sm">
            Layer 1: Raw Values<br /><span className="text-[10px] opacity-70">hsl(33, 93%, 50%)</span>
          </div>
          <div className="text-xl text-text-tertiary">→</div>
          <div className="bg-brand-sage-100 text-brand-sage-700 py-3 px-5 rounded-xl font-bold text-sm">
            Layer 2: Brand Tokens<br /><span className="text-[10px] opacity-70">--brand-zest-500</span>
          </div>
          <div className="text-xl text-text-tertiary">→</div>
          <div className="bg-brand-sky-100 text-brand-sky-600 py-3 px-5 rounded-xl font-bold text-sm">
            Layer 3: Semantic Tokens<br /><span className="text-[10px] opacity-70">--color-brand</span>
          </div>
          <div className="text-xl text-text-tertiary">→</div>
          <div className="bg-brand-plum-100 text-brand-plum-600 py-3 px-5 rounded-xl font-bold text-sm">
            Implementation<br /><span className="text-[10px] opacity-70">background: var(--color-brand)</span>
          </div>
        </div>
      </div>

      {/* Semantic Color Tokens Table */}
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Core Semantic Color Tokens</div>
      <div className="w-full overflow-x-auto mb-6">
        <table className="w-full min-w-[600px] border-collapse" aria-label="Core semantic color tokens">
          <thead>
            <tr className="border-b border-border-strong text-left text-[11px] uppercase tracking-wider text-text-tertiary font-bold">
              <th className="py-3 px-4">Token</th>
              <th className="py-3 px-4 w-12">Color</th>
              <th className="py-3 px-4">Light Value</th>
              <th className="py-3 px-4">Dark Value</th>
              <th className="py-3 px-4">Usage</th>
            </tr>
          </thead>
          <tbody className="text-sm text-text-primary">
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-brand</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-brand)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">brand-zest-500</td>
              <td className="py-3 px-4 text-text-tertiary">brand-zest-400</td>
              <td className="py-3 px-4">Primary CTAs, active states, brand moments</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-bg-base</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-bg-base)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,60%,99%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(30,8%,9%)</td>
              <td className="py-3 px-4">App background</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-bg-elevated</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-bg-elevated)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(0,0%,100%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(30,7%,13%)</td>
              <td className="py-3 px-4">Cards, nav, elevated surfaces</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-text-primary</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-text-primary)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,8%,10%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,20%,95%)</td>
              <td className="py-3 px-4">Headings, primary labels, critical text</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-text-secondary</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-text-secondary)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,8%,32%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,12%,72%)</td>
              <td className="py-3 px-4">Body copy, supporting information</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-text-tertiary</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-text-tertiary)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,8%,52%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(38,8%,50%)</td>
              <td className="py-3 px-4">Captions, placeholders, metadata</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-ai-primary</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-ai-primary)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(198,72%,40%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(198,80%,58%)</td>
              <td className="py-3 px-4">AI features, suggestions, voice states</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-success</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-success)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(147,50%,38%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(147,60%,48%)</td>
              <td className="py-3 px-4">Positive feedback, fresh items, good health</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-warning</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-warning)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(40,95%,44%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(48,100%,52%)</td>
              <td className="py-3 px-4">Watch-out expiry, nutritional gaps</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="py-3 px-4 font-mono font-medium text-text-secondary">--color-error</td>
              <td className="py-3 px-4"><span className="w-6 h-6 rounded border border-border-subtle block" style={{ background: 'var(--color-error)' }}></span></td>
              <td className="py-3 px-4 text-text-tertiary">hsl(0,72%,48%)</td>
              <td className="py-3 px-4 text-text-tertiary">hsl(0,72%,58%)</td>
              <td className="py-3 px-4">Expired items, critical errors, urgent alerts</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* File Structure */}
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Design System File Structure</div>
      <div className="bg-card-bg border border-card-border rounded-card p-6 font-mono text-sm leading-relaxed shadow-card">
        <div className="text-brand font-bold">household-food-os/</div>
        <div className="text-text-secondary ml-4">design-system/</div>
        <div className="text-text-tertiary ml-8">tokens.css <span className="italic text-[11px]">// All design tokens (this file)</span></div>
        <div className="text-text-tertiary ml-8">tokens.json <span className="italic text-[11px]">// JSON for design tool sync</span></div>
        <div className="text-text-secondary ml-4">components/</div>
        <div className="text-text-tertiary ml-8">cards/</div>
        <div className="text-text-tertiary ml-8">navigation/</div>
        <div className="text-text-tertiary ml-8">inputs/</div>
        <div className="text-text-tertiary ml-8">feedback/</div>
        <div className="text-text-tertiary ml-8">ai/</div>
        <div className="text-text-tertiary ml-8">dataviz/</div>
        <div className="text-text-secondary ml-4">illustrations/</div>
        <div className="text-text-secondary ml-4">icons/</div>
        <div className="text-text-secondary ml-4">guidelines/</div>
        <div className="text-text-tertiary ml-8">motion.md</div>
        <div className="text-text-tertiary ml-8">photography.md</div>
        <div className="text-text-tertiary ml-8">illustration.md</div>
        <div className="text-text-tertiary ml-8">accessibility.md</div>
        <div className="text-brand-sage-500 ml-4">index.html <span className="text-text-tertiary italic text-[11px]">// This living design system</span></div>
      </div>
    </section>
  )
}
