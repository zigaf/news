import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:slug', component: CategoryComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'alerts', redirectTo: '', pathMatch: 'full' },
  { path: 'map', redirectTo: '', pathMatch: 'full' },
  { path: 'contacts', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
