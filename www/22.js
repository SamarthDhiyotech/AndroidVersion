(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vision/vision.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vision/vision.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mission & Vision</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"ion-text-justify\">\n    Gayatri Pariwar is a living model of a futuristic society, being guided by principles of human unity and equality.\n    <div>\n      <br>\n      <div>\n        It's a modern adoption of the age old wisdom of Vedic Rishis, who practiced and propagated the philosophy of <i>Vasudhaiva Kutumbakam</i>.\n      </div>\n      <div><br></div>\n      <div>\n        Founded by saint, reformer, writer, philosopher, spiritual guide and visionary Yug Rishi Pandit Shriram Sharma Acharya this mission has emerged as a mass movement for Transformation of Era.\n      </div>\n      <div>\n        <br>\n      </div>\n      <div>\n        <ion-label color=\"primary\"><b>Aims &amp; Objectives:</b></ion-label>\n        <br>\n        <ul>\n          <li>Rise of divinity in human, descent of heaven on earth</li>\n          <li class=\"ion-padding-top\">Individual Development, Family Development and Social Upliftment</li>\n          <li class=\"ion-padding-top\">Healthy body, pure mind and civilized society</li>\n          <li class=\"ion-padding-top\">Atmavat sarvabhooteshu (<i><b>all living beings are soulkins)</b></i>, Vashudhaiv kutumbkam (<i><b>Entire earth is the our family)</b></i></li>\n          <li class=\"ion-padding-top\">One Nation, One Language <i><b>(love)</b></i>, One Religion <i><b>(humanity),</b></i> One Government <i><b>(Self Govern</b></i>)</li>\n          <li class=\"ion-padding-top\">Everyone should get equal opportunity for self-growth irrespective of caste, color or creed</li> \n        </ul>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<!-- <app-footer></app-footer> -->\n");

/***/ }),

/***/ "./src/app/pages/vision/vision-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/vision/vision-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VisionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionPageRoutingModule", function() { return VisionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vision_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vision.page */ "./src/app/pages/vision/vision.page.ts");




var routes = [
    {
        path: '',
        component: _vision_page__WEBPACK_IMPORTED_MODULE_3__["VisionPage"]
    }
];
var VisionPageRoutingModule = /** @class */ (function () {
    function VisionPageRoutingModule() {
    }
    VisionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VisionPageRoutingModule);
    return VisionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/vision/vision.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/vision/vision.module.ts ***!
  \***********************************************/
/*! exports provided: VisionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionPageModule", function() { return VisionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _vision_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vision-routing.module */ "./src/app/pages/vision/vision-routing.module.ts");
/* harmony import */ var _vision_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vision.page */ "./src/app/pages/vision/vision.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var VisionPageModule = /** @class */ (function () {
    function VisionPageModule() {
    }
    VisionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _vision_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisionPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_vision_page__WEBPACK_IMPORTED_MODULE_6__["VisionPage"]]
        })
    ], VisionPageModule);
    return VisionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/vision/vision.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/vision/vision.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc2lvbi92aXNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/vision/vision.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/vision/vision.page.ts ***!
  \*********************************************/
/*! exports provided: VisionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionPage", function() { return VisionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VisionPage = /** @class */ (function () {
    function VisionPage() {
    }
    VisionPage.prototype.ngOnInit = function () {
    };
    VisionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vision',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vision.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vision/vision.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vision.page.scss */ "./src/app/pages/vision/vision.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VisionPage);
    return VisionPage;
}());



/***/ })

}]);
//# sourceMappingURL=22.js.map