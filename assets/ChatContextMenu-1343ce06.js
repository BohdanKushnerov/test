import{i as h,u as n,j as t}from"./index-cfb00355.js";import{C as x,D as f}from"./DeleteButton-b1cf50c0.js";import{s as g}from"./useResizeWindow-5917eeb9.js";import"./ChatPage-c08dbd11.js";import"./LoaderUIActions-a782f21d.js";import"./useCloseModal-c43e9243.js";const M=({textContent:c=!0})=>{const{t:l}=h(),o=n(e=>e.isSelectedMessages),a=n(e=>e.updateIsSelectedMessages),r=n(e=>e.updateSelectedDocDataMessage),i=()=>{o?(r(null),a(!1)):a(!0)};return t.jsxs("button",{className:"flex items-center justify-between w-full px-8 py-2 text-white transition-all duration-150 hover:cursor-pointer hover:bg-zinc-600/90 hover:rounded-md",onClick:i,"aria-label":"Select message",children:[t.jsx("svg",{width:16,height:16,children:t.jsx("use",{href:g+"#icon-select",fill:"#FFFFFF"})}),c&&t.jsx("span",{className:"text-base",children:l("ContextMenu.Select")})]})},j=({groupedMessages:c,textContent:l=!0,color:o})=>{const{t:a}=h(),{chatUID:r}=n(s=>s.currentChatInfo),i=n(s=>s.updateEditingMessage),e=n(s=>s.selectedDocDataMessage),m=n(s=>s.resetSelectedMessages),p=()=>{if(!c)return;const s=Object.values(c).reduce((d,u)=>d.concat(u),[]);if(r&&s&&e&&e.length===1){const d={selectedMessage:e[0],isLastMessage:e[0].id===s[s.length-1].id};i(d),m(),document.getElementById("chatFormInput").focus()}};return t.jsxs("button",{className:"flex items-center justify-between w-full px-8 py-2 text-white hover:cursor-pointer hover:bg-zinc-600/90 hover:rounded-md",onClick:p,"aria-label":"Edit message",children:[t.jsx("svg",{width:20,height:20,children:t.jsx("use",{href:g+"#icon-pencil",fill:o})}),l&&t.jsx("span",{className:"text-base",children:a("ContextMenu.Edit")})]})},E=({groupedMessages:c})=>{var r,i;const l=n(e=>e.currentUser.uid),o=n(e=>e.isSelectedMessages),a=n(e=>e.selectedDocDataMessage);return t.jsx(t.Fragment,{children:!o&&a&&t.jsxs("div",{className:`w-56 h-56 p-2 bg-myBlackBcg rounded-3xl pointer-events-auto ${o&&"hidden"}`,children:[a.length===1&&((i=(r=a[0])==null?void 0:r.data())==null?void 0:i.senderUserID)===l&&t.jsx(j,{groupedMessages:c,color:"white"}),t.jsx(x,{white:"white",dark:"white"}),t.jsx(f,{color:"white"}),t.jsx(M,{color:"white"})]})})};export{E as default};