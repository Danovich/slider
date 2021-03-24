import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface Slide {
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Output() onShowBtnClick = new EventEmitter();
  @Input() slides: Slide[];
  @Input() slidesToScroll = 3;
  groupedSlides: Slide[][];
  dotsArr: any[];
  currentIndex = 0;

  constructor() { }

  get isNextDisabled() {
    return this.currentIndex === this.groupedSlides.length - 1 ? true : false;
  }

  get isPrevDisabled() {
    return this.currentIndex === 0 ? true : false;
  }

  ngOnInit() {
    // this.preloadImages();
    this.groupedSlides = this.chunckArray(this.slides || []);
    this.dotsArr = Array.from({ length: this.groupedSlides.length });
  }

  onNextClick() {
    const next = this.currentIndex + 1;
    this.currentIndex = next === this.groupedSlides.length ? 0 : next;
  }

  onPrevClick() {
    const prev = this.currentIndex - 1;
    this.currentIndex = prev < 0 ? this.groupedSlides.length - 1 : prev;
  }

  onDotClick(i) {
    this.currentIndex = i;
  }

  onShowClick(item) {
    const { title } = item;
    this.onShowBtnClick.emit(title);
  }

  chunckArray(arr, chunckLen = this.slidesToScroll) {
    const chuckedArr = [];
    for (const item of arr) {
      let last = chuckedArr[chuckedArr.length - 1];
      (!last || last.length === chunckLen) ? chuckedArr.push([item]) : last.push(item);
    }
    return chuckedArr;
  }

  preloadImages() {
    for (const slide of this.slides) {
      // new Image().src = slide.src;
    }
  }

}
