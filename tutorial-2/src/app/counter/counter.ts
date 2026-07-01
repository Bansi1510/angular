import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  num = signal(0)
  increment() {
    this.num.update(v => v + 1)
  }
  decrement() {
    if (this.num() <= 0) this.num.set(0)
    else this.num.update(v => v - 1)
  }
  reset() {
    this.num.set(0)
  }

}
