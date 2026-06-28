(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return i}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",l=e.hash||"",i=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let d=e.search||i&&`?${i}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||s.test(a))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${a}${c}${o}${d}${l}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(71645);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,a)),t&&(o.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(18967),o=e.r(52817);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return $},useLinkStatus:function(){return v}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809),s=e.r(43476),l=n._(e.r(71645)),i=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),x=e.r(5550);e.r(33525);let f=e.r(88540),h=e.r(91949),m=e.r(73668),p=e.r(9396);function $(t){var r,a;let o,n,$,[v,y]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),g=(0,l.useRef)(null),{href:j,as:N,children:w,prefetch:_=null,passHref:C,replace:k,shallow:S,scroll:P,onClick:A,onMouseEnter:O,onTouchStart:T,legacyBehavior:L=!1,onNavigate:E,transitionTypes:M,ref:I,unstable_dynamicOnHover:R,...D}=t;o=w,L&&("string"==typeof o||"number"==typeof o)&&(o=(0,s.jsx)("a",{children:o}));let F=l.default.useContext(c.AppRouterContext),B=!1!==_,K=!1!==_?null===(a=_)||"auto"===a?p.FetchStrategy.PPR:p.FetchStrategy.Full:p.FetchStrategy.PPR,U="string"==typeof(r=N||j)?r:(0,i.formatUrl)(r);if(L){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=l.default.Children.only(o)}let q=L?n&&"object"==typeof n&&n.ref:I,z=l.default.useCallback(e=>(null!==F&&(g.current=(0,h.mountLinkInstance)(e,U,F,K,B,y)),()=>{g.current&&((0,h.unmountLinkForCurrentNavigation)(g.current),g.current=null),(0,h.unmountPrefetchableInstance)(e)}),[B,U,F,K,y]),H={ref:(0,d.useMergedRef)(z,q),onClick(t){L||"function"!=typeof A||A(t),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!F||t.defaultPrevented||function(t,r,a,o,n,s,i){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);l.default.startTransition(()=>{u(r,o?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,a.current,i)})}}(t,U,g,k,P,E,M)},onMouseEnter(e){L||"function"!=typeof O||O(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),F&&B&&(0,h.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){L||"function"!=typeof T||T(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),F&&B&&(0,h.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,u.isAbsoluteUrl)(U)?H.href=U:L&&!C&&("a"!==n.type||"href"in n.props)||(H.href=(0,x.addBasePath)(U)),$=L?l.default.cloneElement(n,H):(0,s.jsx)("a",{...D,...H,children:o}),(0,s.jsx)(b.Provider,{value:v,children:$})}e.r(84508);let b=(0,l.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,l.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73386,(e,t,r)=>{t.exports={subjects:[{id:"math",name:"高等数学",icon:"📐"},{id:"english",name:"英语四级",icon:"📝"},{id:"mechanics",name:"理论力学",icon:"⚙️"},{id:"electronics",name:"电工电子学",icon:"⚡"},{id:"python",name:"Python 自学",icon:"🐍"}]}},19625,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"函数与极限",order:1,summary:"函数的概念、极限的定义与运算法则"},{id:"chapter2",title:"导数与微分",order:2,summary:"导数的定义、求导法则与微分的应用"},{id:"chapter3",title:"不定积分",order:3,summary:"不定积分的概念与基本积分法"},{id:"chapter4",title:"定积分",order:4,summary:"定积分的定义、性质与计算方法"}]}},49620,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"词汇与语法基础",order:1,summary:"四级核心词汇、基本语法框架"},{id:"chapter2",title:"阅读理解",order:2,summary:"阅读技巧与题型解析"},{id:"chapter3",title:"听力训练",order:3,summary:"听力题型与答题策略"},{id:"chapter4",title:"写作与翻译",order:4,summary:"作文模板与翻译技巧"}]}},21795,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"静力学基础",order:1,summary:"力的分解、力矩与平衡方程"},{id:"chapter2",title:"运动学",order:2,summary:"点的运动、刚体的平动与转动"},{id:"chapter3",title:"动力学",order:3,summary:"牛顿定律、动量与动能定理"},{id:"chapter4",title:"拉格朗日力学",order:4,summary:"约束系统与拉格朗日方程"}]}},45147,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"电路基本定律",order:1,summary:"欧姆定律、基尔霍夫定律"},{id:"chapter2",title:"交流电路分析",order:2,summary:"正弦交流电、相量法"},{id:"chapter3",title:"模拟电子技术",order:3,summary:"二极管、三极管与放大电路"},{id:"chapter4",title:"数字电路基础",order:4,summary:"逻辑门、触发器与组合逻辑"}]}},83336,(e,t,r)=>{t.exports={chapters:[{id:"chapter1",title:"Python 基础语法",order:1,summary:"变量、数据类型、控制流与函数"},{id:"chapter2",title:"面向对象编程",order:2,summary:"类、继承、多态与封装"},{id:"chapter3",title:"常用标准库",order:3,summary:"os、sys、re、datetime 等模块"},{id:"chapter4",title:"数据分析入门",order:4,summary:"NumPy、Pandas 基础操作"}]}},22140,95219,18396,31767,13003,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(22016);let o="study_progress",n="u">typeof localStorage;function s(){if(!n)return{version:1,updatedAt:"",subjects:{}};try{let e=localStorage.getItem(o);if(e)return JSON.parse(e)}catch{}return{version:1,updatedAt:"",subjects:{}}}function l(e){n&&(e.updatedAt=new Date().toISOString(),localStorage.setItem(o,JSON.stringify(e)))}function i(e){n&&localStorage.setItem("study_pat",btoa(e))}function c(){if(!n)return null;let e=localStorage.getItem("study_pat");if(!e)return null;try{return atob(e)}catch{return null}}let d="xfjsssq",u="my-study-notes",x=".progress/progress.json";async function f(e){let t=c();if(!t)return null;let r=`https://api.github.com/repos/${d}/${u}/contents/${x}`;try{let a=null,o=await fetch(r,{headers:{Authorization:`Bearer ${t}`}});o.ok&&(a=(await o.json()).sha);let n=btoa(unescape(encodeURIComponent(JSON.stringify(e,null,2)))),s={message:`Sync: ${e.updatedAt}`,content:n};a&&(s.sha=a);let l=await fetch(r,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json","X-GitHub-Api-Version":"2022-11-28"},body:JSON.stringify(s)});if(!l.ok)return null;return{sha:(await l.json()).content.sha}}catch{return null}}async function h(){let e=c();if(!e)return null;try{let t=await fetch(`https://api.github.com/repos/${d}/${u}/contents/${x}`,{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)return null;let r=await t.json();return JSON.parse(decodeURIComponent(escape(atob(r.content))))}catch{return null}}e.s(["getPat",0,c,"loadProgressFromGitHub",0,h,"loadProgressFromLocal",0,s,"markChapterDone",0,function(e,t,r){let a=s();a.subjects[e]||(a.subjects[e]={subjectId:e,updatedAt:"",chapters:{}});let o=`${e}/${t}`,n=a.subjects[e].chapters[o],i=new Date().toISOString();return n?.status==="done"?delete a.subjects[e].chapters[o]:a.subjects[e].chapters[o]={chapterPath:o,status:"done",completedAt:i,notes:r??n?.notes??"",updatedAt:i},a.subjects[e].updatedAt=i,l(a),a},"savePat",0,i,"saveProgressToLocal",0,l,"syncProgressToGitHub",0,f,"updateChapterNotes",0,function(e,t,r){let a=s();a.subjects[e]||(a.subjects[e]={subjectId:e,updatedAt:"",chapters:{}});let o=`${e}/${t}`;return a.subjects[e].chapters[o]={...a.subjects[e].chapters[o]||{chapterPath:o,status:"empty"},notes:r,updatedAt:new Date().toISOString()},a.subjects[e].updatedAt=new Date().toISOString(),l(a),a}],95219),e.s(["default",0,function({contentTrees:e,currentSubject:o,currentChapter:n}){let[l,i]=(0,r.useState)({}),[c,d]=(0,r.useState)(!1),[u,x]=(0,r.useState)({});(0,r.useEffect)(()=>{let e=s(),t={};for(let[r,a]of Object.entries(e.subjects))for(let[e,r]of Object.entries(a.chapters))t[r.chapterPath]=r.status;x(t)},[]);let f=(0,r.useCallback)(e=>{i(t=>({...t,[e]:!t[e]}))},[]),h=({subjectId:e,chapterId:r})=>"done"===u[`${e}/${r}`]?(0,t.jsx)("span",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-progress-done)] flex items-center justify-center",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:(0,t.jsx)("path",{d:"M2.5 6l2.5 2.5L9.5 3.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):(0,t.jsx)("span",{className:"flex-shrink-0 w-5 h-5 rounded-full border-2 border-[var(--color-progress-empty)]"}),m=(0,t.jsxs)("nav",{className:"flex flex-col w-full h-full overflow-y-auto",children:[(0,t.jsx)("div",{className:"px-4 py-4 border-b border-[var(--color-border)]",children:(0,t.jsx)(a.default,{href:"/",className:"text-lg font-bold text-[var(--color-text)] no-underline hover:no-underline",children:"📚 My Study Notes"})}),(0,t.jsx)("div",{className:"flex-1 py-2 overflow-y-auto",children:e.map(({subject:e,chapters:r})=>(0,t.jsxs)("div",{className:"mb-0.5",children:[(0,t.jsxs)("button",{onClick:()=>f(e.id),className:"w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors text-left",children:[(0,t.jsx)("span",{className:"text-xs transition-transform",children:l[e.id]?"▸":"▾"}),(0,t.jsx)("span",{children:e.icon||"📖"}),(0,t.jsx)("span",{className:"flex-1 truncate",children:e.name}),(0,t.jsxs)("span",{className:"text-xs text-[var(--color-text-tertiary)]",children:[r.length,"章"]})]}),!l[e.id]&&(0,t.jsx)("div",{className:"ml-2",children:r.map(r=>{let s=`/subjects/${e.id}/${r.id}`,l=o===e.id&&n===r.id;return(0,t.jsxs)(a.default,{href:s,className:`flex items-center gap-2 px-4 py-1.5 text-sm transition-colors group border-l-2 ml-2 ${l?"border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[var(--color-accent)] font-medium":"border-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text)]"}`,children:[(0,t.jsx)(h,{subjectId:e.id,chapterId:r.id}),(0,t.jsx)("span",{className:"flex-1 truncate text-xs",children:r.title})]},r.id)})})]},e.id))}),(0,t.jsx)("div",{className:"px-4 py-3 border-t border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:"Agnes ❤️"}),(0,t.jsx)("a",{href:"/settings",className:"text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors",children:"⚙️"})]})})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:()=>d(!c),className:"fixed top-3 left-3 z-50 p-2 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border)] md:hidden","aria-label":"Toggle sidebar",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),c&&(0,t.jsx)("div",{onClick:()=>d(!1),className:"fixed inset-0 z-40 bg-black/30 md:hidden"}),(0,t.jsx)("aside",{className:`fixed md:sticky top-0 z-40 h-screen w-[var(--sidebar-width)] bg-[var(--sidebar-bg)] border-r border-[var(--color-border)] transition-transform duration-300 overflow-hidden ${c?"translate-x-0":"-translate-x-full md:translate-x-0"}`,children:m})]})}],22140),e.s(["default",0,function({isOpen:e,onClose:a}){let[o,n]=(0,r.useState)(""),[s,l]=(0,r.useState)([]),i=(0,r.useRef)(null);(0,r.useEffect)(()=>{e&&i.current&&i.current.focus()},[e]),(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);let c=(0,r.useCallback)(()=>{if(!o.trim())return void l([]);let e=document.body.innerText.toLowerCase(),t=o.toLowerCase();if(e.includes(t)){let r=e.indexOf(t),a=Math.max(0,r-30),n=e.slice(a,r+o.length+50);l([`...${n}...`])}else l([])},[o]);return e?(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/40",children:(0,t.jsxs)("div",{className:"w-full max-w-lg bg-[var(--color-bg)] rounded-lg shadow-float border border-[var(--color-border)] animate-fadein",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]",children:[(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-[var(--color-text-tertiary)]",children:[(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M11 11l3 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,t.jsx)("input",{ref:i,type:"text",value:o,onChange:e=>n(e.target.value),onKeyDown:e=>"Enter"===e.key&&c(),placeholder:"搜索当前页面...",className:"flex-1 bg-transparent border-none outline-none text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)]"}),(0,t.jsx)("kbd",{className:"text-xs px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]",children:"Esc"})]}),(0,t.jsx)("div",{className:"max-h-60 overflow-y-auto p-2",children:s.length>0?s.map((e,r)=>(0,t.jsx)("div",{className:"px-3 py-2 text-sm text-[var(--color-text-secondary)] rounded hover:bg-[var(--color-bg-hover)]",children:e},r)):o?(0,t.jsx)("div",{className:"px-3 py-4 text-sm text-[var(--color-text-tertiary)] text-center",children:"未找到匹配结果"}):(0,t.jsx)("div",{className:"px-3 py-4 text-sm text-[var(--color-text-tertiary)] text-center",children:"输入关键词进行搜索"})})]})}):null}],18396),e.s(["default",0,function({isOpen:e,onClose:a}){let[o,n]=(0,r.useState)(()=>c()||""),[s,l]=(0,r.useState)(!1),d=(0,r.useCallback)(()=>{o.trim()?i(o.trim()):localStorage.removeItem("study_pat"),l(!0),setTimeout(()=>l(!1),2e3)},[o]),u=(0,r.useCallback)(()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))},[]);return e?(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/40",children:(0,t.jsxs)("div",{className:"w-full max-w-md bg-[var(--color-bg)] rounded-lg shadow-float border border-[var(--color-border)] animate-fadein p-6",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"⚙️ 设置"}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-[var(--color-text)]",children:"深色模式"}),(0,t.jsx)("button",{onClick:u,className:"mt-1 w-full text-left px-3 py-2 rounded-md border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors",children:"🌓 切换浅色/深色模式"})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-[var(--color-text)]",children:"GitHub 个人访问令牌 (PAT)"}),(0,t.jsx)("input",{type:"password",value:o,onChange:e=>n(e.target.value),placeholder:"ghp_...",className:"mt-1 w-full px-3 py-2 rounded-md border border-[var(--color-border)] text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-muted)]"}),(0,t.jsxs)("p",{className:"mt-1 text-xs text-[var(--color-text-tertiary)]",children:["需要 ",(0,t.jsx)("code",{children:"repo"})," 权限。令牌仅存储在浏览器本地。"]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,t.jsx)("button",{onClick:a,className:"px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors",children:"关闭"}),(0,t.jsx)("button",{onClick:d,className:`px-4 py-2 text-sm rounded-md transition-all ${s?"bg-[var(--color-progress-done)]/10 text-[var(--color-progress-done)]":"bg-[var(--color-accent)] text-white hover:opacity-90"}`,children:s?"✅ 已保存":"保存设置"})]})]})}):null}],31767);var m=e.i(73386),p=e.i(19625),$=e.i(49620),b=e.i(21795),v=e.i(45147),y=e.i(83336);let g=`
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
`,C={math:p.default,english:$.default,mechanics:b.default,electronics:v.default,python:y.default},k={"math/chapter1":g,"math/chapter2":j,"math/chapter3":N,"math/chapter4":w,"python/chapter1":_};function S(){return m.default.subjects.map(e=>({id:e.id,name:e.name,icon:e.icon}))}function P(e){let t=C[e];return t?(t.chapters||[]).map(t=>({...t,subjectId:e})):[]}e.s(["getAllContentTrees",0,function(){return S().map(e=>({subject:e,chapters:P(e.id)}))},"getChapterRoute",0,function(e,t){return{subject:S().find(t=>t.id===e),chapter:P(e).find(e=>e.id===t)}},"getKnowledgeContent",0,function(e,t){return k[`${e}/${t}`]??""}],13003)},52683,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(22016),o=e.i(22140),n=e.i(18396),s=e.i(31767),l=e.i(95219),i=e.i(13003);e.s(["default",0,function(){let[e]=(0,r.useState)(()=>(0,i.getAllContentTrees)()),[c,d]=(0,r.useState)(!1),[u,x]=(0,r.useState)(!1),[f,h]=(0,r.useState)("idle"),[m,p]=(0,r.useState)({total:0,done:0,percent:0});return(0,r.useEffect)(()=>{!async function(){h("syncing");let e=await (0,l.loadProgressFromGitHub)();if(e)(0,l.saveProgressToLocal)(e),h("done");else{let e=(0,l.loadProgressFromLocal)();e.subjects&&Object.keys(e.subjects).length,h("idle")}let t=(0,l.loadProgressFromLocal)(),r=0,a=0;for(let e of(0,i.getAllContentTrees)())for(let o of e.chapters){r++;let n=t.subjects[e.subject.id]?.chapters?.[`${e.subject.id}/${o.id}`];n?.status==="done"&&a++}p({total:r,done:a,percent:r>0?Math.round(a/r*100):0})}()},[]),(0,r.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),d(!0)),(e.metaKey||e.ctrlKey)&&","===e.key&&(e.preventDefault(),x(!0))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,t.jsxs)("div",{className:"flex h-screen overflow-hidden",children:[(0,t.jsx)(o.default,{contentTrees:e}),(0,t.jsx)("main",{className:"flex-1 overflow-y-auto",children:(0,t.jsxs)("div",{className:"content-width py-12 px-6",children:[(0,t.jsxs)("div",{className:"mb-12",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"📚 我的学习笔记"}),(0,t.jsx)("p",{className:"text-[var(--color-text-secondary)]",children:"系统化学习，可视化进度。让知识成为一种积累。"}),m.total>0&&(0,t.jsxs)("div",{className:"mt-6 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,t.jsx)("span",{className:"text-sm font-medium text-[var(--color-text)]",children:"总进度"}),(0,t.jsxs)("span",{className:"text-sm text-[var(--color-text-secondary)]",children:[m.done," / ",m.total," 章"]})]}),(0,t.jsx)("div",{className:"w-full h-2 bg-[var(--color-progress-empty)] rounded-full overflow-hidden",children:(0,t.jsx)("div",{className:"h-full bg-[var(--color-progress-done)] rounded-full transition-all duration-500",style:{width:`${m.percent}%`}})}),(0,t.jsxs)("div",{className:"mt-1 text-xs text-right text-[var(--color-text-tertiary)]",children:[m.percent,"%"]})]}),"idle"!==f&&(0,t.jsxs)("div",{className:"mt-3 text-xs text-[var(--color-text-tertiary)] flex items-center gap-1",children:[(0,t.jsx)("span",{className:`w-1.5 h-1.5 rounded-full ${"syncing"===f?"bg-yellow-400 animate-pulse":"done"===f?"bg-green-400":"bg-red-400"}`}),"syncing"===f&&"从 GitHub 同步进度...","done"===f&&"进度已同步 ✅","error"===f&&"同步失败 ⚠️"]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:e.map(({subject:e,chapters:r})=>{let o=0,n=(0,l.loadProgressFromLocal)();for(let t of r){let r=n.subjects[e.id]?.chapters?.[`${e.id}/${t.id}`];r?.status==="done"&&o++}let s=r.length>0?Math.round(o/r.length*100):0;return(0,t.jsxs)(a.default,{href:`/my-study-notes/subjects/${e.id}`,className:"group block p-5 rounded-lg border border-[var(--color-border)] hover:shadow-card hover:border-[var(--color-accent-muted)] transition-all bg-[var(--color-bg)]",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[(0,t.jsx)("span",{className:"text-3xl",children:e.icon||"📖"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h3",{className:"font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors",children:e.name}),(0,t.jsxs)("p",{className:"text-xs text-[var(--color-text-tertiary)]",children:[r.length," 个章节"]})]})]}),r.length>0&&(0,t.jsxs)("div",{className:"mt-3",children:[(0,t.jsx)("div",{className:"w-full h-1 bg-[var(--color-progress-empty)] rounded-full overflow-hidden",children:(0,t.jsx)("div",{className:"h-full bg-[var(--color-progress-done)] rounded-full transition-all",style:{width:`${s}%`}})}),(0,t.jsxs)("div",{className:"mt-1 text-xs text-right text-[var(--color-text-tertiary)]",children:[s,"%"]})]})]},e.id)})}),(0,t.jsx)("div",{className:"mt-12 pt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)] space-y-1",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("kbd",{className:"px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]",children:"⌘K / Ctrl+K"})," ","搜索页面   ",(0,t.jsx)("kbd",{className:"px-1.5 py-0.5 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)]",children:"⌘, / Ctrl+,"})," ","打开设置"]})})]})}),(0,t.jsx)(n.default,{isOpen:c,onClose:()=>d(!1)}),(0,t.jsx)(s.default,{isOpen:u,onClose:()=>x(!1)})]})}])}]);