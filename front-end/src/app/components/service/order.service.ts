import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order} from '../../interfaces/order'
import { BasicUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  backUrl='http://localhost:3000/orders/';

  constructor(private httpClient:HttpClient) { }
  
  createOrder(order:Order){
    let body = {
      UserId:order.UserId,
      MovieId:order.MovieId,
      RentalDate:order.RentalDate,
      ReturnDay:order.ReturnDay
    }

    return this.httpClient.post(this.backUrl,body)
  }

  getUserOrders(userId:number){
    return this.httpClient.get(this.backUrl+userId)
  }

}
