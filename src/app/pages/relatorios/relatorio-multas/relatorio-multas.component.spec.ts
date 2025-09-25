import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMultasComponent } from './relatorio-multas.component';

describe('RelatorioMultasComponent', () => {
  let component: RelatorioMultasComponent;
  let fixture: ComponentFixture<RelatorioMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioMultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
