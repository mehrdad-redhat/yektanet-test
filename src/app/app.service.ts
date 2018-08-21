import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {ProductsGateway} from './app.gateway';
import {Product} from './app.model';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class ProductsService {

  constructor(private productsGateway:ProductsGateway){}

  private searchTerm = new BehaviorSubject<string>('');


  getAllProducts():Observable<Product[]>{
    return this.productsGateway.getAllProduct();
  }

  getProductById(id):Observable<Product>{
    return this.productsGateway.getProductById(id);
  }

  editProductById(id,product):Observable<any>{
    return this.productsGateway.editProductById(id,product);
  }

  sendSearchTerm(term){
    this.searchTerm.next(term);
  }

  getsearchTerm():Observable<string>{
    return this.searchTerm.asObservable();
  }

}
