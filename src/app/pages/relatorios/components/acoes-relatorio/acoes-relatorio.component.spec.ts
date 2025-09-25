import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesRelatorioComponent } from './acoes-relatorio.component';

describe('AcoesRelatorioComponent', () => {
  let component: AcoesRelatorioComponent;
  let fixture: ComponentFixture<AcoesRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcoesRelatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
