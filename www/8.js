(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-competition-entries/manage-competition-entries.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-competition-entries/manage-competition-entries.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add/Update Competitions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"compForm\">\n    <input type=\"hidden\" [formControl]=\"competitionId\"/>\n    <ion-item>\n      <ion-label position=\"floating\">Category <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-select placeholder=\"--Select Category--\" [formControl]=\"competitionCategory\">\n        <ion-select-option value=\"DALY\">Daily</ion-select-option>\n        <ion-select-option value=\"WKLY\">Weekly</ion-select-option>\n        <ion-select-option value=\"MTLY\">Monthly</ion-select-option>\n        <ion-select-option value=\"YRLY\">Yearly</ion-select-option>\n      </ion-select>\n    </ion-item> \n    <app-error [condition]=\"competitionCategory.touched && competitionCategory.invalid\" msg=\"Please select categoty.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Title <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-input type=\"text\" [formControl]=\"title\" maxlength=\"100\" ></ion-input>\n    </ion-item>\n    <app-error [condition]=\"title.touched && title.invalid\" msg=\"Please enter title.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Description <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-input type=\"text\" [formControl]=\"description\" maxlength=\"1000\"></ion-input>\n    </ion-item>\n    <app-error [condition]=\"description.touched && description.invalid\" msg=\"Please enter description.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Start Date <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" [formControl]=\"startTime\"></ion-datetime>\n    </ion-item>\n    <app-error [condition]=\"startTime.touched && startTime.invalid\" msg=\"Please enter start date.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Enter End Date <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" [formControl]=\"endTime\"></ion-datetime>\n    </ion-item>\n    <app-error [condition]=\"endTime.touched && endTime.invalid\" msg=\"Please enter end date.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Minimum Age <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-input type=\"tel\" [formControl]=\"minAge\" maxlength=\"2\"></ion-input>\n    </ion-item>\n    <app-error [condition]=\"minAge.touched && minAge.invalid\" msg=\"Please enter minimum age.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Enter Maximum Age <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-input type=\"tel\" [formControl]=\"maxAge\" maxlength=\"2\"></ion-input>\n    </ion-item>\n    <app-error [condition]=\"maxAge.touched && maxAge.invalid\" msg=\"Please enter maximum age.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Subscription Require? <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-select placeholder=\"--Select Subscription Require--\" [formControl]=\"isSubscriptionRequired\">\n        <ion-select-option value=\"1\">Yes</ion-select-option>\n        <ion-select-option value=\"0\">No</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <app-error [condition]=\"isSubscriptionRequired.touched && isSubscriptionRequired.invalid\" msg=\"Please enter seubscription required.\"></app-error>\n    \n    <ion-item *ngIf=\"isSubscriptionRequired.value == '1'\">\n      <ion-label position=\"floating\">Enter Subscription Price <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-input type=\"tel\" [formControl]=\"subscriptionPrice\" maxlength=\"2\"></ion-input>\n    </ion-item>\n    <app-error [condition]=\"subscriptionPrice.touched && subscriptionPrice.invalid\" msg=\"Please enter subscription price.\"></app-error>\n\n    <ion-item>\n      <ion-label position=\"floating\">Status <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-select placeholder=\"--Select Status--\" [formControl]=\"isActive\">\n        <ion-select-option value=\"1\">Active</ion-select-option>\n        <ion-select-option value=\"0\">Inactive</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <app-error [condition]=\"isActive.touched && isActive.invalid\" msg=\"Please select status.\"></app-error>\n    <ion-item>\n      <ion-label position=\"floating\">Result Status <label style=\"color: red !important;\">*</label></ion-label>\n      <ion-select placeholder=\"--Select Result Status--\" [formControl]=\"isWinnerAnnounced\" readonly=\"true\">\n        <ion-select-option value=\"1\">Winner Announced</ion-select-option>\n        <ion-select-option value=\"0\" selected=\"true\">Winner Not Announced</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <app-error [condition]=\"isWinnerAnnounced.touched && isWinnerAnnounced.invalid\" msg=\"Please select result status.\"></app-error>\n\n    <app-multi-file-upload [formControl]=\"compPhoto\" msg=\"Upload Competition Image\" id=\"uploadCompPhoto\" format=\"png, jpeg, jpg\"></app-multi-file-upload>\n    <app-error [condition]=\"compPhoto.invalid\" msg=\"Please upload pompetition image.\" ></app-error>\n\n    <div class=\"ion-padding ion-justify-content-center\">\n      <ion-button shape=\"round\" type=\"submit\"  expand=\"block\" (click)=\"saveComp()\" [disabled]=\"compForm.invalid\">\n        <ion-icon name=\"cloud-upload\" slot=\"start\"></ion-icon>\n        Save\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/models/ContestModel.ts":
/*!****************************************!*\
  !*** ./src/app/models/ContestModel.ts ***!
  \****************************************/
/*! exports provided: ContestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestModel", function() { return ContestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ContestModel = /** @class */ (function () {
    function ContestModel() {
    }
    return ContestModel;
}());



/***/ }),

