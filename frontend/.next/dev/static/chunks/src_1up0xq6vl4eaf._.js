(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/VerificationPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerificationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$verificationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/verificationService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
        const value = String(id || batchId).trim().toUpperCase();
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$verificationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyBatch"])(value);
            if (result) {
                setCurrentBatch(result);
            } else {
                setCurrentBatch(null);
            }
        } catch (err) {
            console.error("Verification error:", err);
            setError("Unable to connect to the verification service. Please try again.");
        } finally{
            setLoading(false);
        }
    }
    /* =========================================
     ENTER KEY
  ========================================= */ function handleKeyDown(event) {
        if (event.key === "Enter") {
            verifyBatch(batchId);
        }
    }
    /* =========================================
     START QR SCANNER
  ========================================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerificationPage.useEffect": ()=>{
            if (!scannerOpen) {
                return;
            }
            let scanner = null;
            let cancelled = false;
            async function startScanner() {
                try {
                    setScannerStatus("starting");
                    const { Html5Qrcode } = await __turbopack_context__.A("[project]/node_modules/html5-qrcode/esm/index.js [app-client] (ecmascript, async loader)");
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
                            const id = String(decodedText).trim().toUpperCase();
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
                        // Ignore continuous QR scanning errors.
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
            // Scanner already stopped.
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

        .retry-button {
          margin-top: 18px;
          height: 42px;
          padding: 0 20px;
          border: none;
          border-radius: 9px;
          background: #0B1F3A;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .retry-button:hover {
          background: #0E7490;
        }

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
                lineNumber: 202,
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
                                        lineNumber: 991,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 990,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-subtitle",
                                children: "Medicine Supply Chain"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 994,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                        lineNumber: 989,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "verification-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        padding: "12px 20px",
                                        borderRadius: "10px",
                                        background: "#0B1F3A",
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        fontSize: "13px",
                                        textDecoration: "none"
                                    },
                                    children: "← Back to Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1005,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-label",
                                children: "Verification"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1024,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "page-title",
                                children: "Medicine Verification"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1028,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "page-description",
                                children: "Verify the authenticity of a medicine batch and trace its complete journey through the supply chain."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1032,
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
                                        lineNumber: 1041,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "verify-card-subtitle",
                                        children: "Enter the batch ID printed on the package or scan its QR code."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1045,
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
                                                lineNumber: 1052,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "verify-button",
                                                onClick: ()=>verifyBatch(batchId),
                                                disabled: loading,
                                                children: loading ? "VERIFYING..." : "VERIFY MEDICINE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1062,
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
                                                lineNumber: 1072,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "demo-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Demo batches:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1086,
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
                                                lineNumber: 1088,
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
                                                lineNumber: 1097,
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
                                                lineNumber: 1106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1039,
                                columnNumber: 11
                            }, this),
                            searched && loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "loading-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spinner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Verifying Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1126,
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
                                        lineNumber: 1130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1122,
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
                                        lineNumber: 1143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "not-verified-label",
                                        children: "VERIFICATION ERROR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Unable to Verify Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "retry-button",
                                        onClick: ()=>verifyBatch(searchedId),
                                        children: "TRY AGAIN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1141,
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
                                        lineNumber: 1177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "not-verified-label",
                                        children: "VERIFICATION FAILED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Medicine Not Verified"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1185,
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
                                                lineNumber: 1191,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "could not be found in the trusted supply chain."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "warning",
                                        children: "⚠ Do not trust or dispense this medicine."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "retry-button",
                                        onClick: ()=>verifyBatch(searchedId),
                                        children: "TRY AGAIN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1175,
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
                                                lineNumber: 1228,
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
                                                        lineNumber: 1234,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: isExpired ? "This medicine batch has passed its expiry date." : "This medicine batch has been successfully verified against the trusted supply chain."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "batch-badge",
                                                children: currentBatch.batchId
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1248,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1220,
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
                                                                lineNumber: 1261,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "section-title",
                                                                children: "Medicine Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1265,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1260,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blockchain-badge",
                                                        children: "🔗 Blockchain Record"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1258,
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
                                                                lineNumber: 1279,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.medicine
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1283,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1278,
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
                                                                lineNumber: 1289,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.batchId
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1288,
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
                                                                lineNumber: 1299,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.manufacturer
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1303,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1298,
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
                                                                lineNumber: 1309,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1313,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1308,
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
                                                                lineNumber: 1319,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.manufactured
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1323,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1318,
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
                                                                lineNumber: 1329,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "detail-value",
                                                                children: currentBatch.expiry
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1333,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1328,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1256,
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
                                                            lineNumber: 1349,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "section-title",
                                                            children: "Supply Chain Journey"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                            lineNumber: 1353,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                    lineNumber: 1348,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1346,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timeline",
                                                children: (currentBatch.journey || []).map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "timeline-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "timeline-dot",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1369,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-role",
                                                                        children: step.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1375,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-name",
                                                                        children: step.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1379,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "timeline-action",
                                                                        children: step.action
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1383,
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
                                                                                lineNumber: 1389,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "🕒 ",
                                                                                    step.date
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                                lineNumber: 1393,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1373,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, `${step.role}-${index}`, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1364,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1360,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1344,
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
                                                lineNumber: 1413,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "section-title",
                                                children: "Trusted Record"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1417,
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
                                                                lineNumber: 1425,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "blockchain-confirmed",
                                                                children: "✓ Record Verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1429,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1423,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blockchain-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Batch Reference"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1437,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: currentBatch.batchId
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1441,
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
                                                                lineNumber: 1449,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "blockchain-confirmed",
                                                                children: "✓ Traceable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                                lineNumber: 1453,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                        lineNumber: 1447,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1421,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                                        lineNumber: 1411,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                lineNumber: 1216,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                        lineNumber: 1001,
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
                                    lineNumber: 1475,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "qr-title",
                                    children: "Scan Medicine QR"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "qr-description",
                                    children: "Position the medicine QR code inside the scanning frame."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1486,
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
                                            lineNumber: 1493,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "scanner-overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "scan-frame"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/VerificationPage.tsx",
                                                lineNumber: 1499,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                            lineNumber: 1498,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: scannerStatus === "detected" ? "scanner-status scanner-detected" : scannerStatus === "error" ? "scanner-status scanner-error" : "scanner-status",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "status-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                                            lineNumber: 1514,
                                            columnNumber: 17
                                        }, this),
                                        scannerStatus === "starting" && "Starting camera...",
                                        scannerStatus === "scanning" && "Scanning for QR code...",
                                        scannerStatus === "detected" && "QR code detected! Verifying...",
                                        scannerStatus === "error" && "Camera access failed"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1504,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "qr-privacy",
                                    children: "🔒 Camera is used only to scan the medicine QR code."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/VerificationPage.tsx",
                                    lineNumber: 1530,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/VerificationPage.tsx",
                            lineNumber: 1473,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/VerificationPage.tsx",
                        lineNumber: 1471,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/VerificationPage.tsx",
                lineNumber: 985,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/VerificationPage.tsx",
        lineNumber: 201,
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
"[project]/src/data/batches.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const batches = {
    "MED-001": {
        batchId: "MED-001",
        medicine: "Paracetamol 500mg",
        manufacturer: "ABC Pharmaceuticals",
        quantity: "5,000 units",
        manufactured: "08 October 2026",
        expiry: "08 October 2028",
        status: "VERIFIED",
        journey: [
            {
                role: "Manufacturer",
                name: "ABC Pharmaceuticals",
                location: "Bengaluru",
                date: "08 October 2026",
                action: "Batch manufactured"
            },
            {
                role: "Distributor",
                name: "XYZ Distributors",
                location: "Mangaluru",
                date: "09 October 2026",
                action: "Shipment received"
            },
            {
                role: "Pharmacy",
                name: "City Care Pharmacy",
                location: "Mangaluru",
                date: "10 October 2026",
                action: "Batch received"
            }
        ]
    },
    "EXP-001": {
        batchId: "EXP-001",
        medicine: "Amoxicillin 500mg",
        manufacturer: "ABC Pharmaceuticals",
        quantity: "3,000 units",
        manufactured: "01 January 2024",
        expiry: "01 January 2025",
        status: "EXPIRED",
        journey: [
            {
                role: "Manufacturer",
                name: "ABC Pharmaceuticals",
                location: "Bengaluru",
                date: "01 January 2024",
                action: "Batch manufactured"
            },
            {
                role: "Distributor",
                name: "XYZ Distributors",
                location: "Mangaluru",
                date: "03 January 2024",
                action: "Shipment received"
            },
            {
                role: "Pharmacy",
                name: "City Care Pharmacy",
                location: "Mangaluru",
                date: "05 January 2024",
                action: "Batch received"
            }
        ]
    }
};
const __TURBOPACK__default__export__ = batches;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/verificationService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyBatch",
    ()=>verifyBatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/batches.ts [app-client] (ecmascript)");
;
async function verifyBatch(batchId) {
    const id = String(batchId || "").trim().toUpperCase();
    if (!id) {
        return null;
    }
    // Simulate verification time.
    // This can later be replaced with the real backend/blockchain API.
    await new Promise((resolve)=>setTimeout(resolve, 1200));
    // ---------------------------------------------------------
    // 1. Check existing static/demo batches first
    // ---------------------------------------------------------
    const staticBatch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][id];
    if (staticBatch) {
        return staticBatch;
    }
    // ---------------------------------------------------------
    // 2. Check batches created from the frontend
    // ---------------------------------------------------------
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const savedBatches = localStorage.getItem("medtrace_batches");
            if (savedBatches) {
                const localBatches = JSON.parse(savedBatches);
                if (Array.isArray(localBatches)) {
                    const foundBatch = localBatches.find((batch)=>{
                        return String(batch?.id || "").trim().toUpperCase() === id;
                    });
                    if (foundBatch) {
                        return {
                            batchId: foundBatch.id,
                            medicine: foundBatch.medicine || "Unknown Medicine",
                            manufacturer: foundBatch.manufacturer || "ABC Pharmaceuticals",
                            quantity: `${Number(String(foundBatch.quantity || "0").replace(/,/g, "")).toLocaleString()} units`,
                            manufactured: foundBatch.manufacturingDate || foundBatch.manufactured || "Not available",
                            expiry: foundBatch.expiryDate || foundBatch.expiry || "Not available",
                            status: foundBatch.status === "EXPIRED" ? "EXPIRED" : "VERIFIED",
                            journey: [
                                {
                                    role: "Manufacturer",
                                    name: foundBatch.manufacturer || "ABC Pharmaceuticals",
                                    location: "Not available",
                                    date: foundBatch.manufacturingDate || foundBatch.manufactured || "Not available",
                                    action: "Batch manufactured"
                                }
                            ]
                        };
                    }
                }
            }
        } catch (error) {
            console.error("Could not verify locally created batch:", error);
        }
    }
    // Batch was not found
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1up0xq6vl4eaf._.js.map