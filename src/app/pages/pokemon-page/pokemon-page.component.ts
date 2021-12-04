import {Component, OnInit} from '@angular/core';
import {Pokemon} from 'src/app/interfaces/pokemon';
import {PokemonService} from 'src/app/services/pokemon.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PokemonPageComponent implements OnInit {

  termino: string = '';
  pokemons: Pokemon[] = []

  constructor(
    private pokemonService: PokemonService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loadPokemonData()
  }

  loadPokemonData(): void {
    this.pokemonService.loadPokemonData().subscribe(data => {
      this.pokemons = data;
    });
  }

  deletePokemon(idPokemon: number): void {
    this.confirmationService.confirm({
      message: '¿Está seguro de que quiere continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.pokemonService.deletePokemon(idPokemon).subscribe((response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Acción exitosa',
            detail: 'Pokemon eliminado correctamente'
          });
          this.loadPokemonData();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Acción no exitosa ',
            detail: 'El pokemon no existe o no se ha podido eliminar'
          });
        })
      }
    });
  }

  navigateToPageCreatePokemon(): void {
    this.router.navigateByUrl('/pokemon/crear');
  }


}
