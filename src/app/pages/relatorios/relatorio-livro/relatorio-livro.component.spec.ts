import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioLivroComponent } from './relatorio-livro.component';

describe('RelatorioLivroComponent', () => {
  let component: RelatorioLivroComponent;
  let fixture: ComponentFixture<RelatorioLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioLivroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
