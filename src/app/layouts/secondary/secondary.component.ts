import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { MenuModel } from 'src/app/models/MenuModel';
import { LoginService } from 'src/app/services/login/login.service';
import { MasterDataService } from 'src/app/services/master/master-data.service';
import { MessagingService } from 'src/app/services/message/messaging.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss'],
})
export class SecondaryComponent implements OnInit {

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
  dashboard(){
    this.r.navigateByUrl('welcome');
  }

  private initTranslationService() {
    let value = localStorage.getItem('language');
    let language = value != null ? value : 'en';
    this.translateService.use(language);
  }

}
