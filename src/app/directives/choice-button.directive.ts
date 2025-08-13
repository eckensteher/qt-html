import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[choice-button]',
})
export class ChoiceButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'button button-choice';
  }
}
