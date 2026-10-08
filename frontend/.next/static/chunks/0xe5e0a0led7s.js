(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return F}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(90809),o=e.r(43476),s=a._(e.r(71645)),c=e.r(95057),l=e.r(8372),d=e.r(18581),p=e.r(18967),u=e.r(5550),h=e.r(88540),x=e.r(91949),f=e.r(73668),m=e.r(9396);function g(t){var r;let n,i,a,[g,F]=(0,s.useOptimistic)(x.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:v,as:j,children:E,prefetch:N=null,passHref:w,replace:k,shallow:B,scroll:C,onClick:A,onMouseEnter:D,onTouchStart:I,legacyBehavior:P=!1,onNavigate:R,transitionTypes:S,ref:z,unstable_dynamicOnHover:M,...T}=t;n=E,P&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let O=s.default.useContext(l.AppRouterContext),L=!1!==N,_=!1===N?"none":!0===N?"full":"auto",q="none"!==_?"auto"===_?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,U="string"==typeof(r=j||v)?r:(0,c.formatUrl)(r);if(P){if(n?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");i=s.default.Children.only(n)}let V=P?i&&"object"==typeof i&&i.ref:z,$,K=s.default.useCallback(e=>(null!==O&&(y.current=(0,x.mountLinkInstance)(e,U,O,q,L,F,$)),()=>{y.current&&((0,x.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,x.unmountPrefetchableInstance)(e)}),[L,U,O,q,F,$]),Q={ref:(0,d.useMergedRef)(K,V),onClick(t){P||"function"!=typeof A||A(t),P&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!O||t.defaultPrevented||function(t,r,n,i,a,o,s,c="none"){if("u">typeof window){let l,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((l=t.currentTarget.getAttribute("target"))&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{navigate:p}=e.r(32916);p(r,i?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,n.current,s,c)}}(t,U,y,k,C,R,S,_)},onMouseEnter(e){P||"function"!=typeof D||D(e),P&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),O&&L&&(0,x.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){P||"function"!=typeof I||I(e),P&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),O&&L&&(0,x.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,p.isAbsoluteUrl)(U)?Q.href=U:P&&!w&&("a"!==i.type||"href"in i.props)||(Q.href=(0,u.addBasePath)(U)),a=P?s.default.cloneElement(i,Q):(0,o.jsx)("a",{...T,...Q,children:n}),(0,o.jsx)(b.Provider,{value:g,children:a})}let b=(0,s.createContext)(x.IDLE_LINK_STATUS),F=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(71645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},95057,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",c=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(a.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==l?(l="//"+(l||""),i&&"/"!==i[0]&&(i="/"+i)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${l}${i}${d}${s}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return s(e)}},73668,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),i=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},18967,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return F},SP:function(){return f},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return p},getLocationOrigin:function(){return l},getURL:function(){return d},isAbsoluteUrl:function(){return c},isResSent:function(){return u},loadGetInitialProps:function(){return x},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return j}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=["CLS","FCP","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=l();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function x(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await x(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);return n}let f="u">typeof performance,m=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class F extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},25376,e=>{var t=e.i(43476),r=e.i(71645),n=e.i(22016);let i={"MED-001":{batchId:"MED-001",medicine:"Paracetamol 500mg",manufacturer:"ABC Pharmaceuticals",quantity:"5,000 units",manufactured:"08 October 2026",expiry:"08 October 2028",status:"VERIFIED",journey:[{role:"Manufacturer",name:"ABC Pharmaceuticals",location:"Bengaluru",date:"08 October 2026",action:"Batch manufactured"},{role:"Distributor",name:"XYZ Distributors",location:"Mangaluru",date:"09 October 2026",action:"Shipment received"},{role:"Pharmacy",name:"City Care Pharmacy",location:"Mangaluru",date:"10 October 2026",action:"Batch received"}]},"EXP-001":{batchId:"EXP-001",medicine:"Amoxicillin 500mg",manufacturer:"ABC Pharmaceuticals",quantity:"3,000 units",manufactured:"01 January 2024",expiry:"01 January 2025",status:"EXPIRED",journey:[{role:"Manufacturer",name:"ABC Pharmaceuticals",location:"Bengaluru",date:"01 January 2024",action:"Batch manufactured"},{role:"Distributor",name:"XYZ Distributors",location:"Mangaluru",date:"03 January 2024",action:"Shipment received"},{role:"Pharmacy",name:"City Care Pharmacy",location:"Mangaluru",date:"05 January 2024",action:"Batch received"}]}};async function a(e){let t=e.trim().toUpperCase();return t?(await new Promise(e=>setTimeout(e,1200)),i[t]??null):null}e.s(["default",0,function(){let[i,o]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[l,d]=(0,r.useState)(null),[p,u]=(0,r.useState)(!1),[h,x]=(0,r.useState)(!1),[f,m]=(0,r.useState)(""),[g,b]=(0,r.useState)(!1),[F,y]=(0,r.useState)("starting"),v=(0,r.useRef)(null);async function j(e){let t=(e??i).trim().toUpperCase();if(!t){u(!1),c(""),d(null),m("");return}o(t),c(t),u(!0),x(!0),m(""),d(null);try{let e=await a(t);d(e)}catch(e){console.error(e),m("Unable to connect to the verification service. Please try again.")}finally{x(!1)}}async function E(){if(v.current){try{await v.current.stop()}catch{}v.current=null}b(!1),y("starting")}(0,r.useEffect)(()=>{let t;if(!g)return;let r=!1;return async function(){try{y("starting");let{Html5Qrcode:n}=await e.A(87087);if(r)return;v.current=t=new n("verification-qr-reader"),await t.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:250},aspectRatio:1},async e=>{if(!e||r)return;let n=e.trim().toUpperCase();if(n){y("detected");try{await t.stop()}catch{}v.current=null,setTimeout(()=>{r||(b(!1),j(n))},500)}},()=>{}),r||y("scanning")}catch(e){console.error("QR scanner error:",e),r||(y("error"),m("Camera access failed. Please allow camera permission and try again."))}}(),()=>{r=!0,v.current&&(v.current.stop().catch(()=>{}),v.current=null)}},[g]);let N=l?.status==="EXPIRED";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("main",{className:"verification-page",children:[(0,t.jsxs)("header",{className:"verification-header",children:[(0,t.jsxs)("div",{className:"brand",children:["MED",(0,t.jsx)("span",{children:"TRACE"})]}),(0,t.jsx)("div",{className:"brand-subtitle",children:"Medicine Supply Chain"})]}),(0,t.jsxs)("div",{className:"verification-content",children:[(0,t.jsx)("div",{style:{marginBottom:"20px"},children:(0,t.jsx)(n.default,{href:"/",style:{display:"inline-flex",alignItems:"center",padding:"12px 20px",borderRadius:"10px",background:"#0B1F3A",color:"#FFFFFF",fontWeight:700,fontSize:"13px",textDecoration:"none"},children:"← Back to Dashboard"})}),(0,t.jsx)("div",{className:"page-label",children:"Verification"}),(0,t.jsx)("h1",{className:"page-title",children:"Medicine Verification"}),(0,t.jsx)("p",{className:"page-description",children:"Verify the authenticity of a medicine batch and trace its complete journey through the supply chain."}),(0,t.jsxs)("section",{className:"verify-card",children:[(0,t.jsx)("h2",{className:"verify-card-title",children:"Verify Medicine"}),(0,t.jsx)("p",{className:"verify-card-subtitle",children:"Enter the batch ID printed on the package or scan its QR code."}),(0,t.jsxs)("div",{className:"input-row",children:[(0,t.jsx)("input",{className:"batch-input",value:i,onChange:e=>o(e.target.value),onKeyDown:function(e){"Enter"===e.key&&j()},placeholder:"Enter Batch ID  e.g. MED-001"}),(0,t.jsx)("button",{className:"verify-button",onClick:()=>j(),disabled:h,children:h?"VERIFYING...":"VERIFY MEDICINE"}),(0,t.jsx)("button",{className:"scan-button",onClick:()=>{m(""),b(!0)},children:"📷 Scan QR"})]}),(0,t.jsxs)("div",{className:"demo-row",children:[(0,t.jsx)("span",{children:"Demo batches:"}),(0,t.jsx)("button",{onClick:()=>{o("MED-001"),j("MED-001")},children:"MED-001"}),(0,t.jsx)("button",{onClick:()=>{o("EXP-001"),j("EXP-001")},children:"EXP-001"}),(0,t.jsx)("button",{onClick:()=>{o("FAKE-001"),j("FAKE-001")},children:"FAKE-001"})]})]}),p&&h&&(0,t.jsxs)("section",{className:"loading-card",children:[(0,t.jsx)("div",{className:"spinner"}),(0,t.jsx)("h2",{children:"Verifying Medicine"}),(0,t.jsxs)("p",{children:["Checking batch ",s," against the trusted supply chain..."]})]}),f&&!h&&(0,t.jsxs)("section",{className:"not-verified",children:[(0,t.jsx)("div",{className:"not-verified-icon",children:"!"}),(0,t.jsx)("div",{className:"not-verified-label",children:"VERIFICATION ERROR"}),(0,t.jsx)("h2",{children:"Unable to Verify Medicine"}),(0,t.jsx)("p",{children:f}),(0,t.jsx)("button",{className:"retry-button",onClick:()=>j(s),children:"TRY AGAIN"})]}),p&&!h&&!f&&!l&&(0,t.jsxs)("section",{className:"not-verified",children:[(0,t.jsx)("div",{className:"not-verified-icon",children:"✕"}),(0,t.jsx)("div",{className:"not-verified-label",children:"VERIFICATION FAILED"}),(0,t.jsx)("h2",{children:"Medicine Not Verified"}),(0,t.jsxs)("p",{children:["Batch ID"," ",(0,t.jsx)("strong",{children:s})," ","could not be found in the trusted supply chain."]}),(0,t.jsx)("div",{className:"warning",children:"⚠ Do not trust or dispense this medicine."})]}),p&&!h&&!f&&l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("section",{className:N?"status-card expired":"status-card verified",children:[(0,t.jsx)("div",{className:"status-icon",children:N?"⚠":"✓"}),(0,t.jsxs)("div",{className:"status-info",children:[(0,t.jsx)("div",{className:"status-label",children:N?"EXPIRED MEDICINE":"VERIFIED MEDICINE"}),(0,t.jsx)("p",{children:N?"This medicine batch has passed its expiry date.":"This medicine batch has been successfully verified against the trusted supply chain."})]}),(0,t.jsx)("div",{className:"batch-badge",children:l.batchId})]}),(0,t.jsxs)("section",{className:"section-card",children:[(0,t.jsxs)("div",{className:"section-header",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"section-label",children:"Medicine Record"}),(0,t.jsx)("h2",{className:"section-title",children:"Medicine Details"})]}),(0,t.jsx)("div",{className:"blockchain-badge",children:"🔗 Blockchain Record"})]}),(0,t.jsxs)("div",{className:"details-grid",children:[(0,t.jsxs)("div",{className:"detail",children:[(0,t.jsx)("span",{className:"detail-label",children:"Medicine"}),(0,t.jsx)("strong",{className:"detail-value",children:l.medicine})]}),(0,t.jsxs)("div",{className:"detail",children:[(0,t.jsx)("span",{className:"detail-label",children:"Batch ID"}),(0,t.jsx)("strong",{className:"detail-value",children:l.batchId})]}),(0,t.jsxs)("div",{className:"detail",children:[(0,t.jsx)("span",{className:"detail-label",children:"Manufacturer"}),(0,t.jsx)("strong",{className:"detail-value",children:l.manufacturer})]}),(0,t.jsxs)("div",{className:"detail",children:[(0,t.jsx)("span",{className:"detail-label",children:"Quantity"}),(0,t.jsx)("strong",{className:"detail-value",children:l.quantity})]}),(0,t.jsxs)("div",{className:"detail",children:[(0,t.jsx)("span",{className:"detail-label",children:"Manufactured"}),(0,t.jsx)("strong",{className:"detail-value",children:l.manufactured})]}),(0,t.jsxs)("div",{className:"detail",children:[(0,t.jsx)("span",{className:"detail-label",children:"Expiry Date"}),(0,t.jsx)("strong",{className:"detail-value",children:l.expiry})]})]})]}),(0,t.jsxs)("section",{className:"section-card",children:[(0,t.jsx)("div",{className:"section-header",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"section-label",children:"Traceability"}),(0,t.jsx)("h2",{className:"section-title",children:"Supply Chain Journey"})]})}),(0,t.jsx)("div",{className:"timeline",children:l.journey.map((e,r)=>(0,t.jsxs)("div",{className:"timeline-item",children:[(0,t.jsx)("div",{className:"timeline-dot",children:"✓"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"timeline-role",children:e.role}),(0,t.jsx)("div",{className:"timeline-name",children:e.name}),(0,t.jsx)("div",{className:"timeline-action",children:e.action}),(0,t.jsxs)("div",{className:"timeline-meta",children:[(0,t.jsxs)("span",{children:["📍 ",e.location]}),(0,t.jsxs)("span",{children:["🕒 ",e.date]})]})]})]},`${e.role}-${r}`))})]}),(0,t.jsxs)("section",{className:"blockchain-section",children:[(0,t.jsx)("div",{className:"section-label",children:"Blockchain Verification"}),(0,t.jsx)("h2",{className:"section-title",children:"Trusted Record"}),(0,t.jsxs)("div",{className:"blockchain-grid",children:[(0,t.jsxs)("div",{className:"blockchain-item",children:[(0,t.jsx)("span",{children:"Verification Status"}),(0,t.jsx)("strong",{className:"blockchain-confirmed",children:"✓ Record Verified"})]}),(0,t.jsxs)("div",{className:"blockchain-item",children:[(0,t.jsx)("span",{children:"Batch Reference"}),(0,t.jsx)("strong",{children:l.batchId})]}),(0,t.jsxs)("div",{className:"blockchain-item",children:[(0,t.jsx)("span",{children:"Supply Chain"}),(0,t.jsx)("strong",{className:"blockchain-confirmed",children:"✓ Traceable"})]})]})]})]})]}),g&&(0,t.jsx)("div",{className:"qr-overlay",children:(0,t.jsxs)("div",{className:"qr-modal",children:[(0,t.jsx)("button",{className:"qr-close",onClick:E,children:"✕"}),(0,t.jsx)("h2",{className:"qr-title",children:"Scan Medicine QR"}),(0,t.jsx)("p",{className:"qr-description",children:"Position the medicine QR code inside the scanning frame."}),(0,t.jsxs)("div",{className:"qr-reader-wrapper",children:[(0,t.jsx)("div",{id:"verification-qr-reader",className:"qr-reader"}),(0,t.jsx)("div",{className:"scanner-overlay",children:(0,t.jsx)("div",{className:"scan-frame"})})]}),(0,t.jsxs)("div",{className:"detected"===F?"scanner-status scanner-detected":"error"===F?"scanner-status scanner-error":"scanner-status",children:[(0,t.jsx)("span",{className:"status-pulse"}),"starting"===F&&"Starting camera...","scanning"===F&&"Scanning for QR code...","detected"===F&&"QR code detected! Verifying...","error"===F&&"Camera access failed"]}),(0,t.jsx)("div",{className:"qr-privacy",children:"🔒 Camera is used only to scan the medicine QR code."})]})})]})]})}],25376)}])})();