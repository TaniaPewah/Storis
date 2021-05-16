import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ViewFreshIconComponent } from './components/view-fresh-icon/view-fresh-icon.component';
import { ViewHotIconComponent } from './components/view-hot-icon/view-hot-icon.component';
import { AddStoryComponent } from './components/add-story/add-story.component';
import { BrowseStoriesComponent } from './components/browse-stories/browse-stories.component';
import { DisplayStoryComponent } from './components/display-story/display-story.component';
import { EditStoryComponent } from './components/edit-story/edit-story.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { InitialChoiceComponent } from './components/initial-choice/initial-choice.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { UserSpaceComponent } from './components/user-space/user-space.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewFreshIconComponent,
    ViewHotIconComponent,
    AddStoryComponent,
    BrowseStoriesComponent,
    DisplayStoryComponent,
    EditStoryComponent,
    UserProfileComponent,
    WelcomePageComponent,
    InitialChoiceComponent,
    UserSpaceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
