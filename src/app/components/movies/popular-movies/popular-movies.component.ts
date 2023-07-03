import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/moviesInterfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit, OnDestroy{

  public popularMovies: Movie[] = []
  popularMoviesSubscription: Subscription | undefined

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.popularMoviesSubscription = this.moviesService.getPopularMovies().subscribe({
      next: _movies => {
        console.log(_movies)
        this.popularMovies = _movies.results
      },
      error: error => {
        console.log(error)
      }
    })
  }

  ngOnDestroy(): void {
    if(this.popularMoviesSubscription !==undefined)this.popularMoviesSubscription.unsubscribe()
  }
}
