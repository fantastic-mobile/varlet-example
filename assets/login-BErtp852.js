import{_ as b}from"./index-CvTEvMIi.js";import{d as F,v as S,r as p,j as B,w as n,x as R,q as A,k as i,o as D,f as o,h as a,g as d,b as c,y as I,z as U,A as q,B as z}from"./index-CrJgSrrL.js";const G=""+new URL("logo-CvGq432t.png",import.meta.url).href,x=l=>(U("data-v-c2dc40b5"),l=l(),q(),l),N={class:"mx-4 flex flex-1 flex-col justify-center gap-8"},j=x(()=>o("img",{src:G,class:"mx-auto h-24 w-24"},null,-1)),E={class:"px-4"},M={class:"text-center space-x-4"},T=x(()=>o("svg",{width:"100%",viewBox:"0 0 1440 590",xmlns:"http://www.w3.org/2000/svg",class:"svg transition duration-300 delay-150 ease-in-out"},[o("defs",null,[o("linearGradient",{id:"gradient",x1:"0%",y1:"50%",x2:"100%",y2:"50%"},[o("stop",{offset:"5%","stop-color":"#F78DA7"}),o("stop",{offset:"95%","stop-color":"#8ED1FC"})])]),o("path",{d:"M 0,600 L 0,150 C 154.10714285714283,165.39285714285714 308.21428571428567,180.78571428571428 424,163 C 539.7857142857143,145.21428571428572 617.2500000000001,94.25 735,94 C 852.7499999999999,93.75 1010.7857142857142,144.21428571428572 1135,162 C 1259.2142857142858,179.78571428571428 1349.607142857143,164.89285714285714 1440,150 L 1440,600 L 0,600 Z",stroke:"none","stroke-width":"0",fill:"url(#gradient)","fill-opacity":"0.53",class:"path-1 transition-all duration-300 delay-150 ease-in-out"}),o("defs",null,[o("linearGradient",{id:"gradient",x1:"0%",y1:"50%",x2:"100%",y2:"50%"},[o("stop",{offset:"5%","stop-color":"#F78DA7"}),o("stop",{offset:"95%","stop-color":"#8ED1FC"})])]),o("path",{d:"M 0,600 L 0,350 C 144.10714285714286,333.7857142857143 288.2142857142857,317.57142857142856 389,313 C 489.7857142857143,308.42857142857144 547.25,315.5 657,321 C 766.75,326.5 928.7857142857142,330.42857142857144 1068,335 C 1207.2142857142858,339.57142857142856 1323.607142857143,344.7857142857143 1440,350 L 1440,600 L 0,600 Z",stroke:"none","stroke-width":"0",fill:"url(#gradient)","fill-opacity":"1",class:"path-2 transition-all duration-300 delay-150 ease-in-out"})],-1)),Z=F({__name:"login",setup(l){var v;const w=A(),y=R(),h=S(),C=p(((v=y.query.redirect)==null?void 0:v.toString())??"/"),f=p(),t=p({account:"",password:""});function _(){f.value.validate().then(r=>{r&&h.login({account:t.value.account,password:t.value.password}).then(()=>{w.replace(C.value)})})}function m(r){t.value.account=r,t.value.password="123456",I(()=>{_()})}return(r,s)=>{const g=i("var-input"),k=i("var-form"),u=i("var-button"),L=i("var-divider"),V=b;return D(),B(V,{navbar:!1},{default:n(()=>[o("div",N,[j,a(k,{ref_key:"loginFormRef",ref:f},{default:n(()=>[a(g,{modelValue:d(t).account,"onUpdate:modelValue":s[0]||(s[0]=e=>d(t).account=e),placeholder:"用户名",rules:[e=>!!e||"请填写用户名"]},null,8,["modelValue","rules"]),a(g,{modelValue:d(t).password,"onUpdate:modelValue":s[1]||(s[1]=e=>d(t).password=e),type:"password",placeholder:"密码",rules:[e=>!!e||"请填写密码"]},null,8,["modelValue","rules"])]),_:1},512),o("div",E,[a(u,{block:"",type:"primary",onClick:_},{default:n(()=>[c(" 提交 ")]),_:1}),a(L,null,{default:n(()=>[c(" 演示账号一键登录 ")]),_:1}),o("div",M,[a(u,{type:"primary",size:"small",plain:"",onClick:s[2]||(s[2]=e=>m("admin"))},{default:n(()=>[c(" admin ")]),_:1}),a(u,{size:"small",plain:"",onClick:s[3]||(s[3]=e=>m("test"))},{default:n(()=>[c(" test ")]),_:1})])])]),T]),_:1})}}}),H=z(Z,[["__scopeId","data-v-c2dc40b5"]]);export{H as default};
