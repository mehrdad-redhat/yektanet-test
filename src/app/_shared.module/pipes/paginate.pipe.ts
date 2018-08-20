

import { Pipe, PipeTransform } from '@angular/core';

/**
 * it's a pipe named 'paginate' that receives a page number as the second attribute and a page capacity as the third attr, and returns the array with the new value
 */
@Pipe({name: 'paginate'})

export class PaginatePipe implements PipeTransform {
	
	
	transform(arr: any[], pages: number, capacity: number): any[]{
		return arr.slice(pages*capacity , (capacity + pages*capacity));
	}
}


