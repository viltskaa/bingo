var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ var $361a76e6ea33591f$exports = {};
// shim for using process in browser
var $361a76e6ea33591f$var$process = $361a76e6ea33591f$exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $361a76e6ea33591f$var$cachedSetTimeout;
var $361a76e6ea33591f$var$cachedClearTimeout;
function $361a76e6ea33591f$var$defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function $361a76e6ea33591f$var$defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") $361a76e6ea33591f$var$cachedSetTimeout = setTimeout;
        else $361a76e6ea33591f$var$cachedSetTimeout = $361a76e6ea33591f$var$defaultSetTimout;
    } catch (e) {
        $361a76e6ea33591f$var$cachedSetTimeout = $361a76e6ea33591f$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") $361a76e6ea33591f$var$cachedClearTimeout = clearTimeout;
        else $361a76e6ea33591f$var$cachedClearTimeout = $361a76e6ea33591f$var$defaultClearTimeout;
    } catch (e1) {
        $361a76e6ea33591f$var$cachedClearTimeout = $361a76e6ea33591f$var$defaultClearTimeout;
    }
})();
function $361a76e6ea33591f$var$runTimeout(fun) {
    if ($361a76e6ea33591f$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($361a76e6ea33591f$var$cachedSetTimeout === $361a76e6ea33591f$var$defaultSetTimout || !$361a76e6ea33591f$var$cachedSetTimeout) && setTimeout) {
        $361a76e6ea33591f$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $361a76e6ea33591f$var$cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $361a76e6ea33591f$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $361a76e6ea33591f$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $361a76e6ea33591f$var$runClearTimeout(marker) {
    if ($361a76e6ea33591f$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($361a76e6ea33591f$var$cachedClearTimeout === $361a76e6ea33591f$var$defaultClearTimeout || !$361a76e6ea33591f$var$cachedClearTimeout) && clearTimeout) {
        $361a76e6ea33591f$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $361a76e6ea33591f$var$cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $361a76e6ea33591f$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $361a76e6ea33591f$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $361a76e6ea33591f$var$queue = [];
var $361a76e6ea33591f$var$draining = false;
var $361a76e6ea33591f$var$currentQueue;
var $361a76e6ea33591f$var$queueIndex = -1;
function $361a76e6ea33591f$var$cleanUpNextTick() {
    if (!$361a76e6ea33591f$var$draining || !$361a76e6ea33591f$var$currentQueue) return;
    $361a76e6ea33591f$var$draining = false;
    if ($361a76e6ea33591f$var$currentQueue.length) $361a76e6ea33591f$var$queue = $361a76e6ea33591f$var$currentQueue.concat($361a76e6ea33591f$var$queue);
    else $361a76e6ea33591f$var$queueIndex = -1;
    if ($361a76e6ea33591f$var$queue.length) $361a76e6ea33591f$var$drainQueue();
}
function $361a76e6ea33591f$var$drainQueue() {
    if ($361a76e6ea33591f$var$draining) return;
    var timeout = $361a76e6ea33591f$var$runTimeout($361a76e6ea33591f$var$cleanUpNextTick);
    $361a76e6ea33591f$var$draining = true;
    var len = $361a76e6ea33591f$var$queue.length;
    while(len){
        $361a76e6ea33591f$var$currentQueue = $361a76e6ea33591f$var$queue;
        $361a76e6ea33591f$var$queue = [];
        while(++$361a76e6ea33591f$var$queueIndex < len)if ($361a76e6ea33591f$var$currentQueue) $361a76e6ea33591f$var$currentQueue[$361a76e6ea33591f$var$queueIndex].run();
        $361a76e6ea33591f$var$queueIndex = -1;
        len = $361a76e6ea33591f$var$queue.length;
    }
    $361a76e6ea33591f$var$currentQueue = null;
    $361a76e6ea33591f$var$draining = false;
    $361a76e6ea33591f$var$runClearTimeout(timeout);
}
$361a76e6ea33591f$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $361a76e6ea33591f$var$queue.push(new $361a76e6ea33591f$var$Item(fun, args));
    if ($361a76e6ea33591f$var$queue.length === 1 && !$361a76e6ea33591f$var$draining) $361a76e6ea33591f$var$runTimeout($361a76e6ea33591f$var$drainQueue);
};
// v8 likes predictible objects
function $361a76e6ea33591f$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$361a76e6ea33591f$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$361a76e6ea33591f$var$process.title = "browser";
$361a76e6ea33591f$var$process.browser = true;
$361a76e6ea33591f$var$process.env = {};
$361a76e6ea33591f$var$process.argv = [];
$361a76e6ea33591f$var$process.version = ""; // empty string to avoid regexp issues
$361a76e6ea33591f$var$process.versions = {};
function $361a76e6ea33591f$var$noop() {}
$361a76e6ea33591f$var$process.on = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.addListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.once = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.off = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.removeListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.removeAllListeners = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.emit = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.prependListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.prependOnceListener = $361a76e6ea33591f$var$noop;
$361a76e6ea33591f$var$process.listeners = function(name) {
    return [];
};
$361a76e6ea33591f$var$process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
$361a76e6ea33591f$var$process.cwd = function() {
    return "/";
};
$361a76e6ea33591f$var$process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
$361a76e6ea33591f$var$process.umask = function() {
    return 0;
};


const $25f55f8610499322$export$588c7fdda06fbb0a = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: "${JSCORE_VERSION}"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const $25f55f8610499322$export$a7a9523472993e97 = function(assertion, message) {
    if (!assertion) throw $25f55f8610499322$export$a39cad550e7ab28a(message);
};
/**
 * Returns an Error object suitable for throwing.
 */ const $25f55f8610499322$export$a39cad550e7ab28a = function(message) {
    return new Error("Firebase Database (" + $25f55f8610499322$export$588c7fdda06fbb0a.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $25f55f8610499322$var$stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const $25f55f8610499322$var$byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) out[c++] = String.fromCharCode(c1);
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c21 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c21 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        } else {
            const c22 = bytes[pos++];
            const c31 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c22 & 63) << 6 | c31 & 63);
        }
    }
    return out.join("");
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const $25f55f8610499322$export$b3b2de96497acc47 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + "+/=";
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + "-_.";
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === "function",
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join("");
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
        return this.encodeByteArray($25f55f8610499322$var$stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
        return $25f55f8610499322$var$byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw Error();
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 0xc0 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */ const $25f55f8610499322$export$e510a73ee562749 = function(str) {
    const utf8Bytes = $25f55f8610499322$var$stringToByteArray$1(str);
    return $25f55f8610499322$export$b3b2de96497acc47.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const $25f55f8610499322$export$4b5284a3025a455 = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return $25f55f8610499322$export$e510a73ee562749(str).replace(/\./g, "");
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const $25f55f8610499322$export$c62426fdd000a97e = function(str) {
    try {
        return $25f55f8610499322$export$b3b2de96497acc47.decodeString(str, true);
    } catch (e) {
        console.error("base64Decode failed: ", e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function $25f55f8610499322$export$6c40052bed430212(value) {
    return $25f55f8610499322$export$54e9fb29908872fa(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function $25f55f8610499322$export$54e9fb29908872fa(target, source) {
    if (!(source instanceof Object)) return source;
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) target = {};
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !$25f55f8610499322$var$isValidKey(prop)) continue;
        target[prop] = $25f55f8610499322$export$54e9fb29908872fa(target[prop], source[prop]);
    }
    return target;
}
function $25f55f8610499322$var$isValidKey(key) {
    return key !== "__proto__";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function $25f55f8610499322$export$c36915b22ce77c19() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") return navigator["userAgent"];
    else return "";
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function $25f55f8610499322$export$872f8323f01d7ae0() {
    return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($25f55f8610499322$export$c36915b22ce77c19());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function $25f55f8610499322$export$8ee0fc9ee280b4ee() {
    try {
        return Object.prototype.toString.call($parcel$global.process) === "[object process]";
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function $25f55f8610499322$export$4e09c449d6c407f7() {
    return typeof self === "object" && self.self === self;
}
function $25f55f8610499322$export$caa8774a9107a58e() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : undefined;
    return typeof runtime === "object" && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function $25f55f8610499322$export$f7a1e23e542d38e3() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
/** Detects Electron apps. */ function $25f55f8610499322$export$f2f6a8999f8ebd30() {
    return $25f55f8610499322$export$c36915b22ce77c19().indexOf("Electron/") >= 0;
}
/** Detects Internet Explorer. */ function $25f55f8610499322$export$7e7b1a9668aaed8() {
    const ua = $25f55f8610499322$export$c36915b22ce77c19();
    return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
/** Detects Universal Windows Platform apps. */ function $25f55f8610499322$export$202944b2d2824246() {
    return $25f55f8610499322$export$c36915b22ce77c19().indexOf("MSAppHost/") >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function $25f55f8610499322$export$5d1d834fbbf8bab7() {
    return $25f55f8610499322$export$588c7fdda06fbb0a.NODE_CLIENT === true || $25f55f8610499322$export$588c7fdda06fbb0a.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function $25f55f8610499322$export$95df08bae54cb4df() {
    return !$25f55f8610499322$export$8ee0fc9ee280b4ee() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function $25f55f8610499322$export$3865db50535c2055() {
    try {
        return typeof indexedDB === "object";
    } catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function $25f55f8610499322$export$a8a3018f3d187a4d() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function $25f55f8610499322$export$f172b7eb6cf60599() {
    if (typeof navigator === "undefined" || !navigator.cookieEnabled) return false;
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */ function $25f55f8610499322$export$a4e55266d2135a7f() {
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof $parcel$global !== "undefined") return $parcel$global;
    throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $25f55f8610499322$var$getDefaultsFromGlobal = ()=>$25f55f8610499322$export$a4e55266d2135a7f().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process.env.__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process.env.__FIREBASE_DEFAULTS_PATH__
 */ const $25f55f8610499322$var$getDefaultsFromEnvVariable = ()=>{
    if (typeof $361a76e6ea33591f$exports === "undefined" || typeof $361a76e6ea33591f$exports.env === "undefined") return;
    const defaultsJsonString = undefined;
    if (defaultsJsonString) return JSON.parse(defaultsJsonString);
};
const $25f55f8610499322$var$getDefaultsFromCookie = ()=>{
    if (typeof document === "undefined") return;
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && $25f55f8610499322$export$c62426fdd000a97e(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 */ const $25f55f8610499322$var$getDefaults = ()=>{
    try {
        return $25f55f8610499322$var$getDefaultsFromGlobal() || $25f55f8610499322$var$getDefaultsFromEnvVariable() || $25f55f8610499322$var$getDefaultsFromCookie();
    } catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */ console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */ const $25f55f8610499322$export$9c11895284c8adad = (productName)=>{
    var _a, _b;
    return (_b = (_a = $25f55f8610499322$var$getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
};
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */ const $25f55f8610499322$export$a3febcf1f14a3a0c = (productName)=>{
    const host = $25f55f8610499322$export$9c11895284c8adad(productName);
    if (!host) return undefined;
    const separatorIndex = host.lastIndexOf(":"); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === "[") // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
    return [
        host.substring(1, separatorIndex - 1),
        port
    ];
    else return [
        host.substring(0, separatorIndex),
        port
    ];
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */ const $25f55f8610499322$export$3dfb6827a9f89756 = ()=>{
    var _a;
    return (_a = $25f55f8610499322$var$getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */ const $25f55f8610499322$export$5539a1a3afe87d6 = (name)=>{
    var _a;
    return (_a = $25f55f8610499322$var$getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $25f55f8610499322$export$85f6557964517f1a {
    constructor(){
        this.reject = ()=>{};
        this.resolve = ()=>{};
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback) {
        return (error, value)=>{
            if (error) this.reject(error);
            else this.resolve(value);
            if (typeof callback === "function") {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{});
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) callback(error);
                else callback(error, value);
            }
        };
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $25f55f8610499322$export$367bf224123348f1(token, projectId) {
    if (token.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: "none",
        type: "JWT"
    };
    const project = projectId || "demo-project";
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const payload = Object.assign({
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat: iat,
        exp: iat + 3600,
        auth_time: iat,
        sub: sub,
        user_id: sub,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        }
    }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = "";
    return [
        $25f55f8610499322$export$4b5284a3025a455(JSON.stringify(header)),
        $25f55f8610499322$export$4b5284a3025a455(JSON.stringify(payload)),
        signature
    ].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const $25f55f8610499322$var$ERROR_NAME = "FirebaseError";
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class $25f55f8610499322$export$dd24e9cd51226c56 extends Error {
    constructor(/** The error code for this error. */ code, message, /** Custom data for this error. */ customData){
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */ this.name = $25f55f8610499322$var$ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, $25f55f8610499322$export$dd24e9cd51226c56.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) Error.captureStackTrace(this, $25f55f8610499322$export$3fa6e1b18a3b2d40.prototype.create);
    }
}
class $25f55f8610499322$export$3fa6e1b18a3b2d40 {
    constructor(service, serviceName, errors){
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? $25f55f8610499322$var$replaceTemplate(template, customData) : "Error";
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new $25f55f8610499322$export$dd24e9cd51226c56(fullCode, fullMessage, customData);
        return error;
    }
}
function $25f55f8610499322$var$replaceTemplate(template, data) {
    return template.replace($25f55f8610499322$var$PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const $25f55f8610499322$var$PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function $25f55f8610499322$export$c5a53ce6a17cf18d(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function $25f55f8610499322$export$fac44ee5b035f737(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const $25f55f8610499322$export$2f872c0f2117be69 = function(token) {
    let header = {}, claims = {}, data = {}, signature = "";
    try {
        const parts = token.split(".");
        header = $25f55f8610499322$export$c5a53ce6a17cf18d($25f55f8610499322$export$c62426fdd000a97e(parts[0]) || "");
        claims = $25f55f8610499322$export$c5a53ce6a17cf18d($25f55f8610499322$export$c62426fdd000a97e(parts[1]) || "");
        signature = parts[2];
        data = claims["d"] || {};
        delete claims["d"];
    } catch (e) {}
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const $25f55f8610499322$export$5f870fcca7ae6a88 = function(token) {
    const claims = $25f55f8610499322$export$2f872c0f2117be69(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === "object") {
        if (claims.hasOwnProperty("nbf")) validSince = claims["nbf"];
        else if (claims.hasOwnProperty("iat")) validSince = claims["iat"];
        if (claims.hasOwnProperty("exp")) validUntil = claims["exp"];
        else // token will expire after 24h by default
        validUntil = validSince + 86400;
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const $25f55f8610499322$export$701c661ec91095f2 = function(token) {
    const claims = $25f55f8610499322$export$2f872c0f2117be69(token).claims;
    if (typeof claims === "object" && claims.hasOwnProperty("iat")) return claims["iat"];
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const $25f55f8610499322$export$9565ca3d387f8aa0 = function(token) {
    const decoded = $25f55f8610499322$export$2f872c0f2117be69(token), claims = decoded.claims;
    return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const $25f55f8610499322$export$fc970ed23da99565 = function(token) {
    const claims = $25f55f8610499322$export$2f872c0f2117be69(token).claims;
    return typeof claims === "object" && claims["admin"] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $25f55f8610499322$export$2344b14b097df817(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function $25f55f8610499322$export$e51ae4db7b428f67(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    else return undefined;
}
function $25f55f8610499322$export$dd1bc94b04021eeb(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
function $25f55f8610499322$export$871de8747c9eaa88(obj, fn, contextObj) {
    const res = {};
    for(const key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res[key] = fn.call(contextObj, obj[key], key, obj);
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function $25f55f8610499322$export$9cb4719e2e525b7a(a, b) {
    if (a === b) return true;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) return false;
        const aProp = a[k];
        const bProp = b[k];
        if ($25f55f8610499322$var$isObject(aProp) && $25f55f8610499322$var$isObject(bProp)) {
            if (!$25f55f8610499322$export$9cb4719e2e525b7a(aProp, bProp)) return false;
        } else if (aProp !== bProp) return false;
    }
    for (const k1 of bKeys){
        if (!aKeys.includes(k1)) return false;
    }
    return true;
}
function $25f55f8610499322$var$isObject(thing) {
    return thing !== null && typeof thing === "object";
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */ function $25f55f8610499322$export$a9cd205a244d9f54(promise, timeInMS = 2000) {
    const deferredPromise = new $25f55f8610499322$export$85f6557964517f1a();
    setTimeout(()=>deferredPromise.reject("timeout!"), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function $25f55f8610499322$export$ac4103b836844853(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams))if (Array.isArray(value)) value.forEach((arrayVal)=>{
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
    });
    else params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    return params.length ? "&" + params.join("&") : "";
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function $25f55f8610499322$export$c1271ca4c8a70741(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, "").split("&");
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split("=");
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function $25f55f8610499322$export$1a8408415472d8ed(url) {
    const queryStart = url.indexOf("?");
    if (!queryStart) return "";
    const fragmentStart = url.indexOf("#", queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class $25f55f8610499322$export$c85d589bf4e25fef {
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for(let i = 1; i < this.blockSize; ++i)this.pad_[i] = 0;
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) offset = 0;
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === "string") for(let i = 0; i < 16; i++){
            // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
            // have a bug that turns the post-increment ++ operator into pre-increment
            // during JIT compilation.  We have code that depends heavily on SHA-1 for
            // correctness and which is affected by this bug, so I've removed all uses
            // of post-increment ++ in which the result value is used.  We can revert
            // this change once the Safari bug
            // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
            // most clients have been updated.
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
        }
        else for(let i1 = 0; i1 < 16; i1++){
            W[i1] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
        }
        // expand to 80 words
        for(let i2 = 16; i2 < 80; i2++){
            const t = W[i2 - 3] ^ W[i2 - 8] ^ W[i2 - 14] ^ W[i2 - 16];
            W[i2] = (t << 1 | t >>> 31) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i3 = 0; i3 < 80; i3++){
            if (i3 < 40) {
                if (i3 < 20) {
                    f = d ^ b & (c ^ d);
                    k = 0x5a827999;
                } else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            } else if (i3 < 60) {
                f = b & c | d & (b | c);
                k = 0x8f1bbcdc;
            } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
            }
            const t1 = (a << 5 | a >>> 27) + f + e + k + W[i3] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t1;
        }
        this.chain_[0] = this.chain_[0] + a & 0xffffffff;
        this.chain_[1] = this.chain_[1] + b & 0xffffffff;
        this.chain_[2] = this.chain_[2] + c & 0xffffffff;
        this.chain_[3] = this.chain_[3] + d & 0xffffffff;
        this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) return;
        if (length === undefined) length = bytes.length;
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) while(n <= lengthMinusBlock){
                this.compress_(bytes, n);
                n += this.blockSize;
            }
            if (typeof bytes === "string") while(n < length){
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
            else while(n < length){
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
        else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        // Add # bits.
        for(let i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i1 = 0; i1 < 5; i1++)for(let j = 24; j >= 0; j -= 8){
            digest[n] = this.chain_[i1] >> j & 255;
            ++n;
        }
        return digest;
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function $25f55f8610499322$export$364097d812234b3f(executor, onNoObservers) {
    const proxy = new $25f55f8610499322$var$ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class $25f55f8610499322$var$ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer)=>{
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) throw new Error("Missing Observer.");
        // Assemble an Observer object when passed as callback functions.
        if ($25f55f8610499322$var$implementsAnyMethods(nextOrObserver, [
            "next",
            "error",
            "complete"
        ])) observer = nextOrObserver;
        else observer = {
            next: nextOrObserver,
            error: error,
            complete: complete
        };
        if (observer.next === undefined) observer.next = $25f55f8610499322$var$noop;
        if (observer.error === undefined) observer.error = $25f55f8610499322$var$noop;
        if (observer.complete === undefined) observer.complete = $25f55f8610499322$var$noop;
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            try {
                if (this.finalError) observer.error(this.finalError);
                else observer.complete();
            } catch (e) {
            // nothing
            }
            return;
        });
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) return;
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) this.onNoObservers(this);
    }
    forEachObserver(fn) {
        if (this.finalized) // Already closed by previous event....just eat the additional values.
        return;
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i = 0; i < this.observers.length; i++)this.sendOne(i, fn);
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i] !== undefined) try {
                fn(this.observers[i]);
            } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== "undefined" && console.error) console.error(e);
            }
        });
    }
    close(err) {
        if (this.finalized) return;
        this.finalized = true;
        if (err !== undefined) this.finalError = err;
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function $25f55f8610499322$export$12af436354f1a4f7(fn, onError) {
    return (...args)=>{
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) onError(error);
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function $25f55f8610499322$var$implementsAnyMethods(obj, methods) {
    if (typeof obj !== "object" || obj === null) return false;
    for (const method of methods){
        if (method in obj && typeof obj[method] === "function") return true;
    }
    return false;
}
function $25f55f8610499322$var$noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const $25f55f8610499322$export$20164226a0ed35c3 = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) argError = "at least " + minCount;
    else if (argCount > maxCount) argError = maxCount === 0 ? "none" : "no more than " + maxCount;
    if (argError) {
        const error = fnName + " failed: Was called with " + argCount + (argCount === 1 ? " argument." : " arguments.") + " Expects " + argError + ".";
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function $25f55f8610499322$export$adea4917e02d93dc(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function $25f55f8610499322$export$8eef22622e725943(fnName, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== "string") //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error($25f55f8610499322$export$adea4917e02d93dc(fnName, "namespace") + "must be a valid firebase namespace.");
}
function $25f55f8610499322$export$5bcd2a2eb6640dfa(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== "function") throw new Error($25f55f8610499322$export$adea4917e02d93dc(fnName, argumentName) + "must be a valid function.");
}
function $25f55f8610499322$export$df77539402cfb523(fnName, argumentName, context, optional) {
    if (optional && !context) return;
    if (typeof context !== "object" || context === null) throw new Error($25f55f8610499322$export$adea4917e02d93dc(fnName, argumentName) + "must be a valid context object.");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const $25f55f8610499322$export$655666783217a925 = function(str) {
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            $25f55f8610499322$export$a7a9523472993e97(i < str.length, "Surrogate pair missing trail surrogate.");
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const $25f55f8610499322$export$9536dc0a75b20bf9 = function(str) {
    let p = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c < 128) p++;
        else if (c < 2048) p += 2;
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else p += 3;
    }
    return p;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */ const $25f55f8610499322$export$abe4376e1bf796d6 = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const $25f55f8610499322$var$DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const $25f55f8610499322$var$DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const $25f55f8610499322$export$bdf1213ffbdb096e = 14400000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const $25f55f8610499322$export$3518ed2cfe61fa30 = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function $25f55f8610499322$export$4d810c0ca64ed8e9(backoffCount, intervalMillis = $25f55f8610499322$var$DEFAULT_INTERVAL_MILLIS, backoffFactor = $25f55f8610499322$var$DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    $25f55f8610499322$export$3518ed2cfe61fa30 * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min($25f55f8610499322$export$bdf1213ffbdb096e, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function $25f55f8610499322$export$7bb39f879164e4ac(i) {
    if (!Number.isFinite(i)) return `${i}`;
    return i + $25f55f8610499322$var$indicator(i);
}
function $25f55f8610499322$var$indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) return "th";
    const dec = i % 10;
    if (dec === 1) return "st";
    if (dec === 2) return "nd";
    if (dec === 3) return "rd";
    return "th";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $25f55f8610499322$export$4befe9b5fa509a1b(service) {
    if (service && service._delegate) return service._delegate;
    else return service;
}


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class $2eae6ad05c0c1491$export$16fa2f45be04daa8 {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name, instanceFactory, type){
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */ ;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class $2eae6ad05c0c1491$export$2881499e37b75b9a {
    constructor(name, container){
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) // initialize the service if it can be auto-initialized
            try {
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                if (instance) deferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
            });
        } catch (e) {
            if (optional) return null;
            else throw e;
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) return null;
            else throw Error(`Service ${this.name} is not available`);
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) return;
        // if the service is eager, initialize the default instance
        if ($2eae6ad05c0c1491$var$isComponentEager(component)) try {
            this.getOrInitializeService({
                instanceIdentifier: $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME
            });
        } catch (e) {
        // when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e1) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>"INTERNAL" in service) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()),
            ...services.filter((service)=>"_delete" in service) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options: options = {}  } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) instanceDeferred.resolve(instance);
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) callback(existingInstance, normalizedIdentifier);
        return ()=>{
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) return;
        for (const callback of callbacks)try {
            callback(instance, identifier);
        } catch (_a) {
        // ignore errors in the onInit callback
        }
    }
    getOrInitializeService({ instanceIdentifier: instanceIdentifier , options: options = {}  }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: $2eae6ad05c0c1491$var$normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME) {
        if (this.component) return this.component.multipleInstances ? identifier : $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME;
        else return identifier; // assume multiple instances are supported before the component is provided.
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */ ;
    }
}
// undefined should be passed to the service factory for the default instance
function $2eae6ad05c0c1491$var$normalizeIdentifierForFactory(identifier) {
    return identifier === $2eae6ad05c0c1491$var$DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function $2eae6ad05c0c1491$var$isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class $2eae6ad05c0c1491$export$436a80eea5d5c0c5 {
    constructor(name){
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) // delete the existing provider from the container, so we can register the new component
        this.providers.delete(component.name);
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name) {
        if (this.providers.has(name)) return this.providers.get(name);
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new $2eae6ad05c0c1491$export$2881499e37b75b9a(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ const $a02008f622197a50$var$instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var $a02008f622197a50$export$243e62d78d3b544d;
(function(LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})($a02008f622197a50$export$243e62d78d3b544d || ($a02008f622197a50$export$243e62d78d3b544d = {}));
const $a02008f622197a50$var$levelStringToEnum = {
    "debug": $a02008f622197a50$export$243e62d78d3b544d.DEBUG,
    "verbose": $a02008f622197a50$export$243e62d78d3b544d.VERBOSE,
    "info": $a02008f622197a50$export$243e62d78d3b544d.INFO,
    "warn": $a02008f622197a50$export$243e62d78d3b544d.WARN,
    "error": $a02008f622197a50$export$243e62d78d3b544d.ERROR,
    "silent": $a02008f622197a50$export$243e62d78d3b544d.SILENT
};
/**
 * The default log level
 */ const $a02008f622197a50$var$defaultLogLevel = $a02008f622197a50$export$243e62d78d3b544d.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const $a02008f622197a50$var$ConsoleMethod = {
    [$a02008f622197a50$export$243e62d78d3b544d.DEBUG]: "log",
    [$a02008f622197a50$export$243e62d78d3b544d.VERBOSE]: "log",
    [$a02008f622197a50$export$243e62d78d3b544d.INFO]: "info",
    [$a02008f622197a50$export$243e62d78d3b544d.WARN]: "warn",
    [$a02008f622197a50$export$243e62d78d3b544d.ERROR]: "error"
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const $a02008f622197a50$var$defaultLogHandler = (instance, logType, ...args)=>{
    if (logType < instance.logLevel) return;
    const now = new Date().toISOString();
    const method = $a02008f622197a50$var$ConsoleMethod[logType];
    if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
};
class $a02008f622197a50$export$efa9a398d6368992 {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = $a02008f622197a50$var$defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = $a02008f622197a50$var$defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ $a02008f622197a50$var$instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in $a02008f622197a50$export$243e62d78d3b544d)) throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === "string" ? $a02008f622197a50$var$levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== "function") throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug(...args) {
        this._userLogHandler && this._userLogHandler(this, $a02008f622197a50$export$243e62d78d3b544d.DEBUG, ...args);
        this._logHandler(this, $a02008f622197a50$export$243e62d78d3b544d.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler && this._userLogHandler(this, $a02008f622197a50$export$243e62d78d3b544d.VERBOSE, ...args);
        this._logHandler(this, $a02008f622197a50$export$243e62d78d3b544d.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, $a02008f622197a50$export$243e62d78d3b544d.INFO, ...args);
        this._logHandler(this, $a02008f622197a50$export$243e62d78d3b544d.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, $a02008f622197a50$export$243e62d78d3b544d.WARN, ...args);
        this._logHandler(this, $a02008f622197a50$export$243e62d78d3b544d.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, $a02008f622197a50$export$243e62d78d3b544d.ERROR, ...args);
        this._logHandler(this, $a02008f622197a50$export$243e62d78d3b544d.ERROR, ...args);
    }
}
function $a02008f622197a50$export$c622e99c0ce7b1c9(level) {
    $a02008f622197a50$var$instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function $a02008f622197a50$export$29577d29c84db5f6(logCallback, options) {
    for (const instance of $a02008f622197a50$var$instances){
        let customLogLevel = null;
        if (options && options.level) customLogLevel = $a02008f622197a50$var$levelStringToEnum[options.level];
        if (logCallback === null) instance.userLogHandler = null;
        else instance.userLogHandler = (instance, level, ...args)=>{
            const message = args.map((arg)=>{
                if (arg == null) return null;
                else if (typeof arg === "string") return arg;
                else if (typeof arg === "number" || typeof arg === "boolean") return arg.toString();
                else if (arg instanceof Error) return arg.message;
                else try {
                    return JSON.stringify(arg);
                } catch (ignored) {
                    return null;
                }
            }).filter((arg)=>arg).join(" ");
            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) logCallback({
                level: $a02008f622197a50$export$243e62d78d3b544d[level].toLowerCase(),
                message: message,
                args: args,
                type: instance.name
            });
        };
    }
}




const $859f30f416ce683a$export$23f2a1d2818174ef = (object, constructors)=>constructors.some((c)=>object instanceof c);
let $859f30f416ce683a$var$idbProxyableTypes;
let $859f30f416ce683a$var$cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function $859f30f416ce683a$var$getIdbProxyableTypes() {
    return $859f30f416ce683a$var$idbProxyableTypes || ($859f30f416ce683a$var$idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function $859f30f416ce683a$var$getCursorAdvanceMethods() {
    return $859f30f416ce683a$var$cursorAdvanceMethods || ($859f30f416ce683a$var$cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const $859f30f416ce683a$var$cursorRequestMap = new WeakMap();
const $859f30f416ce683a$var$transactionDoneMap = new WeakMap();
const $859f30f416ce683a$var$transactionStoreNamesMap = new WeakMap();
const $859f30f416ce683a$var$transformCache = new WeakMap();
const $859f30f416ce683a$export$407448d2b89b1813 = new WeakMap();
function $859f30f416ce683a$var$promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener("success", success);
            request.removeEventListener("error", error);
        };
        const success = ()=>{
            resolve($859f30f416ce683a$export$efccba1c4a2ef57b(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener("success", success);
        request.addEventListener("error", error);
    });
    promise.then((value)=>{
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) $859f30f416ce683a$var$cursorRequestMap.set(value, request);
    // Catching to avoid "Uncaught Promise exceptions"
    }).catch(()=>{});
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    $859f30f416ce683a$export$407448d2b89b1813.set(promise, request);
    return promise;
}
function $859f30f416ce683a$var$cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if ($859f30f416ce683a$var$transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener("complete", complete);
            tx.removeEventListener("error", error);
            tx.removeEventListener("abort", error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException("AbortError", "AbortError"));
            unlisten();
        };
        tx.addEventListener("complete", complete);
        tx.addEventListener("error", error);
        tx.addEventListener("abort", error);
    });
    // Cache it for later retrieval.
    $859f30f416ce683a$var$transactionDoneMap.set(tx, done);
}
let $859f30f416ce683a$var$idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === "done") return $859f30f416ce683a$var$transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === "objectStoreNames") return target.objectStoreNames || $859f30f416ce683a$var$transactionStoreNamesMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === "store") return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
        return $859f30f416ce683a$export$efccba1c4a2ef57b(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
        return prop in target;
    }
};
function $859f30f416ce683a$export$43caf9889c228507(callback) {
    $859f30f416ce683a$var$idbProxyTraps = callback($859f30f416ce683a$var$idbProxyTraps);
}
function $859f30f416ce683a$var$wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
        const tx = func.call($859f30f416ce683a$export$3b14a55fb2447963(this), storeNames, ...args);
        $859f30f416ce683a$var$transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [
            storeNames
        ]);
        return $859f30f416ce683a$export$efccba1c4a2ef57b(tx);
    };
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if ($859f30f416ce683a$var$getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply($859f30f416ce683a$export$3b14a55fb2447963(this), args);
        return $859f30f416ce683a$export$efccba1c4a2ef57b($859f30f416ce683a$var$cursorRequestMap.get(this));
    };
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return $859f30f416ce683a$export$efccba1c4a2ef57b(func.apply($859f30f416ce683a$export$3b14a55fb2447963(this), args));
    };
}
function $859f30f416ce683a$var$transformCachableValue(value) {
    if (typeof value === "function") return $859f30f416ce683a$var$wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) $859f30f416ce683a$var$cacheDonePromiseForTransaction(value);
    if ($859f30f416ce683a$export$23f2a1d2818174ef(value, $859f30f416ce683a$var$getIdbProxyableTypes())) return new Proxy(value, $859f30f416ce683a$var$idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function $859f30f416ce683a$export$efccba1c4a2ef57b(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return $859f30f416ce683a$var$promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if ($859f30f416ce683a$var$transformCache.has(value)) return $859f30f416ce683a$var$transformCache.get(value);
    const newValue = $859f30f416ce683a$var$transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        $859f30f416ce683a$var$transformCache.set(value, newValue);
        $859f30f416ce683a$export$407448d2b89b1813.set(newValue, value);
    }
    return newValue;
}
const $859f30f416ce683a$export$3b14a55fb2447963 = (value)=>$859f30f416ce683a$export$407448d2b89b1813.get(value);



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function $e3f4aae069cb52e3$export$ca0ed41b1a2af7e(name, version, { blocked: blocked , upgrade: upgrade , blocking: blocking , terminated: terminated  } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0, $859f30f416ce683a$export$efccba1c4a2ef57b)(request);
    if (upgrade) request.addEventListener("upgradeneeded", (event)=>{
        upgrade((0, $859f30f416ce683a$export$efccba1c4a2ef57b)(request.result), event.oldVersion, event.newVersion, (0, $859f30f416ce683a$export$efccba1c4a2ef57b)(request.transaction));
    });
    if (blocked) request.addEventListener("blocked", ()=>blocked());
    openPromise.then((db)=>{
        if (terminated) db.addEventListener("close", ()=>terminated());
        if (blocking) db.addEventListener("versionchange", ()=>blocking());
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function $e3f4aae069cb52e3$export$9d6df0ac66a98bb2(name, { blocked: blocked  } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) request.addEventListener("blocked", ()=>blocked());
    return (0, $859f30f416ce683a$export$efccba1c4a2ef57b)(request).then(()=>undefined);
}
const $e3f4aae069cb52e3$var$readMethods = [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count"
];
const $e3f4aae069cb52e3$var$writeMethods = [
    "put",
    "add",
    "delete",
    "clear"
];
const $e3f4aae069cb52e3$var$cachedMethods = new Map();
function $e3f4aae069cb52e3$var$getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
    if ($e3f4aae069cb52e3$var$cachedMethods.get(prop)) return $e3f4aae069cb52e3$var$cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = $e3f4aae069cb52e3$var$writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || $e3f4aae069cb52e3$var$readMethods.includes(targetFuncName))) return;
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    $e3f4aae069cb52e3$var$cachedMethods.set(prop, method);
    return method;
}
(0, $859f30f416ce683a$export$43caf9889c228507)((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>$e3f4aae069cb52e3$var$getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!$e3f4aae069cb52e3$var$getMethod(target, prop) || oldTraps.has(target, prop)
    }));


/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $7fb72e761bb726d8$var$PlatformLoggerServiceImpl {
    constructor(container){
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if ($7fb72e761bb726d8$var$isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            } else return null;
        }).filter((logString)=>logString).join(" ");
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function $7fb72e761bb726d8$var$isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */ ;
}
const $7fb72e761bb726d8$var$name$o = "@firebase/app";
const $7fb72e761bb726d8$var$version$1 = "0.9.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $7fb72e761bb726d8$var$logger = new (0, $a02008f622197a50$export$efa9a398d6368992)("@firebase/app");
const $7fb72e761bb726d8$var$name$n = "@firebase/app-compat";
const $7fb72e761bb726d8$var$name$m = "@firebase/analytics-compat";
const $7fb72e761bb726d8$var$name$l = "@firebase/analytics";
const $7fb72e761bb726d8$var$name$k = "@firebase/app-check-compat";
const $7fb72e761bb726d8$var$name$j = "@firebase/app-check";
const $7fb72e761bb726d8$var$name$i = "@firebase/auth";
const $7fb72e761bb726d8$var$name$h = "@firebase/auth-compat";
const $7fb72e761bb726d8$var$name$g = "@firebase/database";
const $7fb72e761bb726d8$var$name$f = "@firebase/database-compat";
const $7fb72e761bb726d8$var$name$e = "@firebase/functions";
const $7fb72e761bb726d8$var$name$d = "@firebase/functions-compat";
const $7fb72e761bb726d8$var$name$c = "@firebase/installations";
const $7fb72e761bb726d8$var$name$b = "@firebase/installations-compat";
const $7fb72e761bb726d8$var$name$a = "@firebase/messaging";
const $7fb72e761bb726d8$var$name$9 = "@firebase/messaging-compat";
const $7fb72e761bb726d8$var$name$8 = "@firebase/performance";
const $7fb72e761bb726d8$var$name$7 = "@firebase/performance-compat";
const $7fb72e761bb726d8$var$name$6 = "@firebase/remote-config";
const $7fb72e761bb726d8$var$name$5 = "@firebase/remote-config-compat";
const $7fb72e761bb726d8$var$name$4 = "@firebase/storage";
const $7fb72e761bb726d8$var$name$3 = "@firebase/storage-compat";
const $7fb72e761bb726d8$var$name$2 = "@firebase/firestore";
const $7fb72e761bb726d8$var$name$1 = "@firebase/firestore-compat";
const $7fb72e761bb726d8$var$name = "firebase";
const $7fb72e761bb726d8$var$version = "9.15.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const $7fb72e761bb726d8$export$9f30fa0c10967f7f = "[DEFAULT]";
const $7fb72e761bb726d8$var$PLATFORM_LOG_STRING = {
    [$7fb72e761bb726d8$var$name$o]: "fire-core",
    [$7fb72e761bb726d8$var$name$n]: "fire-core-compat",
    [$7fb72e761bb726d8$var$name$l]: "fire-analytics",
    [$7fb72e761bb726d8$var$name$m]: "fire-analytics-compat",
    [$7fb72e761bb726d8$var$name$j]: "fire-app-check",
    [$7fb72e761bb726d8$var$name$k]: "fire-app-check-compat",
    [$7fb72e761bb726d8$var$name$i]: "fire-auth",
    [$7fb72e761bb726d8$var$name$h]: "fire-auth-compat",
    [$7fb72e761bb726d8$var$name$g]: "fire-rtdb",
    [$7fb72e761bb726d8$var$name$f]: "fire-rtdb-compat",
    [$7fb72e761bb726d8$var$name$e]: "fire-fn",
    [$7fb72e761bb726d8$var$name$d]: "fire-fn-compat",
    [$7fb72e761bb726d8$var$name$c]: "fire-iid",
    [$7fb72e761bb726d8$var$name$b]: "fire-iid-compat",
    [$7fb72e761bb726d8$var$name$a]: "fire-fcm",
    [$7fb72e761bb726d8$var$name$9]: "fire-fcm-compat",
    [$7fb72e761bb726d8$var$name$8]: "fire-perf",
    [$7fb72e761bb726d8$var$name$7]: "fire-perf-compat",
    [$7fb72e761bb726d8$var$name$6]: "fire-rc",
    [$7fb72e761bb726d8$var$name$5]: "fire-rc-compat",
    [$7fb72e761bb726d8$var$name$4]: "fire-gcs",
    [$7fb72e761bb726d8$var$name$3]: "fire-gcs-compat",
    [$7fb72e761bb726d8$var$name$2]: "fire-fst",
    [$7fb72e761bb726d8$var$name$1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [$7fb72e761bb726d8$var$name]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const $7fb72e761bb726d8$export$b4e3c36c855b14b5 = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const $7fb72e761bb726d8$export$9566bce3835c0f28 = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function $7fb72e761bb726d8$export$fa5244b94c62d36a(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        $7fb72e761bb726d8$var$logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */ function $7fb72e761bb726d8$export$4393112b42e2b41d(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function $7fb72e761bb726d8$export$c930050e7bb63965(component) {
    const componentName = component.name;
    if ($7fb72e761bb726d8$export$9566bce3835c0f28.has(componentName)) {
        $7fb72e761bb726d8$var$logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    $7fb72e761bb726d8$export$9566bce3835c0f28.set(componentName, component);
    // add the component to existing app instances
    for (const app of $7fb72e761bb726d8$export$b4e3c36c855b14b5.values())$7fb72e761bb726d8$export$fa5244b94c62d36a(app, component);
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function $7fb72e761bb726d8$export$fa0d6da0f5838f50(app, name) {
    const heartbeatController = app.container.getProvider("heartbeat").getImmediate({
        optional: true
    });
    if (heartbeatController) heartbeatController.triggerHeartbeat();
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function $7fb72e761bb726d8$export$48d18de2ff1c45a5(app, name, instanceIdentifier = $7fb72e761bb726d8$export$9f30fa0c10967f7f) {
    $7fb72e761bb726d8$export$fa0d6da0f5838f50(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */ function $7fb72e761bb726d8$export$3685d89b9c3cdfaf() {
    $7fb72e761bb726d8$export$9566bce3835c0f28.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $7fb72e761bb726d8$var$ERRORS = {
    ["no-app" /* AppError.NO_APP */ ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name" /* AppError.BAD_APP_NAME */ ]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* AppError.DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["no-options" /* AppError.NO_OPTIONS */ ]: "Need to provide options, when not being deployed to hosting via source.",
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */ ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */ ]: "First argument to `onLog` must be null or a function.",
    ["idb-open" /* AppError.IDB_OPEN */ ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-get" /* AppError.IDB_GET */ ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-set" /* AppError.IDB_WRITE */ ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-delete" /* AppError.IDB_DELETE */ ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
};
const $7fb72e761bb726d8$var$ERROR_FACTORY = new (0, $25f55f8610499322$export$3fa6e1b18a3b2d40)("app", "Firebase", $7fb72e761bb726d8$var$ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $7fb72e761bb726d8$var$FirebaseAppImpl {
    constructor(options, config, container){
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new (0, $2eae6ad05c0c1491$export$16fa2f45be04daa8)("app", ()=>this, "PUBLIC" /* ComponentType.PUBLIC */ ));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */ , {
            appName: this._name
        });
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const $7fb72e761bb726d8$export$31499a9cd224b78c = $7fb72e761bb726d8$var$version;
function $7fb72e761bb726d8$export$c55cfd413944906d(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== "object") {
        const name = rawConfig;
        rawConfig = {
            name: name
        };
    }
    const config = Object.assign({
        name: $7fb72e761bb726d8$export$9f30fa0c10967f7f,
        automaticDataCollectionEnabled: false
    }, rawConfig);
    const name1 = config.name;
    if (typeof name1 !== "string" || !name1) throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */ , {
        appName: String(name1)
    });
    options || (options = (0, $25f55f8610499322$export$3dfb6827a9f89756)());
    if (!options) throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */ );
    const existingApp = $7fb72e761bb726d8$export$b4e3c36c855b14b5.get(name1);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0, $25f55f8610499322$export$9cb4719e2e525b7a)(options, existingApp.options) && (0, $25f55f8610499322$export$9cb4719e2e525b7a)(config, existingApp.config)) return existingApp;
        else throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */ , {
            appName: name1
        });
    }
    const container = new (0, $2eae6ad05c0c1491$export$436a80eea5d5c0c5)(name1);
    for (const component of $7fb72e761bb726d8$export$9566bce3835c0f28.values())container.addComponent(component);
    const newApp = new $7fb72e761bb726d8$var$FirebaseAppImpl(options, config, container);
    $7fb72e761bb726d8$export$b4e3c36c855b14b5.set(name1, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function $7fb72e761bb726d8$export$f9962582c9e66d99(name = $7fb72e761bb726d8$export$9f30fa0c10967f7f) {
    const app = $7fb72e761bb726d8$export$b4e3c36c855b14b5.get(name);
    if (!app && name === $7fb72e761bb726d8$export$9f30fa0c10967f7f) return $7fb72e761bb726d8$export$c55cfd413944906d();
    if (!app) throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("no-app" /* AppError.NO_APP */ , {
        appName: name
    });
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function $7fb72e761bb726d8$export$68ddedf7d44b3bdf() {
    return Array.from($7fb72e761bb726d8$export$b4e3c36c855b14b5.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function $7fb72e761bb726d8$export$6eec44aa53d5ea34(app) {
    const name = app.name;
    if ($7fb72e761bb726d8$export$b4e3c36c855b14b5.has(name)) {
        $7fb72e761bb726d8$export$b4e3c36c855b14b5.delete(name);
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function $7fb72e761bb726d8$export$d29d5299a7137abc(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = $7fb72e761bb726d8$var$PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) library += `-${variant}`;
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        if (libraryMismatch && versionMismatch) warning.push("and");
        if (versionMismatch) warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        $7fb72e761bb726d8$var$logger.warn(warning.join(" "));
        return;
    }
    $7fb72e761bb726d8$export$c930050e7bb63965(new (0, $2eae6ad05c0c1491$export$16fa2f45be04daa8)(`${library}-version`, ()=>({
            library: library,
            version: version
        }), "VERSION" /* ComponentType.VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function $7fb72e761bb726d8$export$a82ad227dc8163dc(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== "function") throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */ );
    (0, $a02008f622197a50$export$29577d29c84db5f6)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function $7fb72e761bb726d8$export$c622e99c0ce7b1c9(logLevel) {
    (0, $a02008f622197a50$export$c622e99c0ce7b1c9)(logLevel);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $7fb72e761bb726d8$var$DB_NAME = "firebase-heartbeat-database";
const $7fb72e761bb726d8$var$DB_VERSION = 1;
const $7fb72e761bb726d8$var$STORE_NAME = "firebase-heartbeat-store";
let $7fb72e761bb726d8$var$dbPromise = null;
function $7fb72e761bb726d8$var$getDbPromise() {
    if (!$7fb72e761bb726d8$var$dbPromise) $7fb72e761bb726d8$var$dbPromise = (0, $e3f4aae069cb52e3$export$ca0ed41b1a2af7e)($7fb72e761bb726d8$var$DB_NAME, $7fb72e761bb726d8$var$DB_VERSION, {
        upgrade: (db, oldVersion)=>{
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch(oldVersion){
                case 0:
                    db.createObjectStore($7fb72e761bb726d8$var$STORE_NAME);
            }
        }
    }).catch((e)=>{
        throw $7fb72e761bb726d8$var$ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */ , {
            originalErrorMessage: e.message
        });
    });
    return $7fb72e761bb726d8$var$dbPromise;
}
async function $7fb72e761bb726d8$var$readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await $7fb72e761bb726d8$var$getDbPromise();
        return db.transaction($7fb72e761bb726d8$var$STORE_NAME).objectStore($7fb72e761bb726d8$var$STORE_NAME).get($7fb72e761bb726d8$var$computeKey(app));
    } catch (e) {
        if (e instanceof (0, $25f55f8610499322$export$dd24e9cd51226c56)) $7fb72e761bb726d8$var$logger.warn(e.message);
        else {
            const idbGetError = $7fb72e761bb726d8$var$ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */ , {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            $7fb72e761bb726d8$var$logger.warn(idbGetError.message);
        }
    }
}
async function $7fb72e761bb726d8$var$writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await $7fb72e761bb726d8$var$getDbPromise();
        const tx = db.transaction($7fb72e761bb726d8$var$STORE_NAME, "readwrite");
        const objectStore = tx.objectStore($7fb72e761bb726d8$var$STORE_NAME);
        await objectStore.put(heartbeatObject, $7fb72e761bb726d8$var$computeKey(app));
        return tx.done;
    } catch (e) {
        if (e instanceof (0, $25f55f8610499322$export$dd24e9cd51226c56)) $7fb72e761bb726d8$var$logger.warn(e.message);
        else {
            const idbGetError = $7fb72e761bb726d8$var$ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */ , {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            $7fb72e761bb726d8$var$logger.warn(idbGetError.message);
        }
    }
}
function $7fb72e761bb726d8$var$computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $7fb72e761bb726d8$var$MAX_HEADER_BYTES = 1024;
// 30 days
const $7fb72e761bb726d8$var$STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 2592000000;
class $7fb72e761bb726d8$var$HeartbeatServiceImpl {
    constructor(container){
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */ this._heartbeatsCache = null;
        const app = this.container.getProvider("app").getImmediate();
        this._storage = new $7fb72e761bb726d8$var$HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then((result)=>{
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */ async triggerHeartbeat() {
        const platformLogger = this.container.getProvider("platform-logger").getImmediate();
        // This is the "Firebase user agent" string from the platform logger
        // service, not the browser user agent.
        const agent = platformLogger.getPlatformInfoString();
        const date = $7fb72e761bb726d8$var$getUTCDateString();
        if (this._heartbeatsCache === null) this._heartbeatsCache = await this._heartbeatsCachePromise;
        // Do not store a heartbeat if one is already stored for this day
        // or if a header has already been sent today.
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat)=>singleDateHeartbeat.date === date)) return;
        else // There is no entry for this date. Create one.
        this._heartbeatsCache.heartbeats.push({
            date: date,
            agent: agent
        });
        // Remove entries older than 30 days.
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat)=>{
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= $7fb72e761bb726d8$var$STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */ async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) await this._heartbeatsCachePromise;
        // If it's still null or the array is empty, there is no data to send.
        if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) return "";
        const date = $7fb72e761bb726d8$var$getUTCDateString();
        // Extract as many heartbeats from the cache as will fit under the size limit.
        const { heartbeatsToSend: heartbeatsToSend , unsentEntries: unsentEntries  } = $7fb72e761bb726d8$var$extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = (0, $25f55f8610499322$export$4b5284a3025a455)(JSON.stringify({
            version: 2,
            heartbeats: heartbeatsToSend
        }));
        // Store last sent date to prevent another being logged/sent for the same day.
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
            // Store any unsent entries if they exist.
            this._heartbeatsCache.heartbeats = unsentEntries;
            // This seems more likely than emptying the array (below) to lead to some odd state
            // since the cache isn't empty and this will be called again on the next request,
            // and is probably safest if we await it.
            await this._storage.overwrite(this._heartbeatsCache);
        } else {
            this._heartbeatsCache.heartbeats = [];
            this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
    }
}
function $7fb72e761bb726d8$var$getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function $7fb72e761bb726d8$var$extractHeartbeatsForHeader(heartbeatsCache, maxSize = $7fb72e761bb726d8$var$MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache){
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find((hb)=>hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [
                    singleDateHeartbeat.date
                ]
            });
            if ($7fb72e761bb726d8$var$countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        } else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if ($7fb72e761bb726d8$var$countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend: heartbeatsToSend,
        unsentEntries: unsentEntries
    };
}
class $7fb72e761bb726d8$var$HeartbeatStorageImpl {
    constructor(app){
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!(0, $25f55f8610499322$export$3865db50535c2055)()) return false;
        else return (0, $25f55f8610499322$export$a8a3018f3d187a4d)().then(()=>true).catch(()=>false);
    }
    /**
     * Read all heartbeats.
     */ async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) return {
            heartbeats: []
        };
        else {
            const idbHeartbeatObject = await $7fb72e761bb726d8$var$readHeartbeatsFromIndexedDB(this.app);
            return idbHeartbeatObject || {
                heartbeats: []
            };
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) return;
        else {
            const existingHeartbeatsObject = await this.read();
            return $7fb72e761bb726d8$var$writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) return;
        else {
            const existingHeartbeatsObject = await this.read();
            return $7fb72e761bb726d8$var$writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */ function $7fb72e761bb726d8$var$countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return (0, $25f55f8610499322$export$4b5284a3025a455)(// heartbeatsCache wrapper properties
    JSON.stringify({
        version: 2,
        heartbeats: heartbeatsCache
    })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $7fb72e761bb726d8$var$registerCoreComponents(variant) {
    $7fb72e761bb726d8$export$c930050e7bb63965(new (0, $2eae6ad05c0c1491$export$16fa2f45be04daa8)("platform-logger", (container)=>new $7fb72e761bb726d8$var$PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */ ));
    $7fb72e761bb726d8$export$c930050e7bb63965(new (0, $2eae6ad05c0c1491$export$16fa2f45be04daa8)("heartbeat", (container)=>new $7fb72e761bb726d8$var$HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */ ));
    // Register `app` package.
    $7fb72e761bb726d8$export$d29d5299a7137abc($7fb72e761bb726d8$var$name$o, $7fb72e761bb726d8$var$version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    $7fb72e761bb726d8$export$d29d5299a7137abc($7fb72e761bb726d8$var$name$o, $7fb72e761bb726d8$var$version$1, "esm2017");
    // Register platform SDK identifier (no version).
    $7fb72e761bb726d8$export$d29d5299a7137abc("fire-js", "");
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ $7fb72e761bb726d8$var$registerCoreComponents("");



var $4664178ceb764f97$var$name = "firebase";
var $4664178ceb764f97$var$version = "9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0, $7fb72e761bb726d8$export$d29d5299a7137abc)($4664178ceb764f97$var$name, $4664178ceb764f97$var$version, "app");







const $4ffb76f3de34d3d1$var$name = "@firebase/database";
const $4ffb76f3de34d3d1$var$version = "0.14.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The semver (www.semver.org) version of the SDK. */ let $4ffb76f3de34d3d1$var$SDK_VERSION = "";
/**
 * SDK_VERSION should be set before any database instance is created
 * @internal
 */ function $4ffb76f3de34d3d1$export$c9fb972242fcb3c4(version) {
    $4ffb76f3de34d3d1$var$SDK_VERSION = version;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */ class $4ffb76f3de34d3d1$var$DOMStorageWrapper {
    /**
     * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
     */ constructor(domStorage_){
        this.domStorage_ = domStorage_;
        // Use a prefix to avoid collisions with other stuff saved by the app.
        this.prefix_ = "firebase:";
    }
    /**
     * @param key - The key to save the value under
     * @param value - The value being stored, or null to remove the key.
     */ set(key, value) {
        if (value == null) this.domStorage_.removeItem(this.prefixedName_(key));
        else this.domStorage_.setItem(this.prefixedName_(key), (0, $25f55f8610499322$export$fac44ee5b035f737)(value));
    }
    /**
     * @returns The value that was stored under this key, or null
     */ get(key) {
        const storedVal = this.domStorage_.getItem(this.prefixedName_(key));
        if (storedVal == null) return null;
        else return (0, $25f55f8610499322$export$c5a53ce6a17cf18d)(storedVal);
    }
    remove(key) {
        this.domStorage_.removeItem(this.prefixedName_(key));
    }
    prefixedName_(name) {
        return this.prefix_ + name;
    }
    toString() {
        return this.domStorage_.toString();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */ class $4ffb76f3de34d3d1$var$MemoryStorage {
    constructor(){
        this.cache_ = {};
        this.isInMemoryStorage = true;
    }
    set(key, value) {
        if (value == null) delete this.cache_[key];
        else this.cache_[key] = value;
    }
    get(key) {
        if ((0, $25f55f8610499322$export$2344b14b097df817)(this.cache_, key)) return this.cache_[key];
        return null;
    }
    remove(key) {
        delete this.cache_[key];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName - Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @returns Turning off type information until a common interface is defined.
 */ const $4ffb76f3de34d3d1$var$createStoragefor = function(domStorageName) {
    try {
        // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
        // so it must be inside the try/catch.
        if (typeof window !== "undefined" && typeof window[domStorageName] !== "undefined") {
            // Need to test cache. Just because it's here doesn't mean it works
            const domStorage = window[domStorageName];
            domStorage.setItem("firebase:sentinel", "cache");
            domStorage.removeItem("firebase:sentinel");
            return new $4ffb76f3de34d3d1$var$DOMStorageWrapper(domStorage);
        }
    } catch (e) {}
    // Failed to create wrapper.  Just return in-memory storage.
    // TODO: log?
    return new $4ffb76f3de34d3d1$var$MemoryStorage();
};
/** A storage object that lasts across sessions */ const $4ffb76f3de34d3d1$var$PersistentStorage = $4ffb76f3de34d3d1$var$createStoragefor("localStorage");
/** A storage object that only lasts one session */ const $4ffb76f3de34d3d1$var$SessionStorage = $4ffb76f3de34d3d1$var$createStoragefor("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$logClient = new (0, $a02008f622197a50$export$efa9a398d6368992)("@firebase/database");
/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 */ const $4ffb76f3de34d3d1$var$LUIDGenerator = function() {
    let id = 1;
    return function() {
        return id++;
    };
}();
/**
 * Sha1 hash of the input string
 * @param str - The string to hash
 * @returns {!string} The resulting hash
 */ const $4ffb76f3de34d3d1$var$sha1 = function(str) {
    const utf8Bytes = (0, $25f55f8610499322$export$655666783217a925)(str);
    const sha1 = new (0, $25f55f8610499322$export$c85d589bf4e25fef)();
    sha1.update(utf8Bytes);
    const sha1Bytes = sha1.digest();
    return (0, $25f55f8610499322$export$b3b2de96497acc47).encodeByteArray(sha1Bytes);
};
const $4ffb76f3de34d3d1$var$buildLogMessage_ = function(...varArgs) {
    let message = "";
    for(let i = 0; i < varArgs.length; i++){
        const arg = varArgs[i];
        if (Array.isArray(arg) || arg && typeof arg === "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof arg.length === "number") message += $4ffb76f3de34d3d1$var$buildLogMessage_.apply(null, arg);
        else if (typeof arg === "object") message += (0, $25f55f8610499322$export$fac44ee5b035f737)(arg);
        else message += arg;
        message += " ";
    }
    return message;
};
/**
 * Use this for all debug messages in Firebase.
 */ let $4ffb76f3de34d3d1$var$logger = null;
/**
 * Flag to check for log availability on first log message
 */ let $4ffb76f3de34d3d1$var$firstLog_ = true;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param logger_ - A flag to turn on logging, or a custom logger
 * @param persistent - Whether or not to persist logging settings across refreshes
 */ const $4ffb76f3de34d3d1$var$enableLogging$1 = function(logger_, persistent) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
    if (logger_ === true) {
        $4ffb76f3de34d3d1$var$logClient.logLevel = (0, $a02008f622197a50$export$243e62d78d3b544d).VERBOSE;
        $4ffb76f3de34d3d1$var$logger = $4ffb76f3de34d3d1$var$logClient.log.bind($4ffb76f3de34d3d1$var$logClient);
        if (persistent) $4ffb76f3de34d3d1$var$SessionStorage.set("logging_enabled", true);
    } else if (typeof logger_ === "function") $4ffb76f3de34d3d1$var$logger = logger_;
    else {
        $4ffb76f3de34d3d1$var$logger = null;
        $4ffb76f3de34d3d1$var$SessionStorage.remove("logging_enabled");
    }
};
const $4ffb76f3de34d3d1$var$log = function(...varArgs) {
    if ($4ffb76f3de34d3d1$var$firstLog_ === true) {
        $4ffb76f3de34d3d1$var$firstLog_ = false;
        if ($4ffb76f3de34d3d1$var$logger === null && $4ffb76f3de34d3d1$var$SessionStorage.get("logging_enabled") === true) $4ffb76f3de34d3d1$var$enableLogging$1(true);
    }
    if ($4ffb76f3de34d3d1$var$logger) {
        const message = $4ffb76f3de34d3d1$var$buildLogMessage_.apply(null, varArgs);
        $4ffb76f3de34d3d1$var$logger(message);
    }
};
const $4ffb76f3de34d3d1$var$logWrapper = function(prefix) {
    return function(...varArgs) {
        $4ffb76f3de34d3d1$var$log(prefix, ...varArgs);
    };
};
const $4ffb76f3de34d3d1$var$error = function(...varArgs) {
    const message = "FIREBASE INTERNAL ERROR: " + $4ffb76f3de34d3d1$var$buildLogMessage_(...varArgs);
    $4ffb76f3de34d3d1$var$logClient.error(message);
};
const $4ffb76f3de34d3d1$var$fatal = function(...varArgs) {
    const message = `FIREBASE FATAL ERROR: ${$4ffb76f3de34d3d1$var$buildLogMessage_(...varArgs)}`;
    $4ffb76f3de34d3d1$var$logClient.error(message);
    throw new Error(message);
};
const $4ffb76f3de34d3d1$var$warn = function(...varArgs) {
    const message = "FIREBASE WARNING: " + $4ffb76f3de34d3d1$var$buildLogMessage_(...varArgs);
    $4ffb76f3de34d3d1$var$logClient.warn(message);
};
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */ const $4ffb76f3de34d3d1$var$warnIfPageIsSecure = function() {
    // Be very careful accessing browser globals. Who knows what may or may not exist.
    if (typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1) $4ffb76f3de34d3d1$var$warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
};
/**
 * Returns true if data is NaN, or +/- Infinity.
 */ const $4ffb76f3de34d3d1$var$isInvalidJSONNumber = function(data) {
    return typeof data === "number" && (data !== data || // NaN
    data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
};
const $4ffb76f3de34d3d1$var$executeWhenDOMReady = function(fn) {
    if ((0, $25f55f8610499322$export$5d1d834fbbf8bab7)() || document.readyState === "complete") fn();
    else {
        // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
        // fire before onload), but fall back to onload.
        let called = false;
        const wrappedFn = function() {
            if (!document.body) {
                setTimeout(wrappedFn, Math.floor(10));
                return;
            }
            if (!called) {
                called = true;
                fn();
            }
        };
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", wrappedFn, false);
            // fallback to onload.
            window.addEventListener("load", wrappedFn, false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } else if (document.attachEvent) {
            // IE.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            document.attachEvent("onreadystatechange", ()=>{
                if (document.readyState === "complete") wrappedFn();
            });
            // fallback to onload.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.attachEvent("onload", wrappedFn);
        // jQuery has an extra hack for IE that we could employ (based on
        // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
        // I'm hoping we don't need it.
        }
    }
};
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 */ const $4ffb76f3de34d3d1$var$MIN_NAME = "[MIN_NAME]";
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 */ const $4ffb76f3de34d3d1$var$MAX_NAME = "[MAX_NAME]";
/**
 * Compares valid Firebase key names, plus min and max name
 */ const $4ffb76f3de34d3d1$var$nameCompare = function(a, b) {
    if (a === b) return 0;
    else if (a === $4ffb76f3de34d3d1$var$MIN_NAME || b === $4ffb76f3de34d3d1$var$MAX_NAME) return -1;
    else if (b === $4ffb76f3de34d3d1$var$MIN_NAME || a === $4ffb76f3de34d3d1$var$MAX_NAME) return 1;
    else {
        const aAsInt = $4ffb76f3de34d3d1$var$tryParseInt(a), bAsInt = $4ffb76f3de34d3d1$var$tryParseInt(b);
        if (aAsInt !== null) {
            if (bAsInt !== null) return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
            else return -1;
        } else if (bAsInt !== null) return 1;
        else return a < b ? -1 : 1;
    }
};
/**
 * @returns {!number} comparison result.
 */ const $4ffb76f3de34d3d1$var$stringCompare = function(a, b) {
    if (a === b) return 0;
    else if (a < b) return -1;
    else return 1;
};
const $4ffb76f3de34d3d1$var$requireKey = function(key, obj) {
    if (obj && key in obj) return obj[key];
    else throw new Error("Missing required key (" + key + ") in object: " + (0, $25f55f8610499322$export$fac44ee5b035f737)(obj));
};
const $4ffb76f3de34d3d1$var$ObjectToUniqueKey = function(obj) {
    if (typeof obj !== "object" || obj === null) return (0, $25f55f8610499322$export$fac44ee5b035f737)(obj);
    const keys = [];
    // eslint-disable-next-line guard-for-in
    for(const k in obj)keys.push(k);
    // Export as json, but with the keys sorted.
    keys.sort();
    let key = "{";
    for(let i = 0; i < keys.length; i++){
        if (i !== 0) key += ",";
        key += (0, $25f55f8610499322$export$fac44ee5b035f737)(keys[i]);
        key += ":";
        key += $4ffb76f3de34d3d1$var$ObjectToUniqueKey(obj[keys[i]]);
    }
    key += "}";
    return key;
};
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param str - The string
 * @param segsize - The maximum number of chars in the string.
 * @returns The string, split into appropriately-sized chunks
 */ const $4ffb76f3de34d3d1$var$splitStringBySize = function(str, segsize) {
    const len = str.length;
    if (len <= segsize) return [
        str
    ];
    const dataSegs = [];
    for(let c = 0; c < len; c += segsize)if (c + segsize > len) dataSegs.push(str.substring(c, len));
    else dataSegs.push(str.substring(c, c + segsize));
    return dataSegs;
};
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj - The object or array to iterate over
 * @param fn - The function to apply
 */ function $4ffb76f3de34d3d1$var$each(obj, fn) {
    for(const key in obj)if (obj.hasOwnProperty(key)) fn(key, obj[key]);
}
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v - A double
 *
 */ const $4ffb76f3de34d3d1$var$doubleToIEEE754String = function(v) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(!$4ffb76f3de34d3d1$var$isInvalidJSONNumber(v), "Invalid JSON number"); // MJL
    const ebits = 11, fbits = 52;
    const bias = (1 << ebits - 1) - 1;
    let s, e, f, ln, i;
    // Compute sign, exponent, fraction
    // Skip NaN / Infinity handling --MJL.
    if (v === 0) {
        e = 0;
        f = 0;
        s = 1 / v === -Infinity ? 1 : 0;
    } else {
        s = v < 0;
        v = Math.abs(v);
        if (v >= Math.pow(2, 1 - bias)) {
            // Normalized
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
        } else {
            // Denormalized
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
        }
    }
    // Pack sign, exponent, fraction
    const bits = [];
    for(i = fbits; i; i -= 1){
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
    }
    for(i = ebits; i; i -= 1){
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
    }
    bits.push(s ? 1 : 0);
    bits.reverse();
    const str = bits.join("");
    // Return the data as a hex string. --MJL
    let hexByteString = "";
    for(i = 0; i < 64; i += 8){
        let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
        if (hexByte.length === 1) hexByte = "0" + hexByte;
        hexByteString = hexByteString + hexByte;
    }
    return hexByteString.toLowerCase();
};
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 */ const $4ffb76f3de34d3d1$var$isChromeExtensionContentScript = function() {
    return !!(typeof window === "object" && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
};
/**
 * Used to detect if we're in a Windows 8 Store app.
 */ const $4ffb76f3de34d3d1$var$isWindowsStoreApp = function() {
    // Check for the presence of a couple WinRT globals
    return typeof Windows === "object" && typeof Windows.UI === "object";
};
/**
 * Converts a server error code to a Javascript Error
 */ function $4ffb76f3de34d3d1$var$errorForServerCode(code, query) {
    let reason = "Unknown Error";
    if (code === "too_big") reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
    else if (code === "permission_denied") reason = "Client doesn't have permission to access the desired data.";
    else if (code === "unavailable") reason = "The service is unavailable";
    const error = new Error(code + " at " + query._path.toString() + ": " + reason);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error.code = code.toUpperCase();
    return error;
}
/**
 * Used to test for integer-looking strings
 */ const $4ffb76f3de34d3d1$var$INTEGER_REGEXP_ = new RegExp("^-?(0*)\\d{1,10}$");
/**
 * For use in keys, the minimum possible 32-bit integer.
 */ const $4ffb76f3de34d3d1$var$INTEGER_32_MIN = -2147483648;
/**
 * For use in kyes, the maximum possible 32-bit integer.
 */ const $4ffb76f3de34d3d1$var$INTEGER_32_MAX = 2147483647;
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 */ const $4ffb76f3de34d3d1$var$tryParseInt = function(str) {
    if ($4ffb76f3de34d3d1$var$INTEGER_REGEXP_.test(str)) {
        const intVal = Number(str);
        if (intVal >= $4ffb76f3de34d3d1$var$INTEGER_32_MIN && intVal <= $4ffb76f3de34d3d1$var$INTEGER_32_MAX) return intVal;
    }
    return null;
};
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param fn - The code to guard.
 */ const $4ffb76f3de34d3d1$var$exceptionGuard = function(fn) {
    try {
        fn();
    } catch (e) {
        // Re-throw exception when it's safe.
        setTimeout(()=>{
            // It used to be that "throw e" would result in a good console error with
            // relevant context, but as of Chrome 39, you just get the firebase.js
            // file/line number where we re-throw it, which is useless. So we log
            // e.stack explicitly.
            const stack = e.stack || "";
            $4ffb76f3de34d3d1$var$warn("Exception was thrown by user callback.", stack);
            throw e;
        }, Math.floor(0));
    }
};
/**
 * @returns {boolean} true if we think we're currently being crawled.
 */ const $4ffb76f3de34d3d1$var$beingCrawled = function() {
    const userAgent = typeof window === "object" && window["navigator"] && window["navigator"]["userAgent"] || "";
    // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
    // believe to support JavaScript/AJAX rendering.
    // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
    // would have seen the page" is flaky if we don't treat it as a crawler.
    return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param fn - Function to run.
 * @param time - Milliseconds to wait before running.
 * @returns The setTimeout() return value.
 */ const $4ffb76f3de34d3d1$var$setTimeoutNonBlocking = function(fn, time) {
    const timeout = setTimeout(fn, time);
    // Note: at the time of this comment, unrefTimer is under the unstable set of APIs. Run with --unstable to enable the API.
    if (typeof timeout === "number" && // @ts-ignore Is only defined in Deno environments.
    typeof Deno !== "undefined" && // @ts-ignore Deno and unrefTimer are only defined in Deno environments.
    Deno["unrefTimer"]) // @ts-ignore Deno and unrefTimer are only defined in Deno environments.
    Deno.unrefTimer(timeout);
    else if (typeof timeout === "object" && timeout["unref"]) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    timeout["unref"]();
    return timeout;
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around AppCheck's token fetching capabilities.
 */ class $4ffb76f3de34d3d1$var$AppCheckTokenProvider {
    constructor(appName_, appCheckProvider){
        this.appName_ = appName_;
        this.appCheckProvider = appCheckProvider;
        this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({
            optional: true
        });
        if (!this.appCheck) appCheckProvider === null || appCheckProvider === void 0 || appCheckProvider.get().then((appCheck)=>this.appCheck = appCheck);
    }
    getToken(forceRefresh) {
        if (!this.appCheck) return new Promise((resolve, reject)=>{
            // Support delayed initialization of FirebaseAppCheck. This allows our
            // customers to initialize the RTDB SDK before initializing Firebase
            // AppCheck and ensures that all requests are authenticated if a token
            // becomes available before the timoeout below expires.
            setTimeout(()=>{
                if (this.appCheck) this.getToken(forceRefresh).then(resolve, reject);
                else resolve(null);
            }, 0);
        });
        return this.appCheck.getToken(forceRefresh);
    }
    addTokenChangeListener(listener) {
        var _a;
        (_a = this.appCheckProvider) === null || _a === void 0 || _a.get().then((appCheck)=>appCheck.addTokenListener(listener));
    }
    notifyForInvalidToken() {
        $4ffb76f3de34d3d1$var$warn(`Provided AppCheck credentials for the app named "${this.appName_}" ` + "are invalid. This usually indicates your app was not initialized correctly.");
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */ class $4ffb76f3de34d3d1$var$FirebaseAuthTokenProvider {
    constructor(appName_, firebaseOptions_, authProvider_){
        this.appName_ = appName_;
        this.firebaseOptions_ = firebaseOptions_;
        this.authProvider_ = authProvider_;
        this.auth_ = null;
        this.auth_ = authProvider_.getImmediate({
            optional: true
        });
        if (!this.auth_) authProvider_.onInit((auth)=>this.auth_ = auth);
    }
    getToken(forceRefresh) {
        if (!this.auth_) return new Promise((resolve, reject)=>{
            // Support delayed initialization of FirebaseAuth. This allows our
            // customers to initialize the RTDB SDK before initializing Firebase
            // Auth and ensures that all requests are authenticated if a token
            // becomes available before the timoeout below expires.
            setTimeout(()=>{
                if (this.auth_) this.getToken(forceRefresh).then(resolve, reject);
                else resolve(null);
            }, 0);
        });
        return this.auth_.getToken(forceRefresh).catch((error)=>{
            // TODO: Need to figure out all the cases this is raised and whether
            // this makes sense.
            if (error && error.code === "auth/token-not-initialized") {
                $4ffb76f3de34d3d1$var$log("Got auth/token-not-initialized error.  Treating as null token.");
                return null;
            } else return Promise.reject(error);
        });
    }
    addTokenChangeListener(listener) {
        // TODO: We might want to wrap the listener and call it with no args to
        // avoid a leaky abstraction, but that makes removing the listener harder.
        if (this.auth_) this.auth_.addAuthTokenListener(listener);
        else this.authProvider_.get().then((auth)=>auth.addAuthTokenListener(listener));
    }
    removeTokenChangeListener(listener) {
        this.authProvider_.get().then((auth)=>auth.removeAuthTokenListener(listener));
    }
    notifyForInvalidToken() {
        let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not ' + "initialized correctly. ";
        if ("credential" in this.firebaseOptions_) errorMessage += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
        else if ("serviceAccount" in this.firebaseOptions_) errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
        else errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.';
        $4ffb76f3de34d3d1$var$warn(errorMessage);
    }
}
/* AuthTokenProvider that supplies a constant token. Used by Admin SDK or mockUserToken with emulators. */ class $4ffb76f3de34d3d1$var$EmulatorTokenProvider {
    constructor(accessToken){
        this.accessToken = accessToken;
    }
    getToken(forceRefresh) {
        return Promise.resolve({
            accessToken: this.accessToken
        });
    }
    addTokenChangeListener(listener) {
        // Invoke the listener immediately to match the behavior in Firebase Auth
        // (see packages/auth/src/auth.js#L1807)
        listener(this.accessToken);
    }
    removeTokenChangeListener(listener) {}
    notifyForInvalidToken() {}
}
/** A string that is treated as an admin access token by the RTDB emulator. Used by Admin SDK. */ $4ffb76f3de34d3d1$var$EmulatorTokenProvider.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$PROTOCOL_VERSION = "5";
const $4ffb76f3de34d3d1$var$VERSION_PARAM = "v";
const $4ffb76f3de34d3d1$var$TRANSPORT_SESSION_PARAM = "s";
const $4ffb76f3de34d3d1$var$REFERER_PARAM = "r";
const $4ffb76f3de34d3d1$var$FORGE_REF = "f";
// Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com
const $4ffb76f3de34d3d1$var$FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
const $4ffb76f3de34d3d1$var$LAST_SESSION_PARAM = "ls";
const $4ffb76f3de34d3d1$var$APPLICATION_ID_PARAM = "p";
const $4ffb76f3de34d3d1$var$APP_CHECK_TOKEN_PARAM = "ac";
const $4ffb76f3de34d3d1$var$WEBSOCKET = "websocket";
const $4ffb76f3de34d3d1$var$LONG_POLLING = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A class that holds metadata about a Repo object
 */ class $4ffb76f3de34d3d1$var$RepoInfo {
    /**
     * @param host - Hostname portion of the url for the repo
     * @param secure - Whether or not this repo is accessed over ssl
     * @param namespace - The namespace represented by the repo
     * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
     * @param nodeAdmin - Whether this instance uses Admin SDK credentials
     * @param persistenceKey - Override the default session persistence storage key
     */ constructor(host, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = "", includeNamespaceInQueryParams = false){
        this.secure = secure;
        this.namespace = namespace;
        this.webSocketOnly = webSocketOnly;
        this.nodeAdmin = nodeAdmin;
        this.persistenceKey = persistenceKey;
        this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
        this._host = host.toLowerCase();
        this._domain = this._host.substr(this._host.indexOf(".") + 1);
        this.internalHost = $4ffb76f3de34d3d1$var$PersistentStorage.get("host:" + host) || this._host;
    }
    isCacheableHost() {
        return this.internalHost.substr(0, 2) === "s-";
    }
    isCustomHost() {
        return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com";
    }
    get host() {
        return this._host;
    }
    set host(newHost) {
        if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            if (this.isCacheableHost()) $4ffb76f3de34d3d1$var$PersistentStorage.set("host:" + this._host, this.internalHost);
        }
    }
    toString() {
        let str = this.toURLString();
        if (this.persistenceKey) str += "<" + this.persistenceKey + ">";
        return str;
    }
    toURLString() {
        const protocol = this.secure ? "https://" : "http://";
        const query = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
        return `${protocol}${this.host}/${query}`;
    }
}
function $4ffb76f3de34d3d1$var$repoInfoNeedsQueryParam(repoInfo) {
    return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
}
/**
 * Returns the websocket URL for this repo
 * @param repoInfo - RepoInfo object
 * @param type - of connection
 * @param params - list
 * @returns The URL for this repo
 */ function $4ffb76f3de34d3d1$var$repoInfoConnectionURL(repoInfo, type, params) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(typeof type === "string", "typeof type must == string");
    (0, $25f55f8610499322$export$a7a9523472993e97)(typeof params === "object", "typeof params must == object");
    let connURL;
    if (type === $4ffb76f3de34d3d1$var$WEBSOCKET) connURL = (repoInfo.secure ? "wss://" : "ws://") + repoInfo.internalHost + "/.ws?";
    else if (type === $4ffb76f3de34d3d1$var$LONG_POLLING) connURL = (repoInfo.secure ? "https://" : "http://") + repoInfo.internalHost + "/.lp?";
    else throw new Error("Unknown connection type: " + type);
    if ($4ffb76f3de34d3d1$var$repoInfoNeedsQueryParam(repoInfo)) params["ns"] = repoInfo.namespace;
    const pairs = [];
    $4ffb76f3de34d3d1$var$each(params, (key, value)=>{
        pairs.push(key + "=" + value);
    });
    return connURL + pairs.join("&");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Tracks a collection of stats.
 */ class $4ffb76f3de34d3d1$var$StatsCollection {
    constructor(){
        this.counters_ = {};
    }
    incrementCounter(name, amount = 1) {
        if (!(0, $25f55f8610499322$export$2344b14b097df817)(this.counters_, name)) this.counters_[name] = 0;
        this.counters_[name] += amount;
    }
    get() {
        return (0, $25f55f8610499322$export$6c40052bed430212)(this.counters_);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$collections = {};
const $4ffb76f3de34d3d1$var$reporters = {};
function $4ffb76f3de34d3d1$var$statsManagerGetCollection(repoInfo) {
    const hashString = repoInfo.toString();
    if (!$4ffb76f3de34d3d1$var$collections[hashString]) $4ffb76f3de34d3d1$var$collections[hashString] = new $4ffb76f3de34d3d1$var$StatsCollection();
    return $4ffb76f3de34d3d1$var$collections[hashString];
}
function $4ffb76f3de34d3d1$var$statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
    const hashString = repoInfo.toString();
    if (!$4ffb76f3de34d3d1$var$reporters[hashString]) $4ffb76f3de34d3d1$var$reporters[hashString] = creatorFunction();
    return $4ffb76f3de34d3d1$var$reporters[hashString];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */ class $4ffb76f3de34d3d1$var$PacketReceiver {
    /**
     * @param onMessage_
     */ constructor(onMessage_){
        this.onMessage_ = onMessage_;
        this.pendingResponses = [];
        this.currentResponseNum = 0;
        this.closeAfterResponse = -1;
        this.onClose = null;
    }
    closeAfter(responseNum, callback) {
        this.closeAfterResponse = responseNum;
        this.onClose = callback;
        if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
        }
    }
    /**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     */ handleResponse(requestNum, data) {
        this.pendingResponses[requestNum] = data;
        while(this.pendingResponses[this.currentResponseNum]){
            const toProcess = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for(let i = 0; i < toProcess.length; ++i)if (toProcess[i]) $4ffb76f3de34d3d1$var$exceptionGuard(()=>{
                this.onMessage_(toProcess[i]);
            });
            if (this.currentResponseNum === this.closeAfterResponse) {
                if (this.onClose) {
                    this.onClose();
                    this.onClose = null;
                }
                break;
            }
            this.currentResponseNum++;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // URL query parameters associated with longpolling
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_START_PARAM = "start";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_ID_PARAM = "id";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_PW_PARAM = "pw";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_DATA_PARAM = "d";
const $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
//Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.
const $4ffb76f3de34d3d1$var$MAX_URL_DATA_SIZE = 1870;
const $4ffb76f3de34d3d1$var$SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=
const $4ffb76f3de34d3d1$var$MAX_PAYLOAD_SIZE = $4ffb76f3de34d3d1$var$MAX_URL_DATA_SIZE - $4ffb76f3de34d3d1$var$SEG_HEADER_SIZE;
/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 */ const $4ffb76f3de34d3d1$var$KEEPALIVE_REQUEST_INTERVAL = 25000;
/**
 * How long to wait before aborting a long-polling connection attempt.
 */ const $4ffb76f3de34d3d1$var$LP_CONNECT_TIMEOUT = 30000;
/**
 * This class manages a single long-polling connection.
 */ class $4ffb76f3de34d3d1$var$BrowserPollConnection {
    /**
     * @param connId An identifier for this connection, used for logging
     * @param repoInfo The info for the endpoint to send data to.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The AppCheck token for this client.
     * @param authToken The AuthToken to use for this connection.
     * @param transportSessionId Optional transportSessionid if we are
     * reconnecting for an existing transport session
     * @param lastSessionId Optional lastSessionId if the PersistentConnection has
     * already created a connection previously
     */ constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId){
        this.connId = connId;
        this.repoInfo = repoInfo;
        this.applicationId = applicationId;
        this.appCheckToken = appCheckToken;
        this.authToken = authToken;
        this.transportSessionId = transportSessionId;
        this.lastSessionId = lastSessionId;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = $4ffb76f3de34d3d1$var$logWrapper(connId);
        this.stats_ = $4ffb76f3de34d3d1$var$statsManagerGetCollection(repoInfo);
        this.urlFn = (params)=>{
            // Always add the token if we have one.
            if (this.appCheckToken) params[$4ffb76f3de34d3d1$var$APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            return $4ffb76f3de34d3d1$var$repoInfoConnectionURL(repoInfo, $4ffb76f3de34d3d1$var$LONG_POLLING, params);
        };
    }
    /**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */ open(onMessage, onDisconnect) {
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect;
        this.myPacketOrderer = new $4ffb76f3de34d3d1$var$PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(()=>{
            this.log_("Timed out trying to connect.");
            // Make sure we clear the host cache
            this.onClosed_();
            this.connectTimeoutTimer_ = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor($4ffb76f3de34d3d1$var$LP_CONNECT_TIMEOUT));
        // Ensure we delay the creation of the iframe until the DOM is loaded.
        $4ffb76f3de34d3d1$var$executeWhenDOMReady(()=>{
            if (this.isClosed_) return;
            //Set up a callback that gets triggered once a connection is set up.
            this.scriptTagHolder = new $4ffb76f3de34d3d1$var$FirebaseIFrameScriptHolder((...args)=>{
                const [command, arg1, arg2, arg3, arg4] = args;
                this.incrementIncomingBytes_(args);
                if (!this.scriptTagHolder) return; // we closed the connection.
                if (this.connectTimeoutTimer_) {
                    clearTimeout(this.connectTimeoutTimer_);
                    this.connectTimeoutTimer_ = null;
                }
                this.everConnected_ = true;
                if (command === $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_START_PARAM) {
                    this.id = arg1;
                    this.password = arg2;
                } else if (command === $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                    // Don't clear the host cache. We got a response from the server, so we know it's reachable
                    if (arg1) {
                        // We aren't expecting any more data (other than what the server's already in the process of sending us
                        // through our already open polls), so don't send any more.
                        this.scriptTagHolder.sendNewPolls = false;
                        // arg1 in this case is the last response number sent by the server. We should try to receive
                        // all of the responses up to this one before closing
                        this.myPacketOrderer.closeAfter(arg1, ()=>{
                            this.onClosed_();
                        });
                    } else this.onClosed_();
                } else throw new Error("Unrecognized command received: " + command);
            }, (...args)=>{
                const [pN, data] = args;
                this.incrementIncomingBytes_(args);
                this.myPacketOrderer.handleResponse(pN, data);
            }, ()=>{
                this.onClosed_();
            }, this.urlFn);
            //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
            //from cache.
            const urlParams = {};
            urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_START_PARAM] = "t";
            urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);
            if (this.scriptTagHolder.uniqueCallbackIdentifier) urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
            urlParams[$4ffb76f3de34d3d1$var$VERSION_PARAM] = $4ffb76f3de34d3d1$var$PROTOCOL_VERSION;
            if (this.transportSessionId) urlParams[$4ffb76f3de34d3d1$var$TRANSPORT_SESSION_PARAM] = this.transportSessionId;
            if (this.lastSessionId) urlParams[$4ffb76f3de34d3d1$var$LAST_SESSION_PARAM] = this.lastSessionId;
            if (this.applicationId) urlParams[$4ffb76f3de34d3d1$var$APPLICATION_ID_PARAM] = this.applicationId;
            if (this.appCheckToken) urlParams[$4ffb76f3de34d3d1$var$APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            if (typeof location !== "undefined" && location.hostname && $4ffb76f3de34d3d1$var$FORGE_DOMAIN_RE.test(location.hostname)) urlParams[$4ffb76f3de34d3d1$var$REFERER_PARAM] = $4ffb76f3de34d3d1$var$FORGE_REF;
            const connectURL = this.urlFn(urlParams);
            this.log_("Connecting via long-poll to " + connectURL);
            this.scriptTagHolder.addTag(connectURL, ()=>{
            /* do nothing */ });
        });
    }
    /**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */ start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
    }
    /**
     * Forces long polling to be considered as a potential transport
     */ static forceAllow() {
        $4ffb76f3de34d3d1$var$BrowserPollConnection.forceAllow_ = true;
    }
    /**
     * Forces longpolling to not be considered as a potential transport
     */ static forceDisallow() {
        $4ffb76f3de34d3d1$var$BrowserPollConnection.forceDisallow_ = true;
    }
    // Static method, use string literal so it can be accessed in a generic way
    static isAvailable() {
        if ((0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) return false;
        else if ($4ffb76f3de34d3d1$var$BrowserPollConnection.forceAllow_) return true;
        else // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
        // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
        return !$4ffb76f3de34d3d1$var$BrowserPollConnection.forceDisallow_ && typeof document !== "undefined" && document.createElement != null && !$4ffb76f3de34d3d1$var$isChromeExtensionContentScript() && !$4ffb76f3de34d3d1$var$isWindowsStoreApp();
    }
    /**
     * No-op for polling
     */ markConnectionHealthy() {}
    /**
     * Stops polling and cleans up the iframe
     */ shutdown_() {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
        }
        //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.
        if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
        }
    }
    /**
     * Triggered when this transport is closed
     */ onClosed_() {
        if (!this.isClosed_) {
            this.log_("Longpoll is closing itself");
            this.shutdown_();
            if (this.onDisconnect_) {
                this.onDisconnect_(this.everConnected_);
                this.onDisconnect_ = null;
            }
        }
    }
    /**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */ close() {
        if (!this.isClosed_) {
            this.log_("Longpoll is being closed.");
            this.shutdown_();
        }
    }
    /**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param data - The JSON data to transmit.
     */ send(data) {
        const dataStr = (0, $25f55f8610499322$export$fac44ee5b035f737)(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter("bytes_sent", dataStr.length);
        //first, lets get the base64-encoded data
        const base64data = (0, $25f55f8610499322$export$e510a73ee562749)(dataStr);
        //We can only fit a certain amount in each URL, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        const dataSegs = $4ffb76f3de34d3d1$var$splitStringBySize(base64data, $4ffb76f3de34d3d1$var$MAX_PAYLOAD_SIZE);
        //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
        //of segments so that we can reassemble the packet on the server.
        for(let i = 0; i < dataSegs.length; i++){
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
        }
    }
    /**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     */ addDisconnectPingFrame(id, pw) {
        if ((0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) return;
        this.myDisconnFrame = document.createElement("iframe");
        const urlParams = {};
        urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
        urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = "none";
        document.body.appendChild(this.myDisconnFrame);
    }
    /**
     * Used to track the bytes received by this client
     */ incrementIncomingBytes_(args) {
        // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
        const bytesReceived = (0, $25f55f8610499322$export$fac44ee5b035f737)(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter("bytes_received", bytesReceived);
    }
}
/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/ class $4ffb76f3de34d3d1$var$FirebaseIFrameScriptHolder {
    /**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */ constructor(commandCB, onMessageCB, onDisconnect, urlFn){
        this.onDisconnect = onDisconnect;
        this.urlFn = urlFn;
        //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
        //problems in some browsers.
        this.outstandingRequests = new Set();
        //A queue of the pending segments waiting for transmission to the server.
        this.pendingSegs = [];
        //A serial number. We use this for two things:
        // 1) A way to ensure the browser doesn't cache responses to polls
        // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
        //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
        //    JSONP code in the order it was added to the iframe.
        this.currentSerial = Math.floor(Math.random() * 100000000);
        // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
        // incoming data from the server that we're waiting for).
        this.sendNewPolls = true;
        if (!(0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) {
            //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
            //iframes where we put the long-polling script tags. We have two callbacks:
            //   1) Command Callback - Triggered for control issues, like starting a connection.
            //   2) Message Callback - Triggered when new data arrives.
            this.uniqueCallbackIdentifier = $4ffb76f3de34d3d1$var$LUIDGenerator();
            window[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            //Create an iframe for us to add script tags to.
            this.myIFrame = $4ffb76f3de34d3d1$var$FirebaseIFrameScriptHolder.createIFrame_();
            // Set the iframe's contents.
            let script = "";
            // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
            // for ie9, but ie8 needs to do it again in the document itself.
            if (this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:") {
                const currentDomain = document.domain;
                script = '<script>document.domain="' + currentDomain + '";</script>';
            }
            const iframeContents = "<html><body>" + script + "</body></html>";
            try {
                this.myIFrame.doc.open();
                this.myIFrame.doc.write(iframeContents);
                this.myIFrame.doc.close();
            } catch (e) {
                $4ffb76f3de34d3d1$var$log("frame writing exception");
                if (e.stack) $4ffb76f3de34d3d1$var$log(e.stack);
                $4ffb76f3de34d3d1$var$log(e);
            }
        } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
        }
    }
    /**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     */ static createIFrame_() {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        // This is necessary in order to initialize the document inside the iframe
        if (document.body) {
            document.body.appendChild(iframe);
            try {
                // If document.domain has been modified in IE, this will throw an error, and we need to set the
                // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
                // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
                const a = iframe.contentWindow.document;
                if (!a) // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
                $4ffb76f3de34d3d1$var$log("No IE domain setting required");
            } catch (e) {
                const domain = document.domain;
                iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
        } else // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
        // never gets hit.
        throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        // Get the document of the iframe in a browser-specific way.
        if (iframe.contentDocument) iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
        else if (iframe.contentWindow) iframe.doc = iframe.contentWindow.document; // Internet Explorer
        else if (iframe.document) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iframe.doc = iframe.document; //others?
        return iframe;
    }
    /**
     * Cancel all outstanding queries and remove the frame.
     */ close() {
        //Mark this iframe as dead, so no new requests are sent.
        this.alive = false;
        if (this.myIFrame) {
            //We have to actually remove all of the html inside this iframe before removing it from the
            //window, or IE will continue loading and executing the script tags we've already added, which
            //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
            this.myIFrame.doc.body.innerHTML = "";
            setTimeout(()=>{
                if (this.myIFrame !== null) {
                    document.body.removeChild(this.myIFrame);
                    this.myIFrame = null;
                }
            }, Math.floor(0));
        }
        // Protect from being called recursively.
        const onDisconnect = this.onDisconnect;
        if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
        }
    }
    /**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param id - The ID of this connection
     * @param pw - The password for this connection
     */ startLongPoll(id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;
        //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
        while(this.newRequest_());
    }
    /**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */ newRequest_() {
        // We keep one outstanding request open all the time to receive data, but if we need to send data
        // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
        // close the old request.
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            //construct our url
            this.currentSerial++;
            const urlParams = {};
            urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[$4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            let theURL = this.urlFn(urlParams);
            //Now add as much data as we can.
            let curDataString = "";
            let i = 0;
            while(this.pendingSegs.length > 0){
                //first, lets see if the next segment will fit.
                const nextSeg = this.pendingSegs[0];
                if (nextSeg.d.length + $4ffb76f3de34d3d1$var$SEG_HEADER_SIZE + curDataString.length <= $4ffb76f3de34d3d1$var$MAX_URL_DATA_SIZE) {
                    //great, the segment will fit. Lets append it.
                    const theSeg = this.pendingSegs.shift();
                    curDataString = curDataString + "&" + $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + $4ffb76f3de34d3d1$var$FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
                    i++;
                } else break;
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
        } else return false;
    }
    /**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */ enqueueSegment(segnum, totalsegs, data) {
        //add this to the queue of segments to send.
        this.pendingSegs.push({
            seg: segnum,
            ts: totalsegs,
            d: data
        });
        //send the data immediately if there isn't already data being transmitted, unless
        //startLongPoll hasn't been called yet.
        if (this.alive) this.newRequest_();
    }
    /**
     * Add a script tag for a regular long-poll request.
     * @param url - The URL of the script tag.
     * @param serial - The serial number of the request.
     */ addLongPollTag_(url, serial) {
        //remember that we sent this request.
        this.outstandingRequests.add(serial);
        const doNewRequest = ()=>{
            this.outstandingRequests.delete(serial);
            this.newRequest_();
        };
        // If this request doesn't return on its own accord (by the server sending us some data), we'll
        // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.
        const keepaliveTimeout = setTimeout(doNewRequest, Math.floor($4ffb76f3de34d3d1$var$KEEPALIVE_REQUEST_INTERVAL));
        const readyStateCB = ()=>{
            // Request completed.  Cancel the keepalive.
            clearTimeout(keepaliveTimeout);
            // Trigger a new request so we can continue receiving data.
            doNewRequest();
        };
        this.addTag(url, readyStateCB);
    }
    /**
     * Add an arbitrary script tag to the iframe.
     * @param url - The URL for the script tag source.
     * @param loadCB - A callback to be triggered once the script has loaded.
     */ addTag(url, loadCB) {
        if ((0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.doNodeLongPoll(url, loadCB);
        else setTimeout(()=>{
            try {
                // if we're already closed, don't add this poll
                if (!this.sendNewPolls) return;
                const newScript = this.myIFrame.doc.createElement("script");
                newScript.type = "text/javascript";
                newScript.async = true;
                newScript.src = url;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                newScript.onload = newScript.onreadystatechange = function() {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const rstate = newScript.readyState;
                    if (!rstate || rstate === "loaded" || rstate === "complete") {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        newScript.onload = newScript.onreadystatechange = null;
                        if (newScript.parentNode) newScript.parentNode.removeChild(newScript);
                        loadCB();
                    }
                };
                newScript.onerror = ()=>{
                    $4ffb76f3de34d3d1$var$log("Long-poll script failed to load: " + url);
                    this.sendNewPolls = false;
                    this.close();
                };
                this.myIFrame.doc.body.appendChild(newScript);
            } catch (e) {
            // TODO: we should make this error visible somehow
            }
        }, Math.floor(1));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$WEBSOCKET_MAX_FRAME_SIZE = 16384;
const $4ffb76f3de34d3d1$var$WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
let $4ffb76f3de34d3d1$var$WebSocketImpl = null;
if (typeof MozWebSocket !== "undefined") $4ffb76f3de34d3d1$var$WebSocketImpl = MozWebSocket;
else if (typeof WebSocket !== "undefined") $4ffb76f3de34d3d1$var$WebSocketImpl = WebSocket;
/**
 * Create a new websocket connection with the given callbacks.
 */ class $4ffb76f3de34d3d1$var$WebSocketConnection {
    /**
     * @param connId identifier for this transport
     * @param repoInfo The info for the websocket endpoint.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The App Check Token for this client.
     * @param authToken The Auth Token for this client.
     * @param transportSessionId Optional transportSessionId if this is connecting
     * to an existing transport session
     * @param lastSessionId Optional lastSessionId if there was a previous
     * connection
     */ constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId){
        this.connId = connId;
        this.applicationId = applicationId;
        this.appCheckToken = appCheckToken;
        this.authToken = authToken;
        this.keepaliveTimer = null;
        this.frames = null;
        this.totalFrames = 0;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.log_ = $4ffb76f3de34d3d1$var$logWrapper(this.connId);
        this.stats_ = $4ffb76f3de34d3d1$var$statsManagerGetCollection(repoInfo);
        this.connURL = $4ffb76f3de34d3d1$var$WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId);
        this.nodeAdmin = repoInfo.nodeAdmin;
    }
    /**
     * @param repoInfo - The info for the websocket endpoint.
     * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param lastSessionId - Optional lastSessionId if there was a previous connection
     * @returns connection url
     */ static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId) {
        const urlParams = {};
        urlParams[$4ffb76f3de34d3d1$var$VERSION_PARAM] = $4ffb76f3de34d3d1$var$PROTOCOL_VERSION;
        if (!(0, $25f55f8610499322$export$5d1d834fbbf8bab7)() && typeof location !== "undefined" && location.hostname && $4ffb76f3de34d3d1$var$FORGE_DOMAIN_RE.test(location.hostname)) urlParams[$4ffb76f3de34d3d1$var$REFERER_PARAM] = $4ffb76f3de34d3d1$var$FORGE_REF;
        if (transportSessionId) urlParams[$4ffb76f3de34d3d1$var$TRANSPORT_SESSION_PARAM] = transportSessionId;
        if (lastSessionId) urlParams[$4ffb76f3de34d3d1$var$LAST_SESSION_PARAM] = lastSessionId;
        if (appCheckToken) urlParams[$4ffb76f3de34d3d1$var$APP_CHECK_TOKEN_PARAM] = appCheckToken;
        if (applicationId) urlParams[$4ffb76f3de34d3d1$var$APPLICATION_ID_PARAM] = applicationId;
        return $4ffb76f3de34d3d1$var$repoInfoConnectionURL(repoInfo, $4ffb76f3de34d3d1$var$WEBSOCKET, urlParams);
    }
    /**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */ open(onMessage, onDisconnect) {
        this.onDisconnect = onDisconnect;
        this.onMessage = onMessage;
        this.log_("Websocket connecting to " + this.connURL);
        this.everConnected_ = false;
        // Assume failure until proven otherwise.
        $4ffb76f3de34d3d1$var$PersistentStorage.set("previous_websocket_failure", true);
        try {
            let options;
            if ((0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) {
                const device = this.nodeAdmin ? "AdminNode" : "Node";
                // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
                options = {
                    headers: {
                        "User-Agent": `Firebase/${$4ffb76f3de34d3d1$var$PROTOCOL_VERSION}/${$4ffb76f3de34d3d1$var$SDK_VERSION}/${$361a76e6ea33591f$exports.platform}/${device}`,
                        "X-Firebase-GMPID": this.applicationId || ""
                    }
                };
                // If using Node with admin creds, AppCheck-related checks are unnecessary.
                // Note that we send the credentials here even if they aren't admin credentials, which is
                // not a problem.
                // Note that this header is just used to bypass appcheck, and the token should still be sent
                // through the websocket connection once it is established.
                if (this.authToken) options.headers["Authorization"] = `Bearer ${this.authToken}`;
                if (this.appCheckToken) options.headers["X-Firebase-AppCheck"] = this.appCheckToken;
                // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
                const env = {};
                const proxy = this.connURL.indexOf("wss://") === 0 ? env["HTTPS_PROXY"] || env["https_proxy"] : env["HTTP_PROXY"] || env["http_proxy"];
                if (proxy) options["proxy"] = {
                    origin: proxy
                };
            }
            this.mySock = new $4ffb76f3de34d3d1$var$WebSocketImpl(this.connURL, [], options);
        } catch (e) {
            this.log_("Error instantiating WebSocket.");
            const error = e.message || e.data;
            if (error) this.log_(error);
            this.onClosed_();
            return;
        }
        this.mySock.onopen = ()=>{
            this.log_("Websocket connected.");
            this.everConnected_ = true;
        };
        this.mySock.onclose = ()=>{
            this.log_("Websocket connection was disconnected.");
            this.mySock = null;
            this.onClosed_();
        };
        this.mySock.onmessage = (m)=>{
            this.handleIncomingFrame(m);
        };
        this.mySock.onerror = (e)=>{
            this.log_("WebSocket error.  Closing connection.");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const error = e.message || e.data;
            if (error) this.log_(error);
            this.onClosed_();
        };
    }
    /**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */ start() {}
    static forceDisallow() {
        $4ffb76f3de34d3d1$var$WebSocketConnection.forceDisallow_ = true;
    }
    static isAvailable() {
        let isOldAndroid = false;
        if (typeof navigator !== "undefined" && navigator.userAgent) {
            const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
                if (parseFloat(oldAndroidMatch[1]) < 4.4) isOldAndroid = true;
            }
        }
        return !isOldAndroid && $4ffb76f3de34d3d1$var$WebSocketImpl !== null && !$4ffb76f3de34d3d1$var$WebSocketConnection.forceDisallow_;
    }
    /**
     * Returns true if we previously failed to connect with this transport.
     */ static previouslyFailed() {
        // If our persistent storage is actually only in-memory storage,
        // we default to assuming that it previously failed to be safe.
        return $4ffb76f3de34d3d1$var$PersistentStorage.isInMemoryStorage || $4ffb76f3de34d3d1$var$PersistentStorage.get("previous_websocket_failure") === true;
    }
    markConnectionHealthy() {
        $4ffb76f3de34d3d1$var$PersistentStorage.remove("previous_websocket_failure");
    }
    appendFrame_(data) {
        this.frames.push(data);
        if (this.frames.length === this.totalFrames) {
            const fullMess = this.frames.join("");
            this.frames = null;
            const jsonMess = (0, $25f55f8610499322$export$c5a53ce6a17cf18d)(fullMess);
            //handle the message
            this.onMessage(jsonMess);
        }
    }
    /**
     * @param frameCount - The number of frames we are expecting from the server
     */ handleNewFrameCount_(frameCount) {
        this.totalFrames = frameCount;
        this.frames = [];
    }
    /**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @returns Any remaining data to be process, or null if there is none
     */ extractFrameCount_(data) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.frames === null, "We already have a frame buffer");
        // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
        // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
        if (data.length <= 6) {
            const frameCount = Number(data);
            if (!isNaN(frameCount)) {
                this.handleNewFrameCount_(frameCount);
                return null;
            }
        }
        this.handleNewFrameCount_(1);
        return data;
    }
    /**
     * Process a websocket frame that has arrived from the server.
     * @param mess - The frame data
     */ handleIncomingFrame(mess) {
        if (this.mySock === null) return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
        const data = mess["data"];
        this.bytesReceived += data.length;
        this.stats_.incrementCounter("bytes_received", data.length);
        this.resetKeepAlive();
        if (this.frames !== null) // we're buffering
        this.appendFrame_(data);
        else {
            // try to parse out a frame count, otherwise, assume 1 and process it
            const remainingData = this.extractFrameCount_(data);
            if (remainingData !== null) this.appendFrame_(remainingData);
        }
    }
    /**
     * Send a message to the server
     * @param data - The JSON object to transmit
     */ send(data) {
        this.resetKeepAlive();
        const dataStr = (0, $25f55f8610499322$export$fac44ee5b035f737)(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter("bytes_sent", dataStr.length);
        //We can only fit a certain amount in each websocket frame, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        const dataSegs = $4ffb76f3de34d3d1$var$splitStringBySize(dataStr, $4ffb76f3de34d3d1$var$WEBSOCKET_MAX_FRAME_SIZE);
        //Send the length header
        if (dataSegs.length > 1) this.sendString_(String(dataSegs.length));
        //Send the actual data in segments.
        for(let i = 0; i < dataSegs.length; i++)this.sendString_(dataSegs[i]);
    }
    shutdown_() {
        this.isClosed_ = true;
        if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
        }
        if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
        }
    }
    onClosed_() {
        if (!this.isClosed_) {
            this.log_("WebSocket is closing itself");
            this.shutdown_();
            // since this is an internal close, trigger the close listener
            if (this.onDisconnect) {
                this.onDisconnect(this.everConnected_);
                this.onDisconnect = null;
            }
        }
    }
    /**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */ close() {
        if (!this.isClosed_) {
            this.log_("WebSocket is being closed");
            this.shutdown_();
        }
    }
    /**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */ resetKeepAlive() {
        clearInterval(this.keepaliveTimer);
        this.keepaliveTimer = setInterval(()=>{
            //If there has been no websocket activity for a while, send a no-op
            if (this.mySock) this.sendString_("0");
            this.resetKeepAlive();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor($4ffb76f3de34d3d1$var$WEBSOCKET_KEEPALIVE_INTERVAL));
    }
    /**
     * Send a string over the websocket.
     *
     * @param str - String to send.
     */ sendString_(str) {
        // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
        // calls for some unknown reason.  We treat these as an error and disconnect.
        // See https://app.asana.com/0/58926111402292/68021340250410
        try {
            this.mySock.send(str);
        } catch (e) {
            this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection.");
            setTimeout(this.onClosed_.bind(this), 0);
        }
    }
}
/**
 * Number of response before we consider the connection "healthy."
 */ $4ffb76f3de34d3d1$var$WebSocketConnection.responsesRequiredToBeHealthy = 2;
/**
 * Time to wait for the connection te become healthy before giving up.
 */ $4ffb76f3de34d3d1$var$WebSocketConnection.healthyTimeout = 30000;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */ class $4ffb76f3de34d3d1$var$TransportManager {
    /**
     * @param repoInfo - Metadata around the namespace we're connecting to
     */ constructor(repoInfo){
        this.initTransports_(repoInfo);
    }
    static get ALL_TRANSPORTS() {
        return [
            $4ffb76f3de34d3d1$var$BrowserPollConnection,
            $4ffb76f3de34d3d1$var$WebSocketConnection
        ];
    }
    /**
     * Returns whether transport has been selected to ensure WebSocketConnection or BrowserPollConnection are not called after
     * TransportManager has already set up transports_
     */ static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_;
    }
    initTransports_(repoInfo) {
        const isWebSocketsAvailable = $4ffb76f3de34d3d1$var$WebSocketConnection && $4ffb76f3de34d3d1$var$WebSocketConnection["isAvailable"]();
        let isSkipPollConnection = isWebSocketsAvailable && !$4ffb76f3de34d3d1$var$WebSocketConnection.previouslyFailed();
        if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable) $4ffb76f3de34d3d1$var$warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            isSkipPollConnection = true;
        }
        if (isSkipPollConnection) this.transports_ = [
            $4ffb76f3de34d3d1$var$WebSocketConnection
        ];
        else {
            const transports = this.transports_ = [];
            for (const transport of $4ffb76f3de34d3d1$var$TransportManager.ALL_TRANSPORTS)if (transport && transport["isAvailable"]()) transports.push(transport);
            $4ffb76f3de34d3d1$var$TransportManager.globalTransportInitialized_ = true;
        }
    }
    /**
     * @returns The constructor for the initial transport to use
     */ initialTransport() {
        if (this.transports_.length > 0) return this.transports_[0];
        else throw new Error("No transports available");
    }
    /**
     * @returns The constructor for the next transport, or null
     */ upgradeTransport() {
        if (this.transports_.length > 1) return this.transports_[1];
        else return null;
    }
}
// Keeps track of whether the TransportManager has already chosen a transport to use
$4ffb76f3de34d3d1$var$TransportManager.globalTransportInitialized_ = false;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Abort upgrade attempt if it takes longer than 60s.
const $4ffb76f3de34d3d1$var$UPGRADE_TIMEOUT = 60000;
// For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.
const $4ffb76f3de34d3d1$var$DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000;
// If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.
const $4ffb76f3de34d3d1$var$BYTES_SENT_HEALTHY_OVERRIDE = 10240;
const $4ffb76f3de34d3d1$var$BYTES_RECEIVED_HEALTHY_OVERRIDE = 102400;
const $4ffb76f3de34d3d1$var$MESSAGE_TYPE = "t";
const $4ffb76f3de34d3d1$var$MESSAGE_DATA = "d";
const $4ffb76f3de34d3d1$var$CONTROL_SHUTDOWN = "s";
const $4ffb76f3de34d3d1$var$CONTROL_RESET = "r";
const $4ffb76f3de34d3d1$var$CONTROL_ERROR = "e";
const $4ffb76f3de34d3d1$var$CONTROL_PONG = "o";
const $4ffb76f3de34d3d1$var$SWITCH_ACK = "a";
const $4ffb76f3de34d3d1$var$END_TRANSMISSION = "n";
const $4ffb76f3de34d3d1$var$PING = "p";
const $4ffb76f3de34d3d1$var$SERVER_HELLO = "h";
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */ class $4ffb76f3de34d3d1$var$Connection {
    /**
     * @param id - an id for this connection
     * @param repoInfo_ - the info for the endpoint to connect to
     * @param applicationId_ - the Firebase App ID for this project
     * @param appCheckToken_ - The App Check Token for this device.
     * @param authToken_ - The auth token for this session.
     * @param onMessage_ - the callback to be triggered when a server-push message arrives
     * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param onDisconnect_ - the callback to be triggered when a connection was lost
     * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */ constructor(id, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId){
        this.id = id;
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.appCheckToken_ = appCheckToken_;
        this.authToken_ = authToken_;
        this.onMessage_ = onMessage_;
        this.onReady_ = onReady_;
        this.onDisconnect_ = onDisconnect_;
        this.onKill_ = onKill_;
        this.lastSessionId = lastSessionId;
        this.connectionCount = 0;
        this.pendingDataMessages = [];
        this.state_ = 0 /* RealtimeState.CONNECTING */ ;
        this.log_ = $4ffb76f3de34d3d1$var$logWrapper("c:" + this.id + ":");
        this.transportManager_ = new $4ffb76f3de34d3d1$var$TransportManager(repoInfo_);
        this.log_("Connection created");
        this.start_();
    }
    /**
     * Starts a connection attempt
     */ start_() {
        const conn = this.transportManager_.initialTransport();
        this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
        const onMessageReceived = this.connReceiver_(this.conn_);
        const onConnectionLost = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_;
        this.rx_ = this.conn_;
        this.secondaryConn_ = null;
        this.isHealthy_ = false;
        /*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */ setTimeout(()=>{
            // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
            this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
        }, Math.floor(0));
        const healthyTimeoutMS = conn["healthyTimeout"] || 0;
        if (healthyTimeoutMS > 0) this.healthyTimeout_ = $4ffb76f3de34d3d1$var$setTimeoutNonBlocking(()=>{
            this.healthyTimeout_ = null;
            if (!this.isHealthy_) {
                if (this.conn_ && this.conn_.bytesReceived > $4ffb76f3de34d3d1$var$BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                    this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy.");
                    this.isHealthy_ = true;
                    this.conn_.markConnectionHealthy();
                } else if (this.conn_ && this.conn_.bytesSent > $4ffb76f3de34d3d1$var$BYTES_SENT_HEALTHY_OVERRIDE) this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.");
                else {
                    this.log_("Closing unhealthy connection after timeout.");
                    this.close();
                }
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(healthyTimeoutMS));
    }
    nextTransportId_() {
        return "c:" + this.id + ":" + this.connectionCount++;
    }
    disconnReceiver_(conn) {
        return (everConnected)=>{
            if (conn === this.conn_) this.onConnectionLost_(everConnected);
            else if (conn === this.secondaryConn_) {
                this.log_("Secondary connection lost.");
                this.onSecondaryConnectionLost_();
            } else this.log_("closing an old connection");
        };
    }
    connReceiver_(conn) {
        return (message)=>{
            if (this.state_ !== 2 /* RealtimeState.DISCONNECTED */ ) {
                if (conn === this.rx_) this.onPrimaryMessageReceived_(message);
                else if (conn === this.secondaryConn_) this.onSecondaryMessageReceived_(message);
                else this.log_("message on old connection");
            }
        };
    }
    /**
     * @param dataMsg - An arbitrary data message to be sent to the server
     */ sendRequest(dataMsg) {
        // wrap in a data message envelope and send it on
        const msg = {
            t: "d",
            d: dataMsg
        };
        this.sendData_(msg);
    }
    tryCleanupConnection() {
        if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
        // the server will shutdown the old connection
        }
    }
    onSecondaryControl_(controlData) {
        if ($4ffb76f3de34d3d1$var$MESSAGE_TYPE in controlData) {
            const cmd = controlData[$4ffb76f3de34d3d1$var$MESSAGE_TYPE];
            if (cmd === $4ffb76f3de34d3d1$var$SWITCH_ACK) this.upgradeIfSecondaryHealthy_();
            else if (cmd === $4ffb76f3de34d3d1$var$CONTROL_RESET) {
                // Most likely the session wasn't valid. Abandon the switch attempt
                this.log_("Got a reset on secondary, closing it");
                this.secondaryConn_.close();
                // If we were already using this connection for something, than we need to fully close
                if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) this.close();
            } else if (cmd === $4ffb76f3de34d3d1$var$CONTROL_PONG) {
                this.log_("got pong on secondary.");
                this.secondaryResponsesRequired_--;
                this.upgradeIfSecondaryHealthy_();
            }
        }
    }
    onSecondaryMessageReceived_(parsedData) {
        const layer = $4ffb76f3de34d3d1$var$requireKey("t", parsedData);
        const data = $4ffb76f3de34d3d1$var$requireKey("d", parsedData);
        if (layer === "c") this.onSecondaryControl_(data);
        else if (layer === "d") // got a data message, but we're still second connection. Need to buffer it up
        this.pendingDataMessages.push(data);
        else throw new Error("Unknown protocol layer: " + layer);
    }
    upgradeIfSecondaryHealthy_() {
        if (this.secondaryResponsesRequired_ <= 0) {
            this.log_("Secondary connection is healthy.");
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
        } else {
            // Send a ping to make sure the connection is healthy.
            this.log_("sending ping on secondary.");
            this.secondaryConn_.send({
                t: "c",
                d: {
                    t: $4ffb76f3de34d3d1$var$PING,
                    d: {}
                }
            });
        }
    }
    proceedWithUpgrade_() {
        // tell this connection to consider itself open
        this.secondaryConn_.start();
        // send ack
        this.log_("sending client ack on secondary");
        this.secondaryConn_.send({
            t: "c",
            d: {
                t: $4ffb76f3de34d3d1$var$SWITCH_ACK,
                d: {}
            }
        });
        // send end packet on primary transport, switch to sending on this one
        // can receive on this one, buffer responses until end received on primary transport
        this.log_("Ending transmission on primary");
        this.conn_.send({
            t: "c",
            d: {
                t: $4ffb76f3de34d3d1$var$END_TRANSMISSION,
                d: {}
            }
        });
        this.tx_ = this.secondaryConn_;
        this.tryCleanupConnection();
    }
    onPrimaryMessageReceived_(parsedData) {
        // Must refer to parsedData properties in quotes, so closure doesn't touch them.
        const layer = $4ffb76f3de34d3d1$var$requireKey("t", parsedData);
        const data = $4ffb76f3de34d3d1$var$requireKey("d", parsedData);
        if (layer === "c") this.onControl_(data);
        else if (layer === "d") this.onDataMessage_(data);
    }
    onDataMessage_(message) {
        this.onPrimaryResponse_();
        // We don't do anything with data messages, just kick them up a level
        this.onMessage_(message);
    }
    onPrimaryResponse_() {
        if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
                this.log_("Primary connection is healthy.");
                this.isHealthy_ = true;
                this.conn_.markConnectionHealthy();
            }
        }
    }
    onControl_(controlData) {
        const cmd = $4ffb76f3de34d3d1$var$requireKey($4ffb76f3de34d3d1$var$MESSAGE_TYPE, controlData);
        if ($4ffb76f3de34d3d1$var$MESSAGE_DATA in controlData) {
            const payload = controlData[$4ffb76f3de34d3d1$var$MESSAGE_DATA];
            if (cmd === $4ffb76f3de34d3d1$var$SERVER_HELLO) this.onHandshake_(payload);
            else if (cmd === $4ffb76f3de34d3d1$var$END_TRANSMISSION) {
                this.log_("recvd end transmission on primary");
                this.rx_ = this.secondaryConn_;
                for(let i = 0; i < this.pendingDataMessages.length; ++i)this.onDataMessage_(this.pendingDataMessages[i]);
                this.pendingDataMessages = [];
                this.tryCleanupConnection();
            } else if (cmd === $4ffb76f3de34d3d1$var$CONTROL_SHUTDOWN) // This was previously the 'onKill' callback passed to the lower-level connection
            // payload in this case is the reason for the shutdown. Generally a human-readable error
            this.onConnectionShutdown_(payload);
            else if (cmd === $4ffb76f3de34d3d1$var$CONTROL_RESET) // payload in this case is the host we should contact
            this.onReset_(payload);
            else if (cmd === $4ffb76f3de34d3d1$var$CONTROL_ERROR) $4ffb76f3de34d3d1$var$error("Server Error: " + payload);
            else if (cmd === $4ffb76f3de34d3d1$var$CONTROL_PONG) {
                this.log_("got pong on primary.");
                this.onPrimaryResponse_();
                this.sendPingOnPrimaryIfNecessary_();
            } else $4ffb76f3de34d3d1$var$error("Unknown control packet command: " + cmd);
        }
    }
    /**
     * @param handshake - The handshake data returned from the server
     */ onHandshake_(handshake) {
        const timestamp = handshake.ts;
        const version = handshake.v;
        const host = handshake.h;
        this.sessionId = handshake.s;
        this.repoInfo_.host = host;
        // if we've already closed the connection, then don't bother trying to progress further
        if (this.state_ === 0 /* RealtimeState.CONNECTING */ ) {
            this.conn_.start();
            this.onConnectionEstablished_(this.conn_, timestamp);
            if ($4ffb76f3de34d3d1$var$PROTOCOL_VERSION !== version) $4ffb76f3de34d3d1$var$warn("Protocol version mismatch detected");
            // TODO: do we want to upgrade? when? maybe a delay?
            this.tryStartUpgrade_();
        }
    }
    tryStartUpgrade_() {
        const conn = this.transportManager_.upgradeTransport();
        if (conn) this.startUpgrade_(conn);
    }
    startUpgrade_(conn) {
        this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
        const onMessage = this.connReceiver_(this.secondaryConn_);
        const onDisconnect = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(onMessage, onDisconnect);
        // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
        $4ffb76f3de34d3d1$var$setTimeoutNonBlocking(()=>{
            if (this.secondaryConn_) {
                this.log_("Timed out trying to upgrade.");
                this.secondaryConn_.close();
            }
        }, Math.floor($4ffb76f3de34d3d1$var$UPGRADE_TIMEOUT));
    }
    onReset_(host) {
        this.log_("Reset packet received.  New host: " + host);
        this.repoInfo_.host = host;
        // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
        // We don't currently support resets after the connection has already been established
        if (this.state_ === 1 /* RealtimeState.CONNECTED */ ) this.close();
        else {
            // Close whatever connections we have open and start again.
            this.closeConnections_();
            this.start_();
        }
    }
    onConnectionEstablished_(conn, timestamp) {
        this.log_("Realtime connection established.");
        this.conn_ = conn;
        this.state_ = 1 /* RealtimeState.CONNECTED */ ;
        if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
        }
        // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
        // send some pings.
        if (this.primaryResponsesRequired_ === 0) {
            this.log_("Primary connection is healthy.");
            this.isHealthy_ = true;
        } else $4ffb76f3de34d3d1$var$setTimeoutNonBlocking(()=>{
            this.sendPingOnPrimaryIfNecessary_();
        }, Math.floor($4ffb76f3de34d3d1$var$DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
    }
    sendPingOnPrimaryIfNecessary_() {
        // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
        if (!this.isHealthy_ && this.state_ === 1 /* RealtimeState.CONNECTED */ ) {
            this.log_("sending ping on primary.");
            this.sendData_({
                t: "c",
                d: {
                    t: $4ffb76f3de34d3d1$var$PING,
                    d: {}
                }
            });
        }
    }
    onSecondaryConnectionLost_() {
        const conn = this.secondaryConn_;
        this.secondaryConn_ = null;
        if (this.tx_ === conn || this.rx_ === conn) // we are relying on this connection already in some capacity. Therefore, a failure is real
        this.close();
    }
    /**
     * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     */ onConnectionLost_(everConnected) {
        this.conn_ = null;
        // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
        // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.
        if (!everConnected && this.state_ === 0 /* RealtimeState.CONNECTING */ ) {
            this.log_("Realtime connection failed.");
            // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away
            if (this.repoInfo_.isCacheableHost()) {
                $4ffb76f3de34d3d1$var$PersistentStorage.remove("host:" + this.repoInfo_.host);
                // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
                this.repoInfo_.internalHost = this.repoInfo_.host;
            }
        } else if (this.state_ === 1 /* RealtimeState.CONNECTED */ ) this.log_("Realtime connection lost.");
        this.close();
    }
    onConnectionShutdown_(reason) {
        this.log_("Connection shutdown command received. Shutting down...");
        if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
        }
        // We intentionally don't want to fire onDisconnect (kill is a different case),
        // so clear the callback.
        this.onDisconnect_ = null;
        this.close();
    }
    sendData_(data) {
        if (this.state_ !== 1 /* RealtimeState.CONNECTED */ ) throw "Connection is not connected";
        else this.tx_.send(data);
    }
    /**
     * Cleans up this connection, calling the appropriate callbacks
     */ close() {
        if (this.state_ !== 2 /* RealtimeState.DISCONNECTED */ ) {
            this.log_("Closing realtime connection.");
            this.state_ = 2 /* RealtimeState.DISCONNECTED */ ;
            this.closeConnections_();
            if (this.onDisconnect_) {
                this.onDisconnect_();
                this.onDisconnect_ = null;
            }
        }
    }
    closeConnections_() {
        this.log_("Shutting down all connections");
        if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
        }
        if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
        }
        if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */ class $4ffb76f3de34d3d1$var$ServerActions {
    put(pathString, data, onComplete, hash) {}
    merge(pathString, data, onComplete, hash) {}
    /**
     * Refreshes the auth token for the current connection.
     * @param token - The authentication token
     */ refreshAuthToken(token) {}
    /**
     * Refreshes the app check token for the current connection.
     * @param token The app check token
     */ refreshAppCheckToken(token) {}
    onDisconnectPut(pathString, data, onComplete) {}
    onDisconnectMerge(pathString, data, onComplete) {}
    onDisconnectCancel(pathString, onComplete) {}
    reportStats(stats) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */ class $4ffb76f3de34d3d1$var$EventEmitter {
    constructor(allowedEvents_){
        this.allowedEvents_ = allowedEvents_;
        this.listeners_ = {};
        (0, $25f55f8610499322$export$a7a9523472993e97)(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, "Requires a non-empty array");
    }
    /**
     * To be called by derived classes to trigger events.
     */ trigger(eventType, ...varArgs) {
        if (Array.isArray(this.listeners_[eventType])) {
            // Clone the list, since callbacks could add/remove listeners.
            const listeners = [
                ...this.listeners_[eventType]
            ];
            for(let i = 0; i < listeners.length; i++)listeners[i].callback.apply(listeners[i].context, varArgs);
        }
    }
    on(eventType, callback, context) {
        this.validateEventType_(eventType);
        this.listeners_[eventType] = this.listeners_[eventType] || [];
        this.listeners_[eventType].push({
            callback: callback,
            context: context
        });
        const eventData = this.getInitialEvent(eventType);
        if (eventData) callback.apply(context, eventData);
    }
    off(eventType, callback, context) {
        this.validateEventType_(eventType);
        const listeners = this.listeners_[eventType] || [];
        for(let i = 0; i < listeners.length; i++)if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
            listeners.splice(i, 1);
            return;
        }
    }
    validateEventType_(eventType) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.allowedEvents_.find((et)=>{
            return et === eventType;
        }), "Unknown event: " + eventType);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */ class $4ffb76f3de34d3d1$var$OnlineMonitor extends $4ffb76f3de34d3d1$var$EventEmitter {
    constructor(){
        super([
            "online"
        ]);
        this.online_ = true;
        // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
        // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
        // It would seem that the 'online' event does not always fire consistently. So we disable it
        // for Cordova.
        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined" && !(0, $25f55f8610499322$export$872f8323f01d7ae0)()) {
            window.addEventListener("online", ()=>{
                if (!this.online_) {
                    this.online_ = true;
                    this.trigger("online", true);
                }
            }, false);
            window.addEventListener("offline", ()=>{
                if (this.online_) {
                    this.online_ = false;
                    this.trigger("online", false);
                }
            }, false);
        }
    }
    static getInstance() {
        return new $4ffb76f3de34d3d1$var$OnlineMonitor();
    }
    getInitialEvent(eventType) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(eventType === "online", "Unknown event type: " + eventType);
        return [
            this.online_
        ];
    }
    currentlyOnline() {
        return this.online_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Maximum key depth. */ const $4ffb76f3de34d3d1$var$MAX_PATH_DEPTH = 32;
/** Maximum number of (UTF8) bytes in a Firebase path. */ const $4ffb76f3de34d3d1$var$MAX_PATH_LENGTH_BYTES = 768;
/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */ class $4ffb76f3de34d3d1$var$Path {
    /**
     * @param pathOrString - Path string to parse, or another path, or the raw
     * tokens array
     */ constructor(pathOrString, pieceNum){
        if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split("/");
            // Remove empty pieces.
            let copyTo = 0;
            for(let i = 0; i < this.pieces_.length; i++)if (this.pieces_[i].length > 0) {
                this.pieces_[copyTo] = this.pieces_[i];
                copyTo++;
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
        } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
        }
    }
    toString() {
        let pathString = "";
        for(let i = this.pieceNum_; i < this.pieces_.length; i++)if (this.pieces_[i] !== "") pathString += "/" + this.pieces_[i];
        return pathString || "/";
    }
}
function $4ffb76f3de34d3d1$var$newEmptyPath() {
    return new $4ffb76f3de34d3d1$var$Path("");
}
function $4ffb76f3de34d3d1$var$pathGetFront(path) {
    if (path.pieceNum_ >= path.pieces_.length) return null;
    return path.pieces_[path.pieceNum_];
}
/**
 * @returns The number of segments in this path
 */ function $4ffb76f3de34d3d1$var$pathGetLength(path) {
    return path.pieces_.length - path.pieceNum_;
}
function $4ffb76f3de34d3d1$var$pathPopFront(path) {
    let pieceNum = path.pieceNum_;
    if (pieceNum < path.pieces_.length) pieceNum++;
    return new $4ffb76f3de34d3d1$var$Path(path.pieces_, pieceNum);
}
function $4ffb76f3de34d3d1$var$pathGetBack(path) {
    if (path.pieceNum_ < path.pieces_.length) return path.pieces_[path.pieces_.length - 1];
    return null;
}
function $4ffb76f3de34d3d1$var$pathToUrlEncodedString(path) {
    let pathString = "";
    for(let i = path.pieceNum_; i < path.pieces_.length; i++)if (path.pieces_[i] !== "") pathString += "/" + encodeURIComponent(String(path.pieces_[i]));
    return pathString || "/";
}
/**
 * Shallow copy of the parts of the path.
 *
 */ function $4ffb76f3de34d3d1$var$pathSlice(path, begin = 0) {
    return path.pieces_.slice(path.pieceNum_ + begin);
}
function $4ffb76f3de34d3d1$var$pathParent(path) {
    if (path.pieceNum_ >= path.pieces_.length) return null;
    const pieces = [];
    for(let i = path.pieceNum_; i < path.pieces_.length - 1; i++)pieces.push(path.pieces_[i]);
    return new $4ffb76f3de34d3d1$var$Path(pieces, 0);
}
function $4ffb76f3de34d3d1$var$pathChild(path, childPathObj) {
    const pieces = [];
    for(let i = path.pieceNum_; i < path.pieces_.length; i++)pieces.push(path.pieces_[i]);
    if (childPathObj instanceof $4ffb76f3de34d3d1$var$Path) for(let i1 = childPathObj.pieceNum_; i1 < childPathObj.pieces_.length; i1++)pieces.push(childPathObj.pieces_[i1]);
    else {
        const childPieces = childPathObj.split("/");
        for(let i2 = 0; i2 < childPieces.length; i2++)if (childPieces[i2].length > 0) pieces.push(childPieces[i2]);
    }
    return new $4ffb76f3de34d3d1$var$Path(pieces, 0);
}
/**
 * @returns True if there are no segments in this path
 */ function $4ffb76f3de34d3d1$var$pathIsEmpty(path) {
    return path.pieceNum_ >= path.pieces_.length;
}
/**
 * @returns The path from outerPath to innerPath
 */ function $4ffb76f3de34d3d1$var$newRelativePath(outerPath, innerPath) {
    const outer = $4ffb76f3de34d3d1$var$pathGetFront(outerPath), inner = $4ffb76f3de34d3d1$var$pathGetFront(innerPath);
    if (outer === null) return innerPath;
    else if (outer === inner) return $4ffb76f3de34d3d1$var$newRelativePath($4ffb76f3de34d3d1$var$pathPopFront(outerPath), $4ffb76f3de34d3d1$var$pathPopFront(innerPath));
    else throw new Error("INTERNAL ERROR: innerPath (" + innerPath + ") is not within " + "outerPath (" + outerPath + ")");
}
/**
 * @returns -1, 0, 1 if left is less, equal, or greater than the right.
 */ function $4ffb76f3de34d3d1$var$pathCompare(left, right) {
    const leftKeys = $4ffb76f3de34d3d1$var$pathSlice(left, 0);
    const rightKeys = $4ffb76f3de34d3d1$var$pathSlice(right, 0);
    for(let i = 0; i < leftKeys.length && i < rightKeys.length; i++){
        const cmp = $4ffb76f3de34d3d1$var$nameCompare(leftKeys[i], rightKeys[i]);
        if (cmp !== 0) return cmp;
    }
    if (leftKeys.length === rightKeys.length) return 0;
    return leftKeys.length < rightKeys.length ? -1 : 1;
}
/**
 * @returns true if paths are the same.
 */ function $4ffb76f3de34d3d1$var$pathEquals(path, other) {
    if ($4ffb76f3de34d3d1$var$pathGetLength(path) !== $4ffb76f3de34d3d1$var$pathGetLength(other)) return false;
    for(let i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++){
        if (path.pieces_[i] !== other.pieces_[j]) return false;
    }
    return true;
}
/**
 * @returns True if this path is a parent of (or the same as) other
 */ function $4ffb76f3de34d3d1$var$pathContains(path, other) {
    let i = path.pieceNum_;
    let j = other.pieceNum_;
    if ($4ffb76f3de34d3d1$var$pathGetLength(path) > $4ffb76f3de34d3d1$var$pathGetLength(other)) return false;
    while(i < path.pieces_.length){
        if (path.pieces_[i] !== other.pieces_[j]) return false;
        ++i;
        ++j;
    }
    return true;
}
/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */ class $4ffb76f3de34d3d1$var$ValidationPath {
    /**
     * @param path - Initial Path.
     * @param errorPrefix_ - Prefix for any error messages.
     */ constructor(path, errorPrefix_){
        this.errorPrefix_ = errorPrefix_;
        this.parts_ = $4ffb76f3de34d3d1$var$pathSlice(path, 0);
        /** Initialize to number of '/' chars needed in path. */ this.byteLength_ = Math.max(1, this.parts_.length);
        for(let i = 0; i < this.parts_.length; i++)this.byteLength_ += (0, $25f55f8610499322$export$9536dc0a75b20bf9)(this.parts_[i]);
        $4ffb76f3de34d3d1$var$validationPathCheckValid(this);
    }
}
function $4ffb76f3de34d3d1$var$validationPathPush(validationPath, child) {
    // Count the needed '/'
    if (validationPath.parts_.length > 0) validationPath.byteLength_ += 1;
    validationPath.parts_.push(child);
    validationPath.byteLength_ += (0, $25f55f8610499322$export$9536dc0a75b20bf9)(child);
    $4ffb76f3de34d3d1$var$validationPathCheckValid(validationPath);
}
function $4ffb76f3de34d3d1$var$validationPathPop(validationPath) {
    const last = validationPath.parts_.pop();
    validationPath.byteLength_ -= (0, $25f55f8610499322$export$9536dc0a75b20bf9)(last);
    // Un-count the previous '/'
    if (validationPath.parts_.length > 0) validationPath.byteLength_ -= 1;
}
function $4ffb76f3de34d3d1$var$validationPathCheckValid(validationPath) {
    if (validationPath.byteLength_ > $4ffb76f3de34d3d1$var$MAX_PATH_LENGTH_BYTES) throw new Error(validationPath.errorPrefix_ + "has a key path longer than " + $4ffb76f3de34d3d1$var$MAX_PATH_LENGTH_BYTES + " bytes (" + validationPath.byteLength_ + ").");
    if (validationPath.parts_.length > $4ffb76f3de34d3d1$var$MAX_PATH_DEPTH) throw new Error(validationPath.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + $4ffb76f3de34d3d1$var$MAX_PATH_DEPTH + ") or object contains a cycle " + $4ffb76f3de34d3d1$var$validationPathToErrorString(validationPath));
}
/**
 * String for use in error messages - uses '.' notation for path.
 */ function $4ffb76f3de34d3d1$var$validationPathToErrorString(validationPath) {
    if (validationPath.parts_.length === 0) return "";
    return "in property '" + validationPath.parts_.join(".") + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$VisibilityMonitor extends $4ffb76f3de34d3d1$var$EventEmitter {
    constructor(){
        super([
            "visible"
        ]);
        let hidden;
        let visibilityChange;
        if (typeof document !== "undefined" && typeof document.addEventListener !== "undefined") {
            if (typeof document["hidden"] !== "undefined") {
                // Opera 12.10 and Firefox 18 and later support
                visibilityChange = "visibilitychange";
                hidden = "hidden";
            } else if (typeof document["mozHidden"] !== "undefined") {
                visibilityChange = "mozvisibilitychange";
                hidden = "mozHidden";
            } else if (typeof document["msHidden"] !== "undefined") {
                visibilityChange = "msvisibilitychange";
                hidden = "msHidden";
            } else if (typeof document["webkitHidden"] !== "undefined") {
                visibilityChange = "webkitvisibilitychange";
                hidden = "webkitHidden";
            }
        }
        // Initially, we always assume we are visible. This ensures that in browsers
        // without page visibility support or in cases where we are never visible
        // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
        // reconnects
        this.visible_ = true;
        if (visibilityChange) document.addEventListener(visibilityChange, ()=>{
            const visible = !document[hidden];
            if (visible !== this.visible_) {
                this.visible_ = visible;
                this.trigger("visible", visible);
            }
        }, false);
    }
    static getInstance() {
        return new $4ffb76f3de34d3d1$var$VisibilityMonitor();
    }
    getInitialEvent(eventType) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(eventType === "visible", "Unknown event type: " + eventType);
        return [
            this.visible_
        ];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$RECONNECT_MIN_DELAY = 1000;
const $4ffb76f3de34d3d1$var$RECONNECT_MAX_DELAY_DEFAULT = 300000; // 5 minutes in milliseconds (Case: 1858)
const $4ffb76f3de34d3d1$var$RECONNECT_MAX_DELAY_FOR_ADMINS = 30000; // 30 seconds for admin clients (likely to be a backend server)
const $4ffb76f3de34d3d1$var$RECONNECT_DELAY_MULTIPLIER = 1.3;
const $4ffb76f3de34d3d1$var$RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.
const $4ffb76f3de34d3d1$var$SERVER_KILL_INTERRUPT_REASON = "server_kill";
// If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.
const $4ffb76f3de34d3d1$var$INVALID_TOKEN_THRESHOLD = 3;
/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */ class $4ffb76f3de34d3d1$var$PersistentConnection extends $4ffb76f3de34d3d1$var$ServerActions {
    /**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param applicationId_ - The Firebase App ID for this project
     * @param onDataUpdate_ - A callback for new data from the server
     */ constructor(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_){
        super();
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.onDataUpdate_ = onDataUpdate_;
        this.onConnectStatus_ = onConnectStatus_;
        this.onServerInfoUpdate_ = onServerInfoUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        this.authOverride_ = authOverride_;
        // Used for diagnostic logging.
        this.id = $4ffb76f3de34d3d1$var$PersistentConnection.nextPersistentConnectionId_++;
        this.log_ = $4ffb76f3de34d3d1$var$logWrapper("p:" + this.id + ":");
        this.interruptReasons_ = {};
        this.listens = new Map();
        this.outstandingPuts_ = [];
        this.outstandingGets_ = [];
        this.outstandingPutCount_ = 0;
        this.outstandingGetCount_ = 0;
        this.onDisconnectRequestQueue_ = [];
        this.connected_ = false;
        this.reconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MIN_DELAY;
        this.maxReconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MAX_DELAY_DEFAULT;
        this.securityDebugCallback_ = null;
        this.lastSessionId = null;
        this.establishConnectionTimer_ = null;
        this.visible_ = false;
        // Before we get connected, we keep a queue of pending messages to send.
        this.requestCBHash_ = {};
        this.requestNumber_ = 0;
        this.realtime_ = null;
        this.authToken_ = null;
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = false;
        this.invalidAuthTokenCount_ = 0;
        this.invalidAppCheckTokenCount_ = 0;
        this.firstConnection_ = true;
        this.lastConnectionAttemptTime_ = null;
        this.lastConnectionEstablishedTime_ = null;
        if (authOverride_ && !(0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        $4ffb76f3de34d3d1$var$VisibilityMonitor.getInstance().on("visible", this.onVisible_, this);
        if (repoInfo_.host.indexOf("fblocal") === -1) $4ffb76f3de34d3d1$var$OnlineMonitor.getInstance().on("online", this.onOnline_, this);
    }
    sendRequest(action, body, onResponse) {
        const curReqNum = ++this.requestNumber_;
        const msg = {
            r: curReqNum,
            a: action,
            b: body
        };
        this.log_((0, $25f55f8610499322$export$fac44ee5b035f737)(msg));
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.connected_, "sendRequest call when we're not connected not allowed.");
        this.realtime_.sendRequest(msg);
        if (onResponse) this.requestCBHash_[curReqNum] = onResponse;
    }
    get(query) {
        this.initConnection_();
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        const request = {
            p: query._path.toString(),
            q: query._queryObject
        };
        const outstandingGet = {
            action: "g",
            request: request,
            onComplete: (message)=>{
                const payload = message["d"];
                if (message["s"] === "ok") deferred.resolve(payload);
                else deferred.reject(payload);
            }
        };
        this.outstandingGets_.push(outstandingGet);
        this.outstandingGetCount_++;
        const index = this.outstandingGets_.length - 1;
        if (this.connected_) this.sendGet_(index);
        return deferred.promise;
    }
    listen(query, currentHashFn, tag, onComplete) {
        this.initConnection_();
        const queryId = query._queryIdentifier;
        const pathString = query._path.toString();
        this.log_("Listen called for " + pathString + " " + queryId);
        if (!this.listens.has(pathString)) this.listens.set(pathString, new Map());
        (0, $25f55f8610499322$export$a7a9523472993e97)(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "listen() called for non-default but complete query");
        (0, $25f55f8610499322$export$a7a9523472993e97)(!this.listens.get(pathString).has(queryId), `listen() called twice for same path/queryId.`);
        const listenSpec = {
            onComplete: onComplete,
            hashFn: currentHashFn,
            query: query,
            tag: tag
        };
        this.listens.get(pathString).set(queryId, listenSpec);
        if (this.connected_) this.sendListen_(listenSpec);
    }
    sendGet_(index) {
        const get = this.outstandingGets_[index];
        this.sendRequest("g", get.request, (message)=>{
            delete this.outstandingGets_[index];
            this.outstandingGetCount_--;
            if (this.outstandingGetCount_ === 0) this.outstandingGets_ = [];
            if (get.onComplete) get.onComplete(message);
        });
    }
    sendListen_(listenSpec) {
        const query = listenSpec.query;
        const pathString = query._path.toString();
        const queryId = query._queryIdentifier;
        this.log_("Listen on " + pathString + " for " + queryId);
        const req = {
            p: pathString
        };
        const action = "q";
        // Only bother to send query if it's non-default.
        if (listenSpec.tag) {
            req["q"] = query._queryObject;
            req["t"] = listenSpec.tag;
        }
        req[/*hash*/ "h"] = listenSpec.hashFn();
        this.sendRequest(action, req, (message)=>{
            const payload = message[/*data*/ "d"];
            const status = message[/*status*/ "s"];
            // print warnings in any case...
            $4ffb76f3de34d3d1$var$PersistentConnection.warnOnListenWarnings_(payload, query);
            const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
            // only trigger actions if the listen hasn't been removed and readded
            if (currentListenSpec === listenSpec) {
                this.log_("listen response", message);
                if (status !== "ok") this.removeListen_(pathString, queryId);
                if (listenSpec.onComplete) listenSpec.onComplete(status, payload);
            }
        });
    }
    static warnOnListenWarnings_(payload, query) {
        if (payload && typeof payload === "object" && (0, $25f55f8610499322$export$2344b14b097df817)(payload, "w")) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const warnings = (0, $25f55f8610499322$export$e51ae4db7b428f67)(payload, "w");
            if (Array.isArray(warnings) && ~warnings.indexOf("no_index")) {
                const indexSpec = '".indexOn": "' + query._queryParams.getIndex().toString() + '"';
                const indexPath = query._path.toString();
                $4ffb76f3de34d3d1$var$warn(`Using an unspecified index. Your data will be downloaded and ` + `filtered on the client. Consider adding ${indexSpec} at ` + `${indexPath} to your security rules for better performance.`);
            }
        }
    }
    refreshAuthToken(token) {
        this.authToken_ = token;
        this.log_("Auth token refreshed");
        if (this.authToken_) this.tryAuth();
        else //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
        //the credential so we dont become authenticated next time we connect.
        if (this.connected_) this.sendRequest("unauth", {}, ()=>{});
        this.reduceReconnectDelayIfAdminCredential_(token);
    }
    reduceReconnectDelayIfAdminCredential_(credential) {
        // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
        // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
        const isFirebaseSecret = credential && credential.length === 40;
        if (isFirebaseSecret || (0, $25f55f8610499322$export$fc970ed23da99565)(credential)) {
            this.log_("Admin auth credential detected.  Reducing max reconnect time.");
            this.maxReconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MAX_DELAY_FOR_ADMINS;
        }
    }
    refreshAppCheckToken(token) {
        this.appCheckToken_ = token;
        this.log_("App check token refreshed");
        if (this.appCheckToken_) this.tryAppCheck();
        else //If we're connected we want to let the server know to unauthenticate us.
        //If we're not connected, simply delete the credential so we dont become
        // authenticated next time we connect.
        if (this.connected_) this.sendRequest("unappeck", {}, ()=>{});
    }
    /**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */ tryAuth() {
        if (this.connected_ && this.authToken_) {
            const token = this.authToken_;
            const authMethod = (0, $25f55f8610499322$export$9565ca3d387f8aa0)(token) ? "auth" : "gauth";
            const requestData = {
                cred: token
            };
            if (this.authOverride_ === null) requestData["noauth"] = true;
            else if (typeof this.authOverride_ === "object") requestData["authvar"] = this.authOverride_;
            this.sendRequest(authMethod, requestData, (res)=>{
                const status = res[/*status*/ "s"];
                const data = res[/*data*/ "d"] || "error";
                if (this.authToken_ === token) {
                    if (status === "ok") this.invalidAuthTokenCount_ = 0;
                    else // Triggers reconnect and force refresh for auth token
                    this.onAuthRevoked_(status, data);
                }
            });
        }
    }
    /**
     * Attempts to authenticate with the given token. If the authentication
     * attempt fails, it's triggered like the token was revoked (the connection is
     * closed).
     */ tryAppCheck() {
        if (this.connected_ && this.appCheckToken_) this.sendRequest("appcheck", {
            "token": this.appCheckToken_
        }, (res)=>{
            const status = res[/*status*/ "s"];
            const data = res[/*data*/ "d"] || "error";
            if (status === "ok") this.invalidAppCheckTokenCount_ = 0;
            else this.onAppCheckRevoked_(status, data);
        });
    }
    /**
     * @inheritDoc
     */ unlisten(query, tag) {
        const pathString = query._path.toString();
        const queryId = query._queryIdentifier;
        this.log_("Unlisten called for " + pathString + " " + queryId);
        (0, $25f55f8610499322$export$a7a9523472993e97)(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
        const listen = this.removeListen_(pathString, queryId);
        if (listen && this.connected_) this.sendUnlisten_(pathString, queryId, query._queryObject, tag);
    }
    sendUnlisten_(pathString, queryId, queryObj, tag) {
        this.log_("Unlisten on " + pathString + " for " + queryId);
        const req = {
            p: pathString
        };
        const action = "n";
        // Only bother sending queryId if it's non-default.
        if (tag) {
            req["q"] = queryObj;
            req["t"] = tag;
        }
        this.sendRequest(action, req);
    }
    onDisconnectPut(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_("o", pathString, data, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString: pathString,
            action: "o",
            data: data,
            onComplete: onComplete
        });
    }
    onDisconnectMerge(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_("om", pathString, data, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString: pathString,
            action: "om",
            data: data,
            onComplete: onComplete
        });
    }
    onDisconnectCancel(pathString, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_("oc", pathString, null, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString: pathString,
            action: "oc",
            data: null,
            onComplete: onComplete
        });
    }
    sendOnDisconnect_(action, pathString, data, onComplete) {
        const request = {
            p: pathString,
            /*data*/ d: data
        };
        this.log_("onDisconnect " + action, request);
        this.sendRequest(action, request, (response)=>{
            if (onComplete) setTimeout(()=>{
                onComplete(response[/*status*/ "s"], response[/* data */ "d"]);
            }, Math.floor(0));
        });
    }
    put(pathString, data, onComplete, hash) {
        this.putInternal("p", pathString, data, onComplete, hash);
    }
    merge(pathString, data, onComplete, hash) {
        this.putInternal("m", pathString, data, onComplete, hash);
    }
    putInternal(action, pathString, data, onComplete, hash) {
        this.initConnection_();
        const request = {
            /*path*/ p: pathString,
            /*data*/ d: data
        };
        if (hash !== undefined) request[/*hash*/ "h"] = hash;
        // TODO: Only keep track of the most recent put for a given path?
        this.outstandingPuts_.push({
            action: action,
            request: request,
            onComplete: onComplete
        });
        this.outstandingPutCount_++;
        const index = this.outstandingPuts_.length - 1;
        if (this.connected_) this.sendPut_(index);
        else this.log_("Buffering put: " + pathString);
    }
    sendPut_(index) {
        const action = this.outstandingPuts_[index].action;
        const request = this.outstandingPuts_[index].request;
        const onComplete = this.outstandingPuts_[index].onComplete;
        this.outstandingPuts_[index].queued = this.connected_;
        this.sendRequest(action, request, (message)=>{
            this.log_(action + " response", message);
            delete this.outstandingPuts_[index];
            this.outstandingPutCount_--;
            // Clean up array occasionally.
            if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
            if (onComplete) onComplete(message[/*status*/ "s"], message[/* data */ "d"]);
        });
    }
    reportStats(stats) {
        // If we're not connected, we just drop the stats.
        if (this.connected_) {
            const request = {
                c: stats
            };
            this.log_("reportStats", request);
            this.sendRequest(/*stats*/ "s", request, (result)=>{
                const status = result[/*status*/ "s"];
                if (status !== "ok") {
                    const errorReason = result[/* data */ "d"];
                    this.log_("reportStats", "Error sending stats: " + errorReason);
                }
            });
        }
    }
    onDataMessage_(message) {
        if ("r" in message) {
            // this is a response
            this.log_("from server: " + (0, $25f55f8610499322$export$fac44ee5b035f737)(message));
            const reqNum = message["r"];
            const onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
                delete this.requestCBHash_[reqNum];
                onResponse(message[/*body*/ "b"]);
            }
        } else if ("error" in message) throw "A server-side error has occurred: " + message["error"];
        else if ("a" in message) // a and b are action and body, respectively
        this.onDataPush_(message["a"], message["b"]);
    }
    onDataPush_(action, body) {
        this.log_("handleServerMessage", action, body);
        if (action === "d") this.onDataUpdate_(body[/*path*/ "p"], body[/*data*/ "d"], /*isMerge*/ false, body["t"]);
        else if (action === "m") this.onDataUpdate_(body[/*path*/ "p"], body[/*data*/ "d"], /*isMerge=*/ true, body["t"]);
        else if (action === "c") this.onListenRevoked_(body[/*path*/ "p"], body[/*query*/ "q"]);
        else if (action === "ac") this.onAuthRevoked_(body[/*status code*/ "s"], body[/* explanation */ "d"]);
        else if (action === "apc") this.onAppCheckRevoked_(body[/*status code*/ "s"], body[/* explanation */ "d"]);
        else if (action === "sd") this.onSecurityDebugPacket_(body);
        else $4ffb76f3de34d3d1$var$error("Unrecognized action received from server: " + (0, $25f55f8610499322$export$fac44ee5b035f737)(action) + "\nAre you using the latest client?");
    }
    onReady_(timestamp, sessionId) {
        this.log_("connection ready");
        this.connected_ = true;
        this.lastConnectionEstablishedTime_ = new Date().getTime();
        this.handleTimestamp_(timestamp);
        this.lastSessionId = sessionId;
        if (this.firstConnection_) this.sendConnectStats_();
        this.restoreState_();
        this.firstConnection_ = false;
        this.onConnectStatus_(true);
    }
    scheduleConnect_(timeout) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
        if (this.establishConnectionTimer_) clearTimeout(this.establishConnectionTimer_);
        // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
        // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
        this.establishConnectionTimer_ = setTimeout(()=>{
            this.establishConnectionTimer_ = null;
            this.establishConnection_();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(timeout));
    }
    initConnection_() {
        if (!this.realtime_ && this.firstConnection_) this.scheduleConnect_(0);
    }
    onVisible_(visible) {
        // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
        if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_("Window became visible.  Reducing delay.");
            this.reconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        }
        this.visible_ = visible;
    }
    onOnline_(online) {
        if (online) {
            this.log_("Browser went online.");
            this.reconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        } else {
            this.log_("Browser went offline.  Killing connection.");
            if (this.realtime_) this.realtime_.close();
        }
    }
    onRealtimeDisconnect_() {
        this.log_("data client disconnected");
        this.connected_ = false;
        this.realtime_ = null;
        // Since we don't know if our sent transactions succeeded or not, we need to cancel them.
        this.cancelSentTransactions_();
        // Clear out the pending requests.
        this.requestCBHash_ = {};
        if (this.shouldReconnect_()) {
            if (!this.visible_) {
                this.log_("Window isn't visible.  Delaying reconnect.");
                this.reconnectDelay_ = this.maxReconnectDelay_;
                this.lastConnectionAttemptTime_ = new Date().getTime();
            } else if (this.lastConnectionEstablishedTime_) {
                // If we've been connected long enough, reset reconnect delay to minimum.
                const timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
                if (timeSinceLastConnectSucceeded > $4ffb76f3de34d3d1$var$RECONNECT_DELAY_RESET_TIMEOUT) this.reconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MIN_DELAY;
                this.lastConnectionEstablishedTime_ = null;
            }
            const timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_("Trying to reconnect in " + reconnectDelay + "ms");
            this.scheduleConnect_(reconnectDelay);
            // Adjust reconnect delay for next time.
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * $4ffb76f3de34d3d1$var$RECONNECT_DELAY_MULTIPLIER);
        }
        this.onConnectStatus_(false);
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt");
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            const onDataMessage = this.onDataMessage_.bind(this);
            const onReady = this.onReady_.bind(this);
            const onDisconnect = this.onRealtimeDisconnect_.bind(this);
            const connId = this.id + ":" + $4ffb76f3de34d3d1$var$PersistentConnection.nextConnectionId_++;
            const lastSessionId = this.lastSessionId;
            let canceled = false;
            let connection = null;
            const closeFn = function() {
                if (connection) connection.close();
                else {
                    canceled = true;
                    onDisconnect();
                }
            };
            const sendRequestFn = function(msg) {
                (0, $25f55f8610499322$export$a7a9523472993e97)(connection, "sendRequest call when we're not connected not allowed.");
                connection.sendRequest(msg);
            };
            this.realtime_ = {
                close: closeFn,
                sendRequest: sendRequestFn
            };
            const forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            try {
                // First fetch auth and app check token, and establish connection after
                // fetching the token was successful
                const [authToken, appCheckToken] = await Promise.all([
                    this.authTokenProvider_.getToken(forceRefresh),
                    this.appCheckTokenProvider_.getToken(forceRefresh)
                ]);
                if (!canceled) {
                    $4ffb76f3de34d3d1$var$log("getToken() completed. Creating connection.");
                    this.authToken_ = authToken && authToken.accessToken;
                    this.appCheckToken_ = appCheckToken && appCheckToken.token;
                    connection = new $4ffb76f3de34d3d1$var$Connection(connId, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, onDataMessage, onReady, onDisconnect, /* onKill= */ (reason)=>{
                        $4ffb76f3de34d3d1$var$warn(reason + " (" + this.repoInfo_.toString() + ")");
                        this.interrupt($4ffb76f3de34d3d1$var$SERVER_KILL_INTERRUPT_REASON);
                    }, lastSessionId);
                } else $4ffb76f3de34d3d1$var$log("getToken() completed but was canceled");
            } catch (error) {
                this.log_("Failed to get token: " + error);
                if (!canceled) {
                    if (this.repoInfo_.nodeAdmin) // This may be a critical error for the Admin Node.js SDK, so log a warning.
                    // But getToken() may also just have temporarily failed, so we still want to
                    // continue retrying.
                    $4ffb76f3de34d3d1$var$warn(error);
                    closeFn();
                }
            }
        }
    }
    interrupt(reason) {
        $4ffb76f3de34d3d1$var$log("Interrupting connection for reason: " + reason);
        this.interruptReasons_[reason] = true;
        if (this.realtime_) this.realtime_.close();
        else {
            if (this.establishConnectionTimer_) {
                clearTimeout(this.establishConnectionTimer_);
                this.establishConnectionTimer_ = null;
            }
            if (this.connected_) this.onRealtimeDisconnect_();
        }
    }
    resume(reason) {
        $4ffb76f3de34d3d1$var$log("Resuming connection for reason: " + reason);
        delete this.interruptReasons_[reason];
        if ((0, $25f55f8610499322$export$dd1bc94b04021eeb)(this.interruptReasons_)) {
            this.reconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        }
    }
    handleTimestamp_(timestamp) {
        const delta = timestamp - new Date().getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: delta
        });
    }
    cancelSentTransactions_() {
        for(let i = 0; i < this.outstandingPuts_.length; i++){
            const put = this.outstandingPuts_[i];
            if (put && /*hash*/ "h" in put.request && put.queued) {
                if (put.onComplete) put.onComplete("disconnect");
                delete this.outstandingPuts_[i];
                this.outstandingPutCount_--;
            }
        }
        // Clean up array occasionally.
        if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
    }
    onListenRevoked_(pathString, query) {
        // Remove the listen and manufacture a "permission_denied" error for the failed listen.
        let queryId;
        if (!query) queryId = "default";
        else queryId = query.map((q)=>$4ffb76f3de34d3d1$var$ObjectToUniqueKey(q)).join("$");
        const listen = this.removeListen_(pathString, queryId);
        if (listen && listen.onComplete) listen.onComplete("permission_denied");
    }
    removeListen_(pathString, queryId) {
        const normalizedPathString = new $4ffb76f3de34d3d1$var$Path(pathString).toString(); // normalize path.
        let listen;
        if (this.listens.has(normalizedPathString)) {
            const map = this.listens.get(normalizedPathString);
            listen = map.get(queryId);
            map.delete(queryId);
            if (map.size === 0) this.listens.delete(normalizedPathString);
        } else // all listens for this path has already been removed
        listen = undefined;
        return listen;
    }
    onAuthRevoked_(statusCode, explanation) {
        $4ffb76f3de34d3d1$var$log("Auth token revoked: " + statusCode + "/" + explanation);
        this.authToken_ = null;
        this.forceTokenRefresh_ = true;
        this.realtime_.close();
        if (statusCode === "invalid_token" || statusCode === "permission_denied") {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= $4ffb76f3de34d3d1$var$INVALID_TOKEN_THRESHOLD) {
                // Set a long reconnect delay because recovery is unlikely
                this.reconnectDelay_ = $4ffb76f3de34d3d1$var$RECONNECT_MAX_DELAY_FOR_ADMINS;
                // Notify the auth token provider that the token is invalid, which will log
                // a warning
                this.authTokenProvider_.notifyForInvalidToken();
            }
        }
    }
    onAppCheckRevoked_(statusCode, explanation) {
        $4ffb76f3de34d3d1$var$log("App check token revoked: " + statusCode + "/" + explanation);
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = true;
        // Note: We don't close the connection as the developer may not have
        // enforcement enabled. The backend closes connections with enforcements.
        if (statusCode === "invalid_token" || statusCode === "permission_denied") {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAppCheckTokenCount_++;
            if (this.invalidAppCheckTokenCount_ >= $4ffb76f3de34d3d1$var$INVALID_TOKEN_THRESHOLD) this.appCheckTokenProvider_.notifyForInvalidToken();
        }
    }
    onSecurityDebugPacket_(body) {
        if (this.securityDebugCallback_) this.securityDebugCallback_(body);
        else if ("msg" in body) console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
    }
    restoreState_() {
        //Re-authenticate ourselves if we have a credential stored.
        this.tryAuth();
        this.tryAppCheck();
        // Puts depend on having received the corresponding data update from the server before they complete, so we must
        // make sure to send listens before puts.
        for (const queries of this.listens.values())for (const listenSpec of queries.values())this.sendListen_(listenSpec);
        for(let i = 0; i < this.outstandingPuts_.length; i++)if (this.outstandingPuts_[i]) this.sendPut_(i);
        while(this.onDisconnectRequestQueue_.length){
            const request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
        }
        for(let i1 = 0; i1 < this.outstandingGets_.length; i1++)if (this.outstandingGets_[i1]) this.sendGet_(i1);
    }
    /**
     * Sends client stats for first connection
     */ sendConnectStats_() {
        const stats = {};
        let clientName = "js";
        if ((0, $25f55f8610499322$export$5d1d834fbbf8bab7)()) {
            if (this.repoInfo_.nodeAdmin) clientName = "admin_node";
            else clientName = "node";
        }
        stats["sdk." + clientName + "." + $4ffb76f3de34d3d1$var$SDK_VERSION.replace(/\./g, "-")] = 1;
        if ((0, $25f55f8610499322$export$872f8323f01d7ae0)()) stats["framework.cordova"] = 1;
        else if ((0, $25f55f8610499322$export$f7a1e23e542d38e3)()) stats["framework.reactnative"] = 1;
        this.reportStats(stats);
    }
    shouldReconnect_() {
        const online = $4ffb76f3de34d3d1$var$OnlineMonitor.getInstance().currentlyOnline();
        return (0, $25f55f8610499322$export$dd1bc94b04021eeb)(this.interruptReasons_) && online;
    }
}
$4ffb76f3de34d3d1$var$PersistentConnection.nextPersistentConnectionId_ = 0;
/**
 * Counter for number of connections created. Mainly used for tagging in the logs
 */ $4ffb76f3de34d3d1$var$PersistentConnection.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$NamedNode {
    constructor(name, node){
        this.name = name;
        this.node = node;
    }
    static Wrap(name, node) {
        return new $4ffb76f3de34d3d1$var$NamedNode(name, node);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$Index {
    /**
     * @returns A standalone comparison function for
     * this index
     */ getCompare() {
        return this.compare.bind(this);
    }
    /**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     *
     * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
     */ indexedValueChanged(oldNode, newNode) {
        const oldWrapped = new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MIN_NAME, oldNode);
        const newWrapped = new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MIN_NAME, newNode);
        return this.compare(oldWrapped, newWrapped) !== 0;
    }
    /**
     * @returns a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */ minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return $4ffb76f3de34d3d1$var$NamedNode.MIN;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$__EMPTY_NODE;
class $4ffb76f3de34d3d1$var$KeyIndex extends $4ffb76f3de34d3d1$var$Index {
    static get __EMPTY_NODE() {
        return $4ffb76f3de34d3d1$var$__EMPTY_NODE;
    }
    static set __EMPTY_NODE(val) {
        $4ffb76f3de34d3d1$var$__EMPTY_NODE = val;
    }
    compare(a, b) {
        return $4ffb76f3de34d3d1$var$nameCompare(a.name, b.name);
    }
    isDefinedOn(node) {
        // We could probably return true here (since every node has a key), but it's never called
        // so just leaving unimplemented for now.
        throw (0, $25f55f8610499322$export$a39cad550e7ab28a)("KeyIndex.isDefinedOn not expected to be called.");
    }
    indexedValueChanged(oldNode, newNode) {
        return false; // The key for a node never changes.
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return $4ffb76f3de34d3d1$var$NamedNode.MIN;
    }
    maxPost() {
        // TODO: This should really be created once and cached in a static property, but
        // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
        return new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MAX_NAME, $4ffb76f3de34d3d1$var$__EMPTY_NODE);
    }
    makePost(indexValue, name) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(typeof indexValue === "string", "KeyIndex indexValue must always be a string.");
        // We just use empty node, but it'll never be compared, since our comparator only looks at name.
        return new $4ffb76f3de34d3d1$var$NamedNode(indexValue, $4ffb76f3de34d3d1$var$__EMPTY_NODE);
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return ".key";
    }
}
const $4ffb76f3de34d3d1$var$KEY_INDEX = new $4ffb76f3de34d3d1$var$KeyIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An iterator over an LLRBNode.
 */ class $4ffb76f3de34d3d1$var$SortedMapIterator {
    /**
     * @param node - Node to iterate.
     * @param isReverse_ - Whether or not to iterate in reverse
     */ constructor(node, startKey, comparator, isReverse_, resultGenerator_ = null){
        this.isReverse_ = isReverse_;
        this.resultGenerator_ = resultGenerator_;
        this.nodeStack_ = [];
        let cmp = 1;
        while(!node.isEmpty()){
            node;
            cmp = startKey ? comparator(node.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse_) cmp *= -1;
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse_) node = node.left;
                else node = node.right;
            } else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
                this.nodeStack_.push(node);
                break;
            } else {
                // This node is greater than our start key, add it to the stack and move to the next one
                this.nodeStack_.push(node);
                if (this.isReverse_) node = node.right;
                else node = node.left;
            }
        }
    }
    getNext() {
        if (this.nodeStack_.length === 0) return null;
        let node = this.nodeStack_.pop();
        let result;
        if (this.resultGenerator_) result = this.resultGenerator_(node.key, node.value);
        else result = {
            key: node.key,
            value: node.value
        };
        if (this.isReverse_) {
            node = node.left;
            while(!node.isEmpty()){
                this.nodeStack_.push(node);
                node = node.right;
            }
        } else {
            node = node.right;
            while(!node.isEmpty()){
                this.nodeStack_.push(node);
                node = node.left;
            }
        }
        return result;
    }
    hasNext() {
        return this.nodeStack_.length > 0;
    }
    peek() {
        if (this.nodeStack_.length === 0) return null;
        const node = this.nodeStack_[this.nodeStack_.length - 1];
        if (this.resultGenerator_) return this.resultGenerator_(node.key, node.value);
        else return {
            key: node.key,
            value: node.value
        };
    }
}
/**
 * Represents a node in a Left-leaning Red-Black tree.
 */ class $4ffb76f3de34d3d1$var$LLRBNode {
    /**
     * @param key - Key associated with this node.
     * @param value - Value associated with this node.
     * @param color - Whether this node is red.
     * @param left - Left child.
     * @param right - Right child.
     */ constructor(key, value, color, left, right){
        this.key = key;
        this.value = value;
        this.color = color != null ? color : $4ffb76f3de34d3d1$var$LLRBNode.RED;
        this.left = left != null ? left : $4ffb76f3de34d3d1$var$SortedMap.EMPTY_NODE;
        this.right = right != null ? right : $4ffb76f3de34d3d1$var$SortedMap.EMPTY_NODE;
    }
    /**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param key - New key for the node, or null.
     * @param value - New value for the node, or null.
     * @param color - New color for the node, or null.
     * @param left - New left child for the node, or null.
     * @param right - New right child for the node, or null.
     * @returns The node copy.
     */ copy(key, value, color, left, right) {
        return new $4ffb76f3de34d3d1$var$LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    }
    /**
     * @returns The total number of nodes in the tree.
     */ count() {
        return this.left.count() + 1 + this.right.count();
    }
    /**
     * @returns True if the tree is empty.
     */ isEmpty() {
        return false;
    }
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */ inorderTraversal(action) {
        return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
    }
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ reverseTraversal(action) {
        return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
    }
    /**
     * @returns The minimum node in the tree.
     */ min_() {
        if (this.left.isEmpty()) return this;
        else return this.left.min_();
    }
    /**
     * @returns The maximum key in the tree.
     */ minKey() {
        return this.min_().key;
    }
    /**
     * @returns The maximum key in the tree.
     */ maxKey() {
        if (this.right.isEmpty()) return this.key;
        else return this.right.maxKey();
    }
    /**
     * @param key - Key to insert.
     * @param value - Value to insert.
     * @param comparator - Comparator.
     * @returns New tree, with the key/value added.
     */ insert(key, value, comparator) {
        let n = this;
        const cmp = comparator(key, n.key);
        if (cmp < 0) n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        else if (cmp === 0) n = n.copy(null, value, null, null, null);
        else n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        return n.fixUp_();
    }
    /**
     * @returns New tree, with the minimum key removed.
     */ removeMin_() {
        if (this.left.isEmpty()) return $4ffb76f3de34d3d1$var$SortedMap.EMPTY_NODE;
        let n = this;
        if (!n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
        n = n.copy(null, null, null, n.left.removeMin_(), null);
        return n.fixUp_();
    }
    /**
     * @param key - The key of the item to remove.
     * @param comparator - Comparator.
     * @returns New tree, with the specified item removed.
     */ remove(key, comparator) {
        let n, smallest;
        n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        } else {
            if (n.left.isRed_()) n = n.rotateRight_();
            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) n = n.moveRedRight_();
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) return $4ffb76f3de34d3d1$var$SortedMap.EMPTY_NODE;
                else {
                    smallest = n.right.min_();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp_();
    }
    /**
     * @returns Whether this is a RED node.
     */ isRed_() {
        return this.color;
    }
    /**
     * @returns New tree after performing any needed rotations.
     */ fixUp_() {
        let n = this;
        if (n.right.isRed_() && !n.left.isRed_()) n = n.rotateLeft_();
        if (n.left.isRed_() && n.left.left.isRed_()) n = n.rotateRight_();
        if (n.left.isRed_() && n.right.isRed_()) n = n.colorFlip_();
        return n;
    }
    /**
     * @returns New tree, after moveRedLeft.
     */ moveRedLeft_() {
        let n = this.colorFlip_();
        if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
        }
        return n;
    }
    /**
     * @returns New tree, after moveRedRight.
     */ moveRedRight_() {
        let n = this.colorFlip_();
        if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
        }
        return n;
    }
    /**
     * @returns New tree, after rotateLeft.
     */ rotateLeft_() {
        const nl = this.copy(null, null, $4ffb76f3de34d3d1$var$LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    }
    /**
     * @returns New tree, after rotateRight.
     */ rotateRight_() {
        const nr = this.copy(null, null, $4ffb76f3de34d3d1$var$LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    }
    /**
     * @returns Newt ree, after colorFlip.
     */ colorFlip_() {
        const left = this.left.copy(null, null, !this.left.color, null, null);
        const right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
    }
    /**
     * For testing.
     *
     * @returns True if all is well.
     */ checkMaxDepth_() {
        const blackDepth = this.check_();
        return Math.pow(2.0, blackDepth) <= this.count() + 1;
    }
    check_() {
        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        const blackDepth = this.left.check_();
        if (blackDepth !== this.right.check_()) throw new Error("Black depths differ");
        else return blackDepth + (this.isRed_() ? 0 : 1);
    }
}
$4ffb76f3de34d3d1$var$LLRBNode.RED = true;
$4ffb76f3de34d3d1$var$LLRBNode.BLACK = false;
/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */ class $4ffb76f3de34d3d1$var$LLRBEmptyNode {
    /**
     * Returns a copy of the current node.
     *
     * @returns The node copy.
     */ copy(key, value, color, left, right) {
        return this;
    }
    /**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @param comparator - Comparator.
     * @returns New tree, with item added.
     */ insert(key, value, comparator) {
        return new $4ffb76f3de34d3d1$var$LLRBNode(key, value, null);
    }
    /**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param key - The key to remove.
     * @param comparator - Comparator.
     * @returns New tree, with item removed.
     */ remove(key, comparator) {
        return this;
    }
    /**
     * @returns The total number of nodes in the tree.
     */ count() {
        return 0;
    }
    /**
     * @returns True if the tree is empty.
     */ isEmpty() {
        return true;
    }
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ inorderTraversal(action) {
        return false;
    }
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ reverseTraversal(action) {
        return false;
    }
    minKey() {
        return null;
    }
    maxKey() {
        return null;
    }
    check_() {
        return 0;
    }
    /**
     * @returns Whether this node is red.
     */ isRed_() {
        return false;
    }
}
/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */ class $4ffb76f3de34d3d1$var$SortedMap {
    /**
     * @param comparator_ - Key comparator.
     * @param root_ - Optional root node for the map.
     */ constructor(comparator_, root_ = $4ffb76f3de34d3d1$var$SortedMap.EMPTY_NODE){
        this.comparator_ = comparator_;
        this.root_ = root_;
    }
    /**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @returns New map, with item added.
     */ insert(key, value) {
        return new $4ffb76f3de34d3d1$var$SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, $4ffb76f3de34d3d1$var$LLRBNode.BLACK, null, null));
    }
    /**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param key - The key to remove.
     * @returns New map, with item removed.
     */ remove(key) {
        return new $4ffb76f3de34d3d1$var$SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, $4ffb76f3de34d3d1$var$LLRBNode.BLACK, null, null));
    }
    /**
     * Returns the value of the node with the given key, or null.
     *
     * @param key - The key to look up.
     * @returns The value of the node with the given key, or null if the
     * key doesn't exist.
     */ get(key) {
        let cmp;
        let node = this.root_;
        while(!node.isEmpty()){
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) return node.value;
            else if (cmp < 0) node = node.left;
            else if (cmp > 0) node = node.right;
        }
        return null;
    }
    /**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param key - The key to find the predecessor of
     * @returns The predecessor key.
     */ getPredecessorKey(key) {
        let cmp, node = this.root_, rightParent = null;
        while(!node.isEmpty()){
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
                if (!node.left.isEmpty()) {
                    node = node.left;
                    while(!node.right.isEmpty())node = node.right;
                    return node.key;
                } else if (rightParent) return rightParent.key;
                else return null; // first item.
            } else if (cmp < 0) node = node.left;
            else if (cmp > 0) {
                rightParent = node;
                node = node.right;
            }
        }
        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
    }
    /**
     * @returns True if the map is empty.
     */ isEmpty() {
        return this.root_.isEmpty();
    }
    /**
     * @returns The total number of nodes in the map.
     */ count() {
        return this.root_.count();
    }
    /**
     * @returns The minimum key in the map.
     */ minKey() {
        return this.root_.minKey();
    }
    /**
     * @returns The maximum key in the map.
     */ maxKey() {
        return this.root_.maxKey();
    }
    /**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */ inorderTraversal(action) {
        return this.root_.inorderTraversal(action);
    }
    /**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns True if the traversal was aborted.
     */ reverseTraversal(action) {
        return this.root_.reverseTraversal(action);
    }
    /**
     * Returns an iterator over the SortedMap.
     * @returns The iterator.
     */ getIterator(resultGenerator) {
        return new $4ffb76f3de34d3d1$var$SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
    }
    getIteratorFrom(key, resultGenerator) {
        return new $4ffb76f3de34d3d1$var$SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
    }
    getReverseIteratorFrom(key, resultGenerator) {
        return new $4ffb76f3de34d3d1$var$SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
    }
    getReverseIterator(resultGenerator) {
        return new $4ffb76f3de34d3d1$var$SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
    }
}
/**
 * Always use the same empty node, to reduce memory.
 */ $4ffb76f3de34d3d1$var$SortedMap.EMPTY_NODE = new $4ffb76f3de34d3d1$var$LLRBEmptyNode();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$NAME_ONLY_COMPARATOR(left, right) {
    return $4ffb76f3de34d3d1$var$nameCompare(left.name, right.name);
}
function $4ffb76f3de34d3d1$var$NAME_COMPARATOR(left, right) {
    return $4ffb76f3de34d3d1$var$nameCompare(left, right);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$MAX_NODE$2;
function $4ffb76f3de34d3d1$var$setMaxNode$1(val) {
    $4ffb76f3de34d3d1$var$MAX_NODE$2 = val;
}
const $4ffb76f3de34d3d1$var$priorityHashText = function(priority) {
    if (typeof priority === "number") return "number:" + $4ffb76f3de34d3d1$var$doubleToIEEE754String(priority);
    else return "string:" + priority;
};
/**
 * Validates that a priority snapshot Node is valid.
 */ const $4ffb76f3de34d3d1$var$validatePriorityNode = function(priorityNode) {
    if (priorityNode.isLeafNode()) {
        const val = priorityNode.val();
        (0, $25f55f8610499322$export$a7a9523472993e97)(typeof val === "string" || typeof val === "number" || typeof val === "object" && (0, $25f55f8610499322$export$2344b14b097df817)(val, ".sv"), "Priority must be a string or number.");
    } else (0, $25f55f8610499322$export$a7a9523472993e97)(priorityNode === $4ffb76f3de34d3d1$var$MAX_NODE$2 || priorityNode.isEmpty(), "priority of unexpected type.");
    // Don't call getPriority() on MAX_NODE to avoid hitting assertion.
    (0, $25f55f8610499322$export$a7a9523472993e97)(priorityNode === $4ffb76f3de34d3d1$var$MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$__childrenNodeConstructor;
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */ class $4ffb76f3de34d3d1$var$LeafNode {
    /**
     * @param value_ - The value to store in this leaf node. The object type is
     * possible in the event of a deferred value
     * @param priorityNode_ - The priority of this node.
     */ constructor(value_, priorityNode_ = $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor.EMPTY_NODE){
        this.value_ = value_;
        this.priorityNode_ = priorityNode_;
        this.lazyHash_ = null;
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
        $4ffb76f3de34d3d1$var$validatePriorityNode(this.priorityNode_);
    }
    static set __childrenNodeConstructor(val) {
        $4ffb76f3de34d3d1$var$__childrenNodeConstructor = val;
    }
    static get __childrenNodeConstructor() {
        return $4ffb76f3de34d3d1$var$__childrenNodeConstructor;
    }
    /** @inheritDoc */ isLeafNode() {
        return true;
    }
    /** @inheritDoc */ getPriority() {
        return this.priorityNode_;
    }
    /** @inheritDoc */ updatePriority(newPriorityNode) {
        return new $4ffb76f3de34d3d1$var$LeafNode(this.value_, newPriorityNode);
    }
    /** @inheritDoc */ getImmediateChild(childName) {
        // Hack to treat priority as a regular child
        if (childName === ".priority") return this.priorityNode_;
        else return $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
    /** @inheritDoc */ getChild(path) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) return this;
        else if ($4ffb76f3de34d3d1$var$pathGetFront(path) === ".priority") return this.priorityNode_;
        else return $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
    hasChild() {
        return false;
    }
    /** @inheritDoc */ getPredecessorChildName(childName, childNode) {
        return null;
    }
    /** @inheritDoc */ updateImmediateChild(childName, newChildNode) {
        if (childName === ".priority") return this.updatePriority(newChildNode);
        else if (newChildNode.isEmpty() && childName !== ".priority") return this;
        else return $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
    }
    /** @inheritDoc */ updateChild(path, newChildNode) {
        const front = $4ffb76f3de34d3d1$var$pathGetFront(path);
        if (front === null) return newChildNode;
        else if (newChildNode.isEmpty() && front !== ".priority") return this;
        else {
            (0, $25f55f8610499322$export$a7a9523472993e97)(front !== ".priority" || $4ffb76f3de34d3d1$var$pathGetLength(path) === 1, ".priority must be the last token in a path");
            return this.updateImmediateChild(front, $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild($4ffb76f3de34d3d1$var$pathPopFront(path), newChildNode));
        }
    }
    /** @inheritDoc */ isEmpty() {
        return false;
    }
    /** @inheritDoc */ numChildren() {
        return 0;
    }
    /** @inheritDoc */ forEachChild(index, action) {
        return false;
    }
    val(exportFormat) {
        if (exportFormat && !this.getPriority().isEmpty()) return {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
        };
        else return this.getValue();
    }
    /** @inheritDoc */ hash() {
        if (this.lazyHash_ === null) {
            let toHash = "";
            if (!this.priorityNode_.isEmpty()) toHash += "priority:" + $4ffb76f3de34d3d1$var$priorityHashText(this.priorityNode_.val()) + ":";
            const type = typeof this.value_;
            toHash += type + ":";
            if (type === "number") toHash += $4ffb76f3de34d3d1$var$doubleToIEEE754String(this.value_);
            else toHash += this.value_;
            this.lazyHash_ = $4ffb76f3de34d3d1$var$sha1(toHash);
        }
        return this.lazyHash_;
    }
    /**
     * Returns the value of the leaf node.
     * @returns The value of the node.
     */ getValue() {
        return this.value_;
    }
    compareTo(other) {
        if (other === $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor.EMPTY_NODE) return 1;
        else if (other instanceof $4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor) return -1;
        else {
            (0, $25f55f8610499322$export$a7a9523472993e97)(other.isLeafNode(), "Unknown node type");
            return this.compareToLeafNode_(other);
        }
    }
    /**
     * Comparison specifically for two leaf nodes
     */ compareToLeafNode_(otherLeaf) {
        const otherLeafType = typeof otherLeaf.value_;
        const thisLeafType = typeof this.value_;
        const otherIndex = $4ffb76f3de34d3d1$var$LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
        const thisIndex = $4ffb76f3de34d3d1$var$LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
        (0, $25f55f8610499322$export$a7a9523472993e97)(otherIndex >= 0, "Unknown leaf type: " + otherLeafType);
        (0, $25f55f8610499322$export$a7a9523472993e97)(thisIndex >= 0, "Unknown leaf type: " + thisLeafType);
        if (otherIndex === thisIndex) {
            // Same type, compare values
            if (thisLeafType === "object") // Deferred value nodes are all equal, but we should also never get to this point...
            return 0;
            else {
                // Note that this works because true > false, all others are number or string comparisons
                if (this.value_ < otherLeaf.value_) return -1;
                else if (this.value_ === otherLeaf.value_) return 0;
                else return 1;
            }
        } else return thisIndex - otherIndex;
    }
    withIndex() {
        return this;
    }
    isIndexed() {
        return true;
    }
    equals(other) {
        if (other === this) return true;
        else if (other.isLeafNode()) {
            const otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
        } else return false;
    }
}
/**
 * The sort order for comparing leaf nodes of different types. If two leaf nodes have
 * the same type, the comparison falls back to their value
 */ $4ffb76f3de34d3d1$var$LeafNode.VALUE_TYPE_ORDER = [
    "object",
    "boolean",
    "number",
    "string"
];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$nodeFromJSON$1;
let $4ffb76f3de34d3d1$var$MAX_NODE$1;
function $4ffb76f3de34d3d1$var$setNodeFromJSON(val) {
    $4ffb76f3de34d3d1$var$nodeFromJSON$1 = val;
}
function $4ffb76f3de34d3d1$var$setMaxNode(val) {
    $4ffb76f3de34d3d1$var$MAX_NODE$1 = val;
}
class $4ffb76f3de34d3d1$var$PriorityIndex extends $4ffb76f3de34d3d1$var$Index {
    compare(a, b) {
        const aPriority = a.node.getPriority();
        const bPriority = b.node.getPriority();
        const indexCmp = aPriority.compareTo(bPriority);
        if (indexCmp === 0) return $4ffb76f3de34d3d1$var$nameCompare(a.name, b.name);
        else return indexCmp;
    }
    isDefinedOn(node) {
        return !node.getPriority().isEmpty();
    }
    indexedValueChanged(oldNode, newNode) {
        return !oldNode.getPriority().equals(newNode.getPriority());
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return $4ffb76f3de34d3d1$var$NamedNode.MIN;
    }
    maxPost() {
        return new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MAX_NAME, new $4ffb76f3de34d3d1$var$LeafNode("[PRIORITY-POST]", $4ffb76f3de34d3d1$var$MAX_NODE$1));
    }
    makePost(indexValue, name) {
        const priorityNode = $4ffb76f3de34d3d1$var$nodeFromJSON$1(indexValue);
        return new $4ffb76f3de34d3d1$var$NamedNode(name, new $4ffb76f3de34d3d1$var$LeafNode("[PRIORITY-POST]", priorityNode));
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return ".priority";
    }
}
const $4ffb76f3de34d3d1$var$PRIORITY_INDEX = new $4ffb76f3de34d3d1$var$PriorityIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$LOG_2 = Math.log(2);
class $4ffb76f3de34d3d1$var$Base12Num {
    constructor(length){
        const logBase2 = (num)=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
            parseInt(Math.log(num) / $4ffb76f3de34d3d1$var$LOG_2, 10);
        const bitMask = (bits)=>parseInt(Array(bits + 1).join("1"), 2);
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        const mask = bitMask(this.count);
        this.bits_ = length + 1 & mask;
    }
    nextBitIsOne() {
        //noinspection JSBitwiseOperatorUsage
        const result = !(this.bits_ & 0x1 << this.current_);
        this.current_--;
        return result;
    }
}
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList - Unsorted list of children
 * @param cmp - The comparison method to be used
 * @param keyFn - An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn - An optional override for comparator used by the generated sorted map
 */ const $4ffb76f3de34d3d1$var$buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
    childList.sort(cmp);
    const buildBalancedTree = function(low, high) {
        const length = high - low;
        let namedNode;
        let key;
        if (length === 0) return null;
        else if (length === 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new $4ffb76f3de34d3d1$var$LLRBNode(key, namedNode.node, $4ffb76f3de34d3d1$var$LLRBNode.BLACK, null, null);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const middle = parseInt(length / 2, 10) + low;
            const left = buildBalancedTree(low, middle);
            const right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new $4ffb76f3de34d3d1$var$LLRBNode(key, namedNode.node, $4ffb76f3de34d3d1$var$LLRBNode.BLACK, left, right);
        }
    };
    const buildFrom12Array = function(base12) {
        let node = null;
        let root = null;
        let index = childList.length;
        const buildPennant = function(chunkSize, color) {
            const low = index - chunkSize;
            const high = index;
            index -= chunkSize;
            const childTree = buildBalancedTree(low + 1, high);
            const namedNode = childList[low];
            const key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new $4ffb76f3de34d3d1$var$LLRBNode(key, namedNode.node, color, null, childTree));
        };
        const attachPennant = function(pennant) {
            if (node) {
                node.left = pennant;
                node = pennant;
            } else {
                root = pennant;
                node = pennant;
            }
        };
        for(let i = 0; i < base12.count; ++i){
            const isOne = base12.nextBitIsOne();
            // The number of nodes taken in each slice is 2^(arr.length - (i + 1))
            const chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) buildPennant(chunkSize, $4ffb76f3de34d3d1$var$LLRBNode.BLACK);
            else {
                // current == 2
                buildPennant(chunkSize, $4ffb76f3de34d3d1$var$LLRBNode.BLACK);
                buildPennant(chunkSize, $4ffb76f3de34d3d1$var$LLRBNode.RED);
            }
        }
        return root;
    };
    const base12 = new $4ffb76f3de34d3d1$var$Base12Num(childList.length);
    const root = buildFrom12Array(base12);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new $4ffb76f3de34d3d1$var$SortedMap(mapSortFn || cmp, root);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$_defaultIndexMap;
const $4ffb76f3de34d3d1$var$fallbackObject = {};
class $4ffb76f3de34d3d1$var$IndexMap {
    constructor(indexes_, indexSet_){
        this.indexes_ = indexes_;
        this.indexSet_ = indexSet_;
    }
    /**
     * The default IndexMap for nodes without a priority
     */ static get Default() {
        (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$fallbackObject && $4ffb76f3de34d3d1$var$PRIORITY_INDEX, "ChildrenNode.ts has not been loaded");
        $4ffb76f3de34d3d1$var$_defaultIndexMap = $4ffb76f3de34d3d1$var$_defaultIndexMap || new $4ffb76f3de34d3d1$var$IndexMap({
            ".priority": $4ffb76f3de34d3d1$var$fallbackObject
        }, {
            ".priority": $4ffb76f3de34d3d1$var$PRIORITY_INDEX
        });
        return $4ffb76f3de34d3d1$var$_defaultIndexMap;
    }
    get(indexKey) {
        const sortedMap = (0, $25f55f8610499322$export$e51ae4db7b428f67)(this.indexes_, indexKey);
        if (!sortedMap) throw new Error("No index defined for " + indexKey);
        if (sortedMap instanceof $4ffb76f3de34d3d1$var$SortedMap) return sortedMap;
        else // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
        // regular child map
        return null;
    }
    hasIndex(indexDefinition) {
        return (0, $25f55f8610499322$export$2344b14b097df817)(this.indexSet_, indexDefinition.toString());
    }
    addIndex(indexDefinition, existingChildren) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(indexDefinition !== $4ffb76f3de34d3d1$var$KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const childList = [];
        let sawIndexedValue = false;
        const iter = existingChildren.getIterator($4ffb76f3de34d3d1$var$NamedNode.Wrap);
        let next = iter.getNext();
        while(next){
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
        }
        let newIndex;
        if (sawIndexedValue) newIndex = $4ffb76f3de34d3d1$var$buildChildSet(childList, indexDefinition.getCompare());
        else newIndex = $4ffb76f3de34d3d1$var$fallbackObject;
        const indexName = indexDefinition.toString();
        const newIndexSet = Object.assign({}, this.indexSet_);
        newIndexSet[indexName] = indexDefinition;
        const newIndexes = Object.assign({}, this.indexes_);
        newIndexes[indexName] = newIndex;
        return new $4ffb76f3de34d3d1$var$IndexMap(newIndexes, newIndexSet);
    }
    /**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */ addToIndexes(namedNode, existingChildren) {
        const newIndexes = (0, $25f55f8610499322$export$871de8747c9eaa88)(this.indexes_, (indexedChildren, indexName)=>{
            const index = (0, $25f55f8610499322$export$e51ae4db7b428f67)(this.indexSet_, indexName);
            (0, $25f55f8610499322$export$a7a9523472993e97)(index, "Missing index implementation for " + indexName);
            if (indexedChildren === $4ffb76f3de34d3d1$var$fallbackObject) {
                // Check to see if we need to index everything
                if (index.isDefinedOn(namedNode.node)) {
                    // We need to build this index
                    const childList = [];
                    const iter = existingChildren.getIterator($4ffb76f3de34d3d1$var$NamedNode.Wrap);
                    let next = iter.getNext();
                    while(next){
                        if (next.name !== namedNode.name) childList.push(next);
                        next = iter.getNext();
                    }
                    childList.push(namedNode);
                    return $4ffb76f3de34d3d1$var$buildChildSet(childList, index.getCompare());
                } else // No change, this remains a fallback
                return $4ffb76f3de34d3d1$var$fallbackObject;
            } else {
                const existingSnap = existingChildren.get(namedNode.name);
                let newChildren = indexedChildren;
                if (existingSnap) newChildren = newChildren.remove(new $4ffb76f3de34d3d1$var$NamedNode(namedNode.name, existingSnap));
                return newChildren.insert(namedNode, namedNode.node);
            }
        });
        return new $4ffb76f3de34d3d1$var$IndexMap(newIndexes, this.indexSet_);
    }
    /**
     * Create a new IndexMap instance with the given value removed
     */ removeFromIndexes(namedNode, existingChildren) {
        const newIndexes = (0, $25f55f8610499322$export$871de8747c9eaa88)(this.indexes_, (indexedChildren)=>{
            if (indexedChildren === $4ffb76f3de34d3d1$var$fallbackObject) // This is the fallback. Just return it, nothing to do in this case
            return indexedChildren;
            else {
                const existingSnap = existingChildren.get(namedNode.name);
                if (existingSnap) return indexedChildren.remove(new $4ffb76f3de34d3d1$var$NamedNode(namedNode.name, existingSnap));
                else // No record of this child
                return indexedChildren;
            }
        });
        return new $4ffb76f3de34d3d1$var$IndexMap(newIndexes, this.indexSet_);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO: For memory savings, don't store priorityNode_ if it's empty.
let $4ffb76f3de34d3d1$var$EMPTY_NODE;
/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */ class $4ffb76f3de34d3d1$var$ChildrenNode {
    /**
     * @param children_ - List of children of this node..
     * @param priorityNode_ - The priority of this node (as a snapshot node).
     */ constructor(children_, priorityNode_, indexMap_){
        this.children_ = children_;
        this.priorityNode_ = priorityNode_;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;
        /**
         * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
         * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
         * class instead of an empty ChildrenNode.
         */ if (this.priorityNode_) $4ffb76f3de34d3d1$var$validatePriorityNode(this.priorityNode_);
        if (this.children_.isEmpty()) (0, $25f55f8610499322$export$a7a9523472993e97)(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
    }
    static get EMPTY_NODE() {
        return $4ffb76f3de34d3d1$var$EMPTY_NODE || ($4ffb76f3de34d3d1$var$EMPTY_NODE = new $4ffb76f3de34d3d1$var$ChildrenNode(new $4ffb76f3de34d3d1$var$SortedMap($4ffb76f3de34d3d1$var$NAME_COMPARATOR), null, $4ffb76f3de34d3d1$var$IndexMap.Default));
    }
    /** @inheritDoc */ isLeafNode() {
        return false;
    }
    /** @inheritDoc */ getPriority() {
        return this.priorityNode_ || $4ffb76f3de34d3d1$var$EMPTY_NODE;
    }
    /** @inheritDoc */ updatePriority(newPriorityNode) {
        if (this.children_.isEmpty()) // Don't allow priorities on empty nodes
        return this;
        else return new $4ffb76f3de34d3d1$var$ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
    }
    /** @inheritDoc */ getImmediateChild(childName) {
        // Hack to treat priority as a regular child
        if (childName === ".priority") return this.getPriority();
        else {
            const child = this.children_.get(childName);
            return child === null ? $4ffb76f3de34d3d1$var$EMPTY_NODE : child;
        }
    }
    /** @inheritDoc */ getChild(path) {
        const front = $4ffb76f3de34d3d1$var$pathGetFront(path);
        if (front === null) return this;
        return this.getImmediateChild(front).getChild($4ffb76f3de34d3d1$var$pathPopFront(path));
    }
    /** @inheritDoc */ hasChild(childName) {
        return this.children_.get(childName) !== null;
    }
    /** @inheritDoc */ updateImmediateChild(childName, newChildNode) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(newChildNode, "We should always be passing snapshot nodes");
        if (childName === ".priority") return this.updatePriority(newChildNode);
        else {
            const namedNode = new $4ffb76f3de34d3d1$var$NamedNode(childName, newChildNode);
            let newChildren, newIndexMap;
            if (newChildNode.isEmpty()) {
                newChildren = this.children_.remove(childName);
                newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
                newChildren = this.children_.insert(childName, newChildNode);
                newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            const newPriority = newChildren.isEmpty() ? $4ffb76f3de34d3d1$var$EMPTY_NODE : this.priorityNode_;
            return new $4ffb76f3de34d3d1$var$ChildrenNode(newChildren, newPriority, newIndexMap);
        }
    }
    /** @inheritDoc */ updateChild(path, newChildNode) {
        const front = $4ffb76f3de34d3d1$var$pathGetFront(path);
        if (front === null) return newChildNode;
        else {
            (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$pathGetFront(path) !== ".priority" || $4ffb76f3de34d3d1$var$pathGetLength(path) === 1, ".priority must be the last token in a path");
            const newImmediateChild = this.getImmediateChild(front).updateChild($4ffb76f3de34d3d1$var$pathPopFront(path), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
        }
    }
    /** @inheritDoc */ isEmpty() {
        return this.children_.isEmpty();
    }
    /** @inheritDoc */ numChildren() {
        return this.children_.count();
    }
    /** @inheritDoc */ val(exportFormat) {
        if (this.isEmpty()) return null;
        const obj = {};
        let numKeys = 0, maxKey = 0, allIntegerKeys = true;
        this.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, childNode)=>{
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && $4ffb76f3de34d3d1$var$ChildrenNode.INTEGER_REGEXP_.test(key)) maxKey = Math.max(maxKey, Number(key));
            else allIntegerKeys = false;
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            // convert to array.
            const array = [];
            // eslint-disable-next-line guard-for-in
            for(const key in obj)array[key] = obj[key];
            return array;
        } else {
            if (exportFormat && !this.getPriority().isEmpty()) obj[".priority"] = this.getPriority().val();
            return obj;
        }
    }
    /** @inheritDoc */ hash() {
        if (this.lazyHash_ === null) {
            let toHash = "";
            if (!this.getPriority().isEmpty()) toHash += "priority:" + $4ffb76f3de34d3d1$var$priorityHashText(this.getPriority().val()) + ":";
            this.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, childNode)=>{
                const childHash = childNode.hash();
                if (childHash !== "") toHash += ":" + key + ":" + childHash;
            });
            this.lazyHash_ = toHash === "" ? "" : $4ffb76f3de34d3d1$var$sha1(toHash);
        }
        return this.lazyHash_;
    }
    /** @inheritDoc */ getPredecessorChildName(childName, childNode, index) {
        const idx = this.resolveIndex_(index);
        if (idx) {
            const predecessor = idx.getPredecessorKey(new $4ffb76f3de34d3d1$var$NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
        } else return this.children_.getPredecessorKey(childName);
    }
    getFirstChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            const minKey = idx.minKey();
            return minKey && minKey.name;
        } else return this.children_.minKey();
    }
    getFirstChild(indexDefinition) {
        const minKey = this.getFirstChildName(indexDefinition);
        if (minKey) return new $4ffb76f3de34d3d1$var$NamedNode(minKey, this.children_.get(minKey));
        else return null;
    }
    /**
     * Given an index, return the key name of the largest value we have, according to that index
     */ getLastChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            const maxKey = idx.maxKey();
            return maxKey && maxKey.name;
        } else return this.children_.maxKey();
    }
    getLastChild(indexDefinition) {
        const maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) return new $4ffb76f3de34d3d1$var$NamedNode(maxKey, this.children_.get(maxKey));
        else return null;
    }
    forEachChild(index, action) {
        const idx = this.resolveIndex_(index);
        if (idx) return idx.inorderTraversal((wrappedNode)=>{
            return action(wrappedNode.name, wrappedNode.node);
        });
        else return this.children_.inorderTraversal(action);
    }
    getIterator(indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
    }
    getIteratorFrom(startPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) return idx.getIteratorFrom(startPost, (key)=>key);
        else {
            const iterator = this.children_.getIteratorFrom(startPost.name, $4ffb76f3de34d3d1$var$NamedNode.Wrap);
            let next = iterator.peek();
            while(next != null && indexDefinition.compare(next, startPost) < 0){
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    }
    getReverseIterator(indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
    }
    getReverseIteratorFrom(endPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) return idx.getReverseIteratorFrom(endPost, (key)=>{
            return key;
        });
        else {
            const iterator = this.children_.getReverseIteratorFrom(endPost.name, $4ffb76f3de34d3d1$var$NamedNode.Wrap);
            let next = iterator.peek();
            while(next != null && indexDefinition.compare(next, endPost) > 0){
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    }
    compareTo(other) {
        if (this.isEmpty()) {
            if (other.isEmpty()) return 0;
            else return -1;
        } else if (other.isLeafNode() || other.isEmpty()) return 1;
        else if (other === $4ffb76f3de34d3d1$var$MAX_NODE) return -1;
        else // Must be another node with children.
        return 0;
    }
    withIndex(indexDefinition) {
        if (indexDefinition === $4ffb76f3de34d3d1$var$KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) return this;
        else {
            const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new $4ffb76f3de34d3d1$var$ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
    }
    isIndexed(index) {
        return index === $4ffb76f3de34d3d1$var$KEY_INDEX || this.indexMap_.hasIndex(index);
    }
    equals(other) {
        if (other === this) return true;
        else if (other.isLeafNode()) return false;
        else {
            const otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) return false;
            else if (this.children_.count() === otherChildrenNode.children_.count()) {
                const thisIter = this.getIterator($4ffb76f3de34d3d1$var$PRIORITY_INDEX);
                const otherIter = otherChildrenNode.getIterator($4ffb76f3de34d3d1$var$PRIORITY_INDEX);
                let thisCurrent = thisIter.getNext();
                let otherCurrent = otherIter.getNext();
                while(thisCurrent && otherCurrent){
                    if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) return false;
                    thisCurrent = thisIter.getNext();
                    otherCurrent = otherIter.getNext();
                }
                return thisCurrent === null && otherCurrent === null;
            } else return false;
        }
    }
    /**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     */ resolveIndex_(indexDefinition) {
        if (indexDefinition === $4ffb76f3de34d3d1$var$KEY_INDEX) return null;
        else return this.indexMap_.get(indexDefinition.toString());
    }
}
$4ffb76f3de34d3d1$var$ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class $4ffb76f3de34d3d1$var$MaxNode extends $4ffb76f3de34d3d1$var$ChildrenNode {
    constructor(){
        super(new $4ffb76f3de34d3d1$var$SortedMap($4ffb76f3de34d3d1$var$NAME_COMPARATOR), $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE, $4ffb76f3de34d3d1$var$IndexMap.Default);
    }
    compareTo(other) {
        if (other === this) return 0;
        else return 1;
    }
    equals(other) {
        // Not that we every compare it, but MAX_NODE is only ever equal to itself
        return other === this;
    }
    getPriority() {
        return this;
    }
    getImmediateChild(childName) {
        return $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
    }
    isEmpty() {
        return false;
    }
}
/**
 * Marker that will sort higher than any other snapshot.
 */ const $4ffb76f3de34d3d1$var$MAX_NODE = new $4ffb76f3de34d3d1$var$MaxNode();
Object.defineProperties($4ffb76f3de34d3d1$var$NamedNode, {
    MIN: {
        value: new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MIN_NAME, $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE)
    },
    MAX: {
        value: new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MAX_NAME, $4ffb76f3de34d3d1$var$MAX_NODE)
    }
});
/**
 * Reference Extensions
 */ $4ffb76f3de34d3d1$var$KeyIndex.__EMPTY_NODE = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
$4ffb76f3de34d3d1$var$LeafNode.__childrenNodeConstructor = $4ffb76f3de34d3d1$var$ChildrenNode;
$4ffb76f3de34d3d1$var$setMaxNode$1($4ffb76f3de34d3d1$var$MAX_NODE);
$4ffb76f3de34d3d1$var$setMaxNode($4ffb76f3de34d3d1$var$MAX_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$USE_HINZE = true;
/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json - JSON to create a node for.
 * @param priority - Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */ function $4ffb76f3de34d3d1$var$nodeFromJSON(json, priority = null) {
    if (json === null) return $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
    if (typeof json === "object" && ".priority" in json) priority = json[".priority"];
    (0, $25f55f8610499322$export$a7a9523472993e97)(priority === null || typeof priority === "string" || typeof priority === "number" || typeof priority === "object" && ".sv" in priority, "Invalid priority type found: " + typeof priority);
    if (typeof json === "object" && ".value" in json && json[".value"] !== null) json = json[".value"];
    // Valid leaf nodes include non-objects or server-value wrapper objects
    if (typeof json !== "object" || ".sv" in json) {
        const jsonLeaf = json;
        return new $4ffb76f3de34d3d1$var$LeafNode(jsonLeaf, $4ffb76f3de34d3d1$var$nodeFromJSON(priority));
    }
    if (!(json instanceof Array) && $4ffb76f3de34d3d1$var$USE_HINZE) {
        const children = [];
        let childrenHavePriority = false;
        const hinzeJsonObj = json;
        $4ffb76f3de34d3d1$var$each(hinzeJsonObj, (key, child)=>{
            if (key.substring(0, 1) !== ".") {
                // Ignore metadata nodes
                const childNode = $4ffb76f3de34d3d1$var$nodeFromJSON(child);
                if (!childNode.isEmpty()) {
                    childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
                    children.push(new $4ffb76f3de34d3d1$var$NamedNode(key, childNode));
                }
            }
        });
        if (children.length === 0) return $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        const childSet = $4ffb76f3de34d3d1$var$buildChildSet(children, $4ffb76f3de34d3d1$var$NAME_ONLY_COMPARATOR, (namedNode)=>namedNode.name, $4ffb76f3de34d3d1$var$NAME_COMPARATOR);
        if (childrenHavePriority) {
            const sortedChildSet = $4ffb76f3de34d3d1$var$buildChildSet(children, $4ffb76f3de34d3d1$var$PRIORITY_INDEX.getCompare());
            return new $4ffb76f3de34d3d1$var$ChildrenNode(childSet, $4ffb76f3de34d3d1$var$nodeFromJSON(priority), new $4ffb76f3de34d3d1$var$IndexMap({
                ".priority": sortedChildSet
            }, {
                ".priority": $4ffb76f3de34d3d1$var$PRIORITY_INDEX
            }));
        } else return new $4ffb76f3de34d3d1$var$ChildrenNode(childSet, $4ffb76f3de34d3d1$var$nodeFromJSON(priority), $4ffb76f3de34d3d1$var$IndexMap.Default);
    } else {
        let node = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        $4ffb76f3de34d3d1$var$each(json, (key, childData)=>{
            if ((0, $25f55f8610499322$export$2344b14b097df817)(json, key)) {
                if (key.substring(0, 1) !== ".") {
                    // ignore metadata nodes.
                    const childNode = $4ffb76f3de34d3d1$var$nodeFromJSON(childData);
                    if (childNode.isLeafNode() || !childNode.isEmpty()) node = node.updateImmediateChild(key, childNode);
                }
            }
        });
        return node.updatePriority($4ffb76f3de34d3d1$var$nodeFromJSON(priority));
    }
}
$4ffb76f3de34d3d1$var$setNodeFromJSON($4ffb76f3de34d3d1$var$nodeFromJSON);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$PathIndex extends $4ffb76f3de34d3d1$var$Index {
    constructor(indexPath_){
        super();
        this.indexPath_ = indexPath_;
        (0, $25f55f8610499322$export$a7a9523472993e97)(!$4ffb76f3de34d3d1$var$pathIsEmpty(indexPath_) && $4ffb76f3de34d3d1$var$pathGetFront(indexPath_) !== ".priority", "Can't create PathIndex with empty path or .priority key");
    }
    extractChild(snap) {
        return snap.getChild(this.indexPath_);
    }
    isDefinedOn(node) {
        return !node.getChild(this.indexPath_).isEmpty();
    }
    compare(a, b) {
        const aChild = this.extractChild(a.node);
        const bChild = this.extractChild(b.node);
        const indexCmp = aChild.compareTo(bChild);
        if (indexCmp === 0) return $4ffb76f3de34d3d1$var$nameCompare(a.name, b.name);
        else return indexCmp;
    }
    makePost(indexValue, name) {
        const valueNode = $4ffb76f3de34d3d1$var$nodeFromJSON(indexValue);
        const node = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
        return new $4ffb76f3de34d3d1$var$NamedNode(name, node);
    }
    maxPost() {
        const node = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, $4ffb76f3de34d3d1$var$MAX_NODE);
        return new $4ffb76f3de34d3d1$var$NamedNode($4ffb76f3de34d3d1$var$MAX_NAME, node);
    }
    toString() {
        return $4ffb76f3de34d3d1$var$pathSlice(this.indexPath_, 0).join("/");
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$ValueIndex extends $4ffb76f3de34d3d1$var$Index {
    compare(a, b) {
        const indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) return $4ffb76f3de34d3d1$var$nameCompare(a.name, b.name);
        else return indexCmp;
    }
    isDefinedOn(node) {
        return true;
    }
    indexedValueChanged(oldNode, newNode) {
        return !oldNode.equals(newNode);
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return $4ffb76f3de34d3d1$var$NamedNode.MIN;
    }
    maxPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return $4ffb76f3de34d3d1$var$NamedNode.MAX;
    }
    makePost(indexValue, name) {
        const valueNode = $4ffb76f3de34d3d1$var$nodeFromJSON(indexValue);
        return new $4ffb76f3de34d3d1$var$NamedNode(name, valueNode);
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return ".value";
    }
}
const $4ffb76f3de34d3d1$var$VALUE_INDEX = new $4ffb76f3de34d3d1$var$ValueIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$changeValue(snapshotNode) {
    return {
        type: "value" /* ChangeType.VALUE */ ,
        snapshotNode: snapshotNode
    };
}
function $4ffb76f3de34d3d1$var$changeChildAdded(childName, snapshotNode) {
    return {
        type: "child_added" /* ChangeType.CHILD_ADDED */ ,
        snapshotNode: snapshotNode,
        childName: childName
    };
}
function $4ffb76f3de34d3d1$var$changeChildRemoved(childName, snapshotNode) {
    return {
        type: "child_removed" /* ChangeType.CHILD_REMOVED */ ,
        snapshotNode: snapshotNode,
        childName: childName
    };
}
function $4ffb76f3de34d3d1$var$changeChildChanged(childName, snapshotNode, oldSnap) {
    return {
        type: "child_changed" /* ChangeType.CHILD_CHANGED */ ,
        snapshotNode: snapshotNode,
        childName: childName,
        oldSnap: oldSnap
    };
}
function $4ffb76f3de34d3d1$var$changeChildMoved(childName, snapshotNode) {
    return {
        type: "child_moved" /* ChangeType.CHILD_MOVED */ ,
        snapshotNode: snapshotNode,
        childName: childName
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 */ class $4ffb76f3de34d3d1$var$IndexedFilter {
    constructor(index_){
        this.index_ = index_;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(snap.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        const oldChild = snap.getImmediateChild(key);
        // Check if anything actually changed.
        if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
            // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
            // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
            // to avoid treating these cases as "nothing changed."
            if (oldChild.isEmpty() === newChild.isEmpty()) // Nothing changed.
            // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
            //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
            return snap;
        }
        if (optChangeAccumulator != null) {
            if (newChild.isEmpty()) {
                if (snap.hasChild(key)) optChangeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildRemoved(key, oldChild));
                else (0, $25f55f8610499322$export$a7a9523472993e97)(snap.isLeafNode(), "A child remove without an old child only makes sense on a leaf node");
            } else if (oldChild.isEmpty()) optChangeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildAdded(key, newChild));
            else optChangeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildChanged(key, newChild, oldChild));
        }
        if (snap.isLeafNode() && newChild.isEmpty()) return snap;
        else // Make sure the node is indexed
        return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (optChangeAccumulator != null) {
            if (!oldSnap.isLeafNode()) oldSnap.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, childNode)=>{
                if (!newSnap.hasChild(key)) optChangeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildRemoved(key, childNode));
            });
            if (!newSnap.isLeafNode()) newSnap.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, childNode)=>{
                if (oldSnap.hasChild(key)) {
                    const oldChild = oldSnap.getImmediateChild(key);
                    if (!oldChild.equals(childNode)) optChangeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildChanged(key, childNode, oldChild));
                } else optChangeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildAdded(key, childNode));
            });
        }
        return newSnap.withIndex(this.index_);
    }
    updatePriority(oldSnap, newPriority) {
        if (oldSnap.isEmpty()) return $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        else return oldSnap.updatePriority(newPriority);
    }
    filtersNodes() {
        return false;
    }
    getIndexedFilter() {
        return this;
    }
    getIndex() {
        return this.index_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 */ class $4ffb76f3de34d3d1$var$RangedFilter {
    constructor(params){
        this.indexedFilter_ = new $4ffb76f3de34d3d1$var$IndexedFilter(params.getIndex());
        this.index_ = params.getIndex();
        this.startPost_ = $4ffb76f3de34d3d1$var$RangedFilter.getStartPost_(params);
        this.endPost_ = $4ffb76f3de34d3d1$var$RangedFilter.getEndPost_(params);
        this.startIsInclusive_ = !params.startAfterSet_;
        this.endIsInclusive_ = !params.endBeforeSet_;
    }
    getStartPost() {
        return this.startPost_;
    }
    getEndPost() {
        return this.endPost_;
    }
    matches(node) {
        const isWithinStart = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), node) <= 0 : this.index_.compare(this.getStartPost(), node) < 0;
        const isWithinEnd = this.endIsInclusive_ ? this.index_.compare(node, this.getEndPost()) <= 0 : this.index_.compare(node, this.getEndPost()) < 0;
        return isWithinStart && isWithinEnd;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.matches(new $4ffb76f3de34d3d1$var$NamedNode(key, newChild))) newChild = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (newSnap.isLeafNode()) // Make sure we have a children node with the correct index, not a leaf node;
        newSnap = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        let filtered = newSnap.withIndex(this.index_);
        // Don't support priorities on queries
        filtered = filtered.updatePriority($4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE);
        const self = this;
        newSnap.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, childNode)=>{
            if (!self.matches(new $4ffb76f3de34d3d1$var$NamedNode(key, childNode))) filtered = filtered.updateImmediateChild(key, $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE);
        });
        return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
    }
    updatePriority(oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    }
    filtersNodes() {
        return true;
    }
    getIndexedFilter() {
        return this.indexedFilter_;
    }
    getIndex() {
        return this.index_;
    }
    static getStartPost_(params) {
        if (params.hasStart()) {
            const startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
        } else return params.getIndex().minPost();
    }
    static getEndPost_(params) {
        if (params.hasEnd()) {
            const endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
        } else return params.getIndex().maxPost();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 */ class $4ffb76f3de34d3d1$var$LimitedFilter {
    constructor(params){
        this.withinDirectionalStart = (node)=>this.reverse_ ? this.withinEndPost(node) : this.withinStartPost(node);
        this.withinDirectionalEnd = (node)=>this.reverse_ ? this.withinStartPost(node) : this.withinEndPost(node);
        this.withinStartPost = (node)=>{
            const compareRes = this.index_.compare(this.rangedFilter_.getStartPost(), node);
            return this.startIsInclusive_ ? compareRes <= 0 : compareRes < 0;
        };
        this.withinEndPost = (node)=>{
            const compareRes = this.index_.compare(node, this.rangedFilter_.getEndPost());
            return this.endIsInclusive_ ? compareRes <= 0 : compareRes < 0;
        };
        this.rangedFilter_ = new $4ffb76f3de34d3d1$var$RangedFilter(params);
        this.index_ = params.getIndex();
        this.limit_ = params.getLimit();
        this.reverse_ = !params.isViewFromLeft();
        this.startIsInclusive_ = !params.startAfterSet_;
        this.endIsInclusive_ = !params.endBeforeSet_;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.rangedFilter_.matches(new $4ffb76f3de34d3d1$var$NamedNode(key, newChild))) newChild = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        if (snap.getImmediateChild(key).equals(newChild)) // No change
        return snap;
        else if (snap.numChildren() < this.limit_) return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        else return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        let filtered;
        if (newSnap.isLeafNode() || newSnap.isEmpty()) // Make sure we have a children node with the correct index, not a leaf node;
        filtered = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        else if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
            // Easier to build up a snapshot, since what we're given has more than twice the elements we want
            filtered = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE.withIndex(this.index_);
            // anchor to the startPost, endPost, or last element as appropriate
            let iterator;
            if (this.reverse_) iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
            else iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let count = 0;
            while(iterator.hasNext() && count < this.limit_){
                const next = iterator.getNext();
                if (!this.withinDirectionalStart(next)) continue;
                else if (!this.withinDirectionalEnd(next)) break;
                else {
                    filtered = filtered.updateImmediateChild(next.name, next.node);
                    count++;
                }
            }
        } else {
            // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
            filtered = newSnap.withIndex(this.index_);
            // Don't support priorities on queries
            filtered = filtered.updatePriority($4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE);
            let iterator1;
            if (this.reverse_) iterator1 = filtered.getReverseIterator(this.index_);
            else iterator1 = filtered.getIterator(this.index_);
            let count1 = 0;
            while(iterator1.hasNext()){
                const next1 = iterator1.getNext();
                const inRange = count1 < this.limit_ && this.withinDirectionalStart(next1) && this.withinDirectionalEnd(next1);
                if (inRange) count1++;
                else filtered = filtered.updateImmediateChild(next1.name, $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE);
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
    }
    updatePriority(oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    }
    filtersNodes() {
        return true;
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter();
    }
    getIndex() {
        return this.index_;
    }
    fullLimitUpdateChild_(snap, childKey, childSnap, source, changeAccumulator) {
        // TODO: rename all cache stuff etc to general snap terminology
        let cmp;
        if (this.reverse_) {
            const indexCmp = this.index_.getCompare();
            cmp = (a, b)=>indexCmp(b, a);
        } else cmp = this.index_.getCompare();
        const oldEventCache = snap;
        (0, $25f55f8610499322$export$a7a9523472993e97)(oldEventCache.numChildren() === this.limit_, "");
        const newChildNamedNode = new $4ffb76f3de34d3d1$var$NamedNode(childKey, childSnap);
        const windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
        const inRange = this.rangedFilter_.matches(newChildNamedNode);
        if (oldEventCache.hasChild(childKey)) {
            const oldChildSnap = oldEventCache.getImmediateChild(childKey);
            let nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
            while(nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name)))// There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
            // been applied to the limited filter yet. Ignore this next child which will be updated later in
            // the limited filter...
            nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            const compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
            const remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
            if (remainsInWindow) {
                if (changeAccumulator != null) changeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildChanged(childKey, childSnap, oldChildSnap));
                return oldEventCache.updateImmediateChild(childKey, childSnap);
            } else {
                if (changeAccumulator != null) changeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildRemoved(childKey, oldChildSnap));
                const newEventCache = oldEventCache.updateImmediateChild(childKey, $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE);
                const nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
                if (nextChildInRange) {
                    if (changeAccumulator != null) changeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildAdded(nextChild.name, nextChild.node));
                    return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
                } else return newEventCache;
            }
        } else if (childSnap.isEmpty()) // we're deleting a node, but it was not in the window, so ignore it
        return snap;
        else if (inRange) {
            if (cmp(windowBoundary, newChildNamedNode) >= 0) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildRemoved(windowBoundary.name, windowBoundary.node));
                    changeAccumulator.trackChildChange($4ffb76f3de34d3d1$var$changeChildAdded(childKey, childSnap));
                }
                return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE);
            } else return snap;
        } else return snap;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 *
 * @internal
 */ class $4ffb76f3de34d3d1$export$7ba287e361c94330 {
    constructor(){
        this.limitSet_ = false;
        this.startSet_ = false;
        this.startNameSet_ = false;
        this.startAfterSet_ = false; // can only be true if startSet_ is true
        this.endSet_ = false;
        this.endNameSet_ = false;
        this.endBeforeSet_ = false; // can only be true if endSet_ is true
        this.limit_ = 0;
        this.viewFrom_ = "";
        this.indexStartValue_ = null;
        this.indexStartName_ = "";
        this.indexEndValue_ = null;
        this.indexEndName_ = "";
        this.index_ = $4ffb76f3de34d3d1$var$PRIORITY_INDEX;
    }
    hasStart() {
        return this.startSet_;
    }
    /**
     * @returns True if it would return from left.
     */ isViewFromLeft() {
        if (this.viewFrom_ === "") // limit(), rather than limitToFirst or limitToLast was called.
        // This means that only one of startSet_ and endSet_ is true. Use them
        // to calculate which side of the view to anchor to. If neither is set,
        // anchor to the end.
        return this.startSet_;
        else return this.viewFrom_ === "l" /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */ ;
    }
    /**
     * Only valid to call if hasStart() returns true
     */ getIndexStartValue() {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.startSet_, "Only valid if start has been set");
        return this.indexStartValue_;
    }
    /**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     */ getIndexStartName() {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.startSet_, "Only valid if start has been set");
        if (this.startNameSet_) return this.indexStartName_;
        else return $4ffb76f3de34d3d1$var$MIN_NAME;
    }
    hasEnd() {
        return this.endSet_;
    }
    /**
     * Only valid to call if hasEnd() returns true.
     */ getIndexEndValue() {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.endSet_, "Only valid if end has been set");
        return this.indexEndValue_;
    }
    /**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     */ getIndexEndName() {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.endSet_, "Only valid if end has been set");
        if (this.endNameSet_) return this.indexEndName_;
        else return $4ffb76f3de34d3d1$var$MAX_NAME;
    }
    hasLimit() {
        return this.limitSet_;
    }
    /**
     * @returns True if a limit has been set and it has been explicitly anchored
     */ hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== "";
    }
    /**
     * Only valid to call if hasLimit() returns true
     */ getLimit() {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.limitSet_, "Only valid if limit has been set");
        return this.limit_;
    }
    getIndex() {
        return this.index_;
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === $4ffb76f3de34d3d1$var$PRIORITY_INDEX;
    }
    copy() {
        const copy = new $4ffb76f3de34d3d1$export$7ba287e361c94330();
        copy.limitSet_ = this.limitSet_;
        copy.limit_ = this.limit_;
        copy.startSet_ = this.startSet_;
        copy.startAfterSet_ = this.startAfterSet_;
        copy.indexStartValue_ = this.indexStartValue_;
        copy.startNameSet_ = this.startNameSet_;
        copy.indexStartName_ = this.indexStartName_;
        copy.endSet_ = this.endSet_;
        copy.endBeforeSet_ = this.endBeforeSet_;
        copy.indexEndValue_ = this.indexEndValue_;
        copy.endNameSet_ = this.endNameSet_;
        copy.indexEndName_ = this.indexEndName_;
        copy.index_ = this.index_;
        copy.viewFrom_ = this.viewFrom_;
        return copy;
    }
}
function $4ffb76f3de34d3d1$var$queryParamsGetNodeFilter(queryParams) {
    if (queryParams.loadsAllData()) return new $4ffb76f3de34d3d1$var$IndexedFilter(queryParams.getIndex());
    else if (queryParams.hasLimit()) return new $4ffb76f3de34d3d1$var$LimitedFilter(queryParams);
    else return new $4ffb76f3de34d3d1$var$RangedFilter(queryParams);
}
function $4ffb76f3de34d3d1$var$queryParamsLimitToFirst(queryParams, newLimit) {
    const newParams = queryParams.copy();
    newParams.limitSet_ = true;
    newParams.limit_ = newLimit;
    newParams.viewFrom_ = "l" /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */ ;
    return newParams;
}
function $4ffb76f3de34d3d1$var$queryParamsLimitToLast(queryParams, newLimit) {
    const newParams = queryParams.copy();
    newParams.limitSet_ = true;
    newParams.limit_ = newLimit;
    newParams.viewFrom_ = "r" /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT */ ;
    return newParams;
}
function $4ffb76f3de34d3d1$var$queryParamsStartAt(queryParams, indexValue, key) {
    const newParams = queryParams.copy();
    newParams.startSet_ = true;
    if (indexValue === undefined) indexValue = null;
    newParams.indexStartValue_ = indexValue;
    if (key != null) {
        newParams.startNameSet_ = true;
        newParams.indexStartName_ = key;
    } else {
        newParams.startNameSet_ = false;
        newParams.indexStartName_ = "";
    }
    return newParams;
}
function $4ffb76f3de34d3d1$var$queryParamsStartAfter(queryParams, indexValue, key) {
    let params;
    if (queryParams.index_ === $4ffb76f3de34d3d1$var$KEY_INDEX || !!key) params = $4ffb76f3de34d3d1$var$queryParamsStartAt(queryParams, indexValue, key);
    else params = $4ffb76f3de34d3d1$var$queryParamsStartAt(queryParams, indexValue, $4ffb76f3de34d3d1$var$MAX_NAME);
    params.startAfterSet_ = true;
    return params;
}
function $4ffb76f3de34d3d1$var$queryParamsEndAt(queryParams, indexValue, key) {
    const newParams = queryParams.copy();
    newParams.endSet_ = true;
    if (indexValue === undefined) indexValue = null;
    newParams.indexEndValue_ = indexValue;
    if (key !== undefined) {
        newParams.endNameSet_ = true;
        newParams.indexEndName_ = key;
    } else {
        newParams.endNameSet_ = false;
        newParams.indexEndName_ = "";
    }
    return newParams;
}
function $4ffb76f3de34d3d1$var$queryParamsEndBefore(queryParams, indexValue, key) {
    let params;
    if (queryParams.index_ === $4ffb76f3de34d3d1$var$KEY_INDEX || !!key) params = $4ffb76f3de34d3d1$var$queryParamsEndAt(queryParams, indexValue, key);
    else params = $4ffb76f3de34d3d1$var$queryParamsEndAt(queryParams, indexValue, $4ffb76f3de34d3d1$var$MIN_NAME);
    params.endBeforeSet_ = true;
    return params;
}
function $4ffb76f3de34d3d1$var$queryParamsOrderBy(queryParams, index) {
    const newParams = queryParams.copy();
    newParams.index_ = index;
    return newParams;
}
/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @returns query string parameters
 */ function $4ffb76f3de34d3d1$var$queryParamsToRestQueryStringParameters(queryParams) {
    const qs = {};
    if (queryParams.isDefault()) return qs;
    let orderBy;
    if (queryParams.index_ === $4ffb76f3de34d3d1$var$PRIORITY_INDEX) orderBy = "$priority" /* REST_QUERY_CONSTANTS.PRIORITY_INDEX */ ;
    else if (queryParams.index_ === $4ffb76f3de34d3d1$var$VALUE_INDEX) orderBy = "$value" /* REST_QUERY_CONSTANTS.VALUE_INDEX */ ;
    else if (queryParams.index_ === $4ffb76f3de34d3d1$var$KEY_INDEX) orderBy = "$key" /* REST_QUERY_CONSTANTS.KEY_INDEX */ ;
    else {
        (0, $25f55f8610499322$export$a7a9523472993e97)(queryParams.index_ instanceof $4ffb76f3de34d3d1$var$PathIndex, "Unrecognized index type!");
        orderBy = queryParams.index_.toString();
    }
    qs["orderBy" /* REST_QUERY_CONSTANTS.ORDER_BY */ ] = (0, $25f55f8610499322$export$fac44ee5b035f737)(orderBy);
    if (queryParams.startSet_) {
        const startParam = queryParams.startAfterSet_ ? "startAfter" /* REST_QUERY_CONSTANTS.START_AFTER */  : "startAt" /* REST_QUERY_CONSTANTS.START_AT */ ;
        qs[startParam] = (0, $25f55f8610499322$export$fac44ee5b035f737)(queryParams.indexStartValue_);
        if (queryParams.startNameSet_) qs[startParam] += "," + (0, $25f55f8610499322$export$fac44ee5b035f737)(queryParams.indexStartName_);
    }
    if (queryParams.endSet_) {
        const endParam = queryParams.endBeforeSet_ ? "endBefore" /* REST_QUERY_CONSTANTS.END_BEFORE */  : "endAt" /* REST_QUERY_CONSTANTS.END_AT */ ;
        qs[endParam] = (0, $25f55f8610499322$export$fac44ee5b035f737)(queryParams.indexEndValue_);
        if (queryParams.endNameSet_) qs[endParam] += "," + (0, $25f55f8610499322$export$fac44ee5b035f737)(queryParams.indexEndName_);
    }
    if (queryParams.limitSet_) {
        if (queryParams.isViewFromLeft()) qs["limitToFirst" /* REST_QUERY_CONSTANTS.LIMIT_TO_FIRST */ ] = queryParams.limit_;
        else qs["limitToLast" /* REST_QUERY_CONSTANTS.LIMIT_TO_LAST */ ] = queryParams.limit_;
    }
    return qs;
}
function $4ffb76f3de34d3d1$var$queryParamsGetQueryObject(queryParams) {
    const obj = {};
    if (queryParams.startSet_) {
        obj["sp" /* WIRE_PROTOCOL_CONSTANTS.INDEX_START_VALUE */ ] = queryParams.indexStartValue_;
        if (queryParams.startNameSet_) obj["sn" /* WIRE_PROTOCOL_CONSTANTS.INDEX_START_NAME */ ] = queryParams.indexStartName_;
        obj["sin" /* WIRE_PROTOCOL_CONSTANTS.INDEX_START_IS_INCLUSIVE */ ] = !queryParams.startAfterSet_;
    }
    if (queryParams.endSet_) {
        obj["ep" /* WIRE_PROTOCOL_CONSTANTS.INDEX_END_VALUE */ ] = queryParams.indexEndValue_;
        if (queryParams.endNameSet_) obj["en" /* WIRE_PROTOCOL_CONSTANTS.INDEX_END_NAME */ ] = queryParams.indexEndName_;
        obj["ein" /* WIRE_PROTOCOL_CONSTANTS.INDEX_END_IS_INCLUSIVE */ ] = !queryParams.endBeforeSet_;
    }
    if (queryParams.limitSet_) {
        obj["l" /* WIRE_PROTOCOL_CONSTANTS.LIMIT */ ] = queryParams.limit_;
        let viewFrom = queryParams.viewFrom_;
        if (viewFrom === "") {
            if (queryParams.isViewFromLeft()) viewFrom = "l" /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */ ;
            else viewFrom = "r" /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT */ ;
        }
        obj["vf" /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM */ ] = viewFrom;
    }
    // For now, priority index is the default, so we only specify if it's some other index
    if (queryParams.index_ !== $4ffb76f3de34d3d1$var$PRIORITY_INDEX) obj["i" /* WIRE_PROTOCOL_CONSTANTS.INDEX */ ] = queryParams.index_.toString();
    return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */ class $4ffb76f3de34d3d1$var$ReadonlyRestClient extends $4ffb76f3de34d3d1$var$ServerActions {
    /**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param onDataUpdate_ - A callback for new data from the server
     */ constructor(repoInfo_, onDataUpdate_, authTokenProvider_, appCheckTokenProvider_){
        super();
        this.repoInfo_ = repoInfo_;
        this.onDataUpdate_ = onDataUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        /** @private {function(...[*])} */ this.log_ = $4ffb76f3de34d3d1$var$logWrapper("p:rest:");
        /**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         */ this.listens_ = {};
    }
    reportStats(stats) {
        throw new Error("Method not implemented.");
    }
    static getListenId_(query, tag) {
        if (tag !== undefined) return "tag$" + tag;
        else {
            (0, $25f55f8610499322$export$a7a9523472993e97)(query._queryParams.isDefault(), "should have a tag if it's not a default query.");
            return query._path.toString();
        }
    }
    /** @inheritDoc */ listen(query, currentHashFn, tag, onComplete) {
        const pathString = query._path.toString();
        this.log_("Listen called for " + pathString + " " + query._queryIdentifier);
        // Mark this listener so we can tell if it's removed.
        const listenId = $4ffb76f3de34d3d1$var$ReadonlyRestClient.getListenId_(query, tag);
        const thisListen = {};
        this.listens_[listenId] = thisListen;
        const queryStringParameters = $4ffb76f3de34d3d1$var$queryParamsToRestQueryStringParameters(query._queryParams);
        this.restRequest_(pathString + ".json", queryStringParameters, (error, result)=>{
            let data = result;
            if (error === 404) {
                data = null;
                error = null;
            }
            if (error === null) this.onDataUpdate_(pathString, data, /*isMerge=*/ false, tag);
            if ((0, $25f55f8610499322$export$e51ae4db7b428f67)(this.listens_, listenId) === thisListen) {
                let status;
                if (!error) status = "ok";
                else if (error === 401) status = "permission_denied";
                else status = "rest_error:" + error;
                onComplete(status, null);
            }
        });
    }
    /** @inheritDoc */ unlisten(query, tag) {
        const listenId = $4ffb76f3de34d3d1$var$ReadonlyRestClient.getListenId_(query, tag);
        delete this.listens_[listenId];
    }
    get(query) {
        const queryStringParameters = $4ffb76f3de34d3d1$var$queryParamsToRestQueryStringParameters(query._queryParams);
        const pathString = query._path.toString();
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        this.restRequest_(pathString + ".json", queryStringParameters, (error, result)=>{
            let data = result;
            if (error === 404) {
                data = null;
                error = null;
            }
            if (error === null) {
                this.onDataUpdate_(pathString, data, /*isMerge=*/ false, /*tag=*/ null);
                deferred.resolve(data);
            } else deferred.reject(new Error(data));
        });
        return deferred.promise;
    }
    /** @inheritDoc */ refreshAuthToken(token) {
    // no-op since we just always call getToken.
    }
    /**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     */ restRequest_(pathString, queryStringParameters = {}, callback) {
        queryStringParameters["format"] = "export";
        return Promise.all([
            this.authTokenProvider_.getToken(/*forceRefresh=*/ false),
            this.appCheckTokenProvider_.getToken(/*forceRefresh=*/ false)
        ]).then(([authToken, appCheckToken])=>{
            if (authToken && authToken.accessToken) queryStringParameters["auth"] = authToken.accessToken;
            if (appCheckToken && appCheckToken.token) queryStringParameters["ac"] = appCheckToken.token;
            const url = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + pathString + "?" + "ns=" + this.repoInfo_.namespace + (0, $25f55f8610499322$export$ac4103b836844853)(queryStringParameters);
            this.log_("Sending REST request for " + url);
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                if (callback && xhr.readyState === 4) {
                    this.log_("REST Response for " + url + " received. status:", xhr.status, "response:", xhr.responseText);
                    let res = null;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            res = (0, $25f55f8610499322$export$c5a53ce6a17cf18d)(xhr.responseText);
                        } catch (e) {
                            $4ffb76f3de34d3d1$var$warn("Failed to parse JSON response for " + url + ": " + xhr.responseText);
                        }
                        callback(null, res);
                    } else {
                        // 401 and 404 are expected.
                        if (xhr.status !== 401 && xhr.status !== 404) $4ffb76f3de34d3d1$var$warn("Got unsuccessful REST response for " + url + " Status: " + xhr.status);
                        callback(xhr.status);
                    }
                    callback = null;
                }
            };
            xhr.open("GET", url, /*asynchronous=*/ true);
            xhr.send();
        });
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */ class $4ffb76f3de34d3d1$var$SnapshotHolder {
    constructor(){
        this.rootNode_ = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
    }
    getNode(path) {
        return this.rootNode_.getChild(path);
    }
    updateSnapshot(path, newSnapshotNode) {
        this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$newSparseSnapshotTree() {
    return {
        value: null,
        children: new Map()
    };
}
/**
 * Stores the given node at the specified path. If there is already a node
 * at a shallower path, it merges the new data into that snapshot node.
 *
 * @param path - Path to look up snapshot for.
 * @param data - The new data, or null.
 */ function $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(sparseSnapshotTree, path, data) {
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) {
        sparseSnapshotTree.value = data;
        sparseSnapshotTree.children.clear();
    } else if (sparseSnapshotTree.value !== null) sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path, data);
    else {
        const childKey = $4ffb76f3de34d3d1$var$pathGetFront(path);
        if (!sparseSnapshotTree.children.has(childKey)) sparseSnapshotTree.children.set(childKey, $4ffb76f3de34d3d1$var$newSparseSnapshotTree());
        const child = sparseSnapshotTree.children.get(childKey);
        path = $4ffb76f3de34d3d1$var$pathPopFront(path);
        $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(child, path, data);
    }
}
/**
 * Purge the data at path from the cache.
 *
 * @param path - Path to look up snapshot for.
 * @returns True if this node should now be removed.
 */ function $4ffb76f3de34d3d1$var$sparseSnapshotTreeForget(sparseSnapshotTree, path) {
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) {
        sparseSnapshotTree.value = null;
        sparseSnapshotTree.children.clear();
        return true;
    } else {
        if (sparseSnapshotTree.value !== null) {
            if (sparseSnapshotTree.value.isLeafNode()) // We're trying to forget a node that doesn't exist
            return false;
            else {
                const value = sparseSnapshotTree.value;
                sparseSnapshotTree.value = null;
                value.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, tree)=>{
                    $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(sparseSnapshotTree, new $4ffb76f3de34d3d1$var$Path(key), tree);
                });
                return $4ffb76f3de34d3d1$var$sparseSnapshotTreeForget(sparseSnapshotTree, path);
            }
        } else if (sparseSnapshotTree.children.size > 0) {
            const childKey = $4ffb76f3de34d3d1$var$pathGetFront(path);
            path = $4ffb76f3de34d3d1$var$pathPopFront(path);
            if (sparseSnapshotTree.children.has(childKey)) {
                const safeToRemove = $4ffb76f3de34d3d1$var$sparseSnapshotTreeForget(sparseSnapshotTree.children.get(childKey), path);
                if (safeToRemove) sparseSnapshotTree.children.delete(childKey);
            }
            return sparseSnapshotTree.children.size === 0;
        } else return true;
    }
}
/**
 * Recursively iterates through all of the stored tree and calls the
 * callback on each one.
 *
 * @param prefixPath - Path to look up node for.
 * @param func - The function to invoke for each tree.
 */ function $4ffb76f3de34d3d1$var$sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func) {
    if (sparseSnapshotTree.value !== null) func(prefixPath, sparseSnapshotTree.value);
    else $4ffb76f3de34d3d1$var$sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key, tree)=>{
        const path = new $4ffb76f3de34d3d1$var$Path(prefixPath.toString() + "/" + key);
        $4ffb76f3de34d3d1$var$sparseSnapshotTreeForEachTree(tree, path, func);
    });
}
/**
 * Iterates through each immediate child and triggers the callback.
 * Only seems to be used in tests.
 *
 * @param func - The function to invoke for each child.
 */ function $4ffb76f3de34d3d1$var$sparseSnapshotTreeForEachChild(sparseSnapshotTree, func) {
    sparseSnapshotTree.children.forEach((tree, key)=>{
        func(key, tree);
    });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ - The collection to "listen" to.
 */ class $4ffb76f3de34d3d1$var$StatsListener {
    constructor(collection_){
        this.collection_ = collection_;
        this.last_ = null;
    }
    get() {
        const newStats = this.collection_.get();
        const delta = Object.assign({}, newStats);
        if (this.last_) $4ffb76f3de34d3d1$var$each(this.last_, (stat, value)=>{
            delta[stat] = delta[stat] - value;
        });
        this.last_ = newStats;
        return delta;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.
const $4ffb76f3de34d3d1$var$FIRST_STATS_MIN_TIME = 10000;
const $4ffb76f3de34d3d1$var$FIRST_STATS_MAX_TIME = 30000;
// We'll continue to report stats on average every 5 minutes.
const $4ffb76f3de34d3d1$var$REPORT_STATS_INTERVAL = 300000;
class $4ffb76f3de34d3d1$var$StatsReporter {
    constructor(collection, server_){
        this.server_ = server_;
        this.statsToReport_ = {};
        this.statsListener_ = new $4ffb76f3de34d3d1$var$StatsListener(collection);
        const timeout = $4ffb76f3de34d3d1$var$FIRST_STATS_MIN_TIME + ($4ffb76f3de34d3d1$var$FIRST_STATS_MAX_TIME - $4ffb76f3de34d3d1$var$FIRST_STATS_MIN_TIME) * Math.random();
        $4ffb76f3de34d3d1$var$setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
    }
    reportStats_() {
        const stats = this.statsListener_.get();
        const reportedStats = {};
        let haveStatsToReport = false;
        $4ffb76f3de34d3d1$var$each(stats, (stat, value)=>{
            if (value > 0 && (0, $25f55f8610499322$export$2344b14b097df817)(this.statsToReport_, stat)) {
                reportedStats[stat] = value;
                haveStatsToReport = true;
            }
        });
        if (haveStatsToReport) this.server_.reportStats(reportedStats);
        // queue our next run.
        $4ffb76f3de34d3d1$var$setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * $4ffb76f3de34d3d1$var$REPORT_STATS_INTERVAL));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 *
 * @enum
 */ var $4ffb76f3de34d3d1$var$OperationType;
(function(OperationType) {
    OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
    OperationType[OperationType["MERGE"] = 1] = "MERGE";
    OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
    OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})($4ffb76f3de34d3d1$var$OperationType || ($4ffb76f3de34d3d1$var$OperationType = {}));
function $4ffb76f3de34d3d1$var$newOperationSourceUser() {
    return {
        fromUser: true,
        fromServer: false,
        queryId: null,
        tagged: false
    };
}
function $4ffb76f3de34d3d1$var$newOperationSourceServer() {
    return {
        fromUser: false,
        fromServer: true,
        queryId: null,
        tagged: false
    };
}
function $4ffb76f3de34d3d1$var$newOperationSourceServerTaggedQuery(queryId) {
    return {
        fromUser: false,
        fromServer: true,
        queryId: queryId,
        tagged: true
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$AckUserWrite {
    /**
     * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
     */ constructor(/** @inheritDoc */ path, /** @inheritDoc */ affectedTree, /** @inheritDoc */ revert){
        this.path = path;
        this.affectedTree = affectedTree;
        this.revert = revert;
        /** @inheritDoc */ this.type = $4ffb76f3de34d3d1$var$OperationType.ACK_USER_WRITE;
        /** @inheritDoc */ this.source = $4ffb76f3de34d3d1$var$newOperationSourceUser();
    }
    operationForChild(childName) {
        if (!$4ffb76f3de34d3d1$var$pathIsEmpty(this.path)) {
            (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$pathGetFront(this.path) === childName, "operationForChild called for unrelated child.");
            return new $4ffb76f3de34d3d1$var$AckUserWrite($4ffb76f3de34d3d1$var$pathPopFront(this.path), this.affectedTree, this.revert);
        } else if (this.affectedTree.value != null) {
            (0, $25f55f8610499322$export$a7a9523472993e97)(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths.");
            // All child locations are affected as well; just return same operation.
            return this;
        } else {
            const childTree = this.affectedTree.subtree(new $4ffb76f3de34d3d1$var$Path(childName));
            return new $4ffb76f3de34d3d1$var$AckUserWrite($4ffb76f3de34d3d1$var$newEmptyPath(), childTree, this.revert);
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$ListenComplete {
    constructor(source, path){
        this.source = source;
        this.path = path;
        /** @inheritDoc */ this.type = $4ffb76f3de34d3d1$var$OperationType.LISTEN_COMPLETE;
    }
    operationForChild(childName) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(this.path)) return new $4ffb76f3de34d3d1$var$ListenComplete(this.source, $4ffb76f3de34d3d1$var$newEmptyPath());
        else return new $4ffb76f3de34d3d1$var$ListenComplete(this.source, $4ffb76f3de34d3d1$var$pathPopFront(this.path));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$Overwrite {
    constructor(source, path, snap){
        this.source = source;
        this.path = path;
        this.snap = snap;
        /** @inheritDoc */ this.type = $4ffb76f3de34d3d1$var$OperationType.OVERWRITE;
    }
    operationForChild(childName) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(this.path)) return new $4ffb76f3de34d3d1$var$Overwrite(this.source, $4ffb76f3de34d3d1$var$newEmptyPath(), this.snap.getImmediateChild(childName));
        else return new $4ffb76f3de34d3d1$var$Overwrite(this.source, $4ffb76f3de34d3d1$var$pathPopFront(this.path), this.snap);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$Merge {
    constructor(/** @inheritDoc */ source, /** @inheritDoc */ path, /** @inheritDoc */ children){
        this.source = source;
        this.path = path;
        this.children = children;
        /** @inheritDoc */ this.type = $4ffb76f3de34d3d1$var$OperationType.MERGE;
    }
    operationForChild(childName) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(this.path)) {
            const childTree = this.children.subtree(new $4ffb76f3de34d3d1$var$Path(childName));
            if (childTree.isEmpty()) // This child is unaffected
            return null;
            else if (childTree.value) // We have a snapshot for the child in question.  This becomes an overwrite of the child.
            return new $4ffb76f3de34d3d1$var$Overwrite(this.source, $4ffb76f3de34d3d1$var$newEmptyPath(), childTree.value);
            else // This is a merge at a deeper level
            return new $4ffb76f3de34d3d1$var$Merge(this.source, $4ffb76f3de34d3d1$var$newEmptyPath(), childTree);
        } else {
            (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
            return new $4ffb76f3de34d3d1$var$Merge(this.source, $4ffb76f3de34d3d1$var$pathPopFront(this.path), this.children);
        }
    }
    toString() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */ class $4ffb76f3de34d3d1$var$CacheNode {
    constructor(node_, fullyInitialized_, filtered_){
        this.node_ = node_;
        this.fullyInitialized_ = fullyInitialized_;
        this.filtered_ = filtered_;
    }
    /**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     */ isFullyInitialized() {
        return this.fullyInitialized_;
    }
    /**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     */ isFiltered() {
        return this.filtered_;
    }
    isCompleteForPath(path) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) return this.isFullyInitialized() && !this.filtered_;
        const childKey = $4ffb76f3de34d3d1$var$pathGetFront(path);
        return this.isCompleteForChild(childKey);
    }
    isCompleteForChild(key) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
    }
    getNode() {
        return this.node_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 */ class $4ffb76f3de34d3d1$var$EventGenerator {
    constructor(query_){
        this.query_ = query_;
        this.index_ = this.query_._queryParams.getIndex();
    }
}
/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */ function $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
    const events = [];
    const moves = [];
    changes.forEach((change)=>{
        if (change.type === "child_changed" /* ChangeType.CHILD_CHANGED */  && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) moves.push($4ffb76f3de34d3d1$var$changeChildMoved(change.childName, change.snapshotNode));
    });
    $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed" /* ChangeType.CHILD_REMOVED */ , changes, eventRegistrations, eventCache);
    $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added" /* ChangeType.CHILD_ADDED */ , changes, eventRegistrations, eventCache);
    $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved" /* ChangeType.CHILD_MOVED */ , moves, eventRegistrations, eventCache);
    $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed" /* ChangeType.CHILD_CHANGED */ , changes, eventRegistrations, eventCache);
    $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForType(eventGenerator, events, "value" /* ChangeType.VALUE */ , changes, eventRegistrations, eventCache);
    return events;
}
/**
 * Given changes of a single change type, generate the corresponding events.
 */ function $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
    const filteredChanges = changes.filter((change)=>change.type === eventType);
    filteredChanges.sort((a, b)=>$4ffb76f3de34d3d1$var$eventGeneratorCompareChanges(eventGenerator, a, b));
    filteredChanges.forEach((change)=>{
        const materializedChange = $4ffb76f3de34d3d1$var$eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
        registrations.forEach((registration)=>{
            if (registration.respondsTo(change.type)) events.push(registration.createEvent(materializedChange, eventGenerator.query_));
        });
    });
}
function $4ffb76f3de34d3d1$var$eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
    if (change.type === "value" || change.type === "child_removed") return change;
    else {
        change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
        return change;
    }
}
function $4ffb76f3de34d3d1$var$eventGeneratorCompareChanges(eventGenerator, a, b) {
    if (a.childName == null || b.childName == null) throw (0, $25f55f8610499322$export$a39cad550e7ab28a)("Should only compare child_ events.");
    const aWrapped = new $4ffb76f3de34d3d1$var$NamedNode(a.childName, a.snapshotNode);
    const bWrapped = new $4ffb76f3de34d3d1$var$NamedNode(b.childName, b.snapshotNode);
    return eventGenerator.index_.compare(aWrapped, bWrapped);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$newViewCache(eventCache, serverCache) {
    return {
        eventCache: eventCache,
        serverCache: serverCache
    };
}
function $4ffb76f3de34d3d1$var$viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
    return $4ffb76f3de34d3d1$var$newViewCache(new $4ffb76f3de34d3d1$var$CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
}
function $4ffb76f3de34d3d1$var$viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
    return $4ffb76f3de34d3d1$var$newViewCache(viewCache.eventCache, new $4ffb76f3de34d3d1$var$CacheNode(serverSnap, complete, filtered));
}
function $4ffb76f3de34d3d1$var$viewCacheGetCompleteEventSnap(viewCache) {
    return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
}
function $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(viewCache) {
    return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$emptyChildrenSingleton;
/**
 * Singleton empty children collection.
 *
 */ const $4ffb76f3de34d3d1$var$EmptyChildren = ()=>{
    if (!$4ffb76f3de34d3d1$var$emptyChildrenSingleton) $4ffb76f3de34d3d1$var$emptyChildrenSingleton = new $4ffb76f3de34d3d1$var$SortedMap($4ffb76f3de34d3d1$var$stringCompare);
    return $4ffb76f3de34d3d1$var$emptyChildrenSingleton;
};
/**
 * A tree with immutable elements.
 */ class $4ffb76f3de34d3d1$var$ImmutableTree {
    constructor(value, children = $4ffb76f3de34d3d1$var$EmptyChildren()){
        this.value = value;
        this.children = children;
    }
    static fromObject(obj) {
        let tree = new $4ffb76f3de34d3d1$var$ImmutableTree(null);
        $4ffb76f3de34d3d1$var$each(obj, (childPath, childSnap)=>{
            tree = tree.set(new $4ffb76f3de34d3d1$var$Path(childPath), childSnap);
        });
        return tree;
    }
    /**
     * True if the value is empty and there are no children
     */ isEmpty() {
        return this.value === null && this.children.isEmpty();
    }
    /**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
     * objects on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param relativePath - The remainder of the path
     * @param predicate - The predicate to satisfy to return a node
     */ findRootMostMatchingPathAndValue(relativePath, predicate) {
        if (this.value != null && predicate(this.value)) return {
            path: $4ffb76f3de34d3d1$var$newEmptyPath(),
            value: this.value
        };
        else {
            if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) return null;
            else {
                const front = $4ffb76f3de34d3d1$var$pathGetFront(relativePath);
                const child = this.children.get(front);
                if (child !== null) {
                    const childExistingPathAndValue = child.findRootMostMatchingPathAndValue($4ffb76f3de34d3d1$var$pathPopFront(relativePath), predicate);
                    if (childExistingPathAndValue != null) {
                        const fullPath = $4ffb76f3de34d3d1$var$pathChild(new $4ffb76f3de34d3d1$var$Path(front), childExistingPathAndValue.path);
                        return {
                            path: fullPath,
                            value: childExistingPathAndValue.value
                        };
                    } else return null;
                } else return null;
            }
        }
    }
    /**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     */ findRootMostValueAndPath(relativePath) {
        return this.findRootMostMatchingPathAndValue(relativePath, ()=>true);
    }
    /**
     * @returns The subtree at the given path
     */ subtree(relativePath) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) return this;
        else {
            const front = $4ffb76f3de34d3d1$var$pathGetFront(relativePath);
            const childTree = this.children.get(front);
            if (childTree !== null) return childTree.subtree($4ffb76f3de34d3d1$var$pathPopFront(relativePath));
            else return new $4ffb76f3de34d3d1$var$ImmutableTree(null);
        }
    }
    /**
     * Sets a value at the specified path.
     *
     * @param relativePath - Path to set value at.
     * @param toSet - Value to set.
     * @returns Resulting tree.
     */ set(relativePath, toSet) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) return new $4ffb76f3de34d3d1$var$ImmutableTree(toSet, this.children);
        else {
            const front = $4ffb76f3de34d3d1$var$pathGetFront(relativePath);
            const child = this.children.get(front) || new $4ffb76f3de34d3d1$var$ImmutableTree(null);
            const newChild = child.set($4ffb76f3de34d3d1$var$pathPopFront(relativePath), toSet);
            const newChildren = this.children.insert(front, newChild);
            return new $4ffb76f3de34d3d1$var$ImmutableTree(this.value, newChildren);
        }
    }
    /**
     * Removes the value at the specified path.
     *
     * @param relativePath - Path to value to remove.
     * @returns Resulting tree.
     */ remove(relativePath) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) {
            if (this.children.isEmpty()) return new $4ffb76f3de34d3d1$var$ImmutableTree(null);
            else return new $4ffb76f3de34d3d1$var$ImmutableTree(null, this.children);
        } else {
            const front = $4ffb76f3de34d3d1$var$pathGetFront(relativePath);
            const child = this.children.get(front);
            if (child) {
                const newChild = child.remove($4ffb76f3de34d3d1$var$pathPopFront(relativePath));
                let newChildren;
                if (newChild.isEmpty()) newChildren = this.children.remove(front);
                else newChildren = this.children.insert(front, newChild);
                if (this.value === null && newChildren.isEmpty()) return new $4ffb76f3de34d3d1$var$ImmutableTree(null);
                else return new $4ffb76f3de34d3d1$var$ImmutableTree(this.value, newChildren);
            } else return this;
        }
    }
    /**
     * Gets a value from the tree.
     *
     * @param relativePath - Path to get value for.
     * @returns Value at path, or null.
     */ get(relativePath) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) return this.value;
        else {
            const front = $4ffb76f3de34d3d1$var$pathGetFront(relativePath);
            const child = this.children.get(front);
            if (child) return child.get($4ffb76f3de34d3d1$var$pathPopFront(relativePath));
            else return null;
        }
    }
    /**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param relativePath - Path to replace subtree for.
     * @param newTree - New tree.
     * @returns Resulting tree.
     */ setTree(relativePath, newTree) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) return newTree;
        else {
            const front = $4ffb76f3de34d3d1$var$pathGetFront(relativePath);
            const child = this.children.get(front) || new $4ffb76f3de34d3d1$var$ImmutableTree(null);
            const newChild = child.setTree($4ffb76f3de34d3d1$var$pathPopFront(relativePath), newTree);
            let newChildren;
            if (newChild.isEmpty()) newChildren = this.children.remove(front);
            else newChildren = this.children.insert(front, newChild);
            return new $4ffb76f3de34d3d1$var$ImmutableTree(this.value, newChildren);
        }
    }
    /**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     */ fold(fn) {
        return this.fold_($4ffb76f3de34d3d1$var$newEmptyPath(), fn);
    }
    /**
     * Recursive helper for public-facing fold() method
     */ fold_(pathSoFar, fn) {
        const accum = {};
        this.children.inorderTraversal((childKey, childTree)=>{
            accum[childKey] = childTree.fold_($4ffb76f3de34d3d1$var$pathChild(pathSoFar, childKey), fn);
        });
        return fn(pathSoFar, this.value, accum);
    }
    /**
     * Find the first matching value on the given path. Return the result of applying f to it.
     */ findOnPath(path, f) {
        return this.findOnPath_(path, $4ffb76f3de34d3d1$var$newEmptyPath(), f);
    }
    findOnPath_(pathToFollow, pathSoFar, f) {
        const result = this.value ? f(pathSoFar, this.value) : false;
        if (result) return result;
        else {
            if ($4ffb76f3de34d3d1$var$pathIsEmpty(pathToFollow)) return null;
            else {
                const front = $4ffb76f3de34d3d1$var$pathGetFront(pathToFollow);
                const nextChild = this.children.get(front);
                if (nextChild) return nextChild.findOnPath_($4ffb76f3de34d3d1$var$pathPopFront(pathToFollow), $4ffb76f3de34d3d1$var$pathChild(pathSoFar, front), f);
                else return null;
            }
        }
    }
    foreachOnPath(path, f) {
        return this.foreachOnPath_(path, $4ffb76f3de34d3d1$var$newEmptyPath(), f);
    }
    foreachOnPath_(pathToFollow, currentRelativePath, f) {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(pathToFollow)) return this;
        else {
            if (this.value) f(currentRelativePath, this.value);
            const front = $4ffb76f3de34d3d1$var$pathGetFront(pathToFollow);
            const nextChild = this.children.get(front);
            if (nextChild) return nextChild.foreachOnPath_($4ffb76f3de34d3d1$var$pathPopFront(pathToFollow), $4ffb76f3de34d3d1$var$pathChild(currentRelativePath, front), f);
            else return new $4ffb76f3de34d3d1$var$ImmutableTree(null);
        }
    }
    /**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param f - A function to be called with the path from the root of the tree to
     * a node, and the value at that node. Called in depth-first order.
     */ foreach(f) {
        this.foreach_($4ffb76f3de34d3d1$var$newEmptyPath(), f);
    }
    foreach_(currentRelativePath, f) {
        this.children.inorderTraversal((childName, childTree)=>{
            childTree.foreach_($4ffb76f3de34d3d1$var$pathChild(currentRelativePath, childName), f);
        });
        if (this.value) f(currentRelativePath, this.value);
    }
    foreachChild(f) {
        this.children.inorderTraversal((childName, childTree)=>{
            if (childTree.value) f(childName, childTree.value);
        });
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */ class $4ffb76f3de34d3d1$var$CompoundWrite {
    constructor(writeTree_){
        this.writeTree_ = writeTree_;
    }
    static empty() {
        return new $4ffb76f3de34d3d1$var$CompoundWrite(new $4ffb76f3de34d3d1$var$ImmutableTree(null));
    }
}
function $4ffb76f3de34d3d1$var$compoundWriteAddWrite(compoundWrite, path, node) {
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) return new $4ffb76f3de34d3d1$var$CompoundWrite(new $4ffb76f3de34d3d1$var$ImmutableTree(node));
    else {
        const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
        if (rootmost != null) {
            const rootMostPath = rootmost.path;
            let value = rootmost.value;
            const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(rootMostPath, path);
            value = value.updateChild(relativePath, node);
            return new $4ffb76f3de34d3d1$var$CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
        } else {
            const subtree = new $4ffb76f3de34d3d1$var$ImmutableTree(node);
            const newWriteTree = compoundWrite.writeTree_.setTree(path, subtree);
            return new $4ffb76f3de34d3d1$var$CompoundWrite(newWriteTree);
        }
    }
}
function $4ffb76f3de34d3d1$var$compoundWriteAddWrites(compoundWrite, path, updates) {
    let newWrite = compoundWrite;
    $4ffb76f3de34d3d1$var$each(updates, (childKey, node)=>{
        newWrite = $4ffb76f3de34d3d1$var$compoundWriteAddWrite(newWrite, $4ffb76f3de34d3d1$var$pathChild(path, childKey), node);
    });
    return newWrite;
}
/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite - The CompoundWrite to remove.
 * @param path - The path at which a write and all deeper writes should be removed
 * @returns The new CompoundWrite with the removed path
 */ function $4ffb76f3de34d3d1$var$compoundWriteRemoveWrite(compoundWrite, path) {
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) return $4ffb76f3de34d3d1$var$CompoundWrite.empty();
    else {
        const newWriteTree = compoundWrite.writeTree_.setTree(path, new $4ffb76f3de34d3d1$var$ImmutableTree(null));
        return new $4ffb76f3de34d3d1$var$CompoundWrite(newWriteTree);
    }
}
/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite - The CompoundWrite to check.
 * @param path - The path to check for
 * @returns Whether there is a complete write at that path
 */ function $4ffb76f3de34d3d1$var$compoundWriteHasCompleteWrite(compoundWrite, path) {
    return $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(compoundWrite, path) != null;
}
/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite - The CompoundWrite to get the node from.
 * @param path - The path to get a complete write
 * @returns The node if complete at that path, or null otherwise.
 */ function $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(compoundWrite, path) {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
    if (rootmost != null) return compoundWrite.writeTree_.get(rootmost.path).getChild($4ffb76f3de34d3d1$var$newRelativePath(rootmost.path, path));
    else return null;
}
/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite - The CompoundWrite to get children from.
 * @returns A list of all complete children.
 */ function $4ffb76f3de34d3d1$var$compoundWriteGetCompleteChildren(compoundWrite) {
    const children = [];
    const node = compoundWrite.writeTree_.value;
    if (node != null) // If it's a leaf node, it has no children; so nothing to do.
    {
        if (!node.isLeafNode()) node.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (childName, childNode)=>{
            children.push(new $4ffb76f3de34d3d1$var$NamedNode(childName, childNode));
        });
    } else compoundWrite.writeTree_.children.inorderTraversal((childName, childTree)=>{
        if (childTree.value != null) children.push(new $4ffb76f3de34d3d1$var$NamedNode(childName, childTree.value));
    });
    return children;
}
function $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(compoundWrite, path) {
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) return compoundWrite;
    else {
        const shadowingNode = $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(compoundWrite, path);
        if (shadowingNode != null) return new $4ffb76f3de34d3d1$var$CompoundWrite(new $4ffb76f3de34d3d1$var$ImmutableTree(shadowingNode));
        else return new $4ffb76f3de34d3d1$var$CompoundWrite(compoundWrite.writeTree_.subtree(path));
    }
}
/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @returns Whether this CompoundWrite is empty
 */ function $4ffb76f3de34d3d1$var$compoundWriteIsEmpty(compoundWrite) {
    return compoundWrite.writeTree_.isEmpty();
}
/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node - The node to apply this CompoundWrite to
 * @returns The node with all writes applied
 */ function $4ffb76f3de34d3d1$var$compoundWriteApply(compoundWrite, node) {
    return $4ffb76f3de34d3d1$var$applySubtreeWrite($4ffb76f3de34d3d1$var$newEmptyPath(), compoundWrite.writeTree_, node);
}
function $4ffb76f3de34d3d1$var$applySubtreeWrite(relativePath, writeTree, node) {
    if (writeTree.value != null) // Since there a write is always a leaf, we're done here
    return node.updateChild(relativePath, writeTree.value);
    else {
        let priorityWrite = null;
        writeTree.children.inorderTraversal((childKey, childTree)=>{
            if (childKey === ".priority") {
                // Apply priorities at the end so we don't update priorities for either empty nodes or forget
                // to apply priorities to empty nodes that are later filled
                (0, $25f55f8610499322$export$a7a9523472993e97)(childTree.value !== null, "Priority writes must always be leaf nodes");
                priorityWrite = childTree.value;
            } else node = $4ffb76f3de34d3d1$var$applySubtreeWrite($4ffb76f3de34d3d1$var$pathChild(relativePath, childKey), childTree, node);
        });
        // If there was a priority write, we only apply it if the node is not empty
        if (!node.getChild(relativePath).isEmpty() && priorityWrite !== null) node = node.updateChild($4ffb76f3de34d3d1$var$pathChild(relativePath, ".priority"), priorityWrite);
        return node;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
 *
 */ function $4ffb76f3de34d3d1$var$writeTreeChildWrites(writeTree, path) {
    return $4ffb76f3de34d3d1$var$newWriteTreeRef(path, writeTree);
}
/**
 * Record a new overwrite from user code.
 *
 * @param visible - This is set to false by some transactions. It should be excluded from event caches
 */ function $4ffb76f3de34d3d1$var$writeTreeAddOverwrite(writeTree, path, snap, writeId, visible) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(writeId > writeTree.lastWriteId, "Stacking an older write on top of newer ones");
    if (visible === undefined) visible = true;
    writeTree.allWrites.push({
        path: path,
        snap: snap,
        writeId: writeId,
        visible: visible
    });
    if (visible) writeTree.visibleWrites = $4ffb76f3de34d3d1$var$compoundWriteAddWrite(writeTree.visibleWrites, path, snap);
    writeTree.lastWriteId = writeId;
}
/**
 * Record a new merge from user code.
 */ function $4ffb76f3de34d3d1$var$writeTreeAddMerge(writeTree, path, changedChildren, writeId) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(writeId > writeTree.lastWriteId, "Stacking an older merge on top of newer ones");
    writeTree.allWrites.push({
        path: path,
        children: changedChildren,
        writeId: writeId,
        visible: true
    });
    writeTree.visibleWrites = $4ffb76f3de34d3d1$var$compoundWriteAddWrites(writeTree.visibleWrites, path, changedChildren);
    writeTree.lastWriteId = writeId;
}
function $4ffb76f3de34d3d1$var$writeTreeGetWrite(writeTree, writeId) {
    for(let i = 0; i < writeTree.allWrites.length; i++){
        const record = writeTree.allWrites[i];
        if (record.writeId === writeId) return record;
    }
    return null;
}
/**
 * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
 * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
 *
 * @returns true if the write may have been visible (meaning we'll need to reevaluate / raise
 * events as a result).
 */ function $4ffb76f3de34d3d1$var$writeTreeRemoveWrite(writeTree, writeId) {
    // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
    // out of order.
    //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
    //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
    const idx = writeTree.allWrites.findIndex((s)=>{
        return s.writeId === writeId;
    });
    (0, $25f55f8610499322$export$a7a9523472993e97)(idx >= 0, "removeWrite called with nonexistent writeId.");
    const writeToRemove = writeTree.allWrites[idx];
    writeTree.allWrites.splice(idx, 1);
    let removedWriteWasVisible = writeToRemove.visible;
    let removedWriteOverlapsWithOtherWrites = false;
    let i = writeTree.allWrites.length - 1;
    while(removedWriteWasVisible && i >= 0){
        const currentWrite = writeTree.allWrites[i];
        if (currentWrite.visible) {
            if (i >= idx && $4ffb76f3de34d3d1$var$writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) // The removed write was completely shadowed by a subsequent write.
            removedWriteWasVisible = false;
            else if ($4ffb76f3de34d3d1$var$pathContains(writeToRemove.path, currentWrite.path)) // Either we're covering some writes or they're covering part of us (depending on which came first).
            removedWriteOverlapsWithOtherWrites = true;
        }
        i--;
    }
    if (!removedWriteWasVisible) return false;
    else if (removedWriteOverlapsWithOtherWrites) {
        // There's some shadowing going on. Just rebuild the visible writes from scratch.
        $4ffb76f3de34d3d1$var$writeTreeResetTree_(writeTree);
        return true;
    } else {
        // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
        if (writeToRemove.snap) writeTree.visibleWrites = $4ffb76f3de34d3d1$var$compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
        else {
            const children = writeToRemove.children;
            $4ffb76f3de34d3d1$var$each(children, (childName)=>{
                writeTree.visibleWrites = $4ffb76f3de34d3d1$var$compoundWriteRemoveWrite(writeTree.visibleWrites, $4ffb76f3de34d3d1$var$pathChild(writeToRemove.path, childName));
            });
        }
        return true;
    }
}
function $4ffb76f3de34d3d1$var$writeTreeRecordContainsPath_(writeRecord, path) {
    if (writeRecord.snap) return $4ffb76f3de34d3d1$var$pathContains(writeRecord.path, path);
    else {
        for(const childName in writeRecord.children){
            if (writeRecord.children.hasOwnProperty(childName) && $4ffb76f3de34d3d1$var$pathContains($4ffb76f3de34d3d1$var$pathChild(writeRecord.path, childName), path)) return true;
        }
        return false;
    }
}
/**
 * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
 */ function $4ffb76f3de34d3d1$var$writeTreeResetTree_(writeTree) {
    writeTree.visibleWrites = $4ffb76f3de34d3d1$var$writeTreeLayerTree_(writeTree.allWrites, $4ffb76f3de34d3d1$var$writeTreeDefaultFilter_, $4ffb76f3de34d3d1$var$newEmptyPath());
    if (writeTree.allWrites.length > 0) writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
    else writeTree.lastWriteId = -1;
}
/**
 * The default filter used when constructing the tree. Keep everything that's visible.
 */ function $4ffb76f3de34d3d1$var$writeTreeDefaultFilter_(write) {
    return write.visible;
}
/**
 * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
 * event data at that path.
 */ function $4ffb76f3de34d3d1$var$writeTreeLayerTree_(writes, filter, treeRoot) {
    let compoundWrite = $4ffb76f3de34d3d1$var$CompoundWrite.empty();
    for(let i = 0; i < writes.length; ++i){
        const write = writes[i];
        // Theory, a later set will either:
        // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
        // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
        if (filter(write)) {
            const writePath = write.path;
            let relativePath;
            if (write.snap) {
                if ($4ffb76f3de34d3d1$var$pathContains(treeRoot, writePath)) {
                    relativePath = $4ffb76f3de34d3d1$var$newRelativePath(treeRoot, writePath);
                    compoundWrite = $4ffb76f3de34d3d1$var$compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
                } else if ($4ffb76f3de34d3d1$var$pathContains(writePath, treeRoot)) {
                    relativePath = $4ffb76f3de34d3d1$var$newRelativePath(writePath, treeRoot);
                    compoundWrite = $4ffb76f3de34d3d1$var$compoundWriteAddWrite(compoundWrite, $4ffb76f3de34d3d1$var$newEmptyPath(), write.snap.getChild(relativePath));
                }
            } else if (write.children) {
                if ($4ffb76f3de34d3d1$var$pathContains(treeRoot, writePath)) {
                    relativePath = $4ffb76f3de34d3d1$var$newRelativePath(treeRoot, writePath);
                    compoundWrite = $4ffb76f3de34d3d1$var$compoundWriteAddWrites(compoundWrite, relativePath, write.children);
                } else if ($4ffb76f3de34d3d1$var$pathContains(writePath, treeRoot)) {
                    relativePath = $4ffb76f3de34d3d1$var$newRelativePath(writePath, treeRoot);
                    if ($4ffb76f3de34d3d1$var$pathIsEmpty(relativePath)) compoundWrite = $4ffb76f3de34d3d1$var$compoundWriteAddWrites(compoundWrite, $4ffb76f3de34d3d1$var$newEmptyPath(), write.children);
                    else {
                        const child = (0, $25f55f8610499322$export$e51ae4db7b428f67)(write.children, $4ffb76f3de34d3d1$var$pathGetFront(relativePath));
                        if (child) {
                            // There exists a child in this node that matches the root path
                            const deepNode = child.getChild($4ffb76f3de34d3d1$var$pathPopFront(relativePath));
                            compoundWrite = $4ffb76f3de34d3d1$var$compoundWriteAddWrite(compoundWrite, $4ffb76f3de34d3d1$var$newEmptyPath(), deepNode);
                        }
                    }
                }
            } else throw (0, $25f55f8610499322$export$a39cad550e7ab28a)("WriteRecord should have .snap or .children");
        }
    }
    return compoundWrite;
}
/**
 * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
 * writes), attempt to calculate a complete snapshot for the given path
 *
 * @param writeIdsToExclude - An optional set to be excluded
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */ function $4ffb76f3de34d3d1$var$writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    if (!writeIdsToExclude && !includeHiddenWrites) {
        const shadowingNode = $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
        if (shadowingNode != null) return shadowingNode;
        else {
            const subMerge = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
            if ($4ffb76f3de34d3d1$var$compoundWriteIsEmpty(subMerge)) return completeServerCache;
            else if (completeServerCache == null && !$4ffb76f3de34d3d1$var$compoundWriteHasCompleteWrite(subMerge, $4ffb76f3de34d3d1$var$newEmptyPath())) // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
            return null;
            else {
                const layeredCache = completeServerCache || $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
                return $4ffb76f3de34d3d1$var$compoundWriteApply(subMerge, layeredCache);
            }
        }
    } else {
        const merge = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        if (!includeHiddenWrites && $4ffb76f3de34d3d1$var$compoundWriteIsEmpty(merge)) return completeServerCache;
        else {
            // If the server cache is null, and we don't have a complete cache, we need to return null
            if (!includeHiddenWrites && completeServerCache == null && !$4ffb76f3de34d3d1$var$compoundWriteHasCompleteWrite(merge, $4ffb76f3de34d3d1$var$newEmptyPath())) return null;
            else {
                const filter = function(write) {
                    return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && ($4ffb76f3de34d3d1$var$pathContains(write.path, treePath) || $4ffb76f3de34d3d1$var$pathContains(treePath, write.path));
                };
                const mergeAtPath = $4ffb76f3de34d3d1$var$writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
                const layeredCache1 = completeServerCache || $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
                return $4ffb76f3de34d3d1$var$compoundWriteApply(mergeAtPath, layeredCache1);
            }
        }
    }
}
/**
 * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
 * Used when creating new views, to pre-fill their complete event children snapshot.
 */ function $4ffb76f3de34d3d1$var$writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
    let completeChildren = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
    const topLevelSet = $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (topLevelSet) {
        if (!topLevelSet.isLeafNode()) // we're shadowing everything. Return the children.
        topLevelSet.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (childName, childSnap)=>{
            completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
        });
        return completeChildren;
    } else if (completeServerChildren) {
        // Layer any children we have on top of this
        // We know we don't have a top-level set, so just enumerate existing children
        const merge = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        completeServerChildren.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (childName, childNode)=>{
            const node = $4ffb76f3de34d3d1$var$compoundWriteApply($4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(merge, new $4ffb76f3de34d3d1$var$Path(childName)), childNode);
            completeChildren = completeChildren.updateImmediateChild(childName, node);
        });
        // Add any complete children we have from the set
        $4ffb76f3de34d3d1$var$compoundWriteGetCompleteChildren(merge).forEach((namedNode)=>{
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
        });
        return completeChildren;
    } else {
        // We don't have anything to layer on top of. Layer on any children we have
        // Note that we can return an empty snap if we have a defined delete
        const merge1 = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        $4ffb76f3de34d3d1$var$compoundWriteGetCompleteChildren(merge1).forEach((namedNode)=>{
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
        });
        return completeChildren;
    }
}
/**
 * Given that the underlying server data has updated, determine what, if anything, needs to be
 * applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events
 *
 * Either existingEventSnap or existingServerSnap must exist
 */ function $4ffb76f3de34d3d1$var$writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(existingEventSnap || existingServerSnap, "Either existingEventSnap or existingServerSnap must exist");
    const path = $4ffb76f3de34d3d1$var$pathChild(treePath, childPath);
    if ($4ffb76f3de34d3d1$var$compoundWriteHasCompleteWrite(writeTree.visibleWrites, path)) // At this point we can probably guarantee that we're in case 2, meaning no events
    // May need to check visibility while doing the findRootMostValueAndPath call
    return null;
    else {
        // No complete shadowing. We're either partially shadowing or not shadowing at all.
        const childMerge = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
        if ($4ffb76f3de34d3d1$var$compoundWriteIsEmpty(childMerge)) // We're not shadowing at all. Case 1
        return existingServerSnap.getChild(childPath);
        else // This could be more efficient if the serverNode + updates doesn't change the eventSnap
        // However this is tricky to find out, since user updates don't necessary change the server
        // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
        // adds nodes, but doesn't change any existing writes. It is therefore not enough to
        // only check if the updates change the serverNode.
        // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
        return $4ffb76f3de34d3d1$var$compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
    }
}
/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */ function $4ffb76f3de34d3d1$var$writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
    const path = $4ffb76f3de34d3d1$var$pathChild(treePath, childKey);
    const shadowingNode = $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
    if (shadowingNode != null) return shadowingNode;
    else {
        if (existingServerSnap.isCompleteForChild(childKey)) {
            const childMerge = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
            return $4ffb76f3de34d3d1$var$compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
        } else return null;
    }
}
/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 */ function $4ffb76f3de34d3d1$var$writeTreeShadowingWrite(writeTree, path) {
    return $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
}
/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window.
 */ function $4ffb76f3de34d3d1$var$writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index) {
    let toIterate;
    const merge = $4ffb76f3de34d3d1$var$compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    const shadowingNode = $4ffb76f3de34d3d1$var$compoundWriteGetCompleteNode(merge, $4ffb76f3de34d3d1$var$newEmptyPath());
    if (shadowingNode != null) toIterate = shadowingNode;
    else if (completeServerData != null) toIterate = $4ffb76f3de34d3d1$var$compoundWriteApply(merge, completeServerData);
    else // no children to iterate on
    return [];
    toIterate = toIterate.withIndex(index);
    if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
        const nodes = [];
        const cmp = index.getCompare();
        const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
        let next = iter.getNext();
        while(next && nodes.length < count){
            if (cmp(next, startPost) !== 0) nodes.push(next);
            next = iter.getNext();
        }
        return nodes;
    } else return [];
}
function $4ffb76f3de34d3d1$var$newWriteTree() {
    return {
        visibleWrites: $4ffb76f3de34d3d1$var$CompoundWrite.empty(),
        allWrites: [],
        lastWriteId: -1
    };
}
/**
 * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
 * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
 * can lead to a more expensive calculation.
 *
 * @param writeIdsToExclude - Optional writes to exclude.
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */ function $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    return $4ffb76f3de34d3d1$var$writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
}
/**
 * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
 * mix of the given server data and write data.
 *
 */ function $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
    return $4ffb76f3de34d3d1$var$writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
}
/**
 * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
 * if anything, needs to be applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events should be raised
 *
 * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
 *
 *
 */ function $4ffb76f3de34d3d1$var$writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path, existingEventSnap, existingServerSnap) {
    return $4ffb76f3de34d3d1$var$writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path, existingEventSnap, existingServerSnap);
}
/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 *
 */ function $4ffb76f3de34d3d1$var$writeTreeRefShadowingWrite(writeTreeRef, path) {
    return $4ffb76f3de34d3d1$var$writeTreeShadowingWrite(writeTreeRef.writeTree, $4ffb76f3de34d3d1$var$pathChild(writeTreeRef.treePath, path));
}
/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window
 */ function $4ffb76f3de34d3d1$var$writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index) {
    return $4ffb76f3de34d3d1$var$writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index);
}
/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */ function $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
    return $4ffb76f3de34d3d1$var$writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
}
/**
 * Return a WriteTreeRef for a child.
 */ function $4ffb76f3de34d3d1$var$writeTreeRefChild(writeTreeRef, childName) {
    return $4ffb76f3de34d3d1$var$newWriteTreeRef($4ffb76f3de34d3d1$var$pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
}
function $4ffb76f3de34d3d1$var$newWriteTreeRef(path, writeTree) {
    return {
        treePath: path,
        writeTree: writeTree
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$ChildChangeAccumulator {
    constructor(){
        this.changeMap = new Map();
    }
    trackChildChange(change) {
        const type = change.type;
        const childKey = change.childName;
        (0, $25f55f8610499322$export$a7a9523472993e97)(type === "child_added" /* ChangeType.CHILD_ADDED */  || type === "child_changed" /* ChangeType.CHILD_CHANGED */  || type === "child_removed" /* ChangeType.CHILD_REMOVED */ , "Only child changes supported for tracking");
        (0, $25f55f8610499322$export$a7a9523472993e97)(childKey !== ".priority", "Only non-priority child changes can be tracked.");
        const oldChange = this.changeMap.get(childKey);
        if (oldChange) {
            const oldType = oldChange.type;
            if (type === "child_added" /* ChangeType.CHILD_ADDED */  && oldType === "child_removed" /* ChangeType.CHILD_REMOVED */ ) this.changeMap.set(childKey, $4ffb76f3de34d3d1$var$changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
            else if (type === "child_removed" /* ChangeType.CHILD_REMOVED */  && oldType === "child_added" /* ChangeType.CHILD_ADDED */ ) this.changeMap.delete(childKey);
            else if (type === "child_removed" /* ChangeType.CHILD_REMOVED */  && oldType === "child_changed" /* ChangeType.CHILD_CHANGED */ ) this.changeMap.set(childKey, $4ffb76f3de34d3d1$var$changeChildRemoved(childKey, oldChange.oldSnap));
            else if (type === "child_changed" /* ChangeType.CHILD_CHANGED */  && oldType === "child_added" /* ChangeType.CHILD_ADDED */ ) this.changeMap.set(childKey, $4ffb76f3de34d3d1$var$changeChildAdded(childKey, change.snapshotNode));
            else if (type === "child_changed" /* ChangeType.CHILD_CHANGED */  && oldType === "child_changed" /* ChangeType.CHILD_CHANGED */ ) this.changeMap.set(childKey, $4ffb76f3de34d3d1$var$changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
            else throw (0, $25f55f8610499322$export$a39cad550e7ab28a)("Illegal combination of changes: " + change + " occurred after " + oldChange);
        } else this.changeMap.set(childKey, change);
    }
    getChanges() {
        return Array.from(this.changeMap.values());
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of CompleteChildSource that never returns any additional children
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
class $4ffb76f3de34d3d1$var$NoCompleteChildSource_ {
    getCompleteChild(childKey) {
        return null;
    }
    getChildAfterChild(index, child, reverse) {
        return null;
    }
}
/**
 * Singleton instance.
 */ const $4ffb76f3de34d3d1$var$NO_COMPLETE_CHILD_SOURCE = new $4ffb76f3de34d3d1$var$NoCompleteChildSource_();
/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */ class $4ffb76f3de34d3d1$var$WriteTreeCompleteChildSource {
    constructor(writes_, viewCache_, optCompleteServerCache_ = null){
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
    }
    getCompleteChild(childKey) {
        const node = this.viewCache_.eventCache;
        if (node.isCompleteForChild(childKey)) return node.getNode().getImmediateChild(childKey);
        else {
            const serverNode = this.optCompleteServerCache_ != null ? new $4ffb76f3de34d3d1$var$CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
            return $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
        }
    }
    getChildAfterChild(index, child, reverse) {
        const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(this.viewCache_);
        const nodes = $4ffb76f3de34d3d1$var$writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child, 1, reverse, index);
        if (nodes.length === 0) return null;
        else return nodes[0];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$newViewProcessor(filter) {
    return {
        filter: filter
    };
}
function $4ffb76f3de34d3d1$var$viewProcessorAssertIndexed(viewProcessor, viewCache) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Event snap not indexed");
    (0, $25f55f8610499322$export$a7a9523472993e97)(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Server snap not indexed");
}
function $4ffb76f3de34d3d1$var$viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
    const accumulator = new $4ffb76f3de34d3d1$var$ChildChangeAccumulator();
    let newViewCache, filterServerNode;
    if (operation.type === $4ffb76f3de34d3d1$var$OperationType.OVERWRITE) {
        const overwrite = operation;
        if (overwrite.source.fromUser) newViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
        else {
            (0, $25f55f8610499322$export$a7a9523472993e97)(overwrite.source.fromServer, "Unknown source.");
            // We filter the node if it's a tagged update or the node has been previously filtered  and the
            // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
            // again
            filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !$4ffb76f3de34d3d1$var$pathIsEmpty(overwrite.path);
            newViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
        }
    } else if (operation.type === $4ffb76f3de34d3d1$var$OperationType.MERGE) {
        const merge = operation;
        if (merge.source.fromUser) newViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
        else {
            (0, $25f55f8610499322$export$a7a9523472993e97)(merge.source.fromServer, "Unknown source.");
            // We filter the node if it's a tagged update or the node has been previously filtered
            filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
            newViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
        }
    } else if (operation.type === $4ffb76f3de34d3d1$var$OperationType.ACK_USER_WRITE) {
        const ackUserWrite = operation;
        if (!ackUserWrite.revert) newViewCache = $4ffb76f3de34d3d1$var$viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
        else newViewCache = $4ffb76f3de34d3d1$var$viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
    } else if (operation.type === $4ffb76f3de34d3d1$var$OperationType.LISTEN_COMPLETE) newViewCache = $4ffb76f3de34d3d1$var$viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
    else throw (0, $25f55f8610499322$export$a39cad550e7ab28a)("Unknown operation type: " + operation.type);
    const changes = accumulator.getChanges();
    $4ffb76f3de34d3d1$var$viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache, changes);
    return {
        viewCache: newViewCache,
        changes: changes
    };
}
function $4ffb76f3de34d3d1$var$viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache, accumulator) {
    const eventSnap = newViewCache.eventCache;
    if (eventSnap.isFullyInitialized()) {
        const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
        const oldCompleteSnap = $4ffb76f3de34d3d1$var$viewCacheGetCompleteEventSnap(oldViewCache);
        if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) accumulator.push($4ffb76f3de34d3d1$var$changeValue($4ffb76f3de34d3d1$var$viewCacheGetCompleteEventSnap(newViewCache)));
    }
}
function $4ffb76f3de34d3d1$var$viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source, accumulator) {
    const oldEventSnap = viewCache.eventCache;
    if ($4ffb76f3de34d3d1$var$writeTreeRefShadowingWrite(writesCache, changePath) != null) // we have a shadowing write, ignore changes
    return viewCache;
    else {
        let newEventCache, serverNode;
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(changePath)) {
            // TODO: figure out how this plays with "sliding ack windows"
            (0, $25f55f8610499322$export$a7a9523472993e97)(viewCache.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data");
            if (viewCache.serverCache.isFiltered()) {
                // We need to special case this, because we need to only apply writes to complete children, or
                // we might end up raising events for incomplete children. If the server data is filtered deep
                // writes cannot be guaranteed to be complete
                const serverCache = $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(viewCache);
                const completeChildren = serverCache instanceof $4ffb76f3de34d3d1$var$ChildrenNode ? serverCache : $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
                const completeEventChildren = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
                newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
            } else {
                const completeNode = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventCache(writesCache, $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(viewCache));
                newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
            }
        } else {
            const childKey = $4ffb76f3de34d3d1$var$pathGetFront(changePath);
            if (childKey === ".priority") {
                (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
                const oldEventNode = oldEventSnap.getNode();
                serverNode = viewCache.serverCache.getNode();
                // we might have overwrites for this priority
                const updatedPriority = $4ffb76f3de34d3d1$var$writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
                if (updatedPriority != null) newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
                else // priority didn't change, keep old node
                newEventCache = oldEventSnap.getNode();
            } else {
                const childChangePath = $4ffb76f3de34d3d1$var$pathPopFront(changePath);
                // update child
                let newEventChild;
                if (oldEventSnap.isCompleteForChild(childKey)) {
                    serverNode = viewCache.serverCache.getNode();
                    const eventChildUpdate = $4ffb76f3de34d3d1$var$writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
                    if (eventChildUpdate != null) newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
                    else // Nothing changed, just keep the old child
                    newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
                } else newEventChild = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
                if (newEventChild != null) newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
                else // no complete child available or no change
                newEventCache = oldEventSnap.getNode();
            }
        }
        return $4ffb76f3de34d3d1$var$viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || $4ffb76f3de34d3d1$var$pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
    }
}
function $4ffb76f3de34d3d1$var$viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
    const oldServerSnap = oldViewCache.serverCache;
    let newServerCache;
    const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(changePath)) newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
    else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
        // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
        const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
        newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
    } else {
        const childKey = $4ffb76f3de34d3d1$var$pathGetFront(changePath);
        if (!oldServerSnap.isCompleteForPath(changePath) && $4ffb76f3de34d3d1$var$pathGetLength(changePath) > 1) // We don't update incomplete nodes with updates intended for other listeners
        return oldViewCache;
        const childChangePath = $4ffb76f3de34d3d1$var$pathPopFront(changePath);
        const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
        const newChildNode = childNode.updateChild(childChangePath, changedSnap);
        if (childKey === ".priority") newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
        else newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, $4ffb76f3de34d3d1$var$NO_COMPLETE_CHILD_SOURCE, null);
    }
    const newViewCache = $4ffb76f3de34d3d1$var$viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || $4ffb76f3de34d3d1$var$pathIsEmpty(changePath), serverFilter.filtersNodes());
    const source = new $4ffb76f3de34d3d1$var$WriteTreeCompleteChildSource(writesCache, newViewCache, completeCache);
    return $4ffb76f3de34d3d1$var$viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache, changePath, writesCache, source, accumulator);
}
function $4ffb76f3de34d3d1$var$viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
    const oldEventSnap = oldViewCache.eventCache;
    let newViewCache, newEventCache;
    const source = new $4ffb76f3de34d3d1$var$WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(changePath)) {
        newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
        newViewCache = $4ffb76f3de34d3d1$var$viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
    } else {
        const childKey = $4ffb76f3de34d3d1$var$pathGetFront(changePath);
        if (childKey === ".priority") {
            newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
            newViewCache = $4ffb76f3de34d3d1$var$viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
        } else {
            const childChangePath = $4ffb76f3de34d3d1$var$pathPopFront(changePath);
            const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
            let newChild;
            if ($4ffb76f3de34d3d1$var$pathIsEmpty(childChangePath)) // Child overwrite, we can replace the child
            newChild = changedSnap;
            else {
                const childNode = source.getCompleteChild(childKey);
                if (childNode != null) {
                    if ($4ffb76f3de34d3d1$var$pathGetBack(childChangePath) === ".priority" && childNode.getChild($4ffb76f3de34d3d1$var$pathParent(childChangePath)).isEmpty()) // This is a priority update on an empty node. If this node exists on the server, the
                    // server will send down the priority in the update, so ignore for now
                    newChild = childNode;
                    else newChild = childNode.updateChild(childChangePath, changedSnap);
                } else // There is no complete child node available
                newChild = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
            }
            if (!oldChild.equals(newChild)) {
                const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
                newViewCache = $4ffb76f3de34d3d1$var$viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
            } else newViewCache = oldViewCache;
        }
    }
    return newViewCache;
}
function $4ffb76f3de34d3d1$var$viewProcessorCacheHasChild(viewCache, childKey) {
    return viewCache.eventCache.isCompleteForChild(childKey);
}
function $4ffb76f3de34d3d1$var$viewProcessorApplyUserMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
    // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.
    let curViewCache = viewCache;
    changedChildren.foreach((relativePath, childNode)=>{
        const writePath = $4ffb76f3de34d3d1$var$pathChild(path, relativePath);
        if ($4ffb76f3de34d3d1$var$viewProcessorCacheHasChild(viewCache, $4ffb76f3de34d3d1$var$pathGetFront(writePath))) curViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    });
    changedChildren.foreach((relativePath, childNode)=>{
        const writePath = $4ffb76f3de34d3d1$var$pathChild(path, relativePath);
        if (!$4ffb76f3de34d3d1$var$viewProcessorCacheHasChild(viewCache, $4ffb76f3de34d3d1$var$pathGetFront(writePath))) curViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    });
    return curViewCache;
}
function $4ffb76f3de34d3d1$var$viewProcessorApplyMerge(viewProcessor, node, merge) {
    merge.foreach((relativePath, childNode)=>{
        node = node.updateChild(relativePath, childNode);
    });
    return node;
}
function $4ffb76f3de34d3d1$var$viewProcessorApplyServerMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
    // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
    // wait for the complete data update coming soon.
    if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) return viewCache;
    // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.
    let curViewCache = viewCache;
    let viewMergeTree;
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(path)) viewMergeTree = changedChildren;
    else viewMergeTree = new $4ffb76f3de34d3d1$var$ImmutableTree(null).setTree(path, changedChildren);
    const serverNode = viewCache.serverCache.getNode();
    viewMergeTree.children.inorderTraversal((childKey, childTree)=>{
        if (serverNode.hasChild(childKey)) {
            const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
            const newChild = $4ffb76f3de34d3d1$var$viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
            curViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new $4ffb76f3de34d3d1$var$Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
        }
    });
    viewMergeTree.children.inorderTraversal((childKey, childMergeTree)=>{
        const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === null;
        if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
            const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
            const newChild = $4ffb76f3de34d3d1$var$viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
            curViewCache = $4ffb76f3de34d3d1$var$viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new $4ffb76f3de34d3d1$var$Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
        }
    });
    return curViewCache;
}
function $4ffb76f3de34d3d1$var$viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
    if ($4ffb76f3de34d3d1$var$writeTreeRefShadowingWrite(writesCache, ackPath) != null) return viewCache;
    // Only filter server node if it is currently filtered
    const filterServerNode = viewCache.serverCache.isFiltered();
    // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
    // now that it won't be shadowed.
    const serverCache = viewCache.serverCache;
    if (affectedTree.value != null) {
        // This is an overwrite.
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) return $4ffb76f3de34d3d1$var$viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
        else if ($4ffb76f3de34d3d1$var$pathIsEmpty(ackPath)) {
            // This is a goofy edge case where we are acking data at this location but don't have full data.  We
            // should just re-apply whatever we have in our cache as a merge.
            let changedChildren = new $4ffb76f3de34d3d1$var$ImmutableTree(null);
            serverCache.getNode().forEachChild($4ffb76f3de34d3d1$var$KEY_INDEX, (name, node)=>{
                changedChildren = changedChildren.set(new $4ffb76f3de34d3d1$var$Path(name), node);
            });
            return $4ffb76f3de34d3d1$var$viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
        } else return viewCache;
    } else {
        // This is a merge.
        let changedChildren1 = new $4ffb76f3de34d3d1$var$ImmutableTree(null);
        affectedTree.foreach((mergePath, value)=>{
            const serverCachePath = $4ffb76f3de34d3d1$var$pathChild(ackPath, mergePath);
            if (serverCache.isCompleteForPath(serverCachePath)) changedChildren1 = changedChildren1.set(mergePath, serverCache.getNode().getChild(serverCachePath));
        });
        return $4ffb76f3de34d3d1$var$viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren1, writesCache, completeCache, filterServerNode, accumulator);
    }
}
function $4ffb76f3de34d3d1$var$viewProcessorListenComplete(viewProcessor, viewCache, path, writesCache, accumulator) {
    const oldServerNode = viewCache.serverCache;
    const newViewCache = $4ffb76f3de34d3d1$var$viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || $4ffb76f3de34d3d1$var$pathIsEmpty(path), oldServerNode.isFiltered());
    return $4ffb76f3de34d3d1$var$viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache, path, writesCache, $4ffb76f3de34d3d1$var$NO_COMPLETE_CHILD_SOURCE, accumulator);
}
function $4ffb76f3de34d3d1$var$viewProcessorRevertUserWrite(viewProcessor, viewCache, path, writesCache, completeServerCache, accumulator) {
    let complete;
    if ($4ffb76f3de34d3d1$var$writeTreeRefShadowingWrite(writesCache, path) != null) return viewCache;
    else {
        const source = new $4ffb76f3de34d3d1$var$WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
        const oldEventCache = viewCache.eventCache.getNode();
        let newEventCache;
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(path) || $4ffb76f3de34d3d1$var$pathGetFront(path) === ".priority") {
            let newNode;
            if (viewCache.serverCache.isFullyInitialized()) newNode = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventCache(writesCache, $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(viewCache));
            else {
                const serverChildren = viewCache.serverCache.getNode();
                (0, $25f55f8610499322$export$a7a9523472993e97)(serverChildren instanceof $4ffb76f3de34d3d1$var$ChildrenNode, "serverChildren would be complete if leaf node");
                newNode = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
            }
            newNode;
            newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
        } else {
            const childKey = $4ffb76f3de34d3d1$var$pathGetFront(path);
            let newChild = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
            if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) newChild = oldEventCache.getImmediateChild(childKey);
            if (newChild != null) newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, $4ffb76f3de34d3d1$var$pathPopFront(path), source, accumulator);
            else if (viewCache.eventCache.getNode().hasChild(childKey)) // No complete child available, delete the existing one, if any
            newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE, $4ffb76f3de34d3d1$var$pathPopFront(path), source, accumulator);
            else newEventCache = oldEventCache;
            if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
                // We might have reverted all child writes. Maybe the old event was a leaf node
                complete = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventCache(writesCache, $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(viewCache));
                if (complete.isLeafNode()) newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
            }
        }
        complete = viewCache.serverCache.isFullyInitialized() || $4ffb76f3de34d3d1$var$writeTreeRefShadowingWrite(writesCache, $4ffb76f3de34d3d1$var$newEmptyPath()) != null;
        return $4ffb76f3de34d3d1$var$viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 */ class $4ffb76f3de34d3d1$var$View {
    constructor(query_, initialViewCache){
        this.query_ = query_;
        this.eventRegistrations_ = [];
        const params = this.query_._queryParams;
        const indexFilter = new $4ffb76f3de34d3d1$var$IndexedFilter(params.getIndex());
        const filter = $4ffb76f3de34d3d1$var$queryParamsGetNodeFilter(params);
        this.processor_ = $4ffb76f3de34d3d1$var$newViewProcessor(filter);
        const initialServerCache = initialViewCache.serverCache;
        const initialEventCache = initialViewCache.eventCache;
        // Don't filter server node with other filter than index, wait for tagged listen
        const serverSnap = indexFilter.updateFullNode($4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
        const eventSnap = filter.updateFullNode($4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
        const newServerCache = new $4ffb76f3de34d3d1$var$CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
        const newEventCache = new $4ffb76f3de34d3d1$var$CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
        this.viewCache_ = $4ffb76f3de34d3d1$var$newViewCache(newEventCache, newServerCache);
        this.eventGenerator_ = new $4ffb76f3de34d3d1$var$EventGenerator(this.query_);
    }
    get query() {
        return this.query_;
    }
}
function $4ffb76f3de34d3d1$var$viewGetServerCache(view) {
    return view.viewCache_.serverCache.getNode();
}
function $4ffb76f3de34d3d1$var$viewGetCompleteNode(view) {
    return $4ffb76f3de34d3d1$var$viewCacheGetCompleteEventSnap(view.viewCache_);
}
function $4ffb76f3de34d3d1$var$viewGetCompleteServerCache(view, path) {
    const cache = $4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(view.viewCache_);
    if (cache) {
        // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
        // we need to see if it contains the child we're interested in.
        if (view.query._queryParams.loadsAllData() || !$4ffb76f3de34d3d1$var$pathIsEmpty(path) && !cache.getImmediateChild($4ffb76f3de34d3d1$var$pathGetFront(path)).isEmpty()) return cache.getChild(path);
    }
    return null;
}
function $4ffb76f3de34d3d1$var$viewIsEmpty(view) {
    return view.eventRegistrations_.length === 0;
}
function $4ffb76f3de34d3d1$var$viewAddEventRegistration(view, eventRegistration) {
    view.eventRegistrations_.push(eventRegistration);
}
/**
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */ function $4ffb76f3de34d3d1$var$viewRemoveEventRegistration(view, eventRegistration, cancelError) {
    const cancelEvents = [];
    if (cancelError) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(eventRegistration == null, "A cancel should cancel all event registrations.");
        const path = view.query._path;
        view.eventRegistrations_.forEach((registration)=>{
            const maybeEvent = registration.createCancelEvent(cancelError, path);
            if (maybeEvent) cancelEvents.push(maybeEvent);
        });
    }
    if (eventRegistration) {
        let remaining = [];
        for(let i = 0; i < view.eventRegistrations_.length; ++i){
            const existing = view.eventRegistrations_[i];
            if (!existing.matches(eventRegistration)) remaining.push(existing);
            else if (eventRegistration.hasAnyCallback()) {
                // We're removing just this one
                remaining = remaining.concat(view.eventRegistrations_.slice(i + 1));
                break;
            }
        }
        view.eventRegistrations_ = remaining;
    } else view.eventRegistrations_ = [];
    return cancelEvents;
}
/**
 * Applies the given Operation, updates our cache, and returns the appropriate events.
 */ function $4ffb76f3de34d3d1$var$viewApplyOperation(view, operation, writesCache, completeServerCache) {
    if (operation.type === $4ffb76f3de34d3d1$var$OperationType.MERGE && operation.source.queryId !== null) {
        (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$viewCacheGetCompleteServerSnap(view.viewCache_), "We should always have a full cache before handling merges");
        (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$viewCacheGetCompleteEventSnap(view.viewCache_), "Missing event cache, even though we have a server cache");
    }
    const oldViewCache = view.viewCache_;
    const result = $4ffb76f3de34d3d1$var$viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
    $4ffb76f3de34d3d1$var$viewProcessorAssertIndexed(view.processor_, result.viewCache);
    (0, $25f55f8610499322$export$a7a9523472993e97)(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back");
    view.viewCache_ = result.viewCache;
    return $4ffb76f3de34d3d1$var$viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
}
function $4ffb76f3de34d3d1$var$viewGetInitialEvents(view, registration) {
    const eventSnap = view.viewCache_.eventCache;
    const initialChanges = [];
    if (!eventSnap.getNode().isLeafNode()) {
        const eventNode = eventSnap.getNode();
        eventNode.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (key, childNode)=>{
            initialChanges.push($4ffb76f3de34d3d1$var$changeChildAdded(key, childNode));
        });
    }
    if (eventSnap.isFullyInitialized()) initialChanges.push($4ffb76f3de34d3d1$var$changeValue(eventSnap.getNode()));
    return $4ffb76f3de34d3d1$var$viewGenerateEventsForChanges_(view, initialChanges, eventSnap.getNode(), registration);
}
function $4ffb76f3de34d3d1$var$viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
    const registrations = eventRegistration ? [
        eventRegistration
    ] : view.eventRegistrations_;
    return $4ffb76f3de34d3d1$var$eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$referenceConstructor$1;
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */ class $4ffb76f3de34d3d1$var$SyncPoint {
    constructor(){
        /**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         */ this.views = new Map();
    }
}
function $4ffb76f3de34d3d1$var$syncPointSetReferenceConstructor(val) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(!$4ffb76f3de34d3d1$var$referenceConstructor$1, "__referenceConstructor has already been defined");
    $4ffb76f3de34d3d1$var$referenceConstructor$1 = val;
}
function $4ffb76f3de34d3d1$var$syncPointGetReferenceConstructor() {
    (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$referenceConstructor$1, "Reference.ts has not been loaded");
    return $4ffb76f3de34d3d1$var$referenceConstructor$1;
}
function $4ffb76f3de34d3d1$var$syncPointIsEmpty(syncPoint) {
    return syncPoint.views.size === 0;
}
function $4ffb76f3de34d3d1$var$syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
    const queryId = operation.source.queryId;
    if (queryId !== null) {
        const view = syncPoint.views.get(queryId);
        (0, $25f55f8610499322$export$a7a9523472993e97)(view != null, "SyncTree gave us an op for an invalid query.");
        return $4ffb76f3de34d3d1$var$viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
    } else {
        let events = [];
        for (const view1 of syncPoint.views.values())events = events.concat($4ffb76f3de34d3d1$var$viewApplyOperation(view1, operation, writesCache, optCompleteServerCache));
        return events;
    }
}
/**
 * Get a view for the specified query.
 *
 * @param query - The query to return a view for
 * @param writesCache
 * @param serverCache
 * @param serverCacheComplete
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete) {
    const queryId = query._queryIdentifier;
    const view = syncPoint.views.get(queryId);
    if (!view) {
        // TODO: make writesCache take flag for complete server node
        let eventCache = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventCache(writesCache, serverCacheComplete ? serverCache : null);
        let eventCacheComplete = false;
        if (eventCache) eventCacheComplete = true;
        else if (serverCache instanceof $4ffb76f3de34d3d1$var$ChildrenNode) {
            eventCache = $4ffb76f3de34d3d1$var$writeTreeRefCalcCompleteEventChildren(writesCache, serverCache);
            eventCacheComplete = false;
        } else {
            eventCache = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
            eventCacheComplete = false;
        }
        const viewCache = $4ffb76f3de34d3d1$var$newViewCache(new $4ffb76f3de34d3d1$var$CacheNode(eventCache, eventCacheComplete, false), new $4ffb76f3de34d3d1$var$CacheNode(serverCache, serverCacheComplete, false));
        return new $4ffb76f3de34d3d1$var$View(query, viewCache);
    }
    return view;
}
/**
 * Add an event callback for the specified query.
 *
 * @param query
 * @param eventRegistration
 * @param writesCache
 * @param serverCache - Complete server cache, if we have it.
 * @param serverCacheComplete
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
    const view = $4ffb76f3de34d3d1$var$syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete);
    if (!syncPoint.views.has(query._queryIdentifier)) syncPoint.views.set(query._queryIdentifier, view);
    // This is guaranteed to exist now, we just created anything that was missing
    $4ffb76f3de34d3d1$var$viewAddEventRegistration(view, eventRegistration);
    return $4ffb76f3de34d3d1$var$viewGetInitialEvents(view, eventRegistration);
}
/**
 * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
 *
 * If query is the default query, we'll check all views for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
 *
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns removed queries and any cancel events
 */ function $4ffb76f3de34d3d1$var$syncPointRemoveEventRegistration(syncPoint, query, eventRegistration, cancelError) {
    const queryId = query._queryIdentifier;
    const removed = [];
    let cancelEvents = [];
    const hadCompleteView = $4ffb76f3de34d3d1$var$syncPointHasCompleteView(syncPoint);
    if (queryId === "default") // When you do ref.off(...), we search all views for the registration to remove.
    for (const [viewQueryId, view] of syncPoint.views.entries()){
        cancelEvents = cancelEvents.concat($4ffb76f3de34d3d1$var$viewRemoveEventRegistration(view, eventRegistration, cancelError));
        if ($4ffb76f3de34d3d1$var$viewIsEmpty(view)) {
            syncPoint.views.delete(viewQueryId);
            // We'll deal with complete views later.
            if (!view.query._queryParams.loadsAllData()) removed.push(view.query);
        }
    }
    else {
        // remove the callback from the specific view.
        const view1 = syncPoint.views.get(queryId);
        if (view1) {
            cancelEvents = cancelEvents.concat($4ffb76f3de34d3d1$var$viewRemoveEventRegistration(view1, eventRegistration, cancelError));
            if ($4ffb76f3de34d3d1$var$viewIsEmpty(view1)) {
                syncPoint.views.delete(queryId);
                // We'll deal with complete views later.
                if (!view1.query._queryParams.loadsAllData()) removed.push(view1.query);
            }
        }
    }
    if (hadCompleteView && !$4ffb76f3de34d3d1$var$syncPointHasCompleteView(syncPoint)) // We removed our last complete view.
    removed.push(new ($4ffb76f3de34d3d1$var$syncPointGetReferenceConstructor())(query._repo, query._path));
    return {
        removed: removed,
        events: cancelEvents
    };
}
function $4ffb76f3de34d3d1$var$syncPointGetQueryViews(syncPoint) {
    const result = [];
    for (const view of syncPoint.views.values())if (!view.query._queryParams.loadsAllData()) result.push(view);
    return result;
}
/**
 * @param path - The path to the desired complete snapshot
 * @returns A complete cache, if it exists
 */ function $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(syncPoint, path) {
    let serverCache = null;
    for (const view of syncPoint.views.values())serverCache = serverCache || $4ffb76f3de34d3d1$var$viewGetCompleteServerCache(view, path);
    return serverCache;
}
function $4ffb76f3de34d3d1$var$syncPointViewForQuery(syncPoint, query) {
    const params = query._queryParams;
    if (params.loadsAllData()) return $4ffb76f3de34d3d1$var$syncPointGetCompleteView(syncPoint);
    else {
        const queryId = query._queryIdentifier;
        return syncPoint.views.get(queryId);
    }
}
function $4ffb76f3de34d3d1$var$syncPointViewExistsForQuery(syncPoint, query) {
    return $4ffb76f3de34d3d1$var$syncPointViewForQuery(syncPoint, query) != null;
}
function $4ffb76f3de34d3d1$var$syncPointHasCompleteView(syncPoint) {
    return $4ffb76f3de34d3d1$var$syncPointGetCompleteView(syncPoint) != null;
}
function $4ffb76f3de34d3d1$var$syncPointGetCompleteView(syncPoint) {
    for (const view of syncPoint.views.values()){
        if (view.query._queryParams.loadsAllData()) return view;
    }
    return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $4ffb76f3de34d3d1$var$referenceConstructor;
function $4ffb76f3de34d3d1$var$syncTreeSetReferenceConstructor(val) {
    (0, $25f55f8610499322$export$a7a9523472993e97)(!$4ffb76f3de34d3d1$var$referenceConstructor, "__referenceConstructor has already been defined");
    $4ffb76f3de34d3d1$var$referenceConstructor = val;
}
function $4ffb76f3de34d3d1$var$syncTreeGetReferenceConstructor() {
    (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$referenceConstructor, "Reference.ts has not been loaded");
    return $4ffb76f3de34d3d1$var$referenceConstructor;
}
/**
 * Static tracker for next query tag.
 */ let $4ffb76f3de34d3d1$var$syncTreeNextQueryTag_ = 1;
/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */ class $4ffb76f3de34d3d1$var$SyncTree {
    /**
     * @param listenProvider_ - Used by SyncTree to start / stop listening
     *   to server data.
     */ constructor(listenProvider_){
        this.listenProvider_ = listenProvider_;
        /**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */ this.syncPointTree_ = new $4ffb76f3de34d3d1$var$ImmutableTree(null);
        /**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */ this.pendingWriteTree_ = $4ffb76f3de34d3d1$var$newWriteTree();
        this.tagToQueryMap = new Map();
        this.queryToTagMap = new Map();
    }
}
/**
 * Apply the data changes for a user-generated set() or transaction() call.
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyUserOverwrite(syncTree, path, newData, writeId, visible) {
    // Record pending write.
    $4ffb76f3de34d3d1$var$writeTreeAddOverwrite(syncTree.pendingWriteTree_, path, newData, writeId, visible);
    if (!visible) return [];
    else return $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, new $4ffb76f3de34d3d1$var$Overwrite($4ffb76f3de34d3d1$var$newOperationSourceUser(), path, newData));
}
/**
 * Apply the data from a user-generated update() call
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyUserMerge(syncTree, path, changedChildren, writeId) {
    // Record pending merge.
    $4ffb76f3de34d3d1$var$writeTreeAddMerge(syncTree.pendingWriteTree_, path, changedChildren, writeId);
    const changeTree = $4ffb76f3de34d3d1$var$ImmutableTree.fromObject(changedChildren);
    return $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, new $4ffb76f3de34d3d1$var$Merge($4ffb76f3de34d3d1$var$newOperationSourceUser(), path, changeTree));
}
/**
 * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
 *
 * @param revert - True if the given write failed and needs to be reverted
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeAckUserWrite(syncTree, writeId, revert = false) {
    const write = $4ffb76f3de34d3d1$var$writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
    const needToReevaluate = $4ffb76f3de34d3d1$var$writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
    if (!needToReevaluate) return [];
    else {
        let affectedTree = new $4ffb76f3de34d3d1$var$ImmutableTree(null);
        if (write.snap != null) // overwrite
        affectedTree = affectedTree.set($4ffb76f3de34d3d1$var$newEmptyPath(), true);
        else $4ffb76f3de34d3d1$var$each(write.children, (pathString)=>{
            affectedTree = affectedTree.set(new $4ffb76f3de34d3d1$var$Path(pathString), true);
        });
        return $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, new $4ffb76f3de34d3d1$var$AckUserWrite(write.path, affectedTree, revert));
    }
}
/**
 * Apply new server data for the specified path..
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyServerOverwrite(syncTree, path, newData) {
    return $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, new $4ffb76f3de34d3d1$var$Overwrite($4ffb76f3de34d3d1$var$newOperationSourceServer(), path, newData));
}
/**
 * Apply new server data to be merged in at the specified path.
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyServerMerge(syncTree, path, changedChildren) {
    const changeTree = $4ffb76f3de34d3d1$var$ImmutableTree.fromObject(changedChildren);
    return $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, new $4ffb76f3de34d3d1$var$Merge($4ffb76f3de34d3d1$var$newOperationSourceServer(), path, changeTree));
}
/**
 * Apply a listen complete for a query
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyListenComplete(syncTree, path) {
    return $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, new $4ffb76f3de34d3d1$var$ListenComplete($4ffb76f3de34d3d1$var$newOperationSourceServer(), path));
}
/**
 * Apply a listen complete for a tagged query
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyTaggedListenComplete(syncTree, path, tag) {
    const queryKey = $4ffb76f3de34d3d1$var$syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
        const r = $4ffb76f3de34d3d1$var$syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(queryPath, path);
        const op = new $4ffb76f3de34d3d1$var$ListenComplete($4ffb76f3de34d3d1$var$newOperationSourceServerTaggedQuery(queryId), relativePath);
        return $4ffb76f3de34d3d1$var$syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // We've already removed the query. No big deal, ignore the update
    return [];
}
/**
 * Remove event callback(s).
 *
 * If query is the default query, we'll check all queries for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
 *
 * @param eventRegistration - If null, all callbacks are removed.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @param skipListenerDedup - When performing a `get()`, we don't add any new listeners, so no
 *  deduping needs to take place. This flag allows toggling of that behavior
 * @returns Cancel events, if cancelError was provided.
 */ function $4ffb76f3de34d3d1$var$syncTreeRemoveEventRegistration(syncTree, query, eventRegistration, cancelError, skipListenerDedup = false) {
    // Find the syncPoint first. Then deal with whether or not it has matching listeners
    const path = query._path;
    const maybeSyncPoint = syncTree.syncPointTree_.get(path);
    let cancelEvents = [];
    // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
    // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
    // not loadsAllData().
    if (maybeSyncPoint && (query._queryIdentifier === "default" || $4ffb76f3de34d3d1$var$syncPointViewExistsForQuery(maybeSyncPoint, query))) {
        const removedAndEvents = $4ffb76f3de34d3d1$var$syncPointRemoveEventRegistration(maybeSyncPoint, query, eventRegistration, cancelError);
        if ($4ffb76f3de34d3d1$var$syncPointIsEmpty(maybeSyncPoint)) syncTree.syncPointTree_ = syncTree.syncPointTree_.remove(path);
        const removed = removedAndEvents.removed;
        cancelEvents = removedAndEvents.events;
        if (!skipListenerDedup) {
            /**
             * We may have just removed one of many listeners and can short-circuit this whole process
             * We may also not have removed a default listener, in which case all of the descendant listeners should already be
             * properly set up.
             */ // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
            // queryId === 'default'
            const removingDefault = -1 !== removed.findIndex((query)=>{
                return query._queryParams.loadsAllData();
            });
            const covered = syncTree.syncPointTree_.findOnPath(path, (relativePath, parentSyncPoint)=>$4ffb76f3de34d3d1$var$syncPointHasCompleteView(parentSyncPoint));
            if (removingDefault && !covered) {
                const subtree = syncTree.syncPointTree_.subtree(path);
                // There are potentially child listeners. Determine what if any listens we need to send before executing the
                // removal
                if (!subtree.isEmpty()) {
                    // We need to fold over our subtree and collect the listeners to send
                    const newViews = $4ffb76f3de34d3d1$var$syncTreeCollectDistinctViewsForSubTree_(subtree);
                    // Ok, we've collected all the listens we need. Set them up.
                    for(let i = 0; i < newViews.length; ++i){
                        const view = newViews[i], newQuery = view.query;
                        const listener = $4ffb76f3de34d3d1$var$syncTreeCreateListenerForView_(syncTree, view);
                        syncTree.listenProvider_.startListening($4ffb76f3de34d3d1$var$syncTreeQueryForListening_(newQuery), $4ffb76f3de34d3d1$var$syncTreeTagForQuery(syncTree, newQuery), listener.hashFn, listener.onComplete);
                    }
                }
            // Otherwise there's nothing below us, so nothing we need to start listening on
            }
            // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
            // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
            // Also, note that if we have a cancelError, it's already been removed at the provider level.
            if (!covered && removed.length > 0 && !cancelError) {
                // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
                // default. Otherwise, we need to iterate through and cancel each individual query
                if (removingDefault) {
                    // We don't tag default listeners
                    const defaultTag = null;
                    syncTree.listenProvider_.stopListening($4ffb76f3de34d3d1$var$syncTreeQueryForListening_(query), defaultTag);
                } else removed.forEach((queryToRemove)=>{
                    const tagToRemove = syncTree.queryToTagMap.get($4ffb76f3de34d3d1$var$syncTreeMakeQueryKey_(queryToRemove));
                    syncTree.listenProvider_.stopListening($4ffb76f3de34d3d1$var$syncTreeQueryForListening_(queryToRemove), tagToRemove);
                });
            }
        }
        // Now, clear all of the tags we're tracking for the removed listens
        $4ffb76f3de34d3d1$var$syncTreeRemoveTags_(syncTree, removed);
    }
    return cancelEvents;
}
/**
 * Apply new server data for the specified tagged query.
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyTaggedQueryOverwrite(syncTree, path, snap, tag) {
    const queryKey = $4ffb76f3de34d3d1$var$syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey != null) {
        const r = $4ffb76f3de34d3d1$var$syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(queryPath, path);
        const op = new $4ffb76f3de34d3d1$var$Overwrite($4ffb76f3de34d3d1$var$newOperationSourceServerTaggedQuery(queryId), relativePath, snap);
        return $4ffb76f3de34d3d1$var$syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // Query must have been removed already
    return [];
}
/**
 * Apply server data to be merged in for the specified tagged query.
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyTaggedQueryMerge(syncTree, path, changedChildren, tag) {
    const queryKey = $4ffb76f3de34d3d1$var$syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
        const r = $4ffb76f3de34d3d1$var$syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(queryPath, path);
        const changeTree = $4ffb76f3de34d3d1$var$ImmutableTree.fromObject(changedChildren);
        const op = new $4ffb76f3de34d3d1$var$Merge($4ffb76f3de34d3d1$var$newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
        return $4ffb76f3de34d3d1$var$syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // We've already removed the query. No big deal, ignore the update
    return [];
}
/**
 * Add an event callback for the specified query.
 *
 * @returns Events to raise.
 */ function $4ffb76f3de34d3d1$var$syncTreeAddEventRegistration(syncTree, query, eventRegistration, skipSetupListener = false) {
    const path = query._path;
    let serverCache = null;
    let foundAncestorDefaultView = false;
    // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.
    syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp)=>{
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(pathToSyncPoint, path);
        serverCache = serverCache || $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(sp, relativePath);
        foundAncestorDefaultView = foundAncestorDefaultView || $4ffb76f3de34d3d1$var$syncPointHasCompleteView(sp);
    });
    let syncPoint = syncTree.syncPointTree_.get(path);
    if (!syncPoint) {
        syncPoint = new $4ffb76f3de34d3d1$var$SyncPoint();
        syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
    } else {
        foundAncestorDefaultView = foundAncestorDefaultView || $4ffb76f3de34d3d1$var$syncPointHasCompleteView(syncPoint);
        serverCache = serverCache || $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(syncPoint, $4ffb76f3de34d3d1$var$newEmptyPath());
    }
    let serverCacheComplete;
    if (serverCache != null) serverCacheComplete = true;
    else {
        serverCacheComplete = false;
        serverCache = $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
        const subtree = syncTree.syncPointTree_.subtree(path);
        subtree.foreachChild((childName, childSyncPoint)=>{
            const completeCache = $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(childSyncPoint, $4ffb76f3de34d3d1$var$newEmptyPath());
            if (completeCache) serverCache = serverCache.updateImmediateChild(childName, completeCache);
        });
    }
    const viewAlreadyExists = $4ffb76f3de34d3d1$var$syncPointViewExistsForQuery(syncPoint, query);
    if (!viewAlreadyExists && !query._queryParams.loadsAllData()) {
        // We need to track a tag for this query
        const queryKey = $4ffb76f3de34d3d1$var$syncTreeMakeQueryKey_(query);
        (0, $25f55f8610499322$export$a7a9523472993e97)(!syncTree.queryToTagMap.has(queryKey), "View does not exist, but we have a tag");
        const tag = $4ffb76f3de34d3d1$var$syncTreeGetNextQueryTag_();
        syncTree.queryToTagMap.set(queryKey, tag);
        syncTree.tagToQueryMap.set(tag, queryKey);
    }
    const writesCache = $4ffb76f3de34d3d1$var$writeTreeChildWrites(syncTree.pendingWriteTree_, path);
    let events = $4ffb76f3de34d3d1$var$syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete);
    if (!viewAlreadyExists && !foundAncestorDefaultView && !skipSetupListener) {
        const view = $4ffb76f3de34d3d1$var$syncPointViewForQuery(syncPoint, query);
        events = events.concat($4ffb76f3de34d3d1$var$syncTreeSetupListener_(syncTree, query, view));
    }
    return events;
}
/**
 * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
 * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
 * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
 *     <incremented total> as the write is applied locally and then acknowledged at the server.
 *
 * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
 *
 * @param path - The path to the data we want
 * @param writeIdsToExclude - A specific set to be excluded
 */ function $4ffb76f3de34d3d1$var$syncTreeCalcCompleteEventCache(syncTree, path, writeIdsToExclude) {
    const includeHiddenSets = true;
    const writeTree = syncTree.pendingWriteTree_;
    const serverCache = syncTree.syncPointTree_.findOnPath(path, (pathSoFar, syncPoint)=>{
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(pathSoFar, path);
        const serverCache = $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(syncPoint, relativePath);
        if (serverCache) return serverCache;
    });
    return $4ffb76f3de34d3d1$var$writeTreeCalcCompleteEventCache(writeTree, path, serverCache, writeIdsToExclude, includeHiddenSets);
}
function $4ffb76f3de34d3d1$var$syncTreeGetServerValue(syncTree, query) {
    const path = query._path;
    let serverCache = null;
    // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.
    syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp)=>{
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(pathToSyncPoint, path);
        serverCache = serverCache || $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(sp, relativePath);
    });
    let syncPoint = syncTree.syncPointTree_.get(path);
    if (!syncPoint) {
        syncPoint = new $4ffb76f3de34d3d1$var$SyncPoint();
        syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
    } else serverCache = serverCache || $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(syncPoint, $4ffb76f3de34d3d1$var$newEmptyPath());
    const serverCacheComplete = serverCache != null;
    const serverCacheNode = serverCacheComplete ? new $4ffb76f3de34d3d1$var$CacheNode(serverCache, true, false) : null;
    const writesCache = $4ffb76f3de34d3d1$var$writeTreeChildWrites(syncTree.pendingWriteTree_, query._path);
    const view = $4ffb76f3de34d3d1$var$syncPointGetView(syncPoint, query, writesCache, serverCacheComplete ? serverCacheNode.getNode() : $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE, serverCacheComplete);
    return $4ffb76f3de34d3d1$var$viewGetCompleteNode(view);
}
/**
 * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
 *
 * NOTES:
 * - Descendant SyncPoints will be visited first (since we raise events depth-first).
 *
 * - We call applyOperation() on each SyncPoint passing three things:
 *   1. A version of the Operation that has been made relative to the SyncPoint location.
 *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
 *   3. A snapshot Node with cached server data, if we have it.
 *
 * - We concatenate all of the events returned by each SyncPoint and return the result.
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
    return $4ffb76f3de34d3d1$var$syncTreeApplyOperationHelper_(operation, syncTree.syncPointTree_, /*serverCache=*/ null, $4ffb76f3de34d3d1$var$writeTreeChildWrites(syncTree.pendingWriteTree_, $4ffb76f3de34d3d1$var$newEmptyPath()));
}
/**
 * Recursive helper for applyOperationToSyncPoints_
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
    if ($4ffb76f3de34d3d1$var$pathIsEmpty(operation.path)) return $4ffb76f3de34d3d1$var$syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
    else {
        const syncPoint = syncPointTree.get($4ffb76f3de34d3d1$var$newEmptyPath());
        // If we don't have cached server data, see if we can get it from this SyncPoint.
        if (serverCache == null && syncPoint != null) serverCache = $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(syncPoint, $4ffb76f3de34d3d1$var$newEmptyPath());
        let events = [];
        const childName = $4ffb76f3de34d3d1$var$pathGetFront(operation.path);
        const childOperation = operation.operationForChild(childName);
        const childTree = syncPointTree.children.get(childName);
        if (childTree && childOperation) {
            const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            const childWritesCache = $4ffb76f3de34d3d1$var$writeTreeRefChild(writesCache, childName);
            events = events.concat($4ffb76f3de34d3d1$var$syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
        }
        if (syncPoint) events = events.concat($4ffb76f3de34d3d1$var$syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
        return events;
    }
}
/**
 * Recursive helper for applyOperationToSyncPoints_
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
    const syncPoint = syncPointTree.get($4ffb76f3de34d3d1$var$newEmptyPath());
    // If we don't have cached server data, see if we can get it from this SyncPoint.
    if (serverCache == null && syncPoint != null) serverCache = $4ffb76f3de34d3d1$var$syncPointGetCompleteServerCache(syncPoint, $4ffb76f3de34d3d1$var$newEmptyPath());
    let events = [];
    syncPointTree.children.inorderTraversal((childName, childTree)=>{
        const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
        const childWritesCache = $4ffb76f3de34d3d1$var$writeTreeRefChild(writesCache, childName);
        const childOperation = operation.operationForChild(childName);
        if (childOperation) events = events.concat($4ffb76f3de34d3d1$var$syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
    });
    if (syncPoint) events = events.concat($4ffb76f3de34d3d1$var$syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    return events;
}
function $4ffb76f3de34d3d1$var$syncTreeCreateListenerForView_(syncTree, view) {
    const query = view.query;
    const tag = $4ffb76f3de34d3d1$var$syncTreeTagForQuery(syncTree, query);
    return {
        hashFn: ()=>{
            const cache = $4ffb76f3de34d3d1$var$viewGetServerCache(view) || $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
            return cache.hash();
        },
        onComplete: (status)=>{
            if (status === "ok") {
                if (tag) return $4ffb76f3de34d3d1$var$syncTreeApplyTaggedListenComplete(syncTree, query._path, tag);
                else return $4ffb76f3de34d3d1$var$syncTreeApplyListenComplete(syncTree, query._path);
            } else {
                // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
                // Note that this may need to be scoped to just this listener if we change permissions on filtered children
                const error = $4ffb76f3de34d3d1$var$errorForServerCode(status, query);
                return $4ffb76f3de34d3d1$var$syncTreeRemoveEventRegistration(syncTree, query, /*eventRegistration*/ null, error);
            }
        }
    };
}
/**
 * Return the tag associated with the given query.
 */ function $4ffb76f3de34d3d1$var$syncTreeTagForQuery(syncTree, query) {
    const queryKey = $4ffb76f3de34d3d1$var$syncTreeMakeQueryKey_(query);
    return syncTree.queryToTagMap.get(queryKey);
}
/**
 * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
 */ function $4ffb76f3de34d3d1$var$syncTreeMakeQueryKey_(query) {
    return query._path.toString() + "$" + query._queryIdentifier;
}
/**
 * Return the query associated with the given tag, if we have one
 */ function $4ffb76f3de34d3d1$var$syncTreeQueryKeyForTag_(syncTree, tag) {
    return syncTree.tagToQueryMap.get(tag);
}
/**
 * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
 */ function $4ffb76f3de34d3d1$var$syncTreeParseQueryKey_(queryKey) {
    const splitIndex = queryKey.indexOf("$");
    (0, $25f55f8610499322$export$a7a9523472993e97)(splitIndex !== -1 && splitIndex < queryKey.length - 1, "Bad queryKey.");
    return {
        queryId: queryKey.substr(splitIndex + 1),
        path: new $4ffb76f3de34d3d1$var$Path(queryKey.substr(0, splitIndex))
    };
}
/**
 * A helper method to apply tagged operations
 */ function $4ffb76f3de34d3d1$var$syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
    const syncPoint = syncTree.syncPointTree_.get(queryPath);
    (0, $25f55f8610499322$export$a7a9523472993e97)(syncPoint, "Missing sync point for query tag that we're tracking");
    const writesCache = $4ffb76f3de34d3d1$var$writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
    return $4ffb76f3de34d3d1$var$syncPointApplyOperation(syncPoint, operation, writesCache, null);
}
/**
 * This collapses multiple unfiltered views into a single view, since we only need a single
 * listener for them.
 */ function $4ffb76f3de34d3d1$var$syncTreeCollectDistinctViewsForSubTree_(subtree) {
    return subtree.fold((relativePath, maybeChildSyncPoint, childMap)=>{
        if (maybeChildSyncPoint && $4ffb76f3de34d3d1$var$syncPointHasCompleteView(maybeChildSyncPoint)) {
            const completeView = $4ffb76f3de34d3d1$var$syncPointGetCompleteView(maybeChildSyncPoint);
            return [
                completeView
            ];
        } else {
            // No complete view here, flatten any deeper listens into an array
            let views = [];
            if (maybeChildSyncPoint) views = $4ffb76f3de34d3d1$var$syncPointGetQueryViews(maybeChildSyncPoint);
            $4ffb76f3de34d3d1$var$each(childMap, (_key, childViews)=>{
                views = views.concat(childViews);
            });
            return views;
        }
    });
}
/**
 * Normalizes a query to a query we send the server for listening
 *
 * @returns The normalized query
 */ function $4ffb76f3de34d3d1$var$syncTreeQueryForListening_(query) {
    if (query._queryParams.loadsAllData() && !query._queryParams.isDefault()) // We treat queries that load all data as default queries
    // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
    // from Query
    return new ($4ffb76f3de34d3d1$var$syncTreeGetReferenceConstructor())(query._repo, query._path);
    else return query;
}
function $4ffb76f3de34d3d1$var$syncTreeRemoveTags_(syncTree, queries) {
    for(let j = 0; j < queries.length; ++j){
        const removedQuery = queries[j];
        if (!removedQuery._queryParams.loadsAllData()) {
            // We should have a tag for this
            const removedQueryKey = $4ffb76f3de34d3d1$var$syncTreeMakeQueryKey_(removedQuery);
            const removedQueryTag = syncTree.queryToTagMap.get(removedQueryKey);
            syncTree.queryToTagMap.delete(removedQueryKey);
            syncTree.tagToQueryMap.delete(removedQueryTag);
        }
    }
}
/**
 * Static accessor for query tags.
 */ function $4ffb76f3de34d3d1$var$syncTreeGetNextQueryTag_() {
    return $4ffb76f3de34d3d1$var$syncTreeNextQueryTag_++;
}
/**
 * For a given new listen, manage the de-duplication of outstanding subscriptions.
 *
 * @returns This method can return events to support synchronous data sources
 */ function $4ffb76f3de34d3d1$var$syncTreeSetupListener_(syncTree, query, view) {
    const path = query._path;
    const tag = $4ffb76f3de34d3d1$var$syncTreeTagForQuery(syncTree, query);
    const listener = $4ffb76f3de34d3d1$var$syncTreeCreateListenerForView_(syncTree, view);
    const events = syncTree.listenProvider_.startListening($4ffb76f3de34d3d1$var$syncTreeQueryForListening_(query), tag, listener.hashFn, listener.onComplete);
    const subtree = syncTree.syncPointTree_.subtree(path);
    // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
    // may need to shadow other listens as well.
    if (tag) (0, $25f55f8610499322$export$a7a9523472993e97)(!$4ffb76f3de34d3d1$var$syncPointHasCompleteView(subtree.value), "If we're adding a query, it shouldn't be shadowed");
    else {
        // Shadow everything at or below this location, this is a default listener.
        const queriesToStop = subtree.fold((relativePath, maybeChildSyncPoint, childMap)=>{
            if (!$4ffb76f3de34d3d1$var$pathIsEmpty(relativePath) && maybeChildSyncPoint && $4ffb76f3de34d3d1$var$syncPointHasCompleteView(maybeChildSyncPoint)) return [
                $4ffb76f3de34d3d1$var$syncPointGetCompleteView(maybeChildSyncPoint).query
            ];
            else {
                // No default listener here, flatten any deeper queries into an array
                let queries = [];
                if (maybeChildSyncPoint) queries = queries.concat($4ffb76f3de34d3d1$var$syncPointGetQueryViews(maybeChildSyncPoint).map((view)=>view.query));
                $4ffb76f3de34d3d1$var$each(childMap, (_key, childQueries)=>{
                    queries = queries.concat(childQueries);
                });
                return queries;
            }
        });
        for(let i = 0; i < queriesToStop.length; ++i){
            const queryToStop = queriesToStop[i];
            syncTree.listenProvider_.stopListening($4ffb76f3de34d3d1$var$syncTreeQueryForListening_(queryToStop), $4ffb76f3de34d3d1$var$syncTreeTagForQuery(syncTree, queryToStop));
        }
    }
    return events;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $4ffb76f3de34d3d1$var$ExistingValueProvider {
    constructor(node_){
        this.node_ = node_;
    }
    getImmediateChild(childName) {
        const child = this.node_.getImmediateChild(childName);
        return new $4ffb76f3de34d3d1$var$ExistingValueProvider(child);
    }
    node() {
        return this.node_;
    }
}
class $4ffb76f3de34d3d1$var$DeferredValueProvider {
    constructor(syncTree, path){
        this.syncTree_ = syncTree;
        this.path_ = path;
    }
    getImmediateChild(childName) {
        const childPath = $4ffb76f3de34d3d1$var$pathChild(this.path_, childName);
        return new $4ffb76f3de34d3d1$var$DeferredValueProvider(this.syncTree_, childPath);
    }
    node() {
        return $4ffb76f3de34d3d1$var$syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
    }
}
/**
 * Generate placeholders for deferred values.
 */ const $4ffb76f3de34d3d1$var$generateWithValues = function(values) {
    values = values || {};
    values["timestamp"] = values["timestamp"] || new Date().getTime();
    return values;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */ const $4ffb76f3de34d3d1$var$resolveDeferredLeafValue = function(value, existingVal, serverValues) {
    if (!value || typeof value !== "object") return value;
    (0, $25f55f8610499322$export$a7a9523472993e97)(".sv" in value, "Unexpected leaf node or priority contents");
    if (typeof value[".sv"] === "string") return $4ffb76f3de34d3d1$var$resolveScalarDeferredValue(value[".sv"], existingVal, serverValues);
    else if (typeof value[".sv"] === "object") return $4ffb76f3de34d3d1$var$resolveComplexDeferredValue(value[".sv"], existingVal);
    else (0, $25f55f8610499322$export$a7a9523472993e97)(false, "Unexpected server value: " + JSON.stringify(value, null, 2));
};
const $4ffb76f3de34d3d1$var$resolveScalarDeferredValue = function(op, existing, serverValues) {
    switch(op){
        case "timestamp":
            return serverValues["timestamp"];
        default:
            (0, $25f55f8610499322$export$a7a9523472993e97)(false, "Unexpected server value: " + op);
    }
};
const $4ffb76f3de34d3d1$var$resolveComplexDeferredValue = function(op, existing, unused) {
    if (!op.hasOwnProperty("increment")) (0, $25f55f8610499322$export$a7a9523472993e97)(false, "Unexpected server value: " + JSON.stringify(op, null, 2));
    const delta = op["increment"];
    if (typeof delta !== "number") (0, $25f55f8610499322$export$a7a9523472993e97)(false, "Unexpected increment value: " + delta);
    const existingNode = existing.node();
    (0, $25f55f8610499322$export$a7a9523472993e97)(existingNode !== null && typeof existingNode !== "undefined", "Expected ChildrenNode.EMPTY_NODE for nulls");
    // Incrementing a non-number sets the value to the incremented amount
    if (!existingNode.isLeafNode()) return delta;
    const leaf = existingNode;
    const existingVal = leaf.getValue();
    if (typeof existingVal !== "number") return delta;
    // No need to do over/underflow arithmetic here because JS only handles floats under the covers
    return existingVal + delta;
};
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param path - path to which write is relative
 * @param node - new data written at path
 * @param syncTree - current data
 */ const $4ffb76f3de34d3d1$var$resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
    return $4ffb76f3de34d3d1$var$resolveDeferredValue(node, new $4ffb76f3de34d3d1$var$DeferredValueProvider(syncTree, path), serverValues);
};
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 */ const $4ffb76f3de34d3d1$var$resolveDeferredValueSnapshot = function(node, existing, serverValues) {
    return $4ffb76f3de34d3d1$var$resolveDeferredValue(node, new $4ffb76f3de34d3d1$var$ExistingValueProvider(existing), serverValues);
};
function $4ffb76f3de34d3d1$var$resolveDeferredValue(node, existingVal, serverValues) {
    const rawPri = node.getPriority().val();
    const priority = $4ffb76f3de34d3d1$var$resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild(".priority"), serverValues);
    let newNode;
    if (node.isLeafNode()) {
        const leafNode = node;
        const value = $4ffb76f3de34d3d1$var$resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
        if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) return new $4ffb76f3de34d3d1$var$LeafNode(value, $4ffb76f3de34d3d1$var$nodeFromJSON(priority));
        else return node;
    } else {
        const childrenNode = node;
        newNode = childrenNode;
        if (priority !== childrenNode.getPriority().val()) newNode = newNode.updatePriority(new $4ffb76f3de34d3d1$var$LeafNode(priority));
        childrenNode.forEachChild($4ffb76f3de34d3d1$var$PRIORITY_INDEX, (childName, childNode)=>{
            const newChildNode = $4ffb76f3de34d3d1$var$resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
            if (newChildNode !== childNode) newNode = newNode.updateImmediateChild(childName, newChildNode);
        });
        return newNode;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */ class $4ffb76f3de34d3d1$var$Tree {
    /**
     * @param name - Optional name of the node.
     * @param parent - Optional parent node.
     * @param node - Optional node to wrap.
     */ constructor(name = "", parent = null, node = {
        children: {},
        childCount: 0
    }){
        this.name = name;
        this.parent = parent;
        this.node = node;
    }
}
/**
 * Returns a sub-Tree for the given path.
 *
 * @param pathObj - Path to look up.
 * @returns Tree for path.
 */ function $4ffb76f3de34d3d1$var$treeSubTree(tree, pathObj) {
    // TODO: Require pathObj to be Path?
    let path = pathObj instanceof $4ffb76f3de34d3d1$var$Path ? pathObj : new $4ffb76f3de34d3d1$var$Path(pathObj);
    let child = tree, next = $4ffb76f3de34d3d1$var$pathGetFront(path);
    while(next !== null){
        const childNode = (0, $25f55f8610499322$export$e51ae4db7b428f67)(child.node.children, next) || {
            children: {},
            childCount: 0
        };
        child = new $4ffb76f3de34d3d1$var$Tree(next, child, childNode);
        path = $4ffb76f3de34d3d1$var$pathPopFront(path);
        next = $4ffb76f3de34d3d1$var$pathGetFront(path);
    }
    return child;
}
/**
 * Returns the data associated with this tree node.
 *
 * @returns The data or null if no data exists.
 */ function $4ffb76f3de34d3d1$var$treeGetValue(tree) {
    return tree.node.value;
}
/**
 * Sets data to this tree node.
 *
 * @param value - Value to set.
 */ function $4ffb76f3de34d3d1$var$treeSetValue(tree, value) {
    tree.node.value = value;
    $4ffb76f3de34d3d1$var$treeUpdateParents(tree);
}
/**
 * @returns Whether the tree has any children.
 */ function $4ffb76f3de34d3d1$var$treeHasChildren(tree) {
    return tree.node.childCount > 0;
}
/**
 * @returns Whethe rthe tree is empty (no value or children).
 */ function $4ffb76f3de34d3d1$var$treeIsEmpty(tree) {
    return $4ffb76f3de34d3d1$var$treeGetValue(tree) === undefined && !$4ffb76f3de34d3d1$var$treeHasChildren(tree);
}
/**
 * Calls action for each child of this tree node.
 *
 * @param action - Action to be called for each child.
 */ function $4ffb76f3de34d3d1$var$treeForEachChild(tree, action) {
    $4ffb76f3de34d3d1$var$each(tree.node.children, (child, childTree)=>{
        action(new $4ffb76f3de34d3d1$var$Tree(child, tree, childTree));
    });
}
/**
 * Does a depth-first traversal of this node's descendants, calling action for each one.
 *
 * @param action - Action to be called for each child.
 * @param includeSelf - Whether to call action on this node as well. Defaults to
 *   false.
 * @param childrenFirst - Whether to call action on children before calling it on
 *   parent.
 */ function $4ffb76f3de34d3d1$var$treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
    if (includeSelf && !childrenFirst) action(tree);
    $4ffb76f3de34d3d1$var$treeForEachChild(tree, (child)=>{
        $4ffb76f3de34d3d1$var$treeForEachDescendant(child, action, true, childrenFirst);
    });
    if (includeSelf && childrenFirst) action(tree);
}
/**
 * Calls action on each ancestor node.
 *
 * @param action - Action to be called on each parent; return
 *   true to abort.
 * @param includeSelf - Whether to call action on this node as well.
 * @returns true if the action callback returned true.
 */ function $4ffb76f3de34d3d1$var$treeForEachAncestor(tree, action, includeSelf) {
    let node = includeSelf ? tree : tree.parent;
    while(node !== null){
        if (action(node)) return true;
        node = node.parent;
    }
    return false;
}
/**
 * @returns The path of this tree node, as a Path.
 */ function $4ffb76f3de34d3d1$var$treeGetPath(tree) {
    return new $4ffb76f3de34d3d1$var$Path(tree.parent === null ? tree.name : $4ffb76f3de34d3d1$var$treeGetPath(tree.parent) + "/" + tree.name);
}
/**
 * Adds or removes this child from its parent based on whether it's empty or not.
 */ function $4ffb76f3de34d3d1$var$treeUpdateParents(tree) {
    if (tree.parent !== null) $4ffb76f3de34d3d1$var$treeUpdateChild(tree.parent, tree.name, tree);
}
/**
 * Adds or removes the passed child to this tree node, depending on whether it's empty.
 *
 * @param childName - The name of the child to update.
 * @param child - The child to update.
 */ function $4ffb76f3de34d3d1$var$treeUpdateChild(tree, childName, child) {
    const childEmpty = $4ffb76f3de34d3d1$var$treeIsEmpty(child);
    const childExists = (0, $25f55f8610499322$export$2344b14b097df817)(tree.node.children, childName);
    if (childEmpty && childExists) {
        delete tree.node.children[childName];
        tree.node.childCount--;
        $4ffb76f3de34d3d1$var$treeUpdateParents(tree);
    } else if (!childEmpty && !childExists) {
        tree.node.children[childName] = child.node;
        tree.node.childCount++;
        $4ffb76f3de34d3d1$var$treeUpdateParents(tree);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * True for invalid Firebase keys
 */ const $4ffb76f3de34d3d1$var$INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 */ const $4ffb76f3de34d3d1$var$INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
/**
 * Maximum number of characters to allow in leaf value
 */ const $4ffb76f3de34d3d1$var$MAX_LEAF_SIZE_ = 10485760;
const $4ffb76f3de34d3d1$var$isValidKey = function(key) {
    return typeof key === "string" && key.length !== 0 && !$4ffb76f3de34d3d1$var$INVALID_KEY_REGEX_.test(key);
};
const $4ffb76f3de34d3d1$var$isValidPathString = function(pathString) {
    return typeof pathString === "string" && pathString.length !== 0 && !$4ffb76f3de34d3d1$var$INVALID_PATH_REGEX_.test(pathString);
};
const $4ffb76f3de34d3d1$var$isValidRootPathString = function(pathString) {
    if (pathString) // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
    return $4ffb76f3de34d3d1$var$isValidPathString(pathString);
};
const $4ffb76f3de34d3d1$var$isValidPriority = function(priority) {
    return priority === null || typeof priority === "string" || typeof priority === "number" && !$4ffb76f3de34d3d1$var$isInvalidJSONNumber(priority) || priority && typeof priority === "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (0, $25f55f8610499322$export$2344b14b097df817)(priority, ".sv");
};
/**
 * Pre-validate a datum passed as an argument to Firebase function.
 */ const $4ffb76f3de34d3d1$var$validateFirebaseDataArg = function(fnName, value, path, optional) {
    if (optional && value === undefined) return;
    $4ffb76f3de34d3d1$var$validateFirebaseData((0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, "value"), value, path);
};
/**
 * Validate a data object client-side before sending to server.
 */ const $4ffb76f3de34d3d1$var$validateFirebaseData = function(errorPrefix, data, path_) {
    const path = path_ instanceof $4ffb76f3de34d3d1$var$Path ? new $4ffb76f3de34d3d1$var$ValidationPath(path_, errorPrefix) : path_;
    if (data === undefined) throw new Error(errorPrefix + "contains undefined " + $4ffb76f3de34d3d1$var$validationPathToErrorString(path));
    if (typeof data === "function") throw new Error(errorPrefix + "contains a function " + $4ffb76f3de34d3d1$var$validationPathToErrorString(path) + " with contents = " + data.toString());
    if ($4ffb76f3de34d3d1$var$isInvalidJSONNumber(data)) throw new Error(errorPrefix + "contains " + data.toString() + " " + $4ffb76f3de34d3d1$var$validationPathToErrorString(path));
    // Check max leaf size, but try to avoid the utf8 conversion if we can.
    if (typeof data === "string" && data.length > $4ffb76f3de34d3d1$var$MAX_LEAF_SIZE_ / 3 && (0, $25f55f8610499322$export$9536dc0a75b20bf9)(data) > $4ffb76f3de34d3d1$var$MAX_LEAF_SIZE_) throw new Error(errorPrefix + "contains a string greater than " + $4ffb76f3de34d3d1$var$MAX_LEAF_SIZE_ + " utf8 bytes " + $4ffb76f3de34d3d1$var$validationPathToErrorString(path) + " ('" + data.substring(0, 50) + "...')");
    // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
    // to save extra walking of large objects.
    if (data && typeof data === "object") {
        let hasDotValue = false;
        let hasActualChild = false;
        $4ffb76f3de34d3d1$var$each(data, (key, value)=>{
            if (key === ".value") hasDotValue = true;
            else if (key !== ".priority" && key !== ".sv") {
                hasActualChild = true;
                if (!$4ffb76f3de34d3d1$var$isValidKey(key)) throw new Error(errorPrefix + " contains an invalid key (" + key + ") " + $4ffb76f3de34d3d1$var$validationPathToErrorString(path) + ".  Keys must be non-empty strings " + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
            $4ffb76f3de34d3d1$var$validationPathPush(path, key);
            $4ffb76f3de34d3d1$var$validateFirebaseData(errorPrefix, value, path);
            $4ffb76f3de34d3d1$var$validationPathPop(path);
        });
        if (hasDotValue && hasActualChild) throw new Error(errorPrefix + ' contains ".value" child ' + $4ffb76f3de34d3d1$var$validationPathToErrorString(path) + " in addition to actual children.");
    }
};
/**
 * Pre-validate paths passed in the firebase function.
 */ const $4ffb76f3de34d3d1$var$validateFirebaseMergePaths = function(errorPrefix, mergePaths) {
    let i, curPath;
    for(i = 0; i < mergePaths.length; i++){
        curPath = mergePaths[i];
        const keys = $4ffb76f3de34d3d1$var$pathSlice(curPath);
        for(let j = 0; j < keys.length; j++){
            if (keys[j] === ".priority" && j === keys.length - 1) ;
            else if (!$4ffb76f3de34d3d1$var$isValidKey(keys[j])) throw new Error(errorPrefix + "contains an invalid key (" + keys[j] + ") in path " + curPath.toString() + ". Keys must be non-empty strings " + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
    }
    // Check that update keys are not descendants of each other.
    // We rely on the property that sorting guarantees that ancestors come
    // right before descendants.
    mergePaths.sort($4ffb76f3de34d3d1$var$pathCompare);
    let prevPath = null;
    for(i = 0; i < mergePaths.length; i++){
        curPath = mergePaths[i];
        if (prevPath !== null && $4ffb76f3de34d3d1$var$pathContains(prevPath, curPath)) throw new Error(errorPrefix + "contains a path " + prevPath.toString() + " that is ancestor of another path " + curPath.toString());
        prevPath = curPath;
    }
};
/**
 * pre-validate an object passed as an argument to firebase function (
 * must be an object - e.g. for firebase.update()).
 */ const $4ffb76f3de34d3d1$var$validateFirebaseMergeDataArg = function(fnName, data, path, optional) {
    if (optional && data === undefined) return;
    const errorPrefix$1 = (0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, "values");
    if (!(data && typeof data === "object") || Array.isArray(data)) throw new Error(errorPrefix$1 + " must be an object containing the children to replace.");
    const mergePaths = [];
    $4ffb76f3de34d3d1$var$each(data, (key, value)=>{
        const curPath = new $4ffb76f3de34d3d1$var$Path(key);
        $4ffb76f3de34d3d1$var$validateFirebaseData(errorPrefix$1, value, $4ffb76f3de34d3d1$var$pathChild(path, curPath));
        if ($4ffb76f3de34d3d1$var$pathGetBack(curPath) === ".priority") {
            if (!$4ffb76f3de34d3d1$var$isValidPriority(value)) throw new Error(errorPrefix$1 + "contains an invalid value for '" + curPath.toString() + "', which must be a valid " + "Firebase priority (a string, finite number, server value, or null).");
        }
        mergePaths.push(curPath);
    });
    $4ffb76f3de34d3d1$var$validateFirebaseMergePaths(errorPrefix$1, mergePaths);
};
const $4ffb76f3de34d3d1$var$validatePriority = function(fnName, priority, optional) {
    if (optional && priority === undefined) return;
    if ($4ffb76f3de34d3d1$var$isInvalidJSONNumber(priority)) throw new Error((0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, "priority") + "is " + priority.toString() + ", but must be a valid Firebase priority (a string, finite number, " + "server value, or null).");
    // Special case to allow importing data with a .sv.
    if (!$4ffb76f3de34d3d1$var$isValidPriority(priority)) throw new Error((0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, "priority") + "must be a valid Firebase priority " + "(a string, finite number, server value, or null).");
};
const $4ffb76f3de34d3d1$var$validateKey = function(fnName, argumentName, key, optional) {
    if (optional && key === undefined) return;
    if (!$4ffb76f3de34d3d1$var$isValidKey(key)) throw new Error((0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, argumentName) + 'was an invalid key = "' + key + '".  Firebase keys must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "/", "[", or "]").');
};
/**
 * @internal
 */ const $4ffb76f3de34d3d1$export$8637b026ace8abb1 = function(fnName, argumentName, pathString, optional) {
    if (optional && pathString === undefined) return;
    if (!$4ffb76f3de34d3d1$var$isValidPathString(pathString)) throw new Error((0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, argumentName) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "[", or "]"');
};
const $4ffb76f3de34d3d1$var$validateRootPathString = function(fnName, argumentName, pathString, optional) {
    if (pathString) // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
    $4ffb76f3de34d3d1$export$8637b026ace8abb1(fnName, argumentName, pathString, optional);
};
/**
 * @internal
 */ const $4ffb76f3de34d3d1$export$8d83036122ae444e = function(fnName, path) {
    if ($4ffb76f3de34d3d1$var$pathGetFront(path) === ".info") throw new Error(fnName + " failed = Can't modify data under /.info/");
};
const $4ffb76f3de34d3d1$var$validateUrl = function(fnName, parsedUrl) {
    // TODO = Validate server better.
    const pathString = parsedUrl.path.toString();
    if (!(typeof parsedUrl.repoInfo.host === "string") || parsedUrl.repoInfo.host.length === 0 || !$4ffb76f3de34d3d1$var$isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(":")[0] !== "localhost" || pathString.length !== 0 && !$4ffb76f3de34d3d1$var$isValidRootPathString(pathString)) throw new Error((0, $25f55f8610499322$export$adea4917e02d93dc)(fnName, "url") + "must be a valid firebase URL and " + 'the path can\'t contain ".", "#", "$", "[", or "]".');
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */ class $4ffb76f3de34d3d1$var$EventQueue {
    constructor(){
        this.eventLists_ = [];
        /**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         */ this.recursionDepth_ = 0;
    }
}
/**
 * @param eventDataList - The new events to queue.
 */ function $4ffb76f3de34d3d1$var$eventQueueQueueEvents(eventQueue, eventDataList) {
    // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
    let currList = null;
    for(let i = 0; i < eventDataList.length; i++){
        const data = eventDataList[i];
        const path = data.getPath();
        if (currList !== null && !$4ffb76f3de34d3d1$var$pathEquals(path, currList.path)) {
            eventQueue.eventLists_.push(currList);
            currList = null;
        }
        if (currList === null) currList = {
            events: [],
            path: path
        };
        currList.events.push(data);
    }
    if (currList) eventQueue.eventLists_.push(currList);
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones)
 * for the specified path.
 *
 * It is assumed that the new events are all for the specified path.
 *
 * @param path - The path to raise events for.
 * @param eventDataList - The new events to raise.
 */ function $4ffb76f3de34d3d1$var$eventQueueRaiseEventsAtPath(eventQueue, path, eventDataList) {
    $4ffb76f3de34d3d1$var$eventQueueQueueEvents(eventQueue, eventDataList);
    $4ffb76f3de34d3d1$var$eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath)=>$4ffb76f3de34d3d1$var$pathEquals(eventPath, path));
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath - The path to raise events for.
 * @param eventDataList - The events to raise
 */ function $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
    $4ffb76f3de34d3d1$var$eventQueueQueueEvents(eventQueue, eventDataList);
    $4ffb76f3de34d3d1$var$eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath)=>$4ffb76f3de34d3d1$var$pathContains(eventPath, changedPath) || $4ffb76f3de34d3d1$var$pathContains(changedPath, eventPath));
}
function $4ffb76f3de34d3d1$var$eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
    eventQueue.recursionDepth_++;
    let sentAll = true;
    for(let i = 0; i < eventQueue.eventLists_.length; i++){
        const eventList = eventQueue.eventLists_[i];
        if (eventList) {
            const eventPath = eventList.path;
            if (predicate(eventPath)) {
                $4ffb76f3de34d3d1$var$eventListRaise(eventQueue.eventLists_[i]);
                eventQueue.eventLists_[i] = null;
            } else sentAll = false;
        }
    }
    if (sentAll) eventQueue.eventLists_ = [];
    eventQueue.recursionDepth_--;
}
/**
 * Iterates through the list and raises each event
 */ function $4ffb76f3de34d3d1$var$eventListRaise(eventList) {
    for(let i = 0; i < eventList.events.length; i++){
        const eventData = eventList.events[i];
        if (eventData !== null) {
            eventList.events[i] = null;
            const eventFn = eventData.getEventRunner();
            if ($4ffb76f3de34d3d1$var$logger) $4ffb76f3de34d3d1$var$log("event: " + eventData.toString());
            $4ffb76f3de34d3d1$var$exceptionGuard(eventFn);
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$INTERRUPT_REASON = "repo_interrupt";
/**
 * If a transaction does not succeed after 25 retries, we abort it. Among other
 * things this ensure that if there's ever a bug causing a mismatch between
 * client / server hashes for some data, we won't retry indefinitely.
 */ const $4ffb76f3de34d3d1$var$MAX_TRANSACTION_RETRIES = 25;
/**
 * A connection to a single data repository.
 */ class $4ffb76f3de34d3d1$var$Repo {
    constructor(repoInfo_, forceRestClient_, authTokenProvider_, appCheckProvider_){
        this.repoInfo_ = repoInfo_;
        this.forceRestClient_ = forceRestClient_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckProvider_ = appCheckProvider_;
        this.dataUpdateCount = 0;
        this.statsListener_ = null;
        this.eventQueue_ = new $4ffb76f3de34d3d1$var$EventQueue();
        this.nextWriteId_ = 1;
        this.interceptServerDataCallback_ = null;
        /** A list of data pieces and paths to be set when this client disconnects. */ this.onDisconnect_ = $4ffb76f3de34d3d1$var$newSparseSnapshotTree();
        /** Stores queues of outstanding transactions for Firebase locations. */ this.transactionQueueTree_ = new $4ffb76f3de34d3d1$var$Tree();
        // TODO: This should be @private but it's used by test_access.js and internal.js
        this.persistentConnection_ = null;
        // This key is intentionally not updated if RepoInfo is later changed or replaced
        this.key = this.repoInfo_.toURLString();
    }
    /**
     * @returns The URL corresponding to the root of this Firebase.
     */ toString() {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
    }
}
function $4ffb76f3de34d3d1$var$repoStart(repo, appId, authOverride) {
    repo.stats_ = $4ffb76f3de34d3d1$var$statsManagerGetCollection(repo.repoInfo_);
    if (repo.forceRestClient_ || $4ffb76f3de34d3d1$var$beingCrawled()) {
        repo.server_ = new $4ffb76f3de34d3d1$var$ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag)=>{
            $4ffb76f3de34d3d1$var$repoOnDataUpdate(repo, pathString, data, isMerge, tag);
        }, repo.authTokenProvider_, repo.appCheckProvider_);
        // Minor hack: Fire onConnect immediately, since there's no actual connection.
        setTimeout(()=>$4ffb76f3de34d3d1$var$repoOnConnectStatus(repo, /* connectStatus= */ true), 0);
    } else {
        // Validate authOverride
        if (typeof authOverride !== "undefined" && authOverride !== null) {
            if (typeof authOverride !== "object") throw new Error("Only objects are supported for option databaseAuthVariableOverride");
            try {
                (0, $25f55f8610499322$export$fac44ee5b035f737)(authOverride);
            } catch (e) {
                throw new Error("Invalid authOverride provided: " + e);
            }
        }
        repo.persistentConnection_ = new $4ffb76f3de34d3d1$var$PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag)=>{
            $4ffb76f3de34d3d1$var$repoOnDataUpdate(repo, pathString, data, isMerge, tag);
        }, (connectStatus)=>{
            $4ffb76f3de34d3d1$var$repoOnConnectStatus(repo, connectStatus);
        }, (updates)=>{
            $4ffb76f3de34d3d1$var$repoOnServerInfoUpdate(repo, updates);
        }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
        repo.server_ = repo.persistentConnection_;
    }
    repo.authTokenProvider_.addTokenChangeListener((token)=>{
        repo.server_.refreshAuthToken(token);
    });
    repo.appCheckProvider_.addTokenChangeListener((result)=>{
        repo.server_.refreshAppCheckToken(result.token);
    });
    // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
    // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
    repo.statsReporter_ = $4ffb76f3de34d3d1$var$statsManagerGetOrCreateReporter(repo.repoInfo_, ()=>new $4ffb76f3de34d3d1$var$StatsReporter(repo.stats_, repo.server_));
    // Used for .info.
    repo.infoData_ = new $4ffb76f3de34d3d1$var$SnapshotHolder();
    repo.infoSyncTree_ = new $4ffb76f3de34d3d1$var$SyncTree({
        startListening: (query, tag, currentHashFn, onComplete)=>{
            let infoEvents = [];
            const node = repo.infoData_.getNode(query._path);
            // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
            // on initial data...
            if (!node.isEmpty()) {
                infoEvents = $4ffb76f3de34d3d1$var$syncTreeApplyServerOverwrite(repo.infoSyncTree_, query._path, node);
                setTimeout(()=>{
                    onComplete("ok");
                }, 0);
            }
            return infoEvents;
        },
        stopListening: ()=>{}
    });
    $4ffb76f3de34d3d1$var$repoUpdateInfo(repo, "connected", false);
    repo.serverSyncTree_ = new $4ffb76f3de34d3d1$var$SyncTree({
        startListening: (query, tag, currentHashFn, onComplete)=>{
            repo.server_.listen(query, currentHashFn, tag, (status, data)=>{
                const events = onComplete(status, data);
                $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
            });
            // No synchronous events for network-backed sync trees
            return [];
        },
        stopListening: (query, tag)=>{
            repo.server_.unlisten(query, tag);
        }
    });
}
/**
 * @returns The time in milliseconds, taking the server offset into account if we have one.
 */ function $4ffb76f3de34d3d1$var$repoServerTime(repo) {
    const offsetNode = repo.infoData_.getNode(new $4ffb76f3de34d3d1$var$Path(".info/serverTimeOffset"));
    const offset = offsetNode.val() || 0;
    return new Date().getTime() + offset;
}
/**
 * Generate ServerValues using some variables from the repo object.
 */ function $4ffb76f3de34d3d1$var$repoGenerateServerValues(repo) {
    return $4ffb76f3de34d3d1$var$generateWithValues({
        timestamp: $4ffb76f3de34d3d1$var$repoServerTime(repo)
    });
}
/**
 * Called by realtime when we get new messages from the server.
 */ function $4ffb76f3de34d3d1$var$repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
    // For testing.
    repo.dataUpdateCount++;
    const path = new $4ffb76f3de34d3d1$var$Path(pathString);
    data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
    let events = [];
    if (tag) {
        if (isMerge) {
            const taggedChildren = (0, $25f55f8610499322$export$871de8747c9eaa88)(data, (raw)=>$4ffb76f3de34d3d1$var$nodeFromJSON(raw));
            events = $4ffb76f3de34d3d1$var$syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path, taggedChildren, tag);
        } else {
            const taggedSnap = $4ffb76f3de34d3d1$var$nodeFromJSON(data);
            events = $4ffb76f3de34d3d1$var$syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path, taggedSnap, tag);
        }
    } else if (isMerge) {
        const changedChildren = (0, $25f55f8610499322$export$871de8747c9eaa88)(data, (raw)=>$4ffb76f3de34d3d1$var$nodeFromJSON(raw));
        events = $4ffb76f3de34d3d1$var$syncTreeApplyServerMerge(repo.serverSyncTree_, path, changedChildren);
    } else {
        const snap = $4ffb76f3de34d3d1$var$nodeFromJSON(data);
        events = $4ffb76f3de34d3d1$var$syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap);
    }
    let affectedPath = path;
    if (events.length > 0) // Since we have a listener outstanding for each transaction, receiving any events
    // is a proxy for some change having occurred.
    affectedPath = $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, path);
    $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
}
function $4ffb76f3de34d3d1$var$repoOnConnectStatus(repo, connectStatus) {
    $4ffb76f3de34d3d1$var$repoUpdateInfo(repo, "connected", connectStatus);
    if (connectStatus === false) $4ffb76f3de34d3d1$var$repoRunOnDisconnectEvents(repo);
}
function $4ffb76f3de34d3d1$var$repoOnServerInfoUpdate(repo, updates) {
    $4ffb76f3de34d3d1$var$each(updates, (key, value)=>{
        $4ffb76f3de34d3d1$var$repoUpdateInfo(repo, key, value);
    });
}
function $4ffb76f3de34d3d1$var$repoUpdateInfo(repo, pathString, value) {
    const path = new $4ffb76f3de34d3d1$var$Path("/.info/" + pathString);
    const newNode = $4ffb76f3de34d3d1$var$nodeFromJSON(value);
    repo.infoData_.updateSnapshot(path, newNode);
    const events = $4ffb76f3de34d3d1$var$syncTreeApplyServerOverwrite(repo.infoSyncTree_, path, newNode);
    $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
}
function $4ffb76f3de34d3d1$var$repoGetNextWriteId(repo) {
    return repo.nextWriteId_++;
}
/**
 * The purpose of `getValue` is to return the latest known value
 * satisfying `query`.
 *
 * This method will first check for in-memory cached values
 * belonging to active listeners. If they are found, such values
 * are considered to be the most up-to-date.
 *
 * If the client is not connected, this method will wait until the
 *  repo has established a connection and then request the value for `query`.
 * If the client is not able to retrieve the query result for another reason,
 * it reports an error.
 *
 * @param query - The query to surface a value for.
 */ function $4ffb76f3de34d3d1$var$repoGetValue(repo, query, eventRegistration) {
    // Only active queries are cached. There is no persisted cache.
    const cached = $4ffb76f3de34d3d1$var$syncTreeGetServerValue(repo.serverSyncTree_, query);
    if (cached != null) return Promise.resolve(cached);
    return repo.server_.get(query).then((payload)=>{
        const node = $4ffb76f3de34d3d1$var$nodeFromJSON(payload).withIndex(query._queryParams.getIndex());
        /**
         * Below we simulate the actions of an `onlyOnce` `onValue()` event where:
         * Add an event registration,
         * Update data at the path,
         * Raise any events,
         * Cleanup the SyncTree
         */ $4ffb76f3de34d3d1$var$syncTreeAddEventRegistration(repo.serverSyncTree_, query, eventRegistration, true);
        let events;
        if (query._queryParams.loadsAllData()) events = $4ffb76f3de34d3d1$var$syncTreeApplyServerOverwrite(repo.serverSyncTree_, query._path, node);
        else {
            const tag = $4ffb76f3de34d3d1$var$syncTreeTagForQuery(repo.serverSyncTree_, query);
            events = $4ffb76f3de34d3d1$var$syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, query._path, node, tag);
        }
        /*
         * We need to raise events in the scenario where `get()` is called at a parent path, and
         * while the `get()` is pending, `onValue` is called at a child location. While get() is waiting
         * for the data, `onValue` will register a new event. Then, get() will come back, and update the syncTree
         * and its corresponding serverCache, including the child location where `onValue` is called. Then,
         * `onValue` will receive the event from the server, but look at the syncTree and see that the data received
         * from the server is already at the SyncPoint, and so the `onValue` callback will never get fired.
         * Calling `eventQueueRaiseEventsForChangedPath()` is the correct way to propagate the events and
         * ensure the corresponding child events will get fired.
         */ $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
        $4ffb76f3de34d3d1$var$syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, eventRegistration, null, true);
        return node;
    }, (err)=>{
        $4ffb76f3de34d3d1$var$repoLog(repo, "get for query " + (0, $25f55f8610499322$export$fac44ee5b035f737)(query) + " failed: " + err);
        return Promise.reject(new Error(err));
    });
}
function $4ffb76f3de34d3d1$var$repoSetWithPriority(repo, path, newVal, newPriority, onComplete) {
    $4ffb76f3de34d3d1$var$repoLog(repo, "set", {
        path: path.toString(),
        value: newVal,
        priority: newPriority
    });
    // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
    // (b) store unresolved paths on JSON parse
    const serverValues = $4ffb76f3de34d3d1$var$repoGenerateServerValues(repo);
    const newNodeUnresolved = $4ffb76f3de34d3d1$var$nodeFromJSON(newVal, newPriority);
    const existing = $4ffb76f3de34d3d1$var$syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path);
    const newNode = $4ffb76f3de34d3d1$var$resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
    const writeId = $4ffb76f3de34d3d1$var$repoGetNextWriteId(repo);
    const events = $4ffb76f3de34d3d1$var$syncTreeApplyUserOverwrite(repo.serverSyncTree_, path, newNode, writeId, true);
    $4ffb76f3de34d3d1$var$eventQueueQueueEvents(repo.eventQueue_, events);
    repo.server_.put(path.toString(), newNodeUnresolved.val(/*export=*/ true), (status, errorReason)=>{
        const success = status === "ok";
        if (!success) $4ffb76f3de34d3d1$var$warn("set at " + path + " failed: " + status);
        const clearEvents = $4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
        $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, clearEvents);
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
    const affectedPath = $4ffb76f3de34d3d1$var$repoAbortTransactions(repo, path);
    $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, affectedPath);
    // We queued the events above, so just flush the queue here
    $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, []);
}
function $4ffb76f3de34d3d1$var$repoUpdate(repo, path, childrenToMerge, onComplete) {
    $4ffb76f3de34d3d1$var$repoLog(repo, "update", {
        path: path.toString(),
        value: childrenToMerge
    });
    // Start with our existing data and merge each child into it.
    let empty = true;
    const serverValues = $4ffb76f3de34d3d1$var$repoGenerateServerValues(repo);
    const changedChildren = {};
    $4ffb76f3de34d3d1$var$each(childrenToMerge, (changedKey, changedValue)=>{
        empty = false;
        changedChildren[changedKey] = $4ffb76f3de34d3d1$var$resolveDeferredValueTree($4ffb76f3de34d3d1$var$pathChild(path, changedKey), $4ffb76f3de34d3d1$var$nodeFromJSON(changedValue), repo.serverSyncTree_, serverValues);
    });
    if (!empty) {
        const writeId = $4ffb76f3de34d3d1$var$repoGetNextWriteId(repo);
        const events = $4ffb76f3de34d3d1$var$syncTreeApplyUserMerge(repo.serverSyncTree_, path, changedChildren, writeId);
        $4ffb76f3de34d3d1$var$eventQueueQueueEvents(repo.eventQueue_, events);
        repo.server_.merge(path.toString(), childrenToMerge, (status, errorReason)=>{
            const success = status === "ok";
            if (!success) $4ffb76f3de34d3d1$var$warn("update at " + path + " failed: " + status);
            const clearEvents = $4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
            const affectedPath = clearEvents.length > 0 ? $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, path) : path;
            $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, clearEvents);
            $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
        });
        $4ffb76f3de34d3d1$var$each(childrenToMerge, (changedPath)=>{
            const affectedPath = $4ffb76f3de34d3d1$var$repoAbortTransactions(repo, $4ffb76f3de34d3d1$var$pathChild(path, changedPath));
            $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, affectedPath);
        });
        // We queued the events above, so just flush the queue here
        $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, []);
    } else {
        $4ffb76f3de34d3d1$var$log("update() called with empty data.  Don't do anything.");
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, "ok", undefined);
    }
}
/**
 * Applies all of the changes stored up in the onDisconnect_ tree.
 */ function $4ffb76f3de34d3d1$var$repoRunOnDisconnectEvents(repo) {
    $4ffb76f3de34d3d1$var$repoLog(repo, "onDisconnectEvents");
    const serverValues = $4ffb76f3de34d3d1$var$repoGenerateServerValues(repo);
    const resolvedOnDisconnectTree = $4ffb76f3de34d3d1$var$newSparseSnapshotTree();
    $4ffb76f3de34d3d1$var$sparseSnapshotTreeForEachTree(repo.onDisconnect_, $4ffb76f3de34d3d1$var$newEmptyPath(), (path, node)=>{
        const resolved = $4ffb76f3de34d3d1$var$resolveDeferredValueTree(path, node, repo.serverSyncTree_, serverValues);
        $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path, resolved);
    });
    let events = [];
    $4ffb76f3de34d3d1$var$sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, $4ffb76f3de34d3d1$var$newEmptyPath(), (path, snap)=>{
        events = events.concat($4ffb76f3de34d3d1$var$syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap));
        const affectedPath = $4ffb76f3de34d3d1$var$repoAbortTransactions(repo, path);
        $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, affectedPath);
    });
    repo.onDisconnect_ = $4ffb76f3de34d3d1$var$newSparseSnapshotTree();
    $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, $4ffb76f3de34d3d1$var$newEmptyPath(), events);
}
function $4ffb76f3de34d3d1$var$repoOnDisconnectCancel(repo, path, onComplete) {
    repo.server_.onDisconnectCancel(path.toString(), (status, errorReason)=>{
        if (status === "ok") $4ffb76f3de34d3d1$var$sparseSnapshotTreeForget(repo.onDisconnect_, path);
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function $4ffb76f3de34d3d1$var$repoOnDisconnectSet(repo, path, value, onComplete) {
    const newNode = $4ffb76f3de34d3d1$var$nodeFromJSON(value);
    repo.server_.onDisconnectPut(path.toString(), newNode.val(/*export=*/ true), (status, errorReason)=>{
        if (status === "ok") $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(repo.onDisconnect_, path, newNode);
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function $4ffb76f3de34d3d1$var$repoOnDisconnectSetWithPriority(repo, path, value, priority, onComplete) {
    const newNode = $4ffb76f3de34d3d1$var$nodeFromJSON(value, priority);
    repo.server_.onDisconnectPut(path.toString(), newNode.val(/*export=*/ true), (status, errorReason)=>{
        if (status === "ok") $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(repo.onDisconnect_, path, newNode);
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function $4ffb76f3de34d3d1$var$repoOnDisconnectUpdate(repo, path, childrenToMerge, onComplete) {
    if ((0, $25f55f8610499322$export$dd1bc94b04021eeb)(childrenToMerge)) {
        $4ffb76f3de34d3d1$var$log("onDisconnect().update() called with empty data.  Don't do anything.");
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, "ok", undefined);
        return;
    }
    repo.server_.onDisconnectMerge(path.toString(), childrenToMerge, (status, errorReason)=>{
        if (status === "ok") $4ffb76f3de34d3d1$var$each(childrenToMerge, (childName, childNode)=>{
            const newChildNode = $4ffb76f3de34d3d1$var$nodeFromJSON(childNode);
            $4ffb76f3de34d3d1$var$sparseSnapshotTreeRemember(repo.onDisconnect_, $4ffb76f3de34d3d1$var$pathChild(path, childName), newChildNode);
        });
        $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function $4ffb76f3de34d3d1$var$repoAddEventCallbackForQuery(repo, query, eventRegistration) {
    let events;
    if ($4ffb76f3de34d3d1$var$pathGetFront(query._path) === ".info") events = $4ffb76f3de34d3d1$var$syncTreeAddEventRegistration(repo.infoSyncTree_, query, eventRegistration);
    else events = $4ffb76f3de34d3d1$var$syncTreeAddEventRegistration(repo.serverSyncTree_, query, eventRegistration);
    $4ffb76f3de34d3d1$var$eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function $4ffb76f3de34d3d1$var$repoRemoveEventCallbackForQuery(repo, query, eventRegistration) {
    // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
    // a little bit by handling the return values anyways.
    let events;
    if ($4ffb76f3de34d3d1$var$pathGetFront(query._path) === ".info") events = $4ffb76f3de34d3d1$var$syncTreeRemoveEventRegistration(repo.infoSyncTree_, query, eventRegistration);
    else events = $4ffb76f3de34d3d1$var$syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, eventRegistration);
    $4ffb76f3de34d3d1$var$eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function $4ffb76f3de34d3d1$var$repoInterrupt(repo) {
    if (repo.persistentConnection_) repo.persistentConnection_.interrupt($4ffb76f3de34d3d1$var$INTERRUPT_REASON);
}
function $4ffb76f3de34d3d1$var$repoResume(repo) {
    if (repo.persistentConnection_) repo.persistentConnection_.resume($4ffb76f3de34d3d1$var$INTERRUPT_REASON);
}
function $4ffb76f3de34d3d1$var$repoLog(repo, ...varArgs) {
    let prefix = "";
    if (repo.persistentConnection_) prefix = repo.persistentConnection_.id + ":";
    $4ffb76f3de34d3d1$var$log(prefix, ...varArgs);
}
function $4ffb76f3de34d3d1$var$repoCallOnCompleteCallback(repo, callback, status, errorReason) {
    if (callback) $4ffb76f3de34d3d1$var$exceptionGuard(()=>{
        if (status === "ok") callback(null);
        else {
            const code = (status || "error").toUpperCase();
            let message = code;
            if (errorReason) message += ": " + errorReason;
            const error = new Error(message);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error.code = code;
            callback(error);
        }
    });
}
/**
 * Creates a new transaction, adds it to the transactions we're tracking, and
 * sends it to the server if possible.
 *
 * @param path - Path at which to do transaction.
 * @param transactionUpdate - Update callback.
 * @param onComplete - Completion callback.
 * @param unwatcher - Function that will be called when the transaction no longer
 * need data updates for `path`.
 * @param applyLocally - Whether or not to make intermediate results visible
 */ function $4ffb76f3de34d3d1$var$repoStartTransaction(repo, path, transactionUpdate, onComplete, unwatcher, applyLocally) {
    $4ffb76f3de34d3d1$var$repoLog(repo, "transaction on " + path);
    // Initialize transaction.
    const transaction = {
        path: path,
        update: transactionUpdate,
        onComplete: onComplete,
        // One of TransactionStatus enums.
        status: null,
        // Used when combining transactions at different locations to figure out
        // which one goes first.
        order: $4ffb76f3de34d3d1$var$LUIDGenerator(),
        applyLocally: // Whether to raise local events for this transaction.
        applyLocally,
        // Count of how many times we've retried the transaction.
        retryCount: 0,
        unwatcher: // Function to call to clean up our .on() listener.
        unwatcher,
        // Stores why a transaction was aborted.
        abortReason: null,
        currentWriteId: null,
        currentInputSnapshot: null,
        currentOutputSnapshotRaw: null,
        currentOutputSnapshotResolved: null
    };
    // Run transaction initially.
    const currentState = $4ffb76f3de34d3d1$var$repoGetLatestState(repo, path, undefined);
    transaction.currentInputSnapshot = currentState;
    const newVal = transaction.update(currentState.val());
    if (newVal === undefined) {
        // Abort transaction.
        transaction.unwatcher();
        transaction.currentOutputSnapshotRaw = null;
        transaction.currentOutputSnapshotResolved = null;
        if (transaction.onComplete) transaction.onComplete(null, false, transaction.currentInputSnapshot);
    } else {
        $4ffb76f3de34d3d1$var$validateFirebaseData("transaction failed: Data returned ", newVal, transaction.path);
        // Mark as run and add to our queue.
        transaction.status = 0 /* TransactionStatus.RUN */ ;
        const queueNode = $4ffb76f3de34d3d1$var$treeSubTree(repo.transactionQueueTree_, path);
        const nodeQueue = $4ffb76f3de34d3d1$var$treeGetValue(queueNode) || [];
        nodeQueue.push(transaction);
        $4ffb76f3de34d3d1$var$treeSetValue(queueNode, nodeQueue);
        // Update visibleData and raise events
        // Note: We intentionally raise events after updating all of our
        // transaction state, since the user could start new transactions from the
        // event callbacks.
        let priorityForNode;
        if (typeof newVal === "object" && newVal !== null && (0, $25f55f8610499322$export$2344b14b097df817)(newVal, ".priority")) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            priorityForNode = (0, $25f55f8610499322$export$e51ae4db7b428f67)(newVal, ".priority");
            (0, $25f55f8610499322$export$a7a9523472993e97)($4ffb76f3de34d3d1$var$isValidPriority(priorityForNode), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
        } else {
            const currentNode = $4ffb76f3de34d3d1$var$syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path) || $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
        }
        const serverValues = $4ffb76f3de34d3d1$var$repoGenerateServerValues(repo);
        const newNodeUnresolved = $4ffb76f3de34d3d1$var$nodeFromJSON(newVal, priorityForNode);
        const newNode = $4ffb76f3de34d3d1$var$resolveDeferredValueSnapshot(newNodeUnresolved, currentState, serverValues);
        transaction.currentOutputSnapshotRaw = newNodeUnresolved;
        transaction.currentOutputSnapshotResolved = newNode;
        transaction.currentWriteId = $4ffb76f3de34d3d1$var$repoGetNextWriteId(repo);
        const events = $4ffb76f3de34d3d1$var$syncTreeApplyUserOverwrite(repo.serverSyncTree_, path, newNode, transaction.currentWriteId, transaction.applyLocally);
        $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
        $4ffb76f3de34d3d1$var$repoSendReadyTransactions(repo, repo.transactionQueueTree_);
    }
}
/**
 * @param excludeSets - A specific set to exclude
 */ function $4ffb76f3de34d3d1$var$repoGetLatestState(repo, path, excludeSets) {
    return $4ffb76f3de34d3d1$var$syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path, excludeSets) || $4ffb76f3de34d3d1$var$ChildrenNode.EMPTY_NODE;
}
/**
 * Sends any already-run transactions that aren't waiting for outstanding
 * transactions to complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively
 * with a particular transactionQueueTree node to recurse through the tree.
 *
 * @param node - transactionQueueTree node to start at.
 */ function $4ffb76f3de34d3d1$var$repoSendReadyTransactions(repo, node = repo.transactionQueueTree_) {
    // Before recursing, make sure any completed transactions are removed.
    if (!node) $4ffb76f3de34d3d1$var$repoPruneCompletedTransactionsBelowNode(repo, node);
    if ($4ffb76f3de34d3d1$var$treeGetValue(node)) {
        const queue = $4ffb76f3de34d3d1$var$repoBuildTransactionQueue(repo, node);
        (0, $25f55f8610499322$export$a7a9523472993e97)(queue.length > 0, "Sending zero length transaction queue");
        const allRun = queue.every((transaction)=>transaction.status === 0 /* TransactionStatus.RUN */ );
        // If they're all run (and not sent), we can send them.  Else, we must wait.
        if (allRun) $4ffb76f3de34d3d1$var$repoSendTransactionQueue(repo, $4ffb76f3de34d3d1$var$treeGetPath(node), queue);
    } else if ($4ffb76f3de34d3d1$var$treeHasChildren(node)) $4ffb76f3de34d3d1$var$treeForEachChild(node, (childNode)=>{
        $4ffb76f3de34d3d1$var$repoSendReadyTransactions(repo, childNode);
    });
}
/**
 * Given a list of run transactions, send them to the server and then handle
 * the result (success or failure).
 *
 * @param path - The location of the queue.
 * @param queue - Queue of transactions under the specified location.
 */ function $4ffb76f3de34d3d1$var$repoSendTransactionQueue(repo, path, queue) {
    // Mark transactions as sent and increment retry count!
    const setsToIgnore = queue.map((txn)=>{
        return txn.currentWriteId;
    });
    const latestState = $4ffb76f3de34d3d1$var$repoGetLatestState(repo, path, setsToIgnore);
    let snapToSend = latestState;
    const latestHash = latestState.hash();
    for(let i = 0; i < queue.length; i++){
        const txn = queue[i];
        (0, $25f55f8610499322$export$a7a9523472993e97)(txn.status === 0 /* TransactionStatus.RUN */ , "tryToSendTransactionQueue_: items in queue should all be run.");
        txn.status = 1 /* TransactionStatus.SENT */ ;
        txn.retryCount++;
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(path, txn.path);
        // If we've gotten to this point, the output snapshot must be defined.
        snapToSend = snapToSend.updateChild(relativePath /** @type {!Node} */ , txn.currentOutputSnapshotRaw);
    }
    const dataToSend = snapToSend.val(true);
    const pathToSend = path;
    // Send the put.
    repo.server_.put(pathToSend.toString(), dataToSend, (status)=>{
        $4ffb76f3de34d3d1$var$repoLog(repo, "transaction put response", {
            path: pathToSend.toString(),
            status: status
        });
        let events = [];
        if (status === "ok") {
            // Queue up the callbacks and fire them after cleaning up all of our
            // transaction state, since the callback could trigger more
            // transactions or sets.
            const callbacks = [];
            for(let i = 0; i < queue.length; i++){
                queue[i].status = 2 /* TransactionStatus.COMPLETED */ ;
                events = events.concat($4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId));
                if (queue[i].onComplete) // We never unset the output snapshot, and given that this
                // transaction is complete, it should be set
                callbacks.push(()=>queue[i].onComplete(null, true, queue[i].currentOutputSnapshotResolved));
                queue[i].unwatcher();
            }
            // Now remove the completed transactions.
            $4ffb76f3de34d3d1$var$repoPruneCompletedTransactionsBelowNode(repo, $4ffb76f3de34d3d1$var$treeSubTree(repo.transactionQueueTree_, path));
            // There may be pending transactions that we can now send.
            $4ffb76f3de34d3d1$var$repoSendReadyTransactions(repo, repo.transactionQueueTree_);
            $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
            // Finally, trigger onComplete callbacks.
            for(let i1 = 0; i1 < callbacks.length; i1++)$4ffb76f3de34d3d1$var$exceptionGuard(callbacks[i1]);
        } else {
            // transactions are no longer sent.  Update their status appropriately.
            if (status === "datastale") {
                for(let i2 = 0; i2 < queue.length; i2++)if (queue[i2].status === 3 /* TransactionStatus.SENT_NEEDS_ABORT */ ) queue[i2].status = 4 /* TransactionStatus.NEEDS_ABORT */ ;
                else queue[i2].status = 0 /* TransactionStatus.RUN */ ;
            } else {
                $4ffb76f3de34d3d1$var$warn("transaction at " + pathToSend.toString() + " failed: " + status);
                for(let i3 = 0; i3 < queue.length; i3++){
                    queue[i3].status = 4 /* TransactionStatus.NEEDS_ABORT */ ;
                    queue[i3].abortReason = status;
                }
            }
            $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, path);
        }
    }, latestHash);
}
/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions. This
 * is the path at which events need to be raised for.
 *
 * @param changedPath - The path in mergedData that changed.
 * @returns The rootmost path that was affected by rerunning transactions.
 */ function $4ffb76f3de34d3d1$var$repoRerunTransactions(repo, changedPath) {
    const rootMostTransactionNode = $4ffb76f3de34d3d1$var$repoGetAncestorTransactionNode(repo, changedPath);
    const path = $4ffb76f3de34d3d1$var$treeGetPath(rootMostTransactionNode);
    const queue = $4ffb76f3de34d3d1$var$repoBuildTransactionQueue(repo, rootMostTransactionNode);
    $4ffb76f3de34d3d1$var$repoRerunTransactionQueue(repo, queue, path);
    return path;
}
/**
 * Does all the work of rerunning transactions (as well as cleans up aborted
 * transactions and whatnot).
 *
 * @param queue - The queue of transactions to run.
 * @param path - The path the queue is for.
 */ function $4ffb76f3de34d3d1$var$repoRerunTransactionQueue(repo, queue, path) {
    if (queue.length === 0) return; // Nothing to do!
    // Queue up the callbacks and fire them after cleaning up all of our
    // transaction state, since the callback could trigger more transactions or
    // sets.
    const callbacks = [];
    let events = [];
    // Ignore all of the sets we're going to re-run.
    const txnsToRerun = queue.filter((q)=>{
        return q.status === 0 /* TransactionStatus.RUN */ ;
    });
    const setsToIgnore = txnsToRerun.map((q)=>{
        return q.currentWriteId;
    });
    for(let i = 0; i < queue.length; i++){
        const transaction = queue[i];
        const relativePath = $4ffb76f3de34d3d1$var$newRelativePath(path, transaction.path);
        let abortTransaction = false, abortReason;
        (0, $25f55f8610499322$export$a7a9523472993e97)(relativePath !== null, "rerunTransactionsUnderNode_: relativePath should not be null.");
        if (transaction.status === 4 /* TransactionStatus.NEEDS_ABORT */ ) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat($4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        } else if (transaction.status === 0 /* TransactionStatus.RUN */ ) {
            if (transaction.retryCount >= $4ffb76f3de34d3d1$var$MAX_TRANSACTION_RETRIES) {
                abortTransaction = true;
                abortReason = "maxretry";
                events = events.concat($4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
            } else {
                // This code reruns a transaction
                const currentNode = $4ffb76f3de34d3d1$var$repoGetLatestState(repo, transaction.path, setsToIgnore);
                transaction.currentInputSnapshot = currentNode;
                const newData = queue[i].update(currentNode.val());
                if (newData !== undefined) {
                    $4ffb76f3de34d3d1$var$validateFirebaseData("transaction failed: Data returned ", newData, transaction.path);
                    let newDataNode = $4ffb76f3de34d3d1$var$nodeFromJSON(newData);
                    const hasExplicitPriority = typeof newData === "object" && newData != null && (0, $25f55f8610499322$export$2344b14b097df817)(newData, ".priority");
                    if (!hasExplicitPriority) // Keep the old priority if there wasn't a priority explicitly specified.
                    newDataNode = newDataNode.updatePriority(currentNode.getPriority());
                    const oldWriteId = transaction.currentWriteId;
                    const serverValues = $4ffb76f3de34d3d1$var$repoGenerateServerValues(repo);
                    const newNodeResolved = $4ffb76f3de34d3d1$var$resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
                    transaction.currentOutputSnapshotRaw = newDataNode;
                    transaction.currentOutputSnapshotResolved = newNodeResolved;
                    transaction.currentWriteId = $4ffb76f3de34d3d1$var$repoGetNextWriteId(repo);
                    // Mutates setsToIgnore in place
                    setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
                    events = events.concat($4ffb76f3de34d3d1$var$syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
                    events = events.concat($4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
                } else {
                    abortTransaction = true;
                    abortReason = "nodata";
                    events = events.concat($4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
                }
            }
        }
        $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
        events = [];
        if (abortTransaction) {
            // Abort.
            queue[i].status = 2 /* TransactionStatus.COMPLETED */ ;
            // Removing a listener can trigger pruning which can muck with
            // mergedData/visibleData (as it prunes data). So defer the unwatcher
            // until we're done.
            (function(unwatcher) {
                setTimeout(unwatcher, Math.floor(0));
            })(queue[i].unwatcher);
            if (queue[i].onComplete) {
                if (abortReason === "nodata") callbacks.push(()=>queue[i].onComplete(null, false, queue[i].currentInputSnapshot));
                else callbacks.push(()=>queue[i].onComplete(new Error(abortReason), false, null));
            }
        }
    }
    // Clean up completed transactions.
    $4ffb76f3de34d3d1$var$repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
    // Now fire callbacks, now that we're in a good, known state.
    for(let i1 = 0; i1 < callbacks.length; i1++)$4ffb76f3de34d3d1$var$exceptionGuard(callbacks[i1]);
    // Try to send the transaction result to the server.
    $4ffb76f3de34d3d1$var$repoSendReadyTransactions(repo, repo.transactionQueueTree_);
}
/**
 * Returns the rootmost ancestor node of the specified path that has a pending
 * transaction on it, or just returns the node for the given path if there are
 * no pending transactions on any ancestor.
 *
 * @param path - The location to start at.
 * @returns The rootmost node with a transaction.
 */ function $4ffb76f3de34d3d1$var$repoGetAncestorTransactionNode(repo, path) {
    let front;
    // Start at the root and walk deeper into the tree towards path until we
    // find a node with pending transactions.
    let transactionNode = repo.transactionQueueTree_;
    front = $4ffb76f3de34d3d1$var$pathGetFront(path);
    while(front !== null && $4ffb76f3de34d3d1$var$treeGetValue(transactionNode) === undefined){
        transactionNode = $4ffb76f3de34d3d1$var$treeSubTree(transactionNode, front);
        path = $4ffb76f3de34d3d1$var$pathPopFront(path);
        front = $4ffb76f3de34d3d1$var$pathGetFront(path);
    }
    return transactionNode;
}
/**
 * Builds the queue of all transactions at or below the specified
 * transactionNode.
 *
 * @param transactionNode
 * @returns The generated queue.
 */ function $4ffb76f3de34d3d1$var$repoBuildTransactionQueue(repo, transactionNode) {
    // Walk any child transaction queues and aggregate them into a single queue.
    const transactionQueue = [];
    $4ffb76f3de34d3d1$var$repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
    // Sort them by the order the transactions were created.
    transactionQueue.sort((a, b)=>a.order - b.order);
    return transactionQueue;
}
function $4ffb76f3de34d3d1$var$repoAggregateTransactionQueuesForNode(repo, node, queue) {
    const nodeQueue = $4ffb76f3de34d3d1$var$treeGetValue(node);
    if (nodeQueue) for(let i = 0; i < nodeQueue.length; i++)queue.push(nodeQueue[i]);
    $4ffb76f3de34d3d1$var$treeForEachChild(node, (child)=>{
        $4ffb76f3de34d3d1$var$repoAggregateTransactionQueuesForNode(repo, child, queue);
    });
}
/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 */ function $4ffb76f3de34d3d1$var$repoPruneCompletedTransactionsBelowNode(repo, node) {
    const queue = $4ffb76f3de34d3d1$var$treeGetValue(node);
    if (queue) {
        let to = 0;
        for(let from = 0; from < queue.length; from++)if (queue[from].status !== 2 /* TransactionStatus.COMPLETED */ ) {
            queue[to] = queue[from];
            to++;
        }
        queue.length = to;
        $4ffb76f3de34d3d1$var$treeSetValue(node, queue.length > 0 ? queue : undefined);
    }
    $4ffb76f3de34d3d1$var$treeForEachChild(node, (childNode)=>{
        $4ffb76f3de34d3d1$var$repoPruneCompletedTransactionsBelowNode(repo, childNode);
    });
}
/**
 * Aborts all transactions on ancestors or descendants of the specified path.
 * Called when doing a set() or update() since we consider them incompatible
 * with transactions.
 *
 * @param path - Path for which we want to abort related transactions.
 */ function $4ffb76f3de34d3d1$var$repoAbortTransactions(repo, path) {
    const affectedPath = $4ffb76f3de34d3d1$var$treeGetPath($4ffb76f3de34d3d1$var$repoGetAncestorTransactionNode(repo, path));
    const transactionNode = $4ffb76f3de34d3d1$var$treeSubTree(repo.transactionQueueTree_, path);
    $4ffb76f3de34d3d1$var$treeForEachAncestor(transactionNode, (node)=>{
        $4ffb76f3de34d3d1$var$repoAbortTransactionsOnNode(repo, node);
    });
    $4ffb76f3de34d3d1$var$repoAbortTransactionsOnNode(repo, transactionNode);
    $4ffb76f3de34d3d1$var$treeForEachDescendant(transactionNode, (node)=>{
        $4ffb76f3de34d3d1$var$repoAbortTransactionsOnNode(repo, node);
    });
    return affectedPath;
}
/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param node - Node to abort transactions for.
 */ function $4ffb76f3de34d3d1$var$repoAbortTransactionsOnNode(repo, node) {
    const queue = $4ffb76f3de34d3d1$var$treeGetValue(node);
    if (queue) {
        // Queue up the callbacks and fire them after cleaning up all of our
        // transaction state, since the callback could trigger more transactions
        // or sets.
        const callbacks = [];
        // Go through queue.  Any already-sent transactions must be marked for
        // abort, while the unsent ones can be immediately aborted and removed.
        let events = [];
        let lastSent = -1;
        for(let i = 0; i < queue.length; i++){
            if (queue[i].status === 3 /* TransactionStatus.SENT_NEEDS_ABORT */ ) ;
            else if (queue[i].status === 1 /* TransactionStatus.SENT */ ) {
                (0, $25f55f8610499322$export$a7a9523472993e97)(lastSent === i - 1, "All SENT items should be at beginning of queue.");
                lastSent = i;
                // Mark transaction for abort when it comes back.
                queue[i].status = 3 /* TransactionStatus.SENT_NEEDS_ABORT */ ;
                queue[i].abortReason = "set";
            } else {
                (0, $25f55f8610499322$export$a7a9523472993e97)(queue[i].status === 0 /* TransactionStatus.RUN */ , "Unexpected transaction status in abort");
                // We can abort it immediately.
                queue[i].unwatcher();
                events = events.concat($4ffb76f3de34d3d1$var$syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId, true));
                if (queue[i].onComplete) callbacks.push(queue[i].onComplete.bind(null, new Error("set"), false, null));
            }
        }
        if (lastSent === -1) // We're not waiting for any sent transactions.  We can clear the queue.
        $4ffb76f3de34d3d1$var$treeSetValue(node, undefined);
        else // Remove the transactions we aborted.
        queue.length = lastSent + 1;
        // Now fire the callbacks.
        $4ffb76f3de34d3d1$var$eventQueueRaiseEventsForChangedPath(repo.eventQueue_, $4ffb76f3de34d3d1$var$treeGetPath(node), events);
        for(let i1 = 0; i1 < callbacks.length; i1++)$4ffb76f3de34d3d1$var$exceptionGuard(callbacks[i1]);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$decodePath(pathString) {
    let pathStringDecoded = "";
    const pieces = pathString.split("/");
    for(let i = 0; i < pieces.length; i++)if (pieces[i].length > 0) {
        let piece = pieces[i];
        try {
            piece = decodeURIComponent(piece.replace(/\+/g, " "));
        } catch (e) {}
        pathStringDecoded += "/" + piece;
    }
    return pathStringDecoded;
}
/**
 * @returns key value hash
 */ function $4ffb76f3de34d3d1$var$decodeQuery(queryString) {
    const results = {};
    if (queryString.charAt(0) === "?") queryString = queryString.substring(1);
    for (const segment of queryString.split("&")){
        if (segment.length === 0) continue;
        const kv = segment.split("=");
        if (kv.length === 2) results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
        else $4ffb76f3de34d3d1$var$warn(`Invalid query segment '${segment}' in query '${queryString}'`);
    }
    return results;
}
const $4ffb76f3de34d3d1$var$parseRepoInfo = function(dataURL, nodeAdmin) {
    const parsedUrl = $4ffb76f3de34d3d1$var$parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
    if (parsedUrl.domain === "firebase.com") $4ffb76f3de34d3d1$var$fatal(parsedUrl.host + " is no longer supported. " + "Please use <YOUR FIREBASE>.firebaseio.com instead");
    // Catch common error of uninitialized namespace value.
    if ((!namespace || namespace === "undefined") && parsedUrl.domain !== "localhost") $4ffb76f3de34d3d1$var$fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
    if (!parsedUrl.secure) $4ffb76f3de34d3d1$var$warnIfPageIsSecure();
    const webSocketOnly = parsedUrl.scheme === "ws" || parsedUrl.scheme === "wss";
    return {
        repoInfo: new $4ffb76f3de34d3d1$var$RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, webSocketOnly, nodeAdmin, /*persistenceKey=*/ "", /*includeNamespaceInQueryParams=*/ namespace !== parsedUrl.subdomain),
        path: new $4ffb76f3de34d3d1$var$Path(parsedUrl.pathString)
    };
};
const $4ffb76f3de34d3d1$var$parseDatabaseURL = function(dataURL) {
    // Default to empty strings in the event of a malformed string.
    let host = "", domain = "", subdomain = "", pathString = "", namespace = "";
    // Always default to SSL, unless otherwise specified.
    let secure = true, scheme = "https", port = 443;
    // Don't do any validation here. The caller is responsible for validating the result of parsing.
    if (typeof dataURL === "string") {
        // Parse scheme.
        let colonInd = dataURL.indexOf("//");
        if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
        }
        // Parse host, path, and query string.
        let slashInd = dataURL.indexOf("/");
        if (slashInd === -1) slashInd = dataURL.length;
        let questionMarkInd = dataURL.indexOf("?");
        if (questionMarkInd === -1) questionMarkInd = dataURL.length;
        host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
        if (slashInd < questionMarkInd) // For pathString, questionMarkInd will always come after slashInd
        pathString = $4ffb76f3de34d3d1$var$decodePath(dataURL.substring(slashInd, questionMarkInd));
        const queryParams = $4ffb76f3de34d3d1$var$decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
        // If we have a port, use scheme for determining if it's secure.
        colonInd = host.indexOf(":");
        if (colonInd >= 0) {
            secure = scheme === "https" || scheme === "wss";
            port = parseInt(host.substring(colonInd + 1), 10);
        } else colonInd = host.length;
        const hostWithoutPort = host.slice(0, colonInd);
        if (hostWithoutPort.toLowerCase() === "localhost") domain = "localhost";
        else if (hostWithoutPort.split(".").length <= 2) domain = hostWithoutPort;
        else {
            // Interpret the subdomain of a 3 or more component URL as the namespace name.
            const dotInd = host.indexOf(".");
            subdomain = host.substring(0, dotInd).toLowerCase();
            domain = host.substring(dotInd + 1);
            // Normalize namespaces to lowercase to share storage / connection.
            namespace = subdomain;
        }
        // Always treat the value of the `ns` as the namespace name if it is present.
        if ("ns" in queryParams) namespace = queryParams["ns"];
    }
    return {
        host: host,
        port: port,
        domain: domain,
        subdomain: subdomain,
        secure: secure,
        scheme: scheme,
        pathString: pathString,
        namespace: namespace
    };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Modeled after base64 web-safe chars, but ordered by ASCII.
const $4ffb76f3de34d3d1$var$PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * Fancy ID generator that creates 20-character string identifiers with the
 * following properties:
 *
 * 1. They're based on timestamp so that they sort *after* any existing ids.
 * 2. They contain 72-bits of random data after the timestamp so that IDs won't
 *    collide with other clients' IDs.
 * 3. They sort *lexicographically* (so the timestamp is converted to characters
 *    that will sort properly).
 * 4. They're monotonically increasing. Even if you generate more than one in
 *    the same timestamp, the latter ones will sort after the former ones. We do
 *    this by using the previous random bits but "incrementing" them by 1 (only
 *    in the case of a timestamp collision).
 */ const $4ffb76f3de34d3d1$var$nextPushId = function() {
    // Timestamp of last push, used to prevent local collisions if you push twice
    // in one ms.
    let lastPushTime = 0;
    // We generate 72-bits of randomness which get turned into 12 characters and
    // appended to the timestamp to prevent collisions with other clients. We
    // store the last characters we generated because in the event of a collision,
    // we'll use those same characters except "incremented" by one.
    const lastRandChars = [];
    return function(now) {
        const duplicateTime = now === lastPushTime;
        lastPushTime = now;
        let i;
        const timeStampChars = new Array(8);
        for(i = 7; i >= 0; i--){
            timeStampChars[i] = $4ffb76f3de34d3d1$var$PUSH_CHARS.charAt(now % 64);
            // NOTE: Can't use << here because javascript will convert to int and lose
            // the upper bits.
            now = Math.floor(now / 64);
        }
        (0, $25f55f8610499322$export$a7a9523472993e97)(now === 0, "Cannot push at time == 0");
        let id = timeStampChars.join("");
        if (!duplicateTime) for(i = 0; i < 12; i++)lastRandChars[i] = Math.floor(Math.random() * 64);
        else {
            // If the timestamp hasn't changed since last push, use the same random
            // number, except incremented by 1.
            for(i = 11; i >= 0 && lastRandChars[i] === 63; i--)lastRandChars[i] = 0;
            lastRandChars[i]++;
        }
        for(i = 0; i < 12; i++)id += $4ffb76f3de34d3d1$var$PUSH_CHARS.charAt(lastRandChars[i]);
        (0, $25f55f8610499322$export$a7a9523472993e97)(id.length === 20, "nextPushId: Length should be 20.");
        return id;
    };
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encapsulates the data needed to raise an event
 */ class $4ffb76f3de34d3d1$var$DataEvent {
    /**
     * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
     * @param eventRegistration - The function to call to with the event data. User provided
     * @param snapshot - The data backing the event
     * @param prevName - Optional, the name of the previous child for child_* events.
     */ constructor(eventType, eventRegistration, snapshot, prevName){
        this.eventType = eventType;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
    }
    getPath() {
        const ref = this.snapshot.ref;
        if (this.eventType === "value") return ref._path;
        else return ref.parent._path;
    }
    getEventType() {
        return this.eventType;
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
    }
    toString() {
        return this.getPath().toString() + ":" + this.eventType + ":" + (0, $25f55f8610499322$export$fac44ee5b035f737)(this.snapshot.exportVal());
    }
}
class $4ffb76f3de34d3d1$var$CancelEvent {
    constructor(eventRegistration, error, path){
        this.eventRegistration = eventRegistration;
        this.error = error;
        this.path = path;
    }
    getPath() {
        return this.path;
    }
    getEventType() {
        return "cancel";
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
    }
    toString() {
        return this.path.toString() + ":cancel";
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A wrapper class that converts events from the database@exp SDK to the legacy
 * Database SDK. Events are not converted directly as event registration relies
 * on reference comparison of the original user callback (see `matches()`) and
 * relies on equality of the legacy SDK's `context` object.
 */ class $4ffb76f3de34d3d1$var$CallbackContext {
    constructor(snapshotCallback, cancelCallback){
        this.snapshotCallback = snapshotCallback;
        this.cancelCallback = cancelCallback;
    }
    onValue(expDataSnapshot, previousChildName) {
        this.snapshotCallback.call(null, expDataSnapshot, previousChildName);
    }
    onCancel(error) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback");
        return this.cancelCallback.call(null, error);
    }
    get hasCancelCallback() {
        return !!this.cancelCallback;
    }
    matches(other) {
        return this.snapshotCallback === other.snapshotCallback || this.snapshotCallback.userCallback !== undefined && this.snapshotCallback.userCallback === other.snapshotCallback.userCallback && this.snapshotCallback.context === other.snapshotCallback.context;
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The `onDisconnect` class allows you to write or clear data when your client
 * disconnects from the Database server. These updates occur whether your
 * client disconnects cleanly or not, so you can rely on them to clean up data
 * even if a connection is dropped or a client crashes.
 *
 * The `onDisconnect` class is most commonly used to manage presence in
 * applications where it is useful to detect how many clients are connected and
 * when other clients disconnect. See
 * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
 * for more information.
 *
 * To avoid problems when a connection is dropped before the requests can be
 * transferred to the Database server, these functions should be called before
 * writing any data.
 *
 * Note that `onDisconnect` operations are only triggered once. If you want an
 * operation to occur each time a disconnect occurs, you'll need to re-establish
 * the `onDisconnect` operations each time you reconnect.
 */ class $4ffb76f3de34d3d1$export$95b7818b4ee6c2af {
    /** @hideconstructor */ constructor(_repo, _path){
        this._repo = _repo;
        this._path = _path;
    }
    /**
     * Cancels all previously queued `onDisconnect()` set or update events for this
     * location and all children.
     *
     * If a write has been queued for this location via a `set()` or `update()` at a
     * parent location, the write at this location will be canceled, though writes
     * to sibling locations will still occur.
     *
     * @returns Resolves when synchronization to the server is complete.
     */ cancel() {
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        $4ffb76f3de34d3d1$var$repoOnDisconnectCancel(this._repo, this._path, deferred.wrapCallback(()=>{}));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is deleted when the client is disconnected
     * (due to closing the browser, navigating to a new page, or network issues).
     *
     * @returns Resolves when synchronization to the server is complete.
     */ remove() {
        $4ffb76f3de34d3d1$export$8d83036122ae444e("OnDisconnect.remove", this._path);
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        $4ffb76f3de34d3d1$var$repoOnDisconnectSet(this._repo, this._path, null, deferred.wrapCallback(()=>{}));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is set to the specified value when the
     * client is disconnected (due to closing the browser, navigating to a new page,
     * or network issues).
     *
     * `set()` is especially useful for implementing "presence" systems, where a
     * value should be changed or cleared when a user disconnects so that they
     * appear "offline" to other users. See
     * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
     * for more information.
     *
     * Note that `onDisconnect` operations are only triggered once. If you want an
     * operation to occur each time a disconnect occurs, you'll need to re-establish
     * the `onDisconnect` operations each time.
     *
     * @param value - The value to be written to this location on disconnect (can
     * be an object, array, string, number, boolean, or null).
     * @returns Resolves when synchronization to the Database is complete.
     */ set(value) {
        $4ffb76f3de34d3d1$export$8d83036122ae444e("OnDisconnect.set", this._path);
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("OnDisconnect.set", value, this._path, false);
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        $4ffb76f3de34d3d1$var$repoOnDisconnectSet(this._repo, this._path, value, deferred.wrapCallback(()=>{}));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is set to the specified value and priority
     * when the client is disconnected (due to closing the browser, navigating to a
     * new page, or network issues).
     *
     * @param value - The value to be written to this location on disconnect (can
     * be an object, array, string, number, boolean, or null).
     * @param priority - The priority to be written (string, number, or null).
     * @returns Resolves when synchronization to the Database is complete.
     */ setWithPriority(value, priority) {
        $4ffb76f3de34d3d1$export$8d83036122ae444e("OnDisconnect.setWithPriority", this._path);
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("OnDisconnect.setWithPriority", value, this._path, false);
        $4ffb76f3de34d3d1$var$validatePriority("OnDisconnect.setWithPriority", priority, false);
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        $4ffb76f3de34d3d1$var$repoOnDisconnectSetWithPriority(this._repo, this._path, value, priority, deferred.wrapCallback(()=>{}));
        return deferred.promise;
    }
    /**
     * Writes multiple values at this location when the client is disconnected (due
     * to closing the browser, navigating to a new page, or network issues).
     *
     * The `values` argument contains multiple property-value pairs that will be
     * written to the Database together. Each child property can either be a simple
     * property (for example, "name") or a relative path (for example, "name/first")
     * from the current location to the data to update.
     *
     * As opposed to the `set()` method, `update()` can be use to selectively update
     * only the referenced properties at the current location (instead of replacing
     * all the child properties at the current location).
     *
     * @param values - Object containing multiple values.
     * @returns Resolves when synchronization to the Database is complete.
     */ update(values) {
        $4ffb76f3de34d3d1$export$8d83036122ae444e("OnDisconnect.update", this._path);
        $4ffb76f3de34d3d1$var$validateFirebaseMergeDataArg("OnDisconnect.update", values, this._path, false);
        const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
        $4ffb76f3de34d3d1$var$repoOnDisconnectUpdate(this._repo, this._path, values, deferred.wrapCallback(()=>{}));
        return deferred.promise;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class $4ffb76f3de34d3d1$export$e79c8d837d2220a8 {
    /**
     * @hideconstructor
     */ constructor(_repo, _path, _queryParams, _orderByCalled){
        this._repo = _repo;
        this._path = _path;
        this._queryParams = _queryParams;
        this._orderByCalled = _orderByCalled;
    }
    get key() {
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(this._path)) return null;
        else return $4ffb76f3de34d3d1$var$pathGetBack(this._path);
    }
    get ref() {
        return new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(this._repo, this._path);
    }
    get _queryIdentifier() {
        const obj = $4ffb76f3de34d3d1$var$queryParamsGetQueryObject(this._queryParams);
        const id = $4ffb76f3de34d3d1$var$ObjectToUniqueKey(obj);
        return id === "{}" ? "default" : id;
    }
    /**
     * An object representation of the query parameters used by this Query.
     */ get _queryObject() {
        return $4ffb76f3de34d3d1$var$queryParamsGetQueryObject(this._queryParams);
    }
    isEqual(other) {
        other = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(other);
        if (!(other instanceof $4ffb76f3de34d3d1$export$e79c8d837d2220a8)) return false;
        const sameRepo = this._repo === other._repo;
        const samePath = $4ffb76f3de34d3d1$var$pathEquals(this._path, other._path);
        const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
        return sameRepo && samePath && sameQueryIdentifier;
    }
    toJSON() {
        return this.toString();
    }
    toString() {
        return this._repo.toString() + $4ffb76f3de34d3d1$var$pathToUrlEncodedString(this._path);
    }
}
/**
 * Validates that no other order by call has been made
 */ function $4ffb76f3de34d3d1$var$validateNoPreviousOrderByCall(query, fnName) {
    if (query._orderByCalled === true) throw new Error(fnName + ": You can't combine multiple orderBy calls.");
}
/**
 * Validates start/end values for queries.
 */ function $4ffb76f3de34d3d1$var$validateQueryEndpoints(params) {
    let startNode = null;
    let endNode = null;
    if (params.hasStart()) startNode = params.getIndexStartValue();
    if (params.hasEnd()) endNode = params.getIndexEndValue();
    if (params.getIndex() === $4ffb76f3de34d3d1$var$KEY_INDEX) {
        const tooManyArgsError = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().";
        const wrongArgTypeError = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
        if (params.hasStart()) {
            const startName = params.getIndexStartName();
            if (startName !== $4ffb76f3de34d3d1$var$MIN_NAME) throw new Error(tooManyArgsError);
            else if (typeof startNode !== "string") throw new Error(wrongArgTypeError);
        }
        if (params.hasEnd()) {
            const endName = params.getIndexEndName();
            if (endName !== $4ffb76f3de34d3d1$var$MAX_NAME) throw new Error(tooManyArgsError);
            else if (typeof endNode !== "string") throw new Error(wrongArgTypeError);
        }
    } else if (params.getIndex() === $4ffb76f3de34d3d1$var$PRIORITY_INDEX) {
        if (startNode != null && !$4ffb76f3de34d3d1$var$isValidPriority(startNode) || endNode != null && !$4ffb76f3de34d3d1$var$isValidPriority(endNode)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).");
    } else {
        (0, $25f55f8610499322$export$a7a9523472993e97)(params.getIndex() instanceof $4ffb76f3de34d3d1$var$PathIndex || params.getIndex() === $4ffb76f3de34d3d1$var$VALUE_INDEX, "unknown index type.");
        if (startNode != null && typeof startNode === "object" || endNode != null && typeof endNode === "object") throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.");
    }
}
/**
 * Validates that limit* has been called with the correct combination of parameters
 */ function $4ffb76f3de34d3d1$var$validateLimit(params) {
    if (params.hasStart() && params.hasEnd() && params.hasLimit() && !params.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.");
}
/**
 * @internal
 */ class $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c extends $4ffb76f3de34d3d1$export$e79c8d837d2220a8 {
    /** @hideconstructor */ constructor(repo, path){
        super(repo, path, new $4ffb76f3de34d3d1$export$7ba287e361c94330(), false);
    }
    get parent() {
        const parentPath = $4ffb76f3de34d3d1$var$pathParent(this._path);
        return parentPath === null ? null : new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(this._repo, parentPath);
    }
    get root() {
        let ref = this;
        while(ref.parent !== null)ref = ref.parent;
        return ref;
    }
}
/**
 * A `DataSnapshot` contains data from a Database location.
 *
 * Any time you read data from the Database, you receive the data as a
 * `DataSnapshot`. A `DataSnapshot` is passed to the event callbacks you attach
 * with `on()` or `once()`. You can extract the contents of the snapshot as a
 * JavaScript object by calling the `val()` method. Alternatively, you can
 * traverse into the snapshot by calling `child()` to return child snapshots
 * (which you could then call `val()` on).
 *
 * A `DataSnapshot` is an efficiently generated, immutable copy of the data at
 * a Database location. It cannot be modified and will never change (to modify
 * data, you always call the `set()` method on a `Reference` directly).
 */ class $4ffb76f3de34d3d1$export$80b98bcbc246c942 {
    /**
     * @param _node - A SnapshotNode to wrap.
     * @param ref - The location this snapshot came from.
     * @param _index - The iteration order for this snapshot
     * @hideconstructor
     */ constructor(_node, /**
     * The location of this DataSnapshot.
     */ ref, _index){
        this._node = _node;
        this.ref = ref;
        this._index = _index;
    }
    /**
     * Gets the priority value of the data in this `DataSnapshot`.
     *
     * Applications need not use priority but can order collections by
     * ordinary properties (see
     * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data |Sorting and filtering data}
     * ).
     */ get priority() {
        // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
        return this._node.getPriority().val();
    }
    /**
     * The key (last part of the path) of the location of this `DataSnapshot`.
     *
     * The last token in a Database location is considered its key. For example,
     * "ada" is the key for the /users/ada/ node. Accessing the key on any
     * `DataSnapshot` will return the key for the location that generated it.
     * However, accessing the key on the root URL of a Database will return
     * `null`.
     */ get key() {
        return this.ref.key;
    }
    /** Returns the number of child properties of this `DataSnapshot`. */ get size() {
        return this._node.numChildren();
    }
    /**
     * Gets another `DataSnapshot` for the location at the specified relative path.
     *
     * Passing a relative path to the `child()` method of a DataSnapshot returns
     * another `DataSnapshot` for the location at the specified relative path. The
     * relative path can either be a simple child name (for example, "ada") or a
     * deeper, slash-separated path (for example, "ada/name/first"). If the child
     * location has no data, an empty `DataSnapshot` (that is, a `DataSnapshot`
     * whose value is `null`) is returned.
     *
     * @param path - A relative path to the location of child data.
     */ child(path) {
        const childPath = new $4ffb76f3de34d3d1$var$Path(path);
        const childRef = $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(this.ref, path);
        return new $4ffb76f3de34d3d1$export$80b98bcbc246c942(this._node.getChild(childPath), childRef, $4ffb76f3de34d3d1$var$PRIORITY_INDEX);
    }
    /**
     * Returns true if this `DataSnapshot` contains any data. It is slightly more
     * efficient than using `snapshot.val() !== null`.
     */ exists() {
        return !this._node.isEmpty();
    }
    /**
     * Exports the entire contents of the DataSnapshot as a JavaScript object.
     *
     * The `exportVal()` method is similar to `val()`, except priority information
     * is included (if available), making it suitable for backing up your data.
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exportVal() {
        return this._node.val(true);
    }
    /**
     * Enumerates the top-level children in the `DataSnapshot`.
     *
     * Because of the way JavaScript objects work, the ordering of data in the
     * JavaScript object returned by `val()` is not guaranteed to match the
     * ordering on the server nor the ordering of `onChildAdded()` events. That is
     * where `forEach()` comes in handy. It guarantees the children of a
     * `DataSnapshot` will be iterated in their query order.
     *
     * If no explicit `orderBy*()` method is used, results are returned
     * ordered by key (unless priorities are used, in which case, results are
     * returned by priority).
     *
     * @param action - A function that will be called for each child DataSnapshot.
     * The callback can return true to cancel further enumeration.
     * @returns true if enumeration was canceled due to your callback returning
     * true.
     */ forEach(action) {
        if (this._node.isLeafNode()) return false;
        const childrenNode = this._node;
        // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
        return !!childrenNode.forEachChild(this._index, (key, node)=>{
            return action(new $4ffb76f3de34d3d1$export$80b98bcbc246c942(node, $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(this.ref, key), $4ffb76f3de34d3d1$var$PRIORITY_INDEX));
        });
    }
    /**
     * Returns true if the specified child path has (non-null) data.
     *
     * @param path - A relative path to the location of a potential child.
     * @returns `true` if data exists at the specified child path; else
     *  `false`.
     */ hasChild(path) {
        const childPath = new $4ffb76f3de34d3d1$var$Path(path);
        return !this._node.getChild(childPath).isEmpty();
    }
    /**
     * Returns whether or not the `DataSnapshot` has any non-`null` child
     * properties.
     *
     * You can use `hasChildren()` to determine if a `DataSnapshot` has any
     * children. If it does, you can enumerate them using `forEach()`. If it
     * doesn't, then either this snapshot contains a primitive value (which can be
     * retrieved with `val()`) or it is empty (in which case, `val()` will return
     * `null`).
     *
     * @returns true if this snapshot has any children; else false.
     */ hasChildren() {
        if (this._node.isLeafNode()) return false;
        else return !this._node.isEmpty();
    }
    /**
     * Returns a JSON-serializable representation of this object.
     */ toJSON() {
        return this.exportVal();
    }
    /**
     * Extracts a JavaScript value from a `DataSnapshot`.
     *
     * Depending on the data in a `DataSnapshot`, the `val()` method may return a
     * scalar type (string, number, or boolean), an array, or an object. It may
     * also return null, indicating that the `DataSnapshot` is empty (contains no
     * data).
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val() {
        return this._node.val();
    }
}
/**
 *
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided path. If no path is provided, the `Reference`
 * will point to the root of the Database.
 *
 * @param db - The database instance to obtain a reference for.
 * @param path - Optional path representing the location the returned
 *   `Reference` will point. If not provided, the returned `Reference` will
 *   point to the root of the Database.
 * @returns If a path is provided, a `Reference`
 *   pointing to the provided path. Otherwise, a `Reference` pointing to the
 *   root of the Database.
 */ function $4ffb76f3de34d3d1$export$eff4d24c3ff7876e(db, path) {
    db = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(db);
    db._checkNotDeleted("ref");
    return path !== undefined ? $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(db._root, path) : db._root;
}
/**
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided Firebase URL.
 *
 * An exception is thrown if the URL is not a valid Firebase Database URL or it
 * has a different domain than the current `Database` instance.
 *
 * Note that all query parameters (`orderBy`, `limitToLast`, etc.) are ignored
 * and are not applied to the returned `Reference`.
 *
 * @param db - The database instance to obtain a reference for.
 * @param url - The Firebase URL at which the returned `Reference` will
 *   point.
 * @returns A `Reference` pointing to the provided
 *   Firebase URL.
 */ function $4ffb76f3de34d3d1$export$291fc3c05735451(db, url) {
    db = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(db);
    db._checkNotDeleted("refFromURL");
    const parsedURL = $4ffb76f3de34d3d1$var$parseRepoInfo(url, db._repo.repoInfo_.nodeAdmin);
    $4ffb76f3de34d3d1$var$validateUrl("refFromURL", parsedURL);
    const repoInfo = parsedURL.repoInfo;
    if (!db._repo.repoInfo_.isCustomHost() && repoInfo.host !== db._repo.repoInfo_.host) $4ffb76f3de34d3d1$var$fatal("refFromURL: Host name does not match the current database: (found " + repoInfo.host + " but expected " + db._repo.repoInfo_.host + ")");
    return $4ffb76f3de34d3d1$export$eff4d24c3ff7876e(db, parsedURL.path.toString());
}
/**
 * Gets a `Reference` for the location at the specified relative path.
 *
 * The relative path can either be a simple child name (for example, "ada") or
 * a deeper slash-separated path (for example, "ada/name/first").
 *
 * @param parent - The parent location.
 * @param path - A relative path from this location to the desired child
 *   location.
 * @returns The specified child location.
 */ function $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(parent, path) {
    parent = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(parent);
    if ($4ffb76f3de34d3d1$var$pathGetFront(parent._path) === null) $4ffb76f3de34d3d1$var$validateRootPathString("child", "path", path, false);
    else $4ffb76f3de34d3d1$export$8637b026ace8abb1("child", "path", path, false);
    return new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(parent._repo, $4ffb76f3de34d3d1$var$pathChild(parent._path, path));
}
/**
 * Returns an `OnDisconnect` object - see
 * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
 * for more information on how to use it.
 *
 * @param ref - The reference to add OnDisconnect triggers for.
 */ function $4ffb76f3de34d3d1$export$b61bdcd0bdb4f86a(ref) {
    ref = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(ref);
    return new $4ffb76f3de34d3d1$export$95b7818b4ee6c2af(ref._repo, ref._path);
}
/**
 * Generates a new child location using a unique key and returns its
 * `Reference`.
 *
 * This is the most common pattern for adding data to a collection of items.
 *
 * If you provide a value to `push()`, the value is written to the
 * generated location. If you don't pass a value, nothing is written to the
 * database and the child remains empty (but you can use the `Reference`
 * elsewhere).
 *
 * The unique keys generated by `push()` are ordered by the current time, so the
 * resulting list of items is chronologically sorted. The keys are also
 * designed to be unguessable (they contain 72 random bits of entropy).
 *
 * See {@link https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data | Append to a list of data}.
 * See {@link https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html | The 2^120 Ways to Ensure Unique Identifiers}.
 *
 * @param parent - The parent location.
 * @param value - Optional value to be written at the generated location.
 * @returns Combined `Promise` and `Reference`; resolves when write is complete,
 * but can be used immediately as the `Reference` to the child location.
 */ function $4ffb76f3de34d3d1$export$4cbf152802aa238(parent, value) {
    parent = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(parent);
    $4ffb76f3de34d3d1$export$8d83036122ae444e("push", parent._path);
    $4ffb76f3de34d3d1$var$validateFirebaseDataArg("push", value, parent._path, true);
    const now = $4ffb76f3de34d3d1$var$repoServerTime(parent._repo);
    const name = $4ffb76f3de34d3d1$var$nextPushId(now);
    // push() returns a ThennableReference whose promise is fulfilled with a
    // regular Reference. We use child() to create handles to two different
    // references. The first is turned into a ThennableReference below by adding
    // then() and catch() methods and is used as the return value of push(). The
    // second remains a regular Reference and is used as the fulfilled value of
    // the first ThennableReference.
    const thennablePushRef = $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(parent, name);
    const pushRef = $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(parent, name);
    let promise;
    if (value != null) promise = $4ffb76f3de34d3d1$export$adaa4cf7ef1b65be(pushRef, value).then(()=>pushRef);
    else promise = Promise.resolve(pushRef);
    thennablePushRef.then = promise.then.bind(promise);
    thennablePushRef.catch = promise.then.bind(promise, undefined);
    return thennablePushRef;
}
/**
 * Removes the data at this Database location.
 *
 * Any data at child locations will also be deleted.
 *
 * The effect of the remove will be visible immediately and the corresponding
 * event 'value' will be triggered. Synchronization of the remove to the
 * Firebase servers will also be started, and the returned Promise will resolve
 * when complete. If provided, the onComplete callback will be called
 * asynchronously after synchronization has finished.
 *
 * @param ref - The location to remove.
 * @returns Resolves when remove on server is complete.
 */ function $4ffb76f3de34d3d1$export$cd7f480d6b8286c3(ref) {
    $4ffb76f3de34d3d1$export$8d83036122ae444e("remove", ref._path);
    return $4ffb76f3de34d3d1$export$adaa4cf7ef1b65be(ref, null);
}
/**
 * Writes data to this Database location.
 *
 * This will overwrite any data at this location and all child locations.
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ("value", "child_added", etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * Passing `null` for the new value is equivalent to calling `remove()`; namely,
 * all data at this location and all child locations will be deleted.
 *
 * `set()` will remove any priority stored at this location, so if priority is
 * meant to be preserved, you need to use `setWithPriority()` instead.
 *
 * Note that modifying data with `set()` will cancel any pending transactions
 * at that location, so extreme care should be taken if mixing `set()` and
 * `transaction()` to modify the same data.
 *
 * A single `set()` will generate a single "value" event at the location where
 * the `set()` was performed.
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @returns Resolves when write to server is complete.
 */ function $4ffb76f3de34d3d1$export$adaa4cf7ef1b65be(ref, value) {
    ref = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(ref);
    $4ffb76f3de34d3d1$export$8d83036122ae444e("set", ref._path);
    $4ffb76f3de34d3d1$var$validateFirebaseDataArg("set", value, ref._path, false);
    const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
    $4ffb76f3de34d3d1$var$repoSetWithPriority(ref._repo, ref._path, value, /*priority=*/ null, deferred.wrapCallback(()=>{}));
    return deferred.promise;
}
/**
 * Sets a priority for the data at this Database location.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data | Sorting and filtering data}
 * ).
 *
 * @param ref - The location to write to.
 * @param priority - The priority to be written (string, number, or null).
 * @returns Resolves when write to server is complete.
 */ function $4ffb76f3de34d3d1$export$313bf5dbe7a1196e(ref, priority) {
    ref = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(ref);
    $4ffb76f3de34d3d1$export$8d83036122ae444e("setPriority", ref._path);
    $4ffb76f3de34d3d1$var$validatePriority("setPriority", priority, false);
    const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
    $4ffb76f3de34d3d1$var$repoSetWithPriority(ref._repo, $4ffb76f3de34d3d1$var$pathChild(ref._path, ".priority"), priority, null, deferred.wrapCallback(()=>{}));
    return deferred.promise;
}
/**
 * Writes data the Database location. Like `set()` but also specifies the
 * priority for that data.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data | Sorting and filtering data}
 * ).
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @param priority - The priority to be written (string, number, or null).
 * @returns Resolves when write to server is complete.
 */ function $4ffb76f3de34d3d1$export$1fa5d5bf488088f3(ref, value, priority) {
    $4ffb76f3de34d3d1$export$8d83036122ae444e("setWithPriority", ref._path);
    $4ffb76f3de34d3d1$var$validateFirebaseDataArg("setWithPriority", value, ref._path, false);
    $4ffb76f3de34d3d1$var$validatePriority("setWithPriority", priority, false);
    if (ref.key === ".length" || ref.key === ".keys") throw "setWithPriority failed: " + ref.key + " is a read-only object.";
    const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
    $4ffb76f3de34d3d1$var$repoSetWithPriority(ref._repo, ref._path, value, priority, deferred.wrapCallback(()=>{}));
    return deferred.promise;
}
/**
 * Writes multiple values to the Database at once.
 *
 * The `values` argument contains multiple property-value pairs that will be
 * written to the Database together. Each child property can either be a simple
 * property (for example, "name") or a relative path (for example,
 * "name/first") from the current location to the data to update.
 *
 * As opposed to the `set()` method, `update()` can be use to selectively update
 * only the referenced properties at the current location (instead of replacing
 * all the child properties at the current location).
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ('value', 'child_added', etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * A single `update()` will generate a single "value" event at the location
 * where the `update()` was performed, regardless of how many children were
 * modified.
 *
 * Note that modifying data with `update()` will cancel any pending
 * transactions at that location, so extreme care should be taken if mixing
 * `update()` and `transaction()` to modify the same data.
 *
 * Passing `null` to `update()` will remove the data at this location.
 *
 * See
 * {@link https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html | Introducing multi-location updates and more}.
 *
 * @param ref - The location to write to.
 * @param values - Object containing multiple values.
 * @returns Resolves when update on server is complete.
 */ function $4ffb76f3de34d3d1$export$722fbec263ad908a(ref, values) {
    $4ffb76f3de34d3d1$var$validateFirebaseMergeDataArg("update", values, ref._path, false);
    const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
    $4ffb76f3de34d3d1$var$repoUpdate(ref._repo, ref._path, values, deferred.wrapCallback(()=>{}));
    return deferred.promise;
}
/**
 * Gets the most up-to-date result for this query.
 *
 * @param query - The query to run.
 * @returns A `Promise` which resolves to the resulting DataSnapshot if a value is
 * available, or rejects if the client is unable to return a value (e.g., if the
 * server is unreachable and there is nothing cached).
 */ function $4ffb76f3de34d3d1$export$3988ae62b71be9a3(query) {
    query = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(query);
    const callbackContext = new $4ffb76f3de34d3d1$var$CallbackContext(()=>{});
    const container = new $4ffb76f3de34d3d1$var$ValueEventRegistration(callbackContext);
    return $4ffb76f3de34d3d1$var$repoGetValue(query._repo, query, container).then((node)=>{
        return new $4ffb76f3de34d3d1$export$80b98bcbc246c942(node, new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(query._repo, query._path), query._queryParams.getIndex());
    });
}
/**
 * Represents registration for 'value' events.
 */ class $4ffb76f3de34d3d1$var$ValueEventRegistration {
    constructor(callbackContext){
        this.callbackContext = callbackContext;
    }
    respondsTo(eventType) {
        return eventType === "value";
    }
    createEvent(change, query) {
        const index = query._queryParams.getIndex();
        return new $4ffb76f3de34d3d1$var$DataEvent("value", this, new $4ffb76f3de34d3d1$export$80b98bcbc246c942(change.snapshotNode, new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(query._repo, query._path), index));
    }
    getEventRunner(eventData) {
        if (eventData.getEventType() === "cancel") return ()=>this.callbackContext.onCancel(eventData.error);
        else return ()=>this.callbackContext.onValue(eventData.snapshot, null);
    }
    createCancelEvent(error, path) {
        if (this.callbackContext.hasCancelCallback) return new $4ffb76f3de34d3d1$var$CancelEvent(this, error, path);
        else return null;
    }
    matches(other) {
        if (!(other instanceof $4ffb76f3de34d3d1$var$ValueEventRegistration)) return false;
        else if (!other.callbackContext || !this.callbackContext) // If no callback specified, we consider it to match any callback.
        return true;
        else return other.callbackContext.matches(this.callbackContext);
    }
    hasAnyCallback() {
        return this.callbackContext !== null;
    }
}
/**
 * Represents the registration of a child_x event.
 */ class $4ffb76f3de34d3d1$var$ChildEventRegistration {
    constructor(eventType, callbackContext){
        this.eventType = eventType;
        this.callbackContext = callbackContext;
    }
    respondsTo(eventType) {
        let eventToCheck = eventType === "children_added" ? "child_added" : eventType;
        eventToCheck = eventToCheck === "children_removed" ? "child_removed" : eventToCheck;
        return this.eventType === eventToCheck;
    }
    createCancelEvent(error, path) {
        if (this.callbackContext.hasCancelCallback) return new $4ffb76f3de34d3d1$var$CancelEvent(this, error, path);
        else return null;
    }
    createEvent(change, query) {
        (0, $25f55f8610499322$export$a7a9523472993e97)(change.childName != null, "Child events should have a childName.");
        const childRef = $4ffb76f3de34d3d1$export$f9574b70e1d95d9d(new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(query._repo, query._path), change.childName);
        const index = query._queryParams.getIndex();
        return new $4ffb76f3de34d3d1$var$DataEvent(change.type, this, new $4ffb76f3de34d3d1$export$80b98bcbc246c942(change.snapshotNode, childRef, index), change.prevName);
    }
    getEventRunner(eventData) {
        if (eventData.getEventType() === "cancel") return ()=>this.callbackContext.onCancel(eventData.error);
        else return ()=>this.callbackContext.onValue(eventData.snapshot, eventData.prevName);
    }
    matches(other) {
        if (other instanceof $4ffb76f3de34d3d1$var$ChildEventRegistration) return this.eventType === other.eventType && (!this.callbackContext || !other.callbackContext || this.callbackContext.matches(other.callbackContext));
        return false;
    }
    hasAnyCallback() {
        return !!this.callbackContext;
    }
}
function $4ffb76f3de34d3d1$var$addEventListener(query, eventType, callback, cancelCallbackOrListenOptions, options) {
    let cancelCallback;
    if (typeof cancelCallbackOrListenOptions === "object") {
        cancelCallback = undefined;
        options = cancelCallbackOrListenOptions;
    }
    if (typeof cancelCallbackOrListenOptions === "function") cancelCallback = cancelCallbackOrListenOptions;
    if (options && options.onlyOnce) {
        const userCallback = callback;
        const onceCallback = (dataSnapshot, previousChildName)=>{
            $4ffb76f3de34d3d1$var$repoRemoveEventCallbackForQuery(query._repo, query, container);
            userCallback(dataSnapshot, previousChildName);
        };
        onceCallback.userCallback = callback.userCallback;
        onceCallback.context = callback.context;
        callback = onceCallback;
    }
    const callbackContext = new $4ffb76f3de34d3d1$var$CallbackContext(callback, cancelCallback || undefined);
    const container = eventType === "value" ? new $4ffb76f3de34d3d1$var$ValueEventRegistration(callbackContext) : new $4ffb76f3de34d3d1$var$ChildEventRegistration(eventType, callbackContext);
    $4ffb76f3de34d3d1$var$repoAddEventCallbackForQuery(query._repo, query, container);
    return ()=>$4ffb76f3de34d3d1$var$repoRemoveEventCallbackForQuery(query._repo, query, container);
}
function $4ffb76f3de34d3d1$export$ad30f661f41f4d90(query, callback, cancelCallbackOrListenOptions, options) {
    return $4ffb76f3de34d3d1$var$addEventListener(query, "value", callback, cancelCallbackOrListenOptions, options);
}
function $4ffb76f3de34d3d1$export$fdc3e67b2775c753(query, callback, cancelCallbackOrListenOptions, options) {
    return $4ffb76f3de34d3d1$var$addEventListener(query, "child_added", callback, cancelCallbackOrListenOptions, options);
}
function $4ffb76f3de34d3d1$export$a3fdf31223dcb03(query, callback, cancelCallbackOrListenOptions, options) {
    return $4ffb76f3de34d3d1$var$addEventListener(query, "child_changed", callback, cancelCallbackOrListenOptions, options);
}
function $4ffb76f3de34d3d1$export$1b001b15904d2a7f(query, callback, cancelCallbackOrListenOptions, options) {
    return $4ffb76f3de34d3d1$var$addEventListener(query, "child_moved", callback, cancelCallbackOrListenOptions, options);
}
function $4ffb76f3de34d3d1$export$8362b530316d1aba(query, callback, cancelCallbackOrListenOptions, options) {
    return $4ffb76f3de34d3d1$var$addEventListener(query, "child_removed", callback, cancelCallbackOrListenOptions, options);
}
/**
 * Detaches a callback previously attached with the corresponding `on*()` (`onValue`, `onChildAdded`) listener.
 * Note: This is not the recommended way to remove a listener. Instead, please use the returned callback function from
 * the respective `on*` callbacks.
 *
 * Detach a callback previously attached with `on*()`. Calling `off()` on a parent listener
 * will not automatically remove listeners registered on child nodes, `off()`
 * must also be called on any child listeners to remove the callback.
 *
 * If a callback is not specified, all callbacks for the specified eventType
 * will be removed. Similarly, if no eventType is specified, all callbacks
 * for the `Reference` will be removed.
 *
 * Individual listeners can also be removed by invoking their unsubscribe
 * callbacks.
 *
 * @param query - The query that the listener was registered with.
 * @param eventType - One of the following strings: "value", "child_added",
 * "child_changed", "child_removed", or "child_moved." If omitted, all callbacks
 * for the `Reference` will be removed.
 * @param callback - The callback function that was passed to `on()` or
 * `undefined` to remove all callbacks.
 */ function $4ffb76f3de34d3d1$export$8c8705df4a2dcec9(query, eventType, callback) {
    let container = null;
    const expCallback = callback ? new $4ffb76f3de34d3d1$var$CallbackContext(callback) : null;
    if (eventType === "value") container = new $4ffb76f3de34d3d1$var$ValueEventRegistration(expCallback);
    else if (eventType) container = new $4ffb76f3de34d3d1$var$ChildEventRegistration(eventType, expCallback);
    $4ffb76f3de34d3d1$var$repoRemoveEventCallbackForQuery(query._repo, query, container);
}
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Database query. `QueryConstraint`s are created by invoking {@link endAt},
 * {@link endBefore}, {@link startAt}, {@link startAfter}, {@link
 * limitToFirst}, {@link limitToLast}, {@link orderByChild},
 * {@link orderByChild}, {@link orderByKey} , {@link orderByPriority} ,
 * {@link orderByValue}  or {@link equalTo} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
}
class $4ffb76f3de34d3d1$var$QueryEndAtConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("endAt", this._value, query._path, true);
        const newParams = $4ffb76f3de34d3d1$var$queryParamsEndAt(query._queryParams, this._value, this._key);
        $4ffb76f3de34d3d1$var$validateLimit(newParams);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        if (query._queryParams.hasEnd()) throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified ending point.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The ending point is inclusive, so children with exactly the specified value
 * will be included in the query. The optional key argument can be used to
 * further limit the range of the query. If it is specified, then children that
 * have exactly the specified value must also have a key name less than or equal
 * to the specified key.
 *
 * You can read more about `endAt()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to end at. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to end at, among the children with the previously
 * specified priority. This argument is only allowed if ordering by child,
 * value, or priority.
 */ function $4ffb76f3de34d3d1$export$28ec54a8428bdb3f(value, key) {
    $4ffb76f3de34d3d1$var$validateKey("endAt", "key", key, true);
    return new $4ffb76f3de34d3d1$var$QueryEndAtConstraint(value, key);
}
class $4ffb76f3de34d3d1$var$QueryEndBeforeConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("endBefore", this._value, query._path, false);
        const newParams = $4ffb76f3de34d3d1$var$queryParamsEndBefore(query._queryParams, this._value, this._key);
        $4ffb76f3de34d3d1$var$validateLimit(newParams);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        if (query._queryParams.hasEnd()) throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified ending point (exclusive).
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The ending point is exclusive. If only a value is provided, children
 * with a value less than the specified value will be included in the query.
 * If a key is specified, then children must have a value less than or equal
 * to the specified value and a key name less than the specified key.
 *
 * @param value - The value to end before. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to end before, among the children with the
 * previously specified priority. This argument is only allowed if ordering by
 * child, value, or priority.
 */ function $4ffb76f3de34d3d1$export$57203950645b8b11(value, key) {
    $4ffb76f3de34d3d1$var$validateKey("endBefore", "key", key, true);
    return new $4ffb76f3de34d3d1$var$QueryEndBeforeConstraint(value, key);
}
class $4ffb76f3de34d3d1$var$QueryStartAtConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("startAt", this._value, query._path, true);
        const newParams = $4ffb76f3de34d3d1$var$queryParamsStartAt(query._queryParams, this._value, this._key);
        $4ffb76f3de34d3d1$var$validateLimit(newParams);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        if (query._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified starting point.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The starting point is inclusive, so children with exactly the specified value
 * will be included in the query. The optional key argument can be used to
 * further limit the range of the query. If it is specified, then children that
 * have exactly the specified value must also have a key name greater than or
 * equal to the specified key.
 *
 * You can read more about `startAt()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to start at. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start at. This argument is only allowed if
 * ordering by child, value, or priority.
 */ function $4ffb76f3de34d3d1$export$859941c5fc8eba6b(value = null, key) {
    $4ffb76f3de34d3d1$var$validateKey("startAt", "key", key, true);
    return new $4ffb76f3de34d3d1$var$QueryStartAtConstraint(value, key);
}
class $4ffb76f3de34d3d1$var$QueryStartAfterConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("startAfter", this._value, query._path, false);
        const newParams = $4ffb76f3de34d3d1$var$queryParamsStartAfter(query._queryParams, this._value, this._key);
        $4ffb76f3de34d3d1$var$validateLimit(newParams);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        if (query._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified starting point (exclusive).
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The starting point is exclusive. If only a value is provided, children
 * with a value greater than the specified value will be included in the query.
 * If a key is specified, then children must have a value greater than or equal
 * to the specified value and a a key name greater than the specified key.
 *
 * @param value - The value to start after. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start after. This argument is only allowed if
 * ordering by child, value, or priority.
 */ function $4ffb76f3de34d3d1$export$dd8dee5f7b804673(value, key) {
    $4ffb76f3de34d3d1$var$validateKey("startAfter", "key", key, true);
    return new $4ffb76f3de34d3d1$var$QueryStartAfterConstraint(value, key);
}
class $4ffb76f3de34d3d1$var$QueryLimitToFirstConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_limit){
        super();
        this._limit = _limit;
    }
    _apply(query) {
        if (query._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, $4ffb76f3de34d3d1$var$queryParamsLimitToFirst(query._queryParams, this._limit), query._orderByCalled);
    }
}
/**
 * Creates a new `QueryConstraint` that if limited to the first specific number
 * of children.
 *
 * The `limitToFirst()` method is used to set a maximum number of children to be
 * synced for a given callback. If we set a limit of 100, we will initially only
 * receive up to 100 `child_added` events. If we have fewer than 100 messages
 * stored in our Database, a `child_added` event will fire for each message.
 * However, if we have over 100 messages, we will only receive a `child_added`
 * event for the first 100 ordered messages. As items change, we will receive
 * `child_removed` events for each item that drops out of the active list so
 * that the total number stays at 100.
 *
 * You can read more about `limitToFirst()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param limit - The maximum number of nodes to include in this query.
 */ function $4ffb76f3de34d3d1$export$9d02e839f813b99d(limit) {
    if (typeof limit !== "number" || Math.floor(limit) !== limit || limit <= 0) throw new Error("limitToFirst: First argument must be a positive integer.");
    return new $4ffb76f3de34d3d1$var$QueryLimitToFirstConstraint(limit);
}
class $4ffb76f3de34d3d1$var$QueryLimitToLastConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_limit){
        super();
        this._limit = _limit;
    }
    _apply(query) {
        if (query._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, $4ffb76f3de34d3d1$var$queryParamsLimitToLast(query._queryParams, this._limit), query._orderByCalled);
    }
}
/**
 * Creates a new `QueryConstraint` that is limited to return only the last
 * specified number of children.
 *
 * The `limitToLast()` method is used to set a maximum number of children to be
 * synced for a given callback. If we set a limit of 100, we will initially only
 * receive up to 100 `child_added` events. If we have fewer than 100 messages
 * stored in our Database, a `child_added` event will fire for each message.
 * However, if we have over 100 messages, we will only receive a `child_added`
 * event for the last 100 ordered messages. As items change, we will receive
 * `child_removed` events for each item that drops out of the active list so
 * that the total number stays at 100.
 *
 * You can read more about `limitToLast()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param limit - The maximum number of nodes to include in this query.
 */ function $4ffb76f3de34d3d1$export$f823b3589f69d3b8(limit) {
    if (typeof limit !== "number" || Math.floor(limit) !== limit || limit <= 0) throw new Error("limitToLast: First argument must be a positive integer.");
    return new $4ffb76f3de34d3d1$var$QueryLimitToLastConstraint(limit);
}
class $4ffb76f3de34d3d1$var$QueryOrderByChildConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_path){
        super();
        this._path = _path;
    }
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateNoPreviousOrderByCall(query, "orderByChild");
        const parsedPath = new $4ffb76f3de34d3d1$var$Path(this._path);
        if ($4ffb76f3de34d3d1$var$pathIsEmpty(parsedPath)) throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
        const index = new $4ffb76f3de34d3d1$var$PathIndex(parsedPath);
        const newParams = $4ffb76f3de34d3d1$var$queryParamsOrderBy(query._queryParams, index);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by the specified child key.
 *
 * Queries can only order by one key at a time. Calling `orderByChild()`
 * multiple times on the same query is an error.
 *
 * Firebase queries allow you to order your data by any child key on the fly.
 * However, if you know in advance what your indexes will be, you can define
 * them via the .indexOn rule in your Security Rules for better performance. See
 * the{@link https://firebase.google.com/docs/database/security/indexing-data}
 * rule for more information.
 *
 * You can read more about `orderByChild()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 *
 * @param path - The path to order by.
 */ function $4ffb76f3de34d3d1$export$5162bd9025f8e144(path) {
    if (path === "$key") throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
    else if (path === "$priority") throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
    else if (path === "$value") throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
    $4ffb76f3de34d3d1$export$8637b026ace8abb1("orderByChild", "path", path, false);
    return new $4ffb76f3de34d3d1$var$QueryOrderByChildConstraint(path);
}
class $4ffb76f3de34d3d1$var$QueryOrderByKeyConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateNoPreviousOrderByCall(query, "orderByKey");
        const newParams = $4ffb76f3de34d3d1$var$queryParamsOrderBy(query._queryParams, $4ffb76f3de34d3d1$var$KEY_INDEX);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by the key.
 *
 * Sorts the results of a query by their (ascending) key values.
 *
 * You can read more about `orderByKey()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 */ function $4ffb76f3de34d3d1$export$d5ab8b3bbd8afbf8() {
    return new $4ffb76f3de34d3d1$var$QueryOrderByKeyConstraint();
}
class $4ffb76f3de34d3d1$var$QueryOrderByPriorityConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateNoPreviousOrderByCall(query, "orderByPriority");
        const newParams = $4ffb76f3de34d3d1$var$queryParamsOrderBy(query._queryParams, $4ffb76f3de34d3d1$var$PRIORITY_INDEX);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by priority.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}
 * for alternatives to priority.
 */ function $4ffb76f3de34d3d1$export$19e8ae5500cf2e55() {
    return new $4ffb76f3de34d3d1$var$QueryOrderByPriorityConstraint();
}
class $4ffb76f3de34d3d1$var$QueryOrderByValueConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateNoPreviousOrderByCall(query, "orderByValue");
        const newParams = $4ffb76f3de34d3d1$var$queryParamsOrderBy(query._queryParams, $4ffb76f3de34d3d1$var$VALUE_INDEX);
        $4ffb76f3de34d3d1$var$validateQueryEndpoints(newParams);
        return new $4ffb76f3de34d3d1$export$e79c8d837d2220a8(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by value.
 *
 * If the children of a query are all scalar values (string, number, or
 * boolean), you can order the results by their (ascending) values.
 *
 * You can read more about `orderByValue()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 */ function $4ffb76f3de34d3d1$export$7f2f62793c39d0c0() {
    return new $4ffb76f3de34d3d1$var$QueryOrderByValueConstraint();
}
class $4ffb76f3de34d3d1$var$QueryEqualToValueConstraint extends $4ffb76f3de34d3d1$export$b0e86f2c7431df4e {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query) {
        $4ffb76f3de34d3d1$var$validateFirebaseDataArg("equalTo", this._value, query._path, false);
        if (query._queryParams.hasStart()) throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
        if (query._queryParams.hasEnd()) throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
        return new $4ffb76f3de34d3d1$var$QueryEndAtConstraint(this._value, this._key)._apply(new $4ffb76f3de34d3d1$var$QueryStartAtConstraint(this._value, this._key)._apply(query));
    }
}
/**
 * Creates a `QueryConstraint` that includes children that match the specified
 * value.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The optional key argument can be used to further limit the range of the
 * query. If it is specified, then children that have exactly the specified
 * value must also have exactly the specified key as their key name. This can be
 * used to filter result sets with many matches for the same value.
 *
 * You can read more about `equalTo()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to match for. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start at, among the children with the
 * previously specified priority. This argument is only allowed if ordering by
 * child, value, or priority.
 */ function $4ffb76f3de34d3d1$export$bdcdec1f91f16dff(value, key) {
    $4ffb76f3de34d3d1$var$validateKey("equalTo", "key", key, true);
    return new $4ffb76f3de34d3d1$var$QueryEqualToValueConstraint(value, key);
}
/**
 * Creates a new immutable instance of `Query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The Query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function $4ffb76f3de34d3d1$export$2fa187e846a241c4(query, ...queryConstraints) {
    let queryImpl = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(query);
    for (const constraint of queryConstraints)queryImpl = constraint._apply(queryImpl);
    return queryImpl;
}
/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */ $4ffb76f3de34d3d1$var$syncPointSetReferenceConstructor($4ffb76f3de34d3d1$export$35c3a5e7c9d1033c);
$4ffb76f3de34d3d1$var$syncTreeSetReferenceConstructor($4ffb76f3de34d3d1$export$35c3a5e7c9d1033c);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This variable is also defined in the firebase Node.js Admin SDK. Before
 * modifying this definition, consult the definition in:
 *
 * https://github.com/firebase/firebase-admin-node
 *
 * and make sure the two are consistent.
 */ const $4ffb76f3de34d3d1$var$FIREBASE_DATABASE_EMULATOR_HOST_VAR = "FIREBASE_DATABASE_EMULATOR_HOST";
/**
 * Creates and caches `Repo` instances.
 */ const $4ffb76f3de34d3d1$var$repos = {};
/**
 * If true, any new `Repo` will be created to use `ReadonlyRestClient` (for testing purposes).
 */ let $4ffb76f3de34d3d1$var$useRestClient = false;
/**
 * Update an existing `Repo` in place to point to a new host/port.
 */ function $4ffb76f3de34d3d1$var$repoManagerApplyEmulatorSettings(repo, host, port, tokenProvider) {
    repo.repoInfo_ = new $4ffb76f3de34d3d1$var$RepoInfo(`${host}:${port}`, /* secure= */ false, repo.repoInfo_.namespace, repo.repoInfo_.webSocketOnly, repo.repoInfo_.nodeAdmin, repo.repoInfo_.persistenceKey, repo.repoInfo_.includeNamespaceInQueryParams);
    if (tokenProvider) repo.authTokenProvider_ = tokenProvider;
}
/**
 * This function should only ever be called to CREATE a new database instance.
 * @internal
 */ function $4ffb76f3de34d3d1$export$a248c1d2ea757674(app, authProvider, appCheckProvider, url, nodeAdmin) {
    let dbUrl = url || app.options.databaseURL;
    if (dbUrl === undefined) {
        if (!app.options.projectId) $4ffb76f3de34d3d1$var$fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
        $4ffb76f3de34d3d1$var$log("Using default host for project ", app.options.projectId);
        dbUrl = `${app.options.projectId}-default-rtdb.firebaseio.com`;
    }
    let parsedUrl = $4ffb76f3de34d3d1$var$parseRepoInfo(dbUrl, nodeAdmin);
    let repoInfo = parsedUrl.repoInfo;
    let isEmulator;
    let dbEmulatorHost = undefined;
    if (typeof $361a76e6ea33591f$exports !== "undefined" && $361a76e6ea33591f$exports.env) dbEmulatorHost = $361a76e6ea33591f$exports.env[$4ffb76f3de34d3d1$var$FIREBASE_DATABASE_EMULATOR_HOST_VAR];
    if (dbEmulatorHost) {
        isEmulator = true;
        dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo.namespace}`;
        parsedUrl = $4ffb76f3de34d3d1$var$parseRepoInfo(dbUrl, nodeAdmin);
        repoInfo = parsedUrl.repoInfo;
    } else isEmulator = !parsedUrl.repoInfo.secure;
    const authTokenProvider = nodeAdmin && isEmulator ? new $4ffb76f3de34d3d1$var$EmulatorTokenProvider($4ffb76f3de34d3d1$var$EmulatorTokenProvider.OWNER) : new $4ffb76f3de34d3d1$var$FirebaseAuthTokenProvider(app.name, app.options, authProvider);
    $4ffb76f3de34d3d1$var$validateUrl("Invalid Firebase Database URL", parsedUrl);
    if (!$4ffb76f3de34d3d1$var$pathIsEmpty(parsedUrl.path)) $4ffb76f3de34d3d1$var$fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
    const repo = $4ffb76f3de34d3d1$var$repoManagerCreateRepo(repoInfo, app, authTokenProvider, new $4ffb76f3de34d3d1$var$AppCheckTokenProvider(app.name, appCheckProvider));
    return new $4ffb76f3de34d3d1$export$6feb5ea51a7b0b47(repo, app);
}
/**
 * Remove the repo and make sure it is disconnected.
 *
 */ function $4ffb76f3de34d3d1$var$repoManagerDeleteRepo(repo, appName) {
    const appRepos = $4ffb76f3de34d3d1$var$repos[appName];
    // This should never happen...
    if (!appRepos || appRepos[repo.key] !== repo) $4ffb76f3de34d3d1$var$fatal(`Database ${appName}(${repo.repoInfo_}) has already been deleted.`);
    $4ffb76f3de34d3d1$var$repoInterrupt(repo);
    delete appRepos[repo.key];
}
/**
 * Ensures a repo doesn't already exist and then creates one using the
 * provided app.
 *
 * @param repoInfo - The metadata about the Repo
 * @returns The Repo object for the specified server / repoName.
 */ function $4ffb76f3de34d3d1$var$repoManagerCreateRepo(repoInfo, app, authTokenProvider, appCheckProvider) {
    let appRepos = $4ffb76f3de34d3d1$var$repos[app.name];
    if (!appRepos) {
        appRepos = {};
        $4ffb76f3de34d3d1$var$repos[app.name] = appRepos;
    }
    let repo = appRepos[repoInfo.toURLString()];
    if (repo) $4ffb76f3de34d3d1$var$fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
    repo = new $4ffb76f3de34d3d1$var$Repo(repoInfo, $4ffb76f3de34d3d1$var$useRestClient, authTokenProvider, appCheckProvider);
    appRepos[repoInfo.toURLString()] = repo;
    return repo;
}
/**
 * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
 */ function $4ffb76f3de34d3d1$var$repoManagerForceRestClient(forceRestClient) {
    $4ffb76f3de34d3d1$var$useRestClient = forceRestClient;
}
/**
 * Class representing a Firebase Realtime Database.
 */ class $4ffb76f3de34d3d1$export$6feb5ea51a7b0b47 {
    /** @hideconstructor */ constructor(_repoInternal, /** The {@link @firebase/app#FirebaseApp} associated with this Realtime Database instance. */ app){
        this._repoInternal = _repoInternal;
        this.app = app;
        /** Represents a `Database` instance. */ this["type"] = "database";
        /** Track if the instance has been used (root or repo accessed) */ this._instanceStarted = false;
    }
    get _repo() {
        if (!this._instanceStarted) {
            $4ffb76f3de34d3d1$var$repoStart(this._repoInternal, this.app.options.appId, this.app.options["databaseAuthVariableOverride"]);
            this._instanceStarted = true;
        }
        return this._repoInternal;
    }
    get _root() {
        if (!this._rootInternal) this._rootInternal = new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(this._repo, $4ffb76f3de34d3d1$var$newEmptyPath());
        return this._rootInternal;
    }
    _delete() {
        if (this._rootInternal !== null) {
            $4ffb76f3de34d3d1$var$repoManagerDeleteRepo(this._repo, this.app.name);
            this._repoInternal = null;
            this._rootInternal = null;
        }
        return Promise.resolve();
    }
    _checkNotDeleted(apiName) {
        if (this._rootInternal === null) $4ffb76f3de34d3d1$var$fatal("Cannot call " + apiName + " on a deleted database.");
    }
}
function $4ffb76f3de34d3d1$var$checkTransportInit() {
    if ($4ffb76f3de34d3d1$var$TransportManager.IS_TRANSPORT_INITIALIZED) $4ffb76f3de34d3d1$var$warn("Transport has already been initialized. Please call this function before calling ref or setting up a listener");
}
/**
 * Force the use of websockets instead of longPolling.
 */ function $4ffb76f3de34d3d1$export$752b38c15a5377b6() {
    $4ffb76f3de34d3d1$var$checkTransportInit();
    $4ffb76f3de34d3d1$var$BrowserPollConnection.forceDisallow();
}
/**
 * Force the use of longPolling instead of websockets. This will be ignored if websocket protocol is used in databaseURL.
 */ function $4ffb76f3de34d3d1$export$387cff57f2608869() {
    $4ffb76f3de34d3d1$var$checkTransportInit();
    $4ffb76f3de34d3d1$var$WebSocketConnection.forceDisallow();
    $4ffb76f3de34d3d1$var$BrowserPollConnection.forceAllow();
}
/**
 * Returns the instance of the Realtime Database SDK that is associated
 * with the provided {@link @firebase/app#FirebaseApp}. Initializes a new instance with
 * with default settings if no instance exists or if the existing instance uses
 * a custom database URL.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Realtime
 * Database instance is associated with.
 * @param url - The URL of the Realtime Database instance to connect to. If not
 * provided, the SDK connects to the default instance of the Firebase App.
 * @returns The `Database` instance of the provided app.
 */ function $4ffb76f3de34d3d1$export$d0dd861204d0bf72(app = (0, $7fb72e761bb726d8$export$f9962582c9e66d99)(), url) {
    const db = (0, $7fb72e761bb726d8$export$fa0d6da0f5838f50)(app, "database").getImmediate({
        identifier: url
    });
    const emulator = (0, $25f55f8610499322$export$a3febcf1f14a3a0c)("database");
    if (emulator) $4ffb76f3de34d3d1$export$87f3cfc4a2e3958d(db, ...emulator);
    return db;
}
/**
 * Modify the provided instance to communicate with the Realtime Database
 * emulator.
 *
 * <p>Note: This method must be called before performing any other operation.
 *
 * @param db - The instance to modify.
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 8080)
 * @param options.mockUserToken - the mock auth token to use for unit testing Security Rules
 */ function $4ffb76f3de34d3d1$export$87f3cfc4a2e3958d(db, host, port, options = {}) {
    db = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(db);
    db._checkNotDeleted("useEmulator");
    if (db._instanceStarted) $4ffb76f3de34d3d1$var$fatal("Cannot call useEmulator() after instance has already been initialized.");
    const repo = db._repoInternal;
    let tokenProvider = undefined;
    if (repo.repoInfo_.nodeAdmin) {
        if (options.mockUserToken) $4ffb76f3de34d3d1$var$fatal('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".');
        tokenProvider = new $4ffb76f3de34d3d1$var$EmulatorTokenProvider($4ffb76f3de34d3d1$var$EmulatorTokenProvider.OWNER);
    } else if (options.mockUserToken) {
        const token = typeof options.mockUserToken === "string" ? options.mockUserToken : (0, $25f55f8610499322$export$367bf224123348f1)(options.mockUserToken, db.app.options.projectId);
        tokenProvider = new $4ffb76f3de34d3d1$var$EmulatorTokenProvider(token);
    }
    // Modify the repo to apply emulator settings
    $4ffb76f3de34d3d1$var$repoManagerApplyEmulatorSettings(repo, host, port, tokenProvider);
}
/**
 * Disconnects from the server (all Database operations will be completed
 * offline).
 *
 * The client automatically maintains a persistent connection to the Database
 * server, which will remain active indefinitely and reconnect when
 * disconnected. However, the `goOffline()` and `goOnline()` methods may be used
 * to control the client connection in cases where a persistent connection is
 * undesirable.
 *
 * While offline, the client will no longer receive data updates from the
 * Database. However, all Database operations performed locally will continue to
 * immediately fire events, allowing your application to continue behaving
 * normally. Additionally, each operation performed locally will automatically
 * be queued and retried upon reconnection to the Database server.
 *
 * To reconnect to the Database and begin receiving remote events, see
 * `goOnline()`.
 *
 * @param db - The instance to disconnect.
 */ function $4ffb76f3de34d3d1$export$bee838355d017f0a(db) {
    db = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(db);
    db._checkNotDeleted("goOffline");
    $4ffb76f3de34d3d1$var$repoInterrupt(db._repo);
}
/**
 * Reconnects to the server and synchronizes the offline Database state
 * with the server state.
 *
 * This method should be used after disabling the active connection with
 * `goOffline()`. Once reconnected, the client will transmit the proper data
 * and fire the appropriate events so that your client "catches up"
 * automatically.
 *
 * @param db - The instance to reconnect.
 */ function $4ffb76f3de34d3d1$export$e0eecaabee32dd(db) {
    db = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(db);
    db._checkNotDeleted("goOnline");
    $4ffb76f3de34d3d1$var$repoResume(db._repo);
}
function $4ffb76f3de34d3d1$export$4e1d237eb9e560af(logger, persistent) {
    $4ffb76f3de34d3d1$var$enableLogging$1(logger, persistent);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $4ffb76f3de34d3d1$var$registerDatabase(variant) {
    $4ffb76f3de34d3d1$export$c9fb972242fcb3c4((0, $7fb72e761bb726d8$export$31499a9cd224b78c));
    (0, $7fb72e761bb726d8$export$c930050e7bb63965)(new (0, $2eae6ad05c0c1491$export$16fa2f45be04daa8)("database", (container, { instanceIdentifier: url  })=>{
        const app = container.getProvider("app").getImmediate();
        const authProvider = container.getProvider("auth-internal");
        const appCheckProvider = container.getProvider("app-check-internal");
        return $4ffb76f3de34d3d1$export$a248c1d2ea757674(app, authProvider, appCheckProvider, url);
    }, "PUBLIC" /* ComponentType.PUBLIC */ ).setMultipleInstances(true));
    (0, $7fb72e761bb726d8$export$d29d5299a7137abc)($4ffb76f3de34d3d1$var$name, $4ffb76f3de34d3d1$var$version, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    (0, $7fb72e761bb726d8$export$d29d5299a7137abc)($4ffb76f3de34d3d1$var$name, $4ffb76f3de34d3d1$var$version, "esm2017");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $4ffb76f3de34d3d1$var$SERVER_TIMESTAMP = {
    ".sv": "timestamp"
};
/**
 * Returns a placeholder value for auto-populating the current timestamp (time
 * since the Unix epoch, in milliseconds) as determined by the Firebase
 * servers.
 */ function $4ffb76f3de34d3d1$export$3ff8e7e00c3264b7() {
    return $4ffb76f3de34d3d1$var$SERVER_TIMESTAMP;
}
/**
 * Returns a placeholder value that can be used to atomically increment the
 * current database value by the provided delta.
 *
 * @param delta - the amount to modify the current value atomically.
 * @returns A placeholder value for modifying data atomically server-side.
 */ function $4ffb76f3de34d3d1$export$a2647aa13413c947(delta) {
    return {
        ".sv": {
            "increment": delta
        }
    };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A type for the resolve value of {@link runTransaction}.
 */ class $4ffb76f3de34d3d1$export$7a6f238067628c6b {
    /** @hideconstructor */ constructor(/** Whether the transaction was successfully committed. */ committed, /** The resulting data snapshot. */ snapshot){
        this.committed = committed;
        this.snapshot = snapshot;
    }
    /** Returns a JSON-serializable representation of this object. */ toJSON() {
        return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON()
        };
    }
}
/**
 * Atomically modifies the data at this location.
 *
 * Atomically modify the data at this location. Unlike a normal `set()`, which
 * just overwrites the data regardless of its previous value, `runTransaction()` is
 * used to modify the existing value to a new value, ensuring there are no
 * conflicts with other clients writing to the same location at the same time.
 *
 * To accomplish this, you pass `runTransaction()` an update function which is
 * used to transform the current value into a new value. If another client
 * writes to the location before your new value is successfully written, your
 * update function will be called again with the new current value, and the
 * write will be retried. This will happen repeatedly until your write succeeds
 * without conflict or you abort the transaction by not returning a value from
 * your update function.
 *
 * Note: Modifying data with `set()` will cancel any pending transactions at
 * that location, so extreme care should be taken if mixing `set()` and
 * `runTransaction()` to update the same data.
 *
 * Note: When using transactions with Security and Firebase Rules in place, be
 * aware that a client needs `.read` access in addition to `.write` access in
 * order to perform a transaction. This is because the client-side nature of
 * transactions requires the client to read the data in order to transactionally
 * update it.
 *
 * @param ref - The location to atomically modify.
 * @param transactionUpdate - A developer-supplied function which will be passed
 * the current data stored at this location (as a JavaScript object). The
 * function should return the new value it would like written (as a JavaScript
 * object). If `undefined` is returned (i.e. you return with no arguments) the
 * transaction will be aborted and the data at this location will not be
 * modified.
 * @param options - An options object to configure transactions.
 * @returns A `Promise` that can optionally be used instead of the `onComplete`
 * callback to handle success and failure.
 */ function $4ffb76f3de34d3d1$export$3c54e006bf9c93b7(ref, // eslint-disable-next-line @typescript-eslint/no-explicit-any
transactionUpdate, options) {
    var _a;
    ref = (0, $25f55f8610499322$export$4befe9b5fa509a1b)(ref);
    $4ffb76f3de34d3d1$export$8d83036122ae444e("Reference.transaction", ref._path);
    if (ref.key === ".length" || ref.key === ".keys") throw "Reference.transaction failed: " + ref.key + " is a read-only object.";
    const applyLocally = (_a = options === null || options === void 0 ? void 0 : options.applyLocally) !== null && _a !== void 0 ? _a : true;
    const deferred = new (0, $25f55f8610499322$export$85f6557964517f1a)();
    const promiseComplete = (error, committed, node)=>{
        let dataSnapshot = null;
        if (error) deferred.reject(error);
        else {
            dataSnapshot = new $4ffb76f3de34d3d1$export$80b98bcbc246c942(node, new $4ffb76f3de34d3d1$export$35c3a5e7c9d1033c(ref._repo, ref._path), $4ffb76f3de34d3d1$var$PRIORITY_INDEX);
            deferred.resolve(new $4ffb76f3de34d3d1$export$7a6f238067628c6b(committed, dataSnapshot));
        }
    };
    // Add a watch to make sure we get server updates.
    const unwatcher = $4ffb76f3de34d3d1$export$ad30f661f41f4d90(ref, ()=>{});
    $4ffb76f3de34d3d1$var$repoStartTransaction(ref._repo, ref._path, transactionUpdate, promiseComplete, unwatcher, applyLocally);
    return deferred.promise;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ $4ffb76f3de34d3d1$var$PersistentConnection;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
$4ffb76f3de34d3d1$var$PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
    this.sendRequest("q", {
        p: pathString
    }, onComplete);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
$4ffb76f3de34d3d1$var$PersistentConnection.prototype.echo = function(data, onEcho) {
    this.sendRequest("echo", {
        d: data
    }, onEcho);
};
// RealTimeConnection properties that we use in tests.
$4ffb76f3de34d3d1$var$Connection;
/**
 * @internal
 */ const $4ffb76f3de34d3d1$export$3f9782a4529ff160 = function(newHash) {
    const oldPut = $4ffb76f3de34d3d1$var$PersistentConnection.prototype.put;
    $4ffb76f3de34d3d1$var$PersistentConnection.prototype.put = function(pathString, data, onComplete, hash) {
        if (hash !== undefined) hash = newHash();
        oldPut.call(this, pathString, data, onComplete, hash);
    };
    return function() {
        $4ffb76f3de34d3d1$var$PersistentConnection.prototype.put = oldPut;
    };
};
$4ffb76f3de34d3d1$var$RepoInfo;
/**
 * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
 * @internal
 */ const $4ffb76f3de34d3d1$export$868c9f20a76f0839 = function(forceRestClient) {
    $4ffb76f3de34d3d1$var$repoManagerForceRestClient(forceRestClient);
};
/**
 * Firebase Realtime Database
 *
 * @packageDocumentation
 */ $4ffb76f3de34d3d1$var$registerDatabase();




var $85f5a97f94c383d1$exports = {};

var $0b34769c121caa73$exports = {};
"use strict";


var $d4243da1a60178b0$exports = {};
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

"use strict";
function $d4243da1a60178b0$var$assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function $d4243da1a60178b0$var$normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function $d4243da1a60178b0$var$_format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var $d4243da1a60178b0$var$posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = $361a76e6ea33591f$exports.cwd();
                path = cwd;
            }
            $d4243da1a60178b0$var$assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = $d4243da1a60178b0$var$normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        $d4243da1a60178b0$var$assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = $d4243da1a60178b0$var$normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        $d4243da1a60178b0$var$assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            $d4243da1a60178b0$var$assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return $d4243da1a60178b0$var$posix.normalize(joined);
    },
    relative: function relative(from, to) {
        $d4243da1a60178b0$var$assertPath(from);
        $d4243da1a60178b0$var$assertPath(to);
        if (from === to) return "";
        from = $d4243da1a60178b0$var$posix.resolve(from);
        to = $d4243da1a60178b0$var$posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        $d4243da1a60178b0$var$assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        $d4243da1a60178b0$var$assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        $d4243da1a60178b0$var$assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return $d4243da1a60178b0$var$_format("/", pathObject);
    },
    parse: function parse(path) {
        $d4243da1a60178b0$var$assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
$d4243da1a60178b0$var$posix.posix = $d4243da1a60178b0$var$posix;
$d4243da1a60178b0$exports = $d4243da1a60178b0$var$posix;


var $1cd1895cb438e9b9$export$edf525f30916fbb8;
var $1cd1895cb438e9b9$export$640106f6dc7d2706;
var $1cd1895cb438e9b9$export$3ea386628068cf62;
var $1cd1895cb438e9b9$export$749d472264fad440;
var $1cd1895cb438e9b9$export$8b931a48d9488767;
var $1cd1895cb438e9b9$export$9123f37609399513;
var $1cd1895cb438e9b9$export$9b60beb643db4d69;
var $1cd1895cb438e9b9$export$bf9fb029d174d554;
var $1cd1895cb438e9b9$export$23d3fad09dc44362;
var $1cd1895cb438e9b9$export$d2f3c2f7e0c7dcf5;
var $1cd1895cb438e9b9$export$3bf7c33313eba0fe;
var $1cd1895cb438e9b9$export$7925d89f138dad5b;
var $1cd1895cb438e9b9$export$722a64dea1b767dc;
var $1cd1895cb438e9b9$export$9e6c06a7d47f9af7;
var $1cd1895cb438e9b9$export$6b76988456c0292f;
var $1cd1895cb438e9b9$export$266d3b9babd1fc45;
var $1cd1895cb438e9b9$export$c1d46b5ea6262c0b;
$1cd1895cb438e9b9$export$edf525f30916fbb8 = function() {
    return "LE";
};
$1cd1895cb438e9b9$export$640106f6dc7d2706 = function() {
    if (typeof location !== "undefined") return location.hostname;
    else return "";
};
$1cd1895cb438e9b9$export$3ea386628068cf62 = function() {
    return [];
};
$1cd1895cb438e9b9$export$749d472264fad440 = function() {
    return 0;
};
$1cd1895cb438e9b9$export$8b931a48d9488767 = function() {
    return Number.MAX_VALUE;
};
$1cd1895cb438e9b9$export$9123f37609399513 = function() {
    return Number.MAX_VALUE;
};
$1cd1895cb438e9b9$export$9b60beb643db4d69 = function() {
    return [];
};
$1cd1895cb438e9b9$export$bf9fb029d174d554 = function() {
    return "Browser";
};
$1cd1895cb438e9b9$export$23d3fad09dc44362 = function() {
    if (typeof navigator !== "undefined") return navigator.appVersion;
    return "";
};
$1cd1895cb438e9b9$export$d2f3c2f7e0c7dcf5 = $1cd1895cb438e9b9$export$3bf7c33313eba0fe = function() {
    return {};
};
$1cd1895cb438e9b9$export$7925d89f138dad5b = function() {
    return "javascript";
};
$1cd1895cb438e9b9$export$722a64dea1b767dc = function() {
    return "browser";
};
$1cd1895cb438e9b9$export$9e6c06a7d47f9af7 = $1cd1895cb438e9b9$export$6b76988456c0292f = function() {
    return "/tmp";
};
$1cd1895cb438e9b9$export$266d3b9babd1fc45 = "\n";
$1cd1895cb438e9b9$export$c1d46b5ea6262c0b = function() {
    return "/";
};


var $57f5becb8746f145$exports = {};
$57f5becb8746f145$exports = JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}');


const $85f5a97f94c383d1$var$version = $57f5becb8746f145$exports.version;
const $85f5a97f94c383d1$var$LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
// Parser src into an Object
function $85f5a97f94c383d1$var$parse(src) {
    const obj = {};
    // Convert buffer to string
    let lines = src.toString();
    // Convert line breaks to same format
    lines = lines.replace(/\r\n?/mg, "\n");
    let match;
    while((match = $85f5a97f94c383d1$var$LINE.exec(lines)) != null){
        const key = match[1];
        // Default undefined or null to empty string
        let value = match[2] || "";
        // Remove whitespace
        value = value.trim();
        // Check if double quoted
        const maybeQuote = value[0];
        // Remove surrounding quotes
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        // Expand newlines if double quoted
        if (maybeQuote === '"') {
            value = value.replace(/\\n/g, "\n");
            value = value.replace(/\\r/g, "\r");
        }
        // Add to object
        obj[key] = value;
    }
    return obj;
}
function $85f5a97f94c383d1$var$_log(message) {
    console.log(`[dotenv@${$85f5a97f94c383d1$var$version}][DEBUG] ${message}`);
}
function $85f5a97f94c383d1$var$_resolveHome(envPath) {
    return envPath[0] === "~" ? $d4243da1a60178b0$exports.join($1cd1895cb438e9b9$export$c1d46b5ea6262c0b(), envPath.slice(1)) : envPath;
}
// Populates process.env from .env file
function $85f5a97f94c383d1$var$config(options) {
    let dotenvPath = $d4243da1a60178b0$exports.resolve($361a76e6ea33591f$exports.cwd(), ".env");
    let encoding = "utf8";
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    if (options) {
        if (options.path != null) dotenvPath = $85f5a97f94c383d1$var$_resolveHome(options.path);
        if (options.encoding != null) encoding = options.encoding;
    }
    try {
        // Specifying an encoding returns a string instead of a buffer
        const parsed = $85f5a97f94c383d1$var$DotenvModule.parse($0b34769c121caa73$exports.readFileSync(dotenvPath, {
            encoding: encoding
        }));
        Object.keys(parsed).forEach(function(key) {
            if (!Object.prototype.hasOwnProperty.call($361a76e6ea33591f$exports.env, key)) parsed[key];
            else {
                if (override === true) parsed[key];
                if (debug) {
                    if (override === true) $85f5a97f94c383d1$var$_log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
                    else $85f5a97f94c383d1$var$_log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
                }
            }
        });
        return {
            parsed: parsed
        };
    } catch (e) {
        if (debug) $85f5a97f94c383d1$var$_log(`Failed to load ${dotenvPath} ${e.message}`);
        return {
            error: e
        };
    }
}
const $85f5a97f94c383d1$var$DotenvModule = {
    config: $85f5a97f94c383d1$var$config,
    parse: $85f5a97f94c383d1$var$parse
};
$85f5a97f94c383d1$exports.config = $85f5a97f94c383d1$var$DotenvModule.config;
$85f5a97f94c383d1$exports.parse = $85f5a97f94c383d1$var$DotenvModule.parse;
$85f5a97f94c383d1$exports = $85f5a97f94c383d1$var$DotenvModule;


$85f5a97f94c383d1$exports.config();
const $e006d69646ee18d5$var$firebaseConfig = {
    apiKey: "AIzaSyCNipcaWjLF4tBPcfj3nOwg27gm38wbiVI",
    authDomain: "bingoproject-9e820.firebaseapp.com",
    databaseURL: "https://bingoproject-9e820-default-rtdb.firebaseio.com",
    projectId: "bingoproject-9e820",
    storageBucket: "bingoproject-9e820.appspot.com",
    messagingSenderId: "754975308016",
    appId: "1:754975308016:web:c580af2cf788f2323a2a35",
    measurementId: "G-CST5FNPQ6N"
};
// Initialize Firebase
const $e006d69646ee18d5$var$app = (0, $7fb72e761bb726d8$export$c55cfd413944906d)($e006d69646ee18d5$var$firebaseConfig);
const $e006d69646ee18d5$var$db = (0, $4ffb76f3de34d3d1$export$d0dd861204d0bf72)($e006d69646ee18d5$var$app);
Array.prototype.insert = function(index, ...item) {
    this.splice(index, 0, ...item);
};
const $e006d69646ee18d5$var$div = (innerHTML, className, id)=>`<div class="${className}" id ="${id}">${innerHTML}</div>`;
const $e006d69646ee18d5$var$span = (innerHTML, className, id)=>`<span class="${className}" id="${id}">${innerHTML}</span>`;
const $e006d69646ee18d5$var$pattern = (item, id, state = false)=>{
    const innerHTML = $e006d69646ee18d5$var$span(item, "text-center align-middle text-wrap", id);
    return $e006d69646ee18d5$var$div(innerHTML, "item p-1 d-flex justify-content-center align-items-center" + (state ? " isReady" : ""), id);
};
const $e006d69646ee18d5$var$renderCells = (taskList)=>{
    const tasks = Object.values(taskList);
    tasks.insert(12, {
        task: ""
    });
    const $app = document.getElementById("app");
    $app.innerHTML = tasks.map((elem, index)=>{
        return elem.task === "" ? $e006d69646ee18d5$var$div("", "item empty", index) : $e006d69646ee18d5$var$pattern(elem.task, index, !!elem.date);
    }).join("");
};
const $e006d69646ee18d5$var$modalPattern = (item)=>{
    return `
		<div class="modal fade show" tabindex="-1" id="myModal" style="display: block;">
			<div class="modal-dialog modal-fullscreen-sm-down">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Подтвердите изменения</h5>
					</div>
					<div class="modal-body">
						<div class="input-group">
							<span class="input-group-text">Задание</span>
							<textarea class="form-control" aria-label="With textarea" id="modal-task">${item.task}</textarea>
						</div>
						<div class="mb-3 mt-3">
							<input class="form-check-input" type="checkbox" value="" id="modal-date" ${!item.date ? "" : "checked"}>
							<label class="form-check-label" for="modal-date">
								Выполнено?
							</label>
						</div>
						<div class="mb-3 row">
							<label for="modal-password" class="col-sm-2 col-form-label">Пароль</label>
							<div class="col-sm-10">
								<input type="password" class="form-control" id="modal-password">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" id="modal-close" class="btn btn-secondary">Закрыть</button>
						<button type="button" id="modal-submit" class="btn btn-primary" data-target=${item.id}>Сохранить</button>
					</div>
				</div>
			</div>
		</div>
	`;
};
const $e006d69646ee18d5$var$getDate = ()=>Math.floor(new Date() / 1000);
const $e006d69646ee18d5$var$getValuesFromInputs = ()=>{
    return {
        task: document.getElementById("modal-task").value || "",
        date: document.getElementById("modal-date").checked || false ? $e006d69646ee18d5$var$getDate() : 0,
        password: document.getElementById("modal-password").value || "",
        id: document.getElementById("modal-submit").dataset.target || -1
    };
};
const $e006d69646ee18d5$var$addModalHtml = (item, onSubmit, onClose)=>{
    document.body.innerHTML += $e006d69646ee18d5$var$modalPattern(item, onSubmit, onClose);
    const $mc = document.getElementById("modal-close");
    const $ms = document.getElementById("modal-submit");
    $mc.onclick = onClose;
    $ms.onclick = onSubmit;
};
const $e006d69646ee18d5$var$closeModal = ()=>{
    const $modal = document.getElementById("myModal");
    document.body.removeChild($modal);
    $e006d69646ee18d5$var$addModal();
    console.log("modal is removed");
};
const $e006d69646ee18d5$var$write = (id, item)=>(0, $4ffb76f3de34d3d1$export$adaa4cf7ef1b65be)((0, $4ffb76f3de34d3d1$export$eff4d24c3ff7876e)($e006d69646ee18d5$var$db, "cells/" + id), item);
const $e006d69646ee18d5$var$submit = ()=>{
    const params = $e006d69646ee18d5$var$getValuesFromInputs();
    if (params.password === "iloveu" && params.id !== -1 && params.task !== "") {
        const { task: task , date: date , id: id  } = params;
        $e006d69646ee18d5$var$write(id, {
            task: task,
            date: date
        }).then(()=>{
            $e006d69646ee18d5$var$read();
        });
    }
};
const $e006d69646ee18d5$var$eventList = (e)=>{
    const target = e.currentTarget;
    console.log("click on tile");
    const item = {
        task: target.childNodes[0].innerText.trim(),
        id: target.id > 12 ? target.id - 1 : target.id,
        date: target.classList.contains("isReady")
    };
    $e006d69646ee18d5$var$addModalHtml(item, ()=>{
        console.log("submit");
        $e006d69646ee18d5$var$submit();
        $e006d69646ee18d5$var$closeModal();
    }, $e006d69646ee18d5$var$closeModal);
};
const $e006d69646ee18d5$var$addModal = ()=>{
    const $cells = document.querySelectorAll(".item");
    $cells.forEach((item)=>{
        item.onclick = $e006d69646ee18d5$var$eventList;
    });
};
const $e006d69646ee18d5$var$read = ()=>{
    (0, $4ffb76f3de34d3d1$export$ad30f661f41f4d90)((0, $4ffb76f3de34d3d1$export$eff4d24c3ff7876e)($e006d69646ee18d5$var$db, "cells"), (snapshot)=>{
        const taskList = snapshot.val();
        $e006d69646ee18d5$var$renderCells(taskList);
        $e006d69646ee18d5$var$addModal();
    });
};
$e006d69646ee18d5$var$read();


//# sourceMappingURL=index.ed42ab73.js.map
