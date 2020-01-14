import { Component, OnInit, ViewChild } from '@angular/core';
import { DeplRecordComponent } from '../depl-record/depl-record.component';
import { DataService } from '../data.service';
import { $ } from 'protractor';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-depl-records',
  templateUrl: './depl-records.component.html',
  styleUrls: ['./depl-records.component.css']
})
export class DeplRecordsComponent implements OnInit {
  deplRecords: Object = {};
  @ViewChild(DeplRecordComponent, { static: false }) depRecordChild: DeplRecordComponent;
  @ViewChild(ViewerComponent, {static: false}) viewerChild: ViewerComponent;
  options = [
    { name: 'Implementation-Title', value: 'Implementation-Title', checked: true },
    { name: 'Implementation-Version', value: 'Implementation-Version', checked: true },
    { name: 'Implementation-Vendor-Id', value: 'Implementation-Vendor-Id', checked: true },
    { name: 'Implementation-Vendor', value: 'Implementation-Vendor', checked: false },
    { name: 'Implementation-URL', value: 'Implementation-URL', checked: false },
    { name: 'Build-Job', value: 'Build-Job', checked: true },
    { name: 'Build-Tag', value: 'Build-Tag', checked: true },
    { name: 'Build-Id', value: 'Build-Id', checked: true },
    { name: 'Build-Number', value: 'Build-Number', checked: true },
    { name: 'Build-Revision', value: 'Build-Revision', checked: false },
    { name: 'Build-Time', value: 'Build-Time', checked: true }
  ]

  environments = ["cct601", "pdt601", "uat601"];
  artifacts = ["dashboard", "settings", "help-center", "fsa-id", "universal-navigation", "notifications", "mpn", "loan-simulator"];

  selectedEnv: string = this.environments[0];

  constructor(private _svc: DataService) {
  }

  ngOnInit() {
   
  }

  onOptionsSelected(value) {
    this.depRecordChild.load(value);
    this.viewerChild.load(value);
  }
}
