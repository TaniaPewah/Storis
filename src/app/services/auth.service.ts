import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {firebase} from '@firebase/app';
//import 'firebase/auth';	
import '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth ) { }

   //Sign in with Google
   GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  } 

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
}
