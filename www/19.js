(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload-entry/upload-entry.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload-entry/upload-entry.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/participate-in-comp\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title *ngIf=\"competition\" style=\"color: black;\">\n      <!-- {{ competition.title }} -->\n        Participate\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"competition && ls.hasFunction('FUNC_VIEW_ADMIN_MENU') && competition.isWinnerAnnounced != '1'\">\n      <ion-button [routerLink]=\"['/manage-competition-entries', competition.competitionId]\">\n        <ion-icon slot=\"icon-only\" name=\"pencil-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <!-- Modal dialog for video playback -->\n  <p-dialog [(visible)]=\"display\" modal=\"true\" dismissableMask=\"true\">\n    <mat-video \n      src=\"{{ util.getFullUrl('file/') + videoToPlay }}\" \n      [autoplay]=\"true\" \n      [preload]=\"true\" \n      [fullscreen]=\"true\" \n      [download]=\"false\" \n      color=\"accent\" \n      spinner=\"spin\" \n      [overlay]=\"true\" \n      [playsinline]=\"false\" \n      style=\"height: 320px;\">\n    </mat-video>\n  </p-dialog>\n\n  <!-- Competition Details Card -->\n  <div *ngIf=\"competition\">\n    \n    <div class=\"competition-card\">\n      <img \n      src=\"{{ util.getFullUrl('file/') + competition.compPhoto }}\" \n      class=\"background-image\" \n      alt=\"Background Image\"\n      *ngIf=\"competition.compPhoto\" \n    />\n    </div>\n    <div style=\"margin-top: 200px;\"> <!-- Adjust the value as needed -->\n    <ion-card class=\"rounded-card\">\n      <ion-card-header>\n          <ion-card-title>{{ competition.title }}</ion-card-title>\n          <ion-card-subtitle>Category: <b>{{ competition.competitionCategory }}</b></ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item lines=\"none\">\n          <div style=\"display: flex; align-items: center;\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-label class=\"ion-text-right\" style=\"margin-left: 8px;\">\n              <b>{{ competition.minAge }} - {{ competition.maxAge }}</b>\n            </ion-label>\n          </div>\n        </ion-item>\n        \n        <ion-item lines=\"none\">\n          <div style=\"display: flex; align-items: center; width: 100%;\">\n            <ion-icon name=\"cash-outline\"></ion-icon> \n            <!-- <ion-label>Enrollment Fee</ion-label> -->\n            <ion-label class=\"ion-text-right\" style=\"margin-left: 8px;\">\n              <b>{{ competition.subscriptionPrice != null ? 'INR ' + competition.subscriptionPrice : 'Free' }}</b>\n            </ion-label>\n          </div>\n        </ion-item>\n        \n        <ion-item lines=\"none\">\n          <div style=\"display: flex; align-items: center; width: 100%;\">\n            <ion-icon name=\"calendar-outline\"></ion-icon>\n            <ion-label class=\"ion-text-right\" style=\"margin-left: 8px;\">\n              <b>{{competition.startTime }} - {{ competition.endTime }}</b>\n            </ion-label>\n          </div>\n        </ion-item>\n        \n          <div class=\"ion-text-center\" *ngIf=\"competition.isUserEnrolled != true && !ls.hasFunction('FUNC_VIEW_ADMIN_MENU')\">\n              <ion-button color=\"warning\" fill=\"solid\" (click)=\"enroll(competition)\">\n                  <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n                  Enroll\n              </ion-button>\n          </div>\n          <div *ngIf=\"competition.isUserEnrolled && !isEntrySubmitted(competition.competitionId)\">\n            <app-multi-file-upload \n              msg=\"Upload Entry\" \n              id=\"uploadEntry\" \n              [(ngModel)]=\"fileId\" \n              format=\"mp3, mp4\">\n            </app-multi-file-upload>\n            <div class=\"ion-text-center\">\n              <ion-button color=\"primary\" *ngIf=\"fileId\" (click)=\"uploadEntry()\">\n                <ion-icon slot=\"start\" name=\"cloud-upload-outline\"></ion-icon>\n                Upload\n              </ion-button>\n            </div>\n          </div>\n      </ion-card-content>\n  </ion-card>\n  \n    </div>\n\n    <!-- Video upload and playback sections -->\n    \n\n    <div *ngIf=\"competition.isUserEnrolled && isEntrySubmitted(competition.competitionId)\">\n      <ion-card-header>\n        <div>\n          <p class=\"enrollment-status\">Enrollment Status: <span class=\"enrolled\">Enrolled</span></p>  \n        </div>\n        <!-- <div>\n\n        <ion-card-title>Enrollment Status</ion-card-title>\n        <ion-card-subtitle color=\"success\">Enrolled</ion-card-subtitle>\n      </div> -->\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"video-container\" style=\"overflow: hidden; border-radius: 30px;\">\n          <mat-video \n            src=\"{{ util.getFullUrl('file/') + getFileId(competition.competitionId) }}\" \n            [autoplay]=\"false\" \n            [preload]=\"'auto'\" \n            [fullscreen]=\"true\" \n            [download]=\"false\" \n            color=\"accent\" \n            spinner=\"spin\" \n            [overlay]=\"true\" \n            [playsinline]=\"true\" \n            style=\"width: 100%; border-radius: 10px;\">\n          </mat-video>\n        </div>\n      </ion-card-content>\n      \n    </div>\n\n    <!-- Admin Segment Control for managing competition entries -->\n    <div *ngIf=\"ls.hasFunction('FUNC_VIEW_ADMIN_MENU') && competition && competition.isWinnerAnnounced != '1'\">\n      <ion-toolbar color=\"light\">\n        <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"all\">\n            All Entries\n          </ion-segment-button>\n          <ion-segment-button value=\"pending\">\n            Pending\n          </ion-segment-button>\n          <ion-segment-button value=\"approved\">\n            Approved\n          </ion-segment-button>\n          <ion-segment-button value=\"rejected\">\n            Rejected\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n      <br/>\n\n      <!-- Displaying filtered entries based on the selected segment -->\n      <ion-card *ngFor=\"let entry of filteredEntries\">\n        <ion-card-header>\n          <ion-card-title>{{ entry.entryTitle }}</ion-card-title>\n          <ion-card-subtitle>Submitted by: {{ entry.participantName }}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          {{ entry.description }}\n        </ion-card-content>\n\n        <mat-video \n          src=\"{{ util.getFullUrl('file/') + entry.fileId }}\" \n          [autoplay]=\"false\" \n          [preload]=\"true\" \n          [fullscreen]=\"true\" \n          [download]=\"false\" \n          color=\"accent\" \n          spinner=\"spin\" \n          [overlay]=\"true\" \n          [playsinline]=\"true\" \n          style=\"width: 100%;\">\n        </mat-video>\n\n        <div class=\"ion-text-center\">\n          <ion-button color=\"success\" (click)=\"approveEntry(entry.entryId)\">\n            <ion-icon slot=\"start\" name=\"checkmark-done-outline\"></ion-icon>\n            Approve\n          </ion-button>\n          <ion-button color=\"danger\" (click)=\"rejectEntry(entry.entryId)\">\n            <ion-icon slot=\"start\" name=\"close-outline\"></ion-icon>\n            Reject\n          </ion-button>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/upload-entry/upload-entry-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/upload-entry/upload-entry-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UploadEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEntryPageRoutingModule", function() { return UploadEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-entry.page */ "./src/app/pages/upload-entry/upload-entry.page.ts");




var routes = [
    {
        path: '',
        component: _upload_entry_page__WEBPACK_IMPORTED_MODULE_3__["UploadEntryPage"]
    }
];
var UploadEntryPageRoutingModule = /** @class */ (function () {
    function UploadEntryPageRoutingModule() {
    }
    UploadEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UploadEntryPageRoutingModule);
    return UploadEntryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/upload-entry/upload-entry.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/upload-entry/upload-entry.module.ts ***!
  \***********************************************************/
/*! exports provided: UploadEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEntryPageModule", function() { return UploadEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _upload_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-entry-routing.module */ "./src/app/pages/upload-entry/upload-entry-routing.module.ts");
/* harmony import */ var _upload_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-entry.page */ "./src/app/pages/upload-entry/upload-entry.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material.module */ "./src/app/pages/material.module.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");










var UploadEntryPageModule = /** @class */ (function () {
    function UploadEntryPageModule() {
    }
    UploadEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _upload_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadEntryPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"]
            ],
            declarations: [_upload_entry_page__WEBPACK_IMPORTED_MODULE_6__["UploadEntryPage"]]
        })
    ], UploadEntryPageModule);
    return UploadEntryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/upload-entry/upload-entry.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/upload-entry/upload-entry.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".competition-card {\n  position: relative;\n  margin-top: 16px;\n}\n\n.background-image {\n  background-image: url(\"/assets/path-to-your-image.png\");\n  /* Update path */\n  background-size: cover;\n  background-position: center;\n  height: 300px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -200px;\n}\n\n.card-content {\n  position: relative;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 15px;\n  backdrop-filter: blur(10px);\n  margin-top: 200px;\n}\n\n.enrollment-status {\n  font-size: 14px;\n  margin-top: 8px;\n}\n\n.enrolled {\n  color: #ff4500;\n  font-weight: bold;\n}\n\n.video-container {\n  overflow: hidden;\n  border-radius: 10px;\n  /* Adjust as needed */\n}\n\n.rounded-card {\n  border-radius: 25px;\n  /* Adjust the value as needed */\n  overflow: hidden;\n  margin-top: 100px;\n}\n\nion-card-content {\n  padding: 16px;\n  /* Adjust the padding as needed */\n  margin-top: -33px;\n  /* This can also be added */\n}\n\n.custom-signin-button {\n  background-color: #ff512c !important;\n  /* Set your desired background color */\n  color: white !important;\n  /* Set text color */\n  border: 2px solid #ff512c !important;\n  /* Set border color */\n  border-radius: 40px !important;\n  /* Ensure the button retains the round shape */\n}\n\nion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: black !important;\n  /* Ensures text appears in black */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkLWVudHJ5L0Q6XFxEaGl5b1RlY2hQVlRMVERcXFN1cnNocmVlXFx1cGRhdGVkIHN1cnNocmVlXFxTdXJzaHJlZVdlYlZlcnNpb25cXFN1cnNocmVlV2ViVmVyc2lvbi9zcmNcXGFwcFxccGFnZXNcXHVwbG9hZC1lbnRyeVxcdXBsb2FkLWVudHJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXBsb2FkLWVudHJ5L3VwbG9hZC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx1REFBQTtFQUF5RCxnQkFBQTtFQUN6RCxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFJQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRko7O0FES0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFBcUIscUJBQUE7QUNEekI7O0FESUE7RUFDRSxtQkFBQTtFQUFxQiwrQkFBQTtFQUNyQixnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQWUsaUNBQUE7RUFDZixpQkFBQTtFQUFtQiwyQkFBQTtBQ0VyQjs7QURDQTtFQUNDLG9DQUFBO0VBQXNDLHNDQUFBO0VBQ3RDLHVCQUFBO0VBQXlCLG1CQUFBO0VBQ3pCLG9DQUFBO0VBQXNDLHFCQUFBO0VBQ3RDLDhCQUFBO0VBQWdDLDhDQUFBO0FDTWpDOztBREhFO0VBQ0UsOEJBQUE7RUFBZ0Msd0NBQUE7RUFDaEMsa0NBQUE7RUFBb0Msb0RBQUE7RUFDcEMsa0NBQUE7RUFBb0Msa0NBQUE7QUNTeEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGxvYWQtZW50cnkvdXBsb2FkLWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICBcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wYXRoLXRvLXlvdXItaW1hZ2UucG5nJyk7IC8qIFVwZGF0ZSBwYXRoICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8vIG9wYWNpdHk6IDAuNztcbiAgICAvLyBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IC0yMDBweDtcblxuICB9XG4gIFxuICAuY2FyZC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICB9XG4gIFxuICAuZW5yb2xsbWVudC1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5lbnJvbGxlZCB7XG4gICAgY29sb3I6ICNmZjQ1MDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC52aWRlby1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xufVxuXG4ucm91bmRlZC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMTAwcHggO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDsgLyogQWRqdXN0IHRoZSBwYWRkaW5nIGFzIG5lZWRlZCAqL1xuICBtYXJnaW4tdG9wOiAtMzNweDsgLyogVGhpcyBjYW4gYWxzbyBiZSBhZGRlZCAqL1xufVxuXG4uY3VzdG9tLXNpZ25pbi1idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MTJjICFpbXBvcnRhbnQ7IC8qIFNldCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgLyogU2V0IHRleHQgY29sb3IgKi9cblx0Ym9yZGVyOiAycHggc29saWQgI2ZmNTEyYyAhaW1wb3J0YW50OyAvKiBTZXQgYm9yZGVyIGNvbG9yICovXG5cdGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDsgLyogRW5zdXJlIHRoZSBidXR0b24gcmV0YWlucyB0aGUgcm91bmQgc2hhcGUgKi9cbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDsgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgICAtLWlvbi1jb2xvci1iYXNlOiBibGFjayAhaW1wb3J0YW50OyAvKiBTZXRzIHRoZSBiYXNlIGNvbG9yIHRvIGJsYWNrIGZvciBpY29ucyBhbmQgdGV4dCAqL1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG4gIH1cbiAgIiwiLmNvbXBldGl0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9wYXRoLXRvLXlvdXItaW1hZ2UucG5nXCIpO1xuICAvKiBVcGRhdGUgcGF0aCAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogLTIwMHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4uZW5yb2xsbWVudC1zdGF0dXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmVucm9sbGVkIHtcbiAgY29sb3I6ICNmZjQ1MDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udmlkZW8tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xufVxuXG4ucm91bmRlZC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBBZGp1c3QgdGhlIHBhZGRpbmcgYXMgbmVlZGVkICovXG4gIG1hcmdpbi10b3A6IC0zM3B4O1xuICAvKiBUaGlzIGNhbiBhbHNvIGJlIGFkZGVkICovXG59XG5cbi5jdXN0b20tc2lnbmluLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjUxMmMgIWltcG9ydGFudDtcbiAgLyogU2V0IHlvdXIgZGVzaXJlZCBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAvKiBTZXQgdGV4dCBjb2xvciAqL1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmY1MTJjICFpbXBvcnRhbnQ7XG4gIC8qIFNldCBib3JkZXIgY29sb3IgKi9cbiAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuICAvKiBFbnN1cmUgdGhlIGJ1dHRvbiByZXRhaW5zIHRoZSByb3VuZCBzaGFwZSAqL1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgLS1pb24tY29sb3ItYmFzZTogYmxhY2sgIWltcG9ydGFudDtcbiAgLyogU2V0cyB0aGUgYmFzZSBjb2xvciB0byBibGFjayBmb3IgaWNvbnMgYW5kIHRleHQgKi9cbiAgLS1pb24tdGV4dC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/upload-entry/upload-entry.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/upload-entry/upload-entry.page.ts ***!
  \*********************************************************/
