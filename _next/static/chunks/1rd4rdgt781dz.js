(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return l},formatWithValidation:function(){return i},urlObjectKeys:function(){return c}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let s=e.r(90809)._(e.r(98183)),n=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",l=e.hash||"",c=e.query||"",i=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?i=t+e.host:r&&(i=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(i+=":"+e.port)),c&&"object"==typeof c&&(c=String(s.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||n.test(a))&&!1!==i?(i="//"+(i||""),o&&"/"!==o[0]&&(o="/"+o)):i||(i=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${a}${i}${o}${d}${l}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return l(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(71645);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=s(e,a)),t&&(o.current=s(t,a))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return s}});let a=e.r(18967),o=e.r(52817);function s(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return v}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let s=e.r(90809),n=e.r(43476),l=s._(e.r(71645)),c=e.r(95057),i=e.r(8372),d=e.r(18581),u=e.r(18967),x=e.r(5550);e.r(33525);let f=e.r(88540),h=e.r(91949),m=e.r(73668),p=e.r(9396);function b(t){var r,a;let o,s,b,[v,g]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),y=(0,l.useRef)(null),{href:j,as:N,children:w,prefetch:_=null,passHref:k,replace:C,shallow:S,scroll:P,onClick:A,onMouseEnter:T,onTouchStart:O,legacyBehavior:L=!1,onNavigate:E,transitionTypes:I,ref:M,unstable_dynamicOnHover:R,...D}=t;o=w,L&&("string"==typeof o||"number"==typeof o)&&(o=(0,n.jsx)("a",{children:o}));let B=l.default.useContext(i.AppRouterContext),F=!1!==_,z=!1!==_?null===(a=_)||"auto"===a?p.FetchStrategy.PPR:p.FetchStrategy.Full:p.FetchStrategy.PPR,U="string"==typeof(r=N||j)?r:(0,c.formatUrl)(r);if(L){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});s=l.default.Children.only(o)}let q=L?s&&"object"==typeof s&&s.ref:M,K=l.default.useCallback(e=>(null!==B&&(y.current=(0,h.mountLinkInstance)(e,U,B,z,F,g)),()=>{y.current&&((0,h.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,h.unmountPrefetchableInstance)(e)}),[F,U,B,z,g]),H={ref:(0,d.useMergedRef)(K,q),onClick(t){L||"function"!=typeof A||A(t),L&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t),!B||t.defaultPrevented||function(t,r,a,o,s,n,c){if("u">typeof window){let i,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((i=t.currentTarget.getAttribute("target"))&&"_self"!==i||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),n){let e=!1;if(n({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);l.default.startTransition(()=>{u(r,o?"replace":"push",!1===s?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,a.current,c)})}}(t,U,y,C,P,E,I)},onMouseEnter(e){L||"function"!=typeof T||T(e),L&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),B&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){L||"function"!=typeof O||O(e),L&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),B&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,u.isAbsoluteUrl)(U)?H.href=U:L&&!k&&("a"!==s.type||"href"in s.props)||(H.href=(0,x.addBasePath)(U)),b=L?l.default.cloneElement(s,H):(0,n.jsx)("a",{...D,...H,children:o}),(0,n.jsx)($.Provider,{value:v,children:b})}e.r(84508);let $=(0,l.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,l.useContext)($);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73386,(e,t,r)=>{t.exports={subjects:[{id:"math",name:"高等数学",icon:"📐"},{id:"english",name:"英语四级",icon:"📝"},{id:"mechanics",name:"理论力学",icon:"⚙️"},{id:"electronics",name:"电工电子学",icon:"⚡"},{id:"python",name:"Python 自学",icon:"🐍"}]}},19625,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"函数与极限",order:1,summary:"函数的概念、极限的定义与运算法则"},{id:"chapter2",title:"导数与微分",order:2,summary:"导数的定义、求导法则与微分的应用"},{id:"chapter3",title:"不定积分",order:3,summary:"不定积分的概念与基本积分法"},{id:"chapter4",title:"定积分",order:4,summary:"定积分的定义、性质与计算方法"}]}},49620,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"词汇与语法基础",order:1,summary:"四级核心词汇、基本语法框架"},{id:"chapter2",title:"阅读理解",order:2,summary:"阅读技巧与题型解析"},{id:"chapter3",title:"听力训练",order:3,summary:"听力题型与答题策略"},{id:"chapter4",title:"写作与翻译",order:4,summary:"作文模板与翻译技巧"}]}},21795,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"静力学基础",order:1,summary:"力的分解、力矩与平衡方程"},{id:"chapter2",title:"运动学",order:2,summary:"点的运动、刚体的平动与转动"},{id:"chapter3",title:"动力学",order:3,summary:"牛顿定律、动量与动能定理"},{id:"chapter4",title:"拉格朗日力学",order:4,summary:"约束系统与拉格朗日方程"}]}},45147,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"电路基本定律",order:1,summary:"欧姆定律、基尔霍夫定律"},{id:"chapter2",title:"交流电路分析",order:2,summary:"正弦交流电、相量法"},{id:"chapter3",title:"模拟电子技术",order:3,summary:"二极管、三极管与放大电路"},{id:"chapter4",title:"数字电路基础",order:4,summary:"逻辑门、触发器与组合逻辑"}]}},83336,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"Python 基础语法",order:1,summary:"变量、数据类型、控制流与函数"},{id:"chapter2",title:"面向对象编程",order:2,summary:"类、继承、多态与封装"},{id:"chapter3",title:"常用标准库",order:3,summary:"os、sys、re、datetime 等模块"},{id:"chapter4",title:"数据分析入门",order:4,summary:"NumPy、Pandas 基础操作"}]}},22140,95219,18396,31767,13003,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(22016);let o="study_progress",s="u">typeof localStorage;function n(){if(!s)return{version:1,updatedAt:"",subjects:{}};try{let e=localStorage.getItem(o);if(e)return JSON.parse(e)}catch{}return{version:1,updatedAt:"",subjects:{}}}function l(e){s&&(e.updatedAt=new Date().toISOString(),localStorage.setItem(o,JSON.stringify(e)))}function c(e){s&&localStorage.setItem("study_pat",btoa(e))}function i(){if(!s)return null;let e=localStorage.getItem("study_pat");if(!e)return null;try{return atob(e)}catch{return null}}let d="xfjsssq",u="my-study-notes",x=".progress/progress.json";async function f(e){let t=i();if(!t)return null;let r=`https://api.github.com/repos/${d}/${u}/contents/${x}`;try{let a=null,o=await fetch(r,{headers:{Authorization:`Bearer ${t}`}});o.ok&&(a=(await o.json()).sha);let s=btoa(unescape(encodeURIComponent(JSON.stringify(e,null,2)))),n={message:`Sync: ${e.updatedAt}`,content:s};a&&(n.sha=a);let l=await fetch(r,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json","X-GitHub-Api-Version":"2022-11-28"},body:JSON.stringify(n)});if(!l.ok)return null;return{sha:(await l.json()).content.sha}}catch{return null}}async function h(){let e=i();if(!e)return null;try{let t=await fetch(`https://api.github.com/repos/${d}/${u}/contents/${x}`,{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)return null;let r=await t.json();return JSON.parse(decodeURIComponent(escape(atob(r.content))))}catch{return null}}e.s(["getPat",0,i,"loadProgressFromGitHub",0,h,"loadProgressFromLocal",0,n,"markChapterDone",0,function(e,t,r){let a=n();a.subjects[e]||(a.subjects[e]={subjectId:e,updatedAt:"",chapters:{}});let o=`${e}/${t}`,s=a.subjects[e].chapters[o],c=new Date().toISOString();return s?.status==="done"?delete a.subjects[e].chapters[o]:a.subjects[e].chapters[o]={chapterPath:o,status:"done",completedAt:c,notes:r??s?.notes??"",updatedAt:c},a.subjects[e].updatedAt=c,l(a),a},"savePat",0,c,"saveProgressToLocal",0,l,"syncProgressToGitHub",0,f,"updateChapterNotes",0,function(e,t,r){let a=n();a.subjects[e]||(a.subjects[e]={subjectId:e,updatedAt:"",chapters:{}});let o=`${e}/${t}`;return a.subjects[e].chapters[o]={...a.subjects[e].chapters[o]||{chapterPath:o,status:"empty"},notes:r,updatedAt:new Date().toISOString()},a.subjects[e].updatedAt=new Date().toISOString(),l(a),a}],95219),e.s(["default",0,function({contentTrees:e,currentSubject:o,currentChapter:s}){let[l,c]=(0,r.useState)({}),[i,d]=(0,r.useState)(!1),[u,x]=(0,r.useState)({});(0,r.useEffect)(()=>{let e=n(),t={};for(let[r,a]of Object.entries(e.subjects))for(let[e,r]of Object.entries(a.chapters))t[r.chapterPath]=r.status;x(t)},[]);let f=(0,r.useCallback)(e=>{c(t=>({...t,[e]:!t[e]}))},[]),h=({subjectId:e,chapterId:r})=>"done"===u[`${e}/${r}`]?(0,t.jsx)("span",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-progress-done)] flex items-center justify-center",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:(0,t.jsx)("path",{d:"M2.5 6l2.5 2.5L9.5 3.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):(0,t.jsx)("span",{className:"flex-shrink-0 w-5 h-5 rounded-full border-2 border-[var(--color-progress-empty)]"}),m=(0,t.jsxs)("nav",{className:"flex flex-col w-full h-full overflow-y-auto",children:[(0,t.jsx)("div",{className:"px-4 py-4 border-b border-[var(--color-border)]",children:(0,t.jsx)(a.default,{href:"/",className:"text-lg font-bold text-[var(--color-text)] no-underline hover:no-underline",children:"📚 My Study Notes"})}),(0,t.jsx)("div",{className:"flex-1 py-2 overflow-y-auto",children:e.map(({subject:e,chapters:r})=>(0,t.jsxs)("div",{className:"mb-0.5",children:[(0,t.jsxs)("button",{onClick:()=>f(e.id),className:"w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors text-left",children:[(0,t.jsx)("span",{className:"text-xs transition-transform",children:l[e.id]?"▸":"▾"}),(0,t.jsx)("span",{children:e.icon||"📖"}),(0,t.jsx)("span",{className:"flex-1 truncate",children:e.name}),(0,t.jsxs)("span",{className:"text-xs text-[var(--color-text-tertiary)]",children:[r.length,"章"]})]}),!l[e.id]&&(0,t.jsx)("div",{className:"ml-2",children:r.map(r=>{let n=`/subjects/${e.id}/${r.id}`,l=o===e.id&&s===r.id;return(0,t.jsxs)(a.default,{href:n,className:`flex items-center gap-2 px-4 py-1.5 text-sm transition-colors group border-l-2 ml-2 ${l?"border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[var(--color-accent)] font-medium":"border-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text)]"}`,children:[(0,t.jsx)(h,{subjectId:e.id,chapterId:r.id}),(0,t.jsx)("span",{className:"flex-1 truncate text-xs",children:r.title})]},r.id)})})]},e.id))}),(0,t.jsx)("div",{className:"px-4 py-3 border-t border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:"Agnes ❤️"}),(0,t.jsx)("a",{href:"/settings",className:"text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors",children:"⚙️"})]})})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:()=>d(!i),className:"fixed top-3 left-3 z-50 p-2 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border)] md:hidden","aria-label":"Toggle sidebar",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),i&&(0,t.jsx)("div",{onClick:()=>d(!1),className:"fixed inset-0 z-40 bg-black/30 md:hidden"}),(0,t.jsx)("aside",{className:`fixed md:sticky top-0 z-40 h-screen w-[var(--sidebar-width)] bg-[var(--sidebar-bg)] border-r border-[var(--color-border)] transition-transform duration-300 overflow-hidden ${i?"translate-x-0":"-translate-x-full md:translate-x-0"}`,children:m})]})}],22140),e.s(["default",0,function({isOpen:e,onClose:a}){let[o,s]=(0,r.useState)(""),[n,l]=(0,r.useState)([]),c=(0,r.useRef)(null);(0,r.useEffect)(()=>{e&&c.current&&c.current.focus()},[e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let i=(0,r.useCallback)(()=>{if(!o.trim())return void l([]);let e=document.body.innerText.toLowerCase(),t=o.toLowerCase();if(e.includes(t)){let r=e.indexOf(t),a=Math.max(0,r-30),s=e.slice(a,r+o.length+50);l([`...${s}...`])}else l([])},[o]);return e?(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/40",children:(0,t.jsxs)("div",{className:"w-full max-w-lg bg-[var(--color-bg)] rounded-lg shadow-float border border-[var(--color-border)] animate-fadein",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]",children:[(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-[var(--color-text-tertiary)]",children:[(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M11 11l3 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,t.jsx)("input",{ref:c,type:"text",value:o,onChange:e=>s(e.target.value),onKeyDown:e=>"Enter"===e.key&&i(),placeholder:"搜索当前页面...",className:"flex-1 bg-transparent border-none outline-none text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)]"}),(0,t.jsx)("kbd",{className:"text-xs px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]",children:"Esc"})]}),(0,t.jsx)("div",{className:"max-h-60 overflow-y-auto p-2",children:n.length>0?n.map((e,r)=>(0,t.jsx)("div",{className:"px-3 py-2 text-sm text-[var(--color-text-secondary)] rounded hover:bg-[var(--color-bg-hover)]",children:e},r)):o?(0,t.jsx)("div",{className:"px-3 py-4 text-sm text-[var(--color-text-tertiary)] text-center",children:"未找到匹配结果"}):(0,t.jsx)("div",{className:"px-3 py-4 text-sm text-[var(--color-text-tertiary)] text-center",children:"输入关键词进行搜索"})})]})}):null}],18396),e.s(["default",0,function({isOpen:e,onClose:a}){let[o,s]=(0,r.useState)(()=>i()||""),[n,l]=(0,r.useState)(!1),d=(0,r.useCallback)(()=>{o.trim()?c(o.trim()):localStorage.removeItem("study_pat"),l(!0),setTimeout(()=>l(!1),2e3)},[o]),u=(0,r.useCallback)(()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))},[]);return e?(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/40",children:(0,t.jsxs)("div",{className:"w-full max-w-md bg-[var(--color-bg)] rounded-lg shadow-float border border-[var(--color-border)] animate-fadein p-6",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"⚙️ 设置"}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-[var(--color-text)]",children:"深色模式"}),(0,t.jsx)("button",{onClick:u,className:"mt-1 w-full text-left px-3 py-2 rounded-md border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors",children:"🌓 切换浅色/深色模式"})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-[var(--color-text)]",children:"GitHub 个人访问令牌 (PAT)"}),(0,t.jsx)("input",{type:"password",value:o,onChange:e=>s(e.target.value),placeholder:"ghp_...",className:"mt-1 w-full px-3 py-2 rounded-md border border-[var(--color-border)] text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-muted)]"}),(0,t.jsxs)("p",{className:"mt-1 text-xs text-[var(--color-text-tertiary)]",children:["需要 ",(0,t.jsx)("code",{children:"repo"})," 权限。令牌仅存储在浏览器本地。"]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,t.jsx)("button",{onClick:a,className:"px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors",children:"关闭"}),(0,t.jsx)("button",{onClick:d,className:`px-4 py-2 text-sm rounded-md transition-all ${n?"bg-[var(--color-progress-done)]/10 text-[var(--color-progress-done)]":"bg-[var(--color-accent)] text-white hover:opacity-90"}`,children:n?"✅ 已保存":"保存设置"})]})]})}):null}],31767);var m=e.i(73386),p=e.i(19625),b=e.i(49620),$=e.i(21795),v=e.i(45147),g=e.i(83336);let y=`
## 📖 知识要点

