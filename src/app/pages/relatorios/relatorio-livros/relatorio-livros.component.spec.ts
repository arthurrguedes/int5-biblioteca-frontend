import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioLivrosComponent } from './relatorio-livros.component';

describe('RelatorioLivrosComponent', () => {
  let component: RelatorioLivrosComponent;
  let fixture: ComponentFixture<RelatorioLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
