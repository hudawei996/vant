import{c as C,a as b}from"./use-translate.aef3085b.js";import{m as f,t as j,w as _}from"./with-install.796b4cad.js";import{C as k}from"./index.57ab404d.js";import{z as u,e as a,B as x,r as F,o as B,a as h,w as s,A as t,F as v}from"./vue-libs.f710b8ed.js";import{T as m}from"./function-call.aaae010c.js";import"./use-route.7ce7c3ed.js";import"./index.c480cbe8.js";import"./mount-component.e03afee0.js";import"./use-expose.b82056d2.js";import"./index.590c19a0.js";import"./constant.80c6de18.js";import"./interceptor.3dc21389.js";import"./use-touch.8e5a0907.js";import"./use-lazy-render.c4d421a8.js";import"./on-popup-reopen.4b166a39.js";import"./index.bd451b43.js";import"./index.88eab4b6.js";const[y,p,l]=C("contact-card"),E={tel:String,name:String,type:f("add"),addText:String,editable:j};var A=u({name:y,props:E,emits:["click"],setup(e,{emit:n}){const o=c=>{e.editable&&n("click",c)},d=()=>e.type==="add"?e.addText||l("addText"):[a("div",null,[`${l("name")}\uFF1A${e.name}`]),a("div",null,[`${l("tel")}\uFF1A${e.tel}`])];return()=>a(k,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:p([e.type]),border:!1,isLink:e.editable,valueClass:p("value"),onClick:o},{value:d})}});const r=_(A),O=u({setup(e){const n=b({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=x(()=>({name:n("name"),tel:"13000000000"})),d=()=>m(n("add")),c=()=>m(n("edit"));return(w,S)=>{const i=F("demo-block");return B(),h(v,null,[a(i,{title:t(n)("addContact")},{default:s(()=>[a(t(r),{type:"add",onClick:d})]),_:1},8,["title"]),a(i,{title:t(n)("editContact")},{default:s(()=>[a(t(r),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:c},null,8,["name","tel"])]),_:1},8,["title"]),a(i,{title:t(n)("uneditable")},{default:s(()=>[a(t(r),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{O as default};
