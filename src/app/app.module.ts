import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ViewFreshIconComponent } from './components/view-fresh-icon/view-fresh-icon.component';
import { ViewHotIconComponent } from './components/view-hot-icon/view-hot-icon.component';
import { AddStoryComponent } from './components/add-story/add-story.component';
import { BrowseStoriesComponent } from './components/browse-stories/browse-stories.component';
import { DisplayStoryComponent } from './components/display-story/display-story.component';
import { EditStoryComponent } from './components/edit-story/edit-story.component';
import { SigninComponent } from './components/signin/signin.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    ViewFreshIconComponent,
    ViewHotIconComponent,
    AddStoryComponent,
    BrowseStoriesComponent,
    DisplayStoryComponent,
    EditStoryComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
