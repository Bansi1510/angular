import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(name: string): string {
    const parts = name.split(" ");
    if (parts.length < 2) return name;

    const first = parts[0].charAt(0).toUpperCase();

    return `${first} ${parts[1]}`
  }
}
