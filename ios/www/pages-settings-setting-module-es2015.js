(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/setting.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/setting.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>food Journal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"Content\">\n  <ion-grid>\n    <ion-row>\n      <ion-col> <h1>Settings</h1> </ion-col>\n    </ion-row>\n\n    <div class=\"card\">\n      <ion-row>\n        <ion-col size=\"2\"><ion-icon name=\"person\"></ion-icon></ion-col>\n        <ion-col size=\"10\">{{this.username}}</ion-col>\n      </ion-row>\n\n    </div>\n\n    <div class=\"button\">\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"logout()\">\n            Logout\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      </div>\n\n    </ion-grid>\n  </div>\n\n</ion-content>\n\n\n<div>\n  <fiv-app-bar (fivFabClick)=\"fabButtonClick()\" slot=\"bottom\"\n    [titleLayout]=\"titleLayout\" #bar [position]=\"position\" [fabVisible]=\"fabVisible\" [icon]=\"icon\">\n    <fiv-app-bar-tab left icon=\"md-home\" name=\"App Bar\" href=\"/history\">\n    </fiv-app-bar-tab>\n    <fiv-app-bar-tab right href=\"/setting\" icon=\"md-settings\" name=\"Buttons\">\n    </fiv-app-bar-tab>\n  </fiv-app-bar>\n</div>\n\n\n<!-- <ion-footer>\n  <div class=\"footer\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"4\" (click)=\"nav(0)\">\n          <ion-icon name=\"bookmarks\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"nav(1)\">\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"nav(2)\">\n          <ion-icon class=\"selected\" name=\"settings\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer> -->\n");

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/settings/setting.page.ts");
/* harmony import */ var _app_bar_app_bar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-bar/app-bar.module */ "./src/app/app-bar/app-bar.module.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");









