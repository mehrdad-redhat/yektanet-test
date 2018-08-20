import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from '@angular/router';
import {PipesModule} from "./pipes/pipes.module";
import {OnlyNumbersAllowedDirective} from "./directives/only-numbers-allowed.directive";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    OnlyNumbersAllowedDirective,

  ],
  exports: [
    PipesModule,
  ]
})
export class SharedModule {
}
