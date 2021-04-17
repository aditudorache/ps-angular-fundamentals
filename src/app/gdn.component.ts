import { Component } from '@angular/core';

@Component({
  selector: 'gdn-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class GdnAppComponent {
  title = 'geodotnet-events';
}
