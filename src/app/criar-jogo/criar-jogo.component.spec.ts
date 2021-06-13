import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarJogoComponent } from './criar-jogo.component';

describe('CriarJogoComponent', () => {
  let component: CriarJogoComponent;
  let fixture: ComponentFixture<CriarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