### 1. 函数的概念

函数是数学中最基本的概念之一。给定两个集合 X 和 Y，如果对于 X 中的每一个元素 x，按照某种对应法则 f，在 Y 中都有唯一确定的元素 y 与之对应，则称 f 是从 X 到 Y 的一个**函数**。

记为：
$$y = f(x), quad x in X$$

### 2. 极限的定义

设函数 f(x) 在点 x₀ 的某个去心邻域内有定义。如果存在常数 A，对于任意给定的 ε > 0，总存在 δ > 0，使得当 0 < |x - x₀| < δ 时，有：

$$|f(x) - A| < \varepsilon$$

则称 A 为函数 f(x) 当 x → x₀ 时的**极限**。

### 3. 极限运算法则

- **四则运算法则**：若 lim f(x) = A，lim g(x) = B，则：
  $$lim[f(x) pm g(x)] = A pm B$$
  $$lim[f(x) cdot g(x)] = A cdot B$$
- **夹逼定理**：若 g(x) ≤ f(x) ≤ h(x)，且 lim g(x) = lim h(x) = A，则 lim f(x) = A
- **两个重要极限**：
  $$lim_{x 	o 0} \frac{sin x}{x} = 1$$
  $$lim_{x 	o infty} (1 + \frac{1}{x})^x = e$$

