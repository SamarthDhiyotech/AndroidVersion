(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>FAQ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card (click)=\"expandItem(faq)\" *ngFor=\"let faq of faqs; let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle [color]=\"faq.expanded ? 'primary' : ''\">{{i +1}}. {{faq.q}}</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/pages/faq/faq-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");




var routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
var FaqPageRoutingModule = /** @class */ (function () {
    function FaqPageRoutingModule() {
    }
    FaqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FaqPageRoutingModule);
    return FaqPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/faq/faq.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqPage = /** @class */ (function () {
    function FaqPage() {
        this.faqs = [];
    }
    FaqPage.prototype.ngOnInit = function () {
        this.faqs = [
            {
                q: "What is “Garbh Vigyan” App?",
                a: "This application will work from Day 1 of pregnancy. This will provide activity and material day to day basis on this application.",
                expanded: false
            },
            {
                q: "Is this application will guide medically?",
                a: 'No. For all medical related query and your current problem, you must consult with your doctor only.',
                expanded: false
            },
            {
                q: "Is this internet required for this application?",
                a: "Yes.",
                expanded: false
            },
            {
                q: "Can I share or gift this app to other?",
                a: "Yes. Share option is available in mobile application.",
                expanded: false
            },
            {
                q: "Is there any fix time to use this app?",
                a: "No. Content in the application are update as the calendar date changed. So you must have\n        to visit the application before that.",
                expanded: false
            },
            {
                q: "What to do if any of content, we need to view or listen repeatedly?",
                a: "You can save the content and refer in future, but there will be limitation of content to be\n        marked as save.",
                expanded: false
            },
            {
                q: "What to do if we didn\u2019t understood of the content available?",
                a: "You can write in \u201Cask a Question\u201D section. Our expert team will contact you soon.",
                expanded: false
            },
            {
                q: "If I have 2 months of pregnancy when I join the application. Can I get the previous data at time\n        of joining?",
                a: "No. The activity in app are designed in day basis and scientifically as per development of\n        unborn child in the womb, so don\u2019t worry.",
                expanded: false
            },
            {
                q: "If I am working women, can I spend that much time on the app?",
                a: "We designed app in such a way that audible data will be available for each section. So you\n        can easily listen while doing work too.",
                expanded: false
            },
            {
                q: "If I want to Sanskar, whom should I contact?",
                a: "Use \u201CSanskar Request\u201D option and fill the basic details. Nearby yagyacharya will contact and\n        perform yagya at your place.",
                expanded: false
            },
            {
                q: "Why pregnant lady family information required here?",
                a: "This application will update the family members about the development of child\n        scientifically and inform them to taking care of yours. It will also help them meditation, dhyan\n        and other so many knowledge.",
                expanded: false
            },
            {
                q: "Can I share the content of the app?",
                a: "No.",
                expanded: false
            }
        ];
    };
    FaqPage.prototype.expandItem = function (faq) {
        if (faq.expanded) {
            faq.expanded = false;
        }
        else {
            this.faqs.map(function (f) {
                if (faq == f) {
                    f.expanded = !f.expanded;
                }
                else {
                    f.expanded = false;
                }
                return f;
            });
        }
    };
    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/faq/faq.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqPage);
    return FaqPage;
}());



/***/ })

}]);
//# sourceMappingURL=15.js.map