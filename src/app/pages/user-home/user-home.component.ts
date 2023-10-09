import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  constructor(private service:MovieApiServiceService, public auth: AuthService){ }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.animationMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    this.adventureMovie();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      this.bannerResult = result.results;
    });
  }

  trendingData()
  {
    this.service.trendingMoviesApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    })
  }

  actionMovie()
  {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    })
  }

  adventureMovie()
  {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    })
  }

  animationMovie()
  {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    })
  }

  comedyMovie()
  {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    })
  }

  documentaryMovie()
  {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    })
  }

  sciencefictionMovie()
  {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    })
  }

  thrillerMovie()
  {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    })
  }
}
