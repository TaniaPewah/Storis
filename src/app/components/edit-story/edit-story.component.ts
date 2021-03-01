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


  story: Story = new Story();
  submitted = false;
  imageToUpload: File = null;

  constructor(private storyService:StoryService ) { }

  ngOnInit(): void {    
  }

  onCancelCreate(){
    console.log("cancel create story");
    this.cancelCreateStory.emit();
  }

  onSubmit(){
  
    this.story.author = this.author.nativeElement.innerHTML;

    this.story.date = new Date();
    //this.story.image = this.imageToUpload;
    this.story.image = "http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg";
    
    this.storyService.createStory(this.story).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newStory(): void {
    this.submitted = false;
    this.story = new Story();
  }

  handleImageFileInput(files: FileList){
    //this.imageToUpload = files.item(0);
    //this.imageToUpload = files.item(0).map((obj)=> {return Object.assign({}, obj)});
    console.log("hhh");
    debugger;

  }
}
