import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetargetComponent } from './updatetarget.component';

describe('UpdatetargetComponent', () => {
  let component: UpdatetargetComponent;
  let fixture: ComponentFixture<UpdatetargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
