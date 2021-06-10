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

  imageStoragePath = '/images';
  imageDownloadURL: Observable<string>;
  imageUrl:string;

  constructor( private firestore: AngularFirestore ,
              private storage: AngularFireStorage) { 
    this.storiessRef = firestore.collection(this.dbPath);
  }

  saveStory(story: Story, image: File ): any {
    this.uploadImage( image, story ); 
  }

  createStorywithImageURL( story:Story ){
    this.storiessRef.add({ ...story }).then((res) => {
      console.log('Created new item successfully!');
      console.log('story id: ' + res.id);
    }).catch((error)=> {
      console.log("Problem in createStorywithImageURL->" + error);
    });
  }

  updateStoryImageUrl(id, story: Story): Promise<void> {
    return this.storiessRef.doc(id).set(story);
  }

  deleteStory(id: string): Promise<void> {
    return this.storiessRef.doc(id).delete();
  }

  getStories() { 
    return this.storiessRef;
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
            story.imageURL = url;
            this.createStorywithImageURL( story );
          }
          console.log(story.imageURL);
        });
      })
    ).subscribe();
  }
}
