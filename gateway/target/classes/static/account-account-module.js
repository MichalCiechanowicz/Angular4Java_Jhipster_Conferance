(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "1dp/":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.route.ts ***!
  \****************************************************************/
/*! exports provided: settingsRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsRoute", function() { return settingsRoute; });
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ "ADQh");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ "wKS3");


const settingsRoute = {
    path: 'settings',
    component: _settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"],
    data: {
        pageTitle: 'global.menu.account.settings',
    },
    canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]],
};


/***/ }),

/***/ "4D2I":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password.service.ts ***!
  \******************************************************************/
/*! exports provided: PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");



class PasswordService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(newPassword, currentPassword) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account/change-password'), { currentPassword, newPassword });
    }
}
PasswordService.??fac = function PasswordService_Factory(t) { return new (t || PasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"])); };
PasswordService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PasswordService, factory: PasswordService.??fac, providedIn: 'root' });


/***/ }),

/***/ "7T/5":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_config_error_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/error.constants */ "QREP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.service */ "bHdV");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../password/password-strength-bar/password-strength-bar.component */ "W6Vj");










const _c0 = ["login"];
function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Registration saved!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Please check your email for confirmation.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Registration failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Please try again later.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Login name already registered!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Please choose another one.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Email is already in use!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Please choose another one.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        The password and its confirmation do not match!\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your username is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your username is required to be at least 1 character.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your username cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your username can only contain letters and digits.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, RegisterComponent_form_25_div_11_small_2_Template, 2, 0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, RegisterComponent_form_25_div_11_small_4_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, RegisterComponent_form_25_div_11_small_6_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, RegisterComponent_form_25_div_11_small_8_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_3_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.pattern);
} }
function RegisterComponent_form_25_div_22_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_22_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email is invalid.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_22_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email is required to be at least 5 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_22_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email cannot be longer than 100 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, RegisterComponent_form_25_div_22_small_2_Template, 2, 0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, RegisterComponent_form_25_div_22_small_4_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, RegisterComponent_form_25_div_22_small_6_Template, 2, 0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, RegisterComponent_form_25_div_22_small_8_Template, 2, 0, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_3_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.maxlength);
} }
function RegisterComponent_form_25_div_33_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your password is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_33_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your password is required to be at least 4 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_33_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your password cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, RegisterComponent_form_25_div_33_small_2_Template, 2, 0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, RegisterComponent_form_25_div_33_small_4_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, RegisterComponent_form_25_div_33_small_6_Template, 2, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r9.registerForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r9.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r9.registerForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function RegisterComponent_form_25_div_46_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your confirmation password is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_46_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your confirmation password is required to be at least 4 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_46_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your confirmation password cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegisterComponent_form_25_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, RegisterComponent_form_25_div_46_small_2_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, RegisterComponent_form_25_div_46_small_4_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, RegisterComponent_form_25_div_46_small_6_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r10.registerForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r10.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r10.registerForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function RegisterComponent_form_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function RegisterComponent_form_25_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r25.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, RegisterComponent_form_25_div_11_Template, 10, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, RegisterComponent_form_25_div_22_Template, 10, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, RegisterComponent_form_25_div_33_Template, 8, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "jhi-password-strength-bar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "New password confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](46, RegisterComponent_form_25_div_46_Template, 8, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](50, "\n          Register\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r5.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](9, 11, "global.form.username.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.registerForm.get("login").invalid && (ctx_r5.registerForm.get("login").dirty || ctx_r5.registerForm.get("login").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](20, 13, "global.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.registerForm.get("email").invalid && (ctx_r5.registerForm.get("email").dirty || ctx_r5.registerForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](31, 15, "global.form.newpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.registerForm.get("password").invalid && (ctx_r5.registerForm.get("password").dirty || ctx_r5.registerForm.get("password").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("passwordToCheck", ctx_r5.registerForm.get("password").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](44, 17, "global.form.confirmpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.registerForm.get("confirmPassword").invalid && (ctx_r5.registerForm.get("confirmPassword").dirty || ctx_r5.registerForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r5.registerForm.invalid);
} }
class RegisterComponent {
    constructor(translateService, registerService, fb) {
        this.translateService = translateService;
        this.registerService = registerService;
        this.fb = fb;
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        this.success = false;
        this.registerForm = this.fb.group({
            login: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                ],
            ],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
        });
    }
    ngAfterViewInit() {
        if (this.login) {
            this.login.nativeElement.focus();
        }
    }
    register() {
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        const password = this.registerForm.get(['password']).value;
        if (password !== this.registerForm.get(['confirmPassword']).value) {
            this.doNotMatch = true;
        }
        else {
            const login = this.registerForm.get(['login']).value;
            const email = this.registerForm.get(['email']).value;
            this.registerService.save({ login, email, password, langKey: this.translateService.currentLang }).subscribe(() => (this.success = true), response => this.processError(response));
        }
    }
    processError(response) {
        if (response.status === 400 && response.error.type === app_config_error_constants__WEBPACK_IMPORTED_MODULE_1__["LOGIN_ALREADY_USED_TYPE"]) {
            this.errorUserExists = true;
        }
        else if (response.status === 400 && response.error.type === app_config_error_constants__WEBPACK_IMPORTED_MODULE_1__["EMAIL_ALREADY_USED_TYPE"]) {
            this.errorEmailExists = true;
        }
        else {
            this.error = true;
        }
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: RegisterComponent, selectors: [["jhi-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.login = _t.first);
    } }, decls: 45, vars: 6, consts: [[1, "row", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "register.title", "data-cy", "registerTitle"], ["class", "alert alert-success", "jhiTranslate", "register.messages.success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "register.messages.error.fail", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "register.messages.error.userexists", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "register.messages.error.emailexists", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "global.messages.error.dontmatch", 4, "ngIf"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mt-3", "alert", "alert-warning"], ["jhiTranslate", "global.messages.info.authenticated.prefix"], ["routerLink", "/login", "jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link"], ["jhiTranslate", "global.messages.info.authenticated.suffix"], ["jhiTranslate", "register.messages.success", 1, "alert", "alert-success"], ["jhiTranslate", "register.messages.error.fail", 1, "alert", "alert-danger"], ["jhiTranslate", "register.messages.error.userexists", 1, "alert", "alert-danger"], ["jhiTranslate", "register.messages.error.emailexists", 1, "alert", "alert-danger"], ["jhiTranslate", "global.messages.error.dontmatch", 1, "alert", "alert-danger"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "login", "jhiTranslate", "global.form.username.label", 1, "form-control-label"], ["type", "text", "id", "login", "name", "login", "formControlName", "login", "data-cy", "username", 1, "form-control", 3, "placeholder"], ["login", ""], [4, "ngIf"], ["for", "email", "jhiTranslate", "global.form.email.label", 1, "form-control-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", "data-cy", "email", 1, "form-control", 3, "placeholder"], ["for", "password", "jhiTranslate", "global.form.newpassword.label", 1, "form-control-label"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", "data-cy", "firstPassword", 1, "form-control", 3, "placeholder"], [3, "passwordToCheck"], ["for", "confirmPassword", "jhiTranslate", "global.form.confirmpassword.label", 1, "form-control-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "formControlName", "confirmPassword", "data-cy", "secondPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", "jhiTranslate", "register.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.maxlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.pattern", 4, "ngIf"], ["jhiTranslate", "register.messages.validate.login.required", 1, "form-text", "text-danger"], ["jhiTranslate", "register.messages.validate.login.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "register.messages.validate.login.maxlength", 1, "form-text", "text-danger"], ["jhiTranslate", "register.messages.validate.login.pattern", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.email.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.confirmpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 1, "form-text", "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, RegisterComponent_div_9_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, RegisterComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, RegisterComponent_div_13_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, RegisterComponent_div_15_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, RegisterComponent_div_17_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, RegisterComponent_form_25_Template, 52, 19, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "If you want to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, ", you can try the default accounts:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "- Administrator (login=\"admin\" and password=\"admin\") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "- User (login=\"user\" and\n          password=\"user\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.errorUserExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.errorEmailExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.doNotMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.success);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_8__["PasswordStrengthBarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "9d2i":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.route.ts ***!
  \****************************************************************/
/*! exports provided: registerRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return registerRoute; });
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "7T/5");

const registerRoute = {
    path: 'register',
    component: _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"],
    data: {
        pageTitle: 'register.title',
    },
};


/***/ }),

/***/ "EqXg":
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PasswordResetFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFinishComponent", function() { return PasswordResetFinishComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _password_reset_finish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-finish.service */ "yWSv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../password/password-strength-bar/password-strength-bar.component */ "W6Vj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const _c0 = ["newPassword"];
function PasswordResetFinishComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "The password reset key is missing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Choose a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Your password couldn't be reset. Remember a password request is only valid for 24 hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Your password has been reset.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, " Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, ".\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        The password and its confirmation do not match!\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                Your password is required.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                Your password is required to be at least 4 characters.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                Your password cannot be longer than 50 characters.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PasswordResetFinishComponent_div_19_div_13_small_2_Template, 2, 0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, PasswordResetFinishComponent_div_19_div_13_small_4_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PasswordResetFinishComponent_div_19_div_13_small_6_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_0_0 = ctx_r7.passwordForm.get("newPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_1_0 = ctx_r7.passwordForm.get("newPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_2_0 = ctx_r7.passwordForm.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function PasswordResetFinishComponent_div_19_div_26_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                Your password confirmation is required.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_26_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                Your password confirmation is required to be at least 4 characters.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_26_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n                Your password confirmation cannot be longer than 50 characters.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PasswordResetFinishComponent_div_19_div_26_small_2_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, PasswordResetFinishComponent_div_19_div_26_small_4_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PasswordResetFinishComponent_div_19_div_26_small_6_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_0_0 = ctx_r8.passwordForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_1_0 = ctx_r8.passwordForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_2_0 = ctx_r8.passwordForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function PasswordResetFinishComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function PasswordResetFinishComponent_div_19_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r15.finishReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, PasswordResetFinishComponent_div_19_div_13_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "jhi-password-strength-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "New password confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, PasswordResetFinishComponent_div_19_div_26_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "\n            Reset Password\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r5.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](11, 7, "global.form.newpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r5.passwordForm.get("newPassword").invalid && (ctx_r5.passwordForm.get("newPassword").dirty || ctx_r5.passwordForm.get("newPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("passwordToCheck", ctx_r5.passwordForm.get("newPassword").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](24, 9, "global.form.confirmpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r5.passwordForm.get("confirmPassword").invalid && (ctx_r5.passwordForm.get("confirmPassword").dirty || ctx_r5.passwordForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx_r5.passwordForm.invalid);
} }
class PasswordResetFinishComponent {
    constructor(passwordResetFinishService, route, fb) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.route = route;
        this.fb = fb;
        this.initialized = false;
        this.doNotMatch = false;
        this.error = false;
        this.success = false;
        this.key = '';
        this.passwordForm = this.fb.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['key']) {
                this.key = params['key'];
            }
            this.initialized = true;
        });
    }
    ngAfterViewInit() {
        if (this.newPassword) {
            this.newPassword.nativeElement.focus();
        }
    }
    finishReset() {
        this.doNotMatch = false;
        this.error = false;
        const newPassword = this.passwordForm.get(['newPassword']).value;
        const confirmPassword = this.passwordForm.get(['confirmPassword']).value;
        if (newPassword !== confirmPassword) {
            this.doNotMatch = true;
        }
        else {
            this.passwordResetFinishService.save(this.key, newPassword).subscribe(() => (this.success = true), () => (this.error = true));
        }
    }
}
PasswordResetFinishComponent.??fac = function PasswordResetFinishComponent_Factory(t) { return new (t || PasswordResetFinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_password_reset_finish_service__WEBPACK_IMPORTED_MODULE_2__["PasswordResetFinishService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
PasswordResetFinishComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PasswordResetFinishComponent, selectors: [["jhi-password-reset-finish"]], viewQuery: function PasswordResetFinishComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.newPassword = _t.first);
    } }, decls: 24, vars: 6, consts: [[1, "row", "justify-content-center"], [1, "col-md-4"], ["jhiTranslate", "reset.finish.title"], ["class", "alert alert-danger", "jhiTranslate", "reset.finish.messages.keymissing", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "global.messages.error.dontmatch", 4, "ngIf"], [4, "ngIf"], ["jhiTranslate", "reset.finish.messages.keymissing", 1, "alert", "alert-danger"], [1, "alert", "alert-warning"], ["jhiTranslate", "reset.finish.messages.info"], [1, "alert", "alert-danger"], ["jhiTranslate", "reset.finish.messages.error"], [1, "alert", "alert-success"], ["jhiTranslate", "reset.finish.messages.success"], ["routerLink", "/login", "jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link"], ["jhiTranslate", "global.messages.error.dontmatch", 1, "alert", "alert-danger"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "newPassword", "jhiTranslate", "global.form.newpassword.label", 1, "form-control-label"], ["type", "password", "id", "newPassword", "name", "newPassword", "formControlName", "newPassword", "data-cy", "resetPassword", 1, "form-control", 3, "placeholder"], ["newPassword", ""], [3, "passwordToCheck"], ["for", "confirmPassword", "jhiTranslate", "global.form.confirmpassword.label", 1, "form-control-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "formControlName", "confirmPassword", "data-cy", "confirmResetPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", "jhiTranslate", "reset.finish.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.confirmpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 1, "form-text", "text-danger"]], template: function PasswordResetFinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, PasswordResetFinishComponent_div_9_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, PasswordResetFinishComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, PasswordResetFinishComponent_div_13_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, PasswordResetFinishComponent_div_15_Template, 10, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, PasswordResetFinishComponent_div_17_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, PasswordResetFinishComponent_div_19_Template, 33, 11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.initialized && !ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.key && !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.doNotMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.key && !ctx.success);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__["PasswordStrengthBarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "I3T8":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.component.ts ***!
  \********************************************************************/
/*! exports provided: ActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateComponent", function() { return ActivateComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _activate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activate.service */ "OiGI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ActivateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Your user account has been activated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, " Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, ".\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ActivateComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Your user could not be activated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " Please use the registration form to sign up.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class ActivateComponent {
    constructor(activateService, route) {
        this.activateService = activateService;
        this.route = route;
        this.error = false;
        this.success = false;
    }
    ngOnInit() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(params => this.activateService.get(params.key))).subscribe(() => (this.success = true), () => (this.error = true));
    }
}
ActivateComponent.??fac = function ActivateComponent_Factory(t) { return new (t || ActivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_activate_service__WEBPACK_IMPORTED_MODULE_2__["ActivateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ActivateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ActivateComponent, selectors: [["jhi-activate"]], decls: 16, vars: 2, consts: [[1, "row", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "activate.title"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "activate.messages.error", 4, "ngIf"], [1, "alert", "alert-success"], ["jhiTranslate", "activate.messages.success"], ["routerLink", "/login", "jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link"], ["jhiTranslate", "activate.messages.error", 1, "alert", "alert-danger"]], template: function ActivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, ActivateComponent_div_9_Template, 10, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, ActivateComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.error);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "OiGI":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.service.ts ***!
  \******************************************************************/
/*! exports provided: ActivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateService", function() { return ActivateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");




class ActivateService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    get(key) {
        return this.http.get(this.applicationConfigService.getEndpointFor('api/activate'), {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('key', key),
        });
    }
}
ActivateService.??fac = function ActivateService_Factory(t) { return new (t || ActivateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"])); };
ActivateService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ActivateService, factory: ActivateService.??fac, providedIn: 'root' });


/***/ }),

/***/ "PVFw":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts ***!
  \******************************************************************************************/
/*! exports provided: passwordResetFinishRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordResetFinishRoute", function() { return passwordResetFinishRoute; });
/* harmony import */ var _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-finish.component */ "EqXg");

