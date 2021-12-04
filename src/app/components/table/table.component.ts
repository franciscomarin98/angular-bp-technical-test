import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
