import { Injectable } from "@angular/core";
import { NetworkProvider } from "../network/network";

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  constructor(public network: NetworkProvider) {}

  public authenticate(username: string, password: string): Promise<any> {
    this.network
      .post("login", { username: username, password: password })
      .then(data => {
        if (
          data.hasOwnProperty("acces_token") &&
          data.hasOwnProperty("username")
        ) {
          localStorage.setItem("access_token", data["acces_token"]);
          localStorage.setItem("username", data["username"]);
        }
      });
    return Promise.resolve(true);
  }
}
