module.exports=[63860,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e={"MED-001":{batchId:"MED-001",medicine:"Paracetamol 500mg",manufacturer:"ABC Pharmaceuticals",quantity:"5,000 units",manufactured:"08 October 2026",expiry:"08 October 2028",status:"VERIFIED",journey:[{role:"Manufacturer",name:"ABC Pharmaceuticals",location:"Bengaluru",date:"08 October 2026",action:"Batch manufactured"},{role:"Distributor",name:"XYZ Distributors",location:"Mangaluru",date:"09 October 2026",action:"Shipment received"},{role:"Pharmacy",name:"City Care Pharmacy",location:"Mangaluru",date:"10 October 2026",action:"Batch received"}]},"EXP-001":{batchId:"EXP-001",medicine:"Amoxicillin 500mg",manufacturer:"ABC Pharmaceuticals",quantity:"3,000 units",manufactured:"01 January 2024",expiry:"01 January 2025",status:"EXPIRED",journey:[{role:"Manufacturer",name:"ABC Pharmaceuticals",location:"Bengaluru",date:"01 January 2024",action:"Batch manufactured"},{role:"Distributor",name:"XYZ Distributors",location:"Mangaluru",date:"03 January 2024",action:"Shipment received"},{role:"Pharmacy",name:"City Care Pharmacy",location:"Mangaluru",date:"05 January 2024",action:"Batch received"}]}};async function f(a){let b=a.trim().toUpperCase();return b?(await new Promise(a=>setTimeout(a,1200)),e[b]??null):null}a.s(["default",0,function(){let[e,g]=(0,c.useState)(""),[h,i]=(0,c.useState)(""),[j,k]=(0,c.useState)(null),[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(!1),[p,q]=(0,c.useState)(""),[r,s]=(0,c.useState)(!1),[t,u]=(0,c.useState)("starting"),v=(0,c.useRef)(null);async function w(a){let b=(a??e).trim().toUpperCase();if(!b){m(!1),i(""),k(null),q("");return}g(b),i(b),m(!0),o(!0),q(""),k(null);try{let a=await f(b);k(a)}catch(a){console.error(a),q("Unable to connect to the verification service. Please try again.")}finally{o(!1)}}async function x(){if(v.current){try{await v.current.stop()}catch{}v.current=null}s(!1),u("starting")}(0,c.useEffect)(()=>{let b;if(!r)return;let c=!1;return async function(){try{u("starting");let{Html5Qrcode:d}=await a.A(87545);if(c)return;v.current=b=new d("verification-qr-reader"),await b.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:250},aspectRatio:1},async a=>{if(!a||c)return;let d=a.trim().toUpperCase();if(d){u("detected");try{await b.stop()}catch{}v.current=null,setTimeout(()=>{c||(s(!1),w(d))},500)}},()=>{}),c||u("scanning")}catch(a){console.error("QR scanner error:",a),c||(u("error"),q("Camera access failed. Please allow camera permission and try again."))}}(),()=>{c=!0,v.current&&(v.current.stop().catch(()=>{}),v.current=null)}},[r]);let y=j?.status==="EXPIRED";return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("main",{className:"verification-page",children:[(0,b.jsxs)("header",{className:"verification-header",children:[(0,b.jsxs)("div",{className:"brand",children:["MED",(0,b.jsx)("span",{children:"TRACE"})]}),(0,b.jsx)("div",{className:"brand-subtitle",children:"Medicine Supply Chain"})]}),(0,b.jsxs)("div",{className:"verification-content",children:[(0,b.jsx)("div",{style:{marginBottom:"20px"},children:(0,b.jsx)(d.default,{href:"/",style:{display:"inline-flex",alignItems:"center",padding:"12px 20px",borderRadius:"10px",background:"#0B1F3A",color:"#FFFFFF",fontWeight:700,fontSize:"13px",textDecoration:"none"},children:"← Back to Dashboard"})}),(0,b.jsx)("div",{className:"page-label",children:"Verification"}),(0,b.jsx)("h1",{className:"page-title",children:"Medicine Verification"}),(0,b.jsx)("p",{className:"page-description",children:"Verify the authenticity of a medicine batch and trace its complete journey through the supply chain."}),(0,b.jsxs)("section",{className:"verify-card",children:[(0,b.jsx)("h2",{className:"verify-card-title",children:"Verify Medicine"}),(0,b.jsx)("p",{className:"verify-card-subtitle",children:"Enter the batch ID printed on the package or scan its QR code."}),(0,b.jsxs)("div",{className:"input-row",children:[(0,b.jsx)("input",{className:"batch-input",value:e,onChange:a=>g(a.target.value),onKeyDown:function(a){"Enter"===a.key&&w()},placeholder:"Enter Batch ID  e.g. MED-001"}),(0,b.jsx)("button",{className:"verify-button",onClick:()=>w(),disabled:n,children:n?"VERIFYING...":"VERIFY MEDICINE"}),(0,b.jsx)("button",{className:"scan-button",onClick:()=>{q(""),s(!0)},children:"📷 Scan QR"})]}),(0,b.jsxs)("div",{className:"demo-row",children:[(0,b.jsx)("span",{children:"Demo batches:"}),(0,b.jsx)("button",{onClick:()=>{g("MED-001"),w("MED-001")},children:"MED-001"}),(0,b.jsx)("button",{onClick:()=>{g("EXP-001"),w("EXP-001")},children:"EXP-001"}),(0,b.jsx)("button",{onClick:()=>{g("FAKE-001"),w("FAKE-001")},children:"FAKE-001"})]})]}),l&&n&&(0,b.jsxs)("section",{className:"loading-card",children:[(0,b.jsx)("div",{className:"spinner"}),(0,b.jsx)("h2",{children:"Verifying Medicine"}),(0,b.jsxs)("p",{children:["Checking batch ",h," against the trusted supply chain..."]})]}),p&&!n&&(0,b.jsxs)("section",{className:"not-verified",children:[(0,b.jsx)("div",{className:"not-verified-icon",children:"!"}),(0,b.jsx)("div",{className:"not-verified-label",children:"VERIFICATION ERROR"}),(0,b.jsx)("h2",{children:"Unable to Verify Medicine"}),(0,b.jsx)("p",{children:p}),(0,b.jsx)("button",{className:"retry-button",onClick:()=>w(h),children:"TRY AGAIN"})]}),l&&!n&&!p&&!j&&(0,b.jsxs)("section",{className:"not-verified",children:[(0,b.jsx)("div",{className:"not-verified-icon",children:"✕"}),(0,b.jsx)("div",{className:"not-verified-label",children:"VERIFICATION FAILED"}),(0,b.jsx)("h2",{children:"Medicine Not Verified"}),(0,b.jsxs)("p",{children:["Batch ID"," ",(0,b.jsx)("strong",{children:h})," ","could not be found in the trusted supply chain."]}),(0,b.jsx)("div",{className:"warning",children:"⚠ Do not trust or dispense this medicine."})]}),l&&!n&&!p&&j&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("section",{className:y?"status-card expired":"status-card verified",children:[(0,b.jsx)("div",{className:"status-icon",children:y?"⚠":"✓"}),(0,b.jsxs)("div",{className:"status-info",children:[(0,b.jsx)("div",{className:"status-label",children:y?"EXPIRED MEDICINE":"VERIFIED MEDICINE"}),(0,b.jsx)("p",{children:y?"This medicine batch has passed its expiry date.":"This medicine batch has been successfully verified against the trusted supply chain."})]}),(0,b.jsx)("div",{className:"batch-badge",children:j.batchId})]}),(0,b.jsxs)("section",{className:"section-card",children:[(0,b.jsxs)("div",{className:"section-header",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"section-label",children:"Medicine Record"}),(0,b.jsx)("h2",{className:"section-title",children:"Medicine Details"})]}),(0,b.jsx)("div",{className:"blockchain-badge",children:"🔗 Blockchain Record"})]}),(0,b.jsxs)("div",{className:"details-grid",children:[(0,b.jsxs)("div",{className:"detail",children:[(0,b.jsx)("span",{className:"detail-label",children:"Medicine"}),(0,b.jsx)("strong",{className:"detail-value",children:j.medicine})]}),(0,b.jsxs)("div",{className:"detail",children:[(0,b.jsx)("span",{className:"detail-label",children:"Batch ID"}),(0,b.jsx)("strong",{className:"detail-value",children:j.batchId})]}),(0,b.jsxs)("div",{className:"detail",children:[(0,b.jsx)("span",{className:"detail-label",children:"Manufacturer"}),(0,b.jsx)("strong",{className:"detail-value",children:j.manufacturer})]}),(0,b.jsxs)("div",{className:"detail",children:[(0,b.jsx)("span",{className:"detail-label",children:"Quantity"}),(0,b.jsx)("strong",{className:"detail-value",children:j.quantity})]}),(0,b.jsxs)("div",{className:"detail",children:[(0,b.jsx)("span",{className:"detail-label",children:"Manufactured"}),(0,b.jsx)("strong",{className:"detail-value",children:j.manufactured})]}),(0,b.jsxs)("div",{className:"detail",children:[(0,b.jsx)("span",{className:"detail-label",children:"Expiry Date"}),(0,b.jsx)("strong",{className:"detail-value",children:j.expiry})]})]})]}),(0,b.jsxs)("section",{className:"section-card",children:[(0,b.jsx)("div",{className:"section-header",children:(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"section-label",children:"Traceability"}),(0,b.jsx)("h2",{className:"section-title",children:"Supply Chain Journey"})]})}),(0,b.jsx)("div",{className:"timeline",children:j.journey.map((a,c)=>(0,b.jsxs)("div",{className:"timeline-item",children:[(0,b.jsx)("div",{className:"timeline-dot",children:"✓"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"timeline-role",children:a.role}),(0,b.jsx)("div",{className:"timeline-name",children:a.name}),(0,b.jsx)("div",{className:"timeline-action",children:a.action}),(0,b.jsxs)("div",{className:"timeline-meta",children:[(0,b.jsxs)("span",{children:["📍 ",a.location]}),(0,b.jsxs)("span",{children:["🕒 ",a.date]})]})]})]},`${a.role}-${c}`))})]}),(0,b.jsxs)("section",{className:"blockchain-section",children:[(0,b.jsx)("div",{className:"section-label",children:"Blockchain Verification"}),(0,b.jsx)("h2",{className:"section-title",children:"Trusted Record"}),(0,b.jsxs)("div",{className:"blockchain-grid",children:[(0,b.jsxs)("div",{className:"blockchain-item",children:[(0,b.jsx)("span",{children:"Verification Status"}),(0,b.jsx)("strong",{className:"blockchain-confirmed",children:"✓ Record Verified"})]}),(0,b.jsxs)("div",{className:"blockchain-item",children:[(0,b.jsx)("span",{children:"Batch Reference"}),(0,b.jsx)("strong",{children:j.batchId})]}),(0,b.jsxs)("div",{className:"blockchain-item",children:[(0,b.jsx)("span",{children:"Supply Chain"}),(0,b.jsx)("strong",{className:"blockchain-confirmed",children:"✓ Traceable"})]})]})]})]})]}),r&&(0,b.jsx)("div",{className:"qr-overlay",children:(0,b.jsxs)("div",{className:"qr-modal",children:[(0,b.jsx)("button",{className:"qr-close",onClick:x,children:"✕"}),(0,b.jsx)("h2",{className:"qr-title",children:"Scan Medicine QR"}),(0,b.jsx)("p",{className:"qr-description",children:"Position the medicine QR code inside the scanning frame."}),(0,b.jsxs)("div",{className:"qr-reader-wrapper",children:[(0,b.jsx)("div",{id:"verification-qr-reader",className:"qr-reader"}),(0,b.jsx)("div",{className:"scanner-overlay",children:(0,b.jsx)("div",{className:"scan-frame"})})]}),(0,b.jsxs)("div",{className:"detected"===t?"scanner-status scanner-detected":"error"===t?"scanner-status scanner-error":"scanner-status",children:[(0,b.jsx)("span",{className:"status-pulse"}),"starting"===t&&"Starting camera...","scanning"===t&&"Scanning for QR code...","detected"===t&&"QR code detected! Verifying...","error"===t&&"Camera access failed"]}),(0,b.jsx)("div",{className:"qr-privacy",children:"🔒 Camera is used only to scan the medicine QR code."})]})})]})]})}],63860)}];

//# sourceMappingURL=src_app_components_VerificationPage_tsx_1m0ikq4oud539._.js.map