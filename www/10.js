(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/participate-in-comp/participate-in-comp.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/participate-in-comp/participate-in-comp.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/welcome\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title style=\"color: #000;\">Participate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let c of contests\" size-md=\"4\" size-lg=\"4\" size-xs=\"12\" size-sm=\"12\">\n        <ion-card button=\"true\" (click)=\"openSubmittedEntryPage(c.competitionId)\" style=\"border-radius: 12px; overflow: hidden;\">\n          <div class=\"competition-card-img\">\n            <img [src]=\"c.compPhoto ? util.getFullUrl('file/') + c.compPhoto : placeholderImage\" />\n            \n          </div>\n          <div class=\"competition-card-details\">\n            <div class=\"details\">\n              <div class=\"competition-info\">\n                <!-- <ion-icon name=\"title\"></ion-icon> -->\n                <span>{{c.title}}</span>\n              </div>\n              <div class=\"competition-info\">\n                <!-- <ion-icon name=\"person-outline\"></ion-icon> -->\n                <span>{{c.competitionCategory}}</span>\n              </div>\n              <div class=\"competition-info\">\n                <ion-icon name=\"person-outline\"></ion-icon>\n                <span>{{c.minAge}} - {{c.maxAge}}</span>\n              </div>\n              <div class=\"competition-info\">\n                <ion-icon name=\"calendar-outline\"></ion-icon>\n                <span>{{c.startDate}}</span>\n              </div>\n              <!-- <div class=\"competition-fee\">\n                <span>Start from</span>\n                <b>INR : {{c.subscriptionPrice != null ? c.subscriptionPrice : 'Free'}}</b>\n              </div> -->\n            </div>\n            <div class=\"rightSection\">\n            <div class=\"competition-fee\">\n              <!-- <span>Start from</span> -->\n              <p >Start from</p>\n              <b > {{c.subscriptionPrice != null ? 'Rs. ' + c.subscriptionPrice : 'Free'}}</b>\n            </div>\n            <!-- &nbsp;  -->\n            <div *ngIf=\"c.isUserEnrolled != true\">\n              <ion-button fill=\"outline\" shape=\"round\" (click)=\"enroll(c)\" class=\"custom-button\">\n                <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n                Enroll\n            </ion-button>   \n            <ion-grid *ngIf=\"c.isUserEnrolled == true\">\n              <ion-row>\n                    <ion-label>Enrolled</ion-label>\n                  <ion-text>Tap on card to for more details</ion-text>\n              </ion-row>\n            </ion-grid>         \n            </div>\n          </div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-col *ngIf=\"!contests || contests.length < 1\">\n      <div class=\"no-data-card ion-text-center\">\n        <div class=\"icon-container\">\n          <img src=\"assets/img/Group 33596.png\" alt=\"No Upcoming Participate Icon\" />\n        </div>\n        <h3>No Upcoming Competition</h3>\n        <!-- <p>Please Comeback after a while</p> -->\n        <ion-button color=\"danger\" expand=\"block\">Explore Competition</ion-button>\n      </div>\n    </ion-col>    \n  </ion-grid>\n</ion-content>\n\n\n<!-- <app-footer></app-footer> -->\n");

/***/ }),

/***/ "./src/app/pages/participate-in-comp/participate-in-comp-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/participate-in-comp/participate-in-comp-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ParticipateInCompPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipateInCompPageRoutingModule", function() { return ParticipateInCompPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _participate_in_comp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participate-in-comp.page */ "./src/app/pages/participate-in-comp/participate-in-comp.page.ts");




