import { Component } from '@angular/core';

import { Slide } from './carousel/carousel.component';

// https://medium.com/showpad-engineering/angular-animations-lets-create-a-carousel-with-reusable-animations-81c0dd8847e8
// https://github.com/ivylaboratory/angular-carousel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides: Slide[] = [
    { title: 'title1', subTitle: 'subTitle1' },
    { title: 'title2', subTitle: 'subTitle2' },
    { title: 'title3', subTitle: 'subTitle3' },
    { title: 'title4', subTitle: 'subTitle4' },
    { title: 'title5', subTitle: 'subTitle5' },
    { title: 'title6', subTitle: 'subTitle6' },
    { title: 'title7', subTitle: 'subTitle7' },
    { title: 'title8', subTitle: 'subTitle8' },
    { title: 'title9', subTitle: 'subTitle9' },
  ]

  onShowClick(event) {
    console.log(event);
  }
}
