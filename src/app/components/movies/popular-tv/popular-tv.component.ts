import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShow } from 'src/app/interfaces/tvInterfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.css']
})
export class PopularTvComponent implements OnInit{

  public popularTvShow : TvShow[] = []
  public popularTvShowSubscription : Subscription | undefined

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getPopularTVShows().subscribe({
      next: data => {
        this.popularTvShow = data.results
        console.log(data)
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
