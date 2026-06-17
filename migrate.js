const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// The class mappings
const classMap = {
  'ds-shell': 'flex min-h-screen',
  'ds-sidebar': 'w-[260px] shrink-0 fixed top-0 left-0 h-screen overflow-y-auto bg-bg-elevated border-r border-border-subtle flex flex-col z-sticky transition-colors duration-moderate ease-standard',
  'ds-sidebar-logo': 'p-6 pb-4 border-b border-border-subtle',
  'ds-logo': 'flex items-center gap-3',
  'ds-logo-mark': 'w-[36px] h-[36px] bg-brand rounded-md flex items-center justify-center shrink-0',
  'ds-logo-text': 'flex flex-col',
  'ds-logo-name': 'text-sm font-bold text-text-primary leading-none tracking-tight',
  'ds-logo-sub': 'text-[10px] font-medium text-text-tertiary tracking-wider uppercase mt-[2px]',
  'ds-sidebar-nav': 'flex-1 p-4 px-3 overflow-y-auto',
  'ds-nav-section': 'mb-6',
  'ds-nav-section-label': 'text-[10px] font-bold tracking-widest uppercase text-text-tertiary px-3 mb-2',
  'ds-nav-item': 'flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-text-secondary text-sm font-medium hover:bg-brand-light hover:text-text-primary',
  'ds-nav-item active': 'flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-fast no-underline text-brand text-sm font-semibold bg-brand-muted',
  'ds-nav-icon': 'w-[20px] h-[20px] flex items-center justify-center text-[14px] shrink-0',
  'ds-sidebar-footer': 'py-4 px-6 border-t border-border-subtle',
  'ds-theme-toggle': 'flex items-center gap-3 bg-bg-sunken border border-border rounded-pill p-1 cursor-pointer w-full',
  'ds-theme-btn': 'flex-1 py-2 px-3 rounded-pill text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all duration-normal ease-spring text-text-tertiary border-none bg-transparent cursor-pointer',
  'ds-theme-btn active': 'flex-1 py-2 px-3 rounded-pill text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all duration-normal ease-spring border-none cursor-pointer bg-bg-elevated text-text-primary shadow-sm',
  'ds-main': 'ml-[260px] flex-1 min-w-0',
  'ds-section': 'py-16 px-10 border-b border-border-subtle max-w-[1200px]',
  'ds-section-header': 'mb-10',
  'ds-section-tag': 'inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-bold tracking-wider uppercase py-1 px-3 rounded-pill mb-3',
  'ds-section-title': 'text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4',
  'ds-section-desc': 'text-lg text-text-secondary leading-relaxed max-w-[640px]',
  'hero-section': 'bg-bg-sunken dark:bg-[#1a1715] py-20 px-10 relative overflow-hidden border-b border-border-subtle', // added dark:bg logic via config later, or utility
  'hero-inner': 'relative z-[1] grid grid-cols-2 gap-16 items-center max-w-[1200px]',
  'hero-eyebrow': 'inline-flex items-center gap-2 text-brand text-sm font-bold tracking-widest uppercase mb-4',
  'hero-title': 'text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter leading-tight text-text-primary mb-6',
  'hero-desc': 'text-lg text-text-secondary leading-relaxed mb-8',
  'hero-stats': 'flex gap-8',
  'hero-stat': 'flex flex-col',
  'hero-stat-value': 'text-2xl font-extrabold text-brand tracking-tight',
  'hero-stat-label': 'text-xs text-text-tertiary font-medium tracking-wide uppercase mt-[2px]',
  'hero-image-container': 'relative',
  'hero-image': 'w-full rounded-3xl shadow-2xl block',
  'hero-badge': 'absolute bottom-4 left-4 bg-bg-glass nav-blur border border-bg-glass-border rounded-xl py-3 px-4 flex items-center gap-3',
  'hero-badge-icon': 'w-[36px] h-[36px] bg-brand-zest-500 rounded-sm flex items-center justify-center',
  'hero-badge-text': 'text-xs font-semibold text-text-primary leading-[1.4]',
  'hero-badge-sub': 'text-[10px] text-text-tertiary',
  'color-grid': 'grid gap-8',
  'color-family': 'grid gap-4',
  'color-family-label': 'text-sm font-bold text-text-secondary tracking-wide uppercase',
  'color-swatches': 'flex gap-2 flex-wrap',
  'color-swatch': 'flex flex-col items-center gap-2',
  'swatch-block': 'w-[72px] h-[72px] rounded-lg shadow-sm relative cursor-pointer transition-all duration-normal ease-spring hover:scale-[1.08] hover:-translate-y-[2px] hover:shadow-lg',
  'swatch-label': 'text-[10px] font-medium text-text-tertiary text-center',
  'color-semantic-grid': 'grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4',
  'color-semantic-card': 'bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-3 shadow-sm',
  'semantic-color-dot': 'w-[44px] h-[44px] rounded-md',
  'semantic-color-name': 'text-sm font-semibold text-text-primary',
  'semantic-color-desc': 'text-xs text-text-tertiary leading-relaxed',
  'nutrition-strip': 'flex gap-2 p-4 bg-card-bg border border-card-border rounded-xl shadow-sm flex-wrap',
  'nutrition-badge': 'flex items-center gap-2 py-2 px-3 rounded-pill text-xs font-semibold',
  'nutrition-dot': 'w-[8px] h-[8px] rounded-full',
  'type-scale': 'flex flex-col gap-6',
  'type-row': 'flex items-baseline gap-8 py-5 border-b border-border-subtle',
  'type-meta': 'w-[120px] shrink-0',
  'type-meta-label': 'text-xs font-semibold text-text-tertiary tracking-wide',
  'type-meta-value': 'text-[10px] text-text-disabled mt-[2px]',
  'type-sample': 'flex-1 text-text-primary',
  'weight-showcase': 'grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mt-6',
  'weight-card': 'bg-card-bg border border-card-border rounded-xl p-5 flex flex-col gap-2',
  'weight-sample': 'text-2xl text-text-primary',
  'weight-label': 'text-xs text-text-tertiary font-medium',
  'card-showcase': 'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6',
  'fos-card': 'bg-card-bg border border-card-border rounded-card shadow-card overflow-hidden transition-all duration-moderate ease-spring cursor-pointer hover:-translate-y-1 hover:shadow-card-hover group',
  'meal-card-image': 'w-full h-[180px] object-cover block',
  'meal-card-body': 'p-5 pb-6',
  'meal-card-badges': 'flex gap-2 mb-3 flex-wrap',
  'fos-badge': 'inline-flex items-center gap-1 py-[3px] px-2 rounded-pill text-[11px] font-semibold tracking-wide',
  'badge-sage': 'bg-brand-sage-100 text-brand-sage-700 dark:bg-[hsla(147,32%,48%,0.18)] dark:text-brand-sage-300',
  'badge-zest': 'bg-brand-zest-100 text-brand-zest-700 dark:bg-[hsla(33,93%,50%,0.18)] dark:text-brand-zest-300',
  'badge-sky': 'bg-brand-sky-100 text-brand-sky-600 dark:bg-[hsla(198,72%,50%,0.18)] dark:text-brand-sky-200',
  'badge-plum': 'bg-brand-plum-100 text-brand-plum-600 dark:bg-[hsla(270,44%,55%,0.18)] dark:text-brand-plum-300',
  'badge-coral': 'bg-brand-coral-100 text-brand-coral-600 dark:bg-[hsla(12,82%,48%,0.18)] dark:text-brand-coral-300',
  'meal-card-title': 'text-lg font-bold text-text-primary leading-snug mb-2 tracking-tight',
  'meal-card-meta': 'flex gap-4 text-text-tertiary text-xs font-medium',
  'meal-card-footer': 'flex items-center justify-between py-4 px-5 border-t border-border-subtle',
  'meal-card-nutrients': 'flex gap-4',
  'nutrient-item': 'flex flex-col items-center',
  'nutrient-value': 'text-sm font-bold text-text-primary',
  'nutrient-label': 'text-[10px] text-text-tertiary',
  'meal-cta': 'w-[36px] h-[36px] bg-brand-zest-500 rounded-full flex items-center justify-center text-white text-[16px] transition-transform duration-fast ease-spring group-hover:scale-110',
  'ingredient-card': 'p-5 flex items-center gap-4',
  'ingredient-icon': 'w-[52px] h-[52px] rounded-xl flex items-center justify-center text-[24px] shrink-0',
  'ingredient-info': 'flex-1 min-w-0',
  'ingredient-name': 'text-base font-semibold text-text-primary tracking-tight',
  'ingredient-amount': 'text-xs text-text-secondary mt-[2px]',
  'expiry-indicator': 'flex flex-col items-end gap-1',
  'expiry-badge': 'py-[3px] px-3 rounded-pill text-[10px] font-bold tracking-wide',
  'expiry-fresh': 'bg-[#e5f5eb] text-[#22774d] dark:bg-[hsla(147,55%,40%,0.18)] dark:text-[#52c186]',
  'expiry-good': 'bg-[#eef5db] text-[#42721d] dark:bg-[hsla(93,60%,40%,0.18)] dark:text-[#7abf3c]',
  'expiry-soon': 'bg-[#ffe6cc] text-[#914608] dark:bg-[hsla(33,100%,50%,0.18)] dark:text-[#eb9c5e]',
  'expiry-urgent': 'bg-[#ffe4dc] text-[#931f0e] dark:bg-[hsla(12,82%,48%,0.18)] dark:text-[#eb5e4d]',
  'expiry-days': 'text-[10px] text-text-tertiary',
};

