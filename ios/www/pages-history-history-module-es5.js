function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"menu()\">\n        <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <!-- //// -->\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"backdate()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-dropleft\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n      <ion-item class=\"date\" (click)=\"menu()\">\n        <ion-label>\n          {{calendar_date.toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: 'numeric' })}}\n        </ion-label>\n      </ion-item>\n\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"forwarddate()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <!-- //// -->\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <!-- <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon> -->\n        <ion-icon slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"date\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"entries\">\n          <div class=\"title\" *ngIf=\"isToday()\">\n            <a>Today</a>\n          </div>\n          <div>\n            <ion-card *ngFor=\"let log of logs_array\" [id]='log.docId'>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col size=\"10\">\n                    Entry made at {{log.date | date:'hh:mm aa'}}\n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <!-- <ion-icon (click)='deleteEntry(log.docId)' name='trash' style=\"font-size: 30px; color: red;\"></ion-icon> -->\n                  </ion-col>\n                </ion-row>\n\n                <div *ngFor=\"let element of log.entries\">\n                  <hr>\n                  <ion-row *ngIf=\"element.modality === 'voice' || element.modality === 'Voice'\">\n                    <ion-col size=\"2\" class=\"centralize\">\n                      <div class=\"card-icon\">\n                        <img src=\"../../../assets/images/record_voice_over.png\" width=\"48px\" />\n                      </div>\n                    </ion-col>\n                    <ion-col class=\"centralize\">{{element.entry}}</ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"centralize\" *ngIf=\"element.modality === 'foodDsrp'\">\n                    <ion-col size=\"2\">\n                      <div class=\"card-icon\">\n                        <ion-icon name=\"list-box\"></ion-icon>\n                      </div>\n                    </ion-col>\n                    <ion-col>{{element.entry}}</ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"centralize\" *ngIf=\"element.modality === 'Search' || element.modality === 'search' || element.modality === 'database'\">\n                    <ion-col size=\"2\">\n                      <div class=\"card-icon\">\n                        <ion-icon name=\"search\"></ion-icon>\n                      </div>\n                    </ion-col>\n                    <ion-col>\n                      <!-- {{element.entry}} -->\n    \n                      <div class=\"SearchCard\">\n                        <ion-row>\n                          <ion-col size=\"12\">\n                            <h3 class='SearchCardTitle'>\n                              {{element.entry}}\n                            </h3>\n                            <hr>\n                            <p>(example)</p>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col size=\"12\" *ngFor=\"let placeholder of ['Calories', 'Sugar']\">\n                            {{placeholder}}: *\n                          </ion-col>\n                          <ion-col size=\"12\">...</ion-col>\n                        </ion-row>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"centralize\" *ngIf=\"element.modality === 'url'\">\n                    <ion-col size=\"2\">\n                      <div class=\"card-icon\">\n                        <ion-icon name=\"globe\"></ion-icon>\n                      </div>\n                    </ion-col>\n                    <ion-col>{{element.entry}}</ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"centralize\" *ngIf=\"element.modality === 'barcode' || element.modality === 'Barcode'\">\n                    <ion-col size=\"2\">\n                      <div class=\"card-icon\">\n                        <ion-icon name=\"barcode\"></ion-icon>\n                      </div>\n                    </ion-col>\n                    <ion-col>{{element.entry}}</ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"centralize\" *ngIf=\"element.modality === 'foodImg'\">\n                    <ion-col size=\"2\">\n                      <div class=\"card-icon\">\n                        <ion-icon name=\"camera\"></ion-icon>\n                      </div>\n                    </ion-col>\n                    <ion-col><img id='img-{{i}}' [src]=\"element.entry | async\"></ion-col>\n                  </ion-row>\n                </div>\n\n                \n                <hr>\n                <div class=\"centralize_justify\">\n                  <p>Platform: {{log.platform}}</p>\n                </div>\n                <!-- <div *ngIf=\"log.platform == 'mobile'\">\n                  <ion-row class=\"centralize\">\n                    <ion-col size=\"2\">\n                      <ion-icon name=\"phone-portrait\"></ion-icon>\n                    </ion-col>\n                    <ion-col>Platform: {{log.platform}}</ion-col>\n                  </ion-row>\n                </div>\n\n                <div *ngIf=\"log.platform == 'web'\">\n                  <ion-row class=\"centralize\">\n                    <ion-col size=\"2\">\n                      <ion-icon name=\"phone-portrait\"></ion-icon>\n                    </ion-col>\n                    <ion-col>Platform: {{log.web}}</ion-col>\n                  </ion-row>\n                </div>\n                <div *ngIf=\"log.platform == 'watch'\">\n                  <ion-row>\n                    <ion-col size=\"2\">\n                      <ion-icon name=\"watch\"></ion-icon>\n                    </ion-col>\n                    <ion-col>Platform: {{log.platform}}</ion-col>\n                  </ion-row>\n                </div>\n                <div *ngIf=\"log.platform == 'GA/Alexa'\">\n                  <ion-row>\n                    <ion-col size=\"2\">\n                      <ion-icon name=\"mic\"></ion-icon>\n                    </ion-col>\n                    <ion-col>Platform: {{log.platform}}</ion-col>\n                  </ion-row>\n                </div> -->\n\n              </ion-card-content>\n            </ion-card>\n          </div>\n\n          <div *ngIf=\"logs_array.length==0\">\n            <ion-card>\n              <ion-card-content> No entries </ion-card-content>\n            </ion-card>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<!-- ----FOOTER----- -->\n<div>\n  <fiv-app-bar (fivFabClick)=\"fabButtonClick()\" slot=\"bottom\" [titleLayout]=\"titleLayout\" #bar [position]=\"position\"\n    [fabVisible]=\"fabVisible\" [icon]=\"icon\">\n    <fiv-app-bar-tab left icon=\"md-home\" name=\"Home\" href=\"/history\">\n    </fiv-app-bar-tab>\n    <fiv-app-bar-tab right href=\"/setting\" icon=\"md-settings\" name=\"Settings\">\n    </fiv-app-bar-tab>\n  </fiv-app-bar>\n</div>\n\n<!-- <ion-footer>\n  <div class=\"footer\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"4\" (click)=\"nav(0)\">\n          <ion-icon class=\"selected\" name=\"bookmarks\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"nav(1)\">\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" (click)=\"nav(2)\">\n          <ion-icon name=\"settings\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/pages/history/history.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.module.ts ***!
    \*************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");
    /* harmony import */


    var _app_bar_app_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app-bar/app-bar.module */
    "./src/app/app-bar/app-bar.module.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_7__["HistoryPage"]
    }];

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _app_bar_app_bar_module__WEBPACK_IMPORTED_MODULE_8__["FivAppBarModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_5__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_5__["FivFabModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_7__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\n\np {\n  color: white;\n}\n\nion-icon {\n  font-size: 3em;\n  color: white;\n}\n\n.back {\n  text-align: right;\n}\n\n.forward,\n.day {\n  text-align: left;\n}\n\n.date {\n  text-align: center;\n  --background: rgb(242, 168, 70);\n  color: white;\n}\n\nion-content {\n  --background: rgb(246, 205, 96);\n}\n\nion-card {\n  color: white;\n  --background: #009979;\n}\n\nion-card-content {\n  text-align: left;\n}\n\n.card-icon {\n  border-radius: 10px;\n  border: 1.5px solid white;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.centralize {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.centralize_justify {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.selected {\n  color: #009979;\n}\n\n.title {\n  text-align: center;\n  margin-top: 2vh;\n}\n\n.title a {\n  text-decoration: none;\n  color: white;\n  width: 30vh;\n  display: inline-block;\n  line-height: 0.5vh;\n  font-weight: 900;\n  font-size: 2em;\n}\n\nhr {\n  background: white;\n}\n\n.entries {\n  margin-bottom: calc(84px + env(safe-area-inset-bottom));\n}\n\nfiv-app-bar {\n  --fiv-color-appbar: rgb(242, 168, 70);\n  --fiv-appbar-background-color: rgb(246, 205, 96);\n  --fiv-color-fab-icon: #009979;\n  --ion-color-primary: white;\n  --fiv-color-icons: white;\n  --fiv-color-icons-active: #009979;\n}\n\nfiv-app-bar-tab {\n  --fiv-appbar-background-color: rgb(242, 168, 70);\n}\n\nfiv-fab {\n  --background: #009979;\n}\n\n.SearchCard {\n  background-color: #17a2b8;\n  color: white;\n}\n\n.SearchCardTitle {\n  font-size: 1.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQywrQkFBQTtFQUNBLFlBQUE7QUNBRDs7QURHQTtFQUNDLFlBQUE7QUNBRDs7QURHQTtFQUNDLGNBQUE7RUFDQSxZQUFBO0FDQUQ7O0FER0E7RUFDQyxpQkFBQTtBQ0FEOztBREVBOztFQUVDLGdCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQ0VEOztBRENBO0VBRUMsK0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0REOztBRElBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0REOztBRElBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNERDs7QURJQTtFQUNDLGNBQUE7QUNERDs7QURJQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0REOztBREVDO0VBQ0MscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNDLGlCQUFBO0FDREQ7O0FES0E7RUFDQyx1REFBQTtBQ0ZEOztBREtBO0VBQ0MscUNBQUE7RUFDQSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFFQSx3QkFBQTtFQUNBLGlDQUFBO0FDSEQ7O0FETUE7RUFDQyxnREFBQTtBQ0hEOztBRE1BO0VBQ0MscUJBQUE7QUNIRDs7QURNQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtBQ0hEOztBRFNBO0VBQ0UsaUJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG5cdC8vIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG5cdC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWljb24ge1xuXHRmb250LXNpemU6IDNlbTtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uYmFjayB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZvcndhcmQsXG4uZGF5IHtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kYXRlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcblx0Ly8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcblx0LS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuaW9uLWNhcmQge1xuXHRjb2xvcjogd2hpdGU7XG5cdC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkLWljb24ge1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3JkZXI6IDEuNXB4IHNvbGlkIHdoaXRlO1xuXHRwYWRkaW5nOiA1cHg7XG5cdC8vIG1hcmdpbjogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0Ly8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50cmFsaXplIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRyYWxpemVfanVzdGlmeSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuXHRjb2xvcjogIzAwOTk3OTtcbn1cblxuLnRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAydmg7XG5cdGEge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0d2lkdGg6IDMwdmg7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGxpbmUtaGVpZ2h0OiAwLjV2aDtcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTc5O1xuXHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0Zm9udC1zaXplOiAyZW07XG5cdH1cbn1cbmhyIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8vIEdpdmUgcm9vbSBmb3Igc2Nyb2xsaW5nIHRvIGJvdHRvbSBhbmQgY2FyZHMgbm90IHN0dWNrIHVuZGVyIHRoZSBmb290ZXIgYmFyXG4uZW50cmllcyB7XG5cdG1hcmdpbi1ib3R0b206IGNhbGMoODRweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG59XG5cbmZpdi1hcHAtYmFyIHtcblx0LS1maXYtY29sb3ItYXBwYmFyOiByZ2IoMjQyLCAxNjgsIDcwKTtcblx0LS1maXYtYXBwYmFyLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIwNSwgOTYpO1xuXHQtLWZpdi1jb2xvci1mYWItaWNvbjogIzAwOTk3OTtcblx0LS1pb24tY29sb3ItcHJpbWFyeTogd2hpdGU7XG5cblx0LS1maXYtY29sb3ItaWNvbnM6IHdoaXRlO1xuXHQtLWZpdi1jb2xvci1pY29ucy1hY3RpdmU6ICMwMDk5Nzk7XG59XG5cbmZpdi1hcHAtYmFyLXRhYiB7XG5cdC0tZml2LWFwcGJhci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAxNjgsIDcwKTtcbn1cblxuZml2LWZhYiB7XG5cdC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuLlNlYXJjaENhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuXHRjb2xvcjogd2hpdGU7XG5cdC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHQvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cdC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLlNlYXJjaENhcmRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb3J3YXJkLFxuLmRheSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuaW9uLWNhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkLWljb24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50cmFsaXplIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRyYWxpemVfanVzdGlmeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBjb2xvcjogIzAwOTk3OTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG4udGl0bGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzB2aDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMC41dmg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZW50cmllcyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoODRweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG59XG5cbmZpdi1hcHAtYmFyIHtcbiAgLS1maXYtY29sb3ItYXBwYmFyOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgLS1maXYtYXBwYmFyLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAtLWZpdi1jb2xvci1mYWItaWNvbjogIzAwOTk3OTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogd2hpdGU7XG4gIC0tZml2LWNvbG9yLWljb25zOiB3aGl0ZTtcbiAgLS1maXYtY29sb3ItaWNvbnMtYWN0aXZlOiAjMDA5OTc5O1xufVxuXG5maXYtYXBwLWJhci10YWIge1xuICAtLWZpdi1hcHBiYXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMTY4LCA3MCk7XG59XG5cbmZpdi1mYWIge1xuICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbi5TZWFyY2hDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uU2VhcmNoQ2FyZFRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/history/history.page.ts ***!
    \***********************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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


    var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _model_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/card */
    "./src/app/model/card.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _historydate_historydate_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../historydate/historydate.page */
    "./src/app/pages/historydate/historydate.page.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js"); //change dates to times
    //change icons for each entry


    var HistoryPage =
    /*#__PURE__*/
    function () {
      function HistoryPage(router, logService, afs, storage, modalController, afStorage, alertController) {
        _classCallCheck(this, HistoryPage);

        this.router = router;
        this.logService = logService;
        this.afs = afs;
        this.storage = storage;
        this.modalController = modalController;
        this.afStorage = afStorage;
        this.alertController = alertController; //footerbar attributes

        this.titleLayout = 'hide';
        this.position = 'center';
        this.fabVisible = true;
        this.icon = 'add';
      }

      _createClass(HistoryPage, [{
        key: "fabButtonClick",
        value: function fabButtonClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.router.navigateByUrl("/entry");

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(this.logService.username);
          this.calendar_date = new Date();
          this.logs_array = new Array(); //try and catch here because when you reload the app on the history page, it throws an error on logscollection

          try {
            console.log("constructor" + this.logService.username);
            this.logsCollection = this.afs.collection(this.logService.username, function (ref) {
              return ref.orderBy("date", "asc");
            });
            var logs = this.logsCollection.snapshotChanges();
            logs.subscribe(function (array) {
              var new_entries = [];
              array.forEach(function (element) {
                // console.log(element.payload.doc.id, element.payload.doc.data());
                // checks the date
                var ele = element.payload.doc.data();
                console.log("1payload: _________" + ele);
                console.log(ele);
                console.log("2payload: _________");
                var dates = new _model_card__WEBPACK_IMPORTED_MODULE_4__["EntryCard"](ele.date, ele.entries, ele.platform, element.payload.doc.id);

                if (dates.date.getDate() === _this.calendar_date.getDate() && dates.date.getMonth() === _this.calendar_date.getMonth() && dates.date.getFullYear() === _this.calendar_date.getFullYear()) {
                  console.log(dates.entries);

                  if (dates.entries) {
                    for (var i = 0; i < dates.entries.length; ++i) {
                      if (dates.entries[i].modality === "foodImg") {
                        dates.entries[i].entry = _this.afStorage.ref(_this.logService.username + "/" + ele.entries[i].entry).getDownloadURL();
                      }
                    } // entry.push(dates);


                    new_entries.push(dates);
                  }
                }
              });
              _this.logs_array = new_entries;
            });
          } catch (error) {
            this.router.navigateByUrl("login");
          }
        }
      }, {
        key: "nav",
        value: function nav(num) {
          switch (num) {
            case 0:
              this.router.navigateByUrl("/history");
              break;

            case 1:
              this.router.navigateByUrl("/entry");
              break;

            case 2:
              this.router.navigateByUrl("/setting");
              break;
          }
        }
      }, {
        key: "backdate",
        value: function backdate() {
          //moves dates back by one day
          var newday = this.calendar_date.getDate() - 1;
          this.calendar_date.setDate(newday);
          this.logs_array = this.getEntries();
        }
      }, {
        key: "forwarddate",
        value: function forwarddate() {
          //moves the date foward by one day
          var check = new Date();

          if (this.calendar_date.toDateString() == check.toDateString()) {
            this.calendar_date = this.calendar_date;
            this.logs_array.length = 0;
          } else {
            var newday = this.calendar_date.getDate() + 1;
            this.calendar_date.setDate(newday);
          }

          this.logs_array = this.getEntries();
        }
      }, {
        key: "getEntries",
        value: function getEntries() {
          var _this2 = this;

          //gets all entries in the database for user
          var entry = [];
          var logs = this.logsCollection.snapshotChanges();
          logs.subscribe(function (array) {
            array.forEach(function (element) {
              // console.log(element.payload.doc.id, element.payload.doc.data());
              // checks the date
              var ele = element.payload.doc.data();
              var dates = new _model_card__WEBPACK_IMPORTED_MODULE_4__["EntryCard"](ele.date, ele.entries, ele.platform, element.payload.doc.id);

              if (dates.date.getDate() === _this2.calendar_date.getDate() && dates.date.getMonth() === _this2.calendar_date.getMonth() && dates.date.getFullYear() === _this2.calendar_date.getFullYear()) {
                console.log(dates.entries);

                if (dates.entries) {
                  for (var i = 0; i < dates.entries.length; ++i) {
                    if (dates.entries[i].modality === "foodImg") {
                      dates.entries[i].entry = _this2.afStorage.ref(_this2.logService.username + "/" + ele.entries[i].entry).getDownloadURL();
                    }
                  }

                  entry.push(dates);
                }
              }
            });
          });
          return entry;
        }
      }, {
        key: "menu",
        value: function menu() {
          var _this3 = this;

          //opens the modal page for all dates
          this.modalController.create({
            component: _historydate_historydate_page__WEBPACK_IMPORTED_MODULE_8__["HistoryDatePage"],
            componentProps: {}
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function (data) {
              _this3.calendar_date = new Date(data["data"]); //set new calendar date

              _this3.logs_array = _this3.getEntries(); //get new entries for date
            });
          });
        }
      }, {
        key: "deleteEntry",
        value: function deleteEntry(docId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Delete Confirmation!',
                      message: 'Are you sure you want to delete this entry?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          // console.log('Confirm Okay');
                          document.getElementById(docId).remove();

                          _this4.logService.remove(docId);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "isToday",
        value: function isToday() {
          var today = new Date();
          return this.calendar_date.getDate() === today.getDate() && this.calendar_date.getMonth() === today.getMonth() && this.calendar_date.getFullYear() === today.getFullYear();
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }];
    };

    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-history",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/history/history.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map