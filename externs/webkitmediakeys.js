/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for prefixed EME as supported by Safari 10.
 * @externs
 */



/**
 * @constructor
 * @param {string} keySystem
 */
function WebKitMediaKeys(keySystem) {}


/**
 * @param {string} keySystem
 * @param {string=} opt_contentType
 * @return {boolean}
 */
WebKitMediaKeys.isTypeSupported = function(keySystem, opt_contentType) {};


/**
 * @param {string} contentType
 * @param {!Uint8Array} initData
 * @return {!WebKitMediaKeySession}
 */
WebKitMediaKeys.prototype.createSession = function(contentType, initData) {};



/**
 * @interface
 * @extends {EventTarget}
 */
function WebKitMediaKeySession() {}


/**
 * @param {!Uint8Array} message
 */
WebKitMediaKeySession.prototype.update = function(message) {};


WebKitMediaKeySession.prototype.close = function() {};


/** @type {WebKitMediaKeyError} */
WebKitMediaKeySession.prototype.error;


/** @type {string} */
WebKitMediaKeySession.prototype.keySystem;


/** @type {string} */
WebKitMediaKeySession.prototype.sessionId;


/** @override */
WebKitMediaKeySession.prototype.addEventListener =
    function(type, listener, useCapture) {};


/** @override */
WebKitMediaKeySession.prototype.removeEventListener =
    function(type, listener, useCapture) {};


/** @override */
WebKitMediaKeySession.prototype.dispatchEvent = function(evt) {};


/**
 * @param {WebKitMediaKeys} mediaKeys
 */
HTMLMediaElement.prototype.webkitSetMediaKeys = function(mediaKeys) {};



/** @constructor */
function WebKitMediaKeyError() {}


/** @type {number} */
WebKitMediaKeyError.prototype.code;


/** @type {number} */
WebKitMediaKeyError.prototype.systemCode;


/** @type {number} */
WebKitMediaKeyError.MEDIA_KEYERR_UNKNOWN;


/** @type {number} */
WebKitMediaKeyError.MEDIA_KEYERR_CLIENT;


/** @type {number} */
WebKitMediaKeyError.MEDIA_KEYERR_SERVICE;


/** @type {number} */
WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT;


/** @type {number} */
WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE;


/** @type {number} */
WebKitMediaKeyError.MEDIA_KEYERR_DOMAIN;