var routes = [
    {
        path: '',
        component: _participate_in_comp_page__WEBPACK_IMPORTED_MODULE_3__["ParticipateInCompPage"]
    }
];
var ParticipateInCompPageRoutingModule = /** @class */ (function () {
    function ParticipateInCompPageRoutingModule() {
    }
    ParticipateInCompPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ParticipateInCompPageRoutingModule);
    return ParticipateInCompPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/participate-in-comp/participate-in-comp.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/participate-in-comp/participate-in-comp.module.ts ***!
  \*************************************************************************/
/*! exports provided: ParticipateInCompPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipateInCompPageModule", function() { return ParticipateInCompPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _participate_in_comp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./participate-in-comp-routing.module */ "./src/app/pages/participate-in-comp/participate-in-comp-routing.module.ts");
/* harmony import */ var _participate_in_comp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./participate-in-comp.page */ "./src/app/pages/participate-in-comp/participate-in-comp.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var ParticipateInCompPageModule = /** @class */ (function () {
    function ParticipateInCompPageModule() {
    }
    ParticipateInCompPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _participate_in_comp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParticipateInCompPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_participate_in_comp_page__WEBPACK_IMPORTED_MODULE_6__["ParticipateInCompPage"]]
        })
    ], ParticipateInCompPageModule);
    return ParticipateInCompPageModule;
}());



/***/ }),

