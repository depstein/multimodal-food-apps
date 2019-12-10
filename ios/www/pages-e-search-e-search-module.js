(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-search-e-search-module"],{

/***/ "./src/app/pages/e-search/e-search.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/e-search/e-search.module.ts ***!
  \***************************************************/
/*! exports provided: ESearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESearchPageModule", function() { return ESearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-search.page */ "./src/app/pages/e-search/e-search.page.ts");







var routes = [
    {
        path: '',
        component: _e_search_page__WEBPACK_IMPORTED_MODULE_6__["ESearchPage"]
    }
];
var ESearchPageModule = /** @class */ (function () {
    function ESearchPageModule() {
    }
    ESearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_e_search_page__WEBPACK_IMPORTED_MODULE_6__["ESearchPage"]]
        })
    ], ESearchPageModule);
    return ESearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/e-search/e-search.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/e-search/e-search.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Search For Food</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n      <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Enter Search Query</ion-label>\n          <ion-textarea [(ngModel)]='value' type=\"text\" style=\"background-color: rgb(148, 213, 228); height: 5em;\" placeholder=\"Please describe the terms you would use to search from a database of foods commonly eaten and logged.\"></ion-textarea>\n        </ion-item>\n    <ion-button expand='full' (click)='onSave()' style=\"margin-left: 15px; margin-right: 15px;\">Save</ion-button>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/e-search/e-search.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/e-search/e-search.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n  ion-toolbar ion-back-button {\n    color: white; }\n  ion-content {\n  --background: rgb(242, 168, 70); }\n  ion-item {\n  --background: rgb(242, 168, 70);\n  --color: white; }\n  ion-button {\n  --background: rgb(183, 217, 225); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2Utc2VhcmNoL2Utc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1EsWUFBVyxFQUFBO0VBSW5CO0VBQ0ksK0JBQWEsRUFBQTtFQUdqQjtFQUNJLCtCQUFhO0VBQ2IsY0FBUSxFQUFBO0VBR1o7RUFDSSxnQ0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZS1zZWFyY2gvZS1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE4MywgMjE3LCAyMjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/e-search/e-search.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/e-search/e-search.page.ts ***!
  \*************************************************/
/*! exports provided: ESearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESearchPage", function() { return ESearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");




var ESearchPage = /** @class */ (function () {
    function ESearchPage(router, logService, route) {
        this.router = router;
        this.logService = logService;
        this.route = route;
        this.value = '';
        this.index = -1;
    }
    ESearchPage.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
        }
    };
    ESearchPage.prototype.onSave = function () {
        if (this.value === '') {
            return;
        }
        else {
            if (this.index == -1) {
                var p = new Map();
                p['modality'] = 'database';
                p['entry'] = this.value;
                this.logService.addEntry(p);
            }
            else {
                this.logService.data.entries[this.index]['entry'] = this.value;
            }
            this.value = '';
            this.router.navigateByUrl('/entry');
        }
    };
    ESearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-search',
            template: __webpack_require__(/*! ./e-search.page.html */ "./src/app/pages/e-search/e-search.page.html"),
            styles: [__webpack_require__(/*! ./e-search.page.scss */ "./src/app/pages/e-search/e-search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ESearchPage);
    return ESearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-e-search-e-search-module.js.map