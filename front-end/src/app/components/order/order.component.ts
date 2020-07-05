import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../interfaces/order'
import { OrderService } from '../service/order.service';
 
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  constructor(private os:OrderService) { }
  @Input() user_and_movie:{
    user:0,
    movie:0
  };
  
  order:Order
  mostrar:boolean = true;


  ngOnInit(): void {
        this.order ={UserId:0,MovieId:0,RentalDate:new Date(),ReturnDay:new Date()}
        this.order.UserId = this.user_and_movie.user
        this.order.MovieId = this.user_and_movie.movie
  }

  confirmar()
  {
    console.log(this.order)
    this.os.createOrder(this.order).subscribe((rdo)=>{
      console.log(rdo)
      this.mostrar = false
    },
    (err)=>{
      console.log(err)
    })
  }



}
