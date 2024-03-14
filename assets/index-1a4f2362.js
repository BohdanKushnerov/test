import{r as n,U as Gt}from"./index-b48e6dac.js";const ft="carousel",pt="controller",Yt="navigation",jt="no-scroll",$e="portal",Zt="root",ht="toolbar",to="captions",no="counter",oo="download",ro="fullscreen",so="inline",io="share",co="slideshow",lo="thumbnails",ao="zoom",ve="loading",qt="playing",ge="error",_e="complete",Qt="placeholder",ce=e=>`active-slide-${e}`,uo=ce(ve),fo=ce(qt),po=ce(ge),ho=ce(_e),mo="fullsize",mt="flex_center",Jt="no_scroll",Et="no_scroll_padding",en="slide_wrapper",Z="prev",q="next",Qe="swipe",ee="close",vt="onPointerDown",gt="onPointerMove",_t="onPointerUp",Lt="onPointerLeave",xt="onPointerCancel",Pt="onKeyDown",tn="onKeyUp",bt="onWheel",nn="Escape",on="ArrowLeft",rn="ArrowRight",sn="button",We="icon",Ct="contain",Je="cover",cn="Unknown action type",G=(...e)=>[...e].filter(t=>!!t).join(" "),Nt="yarl__",C=e=>`${Nt}${e}`,V=e=>`--${Nt}${e}`,le=(e,t)=>`${e}${t?`_${t}`:""}`,Fe=e=>t=>le(e,t),ln=(e,t)=>e&&e[t]?e[t]:t,It=(...e)=>()=>{e.forEach(t=>{t()})},te=(e,t,o)=>()=>{const r=n.useContext(o);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r},He=()=>typeof window<"u";function an(e,t=0){const o=10**t;return Math.round((e+Number.EPSILON)*o)/o}const un=e=>e.type===void 0||e.type==="image",dn=(e,t)=>e.imageFit===Je||e.imageFit!==Ct&&t===Je;function Pe(e){return typeof e=="string"?Number.parseInt(e,10):e}function xe(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=Pe(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function fn(e,t){const o=xe(t),r=o.percent!==void 0?e.width/100*o.percent:o.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}const Eo=()=>(He()?window==null?void 0:window.devicePixelRatio:void 0)||1,wt=(e,t)=>t>0?(e%t+t)%t:0,St=e=>e.length>0,pn=(e,t)=>e[wt(t,e.length)],Ue=(e,t)=>St(e)?pn(e,t):void 0;function vo(e,t,o){if(!o)return e;const{buttons:r,...s}=e,c=r.findIndex(l=>l===t),i=n.isValidElement(o)?n.cloneElement(o,{key:t},null):o;if(c>=0){const l=[...r];return l.splice(c,1,i),{buttons:l,...s}}return{buttons:[i,...r],...s}}function go(){const e=t=>{t.stopPropagation()};return{onPointerDown:e,onKeyDown:e,onWheel:e}}function hn(e,t,o=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),o))}const Ve={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[ee]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:Ct,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Q(e,t){return{name:e,component:t}}function M(e,t){return{module:e,children:t}}function yt(e,t,o){return e.module.name===t?o(e):e.children?[M(e.module,e.children.flatMap(r=>{var s;return(s=yt(r,t,o))!==null&&s!==void 0?s:[]}))]:[e]}function J(e,t,o){return e.flatMap(r=>{var s;return(s=yt(r,t,o))!==null&&s!==void 0?s:[]})}function mn(e,t=[],o=[]){let r=e;const s=h=>{const p=[...r];for(;p.length>0;){const d=p.pop();if((d==null?void 0:d.module.name)===h)return!0;d!=null&&d.children&&p.push(...d.children)}return!1},c=(h,p)=>{if(h===""){r=[M(p,r)];return}r=J(r,h,d=>[M(p,[d])])},i=(h,p)=>{r=J(r,h,d=>[M(d.module,[M(p,d.children)])])},l=(h,p,d)=>{r=J(r,h,m=>{var N;return[M(m.module,[...d?[M(p)]:[],...(N=m.children)!==null&&N!==void 0?N:[],...d?[]:[M(p)]])]})},f=(h,p,d)=>{r=J(r,h,m=>[...d?[M(p)]:[],m,...d?[]:[M(p)]])},a=h=>{i(pt,h)},E=(h,p)=>{r=J(r,h,d=>[M(p,d.children)])},_=h=>{r=J(r,h,p=>p.children)},w=h=>{o.push(h)};return t.forEach(h=>{h({contains:s,addParent:c,append:i,addChild:l,addSibling:f,addModule:a,replace:E,remove:_,augment:w})}),{config:r,augmentation:h=>o.reduce((p,d)=>d(p),h)}}const Ot=n.createContext(null),be=te("useEvents","EventsContext",Ot);function En({children:e}){const[t]=n.useState({});n.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const o=n.useMemo(()=>{const r=(i,l)=>{var f;(f=t[i])===null||f===void 0||f.splice(0,t[i].length,...t[i].filter(a=>a!==l))};return{publish:(...[i,l])=>{var f;(f=t[i])===null||f===void 0||f.forEach(a=>a(l))},subscribe:(i,l)=>(t[i]||(t[i]=[]),t[i].push(l),()=>r(i,l)),unsubscribe:r}},[t]);return n.createElement(Ot.Provider,{value:o},e)}const Rt=n.createContext(null),ae=te("useLightboxProps","LightboxPropsContext",Rt);function vn({children:e,...t}){return n.createElement(Rt.Provider,{value:t},e)}const Tt=n.createContext(null),Ce=te("useLightboxState","LightboxStateContext",Tt),Mt=n.createContext(null),gn=te("useLightboxDispatch","LightboxDispatchContext",Mt);function _n(e,t){switch(t.type){case"swipe":{const{slides:o}=e,r=(t==null?void 0:t.increment)||0,s=e.globalIndex+r,c=wt(s,o.length),i=Ue(o,c),l=r||t.duration?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:o,currentIndex:c,globalIndex:s,currentSlide:i,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Ue(t.slides,t.index)}:e;default:throw new Error(cn)}}function Ln({slides:e,index:t,children:o}){const[r,s]=n.useReducer(_n,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Ue(e,t)});n.useEffect(()=>{s({type:"update",slides:e,index:t})},[e,t]);const c=n.useMemo(()=>({...r,state:r,dispatch:s}),[r,s]);return n.createElement(Mt.Provider,{value:s},n.createElement(Tt.Provider,{value:c},o))}const At=n.createContext(null),Ne=te("useTimeouts","TimeoutsContext",At);function xn({children:e}){const[t]=n.useState([]);n.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const o=n.useMemo(()=>{const r=i=>{t.splice(0,t.length,...t.filter(l=>l!==i))};return{setTimeout:(i,l)=>{const f=window.setTimeout(()=>{r(f),i()},l);return t.push(f),f},clearTimeout:i=>{i!==void 0&&(r(i),window.clearTimeout(i))}}},[t]);return n.createElement(At.Provider,{value:o},e)}const kt=n.forwardRef(function({label:t,className:o,icon:r,renderIcon:s,onClick:c,style:i,...l},f){const{styles:a,labels:E}=ae();return n.createElement("button",{ref:f,type:"button","aria-label":ln(E,t),className:G(C(sn),o),onClick:c,style:{...i,...a.button},...l},s?s():n.createElement(r,{className:C(We),style:a.icon}))});function Dt(e,t){const o=r=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return o.displayName=e,o}function ue(e,t){return Dt(e,n.createElement("g",{fill:"currentColor"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}function _o(e,t){return Dt(e,n.createElement(n.Fragment,null,n.createElement("defs",null,n.createElement("mask",{id:"strike"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"white"}),n.createElement("path",{d:"M0 0L24 24",stroke:"black",strokeWidth:4}))),n.createElement("path",{d:"M0.70707 2.121320L21.878680 23.292883",stroke:"currentColor",strokeWidth:2}),n.createElement("g",{fill:"currentColor",mask:"url(#strike)"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t)))}const Pn=ue("Close",n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),bn=ue("Previous",n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Cn=ue("Next",n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),Nn=ue("Loading",n.createElement(n.Fragment,null,Array.from({length:8}).map((e,t,o)=>n.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/o.length*(t+1),transform:`rotate(${360/o.length*t}, 12, 12)`})))),In=ue("Error",n.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),ne=He()?n.useLayoutEffect:n.useEffect;function Wt(){const[e,t]=n.useState(!1);return n.useEffect(()=>{var o,r;const s=(o=window.matchMedia)===null||o===void 0?void 0:o.call(window,"(prefers-reduced-motion: reduce)");t(s==null?void 0:s.matches);const c=i=>t(i.matches);return(r=s==null?void 0:s.addEventListener)===null||r===void 0||r.call(s,"change",c),()=>{var i;return(i=s==null?void 0:s.removeEventListener)===null||i===void 0?void 0:i.call(s,"change",c)}},[]),e}function wn(e){let t=0,o=0,r=0;const c=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(c){const i=c[1].split(",").map(Pe);i.length===6?(t=i[4],o=i[5]):i.length===16&&(t=i[12],o=i[13],r=i[14])}return{x:t,y:o,z:r}}function et(e,t){const o=n.useRef(),r=n.useRef(),s=Wt();return ne(()=>{var c,i,l;if(e.current&&o.current!==void 0&&!s){const{keyframes:f,duration:a,easing:E,onfinish:_}=t(o.current,e.current.getBoundingClientRect(),wn(e.current))||{};if(f&&a){(c=r.current)===null||c===void 0||c.cancel(),r.current=void 0;try{r.current=(l=(i=e.current).animate)===null||l===void 0?void 0:l.call(i,f,{duration:a,easing:E})}catch(w){console.error(w)}r.current&&(r.current.onfinish=()=>{r.current=void 0,_==null||_()})}}o.current=void 0}),{prepareAnimation:c=>{o.current=c},isAnimationPlaying:()=>{var c;return((c=r.current)===null||c===void 0?void 0:c.playState)==="running"}}}function Ut(){const e=n.useRef(null),t=n.useRef(),[o,r]=n.useState();return{setContainerRef:n.useCallback(c=>{e.current=c,t.current&&(t.current.disconnect(),t.current=void 0);const i=()=>{if(c){const l=window.getComputedStyle(c),f=a=>parseFloat(a)||0;r({width:Math.round(c.clientWidth-f(l.paddingLeft)-f(l.paddingRight)),height:Math.round(c.clientHeight-f(l.paddingTop)-f(l.paddingBottom))})}else r(void 0)};i(),c&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(i),t.current.observe(c))},[]),containerRef:e,containerRect:o}}function Le(){const e=n.useRef(),{setTimeout:t,clearTimeout:o}=Ne();return n.useCallback((r,s)=>{o(e.current),e.current=t(r,s>0?s:0)},[t,o])}function T(e){const t=n.useRef(e);return ne(()=>{t.current=e}),n.useCallback((...o)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...o)},[])}function tt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function nt(e,t){return n.useMemo(()=>e==null&&t==null?null:o=>{tt(e,o),tt(t,o)},[e,t])}function Sn(e,t=!1){const o=n.useRef();ne(()=>{t&&o.current&&(o.current=!1,e())},[t,e]);const r=n.useCallback(()=>{o.current=!0},[]),s=n.useCallback(()=>{o.current=!1},[]);return{onFocus:r,onBlur:s}}function Be(){const[e,t]=n.useState(!1);return ne(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function yn(){const[e]=n.useState({}),t=n.useCallback((s,c)=>{var i;(i=e[s])===null||i===void 0||i.forEach(l=>{c.isPropagationStopped()||l(c)})},[e]),o=n.useMemo(()=>({onPointerDown:s=>t(vt,s),onPointerMove:s=>t(gt,s),onPointerUp:s=>t(_t,s),onPointerLeave:s=>t(Lt,s),onPointerCancel:s=>t(xt,s),onKeyDown:s=>t(Pt,s),onKeyUp:s=>t(tn,s),onWheel:s=>t(bt,s)}),[t]),r=n.useCallback((s,c)=>(e[s]||(e[s]=[]),e[s].unshift(c),()=>{const i=e[s];i&&i.splice(0,i.length,...i.filter(l=>l!==c))}),[e]);return{registerSensors:o,subscribeSensors:r}}function ot(e,t){const o=n.useRef(0),r=Le(),s=T((...c)=>{o.current=Date.now(),e(c)});return n.useCallback((...c)=>{r(()=>{s(c)},t-(Date.now()-o.current))},[t,s,r])}const Me=Fe("slide"),Ae=Fe("slide_image");function On({slide:e,offset:t,render:o,rect:r,imageFit:s,imageProps:c,onClick:i,onLoad:l,style:f}){var a,E,_,w,h,p,d;const[m,N]=n.useState(ve),{publish:P}=be(),{setTimeout:O}=Ne(),D=n.useRef(null);n.useEffect(()=>{t===0&&P(ce(m))},[t,m,P]);const L=T(x=>{("decode"in x?x.decode():Promise.resolve()).catch(()=>{}).then(()=>{x.parentNode&&(N(_e),O(()=>{l==null||l(x)},0))})}),b=n.useCallback(x=>{D.current=x,x!=null&&x.complete&&L(x)},[L]),S=n.useCallback(x=>{L(x.currentTarget)},[L]),A=n.useCallback(()=>{N(ge)},[]),v=dn(e,s),g=(x,K)=>Number.isFinite(x)?x:K,I=g(Math.max(...((E=(a=e.srcSet)===null||a===void 0?void 0:a.map(x=>x.width))!==null&&E!==void 0?E:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((_=D.current)===null||_===void 0?void 0:_.naturalWidth)||0),F=g(Math.max(...((h=(w=e.srcSet)===null||w===void 0?void 0:w.map(x=>x.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((p=D.current)===null||p===void 0?void 0:p.naturalHeight)||0),U=I&&F?{maxWidth:`min(${I}px, 100%)`,maxHeight:`min(${F}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},Y=(d=e.srcSet)===null||d===void 0?void 0:d.sort((x,K)=>x.width-K.width).map(x=>`${x.src} ${x.width}w`).join(", "),R=()=>r&&!v&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,Ie=Y&&r&&He()?`${Math.round(Math.min(R(),r.width))}px`:void 0,{style:H,className:fe,...we}=c||{};return n.createElement(n.Fragment,null,n.createElement("img",{ref:b,onLoad:S,onError:A,onClick:i,draggable:!1,className:G(C(Ae()),v&&C(Ae("cover")),m!==_e&&C(Ae("loading")),fe),style:{...U,...f,...H},...we,alt:e.alt,sizes:Ie,srcSet:Y,src:e.src}),m!==_e&&n.createElement("div",{className:C(Me(Qt))},m===ve&&(o!=null&&o.iconLoading?o.iconLoading():n.createElement(Nn,{className:G(C(We),C(Me(ve)))})),m===ge&&(o!=null&&o.iconError?o.iconError():n.createElement(In,{className:G(C(We),C(Me(ge)))}))))}var k;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(k||(k={}));function Rn(e,t,o,r,s){n.useEffect(()=>s?()=>{}:It(e(vt,t),e(gt,o),e(_t,r),e(Lt,r),e(xt,r)),[e,t,o,r,s])}var B;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(B||(B={}));const ke=30;function Tn(e,t,o,r,s,c,i,l,f,a,E,_,w,h){const p=n.useRef(0),d=n.useRef([]),m=n.useRef(),N=n.useRef(0),P=n.useRef(B.NONE),O=n.useCallback(v=>{m.current===v.pointerId&&(m.current=void 0,P.current=B.NONE);const g=d.current;g.splice(0,g.length,...g.filter(I=>I.pointerId!==v.pointerId))},[]),D=n.useCallback(v=>{O(v),v.persist(),d.current.push(v)},[O]),L=T(v=>{D(v)}),b=(v,g)=>a&&v>g||f&&v<-g,S=T(v=>{if(d.current.find(g=>g.pointerId===v.pointerId)&&m.current===v.pointerId){const g=Date.now()-N.current,I=p.current;P.current===B.SWIPE?Math.abs(I)>.3*o||Math.abs(I)>5&&g<r?i(I,g):l(I):P.current===B.PULL&&(b(I,2*ke)?w(I,g):h(I)),p.current=0,P.current=B.NONE}O(v)}),A=T(v=>{const g=d.current.find(I=>I.pointerId===v.pointerId);if(g){const I=m.current===v.pointerId;if(v.buttons===0){I&&p.current!==0?S(v):O(g);return}const F=v.clientX-g.clientX,U=v.clientY-g.clientY;if(m.current===void 0){const Y=R=>{D(v),m.current=v.pointerId,N.current=Date.now(),P.current=R};Math.abs(F)>Math.abs(U)&&Math.abs(F)>ke&&t(F)?(Y(B.SWIPE),s()):Math.abs(U)>Math.abs(F)&&b(U,ke)&&(Y(B.PULL),E())}else I&&(P.current===B.SWIPE?(p.current=F,c(F)):P.current===B.PULL&&(p.current=U,_(U)))}});Rn(e,L,A,S)}function Mn({preventDefaultWheelX:e,preventDefaultWheelY:t}){const o=n.useRef(null),r=T(s=>{const c=Math.abs(s.deltaX)>Math.abs(s.deltaY);(c&&e||!c&&t||s.ctrlKey)&&s.preventDefault()});return n.useCallback(s=>{var c;s?s.addEventListener("wheel",r,{passive:!1}):(c=o.current)===null||c===void 0||c.removeEventListener("wheel",r),o.current=s},[r])}function An(e,t,o,r,s,c,i,l,f){const a=n.useRef(0),E=n.useRef(0),_=n.useRef(),w=n.useRef(),h=n.useRef(0),p=n.useRef(0),{setTimeout:d,clearTimeout:m}=Ne(),N=n.useCallback(()=>{_.current&&(m(_.current),_.current=void 0)},[m]),P=n.useCallback(()=>{w.current&&(m(w.current),w.current=void 0)},[m]),O=T(()=>{e!==k.SWIPE&&(a.current=0,p.current=0,N(),P())});n.useEffect(O,[e,O]);const D=T(b=>{w.current=void 0,a.current===b&&f(a.current)}),L=T(b=>{if(!b.ctrlKey&&!(Math.abs(b.deltaY)>Math.abs(b.deltaX)))if(e===k.NONE){if(Math.abs(b.deltaX)<=1.2*Math.abs(h.current)){h.current=b.deltaX;return}if(!o(-b.deltaX))return;if(E.current+=b.deltaX,N(),Math.abs(E.current)>30)E.current=0,h.current=0,p.current=Date.now(),c();else{const S=E.current;_.current=d(()=>{_.current=void 0,S===E.current&&(E.current=0)},s)}}else if(e===k.SWIPE){let S=a.current-b.deltaX;if(S=Math.min(Math.abs(S),r)*Math.sign(S),a.current=S,i(S),P(),Math.abs(S)>.2*r){h.current=b.deltaX,l(S,Date.now()-p.current);return}w.current=d(()=>D(S),2*s)}else h.current=b.deltaX});n.useEffect(()=>t(bt,L),[t,L])}const rt=Fe("container"),Vt=n.createContext(null),de=te("useController","ControllerContext",Vt);function kn({children:e,...t}){var o;const{carousel:r,animation:s,controller:c,on:i,styles:l,render:f}=t,{closeOnPullUp:a,closeOnPullDown:E,preventDefaultWheelX:_,preventDefaultWheelY:w}=c,[h,p]=n.useState(),d=Ce(),m=gn(),[N,P]=n.useState(k.NONE),O=n.useRef(0),D=n.useRef(0),L=n.useRef(1),{registerSensors:b,subscribeSensors:S}=yn(),{subscribe:A,publish:v}=be(),g=Le(),I=Le(),F=Le(),{containerRef:U,setContainerRef:Y,containerRect:R}=Ut(),Ie=nt(Mn({preventDefaultWheelX:_,preventDefaultWheelY:w}),Y),H=n.useRef(null),fe=nt(H,void 0),we=Be(),x=u=>(we?-1:1)*(typeof u=="number"?u:1),K=T(()=>{var u;return(u=U.current)===null||u===void 0?void 0:u.focus()}),ze=T(()=>t),Xe=T(()=>d),pe=n.useCallback(u=>v(Z,u),[v]),he=n.useCallback(u=>v(q,u),[v]),oe=n.useCallback(()=>v(ee),[v]),Se=u=>!(r.finite&&(x(u)>0&&d.currentIndex===0||x(u)<0&&d.currentIndex===d.slides.length-1)),Ke=u=>{var y;O.current=u,(y=U.current)===null||y===void 0||y.style.setProperty(V("swipe_offset"),`${Math.round(u)}px`)},ye=u=>{var y,W;D.current=u,L.current=(()=>{const se=(()=>E&&u>0?u:a&&u<0?-u:0)();return Math.min(Math.max(an(1-se/60*(1-.5),2),.5),1)})(),(y=U.current)===null||y===void 0||y.style.setProperty(V("pull_offset"),`${Math.round(u)}px`),(W=U.current)===null||W===void 0||W.style.setProperty(V("pull_opacity"),`${L.current}`)},{prepareAnimation:Ht}=et(H,(u,y,W)=>{if(H.current&&R)return{keyframes:[{transform:`translate(0, ${u.rect.y-y.y+W.y}px)`,opacity:u.opacity},{transform:"translate(0, 0)",opacity:1}],duration:u.duration,easing:s.easing.fade}}),Ge=(u,y)=>{if(a||E){ye(u);let W=0;H.current&&(W=s.fade*(y?2:1),Ht({rect:H.current.getBoundingClientRect(),opacity:L.current,duration:W})),F(()=>{ye(0),P(k.NONE)},W),P(k.ANIMATION),y||oe()}},{prepareAnimation:Bt,isAnimationPlaying:zt}=et(H,(u,y,W)=>{var z;if(H.current&&R&&(!((z=d.animation)===null||z===void 0)&&z.duration)){const $=xe(r.spacing),se=($.percent?$.percent*R.width/100:$.pixel)||0;return{keyframes:[{transform:`translate(${x(d.globalIndex-u.index)*(R.width+se)+u.rect.x-y.x+W.x}px, 0)`},{transform:"translate(0, 0)"}],duration:d.animation.duration,easing:d.animation.easing}}}),re=T(u=>{var y,W;const z=u.offset||0,$=z?s.swipe:(y=s.navigation)!==null&&y!==void 0?y:s.swipe,se=!z&&!zt()?s.easing.navigation:s.easing.swipe;let{direction:me}=u;const Ee=(W=u.count)!==null&&W!==void 0?W:1;let Oe=k.ANIMATION,X=$*Ee;if(!me){const ie=R==null?void 0:R.width,qe=u.duration||0,Te=ie?$/ie*Math.abs(z):$;Ee!==0?(qe<Te?X=X/Te*Math.max(qe,Te/5):ie&&(X=$/ie*(ie-Math.abs(z))),me=x(z)>0?Z:q):X=$/2}let Re=0;me===Z?Se(x(1))?Re=-Ee:(Oe=k.NONE,X=$):me===q&&(Se(x(-1))?Re=Ee:(Oe=k.NONE,X=$)),X=Math.round(X),I(()=>{Ke(0),P(k.NONE)},X),H.current&&Bt({rect:H.current.getBoundingClientRect(),index:d.globalIndex}),P(Oe),v(Qe,{type:"swipe",increment:Re,duration:X,easing:se})});n.useEffect(()=>{var u,y;!((u=d.animation)===null||u===void 0)&&u.increment&&(!((y=d.animation)===null||y===void 0)&&y.duration)&&g(()=>m({type:"swipe",increment:0}),d.animation.duration)},[d.animation,m,g]);const Ye=[S,Se,(R==null?void 0:R.width)||0,s.swipe,()=>P(k.SWIPE),u=>Ke(u),(u,y)=>re({offset:u,duration:y,count:1}),u=>re({offset:u,count:0})],Xt=[()=>{E&&P(k.PULL)},u=>ye(u),u=>Ge(u),u=>Ge(u,!0)];Tn(...Ye,a,E,...Xt),An(N,...Ye);const je=T(()=>{c.focus&&document.querySelector(`.${C($e)} .${C(rt())}`)&&K()});n.useEffect(je,[je]);const Ze=T(()=>{var u;(u=i.view)===null||u===void 0||u.call(i,{index:d.currentIndex})});n.useEffect(Ze,[d.globalIndex,Ze]),n.useEffect(()=>It(A(Z,u=>re({direction:Z,...u})),A(q,u=>re({direction:q,...u})),A(Qe,u=>m(u))),[A,re,m]);const Kt=n.useMemo(()=>({prev:pe,next:he,close:oe,focus:K,slideRect:R?fn(R,r.padding):{width:0,height:0},containerRect:R||{width:0,height:0},subscribeSensors:S,containerRef:U,setCarouselRef:fe,toolbarWidth:h,setToolbarWidth:p}),[pe,he,oe,K,S,R,U,fe,h,p,r.padding]);return n.useImperativeHandle(c.ref,()=>({prev:pe,next:he,close:oe,focus:K,getLightboxProps:ze,getLightboxState:Xe}),[pe,he,oe,K,ze,Xe]),n.createElement("div",{ref:Ie,className:G(C(rt()),C(mt)),style:{...N===k.SWIPE?{[V("swipe_offset")]:`${Math.round(O.current)}px`}:null,...N===k.PULL?{[V("pull_offset")]:`${Math.round(D.current)}px`,[V("pull_opacity")]:`${L.current}`}:null,...c.touchAction!=="none"?{[V("controller_touch_action")]:c.touchAction}:null,...l.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...b},R&&n.createElement(Vt.Provider,{value:Kt},e,(o=f.controls)===null||o===void 0?void 0:o.call(f)))}const Dn=Q(pt,kn);function j(e){return le(ft,e)}function st(e){return le("slide",e)}function De({slide:e,offset:t}){const o=n.useRef(null),{currentIndex:r}=Ce(),{slideRect:s,close:c}=de(),{render:i,carousel:{imageFit:l,imageProps:f},on:{click:a},controller:{closeOnBackdropClick:E},styles:{slide:_}}=ae(),w=()=>{var p,d,m,N;let P=(p=i.slide)===null||p===void 0?void 0:p.call(i,{slide:e,offset:t,rect:s});return!P&&un(e)&&(P=n.createElement(On,{slide:e,offset:t,render:i,rect:s,imageFit:l,imageProps:f,onClick:t===0?()=>a==null?void 0:a({index:r}):void 0})),P?n.createElement(n.Fragment,null,(d=i.slideHeader)===null||d===void 0?void 0:d.call(i,{slide:e}),((m=i.slideContainer)!==null&&m!==void 0?m:({children:O})=>O)({slide:e,children:P}),(N=i.slideFooter)===null||N===void 0?void 0:N.call(i,{slide:e})):null},h=p=>{const d=o.current,m=p.target instanceof HTMLElement?p.target:void 0;E&&m&&d&&(m===d||Array.from(d.children).find(N=>N===m)&&m.classList.contains(C(en)))&&c()};return n.createElement("div",{ref:o,className:G(C(st()),t===0&&C(st("current")),C(mt)),onClick:h,style:_},w())}function it(){const e=ae().styles.slide;return n.createElement("div",{className:C("slide"),style:e})}function Wn({carousel:e}){const{slides:t,currentIndex:o,globalIndex:r}=Ce(),{setCarouselRef:s}=de(),c=xe(e.spacing),i=xe(e.padding),l=[],f=hn(e,t,1);if(St(t)){for(let a=o-f;a<o;a+=1){const E=r+a-o;l.push(!e.finite||a>=0?n.createElement(De,{key:E,slide:t[(a+f*t.length)%t.length],offset:a-o}):n.createElement(it,{key:E}))}l.push(n.createElement(De,{key:r,slide:t[o],offset:0}));for(let a=o+1;a<=o+f;a+=1){const E=r+a-o;l.push(!e.finite||a<=t.length-1?n.createElement(De,{key:E,slide:t[a%t.length],offset:a-o}):n.createElement(it,{key:E}))}}return n.createElement("div",{ref:s,className:G(C(j()),l.length>0&&C(j("with_slides"))),style:{[`${V(j("slides_count"))}`]:l.length,[`${V(j("spacing_px"))}`]:c.pixel||0,[`${V(j("spacing_percent"))}`]:c.percent||0,[`${V(j("padding_px"))}`]:i.pixel||0,[`${V(j("padding_percent"))}`]:i.percent||0}},l)}const Un=Q(ft,Wn);function $t(){const{carousel:e}=ae(),{slides:t,currentIndex:o}=Ce(),r=t.length===0||e.finite&&o===0,s=t.length===0||e.finite&&o===t.length-1;return{prevDisabled:r,nextDisabled:s}}function Vn(e){var t;const o=Be(),{publish:r}=be(),{animation:s}=ae(),{prevDisabled:c,nextDisabled:i}=$t(),l=((t=s.navigation)!==null&&t!==void 0?t:s.swipe)/2,f=ot(()=>r(Z),l),a=ot(()=>r(q),l),E=T(_=>{switch(_.key){case nn:r(ee);break;case on:(o?i:c)||(o?a:f)();break;case rn:(o?c:i)||(o?f:a)();break}});n.useEffect(()=>e(Pt,E),[e,E])}function ct({label:e,icon:t,renderIcon:o,action:r,onClick:s,disabled:c,style:i}){return n.createElement(kt,{label:e,icon:t,renderIcon:o,className:C(`navigation_${r}`),disabled:c,onClick:s,style:i,...Sn(de().focus,c)})}function $n({render:{buttonPrev:e,buttonNext:t,iconPrev:o,iconNext:r},styles:s}){const{prev:c,next:i,subscribeSensors:l}=de(),{prevDisabled:f,nextDisabled:a}=$t();return Vn(l),n.createElement(n.Fragment,null,e?e():n.createElement(ct,{label:"Previous",action:Z,icon:bn,renderIcon:o,style:s.navigationPrev,disabled:f,onClick:c}),t?t():n.createElement(ct,{label:"Next",action:q,icon:Cn,renderIcon:r,style:s.navigationNext,disabled:a,onClick:i}))}const Fn=Q(Yt,$n),lt=C(Jt),Hn=C(Et);function Bn(e){return"style"in e}function at(e,t,o){const r=window.getComputedStyle(e),s=o?"padding-left":"padding-right",c=o?r.paddingLeft:r.paddingRight,i=e.style.getPropertyValue(s);return e.style.setProperty(s,`${(Pe(c)||0)+t}px`),()=>{i?e.style.setProperty(s,i):e.style.removeProperty(s)}}function zn({noScroll:{disabled:e},children:t}){const o=Be();return ne(()=>{if(e)return()=>{};const r=[],{body:s,documentElement:c}=document,i=Math.round(window.innerWidth-c.clientWidth);if(i>0){r.push(at(s,i,o));const l=s.getElementsByTagName("*");for(let f=0;f<l.length;f+=1){const a=l[f];Bn(a)&&window.getComputedStyle(a).getPropertyValue("position")==="fixed"&&!a.classList.contains(Hn)&&r.push(at(a,i,o))}}return s.classList.add(lt),()=>{s.classList.remove(lt),r.forEach(l=>l())}},[o,e]),n.createElement(n.Fragment,null,t)}const Xn=Q(jt,zn);function ut(e){return le($e,e)}function dt(e,t,o){const r=e.getAttribute(t);return e.setAttribute(t,o),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function Kn({children:e,animation:t,styles:o,className:r,on:s,portal:c,close:i}){const[l,f]=n.useState(!1),[a,E]=n.useState(!1),_=n.useRef([]),w=n.useRef(null),{setTimeout:h}=Ne(),{subscribe:p}=be(),m=Wt()?0:t.fade;n.useEffect(()=>(f(!0),()=>{f(!1),E(!1)}),[]);const N=T(()=>{_.current.forEach(L=>L()),_.current=[]}),P=T(()=>{var L;E(!1),N(),(L=s.exiting)===null||L===void 0||L.call(s),h(()=>{var b;(b=s.exited)===null||b===void 0||b.call(s),i()},m)});n.useEffect(()=>p(ee,P),[p,P]);const O=T(L=>{var b,S,A;L.scrollTop,E(!0),(b=s.entering)===null||b===void 0||b.call(s);const v=(A=(S=L.parentNode)===null||S===void 0?void 0:S.children)!==null&&A!==void 0?A:[];for(let g=0;g<v.length;g+=1){const I=v[g];["TEMPLATE","SCRIPT","STYLE"].indexOf(I.tagName)===-1&&I!==L&&(_.current.push(dt(I,"inert","true")),_.current.push(dt(I,"aria-hidden","true")))}_.current.push(()=>{var g,I;(I=(g=w.current)===null||g===void 0?void 0:g.focus)===null||I===void 0||I.call(g)}),h(()=>{var g;(g=s.entered)===null||g===void 0||g.call(s)},m)}),D=n.useCallback(L=>{L?O(L):N()},[O,N]);return l?Gt.createPortal(n.createElement("div",{ref:D,className:G(r,C("root"),C(ut()),C(Et),a&&C(ut("open"))),role:"presentation","aria-live":"polite",style:{...t.fade!==Ve.animation.fade?{[V("fade_animation_duration")]:`${m}ms`}:null,...t.easing.fade!==Ve.animation.easing.fade?{[V("fade_animation_timing_function")]:t.easing.fade}:null,...o.root},onFocus:L=>{w.current||(w.current=L.relatedTarget)}},e),c.root||document.body):null}const Gn=Q($e,Kn);function Yn({children:e}){return n.createElement(n.Fragment,null,e)}const jn=Q(Zt,Yn);function Zn(e){return le(ht,e)}function qn({toolbar:{buttons:e},render:{buttonClose:t,iconClose:o},styles:r}){const{close:s,setToolbarWidth:c}=de(),{setContainerRef:i,containerRect:l}=Ut();ne(()=>{c(l==null?void 0:l.width)},[c,l==null?void 0:l.width]);const f=()=>t?t():n.createElement(kt,{key:ee,label:"Close",icon:Pn,renderIcon:o,onClick:s});return n.createElement("div",{ref:i,style:r.toolbar,className:C(Zn())},e==null?void 0:e.map(a=>a===ee?f():a))}const Qn=Q(ht,qn);function Ft(e,t){var o;return n.createElement(e.module.component,{key:e.module.name,...t},(o=e.children)===null||o===void 0?void 0:o.map(r=>Ft(r,t)))}function Jn(e,t={}){const{easing:o,...r}=e,{easing:s,...c}=t;return{easing:{...o,...s},...r,...c}}function Lo({carousel:e,animation:t,render:o,toolbar:r,controller:s,noScroll:c,on:i,plugins:l,slides:f,index:a,...E}){const{animation:_,carousel:w,render:h,toolbar:p,controller:d,noScroll:m,on:N,slides:P,index:O,plugins:D,...L}=Ve,{config:b,augmentation:S}=mn([M(Gn,[M(Xn,[M(Dn,[M(Un),M(Qn),M(Fn)])])])],l||D),A=S({animation:Jn(_,t),carousel:{...w,...e},render:{...h,...o},toolbar:{...p,...r},controller:{...d,...s},noScroll:{...m,...c},on:{...N,...i},...L,...E});return A.open?n.createElement(vn,{...A},n.createElement(Ln,{slides:f||P,index:Pe(a||O)},n.createElement(xn,null,n.createElement(En,null,Ft(M(jn,b),A))))):null}export{ee as ACTION_CLOSE,q as ACTION_NEXT,Z as ACTION_PREV,Qe as ACTION_SWIPE,ho as ACTIVE_SLIDE_COMPLETE,po as ACTIVE_SLIDE_ERROR,uo as ACTIVE_SLIDE_LOADING,fo as ACTIVE_SLIDE_PLAYING,mt as CLASS_FLEX_CENTER,mo as CLASS_FULLSIZE,Jt as CLASS_NO_SCROLL,Et as CLASS_NO_SCROLL_PADDING,en as CLASS_SLIDE_WRAPPER,Wn as Carousel,Un as CarouselModule,Pn as CloseIcon,kn as Controller,Vt as ControllerContext,Dn as ControllerModule,sn as ELEMENT_BUTTON,We as ELEMENT_ICON,Pt as EVENT_ON_KEY_DOWN,tn as EVENT_ON_KEY_UP,xt as EVENT_ON_POINTER_CANCEL,vt as EVENT_ON_POINTER_DOWN,Lt as EVENT_ON_POINTER_LEAVE,gt as EVENT_ON_POINTER_MOVE,_t as EVENT_ON_POINTER_UP,bt as EVENT_ON_WHEEL,In as ErrorIcon,Ot as EventsContext,En as EventsProvider,Ct as IMAGE_FIT_CONTAIN,Je as IMAGE_FIT_COVER,kt as IconButton,On as ImageSlide,Lo as Lightbox,Ve as LightboxDefaultProps,Mt as LightboxDispatchContext,Rt as LightboxPropsContext,vn as LightboxPropsProvider,Tt as LightboxStateContext,Ln as LightboxStateProvider,Nn as LoadingIcon,ft as MODULE_CAROUSEL,pt as MODULE_CONTROLLER,Yt as MODULE_NAVIGATION,jt as MODULE_NO_SCROLL,$e as MODULE_PORTAL,Zt as MODULE_ROOT,ht as MODULE_TOOLBAR,$n as Navigation,ct as NavigationButton,Fn as NavigationModule,Cn as NextIcon,zn as NoScroll,Xn as NoScrollModule,to as PLUGIN_CAPTIONS,no as PLUGIN_COUNTER,oo as PLUGIN_DOWNLOAD,ro as PLUGIN_FULLSCREEN,so as PLUGIN_INLINE,io as PLUGIN_SHARE,co as PLUGIN_SLIDESHOW,lo as PLUGIN_THUMBNAILS,ao as PLUGIN_ZOOM,Kn as Portal,Gn as PortalModule,bn as PreviousIcon,Yn as Root,jn as RootModule,_e as SLIDE_STATUS_COMPLETE,ge as SLIDE_STATUS_ERROR,ve as SLIDE_STATUS_LOADING,Qt as SLIDE_STATUS_PLACEHOLDER,qt as SLIDE_STATUS_PLAYING,k as SwipeState,At as TimeoutsContext,xn as TimeoutsProvider,qn as Toolbar,Qn as ToolbarModule,cn as UNKNOWN_ACTION_TYPE,on as VK_ARROW_LEFT,rn as VK_ARROW_RIGHT,nn as VK_ESCAPE,ce as activeSlideStatus,vo as addToolbarButton,hn as calculatePreload,It as cleanup,G as clsx,le as composePrefix,fn as computeSlideRect,ue as createIcon,_o as createIconDisabled,Q as createModule,M as createNode,C as cssClass,V as cssVar,Lo as default,Eo as devicePixelRatio,pn as getSlide,Ue as getSlideIfPresent,wt as getSlideIndex,St as hasSlides,He as hasWindow,dn as isImageFitCover,un as isImageSlide,ln as label,Fe as makeComposePrefix,te as makeUseContext,Pe as parseInt,xe as parseLengthPercentage,an as round,tt as setRef,go as stopNavigationEventsPropagation,et as useAnimation,Ut as useContainerRect,de as useController,Le as useDelay,T as useEventCallback,be as useEvents,nt as useForkRef,Vn as useKeyboardNavigation,ne as useLayoutEffect,gn as useLightboxDispatch,ae as useLightboxProps,Ce as useLightboxState,Sn as useLoseFocus,Wt as useMotionPreference,$t as useNavigationState,Rn as usePointerEvents,Tn as usePointerSwipe,Mn as usePreventWheelDefaults,Be as useRTL,yn as useSensors,ot as useThrottle,Ne as useTimeouts,An as useWheelSwipe,mn as withPlugins};
