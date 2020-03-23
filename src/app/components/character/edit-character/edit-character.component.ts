import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  isLoading : boolean;
  characterForm : Character;
  availableGrades : string[];
  constructor(private activatedRoute : ActivatedRoute, private characterService:CharacterService, private router : Router) { }

  ngOnInit(): void {
    this.availableGrades = this.characterService.availableGrades;
    this.isLoading=true;
    this.characterService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data =>{
      this.characterForm = data;
      this.isLoading = false;
    });
  }

  editCharacter(){
    this.characterService.editCharacter(this.characterForm).subscribe(data=>{
      this.router.navigate(['/concilium']);
    });
  }

}
