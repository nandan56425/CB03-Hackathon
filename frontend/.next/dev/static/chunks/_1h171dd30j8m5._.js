(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app/components/VerificationPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerificationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../services/verificationService'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function VerificationPage() {
    _s();
    const [batchId, setBatchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchedId, setSearchedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentBatch, setCurrentBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searched, setSearched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scannerOpen, setScannerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scannerStatus, setScannerStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("starting");
    const scannerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* =========================================
     VERIFY MEDICINE
  ========================================= */ async function verifyBatch(id) {
        const value = (id ?? batchId).trim().toUpperCase();
        if (!value) {
            setSearched(false);
            setSearchedId("");
            setCurrentBatch(null);
            setError("");
            return;
        }
        setBatchId(value);
        setSearchedId(value);
        setSearched(true);
        setLoading(true);
        setError("");
        setCurrentBatch(null);
        try {
            const result = await verifyBatchService(value);
            setCurrentBatch(result);
        } catch (err) {
            console.error(err);
            setError("Unable to connect to the verification service. Please try again.");
        } finally{
            setLoading(false);
        }
    }
    /* =========================================
     ENTER KEY
  ========================================= */ function handleKeyDown(event) {
        if (event.key === "Enter") {
            verifyBatch();
        }
    }
    /* =========================================
     START QR SCANNER
  ========================================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerificationPage.useEffect": ()=>{
            if (!scannerOpen) {
                return;
            }
            let scanner;
            let cancelled = false;
            async function startScanner() {
                try {
                    setScannerStatus("starting");
                    const { Html5Qrcode } = await Promise.resolve().then(()=>{
                        const e = new Error("Cannot find module 'html5-qrcode'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                    if (cancelled) {
                        return;
                    }
                    scanner = new Html5Qrcode("verification-qr-reader");
                    scannerRef.current = scanner;
                    await scanner.start({
                        facingMode: "environment"
                    }, {
                        fps: 10,
                        qrbox: {
                            width: 250,
                            height: 250
                        },
                        aspectRatio: 1
                    }, {
                        "VerificationPage.useEffect.startScanner": async (decodedText)=>{
                            if (!decodedText || cancelled) {
                                return;
                            }
                            const id = decodedText.trim().toUpperCase();
                            if (!id) {
                                return;
                            }
                            setScannerStatus("detected");
                            try {
                                await scanner.stop();
                            } catch  {
                            // Scanner may already have stopped.
                            }
                            scannerRef.current = null;
                            setTimeout({
                                "VerificationPage.useEffect.startScanner": ()=>{
                                    if (!cancelled) {
                                        setScannerOpen(false);
                                        verifyBatch(id);
                                    }
                                }
                            }["VerificationPage.useEffect.startScanner"], 500);
                        }
                    }["VerificationPage.useEffect.startScanner"], {
                        "VerificationPage.useEffect.startScanner": ()=>{
                        // Ignore continuous QR search errors.
                        }
                    }["VerificationPage.useEffect.startScanner"]);
                    if (!cancelled) {
                        setScannerStatus("scanning");
                    }
                } catch (err) {
                    console.error("QR scanner error:", err);
                    if (!cancelled) {
                        setScannerStatus("error");
                        setError("Camera access failed. Please allow camera permission and try again.");
                    }
                }
            }
            startScanner();
            return ({
                "VerificationPage.useEffect": ()=>{
                    cancelled = true;
                    if (scannerRef.current) {
                        scannerRef.current.stop().catch({
                            "VerificationPage.useEffect": ()=>{}
                        }["VerificationPage.useEffect"]);
                        scannerRef.current = null;
                    }
                }
            })["VerificationPage.useEffect"];
        }
    }["VerificationPage.useEffect"], [
        scannerOpen
    ]);
    /* =========================================
     CLOSE SCANNER
  ========================================= */ async function closeScanner() {
        if (scannerRef.current) {
            try {
                await scannerRef.current.stop();
            } catch  {
            // Already stopped.
            }
            scannerRef.current = null;
        }
        setScannerOpen(false);
        setScannerStatus("starting");
    }
    /* =========================================
     RESULT STATE
  ========================================= */ const isExpired = currentBatch?.status === "EXPIRED";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `

        * {
          box-sizing: border-box;
        }

        .verification-page {
          min-height: 100vh;
          background: #F4F7FB;
          color: #334155;
          padding-bottom: 70px;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* =====================================
           HEADER
        ===================================== */

        .verification-header {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          padding: 22px 7%;
        }

        .brand {
          color: #0B1F3A;
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .brand span {
          color: #06B6D4;
        }

        .brand-subtitle {
          margin-top: 3px;
          color: #64748B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        /* =====================================
           CONTENT
        ===================================== */

        .verification-content {
          width: min(1120px, 88%);
          margin: 0 auto;
          padding-top: 38px;
        }

        .page-label {
          color: #06B6D4;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .page-title {
          margin: 0;
          color: #0B1F3A;
          font-size: 34px;
          line-height: 1.15;
          font-weight: 800;
        }

        .page-description {
          margin: 9px 0 0;
          color: #64748B;
          font-size: 14px;
          line-height: 1.6;
          max-width: 680px;
        }

        /* =====================================
           VERIFY CARD
        ===================================== */

        .verify-card {
          margin-top: 28px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        }

        .verify-card-title {
          color: #0B1F3A;
          font-size: 17px;
          font-weight: 750;
          margin: 0;
        }

        .verify-card-subtitle {
          margin: 5px 0 20px;
          color: #64748B;
          font-size: 12px;
        }

        .input-row {
          display: flex;
          gap: 10px;
        }

        .batch-input {
          flex: 1;
          min-width: 0;
          height: 46px;
          padding: 0 14px;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          background: #FFFFFF;
          color: #0B1F3A;
          font-size: 14px;
          outline: none;
        }

        .batch-input:focus {
          border-color: #06B6D4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.12);
        }

        .batch-input::placeholder {
          color: #94A3B8;
        }

        .verify-button {
          height: 46px;
          padding: 0 24px;
          border: none;
          border-radius: 10px;
          background: #0B1F3A;
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
        }

        .verify-button:hover {
          background: #0E7490;
        }

        .verify-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .scan-button {
          height: 46px;
          padding: 0 20px;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          background: #FFFFFF;
          color: #0B1F3A;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .scan-button:hover {
          border-color: #06B6D4;
          color: #0891B2;
          background: #ECFEFF;
        }

        /* =====================================
           DEMO
        ===================================== */

        .demo-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 15px;
          color: #64748B;
          font-size: 11px;
        }

        .demo-row button {
          border: 1px solid #E2E8F0;
          background: #F8FAFC;
          color: #475569;
          padding: 6px 10px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .demo-row button:hover {
          border-color: #06B6D4;
          background: #ECFEFF;
          color: #0891B2;
        }

        /* =====================================
           LOADING
        ===================================== */

        .loading-card {
          margin-top: 24px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 45px 25px;
          text-align: center;
        }

        .spinner {
          width: 42px;
          height: 42px;
          margin: 0 auto 18px;
          border: 4px solid #E2E8F0;
          border-top-color: #06B6D4;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading-card h2 {
          margin: 0;
          color: #0B1F3A;
          font-size: 19px;
        }

        .loading-card p {
          margin: 7px 0 0;
          color: #64748B;
          font-size: 13px;
        }

        /* =====================================
           STATUS
        ===================================== */

        .status-card {
          margin-top: 24px;
          padding: 21px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid;
        }

        .status-card.verified {
          background: #ECFDF5;
          border-color: #A7F3D0;
        }

        .status-card.expired {
          background: #FFF7ED;
          border-color: #FED7AA;
        }

        .status-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .verified .status-icon {
          background: #D1FAE5;
          color: #059669;
        }

        .expired .status-icon {
          background: #FFEDD5;
          color: #EA580C;
        }

        .status-info {
          flex: 1;
        }

        .status-label {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .verified .status-label {
          color: #047857;
        }

        .expired .status-label {
          color: #C2410C;
        }

        .status-info p {
          margin: 4px 0 0;
          color: #64748B;
          font-size: 12px;
        }

        .batch-badge {
          padding: 7px 10px;
          border-radius: 8px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #0B1F3A;
          font-size: 11px;
          font-weight: 800;
        }

        /* =====================================
           RESULT CARDS
        ===================================== */

        .section-card {
          margin-top: 20px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 21px;
        }

        .section-label {
          color: #06B6D4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .section-title {
          margin: 0;
          color: #0B1F3A;
          font-size: 19px;
          font-weight: 800;
        }

        .blockchain-badge {
          padding: 8px 11px;
          border-radius: 8px;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #047857;
          font-size: 11px;
          font-weight: 700;
        }

        /* =====================================
           DETAILS
        ===================================== */

        .details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .detail {
          padding: 15px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 11px;
        }

        .detail-label {
          display: block;
          color: #64748B;
          font-size: 10px;
          margin-bottom: 6px;
        }

        .detail-value {
          display: block;
          color: #0B1F3A;
          font-size: 14px;
          font-weight: 750;
        }

        /* =====================================
           TIMELINE
        ===================================== */

        .timeline {
          position: relative;
        }

        .timeline-item {
          position: relative;
          display: flex;
          gap: 15px;
          padding-bottom: 26px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-item:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 32px;
          bottom: 0;
          width: 2px;
          background: #CBD5E1;
        }

        .timeline-dot {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ECFDF5;
          border: 2px solid #10B981;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          position: relative;
          z-index: 1;
        }

        .timeline-role {
          color: #06B6D4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .timeline-name {
          margin: 3px 0;
          color: #0B1F3A;
          font-size: 14px;
          font-weight: 750;
        }

        .timeline-action {
          color: #64748B;
          font-size: 12px;
        }

        .timeline-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 7px;
          color: #64748B;
          font-size: 10px;
        }

        /* =====================================
           BLOCKCHAIN
        ===================================== */

        .blockchain-section {
          margin-top: 20px;
          background: #0B1F3A;
          border-radius: 16px;
          padding: 24px;
        }

        .blockchain-section .section-label {
          color: #67E8F9;
        }

        .blockchain-section .section-title {
          color: #FFFFFF;
        }

        .blockchain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .blockchain-item {
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        .blockchain-item span {
          display: block;
          color: #94A3B8;
          font-size: 10px;
          margin-bottom: 5px;
        }

        .blockchain-item strong {
          color: #FFFFFF;
          font-size: 12px;
        }

        .blockchain-confirmed {
          color: #6EE7B7 !important;
        }

        /* =====================================
           NOT VERIFIED
        ===================================== */

        .not-verified {
          margin-top: 24px;
          background: #FFFFFF;
          border: 1px solid #FECACA;
          border-radius: 16px;
          padding: 38px 25px;
          text-align: center;
        }

        .not-verified-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: #FEE2E2;
          color: #EF4444;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
        }

        .not-verified-label {
          color: #DC2626;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .not-verified h2 {
          margin: 7px 0;
          color: #0B1F3A;
          font-size: 21px;
        }

        .not-verified p {
          max-width: 520px;
          margin: 0 auto;
          color: #64748B;
          font-size: 13px;
          line-height: 1.6;
        }

        .warning {
          margin: 18px auto 0;
          max-width: 500px;
          padding: 11px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-radius: 9px;
          color: #B91C1C;
          font-size: 11px;
          font-weight: 700;
        }

        /* =====================================
           QR MODAL
        ===================================== */

        .qr-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(11,31,58,0.70);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .qr-modal {
          width: min(500px, 100%);
          background: #FFFFFF;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 25px 70px rgba(15,23,42,0.30);
          position: relative;
        }

        .qr-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 35px;
          height: 35px;
          border-radius: 9px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          color: #64748B;
          cursor: pointer;
        }

        .qr-close:hover {
          background: #F8FAFC;
          color: #0B1F3A;
        }

        .qr-title {
          margin: 0;
          color: #0B1F3A;
          font-size: 20px;
          font-weight: 800;
        }

        .qr-description {
          margin: 5px 0 20px;
          color: #64748B;
          font-size: 12px;
        }

        .qr-reader-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
          background: #0B1F3A;
        }

        .qr-reader {
          overflow: hidden;
          min-height: 320px;
        }

        .scanner-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scan-frame {
          width: 250px;
          height: 250px;
          border: 2px solid #06B6D4;
          border-radius: 14px;
          box-shadow:
            0 0 0 999px rgba(11,31,58,0.35),
            0 0 25px rgba(6,182,212,0.25);
          position: relative;
        }

        .scan-frame::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          top: 50%;
          height: 2px;
          background: #06B6D4;
          box-shadow: 0 0 10px #06B6D4;
          animation: scan-line 2s ease-in-out infinite;
        }

        @keyframes scan-line {
          0%, 100% {
            transform: translateY(-100px);
            opacity: 0.5;
          }

          50% {
            transform: translateY(100px);
            opacity: 1;
          }
        }

        .scanner-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 15px;
          color: #64748B;
          font-size: 12px;
        }

        .status-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #06B6D4;
          animation: pulse 1.2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.35;
          }

          50% {
            opacity: 1;
          }
        }

        .scanner-detected {
          color: #059669;
          font-weight: 700;
        }

        .scanner-detected .status-pulse {
          background: #10B981;
          animation: none;
        }

        .scanner-error {
          color: #DC2626;
          font-weight: 600;
        }

        .scanner-error .status-pulse {
          background: #EF4444;
          animation: none;
        }

        .qr-privacy {
          margin-top: 10px;
          text-align: center;
          color: #94A3B8;
          font-size: 10px;
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 800px) {
          .verification-content {
            width: 92%;
          }

          .page-title {
            font-size: 29px;
          }

          .input-row {
            flex-direction: column;
          }

          .verify-button,
          .scan-button {
            width: 100%;
          }

          .details-grid,
          .blockchain-grid {
            grid-template-columns: 1fr 1fr;
          }

          .status-card {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 520px) {
          .verification-content {
            width: calc(100% - 28px);
            padding-top: 28px;
          }

          .page-title {
            font-size: 27px;
          }

          .verify-card,
          .section-card {
            padding: 19px;
          }

          .details-grid,
          .blockchain-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
          }

          .qr-modal {
            padding: 20px;
          }

          .scan-frame {
            width: 220px;
            height: 220px;
          }
        }

      `
            }, void 0, false, {
                fileName: "[project]/src/app/components/VerificationPage.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "verification-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "verification-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand",
                                children: [
                                    "MED",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "TRACE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1026,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-subtitle",
                                children: "Medicine Supply Chain"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1030,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                        lineNumber: 1025,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "verification-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-label",
                                children: "Verification"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1039,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "page-title",
                                children: "Medicine Verification"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1043,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "page-description",
                                children: "Verify the authenticity of a medicine batch and trace its complete journey through the supply chain."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1047,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "verify-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "verify-card-title",
                                        children: "Verify Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "verify-card-subtitle",
                                        children: "Enter the batch ID printed on the package or scan its QR code."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "input-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "batch-input",
                                                value: batchId,
                                                onChange: (event)=>setBatchId(event.target.value),
                                                onKeyDown: handleKeyDown,
                                                placeholder: "Enter Batch ID  e.g. MED-001"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "verify-button",
                                                onClick: ()=>verifyBatch(),
                                                disabled: loading,
                                                children: loading ? "VERIFYING..." : "VERIFY MEDICINE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "scan-button",
                                                onClick: ()=>{
                                                    setError("");
                                                    setScannerOpen(true);
                                                },
                                                children: "📷 Scan QR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1087,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "demo-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Demo batches:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setBatchId("MED-001");
                                                    verifyBatch("MED-001");
                                                },
                                                children: "MED-001"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setBatchId("EXP-001");
                                                    verifyBatch("EXP-001");
                                                },
                                                children: "EXP-001"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setBatchId("FAKE-001");
                                                    verifyBatch("FAKE-001");
                                                },
                                                children: "FAKE-001"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1054,
                                columnNumber: 11
                            }, this),
                            searched && loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "loading-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spinner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Verifying Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Checking batch ",
                                            searchedId,
                                            " against the trusted supply chain..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1135,
                                columnNumber: 13
                            }, this),
                            error && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "not-verified",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "not-verified-icon",
                                        children: "!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "not-verified-label",
                                        children: "VERIFICATION ERROR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Unable to Verify Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "retry-button",
                                        onClick: ()=>verifyBatch(searchedId),
                                        children: "TRY AGAIN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1154,
                                columnNumber: 13
                            }, this),
                            searched && !loading && !error && !currentBatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "not-verified",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "not-verified-icon",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "not-verified-label",
                                        children: "VERIFICATION FAILED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Medicine Not Verified"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Batch ID",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: searchedId
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "could not be found in the trusted supply chain."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "warning",
                                        children: "⚠ Do not trust or dispense this medicine."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1209,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1188,
                                columnNumber: 15
                            }, this),
                            searched && !loading && !error && currentBatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: isExpired ? "status-card expired" : "status-card verified",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "status-icon",
                                                children: isExpired ? "⚠" : "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "status-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "status-label",
                                                        children: isExpired ? "EXPIRED MEDICINE" : "VERIFIED MEDICINE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: isExpired ? "This medicine batch has passed its expiry date." : "This medicine batch has been successfully verified against the trusted supply chain."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1236,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "batch-badge",
                                                children: currentBatch.batchId
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1252,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "section-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "section-label",
                                                                children: "Medicine Record"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1265,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "section-title",
                                                                children: "Medicine Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1269,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blockchain-badge",
                                                        children: "🔗 Blockchain Record"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "details-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "detail-label",
                                                                children: "Medicine"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1283,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.medicine
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "detail-label",
                                                                children: "Batch ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.batchId
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1297,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "detail-label",
                                                                children: "Manufacturer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1303,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.manufacturer
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1307,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1302,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "detail-label",
                                                                children: "Quantity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1313,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1317,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1312,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "detail-label",
                                                                children: "Manufactured"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1323,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.manufactured
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1327,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "detail",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "detail-label",
                                                                children: "Expiry Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1333,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.expiry
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1337,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1332,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1280,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "section-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-label",
                                                            children: "Traceability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                            lineNumber: 1353,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "section-title",
                                                            children: "Supply Chain Journey"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                            lineNumber: 1357,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                    lineNumber: 1352,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1350,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timeline",
                                                children: currentBatch.journey.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "timeline-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "timeline-dot",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1373,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-role",
                                                                        children: step.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1379,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-name",
                                                                        children: step.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1383,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-action",
                                                                        children: step.action
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-meta",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "📍 ",
                                                                                    step.location
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                                lineNumber: 1392,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "🕒 ",
                                                                                    step.date
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                                lineNumber: 1396,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1391,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1377,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, `${step.role}-${index}`, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "blockchain-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-label",
                                                children: "Blockchain Verification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1415,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "section-title",
                                                children: "Trusted Record"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1419,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blockchain-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blockchain-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Verification Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1426,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "blockchain-confirmed",
                                                                children: "✓ Record Verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1430,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1425,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blockchain-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Batch Reference"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1436,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: currentBatch.batchId
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1440,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1435,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blockchain-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Supply Chain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1446,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "blockchain-confirmed",
                                                                children: "✓ Traceable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1450,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1445,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1423,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1413,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1222,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                        lineNumber: 1037,
                        columnNumber: 9
                    }, this),
                    scannerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "qr-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "qr-modal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "qr-close",
                                    onClick: closeScanner,
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1471,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "qr-title",
                                    children: "Scan Medicine QR"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "qr-description",
                                    children: "Position the medicine QR code inside the scanning frame."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "qr-reader-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "verification-qr-reader",
                                            className: "qr-reader"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                            lineNumber: 1489,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "scanner-overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "scan-frame"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1495,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                            lineNumber: 1494,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: scannerStatus === "detected" ? "scanner-status scanner-detected" : scannerStatus === "error" ? "scanner-status scanner-error" : "scanner-status",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "status-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                            lineNumber: 1510,
                                            columnNumber: 17
                                        }, this),
                                        scannerStatus === "starting" && "Starting camera...",
                                        scannerStatus === "scanning" && "Scanning for QR code...",
                                        scannerStatus === "detected" && "QR code detected! Verifying...",
                                        scannerStatus === "error" && "Camera access failed"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "qr-privacy",
                                    children: "🔒 Camera is used only to scan the medicine QR code."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1526,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                            lineNumber: 1469,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                        lineNumber: 1467,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/VerificationPage.tsx",
                lineNumber: 1021,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/VerificationPage.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(VerificationPage, "8Fap68fzSXv4HUbES0FoV8dm/aA=");
_c = VerificationPage;
var _c;
__turbopack_context__.k.register(_c, "VerificationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_1h171dd30j8m5._.js.map