/***/ "./src/app/pages/manage-competition-entries/manage-competition-entries-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/manage-competition-entries/manage-competition-entries-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManageCompetitionEntriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCompetitionEntriesPageRoutingModule", function() { return ManageCompetitionEntriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_competition_entries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-competition-entries.page */ "./src/app/pages/manage-competition-entries/manage-competition-entries.page.ts");




var routes = [
    {
        path: '',
        component: _manage_competition_entries_page__WEBPACK_IMPORTED_MODULE_3__["ManageCompetitionEntriesPage"]
    }
];
var ManageCompetitionEntriesPageRoutingModule = /** @class */ (function () {
    function ManageCompetitionEntriesPageRoutingModule() {
    }
    ManageCompetitionEntriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManageCompetitionEntriesPageRoutingModule);
    return ManageCompetitionEntriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-competition-entries/manage-competition-entries.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/manage-competition-entries/manage-competition-entries.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageCompetitionEntriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCompetitionEntriesPageModule", function() { return ManageCompetitionEntriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _manage_competition_entries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-competition-entries-routing.module */ "./src/app/pages/manage-competition-entries/manage-competition-entries-routing.module.ts");
/* harmony import */ var _manage_competition_entries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-competition-entries.page */ "./src/app/pages/manage-competition-entries/manage-competition-entries.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");








