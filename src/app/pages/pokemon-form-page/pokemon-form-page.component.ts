import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-form-page',
  templateUrl: './pokemon-form-page.component.html',
  styleUrls: ['./pokemon-form-page.component.css']
})
export class PokemonFormPageComponent implements OnInit {

  val1: number  = 1;
  val2: number  = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
