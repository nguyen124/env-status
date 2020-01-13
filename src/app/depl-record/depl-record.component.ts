import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-depl-record',
  templateUrl: './depl-record.component.html',
  styleUrls: ['./depl-record.component.css']
})
export class DeplRecordComponent implements OnInit {
  deplRecord: Object;
  @Input() option: string;
  @Input() artifact: string;
  @Input() selectedEnv: string;
  constructor(private _dataSvc: DataService) { }

  ngOnInit() {
    this.load(this.selectedEnv);
  }

  load(env) {
    this._dataSvc.getData(env, this.artifact).subscribe(data => {
      this.deplRecord = data;
    }, err => {
      this.deplRecord = null;
    });
  }
}
