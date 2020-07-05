import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FilmsListComponent } from './components/films-list/films-list.component';
import { InfoComponent } from './components/info/info.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule} from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { UserOrdersComponent} from './components/user-orders/user-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    HeaderComponent,
    InfoComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    UserOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


