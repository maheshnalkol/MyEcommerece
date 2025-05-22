import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() getImages!: Array<string>;
  constructor() {}

  ngOnInit(): void {}
  currentIndex = 0;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.getImages.length) % this.getImages.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.getImages.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
