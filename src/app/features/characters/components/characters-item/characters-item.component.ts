import { Component, OnInit } from '@angular/core';
import { ICharacters } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters-item',
  templateUrl: './characters-item.component.html',
  styleUrls: ['./characters-item.component.css']
})
export class CharactersItemComponent implements OnInit {
  charactersItem: ICharacters;



  constructor(private apiService: CharactersService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getCharacters();

  }
  getCharacters(): void {
    console.log(this.charactersItem);
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getCharacter(id).subscribe((data: any) => {
      this.charactersItem = data;
    });

  }
  goBack(): any {
    this.location.back();
  }

}
