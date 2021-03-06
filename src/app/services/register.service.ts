import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  api_url = environment.register_url;

  constructor(public http: HttpClient) { }

  register(){
    const url = this.api_url;
    return this.http.get(url);
  }
}
