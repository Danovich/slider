import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CarouselItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
