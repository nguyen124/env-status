import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-depl-record',
  templateUrl: './depl-record.component.html',
  styleUrls: ['./depl-record.component.css']
})
export class DeplRecordComponent implements OnInit {

  @Input() record: any;
  @Input() option: any;
  data: string;
  constructor() { }

  ngOnInit() {
    this.data = this.deepFind(this.record, this.option.value);
  }

  deepFind(obj, path) {
    var paths = path.split('.')
      , current = obj
      , i;

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }
}
