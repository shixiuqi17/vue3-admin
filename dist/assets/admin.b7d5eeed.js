import{l as R,j as $,B as H,u as M,C as K,h as F,D as Q,r as p,o as i,c as w,w as n,m as v,F as x,n as s,G as L,H as C,I as k,p as a,t as g,J as S,q as l,T as W,K as P,s as U,v as O,L as T,M as X,z as B,N as Y,E as Z,O as ee,P as te}from"./vendor.27bab175.js";import{_ as N,u as I}from"./index.23228cc7.js";function ne(o){return{all:o=o||new Map,on:function(t,e){var u=o.get(t);u?u.push(e):o.set(t,[e])},off:function(t,e){var u=o.get(t);u&&(e?u.splice(u.indexOf(e)>>>0,1):o.set(t,[]))},emit:function(t,e){var u=o.get(t);u&&u.slice().map(function(c){c(e)}),(u=o.get("*"))&&u.slice().map(function(c){c(t,e)})}}}const D=ne();function V(){const{locale:o}=R();let t=$(!0);return H(o,e=>{t.value=e==="zh-CN"},{immediate:!0}),t}function j(){const o=M(),t=K();let e=$("");return e.value=o.currentRoute.value.fullPath,H(()=>t.path,u=>{e.value=u}),e}const se=F({setup(o){let t=j(),e=$(!1);D.on("isCollapse",d=>{e.value=d}),Q(()=>{D.off("isCollapse")});const u=I();let c=V();return(d,m)=>{const f=p("el-menu-item"),_=p("el-sub-menu"),b=p("el-menu");return i(),w(b,{collapse:a(e),"default-active":a(t),"background-color":"#304156","text-color":"#bfcbd9",class:"el-menu-vertical-demo","unique-opened":"",router:""},{default:n(()=>[(i(!0),v(S,null,x(a(u).menus,(r,h)=>(i(),w(_,{index:h+"",key:h},{title:n(()=>[s("i",{class:L(["menu-icon","iconfont",r.icon])},null,2),C(s("span",null,g(r.title),513),[[k,a(c)]]),C(s("span",null,g(r.name),513),[[k,!a(c)]])]),default:n(()=>[(i(!0),v(S,null,x(r.children,(y,E)=>(i(),w(f,{index:y.routerLink,key:E},{default:n(()=>[C(s("span",null,g(y.title),513),[[k,a(c)]]),C(s("span",null,g(y.name),513),[[k,!a(c)]])]),_:2},1032,["index"]))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["collapse","default-active"])}}});var ae=N(se,[["__scopeId","data-v-eb295ee2"]]),oe="/vue3-admin/assets/15919_100.c3c67b31.gif";const le=o=>(U("data-v-61832758"),o=o(),O(),o),ue=le(()=>s("i",{class:"iconfont icon-notice"},null,-1)),ie=["src"],ce={class:"title"},_e=["src"],re={class:"title"},de=F({setup(o){let t=$(!1);const e=$("notice"),u=[{img:"avatar.gif",title:"\u4EE5\u4E0B\u662F\u6211\u7684\u90AE\u7BB1\u548C\u7535\u8BDD"},{img:"15919_100.gif",title:"shixiuqimail@163.com"},{img:"15918_100.gif",title:"18221497902"}],c=[{img:"15640_100.gif",title:"\u6211\u662F\u7B2C\u4E00\u6761\u7AD9\u5185\u4FE1\uFF01"},{img:"15918_100.gif",title:"\u6211\u662F\u7B2C\u4E8C\u6761\u7AD9\u5185\u4FE1\uFF01"},{img:"15919_100.gif",title:"\u6211\u662F\u7B2C\u4E09\u6761\u7AD9\u5185\u4FE1"}];return(d,m)=>{const f=p("el-badge"),_=p("el-tab-pane"),b=p("el-tabs");return i(),v("div",{class:"notice-wapper",onMouseenter:m[1]||(m[1]=r=>P(t)?t.value=!0:t=!0),onMouseleave:m[2]||(m[2]=r=>P(t)?t.value=!1:t=!1)},[l(f,{value:6},{default:n(()=>[ue]),_:1}),C(l(W,{class:"animate__animated","enter-active-class":"animate__fadeIn","leave-active-class":"animate__fadeOut"},{default:n(()=>[l(b,{modelValue:e.value,"onUpdate:modelValue":m[0]||(m[0]=r=>e.value=r),class:"demo-tabs"},{default:n(()=>[l(_,{label:d.$t("notification"),name:"notice"},{default:n(()=>[(i(),v(S,null,x(u,(r,h)=>s("div",{class:"notice-item",key:h},[s("img",{src:`/src/assets/images/avatar/${r.img}`,alt:""},null,8,ie),s("div",ce,g(r.title),1)])),64))]),_:1},8,["label"]),l(_,{label:d.$t("message",{msg:"\u7AD9\u5185\u4FE1"}),name:"message"},{default:n(()=>[(i(),v(S,null,x(c,(r,h)=>s("div",{class:"notice-item",key:h},[s("img",{src:`/src/assets/images/avatar/${r.img}`,alt:""},null,8,_e),s("div",re,g(r.title),1)])),64))]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1},512),[[k,a(t)]])],32)}}});var me=N(de,[["__scopeId","data-v-61832758"]]);const pe={key:0},ve={key:1},fe={key:0},he={key:1},ge=F({setup(o){let t=I(),e=V();return(u,c)=>{const d=p("el-breadcrumb-item"),m=p("el-breadcrumb");return i(),w(m,{separator:"/"},{default:n(()=>{var f,_;return[l(d,{to:{path:"/"}},{default:n(()=>[a(e)?(i(),v("span",pe,"\u9996\u9875")):(i(),v("span",ve,"home"))]),_:1}),((f=a(t).routeCrumbs)==null?void 0:f.name)!=="home"?(i(!0),v(S,{key:0},x((_=a(t).routeCrumbs)==null?void 0:_.matched,(b,r)=>(i(),w(d,{key:r},{default:n(()=>{var h;return[a(e)?(i(),v("span",fe,g((h=b.meta.menu)==null?void 0:h.title),1)):(i(),v("span",he,g(b.name),1))]}),_:2},1024))),128)):T("",!0)]}),_:1})}}});const q=o=>(U("data-v-4a212d65"),o=o(),O(),o),be={class:"navbar"},Ce={class:"nav-right"},ke={class:"translate"},ye=q(()=>s("span",{class:"el-dropdown-link"},[s("i",{class:"iconfont icon-translate"})],-1)),$e={class:"iconfont icon-tuichuquanping"},we={class:"iconfont icon-quanping"},xe={class:"avatar"},Se=q(()=>s("img",{src:oe,alt:""},null,-1)),Fe={class:"el-dropdown-link"},Ee=q(()=>s("span",null,"admin",-1)),Ne=F({setup(o){const t=M();let e=$(!1);const u=()=>{e.value?document.exitFullscreen():document.documentElement.requestFullscreen(),e.value=!e.value},{locale:c,t:d}=R(),m=h=>{h!==c.value&&(c.value=h,Z({message:d("languageSwitchSucceeded"),type:"success"}))};let f=$(!1);const _=()=>{f.value=!f.value,D.emit("isCollapse",f.value)};let b=X(()=>f.value?"icon-cebianlandanchu":"icon-cebianlanshousuo");const r=()=>{localStorage.removeItem("token"),t.push({name:"login"})};return(h,y)=>{const E=p("el-dropdown-item"),z=p("el-dropdown-menu"),A=p("el-dropdown"),G=p("el-icon");return i(),v("div",be,[s("i",{class:L(["collapse","iconfont",a(b)]),onClick:_},null,2),s("div",null,[l(ge),s("div",Ce,[l(me),s("div",ke,[l(A,null,{dropdown:n(()=>[l(z,null,{default:n(()=>[l(E,{onClick:y[0]||(y[0]=J=>m("zh-CN")),disabled:a(c)==="zh-CN"},{default:n(()=>[B(g(a(d)("chinese")),1)]),_:1},8,["disabled"]),l(E,{onClick:y[1]||(y[1]=J=>m("en-US")),disabled:a(c)==="en-US"},{default:n(()=>[B(g(a(d)("english")),1)]),_:1},8,["disabled"])]),_:1})]),default:n(()=>[ye]),_:1})]),s("div",{class:"fullScreen",onClick:u},[C(s("i",$e,null,512),[[k,a(e)]]),C(s("i",we,null,512),[[k,!a(e)]])]),s("div",xe,[Se,l(A,null,{dropdown:n(()=>[l(z,null,{default:n(()=>[l(E,{onClick:r},{default:n(()=>[B(g(a(d)("logout")),1)]),_:1})]),_:1})]),default:n(()=>[s("span",Fe,[Ee,l(G,{class:"el-icon--right"},{default:n(()=>[l(a(Y))]),_:1})])]),_:1})])])])])}}});var Ie=N(Ne,[["__scopeId","data-v-4a212d65"]]);const Be={class:"history-list"},De=["onClick"],Me=["onClick"],Le=F({setup(o){const t=M();let e=V(),u=j();const c=I(),d=m=>{t.push(m)};return(m,f)=>(i(),v("div",Be,[(i(!0),v(S,null,x(a(c).historyMenu,(_,b)=>(i(),v("div",{key:_.name,class:L(["nav-item",{active:a(u)===_.routerLink}]),onClick:r=>d(_.routerLink)},[C(s("span",null,g(_.title),513),[[k,a(e)]]),C(s("span",null,g(_.name),513),[[k,!a(e)]]),_.name!=="home"?(i(),v("i",{key:0,class:"iconfont icon-close",onClick:ee(r=>a(c).removeHistoryMenu(_,a(u)),["stop"])},null,8,Me)):T("",!0)],10,De))),128))]))}});var Ve=N(Le,[["__scopeId","data-v-645b149f"]]);const qe={class:"common-layout"},ze=F({setup(o){return I().menuInit(),(e,u)=>{const c=p("el-aside"),d=p("el-header"),m=p("router-view"),f=p("el-main"),_=p("el-container");return i(),v("div",qe,[l(_,null,{default:n(()=>[l(c,{width:"auto "},{default:n(()=>[l(ae)]),_:1}),l(_,null,{default:n(()=>[l(d,null,{default:n(()=>[l(Ie),l(Ve)]),_:1}),l(f,null,{default:n(()=>[l(m,null,{default:n(({Component:b})=>[(i(),w(te(b)))]),_:1})]),_:1})]),_:1})]),_:1})])}}});var Re=N(ze,[["__scopeId","data-v-3d348af6"]]);export{Re as default};
