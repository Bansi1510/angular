import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial-1');
  counter = 0;
  incremenet() {
    this.counter = this.counter + 1
  };
  decrement() {
    if (this.counter > 0) this.counter = this.counter - 1
    else this.counter = 0
  };
  reset() {
    this.counter = 0
  }
}
