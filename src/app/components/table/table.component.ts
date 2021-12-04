import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  @Input() query: string = '';
  @Output() pokemonId = new EventEmitter<number>();

  deletePokemon(value: number) {
    this.pokemonId.emit(value);
  }

  first: number = 0;
  rows: number = 3;

  constructor() {
  }

  ngOnInit(): void {
  }


  next = () => this.first = this.first + this.rows;
  prev = () => this.first = this.first - this.rows;
  reset = () => this.first = 0;

  isLastPage(): boolean {
    return this.pokemons ? this.first === (this.pokemons.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.pokemons ? this.first === 0 : true;
  }

}
