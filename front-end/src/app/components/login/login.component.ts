import { Component, Output, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { UserService } from '../service/user.service';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../service/data-service';
import { Router } from '@angular/router';
import { BasicUser} from '../../interfaces/user'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @ViewChild(HeaderComponent) childreference

  login_obj:BasicUser = {name:"",email:"",password:""}
  error = false
  example_parent:string

  

  constructor(private us:UserService, private ds:DataService, private router:Router) { }

  ngOnInit(){    
  }

  
  login(){   
    this.us.login(this.login_obj).subscribe((rdo)=>{      
      let str_rdo = JSON.stringify(rdo)
      localStorage.setItem('usuario',str_rdo)
      this.ds.emitMessage(str_rdo)      
    },
    (error)=>{this.error=true})


  }

  registrarse(){
    this.router.navigate(['/signup'])
  }

  isDisabled()
  {
    let isDisabled = this.login_obj.email == null && this.login_obj.password == null;
    return isDisabled
  }

}
