import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';
import {RootDataService} from '../../services/root-data.service';

@Component({
  imports: [
    RouterLink,
    DatePipe
  ],
  template: `
    <div class>
      {{rootDataService.rootData().title}}
    </div>
    <div class="brand">
      <p>{{rootDataService.rootData().brand}}</p>
    </div>
    <details>
      <summary>{{ today | date }}</summary>
      <div>{{rootDataService.rootData().description}}</div>
    </details>
    <p>
      <a routerLink="/about">about</a><br/>
      <a routerLink="/node">node</a>
    </p>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  rootDataService = inject(RootDataService);
  today = Date.now();
}
