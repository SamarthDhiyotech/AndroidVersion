(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-competitions/manage-competitions.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-competitions/manage-competitions.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Manage</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/manage-competition-entries', '']\" *ngIf=\"ls.hasFunction('FUNC_VIEW_ADMIN_MENU')\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">Search Criteria</ion-card-title>\n      <ion-card-subtitle class=\"ion-text-center\" color=\"tertiary\">Enter/Select more values for refiend search</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Competition ID</ion-label>\n        <ion-input maxlength=\"6\" type=\"tel\" [formControl]=\"compId\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Competition Start Date</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" [formControl]=\"startDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Competition End Date</ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" [formControl]=\"endDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Status</ion-label>\n        <ion-select placeholder=\"--Select Status--\" [formControl]=\"isActive\">\n          <ion-select-option value=\"1\">Active</ion-select-option>\n          <ion-select-option value=\"0\">Inactive</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Result Status</ion-label>\n        <ion-select placeholder=\"--Select Result Status--\" [formControl]=\"isWinnerAnnounced\">\n          <ion-select-option value=\"1\">Winner Announced</ion-select-option>\n          <ion-select-option value=\"0\">Winner Not Announced</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <br/>\n      <div class=\"ion-text-center\">\n        <ion-button shape=\"round\" (click)=\"search()\">\n          <ion-icon name=\"search-outline\" slot=\"start\" ></ion-icon>\n          Search\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list *ngIf=\"competitions.length > 0\">\n    <ion-list-header class=\"ion-text-center\">\n        <ion-label color=\"tertiary\">Showing All <b>{{competitions.length}}</b> Results</ion-label>\n    </ion-list-header>\n\n    <ion-item button detail *ngFor=\"let comp of competitions let i = index\" [routerLink]=\"['/upload-entry', comp.competitionId]\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{util.getFullUrl('file/') + comp.compPhoto}}\">\n      </ion-thumbnail>\n      <ion-label color=\"tertiary\" class=\"ion-text-wrap\">\n        <h3>{{i + 1}} {{comp.title}}</h3>\n        <p>{{comp.description}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <br/>\n\n  <ion-item *ngIf=\"showError && competitions.length < 1\">\n    <ion-label color=\"danger\" class=\"ion-text-center\"><b>No Records Found.</b></ion-label>\n  </ion-item>\n\n  <!-- Dots -->\n  <div class=\"ion-text-center\" *ngIf=\"showProgressBar\">\n    <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner> \n  </div>\n\n</ion-content>\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/models/SearchModel.ts":
/*!***************************************!*\
  !*** ./src/app/models/SearchModel.ts ***!
  \***************************************/
/*! exports provided: SearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModel", function() { return SearchModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SearchModel = /** @class */ (function () {
    function SearchModel() {
    }
    return SearchModel;
}());



/***/ }),

/***/ "./src/app/pages/manage-competitions/manage-competitions-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manage-competitions/manage-competitions-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ManageCompetitionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCompetitionsPageRoutingModule", function() { return ManageCompetitionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_competitions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-competitions.page */ "./src/app/pages/manage-competitions/manage-competitions.page.ts");




var routes = [
    {
        path: '',
        component: _manage_competitions_page__WEBPACK_IMPORTED_MODULE_3__["ManageCompetitionsPage"]
    }
];
var ManageCompetitionsPageRoutingModule = /** @class */ (function () {
    function ManageCompetitionsPageRoutingModule() {
    }
    ManageCompetitionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManageCompetitionsPageRoutingModule);
    return ManageCompetitionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-competitions/manage-competitions.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-competitions/manage-competitions.module.ts ***!
  \*************************************************************************/
/*! exports provided: ManageCompetitionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCompetitionsPageModule", function() { return ManageCompetitionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _manage_competitions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-competitions-routing.module */ "./src/app/pages/manage-competitions/manage-competitions-routing.module.ts");
/* harmony import */ var _manage_competitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-competitions.page */ "./src/app/pages/manage-competitions/manage-competitions.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var ManageCompetitionsPageModule = /** @class */ (function () {
    function ManageCompetitionsPageModule() {
    }
    ManageCompetitionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _manage_competitions_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageCompetitionsPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_manage_competitions_page__WEBPACK_IMPORTED_MODULE_6__["ManageCompetitionsPage"]]
        })
    ], ManageCompetitionsPageModule);
    return ManageCompetitionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-competitions/manage-competitions.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-competitions/manage-competitions.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1jb21wZXRpdGlvbnMvbWFuYWdlLWNvbXBldGl0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/manage-competitions/manage-competitions.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/manage-competitions/manage-competitions.page.ts ***!
  \***********************************************************************/
