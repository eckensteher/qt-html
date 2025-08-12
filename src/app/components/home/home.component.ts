import {Component, signal} from '@angular/core';
import {HomeData} from '../../models/home.class';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'qt-home.component',
  imports: [
    RouterLink
  ],
  template: `
    <h1>{{homeData().title}}</h1>
    <details>
      <summary>{{homeData().publisher}}&#64;{{homeData().version}}</summary>
      <div>{{homeData().description}}</div>
    </details>
    <p>
      <a routerLink="/about">about</a><br/>
      <a routerLink="/node">node</a>
    </p>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeData = signal<HomeData>({
    title: "Fragenbogen Demo",
    publisher: "eckensteher",
    version: "1.0 2025",
    description: "Dieser Fragenbaum dient der Demonstration"
  })
}
