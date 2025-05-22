import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  @Input() prodARR!: any;
  timeLeft = 0;
  interval: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // Set your target flash sale end date here
  targetDate = new Date('2025-05-24T23:59:59');
  flashSales: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      this.timeLeft = distance;

      if (distance <= 0) {
        clearInterval(this.interval);
        this.timeLeft = 0;
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  }

  visibleCount = 4; // number of products to show at a time
  startIndex = 0;

  next() {
    if (this.startIndex + this.visibleCount < this.prodARR.length) {
      this.startIndex += this.visibleCount;
    } else {
      this.startIndex = 0;
    }
  }

  prev() {
    if (this.startIndex - this.visibleCount >= 0) {
      this.startIndex -= this.visibleCount;
    } else {
      this.startIndex = this.prodARR.length - this.visibleCount;
    }
  }
  get visibleProducts() {
    return this.prodARR.slice(
      this.startIndex,
      this.startIndex + this.visibleCount
    );
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
