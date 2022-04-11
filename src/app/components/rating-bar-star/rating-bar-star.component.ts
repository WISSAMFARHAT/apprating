import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar-star',
  templateUrl: './rating-bar-star.component.html',
  styleUrls: ['./rating-bar-star.component.css']
})
export class RatingBarStarComponent implements OnInit {
  @Input() ratestar: number =2 ;
  constructor() { }

  ngOnInit(): void {
  }

}
