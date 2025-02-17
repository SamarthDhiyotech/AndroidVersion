import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/services/message/messaging.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ContestModel } from 'src/app/models/ContestModel';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  currentMessage = new BehaviorSubject<any>(null);
  contests: ContestModel[];
  notifications: any[] = [];
  username: string | null = null;

  constructor(
    // public r: Router,
    public router: Router,
    public messagingService: MessagingService,
    private firebaseService: FirebaseService,
  ) {  }

  ngOnInit(): void {
    
    const storedUsername = localStorage.getItem("username");   
    if (storedUsername) {
      this.username = storedUsername;
      console.log("Loaded username from storage:", this.username);
      this.loadNotifications(); // Fetch notifications immediately
    } else {
      this.firebaseService.currentUsername$.subscribe((username) => {
        if (username) {
          this.username = username;
          localStorage.setItem("username", username); // Store username
          console.log("Logged-in username:", this.username);
          this.loadNotifications();
        } else {
          console.error("No username available");
        }
      });
    }
  }
  
  
  loadNotifications() {
    if (!this.username) {
      console.warn("No username found, cannot fetch notifications.");
      return;
    }
  
    this.firebaseService.getNotifications(this.username).subscribe(
      (notifications) => {
        if (notifications.length > 0) {
          this.notifications = notifications;
          console.log("Loaded notifications:", this.notifications);
        } else {
          console.warn("No notifications found.");
        }
      },
      (error) => console.error("Error fetching notifications:", error)
    );
  }
  
  
       
    // }
    // public getMessages() {
    //   return this.messagingService.listen();
    // }
    
  // async doRefresh(event) {
    // console.log('refresh', event);
    // this.appService.presentLoading('Refreshing...');
    // this.getData();
    // setTimeout(() => {
    //   this.appService.hideLoading();
    // }, 1000);
  //   event.target.complete();
  // }
    // ionViewDidEnter() {
    //   this.getData();
    // }
  
  //   getData() {
  //     this.notifications = [];
  //     console.log("Starting getData...");
  
  //     this.userService.getNotification().then(res => {
  //       console.log("Raw response from getNotification():", res);
  
  //       res.forEach(docs => {
  //         console.log("Processing docs:", docs);
  
  //         docs.forEach(doc => {
  //           console.log("Processing doc data:", doc.data());
  //           this.notifications.unshift(doc.data());
  //         });
  //       });
  
  //       console.log("Notifications after processing:", this.notifications);
  //     });
  
  //     console.log("testing::::notification", this.notifications);
  // }
  
  doRefresh(event: any) {
    const storedUsername = localStorage.getItem("username"); // Get username from storage
  
    if (!this.username && storedUsername) {
      this.username = storedUsername;
    }
  
    if (this.username) {
      this.firebaseService.getNotifications(this.username).subscribe(
        (notifications) => {
          this.notifications = notifications;
          console.log("Notifications refreshed:", this.notifications);
          event.target.complete();
        },
        (error) => {
          console.error("Error refreshing notifications:", error);
          event.target.complete();
        }
      );
    } else {
      console.warn("No username available, cannot refresh notifications.");
      event.target.complete();
    }
  }
  
  openNotification(notification: any) {
    if (!notification || !notification.category) {
      console.error("Invalid notification data:", notification);
      return;
    }
    console.log(notification.category);
    if (notification.category === "Winner") {
      this.router.navigate(['/winners']);
    } else if (notification.compId) {
      this.router.navigate(['/upload-entry', notification.compId]); 
    } else {
      console.warn("Notification has no compId, but is not a winner:", notification);
    }
  }
  
  

}
