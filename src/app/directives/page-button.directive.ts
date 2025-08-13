import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[page-button]',
})
export class PageButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'button button-page';
  }
}
