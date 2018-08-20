import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[sbOnlyNumbersAllowed]'
})
export class OnlyNumbersAllowedDirective {

  constructor(private element: ElementRef) {
  }

  @Input() active=true;

  @HostListener('keypress', ['$event']) onKeypress($event) {
      if(this.active){
        let charCode = $event.which || $event.keyCode || $event.charCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return /^[0-9۰۱۲۳۴۵۶۷۸۹]$/.test($event.key);
        }
        else
          return true;
      }
    }

  }
