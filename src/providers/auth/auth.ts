import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { environment } from '../../environments/environment';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public userProfile: any;

  constructor(public googlePlus: GooglePlus) {
    
    firebase.initializeApp(environment.firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userProfile = user;
      } else {
        this.userProfile = null;
      }
    });
  }

  googleLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.googlePlus.login({
        'webClientId': '739673900424-jr62bnsmvk0kgnqef1t0hq0oq7fsfc7u.apps.googleusercontent.com',
        'offline': true
      }).then(
        res => {
          const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);

          firebase.auth().signInWithCredential(googleCredential).then(response => {
            console.log("Firebase success: " + JSON.stringify(response));
            resolve(response)
          });
        }, 
        err => {
          console.error("Error: ", err)
          reject(err);
        });
    });
  }

}
