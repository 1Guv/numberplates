import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[emailValidation]'
})
export class EmailValidationDirective {

  private readonly emailPattern: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    console.log('event', event);

    if (event) {
      event.preventDefault();
    }
  }

}
