import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MAP_KEY } from './../config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: MAP_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
