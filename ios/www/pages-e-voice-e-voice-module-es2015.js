(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-voice-e-voice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-voice/e-voice.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-voice/e-voice.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Talk about your food</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n      <!-- <ion-item>\n          <ion-label position=\"floating\">Recognized Text</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n    <ion-button expand='full'>Start Recording</ion-button>\n    <ion-button expand='full'>Save</ion-button> -->\n\n    <ion-grid style=\"height: 100%; display: flex; flex-flow: column;\">\n      <ion-row style=\"flex-grow: 1;\">\n\n        <ion-col size=\"12\" *ngIf=\"result != ''\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"floating\">Recognized Text</ion-label>\n            <ion-textarea [(ngModel)]='result'></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\" *ngIf=\"result === ''\">\n          <ion-item lines=\"none\">\n            Press the red button to start recording\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" class=\"ion-no-margin\" color='danger' (click)='onRecording()'>{{buttonText}}</ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onSave()'>Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  ");

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_voice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-voice.page */ "./src/app/pages/e-voice/e-voice.page.ts");







const routes = [
    {
        path: '',
        component: _e_voice_page__WEBPACK_IMPORTED_MODULE_6__["EVoicePage"]
    }
];
let EVoicePageModule = class EVoicePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/e-voice/e-voice.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/e-voice/e-voice.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-button {\n  --background: #009979;\n}\nion-textarea {\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2Utdm9pY2UvZS12b2ljZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Utdm9pY2UvZS12b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FESUE7RUFFSSwrQkFBQTtBQ0ZKO0FES0E7RUFFSSwrQkFBQTtFQUNBLGNBQUE7QUNISjtBRE1BO0VBQ0kscUJBQUE7QUNISjtBRE1BO0VBQ0ksWUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZS12b2ljZS9lLXZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xufVxuXG5pb24taXRlbSB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA1MHZoO1xufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGhlaWdodDogNTB2aDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");





let EVoicePage = class EVoicePage {
    constructor(speechRecognition, router, logService, changeDetectorRef, route) {
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
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.result = this.logService.data.entries[this.index]['entry'];
        }
        this.speechRecognition.hasPermission().then(permission => {
            this.isAvailable = permission;
            if (!permission) {
                this.speechRecognition.requestPermission().then(() => this.isAvailable = true, () => this.isAvailable = false);
            }
        });
    }
    onRecording() {
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
                this.speechRecognition.startListening({ language: 'en-EN' }).subscribe(matches => {
                    this.matches = [];
                    matches.forEach(item => this.matches.push(item));
                    this.result = matches[0];
                    this.changeDetectorRef.detectChanges();
                }, error => {
                });
                this.isRecording = true;
            }
        }
    }
    onSave() {
        if (this.result === '') {
            return;
        }
        if (this.index == -1) {
            const p = new Map();
            p['modality'] = 'voice';
            p['entry'] = this.result;
            this.logService.addEntry(p);
        }
        else {
            this.logService.data.entries[this.index]['entry'] = this.result;
        }
        this.router.navigateByUrl('/entry');
    }
};
EVoicePage.ctorParameters = () => [
    { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EVoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-e-voice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./e-voice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-voice/e-voice.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./e-voice.page.scss */ "./src/app/pages/e-voice/e-voice.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EVoicePage);



/***/ })

}]);
//# sourceMappingURL=pages-e-voice-e-voice-module-es2015.js.map