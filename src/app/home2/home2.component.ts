import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/services/movie.service';
import { ShowsService } from 'src/services/shows.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  popular_shows: any;
  upcoming_shows: any;
  search_result: any;
  show: any;

  constructor(public showsService: ShowsService) {
   

    // get popular shows
    this.showsService.getPopularShows().subscribe(data => {
      this.popular_shows = data['results'];
      // console.log(this.popular_shows);
    });

  }

  // get search results of shows
  searchShows() {
    this.showsService.searchShow(this.show).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
    });
  }

  ngOnInit() {
  }

}