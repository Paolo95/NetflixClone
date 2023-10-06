import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apikey = "2804879a2f005d6603d6f81bc600de3d";

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`);
  }

  trendingMoviesApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`);
  }

  getSearchMovie(data: any): Observable<any>
  {
    console.log(data, 'movie#')
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
}
