import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoncoesTimeComponent } from './foncoes-time.component';

describe('FoncoesTimeComponent', () => {
  let component: FoncoesTimeComponent;
  let fixture: ComponentFixture<FoncoesTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoncoesTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoncoesTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
