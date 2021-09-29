import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private router:Router,
              private mainService:MainServiceService) { }
  product:any;
  userName:any;

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    this.mainService.getProduct().subscribe(res=>{
      console.log(res.body.product);
      this.product = res.body.product.reverse();
    })
  }
  detail(id)
  {
    this.router.navigate(['/dashboard/product-detail',id]);
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
