import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";
import {ImageModule} from 'primeng/image';
import {RippleModule} from "primeng/ripple";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ImageModule,
    RippleModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    ImageModule,
    RippleModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule
  ],
})
export class PrimeNgModule {
}
