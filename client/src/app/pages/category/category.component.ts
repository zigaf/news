import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MOCK_NEWS, NEWS_CATEGORIES } from '../../core/data/mock-news';
import { NewsArticle } from '../../core/types/news.types';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  articles: NewsArticle[] = [];
  categoryName = '';
  categorySlug = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categorySlug = params['slug'];

      if (this.categorySlug === 'all') {
        this.articles = MOCK_NEWS;
        this.categoryName = 'Всі новини';
      } else {
        this.articles = MOCK_NEWS.filter(a => a.category === this.categorySlug);
        const category = NEWS_CATEGORIES.find(c => c.slug === this.categorySlug);
        this.categoryName = category?.name || 'Категорія';
      }
    });
  }
}
