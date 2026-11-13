/**
 * GLOBAL INTERNATIONAL SCHOOL - DEMONSTRATION WEBSITE
 * Modern, Vanilla JavaScript (ES6+) Implementation
 * No external libraries or dependencies required.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. SMART DYNAMIC SVG PLACEHOLDER GENERATOR
  // Displays premium educational visual placeholders if images are not yet provided
  // ==========================================================================
  const placeholderConfig = {
    'hero-school': {
      title: 'Global International School Campus',
      subtitle: 'Modern Educational Architecture • 15+ Acre Green Campus',
      icon: '<path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.8l6 5.4V19h-2v-6H8v6H6v-7.8l6-5.4zM12 9a2 2 0 100-4 2 2 0 000 4z"/>',
      category: 'Campus Architecture'
    },
    'school-campus': {
      title: 'State-of-the-Art Academic Campus',
      subtitle: 'Eco-Friendly, Landscaped Educational Environment',
      icon: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>',
      category: 'Campus Overview'
    },
    'classroom': {
      title: 'Smart Interactive Classrooms',
      subtitle: 'Ergonomic, Tech-Enabled Collaborative Spaces',
      icon: '<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>',
      category: 'Smart Learning'
    },
    'students-learning': {
      title: 'Interactive Student Collaboration',
      subtitle: 'Nurturing Inquisitive Minds & Teamwork',
      icon: '<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>',
      category: 'Collaborative Study'
    },
    'science-lab': {
      title: 'Advanced Science Laboratory',
      subtitle: 'Hands-on Experiments in Physics, Chemistry & Biology',
      icon: '<path d="M19 19c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2 0-.3.1-.7.2-1l4.8-7.2V5H9V3h6v2h-1v5.8l4.8 7.2c.1.3.2.7.2 1zm-8-7.8l-3.2 4.8h8.4L13 11.2V5h-2v6.2z"/>',
      category: 'STEM & Research'
    },
    'computer-lab': {
      title: 'Digital Innovation & Robotics Lab',
      subtitle: 'High-Speed Workstations, Coding & AI Exploration',
      icon: '<path d="M4 6h16v10H4zm16-2H4c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h6l-2 2v1h8v-1l-2-2h6c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2z"/>',
      category: 'Technology & AI'
    },
    'school-library': {
      title: 'Central Library & Reading Zone',
      subtitle: 'Thousands of Volumes, Digital Archives & Quiet Study',
      icon: '<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>',
      category: 'Knowledge Hub'
    },
    'sports-facility': {
      title: 'Olympic-Standard Sports Complex',
      subtitle: 'Athletics Ground, Football Field, Indoor Courts & Fitness',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
      category: 'Athletics & Fitness'
    },
    'arts-activities': {
      title: 'Creative Arts & Music Studios',
      subtitle: 'Fine Arts, Pottery, Classical & Modern Music',
      icon: '<path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.35 19.57 10.63 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>',
      category: 'Visual & Performing Arts'
    },
    'school-events': {
      title: 'Multipurpose Auditorium & Events',
      subtitle: 'Annual Day, Debates, Model UN & Cultural Festivals',
      icon: '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>',
      category: 'Campus Culture'
    },
    'admissions': {
      title: 'Admissions & Student Welcome Desk',
      subtitle: 'Transparent, Guided Pathway for New Learners',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
      category: 'Admissions Journey'
    },
    'teacher-classroom': {
      title: 'Dedicated & Inspiring Faculty',
      subtitle: 'Mentors Nurturing Curiosity, Character & Leadership',
      icon: '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
      category: 'Faculty Excellence'
    },
    'gallery-01': {
      title: 'Panoramic School Campus View',
      subtitle: 'Serene Green Lawns & Modern Academic Wings',
      icon: '<path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2L7 10l-6 8h22L14 6z"/>',
      category: 'School Campus'
    },
    'gallery-02': {
      title: 'Modern Digital Classroom in Action',
      subtitle: 'Interactive Learning & Student Group Projects',
      icon: '<path d="M21 3H3C2 3 1 4 1 5v14c0 1 1 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 16H3V5h18v14z"/>',
      category: 'Modern Classrooms'
    },
    'gallery-03': {
      title: 'Student Science Discovery Lab',
      subtitle: 'Practical Chemistry & Physics Explorations',
      icon: '<path d="M9 2v2H8v7.2L3.2 19c-.3.4 0 1 .5 1h16.6c.5 0 .8-.6.5-1L16 11.2V4h-1V2H9z"/>',
      category: 'Science Laboratory'
    },
    'gallery-04': {
      title: 'Annual Inter-House Sports Meet',
      subtitle: 'Athletics, Teamwork, Sportsmanship & Energy',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
      category: 'Sports Activities'
    },
    'gallery-05': {
      title: 'Vibrant Cultural Fest & Theatre',
      subtitle: 'Music, Drama, Dance & Heritage Celebrations',
      icon: '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>',
      category: 'Cultural Events'
    },
    'gallery-06': {
      title: 'Robotics, Coding & Innovation Showcase',
      subtitle: 'Hands-on STEM Kits, Logic & Creative Building',
      icon: '<path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>',
      category: 'Creative Learning'
    }
  };

  function createSvgPlaceholder(key, width = 800, height = 600) {
    const config = placeholderConfig[key] || {
      title: 'Global International School Visual',
      subtitle: 'Educational Demonstration Visual',
      icon: '<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>',
      category: 'Demonstration'
    };

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
        <defs>
          <linearGradient id="bgGrad_${key}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#142B4A" />
            <stop offset="60%" stop-color="#1D3A63" />
            <stop offset="100%" stop-color="#2456A6" />
          </linearGradient>
          <radialGradient id="goldGlow_${key}" cx="80%" cy="20%" r="50%">
            <stop offset="0%" stop-color="#E5B64B" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#142B4A" stop-opacity="0" />
          </radialGradient>
          <pattern id="gridPattern_${key}" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
          </pattern>
        </defs>

        <!-- Base Background -->
        <rect width="100%" height="100%" fill="url(#bgGrad_${key})" />
        <rect width="100%" height="100%" fill="url(#goldGlow_${key})" />
        <rect width="100%" height="100%" fill="url(#gridPattern_${key})" />

        <!-- Outer Decorative Border -->
        <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="16" fill="none" stroke="rgba(229,182,75,0.3)" stroke-width="1.5" stroke-dasharray="6 4" />

        <!-- Category Badge -->
        <g transform="translate(40, 44)">
          <rect width="180" height="30" rx="15" fill="rgba(229,182,75,0.2)" stroke="#E5B64B" stroke-width="1" />
          <text x="90" y="19.5" fill="#E5B64B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="1" text-anchor="middle">
            ${config.category.toUpperCase()}
          </text>
        </g>

        <!-- Center Emblem & Icon -->
        <g transform="translate(${width / 2}, ${height / 2 - 40})">
          <!-- Emblem Circle -->
          <circle r="56" fill="rgba(255,255,255,0.08)" stroke="rgba(229,182,75,0.5)" stroke-width="2" />
          <circle r="46" fill="#142B4A" />
          <!-- Icon -->
          <g transform="translate(-18, -18) scale(1.5)" fill="#E5B64B">
            ${config.icon}
          </g>
        </g>

        <!-- Main Title -->
        <text x="${width / 2}" y="${height / 2 + 56}" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="700" text-anchor="middle">
          ${config.title}
        </text>

        <!-- Subtitle -->
        <text x="${width / 2}" y="${height / 2 + 86}" fill="rgba(255,255,255,0.78)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="400" text-anchor="middle">
          ${config.subtitle}
        </text>

        <!-- Watermark / Ready indicator -->
        <g transform="translate(${width / 2}, ${height - 48})">
          <rect x="-190" y="-14" width="380" height="28" rx="14" fill="rgba(0,0,0,0.35)" />
          <text y="4" fill="rgba(229,182,75,0.9)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" text-anchor="middle">
            ✦ Demo Visual Placeholder • Ready for ${key}.webp ✦
          </text>
        </g>
      </svg>
    `;

    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString.trim());
  }

  // Hook all images on page for graceful fallback
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    const src = img.getAttribute('src') || '';
    const match = src.match(/\/([a-zA-Z0-9_-]+)\.webp$/);
    const key = match ? match[1] : 'hero-school';

    img.addEventListener('error', function onImgError() {
      img.removeEventListener('error', onImgError);
      img.src = createSvgPlaceholder(key, 800, 600);
      img.classList.add('is-placeholder');
    });

    // Also check if src is empty or not yet loaded
    if (!img.complete || img.naturalWidth === 0) {
      // Browser will fire error if missing
    }
  });


  // ==========================================================================
  // 2. STICKY HEADER & SCROLL SHADOW
  // ==========================================================================
  const header = document.querySelector('.header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // ==========================================================================
  // 3. MOBILE NAVIGATION (HAMBURGER DRAWER)
  // ==========================================================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta .btn');

  function openMobileMenu() {
    mobileToggle.classList.add('is-active');
    navMenu.classList.add('is-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('is-active');
    navMenu.classList.remove('is-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          closeMobileMenu();
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') &&
          !navMenu.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }


  // ==========================================================================
  // 4. ACTIVE NAVIGATION LINK HIGHLIGHTING (SCROLLSPY)
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const mainNavLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerOffset = 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerOffset;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        mainNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();


  // ==========================================================================
  // 5. SMOOTH SCROLLING FOR ALL INTERNAL ANCHOR LINKS
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });


  // ==========================================================================
  // 6. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION
  // Only one question open at a time with smooth animation
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('is-open');
        const otherBtn = otherItem.querySelector('.faq-question-btn');
        if (otherBtn) {
          otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });


  // ==========================================================================
  // 7. SCHOOL GALLERY LIGHTBOX & CATEGORY FILTERING
  // ==========================================================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.querySelector('.lightbox-close');
  const lightboxPrevBtn = document.querySelector('.lightbox-prev');
  const lightboxNextBtn = document.querySelector('.lightbox-next');

  let currentGalleryIndex = 0;
  let activeGalleryItems = Array.from(galleryItems);

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Update active list for lightbox navigation
      activeGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  function openLightbox(index) {
    if (!lightbox || activeGalleryItems.length === 0) return;
    currentGalleryIndex = index;
    updateLightboxContent();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = activeGalleryItems[currentGalleryIndex];
    if (!item) return;

    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-item-title')?.textContent || 'Gallery Image';
    const caption = item.querySelector('.gallery-item-caption')?.textContent || '';

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = caption;
    lightboxCounter.textContent = `Image ${currentGalleryIndex + 1} of ${activeGalleryItems.length}`;
  }

  function showNextLightbox() {
    currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryItems.length;
    updateLightboxContent();
  }

  function showPrevLightbox() {
    currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent();
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const indexInActive = activeGalleryItems.indexOf(item);
      if (indexInActive !== -1) {
        openLightbox(indexInActive);
      }
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightbox);

  // Close lightbox by clicking backdrop
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNextLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrevLightbox();
    }
  });


  // ==========================================================================
  // 8. ANIMATED STATISTICS COUNTERS (IntersectionObserver)
  // ==========================================================================
  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const duration = 2000; // ms
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeProgress * target);

        stat.textContent = currentValue.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = target.toLocaleString();
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  if (statsSection && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }


  // ==========================================================================
  // 9. SCROLL REVEAL ANIMATIONS
  // Respects prefers-reduced-motion
  // ==========================================================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('revealed');
    });
  }


  // ==========================================================================
  // 10. PROGRAM & FACILITY DETAIL MODAL DIALOGS
  // Makes all "Explore Programme" and "Facility" buttons fully interactive
  // ==========================================================================
  const modalOverlay = document.getElementById('details-modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBody = document.getElementById('modal-body');

  const modalDetailsData = {
    'early-years': {
      badge: 'Academic Programme • Ages 3 to 5',
      title: 'Early Years Programme',
      subtitle: 'Nurturing curiosity, foundational communication, and joyful discovery.',
      body: `
        <p>Our Early Years Programme creates a secure, stimulating environment where our youngest learners take their first bold steps into academic inquiry.</p>
        <h4>Key Learning Pillars:</h4>
        <ul>
          <li><strong>Play-Based Inquiry:</strong> Tactile manipulation, sensory play, and spatial reasoning.</li>
          <li><strong>Language & Literacy:</strong> Phonics foundations, multilingual storytelling, and vocal expression.</li>
          <li><strong>Numeracy & Logic:</strong> Pattern identification, early counting, and spatial puzzles.</li>
          <li><strong>Social-Emotional Growth:</strong> Collaborative sharing, empathy, and classroom routine self-regulation.</li>
        </ul>
        <p><em>Note: This is a demonstration curriculum breakdown for portfolio presentation.</em></p>
      `
    },
    'primary': {
      badge: 'Academic Programme • Ages 6 to 10',
      title: 'Primary School Programme',
      subtitle: 'Building enduring academic foundations, critical inquiry, and creative thinking.',
      body: `
        <p>Primary School at GIS sparks a love for structured disciplines while fostering collaborative problem-solving across disciplines.</p>
        <h4>Core Curricular Highlights:</h4>
        <ul>
          <li><strong>Core Academics:</strong> English Language Arts, Advanced Mathematics, General Science & Environmental Studies.</li>
          <li><strong>Applied STEM:</strong> Hands-on robotics kits, simple coding logic, and junior lab investigations.</li>
          <li><strong>Creative Expression:</strong> Visual arts, vocal/instrumental music, and expressive stage drama.</li>
          <li><strong>Physical Fitness:</strong> Swimming, track and field, yoga, and team ball sports.</li>
        </ul>
        <p><em>Illustrative sample curriculum designed for demonstration.</em></p>
      `
    },
    'middle': {
      badge: 'Academic Programme • Ages 11 to 14',
      title: 'Middle School Programme',
      subtitle: 'Empowering independent inquiry, analytical depth, and subject mastery.',
      body: `
        <p>Middle School bridges foundational knowledge with rigorous, inquiry-driven subject study, preparing adolescents for secondary rigors.</p>
        <h4>Specialized Focus Areas:</h4>
        <ul>
          <li><strong>Differentiated Sciences:</strong> Physics, Chemistry, and Biology in fully-equipped laboratory environments.</li>
          <li><strong>Quantitative Reasoning:</strong> Pre-algebra, geometry, mathematical proofs, and data visualization.</li>
          <li><strong>Humanities & Global Perspectives:</strong> World history, civic responsibility, and environmental sustainability.</li>
          <li><strong>Leadership & Clubs:</strong> Model United Nations, debate societies, and community outreach.</li>
        </ul>
        <p><em>Demonstration course profile for portfolio display.</em></p>
      `
    },
    'secondary': {
      badge: 'Academic Programme • Ages 15 to 18',
      title: 'Secondary & Senior Secondary Programme',
      subtitle: 'Pre-university preparation, critical scholarship, and ethical leadership.',
      body: `
        <p>The Secondary Programme prepares young adults for top Indian and international universities through challenging academic pathways and personalized career counselling.</p>
        <h4>Academic Tracks & Highlights:</h4>
        <ul>
          <li><strong>Science & Engineering Stream:</strong> Advanced Calculus, Mechanics, Organic Chemistry, Computer Science with AI modules.</li>
          <li><strong>Commerce & Economics Stream:</strong> Financial Accounting, Business Studies, Macroeconomics, and Entrepreneurship.</li>
          <li><strong>Humanities & Arts Stream:</strong> Political Science, Psychology, Sociology, and Literature.</li>
          <li><strong>University Guidance:</strong> Portfolio building, standardized test preparation, and university interview mentorship.</li>
        </ul>
        <p><em>Fictional educational curriculum model for demonstration purposes.</em></p>
      `
    },
    'facility-smart-classrooms': {
      badge: 'Campus Facility',
      title: 'Smart Classrooms',
      subtitle: 'Ergonomic, tech-enabled collaborative learning environments.',
      body: `
        <p>Every classroom features high-definition interactive display panels, modular acoustic furniture, and intelligent climate moderation to ensure an optimal learning environment.</p>
        <ul>
          <li>4K touch-sensitive interactive teaching consoles.</li>
          <li>Ergonomic seating designed for collaborative group work and individual focus.</li>
          <li>Acoustically treated walls for maximum speech clarity.</li>
          <li>High-speed fiber connectivity with parental-filtered content.</li>
        </ul>
      `
    },
    'facility-science-labs': {
      badge: 'Campus Facility',
      title: 'Science Laboratories',
      subtitle: 'Practical exploration in physics, chemistry, and life sciences.',
      body: `
        <p>Spacious, internationally specified laboratories equipped with fume hoods, digital compound microscopes, precision balances, and comprehensive safety containment systems.</p>
        <ul>
          <li>Dedicated Physics, Chemistry, and Biology wet and dry labs.</li>
          <li>Eye-wash stations, emergency showers, and automated fire suppression.</li>
          <li>Digital sensor probes for data logging and computer-interfaced physics calculations.</li>
        </ul>
      `
    },
    'facility-computer-labs': {
      badge: 'Campus Facility',
      title: 'Computer Laboratories & Robotics Wing',
      subtitle: 'Digital literacy, software engineering, and hardware tinkering.',
      body: `
        <p>Dual computer laboratories configured with modern workstations, development environments for Python, Scratch, Web Development, and dedicated maker kits for microcontrollers and robotics.</p>
      `
    },
    'facility-library': {
      badge: 'Campus Facility',
      title: 'Central Library & Reading Zone',
      subtitle: 'Quiet research hubs, extensive print holdings, and digital subscriptions.',
      body: `
        <p>Comfortable reading lounges, private research study carrels, over 15,000 illustrative volumes, and global academic database terminals.</p>
      `
    },
    'facility-sports': {
      badge: 'Campus Facility',
      title: 'Sports Facilities & Athletic Complex',
      subtitle: 'Dedicated infrastructure for physical conditioning and team games.',
      body: `
        <p>Features an athletic track, FIFA-dimensioned turf football field, all-weather synthetic basketball courts, badminton pavilion, and semi-Olympic swimming pool.</p>
      `
    },
    'facility-arts': {
      badge: 'Campus Facility',
      title: 'Arts & Music Studios',
      subtitle: 'Acoustically tuned rehearsal rooms and naturally lit painting studios.',
      body: `
        <p>Designed to nurture creative expression with Indian and Western classical musical instruments, recording gear, pottery wheels, and exhibition display panels.</p>
      `
    },
    'facility-auditorium': {
      badge: 'Campus Facility',
      title: 'Multipurpose Auditorium',
      subtitle: '800-seat professional auditorium for drama, symposiums, and assemblies.',
      body: `
        <p>Equipped with theatrical LED lighting rigs, surround sound acoustics, green rooms, and motorized projection screens for school events and guest lectures.</p>
      `
    },
    'facility-cafeteria': {
      badge: 'Campus Facility',
      title: 'Dining Hall & Healthy Cafeteria',
      subtitle: 'Nutritious, hygienically prepared meals planned by pediatric dieticians.',
      body: `
        <p>A spacious, sunlit dining hall serving balanced multi-cuisine vegetarian and healthy meals prepared in an ISO-compliant modern institutional kitchen.</p>
      `
    }
  };

  function openModal(key) {
    if (!modalOverlay) return;
    const data = modalDetailsData[key] || {
      badge: 'School Information',
      title: 'Global International School',
      subtitle: 'Demonstration details.',
      body: '<p>Explore our comprehensive educational programmes and student opportunities.</p>'
    };

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalBody.innerHTML = data.body;

    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Hook all explore programme buttons
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = trigger.getAttribute('data-open-modal');
      openModal(modalKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) {
      closeModal();
    }
  });


  // ==========================================================================
  // 11. CONTACT & ADMISSIONS ENQUIRY FORM VALIDATION
  // Full client-side validation, error cues, and animated demo success state
  // ==========================================================================
  const contactForm = document.getElementById('admissions-enquiry-form');
  const successBanner = document.getElementById('form-success-banner');

  if (contactForm) {
    const parentNameInput = document.getElementById('parent-name');
    const studentNameInput = document.getElementById('student-name');
    const emailInput = document.getElementById('parent-email');
    const phoneInput = document.getElementById('parent-phone');
    const studentAgeInput = document.getElementById('student-age');
    const programmeSelect = document.getElementById('interested-programme');
    const messageInput = document.getElementById('enquiry-message');

    function showError(inputEl, errorId, message) {
      inputEl.classList.add('is-invalid');
      const errEl = document.getElementById(errorId);
      if (errEl) {
        errEl.textContent = message;
        errEl.classList.add('visible');
      }
    }

    function clearError(inputEl, errorId) {
      inputEl.classList.remove('is-invalid');
      const errEl = document.getElementById(errorId);
      if (errEl) {
        errEl.classList.remove('visible');
      }
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
      // Basic 10-digit check (with optional +91 or spaces/hyphens)
      const digitsOnly = phone.replace(/\D/g, '');
      return digitsOnly.length >= 10 && digitsOnly.length <= 13;
    }

    // Realtime clear on input
    [parentNameInput, studentNameInput, emailInput, phoneInput, studentAgeInput, programmeSelect, messageInput].forEach(field => {
      if (!field) return;
      field.addEventListener('input', () => {
        const errorId = field.getAttribute('data-error-id');
        if (errorId) clearError(field, errorId);
      });
      field.addEventListener('change', () => {
        const errorId = field.getAttribute('data-error-id');
        if (errorId) clearError(field, errorId);
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Parent Name
      if (!parentNameInput.value.trim() || parentNameInput.value.trim().length < 2) {
        showError(parentNameInput, 'err-parent-name', 'Please enter parent/guardian full name (min 2 characters).');
        isValid = false;
      } else {
        clearError(parentNameInput, 'err-parent-name');
      }

      // Validate Student Name
      if (!studentNameInput.value.trim() || studentNameInput.value.trim().length < 2) {
        showError(studentNameInput, 'err-student-name', 'Please enter student full name.');
        isValid = false;
      } else {
        clearError(studentNameInput, 'err-student-name');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'err-parent-email', 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, 'err-parent-email');
      }

      // Validate Phone
      if (!phoneInput.value.trim() || !validatePhone(phoneInput.value.trim())) {
        showError(phoneInput, 'err-parent-phone', 'Please enter a valid phone number (min 10 digits).');
        isValid = false;
      } else {
        clearError(phoneInput, 'err-parent-phone');
      }

      // Validate Student Age
      const ageVal = parseInt(studentAgeInput.value, 10);
      if (!ageVal || ageVal < 2 || ageVal > 19) {
        showError(studentAgeInput, 'err-student-age', 'Please enter student age between 2 and 19 years.');
        isValid = false;
      } else {
        clearError(studentAgeInput, 'err-student-age');
      }

      // Validate Programme
      if (!programmeSelect.value) {
        showError(programmeSelect, 'err-programme', 'Please select an academic programme.');
        isValid = false;
      } else {
        clearError(programmeSelect, 'err-programme');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
        showError(messageInput, 'err-message', 'Please share a brief message or question (min 8 characters).');
        isValid = false;
      } else {
        clearError(messageInput, 'err-message');
      }

      if (isValid) {
        // Generate simulated application reference number
        const randomRef = 'GIS-' + Math.floor(100000 + Math.random() * 900000);
        const refElement = document.getElementById('demo-reference-code');
        if (refElement) refElement.textContent = randomRef;

        // Hide form fields & show confirmation
        contactForm.style.display = 'none';
        if (successBanner) {
          successBanner.classList.add('visible');
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    // Reset button inside success banner to submit another enquiry
    const resetFormBtn = document.getElementById('reset-demo-form-btn');
    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.style.display = 'block';
        if (successBanner) successBanner.classList.remove('visible');
      });
    }
  }

  // Pre-select program from admissions CTA
  window.selectProgrammeAndScroll = function(progValue) {
    const progSelect = document.getElementById('interested-programme');
    const contactSection = document.getElementById('contact');
    if (progSelect && progValue) {
      progSelect.value = progValue;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

});
