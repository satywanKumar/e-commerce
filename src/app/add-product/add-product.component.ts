import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private mainService:MainServiceService,
              private router: Router,
              private activatedRoute:ActivatedRoute) { }

  name:any;
  product:FormGroup;
  id:any;
  imageUrl:any;


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.product = new FormGroup({
      _id:new FormControl(),
      title:new FormControl(),
      description:new FormControl(),
      price:new FormControl(),
      ctgry:new FormControl(),
      photo:new FormControl()
    })

   if(this.id != null)
   {
    this.mainService.getProductById(this.id).subscribe(res=>{
      console.log(res.body.product);
      this.product.setValue(res.body.product);
    })
   }
  }

  onImageSelected(event :Event)
  {
    console.log((event.target as HTMLInputElement).files[0]);
    const file = (event.target as HTMLInputElement).files[0];
    this.product.patchValue({photo:file});
    this.product.get('photo').updateValueAndValidity();
    console.log(this.product.value);
    const reader = new FileReader();
    reader.onload = ()=>{
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  save()
  {
    console.log(this.product.value);
    if(this.id != null)
    {
      this.mainService.updateProduct(this.product.value,this.id).subscribe(res=>{
        console.log(res.body);
        this.router.navigate(['/product']);
      })
    }
   else
   {
    this.mainService.addProduct(this.product.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/product']);
    })
   }
  }

}
