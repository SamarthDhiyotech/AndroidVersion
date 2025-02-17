import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    private usernameSubject = new BehaviorSubject<string | null>(null);
  currentUsername$ = this.usernameSubject.asObservable();
  constructor(
    private firestore: AngularFirestore, 
    private afMessaging: AngularFireMessaging,
    private router: Router,

) {}

  requestPermission(username: string) {
    this.usernameSubject.next(username);
    this.afMessaging.requestToken.pipe(take(1)).subscribe(
      (token) => {
        console.log("FCM Token:", token);
        this.saveToken(username, token);
      },
      (error) => {
        console.error("Error getting FCM token:", error);
      }
    );
  }

  saveToken(username: string, token: string) {
    if (!token) return;

    this.firestore.collection('user_tokens').doc(username).set({ 
      token: token, 
      username: username 
    })
    .then(() => console.log("FCM Token stored in Firestore"))
    .catch(error => console.error("Error saving token:", error));
  }

  getNotifications(username: string) {
    return this.firestore
      .collection(`user_tokens/${username}/notifications`)
      .valueChanges(); 
  }
  
}
