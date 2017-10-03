'use strict'

/**
 * Copyright 2016 Signal K and Fabian Tollenaar <fabian@signalk.org>.
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
 
const debug = require('debug')('signalk-parser-nmea0183/findHook')
const fs = require('fs')
const path = require('path').join(__dirname, '../hooks')

module.exports = function findHook(id) {
  let found = false

  try {
    found = (typeof fs.statSync(`${path}/${id}.js`) === 'object')
  } catch (e) {}

  if (found === true) {
    return require(`../hooks/${id}.js`)
  }

  return false
}