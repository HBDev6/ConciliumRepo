import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  characterForm : Character;
  availableGrades : string[];
  // availableCategory : string[];
  constructor(private characterService:CharacterService, private router:Router) { }

  ngOnInit(): void {
    this.characterForm = new Character();
    this.availableGrades = this.characterService.availableGrades;
    // this.availableCategory = this.characterService.availableCategory;
  }

  addCharacter(){
    this.characterService.add(this.characterForm).subscribe(data=>{
      this.router.navigate(['/concilium']);
    });

  }
}




