import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';

import { NotificationPage } from './notification.page';
import { NotificationPageRoutingModule } from './notification-routing.module';
import { FirebaseService } from 'src/app/services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule,
    SharedModule
  ],
  providers: [FirebaseService],   
  declarations: [NotificationPage]
})
export class NotificationPageModule { }
