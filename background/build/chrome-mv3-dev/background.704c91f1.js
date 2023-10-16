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
})({"8QS8v":[function(require,module,exports) {
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
    "serverPort": 58624
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
var _juejin = require("~module/juejin");
var _types = require("~types");
var _utils = require("~utils");
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    (0, _utils.commonHeaderHandlerEntry)(details);
    return {
        cancel: false
    };
}, {
    urls: [
        `${(0, _types.EJuejinKeyword).\u7b7e\u5230\u63a5\u53e3\u5730\u5740}*`
    ]
}, [
    "requestHeaders",
    "extraHeaders"
]);
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    const domain = (0, _utils.getDomainFromDetails)(details);
    (0, _utils.bodyHandlerEntry)(details.requestBody, domain);
    return {
        cancel: false
    };
}, {
    urls: [
        `${(0, _types.EJuejinKeyword).\u7b7e\u5230\u63a5\u53e3\u5730\u5740}*`
    ]
}, [
    "requestBody",
    "extraHeaders"
]);
chrome.tabs.onActivated.addListener((activeInfo)=>{
    console.log("active page:", activeInfo);
    // \u6fc0\u6d3b\u9875\u9762\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u5c1d\u8bd5\u7b7e\u5230
    (0, _juejin.juejinSignIn)();
});

},{"~module/juejin":"pBn2q","~types":"NoMjA","~utils":"cpxsN"}],"pBn2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "juejinUploadDataHandler", ()=>juejinUploadDataHandler);
parcelHelpers.export(exports, "juejinHeaderHandler", ()=>juejinHeaderHandler);
var _types = require("~types");
var _utils = require("~utils");
var _storage = require("~utils/storage");
var _help = require("./help");
const juejinUploadDataHandler = async (details)=>{
    if (!details) return;
    const { method ="" , requestBody  } = details;
    if (method === "POST") {
        const uploadData = (0, _utils.getRequestBodyFromWebRequestBodyDetails)(requestBody);
        (0, _storage.saveToStorage)((0, _types.EJuejinStorageKey).\u8bf7\u6c42\u51ed\u8bc1, uploadData);
    }
};
const juejinHeaderHandler = async (details)=>{
    const { url , requestHeaders  } = details;
    if (url.startsWith((0, _types.EJuejinKeyword).\u7b7e\u5230\u63a5\u53e3\u5730\u5740)) {
        const header = (0, _help.getHeaderFromRequestHeaders)(requestHeaders);
        (0, _storage.saveToStorage)((0, _types.EJuejinStorageKey).\u8bf7\u6c42\u5934, header);
    }
} // \u7b7e\u5230\u6a21\u5757
 // export const juejinSignIn = () => {
 //   console.log("auto sign in")
 //   getFromStorage(EJuejinStorageKey.\u7b7e\u5230\u542f\u7528\u72b6\u6001)
 //     .then((isEnable) => {
 //       console.log("is enable:", isEnable)
 //       if (isEnable) {
 //         return getFromStorage<number>(EJuejinStorageKey.\u7b7e\u5230\u8bb0\u5f55)
 //       }
 //     })
 //     .then((record) => {
 //       const yesterday = subDays(new Date(), 1)
 //       // \u5982\u679c\u5b58\u5728\u7b7e\u5230\u8bb0\u5f55\uff0c\u4e14\u7b7e\u5230\u8bb0\u5f55\u662f\u4eca\u5929\u4e4b\u524d\u7684\uff0c\u90a3\u4e48\u8bfb\u53d6\u8bf7\u6c42\u5934\u548c\u8bf7\u6c42\u4f53\u8fdb\u884c\u7b7e\u5230
 //       console.log("record...", record)
 //       if (!!record === true && record < endOfDay(yesterday).getTime()) {
 //         return Promise.all([
 //           getFromStorage<object>(EJuejinStorageKey.\u8bf7\u6c42\u5934),
 //           getFromStorage<object>(EJuejinStorageKey.\u8bf7\u6c42\u51ed\u8bc1)
 //         ])
 //       }
 //     })
 //     .then((data) => {
 //       console.log("header and body:", data)
 //       if (data) {
 //         const [header, body] = data
 //         // \u5c1d\u8bd5\u7b7e\u5230
 //         const url = `${EJuejinKeyword.\u7b7e\u5230\u63a5\u53e3\u5730\u5740}${Object.entries(
 //           body
 //         ).reduce((prev, [key, value]) => {
 //           return `${prev}${key}=${value}&`
 //         }, "")}`
 //         fetch(url, {
 //           method: "GET",
 //           headers: header as any
 //         })
 //           .then((res) => {
 //             console.log("res:", res)
 //           })
 //           .catch((error) => {
 //             console.log("fetch error:", error)
 //           })
 //       }
 //     })
 //     .catch((error) => {
 //       console.log("\u6398\u91d1\u7b7e\u5230\u5931\u8d25:", error)
 //     })
 // }
