(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{470:function(e,t,a){"use strict";var l=a(472);t.a={isEmail:e=>{return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:e=>{return/^[0-9a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:e=>{try{return Object(l.b)(e)}catch(t){return!1}},isURL:e=>e.startsWith("http://")||e.startsWith("https://")}},544:function(e,t,a){"use strict";a.r(t);var l=a(67),n=a(1),s=a.n(n),m=a(26),r=a(32),i=a(16),c=a(452),o=a(72),u=a(456),E=a(466),d=a(465),b=a(13),N=(a(470),a(73)),h=a(23),O=a(123),S=a(89);a(545);t.default=(e=>{const t=Object(m.b)().t,a=Object(n.useState)(!1),A=Object(l.a)(a,2),g=A[0],T=A[1],p=Object(n.useState)({}),I=Object(l.a)(p,2),w=I[0],R=I[1],f={email:""},x=d.b().shape({email:d.d().required(t("COMMON.VALIDATION.REQUIRED",{field:t("AUTH.EMAIL")})).email(t("COMMON.VALIDATION.INVALID",{field:t("AUTH.EMAIL")}))}),M=({email:e},{setSubmitting:a})=>{const l={email:e};T(!0),a(!0),S.a.sendForgotPasswordMail(l).then(e=>{e.result===b.j.SUCCESS?O.b.success(e.message):O.b.error(e.message),T(!1),a(!1)}).catch(e=>{O.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),T(!1),a(!1)})};Object(n.useEffect)(()=>{o.animateScroll.scrollToTop({duration:b.e.TRANSITION_TIME})},[e]),Object(n.useMemo)(e=>{},[t]);return s.a.createElement(n.Fragment,null,s.a.createElement(u.Helmet,null,s.a.createElement("title",null,t("AUTH.FORGOT_PASSWORD")," - ",t("SITE_NAME"))),s.a.createElement("div",{className:"admin-nav text-center"},s.a.createElement("img",{className:"logo-img mt-3 mb-5",src:N.a.logo.logo100})),s.a.createElement(i.h,{className:"auth-bg"},s.a.createElement(i.i,{className:"mx-md-4 mx-sm-1"},s.a.createElement(i.D,{className:"text-center"},s.a.createElement(i.j,{className:"col-12 underlined white-border"},s.a.createElement("p",{className:"text-white h5"},t("AUTH.FORGOT_PASSWORD")))),s.a.createElement(E.a,{initialValues:f,validationSchema:x,onSubmit:M},({values:{email:e},errors:a,touched:l,handleChange:n,handleSubmit:m,handleBlur:o,isSubmitting:u})=>s.a.createElement("form",{onSubmit:m},s.a.createElement("div",{className:"white-text mt-5"},s.a.createElement(i.o,{id:"email",name:"email",type:"email",icon:"envelope",label:t("AUTH.EMAIL"),background:!0,value:e,onChange:n,onBlur:o},!!l.email&&!!a.email&&s.a.createElement("div",{className:"text-left invalid-field2"},a.email))),s.a.createElement(c.a,{in:w.show,classNames:"fade-transition",timeout:b.e.TRANSITION_TIME,unmountOnExit:!0,appear:!0},s.a.createElement(i.b,{color:w.color,onClosed:()=>R({})},w.message)),s.a.createElement("div",{className:"text-center mt-4 mb-3 mx-5"},s.a.createElement(i.g,{type:"submit",color:"white",rounded:!0,className:"full-width z-depth-1a blue-grey-text",disabled:g},!g&&s.a.createElement(i.m,{icon:"lock"}),!!g&&s.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),t("AUTH.RESET_PASSWORD"))),s.a.createElement("p",{className:"font-small white-text d-flex justify-content-end pb-3"},s.a.createElement(r.b,{className:"ml-1 white-text",to:h.a.auth.signIn},t("AUTH.SIGN_IN"))))))))})},545:function(e,t,a){}}]);