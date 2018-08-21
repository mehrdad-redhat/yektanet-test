import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../app.service';
import {Product} from '../app.model';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {


  product: Product;
  tagsState:any=[];
  productId:string;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (param) => {
          this.productId=param.get('ID');
          this.productService.getProductById(this.productId)
            .subscribe(
              value => {
                this.product = value;
                for(let tag in this.product.tags){
                  this.tagsState[tag]=false;
                }
              }
            );
        }
      );
  }

  editStateChange(ev1,ev2,id){

    if(ev2.target!=ev1){

      for(let i in this.tagsState){
        this.tagsState[i]=false;
      }
      this.tagsState[id]=!this.tagsState[id];

    }

  }

  submitChange(){
    for(let i in this.tagsState){
      this.tagsState[i]=false;
    }
    this.productService.editProductById(this.productId,this.product)
      .subscribe(
        (value => console.log(value))
      )
  }

}
