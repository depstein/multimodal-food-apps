(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/history.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <button (click)=\"menu()\">\n      <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\n    </button>\n    <ion-title>food Journal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"date\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"back\">\n          <button item-right clear (click)=\"backdate()\"><ion-icon name=\"arrow-round-back\"></ion-icon></button>\n        </ion-col>\n\n        <ion-col class=\"date\">\n          <p>{{calendar_date.toDateString()}}</p>\n        </ion-col>\n\n        <ion-col class=\"forward\">\n          <button item-right clear (click)=\"forwarddate()\"><ion-icon name=\"arrow-round-forward\"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <div>\n            <ion-card *ngFor=\"let log of logs_array\">\n              <ion-card-content>\n                Entry made at {{log.date | date:'hh:mm aa'}}<br>\n\n\n                <div *ngIf=\"log.entries[0].modality=='voice'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name=\"play-circle\"></ion-icon></ion-col><ion-col>{{log.entries[0].entry}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.entries[0].modality=='foodDsrp'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name=\"text\"></ion-icon></ion-col><ion-col>{{log.entries[0].entry}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.entries[0].modality=='database'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name=\"search\"></ion-icon></ion-col><ion-col>{{log.entries[0].entry}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.entries[0].modality=='url'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name=\"globe\"></ion-icon></ion-col><ion-col>{{log.entries[0].entry}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.entries[0].modality=='barcode'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name=\"barcode\"></ion-icon></ion-col><ion-col>{{log.entries[0].entry}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.entries[0].modality=='foodImg'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name=\"camera\"></ion-icon></ion-col><ion-col><img id='img-{{i}}' [src]=\"log.entries[0].entry | async\"></ion-col></ion-row>\n                </div>\n\n\n                <div *ngIf=\"log.platform =='ios'\">\n                <ion-row><ion-col size=\"2\"><ion-icon name= \"phone-portrait\"></ion-icon></ion-col><ion-col>{{log.platform}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.platform == 'android'\">\n                  <ion-row><ion-col size=\"2\"><ion-icon name= \"phone-portrait\"></ion-icon></ion-col><ion-col>{{log.platform}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.platform == 'watch'\">\n                <ion-row><ion-col size=\"2\"><ion-icon name=\"watch\"></ion-icon></ion-col><ion-col>{{log.platform}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.platform == 'Alexa'\">\n                <ion-row><ion-col size=\"2\"><ion-icon name=\"mic\"></ion-icon></ion-col><ion-col>{{log.platform}}</ion-col></ion-row>\n                </div>\n                <div *ngIf=\"log.platform == 'Google Home'\">\n                <ion-row><ion-col size=\"2\"><ion-icon name=\"mic\"></ion-icon></ion-col><ion-col>{{log.platform}}</ion-col></ion-row>\n                </div>\n\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n          <div *ngIf=\"logs_array.length==0\">\n            <ion-card>\n              <ion-card-content> No entries </ion-card-content>\n            </ion-card>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n    <div class=\"footer\">\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"4\" (click)=\"nav(0)\"><ion-icon class=\"selected\"name=\"bookmarks\"></ion-icon></ion-col>\n            <ion-col size=\"4\" (click)=\"nav(1)\"><ion-icon name=\"home\"></ion-icon></ion-col>\n            <ion-col size=\"4\" (click)=\"nav(2)\"><ion-icon name=\"settings\"></ion-icon></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(246, 205, 96);\n  color: white; }\n\n.footer {\n  height: 10vh;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #f6cd60; }\n\n.footer ion-col {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; }\n\np {\n  color: white; }\n\nion-icon {\n  font-size: 3em;\n  color: white; }\n\n.back {\n  text-align: right; }\n\n.forward, .day {\n  text-align: left; }\n\n.date {\n  text-align: center; }\n\nion-content {\n  --background: rgb(242, 168, 70); }\n\nion-card {\n  color: white;\n  --background: rgb(175, 218, 226); }\n\nion-card-content {\n  text-align: left; }\n\n.selected {\n  color: #afdae2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUFtQyxFQUFBOztBQU52QztJQVdRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBOztBQUczQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNJLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDSSwrQkFBYSxFQUFBOztBQUdqQjtFQUNFLFlBQVc7RUFDWCxnQ0FBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksY0FBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb290ZXIge1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjA1LCA5Nik7XG5cblxuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cbnB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2t7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZvcndhcmQsIC5kYXl7XG4gIHRleHQtYWxpZ246bGVmdDtcbn1cbi5kYXRle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xufVxuXG5pb24tY2FyZHtcbiAgY29sb3I6d2hpdGU7XG4gIC0tYmFja2dyb3VuZDogcmdiKDE3NSwgMjE4LCAyMjYpO1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiByZ2IoMTc1LCAyMTgsIDIyNik7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _model_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/card */ "./src/app/model/card.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historydate_historydate_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../historydate/historydate.page */ "./src/app/pages/historydate/historydate.page.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");










