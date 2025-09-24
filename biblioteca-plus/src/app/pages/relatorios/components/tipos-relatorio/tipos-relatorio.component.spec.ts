import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposRelatorioComponent } from './tipos-relatorio.component';

describe('TiposRelatorioComponent', () => {
  let component: TiposRelatorioComponent;
  let fixture: ComponentFixture<TiposRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposRelatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
