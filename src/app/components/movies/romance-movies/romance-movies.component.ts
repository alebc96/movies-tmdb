import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/moviesInterfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-romance-movies',
  templateUrl: './romance-movies.component.html',
  styleUrls: ['./romance-movies.component.css']
})
export class RomanceMoviesComponent implements OnInit{

  romanceMovies: Movie[] | undefined

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMoviesByGenre(10749).subscribe({
      next: _romanceMovies => {
        this.romanceMovies = _romanceMovies.results
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
