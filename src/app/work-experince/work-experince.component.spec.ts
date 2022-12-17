import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperinceComponent } from './work-experince.component';

describe('WorkExperinceComponent', () => {
  let component: WorkExperinceComponent;
  let fixture: ComponentFixture<WorkExperinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
