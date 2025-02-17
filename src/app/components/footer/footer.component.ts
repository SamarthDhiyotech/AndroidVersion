import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isHomePage: boolean = false;
  isProfilePage: boolean = false;
  isCompetitionPage: boolean = false;

  constructor(public util: UtilService, public ls: LoginService, public r: Router) { }

  ngOnInit() {
    this.updateActivePage(); // Update the active page when the component initializes

    // Subscribe to router events to update active page on navigation
    this.r.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filter only NavigationEnd events
    ).subscribe(() => {
      this.updateActivePage();
    });
  }

  openHomePage() {
    if (this.ls.getUser()) {
      this.r.navigateByUrl('/welcome');
    } else {
      this.r.navigateByUrl('/login');
    }
  }

  openDonationPage() {
    this.r.navigateByUrl('/donation');
  }

  openProfilePage() {   
    this.r.navigateByUrl('/profile');
  }
  openConpetition() {
    this.r.navigateByUrl('/participate-in-comp');
  }

  openSignupPage() {
    this.r.navigateByUrl('/signup');
  }

  updateActivePage() {
    const currentUrl = this.r.url; 
    this.isHomePage = currentUrl === '/welcome'; 
    this.isProfilePage = currentUrl === '/profile'; 
     this.isCompetitionPage = currentUrl === '/participate-in-comp'; 
  }
}
