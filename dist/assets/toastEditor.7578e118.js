var n=Object.defineProperty;var i=(o,e,t)=>e in o?n(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var d=(o,e,t)=>(i(o,typeof e!="symbol"?e+"":e,t),t);import{h as l,Q as c,o as s,m as u,j as p,q as _,n as m,t as h,J as v}from"./vendor.27bab175.js";import{_ as f}from"./index.c6dcc374.js";class g{constructor(e,t,a){d(this,"editor");this.height=a,this.editor=new toastui.Editor({el:document.querySelector(e),initialEditType:"markdown",previewStyle:"vertical",height:a,initialValue:t})}}const B={id:"editor"},V=l({props:{modelValue:{default:""},height:{default:500},placeholder:{default:""}},emits:["update:modelValue"],setup(o,{emit:e}){const t=o;return c(()=>{const a=new g("#editor",t.modelValue,`${t.height}px`);a.editor.on("change",r=>{e("update:modelValue",a.editor[r=="markdown"?"getMarkdown":"getHTML"]())})}),(a,r)=>(s(),u("div",B))}});const k=l({setup(o){const e=p("\u521D\u59CB\u5185\u5BB9");return(t,a)=>(s(),u(v,null,[_(V,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r),height:300,placeholder:"\u8BF7\u8F93\u5165markdown\u5185\u5BB9"},null,8,["modelValue"]),m("div",null,h(e.value),1)],64))}});var E=f(k,[["__scopeId","data-v-12b5044b"]]);export{E as default};