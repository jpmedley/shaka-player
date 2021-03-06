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

goog.provide('shaka.offline.StorageEngineFactory');

goog.require('shaka.offline.DBEngine');
goog.require('shaka.offline.IStorageEngine');


/**
 * @namespace shaka.offline.StorageEngineFactory
 */


/**
 * Determines if this platform supports any form of storage engine.
 * @return {boolean}
 */
shaka.offline.StorageEngineFactory.isSupported = function() {
  return shaka.offline.DBEngine.isSupported();
};


/**
 * Create a new instance of the supported storage engine. The created instance
 * will be uninitialized.
 * @return {shaka.offline.IStorageEngine}
 */
shaka.offline.StorageEngineFactory.createStorageEngine = function() {
  // Use our method to check in case it was replaced.
  var supportsStorage = shaka.offline.StorageEngineFactory.isSupported();
  return supportsStorage ? new shaka.offline.DBEngine() : null;
};
