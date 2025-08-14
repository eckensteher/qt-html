import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RootDataService} from './services/root-data.service';
import {Subscription} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'qt-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `
})

export class App implements OnInit, OnDestroy {
  private rootDataService = inject(RootDataService);
  private titleService = inject(Title);
  private appTitleSubscription: Subscription | null = null;

  ngOnInit() {
    this.appTitleSubscription = this.rootDataService.appTitle.subscribe(title => {
      this.titleService.setTitle(title);
    });
  }

  ngOnDestroy() {
    if (this.appTitleSubscription !== null) {
      this.appTitleSubscription.unsubscribe();
    }
  }
}
