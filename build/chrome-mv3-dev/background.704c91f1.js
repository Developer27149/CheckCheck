(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4klkW":[function(require,module,exports) {
var g = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var _ = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var w = new Set(g), y = (e)=>w.has(e), $ = g.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var j = y("--dry-run"), m = ()=>y("--verbose") || _().VERBOSE === "true", G = m();
var f = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var b = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>f("\uD83D\uDD35 INFO", ...e), h = (...e)=>f("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>m() && f(`\u{1F7E1} ${M++}`, ...e);
var R = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/aaron/repos/CheckMan/.plasmo/static/background/index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 54017
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var B = module.bundle.Module;
function D(e) {
    B.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = D;
module.bundle.hotData = {};
var l = globalThis.chrome || globalThis.browser || null;
function u() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function p() {
    return n.port || location.port;
}
var x = "__plasmo_runtime_page_", P = "__plasmo_runtime_script_";
var H = `${n.secure ? "https" : "http"}://${u()}:${p()}/`;
async function S(e = 1470) {
    for(;;)try {
        await fetch(H);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (l.runtime.getManifest().manifest_version === 3) {
    let e = l.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o  } = e;
    return o ? !!o[t] : !1;
}
function k(e = p()) {
    let t = u();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function T(e) {
    typeof e.message == "string" && b("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k(Number(p()) + 1));
    return t.addEventListener("message", async function(o) {
        if (JSON.parse(o.data).type === "build_ready") {
            await e();
            return;
        }
    }), t.addEventListener("error", T), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let c = r.codeframe || r.stack;
            h("[plasmo/parcel-runtime]: " + r.message + `
` + c + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", T), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        h(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var C = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function d(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await chrome.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        l.runtime.reload();
    }
}
if (!C || !C.isParcelRequire) {
    R();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((c)=>c.id)), r = Object.values(o.depsByBundle).map((c)=>Object.values(c)).flat();
            a.bgChanged ||= r.every((c)=>s.has(c));
        }
        d();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await S(), d(!0);
    });
}
L(async ()=>{
    i("BGSW Runtime - On Build Repackaged"), a.buildReady ||= !0, d();
});
l.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(x), o = e.name.startsWith(P);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), d();
        });
    }
});
l.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), d()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _index = require("../../../background/index");

},{"../../../background/index":"leaNT"}],"leaNT":[function(require,module,exports) {
var _utils = require("~utils");
var _types = require("~types");
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    (0, _utils.commonHeaderHandlerEntry)(details);
    return {
        cancel: false
    };
}, {
    urls: [
        (0, _types.EWebsite).juejin
    ]
}, [
    "requestHeaders",
    "extraHeaders"
]) // chrome.webRequest.onBeforeRequest.addListener(
 //   function (details) {
 //     // console.log("before request:", details?.requestBody)
 //     // details?.requestBody?.raw?.forEach((item) => {
 //     //   if (item.bytes) {
 //     //     const str = new TextDecoder("utf-8").decode(item.bytes)
 //     //     console.log("before request:", str)
 //     //   }
 //     // })
 //     const domain = getDomainFromDetails(details)
 //     bodyHandlerEntry(details.requestBody, domain)
 //     console.log(details)
 //     return { cancel: false }
 //   },
 //   { urls: [EWebsite.juejin] },
 //   ["requestBody", "extraHeaders"]
 // )
