import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioUsuariosComponent } from './relatorio-usuarios.component';

describe('RelatorioUsuariosComponent', () => {
  let component: RelatorioUsuariosComponent;
  let fixture: ComponentFixture<RelatorioUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