/***/ "./src/app/pages/participate-in-comp/participate-in-comp.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/participate-in-comp/participate-in-comp.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-chip {\n  background: var(--ion-color-success);\n  color: white !important;\n}\n\n.competition-card {\n  border: 1px solid #ccc;\n  padding: 16px;\n  margin: 16px;\n  border-radius: 8px;\n}\n\n.competition-card img {\n  max-width: 100%;\n  height: auto;\n}\n\n/* ion-header adjustments */\n\nion-header::after {\n  background-image: none !important;\n  /* Uncomment the line below if you want to add a background image */\n  /* background-image: url(assets/icon/bg3.png); */\n  /* background-size: 100% 100%; */\n}\n\n/* Toolbar background and color adjustments */\n\nion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: black !important;\n  /* Ensures text appears in black */\n}\n\n/* Chip styling */\n\nion-chip {\n  background: var(--ion-color-success);\n  color: white !important;\n}\n\n/* Card styling */\n\n.competition-card {\n  border: 1px solid #ccc;\n  padding: 16px;\n  margin: 16px;\n  border-radius: 8px;\n}\n\n.competition-card img {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Styles for the competition card */\n\n.competition-card-img {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.competition-card-img img {\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n}\n\n/* Back icon styling */\n\n.back-icon {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  font-size: 24px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Slightly dark background for contrast */\n  padding: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 10;\n}\n\n.black-background {\n  background-color: black;\n  height: 200px;\n  /* Adjust as needed */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  /* Color for the icon */\n}\n\nion-tab-button.selected {\n  --color: #0072FF;\n  /* Color for selected tab label */\n  background-color: rgba(255, 255, 255, 0.1);\n  /* Optional: Background color for the selected tab */\n}\n\n/* Change color of the selected icon */\n\nion-tab-button.selected ion-icon {\n  color: #0072FF;\n  /* Color for the selected tab icon */\n}\n\n/* Change color of the selected label */\n\nion-tab-button.selected ion-label {\n  color: #0072FF;\n  /* Color for the selected tab label */\n}\n\n/* Color for unselected tab icons */\n\nion-tab-button ion-icon {\n  color: #A9A9A9;\n  /* Ash color for unselected tab icons */\n}\n\n/* Color for unselected tab labels */\n\nion-tab-button ion-label {\n  color: white;\n  /* Maintain white for unselected tab labels */\n}\n\n.competition-card-details {\n  position: absolute;\n  bottom: 9px;\n  left: 16px;\n  right: 16px;\n  height: 83px;\n  background-color: rgba(50, 50, 50, 0.3);\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n}\n\n.competition-card-details ion-card-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.competition-info {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  margin: 0 8px;\n  /* Space between items */\n}\n\n.competition-info ion-icon {\n  margin-right: 4px;\n  /* Space between icon and text */\n}\n\n.competition-fee p {\n  font-size: 10px;\n  margin: 0;\n}\n\n.competition-fee b {\n  font-size: 16px;\n  margin: 0;\n}\n\n/* Enroll button styling */\n\n.enroll-buttonn {\n  width: 100%;\n  background-color: #ff5722 !important;\n  /* Bright orange color */\n  color: white !important;\n  text-transform: none;\n}\n\n.competition-card-img {\n  position: relative;\n  /* Maintain aspect ratio for better layout */\n  padding-bottom: 56.25%;\n  /* Adjust this percentage as needed */\n}\n\n.competition-card-img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 11.625rem;\n}\n\n/* When image is missing, display a placeholder or alternative content */\n\n.competition-card-img:empty {\n  background-color: #f0f0f0;\n  /* Placeholder background color */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Style the placeholder content */\n\n.competition-card-img:empty ion-icon {\n  font-size: 48px;\n  color: #ccc;\n}\n\n.custom-button {\n  --color: #fff;\n  /* Text color */\n  background: #ff512c;\n  /* Outline color */\n  border-radius: 64px;\n}\n\n.rightSection {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFydGljaXBhdGUtaW4tY29tcC9EOlxcRGhpeW9UZWNoUFZUTFREXFxTdXJzaHJlZVxcdXBkYXRlZCBzdXJzaHJlZVxcU3Vyc2hyZWVXZWJWZXJzaW9uXFxTdXJzaHJlZVdlYlZlcnNpb24vc3JjXFxhcHBcXHBhZ2VzXFxwYXJ0aWNpcGF0ZS1pbi1jb21wXFxwYXJ0aWNpcGF0ZS1pbi1jb21wLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFydGljaXBhdGUtaW4tY29tcC9wYXJ0aWNpcGF0ZS1pbi1jb21wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQSwyQkFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0EsbUVBQUE7RUFDQSxnREFBQTtFQUNBLGdDQUFBO0FDQUY7O0FER0EsNkNBQUE7O0FBQ0E7RUFDRSw4QkFBQTtFQUFnQyx3Q0FBQTtFQUNoQyxrQ0FBQTtFQUFvQyxvREFBQTtFQUNwQyxrQ0FBQTtFQUFvQyxrQ0FBQTtBQ0d0Qzs7QURBQSxpQkFBQTs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQSxpQkFBQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNHRjs7QURDQSxvQ0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBLHNCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFBc0MsMENBQUE7RUFDdEMsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUFlLHFCQUFBO0VBQ2YsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQWMsdUJBQUE7QUNNaEI7O0FESEE7RUFDRSxnQkFBQTtFQUFrQixpQ0FBQTtFQUNsQiwwQ0FBQTtFQUE0QyxvREFBQTtBQ1E5Qzs7QURMQSxzQ0FBQTs7QUFDQTtFQUNFLGNBQUE7RUFBZ0Isb0NBQUE7QUNTbEI7O0FETkEsdUNBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQWdCLHFDQUFBO0FDVWxCOztBRFBBLG1DQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUFnQix1Q0FBQTtBQ1dsQjs7QURSQSxvQ0FBQTs7QUFDQTtFQUNFLFlBQUE7RUFBYyw2Q0FBQTtBQ1loQjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2FGOztBRFRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDWUY7O0FEVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUFlLHdCQUFBO0FDYWpCOztBRFZBO0VBQ0UsaUJBQUE7RUFBbUIsZ0NBQUE7QUNjckI7O0FEWEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ2NGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNjRjs7QURYQSwwQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUFzQyx3QkFBQTtFQUN0Qyx1QkFBQTtFQUNBLG9CQUFBO0FDZUY7O0FEYkE7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFBd0IscUNBQUE7QUNpQjFCOztBRGRBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2lCRjs7QURaQSx3RUFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQTJCLGlDQUFBO0VBQzNCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZ0JGOztBRGJBLGtDQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNnQkY7O0FEYkE7RUFDRSxhQUFBO0VBQWUsZUFBQTtFQUNmLG1CQUFBO0VBQXFCLGtCQUFBO0VBQ3JCLG1CQUFBO0FDa0JGOztBRGRBO0VBQ0UsWUFBQTtBQ2lCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcnRpY2lwYXRlLWluLWNvbXAvcGFydGljaXBhdGUtaW4tY29tcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWNoaXB7XG4gIGJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yIDogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBpb24taGVhZGVyIGFkanVzdG1lbnRzICovXG5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLyogVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGlmIHlvdSB3YW50IHRvIGFkZCBhIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pY29uL2JnMy5wbmcpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgKi9cbn1cblxuLyogVG9vbGJhciBiYWNrZ3JvdW5kIGFuZCBjb2xvciBhZGp1c3RtZW50cyAqL1xuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG59XG5cbi8qIENoaXAgc3R5bGluZyAqL1xuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBDYXJkIHN0eWxpbmcgKi9cbi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi8qIFN0eWxlcyBmb3IgdGhlIGNvbXBldGl0aW9uIGNhcmQgKi9cbi5jb21wZXRpdGlvbi1jYXJkLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbXBldGl0aW9uLWNhcmQtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi8qIEJhY2sgaWNvbiBzdHlsaW5nICovXG4uYmFjay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNsaWdodGx5IGRhcmsgYmFja2dyb3VuZCBmb3IgY29udHJhc3QgKi9cbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTA7XG59XG4uYmxhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDIwMHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7IC8qIENvbG9yIGZvciB0aGUgaWNvbiAqL1xufVxuXG5pb24tdGFiLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIC0tY29sb3I6ICMwMDcyRkY7IC8qIENvbG9yIGZvciBzZWxlY3RlZCB0YWIgbGFiZWwgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAvKiBPcHRpb25hbDogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHNlbGVjdGVkIHRhYiAqL1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGljb24gKi9cbmlvbi10YWItYnV0dG9uLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDcyRkY7IC8qIENvbG9yIGZvciB0aGUgc2VsZWN0ZWQgdGFiIGljb24gKi9cbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBsYWJlbCAqL1xuaW9uLXRhYi1idXR0b24uc2VsZWN0ZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDcyRkY7IC8qIENvbG9yIGZvciB0aGUgc2VsZWN0ZWQgdGFiIGxhYmVsICovXG59XG5cbi8qIENvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xuaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI0E5QTlBOTsgLyogQXNoIGNvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xufVxuXG4vKiBDb2xvciBmb3IgdW5zZWxlY3RlZCB0YWIgbGFiZWxzICovXG5pb24tdGFiLWJ1dHRvbiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7IC8qIE1haW50YWluIHdoaXRlIGZvciB1bnNlbGVjdGVkIHRhYiBsYWJlbHMgKi9cbn1cbi5jb21wZXRpdGlvbi1jYXJkLWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOXB4O1xuICBsZWZ0OiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5jb21wZXRpdGlvbi1jYXJkLWRldGFpbHMgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tcGV0aXRpb24taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDhweDsgLyogU3BhY2UgYmV0d2VlbiBpdGVtcyAqL1xufVxuXG4uY29tcGV0aXRpb24taW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cbn1cblxuLmNvbXBldGl0aW9uLWZlZSBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wZXRpdGlvbi1mZWUgYiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBFbnJvbGwgYnV0dG9uIHN0eWxpbmcgKi9cbi5lbnJvbGwtYnV0dG9ubiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7IC8qIEJyaWdodCBvcmFuZ2UgY29sb3IgKi9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLmNvbXBldGl0aW9uLWNhcmQtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gZm9yIGJldHRlciBsYXlvdXQgKi9cbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogQWRqdXN0IHRoaXMgcGVyY2VudGFnZSBhcyBuZWVkZWQgKi9cbn1cblxuLmNvbXBldGl0aW9uLWNhcmQtaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMS42MjVyZW07XG4vLyAgaGVpZ2h0OiAxMDAlO1xuIC8vIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBFbnN1cmUgaW1hZ2UgZmlsbHMgdGhlIGNvbnRhaW5lciAqL1xufVxuXG4vKiBXaGVuIGltYWdlIGlzIG1pc3NpbmcsIGRpc3BsYXkgYSBwbGFjZWhvbGRlciBvciBhbHRlcm5hdGl2ZSBjb250ZW50ICovXG4uY29tcGV0aXRpb24tY2FyZC1pbWc6ZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBQbGFjZWhvbGRlciBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgcGxhY2Vob2xkZXIgY29udGVudCAqL1xuLmNvbXBldGl0aW9uLWNhcmQtaW1nOmVtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogI2NjYztcbn1cblxuLmN1c3RvbS1idXR0b24ge1xuICAtLWNvbG9yOiAjZmZmOyAvKiBUZXh0IGNvbG9yICovXG4gIGJhY2tncm91bmQ6ICNmZjUxMmM7IC8qIE91dGxpbmUgY29sb3IgKi9cbiAgYm9yZGVyLXJhZGl1czogNjRweDtcblxufVxuXG4ucmlnaHRTZWN0aW9ue1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCJpb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBpb24taGVhZGVyIGFkanVzdG1lbnRzICovXG5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLyogVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGlmIHlvdSB3YW50IHRvIGFkZCBhIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pY29uL2JnMy5wbmcpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgKi9cbn1cblxuLyogVG9vbGJhciBiYWNrZ3JvdW5kIGFuZCBjb2xvciBhZGp1c3RtZW50cyAqL1xuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG59XG5cbi8qIENoaXAgc3R5bGluZyAqL1xuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBDYXJkIHN0eWxpbmcgKi9cbi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBTdHlsZXMgZm9yIHRoZSBjb21wZXRpdGlvbiBjYXJkICovXG4uY29tcGV0aXRpb24tY2FyZC1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4vKiBCYWNrIGljb24gc3R5bGluZyAqL1xuLmJhY2staWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBTbGlnaHRseSBkYXJrIGJhY2tncm91bmQgZm9yIGNvbnRyYXN0ICovXG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYmxhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDIwMHB4O1xuICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIENvbG9yIGZvciB0aGUgaWNvbiAqL1xufVxuXG5pb24tdGFiLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIC0tY29sb3I6ICMwMDcyRkY7XG4gIC8qIENvbG9yIGZvciBzZWxlY3RlZCB0YWIgbGFiZWwgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAvKiBPcHRpb25hbDogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHNlbGVjdGVkIHRhYiAqL1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGljb24gKi9cbmlvbi10YWItYnV0dG9uLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDcyRkY7XG4gIC8qIENvbG9yIGZvciB0aGUgc2VsZWN0ZWQgdGFiIGljb24gKi9cbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBsYWJlbCAqL1xuaW9uLXRhYi1idXR0b24uc2VsZWN0ZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDcyRkY7XG4gIC8qIENvbG9yIGZvciB0aGUgc2VsZWN0ZWQgdGFiIGxhYmVsICovXG59XG5cbi8qIENvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xuaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI0E5QTlBOTtcbiAgLyogQXNoIGNvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xufVxuXG4vKiBDb2xvciBmb3IgdW5zZWxlY3RlZCB0YWIgbGFiZWxzICovXG5pb24tdGFiLWJ1dHRvbiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIE1haW50YWluIHdoaXRlIGZvciB1bnNlbGVjdGVkIHRhYiBsYWJlbHMgKi9cbn1cblxuLmNvbXBldGl0aW9uLWNhcmQtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDgzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkLWRldGFpbHMgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tcGV0aXRpb24taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgLyogU3BhY2UgYmV0d2VlbiBpdGVtcyAqL1xufVxuXG4uY29tcGV0aXRpb24taW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICAvKiBTcGFjZSBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cbn1cblxuLmNvbXBldGl0aW9uLWZlZSBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wZXRpdGlvbi1mZWUgYiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBFbnJvbGwgYnV0dG9uIHN0eWxpbmcgKi9cbi5lbnJvbGwtYnV0dG9ubiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG4gIC8qIEJyaWdodCBvcmFuZ2UgY29sb3IgKi9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uY29tcGV0aXRpb24tY2FyZC1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIE1haW50YWluIGFzcGVjdCByYXRpbyBmb3IgYmV0dGVyIGxheW91dCAqL1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICAvKiBBZGp1c3QgdGhpcyBwZXJjZW50YWdlIGFzIG5lZWRlZCAqL1xufVxuXG4uY29tcGV0aXRpb24tY2FyZC1pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExLjYyNXJlbTtcbn1cblxuLyogV2hlbiBpbWFnZSBpcyBtaXNzaW5nLCBkaXNwbGF5IGEgcGxhY2Vob2xkZXIgb3IgYWx0ZXJuYXRpdmUgY29udGVudCAqL1xuLmNvbXBldGl0aW9uLWNhcmQtaW1nOmVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgLyogUGxhY2Vob2xkZXIgYmFja2dyb3VuZCBjb2xvciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQgKi9cbi5jb21wZXRpdGlvbi1jYXJkLWltZzplbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5jdXN0b20tYnV0dG9uIHtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLyogVGV4dCBjb2xvciAqL1xuICBiYWNrZ3JvdW5kOiAjZmY1MTJjO1xuICAvKiBPdXRsaW5lIGNvbG9yICovXG4gIGJvcmRlci1yYWRpdXM6IDY0cHg7XG59XG5cbi5yaWdodFNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/participate-in-comp/participate-in-comp.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/participate-in-comp/participate-in-comp.page.ts ***!
  \***********************************************************************/