// Handle elements with multiple classes intelligently
Object.keys(classMap).sort((a,b) => b.length - a.length).forEach(key => {
  const replacement = classMap[key];
  const regex = new RegExp(`class="([^"]*?\\b)${key}(\\b[^"]*?)"`, 'g');
  html = html.replace(regex, (match, p1, p2) => {
    let newClass = `class="${p1.trim()} ${replacement} ${p2.trim()}"`;
    return newClass.replace(/\s+/g, ' ').replace(/class=" /g, 'class="').replace(/ "/g, '"');
  });
});

// Second pass for remaining exact matches or multiple occurrences
Object.keys(classMap).sort((a,b) => b.length - a.length).forEach(key => {
  const replacement = classMap[key];
  const regex = new RegExp(`(?<=class="[^"]*?\\b)${key}(?=\\b[^"]*?")`, 'g');
  html = html.replace(regex, replacement);
});

// Remove <style> block and update <head> to use tailwind CSS
html = html.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="./dist/output.css">');
// Also remove tokens.css reference
html = html.replace(/<link rel="stylesheet" href="design-system\/tokens.css">\n?/, '');

// Clean up extra spaces in classes
html = html.replace(/class="([^"]+)"/g, (m, p1) => {
  return `class="${p1.replace(/\s+/g, ' ').trim()}"`;
});

