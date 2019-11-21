import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplRecordsComponent } from './depl-records.component';

describe('DeplRecordsComponent', () => {
  let component: DeplRecordsComponent;
  let fixture: ComponentFixture<DeplRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
