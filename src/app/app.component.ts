import { Component } from '@angular/core';

import { Slide } from './carousel/carusel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides: Slide[] = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 4' },
    { title: 'Slide 5' },
    { title: 'Slide 6' },
    { title: 'Slide 7' },
    { title: 'Slide 8' },
    { title: 'Slide 9' },
    { title: 'Slide 10' },
  ]

  onShowClick(event) {
    console.log(event);
  }
}
