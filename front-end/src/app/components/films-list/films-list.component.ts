import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})
export class FilmsListComponent implements OnInit {

  pelisMostrar: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.MovieService.getMovies()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.error(error),
      () => console.log(this.pelisMostrar)
    )
  }
  
  searchTitle(event){
    if(event.target.value.length >= 3){
      this.MovieService.searchTitle(event.target.value).subscribe(res=>this.MovieService.setFilms(res))
    }
  }
}

