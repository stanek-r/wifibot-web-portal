import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowkeysComponent } from './arrowkeys.component';

describe('ArrowkeysComponent', () => {
  let component: ArrowkeysComponent;
  let fixture: ComponentFixture<ArrowkeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowkeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
