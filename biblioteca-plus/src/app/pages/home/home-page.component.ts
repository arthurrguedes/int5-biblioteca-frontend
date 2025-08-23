import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CategoryRowComponent, Book } from '../../shared/category-row/category-row.component';
import { CommonModule } from '@angular/common';

const cover = (t: string) => `https://via.placeholder.com/300x420?text=${encodeURIComponent(t)}`;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, CategoryRowComponent],
  template: `
    <app-hero />

    <app-category-row
      title="Tecnologia"
      [books]="techBooks"
      seeMoreLink="/catalogo?cat=tecnologia"
    />

    <app-category-row
      title="Direito"
      [books]="lawBooks"
      seeMoreLink="/catalogo?cat=direito"
    />
  `
})
export class HomePageComponent {
  techBooks: Book[] = [
    { id:1, title:'Angular na Prática', coverUrl: cover('Angular') },
    { id:2, title:'TypeScript Essencial', coverUrl: cover('TS') },
    { id:3, title:'Clean Code', coverUrl: cover('Clean Code') },
    { id:4, title:'Algoritmos', coverUrl: cover('Algoritmos') },
    { id:5, title:'Git & GitHub', coverUrl: cover('Git') },
    { id:6, title:'Banco de Dados', coverUrl: cover('SQL') },
  ];

  lawBooks: Book[] = [
    { id:7, title:'Direito Civil', coverUrl: cover('Civil') },
    { id:8, title:'Direito Penal', coverUrl: cover('Penal') },
    { id:9, title:'Direito do Trabalho', coverUrl: cover('Trabalho') },
    { id:10, title:'Direito Tributário', coverUrl: cover('Tributário') },
    { id:11, title:'Processo Civil', coverUrl: cover('Proc. Civil') },
    { id:12, title:'Constitucional', coverUrl: cover('Constitucional') },
  ];
}
