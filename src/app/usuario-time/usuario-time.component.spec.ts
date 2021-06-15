import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTimeComponent } from './usuario-time.component';

describe('UsuarioTimeComponent', () => {
  let component: UsuarioTimeComponent;
  let fixture: ComponentFixture<UsuarioTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
