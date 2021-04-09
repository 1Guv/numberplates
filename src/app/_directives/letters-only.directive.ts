import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[lettersOnly]'
})
export class LettersOnlyDirective {
  key: any;

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }
  }

}
