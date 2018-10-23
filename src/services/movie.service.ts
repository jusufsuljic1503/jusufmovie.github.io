import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private movie_url = 'https://api.themoviedb.org/3';
  private api_key= '1dc82c9bec6ae46050cbe7ccf9368fe4';
  private movie_string: string;
 
  
  private id: number;


  constructor(public _http: HttpClient) { }

  searchMovie(movie: string){
    this.movie_string=movie;
    
    
    return this._http.get(this.movie_url + '/search/movie' + '?api_key=' + this.api_key + '&query='+ this.movie_string);
  }

 /*getMovieTrailer(id:number){

    return this._http.get(this.movie_url + '/movie/' +id+'/videos'+'?api_key=' + this.api_key);
   
  }*/
  
  getPopularMovies() {
    return this._http.get(this.movie_url + '/movie/popular' + '?api_key=' + this.api_key);
  }

  getMovie(id: number) {
    
    return this._http.get(this.movie_url + '/movie/' + id + '?api_key=' + this.api_key + '&append_to_response=videos');
  }
}
