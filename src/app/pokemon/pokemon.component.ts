import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonFromParent: Array<any> =[]; //my pokemon-array from api
  constructor() { }

  ngOnInit(): void {
  }

}