/*! exports provided: ManageCompetitionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCompetitionsPage", function() { return ManageCompetitionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/competition/competition.service */ "./src/app/services/competition/competition.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_SearchModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/SearchModel */ "./src/app/models/SearchModel.ts");
/* harmony import */ var src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/master/master-data.service */ "./src/app/services/master/master-data.service.ts");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");








var ManageCompetitionsPage = /** @class */ (function () {
    function ManageCompetitionsPage(util, compSrvc, fb, mst, ls) {
        this.util = util;
        this.compSrvc = compSrvc;
        this.fb = fb;
        this.mst = mst;
        this.ls = ls;
        this.showError = false;
        this.competitions = [];
        this.showProgressBar = false;
        this.initializeSearchForm();
    }
    ManageCompetitionsPage.prototype.initializeSearchForm = function () {
        this.searchForm = this.fb.group({
            'compId': [''],
            'startDate': [''],
            'endDate': [''],
            'isActive': [''],
            'isWinnerAnnounced': ['']
        });
    };
    Object.defineProperty(ManageCompetitionsPage.prototype, "compId", {
        get: function () {
            return this.searchForm.get('compId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionsPage.prototype, "startDate", {
        get: function () {
            return this.searchForm.get('startDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionsPage.prototype, "endDate", {
        get: function () {
            return this.searchForm.get('endDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionsPage.prototype, "isActive", {
        get: function () {
            return this.searchForm.get('isActive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionsPage.prototype, "isWinnerAnnounced", {
        get: function () {
            return this.searchForm.get('isWinnerAnnounced');
        },
        enumerable: true,
        configurable: true
    });
    ManageCompetitionsPage.prototype.ngOnInit = function () {
    };
    ManageCompetitionsPage.prototype.search = function () {
        var _this = this;
        this.showProgressBar = true;
        this.showError = false;
        var searchCriteria = new src_app_models_SearchModel__WEBPACK_IMPORTED_MODULE_5__["SearchModel"]();
        searchCriteria.compId = this.compId.value;
        searchCriteria.startDate = this.startDate.value;
        searchCriteria.endDate = this.endDate.value;
        searchCriteria.isActive = this.isActive.value;
        searchCriteria.isWinnerAnnounced = this.isWinnerAnnounced.value;
        this.compSrvc
            .search(searchCriteria)
            .subscribe(function (res) {
            _this.competitions = res;
            _this.showProgressBar = false;
            _this.showError = true;
        }, function (err) {
            _this.competitions = [];
            _this.showProgressBar = false;
            _this.showError = true;
        });
    };
    ManageCompetitionsPage.ctorParameters = function () { return [
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_3__["CompetitionService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"] },
        { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }
    ]; };
    ManageCompetitionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-competitions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-competitions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-competitions/manage-competitions.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-competitions.page.scss */ "./src/app/pages/manage-competitions/manage-competitions.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_3__["CompetitionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services_master_master_data_service__WEBPACK_IMPORTED_MODULE_6__["MasterDataService"], src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]])
    ], ManageCompetitionsPage);
    return ManageCompetitionsPage;
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
//# sourceMappingURL=9.js.map