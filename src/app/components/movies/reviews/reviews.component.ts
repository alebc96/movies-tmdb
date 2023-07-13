import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] | undefined;
  isLoading: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.moviesService
      .getResultReview(this.route.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.reviews = data.results;
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.log(error);
        },
      });
  }

  notReview(): boolean {
    if (this.reviews?.length === 0) return true;
    else return false;
  }

  backHome() {
    this.location.back()
    //this.router.navigateByUrl(this.router.url);
  }
}
