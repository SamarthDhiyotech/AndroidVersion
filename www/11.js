(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"app-round-bottom custom-background\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <ion-text>Current Location</ion-text>\n      <ion-text>{{ currentAddress }}</ion-text>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/notification']\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<div class=\"background-image\">\n  <div class=\"grid-container\">\n    <div class=\"grid-item\">\n      <div class=\"app-card-content\">\n        <div class=\"center-text\">\n          <img src=\"assets/img/Group 367.png\" class=\"clickable-image\" (click)=\"participateInCompetition()\">\n        </div>\n        <button class=\"overlay-button\" disabled>\n          <span>Participate In Competition</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"grid-item\">\n      <div class=\"app-card-content\">\n        <div class=\"center-text\">\n          <img src=\"assets/img/Group 355.png\" class=\"clickable-image\" (click)=\"viewWinners()\">\n        </div>\n        <button class=\"overlay-button\" disabled>\n          <span>View Winners</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"grid-item\">\n      <div class=\"app-card-content\">\n        <div class=\"center-text\">\n          <img src=\"assets/img/Group 364.png\" class=\"clickable-image\" (click)=\"learnMusic()\">\n        </div>\n        <button class=\"overlay-button\" disabled>\n          <span>Learn Music</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"grid-item\">\n      <div class=\"app-card-content\">\n        <div class=\"center-text\">\n          <img src=\"assets/img/Group 364.png\" class=\"clickable-image\" (click)=\"comingSoon()\">\n        </div>\n        <button class=\"overlay-button\" disabled>\n          <span>Coming Soon</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"grid-item\">\n      <div class=\"app-card-content\">\n        <div class=\"center-text\">\n          <img src=\"assets/img/Group 370.png\" class=\"clickable-image\" (click)=\"share()\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"grid-item\" *ngIf=\"ls.hasFunction('FUNC_VIEW_ADMIN_MENU')\">\n      <div class=\"app-card-content\">\n        <div class=\"center-text\">\n          <img src=\"assets/img/Group 369.png\" class=\"clickable-image\" (click)=\"ManageCompetition()\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./src/app/pages/welcome/welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");




