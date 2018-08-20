
import { Pipe, PipeTransform } from '@angular/core';

/**
 * it's a pipe named 'textHelper' that receives a string, and replaces all the english numbers or arabic letters with
 * respective persian characters. also, it adds a comma inside numbers every three digits
 */
@Pipe({name: 'textHelper'})
export class TextHelperPipe implements PipeTransform {

    public transform(text: any): string {

        let arabicChars = ["ي","ك","ى","ة"];
        let persianChars = ["ی","ک","ی","ه"];

        let persianNumbers = ['۱','۲','۳','۴','۵','۶','۷','۸','۹','۰'];
        let arabicNumbers = ['١','٢','٣','٤','٥','٦','٧','٨','٩','٠'];
        let englishNumbers = ['1','2','3','4','5','6','7','8','9','0'];


        let clearText = function (text:any){

            if(text != null){

                text = text.toString();

                if(typeof(text) != 'undefined'){

                    text = text.replace(/0|1|2|3|4|5|6|7|8|9/gi, function(x:any){
                        return persianNumbers[englishNumbers.indexOf(x)];
                    });

                    text = text.replace(/ي|ك|ى|ة/gi, function(x:any){

                        return persianChars[arabicChars.indexOf(x)];
                    });

                    text = text.replace(/١|٢|٣|٤|٥|٦|٧|٨|٩|٠/gi, function(x:any){
                        return persianNumbers[arabicNumbers.indexOf(x)];
                    });

                }
            }

            return text;
        };

        // let numberFormat = function (number:any){
		//
        //     number += '';
        //     let x = number.split('.');
        //     let x1 = x[0];
        //     let x2 = x.length > 1 ? '.' + x[1] : '';
        //     let rgx = /(\d+)(\d{3})/;
        //     while (rgx.test(x1)) {
        //         x1 = x1.replace(rgx, '$1' + ',' + '$2');
        //     }
        //     return x1 + x2;
        // };

        if(typeof text == 'number'){
            // text = numberFormat(text);
        }

        return clearText(text);


        // let exp = parseFloat(exponent);
        // return Math.pow(text, isNaN(exp) ? 1 : exp);
    }
}
