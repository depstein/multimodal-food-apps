(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-setting-module"],{

/***/ "./src/app/pages/settings/setting.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/settings/setting.module.ts ***!
  \**************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/settings/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/setting.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/settings/setting.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>food Journal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"Content\">\n  <ion-grid>\n    <ion-row>\n      <ion-col> <h1>Settings</h1> </ion-col>\n    </ion-row>\n\n    <div class=\"card\">\n      <ion-row>\n        <ion-col size=\"2\"><ion-icon name=\"person\"></ion-icon></ion-col>\n        <ion-col size=\"10\">{{this.username}}</ion-col>\n      </ion-row>\n\n    </div>\n\n    <div class=\"button\">\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"logout()\">\n            Logout\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      </div>\n\n    </ion-grid>\n  </div>\n\n\n    <div class=\"footer\">\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col id=\"selected\" size=\"4\" (click)=\"nav(0)\"><ion-icon name=\"bookmarks\"></ion-icon></ion-col>\n            <ion-col size=\"4\" (click)=\"nav(1)\"><ion-icon name=\"home\"></ion-icon></ion-col>\n            <ion-col size=\"4\" (click)=\"nav(2)\"><ion-icon class=\"selected\" name=\"settings\" fill=\"#000\"></ion-icon></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/setting.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/settings/setting.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n\n.footer {\n  height: 10vh;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #f6cd60; }\n\n.footer ion-icon {\n    font-size: 3em;\n    color: white; }\n\n.footer ion-col {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; }\n\nion-content {\n  --background: rgb(242, 168, 70); }\n\n.Content {\n  height: 40vh;\n  width: 100%;\n  padding-left: 5vw;\n  padding-right: 5vw;\n  color: white;\n  margin-bottom: 35vh; }\n\n.Content .card {\n    background-color: #94d5e4;\n    padding-top: 5vh;\n    padding-bottom: 2vh;\n    border-radius: 25px;\n    margin-bottom: 5vh; }\n\nh1 {\n  color: white; }\n\n.button {\n  text-align: center; }\n\nion-icon {\n  font-size: 2.5em; }\n\n.icon {\n  fill: #000; }\n\n.selected {\n  color: #afdae2 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBbUMsRUFBQTs7QUFOdkM7SUFVUSxjQUFjO0lBQ2QsWUFBWSxFQUFBOztBQVhwQjtJQWVRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLCtCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFTWixtQkFBbUIsRUFBQTs7QUFkdkI7SUFRUSx5QkFBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBSzFCO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0kseUJBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyMDUsIDk2KTtcblxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1jb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xufVxuXG4uQ29udGVudCB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDV2dztcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDIxMywgMjI4KTtcbiAgICAgICAgcGFkZGluZy10b3A6IDV2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAzNXZoO1xufVxuXG5oMXtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5idXR0b257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5pY29uIHtcbiAgZmlsbDogIzAwMDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogcmdiKDE3NSwgMjE4LCAyMjYpICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/settings/setting.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/settings/setting.page.ts ***!
  \************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var SettingPage = /** @class */ (function () {
    function SettingPage(router, logService, storage) {
        var _this = this;
        this.router = router;
        this.logService = logService;
        this.storage = storage;
        this.username = "";
        this.storage.get('username').then(function (values) {
            _this.logService.username = values;
            _this.username = values;
        });
        console.log(this.username);
        console.log(this.logService.username);
        this.username = this.logService.username;
    }
    SettingPage.prototype.ngOnInit = function () {
    };
    SettingPage.prototype.nav = function (num) {
        switch (num) {
            case 0:
                this.router.navigateByUrl('/history');
                break;
            case 1:
                this.router.navigateByUrl('/home');
                break;
            case 2:
                this.router.navigateByUrl('/setting');
                break;
        }
    };
    SettingPage.prototype.logout = function () {
        //logs user out of app, removes user information in storage
        this.logService.username = "";
        this.storage.remove("username");
        this.router.navigateByUrl('login');
    };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/pages/settings/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/settings/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-setting-module.js.map