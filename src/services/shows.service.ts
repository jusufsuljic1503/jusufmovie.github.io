import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {


  private show_url = 'https://api.themoviedb.org/3';
  private api_key= '1dc82c9bec6ae46050cbe7ccf9368fe4';
  private show_string: string;
  private id: number;


  constructor(public _http: HttpClient) { }

  searchShow(show: string){
    this.show_string=show;
    return this._http.get(this.show_url + '/search/movie' + '?api_key=' + this.api_key + '&query='+ this.show_string);
  }

  getShowTrailer(id:number){

    return this._http.get(this.show_url + '/tv/' +id +'/videos'+'?api_key=' + this.api_key);
  }

  
  getPopularShows() {
    return this._http.get(this.show_url + '/tv/popular' + '?api_key=' + this.api_key);
  }

  getShow(id: number) {
    return this._http.get(this.show_url + '/tv/' + id + '?api_key=' + this.api_key + '&append_to_response=videos');
  }
}
