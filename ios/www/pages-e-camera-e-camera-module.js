(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-camera-e-camera-module"],{

/***/ "./src/app/pages/e-camera/e-camera.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/e-camera/e-camera.module.ts ***!
  \***************************************************/
/*! exports provided: ECameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECameraPageModule", function() { return ECameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-camera.page */ "./src/app/pages/e-camera/e-camera.page.ts");







var routes = [
    {
        path: '',
        component: _e_camera_page__WEBPACK_IMPORTED_MODULE_6__["ECameraPage"]
    }
];
var ECameraPageModule = /** @class */ (function () {
    function ECameraPageModule() {
    }
    ECameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_camera_page__WEBPACK_IMPORTED_MODULE_6__["ECameraPage"]]
        })
    ], ECameraPageModule);
    return ECameraPageModule;
}());



/***/ }),

/***/ "./src/app/pages/e-camera/e-camera.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/e-camera/e-camera.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Take a picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid style=\"height: 100%; display: flex; flex-flow: column;\">\n    <ion-row style=\"flex-grow: 1;\">\n      <ion-col size=\"12\">\n        <!-- <ion-img></ion-img> -->\n        <ion-item lines=\"none\">\n          <img *ngIf=\"myphoto\" src=\"{{ myphoto }}\" alt=\"image of food\">\n          <ion-label *ngIf='!myphoto'>No Image Yet</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12'>\n        <ion-button expand='full' (click)='onPhoto()'>Open Camera</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12'>\n        <ion-button expand='full' (click)='onSave()'>Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/e-camera/e-camera.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/e-camera/e-camera.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n  ion-toolbar ion-back-button {\n    color: white; }\n  ion-content {\n  --background: rgb(242, 168, 70); }\n  ion-item {\n  --background: rgb(242, 168, 70);\n  --color: white; }\n  ion-button {\n  --background: rgb(183, 217, 225); }\n  ion-img {\n  display: inline; }\n  ion-col ion-item {\n  height: 100%; }\n  ion-col ion-item ion-label {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtY2FtZXJhL2UtY2FtZXJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1EsWUFBVyxFQUFBO0VBSW5CO0VBQ0ksK0JBQWEsRUFBQTtFQUdqQjtFQUNJLCtCQUFhO0VBQ2IsY0FBUSxFQUFBO0VBR1o7RUFDSSxnQ0FBYSxFQUFBO0VBR2pCO0VBQ0ksZUFBZSxFQUFBO0VBR25CO0VBRVEsWUFBWSxFQUFBO0VBRnBCO0lBSVksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lLWNhbWVyYS9lLWNhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTgzLCAyMTcsIDIyNSk7XG59XG5cbmlvbi1pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuaW9uLWNvbCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/e-camera/e-camera.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/e-camera/e-camera.page.ts ***!
  \*************************************************/
/*! exports provided: ECameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECameraPage", function() { return ECameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");





var ECameraPage = /** @class */ (function () {
    function ECameraPage(router, logService, camera, route) {
        this.router = router;
        this.logService = logService;
        this.camera = camera;
        this.route = route;
        this.index = -1;
        this.myphoto = null;
    }
    ECameraPage.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.myphoto = this.logService.data.entries[this.index]['data'];
        }
    };
    ECameraPage.prototype.onPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            _this.info = err;
        });
    };
    ECameraPage.prototype.onSave = function () {
        if (this.myphoto == null) {
            return;
        }
        else {
            if (this.index == -1) {
                var p = new Map();
                p['modality'] = 'foodImg';
                p['entry'] = 'base64_img';
                p['data'] = this.myphoto;
                this.logService.addEntry(p);
            }
            else {
                this.logService.data.entries[this.index]['data'] = this.myphoto;
            }
            this.router.navigateByUrl('/entry');
        }
    };
    ECameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-camera',
            template: __webpack_require__(/*! ./e-camera.page.html */ "./src/app/pages/e-camera/e-camera.page.html"),
            styles: [__webpack_require__(/*! ./e-camera.page.scss */ "./src/app/pages/e-camera/e-camera.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ECameraPage);
    return ECameraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-e-camera-e-camera-module.js.map