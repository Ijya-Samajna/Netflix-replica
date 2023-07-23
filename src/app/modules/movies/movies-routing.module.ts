import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },      
      {
        path: 'details/:id',
        component: MoviesDetailComponent
      },
      {
        path: 'all',
        component: MoviesListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
