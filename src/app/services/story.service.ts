import { Injectable } from '@angular/core';
import { Story } from '../models/Story';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private dbPath = '/stories';
  storiessRef: AngularFirestoreCollection<Story> = null;
  story: Story;
  isImageReady: boolean = false;
  areChoicesIdsReady: number = 0;

  imageStoragePath = '/images';
  imageDownloadURL: Observable<string>;
  imageUrl:string;

  constructor( private firestore: AngularFirestore ,
              private storage: AngularFireStorage) { 
    this.storiessRef = firestore.collection(this.dbPath);
  }

  saveStory(story: Story, image: File ): any {
    this.story = story;
    this.uploadImage( image, story ); 
    this.createOpenEndings(story.choice_one, story.choice_two);
  }

  createStorywithImageURLandChoicesIds(  ){

    this.isImageReady = false;
    this.areChoicesIdsReady = 0;
    
    this.storiessRef.add({ ...this.story }).then((res) => {
      console.log('Created new item successfully!');
      console.log('story id: ' + res.id);
    }).catch((error)=> {
      console.log("Problem in createStorywithImageURL->" + error);
    });
  }

  updateStoryImageUrl(id, story: Story): Promise<void> {
    return this.storiessRef.doc(id).set(story);
  }


  uploadImage(image, story){

    const n = Date.now();
    const imagePath = `${this.imageStoragePath}/${n}`;
    const fileRef = this.storage.ref( imagePath );
    const task = this.storage.upload( imagePath, image );

    //get notified when the download URL is available
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.imageDownloadURL = fileRef.getDownloadURL();
        this.imageDownloadURL.subscribe(url => {
          if (url) {
            this.story.imageURL = url;
            this.isImageReady = true;
            if( this.areChoicesIdsReady == 2){
              this.createStorywithImageURLandChoicesIds();
            }
          }
          console.log(story.imageURL);
        });
      })
    ).subscribe();
  }


  createOpenEndings(option1, option2){
    let storyOne = new Story();
    let storyTwo = new Story();
    storyOne.title = option1.text;
    storyTwo.title = option2.text;


    this.storiessRef.add({ ...storyOne }).then((res) => {
      console.log('Created new choice story item successfully!');
      console.log('story id: ' + res.id);
      debugger;
      this.story.choice_one.id = res.id;
      this.areChoicesIdsReady += 1;
      if( this.isImageReady && this.areChoicesIdsReady == 2){
        this.createStorywithImageURLandChoicesIds();
      }
    }).catch((error)=> {
      console.log("Problem in createOpenEndings->" + error);
    });

    this.storiessRef.add({ ...storyTwo }).then((res) => {
      console.log('Created new choice story item successfully!');
      console.log('story id: ' + res.id);
      
      this.story.choice_two.id = res.id;
      this.areChoicesIdsReady += 1;
      if( this.isImageReady && this.areChoicesIdsReady == 2){
        this.createStorywithImageURLandChoicesIds();
      }
    }).catch((error)=> {
      console.log("Problem in createOpenEndings->" + error);
    });
    
  }

  deleteStory(id: string): Promise<void> {
    return this.storiessRef.doc(id).delete();
  }

  getStoryByID( id: string) { 
    return this.storiessRef.doc(id).get();
  }

  getStories() { 
    return this.storiessRef;
  }
}
