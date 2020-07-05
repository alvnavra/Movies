import { Component, OnInit} from '@angular/core';
import { MovieService } from '../service/movie.service';
import {User} from '../../interfaces/user'
import {Location} from '@angular/common'
import {Movie} from '../../interfaces/movie'


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

  movieShow:Movie = {id:0,title:"",overview:"",poster_path:"",popularity:0,createdAt:new Date(), updatedAt:new Date}
  user:User
  show_child:boolean = false
  user_and_movie = {
    user:0,
    movie:0
  }


  constructor(private MovieService:MovieService, private loc:Location) { }


  ngOnInit() {


    let str_user:string = localStorage.getItem('usuario')
    if(str_user)
    {
      this.user = JSON.parse(str_user)
      this.user_and_movie.user = this.user.user.id
    
    }
    else{
      console.log('desconectado')
    }
    this.movieShow = this.MovieService.filmChoosen;
    this.user_and_movie.movie = this.movieShow.id


  }

  onAlquilado()
  {
    this.show_child = false;
  }

  volver()
  {
    this.loc.back()
  }

}
