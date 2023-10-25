import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPredictComponent } from './popupPredict.component';

describe('PopupPredictComponent', () => {
  let component: PopupPredictComponent;
  let fixture: ComponentFixture<PopupPredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPredictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
