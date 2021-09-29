import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private mainService:MainServiceService,
              private router:Router) { }
  id:any= "";
  product:any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mainService.getProductById(this.id).subscribe(res=>{
      console.log(res.body.product);
      this.product = res.body.product;
      console.log('product detail',this.product);
    })
  }

  delete()
  {
    this.mainService.deleteProduct(this.id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/product']);
    })
  }

  update()
  {
    this.router.navigate(['/update-product',this.id]);
  }

}
