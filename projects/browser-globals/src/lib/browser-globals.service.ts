import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserGlobalsService {

  constructor() {
  }

  windowRef(): any {
    return window;
  }

  documentRef(): any {
    return document;
  }

}
