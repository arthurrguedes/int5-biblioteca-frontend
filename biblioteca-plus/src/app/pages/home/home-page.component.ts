// import { Component } from '@angular/core';
// import { HeroComponent } from '../../shared/hero/hero.component';
// import { CategoryRowComponent, Book } from '../../shared/category-row/category-row.component';
// import { CommonModule } from '@angular/common';

// const cover = (t: string) => `https://via.placeholder.com/300x420?text=${encodeURIComponent(t)}`;

// @Component({
//   selector: 'app-home-page',
//   standalone: true,
//   imports: [CommonModule, HeroComponent, CategoryRowComponent],
//   template: `
//     <app-hero />

//     <app-category-row
//       title="Tecnologia"
//       [books]="techBooks"
//       seeMoreLink="/catalogo?cat=tecnologia"
//     />

//     <app-category-row
//       title="Direito"
//       [books]="lawBooks"
//       seeMoreLink="/catalogo?cat=direito"
//     />

//     <app-category-row
//       title="Romance"
//       [books]="romanceBooks"
//       seeMoreLink="/catalogo?cat=romance"
//     />
//   `
// })
// export class HomePageComponent {
//   techBooks: Book[] = [
//     { id:1, title:'Angular na Prática', coverUrl: cover('Angular') },
//     { id:2, title:'TypeScript Essencial', coverUrl: cover('TS') },
//     { id:3, title:'Clean Code', coverUrl: cover('Clean Code') },
//     { id:4, title:'Algoritmos', coverUrl: cover('Algoritmos') },
//     { id:5, title:'Git & GitHub', coverUrl: cover('Git') },
//     { id:6, title:'Banco de Dados', coverUrl: cover('SQL') },
//   ];

//   lawBooks: Book[] = [
//     { id:7, title:'Direito Civil', coverUrl: cover('Civil') },
//     { id:8, title:'Direito Penal', coverUrl: cover('Penal') },
//     { id:9, title:'Direito do Trabalho', coverUrl: cover('Trabalho') },
//     { id:10, title:'Direito Tributário', coverUrl: cover('Tributário') },
//     { id:11, title:'Processo Civil', coverUrl: cover('Proc. Civil') },
//     { id:12, title:'Constitucional', coverUrl: cover('Constitucional') },
//   ];

//   romanceBooks: Book[] = [
//     { id:13, title:'Dg', coverUrl: cover('Civil') },
//     { id:14, title:'Diggg', coverUrl: cover('Penal') },
//     { id:15, title:'Direhhh', coverUrl: cover('Trabalho') },
//     { id:16, title:'Dihhh', coverUrl: cover('Tributário') },
//     { id:17, title:'Prhh', coverUrl: cover('Proc. Civil') },
//     { id:18, title:'Conshd', coverUrl: cover('Constitucional') },
//   ];
// }



import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CategoryRowComponent, Book } from '../../shared/category-row/category-row.component';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { Category } from '../../interfaces/home.response';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, CategoryRowComponent],
  template: `
    <app-hero />

    <ng-container *ngFor="let category of categories">
      <app-category-row
        [title]="category.title"
        [books]="category.books"
        [seeMoreLink]="category.seeMoreLink"
      />
    </ng-container>
  `
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];

  constructor(private homeService: HomeService) {}

  // ngOnInit(): void {
  //   this.homeService.getHomeData().subscribe({
  //     next: (response) => {
  //       this.categories = response.categories;
  //     },
  //     error: (err) => {
  //       console.error('Erro ao carregar dados da home:', err);
  //     }
  //   });
  // }
  ngOnInit(): void {
  this.homeService.getHomeData().subscribe({
    next: (response) => {
      this.categories = response.categories;
    },
    error: (err) => {
      console.error('Erro ao carregar dados da home:', err);

      // Fallback visual: estrutura sem livros
      this.categories = [
        { title: 'Tecnologia', seeMoreLink: '/catalogo?cat=tecnologia', books: [] },
        { title: 'Direito', seeMoreLink: '/catalogo?cat=direito', books: [] },
        { title: 'Romance', seeMoreLink: '/catalogo?cat=romance', books: [] }
      ];
    }
  });
}


}