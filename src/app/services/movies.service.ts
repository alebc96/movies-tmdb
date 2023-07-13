import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Movie, MovieResult } from '../interfaces/moviesInterfaces';
import { TvResults } from '../interfaces/tvInterfaces';
import { Genres } from '../interfaces/genre';
import { ReviewResult } from '../interfaces/review';
import { CreditsResult } from '../interfaces/credits';

const headers = {
  'Authorization': environment.Bearer,
  'accept': 'application/json' 
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getPopularMovies(): Observable<MovieResult>{
    const url = `${environment.BASE_URL}/3/movie/popular`
    return this.http.get<MovieResult>(url, {headers})
  }

  public getPopularTVShows(): Observable<TvResults> {
    const url = `${environment.BASE_URL}/3/trending/tv/week`
    return this.http.get<TvResults>(url, {headers})
  }

  public findById(id: number){
    const url = `${environment.BASE_URL}/3/find/${id}`
    return this.http.get(url, {headers})
  }

  public getListOfGenre(): Observable<Genres>{
    const url = `${environment.BASE_URL}/3/genre/movie/list`
    return this.http.get<Genres>(url, {headers})
  }

  public getMovieDetails(movieId: string): Observable<any>{
    const url = `${environment.BASE_URL}/3/movie/${movieId}`
    return this.http.get<any>(url, { headers });
  }

  public searchMovieByKeyword(keyword: string): Observable<MovieResult>{
    const url = `${environment.BASE_URL}/3/search/movie`
    const params = new HttpParams().set('query', keyword)
    return this.http.get<MovieResult>(url, { params, headers })
  }

  public getResultReview(movie_id: string): Observable<ReviewResult>{
    const url = `${environment.BASE_URL}/3/movie/${movie_id}/reviews`
    return this.http.get<ReviewResult>(url, { headers })
  }

  public getCastByMovieId(movie_id: string): Observable<CreditsResult>{
    const url = `${environment.BASE_URL}/3/movie/${movie_id}/credits`
    return this.http.get<CreditsResult>(url, {headers})
  }

  public getMoviesByGenre(genre: any): Observable<MovieResult>{
    const url = `${environment.BASE_URL}/3/discover/movie?api_key=${environment.apiKey}&with_genres=${genre}`
    return this.http.get<MovieResult>(url, { headers })
  }

}
