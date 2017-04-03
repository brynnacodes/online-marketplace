import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { BluesComponent } from './blues/blues.component';
import { HipHopComponent } from './hip-hop/hip-hop.component';
import { JazzComponent } from './jazz/jazz.component';
import { ClassicalComponent } from './classical/classical.component';
import { PopComponent } from './pop/pop.component';
import { IndieComponent } from './indie/indie.component';
import { NewListingComponent } from './new-listing/new-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BluesComponent,
    HipHopComponent,
    JazzComponent,
    ClassicalComponent,
    PopComponent,
    IndieComponent,
    NewListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
