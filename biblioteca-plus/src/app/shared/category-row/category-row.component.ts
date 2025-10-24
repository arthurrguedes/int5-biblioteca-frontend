import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Book {
  id: number;
  title: string;
  coverUrl: string;
}

@Component({
  selector: 'app-category-row',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <section class="container my-4">
    <div class="section-head mb-2">
      <span class="section-badge">{{ title }}</span>
      <a [routerLink]="seeMoreLink" class="see-more">Ver mais</a>
    </div>

    <!-- <div class="section-wrap p-3">
      <div class="scroll-row">
        <article class="book-card" *ngFor="let b of books">
          <img [src]="b.coverUrl" [alt]="b.title" loading="lazy" />
          <div class="title">{{ b.title }}</div>
        </article>
      </div>
    </div> -->
    <div class="section-wrap p-3">
      <div *ngIf="books && books.length > 0; else noBooks" class="scroll-row">
        <article class="book-card" *ngFor="let b of books">
          <img [src]="b.coverUrl" [alt]="b.title" loading="lazy" />
          <div class="title">{{ b.title }}</div>
        </article>
      </div>

      <ng-template #noBooks>
        <p class="text-muted">Nenhum livro disponível no momento.</p>
      </ng-template>
    </div>

  </section>
  `
})
export class CategoryRowComponent {
  @Input() title = '';
  @Input() seeMoreLink = '/catalogo';
  @Input() books: Book[] = [];
}
