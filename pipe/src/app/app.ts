import { SafeExpr } from './../../node_modules/ajv/dist/compile/codegen/code.d';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortNamePipe } from './pipes/short-name-pipe';
import { ConvertCurrencyPipe } from './pipes/convert-currency-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShortNamePipe, ConvertCurrencyPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipe');

  name = "Bansi Parmar"

  USD = 15;
  INRperUSD = 100
}
