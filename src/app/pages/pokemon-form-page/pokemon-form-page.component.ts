import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../interfaces/pokemon";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pokemon-form-page',
  templateUrl: './pokemon-form-page.component.html',
  styleUrls: ['./pokemon-form-page.component.css'],
  providers: [MessageService]
})
export class PokemonFormPageComponent implements OnInit {

  url = "(http)?s?:?(\\/\\/[^\"']*\\.(?:png|jpg|jpeg|gif|png|svg))";
  idPokemon: number | unknown;

  formPokemon: FormGroup = this.fb.group({
    'name': ['', [Validators.required, Validators.minLength(3)]],
    'image': ['', [Validators.required, Validators.pattern(this.url)]],
    'attack': [null, [Validators.required, Validators.min(1), Validators.max(100)]],
    'defense': [null, [Validators.required, Validators.min(1), Validators.max(100)]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  isInvalidField = (name: string) => this.formPokemon.get(name)?.invalid && this.formPokemon.get(name)?.touched;

  get imagenErrors(): string {
    const errors = this.formPokemon.get('image')?.errors;

    if (errors?.['required']) {
      return 'La imagen es requerida'
    }

    if (errors?.['pattern']) {
      return 'La URL no es de imagen'
    }

    return '';
  }

  getPokemon(): void {
    this.idPokemon = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idPokemon !== null) {
      this.pokemonService.getPokemon(Number(this.idPokemon)).subscribe((response: Pokemon) => {
        this.formPokemon.setValue({
          'name': response?.name,
          'image': response?.image,
          'attack': response?.attack,
          'defense': response?.defense
        });
      }, () => this.back())
    }
  }

  storePokemon(): void {

    if (this.formPokemon.invalid) {
      this.formPokemon.markAllAsTouched();
      return;
    }

    this.pokemonService.storePokemon({
      ...this.formPokemon.value,
      "type": "normal",
      "hp": 100,
      "idAuthor": 1,
    }).subscribe(response => {
        this.router.navigateByUrl('/pokemon');
    }, () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Acción no exitosa ',
        detail: 'No se pudo guardar el pokemon, intente nuevamente'
      });
    })

  }

  updatePokemon(id: number) {
    this.pokemonService.updatePokemon(id, {
      ...this.formPokemon.value,
      "type": "normal",
      "hp": 100,
      "idAuthor": 1,
    }).subscribe(response => {
      this.back();
    })
  }


  storeOrUpdate() {
    if (this.idPokemon === null) {
      this.storePokemon();
    } else {
      this.updatePokemon(Number(this.idPokemon));
    }
  }

  back(): void {
    this.router.navigate(['/pokemon'])
  }


}
