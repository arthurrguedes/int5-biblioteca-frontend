import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioComponent } from './perfil-usuario.component';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilUsuarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name and email', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.campo:nth-child(2) p').textContent).toContain('Gabriel Souza');
    expect(compiled.querySelector('.campo:nth-child(3) p').textContent).toContain('gabriel.usuario@bibliotecamais.com.br');
  });
});
