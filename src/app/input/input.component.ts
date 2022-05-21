import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  allPekomons : any[] = []; //we can use interface and have a model instead any, i try to do that at the end of project, if just time let me
  constructor(private getDataService : GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result:any) => {
        this.getDataService.getPokemonByName(result.name).subscribe((res) => {
          this.allPekomons.push(res);
        });
      });
    });
  }

}
