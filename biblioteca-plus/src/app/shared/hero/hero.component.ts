import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  styles: [`
    .hero img {
      width: 100%;
      height: auto; /* mantém proporção natural */
      display: block;
      object-fit: cover;
    }
  `],
  template: `
    <section class="hero">
      <img src="/assets/hero1.PNG" alt="Hero image">
    </section>
  `
})
export class HeroComponent {}