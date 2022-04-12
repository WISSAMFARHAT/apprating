import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-bar-star',
  templateUrl: './rating-bar-star.component.html',
  styleUrls: ['./rating-bar-star.component.css']
})
export class RatingBarStarComponent implements OnInit {
  @Input() ratestar: number =2 ;
  @Input() editable: boolean =true ;
  @Output() ratingChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ratingChanged($event: number) {
    this.ratingChange.emit($event);
    this.ratestar=$event;
  }

}
