import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http : HttpClient) { }
  baseUrl = 'http://localhost:3000/';

  //get all product
  getProduct()
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this.http.get<any>(this.baseUrl+'product', options);
  }

  //get a single product by id
  getProductById(id)
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this.http.get<any>(this.baseUrl+'product/'+id, options);
  }

  addProduct(product)
  {
    const productData = new FormData();
    productData.append('title',product.title);
    productData.append('description',product.description);
    productData.append('price',product.price);
    productData.append('ctgry',product.ctgry);
    productData.append('photo',product.photo);
    const options = {
      observe:"response" as 'body',
      "responseType?":"json"
    };
    console.log(productData);
    return this.http.post<any>(this.baseUrl+'product', productData, options);
  }

  updateProduct(productData,id)
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this.http.put<any>(this.baseUrl+'product/'+id, productData, options);
  }

  deleteProduct(id)
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this.http.delete<any>(this.baseUrl+'product/'+id, options);
  }

  signup(user)
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this.http.post<any>(this.baseUrl + 'user/signup', user, options)
  }

  login(user)
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this.http.post<any>(this.baseUrl + 'user/login', user, options)
  }

  getToken()
  {
    let token = localStorage.getItem('token');
    return token;
  }

  isLogin()
  {
    if(localStorage.getItem('token') == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

}
