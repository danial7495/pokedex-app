import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { PokemonResult } from '../models/pokemon-result';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() PokemonList = new EventEmitter<any[]>(); // use otuput to send the subscribed data to the parent-component
  allPekomons : any[] = []; //we can use interface and have a model instead any, i try to do that at the end of project, if just time let me
  constructor(private getDataService : GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result:PokemonResult) => {
        this.getDataService.getPokemonByName(result.name).subscribe((res) => {
          this.allPekomons.push(res);
        });
      });
    });
    this.PokemonList.emit(this.allPekomons);
  }

}
