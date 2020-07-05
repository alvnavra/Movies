import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  backUrl='http://localhost:3000/movies/';

  films: Movie[];
  filmChoosen: Movie;

  constructor(private httpClient:HttpClient) { }

  // All movies section

  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')
  }

  locateFilm(filmChoose:Movie):object{
    
    this.filmChoosen = filmChoose;
    console.log(this.filmChoosen);
    return;
  }

  // Buscar pelicula endpoint

  searchTitle(titulo:string):Observable<any>{
    return this.httpClient.get(this.backUrl + 'title/' + titulo);
  }

  setFilms(films:Movie[]):void{  
    this.films=films;
    console.log(this.films)
  }

  getFilms():Movie[]{
    return this.films
  }
}
