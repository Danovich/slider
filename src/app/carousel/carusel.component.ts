import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

export interface Slide {
  title: string;
}

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition('* => void', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
            ])
    ])
  ]
})
export class CaruselComponent implements OnInit {
  @Output() onShowBtnClick = new EventEmitter();
  @Input() slides: Slide[];
  @Input() slidesToScroll = 3;
  groupedSlides: Slide[][];
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
    this.groupedSlides = this.chunckArray(this.slides || []);
    this.preloadImages();
  }

  onNextClick() {
    const next = this.currentIndex + 1;
    this.currentIndex = next === this.groupedSlides.length ? 0 : next;
  }

  onPrevClick() {
    const prev = this.currentIndex - 1;
    this.currentIndex = prev < 0 ? this.groupedSlides.length - 1 : prev;
  }

  onShowClick(slide) {
    const {title} = slide;
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
