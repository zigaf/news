import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { CATEGORIES } from '../../core/types/news.types';
import { MOCK_ARTICLES } from '../../core/data/mock-news';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories = CATEGORIES;
  articles = MOCK_ARTICLES;
}
