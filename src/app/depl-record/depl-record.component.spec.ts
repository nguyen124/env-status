import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplRecordComponent } from './depl-record.component';

describe('DeplRecordComponent', () => {
  let component: DeplRecordComponent;
  let fixture: ComponentFixture<DeplRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeplRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
