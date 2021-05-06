import { Injectable } from '@angular/core';
import { Story } from '../models/Story';
import { Observable } from 'rxjs';
import { ImageService } from '../services/image.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private dbPath = '/stories';
  storiessRef: AngularFirestoreCollection<Story> = null;

  constructor( private firestore: AngularFirestore , private ImageService: ImageService) { 
    this.storiessRef = firestore.collection(this.dbPath);
  }

  createStory(story: Story): any {
    return this.storiessRef.add({ ...story });
  }

  updateStory(id:string, data:any): Promise<void> {
    return this.storiessRef.doc(id).update(data);
  }

  deleteStory(id: string): Promise<void> {
    return this.storiessRef.doc(id).delete();
  }

  getStories() { 
    return this.storiessRef;
  }

  uploadImage(image, id){
    this.ImageService.saveImage(image, id);
  }

}
