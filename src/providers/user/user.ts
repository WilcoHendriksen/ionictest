import { Injectable, Inject } from '@angular/core';
import { MY_CONFIG_TOKEN, ApplicationConfig } from '../../app-config';
import { Storage } from '@ionic/Storage';
import { User } from '../../models/user';

@Injectable()
export class UserProvider {

  constructor(public storage: Storage, @Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig) {
    //console.log('Hello UserProvider Provider' + config.apiBase);
  }

  getApiBase(): string {
    return this.config.apiBase;
  };

  async login(user: User) {
    try {

      let authorization = btoa(`${user.username}:${user.password}`);
      let resp = await fetch(`${this.config.apiBase}openapi/reservations/authenticateUser`, {
        method: "POST",
        headers: new Headers({
          'Accept': 'application/json, text/javascript, */*; ',
          'Authorization': 'Basic ' + authorization,
          'Content-Type': 'application/json; charset=UTF-8'
        }),
      });

      const authorizedUser = await resp.json();

      if (authorizedUser) {
        this.setAuthorization(authorization);
        this.setUser(authorizedUser);
        return true;
      } else {
        return false;
      }

    } catch (e) {
      return false;
    }
  };

  setAuthorization(authorization: string): void {
    this.storage.set('AuthorizationHeader', authorization);
  };

  setUser(user: object): void {
    this.storage.set('user', user);
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get('AuthorizationHeader').then((value) => {
      return value != null;
    });
  };

}
