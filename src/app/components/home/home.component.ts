import {Component, signal, Signal} from '@angular/core';
import {HomeData} from '../../models/home.class';

@Component({
  selector: 'qt-home.component',
  imports: [],
  template: `
    <h1>{{homeData().title}}</h1>
    <details>
      <summary>{{homeData().publisher}}&#64;{{homeData().version}}</summary>
      <div>{{homeData().description}}</div>
    </details>
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
