import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutomateComponent } from './create-automate.component';

describe('CreateAutomateComponent', () => {
  let component: CreateAutomateComponent;
  let fixture: ComponentFixture<CreateAutomateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAutomateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAutomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
