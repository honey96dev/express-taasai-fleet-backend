(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{559:function(e,t,a){},568:function(e,t,a){"use strict";a.r(t);var n=a(67),r=a(1),l=a.n(r),c=a(16),o=a(26),i=a(456),s=a(40),u=a(565),m=a(73),p=a(13),O=a(123),b=a(29),E=a(42),d=a(54),f=e=>new Promise((t,a)=>{Object(b.a)(E.d,d.a.map.drivers,e).then(e=>{t(e)},e=>{a(e)})});a(559),t.default=(()=>{const e=Object(o.b)().t,t=Object(s.c)(e=>e).auth.user,a=Object(r.useState)(!1),b=Object(n.a)(a,2),E=(b[0],b[1]),d=Object(r.useState)([]),R=Object(n.a)(d,2),S=R[0],j=R[1],v=Object(r.useState)({lat:10,lng:76}),A=Object(n.a)(v,2),g=A[0],h=A[1],N=e("NAVBAR.LOCATION.MAP");Object(r.useEffect)(a=>{(a=>{E(!0),f({pageSize:500,userId:t.id}).then(e=>{if(e.result===p.j.SUCCESS){const o=[];let i;var t=!0,a=!1,n=void 0;try{for(var r,l=e.data[Symbol.iterator]();!(t=(r=l.next()).done);t=!0)2===(i=r.value.map_pos.split(" ")).length&&o.push({lat:parseFloat(i[0]),lng:parseFloat(i[1])})}catch(c){a=!0,n=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}j(o),o.length&&h(o[0])}else O.b.error(e.message),j([]);E(!1)}).catch(t=>{j([]),O.b.error(e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),E(!1)})})()},[]);return l.a.createElement(r.Fragment,null,l.a.createElement(i.Helmet,null,l.a.createElement("title",null,N," - ",e("SITE_NAME"))),l.a.createElement(c.e,null,l.a.createElement(c.f,null,e("NAVBAR.LOCATION.ROOT")),l.a.createElement(c.f,{active:!0},N)),l.a.createElement(u.b,{id:"map-loader",googleMapsApiKey:"AIzaSyDrQoryIBTY8vSo7pvc1mI77QpYvXgxnRA",libraries:["visualization"]},l.a.createElement(u.a,{id:"map",mapContainerClassName:"map-container",zoom:5,center:g,onLoad:e=>{},onUnmount:e=>{}},S.map((e,t)=>l.a.createElement(u.c,{key:t,position:e,icon:m.a.icons.car})))))})}}]);