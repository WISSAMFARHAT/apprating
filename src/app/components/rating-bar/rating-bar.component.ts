import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input() readOnly =true;
  @Input() rate: number =2 ;
  @Input() editable:boolean=true;
  @Output() ratingChange = new EventEmitter<number>();

   max=5;
  constructor() { }

  ngOnInit(): void {
  }
  ratingChanged($event: number) {
    this.ratingChange.emit($event);
    this.rate=$event;
  }

}
