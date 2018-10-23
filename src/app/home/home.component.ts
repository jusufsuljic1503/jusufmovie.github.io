import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { MovieService } from 'src/services/movie.service';
import { ShowsService } from 'src/services/shows.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
  

  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  id:number;
  movie_trailers:any; 

  searchField: FormControl; 
  searches: string[] = []; 


  

  constructor(public movieService: MovieService) {
   

    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      
    });

   
  }


  // get search results of movies
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      
    
      
      
      // console.log(this.search_result);
    });
  }

  ngOnInit() {

  

}}