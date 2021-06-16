import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioTimeComponent } from './editar-usuario-time.component';

describe('EditarUsuarioTimeComponent', () => {
  let component: EditarUsuarioTimeComponent;
  let fixture: ComponentFixture<EditarUsuarioTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUsuarioTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsuarioTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
