import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

import { AngularFireAuth } from "@angular/fire/auth";
import {firebase} from '@firebase/app';

//import 'firebase/auth';	
import '@firebase/auth';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor( 
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
     ) { 
       // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            this.router.navigate(['browse']);
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            console.log("logged out");
            return of(null);
          }
        })
      )
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 

    return userRef.set(data, { merge: true })

  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  //  //Sign in with Google
  //  GoogleAuth() {
  //   return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  // } 

  // AuthLogin(provider) {
  //   return this.afAuth.signInWithPopup(provider)
  //   .then((result) => {
  //       console.log('You have been successfully logged in!')
  //   }).catch((error) => {
  //       console.log(error)
  //   })
  // }
}
