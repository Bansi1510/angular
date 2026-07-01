import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurrency',
})
export class ConvertCurrencyPipe implements PipeTransform {
  transform(usd: number, rate: number): number {
    return usd * rate;
  }
}