> 💡 **提示**：理解极限的 ε-δ 定义是后续学习导数和积分的基础。
`,j=`
## 📖 知识要点

### 1. 导数的定义

导数是描述函数在某一点处变化率的工具。设函数 $y=f(x)$ 在点 $x_0$ 的某邻域内有定义，如果极限

$$lim_{Delta x 	o 0} \frac{f(x_0 + Delta x) - f(x_0)}{Delta x}$$

存在，则称 $f(x)$ 在点 $x_0$ 处**可导**，该极限值称为 $f(x)$ 在 $x_0$ 处的**导数**，记作 $f'(x_0)$ 或 $\frac{dy}{dx}\big|_{x=x_0}$。

等价形式：
$$f'(x) = lim_{h 	o 0} \frac{f(x+h) - f(x)}{h}$$

### 2. 基本求导公式

- 常数：$(C)' = 0$
- 幂函数：$(x^n)' = nx^{n-1}$
- 指数函数：$(a^x)' = a^x ln a$，特别地 $(e^x)' = e^x$
- 对数函数：$(log_a x)' = \frac{1}{x ln a}$，特别地 $(ln x)' = \frac{1}{x}$
- 三角函数：
  - $(sin x)' = cos x$
  - $(cos x)' = -sin x$
  - $(	an x)' = sec^2 x$
  - $(cot x)' = -csc^2 x$

