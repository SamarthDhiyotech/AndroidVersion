(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/welcome\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title style=\"color: #000;\">About Surshree</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"about-us-card\">\n    <ion-card-header class=\"about-card-header\">\n      <ion-card-subtitle color=\"primary\" class=\"ion-text-uppercase\">\n\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <div class=\"about-content\">\n        <img src=\"../../../assets/img/about.png\" alt=\"About Us\" class=\"about-image\" />\n        <ion-label class=\"about-tagline ion-padding-start ion-padding-end\" style=\"color: #FFA500;\">\n          When everyone else says 'YOU CAN'T', **\"सुरश्री\"** SAYS 'YES YOU CAN'\n        </ion-label>\n        <div class=\"about-details ion-padding-start ion-padding-end\">\n          <h1 class=\"ion-text-center\"><strong>MEGA SINGING COMPETITION- \"SURSHREE\"</strong></h1>\n          <h2 class=\"ion-text-center\">Rotary globally unites more than a million people</h2>\n          <p class=\"ion-text-justify\">\n            Surshree is one of the biggest singing competitions in India. It is a brand of Rotary District 3040, held annually in Bhopal. Rotary is\n            an international organization of around 1.2 million business professionals and community leaders. Surshree provides a platform for children\n            all over India and has become a popular name among young aspiring singers.\n          </p>\n          <p class=\"ion-text-justify\">\n            Starting as a school-level competition for participants from grades 9 to 12 (ages 15–21), Surshree has now grown into an international event\n            with global participants. With a unique format of submission through WhatsApp, participants are shortlisted and progress through quarterfinals,\n            semifinals, and the grand finale judged by renowned celebrities like Vinod Rathod, Mahalaxmi Iyer, and Anand Ji.\n          </p>\n          <p class=\"ion-text-justify\">\n            Season 6 will take place on 05 Dec 2020, with expanded eligibility for participants aged 15–25. Surshree remains dedicated to shaping young\n            musical talents worldwide while maintaining its legacy as a world-class music competition.\n          </p>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<!-- <app-footer></app-footer> -->\n");

/***/ }),

/***/ "./src/app/pages/about-us/about-us-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");




var routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
var AboutUsPageRoutingModule = /** @class */ (function () {
    function AboutUsPageRoutingModule() {
    }
    AboutUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AboutUsPageRoutingModule);
    return AboutUsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/pages/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-us-card {\n  --background: #fff;\n  color: black;\n  border-radius: 15px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.about-card-header {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.about-image {\n  display: block;\n  margin: 0 auto;\n  width: 180px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);\n}\n\n.about-tagline {\n  display: block;\n  font-size: 1.1rem;\n  font-style: italic;\n  text-align: center;\n  margin-top: 10px;\n  color: var(--ion-color-primary);\n}\n\n.about-details {\n  margin-top: 20px;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n\nh1, h2 {\n  color: #000;\n}\n\nh1 {\n  font-size: 1.8rem;\n  margin-bottom: 10px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n}\n\nion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: black !important;\n  /* Ensures text appears in black */\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvRDpcXERoaXlvVGVjaFBWVExURFxcU3Vyc2hyZWVcXHVwZGF0ZWQgc3Vyc2hyZWVcXFN1cnNocmVlV2ViVmVyc2lvblxcU3Vyc2hyZWVXZWJWZXJzaW9uL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXQtdXNcXGFib3V0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0VKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURERTtFQUVFLFdBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIRTtFQUNFLDhCQUFBO0VBQWdDLHdDQUFBO0VBQ2hDLGtDQUFBO0VBQW9DLG9EQUFBO0VBQ3BDLGtDQUFBO0VBQW9DLGtDQUFBO0VBQ2xDLGFBQUE7QUNTTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuYWJvdXQtdXMtY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8vIC0tYmFja2dyb3VuZDogIzFhMWIxZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLmFib3V0LWNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmFib3V0LWltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgLmFib3V0LXRhZ2xpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIC5hYm91dC1kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIGgxLCBoMiB7XG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDsgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgICAtLWlvbi1jb2xvci1iYXNlOiBibGFjayAhaW1wb3J0YW50OyAvKiBTZXRzIHRoZSBiYXNlIGNvbG9yIHRvIGJsYWNrIGZvciBpY29ucyBhbmQgdGV4dCAqL1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4iLCIuYWJvdXQtdXMtY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5hYm91dC1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYWJvdXQtdGFnbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hYm91dC1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5oMSwgaDIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsPage = /** @class */ (function () {
    function AboutUsPage() {
        this.currentId = '';
    }
    AboutUsPage.prototype.ngOnInit = function () {
    };
    AboutUsPage.prototype.toggle = function (id) {
        if (this.currentId == id) {
            this.currentId = '';
            id = '';
        }
        return this.currentId = id;
    };
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsPage);
    return AboutUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=12.js.map