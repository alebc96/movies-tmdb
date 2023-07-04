import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/movieDetails';
import { MoviesService } from 'src/app/services/movies.service';
import { Genres } from 'src/app/interfaces/genre';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movieDetails!: MovieDetails;
  movieImagePoster: string = ''
  movieImageBack: string = ''

  isLoading: boolean = false

  constructor(
    private router: Router,
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true
    this.movieService
      .getMovieDetails(this.route.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.movieDetails = data;
          this.movieImageBack = 'https://image.tmdb.org/t/p/w500' + this.movieDetails.poster_path
          this.isLoading = false
        },
        error: error => {
          console.log(error)
          this.isLoading = false
        }
      });
  }

  backHome(){
    this.router.navigate(['/home'])
  }

  goReviews(){
    this.router.navigate(['/reviews'])
  }


}
