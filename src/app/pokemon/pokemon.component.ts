import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from '../models/pokemon-data';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonFromParent: Array<any> =[]; //my pokemon-array from api
  constructor() { }

  keyword : string = "";
  searchedPokemon :PokemonData[]= [];

  ngOnInit(): void {
  }

   // mein erstes Versuch, das ich nicht gut fande
   
 /*  onSearchChange(e? : any) {
    let inputValue = e.target.value;
    console.log(inputValue);
      this.pokemonFromParent.forEach(element => {
       if(element.name === inputValue || (element.id).toString() === inputValue)
        {
          this.searchedPokemon.push(element);
        }
        return this.searchedPokemon;
      });
  } */


  search(query: string) { //function to get the input-value
    if (query.length > 0) {
      this.searchedPokemon = this.pokemonFromParent.filter((item) => { //filter that data with the input received und push that in a array
        return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || item.id.toString() == query ;
      });
    } else {
      this.searchedPokemon = [];
    }
  }
}
