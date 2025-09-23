import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatoComponent } from './contato.component';
import { ContentBoxComponent } from '../../shared/content-box/content-box.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ContatoComponent', () => {
  let component: ContatoComponent;
  let fixture: ComponentFixture<ContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatoComponent, ContentBoxComponent],
      imports: [CommonModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit and show alert', () => {
    spyOn(window, 'alert'); // Espiona o alert global
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Mensagem enviada com sucesso!');
  });

  it('should render the page title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-title').textContent).toContain('Contatos');
  });
});
