import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
  <section class="hero">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <h1 class="display-5 mb-3">Esta é a <br/> Biblioteca+</h1>
        </div>
        <div class="col-lg-5">
          <p class="tagline fs-5">
            O site onde você encontra seus livros favoritos!
          </p>
        </div>
      </div>
    </div>
  </section>
  `
})
export class HeroComponent {}
