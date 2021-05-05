import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message = '';
  timeLeft: number;
  @Input()
  seconds = 11;
  @Output()
  finish = new EventEmitter<boolean>();
  private intervalId = 0;

  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      // let v = changes.seconds.currentValue
      // v = typeof v === 'undefined' ? 11 : v;
      // const vFixed = Number(v);
      this.seconds = changes.seconds.currentValue;
    }
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.timeLeft <= 0) {
      this.timeLeft = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.timeLeft} seconds`;
  }

  reset() {
    this.clearTimer();
    this.timeLeft = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        this.message = 'Blast off!';
        alert('BLAST OFF');
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `T-${this.timeLeft} seconds and counting`;
      }
    }, 1000);
  }
}
