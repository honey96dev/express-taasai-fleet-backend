(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{560:function(e,t,a){},568:function(e,t,a){"use strict";a.r(t);var n=a(71),l=a(1),r=a.n(l),c=a(12),o=a(27),i=a(457),s=a(34),m=a(565),u=a(73),p=a(13),O=a(123),b=a(26),E=a(30),d=a(44),f=e=>new Promise((t,a)=>{Object(b.a)(E.d,d.a.map.drivers,e).then(e=>{t(e)},e=>{a(e)})});a(560),t.default=(()=>{const e=Object(o.b)().t,t=Object(s.c)(e=>e).auth.user,a=Object(l.useState)(!1),b=Object(n.a)(a,2),E=(b[0],b[1]),d=Object(l.useState)([]),R=Object(n.a)(d,2),S=R[0],j=R[1],v=Object(l.useState)({lat:10,lng:76}),A=Object(n.a)(v,2),g=A[0],h=A[1],N=e("NAVBAR.LOCATION.MAP");Object(l.useEffect)(a=>{(a=>{E(!0),f({pageSize:500,userId:t.id}).then(e=>{if(e.result===p.j.SUCCESS){const o=[];let i;var t=!0,a=!1,n=void 0;try{for(var l,r=e.data[Symbol.iterator]();!(t=(l=r.next()).done);t=!0)2===(i=l.value.map_pos.split(" ")).length&&o.push({lat:parseFloat(i[0]),lng:parseFloat(i[1])})}catch(c){a=!0,n=c}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}j(o),o.length&&h(o[0])}else O.b.error(e.message),j([]);E(!1)}).catch(t=>{j([]),O.b.error(e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),E(!1)})})()},[]);return r.a.createElement(l.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("title",null,N," - ",e("SITE_NAME"))),r.a.createElement(c.e,null,r.a.createElement(c.f,null,e("NAVBAR.LOCATION.ROOT")),r.a.createElement(c.f,{active:!0},N)),r.a.createElement(m.c,{id:"map-loader",googleMapsApiKey:"AIzaSyDrQoryIBTY8vSo7pvc1mI77QpYvXgxnRA",libraries:["visualization"]},r.a.createElement(m.a,{id:"map",mapContainerClassName:"map-container",zoom:5,center:g,onLoad:e=>{},onUnmount:e=>{}},S.map((e,t)=>r.a.createElement(m.d,{key:t,position:e,icon:u.a.icons.car,label:e.name},r.a.createElement(m.b,null,r.a.createElement("p",null,e.name)))))))})}}]);