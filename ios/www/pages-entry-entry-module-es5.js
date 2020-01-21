function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entry-entry-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entry/entry.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entry/entry.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEntryEntryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)='onBack()' style=\"color: white;\">\n        <ion-icon name=\"arrow-back\" style=\"color: white;\"></ion-icon>Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Entry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button id=\"main\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"navigate(0)\">\n        <ion-icon name=\"barcode\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"navigate(1)\">\n        <ion-icon name=\"clipboard\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"navigate(2)\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"navigate(3)\">\n        <ion-icon name=\"mic\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"navigate(4)\">\n        <ion-icon name=\"globe\"></ion-icon> \n      </ion-fab-button>\n      <ion-fab-button (click)=\"navigate(5)\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"submit\" (click)='onSubmit()'>\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <!-- <h1 *ngIf=\"logService.data.entries.length == 0\">No Entries Yet</h1> -->\n\n  <!-- <div class=\"content\" *ngFor=\"let entry of logService.data.entries; let i = index\">\n    <h4>Index {{i+1}}</h4>\n    <p>Mode: {{entry['modality']}}</p>\n    <p *ngIf=\"entry['entry'] != 'base64_img'\">Entry: {{entry['entry']}}</p>\n    <img src=\"{{entry['data']}}\" *ngIf=\"entry['entry']=='base64_img'\">\n    \n\n    <ion-button (click)=\"edit(i)\">Edit</ion-button>\n  </div> -->\n  <ion-grid *ngIf='logService.data.entries.length == 0'>\n    <ion-row>\n      <ion-col>\n        <div class=\"title\">\n          <h1>No entries</h1>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"Content\">\n    <div class=\"card\" *ngIf='logService.data.entries.length != 0'>\n      <ion-grid>\n\n        <!-- <ion-row *ngFor=\"let entry of logService.data.entries; let i = index\">\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'database'\"><ion-icon name=\"search\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'foodDsrp'\"><ion-icon name=\"text\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'url'\"><ion-icon name=\"globe\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'voice'\"><ion-icon name=\"mic\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'foodImg'\"><ion-icon name=\"camera\"></ion-icon></ion-col>\n          <ion-col size=\"2\" *ngIf=\"entry['modality'] === 'barcode'\"><ion-icon name=\"barcode\"></ion-icon></ion-col>\n\n          <ion-col size=\"6\" *ngIf=\"entry['entry'] != 'base64_img'\">{{entry['entry']}}</ion-col>\n          <ion-col size=\"6\" *ngIf=\"entry['entry'] === 'base64_img'\"><img src=\"{{entry['data']}}\" alt=\"image\"></ion-col>\n\n          <ion-col size=\"2\" (click)=\"onEdit(i)\"><ion-icon name=\"create\"></ion-icon></ion-col>\n          <ion-col size=\"2\" (click)=\"onRemove(i)\"><ion-icon name=\"trash\"></ion-icon></ion-col>\n        </ion-row> -->\n\n        <div *ngFor=\"let entry of logService.data.entries; let i = index\" style=\"margin-bottom: 2vh;\">\n          <ion-row>\n            <!-- <ion-col size=\"9\">TEXT DESCRIPTION</ion-col> -->\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'database'\" style=\"padding-top: 20px;\">Database</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'foodDsrp'\" style=\"padding-top: 20px;\">Text Description\n            </ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'url'\" style=\"padding-top: 20px;\">URL</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'voice'\" style=\"padding-top: 20px;\">Voice</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'foodImg'\" style=\"padding-top: 20px;\">Picture</ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['modality'] === 'barcode'\" style=\"padding-top: 20px;\">Barcode</ion-col>\n\n            <ion-col size=\"3\">\n              <ion-button fill='clear' (click)=\"onRemove(i)\">\n                <ion-icon name=\"close-circle-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"data\" style=\"background-color: #009979;\">\n            <!-- <ion-col size=\"9\">\n              Chicken Salada\n            </ion-col> -->\n            <ion-col size=\"9\" *ngIf=\"entry['entry'] != 'base64_img'\" style=\"padding-top: 20px;\">{{entry['entry']}}\n            </ion-col>\n            <ion-col size=\"9\" *ngIf=\"entry['entry'] === 'base64_img'\" style=\"padding-top: 20px;\"><img\n                src=\"{{entry['data']}}\" alt=\"image\"></ion-col>\n\n            <ion-col size=\"3\">\n              <!-- <ion-icon name=\"create\"></ion-icon> -->\n              <ion-button fill='clear' (click)=\"onEdit(i)\">\n                <ion-icon name=\"create\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n      </ion-grid>\n    </div>\n\n    <!-- <div *ngIf='logService.data.entries.length == 0' class=\"title\">\n      <h1>No entries</h1>\n    </div> -->\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/entry/entry.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/entry/entry.module.ts ***!
    \*********************************************/

  /*! exports provided: EntryPageModule */

  /***/
  function srcAppPagesEntryEntryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryPageModule", function () {
      return EntryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entry.page */
    "./src/app/pages/entry/entry.page.ts");

    var routes = [{
      path: '',
      component: _entry_page__WEBPACK_IMPORTED_MODULE_6__["EntryPage"]
    }];

    var EntryPageModule = function EntryPageModule() {
      _classCallCheck(this, EntryPageModule);
    };

    EntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_entry_page__WEBPACK_IMPORTED_MODULE_6__["EntryPage"]]
    })], EntryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/entry/entry.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/entry/entry.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEntryEntryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-fab #main {\n  --background: var(--ion-color-primary);\n}\nion-fab #submit {\n  --background: var(--ion-color-success);\n}\nion-fab-button {\n  --background: #4ba0b5;\n  --color: white;\n}\nion-fab-list ion-fab-button {\n  width: 50px;\n  height: 50px;\n}\np {\n  text-align: center;\n  color: white;\n}\n.Content {\n  margin-left: 20vw;\n  margin-right: 5vw;\n  color: white;\n}\n.Content ion-icon {\n  font-size: 1.5em;\n  color: white;\n}\n.delete span {\n  color: red;\n}\n.title {\n  text-align: center;\n  margin-top: 2vh;\n}\n.title h1 {\n  text-decoration: none;\n  color: white;\n  width: 30vh;\n  display: inline-block;\n  line-height: 0.5vh;\n  font-weight: 900;\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2VudHJ5L2VudHJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZW50cnkvZW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLFlBQUE7QUNBUjtBRElBO0VBRUksK0JBQUE7QUNGSjtBRE1JO0VBQ0ksc0NBQUE7QUNIUjtBRE9JO0VBQ0ksc0NBQUE7QUNMUjtBRFVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDUEo7QURXSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUlI7QURZQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ1RGO0FEaUNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUM5Qko7QURnQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUM5QlI7QUR1Q0k7RUFDSSxVQUFBO0FDcENSO0FEd0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDckNKO0FEc0NJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUNyQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbnRyeS9lbnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuaW9uLWZhYiB7XG4gICAgI21haW4ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgIH1cblxuICAgICNzdWJtaXQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB9XG5cbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzRiYTBiNTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWZhYi1saXN0IHtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxufVxuXG5we1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gLkNvbnRlbnQge1xuLy8gICAgIGhlaWdodDogNDB2aDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiA1dnc7XG4vLyAgICAgbWFyZ2luLXRvcDogNXZoO1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAuZGF0ZSB7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAuY2FyZCB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiA1dmg7XG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbi8vICAgICB9XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzV2aDtcbi8vIH1cblxuLkNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbn1cbi8vIC5kYXRhIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4uZGVsZXRlIHtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBoMSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMzB2aDtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjV2aDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwOTk3OTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuaW9uLWZhYiAjbWFpbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWZhYiAjc3VibWl0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNGJhMGI1O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWZhYi1saXN0IGlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uQ29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDV2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuLkNvbnRlbnQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuLnRpdGxlIGgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMHZoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwLjV2aDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/entry/entry.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/entry/entry.page.ts ***!
    \*******************************************/

  /*! exports provided: EntryPage */

  /***/
  function srcAppPagesEntryEntryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryPage", function () {
      return EntryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var EntryPage =
    /*#__PURE__*/
    function () {
      function EntryPage(router, logService, alertController, navCtrl) {
        _classCallCheck(this, EntryPage);

        this.router = router;
        this.logService = logService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.modalities_list = [];
      }

      _createClass(EntryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBack",
        value: function onBack() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.logService.data.entries.length !== 0)) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 3;
                    return this.alertController.create({
                      header: 'Are you sure?',
                      message: 'Do you wish to clear all entries before going back to home page?',
                      buttons: [{
                        text: 'Save draft',
                        handler: function handler() {
                          _this.router.navigateByUrl('/history');
                        }
                      }, {
                        text: 'Delete draft',
                        cssClass: 'delete',
                        handler: function handler() {
                          _this.logService.data.entries = [];

                          _this.router.navigateByUrl('/history');
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                    _context.next = 9;
                    break;

                  case 8:
                    this.router.navigateByUrl('/history');

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "navigate",
        value: function navigate(num) {
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
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.logService.data.entries.length === 0)) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 3;
                    return this.alertController.create({
                      header: 'Warning!',
                      message: 'You are not allowed to push empty entry',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert.present();

                  case 6:
                    return _context2.abrupt("return");

                  case 7:
                    this.logService.push(function () {
                      _this2.router.navigateByUrl('/history');

                      _this2.logService.clear();
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onRemove",
        value: function onRemove(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Confirm!',
                      message: 'Are you sure? Deletion is unrecoverable',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Delete',
                        cssClass: 'danger',
                        handler: function handler() {
                          // console.log('Confirm Okay');
                          _this3.logService.data.entries = _this3.logService.data.entries.filter(function (entry) {
                            return entry !== _this3.logService.data.entries[index];
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onEdit",
        value: function onEdit(index) {
          var m = this.logService.data.entries[index]['modality'];

          if (m === 'foodDsrp') {
            this.router.navigateByUrl('e-description/' + index);
          } else if (m === 'foodImg') {
            this.router.navigateByUrl('e-camera/' + index);
          } else if (m === 'barcode') {
            this.router.navigateByUrl('e-barcode/' + index);
          } else if (m === 'database') {
            this.router.navigateByUrl('e-search/' + index);
          } else if (m === 'url') {
            this.router.navigateByUrl('e-url/' + index);
          } else if (m === 'voice') {
            this.router.navigateByUrl('e-voice/' + index);
          }
        }
      }]);

      return EntryPage;
    }();

    EntryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    EntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entry.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entry/entry.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entry.page.scss */
      "./src/app/pages/entry/entry.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], EntryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-entry-entry-module-es5.js.map