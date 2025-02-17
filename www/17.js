(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/welcome\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title style=\"color: #000;\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content>\n  <form [formGroup]=\"userDetailsForm\">\n    <div class=\"card\">\n      <div class=\"header\">\n        <div class=\"avatar\">\n        <ion-avatar>\n          <ion-img src=\"../../../assets/img/male.jpg\" *ngIf=\"!profilePhoto.value && gender.value == 'M'\"></ion-img>\n          <ion-img src=\"../../../assets/img/female.jpg\" *ngIf=\"!profilePhoto.value && gender.value == 'F'\"></ion-img>\n          <ion-img [src]=\"util.getFullUrl('file/') + profilePhoto.value\" *ngIf=\"profilePhoto.value\"></ion-img>\n          </ion-avatar>\n        </div>\n        <div class=\"ion-text-center\" style=\"padding-top: 60px; padding-left: 120px;\" >\n          <app-multi-file-upload id=\"profilePhoto\" icon=\"true\" [formControl]=\"profilePhoto\"></app-multi-file-upload>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"user-meta ion-text-center\">\n          <h3 class=\"playername\">{{fname.value}} {{lname.value}}</h3>\n          <h5 class=\"country\">India</h5>\n        </div>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item >\n              <ion-label position=\"floating\">First Name </ion-label>\n              <ion-input type=\"text\"  maxlength=\"30\" [formControl]=\"fname\"></ion-input>\n            </ion-item>\n            <app-error [condition]=\"fname.touched && fname.invalid\" msg=\"Please enter first name.\"></app-error>\n          </ion-col>\n          <ion-col>\n            <ion-item >\n              <ion-label position=\"floating\">Middle Name</ion-label>\n              <ion-input type=\"text\"  maxlength=\"30\" [formControl]=\"mname\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Last Name </ion-label>\n              <ion-input type=\"text\"  maxlength=\"30\" [formControl]=\"lname\"></ion-input>\n            </ion-item>\n            <app-error [condition]=\"lname.touched && lname.invalid\" msg=\"Please enter last name.\"></app-error>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Gender</ion-label>\n              <ion-select placeholder=\"--Select Gender--\" [formControl]=\"gender\">\n                <ion-select-option value=\"F\">Female</ion-select-option>\n                <ion-select-option value=\"M\">Male</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <app-error [condition]=\"gender.touched && gender.invalid\" msg=\"Please select gender.\"></app-error>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Date Of Birth </ion-label>\n              <ion-datetime type=\"date\" displayFormat=\"MM/DD/YYYY\" [formControl]=\"dob\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Country</ion-label>\n              <ion-select placeholder=\"--Select Country--\" [formControl]=\"country\">\n                <ion-select-option value=\"IN\" selected=\"true\">India</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <app-error [condition]=\"country.touched && country.invalid\" msg=\"Please select country.\"></app-error>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">State</ion-label>\n              <ion-select placeholder=\"--Select State--\" [formControl]=\"state\">\n                <ion-select-option *ngFor=\"let state of states\" value=\"{{state.key}}\">{{state.desc}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <app-error [condition]=\"state.touched && state.invalid\" msg=\"Please select state.\"></app-error>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Enter City</ion-label>\n              <ion-input type=\"text\" [formControl]=\"city\" maxlength=\"40\"></ion-input>\n            </ion-item>\n            <app-error [condition]=\"city.touched && city.invalid\" msg=\"Please enter city.\"></app-error>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"ion-padding ion-justify-content-center\">\n        <ion-button shape=\"round\" type=\"submit\" [disabled]=\"userDetailsForm.invalid\" expand=\"block\" (click)=\"updateUser()\">\n          <ion-icon name=\"arrow-up-circle-outline\"></ion-icon>\n          Update\n        </ion-button>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\nion-content ion-button {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-chip {\n  --background: #9dc912;\n  --color: #fff;\n}\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar ion-img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n.card-body {\n  padding: 30px;\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .username {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.ion-text-center {\n  text-align: center;\n}\nion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: white !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: black !important;\n  /* Ensures text appears in black */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxcRGhpeW9UZWNoUFZUTFREXFxTdXJzaHJlZVxcdXBkYXRlZCBzdXJzaHJlZVxcU3Vyc2hyZWVXZWJWZXJzaW9uXFxTdXJzaHJlZVdlYlZlcnNpb24vc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURJQTtFQUNJLHlCQUFBO0FDREo7QURJQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLGFBQUE7QUNEUjtBREdRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNEWjtBREdZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNEaEI7QURPQTtFQUVJLGFBQUE7RUFFQSxnQkFBQTtBQ05KO0FEUUk7RUFDSSxpQkFBQTtBQ05SO0FEUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTlo7QURTUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDUFo7QURvQkE7RUFDSSxrQkFBQTtBQ2pCSjtBRHdCQTtFQUNJLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRfZnVsbC5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyL2NvdmVyIGZpeGVkLCAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzlkYzkxMjtcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDsgLy8gMjB2aDtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDsgLy80MHZ3XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7IC8vIC00MnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIC8vaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMwMzk0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIC5hdmF0YXIge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIH1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vLyBpb24tYnV0dG9uIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xuLy8gfVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gICAgLS1pb24tY29sb3ItYmFzZTogd2hpdGUgIWltcG9ydGFudDtcbiAgICAvKiBTZXRzIHRoZSBiYXNlIGNvbG9yIHRvIGJsYWNrIGZvciBpY29ucyBhbmQgdGV4dCAqL1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogIzlkYzkxMjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGlvbi1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgLS1pb24tY29sb3ItYmFzZTogd2hpdGUgIWltcG9ydGFudDtcbiAgLyogU2V0cyB0aGUgYmFzZSBjb2xvciB0byBibGFjayBmb3IgaWNvbnMgYW5kIHRleHQgKi9cbiAgLS1pb24tdGV4dC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/master/master-data.service */ "./src/app/services/master/master-data.service.ts");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(fb, loginService, router, util, mstSrvc) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.util = util;
        this.mstSrvc = mstSrvc;
        this.displayPregDtls = false;
        this.displayUsrPersonalDtls = false;
        this.displayDoctorDtls = false;
        this.states = [];
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.initilizeUserDetailsForm();
        this.mstSrvc.getState().subscribe(function (data) { return _this.states = data; });
    };
    ProfilePage.prototype.initilizeUserDetailsForm = function () {
        var user = this.loginService.getUser();
        console.log('User Dtls', user);
        this.userDetailsForm = this.fb.group({
            'fname': [user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'mname': [user.middleName],
            'lname': [user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'gender': [user.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'dob': [user.dob, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'status': [user.isActive],
            'profilePhoto': [user.profilePicture],
            'profileVideo': [user.profileVideo],
            'profileDescription': [user.profileDescription],
            'country': [user.country, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'state': [user.state, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'city': [user.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    Object.defineProperty(ProfilePage.prototype, "city", {
        get: function () {
            return this.userDetailsForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "state", {
        get: function () {
            return this.userDetailsForm.get('state');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "country", {
        get: function () {
            return this.userDetailsForm.get('country');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "profilePhoto", {
        get: function () {
            return this.userDetailsForm.get('profilePhoto');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "fname", {
        get: function () {
            return this.userDetailsForm.get('fname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "mname", {
        get: function () {
            return this.userDetailsForm.get('mname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "lname", {
        get: function () {
            return this.userDetailsForm.get('lname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "gender", {
        get: function () {
            return this.userDetailsForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "dob", {
        get: function () {
            return this.userDetailsForm.get('dob');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "status", {
        get: function () {
            return this.userDetailsForm.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "profileVideo", {
        get: function () {
            return this.userDetailsForm.get('profileVideo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "profileDescription", {
        get: function () {
            return this.userDetailsForm.get('profileDescription');
        },
        enumerable: true,
        configurable: true
    });
    ProfilePage.prototype.updateUser = function () {
        var _this = this;
        var user = this.loginService.getUser();
        user.firstName = this.fname.value;
        user.middleName = this.mname.value;
        user.lastName = this.lname.value;
        user.gender = this.gender.value;
        user.city = this.city.value;
        user.state = this.state.value;
        user.country = this.country.value;
        user.dob = this.dob.value;
        user.profilePicture = this.profilePhoto.value;
        user.profileVideo = this.profileVideo.value;
        user.profileDescription = this.profileDescription.value;
        user.userType = this.loginService.getUser().userType;
        this.loginService.updateProfile(user).subscribe(function (res) {
            _this.util.success('Your Profile Updated Successfully.');
            _this.loginService.setUser(user);
        }, this.util.errorHandler);
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=17.js.map