// Update any special pseudo elements like hero-section::before since we mapped hero-section
// Actually, hero-section::before needs a custom class or arbitrary variant in html
// We can just add `before:absolute before:-top-20 before:-right-20 before:w-[320px] before:h-[320px] before:bg-[radial-gradient(circle,hsla(33,93%,60%,0.08)_0%,transparent_70%)] before:pointer-events-none`
html = html.replace(/class="([^"]*hero-section[^"]*)"/g, (m, p1) => {
  if (!p1.includes('before:absolute')) {
      return `class="${p1} before:absolute before:-top-[80px] before:-right-[80px] before:w-[320px] before:h-[320px] before:bg-[radial-gradient(circle,hsla(33,93%,60%,0.08)_0%,transparent_70%)] before:pointer-events-none"`;
  }
  return m;
});

// Special active nav items mapping
html = html.replace(/class="([^"]*ds-nav-item[^"]*?)\bactive\b([^"]*)"/g, (m, p1, p2) => {
    // Already mapped ds-nav-item active. Wait, if it mapped, 'active' is gone.
    // If not, it means the class was `ds-nav-item active`. 
    // We already have a mapping for 'ds-nav-item active', so that's handled.
    return m;
});


fs.writeFileSync('index.html', html, 'utf8');
console.log('HTML updated successfully');
