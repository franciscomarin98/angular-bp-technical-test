import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-form-page',
  templateUrl: './pokemon-form-page.component.html',
  styleUrls: ['./pokemon-form-page.component.css']
})
export class PokemonFormPageComponent implements OnInit {

  url = "(http)?s?:?(\\/\\/[^\"']*\\.(?:png|jpg|jpeg|gif|png|svg))";

  formPokemon: FormGroup = this.fb.group({
    'name': ['', [Validators.required, Validators.minLength(3)]],
    'image': ['', [Validators.required, Validators.pattern(this.url)]],
    'attack': [null, [Validators.required, Validators.min(1), Validators.max(100)]],
    'defense': [null, [Validators.required, Validators.min(1), Validators.max(100)]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
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

  back(): void {
    this.router.navigate(['/pokemon'])
  }

  storePokemon(): void {

    if (this.formPokemon.invalid) {
      this.formPokemon.markAllAsTouched();
      return;
    }

    const data = {
      ...this.formPokemon.value,
      "type": "normal",
      "hp": 100,
      "idAuthor": 1,
    }


    this.pokemonService.storePokemon(data).subscribe(response => {
      this.router.navigateByUrl('/pokemon', { state: response });
    })

    this.formPokemon.reset();
  }

}
