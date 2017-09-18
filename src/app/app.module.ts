import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './logic-map/map.component';
import { AppRoutingModule } from './app-routing.module';

import '../assets/style/styles.scss';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
