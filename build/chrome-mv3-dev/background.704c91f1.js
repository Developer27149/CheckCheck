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
})({"cDluH":[function(require,module,exports) {
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
    "serverPort": 54606
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
parcelHelpers.export(exports, "initStorageCheckTask", ()=>initStorageCheckTask);
var _help = require("~module/help");
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
    callback(!!result["isClickTip"]);
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
const initStorageCheckTask = async (callback)=>{
    // \u68c0\u67e5\u5df2\u542f\u7528\u7684\u6570\u636e
    const record = await (0, _help.getSyncCheckStatusRecord)();
    callback(record);
};

},{"~module/help":"eDJuM","~module/juejin":"pBn2q","~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eDJuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHeaderFromRequestHeaders", ()=>getHeaderFromRequestHeaders);
parcelHelpers.export(exports, "saveWebsiteHeader", ()=>saveWebsiteHeader);
parcelHelpers.export(exports, "getWebsiteHeader", ()=>getWebsiteHeader);
parcelHelpers.export(exports, "saveWebsiteCheckInStatus", ()=>saveWebsiteCheckInStatus);
parcelHelpers.export(exports, "getSyncCheckStatusRecord", ()=>getSyncCheckStatusRecord);
parcelHelpers.export(exports, "checkIsEnableByWebsiteKey", ()=>checkIsEnableByWebsiteKey);
parcelHelpers.export(exports, "saveCheckInRecord", ()=>saveCheckInRecord);
var _types = require("~types");
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
const getSyncCheckStatusRecord = async ()=>{
    const record = await chrome.storage.sync.get((0, _types.EStorageKey).\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868);
    return record[(0, _types.EStorageKey).\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868] ?? new Map();
};
const saveSyncCheckStatusRecord = (record)=>chrome.storage.sync.set({
        [(0, _types.EStorageKey).\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868]: record
    });
const checkIsEnableByWebsiteKey = async (key)=>{
    try {
        const record = await getSyncCheckStatusRecord();
        return record.has(key) ? record.get(key) : true;
    } catch (error) {
        console.log("failed: get status by key:", key);
        return false;
    }
};
const saveCheckInRecord = async (key, value)=>{
    try {
        const record = await getSyncCheckStatusRecord();
        record[key] = value;
        await saveSyncCheckStatusRecord(record);
    } catch (error) {
        console.log("key:", key, " value:", value);
        console.log("\u4fdd\u5b58\u7b7e\u5230\u8bb0\u5f55\u542f\u7528\u72b6\u6001\u5931\u8d25", error);
    }
};

},{"~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"NoMjA":[function(require,module,exports) {
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
    EStatus["Disable"] = "disable";
    EStatus["Enable"] = "enable";
})(EStatus || (EStatus = {}));
(function(EStorageKey) {
    EStorageKey["\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868"] = "checkInEnableStatus";
    EStorageKey["\u7b7e\u5230\u8bb0\u5f55\u8868"] = "checkInRecord";
})(EStorageKey || (EStorageKey = {}));

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

},{}],"pBn2q":[function(require,module,exports) {
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

},{"./help":"eDJuM","~types":"NoMjA","~utils":"cpxsN","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["cDluH","8oeFb"], "8oeFb", "parcelRequiref79d")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QixDQUFBLEdBQUEsdUJBQWlCLEFBQUQsRUFBRSxDQUFBLEdBQUEsZUFBUSxBQUFELEVBQUUsWUFBWSxFQUFFO0lBQzNDLENBQUM7QUFDSCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtOWQ5NTg5Nzk2OTgwODE3NS5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJiYWNrZ3JvdW5kL2luZGV4LnRzIiwidXRpbHMudHMiLCJtb2R1bGUvaGVscC50cyIsInR5cGVzLnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJtb2R1bGUvanVlamluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIF89KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgdz1uZXcgU2V0KGcpLHk9ZT0+dy5oYXMoZSksJD1nLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGo9eShcIi0tZHJ5LXJ1blwiKSxtPSgpPT55KFwiLS12ZXJib3NlXCIpfHxfKCkuVkVSQk9TRT09PVwidHJ1ZVwiLEc9bSgpO3ZhciBmPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBiPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PmYoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxoPSguLi5lKT0+ZihcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+bSgpJiZmKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIFI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYWFyb24vcmVwb3MvQ2hlY2tNYW4vLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1NDYwNn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgQj1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBEKGUpe0IuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9RDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5jaHJvbWV8fGdsb2JhbFRoaXMuYnJvd3Nlcnx8bnVsbDtmdW5jdGlvbiB1KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHAoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciB4PVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFA9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgSD1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHt1KCl9OiR7cCgpfS9gO2FzeW5jIGZ1bmN0aW9uIFMoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKEgpO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGwucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1sLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBrKGU9cCgpKXtsZXQgdD11KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gVChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZiKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoayhOdW1iZXIocCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtpZihKU09OLnBhcnNlKG8uZGF0YSkudHlwZT09PVwiYnVpbGRfcmVhZHlcIil7YXdhaXQgZSgpO3JldHVybn19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFQpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoaygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGM9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtjK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgQz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gZChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWwucnVudGltZS5yZWxvYWQoKX19aWYoIUN8fCFDLmlzUGFyY2VsUmVxdWlyZSl7UigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGM9PmMuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChjPT5PYmplY3QudmFsdWVzKGMpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGM9PnMuaGFzKGMpKX1kKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IFMoKSxkKCEwKX0pfUwoYXN5bmMoKT0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGEuYnVpbGRSZWFkeXx8PSEwLGQoKX0pO2wucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoeCksbz1lLm5hbWUuc3RhcnRzV2l0aChQKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCksZCgpfSl9fSk7bC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIiksZCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZC9pbmRleFwiIiwiaW1wb3J0IHtcbiAgYm9keUhhbmRsZXJFbnRyeSxcbiAgY29tbW9uSGVhZGVySGFuZGxlckVudHJ5LFxuICBkb21haW5DaGVja0VudHJ5LFxuICBnZXREb21haW5Gcm9tRGV0YWlsc1xufSBmcm9tIFwifnV0aWxzXCJcblxuaW1wb3J0IHsgRVdlYnNpdGUgfSBmcm9tIFwifnR5cGVzXCJcblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihcbiAgZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICBjb21tb25IZWFkZXJIYW5kbGVyRW50cnkoZGV0YWlscylcbiAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH1cbiAgfSxcbiAgeyB1cmxzOiBbRVdlYnNpdGUuanVlamluXSB9LFxuICBbXCJyZXF1ZXN0SGVhZGVyc1wiLCBcImV4dHJhSGVhZGVyc1wiXVxuKVxuXG4vLyBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4vLyAgIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJiZWZvcmUgcmVxdWVzdDpcIiwgZGV0YWlscz8ucmVxdWVzdEJvZHkpXG4vLyAgICAgLy8gZGV0YWlscz8ucmVxdWVzdEJvZHk/LnJhdz8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgIC8vICAgaWYgKGl0ZW0uYnl0ZXMpIHtcbi8vICAgICAvLyAgICAgY29uc3Qgc3RyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGl0ZW0uYnl0ZXMpXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIHJlcXVlc3Q6XCIsIHN0cilcbi8vICAgICAvLyAgIH1cbi8vICAgICAvLyB9KVxuLy8gICAgIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4vLyAgICAgYm9keUhhbmRsZXJFbnRyeShkZXRhaWxzLnJlcXVlc3RCb2R5LCBkb21haW4pXG4vLyAgICAgY29uc29sZS5sb2coZGV0YWlscylcbi8vICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlIH1cbi8vICAgfSxcbi8vICAgeyB1cmxzOiBbRVdlYnNpdGUuanVlamluXSB9LFxuLy8gICBbXCJyZXF1ZXN0Qm9keVwiLCBcImV4dHJhSGVhZGVyc1wiXVxuLy8gKVxuIiwiaW1wb3J0IHsgZ2V0U3luY0NoZWNrU3RhdHVzUmVjb3JkIH0gZnJvbSBcIn5tb2R1bGUvaGVscFwiXG5pbXBvcnQgeyBqdWVqaW5IZWFkZXJIYW5kbGVyLCBqdWVqaW5VcGxvYWREYXRhSGFuZGxlciB9IGZyb20gXCJ+bW9kdWxlL2p1ZWppblwiXG5pbXBvcnQgeyBFU3RvcmFnZUtleSwgRVdlYnNpdGUsIFRTaWduSW5FbmFibGVNYXAsIHR5cGUgfSBmcm9tIFwifnR5cGVzXCJcblxuZXhwb3J0IGNvbnN0IGdldERvbWFpbkZyb21EZXRhaWxzID0gKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0RGV0YWlsc1xuKSA9PiB7XG4gIGNvbnN0IHsgdXJsIH0gPSBkZXRhaWxzXG4gIHJldHVybiB1cmwuc3BsaXQoXCIvXCIpWzJdXG59XG5cbmNvbnN0IGhlYWRlckhhbmRsZXJSZWNvcmQgPSB7XG4gIFtFV2Vic2l0ZS5qdWVqaW5IZWFkZXJdOiBqdWVqaW5IZWFkZXJIYW5kbGVyXG59XG5cbmNvbnN0IHVwbG9hZEhhbmRsZXJSZWNvcmQgPSB7XG4gIFtFV2Vic2l0ZS5qdWVqaW5IZWFkZXJdOiBqdWVqaW5VcGxvYWREYXRhSGFuZGxlclxufVxuXG5leHBvcnQgY29uc3QgZG9tYWluQ2hlY2tFbnRyeSA9IChcbiAgZGV0YWlsczpcbiAgICB8IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc1xuICAgIHwgY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEJvZHlEZXRhaWxzXG4pID0+IHtcbiAgY29uc3QgZG9tYWluID0gZ2V0RG9tYWluRnJvbURldGFpbHMoZGV0YWlscylcbiAgY29uc3QgaGVhZGVySGFuZGxlciA9IGhlYWRlckhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICAvLyBoZWFkZXJIYW5kbGVyPy4oZGV0YWlscylcbiAgLy8gZGV0YWlsc1xuICBjb25zdCB1cGxvYWRIYW5kbGVyID0gdXBsb2FkSGFuZGxlclJlY29yZFtkb21haW5dXG4gIHVwbG9hZEhhbmRsZXI/LihkZXRhaWxzKVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uSGVhZGVySGFuZGxlckVudHJ5ID0gKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHNcbikgPT4ge1xuICBjb25zdCBkb21haW4gPSBnZXREb21haW5Gcm9tRGV0YWlscyhkZXRhaWxzKVxuICBjb25zdCBoZWFkZXJIYW5kbGVyID0gaGVhZGVySGFuZGxlclJlY29yZFtkb21haW5dXG4gIGhlYWRlckhhbmRsZXI/LihkZXRhaWxzKVxufVxuXG5leHBvcnQgY29uc3QgaGVhZGVyc0hhbmRsZXJFbnRyeSA9ICgpID0+IHt9XG5cbmV4cG9ydCBjb25zdCBib2R5SGFuZGxlckVudHJ5ID0gKFxuICByZXF1ZXN0Qm9keTogY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEJvZHksXG4gIGRvbWFpbjogc3RyaW5nXG4pID0+IHtcbiAgY29uc29sZS5sb2coXCJoZWFkZXIgaGFuZGxlciBlbnRyeTpcIiwgcmVxdWVzdEJvZHkpXG4gIGNvbnNvbGUubG9nKFwiZG9tYWluOlwiLCBkb21haW4pXG4gIGNvbnN0IGhlYWRlckhhbmRsZXIgPSBoZWFkZXJIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgaGVhZGVySGFuZGxlcj8uKHJlcXVlc3RCb2R5KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZUNoZWNrSW5YSFJEYXRhID0gKGNvb2tpZTogc3RyaW5nLCBoZWFkZXI6IGFueSkgPT4ge1xuICBjb25zdCB4aHJEYXRhID0ge1xuICAgIGNvb2tpZSxcbiAgICBoZWFkZXJcbiAgfVxuICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHhockRhdGEgfSwgKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5oiQ5YqfXCIpXG4gIC8vIH0pXG4gIGNvbnNvbGUubG9nKFwieGhyIGRhdGE6XCIsIHhockRhdGEpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZXF1ZXN0Qm9keUZyb21XZWJSZXF1ZXN0Qm9keURldGFpbHMgPSAoXG4gIHJlcXVlc3RCb2R5OiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keURldGFpbHNbXCJyZXF1ZXN0Qm9keVwiXVxuKSA9PiB7XG4gIGlmIChyZXF1ZXN0Qm9keT8uZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0IGJvZHkgZXJyb3I6XCIsIHJlcXVlc3RCb2R5LmVycm9yKVxuICAgIHJldHVybiByZXF1ZXN0Qm9keS5lcnJvclxuICB9XG4gIGlmIChyZXF1ZXN0Qm9keT8uZm9ybURhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0IGJvZHkgZm9ybURhdGE6XCIsIHJlcXVlc3RCb2R5LmZvcm1EYXRhKVxuICAgIHJldHVybiByZXF1ZXN0Qm9keS5mb3JtRGF0YVxuICB9XG4gIGlmIChyZXF1ZXN0Qm9keT8ucmF3KSB7XG4gICAgLy8gcmV0dXJuIHJhd1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSByYXc6XCIsIHJlcXVlc3RCb2R5LnJhdylcbiAgICByZXR1cm4gcmVxdWVzdEJvZHkucmF3Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uYnl0ZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpLmRlY29kZShpdGVtLmJ5dGVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29uc29sZS5sb2coXCJqdWVqaW4gcmVxdWVzdCBib2R5OlwiLCByZXF1ZXN0Qm9keSlcbiAgcmV0dXJuIG51bGxcbn1cblxuLy8g6K+75Y+W5piv5ZCm54K55Ye75bey6K+7dGlwXG5leHBvcnQgY29uc3QgZ2V0SXNDbGlja1RpcCA9IGFzeW5jIChjYWxsYmFjazogKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wiaXNDbGlja1RpcFwiXSlcbiAgY2FsbGJhY2soISFyZXN1bHRbXCJpc0NsaWNrVGlwXCJdKVxufVxuXG4vLyDorr7nva7mmK/lkKbngrnlh7vlt7Lor7t0aXBcbmV4cG9ydCBjb25zdCBzZXRJc0NsaWNrVGlwID0gKGlzQ2xpY2tUaXA6IGJvb2xlYW4pID0+IHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaXNDbGlja1RpcCB9LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLkv53lrZjmiJDlip9cIilcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGFzeW5jU2xlZXAgPSAobXM6IG51bWJlciA9IDE1MDApID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbn1cblxuLy8g6K+75Y+W5bqU55So55qE562+5Yiw6K6w5b2VLCDliJ3lp4vljJbmiYDmnInmj5Lku7bmqKHlnZfnmoTnirbmgIFcbmV4cG9ydCBjb25zdCBpbml0U3RvcmFnZUNoZWNrVGFzayA9IGFzeW5jIChcbiAgY2FsbGJhY2s6IChyZWNvcmQ6IFRTaWduSW5FbmFibGVNYXApID0+IHVua25vd25cbikgPT4ge1xuICAvLyDmo4Dmn6Xlt7LlkK/nlKjnmoTmlbDmja5cbiAgY29uc3QgcmVjb3JkID0gYXdhaXQgZ2V0U3luY0NoZWNrU3RhdHVzUmVjb3JkKClcbiAgY2FsbGJhY2socmVjb3JkKVxufVxuIiwiaW1wb3J0IHsgRVN0YXR1cywgRVN0b3JhZ2VLZXksIEVXZWJzaXRlLCBUU2lnbkluRW5hYmxlTWFwLCB0eXBlIH0gZnJvbSBcIn50eXBlc1wiXG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXJGcm9tUmVxdWVzdEhlYWRlcnMgPSAoXG4gIHJlcXVlc3RIZWFkZXJzOiBjaHJvbWUud2ViUmVxdWVzdC5IdHRwSGVhZGVyW11cbikgPT4ge1xuICByZXR1cm4gcmVxdWVzdEhlYWRlcnMucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgIGFjY1tjdXIubmFtZV0gPSBjdXIudmFsdWVcbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlV2Vic2l0ZUhlYWRlciA9IGFzeW5jIChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICB0cnkge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgIFtgaGVhZGVyLSR7a2V5fWBdOiB2YWx1ZVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJrZXk6XCIsIGtleSwgXCIgdmFsdWU6XCIsIHZhbHVlKVxuICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y56uZ54K55aS06YOo5aSx6LSlXCIsIGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXZWJzaXRlSGVhZGVyID0gYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlYWxLZXkgPSBgaGVhZGVyLSR7a2V5fWBcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChyZWFsS2V5KVxuICAgIHJldHVybiByZXNbcmVhbEtleV1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIuiOt+WPluermeeCueWktOmDqOWksei0pVwiLCBlcnJvcilcbiAgICBjb25zb2xlLmxvZyhcImtleTpcIiwgcmVhbEtleSlcbiAgfVxufVxuXG4vLyDkv53lrZjnq5nngrnmmK/lkKblkK/nlKjnrb7liLDnmoTnirbmgIFcbmV4cG9ydCBjb25zdCBzYXZlV2Vic2l0ZUNoZWNrSW5TdGF0dXMgPSBhc3luYyAoa2V5OiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSA9PiB7XG4gIHRyeSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgICAgW2BjaGVja0luLSR7a2V5fWBdOiB2YWx1ZVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJrZXk6XCIsIGtleSwgXCIgdmFsdWU6XCIsIHZhbHVlKVxuICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y56uZ54K5562+5Yiw54q25oCB5aSx6LSlXCIsIGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTeW5jQ2hlY2tTdGF0dXNSZWNvcmQgPSBhc3luYyAoKTogUHJvbWlzZTxUU2lnbkluRW5hYmxlTWFwPiA9PiB7XG4gIGNvbnN0IHJlY29yZCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KEVTdG9yYWdlS2V5LuetvuWIsOWQr+eUqOeKtuaAgeihqClcbiAgcmV0dXJuIHJlY29yZFtFU3RvcmFnZUtleS7nrb7liLDlkK/nlKjnirbmgIHooahdID8/IG5ldyBNYXAoKVxufVxuXG5jb25zdCBzYXZlU3luY0NoZWNrU3RhdHVzUmVjb3JkID0gKHJlY29yZDogVFNpZ25JbkVuYWJsZU1hcCkgPT5cbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgIFtFU3RvcmFnZUtleS7nrb7liLDlkK/nlKjnirbmgIHooahdOiByZWNvcmRcbiAgfSlcblxuLy8g6K+75Y+W56uZ54K55piv5ZCm5ZCv55So562+5Yiw55qE54q25oCBXG5leHBvcnQgY29uc3QgY2hlY2tJc0VuYWJsZUJ5V2Vic2l0ZUtleSA9IGFzeW5jIChrZXk6IEVXZWJzaXRlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZ2V0U3luY0NoZWNrU3RhdHVzUmVjb3JkKClcbiAgICByZXR1cm4gcmVjb3JkLmhhcyhrZXkpID8gcmVjb3JkLmdldChrZXkpIDogdHJ1ZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkOiBnZXQgc3RhdHVzIGJ5IGtleTpcIiwga2V5KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIOS/neWtmOetvuWIsOiusOW9leWQr+eUqOeKtuaAgVxuZXhwb3J0IGNvbnN0IHNhdmVDaGVja0luUmVjb3JkID0gYXN5bmMgKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGdldFN5bmNDaGVja1N0YXR1c1JlY29yZCgpXG4gICAgcmVjb3JkW2tleV0gPSB2YWx1ZVxuICAgIGF3YWl0IHNhdmVTeW5jQ2hlY2tTdGF0dXNSZWNvcmQocmVjb3JkKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOetvuWIsOiusOW9leWQr+eUqOeKtuaAgeWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gRVdlYnNpdGUge1xuICBqdWVqaW4gPSBcImh0dHBzOi8vYXBpLmp1ZWppbi5jbi8qXCIsXG4gIGp1ZWppbkhlYWRlciA9IFwiYXBpLmp1ZWppbi5jblwiLFxuICBqdWVqaW5DaGVja0luVXJsID0gXCJodHRwczovL2FwaS5qdWVqaW4uY24vZ3Jvd3RoX2FwaS92MS9jaGVja19pbj9cIixcbiAganVlamluQ2hlY2tJblBhZ2UgPSBcImh0dHBzOi8vanVlamluLmNuL3VzZXIvY2VudGVyL3NpZ25pbj9mcm9tPW1haW5fcGFnZVwiXG59XG5cbmV4cG9ydCBlbnVtIEVTdG9yYWdlS2V5IHtcbiAgLy8g562+5Yiw6K6w5b2V6YWN572uXG4gIENoZWNrSW5SZWNvcmQgPSBcImNoZWNrSW5SZWNvcmRcIixcbiAgLy8g56uZ54K55aS06YOo6YWN572uXG4gIFdlYnNpdGVIZWFkZXIgPSBcIndlYnNpdGVIZWFkZXJcIixcbiAgLy8g56uZ54K56K+35rGC5L2T6YWN572uXG4gIFdlYnNpdGVCb2R5ID0gXCJ3ZWJzaXRlQm9keVwiXG59XG5cbmV4cG9ydCBlbnVtIEVTdGF0dXNLZXkge1xuICBqdWVqaW4gPSBFV2Vic2l0ZS5qdWVqaW5IZWFkZXJcbn1cblxuZXhwb3J0IGVudW0gRVN0YXR1cyB7XG4gIERpc2FibGUgPSBcImRpc2FibGVcIixcbiAgRW5hYmxlID0gXCJlbmFibGVcIlxufVxuXG4vLyBzaWduIGluIHN0YXR1cyByZWNvcmRcbmV4cG9ydCBlbnVtIEVTdG9yYWdlS2V5IHtcbiAg562+5Yiw5ZCv55So54q25oCB6KGoID0gXCJjaGVja0luRW5hYmxlU3RhdHVzXCIsXG4gIOetvuWIsOiusOW9leihqCA9IFwiY2hlY2tJblJlY29yZFwiXG59XG5cbmV4cG9ydCB0eXBlIFRTaWduSW5FbmFibGVNYXAgPSBNYXA8c3RyaW5nLCBib29sZWFuPiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGdldEhlYWRlckZyb21SZXF1ZXN0SGVhZGVycywgc2F2ZVdlYnNpdGVIZWFkZXIgfSBmcm9tIFwiLi9oZWxwXCJcblxuaW1wb3J0IHsgRVdlYnNpdGUgfSBmcm9tIFwifnR5cGVzXCJcbmltcG9ydCB7IGdldFJlcXVlc3RCb2R5RnJvbVdlYlJlcXVlc3RCb2R5RGV0YWlscyB9IGZyb20gXCJ+dXRpbHNcIlxuXG4vKipcbiAqIGp1ZWppbi5jbiDmqKHlnZdcbiAqL1xuZXhwb3J0IGNvbnN0IGp1ZWppblVwbG9hZERhdGFIYW5kbGVyID0gYXN5bmMgKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keURldGFpbHNcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0OlwiLCBkZXRhaWxzKVxuICBjb25zdCB7IG1ldGhvZCwgcmVxdWVzdEJvZHkgfSA9IGRldGFpbHNcbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB1cGxvYWREYXRhID0gZ2V0UmVxdWVzdEJvZHlGcm9tV2ViUmVxdWVzdEJvZHlEZXRhaWxzKHJlcXVlc3RCb2R5KVxuICAgIGNvbnNvbGUubG9nKFwianVlamluIHVwbG9hZCBkYXRhOlwiLCB1cGxvYWREYXRhKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBqdWVqaW5IZWFkZXJIYW5kbGVyID0gYXN5bmMgKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHNcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcInJhdyBkZXRhaWxzOlwiLCBkZXRhaWxzKVxuICBjb25zdCB7IHVybCwgcmVxdWVzdEhlYWRlcnMgfSA9IGRldGFpbHNcbiAgaWYgKHVybC5zdGFydHNXaXRoKEVXZWJzaXRlLmp1ZWppbkNoZWNrSW5VcmwpKSB7XG4gICAgLy8gcmVzb2x2ZSBoZWFkZXJzXG4gICAgY29uc3QgaGVhZGVyID0gZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzKHJlcXVlc3RIZWFkZXJzKVxuICAgIGNvbnNvbGUubG9nKFwianVlamluIGhlYWRlcjpcIiwgaGVhZGVyKVxuICAgIHNhdmVXZWJzaXRlSGVhZGVyKEVXZWJzaXRlLmp1ZWppbkhlYWRlciwgaGVhZGVyKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC43MDRjOTFmMS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);