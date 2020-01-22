import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "followers", component: GithubFollowersComponent },
  { path: "follower/:id/:username", component: ProfileFollowerComponent },
  { path: "posts", component: PostComponent },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule{}