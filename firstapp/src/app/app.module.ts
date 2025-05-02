import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { UserComponent } from './user/user.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { TopicsComponent } from './topics/topics.component';
import { HighlightDirective } from './highlight.directive';
import { HelloPipe } from './hello.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    HomeComponent,
    TrainingComponent,
    UserComponent,
    IfdemoComponent,
    TopicsComponent,
    HighlightDirective,
    HelloPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
