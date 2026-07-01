import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial-3');
  theme = signal<"dark" | "light">("light")
  isDark = signal<boolean>(false)
  msg = ""
  constructor() {
    effect(() => {
      if (this.isDark()) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
      }
      else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    })
  }
  changeTheme() {
    this.theme.set(this.theme() === "dark" ? "light" : "dark");

    this.isDark.update((mode) => !mode)
  }



}