const passwordResetFinishRoute = {
    path: 'reset/finish',
    component: _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_0__["PasswordResetFinishComponent"],
    data: {
        pageTitle: 'global.menu.account.password',
    },
};


/***/ }),

/***/ "QREP":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/config/error.constants.ts ***!
  \*******************************************************/
/*! exports provided: PROBLEM_BASE_URL, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROBLEM_BASE_URL", function() { return PROBLEM_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ALREADY_USED_TYPE", function() { return EMAIL_ALREADY_USED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ALREADY_USED_TYPE", function() { return LOGIN_ALREADY_USED_TYPE; });
const PROBLEM_BASE_URL = 'https://www.jhipster.tech/problem';
const EMAIL_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/email-already-used';
const LOGIN_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/login-already-used';


/***/ }),

/***/ "UZ86":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password.component.ts ***!
  \********************************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.service */ "4D2I");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-strength-bar/password-strength-bar.component */ "W6Vj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function PasswordComponent_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Password changed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "An error has occurred!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " The password could not be changed.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        The password and its confirmation do not match!\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_24_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your password is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PasswordComponent_div_4_div_24_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_0_0 = ctx_r5.passwordForm.get("currentPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function PasswordComponent_div_4_div_35_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your password is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_35_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your password is required to be at least 4 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_35_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your password cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PasswordComponent_div_4_div_35_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, PasswordComponent_div_4_div_35_small_4_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PasswordComponent_div_4_div_35_small_6_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_0_0 = ctx_r6.passwordForm.get("newPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_1_0 = ctx_r6.passwordForm.get("newPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_2_0 = ctx_r6.passwordForm.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function PasswordComponent_div_4_div_48_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your confirmation password is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_48_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your confirmation password is required to be at least 4 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_48_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your confirmation password cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordComponent_div_4_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PasswordComponent_div_4_div_48_small_2_Template, 2, 0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, PasswordComponent_div_4_div_48_small_4_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PasswordComponent_div_4_div_48_small_6_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_0_0 = ctx_r7.passwordForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_1_0 = ctx_r7.passwordForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_2_0 = ctx_r7.passwordForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
const _c0 = function (a0) { return { username: a0 }; };
function PasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n        Password for [");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "]\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, PasswordComponent_div_4_div_8_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, PasswordComponent_div_4_div_10_Template, 5, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, PasswordComponent_div_4_div_12_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function PasswordComponent_div_4_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r15.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Current password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, PasswordComponent_div_4_div_24_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, PasswordComponent_div_4_div_35_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "jhi-password-strength-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "New password confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, PasswordComponent_div_4_div_48_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "\n          Save\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const account_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](20, _c0, account_r1.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](account_r1.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.doNotMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r0.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](22, 14, "global.form.currentpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.passwordForm.get("currentPassword").invalid && (ctx_r0.passwordForm.get("currentPassword").dirty || ctx_r0.passwordForm.get("currentPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](33, 16, "global.form.newpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.passwordForm.get("newPassword").invalid && (ctx_r0.passwordForm.get("newPassword").dirty || ctx_r0.passwordForm.get("newPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("passwordToCheck", ctx_r0.passwordForm.get("newPassword").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](46, 18, "global.form.confirmpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.passwordForm.get("confirmPassword").invalid && (ctx_r0.passwordForm.get("confirmPassword").dirty || ctx_r0.passwordForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx_r0.passwordForm.invalid);
} }
class PasswordComponent {
    constructor(passwordService, accountService, fb) {
        this.passwordService = passwordService;
        this.accountService = accountService;
        this.fb = fb;
        this.doNotMatch = false;
        this.error = false;
        this.success = false;
        this.passwordForm = this.fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
        });
    }
    ngOnInit() {
        this.account$ = this.accountService.identity();
    }
    changePassword() {
        this.error = false;
        this.success = false;
        this.doNotMatch = false;
        const newPassword = this.passwordForm.get(['newPassword']).value;
        if (newPassword !== this.passwordForm.get(['confirmPassword']).value) {
            this.doNotMatch = true;
        }
        else {
            this.passwordService.save(newPassword, this.passwordForm.get(['currentPassword']).value).subscribe(() => (this.success = true), () => (this.error = true));
        }
    }
}
PasswordComponent.??fac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_password_service__WEBPACK_IMPORTED_MODULE_2__["PasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
PasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PasswordComponent, selectors: [["jhi-password"]], decls: 9, vars: 3, consts: [[1, "row", "justify-content-center"], ["class", "col-md-8", 4, "ngIf"], [1, "col-md-8"], ["jhiTranslate", "password.title", 3, "translateValues"], ["class", "alert alert-success", "jhiTranslate", "password.messages.success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "password.messages.error", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "global.messages.error.dontmatch", 4, "ngIf"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "currentPassword", "jhiTranslate", "global.form.currentpassword.label", 1, "form-control-label"], ["type", "password", "id", "currentPassword", "name", "currentPassword", "formControlName", "currentPassword", "data-cy", "currentPassword", 1, "form-control", 3, "placeholder"], [4, "ngIf"], ["for", "newPassword", "jhiTranslate", "global.form.newpassword.label", 1, "form-control-label"], ["type", "password", "id", "newPassword", "name", "newPassword", "formControlName", "newPassword", "data-cy", "newPassword", 1, "form-control", 3, "placeholder"], [3, "passwordToCheck"], ["for", "confirmPassword", "jhiTranslate", "global.form.confirmpassword.label", 1, "form-control-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "formControlName", "confirmPassword", "data-cy", "confirmPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", "jhiTranslate", "password.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["jhiTranslate", "password.messages.success", 1, "alert", "alert-success"], ["jhiTranslate", "password.messages.error", 1, "alert", "alert-danger"], ["jhiTranslate", "global.messages.error.dontmatch", 1, "alert", "alert-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.required", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.required", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.confirmpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 1, "form-text", "text-danger"]], template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, PasswordComponent_div_4_Template, 55, 22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 1, ctx.account$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__["PasswordStrengthBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "W6Vj":
/*!*******************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password-strength-bar/password-strength-bar.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PasswordStrengthBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordStrengthBarComponent", function() { return PasswordStrengthBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");


class PasswordStrengthBarComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    measureStrength(p) {
        let force = 0;
        const regex = /[$-/:-?{-~!"^_`[\]]/g; // "
        const lowerLetters = /[a-z]+/.test(p);
        const upperLetters = /[A-Z]+/.test(p);
        const numbers = /[0-9]+/.test(p);
        const symbols = regex.test(p);
        const flags = [lowerLetters, upperLetters, numbers, symbols];
        const passedMatches = flags.filter((isMatchedFlag) => isMatchedFlag === true).length;
        force += 2 * p.length + (p.length >= 10 ? 1 : 0);
        force += passedMatches * 10;
        // penalty (short password)
        force = p.length <= 6 ? Math.min(force, 10) : force;
        // penalty (poor variety of characters)
        force = passedMatches === 1 ? Math.min(force, 10) : force;
        force = passedMatches === 2 ? Math.min(force, 20) : force;
        force = passedMatches === 3 ? Math.min(force, 40) : force;
        return force;
    }
    getColor(s) {
        let idx = 0;
        if (s > 10) {
            if (s <= 20) {
                idx = 1;
            }
            else if (s <= 30) {
                idx = 2;
            }
            else if (s <= 40) {
                idx = 3;
            }
            else {
                idx = 4;
            }
        }
        return { idx: idx + 1, color: this.colors[idx] };
    }
    set passwordToCheck(password) {
        if (password) {
            const c = this.getColor(this.measureStrength(password));
            const element = this.elementRef.nativeElement;
            if (element.className) {
                this.renderer.removeClass(element, element.className);
            }
            const lis = element.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                if (i < c.idx) {
                    this.renderer.setStyle(lis[i], 'backgroundColor', c.color);
                }
                else {
                    this.renderer.setStyle(lis[i], 'backgroundColor', '#DDD');
                }
            }
        }
    }
}
PasswordStrengthBarComponent.??fac = function PasswordStrengthBarComponent_Factory(t) { return new (t || PasswordStrengthBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PasswordStrengthBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PasswordStrengthBarComponent, selectors: [["jhi-password-strength-bar"]], inputs: { passwordToCheck: "passwordToCheck" }, decls: 19, vars: 0, consts: [["id", "strength"], ["jhiTranslate", "global.messages.validate.newpassword.strength"], ["id", "strengthBar"], [1, "point"]], template: function PasswordStrengthBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Password strength:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n");
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], styles: ["ul#strength[_ngcontent-%COMP%] {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px;\n}\n.point[_ngcontent-%COMP%] {\n  background: #ddd;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px;\n}\n.point[_ngcontent-%COMP%]:last-child {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwYXNzd29yZC1zdHJlbmd0aC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzRFQUFBO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxvQkFBQTtBQUVKIiwiZmlsZSI6InBhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5zdGFydCBQYXNzd29yZCBzdHJlbmd0aCBiYXIgc3R5bGVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG51bCNzdHJlbmd0aCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IDJweDtcbn1cblxuLnBvaW50IHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgd2lkdGg6IDIwcHg7XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WuyN":
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts ***!
  \****************************************************************************************/
/*! exports provided: PasswordResetInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitService", function() { return PasswordResetInitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");



class PasswordResetInitService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(mail) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/init'), mail);
    }
}
PasswordResetInitService.??fac = function PasswordResetInitService_Factory(t) { return new (t || PasswordResetInitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"])); };
PasswordResetInitService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PasswordResetInitService, factory: PasswordResetInitService.??fac, providedIn: 'root' });


/***/ }),

/***/ "ZmA1":
/*!**************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts ***!
  \**************************************************************************************/
/*! exports provided: passwordResetInitRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordResetInitRoute", function() { return passwordResetInitRoute; });
/* harmony import */ var _password_reset_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-init.component */ "fW6o");

