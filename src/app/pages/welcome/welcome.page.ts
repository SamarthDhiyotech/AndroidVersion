import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UtilService } from 'src/app/services/util/util.service';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { MasterDataService } from 'src/app/services/master/master-data.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  currentAddress: string = 'Fetching your location...';

  constructor(
    public ls: LoginService,
    public util: UtilService,
    public r: Router,
    private compSrvc: CompetitionService,
    private sharing: SocialSharing,
    private mst: MasterDataService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.getAddressFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location', error);
          this.currentAddress = 'Unable to fetch location. Please try again.';
        },
        {
          enableHighAccuracy: true, 
          timeout: 5000,
          maximumAge: 0, 
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      this.currentAddress = 'Geolocation is not supported by your browser.';
    }
  }

  getAddressFromCoordinates(lat: number, lng: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.address) {
          const { road, suburb, city, state, postcode, country } = data.address;
          this.currentAddress = `${city || ''}, ${state || ''} ${postcode || ''}, ${country || ''}`
            .replace(/(,\s){2,}/g, ', ')
            .trim();
        } else {
          this.currentAddress = 'Address not found for the location.';
        }
      })
      .catch((error) => {
        console.error('Error fetching address', error);
        this.currentAddress = 'Unable to fetch address details.';
      });
  }

  navigateToNotifications() {
    this.r.navigateByUrl('notification');
  }
  participateInCompetition() {
    this.r.navigateByUrl('participate-in-comp');
  }
  learnMusic() {
    this.r.navigateByUrl('learn-music');
  }
  viewWinners() {
    this.r.navigateByUrl('winners');
  }
  ManageCompetition() {
    this.r.navigateByUrl('manage-competitions');
  }


  comingSoon(){
    this.util.presentToast('World of Music Coming Soon...');
  }

  share() {
    this.sharing
        .share("Hi, I am sharing the Surshree App with you. The app enables you to participate in various competition organized by Surshree. Download link is: <Link Will Be Updated Later>", "Download Surshree App", null, null)
        .catch(() => {
          this.util.presentToast('Sharing not supported. Please use Surshree app to Reffer it to your friends.');
        });
  }
  openMenu() {
    this.menuCtrl.enable(true, 'main-menu');  // Enable the menu if it's disabled
    this.menuCtrl.open('main-content'); // Open specific menu
  }
}
