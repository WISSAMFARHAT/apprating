import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BarRatingModule } from 'ngx-bar-rating';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';

import { faStar, faStarHalfAlt, faTimesCircle,faCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { RatingBarStarComponent } from './components/rating-bar-star/rating-bar-star.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    RatingBarStarComponent
  ],
  imports: [
    BrowserModule,
    BarRatingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle,faCircle);
  }
}
