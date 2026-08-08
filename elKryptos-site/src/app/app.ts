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

  private readonly logoVisibleCount = signal(0);
  protected readonly logoChars = computed(() => LOGO_CHARS.slice(0, this.logoVisibleCount()));

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

      const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrolled.set(scrollTop > 8);
        this.scrollProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      const hero = document.querySelector<HTMLElement>('#hero-spotlight');
      hero?.addEventListener('pointermove', (event) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
        hero.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
      });

      this.initGsapAnimations();
    });
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
