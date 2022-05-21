import { Component } from '@angular/core';
import { PokemonData } from './models/pokemon-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allpokemonFromParent: PokemonData[] = [];
  title = 'pokedex-app';

  pokemonParentUpdate($event:any) {
    this.allpokemonFromParent = $event; // push the recieved data from our first child-component (pokemon-list)
   }
}
