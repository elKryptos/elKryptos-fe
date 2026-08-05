import { Component, afterNextRender, computed, signal } from '@angular/core';
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