const passwordResetInitRoute = {
    path: 'reset/request',
    component: _password_reset_init_component__WEBPACK_IMPORTED_MODULE_0__["PasswordResetInitComponent"],
    data: {
        pageTitle: 'global.menu.account.password',
    },
};


/***/ }),

/***/ "bHdV":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.service.ts ***!
  \******************************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");



class RegisterService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(registration) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/register'), registration);
    }
}
RegisterService.??fac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"])); };
RegisterService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RegisterService, factory: RegisterService.??fac, providedIn: 'root' });


/***/ }),

/***/ "fW6o":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PasswordResetInitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitComponent", function() { return PasswordResetInitComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-init.service */ "WuyN");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ "Owrn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








const _c0 = ["email"];
function PasswordResetInitComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Enter the email address you used to register.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetInitComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Check your emails for details on how to reset your password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your email is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your email is invalid.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your email is required to be at least 5 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              Your email cannot be longer than 100 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PasswordResetInitComponent_form_15_div_11_small_2_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, PasswordResetInitComponent_form_15_div_11_small_4_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PasswordResetInitComponent_form_15_div_11_small_6_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, PasswordResetInitComponent_form_15_div_11_small_8_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_0_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_1_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_2_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (tmp_3_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.maxlength);
} }
function PasswordResetInitComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function PasswordResetInitComponent_form_15_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r9.requestReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, PasswordResetInitComponent_form_15_div_11_Template, 10, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n          Reset\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r2.resetRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](9, 4, "global.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.resetRequestForm.get("email").invalid && (ctx_r2.resetRequestForm.get("email").dirty || ctx_r2.resetRequestForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx_r2.resetRequestForm.invalid);
} }
class PasswordResetInitComponent {
    constructor(passwordResetInitService, fb) {
        this.passwordResetInitService = passwordResetInitService;
        this.fb = fb;
        this.success = false;
        this.resetRequestForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
        });
    }
    ngAfterViewInit() {
        if (this.email) {
            this.email.nativeElement.focus();
        }
    }
    requestReset() {
        this.passwordResetInitService.save(this.resetRequestForm.get(['email']).value).subscribe(() => (this.success = true));
    }
}
PasswordResetInitComponent.??fac = function PasswordResetInitComponent_Factory(t) { return new (t || PasswordResetInitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__["PasswordResetInitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
PasswordResetInitComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PasswordResetInitComponent, selectors: [["jhi-password-reset-init"]], viewQuery: function PasswordResetInitComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.email = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "row", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "reset.request.title"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "alert", "alert-warning"], ["jhiTranslate", "reset.request.messages.info"], [1, "alert", "alert-success"], ["jhiTranslate", "reset.request.messages.success"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email", "jhiTranslate", "global.form.email.label", 1, "form-control-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", "data-cy", "emailResetPassword", 1, "form-control", 3, "placeholder"], ["email", ""], [4, "ngIf"], ["type", "submit", "jhiTranslate", "reset.request.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.email.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.maxlength", 1, "form-text", "text-danger"]], template: function PasswordResetInitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, PasswordResetInitComponent_div_11_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, PasswordResetInitComponent_div_13_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, PasswordResetInitComponent_form_15_Template, 17, 6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.success);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__["AlertErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "hL1z":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/account/account.route.ts ***!
  \******************************************************/
/*! exports provided: accountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountState", function() { return accountState; });
/* harmony import */ var _activate_activate_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate/activate.route */ "p8yI");
/* harmony import */ var _password_password_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password/password.route */ "r17L");
/* harmony import */ var _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.route */ "PVFw");
/* harmony import */ var _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.route */ "ZmA1");
/* harmony import */ var _register_register_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.route */ "9d2i");
/* harmony import */ var _settings_settings_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.route */ "1dp/");






