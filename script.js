// HalfOffTelegram - Optimized Script.js | Vanilla JS, Modular, Perf-Optimized

// Dark Mode Toggle
function initDarkMode() {
  const toggle = document.querySelector('.dark-toggle');
  if (!toggle) return;
  
  const html = document.documentElement;
  const isDark = localStorage.getItem('theme') === 'dark' || 
                 (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) html.setAttribute('data-theme', 'dark');
  
  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
}

// FAQ Accordion
function initFAQ() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const icon = q.querySelector('.icon');
      const isOpen = q.classList.contains('active');
      
      // Close others
      document.querySelectorAll('.faq-question.active').forEach(active => {
        if (active !== q) {
          active.classList.remove('active');
          active.nextElementSibling.style.display = 'none';
        }
      });
      
      if (isOpen) {
        q.classList.remove('active');
        answer.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        q.classList.add('active');
        answer.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Scroll Reveal (Lightweight IntersectionObserver)
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.feature-card, .review-card, .section').forEach(el => {
    observer.observe(el);
  });
}

// Lazy Images
function initLazyImages() {
  const images = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcset = img.dataset.srcset;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => observer.observe(img));
  } else {
    // Fallback
    images.forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
      img.classList.remove('lazy');
    });
  }
}

// Touch Swipe for Reviews (Mobile)
function initTouchSwipe() {
  if (!('ontouchstart' in window)) return;
  
  const grids = document.querySelectorAll('.reviews-grid');
  grids.forEach(grid => {
    let startX = 0, scrollLeft = 0;
    
    grid.addEventListener('touchstart', e => {
      startX = e.touches[0].pageX - grid.offsetLeft;
      scrollLeft = grid.scrollLeft;
    });
    
    grid.addEventListener('touchmove', e => {
      const x = e.touches[0].pageX - grid.offsetLeft;
      const walk = (x - startX) * 2;
      grid.scrollLeft = scrollLeft - walk;
    });
  });
}

// Button Pulse on Load
function initAnimations() {
  const btn = document.querySelector('.btn-telegram');
  if (btn) btn.classList.add('pulse');
  setTimeout(() => btn?.classList.remove('pulse'), 3000);
}

// Init All
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initFAQ();
  initScrollReveal();
  initLazyImages();
  initTouchSwipe();
  initAnimations();
});

// Perf: Preload critical resources
if ('connection' in navigator && navigator.connection.saveData) {
  // Skip non-critical on save-data
} else {
  const links = [
    'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
  ];
  links.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
}

// PWA Ready (optional)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {}); // Placeholder
}

