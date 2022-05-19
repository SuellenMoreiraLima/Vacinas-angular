import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVacinaComponent } from './listar-vacina.component';

describe('ListarVacinaComponent', () => {
  let component: ListarVacinaComponent;
  let fixture: ComponentFixture<ListarVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
