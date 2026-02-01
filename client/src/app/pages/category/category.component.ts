import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { CATEGORIES } from '../../core/types/news.types';
import { MOCK_ARTICLES } from '../../core/data/mock-news';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  private route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  category = CATEGORIES.find(c => c.slug === this.slug) ?? CATEGORIES[0];
  articles = MOCK_ARTICLES.filter(a => a.category.slug === this.slug);
}
