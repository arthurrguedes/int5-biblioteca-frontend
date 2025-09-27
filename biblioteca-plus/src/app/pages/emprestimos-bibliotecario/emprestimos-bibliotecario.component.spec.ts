import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimosBibliotecarioComponent } from './emprestimos-bibliotecario.component';

describe('EmprestimosBibliotecarioComponent', () => {
  let component: EmprestimosBibliotecarioComponent;
  let fixture: ComponentFixture<EmprestimosBibliotecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimosBibliotecarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimosBibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
