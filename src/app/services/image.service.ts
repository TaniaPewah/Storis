import { Injectable } from '@angular/core';
import { Story } from '../models/Story';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private dbPath = '/images';
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  url:string;
  imagesRef: AngularFirestoreCollection<any> = null;

  constructor( private firestore: AngularFirestore, 
               private storage: AngularFireStorage ) { 
    this.imagesRef = firestore.collection(this.dbPath);
  }

  async getImage( id ){
    const cityRef = this.imagesRef.doc(id);
    let returned = null;
    cityRef.get().subscribe((data: any) => {
      returned = data.exists ? data.data : undefined;
      debugger;
    });
    // let returned = null;
    // if (!doc.exists) {
    //   console.log('No such document!');
    // } else {
    //   console.log('Document data:', doc.data());
    // }
    return returned;
  }

  updateImage(id:string, data:any): Promise<void> {
    return this.imagesRef.doc(id).update(data);
  }

  deleteImage(id: string): Promise<void> {
    return this.imagesRef.doc(id).delete();
  }

  saveImage( image, id ){
    image.storyID = id;
    const n = Date.now();
    const imagePath = `${this.dbPath}/${n}`;
    const fileRef = this.storage.ref( imagePath );
    debugger;
    const task = this.storage.upload( imagePath, image,{ customMetadata: { storyID: id} } );

    // get notified when the download URL is available
    //  task
    //   .snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       this.downloadURL = fileRef.getDownloadURL();
    //       this.downloadURL.subscribe(url => {
    //         if (url) {
    //           this.url = url;
    //         }
    //         console.log("here");
    //         console.log(this.url);
    //       });
    //     })
    //   )
    //   .subscribe(url => {
    //     if (url) {
    //       console.log("here?");
    //       console.log(url);
    //     }
    //   });
    //   debugger;
    return "this.url";
  }
}
