(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-details/user-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-details/user-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/pages/user-details/user-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-details/user-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageRoutingModule", function() { return UserDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");




var routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailsPage"]
    }
];
var UserDetailsPageRoutingModule = /** @class */ (function () {
    function UserDetailsPageRoutingModule() {
    }
    UserDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserDetailsPageRoutingModule);
    return UserDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/user-details/user-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-details-routing.module */ "./src/app/pages/user-details/user-details-routing.module.ts");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var UserDetailsPageModule = /** @class */ (function () {
    function UserDetailsPageModule() {
    }
    UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _user_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDetailsPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
        })
    ], UserDetailsPageModule);
    return UserDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDetailsPage = /** @class */ (function () {
    function UserDetailsPage() {
    }
    UserDetailsPage.prototype.ngOnInit = function () {
    };
    UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-details/user-details.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/user-details/user-details.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDetailsPage);
    return UserDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=20.js.map