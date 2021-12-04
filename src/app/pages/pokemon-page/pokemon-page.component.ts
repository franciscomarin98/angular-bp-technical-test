import {Component, OnInit} from '@angular/core';
import {Pokemon} from 'src/app/interfaces/pokemon';
import {PokemonService} from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  value1: string = '';
  pokemons: Pokemon[] = []

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.loadPokemonData()
  }

  loadPokemonData(): void {
    this.pokemonService.loadPokemonData().subscribe(data => {
      this.pokemons = data;
    })
  }

}
