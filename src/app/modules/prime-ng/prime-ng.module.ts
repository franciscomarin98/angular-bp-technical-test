import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule
  ],
})
export class PrimeNgModule {
}
