(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{488:function(e,t,a){"use strict";var l=a(29),n=a(43),c=a(55);t.a={list:e=>new Promise((t,a)=>{Object(l.a)(n.d,c.a.drivers.list,e).then(e=>{t(e)},e=>{a(e)})}),get:e=>new Promise((t,a)=>{Object(l.a)(n.d,c.a.drivers.get,e).then(e=>{t(e)},e=>{a(e)})}),add:e=>new Promise((t,a)=>{Object(l.a)(n.d,c.a.drivers.add,e).then(e=>{t(e)},e=>{a(e)})}),delete:e=>new Promise((t,a)=>{Object(l.a)(n.d,c.a.drivers.delete,e).then(e=>{t(e)},e=>{a(e)})})}},542:function(e,t,a){},546:function(e,t,a){"use strict";a.r(t);var l=a(67),n=a(1),c=a.n(n),r=a(41),s=a(52),m=a(32),i=a(16),E=a(26),o=a(72),d=a(460),u=a(451),O=a(473),g=a(13),N=a(24);var b=a(130),S=a(177),R=(a(129),({message:e})=>{const t=Object(E.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(S.a,{heading:t("COMMON.ERROR.SORRY"),message:e||t("COMMON.ERROR.NO_DATA")}))}),p=a(540),I=({circle:e,current:t,pageCount:a,width:r,onChange:s})=>{const m=Object(E.b)().t,o=Object(n.useState)([]),d=Object(l.a)(o,2),u=d[0],O=d[1],N="ltr"===m("DIRECTION")?"left":"right",b="ltr"===m("DIRECTION")?"right":"left";return Object(n.useEffect)(e=>{!r&&(r=p.isMobile?g.h.WIDTH_MOBILE:g.h.WIDTH);const l=Math.ceil(r/2);let n=t-l<1?1:t-l,c=t+l-1>a?a:t+l-1;c-n<r&&(1===n&&(c=a<r?a:r),c===a&&(n=a-r+1<1?1:a-r+1));let s=[];for(let t=n;t<=c;t++)s.push(t);O(s)},[t,a,r]),c.a.createElement(n.Fragment,null,a>0&&c.a.createElement(i.z,{circle:e},c.a.createElement(i.x,{disabled:1===t,onClick:()=>s(1)},c.a.createElement(i.y,{className:"page-link"},c.a.createElement(i.m,{icon:"angle-double-".concat(N)}))),c.a.createElement(i.x,{disabled:1===t,onClick:()=>s(t-1)},c.a.createElement(i.y,{className:"page-link"},c.a.createElement(i.m,{icon:"angle-".concat(N)}))),u.map((e,a)=>c.a.createElement(i.x,{key:e,active:e===t,onClick:()=>t!==e&&s(e)},c.a.createElement(i.y,{className:"page-link"},e))),c.a.createElement(i.x,{disabled:t===a,onClick:()=>s(t+1)},c.a.createElement(i.y,{className:"page-link"},c.a.createElement(i.m,{icon:"angle-".concat(b)}))),c.a.createElement(i.x,{disabled:t===a,onClick:()=>s(a)},c.a.createElement(i.y,{className:"page-link"},c.a.createElement(i.m,{icon:"angle-double-".concat(b)})))))},h=a(123),T=a(488),C=({items:e,page:t,detailLink:a,editLink:l,onDelete:n})=>{const r=Object(E.b)().t,m=Object(s.g)(),o=e=>{const l=O.Base64.encode(JSON.stringify({page:t,id:e}));m.push("".concat(a,"/").concat(l))},d=e=>{const a=O.Base64.encode(JSON.stringify({page:t,id:e}));m.push("".concat(l,"/").concat(a))};return c.a.createElement(i.L,{responsive:!0,striped:!0},c.a.createElement(i.N,null,c.a.createElement("tr",{className:""},c.a.createElement("th",{className:"nomer-col"},"#"),c.a.createElement("th",null,r("DRIVERS.FIELDS.NAME")),c.a.createElement("th",null,r("DRIVERS.FIELDS.MOBILE")),c.a.createElement("th",null,r("DRIVERS.FIELDS.VEHICLE")),c.a.createElement("th",null,r("DRIVERS.FIELDS.DOCUMENTS")),c.a.createElement("th",null,r("DRIVERS.FIELDS.BALANCE")),c.a.createElement("th",null,r("DRIVERS.FIELDS.PENDING")),c.a.createElement("th",null,r("DRIVERS.FIELDS.STATUS")),c.a.createElement("th",{className:"edit-col-3"},r("DRIVERS.FIELDS.ACTION")))),c.a.createElement(i.M,null,!!e.length&&e.map((e,t)=>c.a.createElement("tr",{key:t,className:""},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.name),c.a.createElement("td",null,"+",e.dial_code," ",e.mobile_number),c.a.createElement("td",null,e.vehicle_name," - ",e.vehicle_number),c.a.createElement("td",null,r("COMMON.STATUS.".concat(e.is_active?"SUBMITTED":"NOT_SUBMITTED"))),c.a.createElement("td",null,e.balance),c.a.createElement("td",null,e.pending||0),c.a.createElement("td",null,c.a.createElement(i.c,{pill:!0,color:e.is_active?"success":"danger"},r("COMMON.STATUS.".concat(e.is_active?"ENABLED":"DISABLED")))),c.a.createElement("td",{className:"edit-col"},c.a.createElement(i.g,{tag:"a",floating:!0,color:"primary",size:"sm",onClick:t=>!!o&&o(e.id)},c.a.createElement(i.m,{icon:"eye"})),c.a.createElement(i.g,{tag:"a",floating:!0,color:"secondary",size:"sm",className:"mx-2",onClick:t=>!!d&&d(e.id)},c.a.createElement(i.m,{icon:"edit"})),c.a.createElement(i.g,{tag:"a",floating:!0,color:"danger",size:"sm",onClick:a=>!!n&&n({item:e,index:t})},c.a.createElement(i.m,{icon:"trash"})))))))};a(542),t.default=(()=>{const e=Object(s.h)().page,t=Object(E.b)().t,a=Object(s.g)(),S=Object(r.c)(e=>e).auth.user,p=Object(n.useState)(!1),M=Object(l.a)(p,2),j=M[0],D=M[1],k=Object(n.useState)({}),v=Object(l.a)(k,2),L=v[0],f=v[1],A=Object(n.useState)({}),y=Object(l.a)(A,2),w=y[0],_=y[1],B=Object(n.useState)(0),U=Object(l.a)(B,2),V=U[0],x=U[1],F=Object(n.useState)([]),z=Object(l.a)(F,2),J=z[0],P=z[1],W=e?parseInt(e):1,H=t("NAVBAR.DRIVERS.LIST"),K="".concat(N.a.drivers.add,"/").concat(O.Base64.encode(JSON.stringify({page:e}))),q=(N.a.drivers.add,e=>{_(Object.assign({},w,{show:!w.show}))}),G=({id:a})=>{q(),D(!0),T.a.delete({page:e,pageSize:10,id:w.deleteId,userId:S.id}).then(e=>{e.result===g.j.SUCCESS?(x(e.pageCount),P(e.data)):h.b.error(e.message),D(!1)}).catch(e=>{h.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),D(!1)})},Q=e=>{a.push("".concat(N.a.drivers.list,"/").concat(e))},Y=({id:e,item:a})=>{_(Object.assign({},w,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a.name}),deleteId:a.id}))};Object(n.useEffect)(e=>{o.animateScroll.scrollToTop({duration:g.e.TRANSITION_TIME})},[]),Object(n.useMemo)(a=>{D(!0),f({}),T.a.list({page:e,pageSize:10,userId:S.id}).then(e=>{e.result===g.j.SUCCESS?(x(e.pageCount),P(e.data)):h.b.error(e.message),D(!1)}).catch(e=>{h.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),D(!1)})},[e,t]),Object(n.useMemo)(e=>{o.animateScroll.scrollToTop({duration:g.e.TRANSITION_TIME})},[e]);return c.a.createElement(n.Fragment,null,c.a.createElement(d.Helmet,null,c.a.createElement("title",null,H," - ",t("SITE_NAME"))),c.a.createElement(i.e,null,c.a.createElement(i.f,null,t("NAVBAR.DRIVERS.ROOT")),c.a.createElement(i.f,{active:!0},H)),c.a.createElement(i.C,{className:"my-0"},c.a.createElement(i.j,{md:"12",className:"order-1 order-md-0"},c.a.createElement("div",{className:"full-width text-left"},c.a.createElement(m.b,{to:K},c.a.createElement(i.g,{color:"primary",size:"sm",rounded:!0,disabled:!!j},t("COMMON.BUTTON.NEW")))))),c.a.createElement(i.C,null,L.show&&c.a.createElement(i.j,{md:"12"},c.a.createElement(u.a,{in:L.show,classNames:"fade-transition",timeout:g.e.TRANSITION_TIME,unmountOnExit:!0,appear:!0},c.a.createElement(i.b,{color:L.color,dismiss:!0,onClosed:()=>f({})},L.message))),c.a.createElement(i.j,{md:"12"},!!j&&c.a.createElement(b.a,null),!j&&!J.length&&c.a.createElement(R,null),!j&&!!J.length&&c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"my-4 text-center"},c.a.createElement(I,{circle:!0,current:W,pageCount:V,onChange:Q})),c.a.createElement(C,{items:J,page:e,detailLink:N.a.drivers.detail,editLink:N.a.drivers.add,onDelete:Y}),c.a.createElement("div",{className:"mt-4 text-center"},c.a.createElement(I,{circle:!0,current:W,pageCount:V,onChange:Q}))))),c.a.createElement(i.p,{isOpen:!!w.show,toggle:q,centered:!0,backdropClassName:"modal-backdrop"},c.a.createElement(i.s,{toggle:q},w.title),c.a.createElement(i.q,{className:"text-left"},w.message),c.a.createElement(i.r,null,c.a.createElement(i.g,{type:"button",color:"danger",size:"sm",rounded:!0,onClick:G},t("COMMON.BUTTON.DELETE")),c.a.createElement(i.g,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:q},t("COMMON.BUTTON.CANCEL")))))})}}]);