### 3. 求导法则

设 $u(x)$、$v(x)$ 均可导：

- **加减法则**：$(u pm v)' = u' pm v'$
- **乘积法则**：$(uv)' = u'v + uv'$
- **商法则**：$left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$
- **链式法则**：若 $y = f(u)$，$u = g(x)$，则 $\frac{dy}{dx} = \frac{dy}{du} cdot \frac{du}{dx}$

### 4. 高阶导数

导数的导数称为二阶导数：
$$f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}left(\frac{dy}{dx}\right)$$

### 5. 微分

函数 $y = f(x)$ 的微分为：
$$dy = f'(x) dx$$

> 💡 **提示**：链式法则是求导的核心，复合函数求导时要逐层剥开，每一层求导后再乘以内层的导数。
`,N=`
## 📖 知识要点

### 1. 原函数与不定积分

若 $F'(x) = f(x)$，则称 $F(x)$ 是 $f(x)$ 的**原函数**。

$f(x)$ 的**全体原函数**称为 $f(x)$ 的**不定积分**，记作：
$$int f(x) dx = F(x) + C$$

其中 $C$ 为任意常数。

### 2. 基本积分公式

- 幂函数：$int x^n dx = \frac{x^{n+1}}{n+1} + C$（$n 
eq -1$）
- 倒数：$int \frac{1}{x} dx = ln|x| + C$
- 指数函数：$int e^x dx = e^x + C$，$int a^x dx = \frac{a^x}{ln a} + C$
- 三角函数：
  - $int sin x dx = -cos x + C$
  - $int cos x dx = sin x + C$
  - $int sec^2 x dx = 	an x + C$
  - $int csc^2 x dx = -cot x + C$
  - $int sec x 	an x dx = sec x + C$
  - $int csc x cot x dx = -csc x + C$
