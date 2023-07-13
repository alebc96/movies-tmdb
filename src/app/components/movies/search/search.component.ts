import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Movie } from 'src/app/interfaces/moviesInterfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  movieResult!: Movie[]
  isLoading: boolean = false
  searchForm!: FormGroup

  constructor( private moviesService: MoviesService, private fb: FormBuilder )
  {
    this.searchForm = this.fb.group({
      keyword: ['']
    })
  }

  ngOnInit(): void {
    this.isLoading = true
    this.moviesService.getPopularMovies().subscribe({
      next: _movies => {
        this.movieResult = _movies.results
        this.isLoading = false
      },
      error: error => {
        console.log(error)
        this.isLoading = false
      }
    })
  }

  onSearchByKeyword(){
    this.isLoading = true
    //console.log(this.searchForm.value.keyword)
    this.moviesService.searchMovieByKeyword(this.searchForm.value.keyword).subscribe({
      next: data => {
        this.movieResult = data.results
        //console.log(data.results)
        this.isLoading = false
      },
      error: error => {
        console.log(error)
        this.isLoading = false
      }
    })
  }

}
