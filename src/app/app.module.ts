import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ComponentsModule} from "./components/components.module";
import {PrimeNgModule} from "./modules/prime-ng/prime-ng.module";
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import {HttpClientModule} from "@angular/common/http";
import { PokemonFormPageComponent } from './pages/pokemon-form-page/pokemon-form-page.component';


@NgModule({
    declarations: [
        AppComponent,
        PokemonPageComponent,
        PokemonFormPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ComponentsModule,
        PrimeNgModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
