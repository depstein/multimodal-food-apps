function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-search-e-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-search/e-search.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-search/e-search.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesESearchESearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Search For Food</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-grid style=\"height: 100%; display: flex; flex-direction: column\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div>\n            <h1 class=\"instructions\">Please describe the terms you would use to search from a database of foods commonly eaten and logged.</h1>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"flex-grow: 1;\">\n        <ion-col size=\"12\">\n          <ion-item lines='none'>\n            <ion-textarea [(ngModel)]='value' rows=\"6\" cols=\"20\" placeholder=\"Enter Search Query\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" class=\"ion-no-margin\" (click)='onSave()'>Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/e-search/e-search.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/e-search/e-search.module.ts ***!
    \***************************************************/

  /*! exports provided: ESearchPageModule */

  /***/
  function srcAppPagesESearchESearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESearchPageModule", function () {
      return ESearchPageModule;
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


    var _e_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./e-search.page */
    "./src/app/pages/e-search/e-search.page.ts");

    var routes = [{
      path: '',
      component: _e_search_page__WEBPACK_IMPORTED_MODULE_6__["ESearchPage"]
    }];

    var ESearchPageModule = function ESearchPageModule() {
      _classCallCheck(this, ESearchPageModule);
    };

    ESearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_e_search_page__WEBPACK_IMPORTED_MODULE_6__["ESearchPage"]]
    })], ESearchPageModule);
    /***/
  },

  /***/
  "./src/app/pages/e-search/e-search.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/e-search/e-search.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesESearchESearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-textarea {\n  background-color: #009979;\n}\nion-button {\n  --background: #009979;\n}\n.instructions {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2Utc2VhcmNoL2Utc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZS1zZWFyY2gvZS1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLFlBQUE7QUNBUjtBRElBO0VBRUksK0JBQUE7QUNGSjtBREtBO0VBRUksK0JBQUE7RUFDQSxjQUFBO0FDSEo7QURLQTtFQUVJLHlCQUFBO0FDSEo7QURLQTtFQUNJLHFCQUFBO0FDRko7QURJQTtFQUNJLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Utc2VhcmNoL2Utc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xufVxuXG5pb24taXRlbSB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuaW9uLXRleHRhcmVhIHtcbiAgICAvLyBoZWlnaHQ6IDQ1dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk3OTtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cbi5pbnN0cnVjdGlvbnMge1xuICAgIGNvbG9yOndoaXRlO1xufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Nzk7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk5Nzk7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/e-search/e-search.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/e-search/e-search.page.ts ***!
    \*************************************************/

  /*! exports provided: ESearchPage */

  /***/
  function srcAppPagesESearchESearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESearchPage", function () {
      return ESearchPage;
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

    var ESearchPage =
    /*#__PURE__*/
    function () {
      function ESearchPage(router, logService, route) {
        _classCallCheck(this, ESearchPage);

        this.router = router;
        this.logService = logService;
        this.route = route;
        this.value = '';
        this.index = -1;
      }

      _createClass(ESearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.paramMap.get("id");

          if (id !== null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
          }
        }
      }, {
        key: "onSave",
        value: function onSave() {
          if (this.value === '') {
            return;
          } else {
            if (this.index == -1) {
              var p = new Map();
              p['modality'] = 'database';
              p['entry'] = this.value;
              this.logService.addEntry(p);
            } else {
              this.logService.data.entries[this.index]['entry'] = this.value;
            }

            this.value = '';
            this.router.navigateByUrl('/entry');
          }
        }
      }]);

      return ESearchPage;
    }();

    ESearchPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ESearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-e-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./e-search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-search/e-search.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./e-search.page.scss */
      "./src/app/pages/e-search/e-search.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ESearchPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-e-search-e-search-module-es5.js.map