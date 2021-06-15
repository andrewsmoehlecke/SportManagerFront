import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesTimeComponent } from './funcoes-time.component';

describe('FuncoesTimeComponent', () => {
  let component: FuncoesTimeComponent;
  let fixture: ComponentFixture<FuncoesTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncoesTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncoesTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
