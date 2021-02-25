import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseStoriesComponent } from './components/browse-stories/browse-stories.component';

const routes: Routes = [
  {
    path: '', component: BrowseStoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
