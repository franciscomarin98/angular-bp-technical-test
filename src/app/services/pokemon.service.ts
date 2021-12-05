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

  getPokemon(idPokemon: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemons/${idPokemon}`);
  }

  storePokemon(data: Pokemon) {
    return this.http.post(`${this.baseUrl}/pokemons/?idAuthor=1`, data);
  }

  updatePokemon(idPokemon: number, data: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.baseUrl}/pokemons/${idPokemon}`, data);
  }

  deletePokemon(id: number) {
    return this.http.delete(`${this.baseUrl}/pokemons/${id}`);
  }
}
