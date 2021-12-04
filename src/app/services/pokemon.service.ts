import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Pokemon} from "../interfaces/pokemon";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  loadPokemonData(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/pokemons/?idAuthor=1`);
  }
}
