(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/app/pages/popovers/view-video/view-video-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/popovers/view-video/view-video-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoPageRoutingModule", function() { return ViewVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-video.page */ "./src/app/pages/popovers/view-video/view-video.page.ts");




var routes = [
    {
        path: '',
        component: _view_video_page__WEBPACK_IMPORTED_MODULE_3__["ViewVideoPage"]
    }
];
var ViewVideoPageRoutingModule = /** @class */ (function () {
    function ViewVideoPageRoutingModule() {
    }
    ViewVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewVideoPageRoutingModule);
    return ViewVideoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/popovers/view-video/view-video.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/popovers/view-video/view-video.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoPageModule", function() { return ViewVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _view_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-video-routing.module */ "./src/app/pages/popovers/view-video/view-video-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "./src/app/pages/material.module.ts");







var ViewVideoPageModule = /** @class */ (function () {
    function ViewVideoPageModule() {
    }
    ViewVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewVideoPageRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            declarations: []
        })
    ], ViewVideoPageModule);
    return ViewVideoPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=25.js.map