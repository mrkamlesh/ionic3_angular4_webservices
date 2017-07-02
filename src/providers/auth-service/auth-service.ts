import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';

let apiURL = 'http://localhost/PHP-Slim-Restful/api/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http, private network: Network) {
    console.log('Hello AuthServiceProvider Provider');
  }

  isOnline(): boolean {
    console.log(this.network.type);
    if(this.network.type != 'none'){
      return true;
    } else {
      return false;
    }
  }
  
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      
      this.http.post(apiURL + type, JSON.stringify(credentials), {headers: headers}).
      subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }
}
