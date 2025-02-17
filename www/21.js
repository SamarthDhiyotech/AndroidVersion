(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-playlist/view-playlist.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-playlist/view-playlist.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: black;\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\" *ngIf=\"model\">{{model.trainingName}} Playlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content  class=\"app-background\">\n  <div *ngIf=\"currentlyPlaying\">\n    <mat-video *ngIf=\"currentlyPlaying\" \n    src=\"{{util.getFullUrl('file/') + currentlyPlaying.contentId}}\" \n    title=\"{{currentlyPlaying.trainingContentName}}\" \n    [autoplay]=\"true\" [preload]=\"true\" [fullscreen]=\"true\" [download]=\"false\" \n    color=\"accent\" spinner=\"spin\" [overlay]=\"true\" [playsinline]=\"false\"  \n    style=\"height: 320px;\">\n</mat-video>\n\n    <br/>\n    <ion-label class=\"ion-padding\" style=\"color:#ff512c ;\"><b>{{currentlyPlaying.trainingContentName}}</b></ion-label><br/>\n    <ion-label class=\"ion-padding\">{{currentlyPlaying.trainingContentDesc}}</ion-label>\n  </div>\n  <hr/>\n  <div *ngIf=\"model\">\n    <ion-item button (click)=\"playme(tc)\" *ngFor=\"let tc of model.trainingContents\" lines=\"full\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{util.getFullUrl('file/') + model.trainingPhoto}}\">\n      </ion-thumbnail> \n      <ion-label>\n        <ion-text style=\"color:#ff512c ;\">{{tc.trainingContentName}}</ion-text>\n        <p>{{tc.trainingContentDesc}}</p>\n      </ion-label>\n      <ion-icon name=\"play-circle-sharp\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </div>  \n</ion-content>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./src/app/pages/view-playlist/view-playlist-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-playlist/view-playlist-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewPlaylistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlaylistPageRoutingModule", function() { return ViewPlaylistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_playlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-playlist.page */ "./src/app/pages/view-playlist/view-playlist.page.ts");




var routes = [
    {
        path: '',
        component: _view_playlist_page__WEBPACK_IMPORTED_MODULE_3__["ViewPlaylistPage"]
    }
];
var ViewPlaylistPageRoutingModule = /** @class */ (function () {
    function ViewPlaylistPageRoutingModule() {
    }
    ViewPlaylistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewPlaylistPageRoutingModule);
    return ViewPlaylistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/view-playlist/view-playlist.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/view-playlist/view-playlist.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewPlaylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlaylistPageModule", function() { return ViewPlaylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _view_playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-playlist-routing.module */ "./src/app/pages/view-playlist/view-playlist-routing.module.ts");
/* harmony import */ var _view_playlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-playlist.page */ "./src/app/pages/view-playlist/view-playlist.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material.module */ "./src/app/pages/material.module.ts");









var ViewPlaylistPageModule = /** @class */ (function () {
    function ViewPlaylistPageModule() {
    }
    ViewPlaylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPlaylistPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
            ],
            declarations: [_view_playlist_page__WEBPACK_IMPORTED_MODULE_6__["ViewPlaylistPage"]]
        })
    ], ViewPlaylistPageModule);
    return ViewPlaylistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-playlist/view-playlist.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/view-playlist/view-playlist.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: red !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: white !important;\n  /* Ensures text appears in black */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy1wbGF5bGlzdC9EOlxcRGhpeW9UZWNoUFZUTFREXFxTdXJzaHJlZVxcdXBkYXRlZCBzdXJzaHJlZVxcU3Vyc2hyZWVXZWJWZXJzaW9uXFxTdXJzaHJlZVdlYlZlcnNpb24vc3JjXFxhcHBcXHBhZ2VzXFx2aWV3LXBsYXlsaXN0XFx2aWV3LXBsYXlsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlldy1wbGF5bGlzdC92aWV3LXBsYXlsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQThCLHdDQUFBO0VBQzlCLGtDQUFBO0VBQW9DLG9EQUFBO0VBQ3BDLGtDQUFBO0VBQW9DLGtDQUFBO0FDSXhDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlldy1wbGF5bGlzdC92aWV3LXBsYXlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50OyAvKiBFbnN1cmVzIHRvb2xiYXIgYmFja2dyb3VuZCBpcyB3aGl0ZSAqL1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gICAgLS1pb24tdGV4dC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbiAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgLS1pb24tY29sb3ItYmFzZTogYmxhY2sgIWltcG9ydGFudDtcbiAgLyogU2V0cyB0aGUgYmFzZSBjb2xvciB0byBibGFjayBmb3IgaWNvbnMgYW5kIHRleHQgKi9cbiAgLS1pb24tdGV4dC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLyogRW5zdXJlcyB0ZXh0IGFwcGVhcnMgaW4gYmxhY2sgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/view-playlist/view-playlist.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-playlist/view-playlist.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewPlaylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlaylistPage", function() { return ViewPlaylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_training_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/training/training.service */ "./src/app/services/training/training.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");






var ViewPlaylistPage = /** @class */ (function () {
    function ViewPlaylistPage(nav, ts, ar, util) {
        this.nav = nav;
        this.ts = ts;
        this.ar = ar;
        this.util = util;
    }
    // old code ::
    // ngOnInit() {
    //   this.ar.params.subscribe(params => {
    //     const trainingId = params['trainingId'];
    //     console.log('Training ID from params:', trainingId);
    //     const trainings = this.ts.trainings.getValue();
    //     console.log('Available Trainings:', trainings);
    //     this.model = trainings.filter(t => t.trainingId === trainingId)[0];
    //     console.log('Filtered Model:', this.model);
    //   });
    // }
    ViewPlaylistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ar.params.subscribe(function (params) {
            var trainingId = params['trainingId']; // Keep as a string
            console.log('Training ID from params:', trainingId);
            var trainings = _this.ts.trainings.getValue();
            console.log('Available Trainings:', trainings);
            _this.model = trainings.find(function (t) { return t.trainingId.toString() === trainingId; });
            if (_this.model) {
                console.log('Filtered Model:', _this.model);
            }
            else {
                console.warn('No matching training found for ID:', trainingId);
            }
        });
    };
    ViewPlaylistPage.prototype.playme = function (tc) {
        this.currentlyPlaying = tc;
    };
    ViewPlaylistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_training_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
    ]; };
    ViewPlaylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-playlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-playlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-playlist/view-playlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-playlist.page.scss */ "./src/app/pages/view-playlist/view-playlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_training_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], ViewPlaylistPage);
    return ViewPlaylistPage;
}());



/***/ })

}]);
//# sourceMappingURL=21.js.map