(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-search-e-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-search/e-search.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-search/e-search.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search For Food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid style=\"height: 100%; display: flex; flex-direction: column\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>\n          <h1 class=\"instructions\">Please describe the terms you would use to search from a database of foods commonly\n            eaten and logged.</h1>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"flex-grow: 0;\">\n      <ion-col size=\"12\" style=\"flex-grow: 0;\">\n        <ion-item lines='none'>\n          <!-- <ion-textarea [(ngModel)]='value' rows=\"6\" cols=\"20\" placeholder=\"Enter Search Query\"></ion-textarea> -->\n          <ion-input [(ngModel)]='value' placeholder=\"Enter Search\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"flex-grow: 1;\">\n      <ion-col size=\"12\" class=\"SearchCardContainer\" style=\"flex-grow: 1;\">\n        <div *ngIf=\"value\" class=\"SearchCard\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <h4>\n                {{value}} (example)\n              </h4>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let placeholder of placeholders\">\n              {{placeholder}}: *\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onSave()'>Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _e_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e-search.page */ "./src/app/pages/e-search/e-search.page.ts");







const routes = [
    {
        path: '',
        component: _e_search_page__WEBPACK_IMPORTED_MODULE_6__["ESearchPage"]
    }
];
let ESearchPageModule = class ESearchPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/e-search/e-search.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/e-search/e-search.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-textarea {\n  background-color: #009979;\n}\nion-input {\n  background-color: #009979;\n  padding-left: 15px;\n}\nion-button {\n  --background: #009979;\n}\n.instructions {\n  color: white;\n}\n.SearchCard {\n  background-color: #17a2b8;\n  color: white;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 5px;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2Utc2VhcmNoL2Utc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZS1zZWFyY2gvZS1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsK0JBQUE7RUFDQSxZQUFBO0FDQUQ7QURFQztFQUNDLFlBQUE7QUNBRjtBRElBO0VBRUMsK0JBQUE7QUNGRDtBREtBO0VBRUMsK0JBQUE7RUFDQSxjQUFBO0FDSEQ7QURLQTtFQUVDLHlCQUFBO0FDSEQ7QURLQTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7QUNGRDtBRElBO0VBQ0MscUJBQUE7QUNERDtBREdBO0VBQ0MsWUFBQTtBQ0FEO0FER0E7RUFDQyx5QkFBQTtFQUNHLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZS1zZWFyY2gvZS1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuXHQvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuXHQtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuXHRjb2xvcjogd2hpdGU7XG5cblx0aW9uLWJhY2stYnV0dG9uIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cbn1cblxuaW9uLWNvbnRlbnQge1xuXHQvLyAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuXHQtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xufVxuXG5pb24taXRlbSB7XG5cdC8vIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG5cdC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG5cdC0tY29sb3I6IHdoaXRlO1xufVxuaW9uLXRleHRhcmVhIHtcblx0Ly8gaGVpZ2h0OiA0NXZoO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTc5O1xufVxuaW9uLWlucHV0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOTk3OTtcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuaW9uLWJ1dHRvbiB7XG5cdC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cbi5pbnN0cnVjdGlvbnMge1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5TZWFyY2hDYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlNlYXJjaENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");




let ESearchPage = class ESearchPage {
    constructor(router, logService, route) {
        this.router = router;
        this.logService = logService;
        this.route = route;
        this.value = '';
        this.index = -1;
        this.placeholders = ["Calories", "Sodium", "Total Fat", "Potassium", "Saturated", "Total Carbs", "Polyunsaturated", "Dietary Fiber", "Cholesterol", "Sugar"];
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        if (id !== null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
        }
    }
    onSave() {
        if (this.value === '') {
            return;
        }
        else {
            if (this.index == -1) {
                const p = new Map();
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
    }
};
ESearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ESearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-e-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./e-search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-search/e-search.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./e-search.page.scss */ "./src/app/pages/e-search/e-search.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ESearchPage);



/***/ })

}]);
//# sourceMappingURL=pages-e-search-e-search-module-es2015.js.map