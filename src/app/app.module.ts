import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GdnComponent } from './gdn.component';

@NgModule({
  declarations: [
    GdnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GdnComponent]
})
export class AppModule { }