;

},{"~types":"NoMjA","~utils/storage":"6E8Wy","~utils":"cpxsN","./help":"eDJuM","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"NoMjA":[function(require,module,exports) {
// JUE JIN >> Enums
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EJuejinStorageKey", ()=>EJuejinStorageKey);
parcelHelpers.export(exports, "EJuejinKeyword", ()=>EJuejinKeyword);
parcelHelpers.export(exports, "EArea", ()=>EArea);
let EJuejinStorageKey;
(function(EJuejinStorageKey) {
    EJuejinStorageKey["\u7b7e\u5230\u542f\u7528\u72b6\u6001"] = "juejin-check-in-enable-status";
    EJuejinStorageKey["\u7b7e\u5230\u8bb0\u5f55"] = "juejin-check-in-record";
    EJuejinStorageKey["\u7b7e\u5230\u9875\u9762"] = "juejin-check-in-page";
    EJuejinStorageKey["\u8bf7\u6c42\u5934"] = "juejin-check-in-header";
    EJuejinStorageKey["\u8bf7\u6c42\u51ed\u8bc1"] = "juejin-check-in-cookie";
})(EJuejinStorageKey || (EJuejinStorageKey = {}));
let EJuejinKeyword;
(function(EJuejinKeyword) {
    EJuejinKeyword["\u7f51\u7edc\u901a\u914d\u7b26"] = "https://api.juejin.cn/*";
    EJuejinKeyword["\u7b7e\u5230\u63a5\u53e3\u5730\u5740"] = "https://api.juejin.cn/growth_api/v1/check_in?";
    EJuejinKeyword["\u7b7e\u5230\u9875\u9762"] = "https://juejin.cn/user/center/signin?from=main_page";
    EJuejinKeyword["\u57df\u540d"] = "api.juejin.cn";
})(EJuejinKeyword || (EJuejinKeyword = {}));
let EArea;
(function(EArea) {
    EArea["Sync"] = "sync";
    EArea["Local"] = "local";
})(EArea || (EArea = {}));

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

},{}],"6E8Wy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveToStorage", ()=>saveToStorage);
parcelHelpers.export(exports, "getFromStorage", ()=>getFromStorage);
var _types = require("~types");
const saveToStorage = async (key, value, area = (0, _types.EArea).Sync)=>{
    try {
        chrome.storage[area].set({
            [key]: value
        });
    } catch (error) {
        console.log("key:", key, " value:", value);
        console.log("\u4fdd\u5b58\u5931\u8d25", error);
    }
};
const getFromStorage = async (key, area = (0, _types.EArea).Sync)=>{
    try {
        const res = await chrome.storage[area].get(key);
        return res[key];
    } catch (error) {
        console.log("\u83b7\u53d6\u5931\u8d25", error);
        console.log("key:", key);
    }
};

},{"~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"cpxsN":[function(require,module,exports) {
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
    [(0, _types.EJuejinKeyword).\u57df\u540d]: (0, _juejin.juejinHeaderHandler)
};
const uploadHandlerRecord = {
    [(0, _types.EJuejinKeyword).\u57df\u540d]: (0, _juejin.juejinUploadDataHandler)
};
const domainCheckEntry = (details)=>{
    const domain = getDomainFromDetails(details);
    const headerHandler = headerHandlerRecord[domain];
    const uploadHandler = uploadHandlerRecord[domain];
    uploadHandler?.(details);
    headerHandler?.(details);
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
    const headerHandler = uploadHandlerRecord[domain];
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

},{"~module/juejin":"pBn2q","~types":"NoMjA","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"eDJuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHeaderFromRequestHeaders", ()=>getHeaderFromRequestHeaders);
const getHeaderFromRequestHeaders = (requestHeaders)=>{
    return requestHeaders.reduce((acc, cur)=>{
        acc[cur.name] = cur.value;
        return acc;
    }, {});
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["8QS8v","8oeFb"], "8oeFb", "parcelRequiref79d")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEtBQUssS0FBSyxFQUNaLE9BQU8sSUFBSSxZQUFZLFNBQVMsTUFBTSxDQUFDLEtBQUssS0FBSztRQUVyRDtJQUNGLENBQUM7SUFDRCxRQUFRLEdBQUcsQ0FBQyx3QkFBd0I7SUFDcEMsT0FBTyxJQUFJO0FBQ2I7QUFHTyxNQUFNLGdCQUFnQixPQUFPLFdBQXdDO0lBQzFFLE1BQU0sU0FBUyxNQUFNLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFBQztLQUFhO0lBQzVELFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO0FBQ2pDO0FBR08sTUFBTSxnQkFBZ0IsQ0FBQyxhQUF3QjtJQUNwRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQUU7SUFBVyxHQUFHLElBQU07UUFDN0MsUUFBUSxHQUFHLENBQUM7SUFDZDtBQUNGO0FBRU8sTUFBTSxhQUFhLENBQUMsS0FBYSxJQUFJLEdBQUs7SUFDL0MsT0FBTyxJQUFJLFFBQVEsQ0FBQyxVQUFZLFdBQVcsU0FBUztBQUN0RDs7O0FDcEdBOztpRUFBYTtBQUFOLE1BQU0sOEJBQThCLENBQ3pDLGlCQUNHO0lBQ0gsT0FBTyxlQUFlLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBUTtRQUN6QyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUs7UUFDekIsT0FBTztJQUNULEdBQUcsQ0FBQztBQUNOIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1kMmVlYmRlMDJiMmIzZmJjLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQvaW5kZXgudHMiLCJtb2R1bGUvanVlamluLnRzIiwidHlwZXMudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInV0aWxzL3N0b3JhZ2UudHMiLCJ1dGlscy50cyIsIm1vZHVsZS9oZWxwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIF89KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgdz1uZXcgU2V0KGcpLHk9ZT0+dy5oYXMoZSksJD1nLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGo9eShcIi0tZHJ5LXJ1blwiKSxtPSgpPT55KFwiLS12ZXJib3NlXCIpfHxfKCkuVkVSQk9TRT09PVwidHJ1ZVwiLEc9bSgpO3ZhciBmPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBiPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PmYoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxoPSguLi5lKT0+ZihcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+bSgpJiZmKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIFI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYWFyb24vcmVwb3MvQ2hlY2tNYW4vLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1ODYyNH07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgQj1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBEKGUpe0IuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9RDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5jaHJvbWV8fGdsb2JhbFRoaXMuYnJvd3Nlcnx8bnVsbDtmdW5jdGlvbiB1KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHAoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciB4PVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFA9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgSD1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHt1KCl9OiR7cCgpfS9gO2FzeW5jIGZ1bmN0aW9uIFMoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKEgpO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGwucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1sLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBrKGU9cCgpKXtsZXQgdD11KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gVChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZiKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoayhOdW1iZXIocCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtpZihKU09OLnBhcnNlKG8uZGF0YSkudHlwZT09PVwiYnVpbGRfcmVhZHlcIil7YXdhaXQgZSgpO3JldHVybn19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFQpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoaygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGM9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtjK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgQz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gZChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWwucnVudGltZS5yZWxvYWQoKX19aWYoIUN8fCFDLmlzUGFyY2VsUmVxdWlyZSl7UigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGM9PmMuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChjPT5PYmplY3QudmFsdWVzKGMpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGM9PnMuaGFzKGMpKX1kKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IFMoKSxkKCEwKX0pfUwoYXN5bmMoKT0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGEuYnVpbGRSZWFkeXx8PSEwLGQoKX0pO2wucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoeCksbz1lLm5hbWUuc3RhcnRzV2l0aChQKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCksZCgpfSl9fSk7bC5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIiksZCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZC9pbmRleFwiIiwiaW1wb3J0IHsganVlamluU2lnbkluIH0gZnJvbSBcIn5tb2R1bGUvanVlamluXCJcbmltcG9ydCB7IEVKdWVqaW5LZXl3b3JkIH0gZnJvbSBcIn50eXBlc1wiXG5pbXBvcnQge1xuICBib2R5SGFuZGxlckVudHJ5LFxuICBjb21tb25IZWFkZXJIYW5kbGVyRW50cnksXG4gIGdldERvbWFpbkZyb21EZXRhaWxzXG59IGZyb20gXCJ+dXRpbHNcIlxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKFxuICBmdW5jdGlvbiAoZGV0YWlscykge1xuICAgIGNvbW1vbkhlYWRlckhhbmRsZXJFbnRyeShkZXRhaWxzKVxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfVxuICB9LFxuICB7IHVybHM6IFtgJHtFSnVlamluS2V5d29yZC7nrb7liLDmjqXlj6PlnLDlnYB9KmBdIH0sXG4gIFtcInJlcXVlc3RIZWFkZXJzXCIsIFwiZXh0cmFIZWFkZXJzXCJdXG4pXG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICBjb25zdCBkb21haW4gPSBnZXREb21haW5Gcm9tRGV0YWlscyhkZXRhaWxzKVxuICAgIGJvZHlIYW5kbGVyRW50cnkoZGV0YWlscy5yZXF1ZXN0Qm9keSwgZG9tYWluKVxuICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UgfVxuICB9LFxuICB7IHVybHM6IFtgJHtFSnVlamluS2V5d29yZC7nrb7liLDmjqXlj6PlnLDlnYB9KmBdIH0sXG4gIFtcInJlcXVlc3RCb2R5XCIsIFwiZXh0cmFIZWFkZXJzXCJdXG4pXG5cbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKChhY3RpdmVJbmZvKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIHBhZ2U6XCIsIGFjdGl2ZUluZm8pXG4gIC8vIOa/gOa0u+mhtemdoueahOaXtuWAme+8jOiHquWKqOWwneivleetvuWIsFxuICBqdWVqaW5TaWduSW4oKVxufSlcbiIsImltcG9ydCB7IGVuZE9mRGF5LCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCJcblxuaW1wb3J0IHsgRUp1ZWppbktleXdvcmQsIEVKdWVqaW5TdG9yYWdlS2V5IH0gZnJvbSBcIn50eXBlc1wiXG5pbXBvcnQgeyBnZXRSZXF1ZXN0Qm9keUZyb21XZWJSZXF1ZXN0Qm9keURldGFpbHMgfSBmcm9tIFwifnV0aWxzXCJcbmltcG9ydCB7IGdldEZyb21TdG9yYWdlLCBzYXZlVG9TdG9yYWdlIH0gZnJvbSBcIn51dGlscy9zdG9yYWdlXCJcblxuaW1wb3J0IHsgZ2V0SGVhZGVyRnJvbVJlcXVlc3RIZWFkZXJzIH0gZnJvbSBcIi4vaGVscFwiXG5cbi8qKlxuICoganVlamluLmNuIOaooeWdl1xuICovXG5leHBvcnQgY29uc3QganVlamluVXBsb2FkRGF0YUhhbmRsZXIgPSBhc3luYyAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1xuKSA9PiB7XG4gIGlmICghZGV0YWlscykgcmV0dXJuXG4gIGNvbnN0IHsgbWV0aG9kID0gXCJcIiwgcmVxdWVzdEJvZHkgfSA9IGRldGFpbHNcbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB1cGxvYWREYXRhID0gZ2V0UmVxdWVzdEJvZHlGcm9tV2ViUmVxdWVzdEJvZHlEZXRhaWxzKHJlcXVlc3RCb2R5KVxuICAgIHNhdmVUb1N0b3JhZ2UoRUp1ZWppblN0b3JhZ2VLZXku6K+35rGC5Yet6K+BLCB1cGxvYWREYXRhKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBqdWVqaW5IZWFkZXJIYW5kbGVyID0gYXN5bmMgKFxuICBkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHNcbikgPT4ge1xuICBjb25zdCB7IHVybCwgcmVxdWVzdEhlYWRlcnMgfSA9IGRldGFpbHNcbiAgaWYgKHVybC5zdGFydHNXaXRoKEVKdWVqaW5LZXl3b3JkLuetvuWIsOaOpeWPo+WcsOWdgCkpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBnZXRIZWFkZXJGcm9tUmVxdWVzdEhlYWRlcnMocmVxdWVzdEhlYWRlcnMpXG4gICAgc2F2ZVRvU3RvcmFnZShFSnVlamluU3RvcmFnZUtleS7or7fmsYLlpLQsIGhlYWRlcilcbiAgfVxufVxuXG4vLyDnrb7liLDmqKHlnZdcbi8vIGV4cG9ydCBjb25zdCBqdWVqaW5TaWduSW4gPSAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiYXV0byBzaWduIGluXCIpXG4vLyAgIGdldEZyb21TdG9yYWdlKEVKdWVqaW5TdG9yYWdlS2V5LuetvuWIsOWQr+eUqOeKtuaAgSlcbi8vICAgICAudGhlbigoaXNFbmFibGUpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiaXMgZW5hYmxlOlwiLCBpc0VuYWJsZSlcbi8vICAgICAgIGlmIChpc0VuYWJsZSkge1xuLy8gICAgICAgICByZXR1cm4gZ2V0RnJvbVN0b3JhZ2U8bnVtYmVyPihFSnVlamluU3RvcmFnZUtleS7nrb7liLDorrDlvZUpXG4vLyAgICAgICB9XG4vLyAgICAgfSlcbi8vICAgICAudGhlbigocmVjb3JkKSA9PiB7XG4vLyAgICAgICBjb25zdCB5ZXN0ZXJkYXkgPSBzdWJEYXlzKG5ldyBEYXRlKCksIDEpXG4vLyAgICAgICAvLyDlpoLmnpzlrZjlnKjnrb7liLDorrDlvZXvvIzkuJTnrb7liLDorrDlvZXmmK/ku4rlpKnkuYvliY3nmoTvvIzpgqPkuYjor7vlj5bor7fmsYLlpLTlkozor7fmsYLkvZPov5vooYznrb7liLBcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmVjb3JkLi4uXCIsIHJlY29yZClcbi8vICAgICAgIGlmICghIXJlY29yZCA9PT0gdHJ1ZSAmJiByZWNvcmQgPCBlbmRPZkRheSh5ZXN0ZXJkYXkpLmdldFRpbWUoKSkge1xuLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuLy8gICAgICAgICAgIGdldEZyb21TdG9yYWdlPG9iamVjdD4oRUp1ZWppblN0b3JhZ2VLZXku6K+35rGC5aS0KSxcbi8vICAgICAgICAgICBnZXRGcm9tU3RvcmFnZTxvYmplY3Q+KEVKdWVqaW5TdG9yYWdlS2V5Luivt+axguWHreivgSlcbi8vICAgICAgICAgXSlcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImhlYWRlciBhbmQgYm9keTpcIiwgZGF0YSlcbi8vICAgICAgIGlmIChkYXRhKSB7XG4vLyAgICAgICAgIGNvbnN0IFtoZWFkZXIsIGJvZHldID0gZGF0YVxuLy8gICAgICAgICAvLyDlsJ3or5Xnrb7liLBcbi8vICAgICAgICAgY29uc3QgdXJsID0gYCR7RUp1ZWppbktleXdvcmQu562+5Yiw5o6l5Y+j5Zyw5Z2AfSR7T2JqZWN0LmVudHJpZXMoXG4vLyAgICAgICAgICAgYm9keVxuLy8gICAgICAgICApLnJlZHVjZSgocHJldiwgW2tleSwgdmFsdWVdKSA9PiB7XG4vLyAgICAgICAgICAgcmV0dXJuIGAke3ByZXZ9JHtrZXl9PSR7dmFsdWV9JmBcbi8vICAgICAgICAgfSwgXCJcIil9YFxuLy8gICAgICAgICBmZXRjaCh1cmwsIHtcbi8vICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4vLyAgICAgICAgICAgaGVhZGVyczogaGVhZGVyIGFzIGFueVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzOlwiLCByZXMpXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOlwiLCBlcnJvcilcbi8vICAgICAgICAgICB9KVxuLy8gICAgICAgfVxuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coXCLmjpjph5Hnrb7liLDlpLHotKU6XCIsIGVycm9yKVxuLy8gICAgIH0pXG4vLyB9XG4iLCIvLyBKVUUgSklOID4+IEVudW1zXG5leHBvcnQgZW51bSBFSnVlamluU3RvcmFnZUtleSB7XG4gIOetvuWIsOWQr+eUqOeKtuaAgSA9IFwianVlamluLWNoZWNrLWluLWVuYWJsZS1zdGF0dXNcIixcbiAg562+5Yiw6K6w5b2VID0gXCJqdWVqaW4tY2hlY2staW4tcmVjb3JkXCIsXG4gIOetvuWIsOmhtemdoiA9IFwianVlamluLWNoZWNrLWluLXBhZ2VcIixcbiAg6K+35rGC5aS0ID0gXCJqdWVqaW4tY2hlY2staW4taGVhZGVyXCIsXG4gIOivt+axguWHreivgSA9IFwianVlamluLWNoZWNrLWluLWNvb2tpZVwiXG59XG5cbmV4cG9ydCBlbnVtIEVKdWVqaW5LZXl3b3JkIHtcbiAg572R57uc6YCa6YWN56ymID0gXCJodHRwczovL2FwaS5qdWVqaW4uY24vKlwiLFxuICDnrb7liLDmjqXlj6PlnLDlnYAgPSBcImh0dHBzOi8vYXBpLmp1ZWppbi5jbi9ncm93dGhfYXBpL3YxL2NoZWNrX2luP1wiLFxuICDnrb7liLDpobXpnaIgPSBcImh0dHBzOi8vanVlamluLmNuL3VzZXIvY2VudGVyL3NpZ25pbj9mcm9tPW1haW5fcGFnZVwiLFxuICDln5/lkI0gPSBcImFwaS5qdWVqaW4uY25cIlxufVxuXG4vLyBDT01NT04gID4+IEVudW1zXG5leHBvcnQgZW51bSBFQXJlYSB7XG4gIFN5bmMgPSBcInN5bmNcIixcbiAgTG9jYWwgPSBcImxvY2FsXCJcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEVBcmVhIH0gZnJvbSBcIn50eXBlc1wiXG5cbi8qKlxuICog5L+d5a2Y5pWw5o2u5YiwIGNocm9tZS5zdG9yYWdlXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBhcmVhIHN5bmMg5ZCM5q2l5pWw5o2u77ybbG9jYWwg5pys5Zyw5pWw5o2uXG4gKi9cbmV4cG9ydCBjb25zdCBzYXZlVG9TdG9yYWdlID0gYXN5bmMgKFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbiAgYXJlYSA9IEVBcmVhLlN5bmNcbikgPT4ge1xuICB0cnkge1xuICAgIGNocm9tZS5zdG9yYWdlW2FyZWFdLnNldCh7XG4gICAgICBba2V5XTogdmFsdWVcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXksIFwiIHZhbHVlOlwiLCB2YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOWksei0pVwiLCBlcnJvcilcbiAgfVxufVxuXG4vKipcbiAqIOivu+WPluaVsOaNruS7jiBjaHJvbWUuc3RvcmFnZVxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIGFyZWEgc3luYyDlkIzmraXmlbDmja7vvJtsb2NhbCDmnKzlnLDmlbDmja5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGcm9tU3RvcmFnZSA9IGFzeW5jIDxUPihcbiAga2V5OiBzdHJpbmcsXG4gIGFyZWEgPSBFQXJlYS5TeW5jXG4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZVthcmVhXS5nZXQoa2V5KVxuICAgIHJldHVybiByZXNba2V5XVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwi6I635Y+W5aSx6LSlXCIsIGVycm9yKVxuICAgIGNvbnNvbGUubG9nKFwia2V5OlwiLCBrZXkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGp1ZWppbkhlYWRlckhhbmRsZXIsIGp1ZWppblVwbG9hZERhdGFIYW5kbGVyIH0gZnJvbSBcIn5tb2R1bGUvanVlamluXCJcbmltcG9ydCB7IEVKdWVqaW5LZXl3b3JkIH0gZnJvbSBcIn50eXBlc1wiXG5cbmV4cG9ydCBjb25zdCBnZXREb21haW5Gcm9tRGV0YWlscyA9IChcbiAgZGV0YWlsczogY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdERldGFpbHNcbikgPT4ge1xuICBjb25zdCB7IHVybCB9ID0gZGV0YWlsc1xuICByZXR1cm4gdXJsLnNwbGl0KFwiL1wiKVsyXVxufVxuXG5jb25zdCBoZWFkZXJIYW5kbGVyUmVjb3JkID0ge1xuICBbRUp1ZWppbktleXdvcmQu5Z+f5ZCNXToganVlamluSGVhZGVySGFuZGxlclxufVxuXG5jb25zdCB1cGxvYWRIYW5kbGVyUmVjb3JkID0ge1xuICBbRUp1ZWppbktleXdvcmQu5Z+f5ZCNXToganVlamluVXBsb2FkRGF0YUhhbmRsZXJcbn1cblxuZXhwb3J0IGNvbnN0IGRvbWFpbkNoZWNrRW50cnkgPSAoXG4gIGRldGFpbHM6XG4gICAgfCBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0SGVhZGVyc0RldGFpbHNcbiAgICB8IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1xuKSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4gIGNvbnN0IGhlYWRlckhhbmRsZXIgPSBoZWFkZXJIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgY29uc3QgdXBsb2FkSGFuZGxlciA9IHVwbG9hZEhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICB1cGxvYWRIYW5kbGVyPy4oZGV0YWlscylcbiAgaGVhZGVySGFuZGxlcj8uKGRldGFpbHMpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25IZWFkZXJIYW5kbGVyRW50cnkgPSAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RIZWFkZXJzRGV0YWlsc1xuKSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGdldERvbWFpbkZyb21EZXRhaWxzKGRldGFpbHMpXG4gIGNvbnN0IGhlYWRlckhhbmRsZXIgPSBoZWFkZXJIYW5kbGVyUmVjb3JkW2RvbWFpbl1cbiAgaGVhZGVySGFuZGxlcj8uKGRldGFpbHMpXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJzSGFuZGxlckVudHJ5ID0gKCkgPT4ge31cblxuZXhwb3J0IGNvbnN0IGJvZHlIYW5kbGVyRW50cnkgPSAoXG4gIHJlcXVlc3RCb2R5OiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keSxcbiAgZG9tYWluOiBzdHJpbmdcbikgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlYWRlciBoYW5kbGVyIGVudHJ5OlwiLCByZXF1ZXN0Qm9keSlcbiAgY29uc29sZS5sb2coXCJkb21haW46XCIsIGRvbWFpbilcbiAgY29uc3QgaGVhZGVySGFuZGxlciA9IHVwbG9hZEhhbmRsZXJSZWNvcmRbZG9tYWluXVxuICBoZWFkZXJIYW5kbGVyPy4ocmVxdWVzdEJvZHkpXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlQ2hlY2tJblhIUkRhdGEgPSAoY29va2llOiBzdHJpbmcsIGhlYWRlcjogYW55KSA9PiB7XG4gIGNvbnN0IHhockRhdGEgPSB7XG4gICAgY29va2llLFxuICAgIGhlYWRlclxuICB9XG4gIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgeGhyRGF0YSB9LCAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCLkv53lrZjmiJDlip9cIilcbiAgLy8gfSlcbiAgY29uc29sZS5sb2coXCJ4aHIgZGF0YTpcIiwgeGhyRGF0YSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RCb2R5RnJvbVdlYlJlcXVlc3RCb2R5RGV0YWlscyA9IChcbiAgcmVxdWVzdEJvZHk6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlcXVlc3RCb2R5RGV0YWlsc1tcInJlcXVlc3RCb2R5XCJdXG4pID0+IHtcbiAgaWYgKHJlcXVlc3RCb2R5Py5lcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSBlcnJvcjpcIiwgcmVxdWVzdEJvZHkuZXJyb3IpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LmVycm9yXG4gIH1cbiAgaWYgKHJlcXVlc3RCb2R5Py5mb3JtRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwianVlamluIHJlcXVlc3QgYm9keSBmb3JtRGF0YTpcIiwgcmVxdWVzdEJvZHkuZm9ybURhdGEpXG4gICAgcmV0dXJuIHJlcXVlc3RCb2R5LmZvcm1EYXRhXG4gIH1cbiAgaWYgKHJlcXVlc3RCb2R5Py5yYXcpIHtcbiAgICAvLyByZXR1cm4gcmF3XG4gICAgY29uc29sZS5sb2coXCJqdWVqaW4gcmVxdWVzdCBib2R5IHJhdzpcIiwgcmVxdWVzdEJvZHkucmF3KVxuICAgIHJldHVybiByZXF1ZXN0Qm9keS5yYXcubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5ieXRlcykge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGl0ZW0uYnl0ZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjb25zb2xlLmxvZyhcImp1ZWppbiByZXF1ZXN0IGJvZHk6XCIsIHJlcXVlc3RCb2R5KVxuICByZXR1cm4gbnVsbFxufVxuXG4vLyDor7vlj5bmmK/lkKbngrnlh7vlt7Lor7t0aXBcbmV4cG9ydCBjb25zdCBnZXRJc0NsaWNrVGlwID0gYXN5bmMgKGNhbGxiYWNrOiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJpc0NsaWNrVGlwXCJdKVxuICBjYWxsYmFjayghIXJlc3VsdFtcImlzQ2xpY2tUaXBcIl0pXG59XG5cbi8vIOiuvue9ruaYr+WQpueCueWHu+W3suivu3RpcFxuZXhwb3J0IGNvbnN0IHNldElzQ2xpY2tUaXAgPSAoaXNDbGlja1RpcDogYm9vbGVhbikgPT4ge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0NsaWNrVGlwIH0sICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmOaIkOWKn1wiKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYXN5bmNTbGVlcCA9IChtczogbnVtYmVyID0gMTUwMCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxufVxuIiwiZXhwb3J0IGNvbnN0IGdldEhlYWRlckZyb21SZXF1ZXN0SGVhZGVycyA9IChcbiAgcmVxdWVzdEhlYWRlcnM6IGNocm9tZS53ZWJSZXF1ZXN0Lkh0dHBIZWFkZXJbXVxuKSA9PiB7XG4gIHJldHVybiByZXF1ZXN0SGVhZGVycy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgYWNjW2N1ci5uYW1lXSA9IGN1ci52YWx1ZVxuICAgIHJldHVybiBhY2NcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcbn0iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC43MDRjOTFmMS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);