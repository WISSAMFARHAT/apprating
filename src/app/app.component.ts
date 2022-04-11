import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RatingChangeEvent } from 'angular-star-rating';

export interface Skill {
  id?: number;
  key: string;
  value: number;
}
export interface SkillUpdatedEvent {
  skill: string;
  newRating: number;
  oldRating: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  title = 'barrating';
  @Input() editable: boolean=true;
  @Output() skillUpdated: EventEmitter<SkillUpdatedEvent> = new EventEmitter();
  @Input() skillList: Skill[]=[];
  key:string="app";
  news:number=3;
  old:number=1;
 
 
  
  public onRatingChanged(skill: string, newRating: number, oldRating: number) {
    this.skillUpdated.emit({skill, newRating, oldRating});
  }
}
