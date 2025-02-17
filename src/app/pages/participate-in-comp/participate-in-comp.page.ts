import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UtilService } from 'src/app/services/util/util.service';
import { Router, NavigationEnd } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { MasterDataService } from 'src/app/services/master/master-data.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { ContestModel } from 'src/app/models/ContestModel';
import { EnrollmentsModels } from 'src/app/models/EnrollmentsModels';

@Component({
  selector: 'app-participate-in-comp',
  templateUrl: './participate-in-comp.page.html',
  styleUrls: ['./participate-in-comp.page.scss'],
})
export class ParticipateInCompPage implements OnInit {
  showProgressBar = false;
  userFullName: string;
  contests: ContestModel[];
  enrollments: EnrollmentsModels[] = [];
  firstTimeLoad = true;
  currentContest: ContestModel;
  refreshEvent;
  placeholderImage:any;

  constructor(
    public ls: LoginService,
    public util: UtilService,
    public r: Router,
    private compSrvc: CompetitionService,
    public router: Router,
    private payService: PaymentService,
    public mst: MasterDataService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.reloadComponentData();
      }
    });
  }

  ngOnInit() {
    this.reloadComponentData();
  }

  reloadComponentData() {
    this.showProgressBar = true;
    this.setCompetitionsAndEnrollments();
    this.setUserDetails();
    this.showProgressBar = false;
    this.firstTimeLoad = false;
  }

  setUserDetails() {
    console.log('fname -->', this.ls.getUser().firstName);
    if (!this.ls.getUser().firstName) {
      this.ls.loadUserInfo().then(
        async res => {
          await this.ls.setUser(res).then(res => res);
          this.userFullName = this.ls.getFullName();
        });
      this.userFullName = this.ls.getFullName();
    }
  }

  setCompetitionsAndEnrollments() {
    this.compSrvc
      .getActiveCompetitions()
      .subscribe(
        res => {
          this.contests = res;
          console.log(res);
          this.getAllEnrollments();
        },
        err => {
          console.log('Welcome', err);
          this.markRefreshComplete();
        }
      );
  }

  getAllEnrollments() {
    this.compSrvc
      .getAllEnrolments()
      .subscribe(
        res => {
          this.enrollments = res;
          console.log(res);
          if (res) {
            res.forEach(e => this.updateEnrollmentStatus(e.competitionId));
            this.showProgressBar = false;
            this.markRefreshComplete();
          }
        },
        err => {
          this.util.errorHandler(err);
          this.markRefreshComplete();
        }
      );
  }

  updateEnrollmentStatus(compId: string) {
    this.contests.forEach(c => {
      if (c.competitionId === compId) {
        c.isUserEnrolled = true;
      }
    });
  }

  enroll(comp: ContestModel) {
    if (comp.isSubscriptionRequired === '0') {
      this.compSrvc
        .enrollInComp(comp.competitionId)
        .subscribe(
          res => {
            this.getAllEnrollments();
            this.util.success('You successfully enrolled into the competition. Now upload your singing video.');
          },
          err => this.util.errorHandler(err)
        );
    } else if (comp.isSubscriptionRequired === '1') {
      this.openSubmittedEntryPage(comp.competitionId);
    }
  }

  openSubmittedEntryPage(compId: string) {
    this.router.navigateByUrl(`upload-entry/${compId}`);
  }

  markRefreshComplete() {
    if (this.refreshEvent) {
      this.refreshEvent.target.complete();
    }
  }

  loadData() {
    console.log('Data fetched:');
  }
}
