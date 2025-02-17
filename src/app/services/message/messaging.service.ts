import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface FCMMessage {
  notification: {
    title: string;
    body: string;
    topic: string; // Optional property
  };
  data?: Record<string, any>; // Optional property for custom data
}
@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  currentMessage = new BehaviorSubject<any>(null);

  private isListening = false;


  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private http: HttpClient

  ) {
   

    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        if (token) {
          console.log('FCM Token:', token);
         // this.sendTokenToBackend(token);
        }
      },
      (error) => {
        console.error('Unable to get FCM token:', error);
      }
    );

    this.listen();
  }
  // private sendTokenToBackend(token: string) {
  //   console.log('Send this token to your backend:', token);
  //   const payload = { token: token };
  //   console.log('Sending token to backend:', payload);
  //   return this.http.post(`https://bknd.surshree.com/api/notifications/store-token`, payload).subscribe(
  //     response => console.log("Token stored successfully:", response),
  //     error => console.error("Error storing token:", error)
  //   );
  // }
  

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log('Notification permission granted. Token:', token);
      },
      (error) => {
        console.error('Unable to get permission to notify.', error);
      }
    );
  }

  // private subscribeToTopic(token: string, topic: string) {
  //   const serverKey = 'AAAAWEtGUfQ:APA91bHWc41K2RWWShIg4hZVM6NaFigOnCvFWqKOs5Zt2BxN76Fo4bkrb4FjYB-1eZJ7uQKaLj3DdDAtkXHPADvwHiWW1BZZv4plmvfywWlu2QoMqH-nSYEKDbQgQSAkk9ahvMb1ce4F'; 
  //   const url = `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`;

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `key=${serverKey}`,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log(`Successfully subscribed to topic: ${topic}`);
  //       } else {
  //         console.error(
  //           `Failed to subscribe to topic. Status: ${response.status}, Message: ${response.statusText}`
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error subscribing to topic:', error);
  //     });
  // }

  
  listen() {
    if (this.isListening) return;
    this.isListening = true;

    this.angularFireMessaging.messages.subscribe(
      (message) => {
        console.log('Message received:', message);
        this.currentMessage.next(message);  // This will emit the message to subscribers
      },
      (error) => {
        console.error('Error listening for messages:', error);
      }
    );
  }
  
  

  
  
}
