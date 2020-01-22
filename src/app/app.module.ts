import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteComponent } from './favorite/favorite.component';
// import { from } from 'rxjs';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing-module';




@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    SignupComponent,
    PostComponent,
    GithubFollowersComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfileFollowerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, HttpClientModule, RoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
