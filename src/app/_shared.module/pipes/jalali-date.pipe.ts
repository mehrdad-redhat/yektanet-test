import * as moment from 'jalali-moment'
import {Pipe, PipeTransform} from "@angular/core";

/**
* it's a pipe named 'jalaliDate' that converts a date to jalali date
*/
@Pipe({name: 'jalaliDate'})


export class JalaliDatePipe implements PipeTransform {

  transform(date: any,format:string): any {
    if(date){
      moment.loadPersian(true);
      return moment(date).doAsJalali(true).locale('fa').format(format);
    }

  }
}





