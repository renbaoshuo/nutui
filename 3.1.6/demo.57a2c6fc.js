import{c as a}from"./mobile.b0d170d6.js";import{_ as t}from"./index.ccbbeb9f.js";import{m as d,r as n,e as s,j as r,k as e,g as u,B as c,C as l,o}from"./vendor.9cc7b6f2.js";const{createDemo:m}=a("barrage"),i=m({props:{},setup(){const a=d(""),t=d(null);let n=d(["画美不看","不明觉厉","喜大普奔","男默女泪","累觉不爱","爷青结"]);return{inputVal:a,danmu:t,list:n,addDanmu:function(){let a=Math.random();t.value.add("随机——"+String(a).substr(2,10))}}}}),b={class:"demo"},f=(a=>(c("data-v-dc99d5cc"),a=a(),l(),a))((()=>u("h2",null,"基础用法",-1))),p={class:"test"};var v=t(i,[["render",function(a,t,d,c,l,m){const i=n("nut-barrage"),v=n("nut-cell");return o(),s("div",b,[f,r(v,null,{default:e((()=>[r(i,{ref:"danmu",danmu:a.list},null,8,["danmu"])])),_:1}),u("div",p,[u("button",{onClick:t[0]||(t[0]=(...t)=>a.addDanmu&&a.addDanmu(...t)),class:"add nut-button--primary"},"随机添加")])])}],["__scopeId","data-v-dc99d5cc"]]);export{v as default};
