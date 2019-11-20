import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: object


  constructor(private _dataSvc: DataService) { }

  ngOnInit() {
    this.data = this._dataSvc.getEnvDetails();
  }

}
