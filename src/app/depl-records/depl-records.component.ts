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
    { name: 'Environment', value: 'env.environment_type', checked: true },
    { name: 'Code Version', value: 'env.oracle_connection.cod_tds.primary.node1.host', checked: true },
    { name: 'Assignment Type', value: 'env.oracle_connection.cod_rds.primary.node1.host', checked: true },
    { name: 'Artifact', value: 'env.webserver_host', checked: true },
    { name: 'Pending Deployment Version', value: 'env.api_port', checked: true },
    { name: 'Pending Deployment Build', value: 'env.sql_host', checked: true },
    { name: 'Last Deployed Version', value: 'env.schemaprefix.sl', checked: false },
    { name: 'Last Deployed Build', value: 'env.schemas.oracle.sl', checked: false },
    { name: 'Deployed Revision', value: 'env.host_connections.env1-message1_ip', checked: false },
    { name: 'Deployed MDS Checksum', value: 'env.host_connections.env1-message1_port', checked: false },
    { name: 'Deployment Timestamp', value: 'env.host_connections.env1-svcapp1_ip', checked: false }
  ]

  constructor(private _dataSvc: DataService) {

  }

  ngOnInit() {
    this.deplRecords = this._dataSvc.getDeplRecords();
  }

}
