import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {RootDataService} from '../../services/root-data.service';
import {TranslatePipe} from '../../pipes/translate.pipe';
import {PageButtonDirective} from '../../directives/page-button.directive';

@Component({
  imports: [
    RouterLink,
    TranslatePipe,
    PageButtonDirective
  ],
  template: `
    <div class="brand">
      <p>{{rootDataService.rootData().brand}}</p>
    </div>
    <div class="about-box">
      <div class="row-stack">
        <div>{{'publisherLabel' | translate}}:</div>
        <div>{{rootDataService.rootData().publisher}}</div>
      </div>
      <div class="row-stack">
        <div>{{'versionLabel' | translate}}:</div>
        <div>{{rootDataService.rootData().version}}</div>
      </div>
      <div class="row-stack">
        <div>{{'emailLabel' | translate}}:</div>
        <div><a [href]="'mailto:' + rootDataService.rootData().email">
          {{rootDataService.rootData().email}}</a></div>
      </div>
    </div>
    <a page-button routerLink="/">{{'goHomeButtonLabel' | translate }}</a>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  rootDataService = inject(RootDataService);

}
