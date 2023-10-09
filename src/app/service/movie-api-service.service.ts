import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envionment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

 

  bannerApiData():Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/trending/all/week?api_key=${environment.movieDB.apikey}`);
  }

  trendingMoviesApiData():Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/trending/movie/day?api_key=${environment.movieDB.apikey}`);
  }

  getSearchMovie(data: any): Observable<any>
  {
    console.log(data, 'movie#')
    return this.http.get(`${environment.movieDB.baseUrl}/search/movie?api_key=${environment.movieDB.apikey}&query=${data.movieName}`);
  }

  getMovieDetails(data: any): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/movie/${data}?api_key=${environment.movieDB.apikey}`);
  }

  getMovieVideo(data: any): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/movie/${data}/videos?api_key=${environment.movieDB.apikey}`);
  }

  getMovieCast(data: any): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/movie/${data}/credits?api_key=${environment.movieDB.apikey}`);
  }

  fetchActionMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=28`);
  }
  
  fetchAdventureMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=12`);
  }

  fetchAnimationMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=16`);
  }

  fetchComedyMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=35`);
  }

  fetchDocumentaryMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=99`);
  }

  fetchScienceFictionMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=878`);
  }

  fetchThrillerMovies(): Observable<any>
  {
    return this.http.get(`${environment.movieDB.baseUrl}/discover/movie?api_key=${environment.movieDB.apikey}&with_genres=53`);
  }
}
