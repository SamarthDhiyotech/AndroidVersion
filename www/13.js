(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-training/add-training.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-training/add-training.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Course</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"courseForm\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Category <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-select placeholder=\"Select One\" [formControl]=\"category\">\n          <ion-select-option value=\"INST\">Instrumental</ion-select-option>\n          <ion-select-option value=\"VOCL\">Vocal</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-error [condition]=\"category.touched && category.invalid\" msg=\"Please select category.\"></app-error>\n      <ion-item>\n        <ion-label position=\"floating\">Course Name <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-input type=\"text\" maxlength=\"50\" [formControl]=\"trainingName\"></ion-input>\n      </ion-item>\n      <app-error [condition]=\"trainingName.touched && trainingName.invalid\" msg=\"Please enter course name.\"></app-error>\n      <ion-item>\n        <ion-label position=\"floating\">Course Description <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-textarea type=\"text\" maxlength=\"300\" [formControl]=\"trainingDesc\"></ion-textarea>\n      </ion-item>\n      <app-error [condition]=\"trainingDesc.touched && trainingDesc.invalid\" msg=\"Please enter course description.\"></app-error>\n      <ion-item>\n        <ion-label position=\"floating\">Subscription Amount <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-input type=\"number\" maxlength=\"10\" [formControl]=\"subscriptionAmount\"></ion-input>\n      </ion-item>\n      <app-error [condition]=\"subscriptionAmount.touched && subscriptionAmount.invalid\" msg=\"Please enter subscription amount.\"></app-error>\n      <app-multi-file-upload required=\"true\" msg=\"Course Picture\" id=\"coursePicture\" format=\"png, jpeg, jpg\" [formControl]=\"trainingPhoto\"></app-multi-file-upload>\n    </ion-list>\n  </form>\n  <hr/>\n  <app-error [condition]=\"showContentNotAddedError\" msg=\"Please add atleast One Activity Content before saving an Activity.\"></app-error>\n  <form [formGroup]=\"courseContentForm\">\n    <ion-list >\n      <ion-list-header lines=\"inset\">\n        <ion-label class=\"ion-text-center\" color=\"primary\"><b>Add Videos to Course</b></ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label position=\"floating\">Video Name <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-input type=\"text\" maxlength=\"50\" [formControl]=\"trainingContentName\"></ion-input>\n      </ion-item>\n      <app-error [condition]=\"trainingContentName.touched && trainingContentName.invalid\" msg=\"Please enter video name.\"></app-error>\n      <ion-item>\n        <ion-label position=\"floating\">Video Description <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-textarea type=\"text\" maxlength=\"300\" [formControl]=\"trainingContentDesc\"></ion-textarea>\n      </ion-item>\n      <app-error [condition]=\"trainingContentDesc.touched && trainingContentDesc.invalid\" msg=\"Please enter video description.\"></app-error>\n      <ion-item>\n        <ion-label>Display Order <label style=\"color: red !important;\">*</label></ion-label>\n        <ion-select placeholder=\"Select One\" [formControl]=\"sortOrder\">\n          <ion-select-option [value]=\"num\" *ngFor=\"let num of [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]\">{{num}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-error [condition]=\"sortOrder.touched && sortOrder.invalid\" msg=\"Please select display order.\"></app-error>\n      <app-multi-file-upload required=\"true\" msg=\"Upload Video\" id=\"courseVidep\" format=\"mp4\" [formControl]=\"contentId\"></app-multi-file-upload>\n    </ion-list>\n    <ion-button expand=\"block\" type=\"submit\" [disabled] = \"courseContentForm.invalid\" (click)=\"addContent()\">\n      <ion-icon slot=\"start\" name=\"add\" ></ion-icon>\n      Add Video\n    </ion-button>\n  </form>\n  <ion-list *ngIf=\"videos.length > 0\">\n    <ion-list-header lines=\"inset\">\n      <ion-label>Added Videos</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let content of videos; let i = index\">\n      <ion-label class=\"ion-text-wrap\"><ion-badge>{{i + 1}}</ion-badge> &nbsp;&nbsp; {{content.trainingContentName}}</ion-label>\n      <ion-button slot=\"end\" (click)=\"delete(i)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" (click)=\"saveCourse()\" *ngIf=\"videos.length > 0\" [disabled]=\"courseForm.invalid\"> \n    <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n    Save Course\n  </ion-button>\n</ion-content>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/pages/add-training/add-training-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-training/add-training-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddTrainingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainingPageRoutingModule", function() { return AddTrainingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_training_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-training.page */ "./src/app/pages/add-training/add-training.page.ts");




var routes = [
    {
        path: '',
        component: _add_training_page__WEBPACK_IMPORTED_MODULE_3__["AddTrainingPage"]
    }
];
var AddTrainingPageRoutingModule = /** @class */ (function () {
    function AddTrainingPageRoutingModule() {
    }
    AddTrainingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddTrainingPageRoutingModule);
    return AddTrainingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/add-training/add-training.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-training/add-training.module.ts ***!
  \***********************************************************/
/*! exports provided: AddTrainingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainingPageModule", function() { return AddTrainingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _add_training_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-training-routing.module */ "./src/app/pages/add-training/add-training-routing.module.ts");
/* harmony import */ var _add_training_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-training.page */ "./src/app/pages/add-training/add-training.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/pages/material.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");









