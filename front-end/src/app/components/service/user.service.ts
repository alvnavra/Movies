import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, BasicUser } from '../../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  backUrl='http://localhost:3000/users/';

  constructor(private httpClient:HttpClient) { }
  
  login(login:BasicUser){
    let body = {
      email:login.email,
      password:login.password
    }

    return this.httpClient.post(this.backUrl+'/login',body)
  }

  signup(signup:BasicUser)
  {
    let body = {
      name:signup.name,
      email:signup.email,
      password:signup.password
    }
    console.log('en el signup')
    return this.httpClient.post(this.backUrl+'/signup',body)
  }

}
