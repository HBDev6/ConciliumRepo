import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {
  isLoading : boolean;
  character:Character;

  constructor(private characterService:CharacterService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data=>{
      this.character = data;
      this.isLoading = false;
    })
  }

}
