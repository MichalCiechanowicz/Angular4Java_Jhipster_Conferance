(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speaker-speaker-module"],{

/***/ "3K69":
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/service/speaker.service.ts ***!
  \*************************************************************************/
/*! exports provided: SpeakerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerService", function() { return SpeakerService; });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ "IgDU");
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ "exUl");
/* harmony import */ var _speaker_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speaker.model */ "Crcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");






class SpeakerService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/speakers');
    }
    create(speaker) {
        return this.http.post(this.resourceUrl, speaker, { observe: 'response' });
    }
    update(speaker) {
        return this.http.put(`${this.resourceUrl}/${Object(_speaker_model__WEBPACK_IMPORTED_MODULE_2__["getSpeakerIdentifier"])(speaker)}`, speaker, { observe: 'response' });
    }
    partialUpdate(speaker) {
        return this.http.patch(`${this.resourceUrl}/${Object(_speaker_model__WEBPACK_IMPORTED_MODULE_2__["getSpeakerIdentifier"])(speaker)}`, speaker, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = Object(app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__["createRequestOption"])(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    addSpeakerToCollectionIfMissing(speakerCollection, ...speakersToCheck) {
        const speakers = speakersToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__["isPresent"]);
        if (speakers.length > 0) {
            const speakerCollectionIdentifiers = speakerCollection.map(speakerItem => Object(_speaker_model__WEBPACK_IMPORTED_MODULE_2__["getSpeakerIdentifier"])(speakerItem));
            const speakersToAdd = speakers.filter(speakerItem => {
                const speakerIdentifier = Object(_speaker_model__WEBPACK_IMPORTED_MODULE_2__["getSpeakerIdentifier"])(speakerItem);
                if (speakerIdentifier == null || speakerCollectionIdentifiers.includes(speakerIdentifier)) {
                    return false;
                }
                speakerCollectionIdentifiers.push(speakerIdentifier);
                return true;
            });
            return [...speakersToAdd, ...speakerCollection];
        }
        return speakerCollection;
    }
}
SpeakerService.??fac = function SpeakerService_Factory(t) { return new (t || SpeakerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationConfigService"])); };
SpeakerService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: SpeakerService, factory: SpeakerService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Crcu":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/speaker.model.ts ***!
  \***************************************************************/
/*! exports provided: Speaker, getSpeakerIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpeakerIdentifier", function() { return getSpeakerIdentifier; });
class Speaker {
    constructor(id, firstName, sureName, email, twitter, bio, sessions) {
        this.id = id;
        this.firstName = firstName;
        this.sureName = sureName;
        this.email = email;
        this.twitter = twitter;
        this.bio = bio;
        this.sessions = sessions;
    }
}
function getSpeakerIdentifier(speaker) {
    return speaker.id;
}


/***/ }),

/***/ "JNNw":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/route/speaker-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SpeakerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerRoutingModule", function() { return SpeakerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ "ADQh");
/* harmony import */ var _list_speaker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/speaker.component */ "g6bH");
/* harmony import */ var _detail_speaker_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail/speaker-detail.component */ "WEsX");
/* harmony import */ var _update_speaker_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update/speaker-update.component */ "fGZk");
/* harmony import */ var _speaker_routing_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker-routing-resolve.service */ "nE+5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const speakerRoute = [
    {
        path: '',
        component: _list_speaker_component__WEBPACK_IMPORTED_MODULE_2__["SpeakerComponent"],
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]],
    },
    {
        path: ':id/view',
        component: _detail_speaker_detail_component__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailComponent"],
        resolve: {
            speaker: _speaker_routing_resolve_service__WEBPACK_IMPORTED_MODULE_5__["SpeakerRoutingResolveService"],
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]],
    },
    {
        path: 'new',
        component: _update_speaker_update_component__WEBPACK_IMPORTED_MODULE_4__["SpeakerUpdateComponent"],
        resolve: {
            speaker: _speaker_routing_resolve_service__WEBPACK_IMPORTED_MODULE_5__["SpeakerRoutingResolveService"],
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]],
    },
    {
        path: ':id/edit',
        component: _update_speaker_update_component__WEBPACK_IMPORTED_MODULE_4__["SpeakerUpdateComponent"],
        resolve: {
            speaker: _speaker_routing_resolve_service__WEBPACK_IMPORTED_MODULE_5__["SpeakerRoutingResolveService"],
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]],
    },
];
class SpeakerRoutingModule {
}
SpeakerRoutingModule.??fac = function SpeakerRoutingModule_Factory(t) { return new (t || SpeakerRoutingModule)(); };
SpeakerRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: SpeakerRoutingModule });
SpeakerRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(speakerRoute)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](SpeakerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "MXYe":
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/delete/speaker-delete-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SpeakerDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDeleteDialogComponent", function() { return SpeakerDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_speaker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/speaker.service */ "3K69");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ "Owrn");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








const _c0 = function (a0) { return { id: a0 }; };
function SpeakerDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SpeakerDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.confirmDelete(ctx_r1.speaker.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeakerDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n      Are you sure you want to delete this Speaker?\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeakerDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, ctx_r0.speaker.id));
} }
class SpeakerDeleteDialogComponent {
    constructor(speakerService, activeModal) {
        this.speakerService = speakerService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.speakerService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
SpeakerDeleteDialogComponent.??fac = function SpeakerDeleteDialogComponent_Factory(t) { return new (t || SpeakerDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_speaker_service__WEBPACK_IMPORTED_MODULE_1__["SpeakerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
SpeakerDeleteDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SpeakerDeleteDialogComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["data-cy", "speakerDeleteDialogHeading", "jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], ["id", "jhi-delete-speaker-heading", "jhiTranslate", "gatewayApp.speaker.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["id", "jhi-confirm-delete-speaker", "data-cy", "entityConfirmDeleteButton", "type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function SpeakerDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SpeakerDeleteDialogComponent_form_0_Template, 38, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.speaker);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__["AlertErrorComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], encapsulation: 2 });


/***/ }),

/***/ "RF1D":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/speaker.module.ts ***!
  \****************************************************************/
/*! exports provided: SpeakerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerModule", function() { return SpeakerModule; });
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ "hbEq");
/* harmony import */ var _list_speaker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/speaker.component */ "g6bH");
/* harmony import */ var _detail_speaker_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/speaker-detail.component */ "WEsX");
/* harmony import */ var _update_speaker_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/speaker-update.component */ "fGZk");
/* harmony import */ var _delete_speaker_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/speaker-delete-dialog.component */ "MXYe");
/* harmony import */ var _route_speaker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/speaker-routing.module */ "JNNw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SpeakerModule {
}
SpeakerModule.??fac = function SpeakerModule_Factory(t) { return new (t || SpeakerModule)(); };
SpeakerModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: SpeakerModule });
SpeakerModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _route_speaker_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](SpeakerModule, { declarations: [_list_speaker_component__WEBPACK_IMPORTED_MODULE_1__["SpeakerComponent"], _detail_speaker_detail_component__WEBPACK_IMPORTED_MODULE_2__["SpeakerDetailComponent"], _update_speaker_update_component__WEBPACK_IMPORTED_MODULE_3__["SpeakerUpdateComponent"], _delete_speaker_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SpeakerDeleteDialogComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _route_speaker_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerRoutingModule"]] }); })();


/***/ }),

/***/ "WEsX":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/detail/speaker-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SpeakerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailComponent", function() { return SpeakerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_util_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/data-util.service */ "D60V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ "Owrn");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ "0pEx");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








