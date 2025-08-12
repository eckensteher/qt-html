import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {NodeComponent} from './components/node/node.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "node",
    component: NodeComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];
