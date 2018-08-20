import { Pipe, PipeTransform } from '@angular/core';

/**
 * a pipe to put a comma between every 3 digits
 */
@Pipe({name: 'decimalPoint'})
export class DecimalPointPipe implements PipeTransform {
	transform(value: number): any {
		if(value){
			if (!isNaN(value)) {
				let valueParts : string[] = [];
				for (let i=0; i < (value.toString().length); i++) {
					valueParts[i] = value.toString().charAt(i);
				}
				let valuePartsReverse = valueParts.reverse();
				if (value.toString().length > 3)
					for (let i = 3; i<=valuePartsReverse.length ; i+=4) {
						valuePartsReverse.splice(i , 0 , ',');
					}
				valueParts = valuePartsReverse.reverse();
				return valueParts.join('');
			}
			else
			{
				return value;
			}
		}
	}
}