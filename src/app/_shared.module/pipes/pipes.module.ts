import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FilterPipe} from "./filter.pipe";
import {JalaliDatePipe} from "./jalali-date.pipe";
import {PaginatePipe} from "./paginate.pipe";
import {TextHelperPipe} from "./textHelper.pipe";
import {ShortenFormPipe} from "./shorten-form.pipe";
import {DecimalPointPipe} from './decimal-point.pipe';


@NgModule({
	imports: [
		CommonModule,

	],
	declarations: [
		FilterPipe,
		JalaliDatePipe,
		PaginatePipe,
		TextHelperPipe,
		ShortenFormPipe,
		DecimalPointPipe
	],
	exports: [
		FilterPipe,
		JalaliDatePipe,
		PaginatePipe,
		TextHelperPipe,
		ShortenFormPipe,
		DecimalPointPipe

	]
})
export class PipesModule {
}
