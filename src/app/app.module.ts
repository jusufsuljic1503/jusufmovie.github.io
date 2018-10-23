import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FormControl} from '@angular/forms'
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';

import { AppComponent } from './app.component';

import { MovieService } from 'src/services/movie.service';
import { ShowsService } from 'src/services/shows.service';
import { Home2Component } from './home2/home2.component';


const appRoutes: Routes = [
  { path: 'movie', component: HomeComponent },
  {path: '', redirectTo:'movie', pathMatch:'full'},
  { path: 'show', component: Home2Component },


  { path: 'movie/:movieID', component: MovieComponent },
  { path: 'show/:showID', component: ShowsComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ShowsComponent,
    Home2Component,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService,ShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
