(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/welcome\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title  style=\"color: #000;\">Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    \n    <ion-card-content>\n        <div class=\"ion-text-center\">\n          <img src=\"assets/img/surshreelogo.png\" class=\"ion-padding\" style=\"padding-top: 10px; max-width: 50%;\"/>\n          <br/>\n          <ion-label class=\"ion-text-center\" style=\"color: #ff512c;\">'Celebrate Your Passion'</ion-label>\n          <br/><br/>\n          <ion-label class=\"ion-text-center\" style=\"color: #ff512c;\">'India's Biggest singing competition for High School Students.'</ion-label>\n        </div>\n        <br/><br/>\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text  style=\"color: #ff512c;\">\n              <h3>Address</h3>\n            </ion-text>\n            <p>D-9 Kolar Road , Shalimar Park Bhopal M.P.-462042, India</p>\n          </ion-label>\n          <ion-icon name=\"home-sharp\" slot=\"start\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text  style=\"color: #ff512c;\">\n              <h3>Phone</h3>\n            </ion-text>\n            <p>+918349988888 , +917000176855</p>\n          </ion-label>\n          <ion-icon name=\"call-sharp\" slot=\"start\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text  style=\"color: #ff512c;\">\n              <h3>Phone</h3>\n            </ion-text>\n            <p>+919893126606</p>\n          </ion-label>\n          <ion-icon name=\"call-sharp\" slot=\"start\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text  style=\"color: #ff512c;\">\n              <h3>Email</h3>\n            </ion-text>\n            <p>info@surshree.com</p>\n          </ion-label>\n          <ion-icon name=\"mail-sharp\" slot=\"start\"></ion-icon>\n        </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function() { return ContactUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");




var routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }
];
var ContactUsPageRoutingModule = /** @class */ (function () {
    function ContactUsPageRoutingModule() {
    }
    ContactUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContactUsPageRoutingModule);
    return ContactUsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us-routing.module */ "./src/app/pages/contact-us/contact-us-routing.module.ts");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: black !important;\n  /* Ensures text appears in black */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9EOlxcRGhpeW9UZWNoUFZUTFREXFxTdXJzaHJlZVxcdXBkYXRlZCBzdXJzaHJlZVxcU3Vyc2hyZWVXZWJWZXJzaW9uXFxTdXJzaHJlZVdlYlZlcnNpb24vc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0LXVzXFxjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQWdDLHdDQUFBO0VBQ2hDLGtDQUFBO0VBQW9DLG9EQUFBO0VBQ3BDLGtDQUFBO0VBQW9DLGtDQUFBO0FDSXhDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gICAgLS1pb24tY29sb3ItYmFzZTogYmxhY2sgIWltcG9ydGFudDsgLyogU2V0cyB0aGUgYmFzZSBjb2xvciB0byBibGFjayBmb3IgaWNvbnMgYW5kIHRleHQgKi9cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBFbnN1cmVzIHRleHQgYXBwZWFycyBpbiBibGFjayAqL1xuICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsPage = /** @class */ (function () {
    function ContactUsPage() {
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/pages/contact-us/contact-us.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=14.js.map