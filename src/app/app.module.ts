import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';

import { GdnAppComponent } from './gdn.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
  declarations: [
    GdnAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GdnAppComponent]
})
export class AppModule { }
