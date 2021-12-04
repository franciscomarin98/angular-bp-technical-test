import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from "./table/table.component";
import {PrimeNgModule} from '../modules/prime-ng/prime-ng.module';
import {SearchFilterPipe} from "../pipes/search-filter.pipe";

@NgModule({
  declarations: [
    TableComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    TableComponent
  ]
})
export class ComponentsModule {
}
