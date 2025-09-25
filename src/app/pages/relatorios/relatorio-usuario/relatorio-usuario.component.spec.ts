import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioUsuarioComponent } from './relatorio-usuario.component';

describe('RelatorioUsuarioComponent', () => {
  let component: RelatorioUsuarioComponent;
  let fixture: ComponentFixture<RelatorioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