const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
let SettingPageModule = class SettingPageModule {
};
SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _app_bar_app_bar_module__WEBPACK_IMPORTED_MODULE_7__["FivAppBarModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_8__["FivIconModule"],
            // FivFabModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/pages/settings/setting.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/settings/setting.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\n\n.footer {\n  height: 10vh;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #f6cd60;\n}\n\n.footer ion-icon {\n  font-size: 3em;\n  color: white;\n}\n\n.footer ion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-content {\n  --background: rgb(246, 205, 96);\n}\n\n.Content {\n  height: 40vh;\n  width: 100%;\n  padding-left: 5vw;\n  padding-right: 5vw;\n  color: white;\n  margin-bottom: 35vh;\n}\n\n.Content .card {\n  background-color: #009979;\n  padding-top: 5vh;\n  padding-bottom: 2vh;\n  border-radius: 25px;\n  margin-bottom: 5vh;\n}\n\nh1 {\n  color: white;\n}\n\n.button {\n  text-align: center;\n}\n\nion-icon {\n  font-size: 2.5em;\n}\n\n.icon {\n  fill: #000;\n}\n\n.selected {\n  color: #009979 !important;\n}\n\nfiv-app-bar {\n  --fiv-color-appbar: rgb(242, 168, 70);\n  --fiv-appbar-background-color: rgb(246, 205, 96);\n  --fiv-color-fab-icon: #009979;\n  --ion-color-primary: white;\n  --fiv-color-icons: white;\n  --fiv-color-icons-active: #009979;\n}\n\nfiv-app-bar-tab {\n  --fiv-appbar-background-color: rgb(242, 168, 70);\n  --fiv-color-icon: white;\n}\n\nfiv-fab {\n  --background: #009979;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNEUjs7QURJSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRlI7O0FETUE7RUFFSSwrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQVVBLG1CQUFBO0FDYko7O0FETUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSlI7O0FEU0E7RUFDRSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtBQ05GOztBRFNBO0VBQ0ksZ0JBQUE7QUNOSjs7QURTQTtFQUNFLFVBQUE7QUNORjs7QURTQTtFQUNJLHlCQUFBO0FDTko7O0FEU0E7RUFDRSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUVBLHdCQUFBO0VBQ0EsaUNBQUE7QUNQRjs7QURVRTtFQUNFLGdEQUFBO0VBQ0EsdUJBQUE7QUNQSjs7QURVRTtFQUNFLHFCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7ICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyMDUsIDk2KTtcblxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1jb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbi5Db250ZW50IHtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XG4gICAgcGFkZGluZy1yaWdodDogNXZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcblxuICAgIC5jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk3OTtcbiAgICAgICAgcGFkZGluZy10b3A6IDV2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAzNXZoO1xufVxuXG5oMXtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5idXR0b257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5pY29uIHtcbiAgZmlsbDogIzAwMDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogIzAwOTk3OSAhaW1wb3J0YW50O1xufVxuXG5maXYtYXBwLWJhcntcbiAgLS1maXYtY29sb3ItYXBwYmFyOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgLS1maXYtYXBwYmFyLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAtLWZpdi1jb2xvci1mYWItaWNvbjogIzAwOTk3OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIHdoaXRlO1xuXG4gIC0tZml2LWNvbG9yLWljb25zOiB3aGl0ZTtcbiAgLS1maXYtY29sb3ItaWNvbnMtYWN0aXZlOiAjMDA5OTc5O1xufVxuICBcbiAgZml2LWFwcC1iYXItdGFie1xuICAgIC0tZml2LWFwcGJhci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWZpdi1jb2xvci1pY29uOiB3aGl0ZTtcbiAgfVxuICBcbiAgZml2LWZhYiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5OTc5O1xuICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q2MDtcbn1cbi5mb290ZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvb3RlciBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuLkNvbnRlbnQge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1yaWdodDogNXZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDM1dmg7XG59XG4uQ29udGVudCAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuLmljb24ge1xuICBmaWxsOiAjMDAwO1xufVxuXG4uc2VsZWN0ZWQge1xuICBjb2xvcjogIzAwOTk3OSAhaW1wb3J0YW50O1xufVxuXG5maXYtYXBwLWJhciB7XG4gIC0tZml2LWNvbG9yLWFwcGJhcjogcmdiKDI0MiwgMTY4LCA3MCk7XG4gIC0tZml2LWFwcGJhci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgLS1maXYtY29sb3ItZmFiLWljb246ICMwMDk5Nzk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IHdoaXRlO1xuICAtLWZpdi1jb2xvci1pY29uczogd2hpdGU7XG4gIC0tZml2LWNvbG9yLWljb25zLWFjdGl2ZTogIzAwOTk3OTtcbn1cblxuZml2LWFwcC1iYXItdGFiIHtcbiAgLS1maXYtYXBwYmFyLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDE2OCwgNzApO1xuICAtLWZpdi1jb2xvci1pY29uOiB3aGl0ZTtcbn1cblxuZml2LWZhYiB7XG4gIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let SettingPage = class SettingPage {
    constructor(router, logService, storage) {
        this.router = router;
        this.logService = logService;
        this.storage = storage;
        this.username = "";
        //footerbar attributes
        this.titleLayout = 'hide';
        this.position = 'center';
        this.fabVisible = true;
        this.icon = 'add';
        this.storage.get('username').then(values => {
            this.logService.username = values;
            this.username = values;
        });
        console.log(this.username);
        console.log(this.logService.username);
        this.username = this.logService.username;
    }
    ngOnInit() {
    }
    fabButtonClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigateByUrl("/entry");
        });
    }
    nav(num) {
        switch (num) {
            case 0:
                this.router.navigateByUrl('/history');
                break;
            case 1:
                this.router.navigateByUrl('/entry');
                break;
            case 2:
                this.router.navigateByUrl('/setting');
                break;
        }
    }
    logout() {
        //logs user out of app, removes user information in storage
        this.logService.username = "";
        this.storage.remove("username");
        this.router.navigateByUrl('login');
    }
};
SettingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/setting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/settings/setting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-setting-module-es2015.js.map