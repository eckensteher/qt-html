import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {RootDataService} from '../../services/root-data.service';
import {TranslatePipe} from '../../pipes/translate.pipe';

@Component({
  imports: [
    RouterLink,
    TranslatePipe
  ],
  template: `
    <div class="brand">
      <p>{{rootDataService.rootData().brand}}</p>
    </div>
    <div>
      <p>{{'publisherLabel' | translate}}: {{rootDataService.rootData().publisher}}</p>
      <p>{{'versionLabel' | translate}}: {{rootDataService.rootData().version}}</p>
      <p>{{'emailLabel' | translate}}: {{rootDataService.rootData().email}}</p>
    </div>

  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  rootDataService = inject(RootDataService);

}
