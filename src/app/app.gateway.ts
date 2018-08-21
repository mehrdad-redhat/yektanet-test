import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';


@Injectable()
export class ProductsGateway {

  constructor(private http:HttpClient){}

  getAllProduct():Observable<any>{
      return this.http.get('products');
  }

  getProductById(id):Observable<any>{
    return this.http.get('products/'+id.toString());
  }

  editProductById(id,product):Observable<any>{
    return this.http.put('products/'+id.toString(),product);
  }

}
