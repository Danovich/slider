import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { CaruselComponent } from './carousel/carusel.component';
import { CarouselCardComponent } from './carousel/carousel-card/carousel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CaruselComponent,
    CarouselCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
