import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-depl-record',
  templateUrl: './depl-record.component.html',
  styleUrls: ['./depl-record.component.css']
})
export class DeplRecordComponent implements OnInit {

  @Input() record: any;
  @Input() option: any;
  constructor() { }

  ngOnInit() {

    this.option.value = this.record.env.environment_type;
  }



}
