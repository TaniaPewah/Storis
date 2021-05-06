import { Injectable } from '@angular/core';
import { Story } from '../models/Story';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private dbPath = '/images';
  imagesRef: AngularFirestoreCollection<any> = null;

  constructor( private firestore: AngularFirestore ) { 
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

    this.imagesRef.doc(id).set(Object.assign({}, image));
   
  }
}
