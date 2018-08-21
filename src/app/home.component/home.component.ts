import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../app.service';
import {Product} from '../app.model';



/**
 * home page of tracking
 */
@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{

  products:Product[];
  searchTerm:string='';

  constructor(private productService:ProductsService){

  }

	ngOnInit(){
    this.productService.getAllProducts()
      .subscribe(
        (value)=>{
          if(value){
            this.products=value;
            this.getSearchTerm();
          }
        }
      )

  }

  getSearchTerm(){
    this.productService.getsearchTerm()
      .subscribe(
        value => this.searchTerm=value
      )
  }



}
