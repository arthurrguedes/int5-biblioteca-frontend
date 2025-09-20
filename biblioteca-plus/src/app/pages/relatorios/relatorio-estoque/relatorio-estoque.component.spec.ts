import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioEstoqueComponent } from './relatorio-estoque.component';

describe('RelatorioEstoqueComponent', () => {
  let component: RelatorioEstoqueComponent;
  let fixture: ComponentFixture<RelatorioEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioEstoqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
