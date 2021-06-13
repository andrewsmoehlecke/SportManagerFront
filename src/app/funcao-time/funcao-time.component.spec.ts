import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoTimeComponent } from './funcao-time.component';

describe('FuncaoTimeComponent', () => {
  let component: FuncaoTimeComponent;
  let fixture: ComponentFixture<FuncaoTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncaoTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