var ManageCompetitionEntriesPageModule = /** @class */ (function () {
    function ManageCompetitionEntriesPageModule() {
    }
    ManageCompetitionEntriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _manage_competition_entries_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageCompetitionEntriesPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_manage_competition_entries_page__WEBPACK_IMPORTED_MODULE_6__["ManageCompetitionEntriesPage"]]
        })
    ], ManageCompetitionEntriesPageModule);
    return ManageCompetitionEntriesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-competition-entries/manage-competition-entries.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/manage-competition-entries/manage-competition-entries.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1jb21wZXRpdGlvbi1lbnRyaWVzL21hbmFnZS1jb21wZXRpdGlvbi1lbnRyaWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/manage-competition-entries/manage-competition-entries.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/manage-competition-entries/manage-competition-entries.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ManageCompetitionEntriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCompetitionEntriesPage", function() { return ManageCompetitionEntriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/competition/competition.service */ "./src/app/services/competition/competition.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_ContestModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/ContestModel */ "./src/app/models/ContestModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ManageCompetitionEntriesPage = /** @class */ (function () {
    function ManageCompetitionEntriesPage(util, compSrvc, fb, ar) {
        this.util = util;
        this.compSrvc = compSrvc;
        this.fb = fb;
        this.ar = ar;
    }
    ManageCompetitionEntriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeCompForm();
        this.ar.params.subscribe(function (params) {
            console.log('params -->', params);
            _this.compId = params['compId'];
            if (_this.compId && !isNaN(_this.compId)) {
                _this.compSrvc
                    .getCompetitionDetails(_this.compId)
                    .subscribe(function (res) { return _this.compForm.patchValue(res); });
            }
        });
    };
    ManageCompetitionEntriesPage.prototype.initializeCompForm = function () {
        var _this = this;
        this.compForm = this.fb.group({
            'competitionId': [''],
            'competitionCategory': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'startTime': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'endTime': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'minAge': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'maxAge': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'isActive': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'isSubscriptionRequired': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'subscriptionPrice': [''],
            'isWinnerAnnounced': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'compPhoto': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.isSubscriptionRequired
            .valueChanges
            .subscribe(function (value) {
            if (value == '1') {
                _this.subscriptionPrice.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            }
            else {
                _this.subscriptionPrice.clearValidators();
            }
            _this.subscriptionPrice.updateValueAndValidity();
        });
    };
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "compPhoto", {
        get: function () {
            return this.compForm.get('compPhoto');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "competitionId", {
        get: function () {
            return this.compForm.get('competitionId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "competitionCategory", {
        get: function () {
            return this.compForm.get('competitionCategory');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "title", {
        get: function () {
            return this.compForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "description", {
        get: function () {
            return this.compForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "startTime", {
        get: function () {
            return this.compForm.get('startTime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "endTime", {
        get: function () {
            return this.compForm.get('endTime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "minAge", {
        get: function () {
            return this.compForm.get('minAge');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "maxAge", {
        get: function () {
            return this.compForm.get('maxAge');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "isSubscriptionRequired", {
        get: function () {
            return this.compForm.get('isSubscriptionRequired');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "subscriptionPrice", {
        get: function () {
            return this.compForm.get('subscriptionPrice');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "isActive", {
        get: function () {
            return this.compForm.get('isActive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageCompetitionEntriesPage.prototype, "isWinnerAnnounced", {
        get: function () {
            return this.compForm.get('isWinnerAnnounced');
        },
        enumerable: true,
        configurable: true
    });
    ManageCompetitionEntriesPage.prototype.saveComp = function () {
        var _this = this;
        console.log('form', this.compForm);
        if (this.compForm.valid) {
            var comp = new src_app_models_ContestModel__WEBPACK_IMPORTED_MODULE_5__["ContestModel"]();
            comp.competitionId = this.competitionId.value;
            comp.competitionCategory = this.competitionCategory.value;
            comp.title = this.title.value;
            comp.description = this.description.value;
            comp.startTime = this.startTime.value;
            comp.endTime = this.endTime.value;
            comp.minAge = this.minAge.value;
            comp.maxAge = this.maxAge.value;
            comp.isActive = this.isActive.value;
            comp.isSubscriptionRequired = this.isSubscriptionRequired.value;
            comp.compPhoto = this.compPhoto.value;
            comp.isWinnerAnnounced = this.isWinnerAnnounced.value;
            if (this.isSubscriptionRequired.value == '1') {
                comp.subscriptionPrice = this.subscriptionPrice.value;
            }
            this.compSrvc
                .saveOrUpdateComp(comp)
                .subscribe(function (res) { return _this.util.success('Competition details have been saved successfully.'); }, function (err) { return _this.util.errorHandler(err); });
        }
    };
    ManageCompetitionEntriesPage.ctorParameters = function () { return [
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_3__["CompetitionService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    ManageCompetitionEntriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-competition-entries',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-competition-entries.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-competition-entries/manage-competition-entries.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-competition-entries.page.scss */ "./src/app/pages/manage-competition-entries/manage-competition-entries.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_competition_competition_service__WEBPACK_IMPORTED_MODULE_3__["CompetitionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ManageCompetitionEntriesPage);
    return ManageCompetitionEntriesPage;
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
//# sourceMappingURL=8.js.map