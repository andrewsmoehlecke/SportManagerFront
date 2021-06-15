import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarFuncaoTimeComponent } from './modificar-funcao-time.component';

describe('ModificarFuncaoTimeComponent', () => {
  let component: ModificarFuncaoTimeComponent;
  let fixture: ComponentFixture<ModificarFuncaoTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarFuncaoTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarFuncaoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
