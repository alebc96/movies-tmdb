import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { MovieResult } from '../interfaces/moviesInterfaces';
import { TvResults } from '../interfaces/tvInterfaces';
import { Genres } from '../interfaces/genre';

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

}
