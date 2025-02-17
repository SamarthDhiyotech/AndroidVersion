(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header [title]=\"'Notification'\"></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let item of notifications\">\n    <ion-card-content>\n      <ion-card-header>\n        <ion-card-title>\n          {{item.title}}\n        </ion-card-title>\n        <ion-card-subtitle>\n          {{item.body}}\n        </ion-card-subtitle>\n      </ion-card-header> \n      <div>{{item.creationDate | date}}</div>\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->\n<!-- <div *ngIf=\"messagingService.currentMessage | async as message\">\n  <h2>Notification</h2>\n  <p>{{ message.notification?.title }}</p>\n  <p>{{ message.notification?.body }}</p>\n</div> -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/welcome\">\n      <ion-icon style=\"color: black; width: 24px; height: 24px;\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>    \n    <ion-title style=\"color: black;\">Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-card *ngIf=\"messagingService?.currentMessage | async as message\">\n  <ion-card-content>\n    <ion-card-header>\n      <ion-card-title>{{ message?.notification?.title }}</ion-card-title>\n      <ion-card-subtitle>{{ message?.notification?.body }}</ion-card-subtitle>\n    </ion-card-header>\n    <div>{{ message?.notification?.creationDate | date }}</div>\n  </ion-card-content>\n</ion-card> -->\n\n<!-- <div *ngFor=\"let message of getMessages()\">\n  {{ message }}\n</div> -->\n\n\n<!-- <ion-col *ngIf=\"!contests || contests.length < 1\">\n  <div class=\"no-data-card ion-text-center\">\n    <div class=\"icon-container\">\n      <img src=\"assets/img/Group 33731.png\" alt=\"No Notifications\"/>\n    </div>\n    <h3>No Notifications!</h3> -->\n    <!-- <p>Please Comeback after a while</p> -->\n    <!-- <ion-button color=\"danger\" expand=\"block\">Explore Competition</ion-button> -->\n  <!-- </div>\n</ion-col>  -->\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"notifications.length > 0; else noNotifications\">\n    <ion-card *ngFor=\"let item of notifications\" (click)=\"openNotification(item)\">\n      <ion-card-content>\n        <ion-card-header>\n          <ion-card-title>{{ item.title }}</ion-card-title>\n          <ion-card-subtitle>{{ item.body }}</ion-card-subtitle>\n        </ion-card-header>\n        <div>{{ item.creationDate | date }}</div>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n\n  <ng-template #noNotifications>\n    <ion-col class=\"ion-text-center\">\n      <div class=\"no-data-card\">\n        <div class=\"icon-container\">\n          <img src=\"assets/img/Group 33731.png\" alt=\"No Notifications\"/>\n        </div>\n        <h3>No Notifications!</h3>\n      </div>\n    </ion-col>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUnsubscribedErrorImpl = (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/pages/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");




var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
var NotificationPageRoutingModule = /** @class */ (function () {
    function NotificationPageRoutingModule() {
    }
    NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotificationPageRoutingModule);
    return NotificationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/pages/shared.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notification/notification-routing.module.ts");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");









