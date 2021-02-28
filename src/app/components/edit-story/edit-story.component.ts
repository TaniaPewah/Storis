import { Component, OnInit, EventEmitter, Output, Input,ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  @Input() user: User;
  @Output() cancelCreateStory: EventEmitter<any> = new EventEmitter();
  @ViewChild('author') author: ElementRef;
  // @ViewChild('option1') option1: ElementRef;
  // @ViewChild('option2') option2: ElementRef;

  story: Story = new Story();
  submitted = false;

  constructor(private storyService:StoryService ) { }

  ngOnInit(): void {
    this.story.choices = new Array(2);
    
  }

  onCancelCreate(){
    console.log("cancel create story");
    this.cancelCreateStory.emit();
  }

  onSubmit(){
  
    this.story.author = this.author.nativeElement.innerHTML;
    this.story.image = "http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg";
    this.story.date = new Date();
    //this.story.choices = ["1","2"];
    
    this.storyService.createStory(this.story).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newStory(): void {
    this.submitted = false;
    this.story = new Story();
  }
}