//change dates to times
//change icons for each entry
var HistoryPage = /** @class */ (function () {
    function HistoryPage(router, logService, afs, storage, modalController, afStorage) {
        this.router = router;
        this.logService = logService;
        this.afs = afs;
        this.storage = storage;
        this.modalController = modalController;
        this.afStorage = afStorage;
        this.calendar_date = new Date();
        this.logs_array = new Array();
        //try and catch here because when you reload the app on the history page, it throws an error on logscollection
        try {
            console.log(this.logService.username);
            this.logsCollection = this.afs.collection(this.logService.username, function (ref) { return ref.orderBy('date', 'asc'); });
            this.logs_array = this.getentries();
        }
        catch (error) {
            this.router.navigateByUrl('login');
        }
    }
    HistoryPage.prototype.ngOnInit = function () {
        console.log(this.logService.username);
    };
    HistoryPage.prototype.nav = function (num) {
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
    HistoryPage.prototype.backdate = function () {
        //moves dates back by one day
        var newday = this.calendar_date.getDate() - 1;
        this.calendar_date.setDate(newday);
        this.logs_array = this.getentries();
    };
    HistoryPage.prototype.forwarddate = function () {
        //moves the date foward by one day
        var check = new Date();
        if (this.calendar_date.toDateString() == check.toDateString()) {
            this.calendar_date = this.calendar_date;
            this.logs_array.length = 0;
        }
        else {
            var newday = this.calendar_date.getDate() + 1;
            this.calendar_date.setDate(newday);
        }
        this.logs_array = this.getentries();
    };
    HistoryPage.prototype.getentries = function () {
        var _this = this;
        //gets all entries in the database for user
        var entry = [];
        var logs = this.logsCollection.valueChanges();
        logs.subscribe(function (array) {
            array.forEach(function (element) {
                // checks the date
                var dates = new _model_card__WEBPACK_IMPORTED_MODULE_4__["EntryCard"](element.date, element.entries, element.platform);
                if ((dates.date.getDate() === _this.calendar_date.getDate())
                    && (dates.date.getMonth() === _this.calendar_date.getMonth())
                    && (dates.date.getFullYear() === _this.calendar_date.getFullYear())) {
                    console.log(dates.entries);
                    if (dates.entries) {
                        for (var i = 0; i < dates.entries.length; ++i) {
                            if (dates.entries[i].modality === 'foodImg') {
                                dates.entries[i].entry = _this.afStorage.ref(_this.logService.username + '/' + element.entries[i].entry).getDownloadURL();
                            }
                        }
                        entry.push(dates);
                    }
                }
            });
        });
        return entry;
    };
    HistoryPage.prototype.menu = function () {
        var _this = this;
        //opens the modal page for all dates
        this.modalController.create({
            component: _historydate_historydate_page__WEBPACK_IMPORTED_MODULE_8__["HistoryDatePage"],
            componentProps: {}
        }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
                _this.calendar_date = new Date(data['data']); //set new calendar date
                _this.logs_array = _this.getentries(); //get new entries for date
            });
        });
    };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.page.html */ "./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module.js.map