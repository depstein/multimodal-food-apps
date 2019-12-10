(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entry-entry-module"],{

/***/ "./src/app/pages/entry/entry.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/entry/entry.module.ts ***!
  \*********************************************/
/*! exports provided: EntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPageModule", function() { return EntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry.page */ "./src/app/pages/entry/entry.page.ts");







var routes = [
    {
        path: '',
        component: _entry_page__WEBPACK_IMPORTED_MODULE_6__["EntryPage"]
    }
];
var EntryPageModule = /** @class */ (function () {
    function EntryPageModule() {
    }
    EntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_entry_page__WEBPACK_IMPORTED_MODULE_6__["EntryPage"]]
        })
    ], EntryPageModule);
    return EntryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/entry/entry.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/entry/entry.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)='onBack()' style=\"color: white;\"><ion-icon name=\"arrow-round-back\" style=\"color: white;\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>Entry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngIf=\"logService.data.entries.length == 0\">\n      <p>Instructions: To get started, click on the blue icon on the bottom left.</p>\n  </div>\n\n  <div *ngIf=\"modalities_list.length > 0\">\n    <p>testing</p>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button id=\"main\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"navigate(0)\"><ion-icon name=\"barcode\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"navigate(1)\"><ion-icon name=\"clipboard\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"navigate(2)\"><ion-icon name=\"search\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"navigate(3)\"><ion-icon name=\"mic\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"navigate(4)\"><ion-icon name=\"globe\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"navigate(5)\"><ion-icon name=\"camera\"></ion-icon></ion-fab-button>\n      \n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"submit\" (click)='onSubmit()'>\n        <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <!-- <h1 *ngIf=\"logService.data.entries.length == 0\">No Entries Yet</h1> -->\n\n  <!-- <div class=\"content\" *ngFor=\"let entry of logService.data.entries; let i = index\">\n    <h4>Index {{i+1}}</h4>\n    <p>Mode: {{entry['modality']}}</p>\n    <p *ngIf=\"entry['entry'] != 'base64_img'\">Entry: {{entry['entry']}}</p>\n    <img src=\"{{entry['data']}}\" *ngIf=\"entry['entry']=='base64_img'\">\n    \n\n    <ion-button (click)=\"edit(i)\">Edit</ion-button>\n  </div> -->\n\n  <div class=\"Content\">\n    <div class=\"card\" *ngIf='logService.data.entries.length != 0'>\n      <ion-grid>\n\n        <!-- <ion-row *ngFor=\"let entry of logService.data.entries; let i = index\">\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'database'\"><ion-icon name=\"search\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'foodDsrp'\"><ion-icon name=\"text\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'url'\"><ion-icon name=\"globe\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'voice'\"><ion-icon name=\"mic\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'foodImg'\"><ion-icon name=\"camera\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'barcode'\"><ion-icon name=\"barcode\"></ion-icon></ion-col>\n\n          <ion-col size=\"6\" *ngIf=\"entry['entry'] != 'base64_img'\">{{entry['entry']}}</ion-col>\n          <ion-col size=\"6\" *ngIf=\"entry['entry'] === 'base64_img'\"><img src=\"{{entry['data']}}\" alt=\"image\"></ion-col>\n\n          <ion-col size=\"2\" (click)=\"onEdit(i)\"><ion-icon name=\"create\"></ion-icon></ion-col>\n          <ion-col size=\"2\" (click)=\"onRemove(i)\"><ion-icon name=\"trash\"></ion-icon></ion-col>\n        </ion-row> -->\n\n        <div *ngFor=\"let entry of logService.data.entries; let i = index\" style=\"margin-bottom: 2vh;\">\n          <ion-row>\n            <!-- <ion-col size=\"9\">TEXT DESCRIPTION</ion-col> -->\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'database'\" style=\"padding-top: 20px;\">Database</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'foodDsrp'\" style=\"padding-top: 20px;\">Text Description</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'url'\" style=\"padding-top: 20px;\">URL</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'voice'\" style=\"padding-top: 20px;\">Voice</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'foodImg'\" style=\"padding-top: 20px;\">Picture</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'barcode'\" style=\"padding-top: 20px;\">Barcode</ion-col>\n\n            <ion-col size=\"3\">\n              <ion-button fill='clear' (click)=\"onRemove(i)\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"data\" style=\"background-color: rgb(148, 213, 228);\">\n            <!-- <ion-col size=\"9\">\n              Chicken Salada\n            </ion-col> -->\n            <ion-col size=\"9\" *ngIf=\"entry['entry'] != 'base64_img'\" style=\"padding-top: 20px;\">{{entry['entry']}}</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['entry'] === 'base64_img'\" style=\"padding-top: 20px;\"><img src=\"{{entry['data']}}\" alt=\"image\"></ion-col>\n\n            <ion-col size=\"3\">\n              <!-- <ion-icon name=\"create\"></ion-icon> -->\n              <ion-button fill='clear' (click)=\"onEdit(i)\"><ion-icon name=\"create\"></ion-icon></ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n      </ion-grid>\n    </div>\n\n    <div *ngIf='logService.data.entries.length == 0'>\n      <h1>No entries yet</h1>\n    </div>\n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/entry/entry.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/entry/entry.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n  ion-toolbar ion-back-button {\n    color: white; }\n  ion-content {\n  --background: rgb(242, 168, 70); }\n  ion-fab #main {\n  --background: var(--ion-color-primary); }\n  ion-fab #submit {\n  --background: var(--ion-color-success); }\n  ion-fab-button {\n  --background: #e48d18;\n  --color: white; }\n  ion-fab-list ion-fab-button {\n  width: 50px;\n  height: 50px; }\n  p {\n  text-align: center;\n  color: white; }\n  .Content {\n  margin-left: 20vw;\n  margin-right: 5vw;\n  color: white; }\n  .Content ion-icon {\n    font-size: 1.5em;\n    color: white; }\n  .delete span {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2VudHJ5L2VudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmhCO0lBS1EsWUFBVyxFQUFBO0VBSW5CO0VBQ0ksK0JBQWEsRUFBQTtFQUdqQjtFQUVRLHNDQUFhLEVBQUE7RUFGckI7RUFPUSxzQ0FBYSxFQUFBO0VBS3JCO0VBQ0kscUJBQWE7RUFDYixjQUFRLEVBQUE7RUFHWjtFQUVRLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFJcEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBd0JkO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7RUFIaEI7SUFNUSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBO0VBUXBCO0VBRVEsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW50cnkvZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbn1cblxuaW9uLWZhYiB7XG4gICAgI21haW4ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgIH1cblxuICAgICNzdWJtaXQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB9XG5cbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI2U0OGQxODtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWZhYi1saXN0IHtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxufVxuXG5we1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gLkNvbnRlbnQge1xuLy8gICAgIGhlaWdodDogNDB2aDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiA1dnc7XG4vLyAgICAgbWFyZ2luLXRvcDogNXZoO1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAuZGF0ZSB7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAuY2FyZCB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDIxMywgMjI4KTtcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDV2aDtcbi8vICAgICAgICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuLy8gICAgIH1cbi8vICAgICBtYXJnaW4tYm90dG9tOiAzNXZoO1xuLy8gfVxuXG4uQ29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxufVxuLy8gLmRhdGEge1xuLy8gICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi5kZWxldGUge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/entry/entry.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/entry/entry.page.ts ***!
  \*******************************************/
