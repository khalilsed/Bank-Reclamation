import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTraiteComponent } from './reclamation-traite.component';

describe('ReclamationTraiteComponent', () => {
  let component: ReclamationTraiteComponent;
  let fixture: ComponentFixture<ReclamationTraiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationTraiteComponent]
    });
    fixture = TestBed.createComponent(ReclamationTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
