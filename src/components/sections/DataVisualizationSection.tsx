import React from 'react'

export default function DataVisualizationSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="dataviz" aria-labelledby="dataviz-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">⊞ Data Viz</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="dataviz-heading">Data Visualization</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">
          Information that tells a story, not a spreadsheet. Nutrition, expiry, and inventory data should be scannable in under 3 seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expiry Risk Chart */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm flex flex-col h-full" aria-label="Expiry risk breakdown by category">
          <div className="text-sm font-bold text-text-primary mb-6">Expiry Risk Overview</div>
          <div className="flex flex-col gap-3 grow justify-center" role="list">
            <div className="flex items-center gap-4 text-sm font-medium" role="listitem">
              <div className="w-[80px] shrink-0 text-text-secondary">Expired</div>
              <div className="grow h-[8px] bg-bg-sunken rounded-full overflow-hidden flex"><div className="h-full rounded-full transition-all duration-moderate ease-spring" style={{ width: '8%', background: 'var(--expiry-expired)' }} aria-label="1 item expired"></div></div>
              <div className="w-[20px] shrink-0 text-right text-text-primary font-bold">1</div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium" role="listitem">
              <div className="w-[80px] shrink-0 text-text-secondary">Urgent</div>
              <div className="grow h-[8px] bg-bg-sunken rounded-full overflow-hidden flex"><div className="h-full rounded-full transition-all duration-moderate ease-spring" style={{ width: '16%', background: 'var(--expiry-urgent)' }} aria-label="2 items urgent"></div></div>
              <div className="w-[20px] shrink-0 text-right text-text-primary font-bold">2</div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium" role="listitem">
              <div className="w-[80px] shrink-0 text-text-secondary">Use Soon</div>
              <div className="grow h-[8px] bg-bg-sunken rounded-full overflow-hidden flex"><div className="h-full rounded-full transition-all duration-moderate ease-spring" style={{ width: '24%', background: 'var(--expiry-soon)' }} aria-label="3 items use soon"></div></div>
              <div className="w-[20px] shrink-0 text-right text-text-primary font-bold">3</div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium" role="listitem">
              <div className="w-[80px] shrink-0 text-text-secondary">Watch Out</div>
              <div className="grow h-[8px] bg-bg-sunken rounded-full overflow-hidden flex"><div className="h-full rounded-full transition-all duration-moderate ease-spring" style={{ width: '32%', background: 'var(--expiry-watchout)' }} aria-label="4 items watch out"></div></div>
              <div className="w-[20px] shrink-0 text-right text-text-primary font-bold">4</div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium" role="listitem">
              <div className="w-[80px] shrink-0 text-text-secondary">Good</div>
              <div className="grow h-[8px] bg-bg-sunken rounded-full overflow-hidden flex"><div className="h-full rounded-full transition-all duration-moderate ease-spring" style={{ width: '58%', background: 'var(--expiry-good)' }} aria-label="7 items good"></div></div>
              <div className="w-[20px] shrink-0 text-right text-text-primary font-bold">7</div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium" role="listitem">
              <div className="w-[80px] shrink-0 text-text-secondary">Fresh</div>
              <div className="grow h-[8px] bg-bg-sunken rounded-full overflow-hidden flex"><div className="h-full rounded-full transition-all duration-moderate ease-spring" style={{ width: '56%', background: 'var(--expiry-fresh)' }} aria-label="7 items fresh"></div></div>
              <div className="w-[20px] shrink-0 text-right text-text-primary font-bold">7</div>
            </div>
          </div>
        </div>

        {/* Weekly Food Waste Trend */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 shadow-sm flex flex-col h-full" aria-label="Weekly food waste prevented trend">
          <div className="text-sm font-bold text-text-primary mb-6">Waste Prevented This Week</div>
          <div className="flex items-end justify-between grow h-[160px] pt-4" role="img" aria-label="Bar chart showing food waste prevented daily: Mon 60%, Tue 40%, Wed 75%, Thu 30%, Fri 90%, Sat 50%, Sun 65%">
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group">
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '60%', background: 'linear-gradient(0deg, var(--brand-sage-400), var(--brand-sage-300))' }}></div>
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Mon</div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group">
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '40%', background: 'linear-gradient(0deg, var(--brand-sage-400), var(--brand-sage-300))' }}></div>
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Tue</div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group">
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '75%', background: 'linear-gradient(0deg, var(--brand-sage-400), var(--brand-sage-300))' }}></div>
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Wed</div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group">
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '30%', background: 'linear-gradient(0deg, var(--brand-sage-400), var(--brand-sage-300))' }}></div>
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Thu</div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group relative">
              <div className="absolute -top-8 bg-text-primary text-bg-elevated text-[10px] font-bold py-1 px-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity">90%</div>
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '90%', background: 'linear-gradient(0deg, var(--brand-sage-500), var(--brand-sage-400))' }}></div>
              <div className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Fri</div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group">
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '50%', background: 'linear-gradient(0deg, var(--brand-sage-400), var(--brand-sage-300))' }}></div>
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Sat</div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full h-full justify-end group">
              <div className="w-full max-w-[24px] rounded-t-sm transition-all duration-moderate ease-spring group-hover:opacity-80" style={{ height: '65%', background: 'linear-gradient(0deg, var(--brand-sage-400), var(--brand-sage-300))' }}></div>
              <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">Sun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
