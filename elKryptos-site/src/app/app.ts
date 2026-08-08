import { Component, afterNextRender, computed, signal } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LANGS, translations, type Lang } from './i18n';

interface LogoChar {
  char: string;
  accent: boolean;
}

const LOGO_TEXT = '<Hans/elKryptos>';
const LOGO_ACCENT_CHARS = new Set(['<', '/', '>']);
const LOGO_CHARS: LogoChar[] = LOGO_TEXT.split('').map((char) => ({
  char,
  accent: LOGO_ACCENT_CHARS.has(char),
}));

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly mobileMenuOpen = signal(false);
  protected readonly phoneRevealed = signal(false);
  protected readonly emailRevealed = signal(false);
  protected readonly lang = signal<Lang>('it');
  protected readonly currentYear = new Date().getFullYear();

  protected readonly langs = LANGS;
  protected readonly copy = computed(() => translations[this.lang()]);

  protected readonly scrolled = signal(false);
  protected readonly scrollProgress = signal(0);
  protected readonly headerHeight = signal(64);

  private readonly logoVisibleCount = signal(0);
  protected readonly logoChars = computed(() => LOGO_CHARS.slice(0, this.logoVisibleCount()));

  private readonly nowTick = signal(Date.now());

  // Trip to Ukraine: the badge should reflect wherever I actually am without needing
  // a manual edit, since I won't be able to touch the code while traveling.
  private readonly travelWindowStart = Date.parse('2026-08-16T00:00:00Z');
  private readonly travelWindowEnd = Date.parse('2026-09-08T00:00:00Z'); // exclusive, i.e. back by Sep 7
  protected readonly isTraveling = computed(
    () => this.nowTick() >= this.travelWindowStart && this.nowTick() < this.travelWindowEnd,
  );

  protected readonly badgeTimeZone = computed(() => (this.isTraveling() ? 'Europe/Kyiv' : 'Europe/Rome'));
  protected readonly badgeLocation = computed(() =>
    this.isTraveling() ? this.copy().hero.travelLocation : this.copy().contact.location,
  );

  protected readonly localTime = computed(() =>
    new Intl.DateTimeFormat(this.lang(), {
      timeZone: this.badgeTimeZone(),
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }).format(this.nowTick()),
  );

  private readonly lastCommitAt = signal<Date | null>(null);
  protected readonly githubError = signal(false);
  protected readonly lastCommitLabel = computed(() => {
    const date = this.lastCommitAt();
    if (!date) {
      return null;
    }
    const diffMinutes = Math.round((this.nowTick() - date.getTime()) / 60000);
    const diffHours = Math.round(diffMinutes / 60);
    const diffDays = Math.round(diffHours / 24);
    const rtf = new Intl.RelativeTimeFormat(this.lang(), { numeric: 'auto' });
    if (Math.abs(diffMinutes) < 60) {
      return rtf.format(-diffMinutes, 'minute');
    }
    if (Math.abs(diffHours) < 24) {
      return rtf.format(-diffHours, 'hour');
    }
    return rtf.format(-diffDays, 'day');
  });

  constructor() {
    afterNextRender(() => {
      let i = 0;
      const timer = setInterval(() => {
        i++;
        this.logoVisibleCount.set(i);
        if (i >= LOGO_CHARS.length) {
          clearInterval(timer);
        }
      }, 70);

      const updateClock = () => this.nowTick.set(Date.now());
      updateClock();
      setInterval(updateClock, 30_000);

      fetch('https://api.github.com/users/elKryptos/events/public')
        .then((res) => {
          if (!res.ok) {
            throw new Error('GitHub API error');
          }
          return res.json();
        })
        .then((events: Array<{ type: string; created_at: string }>) => {
          const push = events.find((event) => event.type === 'PushEvent');
          if (push) {
            this.lastCommitAt.set(new Date(push.created_at));
          } else {
            this.githubError.set(true);
          }
        })
        .catch(() => this.githubError.set(true));

      const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrolled.set(scrollTop > 8);
        this.scrollProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      const header = document.querySelector<HTMLElement>('header');
      if (header) {
        const updateHeaderHeight = () => this.headerHeight.set(header.offsetHeight);
        updateHeaderHeight();
        new ResizeObserver(updateHeaderHeight).observe(header);
      }

      const hero = document.querySelector<HTMLElement>('#hero-spotlight');
      hero?.addEventListener('pointermove', (event) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
        hero.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
      });

      this.initStackMarquee();
      this.initGsapAnimations();
    });
  }

  private initStackMarquee(): void {
    const viewport = document.querySelector<HTMLElement>('.marquee-viewport');
    if (!viewport) {
      return;
    }

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let wheelIdleTimeout: ReturnType<typeof setTimeout> | undefined;
    let isWheeling = false;
    // Track position as a float in JS rather than re-reading scrollLeft each frame:
    // scrollLeft is rounded by the browser, so accumulating a sub-pixel step (0.4)
    // via read-modify-write on it gets rounded away before it ever reaches 1px.
    let virtualScrollLeft = viewport.scrollLeft;

    // Single place that applies the seamless loop: wrapping here (instead of only
    // during idle auto-scroll) means dragging past the halfway point loops just as
    // smoothly as the automatic motion, instead of snapping back once you let go.
    const setScroll = (value: number) => {
      const half = viewport.scrollWidth / 2;
      const wrapped = half > 0 ? ((value % half) + half) % half : value;
      virtualScrollLeft = wrapped;
      viewport.scrollLeft = wrapped;
    };

    const step = () => {
      if (!isDragging && !isWheeling) {
        setScroll(virtualScrollLeft + 0.4);
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);

    // Pointer Events unify mouse, touch and pen, so the same drag logic drives all of
    // them — relying on native touch scrolling here didn't work inside this container.
    viewport.addEventListener('pointerdown', (event) => {
      isDragging = true;
      viewport.classList.add('dragging');
      startX = event.clientX;
      startScrollLeft = viewport.scrollLeft;
      viewport.setPointerCapture(event.pointerId);
    });

    viewport.addEventListener('pointermove', (event) => {
      if (!isDragging) {
        return;
      }
      setScroll(startScrollLeft - (event.clientX - startX));
    });

    const endDrag = () => {
      isDragging = false;
      viewport.classList.remove('dragging');
    };
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointerleave', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    // Wheel/trackpad has no discrete "released" event, so fall back to a short idle check.
    viewport.addEventListener(
      'wheel',
      (event) => {
        isWheeling = true;
        setScroll(virtualScrollLeft + event.deltaX);
        clearTimeout(wheelIdleTimeout);
        wheelIdleTimeout = setTimeout(() => {
          isWheeling = false;
        }, 200);
      },
      { passive: true },
    );
  }

  private initGsapAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
      .from('#hero-badge', { opacity: 0, y: 16 })
      .from('#hero-title', { opacity: 0, y: 26 }, '-=0.45')
      .from('#hero-tagline', { opacity: 0, y: 20 }, '-=0.5')
      .from('#hero-ctas', { opacity: 0, y: 20 }, '-=0.45')
      .from('#hero-socials', { opacity: 0, y: 16 }, '-=0.4')
      .from('#hero-stack', { opacity: 0, y: 16 }, '-=0.35');

    gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 36,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    gsap.utils.toArray<HTMLElement>('.gsap-stagger').forEach((group) => {
      gsap.from(group.children, {
        opacity: 0,
        y: 28,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 85%' },
      });
    });

    gsap.utils.toArray<HTMLElement>('.gsap-parallax').forEach((el) => {
      const speed = Number(el.dataset['speed'] ?? 0.25);
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    gsap.utils.toArray<HTMLElement>('.gsap-card').forEach((card) => {
      const hover = gsap.to(card, {
        y: -6,
        boxShadow: '0 20px 40px -20px rgba(34, 211, 168, 0.35)',
        borderColor: 'rgba(77, 227, 189, 0.4)',
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
      });
      card.addEventListener('mouseenter', () => hover.play());
      card.addEventListener('mouseleave', () => hover.reverse());
    });
  }

  protected toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected setLang(lang: Lang): void {
    this.lang.set(lang);
    this.closeMenu();
  }

  protected revealPhone(): void {
    this.phoneRevealed.set(true);
  }

  protected revealEmail(): void {
    this.emailRevealed.set(true);
  }
}
