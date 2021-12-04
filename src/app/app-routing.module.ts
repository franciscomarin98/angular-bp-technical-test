import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonPageComponent} from "./pages/pokemon-page/pokemon-page.component";
import {PokemonFormPageComponent} from "./pages/pokemon-form-page/pokemon-form-page.component";

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonPageComponent
  },
  {
    path: 'pokemon/crear',
    component: PokemonFormPageComponent
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
