import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_url = environment.movies_url;

  constructor(public http: HttpClient) { }

  getMovies(){
    const url = this.api_url;
    return this.http.get(url);
  }
}