- 反三角函数：
  - $int \frac{1}{sqrt{1-x^2}} dx = arcsin x + C$
  - $int \frac{1}{1+x^2} dx = arctan x + C$

### 3. 换元积分法（第一类）

若 $int f(u) du = F(u) + C$，则：
$$int f(g(x)) cdot g'(x) dx = F(g(x)) + C$$

### 4. 分部积分法

$$int u dv = uv - int v du$$

选取原则：**反对幂三指**（反三角 > 对数 > 幂函数 > 三角 > 指数），排在前面的优先设为 $u$。

> 💡 **提示**：不定积分是求导的逆运算。掌握基本积分公式是基础，换元法和分部积分法是两大核心技巧。
`,w=String.raw`
## 📖 知识要点

### 1. 定积分的定义

设函数 $f(x)$ 在 $[a, b]$ 上有界，将区间分成 $n$ 等份，每份长度 $\Delta x = \frac{b-a}{n}$，任取 $\xi_i \in [x_{i-1}, x_i]$，作和：
$$S_n = \sum_{i=1}^{n} f(\xi_i) \Delta x$$

当 $n \to \infty$ 时，若极限存在且与分割方式无关，则称此极限为 $f(x)$ 在 $[a, b]$ 上的**定积分**：
$$\int_a^b f(x) dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(\xi_i) \Delta x$$

### 2. 牛顿-莱布尼茨公式（微积分基本定理）

若 $F(x)$ 是 $f(x)$ 在 $[a, b]$ 上的连续原函数，则：
$$\int_a^b f(x) dx = F(b) - F(a)$$

这是联系微分学与积分学的桥梁。

### 3. 定积分的性质

