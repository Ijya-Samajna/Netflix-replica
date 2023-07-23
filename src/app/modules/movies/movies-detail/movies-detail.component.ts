import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@core/services/movie.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  movieDetails: any;
  id: any;
  isLoading: boolean = false;
  isError: boolean = false;
  ratings = [];
  movieScore: number = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.isLoading = true;
    this.movieService.getDetailsWithId(this.id).subscribe((result) => {
      this.movieDetails = result;
      this.movieScore = parseFloat(this.movieDetails.Ratings[0].Value);      
      this.setRating();
      this.isLoading = false;
    }), (error) => {
      this.isLoading = false;
      this.isError = true; 
    }
  }

  setRating() {
    for(let start=0; start< Math.floor(parseFloat(this.movieDetails.Ratings[0].Value)); start++) {
      this.ratings.push('rating');      
    }
  }

}
