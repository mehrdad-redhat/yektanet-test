import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {ProductsService} from '../app.service';
import {NavigationEnd, Router} from '@angular/router';



/**
 * the header component
 */
@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit{

  searchForm:FormGroup;
  isInSinglePage:boolean=false;

  constructor(private router:Router,private formBuilder:FormBuilder,private productsService:ProductsService) {
    this.router.events
      .subscribe(
        val => {
          if (val instanceof NavigationEnd) {
            if(val.url.split('/').length>1){
              this.isInSinglePage=true;
            }
          }
        }
      );
  }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      term:[null]
    });

    this.searchForm.controls.term.valueChanges
      .pipe(debounceTime(200))
      .subscribe(
      (value => {
        this.productsService.sendSearchTerm(value);
        if(this.isInSinglePage){
          this.router.navigateByUrl('/');
        }
      })
    )
  }

  search(){
    console.log(this.searchForm.controls.term.value);
  }


}
