import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {

  @Input() pokemons: Pokemon[] = [];
  @Input() query: string = '';
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  first: number = 0;
  rows: number = 3;

  next = () => this.first = this.first + this.rows;
  prev = () => this.first = this.first - this.rows;
  reset = () => this.first = 0;

  isLastPage(): boolean {
    return this.pokemons ? this.first === (this.pokemons.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.pokemons ? this.first === 0 : true;
  }

  deletePokemon(pokemonId: number) {
    this.delete.emit(pokemonId);
  }

  editPokemon(pokemonId: number) {
    this.edit.emit(pokemonId);
  }


}
