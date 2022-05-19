import { FormVacinacaoComponent } from './form-vacinacao.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('FormVacinacaoComponent', () => {
  let component: FormVacinacaoComponent;
  let fixture: ComponentFixture<FormVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
