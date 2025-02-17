import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login/login.service';
import { UtilService } from './services/util/util.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpErrorInterceptorService } from './intercepters/ErrorInterceptor/http-error-interceptor.service';
import { HttpHeaderInterceptorService } from './intercepters/HeadersInterceptor/http-header-interceptor.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SharedModule } from './pages/shared.module';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { MasterDataService } from './services/master/master-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from './services/message/messaging.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { WindowService } from './services/util/windows.service';
import { PrimaryComponent } from './layouts/primary/primary.component';
import { SecondaryComponent } from './layouts/secondary/secondary.component';
import { FirebaseService } from './services/firebase.service';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [AppComponent,PrimaryComponent,SecondaryComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
        HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    }),
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptorService, multi: true  },
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptorService, multi: true  },
    LoginService,
    UtilService,
    MasterDataService,
    SocialSharing,
    MessagingService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
