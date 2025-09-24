import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAtrasosComponent } from './relatorio-atrasos.component';

describe('RelatorioAtrasosComponent', () => {
  let component: RelatorioAtrasosComponent;
  let fixture: ComponentFixture<RelatorioAtrasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioAtrasosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioAtrasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
