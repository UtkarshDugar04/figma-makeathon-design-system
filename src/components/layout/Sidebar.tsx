import React from 'react'
import { Theme } from '../../hooks/useTheme'

interface SidebarProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export default function Sidebar({ theme, setTheme }: SidebarProps) {
  // We handle active links purely through native anchors for a single-page design system
  // but if we need state, we can add it later.
  return (
    <nav 
      className="w-[260px] shrink-0 fixed top-0 left-0 h-screen overflow-y-auto bg-bg-elevated border-r border-border-subtle flex flex-col z-sticky transition-colors duration-moderate ease-standard" 
      id="ds-sidebar"
    >
      <div className="p-6 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-[36px] h-[36px] bg-brand rounded-md flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text-primary leading-none tracking-tight">Household Food OS</span>
            <span className="text-[10px] font-medium text-text-tertiary tracking-wider uppercase mt-[2px]">Design System v1.0</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 px-3 overflow-y-auto">
        <div className="mb-6">
          <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary px-3 mb-2">Foundation</div>
          <a href="#principles" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&#10022;</span> Design Principles
          </a>
          <a href="#journey" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&rarr;</span> User Journey
          </a>
          <a href="#colors" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-brand text-sm font-semibold bg-brand-muted">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&bull;</span> Color System
          </a>
          <a href="#typography" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">T</span> Typography
          </a>
          <a href="#spacing" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&oplus;</span> Spacing
          </a>
          <a href="#radius" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&square;</span> Radius
          </a>
          <a href="#elevation" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&lozenge;</span> Elevation
          </a>
        </div>

        <div className="mb-6">
          <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary px-3 mb-2">Components</div>
          <a href="#navigation" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&equiv;</span> Navigation
          </a>
          <a href="#buttons" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&oplus;</span> Buttons
          </a>
          <a href="#inputs" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&#9000;</span> Inputs
          </a>
          <a href="#cards" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&#9636;</span> Cards
          </a>
          <a href="#feedback" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&odot;</span> Feedback
          </a>
          <a href="#ai" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&#10022;</span> AI Components
          </a>
          <a href="#icons" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&otimes;</span> Iconography
          </a>
        </div>

        <div className="mb-6">
          <div className="text-[10px] font-bold tracking-widest uppercase text-text-tertiary px-3 mb-2">Visual Language</div>
          <a href="#dataviz" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&#9641;</span> Data Visualization
          </a>
          <a href="#illustrations" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&#9726;</span> Illustrations
          </a>
          <a href="#motion" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">&ominus;</span> Motion
          </a>
          <a href="#tokens" className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary">
            <span className="w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0">{"{}"}</span> Design Tokens
          </a>
        </div>
      </div>

      <div className="py-4 px-6 border-t border-border-subtle">
        <div className="flex items-center gap-3 bg-bg-sunken border border-border rounded-pill p-1 cursor-pointer w-full" role="group" aria-label="Theme selector">
          <button 
            className={`flex-1 py-2 px-3 rounded-pill text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all duration-normal ease-spring cursor-pointer ${
              theme === 'light' ? 'bg-bg-elevated text-text-primary shadow-sm border-none' : 'text-text-tertiary border-none bg-transparent'
            }`}
            onClick={() => setTheme('light')} 
            aria-pressed={theme === 'light'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0}}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            Light
          </button>
          <button 
            className={`flex-1 py-2 px-3 rounded-pill text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all duration-normal ease-spring cursor-pointer ${
              theme === 'dark' ? 'bg-bg-elevated text-text-primary shadow-sm border-none' : 'text-text-tertiary border-none bg-transparent'
            }`}
            onClick={() => setTheme('dark')} 
            aria-pressed={theme === 'dark'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0}}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            Dark
          </button>
        </div>
      </div>
    </nav>
  )
}
