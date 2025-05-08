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
import { BlogpostComponent } from './blogpost/blogpost.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'blog',component:BlogpostComponent},
  {path:'greet',component:GreetComponent},
  {path:'ifdemo',component:IfdemoComponent},
  {path:'topics',component:TopicsComponent},
  {path:'training',component:TrainingComponent},
  {path:'user',component:UserComponent, children:[
    {path:'details/:uid',component:DetailsComponent}
  ]},
  {path:'signin',component:SigninComponent}
 
] 
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
    HelloPipe,
    BlogpostComponent,
    CommentComponent,
    DetailsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