const ACCOUNT_ROUTES = [_activate_activate_route__WEBPACK_IMPORTED_MODULE_0__["activateRoute"], _password_password_route__WEBPACK_IMPORTED_MODULE_1__["passwordRoute"], _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_2__["passwordResetFinishRoute"], _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_3__["passwordResetInitRoute"], _register_register_route__WEBPACK_IMPORTED_MODULE_4__["registerRoute"], _settings_settings_route__WEBPACK_IMPORTED_MODULE_5__["settingsRoute"]];
const accountState = [
    {
        path: '',
        children: ACCOUNT_ROUTES,
    },
];


/***/ }),

/***/ "m2Db":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/account/account.module.ts ***!
  \*******************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "hbEq");
/* harmony import */ var _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password/password-strength-bar/password-strength-bar.component */ "W6Vj");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "7T/5");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate/activate.component */ "I3T8");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password/password.component */ "UZ86");
/* harmony import */ var _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.component */ "fW6o");
/* harmony import */ var _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.component */ "EqXg");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "wKS3");
/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account.route */ "hL1z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AccountModule {
}
AccountModule.??fac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AccountModule });
AccountModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_account_route__WEBPACK_IMPORTED_MODULE_9__["accountState"])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AccountModule, { declarations: [_activate_activate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        _password_password_component__WEBPACK_IMPORTED_MODULE_5__["PasswordComponent"],
        _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_2__["PasswordStrengthBarComponent"],
        _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_6__["PasswordResetInitComponent"],
        _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetFinishComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "p8yI":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.route.ts ***!
  \****************************************************************/
/*! exports provided: activateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateRoute", function() { return activateRoute; });
/* harmony import */ var _activate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate.component */ "I3T8");

const activateRoute = {
    path: 'activate',
    component: _activate_component__WEBPACK_IMPORTED_MODULE_0__["ActivateComponent"],
    data: {
        pageTitle: 'activate.title',
    },
};


/***/ }),

