(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-voice-e-voice-module"],{

/***/ "./src/app/pages/e-voice/e-voice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/e-voice/e-voice.module.ts ***!
  \*************************************************/
/*! exports provided: EVoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVoicePageModule", function() { return EVoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_voice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-voice.page */ "./src/app/pages/e-voice/e-voice.page.ts");







var routes = [
    {
        path: '',
        component: _e_voice_page__WEBPACK_IMPORTED_MODULE_6__["EVoicePage"]
    }
];
var EVoicePageModule = /** @class */ (function () {
    function EVoicePageModule() {
    }
    EVoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_voice_page__WEBPACK_IMPORTED_MODULE_6__["EVoicePage"]]
        })
    ], EVoicePageModule);
    return EVoicePageModule;
}());



/***/ }),

/***/ "./src/app/pages/e-voice/e-voice.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/e-voice/e-voice.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Talk about your food</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n      <!-- <ion-item>\n          <ion-label position=\"floating\">Recognized Text</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n    <ion-button expand='full'>Start Recording</ion-button>\n    <ion-button expand='full'>Save</ion-button> -->\n\n    <ion-grid style=\"height: 100%; display: flex; flex-flow: column;\">\n      <ion-row style=\"flex-grow: 1;\">\n\n        <ion-col size=\"12\" *ngIf=\"result != ''\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"floating\">Recognized Text</ion-label>\n            <ion-textarea [(ngModel)]='result'></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\" *ngIf=\"result === ''\">\n          <ion-item lines=\"none\">\n            Press the red button to start recording\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button expand='full' color='danger' (click)='onRecording()'>{{buttonText}}</ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand='full' (click)='onSave()'>Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/e-voice/e-voice.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/e-voice/e-voice.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n  ion-toolbar ion-back-button {\n    color: white; }\n  ion-content {\n  --background: rgb(242, 168, 70); }\n  ion-item {\n  --background: rgb(242, 168, 70);\n  --color: white; }\n  ion-button {\n  --background: rgb(183, 217, 225); }\n  ion-textarea {\n  height: 50vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2Utdm9pY2UvZS12b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBYTtFQUNiLFlBQVksRUFBQTtFQUZoQjtJQUtRLFlBQVcsRUFBQTtFQUluQjtFQUNJLCtCQUFhLEVBQUE7RUFHakI7RUFDSSwrQkFBYTtFQUNiLGNBQVEsRUFBQTtFQUdaO0VBQ0ksZ0NBQWEsRUFBQTtFQUdqQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Utdm9pY2UvZS12b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTgzLCAyMTcsIDIyNSk7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA1MHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/e-voice/e-voice.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/e-voice/e-voice.page.ts ***!
  \***********************************************/
/*! exports provided: EVoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVoicePage", function() { return EVoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");





var EVoicePage = /** @class */ (function () {
    function EVoicePage(speechRecognition, router, logService, changeDetectorRef, route) {
        this.speechRecognition = speechRecognition;
        this.router = router;
        this.logService = logService;
        this.changeDetectorRef = changeDetectorRef;
        this.route = route;
        this.isRecording = false;
        this.isAvailable = false;
        this.result = '';
        this.buttonText = 'Start Recording';
        this.index = -1;
    }
    EVoicePage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.result = this.logService.data.entries[this.index]['entry'];
        }
        this.speechRecognition.hasPermission().then(function (permission) {
            _this.isAvailable = permission;
            if (!permission) {
                _this.speechRecognition.requestPermission().then(function () { return _this.isAvailable = true; }, function () { return _this.isAvailable = false; });
            }
        });
    };
    EVoicePage.prototype.onRecording = function () {
        var _this = this;
        if (this.isAvailable) {
            if (this.isRecording) {
                // already recording
                this.buttonText = 'Start Recording';
                this.speechRecognition.stopListening();
                this.isRecording = false;
            }
            else {
                // not recording
                this.buttonText = 'Stop Recording';
                this.speechRecognition.startListening({ language: 'en-EN' }).subscribe(function (matches) {
                    _this.matches = [];
                    matches.forEach(function (item) { return _this.matches.push(item); });
                    _this.result = matches[0];
                    _this.changeDetectorRef.detectChanges();
                }, function (error) {
                });
                this.isRecording = true;
            }
        }
    };
    EVoicePage.prototype.onSave = function () {
        if (this.result === '') {
            return;
        }
        if (this.index == -1) {
            var p = new Map();
            p['modality'] = 'voice';
            p['entry'] = this.result;
            this.logService.addEntry(p);
        }
        else {
            this.logService.data.entries[this.index]['entry'] = this.result;
        }
        this.router.navigateByUrl('/entry');
    };
    EVoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-voice',
            template: __webpack_require__(/*! ./e-voice.page.html */ "./src/app/pages/e-voice/e-voice.page.html"),
            styles: [__webpack_require__(/*! ./e-voice.page.scss */ "./src/app/pages/e-voice/e-voice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EVoicePage);
    return EVoicePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-e-voice-e-voice-module.js.map