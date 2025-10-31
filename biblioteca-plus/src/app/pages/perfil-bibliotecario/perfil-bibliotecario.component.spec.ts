import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilBibliotecarioComponent } from './perfil-bibliotecario.component';

describe('PerfilBibliotecarioComponent', () => {
  let component: PerfilBibliotecarioComponent;
  let fixture: ComponentFixture<PerfilBibliotecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilBibliotecarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilBibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display bibliotecário name and email', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.campo:nth-child(2) p').textContent).toContain('Ana Beatriz');
    expect(compiled.querySelector('.campo:nth-child(3) p').textContent).toContain('ana.bibliotecaria@bibliotecamais.com.br');
  });
});
