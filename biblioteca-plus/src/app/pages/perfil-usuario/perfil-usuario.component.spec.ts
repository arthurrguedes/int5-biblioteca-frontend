import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioComponent ],
      imports: [ CommonModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct user data', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.titulo').textContent).toContain('Meu Perfil');
    expect(compiled.querySelector('.campo p').textContent).toContain('Gabriel Souza');
    expect(compiled.querySelector('.campo p').textContent).toContain('bielsouza@gmail.com');
    expect(compiled.querySelector('.campo p').textContent).toContain('29/08/1998');
    expect(compiled.querySelector('.campo p').textContent).toContain('(21) 98765-4321');
  });

  it('should update profile image when a new image is selected', () => {
  const input = fixture.nativeElement.querySelector('input[type="file"]');
  const file = new File(['dummy content'], 'perfil.jpg', { type: 'image/jpeg' });

  
  const event = {
    target: { files: [file] }
  } as unknown as Event & { target: HTMLInputElement };  

  spyOn(component, 'trocarImagem');  
  input.dispatchEvent(new Event('change'));  
  fixture.detectChanges();  

  
  expect(component.trocarImagem).toHaveBeenCalledWith(event);
});

  it('should alert when edit profile button is clicked', () => {
    spyOn(window, 'alert');
    const button = fixture.nativeElement.querySelector('.btn-editar');
    button.click();
    expect(window.alert).toHaveBeenCalledWith('Funcionalidade de edição ainda não implementada.');
  });
});
