(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-description-e-description-module"],{

/***/ "./src/app/pages/e-description/e-description.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/e-description/e-description.module.ts ***!
  \*************************************************************/
/*! exports provided: EDescriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDescriptionPageModule", function() { return EDescriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_description_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-description.page */ "./src/app/pages/e-description/e-description.page.ts");







var routes = [
    {
        path: '',
        component: _e_description_page__WEBPACK_IMPORTED_MODULE_6__["EDescriptionPage"]
    }
];
var EDescriptionPageModule = /** @class */ (function () {
    function EDescriptionPageModule() {
    }
    EDescriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_description_page__WEBPACK_IMPORTED_MODULE_6__["EDescriptionPage"]]
        })
    ], EDescriptionPageModule);
    return EDescriptionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/e-description/e-description.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/e-description/e-description.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Describe your food</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n      <!-- <ion-item>\n          <ion-label position=\"floating\">Enter description</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n    <ion-button expand='full'>Save</ion-button> -->\n\n    <ion-grid style=\"height: 100%; display: flex; flex-direction: column\">\n    <ion-row style=\"flex-grow: 1;\">\n      <ion-col size=\"12\">\n          <ion-item lines='none'>\n              <ion-label position=\"stacked\">Enter description</ion-label>\n              <ion-textarea [(ngModel)]='value' rows=\"10\" cols=\"20\" style=\"background-color: rgb(148, 213, 228);\" placeholder=\"Please describe what you ate in whatever form would be most useful for you.\"></ion-textarea>\n          </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-button expand='full' (click)=\"onSave()\">Save</ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/e-description/e-description.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/e-description/e-description.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n  ion-toolbar ion-back-button {\n    color: white; }\n  ion-content {\n  --background: rgb(242, 168, 70); }\n  ion-item {\n  --background: rgb(242, 168, 70);\n  --color: white; }\n  ion-button {\n  --background: rgb(183, 217, 225); }\n  ion-textarea {\n  height: 50vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtZGVzY3JpcHRpb24vZS1kZXNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBYTtFQUNiLFlBQVksRUFBQTtFQUZoQjtJQUtRLFlBQVcsRUFBQTtFQUluQjtFQUNJLCtCQUFhLEVBQUE7RUFHakI7RUFDSSwrQkFBYTtFQUNiLGNBQVEsRUFBQTtFQUdaO0VBQ0ksZ0NBQWEsRUFBQTtFQUdqQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2UtZGVzY3JpcHRpb24vZS1kZXNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTgzLCAyMTcsIDIyNSk7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA1MHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/e-description/e-description.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/e-description/e-description.page.ts ***!
  \***********************************************************/
/*! exports provided: EDescriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDescriptionPage", function() { return EDescriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EDescriptionPage = /** @class */ (function () {
    function EDescriptionPage(logService, router, route) {
        this.logService = logService;
        this.router = router;
        this.route = route;
        this.value = '';
        this.index = -1;
    }
    EDescriptionPage.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
        }
    };
    EDescriptionPage.prototype.onSave = function () {
        if (this.value !== '') {
            // save
            if (this.index == -1) {
                var p = new Map();
                p['modality'] = 'foodDsrp';
                p['entry'] = this.value;
                this.logService.addEntry(p);
            }
            else {
                this.logService.data.entries[this.index]['entry'] = this.value;
            }
            this.value = '';
            this.router.navigateByUrl('/entry');
        }
        else {
            // empty value
            return;
        }
    };
    EDescriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-description',
            template: __webpack_require__(/*! ./e-description.page.html */ "./src/app/pages/e-description/e-description.page.html"),
            styles: [__webpack_require__(/*! ./e-description.page.scss */ "./src/app/pages/e-description/e-description.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EDescriptionPage);
    return EDescriptionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-e-description-e-description-module.js.map