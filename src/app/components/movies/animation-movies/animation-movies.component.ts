import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/moviesInterfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-animation-movies',
  templateUrl: './animation-movies.component.html',
  styleUrls: ['./animation-movies.component.css']
})
export class AnimationMoviesComponent implements OnInit{

  animationMovies: Movie[] | undefined

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMoviesByGenre(16).subscribe({
      next: _animationMovies => {
        this.animationMovies = _animationMovies.results
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
