import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
})
export class NumberOnlyDirective {
  constructor() {}

  // to allow only numeric value and disable any alphabets or other special characters
  @HostListener('keypress', ['$event'])
  onKey(evt: any) {
    if (evt.which === 110 || evt.which === 190 || evt.which === 46) {
      evt.preventDefault();
    }
    if (
      (evt.which !== 8 && evt.which !== 0 && evt.which < 46) ||
      evt.which > 57 ||
      evt.which === 47
    ) {
      evt.preventDefault();
    }
  }
}