/*! exports provided: EntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPage", function() { return EntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EntryPage = /** @class */ (function () {
    function EntryPage(router, logService, alertController, navCtrl) {
        this.router = router;
        this.logService = logService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.modalities_list = [];
    }
    EntryPage.prototype.ngOnInit = function () {
    };
    EntryPage.prototype.onBack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.logService.data.entries.length !== 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Are you sure?',
                                message: 'Do you wish to clear all entries before going back to home page?',
                                buttons: [
                                    {
                                        text: 'Save draft',
                                        handler: function () {
                                            _this.router.navigateByUrl('/home');
                                        }
                                    }, {
                                        text: 'Delete draft',
                                        cssClass: 'delete',
                                        handler: function () {
                                            _this.logService.data.entries = [];
                                            _this.router.navigateByUrl('/home');
                                        }
                                    }, {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            // console.log('Confirm Cancel: blah');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.router.navigateByUrl('/home');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EntryPage.prototype.navigate = function (num) {
        switch (num) {
            case 0:
                this.router.navigateByUrl('e-barcode');
                break;
            case 1:
                this.router.navigateByUrl('e-description');
                break;
            case 2:
                this.router.navigateByUrl('e-search');
                break;
            case 3:
                this.router.navigateByUrl('e-voice');
                break;
            case 4:
                this.router.navigateByUrl('e-url');
                break;
            case 5:
                this.router.navigateByUrl('e-camera');
                break;
        }
    };
    EntryPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.logService.data.entries.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Warning!',
                                message: 'You are not allowed to push empty entry',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.logService.push(function () { _this.router.navigateByUrl('/home'); _this.logService.clear(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryPage.prototype.onRemove = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure? Deletion is unrecoverable',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    cssClass: 'danger',
                                    handler: function () {
                                        // console.log('Confirm Okay');
                                        _this.logService.data.entries = _this.logService.data.entries.filter(function (entry) {
                                            return entry !== _this.logService.data.entries[index];
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryPage.prototype.onEdit = function (index) {
        var m = this.logService.data.entries[index]['modality'];
        if (m === 'foodDsrp') {
            this.router.navigateByUrl('e-description/' + index);
        }
        else if (m === 'foodImg') {
            this.router.navigateByUrl('e-camera/' + index);
        }
        else if (m === 'barcode') {
            this.router.navigateByUrl('e-barcode/' + index);
        }
        else if (m === 'database') {
            this.router.navigateByUrl('e-search/' + index);
        }
        else if (m === 'url') {
            this.router.navigateByUrl('e-url/' + index);
        }
        else if (m === 'voice') {
            this.router.navigateByUrl('e-voice/' + index);
        }
    };
    EntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.page.html */ "./src/app/pages/entry/entry.page.html"),
            styles: [__webpack_require__(/*! ./entry.page.scss */ "./src/app/pages/entry/entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], EntryPage);
    return EntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-entry-entry-module.js.map