var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
var WelcomePageRoutingModule = /** @class */ (function () {
    function WelcomePageRoutingModule() {
    }
    WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WelcomePageRoutingModule);
    return WelcomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  background-size: cover;\n  overflow: scroll;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 20px;\n}\n\n.app-card-content {\n  position: relative;\n  text-align: center;\n}\n\n.center-text {\n  display: flex;\n  justify-content: center;\n}\n\n.clickable-image {\n  cursor: pointer;\n  width: 100%;\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.overlay-button {\n  position: absolute;\n  bottom: 6%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.ion-header::after {\n  background-image: none !important;\n}\n\nion-toolbar {\n  --background: linear-gradient(to bottom, #fc3503, #fc3503) !important;\n  --color: white !important;\n}\n\nion-icon {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.custom-background {\n  background-image: url(\"/assets/img/Rectangle%201.png\") !important;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/* Add padding for content inside the card */\n\nion-title {\n  font-size: 14px;\n  color: white;\n}\n\nion-toolbar {\n  --background: transparent;\n  /* Avoid background conflict */\n}\n\nion-text {\n  font-size: 12px;\n  display: block;\n}\n\nion-img {\n  margin-bottom: -80px;\n  margin-top: -10px;\n}\n\n.custom-background {\n  background-color: #ff5722 !important;\n  /* Use if solid color is needed */\n  /* background-image: url('/assets/img/Rectangle%201.png'); */\n  /* Uncomment if you want the image background */\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 0;\n}\n\nion-row {\n  --ion-padding-start: 0;\n  /* Remove left padding */\n  --ion-padding-end: 0;\n  /* Remove right padding */\n  margin-top: -10px;\n  /* Adjust margin to reduce gap between rows */\n}\n\n.burgerIcon {\n  display: none;\n}\n\n@media (max-width: 599px) {\n  .burgerIcon {\n    display: block !important;\n  }\n\n  .grid-container {\n    grid-template-columns: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS9EOlxcRGhpeW9UZWNoUFZUTFREXFxTdXJzaHJlZVxcdXBkYXRlZCBzdXJzaHJlZVxcU3Vyc2hyZWVXZWJWZXJzaW9uXFxTdXJzaHJlZVdlYlZlcnNpb24vc3JjXFxhcHBcXHBhZ2VzXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNBRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLGlDQUFBO0FDRkY7O0FETUE7RUFDRSxxRUFBQTtFQUNBLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7RUFDRSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0hGOztBRFVBLDRDQUFBOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNSRjs7QURXQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEWUE7RUFDRSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNERBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUVBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7QUNWRjs7QURhQTtFQUNFO0lBQ0UseUJBQUE7RUNWRjs7RURhQTtJQUNFLDJCQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGdhcDogMjBweDtcblxufVxuXG4uYXBwLWNhcmQtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNsaWNrYWJsZS1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5vdmVybGF5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG5cbi5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ljb24vYmczLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYzM1MDMsICNmYzM1MDMpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvUmVjdGFuZ2xlJTIwMS5wbmcnKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi8vIC5hcHAtY2FyZC1jb250ZW50IHtcbi8vIG1hcmdpbjogNXB4IDA7ICAgICAgICAgICAvKiBBZGp1c3QgdG9wIGFuZCBib3R0b20gbWFyZ2luIHRvIHJlZHVjZSB2ZXJ0aWNhbCBnYXAgKi9cbi8vICBwYWRkaW5nOiAxMHB4OyAgXG4vLyBtYXJnaW4tYm90dG9tOiA4cHg7IC8qIERlY3JlYXNlIG1hcmdpbiBiZWxvdyBlYWNoIGNhcmQgKi9cbi8qIEFkZCBwYWRkaW5nIGZvciBjb250ZW50IGluc2lkZSB0aGUgY2FyZCAqL1xuLy99XG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKiBBdm9pZCBiYWNrZ3JvdW5kIGNvbmZsaWN0ICovXG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IC04MHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcblxufVxuXG4uY3VzdG9tLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG4gIC8qIFVzZSBpZiBzb2xpZCBjb2xvciBpcyBuZWVkZWQgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9SZWN0YW5nbGUlMjAxLnBuZycpOyAqL1xuICAvKiBVbmNvbW1lbnQgaWYgeW91IHdhbnQgdGhlIGltYWdlIGJhY2tncm91bmQgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvLyBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLXJvdyB7XG4gIC0taW9uLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC8qIFJlbW92ZSBsZWZ0IHBhZGRpbmcgKi9cbiAgLS1pb24tcGFkZGluZy1lbmQ6IDA7XG4gIC8qIFJlbW92ZSByaWdodCBwYWRkaW5nICovXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICAvKiBBZGp1c3QgbWFyZ2luIHRvIHJlZHVjZSBnYXAgYmV0d2VlbiByb3dzICovXG59XG5cbi5idXJnZXJJY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5idXJnZXJJY29uIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIH1cblxufVxuXG5cblxuLy8gLm92ZXJsYXktYnV0dG9uIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3R0b206IC01cHg7IC8qIFBvc2l0aW9uIHRoZSBidXR0b24gMjBweCBmcm9tIHRoZSBib3R0b20gKi9cbi8vICAgbGVmdDogMDsgLyogQWxpZ24gdG8gdGhlIGxlZnQgKi9cbi8vICAgcmlnaHQ6IDA7IC8qIEFsaWduIHRvIHRoZSByaWdodCAqL1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNSk7IC8qIEFzaCBjb2xvciB3aXRoIHRyYW5zcGFyZW5jeSAqL1xuLy8gICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXIgKi9cbi8vICAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXG4vLyAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBwYWRkaW5nOiAxMHB4OyAvKiBBZGp1c3QgcGFkZGluZyBmb3IgYSBiZXR0ZXIgZml0ICovXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIE9wdGlvbmFsOiByb3VuZGVkIGNvcm5lcnMgKi9cbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIERpc2FibGUgaW50ZXJhY3Rpb25zICovXG4vLyAgIGN1cnNvcjogZGVmYXVsdDsgLyogQ2hhbmdlIGN1cnNvciB0byBpbmRpY2F0ZSBkaXNhYmxlZCAqL1xuLy8gICB3aWR0aDogY2FsYyg4MCUgLSA0MHB4KTsgLyogT3B0aW9uYWw6IGFkanVzdCB3aWR0aCBiYXNlZCBvbiBwYWRkaW5nL21hcmdpbnMgKi9cbi8vICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgYnV0dG9uIGhvcml6b250YWxseSAqL1xuLy8gfSIsIi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGdhcDogMjBweDtcbn1cblxuLmFwcC1jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jbGlja2FibGUtaW1hZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ub3ZlcmxheS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNiU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjMzUwMywgI2ZjMzUwMykgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvUmVjdGFuZ2xlJTIwMS5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4vKiBBZGQgcGFkZGluZyBmb3IgY29udGVudCBpbnNpZGUgdGhlIGNhcmQgKi9cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8qIEF2b2lkIGJhY2tncm91bmQgY29uZmxpY3QgKi9cbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY3VzdG9tLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG4gIC8qIFVzZSBpZiBzb2xpZCBjb2xvciBpcyBuZWVkZWQgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9SZWN0YW5nbGUlMjAxLnBuZycpOyAqL1xuICAvKiBVbmNvbW1lbnQgaWYgeW91IHdhbnQgdGhlIGltYWdlIGJhY2tncm91bmQgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tcm93IHtcbiAgLS1pb24tcGFkZGluZy1zdGFydDogMDtcbiAgLyogUmVtb3ZlIGxlZnQgcGFkZGluZyAqL1xuICAtLWlvbi1wYWRkaW5nLWVuZDogMDtcbiAgLyogUmVtb3ZlIHJpZ2h0IHBhZGRpbmcgKi9cbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIC8qIEFkanVzdCBtYXJnaW4gdG8gcmVkdWNlIGdhcCBiZXR3ZWVuIHJvd3MgKi9cbn1cblxuLmJ1cmdlckljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmJ1cmdlckljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/competition/competition.service */ "./src/app/services/competition/competition.service.ts");
/* harmony import */ var src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/master/master-data.service */ "./src/app/services/master/master-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");









var WelcomePage = /** @class */ (function () {
    function WelcomePage(ls, util, r, compSrvc, sharing, mst, menuCtrl) {
        this.ls = ls;
        this.util = util;
        this.r = r;
        this.compSrvc = compSrvc;
        this.sharing = sharing;
        this.mst = mst;
        this.menuCtrl = menuCtrl;
        this.currentAddress = 'Fetching your location...';
    }
    WelcomePage.prototype.ngOnInit = function () {
        this.getCurrentLocation();
    };
    WelcomePage.prototype.getCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                _this.getAddressFromCoordinates(latitude, longitude);
            }, function (error) {
                console.error('Error getting location', error);
                _this.currentAddress = 'Unable to fetch location. Please try again.';
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            });
        }
        else {
            console.error('Geolocation is not supported by this browser.');
            this.currentAddress = 'Geolocation is not supported by your browser.';
        }
    };
    WelcomePage.prototype.getAddressFromCoordinates = function (lat, lng) {
        var _this = this;
        var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lng;
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data.address) {
                var _a = data.address, road = _a.road, suburb = _a.suburb, city = _a.city, state = _a.state, postcode = _a.postcode, country = _a.country;
                _this.currentAddress = ((city || '') + ", " + (state || '') + " " + (postcode || '') + ", " + (country || ''))
                    .replace(/(,\s){2,}/g, ', ')
                    .trim();
            }
            else {
                _this.currentAddress = 'Address not found for the location.';
            }
        })
            .catch(function (error) {
            console.error('Error fetching address', error);
            _this.currentAddress = 'Unable to fetch address details.';
        });
    };
    WelcomePage.prototype.navigateToNotifications = function () {
        this.r.navigateByUrl('notification');
    };
    WelcomePage.prototype.participateInCompetition = function () {
        this.r.navigateByUrl('participate-in-comp');
    };
    WelcomePage.prototype.learnMusic = function () {
        this.r.navigateByUrl('learn-music');
    };
    WelcomePage.prototype.viewWinners = function () {
        this.r.navigateByUrl('winners');
    };
    WelcomePage.prototype.ManageCompetition = function () {
        this.r.navigateByUrl('manage-competitions');
    };
    WelcomePage.prototype.comingSoon = function () {
        this.util.presentToast('World of Music Coming Soon...');
    };
    WelcomePage.prototype.share = function () {
        var _this = this;
        this.sharing
            .share("Hi, I am sharing the Surshree App with you. The app enables you to participate in various competition organized by Surshree. Download link is: <Link Will Be Updated Later>", "Download Surshree App", null, null)
            .catch(function () {
            _this.util.presentToast('Sharing not supported. Please use Surshree app to Reffer it to your friends.');
        });
    };
    WelcomePage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'main-menu'); // Enable the menu if it's disabled
        this.menuCtrl.open('main-content'); // Open specific menu
    };
    WelcomePage.ctorParameters = function () { return [
        { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_6__["CompetitionService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
        { type: src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_7__["MasterDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] }
    ]; };
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_6__["CompetitionService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
            src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_7__["MasterDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ }),

/***/ "./src/app/services/competition/competition.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/competition/competition.service.ts ***!
  \*************************************************************/
/*! exports provided: CompetitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionService", function() { return CompetitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util.service */ "./src/app/services/util/util.service.ts");



var CompetitionService = /** @class */ (function () {
    function CompetitionService(util) {
        this.util = util;
    }
    CompetitionService.prototype.getActiveCompetitions = function () {
        return this.util.get('competitions/active');
    };
    CompetitionService.prototype.search = function (searchModel) {
        return this.util.post('competitions/search', searchModel);
    };
    CompetitionService.prototype.enrollInComp = function (compId) {
        return this.util.post("competitions/enrollment/" + compId, null);
    };
    CompetitionService.prototype.getAllEnrolments = function () {
        return this.util.get('competitions/enrollment');
    };
    CompetitionService.prototype.getCompetitionDetails = function (compId) {
        return this.util.get("competitions/" + compId);
    };
    CompetitionService.prototype.attachFileToEnrolledCompetition = function (submittedEntryId, fileId) {
        return this.util.post("competitions/enrollment/" + submittedEntryId + "/" + fileId, null);
    };
    CompetitionService.prototype.subscribeToCompetition = function (compId, payId) {
        return this.util.post("competitions/subscribe/" + compId + "/" + payId, null);
    };
    CompetitionService.prototype.saveOrUpdateComp = function (comp) {
        return this.util.post("competitions", comp);
    };
    CompetitionService.prototype.getAllSubmittedEntries = function (compId) {
        return this.util.get("competitions/enrollment/" + compId);
    };
    CompetitionService.prototype.getShortlistedEntries = function (compId) {
        return this.util.get("competitions/shortlisted/" + compId);
    };
    CompetitionService.prototype.markShortlisted = function (submittedEntryId) {
        return this.util.post("competitions/shortlist/" + submittedEntryId, null);
    };
    CompetitionService.prototype.markWinners = function (winnerList) {
        return this.util.post("competitions/winner", winnerList);
    };
    CompetitionService.prototype.getCompetitionWinners = function (compId) {
        return this.util.get("competitions/winners/" + compId);
    };
    CompetitionService.prototype.getAllCompetitionWinners = function () {
        return this.util.get("competitions/allwinners");
    };
    CompetitionService.prototype.createSubscriptionOrder = function (comp) {
        return this.util.post("competitions/subscribe/" + comp.competitionId, null);
    };
    CompetitionService.prototype.processPayment = function (orderId, payment_id) {
        return this.util.post("competitions/subscribe/" + orderId + "/" + payment_id + "/null/null", null);
    };
    CompetitionService.prototype.processPaymentError = function (orderId, errorCode, errorDesc) {
        return this.util.post("competitions/subscribe/" + orderId + "/null/" + errorCode + "/" + errorDesc, null);
    };
    CompetitionService.ctorParameters = function () { return [
        { type: _util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    CompetitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], CompetitionService);
    return CompetitionService;
}());



/***/ })

}]);
//# sourceMappingURL=11.js.map