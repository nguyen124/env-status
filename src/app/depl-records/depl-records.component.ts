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

  environments = ["cct601", "pdt601", "uat601"];
  artifacts = ["dashboard", "settings", "help-center", "fsa-id", "universal-navigation", "notifications", "mpn", "loan-simulator"];

  selected = [];
  selectedEnv: string = this.environments[0];
  selectedArtifact: string = this.artifacts[0];


  constructor(private _dataSvc: DataService) {

  }

  ngOnInit() {
    this.deplRecords = this._dataSvc.getData(this.selectedEnv, this.selectedArtifact);
    //this.showAllRow();
  }

  dataChanged(event) {
    // if (this.selectRowStr.trim()) {
    //   var indexes = this.selectRowStr.split(',').map(value => {
    //     var temp = value.trim();
    //     if (temp) {
    //       return +temp;
    //     } else {
    //       return NaN;
    //     }
    //   }).filter((value: number) => {
    //     return (Number.isInteger(value) && value >= 0 && value < this.selected.length);
    //   });
    //   if (indexes.length > 0) {
    //     this.hideAllRow();
    //     for (var i = 0; i < indexes.length; i++) {
    //       this.selected[indexes[i]] = true;
    //     }
    //   }
    // } else {
    //   this.showAllRow();
    // }
  }

  onOptionsSelected(value) {
    this.deplRecords = this._dataSvc.getData(this.selectedEnv, this.selectedArtifact);


  }

  // showAllRow() {
  //   for (var i = 0; i < this.deplRecords.length; i++) {
  //     this.selected[i] = true;
  //   }
  // }

  // hideAllRow() {
  //   for (var i = 0; i < this.deplRecords.length; i++) {
  //     this.selected[i] = false;
  //   }
  // }
}
