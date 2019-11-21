import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-depl-records',
  templateUrl: './depl-records.component.html',
  styleUrls: ['./depl-records.component.css']
})
export class DeplRecordsComponent implements OnInit {
  deplRecords: any;
  options = [
    { name: 'Environment', value: '', checked: true },
    { name: 'Code Version', value: '', checked: true },
    { name: 'Assignment Type', value: '', checked: true },
    { name: 'Artifact', value: '', checked: true },
    { name: 'Pending Deployment Version', value: '', checked: true },
    { name: 'Pending Deployment Build', value: '', checked: true },
    { name: 'Last Deployed Version', value: '', checked: false },
    { name: 'Last Deployed Build', value: '', checked: false },
    { name: 'Deployed Revision', value: '', checked: false },
    { name: 'Deployed MDS Checksum', value: '', checked: false },
    { name: 'Deployment Timestamp', value: '', checked: false }
  ]

  constructor(private _dataSvc: DataService) {

  }

  ngOnInit() {
    this.deplRecords = this._dataSvc.getDeplRecords();
  }

}
