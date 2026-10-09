import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorAgregado } from './valor-agregado';

describe('ValorAgregado', () => {
  let component: ValorAgregado;
  let fixture: ComponentFixture<ValorAgregado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorAgregado],
    }).compileComponents();

    fixture = TestBed.createComponent(ValorAgregado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
