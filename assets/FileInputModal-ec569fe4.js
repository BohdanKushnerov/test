import{j as e,r as w,i as E,u as $,D as W,E as K,U as _,F as q,A as G,h as H,f as y,T as J,n as R,e as F,p as B}from"./index-cfb00355.js";import{M as Q}from"./ModalWindow-b977f238.js";import V from"./ButtonClose-0cdfd75f.js";import{L}from"./Line-bdebc499.js";import{F as X,d as Y}from"./ChatPage-c08dbd11.js";import{v as Z}from"./v4-4a60fe23.js";import"./useCloseModal-c43e9243.js";import"./useResizeWindow-5917eeb9.js";import"./LoaderUIActions-a782f21d.js";const ee=({file:s,status:n})=>e.jsxs("li",{className:"flex justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:URL.createObjectURL(s),alt:`Image ${s.name}`,width:48,height:48}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-black dark:text-white w-24 2xl:w-64",children:s.name}),e.jsx("p",{className:"text-gray-500",children:(s.size/1024).toFixed(2)+" KB"})]})]}),n>=0&&e.jsx(L,{style:{width:150},percent:n,strokeWidth:6,strokeColor:"#5ee987"})]},s.name),se=({fileType:s,file:n,status:d})=>e.jsxs("li",{className:"flex justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12",children:e.jsx(X,{extension:s,...Y[s]})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-white w-24 2xl:w-64",children:n.name}),e.jsx("p",{className:"text-gray-500",children:(n.size/1024).toFixed(2)+" KB"})]})]}),d>=0&&e.jsx(L,{style:{width:150},percent:d,strokeWidth:6,strokeColor:"#5ee987"})]},n.name),me=({hiddenFileInput:s,setIsModalAddFileOpen:n,handleToggleModal:d})=>{var N,U,k;const[o,j]=w.useState(""),[x,b]=w.useState({}),M=w.useRef(null),{t:m}=E("translation",{keyPrefix:"FileInput"}),c=$(t=>t.currentUser.uid),{chatUID:l,userUID:u}=$(t=>t.currentChatInfo),v=()=>{n(!1),o&&j(""),s.current&&(s.current.value="")},I=async t=>{var h;if(t.preventDefault(),(h=s.current)!=null&&h.files&&c){try{const p=Array.from(s.current.files).map(async a=>{const T={contentType:a.type},A=W(K,`${a.type}/${u}/${Z()}-${a.name}`),S=new Blob([a]),C=_(A,S,T);return new Promise((D,z)=>{C.on("state_changed",r=>{const i=r.bytesTransferred/r.totalBytes*100;b(g=>({...g,[a.name]:i}))},r=>{console.log("error",r)},async()=>{try{const r=await q(C.snapshot.ref);if(a.type.includes("image")){const i=new Image;i.src=URL.createObjectURL(S),i.onload=()=>{const g=i.width,O=i.height;D({type:a.type,name:a.name,url:r,width:g,height:O})}}else D({type:a.type,name:a.name,url:r})}catch(r){z(r)}})})}),f=await Promise.all(p);await G(H(y,`chats/${l}/messages`),{file:f,message:o||"",senderUserID:c,date:J.now(),isRead:!1}),c&&u&&(await R(F(y,"userChats",c),{[l+".lastMessage"]:`${String.fromCodePoint(128206)} ${f.length} file(s) ${o}`,[l+".senderUserID"]:c,[l+".date"]:B()}),await R(F(y,"userChats",u),{[l+".lastMessage"]:`${String.fromCodePoint(128206)} ${f.length} file(s) ${o}`,[l+".senderUserID"]:c,[l+".date"]:B()}))}catch(p){console.error("error handleManageSendFile",p)}b({}),v()}},P=t=>{j(t.target.value)};return e.jsx(Q,{handleToggleModal:d,children:e.jsx("div",{className:"h-full flex justify-center items-center",children:e.jsxs("div",{className:"relative w-full sm:w-1/2 xl:w-1/3 h-1/2 flex flex-col gap-8 justify-between items-center p-2 bg-gray-200 dark:bg-myBlackBcg rounded-3xl shadow-mainShadow",children:[e.jsx("p",{className:"text-black dark:text-white font-extrabold",children:`${m("Send")} ${(U=(N=s.current)==null?void 0:N.files)==null?void 0:U.length} ${m("Files")}`}),e.jsx(V,{handleClickButtonClose:v}),e.jsx("div",{ref:M,className:"w-full h-full overflow-scroll",children:e.jsx("ul",{className:"flex flex-col gap-2",children:((k=s.current)==null?void 0:k.files)&&Array.from(s.current.files).map(t=>{if(t.type.includes("image"))return e.jsx(ee,{status:x[t.name],file:t},t.name);{const h=t.name.split(".").pop()||"default";return e.jsx(se,{file:t,fileType:h,status:x[t.name]},t.name)}})})}),e.jsxs("form",{className:"w-full flex items-center gap-4 h-8 px-6",onSubmit:I,children:[e.jsx("div",{className:"relative w-full h-10 sm:w-8/12 ",children:e.jsx("input",{className:"w-full h-full py-1 px-10 rounded-3xl bg-zinc-500 dark:bg-mySeacrhBcg text-white outline-none border-2 border-transparent focus:border-cyan-500",type:"text",placeholder:m("ImageCaptionPlaceholder"),value:o,onChange:P})}),e.jsx("button",{className:"px-2 py-1 border border-gray-600 rounded-full text-black dark:text-white transition-all duration-300 hover:shadow-mainShadow hover:bg-zinc-400 hover:dark:bg-gray-800",type:"submit",disabled:Object.keys(x).length>0,"aria-label":"Send",children:m("Send")})]})]})})})};export{me as default};