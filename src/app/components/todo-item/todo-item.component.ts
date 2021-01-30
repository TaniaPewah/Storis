import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; // from the parent components
  @Output() deleteTodo: EventEmitter<Todo> = 
              new EventEmitter(); // to the parent component

  constructor( private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onDelete( todo ){
    this.deleteTodo.emit(todo);
    console.log("deleted " + todo.title );
  }

  onToggle( todo ){
    todo.completed = !todo.completed
    // Toggle on server:
    this.todoService.toggleCompleted(todo).subscribe( todo =>
      console.log(todo));
  }
}
