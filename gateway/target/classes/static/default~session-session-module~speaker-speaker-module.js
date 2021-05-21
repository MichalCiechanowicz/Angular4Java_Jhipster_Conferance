(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~session-session-module~speaker-speaker-module"],{

/***/ "D60V":
/*!************************************************************!*\
  !*** ./src/main/webapp/app/core/util/data-util.service.ts ***!
  \************************************************************/
/*! exports provided: DataUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUtils", function() { return DataUtils; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * An utility service for data.
 */
class DataUtils {
    /**
     * Method to find the byte size of the string provides
     */
    byteSize(base64String) {
        return this.formatAsBytes(this.size(base64String));
    }
    /**
     * Method to open file
     */
    openFile(data, contentType) {
        contentType = contentType !== null && contentType !== void 0 ? contentType : '';
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (window.navigator.msSaveOrOpenBlob) {
            // To support IE
            const byteCharacters = atob(data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {
                type: contentType,
            });
            window.navigator.msSaveOrOpenBlob(blob);
        }
        else {
            // Other browsers
            const fileURL = `data:${contentType};base64,${data}`;
            const win = window.open();
            win === null || win === void 0 ? void 0 : win.document.write('<iframe src="' +
                fileURL +
                '" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>');
        }
    }
    /**
     * Sets the base 64 data & file type of the 1st file on the event (event.target.files[0]) in the passed entity object
     * and returns an observable.
     *
     * @param event the object containing the file (at event.target.files[0])
     * @param editForm the form group where the input field is located
     * @param field the field name to set the file's 'base 64 data' on
     * @param isImage boolean representing if the file represented by the event is an image
     * @returns an observable that loads file to form field and completes if sussessful
     *      or returns error as FileLoadError on failure
     */
    loadFileToForm(event, editForm, field, isImage) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            var _a;
            const eventTarget = event.target;
            if ((_a = eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.files) === null || _a === void 0 ? void 0 : _a[0]) {
                const file = eventTarget.files[0];
                if (isImage && !file.type.startsWith('image/')) {
                    const error = {
                        message: `File was expected to be an image but was found to be '${file.type}'`,
                        key: 'not.image',
                        params: { fileType: file.type },
                    };
                    observer.error(error);
                }
                else {
                    const fieldContentType = field + 'ContentType';
                    this.toBase64(file, (base64Data) => {
                        editForm.patchValue({
                            [field]: base64Data,
                            [fieldContentType]: file.type,
                        });
                        observer.next();
                        observer.complete();
                    });
                }
            }
            else {
                const error = {
                    message: 'Could not extract file',
                    key: 'could.not.extract',
                    params: { event },
                };
                observer.error(error);
            }
        });
    }
    /**
     * Method to convert the file to base64
     */
    toBase64(file, callback) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            var _a;
            if (typeof ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) === 'string') {
                const base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
                callback(base64Data);
            }
        };
        fileReader.readAsDataURL(file);
    }
    endsWith(suffix, str) {
        return str.includes(suffix, str.length - suffix.length);
    }
    paddingSize(value) {
        if (this.endsWith('==', value)) {
            return 2;
        }
        if (this.endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
    size(value) {
        return (value.length / 4) * 3 - this.paddingSize(value);
    }
    formatAsBytes(size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    }
}
DataUtils.ɵfac = function DataUtils_Factory(t) { return new (t || DataUtils)(); };
DataUtils.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataUtils, factory: DataUtils.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IgDU":
/*!****************************************************!*\
  !*** ./src/main/webapp/app/core/util/operators.ts ***!
  \****************************************************/
/*! exports provided: isPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/*
 * Function used to workaround https://github.com/microsoft/TypeScript/issues/16069
 * es2019 alternative `const filteredArr = myArr.flatMap((x) => x ? x : []);`
 */
function isPresent(t) {
    return t !== undefined && t !== null;
}


/***/ }),

/***/ "XcTY":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/session/session.model.ts ***!
  \***************************************************************/
/*! exports provided: Session, getSessionIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionIdentifier", function() { return getSessionIdentifier; });
class Session {
    constructor(id, title, description, startTime, endTime, speakers) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.speakers = speakers;
    }
}
function getSessionIdentifier(session) {
    return session.id;
}


/***/ }),

/***/ "exUl":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/core/request/request-util.ts ***!
  \**********************************************************/
/*! exports provided: createRequestOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequestOption", function() { return createRequestOption; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ "v50m":
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/entities/session/service/session.service.ts ***!
  \*************************************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/util/operators */ "IgDU");
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/request/request-util */ "exUl");
/* harmony import */ var _session_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session.model */ "XcTY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");








class SessionService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/sessions');
    }
    create(session) {
        const copy = this.convertDateFromClient(session);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => this.convertDateFromServer(res)));
    }
    update(session) {
        const copy = this.convertDateFromClient(session);
        return this.http
            .put(`${this.resourceUrl}/${Object(_session_model__WEBPACK_IMPORTED_MODULE_4__["getSessionIdentifier"])(session)}`, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => this.convertDateFromServer(res)));
    }
    partialUpdate(session) {
        const copy = this.convertDateFromClient(session);
        return this.http
            .patch(`${this.resourceUrl}/${Object(_session_model__WEBPACK_IMPORTED_MODULE_4__["getSessionIdentifier"])(session)}`, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => this.convertDateFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => this.convertDateFromServer(res)));
    }
    query(req) {
        const options = Object(app_core_request_request_util__WEBPACK_IMPORTED_MODULE_3__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => this.convertDateArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    addSessionToCollectionIfMissing(sessionCollection, ...sessionsToCheck) {
        const sessions = sessionsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_2__["isPresent"]);
        if (sessions.length > 0) {
            const sessionCollectionIdentifiers = sessionCollection.map(sessionItem => Object(_session_model__WEBPACK_IMPORTED_MODULE_4__["getSessionIdentifier"])(sessionItem));
            const sessionsToAdd = sessions.filter(sessionItem => {
                const sessionIdentifier = Object(_session_model__WEBPACK_IMPORTED_MODULE_4__["getSessionIdentifier"])(sessionItem);
                if (sessionIdentifier == null || sessionCollectionIdentifiers.includes(sessionIdentifier)) {
                    return false;
                }
                sessionCollectionIdentifiers.push(sessionIdentifier);
                return true;
            });
            return [...sessionsToAdd, ...sessionCollection];
        }
        return sessionCollection;
    }
    convertDateFromClient(session) {
        var _a, _b;
        return Object.assign({}, session, {
            startTime: ((_a = session.startTime) === null || _a === void 0 ? void 0 : _a.isValid()) ? session.startTime.toJSON() : undefined,
            endTime: ((_b = session.endTime) === null || _b === void 0 ? void 0 : _b.isValid()) ? session.endTime.toJSON() : undefined,
        });
    }
    convertDateFromServer(res) {
        if (res.body) {
            res.body.startTime = res.body.startTime ? dayjs__WEBPACK_IMPORTED_MODULE_1__(res.body.startTime) : undefined;
            res.body.endTime = res.body.endTime ? dayjs__WEBPACK_IMPORTED_MODULE_1__(res.body.endTime) : undefined;
        }
        return res;
    }
    convertDateArrayFromServer(res) {
        if (res.body) {
            res.body.forEach((session) => {
                session.startTime = session.startTime ? dayjs__WEBPACK_IMPORTED_MODULE_1__(session.startTime) : undefined;
                session.endTime = session.endTime ? dayjs__WEBPACK_IMPORTED_MODULE_1__(session.endTime) : undefined;
            });
        }
        return res;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationConfigService"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default~session-session-module~speaker-speaker-module.js.map