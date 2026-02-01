import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MOCK_NEWS, NEWS_CATEGORIES } from '../../core/data/mock-news';
import { NewsArticle, Category } from '../../core/types/news.types';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  articles = MOCK_NEWS;
  newsCategories = NEWS_CATEGORIES;

  featuredArticle: NewsArticle | null = null;
  heroArticles: NewsArticle[] = [];
  latestArticles: NewsArticle[] = [];

  private currentSlideIndex = 0;
  private slideInterval: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Get featured articles for hero slider
    this.heroArticles = this.articles.slice(0, 3);
    this.featuredArticle = this.heroArticles[0];

    // Get latest articles (excluding featured)
    this.latestArticles = this.articles.slice(1, 7);

    // Auto-rotate slider
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  setFeaturedArticle(index: number): void {
    this.currentSlideIndex = index;
    this.featuredArticle = this.heroArticles[index];
    this.restartAutoSlide();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroArticles.length;
    this.featuredArticle = this.heroArticles[this.currentSlideIndex];
    this.restartAutoSlide();
  }

  prevSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex === 0
      ? this.heroArticles.length - 1
      : this.currentSlideIndex - 1;
    this.featuredArticle = this.heroArticles[this.currentSlideIndex];
    this.restartAutoSlide();
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes} хв тому`;
    } else if (diffHours < 24) {
      return `${diffHours} год тому`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays} дн тому`;
    }
  }

  getCategoryIcon(slug: string): SafeHtml {
    const icons: Record<string, string> = {
      transport: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 5h8m-4 5v-5m-8 0h16M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />',
      economy: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
      education: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />',
      society: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />',
      politics: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />',
      culture: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />',
      sports: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
      volunteers: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />',
    };
    const svg = icons[slug] || '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getCategoryBgClass(slug: string): string {
    const classes: Record<string, string> = {
      transport: 'bg-blue-500/20',
      economy: 'bg-emerald-500/20',
      education: 'bg-amber-500/20',
      society: 'bg-purple-500/20',
      politics: 'bg-red-500/20',
      culture: 'bg-pink-500/20',
      sports: 'bg-orange-500/20',
      volunteers: 'bg-cyan-500/20',
    };
    return classes[slug] || 'bg-pulse-accent/20';
  }

  getCategoryIconClass(slug: string): string {
    const classes: Record<string, string> = {
      transport: 'text-blue-400',
      economy: 'text-emerald-400',
      education: 'text-amber-400',
      society: 'text-purple-400',
      politics: 'text-red-400',
      culture: 'text-pink-400',
      sports: 'text-orange-400',
      volunteers: 'text-cyan-400',
    };
    return classes[slug] || 'text-pulse-accent';
  }

  getCategoryCount(slug: string): number {
    return this.articles.filter(a => a.category === slug).length;
  }

  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  private stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
