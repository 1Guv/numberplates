import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste',
  ];

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    // Allow: navigation keys: backspace, delete, arrows etc.
    if (this.navigationKeys.indexOf(event.key) > -1) {
      return;
    }

    // tslint:disable-next-line: deprecation
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  }

}
