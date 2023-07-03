import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/interfaces/tvInterfaces';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from 'src/app/interfaces/moviesInterfaces';
import { GenreElement, Genres } from 'src/app/interfaces/genre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit{
  public imageUrl: string = "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg"
  @Input() movie: any | undefined
  public info: any
  public genres!: Genres
  constructor(private moviesSerevices: MoviesService, private router: Router){}

  ngOnInit(): void {
    this.imageUrl = `https://image.tmdb.org/t/p/w500/${this.movie?.poster_path}`
    this.moviesSerevices.getListOfGenre().subscribe({
      next: _genres => {
        this.genres = _genres
      },
      error: error => {
        console.log(error)
      }
    })
  }

  getName(){
    if(this.movie){
      if(this.movie.hasOwnProperty('original_title')){
        const movie: Movie = this.movie
        return movie.title
      }else{
        const movie: TvShow = this.movie
        return movie.name
      }
    }else{
      return undefined
    }
  }

  getGenres() {
    if (this.movie === undefined || this.genres === undefined) {
      return;
    } else {
      return this.movie.genre_ids.map((id: number) => {
        return this.findGenre(id);
      });
    }
  }
  
  findGenre(id: number) {
    if (this.genres === undefined) return 'not clasificated';
  
    const genreFinded = this.genres.genres.find((element) => {
      return element.id === id;
    });
  
    if (genreFinded === undefined) return 'undefined';
    return genreFinded.name;
  }

  goToDetails(){
    this.router.navigate([`/home/${this.movie?.id}`])
  }

}
