import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwContainerComponent } from './sw-container.component';

describe('SwContainerComponent', () => {
  let component: SwContainerComponent;
  let fixture: ComponentFixture<SwContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
