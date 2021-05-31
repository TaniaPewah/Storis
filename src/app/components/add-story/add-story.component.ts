import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  @Output() createStory: EventEmitter<any> = new EventEmitter();

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onCreateStory(){
    console.log("create story");
    this.router.navigate(['/create']);
  }
}
