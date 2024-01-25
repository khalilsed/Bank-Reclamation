import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationAttenteComponent } from './reclamation-attente.component';

describe('ReclamationAttenteComponent', () => {
  let component: ReclamationAttenteComponent;
  let fixture: ComponentFixture<ReclamationAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationAttenteComponent]
    });
    fixture = TestBed.createComponent(ReclamationAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