const _c0 = function (a1) { return ["/session", a1, "view"]; };
function SpeakerDetailComponent_div_4_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const sessions_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, sessions_r2 == null ? null : sessions_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](sessions_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", last_r3 ? "" : ", ", "\n          ");
} }
const _c1 = function (a1) { return ["/speaker", a1, "edit"]; };
function SpeakerDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Speaker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "jhi-alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "dl", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sure Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, SpeakerDetailComponent_div_4_span_80_Template, 5, 5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SpeakerDetailComponent_div_4_Template_button_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.previousState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.speaker.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.speaker.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.speaker.sureName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.speaker.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.speaker.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.speaker.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.speaker.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c1, ctx_r0.speaker.id));
} }
class SpeakerDetailComponent {
    constructor(dataUtils, activatedRoute) {
        this.dataUtils = dataUtils;
        this.activatedRoute = activatedRoute;
        this.speaker = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ speaker }) => {
            this.speaker = speaker;
        });
    }
    byteSize(base64String) {
        return this.dataUtils.byteSize(base64String);
    }
    openFile(base64String, contentType) {
        this.dataUtils.openFile(base64String, contentType);
    }
    previousState() {
        window.history.back();
    }
}
SpeakerDetailComponent.??fac = function SpeakerDetailComponent_Factory(t) { return new (t || SpeakerDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_util_data_util_service__WEBPACK_IMPORTED_MODULE_1__["DataUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SpeakerDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SpeakerDetailComponent, selectors: [["jhi-speaker-detail"]], decls: 8, vars: 1, consts: [[1, "row", "justify-content-center"], [1, "col-8"], [4, "ngIf"], ["data-cy", "speakerDetailsHeading"], ["jhiTranslate", "gatewayApp.speaker.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "global.field.id"], ["jhiTranslate", "gatewayApp.speaker.firstName"], ["jhiTranslate", "gatewayApp.speaker.sureName"], ["jhiTranslate", "gatewayApp.speaker.email"], ["jhiTranslate", "gatewayApp.speaker.twitter"], ["jhiTranslate", "gatewayApp.speaker.bio"], ["jhiTranslate", "gatewayApp.speaker.sessions"], [4, "ngFor", "ngForOf"], ["type", "submit", "data-cy", "entityDetailsBackButton", 1, "btn", "btn-info", 3, "click"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit"], [3, "routerLink"]], template: function SpeakerDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SpeakerDetailComponent_div_4_Template, 100, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.speaker);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__["AlertErrorComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "fGZk":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/update/speaker-update.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SpeakerUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerUpdateComponent", function() { return SpeakerUpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _speaker_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speaker.model */ "Crcu");
/* harmony import */ var app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/util/event-manager.service */ "ksCG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_util_data_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/util/data-util.service */ "D60V");
/* harmony import */ var _service_speaker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/speaker.service */ "3K69");
/* harmony import */ var app_entities_session_service_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/entities/session/service/session.service */ "v50m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ "Owrn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");















function SpeakerUpdateComponent_div_28_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n              This field is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function SpeakerUpdateComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, SpeakerUpdateComponent_div_28_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", (tmp_0_0 = ctx_r0.editForm.get("firstName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function SpeakerUpdateComponent_div_38_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n              This field is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function SpeakerUpdateComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, SpeakerUpdateComponent_div_38_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", (tmp_0_0 = ctx_r1.editForm.get("sureName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function SpeakerUpdateComponent_div_48_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n              This field is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function SpeakerUpdateComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, SpeakerUpdateComponent_div_48_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", (tmp_0_0 = ctx_r2.editForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function SpeakerUpdateComponent_div_58_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n              This field is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function SpeakerUpdateComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, SpeakerUpdateComponent_div_58_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", (tmp_0_0 = ctx_r3.editForm.get("twitter")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function SpeakerUpdateComponent_div_68_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n              This field is required.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function SpeakerUpdateComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, SpeakerUpdateComponent_div_68_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", (tmp_0_0 = ctx_r4.editForm.get("bio")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function SpeakerUpdateComponent_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const sessionOption_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngValue", ctx_r5.getSelectedSession(sessionOption_r11, ctx_r5.editForm.get("sessions").value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("\n              ", sessionOption_r11.id, "\n            ");
} }
class SpeakerUpdateComponent {
    constructor(dataUtils, eventManager, speakerService, sessionService, activatedRoute, fb) {
        this.dataUtils = dataUtils;
        this.eventManager = eventManager;
        this.speakerService = speakerService;
        this.sessionService = sessionService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.sessionsSharedCollection = [];
        this.editForm = this.fb.group({
            id: [],
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            sureName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            twitter: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            bio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            sessions: [],
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ speaker }) => {
            this.updateForm(speaker);
            this.loadRelationshipsOptions();
        });
    }
    byteSize(base64String) {
        return this.dataUtils.byteSize(base64String);
    }
    openFile(base64String, contentType) {
        this.dataUtils.openFile(base64String, contentType);
    }
    setFileData(event, field, isImage) {
        this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
            error: (err) => this.eventManager.broadcast(new app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_3__["EventWithContent"]('gatewayApp.error', Object.assign(Object.assign({}, err), { key: 'error.file.' + err.key }))),
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const speaker = this.createFromForm();
        if (speaker.id !== undefined) {
            this.subscribeToSaveResponse(this.speakerService.update(speaker));
        }
        else {
            this.subscribeToSaveResponse(this.speakerService.create(speaker));
        }
    }
    trackSessionById(index, item) {
        return item.id;
    }
    getSelectedSession(option, selectedVals) {
        if (selectedVals) {
            for (const selectedVal of selectedVals) {
                if (option.id === selectedVal.id) {
                    return selectedVal;
                }
            }
        }
        return option;
    }
    subscribeToSaveResponse(result) {
        result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.onSaveFinalize())).subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
    }
    onSaveSuccess() {
        this.previousState();
    }
    onSaveError() {
        // Api for inheritance.
    }
    onSaveFinalize() {
        this.isSaving = false;
    }
    updateForm(speaker) {
        var _a;
        this.editForm.patchValue({
            id: speaker.id,
            firstName: speaker.firstName,
            sureName: speaker.sureName,
            email: speaker.email,
            twitter: speaker.twitter,
            bio: speaker.bio,
            sessions: speaker.sessions,
        });
        this.sessionsSharedCollection = this.sessionService.addSessionToCollectionIfMissing(this.sessionsSharedCollection, ...((_a = speaker.sessions) !== null && _a !== void 0 ? _a : []));
    }
    loadRelationshipsOptions() {
        this.sessionService
            .query()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => { var _a; return (_a = res.body) !== null && _a !== void 0 ? _a : []; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((sessions) => { var _a; return this.sessionService.addSessionToCollectionIfMissing(sessions, ...((_a = this.editForm.get('sessions').value) !== null && _a !== void 0 ? _a : [])); }))
            .subscribe((sessions) => (this.sessionsSharedCollection = sessions));
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _speaker_model__WEBPACK_IMPORTED_MODULE_2__["Speaker"]()), { id: this.editForm.get(['id']).value, firstName: this.editForm.get(['firstName']).value, sureName: this.editForm.get(['sureName']).value, email: this.editForm.get(['email']).value, twitter: this.editForm.get(['twitter']).value, bio: this.editForm.get(['bio']).value, sessions: this.editForm.get(['sessions']).value });
    }
}
SpeakerUpdateComponent.??fac = function SpeakerUpdateComponent_Factory(t) { return new (t || SpeakerUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](app_core_util_data_util_service__WEBPACK_IMPORTED_MODULE_5__["DataUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_3__["EventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_service_speaker_service__WEBPACK_IMPORTED_MODULE_6__["SpeakerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](app_entities_session_service_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
SpeakerUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: SpeakerUpdateComponent, selectors: [["jhi-speaker-update"]], decls: 105, vars: 11, consts: [[1, "row", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "jhi-speaker-heading", "data-cy", "SpeakerCreateUpdateHeading", "jhiTranslate", "gatewayApp.speaker.home.createOrEditLabel"], [1, "form-group", 3, "hidden"], ["jhiTranslate", "global.field.id", "for", "field_id", 1, "form-control-label"], ["type", "number", "name", "id", "id", "field_id", "data-cy", "id", "formControlName", "id", 1, "form-control", 3, "readonly"], [1, "form-group"], ["jhiTranslate", "gatewayApp.speaker.firstName", "for", "field_firstName", 1, "form-control-label"], ["type", "text", "name", "firstName", "id", "field_firstName", "data-cy", "firstName", "formControlName", "firstName", 1, "form-control"], [4, "ngIf"], ["jhiTranslate", "gatewayApp.speaker.sureName", "for", "field_sureName", 1, "form-control-label"], ["type", "text", "name", "sureName", "id", "field_sureName", "data-cy", "sureName", "formControlName", "sureName", 1, "form-control"], ["jhiTranslate", "gatewayApp.speaker.email", "for", "field_email", 1, "form-control-label"], ["type", "text", "name", "email", "id", "field_email", "data-cy", "email", "formControlName", "email", 1, "form-control"], ["jhiTranslate", "gatewayApp.speaker.twitter", "for", "field_twitter", 1, "form-control-label"], ["type", "text", "name", "twitter", "id", "field_twitter", "data-cy", "twitter", "formControlName", "twitter", 1, "form-control"], ["jhiTranslate", "gatewayApp.speaker.bio", "for", "field_bio", 1, "form-control-label"], ["name", "bio", "id", "field_bio", "data-cy", "bio", "formControlName", "bio", 1, "form-control"], ["jhiTranslate", "gatewayApp.speaker.sessions", "for", "field_sessions"], ["id", "field_sessions", "data-cy", "sessions", "multiple", "", "name", "sessions", "formControlName", "sessions", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "id", "cancel-save", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", "id", "save-entity", "data-cy", "entityCreateSaveButton", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.required", 4, "ngIf"], ["jhiTranslate", "entity.validation.required", 1, "form-text", "text-danger"], [3, "ngValue"]], template: function SpeakerUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngSubmit", function SpeakerUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "\n        Create or edit a Speaker\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](28, SpeakerUpdateComponent_div_28_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](34, "Sure Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](38, SpeakerUpdateComponent_div_38_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](40, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](42, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](44, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](45, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](46, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](47, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](48, SpeakerUpdateComponent_div_48_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](50, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](52, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](54, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](55, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](56, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](57, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](58, SpeakerUpdateComponent_div_58_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](59, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](60, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](62, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](64, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](66, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](67, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](68, SpeakerUpdateComponent_div_68_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](69, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](70, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](72, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](74, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](75, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](77, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](78, SpeakerUpdateComponent_option_78_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](79, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](80, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](81, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](82, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](85, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function SpeakerUpdateComponent_Template_button_click_85_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](86, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](87, "fa-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](88, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](89, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](90, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](91, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](92, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](95, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](96, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](97, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](98, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](99, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](100, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](101, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](102, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](103, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](104, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("hidden", ctx.editForm.get("id").value == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.editForm.get("firstName").invalid && (ctx.editForm.get("firstName").dirty || ctx.editForm.get("firstName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.editForm.get("sureName").invalid && (ctx.editForm.get("sureName").dirty || ctx.editForm.get("sureName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.editForm.get("email").invalid && (ctx.editForm.get("email").dirty || ctx.editForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.editForm.get("twitter").invalid && (ctx.editForm.get("twitter").dirty || ctx.editForm.get("twitter").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.editForm.get("bio").invalid && (ctx.editForm.get("bio").dirty || ctx.editForm.get("bio").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.sessionsSharedCollection)("ngForTrackBy", ctx.trackSessionById);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_10__["AlertErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_z"]], encapsulation: 2 });


/***/ }),

/***/ "g6bH":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/list/speaker.component.ts ***!
  \************************************************************************/
/*! exports provided: SpeakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerComponent", function() { return SpeakerComponent; });
/* harmony import */ var _delete_speaker_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delete/speaker-delete-dialog.component */ "MXYe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_speaker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/speaker.service */ "3K69");
/* harmony import */ var app_core_util_data_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/util/data-util.service */ "D60V");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ "Owrn");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ "0pEx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











function SpeakerComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "No speakers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
const _c0 = function (a1) { return ["/session", a1, "view"]; };
function SpeakerComponent_div_33_tr_42_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const sessions_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](3, _c0, sessions_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](sessions_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", last_r6 ? "" : ", ", "\n            ");
} }
const _c1 = function (a1) { return ["/speaker", a1, "view"]; };
const _c2 = function (a1) { return ["/speaker", a1, "edit"]; };
function SpeakerComponent_div_33_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, SpeakerComponent_div_33_tr_42_span_25_Template, 5, 5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SpeakerComponent_div_33_tr_42_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r8); const speaker_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return ctx_r7.delete(speaker_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const speaker_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](10, _c1, speaker_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](speaker_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](speaker_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](speaker_r3.sureName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](speaker_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](speaker_r3.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](speaker_r3.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", speaker_r3.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](12, _c1, speaker_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](14, _c2, speaker_r3.id));
} }
function SpeakerComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Sure Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, SpeakerComponent_div_33_tr_42_Template, 58, 16, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.speakers)("ngForTrackBy", ctx_r1.trackId);
} }
const _c3 = function () { return ["/speaker/new"]; };
class SpeakerComponent {
    constructor(speakerService, dataUtils, modalService) {
        this.speakerService = speakerService;
        this.dataUtils = dataUtils;
        this.modalService = modalService;
        this.isLoading = false;
    }
    loadAll() {
        this.isLoading = true;
        this.speakerService.query().subscribe((res) => {
            var _a;
            this.isLoading = false;
            this.speakers = (_a = res.body) !== null && _a !== void 0 ? _a : [];
        }, () => {
            this.isLoading = false;
        });
    }
    ngOnInit() {
        this.loadAll();
    }
    trackId(index, item) {
        return item.id;
    }
    byteSize(base64String) {
        return this.dataUtils.byteSize(base64String);
    }
    openFile(base64String, contentType) {
        return this.dataUtils.openFile(base64String, contentType);
    }
    delete(speaker) {
        const modalRef = this.modalService.open(_delete_speaker_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__["SpeakerDeleteDialogComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.speaker = speaker;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
}
SpeakerComponent.??fac = function SpeakerComponent_Factory(t) { return new (t || SpeakerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_service_speaker_service__WEBPACK_IMPORTED_MODULE_2__["SpeakerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](app_core_util_data_util_service__WEBPACK_IMPORTED_MODULE_3__["DataUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
SpeakerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SpeakerComponent, selectors: [["jhi-speaker"]], decls: 36, vars: 6, consts: [["id", "page-heading", "data-cy", "SpeakerHeading"], ["jhiTranslate", "gatewayApp.speaker.home.title"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "mr-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "gatewayApp.speaker.home.refreshListLabel"], ["id", "jh-create-entity", "data-cy", "entityCreateButton", 1, "btn", "btn-primary", "jh-create-entity", "create-speaker", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "gatewayApp.speaker.home.createLabel"], ["class", "alert alert-warning", "id", "no-result", 4, "ngIf"], ["class", "table-responsive", "id", "entities", 4, "ngIf"], ["id", "no-result", 1, "alert", "alert-warning"], ["jhiTranslate", "gatewayApp.speaker.home.notFound"], ["id", "entities", 1, "table-responsive"], ["aria-describedby", "page-heading", 1, "table", "table-striped"], ["scope", "col"], ["jhiTranslate", "global.field.id"], ["jhiTranslate", "gatewayApp.speaker.firstName"], ["jhiTranslate", "gatewayApp.speaker.sureName"], ["jhiTranslate", "gatewayApp.speaker.email"], ["jhiTranslate", "gatewayApp.speaker.twitter"], ["jhiTranslate", "gatewayApp.speaker.bio"], ["jhiTranslate", "gatewayApp.speaker.sessions"], ["data-cy", "entityTable", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-cy", "entityTable"], [3, "routerLink"], [4, "ngFor", "ngForOf"], [1, "text-right"], [1, "btn-group"], ["type", "submit", "data-cy", "entityDetailsButton", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityEditButton", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityDeleteButton", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], [1, "form-control-static", 3, "routerLink"]], template: function SpeakerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Speakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SpeakerComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Create a new Speaker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, SpeakerComponent_div_31_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, SpeakerComponent_div_33_Template, 46, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (ctx.speakers == null ? null : ctx.speakers.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.speakers && ctx.speakers.length > 0);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_8__["AlertErrorComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "nE+5":
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/speaker/route/speaker-routing-resolve.service.ts ***!
  \***************************************************************************************/
/*! exports provided: SpeakerRoutingResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerRoutingResolveService", function() { return SpeakerRoutingResolveService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _speaker_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speaker.model */ "Crcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_speaker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/speaker.service */ "3K69");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class SpeakerRoutingResolveService {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((speaker) => {
                if (speaker.body) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(speaker.body);
                }
                else {
                    this.router.navigate(['404']);
                    return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
                }
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _speaker_model__WEBPACK_IMPORTED_MODULE_2__["Speaker"]());
    }
}
SpeakerRoutingResolveService.??fac = function SpeakerRoutingResolveService_Factory(t) { return new (t || SpeakerRoutingResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_service_speaker_service__WEBPACK_IMPORTED_MODULE_4__["SpeakerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SpeakerRoutingResolveService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: SpeakerRoutingResolveService, factory: SpeakerRoutingResolveService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=speaker-speaker-module.js.map