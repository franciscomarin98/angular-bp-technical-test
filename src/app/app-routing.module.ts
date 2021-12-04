import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonPageComponent} from "./pages/pokemon-page/pokemon-page.component";

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonPageComponent
  },
  {
    path: '**',
    redirectTo: 'pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
