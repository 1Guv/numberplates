import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailValidation]'
})
export class EmailValidationDirective {

  private readonly emailPattern: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    if (event) {
      event.preventDefault();
    }
  }

}