/*! exports provided: UploadEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEntryPage", function() { return UploadEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/competition/competition.service */ "./src/app/services/competition/competition.service.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_GlobalConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/GlobalConstants */ "./src/app/models/GlobalConstants.ts");
/* harmony import */ var src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/master/master-data.service */ "./src/app/services/master/master-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");









var UploadEntryPage = /** @class */ (function () {
    function UploadEntryPage(compSrvs, util, activatedRoute, platform, zone, mst, popup, ls, alertController) {
        //this.setupPayment();
        this.compSrvs = compSrvs;
        this.util = util;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.zone = zone;
        this.mst = mst;
        this.popup = popup;
        this.ls = ls;
        this.alertController = alertController;
        this.display = false;
        this.videoToPlay = null;
        this.winnerList = [];
        this.opt = "all";
        this.items = [];
        this.enrollments = [];
        this.entries = [];
        this.isSearchInProgress = false;
        this.showError = false;
        this.isShortlistingInProgress = false;
        this.selectedSegment = 'all';
        this.filteredEntries = []; // Adjust the type as needed
    }
    UploadEntryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.compId = params['compId'];
            _this.compSrvs
                .getCompetitionDetails(_this.compId)
                .subscribe(function (res) {
                _this.competition = res;
                _this.getAllEnrollments();
                if (_this.ls.hasFunction('FUNC_VIEW_ADMIN_MENU') && _this.competition && _this.competition.isWinnerAnnounced != '1') {
                    _this.getAllEntries(_this.competition.competitionId);
                }
            }, function (err) { return _this.util.errorHandler(err); });
        });
    };
    UploadEntryPage.prototype.updateEnrollmentStatus = function (enrollment) {
        if (this.competition.competitionId == enrollment.competitionId) {
            this.competition.isUserEnrolled = true;
            this.submittedEntryId = enrollment.submittedEntryId;
        }
    };
    UploadEntryPage.prototype.getAllEnrollments = function () {
        var _this = this;
        this.compSrvs
            .getAllEnrolments()
            .subscribe(function (res) {
            _this.enrollments = res;
            if (res) {
                res.forEach(function (e) { return _this.updateEnrollmentStatus(e); });
            }
        }, function (err) { return _this.util.errorHandler(err); });
    };
    UploadEntryPage.prototype.enroll = function (comp) {
        var _this = this;
        console.log("datacomp:::" + comp);
        if (comp.isSubscriptionRequired == '0') {
            this.compSrvs
                .enrollInComp(comp.competitionId)
                .subscribe(function (res) {
                _this.getAllEnrollments();
                _this.util.success('You successfully enrolled into the competition. Now upload your singing video.');
            }, function (err) { return _this.util.errorHandler(err); });
        }
        else if (comp.isSubscriptionRequired == '1') {
            this.createSubscriptionOrder(comp);
        }
    };
    UploadEntryPage.prototype.isEntrySubmitted = function (compId) {
        var enrolments = this.enrollments.filter(function (e) { return e.competitionId == compId; });
        if (enrolments != undefined && enrolments.length > 0) {
            var er = enrolments[0];
            if (er.fileUploaded && er.fileId != null) {
                return true;
            }
        }
        return false;
    };
    UploadEntryPage.prototype.getFileId = function (compId) {
        console.log("File id:: entered");
        var enrolment = this.enrollments.find(function (e) { return e.competitionId === compId; });
        if (enrolment) {
            console.log("File id : 1st::if");
            if (enrolment.fileUploaded && enrolment.fileId) {
                console.log("File id : 2nd::if");
                console.log("File id : 1st::if " + enrolment.fileId);
                return enrolment.fileId;
            }
        }
        return '';
    };
    UploadEntryPage.prototype.uploadEntry = function () {
        var _this = this;
        if (this.fileId) {
            this.compSrvs
                .attachFileToEnrolledCompetition(this.submittedEntryId, this.fileId)
                .subscribe(function (res) {
                _this.util.success('Your entry has been uploaded successfully.');
                _this.getAllEnrollments();
                _this.fileId = null;
            }, function (err) { return _this.util.errorHandler(err); });
        }
    };
    // Define the methods
    UploadEntryPage.prototype.approveEntry = function (entry) {
        // Method implementation
    };
    UploadEntryPage.prototype.rejectEntry = function (entry) {
        // Method implementation
    };
    UploadEntryPage.prototype.segmentChanged = function (event) {
        this.selectedSegment = event.detail.value;
        // Implement logic to filter entries based on the selected segment
        this.filterEntries();
    };
    UploadEntryPage.prototype.filterEntries = function () {
        // Implement the logic to filter entries based on selectedSegment
        // This example assumes you have a list of all entries and filter based on `selectedSegment`
        // Update filteredEntries based on selectedSegment
    };
    UploadEntryPage.prototype.getAllEntries = function (compId) {
        var _this = this;
        this.winnerList = [];
        this.showError = false;
        this.entries = [];
        this.isSearchInProgress = true;
        this.compSrvs
            .getAllSubmittedEntries(compId)
            .subscribe(function (res) {
            _this.entries = res;
            _this.isSearchInProgress = false;
        }, function (err) {
            _this.isSearchInProgress = false;
            _this.showError = true;
        });
    };
    UploadEntryPage.prototype.getShortlistedEntries = function (compId) {
        var _this = this;
        this.winnerList = [];
        this.showError = false;
        this.entries = [];
        this.isSearchInProgress = true;
        this.compSrvs
            .getShortlistedEntries(compId)
            .subscribe(function (res) {
            _this.entries = res;
            _this.isSearchInProgress = false;
        }, function (err) {
            _this.isSearchInProgress = false;
            _this.showError = true;
        });
    };
    UploadEntryPage.prototype.getWinners = function (compId) {
        var _this = this;
        this.winnerList = [];
        this.showError = false;
        this.entries = [];
        this.isSearchInProgress = true;
        this.compSrvs
            .getCompetitionWinners(compId)
            .subscribe(function (res) {
            _this.entries = res[0].winners;
            _this.isSearchInProgress = false;
        }, function (err) {
            _this.isSearchInProgress = false;
            _this.showError = true;
        });
    };
    UploadEntryPage.prototype.markShortlisted = function (submittedEntryId, item) {
        var _this = this;
        this.isShortlistingInProgress = true;
        this.compSrvs
            .markShortlisted(submittedEntryId)
            .subscribe(function (res) {
            _this.isShortlistingInProgress = false;
            _this.markEntryShortlisted(submittedEntryId);
            item.close();
        }, function (err) {
            _this.util.errorMsg('Error occurred while processing your request. Please try again later.');
            _this.isShortlistingInProgress = false;
        });
    };
    UploadEntryPage.prototype.markEntryShortlisted = function (submittedEntryId) {
        var entry = this.entries.filter(function (e) { return e.submittedEntriesId + '' == submittedEntryId + ''; })[0];
        entry.isShortlisted = '1';
    };
    UploadEntryPage.prototype.createSubscriptionOrder = function (comp) {
        var _this = this;
        this.util.showLoader();
        this.compSrvs
            .createSubscriptionOrder(comp)
            .subscribe(function (res) {
            _this.payWithRazorpay(comp, res['orderId']);
            _this.util.hideLoader();
        }, function (err) {
            //this.util.errorMsg('Error occurred while processing your request. PLease try again later.');
            _this.util.errorHandler(err);
            _this.util.hideLoader();
        });
    };
    UploadEntryPage.prototype.payWithRazorpay = function (comp, orderId) {
        var _this = this;
        var options = {
            description: "Payment For : " + comp.competitionId + ". Order Id: " + orderId,
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: "INR",
            key: src_app_models_GlobalConstants__WEBPACK_IMPORTED_MODULE_5__["GlobalConstants"].razorPkey,
            amount: (parseFloat(comp.subscriptionPrice)),
            name: 'Razorpay',
            order_id: orderId,
            prefill: {
                contact: this.ls.getUser().username,
                name: this.ls.getFullName()
            },
            theme: {
                color: '#3880ff'
            },
            modal: {
                ondismiss: function () {
                    _this.util.success('Subscription payment has been Cancelled.');
                    _this.compSrvs
                        .processPaymentError(orderId, 'user.cancelled', 'User cancelled the payment')
                        .subscribe(function (res) {
                        console.log('error logged successfully');
                    }, function (err) { return _this.util.errorHandler(err); });
                }
            },
            handler: function (response) {
                _this.zone.run(function () {
                    _this.compSrvs
                        .processPayment(orderId, response.payment_id)
                        .subscribe(function (res) {
                        _this.util.success('Thank You! We have successfully received your Payment.');
                        _this.getAllEnrollments();
                    }, function (err) { return _this.util.errorHandler(err); });
                });
            }
        };
        var successCallback = function (payment_id) {
            _this.zone.run(function () {
                _this.compSrvs
                    .processPayment(orderId, payment_id)
                    .subscribe(function (res) {
                    _this.util.success('Thank You! We have successfully received your Payment.');
                    _this.getAllEnrollments();
                }, function (err) { return _this.util.errorHandler(err); });
            });
        };
        var cancelCallback = function (error) {
            _this.util.errorMsg('Error occured while processing your payment. PLease try again after some time.');
            console.log('error in payment --> ', error, error.description + ' (Error ' + error.code + ')');
            _this.compSrvs
                .processPaymentError(orderId, error.code, error.description)
                .subscribe(function (res) {
                console.log('error logged successfully');
            }, function (err) { return _this.util.errorHandler(err); });
        };
        if (this.platform.is('cordova')) {
            RazorpayCheckout.open(options, successCallback, cancelCallback);
        }
        else {
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', cancelCallback);
            rzp1.on('payment.success', successCallback);
            rzp1.open();
        }
    };
    UploadEntryPage.prototype.viewVideo = function (event, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.videoToPlay = id;
                this.display = true;
                return [2 /*return*/];
            });
        });
    };
    UploadEntryPage.prototype.expandItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.entries.map(function (f) {
                if (item == f) {
                    f.expanded = !f.expanded;
                }
                else {
                    f.expanded = false;
                }
                return f;
            });
        }
    };
    UploadEntryPage.prototype.setPosition = function (event, entry) {
        entry.winningPosition = event.target.value;
        entry.winnerDesc = entry.winningPosition;
    };
    UploadEntryPage.prototype.setDesc = function (event, entry) {
        entry.winnerDesc = event.target.value;
    };
    UploadEntryPage.prototype.setAmount = function (event, entry) {
        entry.priceWon = event.target.value;
    };
    UploadEntryPage.prototype.saveWinner = function (entry) {
        if (!entry.winningPosition) {
            this.util.errorMsg('Select Winning Position before marking Winner!');
            return;
        }
        else if (entry.winningPosition == 'O' && (entry.winnerDesc == 'O' || entry.winnerDesc.trim() == '')) {
            this.util.errorMsg('Enter Winning Position before marking Winner!');
            return;
        }
        entry.winnerMarked = true;
        this.winnerList.push(entry);
    };
    UploadEntryPage.prototype.getPositionDescription = function (entry) {
        if (entry.winnerDesc == '1') {
            return 'First Position';
        }
        else if (entry.winnerDesc == '2') {
            return 'Second Position';
        }
        else if (entry.winnerDesc == '3') {
            return 'Third Position';
        }
        else {
            return entry.winnerDesc;
        }
    };
    UploadEntryPage.prototype.announceWinner = function () {
        var _this = this;
        if (this.winnerList.length < 1) {
            this.util.errorMsg('Please select winners');
            return;
        }
        else {
            this.compSrvs
                .markWinners(this.winnerList)
                .subscribe(function (res) {
                _this.util.success('Winners declared successfully.');
                _this.winnerList = [];
                _this.entries = [];
                _this.competition.isWinnerAnnounced = '1';
            }, function (err) {
                _this.util.errorHandler(err);
            });
        }
    };
    UploadEntryPage.prototype.confirmWinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to announce the winner???',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        ///cancle
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.announceWinner();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadEntryPage.ctorParameters = function () { return [
        { type: src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_2__["CompetitionService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
        { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
    ]; };
    UploadEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-entry',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-entry.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload-entry/upload-entry.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-entry.page.scss */ "./src/app/pages/upload-entry/upload-entry.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_2__["CompetitionService"], src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"],
            src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], UploadEntryPage);
    return UploadEntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=19.js.map