import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  @Input() selectedEnv: string;
  link: string;
  data: string;
  constructor(private _svc: DataService) { }

  ngOnInit() {
    this.load(this.selectedEnv);
  }

  load(env) {
    this._svc.getStudentAid(env).subscribe(data => {
      this.data = data;
    }, err => {
      this.data = null;
    });
  }
}
