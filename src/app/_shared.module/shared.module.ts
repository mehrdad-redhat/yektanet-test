import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from '@angular/router';
import {PipesModule} from "./pipes/pipes.module";
import {OnlyNumbersAlphabetAllowedDirective} from './directives/only-numbers-alphabet-allowed.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    OnlyNumbersAlphabetAllowedDirective,

  ],
  exports: [
    PipesModule,
    OnlyNumbersAlphabetAllowedDirective
  ]
})
export class SharedModule {
}
