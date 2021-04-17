import { Component } from '@angular/core';

@Component({
  selector: 'gdn-root',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `,
  styles: ['']
})
export class GdnAppComponent {
  title = 'geodotnet-events';
}