var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _notification_routing_module__WEBPACK_IMPORTED_MODULE_7__["NotificationPageRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            providers: [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"]],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notification/notification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-chip {\n  background: var(--ion-color-success);\n  color: white !important;\n}\n\n.competition-card {\n  border: 1px solid #ccc;\n  padding: 16px;\n  margin: 16px;\n  border-radius: 8px;\n}\n\n.competition-card img {\n  max-width: 100%;\n  height: auto;\n}\n\n/* ion-header adjustments */\n\nion-header::after {\n  background-image: none !important;\n  /* Uncomment the line below if you want to add a background image */\n  /* background-image: url(assets/icon/bg3.png); */\n  /* background-size: 100% 100%; */\n}\n\n/* Toolbar background and color adjustments */\n\nion-toolbar {\n  --background: white !important;\n  /* Ensures toolbar background is white */\n  --ion-color-base: black !important;\n  /* Sets the base color to black for icons and text */\n  --ion-text-color: black !important;\n  /* Ensures text appears in black */\n}\n\n/* Chip styling */\n\nion-chip {\n  background: var(--ion-color-success);\n  color: white !important;\n}\n\n/* Card styling */\n\n.competition-card {\n  border: 1px solid #ccc;\n  padding: 16px;\n  margin: 16px;\n  border-radius: 8px;\n}\n\n.competition-card img {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Styles for the competition card */\n\n.competition-card-img {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.competition-card-img img {\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n}\n\n/* Back icon styling */\n\n.back-icon {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  font-size: 24px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Slightly dark background for contrast */\n  padding: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 10;\n}\n\n.black-background {\n  background-color: black;\n  height: 200px;\n  /* Adjust as needed */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  /* Color for the icon */\n}\n\nion-tab-button.selected {\n  --color: #0072FF;\n  /* Color for selected tab label */\n  background-color: rgba(255, 255, 255, 0.1);\n  /* Optional: Background color for the selected tab */\n}\n\n/* Change color of the selected icon */\n\nion-tab-button.selected ion-icon {\n  color: #0072FF;\n  /* Color for the selected tab icon */\n}\n\n/* Change color of the selected label */\n\nion-tab-button.selected ion-label {\n  color: #0072FF;\n  /* Color for the selected tab label */\n}\n\n/* Color for unselected tab icons */\n\nion-tab-button ion-icon {\n  color: #A9A9A9;\n  /* Ash color for unselected tab icons */\n}\n\n/* Color for unselected tab labels */\n\nion-tab-button ion-label {\n  color: white;\n  /* Maintain white for unselected tab labels */\n}\n\n.competition-card-details {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n  height: 120px;\n  /* Adjust as necessary */\n  background-color: rgba(50, 50, 50, 0.3);\n  /* 30% transparent */\n  border-radius: 12px;\n  /* Curved edges */\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n  /* Optional: Add shadow for depth */\n  padding: 16px;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  /* Align items in a row */\n  justify-content: space-between;\n  /* Space between details */\n  align-items: center;\n  /* Center items vertically */\n  text-align: left;\n  /* Left-align text */\n}\n\n.competition-card-details ion-card-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.competition-info {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  margin: 0 8px;\n  /* Space between items */\n}\n\n.competition-info ion-icon {\n  margin-right: 4px;\n  /* Space between icon and text */\n}\n\n.competition-fee {\n  font-size: 14px;\n  margin-top: 8px;\n}\n\n.competition-fee b {\n  font-size: 18px;\n}\n\n/* Enroll button styling */\n\n.enroll-buttonn {\n  width: 100%;\n  background-color: #ff5722 !important;\n  /* Bright orange color */\n  color: white !important;\n  text-transform: none;\n}\n\n.competition-card-img {\n  position: relative;\n  /* Maintain aspect ratio for better layout */\n  padding-bottom: 56.25%;\n  /* Adjust this percentage as needed */\n}\n\n.competition-card-img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  /* Ensure image fills the container */\n}\n\n/* When image is missing, display a placeholder or alternative content */\n\n.competition-card-img:empty {\n  background-color: #f0f0f0;\n  /* Placeholder background color */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Style the placeholder content */\n\n.competition-card-img:empty ion-icon {\n  font-size: 48px;\n  color: #ccc;\n}\n\n.custom-button {\n  --color: #ff512c;\n  /* Text color */\n  --border-color: #ff512c;\n  /* Outline color */\n}\n\nion-card-content {\n  padding: 0 !important;\n}\n\nion-card-title {\n  font-size: 16px !important;\n}\n\nion-card-subtitle {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL0Q6XFxEaGl5b1RlY2hQVlRMVERcXFN1cnNocmVlXFx1cGRhdGVkIHN1cnNocmVlXFxTdXJzaHJlZVdlYlZlcnNpb25cXFN1cnNocmVlV2ViVmVyc2lvbi9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FDREo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0UsMkJBQUE7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLG1FQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREdFLDZDQUFBOztBQUNBO0VBQ0UsOEJBQUE7RUFBZ0Msd0NBQUE7RUFDaEMsa0NBQUE7RUFBb0Msb0RBQUE7RUFDcEMsa0NBQUE7RUFBb0Msa0NBQUE7QUNHeEM7O0FEQUUsaUJBQUE7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FDR0o7O0FEQUUsaUJBQUE7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQ0Usb0NBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDRSxzQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQXNDLDBDQUFBO0VBQ3RDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFBZSxxQkFBQTtFQUNmLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUFjLHVCQUFBO0FDTWxCOztBREhFO0VBQ0UsZ0JBQUE7RUFBa0IsaUNBQUE7RUFDbEIsMENBQUE7RUFBNEMsb0RBQUE7QUNRaEQ7O0FETEUsc0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQWdCLG9DQUFBO0FDU3BCOztBRE5FLHVDQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUFnQixxQ0FBQTtBQ1VwQjs7QURQRSxtQ0FBQTs7QUFDQTtFQUNFLGNBQUE7RUFBZ0IsdUNBQUE7QUNXcEI7O0FEUkUsb0NBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQWMsNkNBQUE7QUNZbEI7O0FEVkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFBZSx3QkFBQTtFQUNmLHVDQUFBO0VBQXlDLG9CQUFBO0VBQ3pDLG1CQUFBO0VBQXFCLGlCQUFBO0VBQ3JCLHlDQUFBO0VBQTJDLG1DQUFBO0VBQzNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLDhCQUFBO0VBQWdDLDBCQUFBO0VBQ2hDLG1CQUFBO0VBQXFCLDRCQUFBO0VBQ3JCLGdCQUFBO0VBQWtCLG9CQUFBO0FDcUJ0Qjs7QURqQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNvQko7O0FEakJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBZSx3QkFBQTtBQ3FCbkI7O0FEbEJFO0VBQ0UsaUJBQUE7RUFBbUIsZ0NBQUE7QUNzQnZCOztBRG5CRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDc0JKOztBRG5CRTtFQUNFLGVBQUE7QUNzQko7O0FEbkJFLDBCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQXNDLHdCQUFBO0VBQ3RDLHVCQUFBO0VBQ0Esb0JBQUE7QUN1Qko7O0FEckJFO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQXdCLHFDQUFBO0FDeUI1Qjs7QUR0QkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQW1CLHFDQUFBO0FDMEJ2Qjs7QUR2QkUsd0VBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUEyQixpQ0FBQTtFQUMzQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzJCSjs7QUR4QkUsa0NBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQzJCSjs7QUR4QkU7RUFDRSxnQkFBQTtFQUFrQixlQUFBO0VBQ2xCLHVCQUFBO0VBQXlCLGtCQUFBO0FDNkI3Qjs7QUQxQkU7RUFDRSxxQkFBQTtBQzZCSjs7QUQzQkU7RUFDRSwwQkFBQTtBQzhCSjs7QUQ1QkU7RUFDRSwwQkFBQTtBQytCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1jaGlwe1xuICAgIGJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgY29sb3IgOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb21wZXRpdGlvbi1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICBcbiAgLmNvbXBldGl0aW9uLWNhcmQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAvKiBpb24taGVhZGVyIGFkanVzdG1lbnRzICovXG4gIGlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLyogVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGlmIHlvdSB3YW50IHRvIGFkZCBhIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ljb24vYmczLnBuZyk7ICovXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7ICovXG4gIH1cbiAgXG4gIC8qIFRvb2xiYXIgYmFja2dyb3VuZCBhbmQgY29sb3IgYWRqdXN0bWVudHMgKi9cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDsgLyogRW5zdXJlcyB0b29sYmFyIGJhY2tncm91bmQgaXMgd2hpdGUgKi9cbiAgICAtLWlvbi1jb2xvci1iYXNlOiBibGFjayAhaW1wb3J0YW50OyAvKiBTZXRzIHRoZSBiYXNlIGNvbG9yIHRvIGJsYWNrIGZvciBpY29ucyBhbmQgdGV4dCAqL1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG4gIH1cbiAgXG4gIC8qIENoaXAgc3R5bGluZyAqL1xuICBpb24tY2hpcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKiBDYXJkIHN0eWxpbmcgKi9cbiAgLmNvbXBldGl0aW9uLWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIFxuICAuY29tcGV0aXRpb24tY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIFxuICAvKiBTdHlsZXMgZm9yIHRoZSBjb21wZXRpdGlvbiBjYXJkICovXG4gIC5jb21wZXRpdGlvbi1jYXJkLWltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbXBldGl0aW9uLWNhcmQtaW1nIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbiAgXG4gIC8qIEJhY2sgaWNvbiBzdHlsaW5nICovXG4gIC5iYWNrLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogMTZweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogU2xpZ2h0bHkgZGFyayBiYWNrZ3JvdW5kIGZvciBjb250cmFzdCAqL1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5ibGFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDIwMHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTsgLyogQ29sb3IgZm9yIHRoZSBpY29uICovXG4gIH1cbiAgXG4gIGlvbi10YWItYnV0dG9uLnNlbGVjdGVkIHtcbiAgICAtLWNvbG9yOiAjMDA3MkZGOyAvKiBDb2xvciBmb3Igc2VsZWN0ZWQgdGFiIGxhYmVsICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAvKiBPcHRpb25hbDogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHNlbGVjdGVkIHRhYiAqL1xuICB9XG4gIFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGljb24gKi9cbiAgaW9uLXRhYi1idXR0b24uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA3MkZGOyAvKiBDb2xvciBmb3IgdGhlIHNlbGVjdGVkIHRhYiBpY29uICovXG4gIH1cbiAgXG4gIC8qIENoYW5nZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgbGFiZWwgKi9cbiAgaW9uLXRhYi1idXR0b24uc2VsZWN0ZWQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogIzAwNzJGRjsgLyogQ29sb3IgZm9yIHRoZSBzZWxlY3RlZCB0YWIgbGFiZWwgKi9cbiAgfVxuICBcbiAgLyogQ29sb3IgZm9yIHVuc2VsZWN0ZWQgdGFiIGljb25zICovXG4gIGlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgICBjb2xvcjogI0E5QTlBOTsgLyogQXNoIGNvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xuICB9XG4gIFxuICAvKiBDb2xvciBmb3IgdW5zZWxlY3RlZCB0YWIgbGFiZWxzICovXG4gIGlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlOyAvKiBNYWludGFpbiB3aGl0ZSBmb3IgdW5zZWxlY3RlZCB0YWIgbGFiZWxzICovXG4gIH1cbiAgLmNvbXBldGl0aW9uLWNhcmQtZGV0YWlscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTZweDtcbiAgICBsZWZ0OiAxNnB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGhlaWdodDogMTIwcHg7IC8qIEFkanVzdCBhcyBuZWNlc3NhcnkgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuMyk7IC8qIDMwJSB0cmFuc3BhcmVudCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IC8qIEN1cnZlZCBlZGdlcyAqL1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBPcHRpb25hbDogQWRkIHNoYWRvdyBmb3IgZGVwdGggKi9cbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIEFsaWduIGl0ZW1zIGluIGEgcm93ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBTcGFjZSBiZXR3ZWVuIGRldGFpbHMgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgdmVydGljYWxseSAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IC8qIExlZnQtYWxpZ24gdGV4dCAqL1xuICB9XG4gIFxuICBcbiAgLmNvbXBldGl0aW9uLWNhcmQtZGV0YWlscyBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY29tcGV0aXRpb24taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDAgOHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGl0ZW1zICovXG4gIH1cbiAgXG4gIC5jb21wZXRpdGlvbi1pbmZvIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG4gIH1cbiAgXG4gIC5jb21wZXRpdGlvbi1mZWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5jb21wZXRpdGlvbi1mZWUgYiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAvKiBFbnJvbGwgYnV0dG9uIHN0eWxpbmcgKi9cbiAgLmVucm9sbC1idXR0b25uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7IC8qIEJyaWdodCBvcmFuZ2UgY29sb3IgKi9cbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuY29tcGV0aXRpb24tY2FyZC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gZm9yIGJldHRlciBsYXlvdXQgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiBBZGp1c3QgdGhpcyBwZXJjZW50YWdlIGFzIG5lZWRlZCAqL1xuICB9XG4gIFxuICAuY29tcGV0aXRpb24tY2FyZC1pbWcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBFbnN1cmUgaW1hZ2UgZmlsbHMgdGhlIGNvbnRhaW5lciAqL1xuICB9XG4gIFxuICAvKiBXaGVuIGltYWdlIGlzIG1pc3NpbmcsIGRpc3BsYXkgYSBwbGFjZWhvbGRlciBvciBhbHRlcm5hdGl2ZSBjb250ZW50ICovXG4gIC5jb21wZXRpdGlvbi1jYXJkLWltZzplbXB0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogUGxhY2Vob2xkZXIgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQgKi9cbiAgLmNvbXBldGl0aW9uLWNhcmQtaW1nOmVtcHR5IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbiAgXG4gIC5jdXN0b20tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjZmY1MTJjOyAvKiBUZXh0IGNvbG9yICovXG4gICAgLS1ib3JkZXItY29sb3I6ICNmZjUxMmM7IC8qIE91dGxpbmUgY29sb3IgKi9cbiAgfVxuICBcbiAgaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH0iLCJpb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBpb24taGVhZGVyIGFkanVzdG1lbnRzICovXG5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLyogVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGlmIHlvdSB3YW50IHRvIGFkZCBhIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pY29uL2JnMy5wbmcpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgKi9cbn1cblxuLyogVG9vbGJhciBiYWNrZ3JvdW5kIGFuZCBjb2xvciBhZGp1c3RtZW50cyAqL1xuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdG9vbGJhciBiYWNrZ3JvdW5kIGlzIHdoaXRlICovXG4gIC0taW9uLWNvbG9yLWJhc2U6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIFNldHMgdGhlIGJhc2UgY29sb3IgdG8gYmxhY2sgZm9yIGljb25zIGFuZCB0ZXh0ICovXG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC8qIEVuc3VyZXMgdGV4dCBhcHBlYXJzIGluIGJsYWNrICovXG59XG5cbi8qIENoaXAgc3R5bGluZyAqL1xuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBDYXJkIHN0eWxpbmcgKi9cbi5jb21wZXRpdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBTdHlsZXMgZm9yIHRoZSBjb21wZXRpdGlvbiBjYXJkICovXG4uY29tcGV0aXRpb24tY2FyZC1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb21wZXRpdGlvbi1jYXJkLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4vKiBCYWNrIGljb24gc3R5bGluZyAqL1xuLmJhY2staWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBTbGlnaHRseSBkYXJrIGJhY2tncm91bmQgZm9yIGNvbnRyYXN0ICovXG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYmxhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDIwMHB4O1xuICAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIENvbG9yIGZvciB0aGUgaWNvbiAqL1xufVxuXG5pb24tdGFiLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIC0tY29sb3I6ICMwMDcyRkY7XG4gIC8qIENvbG9yIGZvciBzZWxlY3RlZCB0YWIgbGFiZWwgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAvKiBPcHRpb25hbDogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHNlbGVjdGVkIHRhYiAqL1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGljb24gKi9cbmlvbi10YWItYnV0dG9uLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDcyRkY7XG4gIC8qIENvbG9yIGZvciB0aGUgc2VsZWN0ZWQgdGFiIGljb24gKi9cbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBsYWJlbCAqL1xuaW9uLXRhYi1idXR0b24uc2VsZWN0ZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDcyRkY7XG4gIC8qIENvbG9yIGZvciB0aGUgc2VsZWN0ZWQgdGFiIGxhYmVsICovXG59XG5cbi8qIENvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xuaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI0E5QTlBOTtcbiAgLyogQXNoIGNvbG9yIGZvciB1bnNlbGVjdGVkIHRhYiBpY29ucyAqL1xufVxuXG4vKiBDb2xvciBmb3IgdW5zZWxlY3RlZCB0YWIgbGFiZWxzICovXG5pb24tdGFiLWJ1dHRvbiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIE1haW50YWluIHdoaXRlIGZvciB1bnNlbGVjdGVkIHRhYiBsYWJlbHMgKi9cbn1cblxuLmNvbXBldGl0aW9uLWNhcmQtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICBsZWZ0OiAxNnB4O1xuICByaWdodDogMTZweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgLyogQWRqdXN0IGFzIG5lY2Vzc2FyeSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuMyk7XG4gIC8qIDMwJSB0cmFuc3BhcmVudCAqL1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAvKiBDdXJ2ZWQgZWRnZXMgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIE9wdGlvbmFsOiBBZGQgc2hhZG93IGZvciBkZXB0aCAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC8qIEFsaWduIGl0ZW1zIGluIGEgcm93ICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogU3BhY2UgYmV0d2VlbiBkZXRhaWxzICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIENlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5ICovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC8qIExlZnQtYWxpZ24gdGV4dCAqL1xufVxuXG4uY29tcGV0aXRpb24tY2FyZC1kZXRhaWxzIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbXBldGl0aW9uLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCA4cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gaXRlbXMgKi9cbn1cblxuLmNvbXBldGl0aW9uLWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG59XG5cbi5jb21wZXRpdGlvbi1mZWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmNvbXBldGl0aW9uLWZlZSBiIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiBFbnJvbGwgYnV0dG9uIHN0eWxpbmcgKi9cbi5lbnJvbGwtYnV0dG9ubiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG4gIC8qIEJyaWdodCBvcmFuZ2UgY29sb3IgKi9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uY29tcGV0aXRpb24tY2FyZC1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIE1haW50YWluIGFzcGVjdCByYXRpbyBmb3IgYmV0dGVyIGxheW91dCAqL1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICAvKiBBZGp1c3QgdGhpcyBwZXJjZW50YWdlIGFzIG5lZWRlZCAqL1xufVxuXG4uY29tcGV0aXRpb24tY2FyZC1pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvKiBFbnN1cmUgaW1hZ2UgZmlsbHMgdGhlIGNvbnRhaW5lciAqL1xufVxuXG4vKiBXaGVuIGltYWdlIGlzIG1pc3NpbmcsIGRpc3BsYXkgYSBwbGFjZWhvbGRlciBvciBhbHRlcm5hdGl2ZSBjb250ZW50ICovXG4uY29tcGV0aXRpb24tY2FyZC1pbWc6ZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAvKiBQbGFjZWhvbGRlciBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgcGxhY2Vob2xkZXIgY29udGVudCAqL1xuLmNvbXBldGl0aW9uLWNhcmQtaW1nOmVtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogI2NjYztcbn1cblxuLmN1c3RvbS1idXR0b24ge1xuICAtLWNvbG9yOiAjZmY1MTJjO1xuICAvKiBUZXh0IGNvbG9yICovXG4gIC0tYm9yZGVyLWNvbG9yOiAjZmY1MTJjO1xuICAvKiBPdXRsaW5lIGNvbG9yICovXG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/notification/notification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_message_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message/messaging.service */ "./src/app/services/message/messaging.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");






var NotificationPage = /** @class */ (function () {
    function NotificationPage(
    // public r: Router,
    router, messagingService, firebaseService) {
        this.router = router;
        this.messagingService = messagingService;
        this.firebaseService = firebaseService;
        this.currentMessage = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.notifications = [];
        this.username = null;
    }
    NotificationPage.prototype.ngOnInit = function () {
        var _this = this;
        var storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            this.username = storedUsername;
            console.log("Loaded username from storage:", this.username);
            this.loadNotifications(); // Fetch notifications immediately
        }
        else {
            this.firebaseService.currentUsername$.subscribe(function (username) {
                if (username) {
                    _this.username = username;
                    localStorage.setItem("username", username); // Store username
                    console.log("Logged-in username:", _this.username);
                    _this.loadNotifications();
                }
                else {
                    console.error("No username available");
                }
            });
        }
    };
    NotificationPage.prototype.loadNotifications = function () {
        var _this = this;
        if (!this.username) {
            console.warn("No username found, cannot fetch notifications.");
            return;
        }
        this.firebaseService.getNotifications(this.username).subscribe(function (notifications) {
            if (notifications.length > 0) {
                _this.notifications = notifications;
                console.log("Loaded notifications:", _this.notifications);
            }
            else {
                console.warn("No notifications found.");
            }
        }, function (error) { return console.error("Error fetching notifications:", error); });
    };
    // }
    // public getMessages() {
    //   return this.messagingService.listen();
    // }
    // async doRefresh(event) {
    // console.log('refresh', event);
    // this.appService.presentLoading('Refreshing...');
    // this.getData();
    // setTimeout(() => {
    //   this.appService.hideLoading();
    // }, 1000);
    //   event.target.complete();
    // }
    // ionViewDidEnter() {
    //   this.getData();
    // }
    //   getData() {
    //     this.notifications = [];
    //     console.log("Starting getData...");
    //     this.userService.getNotification().then(res => {
    //       console.log("Raw response from getNotification():", res);
    //       res.forEach(docs => {
    //         console.log("Processing docs:", docs);
    //         docs.forEach(doc => {
    //           console.log("Processing doc data:", doc.data());
    //           this.notifications.unshift(doc.data());
    //         });
    //       });
    //       console.log("Notifications after processing:", this.notifications);
    //     });
    //     console.log("testing::::notification", this.notifications);
    // }
    NotificationPage.prototype.doRefresh = function (event) {
        var _this = this;
        var storedUsername = localStorage.getItem("username"); // Get username from storage
        if (!this.username && storedUsername) {
            this.username = storedUsername;
        }
        if (this.username) {
            this.firebaseService.getNotifications(this.username).subscribe(function (notifications) {
                _this.notifications = notifications;
                console.log("Notifications refreshed:", _this.notifications);
                event.target.complete();
            }, function (error) {
                console.error("Error refreshing notifications:", error);
                event.target.complete();
            });
        }
        else {
            console.warn("No username available, cannot refresh notifications.");
            event.target.complete();
        }
    };
    NotificationPage.prototype.openNotification = function (notification) {
        if (!notification || !notification.category) {
            console.error("Invalid notification data:", notification);
            return;
        }
        console.log(notification.category);
        if (notification.category === "Winner") {
            this.router.navigate(['/winners']);
        }
        else if (notification.compId) {
            this.router.navigate(['/upload-entry', notification.compId]);
        }
        else {
            console.warn("Notification has no compId, but is not a winner:", notification);
        }
    };
    NotificationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_message_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
    ]; };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.page.scss */ "./src/app/pages/notification/notification.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_message_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=6.js.map