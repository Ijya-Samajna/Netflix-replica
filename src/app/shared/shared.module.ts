import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    SidebarComponent,
    HeaderComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LoaderComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
