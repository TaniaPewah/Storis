import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from 'src/app/models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-display-story-item',
  templateUrl: './display-story.component.html',
  styleUrls: ['./display-story.component.css']
})
export class DisplayStoryComponent implements OnInit {
  @Input() story: Story;
  @Output() chooseStoryOption: EventEmitter<any> = new EventEmitter();
  currentStory: Story = null;
  editing: boolean = false;
  imageToUpload: File = null;

  constructor( private storyService:StoryService ) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.currentStory = { ...this.story };
  }

  makeChoice(target): void{
    // TODO: get the clicked choice
    let chosenChoice = "this";
    // if chosen option has content:
    //   display the content on the same component
    // else open edit mode on the same component
    if( this.story.choice_one.content ){
      this.displayNextOutcome();
    } else {
      this.openEditChoiceMode( chosenChoice );
    }
  }

  displayNextOutcome(){
    // TODO: sliding effect of the prev story, 
    // display the chosen choice.content on the same component
  }

  openEditChoiceMode( choiceText ){

    this.editing = true;
    console.log("opening edit choice mode");
    // TODO: sliding effect of the prev story, title becomes the chosen choice text
    this.story = new Story();
    this.story.title = choiceText;
  }

  handleImageFileInput( event ){
    this.imageToUpload = event.target.files[0];
  }

  onSubmit(){
  
    // this.story.author = this.user.displayName;
    // this.story.date = new Date();
    // this.storyService.saveStory(this.story, this.imageToUpload);
    // this.router.navigate(['/browse']);
  }
}
