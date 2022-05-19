import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVacinacaoComponent } from './listar-vacinacao.component';

describe('ListarComponent', () => {
  let component: ListarVacinacaoComponent;
  let fixture: ComponentFixture<ListarVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
