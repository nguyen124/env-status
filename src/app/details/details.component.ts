import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: object;


  options = [
    { name: 'Name', value: 'cct201', checked: true },
    { name: 'Environment Type', value: 'dcc-1.0.0.1', checked: true },
    { name: 'Infrastructure', value: 'Deployment Target', checked: true },
    { name: 'Purpose', value: 'aid-summary-webapp-static.zip', checked: true },
    { name: 'Active for Deployment', value: '1.0-ng', checked: true },
    { name: 'Arch Version', value: '902', checked: true },
    { name: 'Code Version', value: '1.0-ng-SNAPSHOT', checked: false },
    { name: 'Sched Version', value: '902', checked: false },
    { name: 'Age (days)', value: '157162', checked: false }
  ]

  get selectedOptions() {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }

  constructor(private _dataSvc: DataService) { }

  ngOnInit() {
    this.data = this._dataSvc.getEnvDetails();
  }

}
