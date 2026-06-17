import React from 'react'

interface TopbarProps {
  toggleTheme: () => void
}

export default function Topbar({ toggleTheme }: TopbarProps) {
  return (
    <div className="ds-topbar sticky top-0 z-sticky bg-bg-elevated/90 nav-blur border-b border-border-subtle py-4 px-10 flex items-center justify-between">
      <span className="font-bold text-text-primary tracking-tight">Household Food OS — Design System v1.0</span>
      <div className="flex items-center gap-4">
        <button 
          className="py-2 px-4 bg-brand-light text-brand text-sm font-semibold rounded-lg transition-colors hover:bg-brand-muted"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  )
}