/*! exports provided: ParticipateInCompPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipateInCompPage", function() { return ParticipateInCompPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/competition/competition.service */ "./src/app/services/competition/competition.service.ts");
/* harmony import */ var src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/master/master-data.service */ "./src/app/services/master/master-data.service.ts");
/* harmony import */ var src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/payment/payment.service */ "./src/app/services/payment/payment.service.ts");








var ParticipateInCompPage = /** @class */ (function () {
    function ParticipateInCompPage(ls, util, r, compSrvc, router, payService, mst) {
        var _this = this;
        this.ls = ls;
        this.util = util;
        this.r = r;
        this.compSrvc = compSrvc;
        this.router = router;
        this.payService = payService;
        this.mst = mst;
        this.showProgressBar = false;
        this.enrollments = [];
        this.firstTimeLoad = true;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.reloadComponentData();
            }
        });
    }
    ParticipateInCompPage.prototype.ngOnInit = function () {
        this.reloadComponentData();
    };
    ParticipateInCompPage.prototype.reloadComponentData = function () {
        this.showProgressBar = true;
        this.setCompetitionsAndEnrollments();
        this.setUserDetails();
        this.showProgressBar = false;
        this.firstTimeLoad = false;
    };
    ParticipateInCompPage.prototype.setUserDetails = function () {
        var _this = this;
        console.log('fname -->', this.ls.getUser().firstName);
        if (!this.ls.getUser().firstName) {
            this.ls.loadUserInfo().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ls.setUser(res).then(function (res) { return res; })];
                        case 1:
                            _a.sent();
                            this.userFullName = this.ls.getFullName();
                            return [2 /*return*/];
                    }
                });
            }); });
            this.userFullName = this.ls.getFullName();
        }
    };
    ParticipateInCompPage.prototype.setCompetitionsAndEnrollments = function () {
        var _this = this;
        this.compSrvc
            .getActiveCompetitions()
            .subscribe(function (res) {
            _this.contests = res;
            console.log(res);
            _this.getAllEnrollments();
        }, function (err) {
            console.log('Welcome', err);
            _this.markRefreshComplete();
        });
    };
    ParticipateInCompPage.prototype.getAllEnrollments = function () {
        var _this = this;
        this.compSrvc
            .getAllEnrolments()
            .subscribe(function (res) {
            _this.enrollments = res;
            console.log(res);
            if (res) {
                res.forEach(function (e) { return _this.updateEnrollmentStatus(e.competitionId); });
                _this.showProgressBar = false;
                _this.markRefreshComplete();
            }
        }, function (err) {
            _this.util.errorHandler(err);
            _this.markRefreshComplete();
        });
    };
    ParticipateInCompPage.prototype.updateEnrollmentStatus = function (compId) {
        this.contests.forEach(function (c) {
            if (c.competitionId === compId) {
                c.isUserEnrolled = true;
            }
        });
    };
    ParticipateInCompPage.prototype.enroll = function (comp) {
        var _this = this;
        if (comp.isSubscriptionRequired === '0') {
            this.compSrvc
                .enrollInComp(comp.competitionId)
                .subscribe(function (res) {
                _this.getAllEnrollments();
                _this.util.success('You successfully enrolled into the competition. Now upload your singing video.');
            }, function (err) { return _this.util.errorHandler(err); });
        }
        else if (comp.isSubscriptionRequired === '1') {
            this.openSubmittedEntryPage(comp.competitionId);
        }
    };
    ParticipateInCompPage.prototype.openSubmittedEntryPage = function (compId) {
        this.router.navigateByUrl("upload-entry/" + compId);
    };
    ParticipateInCompPage.prototype.markRefreshComplete = function () {
        if (this.refreshEvent) {
            this.refreshEvent.target.complete();
        }
    };
    ParticipateInCompPage.prototype.loadData = function () {
        console.log('Data fetched:');
    };
    ParticipateInCompPage.ctorParameters = function () { return [
        { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_5__["CompetitionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"] },
        { type: src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"] }
    ]; };
    ParticipateInCompPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participate-in-comp',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./participate-in-comp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/participate-in-comp/participate-in-comp.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./participate-in-comp.page.scss */ "./src/app/pages/participate-in-comp/participate-in-comp.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_5__["CompetitionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"],
            src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"]])
    ], ParticipateInCompPage);
    return ParticipateInCompPage;
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



