import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getData(env, artifact) {
    var url = env + "/" + artifact + "/assets/build-info/app-manifest.json"
    return this._http.get<Object>(url);
  }
}
