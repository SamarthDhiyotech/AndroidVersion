(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./src/app/pages/popovers/language/language-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/popovers/language/language-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: LanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageRoutingModule", function() { return LanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.page */ "./src/app/pages/popovers/language/language.page.ts");




var routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePage"]
    }
];
var LanguagePageRoutingModule = /** @class */ (function () {
    function LanguagePageRoutingModule() {
    }
    LanguagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LanguagePageRoutingModule);
    return LanguagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/popovers/language/language.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/popovers/language/language.module.ts ***!
  \************************************************************/
/*! exports provided: LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-routing.module */ "./src/app/pages/popovers/language/language-routing.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/pages/shared.module.ts");







var LanguagePageModule = /** @class */ (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _language_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagePageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: []
        })
    ], LanguagePageModule);
    return LanguagePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=24.js.map