import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreNosComponent } from './sobre-nos.component';
import { CommonModule } from '@angular/common';

describe('SobreNosComponent', () => {
  let component: SobreNosComponent;
  let fixture: ComponentFixture<SobreNosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreNosComponent],
      imports: [CommonModule]
    });
    fixture = TestBed.createComponent(SobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Sobre nós" in the page title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-title').textContent).toContain('Sobre nós');
  });
});

