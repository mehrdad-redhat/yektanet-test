import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() value:Product;

  constructor() { }

  ngOnInit() {
  }

}
