import React from 'react'

export default function FeedbackSection() {
  return (
    <section className="py-16 px-10 border-b border-border-subtle max-w-[1200px]" id="feedback" aria-labelledby="feedback-heading">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3">◎ Feedback</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4" id="feedback-heading">Feedback Components</h2>
        <p className="text-lg text-text-secondary leading-relaxed max-w-[640px]">Alerts, toasts, skeletons, and empty states communicate system status while maintaining the product's encouraging, non-judgemental tone.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Alerts */}
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Alerts</div>
          <div className="flex flex-col gap-4" role="list">
            <div className="fos-alert alert-success" role="alert" aria-live="polite">
              <div className="alert-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="alert-content">
                <div className="alert-title">Kitchen scanned — 24 items found</div>
                <div className="alert-body">You have 3 items to use up soon. Here are 5 meals you can make tonight.</div>
              </div>
            </div>
            <div className="fos-alert alert-warning" role="alert">
              <div className="alert-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div className="alert-content">
                <div className="alert-title">Let's use your spinach today</div>
                <div className="alert-body">Spinach, bread, and oat milk are best used in the next 48 hours. Perfect for a quick frittata.</div>
              </div>
            </div>
            <div className="fos-alert alert-error" role="alert">
              <div className="alert-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <div className="alert-content">
                <div className="alert-title">Scan needs better lighting</div>
                <div className="alert-body">Move closer to a light source and try again — we'll get it on the next go.</div>
              </div>
            </div>
            <div className="fos-alert alert-info" role="status">
              <div className="alert-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
              </div>
              <div className="alert-content">
                <div className="alert-title">5 meal ideas ready for you</div>
                <div className="alert-body">Based on your pantry, we've planned meals that use everything before it expires.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Toasts */}
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Toasts</div>
          <div className="bg-bg-sunken p-6 rounded-2xl border border-border-subtle flex flex-col gap-4 relative min-h-[300px]" role="status" aria-live="polite">
            <div className="fos-toast relative w-full translate-y-0 opacity-100 mt-0 max-w-none shadow-sm z-30">
              <div className="toast-icon" style={{ background: 'var(--color-success-bg)', color: 'var(--color-success)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="toast-text">
                <div className="toast-title">Item added to pantry</div>
                <div className="toast-sub">Organic Spinach · 200g · Expiry Jun 17</div>
              </div>
              <div className="toast-close" role="button" aria-label="Dismiss notification" tabIndex={0}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </div>
            
            <div className="fos-toast relative w-full translate-y-0 opacity-100 mt-0 max-w-none shadow-sm z-20">
              <div className="toast-icon" style={{ background: 'var(--brand-zest-100)', color: 'var(--brand-zest-600)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V10M18 20V10"/><path d="M6 10a6 6 0 0 1 12 0"/></svg>
              </div>
              <div className="toast-text">
                <div className="toast-title">Meal plan ready</div>
                <div className="toast-sub">5 meals using your current pantry</div>
              </div>
              <div className="toast-close" role="button" aria-label="Dismiss notification" tabIndex={0}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </div>

            <div className="fos-toast relative w-full translate-y-0 opacity-100 mt-0 max-w-none shadow-sm z-10">
              <div className="toast-icon" style={{ background: 'var(--brand-plum-100)', color: 'var(--brand-plum-600)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="9" r="3"/><path d="M2 21v-1a7 7 0 0 1 14 0v1"/><path d="M17 12a5 5 0 0 1 5 5v1"/></svg>
              </div>
              <div className="toast-text">
                <div className="toast-title">Exchange confirmed</div>
                <div className="toast-sub">Sarah M. accepted your request for lemons</div>
              </div>
              <div className="toast-close" role="button" aria-label="Dismiss notification" tabIndex={0}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-10 border-border-subtle border-t" />

      {/* Skeleton Loading States & Empty State */}
      <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary mb-4">Skeleton Loading States</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        <div className="skeleton-card" aria-busy="true" aria-label="Loading meal card">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text-short"></div>
        </div>
        <div className="skeleton-card" aria-busy="true" aria-label="Loading ingredient card">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-[52px] h-[52px] rounded-xl shrink-0"></div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="skeleton skeleton-title w-[60%]"></div>
              <div className="skeleton skeleton-text-short w-[40%]"></div>
            </div>
          </div>
          <div className="skeleton skeleton-text mt-3"></div>
          <div className="skeleton skeleton-text-short"></div>
        </div>

        {/* Empty State */}
        <div className="flex justify-center bg-card-bg border border-card-border rounded-card">
          <div className="empty-state">
            <img
              className="empty-state-image"
              src="./assets/pantry_empty_state_1781548315286.png"
              alt="Empty refrigerator illustration — add your first item"
              loading="lazy"
            />
            <h3 className="empty-state-title">Your pantry is empty</h3>
            <p className="empty-state-desc">Scan your fridge or kitchen to automatically detect and track everything. It only takes 30 seconds.</p>
            <button className="fos-btn btn-primary btn-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              Scan My Kitchen
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
