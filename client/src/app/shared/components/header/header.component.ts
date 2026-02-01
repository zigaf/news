import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  name: string;
  slug: string;
  route: string;
  exact: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  navItems: NavItem[] = [
    { name: 'Новини', slug: 'news', route: '/', exact: true },
    { name: 'Тривоги', slug: 'alerts', route: '/alerts', exact: false },
    { name: 'Карта', slug: 'map', route: '/map', exact: false },
    { name: 'Контакти', slug: 'contacts', route: '/contacts', exact: false },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
