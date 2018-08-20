import { Pipe, PipeTransform } from '@angular/core';


/**
 * to shorten the prices and add a suitable quantity phrase
 */
@Pipe({name: 'shortenForm'})

export class ShortenFormPipe implements PipeTransform {
	transform(value: any): any {
		if(value){
			if (!isNaN(value)) {
				let valueParts : string[] = [];
				for (let i=0; i < (value.toString().length); i++) {
					valueParts[i] = value.toString().charAt(i);
				}
				switch (valueParts.length) {
					case 1:
					case 2:
					case 3: {
						return (parseInt(value).toFixed(1).replace(/\.0$/, '')) + ' تومان';
					}
					case 4:
					case 5:
					case 6: {
						return (parseInt(value)/1000).toFixed(1).replace(/\.0$/, '') + ' هزار تومان';
					}
					case 7:
					case 8:
					case 9:{
						return (parseInt(value)/1000000).toFixed(1).replace(/\.0$/, '') + ' میلیون تومان';
					}
					case 10:
					case 11:
					case 12: {
						return (parseInt(value)/1000000000).toFixed(1).replace(/\.0$/, '')  + ' میلیارد تومان';
					}
					case 13:
					case 14:
					case 15:{
						return (parseInt(value)/1000000000000).toFixed(1).replace(/\.0$/, '')  + ' هزار میلیارد تومان';
					}
				}
			}
			else
			{
				return value;
			}
		}

	}
}