- **线性性**：$\int_a^b [kf(x) + mg(x)] dx = k\int_a^b f(x) dx + m\int_a^b g(x) dx$
- **区间可加性**：$\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx$
- **保号性**：若 $f(x) \geq 0$，则 $\int_a^b f(x) dx \geq 0$（$a < b$）
- **估值定理**：若 $m \leq f(x) \leq M$，则 $m(b-a) \leq \int_a^b f(x) dx \leq M(b-a)$
- **中值定理**：存在 $\xi \in [a, b]$，使得 $\int_a^b f(x) dx = f(\xi)(b-a)$

### 4. 变上限积分

设 $f(x)$ 连续，定义：
$$\Phi(x) = \int_a^x f(t) dt$$

则 $\Phi'(x) = f(x)$，即变上限积分是 $f(x)$ 的一个原函数。

### 5. 定积分的计算方法

- **牛顿-莱布尼茨公式**（最常用）
- **换元法**：令 $x = \varphi(t)$，注意换元必换限
- **分部积分法**：$\int_a^b u dv = [uv]_a^b - \int_a^b v du$

### 6. 定积分的几何应用

- **面积**：$S = \int_a^b |f(x) - g(x)| dx$
- **旋转体体积**：$V = \pi \int_a^b [f(x)]^2 dx$
- **旋转曲面面积**：$S = 2\pi \int_a^b f(x)\sqrt{1 + [f'(x)]^2} dx$

> 💡 **提示**：定积分的本质是"无限求和"。牛顿-莱布尼茨公式把求定积分转化为求原函数，是计算的核心方法。
`,_=`
## 📖 知识要点

### 1. 变量与数据类型

Python 是动态类型语言，变量无需声明类型。

\`\`\`python
name = "Alice"        # 字符串 str
age = 20              # 整数 int
score = 95.5          # 浮点数 float
is_student = True     # 布尔 bool
print(type(name))     # <class 'str'>
\`\`\`

### 2. 控制流程

\`\`\`python
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("需要努力")
\`\`\`

### 3. 函数定义

\`\`\`python
def greet(name: str) -> str:
    return f"你好, {name}!"

result = greet("世界")
print(result)  # 你好, 世界!
\`\`\`

> 💡 多写代码是学习 Python 最快的方式。
`,k={math:p.default,english:b.default,mechanics:$.default,electronics:v.default,python:g.default},C={"math/chapter1":y,"math/chapter2":j,"math/chapter3":N,"math/chapter4":w,"python/chapter1":_};function S(){return m.default.subjects.map(e=>({id:e.id,name:e.name,icon:e.icon}))}function P(e){let t=k[e];return t?(t.chapters||[]).map(t=>({...t,subjectId:e})):[]}e.s(["getAllContentTrees",0,function(){return S().map(e=>({subject:e,chapters:P(e.id)}))},"getChapterRoute",0,function(e,t){return{subject:S().find(t=>t.id===e),chapter:P(e).find(e=>e.id===t)}},"getKnowledgeContent",0,function(e,t){return C[`${e}/${t}`]??""}],13003)},18566,(e,t,r)=>{t.exports=e.r(76562)},4676,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(18566),o=e.i(22016),s=e.i(22140),n=e.i(18396),l=e.i(31767),c=e.i(95219);function i({subjectId:e,chapterId:a,onProgressChanged:o}){let[s,n]=(0,r.useState)(()=>{let t=(0,c.loadProgressFromLocal)();return t.subjects[e]?.chapters?.[`${e}/${a}`]?.status==="done"}),[l,d]=(0,r.useState)(!1),[u,x]=(0,r.useState)(!1),f=(0,r.useCallback)(async()=>{d(!0);let t=(0,c.markChapterDone)(e,a),r=t.subjects[e]?.chapters?.[`${e}/${a}`]?.status==="done";n(r),r&&(x(!0),setTimeout(()=>x(!1),2e3)),(0,c.syncProgressToGitHub)(t).finally(()=>d(!1)),o?.(r?"done":"empty")},[e,a,o]);return(0,t.jsxs)("button",{onClick:f,disabled:l,className:`group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${s?"bg-[var(--color-progress-done)]/10 text-[var(--color-progress-done)] border border-[var(--color-progress-done)]/30 hover:bg-[var(--color-progress-done)]/20":"bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"} ${u?"scale-105 shadow-lg ring-2 ring-[var(--color-progress-done)]/30":""}`,children:[(0,t.jsx)("span",{className:"relative flex-shrink-0 w-5 h-5",children:s?(0,t.jsx)("span",{className:"flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-progress-done)]",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"animate-fadein",children:(0,t.jsx)("path",{d:"M2.5 6l2.5 2.5L9.5 3.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):(0,t.jsx)("span",{className:"flex items-center justify-center w-5 h-5 rounded-full border-2 border-[var(--color-progress-empty)] group-hover:border-[var(--color-accent)] transition-colors"})}),(0,t.jsx)("span",{children:l?"同步中...":s?u?"✅ 已完成！":"已学完 ✓":"标记为已学完"})]})}let d=/BV[a-zA-Z0-9]{10}/,u=/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;function x({video:e,className:r}){var a,o;return"bilibili"===e.platform?(0,t.jsxs)("div",{className:`rounded-lg overflow-hidden border border-[var(--color-border)] ${r||""}`,children:[(0,t.jsx)("iframe",{src:(a=e.id,`https://player.bilibili.com/player.html?bvid=${a}&page=1&high_quality=1`),title:e.title,className:"w-full aspect-video",allowFullScreen:!0,loading:"lazy",sandbox:"allow-scripts allow-same-origin allow-popups"}),(0,t.jsxs)("div",{className:"px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)]",children:["📺 ",e.title]})]}):"youtube"===e.platform?(0,t.jsxs)("div",{className:`rounded-lg overflow-hidden border border-[var(--color-border)] ${r||""}`,children:[(0,t.jsx)("iframe",{src:(o=e.id,`https://www.youtube-nocookie.com/embed/${o}`),title:e.title,className:"w-full aspect-video",allowFullScreen:!0,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),(0,t.jsxs)("div",{className:"px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)]",children:["📺 ",e.title]})]}):(0,t.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:`block rounded-lg border border-[var(--color-border)] overflow-hidden group hover:shadow-card transition-shadow ${r||""}`,children:[(0,t.jsx)("div",{className:"aspect-video bg-[var(--color-bg-secondary)] flex items-center justify-center text-4xl",children:"🎬"}),(0,t.jsxs)("div",{className:"px-4 py-2 text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] group-hover:text-[var(--color-accent)] transition-colors",children:["🔗 ",e.title," →"]})]})}var f=e.i(13003);e.s(["default",0,function(){let h=(0,a.useParams)(),m=h?.slug?.[0],p=h?.slug?.[1],[b,$]=(0,r.useState)([]),[v,g]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1),[N,w]=(0,r.useState)(),[_,k]=(0,r.useState)(),[C,S]=(0,r.useState)(""),[P,A]=(0,r.useState)([]),[T,O]=(0,r.useState)(""),[L,E]=(0,r.useState)(!1);(0,r.useEffect)(()=>{$((0,f.getAllContentTrees)())},[]),(0,r.useEffect)(()=>{if(!m||!p)return;let{subject:t,chapter:r}=(0,f.getChapterRoute)(m,p);w(t),k(r),S((0,f.getKnowledgeContent)(m,p)),async function(){let t=[];"math"===m&&"chapter1"===p?t=(await e.A(26849)).default:"python"===m&&"chapter1"===p&&(t=(await e.A(61862)).default),A(t.map(e=>(function(e,t){let r=e.match(d);if(r)return{platform:"bilibili",id:r[0],title:t||"B站视频",url:e};let a=e.match(u);return a?{platform:"youtube",id:a[1],title:t||"YouTube 视频",url:e}:{platform:"other",id:e,title:t||"视频链接",url:e}})(e.url,e.title)).filter(e=>null!==e))}();let a=(0,c.loadProgressFromLocal)(),o=a.subjects[m]?.chapters?.[`${m}/${p}`];O(o?.notes||"")},[m,p]);let I=(0,r.useCallback)(async()=>{if(!L)return;let e=(0,c.updateChapterNotes)(m,p,T);await (0,c.syncProgressToGitHub)(e),E(!1)},[T,L,m,p]);if((0,r.useEffect)(()=>{if(!L)return;let e=setTimeout(()=>I(),3e3);return()=>clearTimeout(e)},[T,L,I]),(0,r.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),g(!0)),(e.metaKey||e.ctrlKey)&&","===e.key&&(e.preventDefault(),j(!0))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),!N||!_)return(0,t.jsxs)("div",{className:"flex h-screen overflow-hidden",children:[(0,t.jsx)(s.default,{contentTrees:b}),(0,t.jsx)("main",{className:"flex-1 flex items-center justify-center",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"text-lg text-[var(--color-text-secondary)] mb-2",children:"章节未找到"}),(0,t.jsx)(o.default,{href:"/",className:"text-sm text-[var(--color-accent)] hover:underline",children:"← 返回首页"})]})})]});let M=C?C.replace(/^---[\s\S]*?---\n?/,"").replace(/^### (.*)/gm,"<h3>$1</h3>").replace(/^## (.*)/gm,"<h2>$1</h2>").replace(/^# (.*)/gm,"<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`\n]+)`/g,"<code>$1</code>").replace(/^```(\w*)\n([\s\S]*?)```/gm,"<pre><code>$2</code></pre>").replace(/\$\$([\s\S]*?)\$\$/g,'<div class="math-block">$1</div>').replace(/\$([^$]+)\$/g,'<span class="math-inline">$1</span>').replace(/^> (.*)/gm,"<blockquote>$1</blockquote>").replace(/^- (.*)/gm,"<li>$1</li>").split("\n\n").map(e=>e.startsWith("<")?e:`<p>${e}</p>`).join("\n"):"";return(0,t.jsxs)("div",{className:"flex h-screen overflow-hidden",children:[(0,t.jsx)(s.default,{contentTrees:b,currentSubject:m,currentChapter:p}),(0,t.jsx)("main",{className:"flex-1 overflow-y-auto",children:(0,t.jsxs)("article",{className:"content-width py-12 px-6",children:[(0,t.jsxs)("nav",{className:"mb-8 text-sm text-[var(--color-text-tertiary)]",children:[(0,t.jsx)(o.default,{href:"/",className:"hover:text-[var(--color-accent)] transition-colors",children:"首页"}),(0,t.jsx)("span",{className:"mx-2",children:"/"}),(0,t.jsxs)(o.default,{href:`/my-study-notes/subjects/${m}`,className:"hover:text-[var(--color-accent)] transition-colors",children:[N.icon," ",N.name]}),(0,t.jsx)("span",{className:"mx-2",children:"/"}),(0,t.jsx)("span",{className:"text-[var(--color-text)]",children:_.title})]}),(0,t.jsxs)("div",{className:"flex items-start justify-between gap-4 mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-1",children:_.title}),_.summary&&(0,t.jsx)("p",{className:"text-sm text-[var(--color-text-secondary)]",children:_.summary})]}),(0,t.jsx)(i,{subjectId:m,chapterId:p})]}),M?(0,t.jsx)("div",{className:"prose-content",dangerouslySetInnerHTML:{__html:M}}):(0,t.jsxs)("div",{className:"p-8 text-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)]",children:[(0,t.jsx)("p",{className:"text-sm text-[var(--color-text-tertiary)] mb-2",children:"📝 知识内容待填充"}),(0,t.jsxs)("p",{className:"text-xs text-[var(--color-text-tertiary)]",children:["在 ",(0,t.jsxs)("code",{children:["src/subjects/",m,"/",p,"/knowledge.ts"]})," 中编写内容"]})]}),(0,t.jsx)("hr",{className:"my-8"}),(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"📺 视频讲解"}),P.length>0?(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 mb-8",children:P.map((e,r)=>(0,t.jsx)(x,{video:e},r))}):(0,t.jsx)("div",{className:"p-4 text-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-8",children:(0,t.jsx)("p",{className:"text-xs text-[var(--color-text-tertiary)]",children:"视频链接待添加（在 videos.json 中配置）"})}),(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"✏️ 例题练习"}),(0,t.jsx)("div",{className:"p-4 text-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-8",children:(0,t.jsx)("p",{className:"text-xs text-[var(--color-text-tertiary)]",children:"练习题待添加（在 exercises.md 中编辑）"})}),(0,t.jsx)("hr",{className:"my-8"}),(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"📝 学习笔记"}),(0,t.jsx)("textarea",{value:T,onChange:e=>{O(e.target.value),E(!0)},placeholder:"在这里记录你的思考和心得…（自动保存到 GitHub）",rows:6,className:"w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-muted)]"}),L&&(0,t.jsx)("p",{className:"mt-1 text-xs text-[var(--color-text-tertiary)]",children:"笔记未保存，将在 3 秒后自动保存…"})]})}),(0,t.jsx)(n.default,{isOpen:v,onClose:()=>g(!1)}),(0,t.jsx)(l.default,{isOpen:y,onClose:()=>j(!1)})]})}],4676)},61862,e=>{e.v(t=>Promise.all(["static/chunks/2xh6hx7wgpfha.js"].map(t=>e.l(t))).then(()=>t(77602)))},26849,e=>{e.v(t=>Promise.all(["static/chunks/1cdevgt4azl59.js"].map(t=>e.l(t))).then(()=>t(5659)))}]);