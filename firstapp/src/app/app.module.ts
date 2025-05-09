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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { notsavedGuard } from './notsaved.guard';
import { CarsComponent } from './cars/cars.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './cars/token.interceptor';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogpostComponent, canActivate: [authGuard] },
  { path: 'greet', component: GreetComponent },
  { path: 'ifdemo', component: IfdemoComponent },
  { path: 'topics', component: TopicsComponent, canActivate: [authGuard], canDeactivate: [notsavedGuard] },
  { path: 'training', component: TrainingComponent },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'details/:uid', component: DetailsComponent }
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cars', component: CarsComponent }

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
    SigninComponent,
    SignupComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
