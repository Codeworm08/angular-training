import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    HomeComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
