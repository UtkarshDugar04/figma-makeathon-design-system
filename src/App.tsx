import React from 'react'
import { useTheme } from './hooks/useTheme'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import HeroSection from './components/sections/HeroSection'
import PrinciplesSection from './components/sections/PrinciplesSection'
import ColorSystemSection from './components/sections/ColorSystemSection'
import TypographySection from './components/sections/TypographySection'
import JourneySection from './components/sections/JourneySection'
import SpacingSection from './components/sections/SpacingSection'
import NavigationSection from './components/sections/NavigationSection'
import ButtonsSection from './components/sections/ButtonsSection'
import InputsSection from './components/sections/InputsSection'
import FeedbackSection from './components/sections/FeedbackSection'
import AISection from './components/sections/AISection'
import IconographySection from './components/sections/IconographySection'
import DataVisualizationSection from './components/sections/DataVisualizationSection'
import IllustrationsSection from './components/sections/IllustrationsSection'
import MotionSection from './components/sections/MotionSection'
import TokensSection from './components/sections/TokensSection'

function App() {
  const { theme, setTheme, toggleTheme } = useTheme()

  return (
    <div className="bg-bg-base text-text-primary antialiased font-sans selection:bg-brand-muted selection:text-brand-dark flex h-screen overflow-hidden w-full">
      <Sidebar theme={theme} setTheme={setTheme} />
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-bg-base relative pt-[60px] lg:pt-0 w-full max-w-full">
        <Topbar toggleTheme={toggleTheme} />
        <HeroSection />
        <PrinciplesSection />
        <ColorSystemSection />
        <TypographySection />
        <JourneySection />
        <SpacingSection />
        <NavigationSection />
        <ButtonsSection />
        <InputsSection />
        <FeedbackSection />
        <AISection />
        <IconographySection />
        <DataVisualizationSection />
        <IllustrationsSection />
        <MotionSection />
        <TokensSection />
        
        {/* Footer */}
        <div className="py-12 px-10 border-t border-border-subtle bg-bg-sunken mt-auto">
          <div className="max-w-[1200px] flex items-center justify-between gap-6 flex-wrap">
            <div>
              <div className="text-lg font-bold text-text-primary mb-1">Household Food OS</div>
              <div className="text-sm text-text-tertiary">Design System v1.0 · WCAG 2.2 AA · 8pt Grid · Plus Jakarta Sans</div>
            </div>
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-1 py-[3px] px-2 rounded-pill text-[11px] font-semibold tracking-wide bg-brand-sage-100 text-brand-sage-700 dark:bg-[hsla(147,32%,48%,0.18)] dark:text-brand-sage-300">✓ WCAG AA</span>
              <span className="inline-flex items-center gap-1 py-[3px] px-2 rounded-pill text-[11px] font-semibold tracking-wide bg-brand-sky-100 text-brand-sky-600 dark:bg-[hsla(198,72%,50%,0.18)] dark:text-brand-sky-200">✦ AI-First</span>
              <span className="inline-flex items-center gap-1 py-[3px] px-2 rounded-pill text-[11px] font-semibold tracking-wide bg-brand-zest-100 text-brand-zest-700 dark:bg-[hsla(33,93%,50%,0.18)] dark:text-brand-zest-300">⊞ 8pt Grid</span>
              <span className="inline-flex items-center gap-1 py-[3px] px-2 rounded-pill text-[11px] font-semibold tracking-wide bg-brand-plum-100 text-brand-plum-600 dark:bg-[hsla(270,44%,55%,0.18)] dark:text-brand-plum-300">◉ Dark Mode</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
