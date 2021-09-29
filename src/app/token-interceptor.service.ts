import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { MainServiceService } from './main-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req,next)
  {
    let productService = this.injector.get(MainServiceService);
    let tokenizedReq = req.clone(
      {
        headers:req.headers.set('Authorization','Bearer '+ productService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
}
