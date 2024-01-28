import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclationRejeteComponent } from './reclation-rejete.component';

describe('ReclationRejeteComponent', () => {
  let component: ReclationRejeteComponent;
  let fixture: ComponentFixture<ReclationRejeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclationRejeteComponent]
    });
    fixture = TestBed.createComponent(ReclationRejeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
