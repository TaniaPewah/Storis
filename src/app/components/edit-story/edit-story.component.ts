import { Component, OnInit, EventEmitter, Output, Input,ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { Story } from '../../models/Story';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { StoryService } from 'src/app/services/story.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  @Input() parent : Story;
  @Input() choice : string;
  @Output() cancelCreateStory: EventEmitter<any> = new EventEmitter();

  user: User = new User();
  story: Story = new Story();
  submitted = false;
  imageToUpload: File = null;

  constructor(private storyService:StoryService,
    private authService: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router ) { 
    this.afAuth.onAuthStateChanged(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
        console.log("user logged in");
      } else {
        console.log("user not logged in");
      }
    });
  }

  ngOnInit(): void {
    this.story.title = this.choice;
    this.story.choice_one = { text: '', id: null};
    this.story.choice_two = { text: '', id: null};    
  }

  onCancelCreate(){
    console.log("cancel create story");
    this.router.navigate(['/browse']);
  }

  onSubmit(){

    
    this.story.date = new Date();
    this.story.parent = this.parent.id;
    this.story.author = this.user.displayName;
    this.storyService.saveStory(this.story, this.imageToUpload);
  }

  handleImageFileInput( event ){
    this.imageToUpload = event.target.files[0];
  } 

  
}
