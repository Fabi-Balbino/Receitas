import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheReceitaPage } from './detalhe-receita.page';

describe('DetalheReceitaPage', () => {
  let component: DetalheReceitaPage;
  let fixture: ComponentFixture<DetalheReceitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
