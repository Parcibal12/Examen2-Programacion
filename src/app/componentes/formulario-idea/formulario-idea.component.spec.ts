import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIdeaComponent } from './formulario-idea.component';

describe('FormularioIdeaComponent', () => {
  let component: FormularioIdeaComponent;
  let fixture: ComponentFixture<FormularioIdeaComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioIdeaComponent]
    })
    .compileComponents();


    fixture = TestBed.createComponent(FormularioIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
