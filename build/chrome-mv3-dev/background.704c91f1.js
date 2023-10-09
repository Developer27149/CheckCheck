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
})({"ayUV1":[function(require,module,exports) {
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
    "serverPort": 50241
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
parcelHelpers.export(exports, "getWebsiteCheckInStatus", ()=>getWebsiteCheckInStatus);
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
const getWebsiteCheckInStatus = async (key)=>{
    const realKey = `checkIn-${key}`;
    try {
        // \u8bfb\u53d6\u914d\u7f6e\uff0c\u68c0\u67e5\u662f\u5426\u542f\u7528
        const res = await chrome.storage.sync.get(realKey);
        const isEnable = res[realKey] ?? false;
        if (!isEnable) return (0, _types.EStatus).Disable;
        // \u68c0\u67e5\u7b7e\u5230\u662f\u5426\u8fc7\u671f
        const validKey = `checkIn-${key}-valid`;
        const checkInRecord = await chrome.storage.sync.get(validKey);
        const isValid = checkInRecord[validKey] ?? false;
        if (!isValid) return (0, _types.EStatus).Wait2Reset;
        return (0, _types.EStatus).Success;
    } catch (error) {
        console.log("\u83b7\u53d6\u7ad9\u70b9\u7b7e\u5230\u72b6\u6001\u5931\u8d25", error);
        console.log("key:", realKey);
    }
};

},{"~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"NoMjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EWebsite", ()=>EWebsite);
parcelHelpers.export(exports, "EStorageKey", ()=>EStorageKey);
parcelHelpers.export(exports, "EStatus", ()=>EStatus);
let EWebsite;
(function(EWebsite) {
    EWebsite["juejin"] = "https://api.juejin.cn/*";
    EWebsite["juejinHeader"] = "api.juejin.cn";
    EWebsite["juejinCheckInUrl"] = "https://api.juejin.cn/growth_api/v1/check_in?";
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
let EStatus;
(function(EStatus) {
    EStatus[// Success
    "Success"] = "success";
    EStatus[// \u7981\u7528
    "Disable"] = "disable";
    EStatus[// \u7b49\u5f85\u91cd\u7f6e
    "Wait2Reset"] = "wait2Reset";
})(EStatus || (EStatus = {}));

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

},{}]},["ayUV1","8oeFb"], "8oeFb", "parcelRequiref79d")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxPQUFPLFdBQVcsT0FBTyxHQUFDLE1BQUksV0FBVyxPQUFPLENBQUMsSUFBSSxHQUFDLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxPQUFPLFdBQVcsT0FBTyxHQUFDLE1BQUksV0FBVyxPQUFPLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQztBQUFDLElBQUksSUFBRSxJQUFJLElBQUksSUFBRyxJQUFFLENBQUEsSUFBRyxFQUFFLEdBQUcsQ0FBQyxJQUFHLElBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQSxJQUFHLEVBQUUsVUFBVSxDQUFDLFNBQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxJQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUMsQUFBRCxHQUFHLENBQUM7QUFBRyxJQUFJLElBQUUsRUFBRSxjQUFhLElBQUUsSUFBSSxFQUFFLGdCQUFjLElBQUksT0FBTyxLQUFHLFFBQU8sSUFBRTtBQUFJLElBQUksSUFBRSxDQUFDLElBQUUsRUFBRSxFQUFDLEdBQUcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFHLFFBQU87QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFHLElBQUksUUFBUSxLQUFLLENBQUMscUJBQWtCLE1BQU0sQ0FBQyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRSxJQUFJO0lBQUMsSUFBSSxJQUFFLFdBQVcsT0FBTyxFQUFFLFdBQVMsV0FBVyxNQUFNLEVBQUUsU0FBUSxJQUFFLElBQUksWUFBWSxFQUFFLGVBQWUsRUFBQztJQUFNLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFHLEdBQUc7QUFBQTtBQUFFLElBQUksSUFBRTtJQUFDLG1CQUFrQixLQUFLO0lBQUMsZ0JBQWUsSUFBSTtJQUFDLFdBQVUsS0FBSztJQUFDLFlBQVc7UUFBQztLQUE2QjtJQUFDLFFBQU87SUFBWSxRQUFPO0lBQUssaUJBQWdCO0lBQWlFLFlBQVc7SUFBbUIsV0FBVTtJQUFtQixXQUFVO0lBQVEsVUFBUyxLQUFLO0lBQUMsY0FBYTtBQUFLO0FBQUUsT0FBTyxNQUFNLENBQUMsYUFBYSxHQUFDLEVBQUUsUUFBUTtBQUFDLFdBQVcsT0FBTyxHQUFDO0lBQUMsTUFBSyxFQUFFO0lBQUMsS0FBSTtRQUFDLFNBQVEsRUFBRSxPQUFPO0lBQUE7QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxHQUFHLEdBQUM7UUFBQyxNQUFLLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDLEVBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBVSxDQUFDO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUFFO0lBQUMsR0FBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQztBQUFBO0FBQUMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFDO0FBQUUsT0FBTyxNQUFNLENBQUMsT0FBTyxHQUFDLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxNQUFNLElBQUUsV0FBVyxPQUFPLElBQUUsSUFBSTtBQUFDLFNBQVMsSUFBRztJQUFDLE9BQU0sQ0FBQyxFQUFFLElBQUksSUFBRSxFQUFFLElBQUksS0FBRyxZQUFVLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFVLElBQUUsU0FBUyxRQUFRLEdBQUMsV0FBVyxHQUFDLEVBQUUsSUFBSTtBQUFBO0FBQUMsU0FBUyxJQUFHO0lBQUMsT0FBTyxFQUFFLElBQUksSUFBRSxTQUFTLElBQUk7QUFBQTtBQUFDLElBQUksSUFBRSwwQkFBeUIsSUFBRTtBQUEyQixJQUFJLElBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxHQUFDLFVBQVEsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUFDLGVBQWUsRUFBRSxJQUFFLElBQUksRUFBQztJQUFDLE9BQU8sSUFBRztRQUFDLE1BQU0sTUFBTTtRQUFHLEtBQUs7SUFBQSxFQUFDLE9BQUs7UUFBQyxNQUFNLElBQUksUUFBUSxDQUFBLElBQUcsV0FBVyxHQUFFO0lBQUc7QUFBQztBQUFDLElBQUcsRUFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixLQUFHLEdBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQThCLFdBQVcsZ0JBQWdCLENBQUMsU0FBUSxTQUFTLENBQUMsRUFBQztRQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHO1FBQUMsSUFBRyxFQUFFLFVBQVUsQ0FBQyxJQUFHO1lBQUMsSUFBSSxJQUFFLElBQUksSUFBSSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNO1lBQUksRUFBRSxRQUFRLEtBQUcsRUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJLEtBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFBLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFJLEtBQUssR0FBRyxHQUFHLFFBQVEsS0FBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUEsSUFBRyxJQUFJLFNBQVMsRUFBRSxJQUFJLEVBQUM7b0JBQUMsU0FBUTt3QkFBQyxnQkFBZSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCO29CQUFpQjtnQkFBQyxJQUFJLEFBQUQsSUFBRyxFQUFFLFdBQVcsQ0FBQyxJQUFJLFNBQVMsY0FBYTtnQkFBQyxRQUFPO2dCQUFJLFlBQVc7WUFBUyxHQUFHO1FBQUEsQ0FBQztJQUFBO0FBQUUsQ0FBQztBQUFBLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO0lBQUMsSUFBRyxFQUFDLFNBQVEsRUFBQyxFQUFDLEdBQUM7SUFBRSxPQUFPLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHLEVBQUM7SUFBQyxJQUFJLElBQUU7SUFBSSxPQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBRSxTQUFTLFFBQVEsS0FBRyxZQUFVLENBQUMsOEJBQThCLElBQUksQ0FBQyxLQUFHLFFBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxPQUFPLElBQUUsWUFBVSxFQUFFLDhCQUE0QixFQUFFLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFBQyxJQUFHLE9BQU8sV0FBVyxTQUFTLEdBQUMsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVUsRUFBRSxPQUFPLE9BQUs7SUFBSSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsV0FBVSxlQUFlLENBQUMsRUFBQztRQUFDLElBQUcsS0FBSyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxLQUFHLGVBQWM7WUFBQyxNQUFNO1lBQUk7UUFBTSxDQUFDO0lBQUEsSUFBRyxFQUFFLGdCQUFnQixDQUFDLFNBQVEsSUFBRyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQUMsSUFBRyxPQUFPLFdBQVcsU0FBUyxHQUFDLEtBQUk7SUFBTyxJQUFJLElBQUUsSUFBSSxVQUFVO0lBQUssT0FBTyxFQUFFLGdCQUFnQixDQUFDLFdBQVUsZUFBZSxDQUFDLEVBQUM7UUFBQyxJQUFJLElBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxJQUFJO1FBQUUsSUFBRyxFQUFFLElBQUksS0FBRyxZQUFVLE1BQU0sRUFBRSxFQUFFLE1BQU0sR0FBRSxFQUFFLElBQUksS0FBRyxPQUFPLEVBQUMsS0FBSSxJQUFJLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQUMsSUFBSSxJQUFFLEVBQUUsU0FBUyxJQUFFLEVBQUUsS0FBSztZQUFDLEVBQUUsOEJBQTRCLEVBQUUsT0FBTyxHQUFDLENBQUM7QUFDcnRHLENBQUMsR0FBQyxJQUFFLENBQUM7O0FBRUwsQ0FBQyxHQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hCLENBQUM7UUFBRTtJQUFDLElBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFRLElBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFPLElBQUk7UUFBQyxFQUFFLENBQUMscURBQXFELEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUFDLElBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFRLElBQUk7UUFBQyxFQUFFLENBQUMsb0VBQW9FLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUFDLElBQUcsQ0FBQztBQUFBO0FBQUMsSUFBSSxJQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sRUFBQyxJQUFFO0lBQUMsWUFBVyxDQUFDO0lBQUUsV0FBVSxDQUFDO0lBQUUsV0FBVSxDQUFDO0lBQUUsYUFBWSxDQUFDO0lBQUUsYUFBWSxJQUFJO0lBQUksV0FBVSxJQUFJO0FBQUc7QUFBRSxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUMsRUFBQztJQUFDLElBQUcsS0FBRyxFQUFFLFVBQVUsSUFBRSxFQUFFLFdBQVcsRUFBQztRQUFDLEVBQUU7UUFBaUMsS0FBSSxJQUFJLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxXQUFXLENBQUMsSUFBSTtJQUFDLENBQUM7SUFBQSxJQUFHLEtBQUcsRUFBRSxVQUFVLElBQUcsQ0FBQSxFQUFFLFNBQVMsSUFBRSxFQUFFLFNBQVMsQUFBRCxHQUFHO1FBQUMsRUFBRTtRQUErQixJQUFJLElBQUUsTUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBQyxRQUFPLENBQUM7UUFBQztRQUFHLEtBQUksSUFBSSxLQUFLLEVBQUUsV0FBVyxDQUFDO1lBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSSxDQUFDLENBQUEsSUFBRyxFQUFFLEVBQUUsS0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFBSSxFQUFFLFdBQVcsQ0FBQztnQkFBQywwQkFBeUI7WUFBQztRQUFFO1FBQUMsRUFBRSxPQUFPLENBQUMsTUFBTTtJQUFFLENBQUM7QUFBQTtBQUFDLElBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxlQUFlLEVBQUM7SUFBQztJQUFJLElBQUksSUFBRSxFQUFFLE9BQU0sSUFBRztRQUFDLEVBQUUsaUNBQWdDLEVBQUUsU0FBUyxLQUFHLEVBQUUsTUFBTSxDQUFDLENBQUEsSUFBRyxFQUFFLE9BQU8sS0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQSxJQUFHLEVBQUUsT0FBTyxNQUFNLEVBQUMsRUFBRSxFQUFFLEVBQUU7UUFBQyxJQUFJLElBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQSxJQUFHLEVBQUUsSUFBSSxLQUFHO1FBQVEsSUFBRyxHQUFFO1lBQUMsSUFBSSxJQUFFLElBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBLElBQUcsRUFBRSxFQUFFLElBQUcsSUFBRSxPQUFPLE1BQU0sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQSxJQUFHLE9BQU8sTUFBTSxDQUFDLElBQUksSUFBSTtZQUFHLEVBQUUsU0FBUyxLQUFHLEVBQUUsS0FBSyxDQUFDLENBQUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztRQUFHLENBQUM7UUFBQTtJQUFHO0lBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFPLElBQUk7UUFBQyxJQUFJLElBQUUsWUFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVE7UUFBTSxFQUFFLGdCQUFnQixDQUFDLFNBQVEsSUFBSSxjQUFjO0lBQUcsSUFBRyxFQUFFLGdCQUFnQixDQUFDLFNBQVEsVUFBUztRQUFDLE1BQU0sS0FBSSxFQUFFLENBQUMsRUFBRTtJQUFBLEVBQUU7QUFBQSxDQUFDO0FBQUEsRUFBRSxVQUFTO0lBQUMsRUFBRSx1Q0FBc0MsRUFBRSxVQUFVLEtBQUcsQ0FBQyxHQUFFLEdBQUc7QUFBQTtBQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUM7SUFBQyxJQUFJLElBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUcsSUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7SUFBRyxJQUFHLEtBQUcsR0FBRTtRQUFDLElBQUksSUFBRSxJQUFFLEVBQUUsU0FBUyxHQUFDLEVBQUUsV0FBVztRQUFDLEVBQUUsR0FBRyxDQUFDLElBQUcsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUk7WUFBQyxFQUFFLE1BQU0sQ0FBQztRQUFFLElBQUcsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxvQ0FBbUMsSUFBRyxFQUFFLHFCQUFxQixJQUFHLENBQUEsRUFBRSxTQUFTLEtBQUcsQ0FBQyxDQUFBLEdBQUcsRUFBRSx1QkFBdUIsSUFBRyxDQUFBLEVBQUUsV0FBVyxLQUFHLENBQUMsQ0FBQSxHQUFHLEdBQUc7UUFBQSxFQUFFO0lBQUEsQ0FBQztBQUFBO0FBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxzQkFBc0IsSUFBRyxDQUFBLEVBQUUsNkNBQTRDLEdBQUcsQUFBRCxHQUFHLENBQUMsQ0FBQztBQUFBOzs7QUNKLzFEOzs7QUNBQTtBQU9BO0FBRUEsT0FBTyxVQUFVLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUMvQyxTQUFVLE9BQU8sRUFBRTtJQUNqQixDQUFBLEdBQUEsK0JBQXdCLEFBQUQsRUFBRTtJQUN6QixPQUFPO1FBQUUsUUFBUSxLQUFLO0lBQUM7QUFDekIsR0FDQTtJQUFFLE1BQU07UUFBQyxDQUFBLEdBQUEsZUFBUSxBQUFELEVBQUUsTUFBTTtLQUFDO0FBQUMsR0FDMUI7SUFBQztJQUFrQjtDQUFlLEVBR3BDLGlEQUFpRDtDQUNqRCx5QkFBeUI7Q0FDekIsOERBQThEO0NBQzlELHdEQUF3RDtDQUN4RCw2QkFBNkI7Q0FDN0IscUVBQXFFO0NBQ3JFLGlEQUFpRDtDQUNqRCxhQUFhO0NBQ2IsWUFBWTtDQUNaLG1EQUFtRDtDQUNuRCxvREFBb0Q7Q0FDcEQsMkJBQTJCO0NBQzNCLCtCQUErQjtDQUMvQixPQUFPO0NBQ1AsaUNBQWlDO0NBQ2pDLG9DQUFvQztDQUNwQyxJQUFJOzs7O0FDbENKOzswREFHYTtzREFlQTs4REFhQTt5REFRQTtzREFFQTt3REFVQTs2RUFXQTttREF5QkE7bURBT0E7Z0RBTUE7QUFwR2I7QUFDQTtBQUVPLE1BQU0sdUJBQXVCLENBQ2xDLFVBQ0c7SUFDSCxNQUFNLEVBQUUsSUFBRyxFQUFFLEdBQUc7SUFDaEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQjtBQUVBLE1BQU0sc0JBQXNCO0lBQzFCLENBQUMsQ0FBQSxHQUFBLGVBQVEsQUFBRCxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUEsR0FBQSwyQkFBbUIsQUFBRDtBQUM3QztBQUVBLE1BQU0sc0JBQXNCO0lBQzFCLENBQUMsQ0FBQSxHQUFBLGVBQVEsQUFBRCxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUEsR0FBQSwrQkFBdUIsQUFBRDtBQUNqRDtBQUVPLE1BQU0sbUJBQW1CLENBQzlCLFVBR0c7SUFDSCxNQUFNLFNBQVMscUJBQXFCO0lBQ3BDLE1BQU0sZ0JBQWdCLG1CQUFtQixDQUFDLE9BQU87SUFDakQsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixNQUFNLGdCQUFnQixtQkFBbUIsQ0FBQyxPQUFPO0lBQ2pELGdCQUFnQjtBQUNsQjtBQUVPLE1BQU0sMkJBQTJCLENBQ3RDLFVBQ0c7SUFDSCxNQUFNLFNBQVMscUJBQXFCO0lBQ3BDLE1BQU0sZ0JBQWdCLG1CQUFtQixDQUFDLE9BQU87SUFDakQsZ0JBQWdCO0FBQ2xCO0FBRU8sTUFBTSxzQkFBc0IsSUFBTSxDQUFDO0FBRW5DLE1BQU0sbUJBQW1CLENBQzlCLGFBQ0EsU0FDRztJQUNILFFBQVEsR0FBRyxDQUFDLHlCQUF5QjtJQUNyQyxRQUFRLEdBQUcsQ0FBQyxXQUFXO0lBQ3ZCLE1BQU0sZ0JBQWdCLG1CQUFtQixDQUFDLE9BQU87SUFDakQsZ0JBQWdCO0FBQ2xCO0FBRU8sTUFBTSxxQkFBcUIsQ0FBQyxRQUFnQixTQUFnQjtJQUNqRSxNQUFNLFVBQVU7UUFDZDtRQUNBO0lBQ0Y7SUFDQSwrQ0FBK0M7SUFDL0Msd0JBQXdCO0lBQ3hCLEtBQUs7SUFDTCxRQUFRLEdBQUcsQ0FBQyxhQUFhO0FBQzNCO0FBRU8sTUFBTSwwQ0FBMEMsQ0FDckQsY0FDRztJQUNILElBQUksYUFBYSxPQUFPO1FBQ3RCLFFBQVEsR0FBRyxDQUFDLDhCQUE4QixZQUFZLEtBQUs7UUFDM0QsT0FBTyxZQUFZLEtBQUs7SUFDMUIsQ0FBQztJQUNELElBQUksYUFBYSxVQUFVO1FBQ3pCLFFBQVEsR0FBRyxDQUFDLGlDQUFpQyxZQUFZLFFBQVE7UUFDakUsT0FBTyxZQUFZLFFBQVE7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxLQUFLO1FBQ3BCLGFBQWE7UUFDYixRQUFRLEdBQUcsQ0FBQyw0QkFBNEIsWUFBWSxHQUFHO1FBQ3ZELE9BQU8sWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBUztZQUNuQyxJQUFJLEtBQUssS0FBSyxFQUNaLE9BQU8sSUFBSSxZQUFZLFNBQVMsTUFBTSxDQUFDLEtBQUssS0FBSztRQUVyRDtJQUNGLENBQUM7SUFDRCxRQUFRLEdBQUcsQ0FBQyx3QkFBd0I7SUFDcEMsT0FBTyxJQUFJO0FBQ2I7QUFHTyxNQUFNLGdCQUFnQixPQUFPLFdBQXdDO0lBQzFFLE1BQU0sU0FBUyxNQUFNLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFBQztLQUFhO0lBQzVELFFBQVEsR0FBRyxDQUFDLGVBQWU7SUFDM0IsU0FBUyxPQUFPLFVBQVU7QUFDNUI7QUFHTyxNQUFNLGdCQUFnQixDQUFDLGFBQXdCO0lBQ3BELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFBRTtJQUFXLEdBQUcsSUFBTTtRQUM3QyxRQUFRLEdBQUcsQ0FBQztJQUNkO0FBQ0Y7QUFFTyxNQUFNLGFBQWEsQ0FBQyxLQUFhLElBQUksR0FBSztJQUMvQyxPQUFPLElBQUksUUFBUSxDQUFDLFVBQVksV0FBVyxTQUFTO0FBQ3REOzs7QUN0R0E7OzZEQVFhO3lEQVdBO0FBbkJiO0FBRUE7QUFDQTtBQUtPLE1BQU0sMEJBQTBCLE9BQ3JDLFVBQ0c7SUFDSCxRQUFRLEdBQUcsQ0FBQyxtQkFBbUI7SUFDL0IsTUFBTSxFQUFFLE9BQU0sRUFBRSxZQUFXLEVBQUUsR0FBRztJQUNoQyxJQUFJLFdBQVcsUUFBUTtRQUNyQixNQUFNLGFBQWEsQ0FBQSxHQUFBLDhDQUF1QyxBQUFELEVBQUU7UUFDM0QsUUFBUSxHQUFHLENBQUMsdUJBQXVCO0lBQ3JDLENBQUM7QUFDSDtBQUVPLE1BQU0sc0JBQXNCLE9BQ2pDLFVBQ0c7SUFDSCxRQUFRLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDNUIsTUFBTSxFQUFFLElBQUcsRUFBRSxlQUFjLEVBQUUsR0FBRztJQUNoQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUEsR0FBQSxlQUFRLEFBQUQsRUFBRSxnQkFBZ0IsR0FBRztRQUM3QyxrQkFBa0I7UUFDbEIsTUFBTSxTQUFTLENBQUEsR0FBQSxpQ0FBMkIsQUFBRCxFQUFFO1FBQzNDLFFBQVEsR0FBRyxDQUFDLGtCQUFrQjtRQUM5QixDQUFBLEdBQUEsdUJBQWlCLEFBQUQsRUFBRSxDQUFBLEdBQUEsZUFBUSxBQUFELEVBQUUsWUFBWSxFQUFFO0lBQzNDLENBQUM7QUFDSDs7O0FDOUJBOztpRUFFYTt1REFTQTtzREFXQTs4REFZQTs2REFZQTtBQTlDYjtBQUVPLE1BQU0sOEJBQThCLENBQ3pDLGlCQUNHO0lBQ0gsT0FBTyxlQUFlLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBUTtRQUN6QyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUs7UUFDekIsT0FBTztJQUNULEdBQUcsQ0FBQztBQUNOO0FBRU8sTUFBTSxvQkFBb0IsT0FBTyxLQUFhLFFBQWU7SUFDbEUsSUFBSTtRQUNGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3JCO0lBQ0YsRUFBRSxPQUFPLE9BQU87UUFDZCxRQUFRLEdBQUcsQ0FBQyxRQUFRLEtBQUssV0FBVztRQUNwQyxRQUFRLEdBQUcsQ0FBQyxZQUFZO0lBQzFCO0FBQ0Y7QUFFTyxNQUFNLG1CQUFtQixPQUFPLE1BQWdCO0lBQ3JELE1BQU0sVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDL0IsSUFBSTtRQUNGLE1BQU0sTUFBTSxNQUFNLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUMsUUFBUTtJQUNyQixFQUFFLE9BQU8sT0FBTztRQUNkLFFBQVEsR0FBRyxDQUFDLFlBQVk7UUFDeEIsUUFBUSxHQUFHLENBQUMsUUFBUTtJQUN0QjtBQUNGO0FBR08sTUFBTSwyQkFBMkIsT0FBTyxLQUFhLFFBQW1CO0lBQzdFLElBQUk7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUN0QjtJQUNGLEVBQUUsT0FBTyxPQUFPO1FBQ2QsUUFBUSxHQUFHLENBQUMsUUFBUSxLQUFLLFdBQVc7UUFDcEMsUUFBUSxHQUFHLENBQUMsY0FBYztJQUM1QjtBQUNGO0FBR08sTUFBTSwwQkFBMEIsT0FBTyxNQUFnQjtJQUM1RCxNQUFNLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQ2hDLElBQUk7UUFDRixjQUFjO1FBQ2QsTUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsSUFBSSxLQUFLO1FBQ3RDLElBQUksQ0FBQyxVQUFVLE9BQU8sQ0FBQSxHQUFBLGNBQU8sQUFBRCxFQUFFLE9BQU87UUFDckMsV0FBVztRQUNYLE1BQU0sV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN2QyxNQUFNLGdCQUFnQixNQUFNLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxTQUFTLElBQUksS0FBSztRQUNoRCxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUEsR0FBQSxjQUFPLEFBQUQsRUFBRSxVQUFVO1FBQ3ZDLE9BQU8sQ0FBQSxHQUFBLGNBQU8sQUFBRCxFQUFFLE9BQU87SUFDeEIsRUFBRSxPQUFPLE9BQU87UUFDZCxRQUFRLEdBQUcsQ0FBQyxjQUFjO1FBQzFCLFFBQVEsR0FBRyxDQUFDLFFBQVE7SUFDdEI7QUFDRjs7O0FDL0RBOzs7OztJQUFPO1VBQUssUUFBUTtJQUFSLFNBQ1YsWUFBUztJQURDLFNBRVYsa0JBQWU7SUFGTCxTQUdWLHNCQUFtQjtHQUhULGFBQUE7SUFNTDtVQUFLLFdBQVc7SUFBWCxZQUNWLFNBQVM7SUFDVCxtQkFBZ0I7SUFGTixZQUdWLFNBQVM7SUFDVCxtQkFBZ0I7SUFKTixZQUtWLFVBQVU7SUFDVixpQkFBYztHQU5KLGdCQUFBO0lBU0w7VUFBSyxPQUFPO0lBQVAsUUFDVixVQUFVO0lBQ1YsYUFBVTtJQUZBLFFBR1YsS0FBSztJQUNMLGFBQVU7SUFKQSxRQUtWLE9BQU87SUFDUCxnQkFBYTtHQU5ILFlBQUE7OztBQ2ZaLFFBQVEsY0FBYyxHQUFHLFNBQVUsQ0FBQyxFQUFFO0lBQ3BDLE9BQU8sS0FBSyxFQUFFLFVBQVUsR0FBRyxJQUFJO1FBQUMsU0FBUztJQUFDLENBQUM7QUFDN0M7QUFFQSxRQUFRLGlCQUFpQixHQUFHLFNBQVUsQ0FBQyxFQUFFO0lBQ3ZDLE9BQU8sY0FBYyxDQUFDLEdBQUcsY0FBYztRQUFDLE9BQU8sSUFBSTtJQUFBO0FBQ3JEO0FBRUEsUUFBUSxTQUFTLEdBQUcsU0FBVSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLFNBQVUsR0FBRyxFQUFFO1FBQ3pDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssY0FBYyxDQUFDLE1BQ25FO1FBR0YsT0FBTyxjQUFjLENBQUMsTUFBTSxLQUFLO1lBQy9CLFlBQVksSUFBSTtZQUNoQixLQUFLLFdBQVk7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLE1BQU0sR0FBRyxTQUFVLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQzlDLE9BQU8sY0FBYyxDQUFDLE1BQU0sVUFBVTtRQUNwQyxZQUFZLElBQUk7UUFDaEIsS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWY0ZjE3NWYzYWY5ODFmMmYuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYmFja2dyb3VuZC9pbmRleC50cyIsInV0aWxzLnRzIiwibW9kdWxlL2p1ZWppbi50cyIsIm1vZHVsZS9oZWxwLnRzIiwidHlwZXMudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZz10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciBfPSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIHc9bmV3IFNldChnKSx5PWU9PncuaGFzKGUpLCQ9Zy5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBqPXkoXCItLWRyeS1ydW5cIiksbT0oKT0+eShcIi0tdmVyYm9zZVwiKXx8XygpLlZFUkJPU0U9PT1cInRydWVcIixHPW0oKTt2YXIgZj0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgYj0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5mKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksaD0oLi4uZSk9PmYoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9Pm0oKSYmZihgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBSPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL1VzZXJzL2Fhcm9uL3JlcG9zL0NoZWNrTWFuLy5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NTAyNDF9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEI9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gRChlKXtCLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUQ7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuY2hyb21lfHxnbG9iYWxUaGlzLmJyb3dzZXJ8fG51bGw7ZnVuY3Rpb24gdSgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBwKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgeD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixQPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIEg9YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7dSgpfToke3AoKX0vYDthc3luYyBmdW5jdGlvbiBTKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChIKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihsLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9bC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gayhlPXAoKSl7bGV0IHQ9dSgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIFQoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmYihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIEwoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KGsoTnVtYmVyKHAoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7aWYoSlNPTi5wYXJzZShvLmRhdGEpLnR5cGU9PT1cImJ1aWxkX3JlYWR5XCIpe2F3YWl0IGUoKTtyZXR1cm59fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixUKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KGsoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBjPXIuY29kZWZyYW1lfHxyLnN0YWNrO2goXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArYytgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFQpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57aChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIEM9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIGQoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1sLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCFDfHwhQy5pc1BhcmNlbFJlcXVpcmUpe1IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChjPT5jLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAoYz0+T2JqZWN0LnZhbHVlcyhjKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShjPT5zLmhhcyhjKSl9ZCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBTKCksZCghMCl9KX1MKGFzeW5jKCk9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxhLmJ1aWxkUmVhZHl8fD0hMCxkKCl9KTtsLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKHgpLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUCk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLGQoKX0pfX0pO2wucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLGQoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmQvaW5kZXhcIiIsImltcG9ydCB7XG4gIGJvZHlIYW5kbGVyRW50cnksXG4gIGNvbW1vbkhlYWRlckhhbmRsZXJFbnRyeSxcbiAgZG9tYWluQ2hlY2tFbnRyeSxcbiAgZ2V0RG9tYWluRnJvbURldGFpbHNcbn0gZnJvbSBcIn51dGlsc1wiXG5cbmltcG9ydCB7IEVXZWJzaXRlIH0gZnJvbSBcIn50eXBlc1wiXG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoXG4gIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgY29tbW9uSGVhZGVySGFuZGxlckVudHJ5KGRldGFpbHMpXG4gICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9XG4gIH0sXG4gIHsgdXJsczogW0VXZWJzaXRlLmp1ZWppbl0gfSxcbiAgW1wicmVxdWVzdEhlYWRlcnNcIiwgXCJleHRyYUhlYWRlcnNcIl1cbilcblxuLy8gY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKFxuLy8gICBmdW5jdGlvbiAoZGV0YWlscykge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiYmVmb3JlIHJlcXVlc3Q6XCIsIGRldGFpbHM/LnJlcXVlc3RCb2R5KVxuLy8gICAgIC8vIGRldGFpbHM/LnJlcXVlc3RCb2R5Py5yYXc/LmZvckVhY2goKGl0ZW0pID0+IHtcbi8vICAgICAvLyAgIGlmIChpdGVtLmJ5dGVzKSB7XG4vLyAgICAgLy8gICAgIGNvbnN0IHN0ciA9IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpLmRlY29kZShpdGVtLmJ5dGVzKVxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhcImJlZm9yZSByZXF1ZXN0OlwiLCBzdHIpXG4vLyAgICAgLy8gICB9XG4vLyAgICAgLy8gfSlcbi8vICAgICBjb25zdCBkb21haW4gPSBnZXREb21haW5Gcm9tRGV0YWlscyhkZXRhaWxzKVxuLy8gICAgIGJvZHlIYW5kbGVyRW50cnkoZGV0YWlscy5yZXF1ZXN0Qm9keSwgZG9tYWluKVxuLy8gICAgIGNvbnNvbGUubG9nKGRldGFpbHMpXG4vLyAgICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSB9XG4vLyAgIH0sXG4vLyAgIHsgdXJsczogW0VXZWJzaXRlLmp1ZWppbl0gfSxcbi8vICAgW1wicmVxdWVzdEJvZHlcIiwgXCJleHRyYUhlYWRlcnNcIl1cbi8vIClcbiIsImltcG9ydCB7IGp1ZWppbkhlYWRlckhhbmRsZXIsIGp1ZWppblVwbG9hZERhdGFIYW5kbGVyIH0gZnJvbSBcIn5tb2R1bGUvanVlamluXCI7XG5pbXBvcnQgeyBFV2Vic2l0ZSB9IGZyb20gXCJ+dHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZ2V0RG9tYWluRnJvbURldGFpbHMgPSAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3REZXRhaWxzXG4pID0+IHtcbiAgY29uc3QgeyB1cmwgfSA9IGRldGFpbHNcbiAgcmV0dXJuIHVybC5zcGxpdChcIi9cIilbMl1cbn1cblxuY29uc3QgaGVhZGVySGFuZGxlclJlY29yZCA9IHtcbiAgW0VXZWJzaXRlLmp1ZWppbkhlYWRlcl06IGp1ZWppbkhlYWRlckhhbmRsZXJcbn1cblxuY29uc3QgdXBsb2FkSGFuZGxlclJlY29yZCA9IHtcbiAgW0VXZWJzaXRlLmp1ZWppbkhlYWRlcl06IGp1ZWppblVwbG9hZERhdGFIYW5kbGVyXG59XG5cbmV4cG9ydCBjb25zdCBkb21haW5DaGVja0VudHJ5ID0gKFxuICBkZXRhaWxzOlxuICAgIHwgY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzXG4gICAgfCBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keURldGFpbHNcbikgPT4ge1xuICBjb25zdCBkb21haW4gPSBnZXREb21haW5Gcm9tRGV0YWlscyhkZXRhaWxzKVxuICBjb25zdCBoZWFkZXJIYW5kbGVyID0gaGVhZGVySGFuZGxlclJlY29yZFtkb21haW5dXG4gIC8vIGhlYWRlckhhbmRsZXI/LihkZXRhaWxzKVxuICAvLyBkZXRhaWxzXG4gIGNvbnN0IHVwbG9hZEhhbmRsZXIgPSB1cGxvYWRIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgdXBsb2FkSGFuZGxlcj8uKGRldGFpbHMpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25IZWFkZXJIYW5kbGVyRW50cnkgPSAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc1xuKSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4gIGNvbnN0IGhlYWRlckhhbmRsZXIgPSBoZWFkZXJIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgaGVhZGVySGFuZGxlcj8uKGRldGFpbHMpXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJzSGFuZGxlckVudHJ5ID0gKCkgPT4ge31cblxuZXhwb3J0IGNvbnN0IGJvZHlIYW5kbGVyRW50cnkgPSAoXG4gIHJlcXVlc3RCb2R5OiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keSxcbiAgZG9tYWluOiBzdHJpbmdcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlYWRlciBoYW5kbGVyIGVudHJ5OlwiLCByZXF1ZXN0Qm9keSlcbiAgY29uc29sZS5sb2coXCJkb21haW46XCIsIGRvbWFpbilcbiAgY29uc3QgaGVhZGVySGFuZGxlciA9IGhlYWRlckhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICBoZWFkZXJIYW5kbGVyPy4ocmVxdWVzdEJvZHkpXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlQ2hlY2tJblhIUkRhdGEgPSAoY29va2llOiBzdHJpbmcsIGhlYWRlcjogYW55KSA9PiB7XG4gIGNvbnN0IHhockRhdGEgPSB7XG4gICAgY29va2llLFxuICAgIGhlYWRlclxuICB9XG4gIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgeGhyRGF0YSB9LCAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCLkv53lrZjmiJDlip9cIilcbiAgLy8gfSlcbiAgY29uc29sZS5sb2coXCJ4aHIgZGF0YTpcIiwgeGhyRGF0YSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RCb2R5RnJvbVdlYlJlcXVlc3RCb2R5RGV0YWlscyA9IChcbiAgcmVxdWVzdEJvZHk6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1tcInJlcXVlc3RCb2R5XCJdXG4pID0+IHtcbiAgaWYgKHJlcXVlc3RCb2R5Py5lcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSBlcnJvcjpcIiwgcmVxdWVzdEJvZHkuZXJyb3IpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LmVycm9yXG4gIH1cbiAgaWYgKHJlcXVlc3RCb2R5Py5mb3JtRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSBmb3JtRGF0YTpcIiwgcmVxdWVzdEJvZHkuZm9ybURhdGEpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LmZvcm1EYXRhXG4gIH1cbiAgaWYgKHJlcXVlc3RCb2R5Py5yYXcpIHtcbiAgICAvLyByZXR1cm4gcmF3XG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gcmVxdWVzdCBib2R5IHJhdzpcIiwgcmVxdWVzdEJvZHkucmF3KVxuICAgIHJldHVybiByZXF1ZXN0Qm9keS5yYXcubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5ieXRlcykge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGl0ZW0uYnl0ZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0IGJvZHk6XCIsIHJlcXVlc3RCb2R5KVxuICByZXR1cm4gbnVsbFxufVxuXG4vLyDor7vlj5bmmK/lkKbngrnlh7vlt7Lor7t0aXBcbmV4cG9ydCBjb25zdCBnZXRJc0NsaWNrVGlwID0gYXN5bmMgKGNhbGxiYWNrOiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJpc0NsaWNrVGlwXCJdKVxuICBjb25zb2xlLmxvZyhcImdldCByZXN1bHQ6XCIsIHJlc3VsdClcbiAgY2FsbGJhY2socmVzdWx0LmlzQ2xpY2tUaXApXG59XG5cbi8vIOiuvue9ruaYr+WQpueCueWHu+W3suivu3RpcFxuZXhwb3J0IGNvbnN0IHNldElzQ2xpY2tUaXAgPSAoaXNDbGlja1RpcDogYm9vbGVhbikgPT4ge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0NsaWNrVGlwIH0sICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOaIkOWKn1wiKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYXN5bmNTbGVlcCA9IChtczogbnVtYmVyID0gMTUwMCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxufSIsImltcG9ydCB7IGdldEhlYWRlckZyb21SZXF1ZXN0SGVhZGVycywgc2F2ZVdlYnNpdGVIZWFkZXIgfSBmcm9tIFwiLi9oZWxwXCJcblxuaW1wb3J0IHsgRVdlYnNpdGUgfSBmcm9tIFwifnR5cGVzXCJcbmltcG9ydCB7IGdldFJlcXVlc3RCb2R5RnJvbVdlYlJlcXVlc3RCb2R5RGV0YWlscyB9IGZyb20gXCJ+dXRpbHNcIlxuXG4vKipcbiAqIGp1ZWppbi5jbiDmqKHlnZdcbiAqL1xuZXhwb3J0IGNvbnN0IGp1ZWppblVwbG9hZERhdGFIYW5kbGVyID0gYXN5bmMgKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keURldGFpbHNcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0OlwiLCBkZXRhaWxzKVxuICBjb25zdCB7IG1ldGhvZCwgcmVxdWVzdEJvZHkgfSA9IGRldGFpbHNcbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB1cGxvYWREYXRhID0gZ2V0UmVxdWVzdEJvZHlGcm9tV2ViUmVxdWVzdEJvZHlEZXRhaWxzKHJlcXVlc3RCb2R5KVxuICAgIGNvbnNvbGUubG9nKFwianVlamluIHVwbG9hZCBkYXRhOlwiLCB1cGxvYWREYXRhKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBqdWVqaW5IZWFkZXJIYW5kbGVyID0gYXN5bmMgKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHNcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcInJhdyBkZXRhaWxzOlwiLCBkZXRhaWxzKVxuICBjb25zdCB7IHVybCwgcmVxdWVzdEhlYWRlcnMgfSA9IGRldGFpbHNcbiAgaWYgKHVybC5zdGFydHNXaXRoKEVXZWJzaXRlLmp1ZWppbkNoZWNrSW5VcmwpKSB7XG4gICAgLy8gcmVzb2x2ZSBoZWFkZXJzXG4gICAgY29uc3QgaGVhZGVyID0gZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzKHJlcXVlc3RIZWFkZXJzKVxuICAgIGNvbnNvbGUubG9nKFwianVlamluIGhlYWRlcjpcIiwgaGVhZGVyKVxuICAgIHNhdmVXZWJzaXRlSGVhZGVyKEVXZWJzaXRlLmp1ZWppbkhlYWRlciwgaGVhZGVyKVxuICB9XG59XG4iLCJpbXBvcnQgeyBFU3RhdHVzLCBFU3RvcmFnZUtleSB9IGZyb20gXCJ+dHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzID0gKFxuICByZXF1ZXN0SGVhZGVyczogY2hyb21lLndlYlJlcXVlc3QuSHR0cEhlYWRlcltdXG4pID0+IHtcbiAgcmV0dXJuIHJlcXVlc3RIZWFkZXJzLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICBhY2NbY3VyLm5hbWVdID0gY3VyLnZhbHVlXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVdlYnNpdGVIZWFkZXIgPSBhc3luYyAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XG4gICAgICBbYGhlYWRlci0ke2tleX1gXTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOermeeCueWktOmDqOWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0V2Vic2l0ZUhlYWRlciA9IGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICBjb25zdCByZWFsS2V5ID0gYGhlYWRlci0ke2tleX1gXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQocmVhbEtleSlcbiAgICByZXR1cm4gcmVzW3JlYWxLZXldXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCLojrflj5bnq5nngrnlpLTpg6jlpLHotKVcIiwgZXJyb3IpXG4gICAgY29uc29sZS5sb2coXCJrZXk6XCIsIHJlYWxLZXkpXG4gIH1cbn1cblxuLy8g5L+d5a2Y56uZ54K55piv5ZCm5ZCv55So562+5Yiw55qE54q25oCBXG5leHBvcnQgY29uc3Qgc2F2ZVdlYnNpdGVDaGVja0luU3RhdHVzID0gYXN5bmMgKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbikgPT4ge1xuICB0cnkge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcbiAgICAgIFtgY2hlY2tJbi0ke2tleX1gXTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOermeeCueetvuWIsOeKtuaAgeWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG4vLyDor7vlj5bnq5nngrnmmK/lkKblkK/nlKjnrb7liLDnmoTnirbmgIFcbmV4cG9ydCBjb25zdCBnZXRXZWJzaXRlQ2hlY2tJblN0YXR1cyA9IGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICBjb25zdCByZWFsS2V5ID0gYGNoZWNrSW4tJHtrZXl9YFxuICB0cnkge1xuICAgIC8vIOivu+WPlumFjee9ru+8jOajgOafpeaYr+WQpuWQr+eUqFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHJlYWxLZXkpXG4gICAgY29uc3QgaXNFbmFibGUgPSByZXNbcmVhbEtleV0gPz8gZmFsc2VcbiAgICBpZiAoIWlzRW5hYmxlKSByZXR1cm4gRVN0YXR1cy5EaXNhYmxlXG4gICAgLy8g5qOA5p+l562+5Yiw5piv5ZCm6L+H5pyfXG4gICAgY29uc3QgdmFsaWRLZXkgPSBgY2hlY2tJbi0ke2tleX0tdmFsaWRgXG4gICAgY29uc3QgY2hlY2tJblJlY29yZCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHZhbGlkS2V5KVxuICAgIGNvbnN0IGlzVmFsaWQgPSBjaGVja0luUmVjb3JkW3ZhbGlkS2V5XSA/PyBmYWxzZVxuICAgIGlmICghaXNWYWxpZCkgcmV0dXJuIEVTdGF0dXMuV2FpdDJSZXNldFxuICAgIHJldHVybiBFU3RhdHVzLlN1Y2Nlc3NcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIuiOt+WPluermeeCueetvuWIsOeKtuaAgeWksei0pVwiLCBlcnJvcilcbiAgICBjb25zb2xlLmxvZyhcImtleTpcIiwgcmVhbEtleSlcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gRVdlYnNpdGUge1xuICBqdWVqaW4gPSBcImh0dHBzOi8vYXBpLmp1ZWppbi5jbi8qXCIsXG4gIGp1ZWppbkhlYWRlciA9IFwiYXBpLmp1ZWppbi5jblwiLFxuICBqdWVqaW5DaGVja0luVXJsID0gXCJodHRwczovL2FwaS5qdWVqaW4uY24vZ3Jvd3RoX2FwaS92MS9jaGVja19pbj9cIlxufVxuXG5leHBvcnQgZW51bSBFU3RvcmFnZUtleSB7XG4gIC8vIOetvuWIsOiusOW9lemFjee9rlxuICBDaGVja0luUmVjb3JkID0gXCJjaGVja0luUmVjb3JkXCIsXG4gIC8vIOermeeCueWktOmDqOmFjee9rlxuICBXZWJzaXRlSGVhZGVyID0gXCJ3ZWJzaXRlSGVhZGVyXCIsXG4gIC8vIOermeeCueivt+axguS9k+mFjee9rlxuICBXZWJzaXRlQm9keSA9IFwid2Vic2l0ZUJvZHlcIlxufVxuXG5leHBvcnQgZW51bSBFU3RhdHVzIHtcbiAgLy8gU3VjY2Vzc1xuICBTdWNjZXNzID0gXCJzdWNjZXNzXCIsXG4gIC8vIOemgeeUqFxuICBEaXNhYmxlID0gXCJkaXNhYmxlXCIsXG4gIC8vIOetieW+hemHjee9rlxuICBXYWl0MlJlc2V0ID0gXCJ3YWl0MlJlc2V0XCJcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJiYWNrZ3JvdW5kLjcwNGM5MWYxLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);