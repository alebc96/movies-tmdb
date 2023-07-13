import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from 'src/app/interfaces/moviesInterfaces';

@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css']
})
export class ActionMoviesComponent implements OnInit {

  actionMovies: Movie[] | undefined

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMoviesByGenre(28).subscribe({
      next: _actionsMovies => {
        this.actionMovies = _actionsMovies.results
      },
      error: error => {
        console.log(error)
      }
    })
  }

  

}
