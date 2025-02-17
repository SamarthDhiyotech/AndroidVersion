import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login/login.service';
import { Router } from '@angular/router';
import { MenuModel } from './models/MenuModel';
import { TranslateService } from '@ngx-translate/core';
import { MasterDataService } from './services/master/master-data.service';
import { UtilService } from './services/util/util.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MessagingService } from './services/message/messaging.service';
// import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  // template: `<h1>Firebase Notifications</h1>`,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menus : MenuModel[] = [];
  public selectedIndex = 0;
  imageUrl = "../assets/img/";
  public appPages = [
    {
      title: 'My Profile',
      url: '/profile',
      icon: 'person-circle'
    }
  ];

  public aboutAppPages = [
    {
      title: 'About Shurshree',
      url: '/about-us',
      icon: 'information-circle-outline'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private messagingService: MessagingService,
    private statusBar: StatusBar,
    public ls: LoginService,
    private r: Router,
    public translateService: TranslateService,
    public mstSrvc : MasterDataService,
    public util : UtilService,
    public sharing: SocialSharing,

    
  ) {
    this.initializeApp();
    this.messagingService.requestPermission();
    this.messagingService.listen();
  }

  share() {
    this.sharing
        .share("Hi, I am sharing the Surshree App with you. The app enables you to participate in various competition organized by Surshree. Download link is: <Link Will Be Updated Later>", "Download Surshree App", null, null)
        .catch(() => {
          this.util.presentToast('Sharing not supported. Please use Surshree app to Reffer it to your friends.');
        });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.initTranslationService();
    // this.mstSrvc.initializeMasterData();
  }

  logout(){
    this.ls.logout();
    this.r.navigateByUrl('login');
  }

  private initTranslationService() {
    let value = localStorage.getItem('language');
    let language = value != null ? value : 'en';
    this.translateService.use(language);
  }

}
