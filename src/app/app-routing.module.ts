import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { DetailsComponent } from './components/movies/details/details.component';
import { SearchComponent } from './components/movies/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {path: '', component: HomeComponent},
      {path: ':id', component: DetailsComponent},
    ]
  },
  {
    path: 'search-movie',
    component: SearchComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
