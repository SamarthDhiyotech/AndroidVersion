(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/winners/winners.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/winners/winners.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/welcome\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title style=\"color: #000;\">View Winners</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <p-dialog [(visible)]=\"display\" modal=\"true\" dismissableMask=\"true\">\n    <mat-video src=\"{{util.getFullUrl('file/') + videoToPlay}}\" \n               [autoplay]=\"true\" [preload]=\"true\" [fullscreen]=\"true\" [download]=\"false\" color=\"accent\" spinner=\"spin\" \n               [overlay]=\"true\" [playsinline]=\"false\" style=\"height: 320px; border-radius: 12px;\">\n    </mat-video>\n  </p-dialog>\n\n  <ion-item *ngIf=\"showError && winners.length < 1\">\n    <ion-label color=\"danger\" class=\"ion-text-center\"><b>No Records Found.</b></ion-label>\n  </ion-item>\n\n  <!-- Dots -->\n  <div class=\"ion-text-center\" *ngIf=\"showProgress\">\n    <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner> \n  </div>\n\n  <!-- <div class=\"competition-card\">\n    <img \n      src=\"assets/img/Group 355.png\"\n      class=\"background-image\" \n      alt=\"Background Image\"\n      *ngIf=\"competition.compPhoto\" \n    />\n  </div> -->\n  <ion-grid fixed *ngIf=\"!showProgress\">\n    <!-- <div class=\"competition-card\">\n      <img \n        src=\"assets/img/winbackground.png\" \n        class=\"background-image\" \n        alt=\"Background Image\"\n      />\n    </div> -->\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let winner of winners\">\n        <ion-card class=\"winner-card\">\n          <ion-card-header class=\"card-header\">\n              <ion-item lines=\"none\" class=\"header-item\" detail=\"false\">\n                  <ion-avatar slot=\"start\">\n                      <img src=\"{{util.getFullUrl('file/') + winner.compPhoto}}\" *ngIf=\"winner.compPhoto\"/>\n                      <img src=\"../../../assets/img/win.jpeg\" *ngIf=\"!winner.compPhoto\"/>\n                  </ion-avatar>\n                  <ion-label class=\"ion-text-wrap\">\n                      <h2 class=\"comp-title\">{{winner.compTitle}}</h2>\n                      <p class=\"comp-desc\">{{winner.compDesc}}</p>\n                  </ion-label>\n              </ion-item>\n          </ion-card-header>\n      \n          <ion-card-content class=\"winner-card-content\">\n              <ion-list lines=\"none\">\n                  <ion-item class=\"winner-item\" detail=\"false\" *ngFor=\"let dtl of winner.winners\">\n                      <ion-avatar slot=\"start\">\n                          <ion-img [src]=\"'../../../assets/img/'+ (dtl.gender == 'F' ? 'female.jpg' : 'male.jpg')\" *ngIf=\"!dtl.userProfile\"></ion-img>\n                          <ion-img [src]=\"util.getFullUrl('file/') + dtl.userProfile\" *ngIf=\"dtl.userProfile\"></ion-img>\n                      </ion-avatar>\n                      <ion-label class=\"ion-text-wrap\">\n                          <h2><b>{{dtl.fullUserName}}</b></h2>\n                          <p>Age: {{dtl.age}}</p>\n                          <p>{{dtl.city}}, {{mst.getStateDescByKey(dtl.state)}}</p>\n                          <p>Position: {{getPositionDescription(dtl)}}</p>\n                      </ion-label>\n                      <ion-button fill=\"outline\" slot=\"end\" (click)=\"viewVideo($event, dtl.fileId)\" *ngIf=\"dtl.fileId\" style=\"color: #ff512c;\" class=\"custom-outline\">\n                          Song\n                          <ion-icon name=\"play\" slot=\"end\"></ion-icon>\n                      </ion-button>\n                  </ion-item>\n              </ion-list>\n          </ion-card-content>\n      </ion-card>\n      \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/winners/winners-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/winners/winners-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WinnersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersPageRoutingModule", function() { return WinnersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winners.page */ "./src/app/pages/winners/winners.page.ts");




var routes = [
    {
        path: '',
        component: _winners_page__WEBPACK_IMPORTED_MODULE_3__["WinnersPage"]
    }
];
var WinnersPageRoutingModule = /** @class */ (function () {
    function WinnersPageRoutingModule() {
    }
    WinnersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WinnersPageRoutingModule);
    return WinnersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/winners/winners.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/winners/winners.module.ts ***!
  \*************************************************/
/*! exports provided: WinnersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersPageModule", function() { return WinnersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _winners_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winners-routing.module */ "./src/app/pages/winners/winners-routing.module.ts");
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./winners.page */ "./src/app/pages/winners/winners.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material.module */ "./src/app/pages/material.module.ts");










var WinnersPageModule = /** @class */ (function () {
    function WinnersPageModule() {
    }
    WinnersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _winners_routing_module__WEBPACK_IMPORTED_MODULE_5__["WinnersPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
            ],
            declarations: [_winners_page__WEBPACK_IMPORTED_MODULE_6__["WinnersPage"]]
        })
    ], WinnersPageModule);
    return WinnersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/winners/winners.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/winners/winners.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-background {\n  background: #f8f9fa;\n}\n\n.winner-card {\n  border-radius: 25px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  background-color: #ffffff;\n  padding: 0;\n}\n\n.image-container {\n  width: 100%;\n  height: 100px;\n  /* Adjust to control image height */\n  overflow: hidden;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.background-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.card-header {\n  padding: 1px 1px;\n  background-color: #ffffff;\n}\n\n.comp-title {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #1f1f1f;\n  margin: 0;\n}\n\n.comp-desc {\n  color: #6b6b6b;\n  font-size: 0.85rem;\n  margin: 4px 0 0 0;\n}\n\n.winner-card-content {\n  padding: 1px;\n}\n\n.winner-item {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin-top: 5px;\n  background-color: #ffffff;\n  border-radius: 8px;\n}\n\n.avatar {\n  width: 45px;\n  height: 45px;\n  margin-right: 10px;\n}\n\n.winner-details {\n  flex-grow: 1;\n  margin-left: 10px;\n}\n\n.winner-name {\n  font-weight: 600;\n  color: #1f1f1f;\n  font-size: 1rem;\n  margin: 0;\n}\n\n.winner-location,\n.winner-position {\n  font-size: 0.85rem;\n  color: #6b6b6b;\n  margin: 2px 0 0;\n}\n\n.song-button {\n  font-weight: bold;\n  color: #ff5722;\n  background-color: #ffebee;\n  border-radius: 8px;\n  --background-focused: #ffebee;\n  --background-hover: #ffcdd2;\n  --color: #ff5722;\n}\n\n.song-button ion-icon {\n  color: #ff5722;\n}\n\nion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: #000 !important;\n  /* Ensures text appears in black */\n}\n\n.winner-details-horizontal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.winner-name {\n  font-weight: 600;\n  color: #1f1f1f;\n  font-size: 1.1rem;\n  margin: 0;\n}\n\n.winner-info {\n  display: flex;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #6b6b6b;\n  margin-top: 5px;\n}\n\n.winner-info span {\n  color: #1f1f1f;\n}\n\n.winner-position {\n  color: #ff5722;\n  font-weight: 500;\n}\n\n.song-button {\n  font-weight: bold;\n  color: #ff5722;\n  background-color: #ffebee;\n  border-radius: 8px;\n  --background-focused: #ffebee;\n  --background-hover: #ffcdd2;\n  --color: #ff5722;\n  padding: 0 12px;\n  /* Increase padding */\n  min-width: 70px;\n  /* Set a minimum width to fit \"Song\" text */\n  text-transform: none;\n  /* Ensures text stays readable */\n  white-space: nowrap;\n  /* Prevents text from wrapping */\n  overflow: hidden;\n  /* Prevents any overflow */\n}\n\n.song-button ion-icon {\n  color: #ff5722;\n  font-size: 1.2em;\n  /* Adjust icon size if needed */\n  margin-left: 4px;\n  /* Add space between text and icon */\n}\n\n:root {\n  --ion-color-custom: #ff512c;\n  /* Custom color */\n}\n\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -22px;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n.custom-outline {\n  --ion-color-primary: #ff512c;\n  /* Outline color */\n  --ion-color-primary-rgb: 255, 81, 44;\n  /* RGB value for the outline color */\n  margin-bottom: -10px;\n}\n\n.competition-card {\n  position: relative;\n  /* Set position for the image */\n  overflow: hidden;\n  /* Prevent overflow for rounded corners */\n  border-radius: 15px;\n  /* Optional: round the corners of the card */\n}\n\n.background-image {\n  width: 100%;\n  /* Full width */\n  height: auto;\n  /* Maintain aspect ratio */\n  border-radius: 15px;\n  /* Round corners of the image */\n  display: block;\n  /* Prevent any inline spacing */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lubmVycy9EOlxcRGhpeW9UZWNoUFZUTFREXFxTdXJzaHJlZVxcdXBkYXRlZCBzdXJzaHJlZVxcU3Vyc2hyZWVXZWJWZXJzaW9uXFxTdXJzaHJlZVdlYlZlcnNpb24vc3JjXFxhcHBcXHBhZ2VzXFx3aW5uZXJzXFx3aW5uZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2lubmVycy93aW5uZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFBZSxtQ0FBQTtFQUNmLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNFSjs7QURDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNFSjs7QURDRTs7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FEQUU7RUFDRSw4QkFBQTtFQUFnQyx3Q0FBQTtFQUNoQyxrQ0FBQTtFQUFvQyxvREFBQTtFQUNwQyxpQ0FBQTtFQUFtQyxrQ0FBQTtBQ012Qzs7QURIRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESEU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNNSjs7QURIRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ01KOztBREhFO0VBQ0UsY0FBQTtBQ01KOztBREhFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUFpQixxQkFBQTtFQUNqQixlQUFBO0VBQWlCLDJDQUFBO0VBQ2pCLG9CQUFBO0VBQXNCLGdDQUFBO0VBQ3RCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQ3JCLGdCQUFBO0VBQWtCLDBCQUFBO0FDV3RCOztBRFJFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQWtCLCtCQUFBO0VBQ2xCLGdCQUFBO0VBQWtCLG9DQUFBO0FDYXRCOztBRFhFO0VBQ0UsMkJBQUE7RUFBOEIsaUJBQUE7QUNlbEM7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUVBQUE7QUNlSjs7QURiQTtFQUNJLDRCQUFBO0VBQThCLGtCQUFBO0VBQzlCLG9DQUFBO0VBQXNDLG9DQUFBO0VBQ3RDLG9CQUFBO0FDa0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFBb0IsK0JBQUE7RUFDcEIsZ0JBQUE7RUFBa0IseUNBQUE7RUFDbEIsbUJBQUE7RUFBcUIsNENBQUE7QUNvQnpCOztBRGpCQTtFQUNJLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLDBCQUFBO0VBQ2QsbUJBQUE7RUFBcUIsK0JBQUE7RUFDckIsY0FBQTtFQUFnQiwrQkFBQTtBQ3dCcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aW5uZXJzL3dpbm5lcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICB9XG4gIFxuICAud2lubmVyLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRvIGNvbnRyb2wgaW1hZ2UgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXB4IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIFxuICAuY29tcC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMxZjFmMWY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuY29tcC1kZXNjIHtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgbWFyZ2luOiA0cHggMCAwIDA7XG4gIH1cbiAgXG4gIC53aW5uZXItY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcHg7XG4gIH1cbiAgXG4gIC53aW5uZXItaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIFxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAud2lubmVyLWRldGFpbHMge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLndpbm5lci1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWYxZjFmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC53aW5uZXItbG9jYXRpb24sXG4gIC53aW5uZXItcG9zaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBtYXJnaW46IDJweCAwIDA7XG4gIH1cbiAgXG4gIC5zb25nLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZjU3MjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmViZWU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZjZGQyO1xuICAgIC0tY29sb3I6ICNmZjU3MjI7XG4gIH1cbiAgXG4gIC5zb25nLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZjU3MjI7XG4gIH1cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDsgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgICAtLWlvbi1jb2xvci1iYXNlOiBibGFjayAhaW1wb3J0YW50OyAvKiBTZXRzIHRoZSBiYXNlIGNvbG9yIHRvIGJsYWNrIGZvciBpY29ucyBhbmQgdGV4dCAqL1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbiAgfVxuXG4gIC53aW5uZXItZGV0YWlscy1ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC53aW5uZXItbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzFmMWYxZjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC53aW5uZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIFxuICAud2lubmVyLWluZm8gc3BhbiB7XG4gICAgY29sb3I6ICMxZjFmMWY7XG4gIH1cbiAgXG4gIC53aW5uZXItcG9zaXRpb24ge1xuICAgIGNvbG9yOiAjZmY1NzIyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIC5zb25nLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZjU3MjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmViZWU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZjZGQyO1xuICAgIC0tY29sb3I6ICNmZjU3MjI7XG4gICAgcGFkZGluZzogMCAxMnB4OyAvKiBJbmNyZWFzZSBwYWRkaW5nICovXG4gICAgbWluLXdpZHRoOiA3MHB4OyAvKiBTZXQgYSBtaW5pbXVtIHdpZHRoIHRvIGZpdCBcIlNvbmdcIiB0ZXh0ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IC8qIEVuc3VyZXMgdGV4dCBzdGF5cyByZWFkYWJsZSAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnRzIHRleHQgZnJvbSB3cmFwcGluZyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnRzIGFueSBvdmVyZmxvdyAqL1xuICB9XG4gIFxuICAuc29uZy1idXR0b24gaW9uLWljb24ge1xuICAgIGNvbG9yOiAjZmY1NzIyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IC8qIEFkanVzdCBpY29uIHNpemUgaWYgbmVlZGVkICovXG4gICAgbWFyZ2luLWxlZnQ6IDRweDsgLyogQWRkIHNwYWNlIGJldHdlZW4gdGV4dCBhbmQgaWNvbiAqL1xuICB9XG4gIDpyb290IHtcbiAgICAtLWlvbi1jb2xvci1jdXN0b206ICNmZjUxMmM7ICAvKiBDdXN0b20gY29sb3IgKi9cbn1cblxuLmxpc3QtbWQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuLmN1c3RvbS1vdXRsaW5lIHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY1MTJjOyAvKiBPdXRsaW5lIGNvbG9yICovXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgODEsIDQ0OyAvKiBSR0IgdmFsdWUgZm9yIHRoZSBvdXRsaW5lIGNvbG9yICovXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG5cbn1cblxuLmNvbXBldGl0aW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogU2V0IHBvc2l0aW9uIGZvciB0aGUgaW1hZ2UgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IG92ZXJmbG93IGZvciByb3VuZGVkIGNvcm5lcnMgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBPcHRpb25hbDogcm91bmQgdGhlIGNvcm5lcnMgb2YgdGhlIGNhcmQgKi9cbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gKi9cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBSb3VuZCBjb3JuZXJzIG9mIHRoZSBpbWFnZSAqL1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBQcmV2ZW50IGFueSBpbmxpbmUgc3BhY2luZyAqL1xuICAgIC8vIG1hcmdpbi10b3A6IC0yMDBweDtcblxufVxuXG4vLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvcGF0aC10by15b3VyLWltYWdlLnBuZycpOyAvKiBVcGRhdGUgcGF0aCAqL1xuLy8gYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vIGhlaWdodDogMzAwcHg7XG4vLyAvLyBib3JkZXItcmFkaXVzOiAxNXB4O1xuLy8gLy8gb3BhY2l0eTogMC43O1xuLy8gLy8gZmlsdGVyOiBibHVyKDNweCk7XG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyB0b3A6IDA7XG4vLyBsZWZ0OiAwO1xuLy8gcmlnaHQ6IDA7XG4vLyBib3R0b206IDA7XG4vLyBtYXJnaW4tdG9wOiAtMjAwcHg7XG4iLCIuYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG4ud2lubmVyLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICAvKiBBZGp1c3QgdG8gY29udHJvbCBpbWFnZSBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxcHggMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29tcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxZjFmMWY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbXAtZGVzYyB7XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xufVxuXG4ud2lubmVyLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLndpbm5lci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi53aW5uZXItZGV0YWlscyB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi53aW5uZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWYxZjFmO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLndpbm5lci1sb2NhdGlvbixcbi53aW5uZXItcG9zaXRpb24ge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBtYXJnaW46IDJweCAwIDA7XG59XG5cbi5zb25nLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmNTcyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZWJlZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZjZGQyO1xuICAtLWNvbG9yOiAjZmY1NzIyO1xufVxuXG4uc29uZy1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gIC0taW9uLXRleHQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbn1cblxuLndpbm5lci1kZXRhaWxzLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndpbm5lci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZjFmMWY7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi53aW5uZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi53aW5uZXItaW5mbyBzcGFuIHtcbiAgY29sb3I6ICMxZjFmMWY7XG59XG5cbi53aW5uZXItcG9zaXRpb24ge1xuICBjb2xvcjogI2ZmNTcyMjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvbmctYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmY1NzIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZlYmVlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmNkZDI7XG4gIC0tY29sb3I6ICNmZjU3MjI7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgLyogSW5jcmVhc2UgcGFkZGluZyAqL1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIC8qIFNldCBhIG1pbmltdW0gd2lkdGggdG8gZml0IFwiU29uZ1wiIHRleHQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC8qIEVuc3VyZXMgdGV4dCBzdGF5cyByZWFkYWJsZSAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBQcmV2ZW50cyB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogUHJldmVudHMgYW55IG92ZXJmbG93ICovXG59XG5cbi5zb25nLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY1NzIyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICAvKiBBZGp1c3QgaWNvbiBzaXplIGlmIG5lZWRlZCAqL1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICAvKiBBZGQgc3BhY2UgYmV0d2VlbiB0ZXh0IGFuZCBpY29uICovXG59XG5cbjpyb290IHtcbiAgLS1pb24tY29sb3ItY3VzdG9tOiAjZmY1MTJjO1xuICAvKiBDdXN0b20gY29sb3IgKi9cbn1cblxuLmxpc3QtbWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4uY3VzdG9tLW91dGxpbmUge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY1MTJjO1xuICAvKiBPdXRsaW5lIGNvbG9yICovXG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDgxLCA0NDtcbiAgLyogUkdCIHZhbHVlIGZvciB0aGUgb3V0bGluZSBjb2xvciAqL1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmNvbXBldGl0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIFNldCBwb3NpdGlvbiBmb3IgdGhlIGltYWdlICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIFByZXZlbnQgb3ZlcmZsb3cgZm9yIHJvdW5kZWQgY29ybmVycyAqL1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAvKiBPcHRpb25hbDogcm91bmQgdGhlIGNvcm5lcnMgb2YgdGhlIGNhcmQgKi9cbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IGF1dG87XG4gIC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAvKiBSb3VuZCBjb3JuZXJzIG9mIHRoZSBpbWFnZSAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogUHJldmVudCBhbnkgaW5saW5lIHNwYWNpbmcgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/winners/winners.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/winners/winners.page.ts ***!
  \***********************************************/
/*! exports provided: WinnersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersPage", function() { return WinnersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_competition_competition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/competition/competition.service */ "./src/app/services/competition/competition.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_master_master_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/master/master-data.service */ "./src/app/services/master/master-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");






var WinnersPage = /** @class */ (function () {
    function WinnersPage(cs, util, mst, popup) {
        this.cs = cs;
        this.util = util;
        this.mst = mst;
        this.popup = popup;
        this.winners = [];
        this.showProgress = false;
        this.showError = false;
        this.display = false;
        this.videoToPlay = null;
    }
    WinnersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showProgress = true;
        this.cs.getAllCompetitionWinners()
            .subscribe(function (res) {
            _this.showError = true;
            _this.winners = res;
            _this.showProgress = false;
        }, function (err) {
            _this.showError = true;
            _this.showProgress = false;
        });
    };
    WinnersPage.prototype.getPositionDescription = function (entry) {
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
    WinnersPage.prototype.viewVideo = function (event, id) {
        this.videoToPlay = id;
        this.display = true;
    };
    WinnersPage.ctorParameters = function () { return [
        { type: _services_competition_competition_service__WEBPACK_IMPORTED_MODULE_2__["CompetitionService"] },
        { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _services_master_master_data_service__WEBPACK_IMPORTED_MODULE_4__["MasterDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
    ]; };
    WinnersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-winners',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./winners.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/winners/winners.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./winners.page.scss */ "./src/app/pages/winners/winners.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_2__["CompetitionService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _services_master_master_data_service__WEBPACK_IMPORTED_MODULE_4__["MasterDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
    ], WinnersPage);
    return WinnersPage;
}());



/***/ })

}]);
//# sourceMappingURL=23.js.map