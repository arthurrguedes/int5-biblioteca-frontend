import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-page',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="container my-5">
    <h2 class="mb-3">{{ title }}</h2>
    <p class="text-muted">Conteúdo em construção.</p>
  </section>
  `
})
export class StaticPageComponent {
  title = '';
  constructor(route: ActivatedRoute) {
    route.data.subscribe(d => this.title = d['title'] ?? '');
  }
}
