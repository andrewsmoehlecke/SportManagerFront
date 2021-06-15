import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTimeComponent } from './criar-time.component';

describe('CriarTimeComponent', () => {
  let component: CriarTimeComponent;
  let fixture: ComponentFixture<CriarTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
