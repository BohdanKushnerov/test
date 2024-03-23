import{D as z,E as S,N as E,F,A as D,T as $,h as B,f as w,n as R,p as y,e as C,r as m,u as v,j as i}from"./index-cfb00355.js";import{v as M}from"./v4-4a60fe23.js";import{s as A}from"./useResizeWindow-5917eeb9.js";const N=async(t,s,e,a)=>{const n={contentType:"audio/webm"},o=z(S,`audio/webm/${e}/${M()}.webm`);await E(o,t,n);const r=[{type:"audio/webm",name:"voice audio",url:await F(o)}],c="";await D(B(w,`chats/${s}/messages`),{file:r,message:c,senderUserID:a,date:$.now(),isRead:!1}),a&&e&&(await R(C(w,"userChats",a),{[s+".lastMessage"]:`${String.fromCodePoint(127908)} Voice message`,[s+".senderUserID"]:a,[s+".date"]:y()}),await R(C(w,"userChats",e),{[s+".lastMessage"]:`${String.fromCodePoint(127908)} Voice message`,[s+".senderUserID"]:a,[s+".date"]:y()}))},j=(t,s,e,a)=>{const n=t.getContext("2d");if(!n){console.error("Unable to get 2D context for canvas");return}const o=t.width,l=t.height;s.getByteTimeDomainData(e),n.clearRect(0,0,o,l),n.beginPath();const r=o*1/e.length;let c=0;for(let u=0;u<e.length;u++){const h=e[u]/128*l/2;u===0?n.moveTo(c,h):n.lineTo(c,h),c+=r}n.lineTo(t.width,t.height/2),n.stroke(),a.current=requestAnimationFrame(()=>j(t,s,e,a))},L=(t,s,e,a)=>{const n=new window.AudioContext,o=n.createAnalyser();n.createMediaStreamSource(t).connect(o),o.fftSize=256;const r=o.frequencyBinCount,c=new Uint8Array(r);e.current=o;const u=s.current;u&&j(u,o,c,a)},V=({isRecording:t,handleToggleRecordingStatus:s})=>{const e=m.useRef(null),[a,n]=m.useState([]),o=m.useRef(null),l=m.useRef(null),r=m.useRef(null),c=v(d=>d.currentUser.uid),{chatUID:u,userUID:g}=v(d=>d.currentChatInfo),h="audio/webm",x=()=>{if(e.current){const d=e.current.stream.getTracks();d==null||d.forEach(f=>f.stop()),n([])}l.current&&l.current.disconnect()};m.useEffect(()=>()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null),x()},[]),m.useEffect(()=>{t&&(async()=>{const f=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});if(f){const k=new MediaRecorder(f,{mimeType:h});e.current=k,e.current.start();const b=[];e.current.ondataavailable=p=>{typeof p.data>"u"||p.data.size!==0&&b.push(p.data)},n(b),L(f,o,l,r)}})()},[t]);const T=()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null),e.current&&(e.current.stop(),e.current.onstop=async()=>{const d=new Blob(a,{type:h});if(u&&g&&c)try{await N(d,u,g,c),x(),s()}catch(f){console.log("stopRecording error",f)}})};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`absolute top-1/2 right-28 -translate-y-1/2 z-20 flex p-1 gap-2 bg-red-200 rounded-full ${t?"block":"hidden"}`,children:[i.jsx("svg",{width:24,height:24,className:"fill-red-700 ",children:i.jsx("use",{href:A+"#icon-rec"})}),i.jsx("canvas",{ref:o,width:200,height:20})]}),t&&i.jsx(i.Fragment,{children:i.jsx("button",{className:"flex justify-center items-center h-12 w-12 bg-transparent transition-all duration-300 hover:bg-zinc-100/20 hover:dark:bg-zinc-100/10 rounded-full cursor-pointer",type:"button",onClick:T,children:i.jsx("svg",{width:24,height:24,className:"fill-zinc-200 dark:fill-zinc-400",children:i.jsx("use",{href:A+"#icon-stop"})})})})]})};export{V as default};
