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
})({"bdBET":[function(require,module,exports) {
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
    "serverPort": 62272
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
const initStorageCheckTask = async (callback)=>{
    // \u68c0\u67e5\u5df2\u542f\u7528\u7684\u6570\u636e
    const record = await (0, _help.getSyncCheckStatusRecord)();
    console.log("record:", record);
    callback(record);
};

},{"~module/juejin":"pBn2q","~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM","~module/help":"eDJuM"}],"pBn2q":[function(require,module,exports) {
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
    return record[(0, _types.EStorageKey).\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868] ?? {};
};
const saveSyncCheckStatusRecord = (record)=>chrome.storage.sync.set({
        [(0, _types.EStorageKey).\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868]: record
    });
const checkIsEnableByWebsiteKey = async (key)=>{
    try {
        const record = await getSyncCheckStatusRecord();
        return !!record[key];
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM","~types":"NoMjA"}],"iIXqM":[function(require,module,exports) {
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
(function(EStorageKey) {
    EStorageKey["\u7b7e\u5230\u542f\u7528\u72b6\u6001\u8868"] = "checkInEnableStatus";
    EStorageKey["\u7b7e\u5230\u8bb0\u5f55\u8868"] = "checkInRecord";
})(EStorageKey || (EStorageKey = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["bdBET","8oeFb"], "8oeFb", "parcelRequiref79d")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssT0FBTztJQUFQLFFBQ1YsVUFBVTtJQUNWLGFBQVU7SUFGQSxRQUdWLEtBQUs7SUFDTCxhQUFVO0lBSkEsUUFLVixPQUFPO0lBQ1AsZ0JBQWE7R0FOSCxZQUFBO1VBYUEsV0FBVztJQUFYLFlBQ1YsYUFBVTtJQURBLFlBRVYsV0FBUTtHQUZFLGdCQUFBIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1iZTEzNmY0Y2Q4NmI5MGRiLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQvaW5kZXgudHMiLCJ1dGlscy50cyIsIm1vZHVsZS9qdWVqaW4udHMiLCJtb2R1bGUvaGVscC50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwidHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgXz0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciB3PW5ldyBTZXQoZykseT1lPT53LmhhcyhlKSwkPWcuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgaj15KFwiLS1kcnktcnVuXCIpLG09KCk9PnkoXCItLXZlcmJvc2VcIil8fF8oKS5WRVJCT1NFPT09XCJ0cnVlXCIsRz1tKCk7dmFyIGY9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGI9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+ZihcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGg9KC4uLmUpPT5mKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5tKCkmJmYoYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgUj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9hYXJvbi9yZXBvcy9DaGVja01hbi8ucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjYyMjcyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBCPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEQoZSl7Qi5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1EO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmNocm9tZXx8Z2xvYmFsVGhpcy5icm93c2VyfHxudWxsO2Z1bmN0aW9uIHUoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gcCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIHg9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUD1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBIPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke3UoKX06JHtwKCl9L2A7YXN5bmMgZnVuY3Rpb24gUyhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goSCk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYobC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWwucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGsoZT1wKCkpe2xldCB0PXUoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBUKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmIoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBMKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChrKE51bWJlcihwKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2lmKEpTT04ucGFyc2Uoby5kYXRhKS50eXBlPT09XCJidWlsZF9yZWFkeVwiKXthd2FpdCBlKCk7cmV0dXJufX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChrKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgYz1yLmNvZGVmcmFtZXx8ci5zdGFjaztoKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2MrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixUKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2goYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBDPW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBkKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9bC5ydW50aW1lLnJlbG9hZCgpfX1pZighQ3x8IUMuaXNQYXJjZWxSZXF1aXJlKXtSKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAoYz0+Yy5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGM9Pk9iamVjdC52YWx1ZXMoYykpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkoYz0+cy5oYXMoYykpfWQoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgUygpLGQoITApfSl9TChhc3luYygpPT57aShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksYS5idWlsZFJlYWR5fHw9ITAsZCgpfSk7bC5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aCh4KSxvPWUubmFtZS5zdGFydHNXaXRoKFApO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxkKCl9KX19KTtsLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxkKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kL2luZGV4XCIiLCJpbXBvcnQge1xuICBib2R5SGFuZGxlckVudHJ5LFxuICBjb21tb25IZWFkZXJIYW5kbGVyRW50cnksXG4gIGRvbWFpbkNoZWNrRW50cnksXG4gIGdldERvbWFpbkZyb21EZXRhaWxzXG59IGZyb20gXCJ+dXRpbHNcIlxuXG5pbXBvcnQgeyBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKFxuICBmdW5jdGlvbiAoZGV0YWlscykge1xuICAgIGNvbW1vbkhlYWRlckhhbmRsZXJFbnRyeShkZXRhaWxzKVxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfVxuICB9LFxuICB7IHVybHM6IFtFV2Vic2l0ZS5qdWVqaW5dIH0sXG4gIFtcInJlcXVlc3RIZWFkZXJzXCIsIFwiZXh0cmFIZWFkZXJzXCJdXG4pXG5cbi8vIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbi8vICAgZnVuY3Rpb24gKGRldGFpbHMpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcImJlZm9yZSByZXF1ZXN0OlwiLCBkZXRhaWxzPy5yZXF1ZXN0Qm9keSlcbi8vICAgICAvLyBkZXRhaWxzPy5yZXF1ZXN0Qm9keT8ucmF3Py5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAgLy8gICBpZiAoaXRlbS5ieXRlcykge1xuLy8gICAgIC8vICAgICBjb25zdCBzdHIgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUoaXRlbS5ieXRlcylcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgcmVxdWVzdDpcIiwgc3RyKVxuLy8gICAgIC8vICAgfVxuLy8gICAgIC8vIH0pXG4vLyAgICAgY29uc3QgZG9tYWluID0gZ2V0RG9tYWluRnJvbURldGFpbHMoZGV0YWlscylcbi8vICAgICBib2R5SGFuZGxlckVudHJ5KGRldGFpbHMucmVxdWVzdEJvZHksIGRvbWFpbilcbi8vICAgICBjb25zb2xlLmxvZyhkZXRhaWxzKVxuLy8gICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfVxuLy8gICB9LFxuLy8gICB7IHVybHM6IFtFV2Vic2l0ZS5qdWVqaW5dIH0sXG4vLyAgIFtcInJlcXVlc3RCb2R5XCIsIFwiZXh0cmFIZWFkZXJzXCJdXG4vLyApXG4iLCJpbXBvcnQgeyBnZXRTeW5jQ2hlY2tTdGF0dXNSZWNvcmQgfSBmcm9tIFwifm1vZHVsZS9oZWxwXCJcbmltcG9ydCB7IGp1ZWppbkhlYWRlckhhbmRsZXIsIGp1ZWppblVwbG9hZERhdGFIYW5kbGVyIH0gZnJvbSBcIn5tb2R1bGUvanVlamluXCJcbmltcG9ydCB7IEVTdG9yYWdlS2V5LCBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZ2V0RG9tYWluRnJvbURldGFpbHMgPSAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3REZXRhaWxzXG4pID0+IHtcbiAgY29uc3QgeyB1cmwgfSA9IGRldGFpbHNcbiAgcmV0dXJuIHVybC5zcGxpdChcIi9cIilbMl1cbn1cblxuY29uc3QgaGVhZGVySGFuZGxlclJlY29yZCA9IHtcbiAgW0VXZWJzaXRlLmp1ZWppbkhlYWRlcl06IGp1ZWppbkhlYWRlckhhbmRsZXJcbn1cblxuY29uc3QgdXBsb2FkSGFuZGxlclJlY29yZCA9IHtcbiAgW0VXZWJzaXRlLmp1ZWppbkhlYWRlcl06IGp1ZWppblVwbG9hZERhdGFIYW5kbGVyXG59XG5cbmV4cG9ydCBjb25zdCBkb21haW5DaGVja0VudHJ5ID0gKFxuICBkZXRhaWxzOlxuICAgIHwgY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzXG4gICAgfCBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keURldGFpbHNcbikgPT4ge1xuICBjb25zdCBkb21haW4gPSBnZXREb21haW5Gcm9tRGV0YWlscyhkZXRhaWxzKVxuICBjb25zdCBoZWFkZXJIYW5kbGVyID0gaGVhZGVySGFuZGxlclJlY29yZFtkb21haW5dXG4gIC8vIGhlYWRlckhhbmRsZXI/LihkZXRhaWxzKVxuICAvLyBkZXRhaWxzXG4gIGNvbnN0IHVwbG9hZEhhbmRsZXIgPSB1cGxvYWRIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgdXBsb2FkSGFuZGxlcj8uKGRldGFpbHMpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25IZWFkZXJIYW5kbGVyRW50cnkgPSAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc1xuKSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4gIGNvbnN0IGhlYWRlckhhbmRsZXIgPSBoZWFkZXJIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgaGVhZGVySGFuZGxlcj8uKGRldGFpbHMpXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJzSGFuZGxlckVudHJ5ID0gKCkgPT4ge31cblxuZXhwb3J0IGNvbnN0IGJvZHlIYW5kbGVyRW50cnkgPSAoXG4gIHJlcXVlc3RCb2R5OiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keSxcbiAgZG9tYWluOiBzdHJpbmdcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlYWRlciBoYW5kbGVyIGVudHJ5OlwiLCByZXF1ZXN0Qm9keSlcbiAgY29uc29sZS5sb2coXCJkb21haW46XCIsIGRvbWFpbilcbiAgY29uc3QgaGVhZGVySGFuZGxlciA9IGhlYWRlckhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICBoZWFkZXJIYW5kbGVyPy4ocmVxdWVzdEJvZHkpXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlQ2hlY2tJblhIUkRhdGEgPSAoY29va2llOiBzdHJpbmcsIGhlYWRlcjogYW55KSA9PiB7XG4gIGNvbnN0IHhockRhdGEgPSB7XG4gICAgY29va2llLFxuICAgIGhlYWRlclxuICB9XG4gIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgeGhyRGF0YSB9LCAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCLkv53lrZjmiJDlip9cIilcbiAgLy8gfSlcbiAgY29uc29sZS5sb2coXCJ4aHIgZGF0YTpcIiwgeGhyRGF0YSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RCb2R5RnJvbVdlYlJlcXVlc3RCb2R5RGV0YWlscyA9IChcbiAgcmVxdWVzdEJvZHk6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1tcInJlcXVlc3RCb2R5XCJdXG4pID0+IHtcbiAgaWYgKHJlcXVlc3RCb2R5Py5lcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSBlcnJvcjpcIiwgcmVxdWVzdEJvZHkuZXJyb3IpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LmVycm9yXG4gIH1cbiAgaWYgKHJlcXVlc3RCb2R5Py5mb3JtRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSBmb3JtRGF0YTpcIiwgcmVxdWVzdEJvZHkuZm9ybURhdGEpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LmZvcm1EYXRhXG4gIH1cbiAgaWYgKHJlcXVlc3RCb2R5Py5yYXcpIHtcbiAgICAvLyByZXR1cm4gcmF3XG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gcmVxdWVzdCBib2R5IHJhdzpcIiwgcmVxdWVzdEJvZHkucmF3KVxuICAgIHJldHVybiByZXF1ZXN0Qm9keS5yYXcubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5ieXRlcykge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGl0ZW0uYnl0ZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0IGJvZHk6XCIsIHJlcXVlc3RCb2R5KVxuICByZXR1cm4gbnVsbFxufVxuXG4vLyDor7vlj5bmmK/lkKbngrnlh7vlt7Lor7t0aXBcbmV4cG9ydCBjb25zdCBnZXRJc0NsaWNrVGlwID0gYXN5bmMgKGNhbGxiYWNrOiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJpc0NsaWNrVGlwXCJdKVxuICBjb25zb2xlLmxvZyhcImdldCByZXN1bHQ6XCIsIHJlc3VsdClcbiAgY2FsbGJhY2socmVzdWx0LmlzQ2xpY2tUaXApXG59XG5cbi8vIOiuvue9ruaYr+WQpueCueWHu+W3suivu3RpcFxuZXhwb3J0IGNvbnN0IHNldElzQ2xpY2tUaXAgPSAoaXNDbGlja1RpcDogYm9vbGVhbikgPT4ge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0NsaWNrVGlwIH0sICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOaIkOWKn1wiKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYXN5bmNTbGVlcCA9IChtczogbnVtYmVyID0gMTUwMCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxufVxuXG4vLyDor7vlj5blupTnlKjnmoTnrb7liLDorrDlvZUsIOWIneWni+WMluaJgOacieaPkuS7tuaooeWdl+eahOeKtuaAgVxuZXhwb3J0IGNvbnN0IGluaXRTdG9yYWdlQ2hlY2tUYXNrID0gYXN5bmMgKFxuICBjYWxsYmFjazogKHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4pID0+IHVua25vd25cbikgPT4ge1xuICAvLyDmo4Dmn6Xlt7LlkK/nlKjnmoTmlbDmja5cbiAgY29uc3QgcmVjb3JkID0gYXdhaXQgZ2V0U3luY0NoZWNrU3RhdHVzUmVjb3JkKClcbiAgY29uc29sZS5sb2coXCJyZWNvcmQ6XCIsIHJlY29yZClcbiAgY2FsbGJhY2socmVjb3JkKVxufVxuIiwiaW1wb3J0IHsgZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzLCBzYXZlV2Vic2l0ZUhlYWRlciB9IGZyb20gXCIuL2hlbHBcIlxuXG5pbXBvcnQgeyBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuaW1wb3J0IHsgZ2V0UmVxdWVzdEJvZHlGcm9tV2ViUmVxdWVzdEJvZHlEZXRhaWxzIH0gZnJvbSBcIn51dGlsc1wiXG5cbi8qKlxuICoganVlamluLmNuIOaooeWdl1xuICovXG5leHBvcnQgY29uc3QganVlamluVXBsb2FkRGF0YUhhbmRsZXIgPSBhc3luYyAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1xuKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3Q6XCIsIGRldGFpbHMpXG4gIGNvbnN0IHsgbWV0aG9kLCByZXF1ZXN0Qm9keSB9ID0gZGV0YWlsc1xuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHVwbG9hZERhdGEgPSBnZXRSZXF1ZXN0Qm9keUZyb21XZWJSZXF1ZXN0Qm9keURldGFpbHMocmVxdWVzdEJvZHkpXG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gdXBsb2FkIGRhdGE6XCIsIHVwbG9hZERhdGEpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGp1ZWppbkhlYWRlckhhbmRsZXIgPSBhc3luYyAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc1xuKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicmF3IGRldGFpbHM6XCIsIGRldGFpbHMpXG4gIGNvbnN0IHsgdXJsLCByZXF1ZXN0SGVhZGVycyB9ID0gZGV0YWlsc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoRVdlYnNpdGUuanVlamluQ2hlY2tJblVybCkpIHtcbiAgICAvLyByZXNvbHZlIGhlYWRlcnNcbiAgICBjb25zdCBoZWFkZXIgPSBnZXRIZWFkZXJGcm9tUmVxdWVzdEhlYWRlcnMocmVxdWVzdEhlYWRlcnMpXG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gaGVhZGVyOlwiLCBoZWFkZXIpXG4gICAgc2F2ZVdlYnNpdGVIZWFkZXIoRVdlYnNpdGUuanVlamluSGVhZGVyLCBoZWFkZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IEVTdGF0dXMsIEVTdG9yYWdlS2V5LCBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzID0gKFxuICByZXF1ZXN0SGVhZGVyczogY2hyb21lLndlYlJlcXVlc3QuSHR0cEhlYWRlcltdXG4pID0+IHtcbiAgcmV0dXJuIHJlcXVlc3RIZWFkZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICBhY2NbY3VyLm5hbWVdID0gY3VyLnZhbHVlXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVdlYnNpdGVIZWFkZXIgPSBhc3luYyAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICBbYGhlYWRlci0ke2tleX1gXTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOermeeCueWktOmDqOWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0V2Vic2l0ZUhlYWRlciA9IGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICBjb25zdCByZWFsS2V5ID0gYGhlYWRlci0ke2tleX1gXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQocmVhbEtleSlcbiAgICByZXR1cm4gcmVzW3JlYWxLZXldXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCLojrflj5bnq5nngrnlpLTpg6jlpLHotKVcIiwgZXJyb3IpXG4gICAgY29uc29sZS5sb2coXCJrZXk6XCIsIHJlYWxLZXkpXG4gIH1cbn1cblxuLy8g5L+d5a2Y56uZ54K55piv5ZCm5ZCv55So562+5Yiw55qE54q25oCBXG5leHBvcnQgY29uc3Qgc2F2ZVdlYnNpdGVDaGVja0luU3RhdHVzID0gYXN5bmMgKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikgPT4ge1xuICB0cnkge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgIFtgY2hlY2tJbi0ke2tleX1gXTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOermeeCueetvuWIsOeKtuaAgeWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3luY0NoZWNrU3RhdHVzUmVjb3JkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZWNvcmQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChFU3RvcmFnZUtleS7nrb7liLDlkK/nlKjnirbmgIHooagpXG4gIHJldHVybiByZWNvcmRbRVN0b3JhZ2VLZXku562+5Yiw5ZCv55So54q25oCB6KGoXSA/PyB7fVxufVxuXG5jb25zdCBzYXZlU3luY0NoZWNrU3RhdHVzUmVjb3JkID0gKHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4pID0+XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICBbRVN0b3JhZ2VLZXku562+5Yiw5ZCv55So54q25oCB6KGoXTogcmVjb3JkXG4gIH0pXG5cbi8vIOivu+WPluermeeCueaYr+WQpuWQr+eUqOetvuWIsOeahOeKtuaAgVxuZXhwb3J0IGNvbnN0IGNoZWNrSXNFbmFibGVCeVdlYnNpdGVLZXkgPSBhc3luYyAoa2V5OiBFV2Vic2l0ZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGdldFN5bmNDaGVja1N0YXR1c1JlY29yZCgpXG4gICAgcmV0dXJuICEhcmVjb3JkW2tleV1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImZhaWxlZDogZ2V0IHN0YXR1cyBieSBrZXk6XCIsIGtleSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyDkv53lrZjnrb7liLDorrDlvZXlkK/nlKjnirbmgIFcbmV4cG9ydCBjb25zdCBzYXZlQ2hlY2tJblJlY29yZCA9IGFzeW5jIChrZXk6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBnZXRTeW5jQ2hlY2tTdGF0dXNSZWNvcmQoKVxuICAgIHJlY29yZFtrZXldID0gdmFsdWVcbiAgICBhd2FpdCBzYXZlU3luY0NoZWNrU3RhdHVzUmVjb3JkKHJlY29yZClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImtleTpcIiwga2V5LCBcIiB2YWx1ZTpcIiwgdmFsdWUpXG4gICAgY29uc29sZS5sb2coXCLkv53lrZjnrb7liLDorrDlvZXlkK/nlKjnirbmgIHlpLHotKVcIiwgZXJyb3IpXG4gIH1cbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImV4cG9ydCBlbnVtIEVXZWJzaXRlIHtcbiAganVlamluID0gXCJodHRwczovL2FwaS5qdWVqaW4uY24vKlwiLFxuICBqdWVqaW5IZWFkZXIgPSBcImFwaS5qdWVqaW4uY25cIixcbiAganVlamluQ2hlY2tJblVybCA9IFwiaHR0cHM6Ly9hcGkuanVlamluLmNuL2dyb3d0aF9hcGkvdjEvY2hlY2tfaW4/XCIsXG4gIGp1ZWppbkNoZWNrSW5QYWdlID0gXCJodHRwczovL2p1ZWppbi5jbi91c2VyL2NlbnRlci9zaWduaW4/ZnJvbT1tYWluX3BhZ2VcIlxufVxuXG5leHBvcnQgZW51bSBFU3RvcmFnZUtleSB7XG4gIC8vIOetvuWIsOiusOW9lemFjee9rlxuICBDaGVja0luUmVjb3JkID0gXCJjaGVja0luUmVjb3JkXCIsXG4gIC8vIOermeeCueWktOmDqOmFjee9rlxuICBXZWJzaXRlSGVhZGVyID0gXCJ3ZWJzaXRlSGVhZGVyXCIsXG4gIC8vIOermeeCueivt+axguS9k+mFjee9rlxuICBXZWJzaXRlQm9keSA9IFwid2Vic2l0ZUJvZHlcIlxufVxuXG5leHBvcnQgZW51bSBFU3RhdHVzS2V5IHtcbiAganVlamluID0gRVdlYnNpdGUuanVlamluSGVhZGVyXG59XG5cbmV4cG9ydCBlbnVtIEVTdGF0dXMge1xuICAvLyBTdWNjZXNzXG4gIFN1Y2Nlc3MgPSBcInN1Y2Nlc3NcIixcbiAgLy8g56aB55SoXG4gIERpc2FibGUgPSBcImRpc2FibGVcIixcbiAgLy8g562J5b6F6YeN572uXG4gIFdhaXQyUmVzZXQgPSBcIndhaXQyUmVzZXRcIlxuICAvLyDliqDovb3kuK1cbiAgLy8gTG9hZGluZyA9IFwibG9hZGluZ1wiXG59XG5cblxuLy8gc2lnbiBpbiBzdGF0dXMgcmVjb3JkXG5leHBvcnQgZW51bSBFU3RvcmFnZUtleSB7XG4gIOetvuWIsOWQr+eUqOeKtuaAgeihqCA9IFwiY2hlY2tJbkVuYWJsZVN0YXR1c1wiLFxuICDnrb7liLDorrDlvZXooaggPSBcImNoZWNrSW5SZWNvcmRcIixcbn0iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC43MDRjOTFmMS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);