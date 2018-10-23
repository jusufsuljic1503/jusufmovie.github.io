import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ShowsService } from 'src/services/shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  show: any;
  constructor(private router: ActivatedRoute, private showsService: ShowsService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['showID'];
      this.showsService.getShow(id).subscribe(data => {
        this.show = data;
        // console.log(data);
      });
    });
  }

}