(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-camera-e-camera-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-camera/e-camera.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-camera/e-camera.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Take a picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid style=\"height: 100%; display: flex; flex-flow: column;\">\n    <ion-row style=\"flex-grow: 1;\">\n      <ion-col size=\"12\">\n        <!-- <ion-img></ion-img> -->\n        <ion-item lines=\"none\">\n          <img *ngIf=\"myphoto\" src=\"{{ myphoto }}\" alt=\"image of food\">\n          <ion-label *ngIf='!myphoto'>No Image Yet</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12'>\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onPhoto()'>Open Camera</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='12'>\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onSave()'>Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-camera.page */ "./src/app/pages/e-camera/e-camera.page.ts");







const routes = [
    {
        path: '',
        component: _e_camera_page__WEBPACK_IMPORTED_MODULE_6__["ECameraPage"]
    }
];
let ECameraPageModule = class ECameraPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/e-camera/e-camera.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/e-camera/e-camera.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-button {\n  --background: #009979;\n}\nion-img {\n  display: inline;\n}\nion-col ion-item {\n  height: 100%;\n}\nion-col ion-item ion-label {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtY2FtZXJhL2UtY2FtZXJhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZS1jYW1lcmEvZS1jYW1lcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7RUFFQSxZQUFBO0FDREo7QURHSTtFQUNJLFlBQUE7QUNEUjtBREtBO0VBRUksK0JBQUE7QUNISjtBRE9BO0VBRUksK0JBQUE7RUFFQSxjQUFBO0FDTko7QURTQTtFQUNJLHFCQUFBO0FDTko7QURTQTtFQUNJLGVBQUE7QUNOSjtBRFVJO0VBQ0ksWUFBQTtBQ1BSO0FEUVE7RUFDSSxrQkFBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZS1jYW1lcmEvZS1jYW1lcmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICBcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG5cbn1cblxuaW9uLWl0ZW0ge1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcblxuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbmlvbi1pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuaW9uLWNvbCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuaW9uLWltZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuaW9uLWNvbCBpb24taXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");





let ECameraPage = class ECameraPage {
    constructor(router, logService, camera, route) {
        this.router = router;
        this.logService = logService;
        this.camera = camera;
        this.route = route;
        this.index = -1;
        this.myphoto = null;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.myphoto = this.logService.data.entries[this.index]['data'];
        }
    }
    onPhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
            this.info = err;
        });
    }
    onSave() {
        if (this.myphoto == null) {
            return;
        }
        else {
            if (this.index == -1) {
                const p = new Map();
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
    }
};
ECameraPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ECameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-e-camera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./e-camera.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-camera/e-camera.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./e-camera.page.scss */ "./src/app/pages/e-camera/e-camera.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ECameraPage);



/***/ })

}]);
//# sourceMappingURL=pages-e-camera-e-camera-module-es2015.js.map