import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.sass']
})
export class UserOrdersComponent implements OnInit {

  show_modal = true
  orders:any
  user:User

  constructor(private router:Router, private os:OrderService) { }

  ngOnInit(): void {
    let str_user:string = localStorage.getItem('usuario')
    if(str_user)
    {
      this.user = JSON.parse(str_user)
      this.getOrders()
    }
  }

  getOrders()
  {
    this.os.getUserOrders(this.user.user.id).subscribe((rdo)=>{
      this.orders = rdo
      console.log(this.orders)
    })
  }

  cerrar()
  {
    this.show_modal = false;
    this.router.navigate(['/'])
  }

}
