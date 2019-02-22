import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroments as ENV } from "../../enviroments/enviroments";

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {
  constructor(public http: HttpClient) {}

  public get(endpoint: string) {
    const url = ENV.baseUrl + endpoint;
    return this.http.get(url).toPromise();
  }

  public post(endpoint: string, data: any) {
    const url = ENV.baseUrl + endpoint;
    return this.http.post(url, data).toPromise();
  }

  public put(endpoint: string, data: any) {
    const url = ENV.baseUrl + endpoint;
    return this.http.put(url, data).toPromise();
  }
}