/***/ }),

/***/ "./src/app/services/payment/payment.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/payment/payment.service.ts ***!
  \*****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/GlobalConstants */ "./src/app/models/GlobalConstants.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var PaymentService = /** @class */ (function () {
    function PaymentService(util, ls) {
        this.util = util;
        this.ls = ls;
        this.paymentId = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.paymentError = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
    }
    PaymentService.prototype.getPaymentId = function () {
        return this.paymentId;
    };
    PaymentService.prototype.getPaymentError = function () {
        return this.paymentError;
    };
    PaymentService.prototype.payWithRazorpay = function (amount, desc) {
        var _this = this;
        var options = {
            description: desc,
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: "INR",
            key: src_app_models_GlobalConstants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].razorPkey,
            amount: amount,
            name: 'Razorpay',
            prefill: {
                email: 'test@razorpay.com',
                contact: '9990009991',
                name: 'Razorpay'
            },
            theme: {
                color: '#3880ff'
            },
            modal: {
                ondismiss: function () {
                    _this.util.success('Payment has been Cancelled.');
                }
            }
        };
        var successCallback = function (payment_id) {
            _this.util.success('Processing the payment in our system. Please save the order ID for future reference : ' + payment_id);
            console.log("payment_id -->", payment_id);
            _this.getPaymentId().next(payment_id);
        };
        var cancelCallback = function (error) {
            _this.util.errorMsg('Error occured while processing your payment. PLease try again after some time.');
            console.log('error in payment --> ', error, error.description + ' (Error ' + error.code + ')');
            _this.getPaymentError().next(error);
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    PaymentService.ctorParameters = function () { return [
        { type: _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ })

}]);
//# sourceMappingURL=10.js.map