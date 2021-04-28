import { Routes } from '@angular/router';
import { InitialChoiceComponent } from './app/components/initial-choice/initial-choice.component';
import { WelcomePageComponent } from './app/components/welcome-page/welcome-page.component';
import { BrowseStoriesComponent } from './app/components/browse-stories/browse-stories.component';
import { EditStoryComponent } from './app/components/edit-story/edit-story.component';

export const appRoutes: Routes = [
    { path: 'welcome', component: InitialChoiceComponent},
    { path: 'browse', component: BrowseStoriesComponent},
    { path: 'login', component: WelcomePageComponent},
    { path: 'create', component: EditStoryComponent},
    { path: '', redirectTo: '/welcome', pathMatch:'full'},
];