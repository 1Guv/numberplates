import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  @HostListener('input', ['$event']) onInput(event) {
    event.target.value = event.target.value.toUpperCase();
    return true;
  }

}
