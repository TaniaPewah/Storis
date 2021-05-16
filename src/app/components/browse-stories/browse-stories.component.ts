import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-browse-stories',
  templateUrl: './browse-stories.component.html',
  styleUrls: ['./browse-stories.component.css']
})
export class BrowseStoriesComponent implements OnInit {
  stories: Story[];
  user : any = {};

  constructor(private storyService:StoryService,
              private afAuth: AngularFireAuth,
              private router: Router ) { 
 
      this.stories = [];
      this.afAuth.onAuthStateChanged(auth => {
        if (auth !== undefined && auth !== null) {
          this.user = auth;
        } else {
          this.router.navigate(['login']);
        }
      });
  }

  ngOnInit(): void {
    this.retrieveStories();
  }

  retrieveStories(){

    this.storyService.getStories().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.stories = data;
    });
  }

}