;

},{"~utils":"cpxsN","~types":"NoMjA"}],"cpxsN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDomainFromDetails", ()=>getDomainFromDetails);
parcelHelpers.export(exports, "domainCheckEntry", ()=>domainCheckEntry);
parcelHelpers.export(exports, "commonHeaderHandlerEntry", ()=>commonHeaderHandlerEntry);
parcelHelpers.export(exports, "headersHandlerEntry", ()=>headersHandlerEntry);
parcelHelpers.export(exports, "bodyHandlerEntry", ()=>bodyHandlerEntry);
parcelHelpers.export(exports, "saveCheckInXHRData", ()=>saveCheckInXHRData);
parcelHelpers.export(exports, "getRequestBodyFromWebRequestBodyDetails", ()=>getRequestBodyFromWebRequestBodyDetails);
parcelHelpers.export(exports, "getIsClickTip", ()=>getIsClickTip);
parcelHelpers.export(exports, "setIsClickTip", ()=>setIsClickTip);
parcelHelpers.export(exports, "asyncSleep", ()=>asyncSleep);
var _juejin = require("~module/juejin");
var _types = require("~types");
const getDomainFromDetails = (details)=>{
    const { url  } = details;
    return url.split("/")[2];
};
const headerHandlerRecord = {
    [(0, _types.EWebsite).juejinHeader]: (0, _juejin.juejinHeaderHandler)
};
const uploadHandlerRecord = {
    [(0, _types.EWebsite).juejinHeader]: (0, _juejin.juejinUploadDataHandler)
};
const domainCheckEntry = (details)=>{
    const domain = getDomainFromDetails(details);
    const headerHandler = headerHandlerRecord[domain];
    // headerHandler?.(details)
    // details
    const uploadHandler = uploadHandlerRecord[domain];
    uploadHandler?.(details);
};
const commonHeaderHandlerEntry = (details)=>{
    const domain = getDomainFromDetails(details);
    const headerHandler = headerHandlerRecord[domain];
    headerHandler?.(details);
};
const headersHandlerEntry = ()=>{};
const bodyHandlerEntry = (requestBody, domain)=>{
    console.log("header handler entry:", requestBody);
    console.log("domain:", domain);
    const headerHandler = headerHandlerRecord[domain];
    headerHandler?.(requestBody);
};
const saveCheckInXHRData = (cookie, header)=>{
    const xhrData = {
        cookie,
        header
    };
    // chrome.storage.sync.set({ xhrData }, () => {
    //   console.log("\u4fdd\u5b58\u6210\u529f")
    // })
    console.log("xhr data:", xhrData);
};
const getRequestBodyFromWebRequestBodyDetails = (requestBody)=>{
    if (requestBody?.error) {
        console.log("juejin request body error:", requestBody.error);
        return requestBody.error;
    }
    if (requestBody?.formData) {
        console.log("juejin request body formData:", requestBody.formData);
        return requestBody.formData;
    }
    if (requestBody?.raw) {
        // return raw
        console.log("juejin request body raw:", requestBody.raw);
        return requestBody.raw.map((item)=>{
            if (item.bytes) return new TextDecoder("utf-8").decode(item.bytes);
        });
    }
    console.log("juejin request body:", requestBody);
    return null;
};
const getIsClickTip = async (callback)=>{
    const result = await chrome.storage.local.get([
        "isClickTip"
    ]);
    console.log("get result:", result);
    callback(result.isClickTip);
};
const setIsClickTip = (isClickTip)=>{
    chrome.storage.local.set({
        isClickTip
    }, ()=>{
        console.log("\u4fdd\u5b58\u6210\u529f");
    });
};
const asyncSleep = (ms = 1500)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms));
};

},{"~module/juejin":"pBn2q","~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"pBn2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "juejinUploadDataHandler", ()=>juejinUploadDataHandler);
parcelHelpers.export(exports, "juejinHeaderHandler", ()=>juejinHeaderHandler);
var _help = require("./help");
var _types = require("~types");
var _utils = require("~utils");
const juejinUploadDataHandler = async (details)=>{
    console.log("juejin request:", details);
    const { method , requestBody  } = details;
    if (method === "POST") {
        const uploadData = (0, _utils.getRequestBodyFromWebRequestBodyDetails)(requestBody);
        console.log("juejin upload data:", uploadData);
    }
};
const juejinHeaderHandler = async (details)=>{
    console.log("raw details:", details);
    const { url , requestHeaders  } = details;
    if (url.startsWith((0, _types.EWebsite).juejinCheckInUrl)) {
        // resolve headers
        const header = (0, _help.getHeaderFromRequestHeaders)(requestHeaders);
        console.log("juejin header:", header);
        (0, _help.saveWebsiteHeader)((0, _types.EWebsite).juejinHeader, header);
    }
};

},{"./help":"eDJuM","~types":"NoMjA","~utils":"cpxsN","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eDJuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHeaderFromRequestHeaders", ()=>getHeaderFromRequestHeaders);
parcelHelpers.export(exports, "saveWebsiteHeader", ()=>saveWebsiteHeader);
parcelHelpers.export(exports, "getWebsiteHeader", ()=>getWebsiteHeader);
parcelHelpers.export(exports, "saveWebsiteCheckInStatus", ()=>saveWebsiteCheckInStatus);
parcelHelpers.export(exports, "checkIsEnableByWebsiteKey", ()=>checkIsEnableByWebsiteKey);
const getHeaderFromRequestHeaders = (requestHeaders)=>{
    return requestHeaders.reduce((acc, cur)=>{
        acc[cur.name] = cur.value;
        return acc;
    }, {});
};
const saveWebsiteHeader = async (key, value)=>{
    try {
        chrome.storage.sync.set({
            [`header-${key}`]: value
        });
    } catch (error) {
        console.log("key:", key, " value:", value);
        console.log("\u4fdd\u5b58\u7ad9\u70b9\u5934\u90e8\u5931\u8d25", error);
    }
};
const getWebsiteHeader = async (key)=>{
    const realKey = `header-${key}`;
    try {
        const res = await chrome.storage.sync.get(realKey);
        return res[realKey];
    } catch (error) {
        console.log("\u83b7\u53d6\u7ad9\u70b9\u5934\u90e8\u5931\u8d25", error);
        console.log("key:", realKey);
    }
};
const saveWebsiteCheckInStatus = async (key, value)=>{
    try {
        chrome.storage.sync.set({
            [`checkIn-${key}`]: value
        });
    } catch (error) {
        console.log("key:", key, " value:", value);
        console.log("\u4fdd\u5b58\u7ad9\u70b9\u7b7e\u5230\u72b6\u6001\u5931\u8d25", error);
    }
};
const checkIsEnableByWebsiteKey = async (key)=>{
    const realKey = `checkIn-${key}`;
    try {
        // \u8bfb\u53d6\u914d\u7f6e\uff0c\u68c0\u67e5\u662f\u5426\u542f\u7528
        const res = await chrome.storage.sync.get(realKey);
        return res[realKey] ?? false;
    } catch (error) {
        console.log("\u83b7\u53d6\u7ad9\u70b9\u7b7e\u5230\u72b6\u6001\u5931\u8d25", error);
        console.log("key:", realKey);
        return false;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"NoMjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EWebsite", ()=>EWebsite);
parcelHelpers.export(exports, "EStorageKey", ()=>EStorageKey);
parcelHelpers.export(exports, "EStatusKey", ()=>EStatusKey);
parcelHelpers.export(exports, "EStatus", ()=>EStatus);
let EWebsite;
(function(EWebsite) {
    EWebsite["juejin"] = "https://api.juejin.cn/*";
    EWebsite["juejinHeader"] = "api.juejin.cn";
    EWebsite["juejinCheckInUrl"] = "https://api.juejin.cn/growth_api/v1/check_in?";
    EWebsite["juejinCheckInPage"] = "https://juejin.cn/user/center/signin?from=main_page";
})(EWebsite || (EWebsite = {}));
let EStorageKey;
(function(EStorageKey) {
    EStorageKey[// \u7b7e\u5230\u8bb0\u5f55\u914d\u7f6e
    "CheckInRecord"] = "checkInRecord";
    EStorageKey[// \u7ad9\u70b9\u5934\u90e8\u914d\u7f6e
    "WebsiteHeader"] = "websiteHeader";
    EStorageKey[// \u7ad9\u70b9\u8bf7\u6c42\u4f53\u914d\u7f6e
    "WebsiteBody"] = "websiteBody";
})(EStorageKey || (EStorageKey = {}));
let EStatusKey;
(function(EStatusKey) {
    EStatusKey[EStatusKey["juejin"] = EWebsite.juejinHeader] = "juejin";
})(EStatusKey || (EStatusKey = {}));
let EStatus;
(function(EStatus) {
    EStatus[// Success
    "Success"] = "success";
    EStatus[// \u7981\u7528
    "Disable"] = "disable";
    EStatus[// \u7b49\u5f85\u91cd\u7f6e
    "Wait2Reset"] = "wait2Reset";
})(EStatus || (EStatus = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["4klkW","8oeFb"], "8oeFb", "parcelRequiref79d")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFO0lBQzlDLE9BQU8sY0FBYyxDQUFDLE1BQU0sVUFBVTtRQUNwQyxZQUFZLElBQUk7UUFDaEIsS0FBSztJQUNQO0FBQ0Y7OztBQzlCQTs7Ozs7O0lBQU87VUFBSyxRQUFRO0lBQVIsU0FDVixZQUFTO0lBREMsU0FFVixrQkFBZTtJQUZMLFNBR1Ysc0JBQW1CO0lBSFQsU0FJVix1QkFBb0I7R0FKVixhQUFBO0lBT0w7VUFBSyxXQUFXO0lBQVgsWUFDVixTQUFTO0lBQ1QsbUJBQWdCO0lBRk4sWUFHVixTQUFTO0lBQ1QsbUJBQWdCO0lBSk4sWUFLVixVQUFVO0lBQ1YsaUJBQWM7R0FOSixnQkFBQTtJQVNMO1VBQUssVUFBVTtJQUFWLFdBQUEsV0FDVixZQUFTLFNBQVMsWUFBWSxJQUE5QjtHQURVLGVBQUE7SUFJTDtVQUFLLE9BQU87SUFBUCxRQUNWLFVBQVU7SUFDVixhQUFVO0lBRkEsUUFHVixLQUFLO0lBQ0wsYUFBVTtJQUpBLFFBS1YsT0FBTztJQUNQLGdCQUFhO0dBTkgsWUFBQSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYmY1MTZjMzFjNWMwMWI4Ny5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJiYWNrZ3JvdW5kL2luZGV4LnRzIiwidXRpbHMudHMiLCJtb2R1bGUvanVlamluLnRzIiwibW9kdWxlL2hlbHAudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInR5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIF89KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgdz1uZXcgU2V0KGcpLHk9ZT0+dy5oYXMoZSksJD1nLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGo9eShcIi0tZHJ5LXJ1blwiKSxtPSgpPT55KFwiLS12ZXJib3NlXCIpfHxfKCkuVkVSQk9TRT09PVwidHJ1ZVwiLEc9bSgpO3ZhciBmPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBiPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PmYoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxoPSguLi5lKT0+ZihcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+bSgpJiZmKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIFI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYWFyb24vcmVwb3MvQ2hlY2tNYW4vLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1NDAxN307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgQj1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBEKGUpe0IuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9RDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5jaHJvbWV8fGdsb2JhbFRoaXMuYnJvd3Nlcnx8bnVsbDtmdW5jdGlvbiB1KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHAoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciB4PVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFA9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgSD1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHt1KCl9OiR7cCgpfS9gO2FzeW5jIGZ1bmN0aW9uIFMoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKEgpO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGwucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1sLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBrKGU9cCgpKXtsZXQgdD11KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gVChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZiKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoayhOdW1iZXIocCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtpZihKU09OLnBhcnNlKG8uZGF0YSkudHlwZT09PVwiYnVpbGRfcmVhZHlcIil7YXdhaXQgZSgpO3JldHVybn19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFQpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoaygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGM9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtjK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgQz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gZChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWwucnVudGltZS5yZWxvYWQoKX19aWYoIUN8fCFDLmlzUGFyY2VsUmVxdWlyZSl7UigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGM9PmMuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChjPT5PYmplY3QudmFsdWVzKGMpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGM9PnMuaGFzKGMpKX1kKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IFMoKSxkKCEwKX0pfUwoYXN5bmMoKT0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGEuYnVpbGRSZWFkeXx8PSEwLGQoKX0pO2wucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoeCksbz1lLm5hbWUuc3RhcnRzV2l0aChQKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCksZCgpfSl9fSk7bC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIiksZCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZC9pbmRleFwiIiwiaW1wb3J0IHtcbiAgYm9keUhhbmRsZXJFbnRyeSxcbiAgY29tbW9uSGVhZGVySGFuZGxlckVudHJ5LFxuICBkb21haW5DaGVja0VudHJ5LFxuICBnZXREb21haW5Gcm9tRGV0YWlsc1xufSBmcm9tIFwifnV0aWxzXCJcblxuaW1wb3J0IHsgRVdlYnNpdGUgfSBmcm9tIFwifnR5cGVzXCJcblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihcbiAgZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICBjb21tb25IZWFkZXJIYW5kbGVyRW50cnkoZGV0YWlscylcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH1cbiAgfSxcbiAgeyB1cmxzOiBbRVdlYnNpdGUuanVlamluXSB9LFxuICBbXCJyZXF1ZXN0SGVhZGVyc1wiLCBcImV4dHJhSGVhZGVyc1wiXVxuKVxuXG4vLyBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJiZWZvcmUgcmVxdWVzdDpcIiwgZGV0YWlscz8ucmVxdWVzdEJvZHkpXG4vLyAgICAgLy8gZGV0YWlscz8ucmVxdWVzdEJvZHk/LnJhdz8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgIC8vICAgaWYgKGl0ZW0uYnl0ZXMpIHtcbi8vICAgICAvLyAgICAgY29uc3Qgc3RyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGl0ZW0uYnl0ZXMpXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIHJlcXVlc3Q6XCIsIHN0cilcbi8vICAgICAvLyAgIH1cbi8vICAgICAvLyB9KVxuLy8gICAgIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4vLyAgICAgYm9keUhhbmRsZXJFbnRyeShkZXRhaWxzLnJlcXVlc3RCb2R5LCBkb21haW4pXG4vLyAgICAgY29uc29sZS5sb2coZGV0YWlscylcbi8vICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH1cbi8vICAgfSxcbi8vICAgeyB1cmxzOiBbRVdlYnNpdGUuanVlamluXSB9LFxuLy8gICBbXCJyZXF1ZXN0Qm9keVwiLCBcImV4dHJhSGVhZGVyc1wiXVxuLy8gKVxuIiwiaW1wb3J0IHsganVlamluSGVhZGVySGFuZGxlciwganVlamluVXBsb2FkRGF0YUhhbmRsZXIgfSBmcm9tIFwifm1vZHVsZS9qdWVqaW5cIjtcbmltcG9ydCB7IEVXZWJzaXRlIH0gZnJvbSBcIn50eXBlc1wiXG5cbmV4cG9ydCBjb25zdCBnZXREb21haW5Gcm9tRGV0YWlscyA9IChcbiAgZGV0YWlsczogY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdERldGFpbHNcbikgPT4ge1xuICBjb25zdCB7IHVybCB9ID0gZGV0YWlsc1xuICByZXR1cm4gdXJsLnNwbGl0KFwiL1wiKVsyXVxufVxuXG5jb25zdCBoZWFkZXJIYW5kbGVyUmVjb3JkID0ge1xuICBbRVdlYnNpdGUuanVlamluSGVhZGVyXToganVlamluSGVhZGVySGFuZGxlclxufVxuXG5jb25zdCB1cGxvYWRIYW5kbGVyUmVjb3JkID0ge1xuICBbRVdlYnNpdGUuanVlamluSGVhZGVyXToganVlamluVXBsb2FkRGF0YUhhbmRsZXJcbn1cblxuZXhwb3J0IGNvbnN0IGRvbWFpbkNoZWNrRW50cnkgPSAoXG4gIGRldGFpbHM6XG4gICAgfCBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHNcbiAgICB8IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1xuKSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4gIGNvbnN0IGhlYWRlckhhbmRsZXIgPSBoZWFkZXJIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgLy8gaGVhZGVySGFuZGxlcj8uKGRldGFpbHMpXG4gIC8vIGRldGFpbHNcbiAgY29uc3QgdXBsb2FkSGFuZGxlciA9IHVwbG9hZEhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICB1cGxvYWRIYW5kbGVyPy4oZGV0YWlscylcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkhlYWRlckhhbmRsZXJFbnRyeSA9IChcbiAgZGV0YWlsczogY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzXG4pID0+IHtcbiAgY29uc3QgZG9tYWluID0gZ2V0RG9tYWluRnJvbURldGFpbHMoZGV0YWlscylcbiAgY29uc3QgaGVhZGVySGFuZGxlciA9IGhlYWRlckhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICBoZWFkZXJIYW5kbGVyPy4oZGV0YWlscylcbn1cblxuZXhwb3J0IGNvbnN0IGhlYWRlcnNIYW5kbGVyRW50cnkgPSAoKSA9PiB7fVxuXG5leHBvcnQgY29uc3QgYm9keUhhbmRsZXJFbnRyeSA9IChcbiAgcmVxdWVzdEJvZHk6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5LFxuICBkb21haW46IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiaGVhZGVyIGhhbmRsZXIgZW50cnk6XCIsIHJlcXVlc3RCb2R5KVxuICBjb25zb2xlLmxvZyhcImRvbWFpbjpcIiwgZG9tYWluKVxuICBjb25zdCBoZWFkZXJIYW5kbGVyID0gaGVhZGVySGFuZGxlclJlY29yZFtkb21haW5dXG4gIGhlYWRlckhhbmRsZXI/LihyZXF1ZXN0Qm9keSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVDaGVja0luWEhSRGF0YSA9IChjb29raWU6IHN0cmluZywgaGVhZGVyOiBhbnkpID0+IHtcbiAgY29uc3QgeGhyRGF0YSA9IHtcbiAgICBjb29raWUsXG4gICAgaGVhZGVyXG4gIH1cbiAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyB4aHJEYXRhIH0sICgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIuS/neWtmOaIkOWKn1wiKVxuICAvLyB9KVxuICBjb25zb2xlLmxvZyhcInhociBkYXRhOlwiLCB4aHJEYXRhKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVxdWVzdEJvZHlGcm9tV2ViUmVxdWVzdEJvZHlEZXRhaWxzID0gKFxuICByZXF1ZXN0Qm9keTogY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEJvZHlEZXRhaWxzW1wicmVxdWVzdEJvZHlcIl1cbikgPT4ge1xuICBpZiAocmVxdWVzdEJvZHk/LmVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gcmVxdWVzdCBib2R5IGVycm9yOlwiLCByZXF1ZXN0Qm9keS5lcnJvcilcbiAgICByZXR1cm4gcmVxdWVzdEJvZHkuZXJyb3JcbiAgfVxuICBpZiAocmVxdWVzdEJvZHk/LmZvcm1EYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gcmVxdWVzdCBib2R5IGZvcm1EYXRhOlwiLCByZXF1ZXN0Qm9keS5mb3JtRGF0YSlcbiAgICByZXR1cm4gcmVxdWVzdEJvZHkuZm9ybURhdGFcbiAgfVxuICBpZiAocmVxdWVzdEJvZHk/LnJhdykge1xuICAgIC8vIHJldHVybiByYXdcbiAgICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0IGJvZHkgcmF3OlwiLCByZXF1ZXN0Qm9keS5yYXcpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LnJhdy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmJ5dGVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUoaXRlbS5ieXRlcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keTpcIiwgcmVxdWVzdEJvZHkpXG4gIHJldHVybiBudWxsXG59XG5cbi8vIOivu+WPluaYr+WQpueCueWHu+W3suivu3RpcFxuZXhwb3J0IGNvbnN0IGdldElzQ2xpY2tUaXAgPSBhc3luYyAoY2FsbGJhY2s6IChyZXN1bHQ6IGJvb2xlYW4pID0+IHZvaWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImlzQ2xpY2tUaXBcIl0pXG4gIGNvbnNvbGUubG9nKFwiZ2V0IHJlc3VsdDpcIiwgcmVzdWx0KVxuICBjYWxsYmFjayhyZXN1bHQuaXNDbGlja1RpcClcbn1cblxuLy8g6K6+572u5piv5ZCm54K55Ye75bey6K+7dGlwXG5leHBvcnQgY29uc3Qgc2V0SXNDbGlja1RpcCA9IChpc0NsaWNrVGlwOiBib29sZWFuKSA9PiB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQ2xpY2tUaXAgfSwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5oiQ5YqfXCIpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBhc3luY1NsZWVwID0gKG1zOiBudW1iZXIgPSAxNTAwKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG59IiwiaW1wb3J0IHsgZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzLCBzYXZlV2Vic2l0ZUhlYWRlciB9IGZyb20gXCIuL2hlbHBcIlxuXG5pbXBvcnQgeyBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuaW1wb3J0IHsgZ2V0UmVxdWVzdEJvZHlGcm9tV2ViUmVxdWVzdEJvZHlEZXRhaWxzIH0gZnJvbSBcIn51dGlsc1wiXG5cbi8qKlxuICoganVlamluLmNuIOaooeWdl1xuICovXG5leHBvcnQgY29uc3QganVlamluVXBsb2FkRGF0YUhhbmRsZXIgPSBhc3luYyAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1xuKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3Q6XCIsIGRldGFpbHMpXG4gIGNvbnN0IHsgbWV0aG9kLCByZXF1ZXN0Qm9keSB9ID0gZGV0YWlsc1xuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHVwbG9hZERhdGEgPSBnZXRSZXF1ZXN0Qm9keUZyb21XZWJSZXF1ZXN0Qm9keURldGFpbHMocmVxdWVzdEJvZHkpXG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gdXBsb2FkIGRhdGE6XCIsIHVwbG9hZERhdGEpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGp1ZWppbkhlYWRlckhhbmRsZXIgPSBhc3luYyAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc1xuKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicmF3IGRldGFpbHM6XCIsIGRldGFpbHMpXG4gIGNvbnN0IHsgdXJsLCByZXF1ZXN0SGVhZGVycyB9ID0gZGV0YWlsc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoRVdlYnNpdGUuanVlamluQ2hlY2tJblVybCkpIHtcbiAgICAvLyByZXNvbHZlIGhlYWRlcnNcbiAgICBjb25zdCBoZWFkZXIgPSBnZXRIZWFkZXJGcm9tUmVxdWVzdEhlYWRlcnMocmVxdWVzdEhlYWRlcnMpXG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gaGVhZGVyOlwiLCBoZWFkZXIpXG4gICAgc2F2ZVdlYnNpdGVIZWFkZXIoRVdlYnNpdGUuanVlamluSGVhZGVyLCBoZWFkZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IEVTdGF0dXMsIEVTdG9yYWdlS2V5LCBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzID0gKFxuICByZXF1ZXN0SGVhZGVyczogY2hyb21lLndlYlJlcXVlc3QuSHR0cEhlYWRlcltdXG4pID0+IHtcbiAgcmV0dXJuIHJlcXVlc3RIZWFkZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICBhY2NbY3VyLm5hbWVdID0gY3VyLnZhbHVlXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVdlYnNpdGVIZWFkZXIgPSBhc3luYyAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICBbYGhlYWRlci0ke2tleX1gXTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOermeeCueWktOmDqOWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0V2Vic2l0ZUhlYWRlciA9IGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICBjb25zdCByZWFsS2V5ID0gYGhlYWRlci0ke2tleX1gXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQocmVhbEtleSlcbiAgICByZXR1cm4gcmVzW3JlYWxLZXldXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCLojrflj5bnq5nngrnlpLTpg6jlpLHotKVcIiwgZXJyb3IpXG4gICAgY29uc29sZS5sb2coXCJrZXk6XCIsIHJlYWxLZXkpXG4gIH1cbn1cblxuLy8g5L+d5a2Y56uZ54K55piv5ZCm5ZCv55So562+5Yiw55qE54q25oCBXG5leHBvcnQgY29uc3Qgc2F2ZVdlYnNpdGVDaGVja0luU3RhdHVzID0gYXN5bmMgKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikgPT4ge1xuICB0cnkge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgIFtgY2hlY2tJbi0ke2tleX1gXTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOermeeCueetvuWIsOeKtuaAgeWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG4vLyDor7vlj5bnq5nngrnmmK/lkKblkK/nlKjnrb7liLDnmoTnirbmgIFcbmV4cG9ydCBjb25zdCBjaGVja0lzRW5hYmxlQnlXZWJzaXRlS2V5ID0gYXN5bmMgKGtleTogRVdlYnNpdGUpID0+IHtcbiAgY29uc3QgcmVhbEtleSA9IGBjaGVja0luLSR7a2V5fWBcbiAgdHJ5IHtcbiAgICAvLyDor7vlj5bphY3nva7vvIzmo4Dmn6XmmK/lkKblkK/nlKhcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChyZWFsS2V5KVxuICAgIHJldHVybiByZXNbcmVhbEtleV0gPz8gZmFsc2VcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIuiOt+WPluermeeCueetvuWIsOeKtuaAgeWksei0pVwiLCBlcnJvcilcbiAgICBjb25zb2xlLmxvZyhcImtleTpcIiwgcmVhbEtleSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGVudW0gRVdlYnNpdGUge1xuICBqdWVqaW4gPSBcImh0dHBzOi8vYXBpLmp1ZWppbi5jbi8qXCIsXG4gIGp1ZWppbkhlYWRlciA9IFwiYXBpLmp1ZWppbi5jblwiLFxuICBqdWVqaW5DaGVja0luVXJsID0gXCJodHRwczovL2FwaS5qdWVqaW4uY24vZ3Jvd3RoX2FwaS92MS9jaGVja19pbj9cIixcbiAganVlamluQ2hlY2tJblBhZ2UgPSBcImh0dHBzOi8vanVlamluLmNuL3VzZXIvY2VudGVyL3NpZ25pbj9mcm9tPW1haW5fcGFnZVwiXG59XG5cbmV4cG9ydCBlbnVtIEVTdG9yYWdlS2V5IHtcbiAgLy8g562+5Yiw6K6w5b2V6YWN572uXG4gIENoZWNrSW5SZWNvcmQgPSBcImNoZWNrSW5SZWNvcmRcIixcbiAgLy8g56uZ54K55aS06YOo6YWN572uXG4gIFdlYnNpdGVIZWFkZXIgPSBcIndlYnNpdGVIZWFkZXJcIixcbiAgLy8g56uZ54K56K+35rGC5L2T6YWN572uXG4gIFdlYnNpdGVCb2R5ID0gXCJ3ZWJzaXRlQm9keVwiXG59XG5cbmV4cG9ydCBlbnVtIEVTdGF0dXNLZXkge1xuICBqdWVqaW4gPSBFV2Vic2l0ZS5qdWVqaW5IZWFkZXJcbn1cblxuZXhwb3J0IGVudW0gRVN0YXR1cyB7XG4gIC8vIFN1Y2Nlc3NcbiAgU3VjY2VzcyA9IFwic3VjY2Vzc1wiLFxuICAvLyDnpoHnlKhcbiAgRGlzYWJsZSA9IFwiZGlzYWJsZVwiLFxuICAvLyDnrYnlvoXph43nva5cbiAgV2FpdDJSZXNldCA9IFwid2FpdDJSZXNldFwiXG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC43MDRjOTFmMS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);