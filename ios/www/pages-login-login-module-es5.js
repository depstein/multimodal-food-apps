function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <div class=\"main\">\n    <h1>Ubi-meals</h1>\n    <img src=\"../../assets/images/foodlogging.png\" class=\"logo\">\n\n    <ion-input placeholder='Username' id='username' [(ngModel)]=\"username\">\n    </ion-input>\n\n    <ion-button (click)=\"login()\">\n      Login\n    </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }])],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(246, 205, 96);\n}\n\n.main {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nh1 {\n  color: white;\n  text-align: center;\n  font-size: 3em;\n}\n\nion-input {\n  --background: rgb(242, 168, 70);\n  margin-left: 20vw;\n  margin-right: 20vw;\n  width: 60vw;\n  margin-bottom: 5vh;\n  border-radius: 40px;\n  color: white;\n  text-align: center;\n}\n\nion-button {\n  --background: rgb(242, 168, 70);\n  margin-left: 20vw;\n  margin-right: 20vw;\n  width: 60vw;\n  --border-radius: 40px;\n}\n\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXFpaHVhaS9Eb2N1bWVudHMvR2l0SHViL211bHRpbW9kYWwtZm9vZC1hcHBzL21vYmlsZSB2Mi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0YsUUFBQTtFQUVBLG1DQUFBO1VBQUEsMkJBQUE7QUNERjs7QURLQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUVJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFFSSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURPQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuXG59XG5cbi5tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cblxuaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzZW07XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyMDUsIDk2KTtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDIsIDE2OCwgNzApO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMjB2dztcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHZ3O1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmxvZ297XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDYsIDIwNSwgOTYpO1xufVxuXG4ubWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MiwgMTY4LCA3MCk7XG4gIG1hcmdpbi1sZWZ0OiAyMHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDIwdnc7XG4gIHdpZHRoOiA2MHZ3O1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjgsIDcwKTtcbiAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gIG1hcmdpbi1yaWdodDogMjB2dztcbiAgd2lkdGg6IDYwdnc7XG4gIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(route, logService, storage, alertController) {
        _classCallCheck(this, LoginPage);

        this.route = route;
        this.logService = logService;
        this.storage = storage;
        this.alertController = alertController;
        this.username = "";
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //checks if the user is already logged in
          this.storage.get('username').then(function (values) {
            console.log(values);

            if (values != null) {
              _this.username = values;

              _this.logService.setName(_this.username);

              _this.logService.setPlatform('mobile');

              _this.setData('username', _this.username);

              _this.username = ""; //resets the placeholder

              _this.route.navigateByUrl('history');
            }
          });
        }
      }, {
        key: "setData",
        value: function setData(key, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.set(key, value);

                  case 2:
                    res = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData(key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var keyVal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.storage.get(key);

                  case 2:
                    keyVal = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          this.alertController.create({
            header: 'Invalid Username',
            message: 'Username cannot be empty',
            buttons: ['OK']
          }).then(function (alert) {
            alert.present();
          });
        }
      }, {
        key: "login",
        value: function login() {
          //if username is valid, proceeds to app
          if (this.username != "") {
            this.logService.setName(this.username);
            this.logService.setPlatform('mobile');
            this.setData('username', this.username);
            console.log(this.setData('username', this.username));
            this.username = ""; //resets login to username placeholder

            this.route.navigateByUrl('history');
          } else {
            this.presentAlert();
          }
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map