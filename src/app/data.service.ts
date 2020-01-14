import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getData(env, artifact) {
    var url = env + "/" + artifact + "/assets/build-info/app-manifest.json"
    return this._http.get<Object>(url);
  }

  getStudentAid(env) {
    var url = "/student-" + env + "/app/status";
    console.log("link:" + url);
    return this._http.get(url, { responseType: 'text' });
  }
}
