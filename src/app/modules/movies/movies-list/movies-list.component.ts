import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '@core/services/movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  moviesList = [];
  isLoading: boolean = false;
  isError: boolean = false;
  popular = [];
  recommended = [];
  sections = [];
  slides = [];
  currentIndex: number = 0;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {    
    this.isLoading = true;
    this.movieService.getMoviesWithKeyword().subscribe((result: any) => {
      this.popular = result.Search.splice(0, 5);
      this.addSectionData('Popular', this.popular);
      this.recommended = result.Search.splice(0, 5);
      this.addSectionData('Recommended', this.recommended);
      this.moviesList = this.popular.concat(this.recommended);
      this.slides = this.moviesList;
      this.startSlideshow();
      this.isLoading = false;
    }), (error) => {
      this.isLoading = false;
      this.isError = true; 
    }
  }

  addSectionData(name, data) {
    this.sections.push({title: name, items: data});
  }

  startSlideshow() {
    if(this.currentIndex == this.slides.length - 1) {
      this.currentIndex = 0
    }
    else {
      this.currentIndex += 1;
    }    
    setTimeout(() => {
      this.startSlideshow();
    }, 3000)
  }

  slide(type) {
    switch(type) {
      case 'forward':
        if(this.currentIndex == this.slides.length - 1) {
          this.currentIndex = 0;
        }
        else {
          this.currentIndex += 1;
        }
        break;
      case 'backward':
        if(this.currentIndex == 0) {
          this.currentIndex = this.slides.length - 1;
        }
        else {
          this.currentIndex -= 1;
        }
        break;
    }
  }

  goTo(movie) {
    this.router.navigate([`movies/details/${movie.imdbID}`])
  }

}
