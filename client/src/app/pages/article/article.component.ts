import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MOCK_NEWS } from '../../core/data/mock-news';
import { NewsArticle } from '../../core/types/news.types';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsCardComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article: NewsArticle | null = null;
  relatedArticles: NewsArticle[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.article = MOCK_NEWS.find(a => a.id === id) || null;

      if (this.article) {
        // Get related articles from same category
        this.relatedArticles = MOCK_NEWS
          .filter(a => a.category === this.article!.category && a.id !== this.article!.id)
          .slice(0, 3);

        // If not enough, fill with other articles
        if (this.relatedArticles.length < 3) {
          const others = MOCK_NEWS
            .filter(a => a.id !== this.article!.id && !this.relatedArticles.includes(a))
            .slice(0, 3 - this.relatedArticles.length);
          this.relatedArticles = [...this.relatedArticles, ...others];
        }
      }
    });
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  }

  goBack(): void {
    this.location.back();
  }

  shareArticle(): void {
    if (navigator.share) {
      navigator.share({
        title: this.article?.title,
        text: this.article?.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Посилання скопійовано!');
    }
  }
}
