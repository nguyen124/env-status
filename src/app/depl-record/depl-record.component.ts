import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depl-record',
  templateUrl: './depl-record.component.html',
  styleUrls: ['./depl-record.component.css']
})
export class DeplRecordComponent implements OnInit {

  constructor() { }


  options = [
    { name: 'Environment', value: 'cct201', checked: true },
    { name: 'Code Version', value: 'dcc-1.0.0.1', checked: true },
    { name: 'Assignment Type', value: 'Deployment Target', checked: true },
    { name: 'Artifact', value: 'aid-summary-webapp-static.zip', checked: true },
    { name: 'Pending Deployment Version', value: '1.0-ng', checked: true },
    { name: 'Pending Deployment Build', value: '902', checked: true },
    { name: 'Last Deployed Version', value: '1.0-ng-SNAPSHOT', checked: false },
    { name: 'Last Deployed Build', value: '902', checked: false },
    { name: 'Deployed Revision', value: '157162', checked: false },
    { name: 'Deployed MDS Checksum', value: '123456789', checked: false },
    { name: 'Deployment Timestamp', value: '2019-11-07 03:13:13 PM EST', checked: false }
  ]

  get selectedOptions() {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }

  ngOnInit() {
  }

}
