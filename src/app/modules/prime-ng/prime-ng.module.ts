import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";
import {ImageModule} from 'primeng/image';
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ImageModule,
    RippleModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    ImageModule,
    RippleModule
  ],
})
export class PrimeNgModule {
}
