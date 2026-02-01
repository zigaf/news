import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../../core/types/news.types';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input({ required: true }) article!: Article;
}
