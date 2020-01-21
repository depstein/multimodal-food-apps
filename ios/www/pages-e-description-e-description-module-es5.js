function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e-description-e-description-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-description/e-description.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-description/e-description.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEDescriptionEDescriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Describe your food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-item>\n          <ion-label position=\"floating\">Enter description</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n    <ion-button expand='full'>Save</ion-button> -->\n\n  <ion-grid style=\"height: 100%; display: flex; flex-direction: column\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>\n          <h1 class=\"instructions\">Please describe what you ate in whatever form would be most useful for you.</h1>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"flex-grow: 1;\">\n      <ion-col size=\"12\">\n        <ion-item lines='none'>\n          <ion-textarea [(ngModel)]='value' rows=\"6\" cols=\"20\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"onSave()\">Save</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/e-description/e-description.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/e-description/e-description.module.ts ***!
    \*************************************************************/

  /*! exports provided: EDescriptionPageModule */

  /***/
  function srcAppPagesEDescriptionEDescriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EDescriptionPageModule", function () {
      return EDescriptionPageModule;
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


    var _e_description_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./e-description.page */
    "./src/app/pages/e-description/e-description.page.ts");

    var routes = [{
      path: '',
      component: _e_description_page__WEBPACK_IMPORTED_MODULE_6__["EDescriptionPage"]
    }];

    var EDescriptionPageModule = function EDescriptionPageModule() {
      _classCallCheck(this, EDescriptionPageModule);
    };

    EDescriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_e_description_page__WEBPACK_IMPORTED_MODULE_6__["EDescriptionPage"]]
    })], EDescriptionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/e-description/e-description.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/e-description/e-description.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEDescriptionEDescriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(242, 168, 70);\n  color: white;\n}\nion-toolbar ion-back-button {\n  color: white;\n}\nion-content {\n  --background: rgb(246, 205, 96);\n}\nion-item {\n  --background: rgb(246, 205, 96);\n  --color: white;\n}\nion-button {\n  --background: #009979;\n}\nion-textarea {\n  background-color: #009979;\n}\n.instructions {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2UtZGVzY3JpcHRpb24vZS1kZXNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2UtZGVzY3JpcHRpb24vZS1kZXNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtFQUVBLFlBQUE7QUNESjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FES0E7RUFFSSwrQkFBQTtBQ0hKO0FETUE7RUFFSSwrQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE9BO0VBQ0kscUJBQUE7QUNKSjtBRE9BO0VBRUkseUJBQUE7QUNMSjtBRFFBO0VBQ0ksWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZS1kZXNjcmlwdGlvbi9lLWRlc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG5cbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0NiwgMjA1LCA5Nik7XG4gICAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgICAvLyBoZWlnaHQ6IDQ1dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk3OTtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gICAgY29sb3I6d2hpdGU7XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzAwOTk3OTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk3OTtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/e-description/e-description.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/e-description/e-description.page.ts ***!
    \***********************************************************/

  /*! exports provided: EDescriptionPage */

  /***/
  function srcAppPagesEDescriptionEDescriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EDescriptionPage", function () {
      return EDescriptionPage;
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


    var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EDescriptionPage =
    /*#__PURE__*/
    function () {
      function EDescriptionPage(logService, router, route) {
        _classCallCheck(this, EDescriptionPage);

        this.logService = logService;
        this.router = router;
        this.route = route;
        this.value = '';
        this.index = -1;
      }

      _createClass(EDescriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.paramMap.get('id');

          if (id != null) {
            this.index = parseInt(id, 10);
            this.value = this.logService.data.entries[this.index]['entry'];
          }
        }
      }, {
        key: "onSave",
        value: function onSave() {
          if (this.value !== '') {
            // save
            if (this.index == -1) {
              var p = new Map();
              p['modality'] = 'foodDsrp';
              p['entry'] = this.value;
              this.logService.addEntry(p);
            } else {
              this.logService.data.entries[this.index]['entry'] = this.value;
            }

            this.value = '';
            this.router.navigateByUrl('/entry');
          } else {
            // empty value
            return;
          }
        }
      }]);

      return EDescriptionPage;
    }();

    EDescriptionPage.ctorParameters = function () {
      return [{
        type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EDescriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-e-description',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./e-description.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-description/e-description.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./e-description.page.scss */
      "./src/app/pages/e-description/e-description.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], EDescriptionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-e-description-e-description-module-es5.js.map