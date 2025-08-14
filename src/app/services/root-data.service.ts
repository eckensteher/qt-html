import {Injectable, signal} from '@angular/core';
import {RootData} from '../models/root-data.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootDataService {
  rootData = signal<RootData>({
    title: "Fragenbogen Demo",
    publisher: 'eckensteher software solutions berlin',
    email: "eckensteher@gmx.com",
    version: '1.4 - 2025',
    commentaryText: '',
    description: "Dieser Fragenbaum dient der Vorbereitung einer ",
    brand: "eckensteher"
  });
  appTitle = new BehaviorSubject('Fragenbaum');
}
