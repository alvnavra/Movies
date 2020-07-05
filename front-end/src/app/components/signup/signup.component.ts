import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data-service';
import {BasicUser} from '../../interfaces/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(private us:UserService, private router:Router, private ds:DataService) { }
  user:BasicUser = {name:"", password:"",email:""}

  ngOnInit(): void {
  }

  iniciarSesion()
  {
    this.router.navigate(['/login'])
  }

  registrarse(){
    console.log(this.user)
    this.us.signup(this.user).subscribe((rdo)=>{
      this.us.login(this.user).subscribe((rdos)=>{
        let str_rdos:string = JSON.stringify(rdos)
        localStorage.setItem('usuario',str_rdos)
        this.ds.emitMessage(str_rdos)
        this.router.navigate(['/'])
      })
    })
  }

  isDisabled()
  {
    return this.user.name == "" || this.user.email=="" || this.user.password==""
  }

}