/***/ "r17L":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password.route.ts ***!
  \****************************************************************/
/*! exports provided: passwordRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordRoute", function() { return passwordRoute; });
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ "ADQh");
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.component */ "UZ86");


const passwordRoute = {
    path: 'password',
    component: _password_component__WEBPACK_IMPORTED_MODULE_1__["PasswordComponent"],
    data: {
        pageTitle: 'global.menu.account.password',
    },
    canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__["UserRouteAccessService"]],
};


/***/ }),

/***/ "wKS3":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.component.ts ***!
  \********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/language.constants */ "pCeh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ "TXJZ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert-error.component */ "Owrn");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/language/find-language-from-key.pipe */ "AYgL");










const _c0 = function (a0) { return { username: a0 }; };
function SettingsComponent_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        User settings for [");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "]\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](2, _c0, ctx_r0.account.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.account.login);
} }
function SettingsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Settings saved!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your first name is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_10_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your first name is required to be at least 1 character.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_10_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your first name cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, SettingsComponent_form_12_div_10_small_2_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, SettingsComponent_form_12_div_10_small_4_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, SettingsComponent_form_12_div_10_small_6_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r3.settingsForm.get("firstName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r3.settingsForm.get("firstName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r3.settingsForm.get("firstName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function SettingsComponent_form_12_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your last name is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_21_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your last name is required to be at least 1 character.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_21_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your last name cannot be longer than 50 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, SettingsComponent_form_12_div_21_small_2_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, SettingsComponent_form_12_div_21_small_4_Template, 2, 0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, SettingsComponent_form_12_div_21_small_6_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r4.settingsForm.get("lastName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r4.settingsForm.get("lastName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r4.settingsForm.get("lastName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function SettingsComponent_form_12_div_32_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_32_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email is invalid.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_32_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email is required to be at least 5 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_32_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n              Your email cannot be longer than 100 characters.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SettingsComponent_form_12_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, SettingsComponent_form_12_div_32_small_2_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, SettingsComponent_form_12_div_32_small_4_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, SettingsComponent_form_12_div_32_small_6_Template, 2, 0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, SettingsComponent_form_12_div_32_small_8_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_0_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_1_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_2_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", (tmp_3_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.maxlength);
} }
function SettingsComponent_form_12_div_35_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "findLanguageFromKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const language_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", language_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 2, language_r18));
} }
function SettingsComponent_form_12_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, SettingsComponent_form_12_div_35_option_7_Template, 3, 4, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r6.languages);
} }
function SettingsComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function SettingsComponent_form_12_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r19.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, SettingsComponent_form_12_div_10_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, SettingsComponent_form_12_div_21_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, SettingsComponent_form_12_div_32_Template, 10, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, SettingsComponent_form_12_div_35_Template, 10, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "\n          Save\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r2.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](8, 9, "settings.form.firstname.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.settingsForm.get("firstName").invalid && (ctx_r2.settingsForm.get("firstName").dirty || ctx_r2.settingsForm.get("firstName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](19, 11, "settings.form.lastname.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.settingsForm.get("lastName").invalid && (ctx_r2.settingsForm.get("lastName").dirty || ctx_r2.settingsForm.get("lastName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](30, 13, "global.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.settingsForm.get("email").invalid && (ctx_r2.settingsForm.get("email").dirty || ctx_r2.settingsForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.languages && ctx_r2.languages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r2.settingsForm.invalid);
} }
class SettingsComponent {
    constructor(accountService, fb, translateService) {
        this.accountService = accountService;
        this.fb = fb;
        this.translateService = translateService;
        this.success = false;
        this.languages = app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__["LANGUAGES"];
        this.settingsForm = this.fb.group({
            firstName: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
            lastName: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]],
            email: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            langKey: [undefined],
        });
    }
    ngOnInit() {
        this.accountService.identity().subscribe(account => {
            if (account) {
                this.settingsForm.patchValue({
                    firstName: account.firstName,
                    lastName: account.lastName,
                    email: account.email,
                    langKey: account.langKey,
                });
                this.account = account;
            }
        });
    }
    save() {
        this.success = false;
        this.account.firstName = this.settingsForm.get('firstName').value;
        this.account.lastName = this.settingsForm.get('lastName').value;
        this.account.email = this.settingsForm.get('email').value;
        this.account.langKey = this.settingsForm.get('langKey').value;
        this.accountService.save(this.account).subscribe(() => {
            this.success = true;
            this.accountService.authenticate(this.account);
            if (this.account.langKey !== this.translateService.currentLang) {
                this.translateService.use(this.account.langKey);
            }
        });
    }
}
SettingsComponent.??fac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
SettingsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: SettingsComponent, selectors: [["jhi-settings"]], decls: 17, vars: 3, consts: [[1, "row", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "settings.title", 3, "translateValues", 4, "ngIf"], ["class", "alert alert-success", "jhiTranslate", "settings.messages.success", 4, "ngIf"], ["name", "form", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["jhiTranslate", "settings.title", 3, "translateValues"], ["jhiTranslate", "settings.messages.success", 1, "alert", "alert-success"], ["name", "form", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstName", "jhiTranslate", "settings.form.firstname", 1, "form-control-label"], ["type", "text", "id", "firstName", "name", "firstName", "formControlName", "firstName", "data-cy", "firstname", 1, "form-control", 3, "placeholder"], [4, "ngIf"], ["for", "lastName", "jhiTranslate", "settings.form.lastname", 1, "form-control-label"], ["type", "text", "id", "lastName", "name", "lastName", "formControlName", "lastName", "data-cy", "lastname", 1, "form-control", 3, "placeholder"], ["for", "email", "jhiTranslate", "global.form.email.label", 1, "form-control-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", "data-cy", "email", 1, "form-control", 3, "placeholder"], ["class", "form-group", 4, "ngIf"], ["type", "submit", "jhiTranslate", "settings.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.firstname.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.firstname.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.firstname.maxlength", 4, "ngIf"], ["jhiTranslate", "settings.messages.validate.firstname.required", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.firstname.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.firstname.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.lastname.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.lastname.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.lastname.maxlength", 4, "ngIf"], ["jhiTranslate", "settings.messages.validate.lastname.required", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.lastname.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.lastname.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.email.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.maxlength", 1, "form-text", "text-danger"], ["for", "langKey", "jhiTranslate", "settings.form.language"], ["id", "langKey", "name", "langKey", "formControlName", "langKey", "data-cy", "langKey", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, SettingsComponent_h2_6_Template, 5, 4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, SettingsComponent_div_8_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, SettingsComponent_form_12_Template, 40, 15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.account);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__["AlertErrorComponent"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_z"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_8__["FindLanguageFromKeyPipe"]], encapsulation: 2 });


/***/ }),

/***/ "yWSv":
/*!********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts ***!
  \********************************************************************************************/
/*! exports provided: PasswordResetFinishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFinishService", function() { return PasswordResetFinishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");



class PasswordResetFinishService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(key, newPassword) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/finish'), { key, newPassword });
    }
}
PasswordResetFinishService.??fac = function PasswordResetFinishService_Factory(t) { return new (t || PasswordResetFinishService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"])); };
PasswordResetFinishService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PasswordResetFinishService, factory: PasswordResetFinishService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map