import { Component, OnInit } from '@angular/core';
import { ICharacters, IBaseResponse } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  charactersList: ICharacters[];

  constructor(private apiService: CharactersService) { }

  ngOnInit(): void {
    this.getCharactersList();
  }
  getCharactersList(): void {
    this.apiService.getCharacters().subscribe((characters: IBaseResponse[]) => {
      this.formatResponse(characters);

    });
  }
  formatResponse(data: any) {
    this.charactersList = data.results;
  }

}
