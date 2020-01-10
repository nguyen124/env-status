import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-depl-records',
  templateUrl: './depl-records.component.html',
  styleUrls: ['./depl-records.component.css']
})
export class DeplRecordsComponent implements OnInit {
  deplRecords: any;
  selectRowStr: string;
  options = [
    { name: 'Implementation-Title', value: 'Implementation-Title', checked: true },
    { name: 'Implementation-Version', value: 'Implementation-Version', checked: true },
    { name: 'Implementation-Vendor-Id', value: 'Implementation-Vendor-Id', checked: true },
    { name: 'Implementation-Vendor', value: 'Implementation-Vendor', checked: true },
    { name: 'Implementation-URL', value: 'Implementation-URL', checked: true },
    { name: 'Build-Job', value: 'Build-Job', checked: true },
    { name: 'Build-Tag', value: 'Build-Tag', checked: true },
    { name: 'Build-Id', value: 'Build-Id', checked: true },
    { name: 'Build-Number', value: 'Build-Number', checked: true },
    { name: 'Build-Revision', value: 'Build-Revision', checked: true },
    { name: 'Build-Time', value: 'Build-Time', checked: true }
  ]

  environments = ["cct601", "pdt601", "uat601"];
  artifacts = ["dashboard", "settings", "help-center", "fsa-id", "universal-navigation", "notifications", "mpn", "loan-simulator"];

  selected = [];
  selectedEnv: string = this.environments[0];
  selectedArtifact: string = this.artifacts[0];

  constructor(private _dataSvc: DataService) {

  }

  ngOnInit() {
    this.onOptionsSelected(null);
  }

  onOptionsSelected(value) {
    console.log(this.selectedEnv + " -" + this.selectedArtifact);
    this._dataSvc.getData(this.selectedEnv, this.selectedArtifact).subscribe(data => {
      this.deplRecords = data;
    });
  }

}
