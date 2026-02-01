import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsArticle } from '../../../core/types/news.types';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input({ required: true }) article!: NewsArticle;
  @Input() showExcerpt = false;

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
}
