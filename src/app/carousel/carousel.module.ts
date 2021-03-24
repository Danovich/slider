import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

const carousel = [
  CarouselComponent,
  CarouselItemComponent
];

@NgModule({
  declarations: [
    carousel
  ],
  imports: [
    CommonModule
  ],
  exports: [
    carousel
  ]
})
export class CarouselModule { }
