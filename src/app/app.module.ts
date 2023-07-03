import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { PopularTvComponent } from './components/movies/popular-tv/popular-tv.component';
import { DetailsComponent } from './components/movies/details/details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchComponent } from './components/movies/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    PopularMoviesComponent,
    MovieCardComponent,
    PopularTvComponent,
    DetailsComponent,
    SpinnerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
