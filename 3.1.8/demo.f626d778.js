var A=Object.defineProperty,y=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var C=(n,a,l)=>a in n?A(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,D=(n,a)=>{for(var l in a||(a={}))T.call(a,l)&&C(n,l,a[l]);if(E)for(var l of E(a))v.call(a,l)&&C(n,l,a[l]);return n},p=(n,a)=>y(n,g(a));import{c as k}from"./mobile.c9816155.js";import{_ as w}from"./index.8673f28e.js";import{a as L,A as S,r as c,e as h,j as e,k as u,c as f,s as x,B as I,C as j,g as t,o as _,F as N,i as V,t as $,l as R}from"./vendor.d721e0a0.js";const{createDemo:q}=k("tab"),z=q({props:{},setup(){const n=L({editList:[{title:"\u6807\u7B7E\u4E00"},{title:"\u6807\u7B7E\u4E8C"}]});function a(){n.editList.push({title:"\u6807\u7B7E"+n.editList.length})}function l(F,i){console.log(F,i)}return p(D({},S(n)),{changeList:a,switchTab:l})}}),s=n=>(I("data-v-ee9ef398"),n=n(),j(),n),G={class:"demo full"},H=s(()=>t("h2",null,"\u57FA\u7840\u7528\u6CD5\uFF0C\u9ED8\u8BA4tab-title\u5BBD\u5EA6\u5747\u5206\u76F8\u7B49",-1)),J=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9",-1)),K=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9",-1)),M=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9",-1)),O=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9",-1)),P=s(()=>t("h2",null,"defaultIndex\u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793Atab,iconType\u4E3Ahalf\u65F6\u5207\u6362\u9009\u4E2Dicon\u6837\u5F0F",-1)),Q=s(()=>t("h2",null,"switchTab\u76D1\u542C\u5207\u6362tab\u8FD4\u56DE\u4E8B\u4EF6",-1)),U=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9",-1)),W=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9",-1)),X=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9",-1)),Y=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9",-1)),Z=s(()=>t("h2",null," animatedTime \u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B\u65F6\u95F4",-1)),uu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9",-1)),tu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9",-1)),eu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9",-1)),su=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9",-1)),ou=s(()=>t("h2",null," \u7981\u6B62tab\u5185\u5BB9\u6ED1\u52A8",-1)),nu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9",-1)),au=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9",-1)),lu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9",-1)),Bu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9",-1)),cu=s(()=>t("h2",null,' \u8BBE\u7F6EscrollType="scroll"\uFF0C\u6807\u7B7E\u680F\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u6EDA\u52A8\uFF0C\u5207\u6362\u65F6\u4F1A\u81EA\u52A8\u5C06\u5F53\u524D\u6807\u7B7E\u5C45\u4E2D\u3002',-1)),_u=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9",-1)),Fu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9",-1)),iu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9",-1)),du=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9",-1)),Eu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u53D6\u6D88\u5185\u5BB9",-1)),Cu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u8BC4\u4EF7\u5185\u5BB9",-1)),Du=s(()=>t("h2",null,"\u8BBE\u7F6Eslot:header\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E",-1)),pu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9",-1)),hu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9",-1)),fu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9",-1)),ru=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9",-1)),bu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u53D6\u6D88\u5185\u5BB9",-1)),mu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u8BC4\u4EF7\u5185\u5BB9",-1)),Au=s(()=>t("h2",null,"\u5DE6\u53F3tab\u5E03\u5C40",-1)),yu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u4E00\u5185\u5BB9",-1)),gu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u4E8C\u5185\u5BB9",-1)),Tu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u4E09\u5185\u5BB9",-1)),vu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u56DB\u5185\u5BB9",-1)),ku=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u4E94\u5185\u5BB9",-1)),wu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u516D\u5185\u5BB9",-1)),Lu=s(()=>t("p",{class:"content"},"\u8FD9\u91CC\u662F\u9875\u7B7E\u4E03\u5185\u5BB9",-1)),Su=s(()=>t("h2",null,"\u5F02\u6B65\u64CD\u4F5C",-1)),xu={class:"content"},Iu=R("\u6539\u53D8\u6570\u636E");function ju(n,a,l,F,i,Nu){const o=c("nut-tab-panel"),B=c("nut-tab"),r=c("nut-icon"),b=c("nut-button");return _(),h("div",G,[H,e(B,null,{default:u(()=>[e(o,{"tab-title":"\u5168\u90E8"},{default:u(()=>[J]),_:1}),e(o,{"tab-title":"\u5F85\u4ED8\u6B3E"},{default:u(()=>[K]),_:1}),e(o,{"tab-title":"\u5F85\u6536\u83B7"},{default:u(()=>[M]),_:1}),e(o,{"tab-title":"\u5DF2\u5B8C\u6210"},{default:u(()=>[O]),_:1})]),_:1}),P,Q,e(B,{"default-index":1,onSwitchTab:n.switchTab,"icon-type":"half"},{default:u(()=>[e(o,{"tab-title":"\u5168\u90E8"},{default:u(()=>[U]),_:1}),e(o,{"tab-title":"\u5F85\u4ED8\u6B3E"},{default:u(()=>[W]),_:1}),e(o,{"tab-title":"\u5F85\u6536\u83B7"},{default:u(()=>[X]),_:1}),e(o,{"tab-title":"\u5DF2\u5B8C\u6210"},{default:u(()=>[Y]),_:1})]),_:1},8,["onSwitchTab"]),Z,e(B,{"animated-time":500},{default:u(()=>[e(o,{"tab-title":"\u5168\u90E8"},{default:u(()=>[uu]),_:1}),e(o,{"tab-title":"\u5F85\u4ED8\u6B3E"},{default:u(()=>[tu]),_:1}),e(o,{"tab-title":"\u5F85\u6536\u83B7"},{default:u(()=>[eu]),_:1}),e(o,{"tab-title":"\u5DF2\u5B8C\u6210"},{default:u(()=>[su]),_:1})]),_:1}),ou,e(B,{"no-swiping":!0},{default:u(()=>[e(o,{"tab-title":"\u5168\u90E8"},{default:u(()=>[nu]),_:1}),e(o,{"tab-title":"\u5F85\u4ED8\u6B3E"},{default:u(()=>[au]),_:1}),e(o,{"tab-title":"\u5F85\u6536\u83B7"},{default:u(()=>[lu]),_:1}),e(o,{"tab-title":"\u5DF2\u5B8C\u6210"},{default:u(()=>[Bu]),_:1})]),_:1}),cu,e(B,{"animated-time":500,scrollType:"scroll"},{default:u(()=>[e(o,{"tab-title":"\u5168\u90E8"},{default:u(()=>[_u]),_:1}),e(o,{"tab-title":"\u5F85\u4ED8\u6B3E"},{default:u(()=>[Fu]),_:1}),e(o,{"tab-title":"\u5F85\u6536\u83B7"},{default:u(()=>[iu]),_:1}),e(o,{"tab-title":"\u5DF2\u5B8C\u6210"},{default:u(()=>[du]),_:1}),e(o,{"tab-title":"\u5DF2\u53D6\u6D88"},{default:u(()=>[Eu]),_:1}),e(o,{"tab-title":"\u5F85\u8BC4\u4EF7"},{default:u(()=>[Cu]),_:1})]),_:1}),Du,e(B,{scrollType:"scroll"},{default:u(()=>[e(o,{"tab-title":"\u5168\u90E8"},{header:u(()=>[e(r,{name:"dongdong"})]),default:u(()=>[pu]),_:1}),e(o,{"tab-title":"\u5F85\u4ED8\u6B3E"},{default:u(()=>[hu]),_:1}),e(o,{"tab-title":"\u5F85\u6536\u83B7"},{default:u(()=>[fu]),_:1}),e(o,{"tab-title":"\u5DF2\u5B8C\u6210"},{default:u(()=>[ru]),_:1}),e(o,{"tab-title":"\u5DF2\u53D6\u6D88"},{default:u(()=>[bu]),_:1}),e(o,{"tab-title":"\u5F85\u8BC4\u4EF7"},{default:u(()=>[mu]),_:1})]),_:1}),Au,e(B,{direction:"vertical","animated-time":500,"default-index":2,scrollType:"scroll","icon-type":"half"},{default:u(()=>[e(o,{"tab-title":"\u9875\u7B7E\u4E00"},{default:u(()=>[yu]),_:1}),e(o,{"tab-title":"\u9875\u7B7E\u4E8C"},{default:u(()=>[gu]),_:1}),e(o,{"tab-title":"\u9875\u7B7E\u4E09"},{default:u(()=>[Tu]),_:1}),e(o,{"tab-title":"\u9875\u7B7E\u56DB"},{default:u(()=>[vu]),_:1}),e(o,{"tab-title":"\u9875\u7B7E\u4E94"},{default:u(()=>[ku]),_:1}),e(o,{"tab-title":"\u9875\u7B7E\u516D"},{default:u(()=>[wu]),_:1}),e(o,{"tab-title":"\u9875\u7B7E\u4E03"},{default:u(()=>[Lu]),_:1})]),_:1}),Su,n.editList.length>0?(_(),f(B,{key:0,"animated-time":500},{default:u(()=>[(_(!0),h(N,null,V(n.editList,(m,d)=>(_(),f(o,{"tab-title":m.title,key:d},{default:u(()=>[t("p",xu,"\u8FD9\u91CC\u662F\u9875\u7B7E"+$(d)+"\u5185\u5BB9",1)]),_:2},1032,["tab-title"]))),128))]),_:1})):x("",!0),e(b,{type:"primary",onClick:n.changeList},{default:u(()=>[Iu]),_:1},8,["onClick"])])}var zu=w(z,[["render",ju],["__scopeId","data-v-ee9ef398"]]);export{zu as default};