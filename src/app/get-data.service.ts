import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  baseUrl  = "https://pokeapi.co/api/v2";
  //Get pokemons from api
  getPokemons() {
    return this.http.get(`${this.baseUrl}/pokemon/`); // Get array from API with httpclient  and return that
  }

  getPokemonByName(name: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
