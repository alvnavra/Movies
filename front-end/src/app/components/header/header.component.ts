import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { DataService } from '../service/data-service';
import {User} from '../../interfaces/user'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  constructor(public MovieService:MovieService, private ds:DataService, private router:Router) { }
  usuario:User

  ngOnInit(){
    let str_user:string = localStorage.getItem('usuario')
    if (str_user)
    {
      this.usuario = JSON.parse(str_user)
    }
    else
    {
      this.ds.getMessage$.subscribe((rdo:string)=>{
        this.usuario = JSON.parse(rdo)
        console.log(this.usuario)
        this.router.navigate(['/'])
        
      })

    }

  }

  exit(){
    localStorage.clear()
    this.usuario = undefined
    this.router.navigate(["/"])
  }
  
  

  searchTitle(event){
    if(event.target.value.length >= 3){
      this.MovieService.searchTitle(event.target.value).subscribe(res=>this.MovieService.setFilms(res))
    }
  }

  openMenu(){
    document.getElementById('menuId').style.display = "block"
  }

  onLogado(event){
    console.log(event)
    alert("Nos hemos logado!!!!")
  }

  onChange(event){
    console.log(event)
  }

}
