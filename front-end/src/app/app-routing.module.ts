import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component'


const routes: Routes = [
  {path:"info", component:InfoComponent},
  {path:"", component:FilmsListComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"user-orders",component:UserOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
