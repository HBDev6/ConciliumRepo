import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters : Character[];
  isLoading : boolean;

  constructor(private characterService : CharacterService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.getAllCharacters().subscribe(data=>{
      this.characters = data;
      this.isLoading = false;
    });
  }

  delete(character:Character){
    this.isLoading = true;
    this.characterService.delete(character).subscribe(data =>{
      this.characterService.getAllCharacters().subscribe(data=>{
        this.characters = data;
        this.isLoading = false;
      });
    });
  }






}
