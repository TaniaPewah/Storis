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
    DisplayStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