var AddTrainingPageModule = /** @class */ (function () {
    function AddTrainingPageModule() {
    }
    AddTrainingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_training_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTrainingPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_add_training_page__WEBPACK_IMPORTED_MODULE_6__["AddTrainingPage"]]
        })
    ], AddTrainingPageModule);
    return AddTrainingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-training/add-training.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-training/add-training.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 96%;\n  background-color: var(--ion-color-primary);\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXRyYWluaW5nL0Q6XFxEaGl5b1RlY2hQVlRMVERcXFN1cnNocmVlXFx1cGRhdGVkIHN1cnNocmVlXFxTdXJzaHJlZVdlYlZlcnNpb25cXFN1cnNocmVlV2ViVmVyc2lvbi9zcmNcXGFwcFxccGFnZXNcXGFkZC10cmFpbmluZ1xcYWRkLXRyYWluaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLXRyYWluaW5nL2FkZC10cmFpbmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtdHJhaW5pbmcvYWRkLXRyYWluaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5ocntcbiAgICBib3JkZXI6IDA7XG4gICAgY2xlYXI6Ym90aDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOiA5NiU7ICAgICAgICAgICAgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGhlaWdodDogMXB4O1xufSIsImhyIHtcbiAgYm9yZGVyOiAwO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5NiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/add-training/add-training.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-training/add-training.page.ts ***!
  \*********************************************************/
/*! exports provided: AddTrainingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainingPage", function() { return AddTrainingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_file_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/file/file.service */ "./src/app/services/file/file.service.ts");
/* harmony import */ var src_app_services_training_training_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/training/training.service */ "./src/app/services/training/training.service.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");







var AddTrainingPage = /** @class */ (function () {
    function AddTrainingPage(fb, fileSrvc, ts, util, nav) {
        this.fb = fb;
        this.fileSrvc = fileSrvc;
        this.ts = ts;
        this.util = util;
        this.nav = nav;
        this.showContentNotAddedError = false;
        this.videos = [];
    }
    AddTrainingPage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    AddTrainingPage.prototype.initializeForm = function () {
        this.courseForm = this.fb.group({
            'trainingId': ['', []],
            'category': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'trainingName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'trainingDesc': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'isSubscriptionRequired': ['', []],
            'subscriptionAmount': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'trainingPhoto': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.courseContentForm = this.fb.group({
            'trainingContentId': ['', []],
            'trainingContentName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'trainingContentDesc': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'contentId': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'sortOrder': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    AddTrainingPage.prototype.addContent = function () {
        var content = this.courseContentForm.value;
        this.videos.push(content);
        this.courseContentForm.reset();
        this.showContentNotAddedError = false;
    };
    AddTrainingPage.prototype.delete = function (index) {
        var content = this.videos.splice(index, 1)[0];
        if (content.contentId && content.contentId != '') {
            this.fileSrvc
                .deleteFile(content.contentId)
                .subscribe(function (res) { return console.log('file deleted successfully', res); });
        }
    };
    AddTrainingPage.prototype.saveCourse = function () {
        var _this = this;
        var course = this.courseForm.value;
        course.trainingContents = this.videos;
        this.util
            .showLoader()
            .then(function () {
            _this.ts
                .saveTraining(course)
                .subscribe(function (res) {
                _this.util.hideLoader();
                _this.util.success('Course saved successfully.');
                _this.nav.navigateBack('/learn-music').then(function () { return _this.ts.getAllTrainings().subscribe(function (res) {
                    _this.ts.trainings.next(res);
                }); });
            }, function (err) {
                _this.util.hideLoader();
                _this.util.errorHandler(err);
            });
        });
    };
    Object.defineProperty(AddTrainingPage.prototype, "trainingContentId", {
        get: function () {
            return this.courseContentForm.get('trainingContentId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "trainingContentName", {
        get: function () {
            return this.courseContentForm.get('trainingContentName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "trainingContentDesc", {
        get: function () {
            return this.courseContentForm.get('trainingContentDesc');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "contentId", {
        get: function () {
            return this.courseContentForm.get('contentId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "sortOrder", {
        get: function () {
            return this.courseContentForm.get('sortOrder');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "trainingId", {
        get: function () {
            return this.courseForm.get('trainingId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "category", {
        get: function () {
            return this.courseForm.get('category');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "trainingName", {
        get: function () {
            return this.courseForm.get('trainingName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "trainingDesc", {
        get: function () {
            return this.courseForm.get('trainingDesc');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "isSubscriptionRequired", {
        get: function () {
            return this.courseForm.get('isSubscriptionRequired');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "subscriptionAmount", {
        get: function () {
            return this.courseForm.get('subscriptionAmount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTrainingPage.prototype, "trainingPhoto", {
        get: function () {
            return this.courseForm.get('trainingPhoto');
        },
        enumerable: true,
        configurable: true
    });
    AddTrainingPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_file_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
        { type: src_app_services_training_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
    ]; };
    AddTrainingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-training',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-training.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-training/add-training.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-training.page.scss */ "./src/app/pages/add-training/add-training.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_file_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"], src_app_services_training_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"],
            src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], AddTrainingPage);
    return AddTrainingPage;
}());



/***/ })

}]);
//# sourceMappingURL=13.js.map