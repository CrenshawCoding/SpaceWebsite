import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AsteroidOverview } from './asteroid-overview/asteroid-overview.component';
import { AsteroidFlyby } from './asteroid-flyby/asteroid-flyby.component';

@NgModule({
  declarations: [
    AsteroidOverview,
    AsteroidFlyby
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AsteroidOverview, AsteroidFlyby]
})
export class AppModule { }
