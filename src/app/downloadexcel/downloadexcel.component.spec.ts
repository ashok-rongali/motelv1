import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadexcelComponent } from './downloadexcel.component';

describe('DownloadexcelComponent', () => {
  let component: DownloadexcelComponent;
  let fixture: ComponentFixture<DownloadexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
