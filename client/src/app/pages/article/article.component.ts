import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MOCK_ARTICLES } from '../../core/data/mock-news';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  private route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  article = MOCK_ARTICLES.find(a => a.slug === this.slug) ?? MOCK_ARTICLES[0];
}
