(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{460:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,i){module.exports=i(e)}("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var i={},r=0,n=e.length;r<n;r++)i[e.charAt(r)]=r;return i}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(i=e.charCodeAt(0))<128?e:i<2048?fromCharCode(192|i>>>6)+fromCharCode(128|63&i):fromCharCode(224|i>>>12&15)+fromCharCode(128|i>>>6&63)+fromCharCode(128|63&i);var i=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|i>>>18&7)+fromCharCode(128|i>>>12&63)+fromCharCode(128|i>>>6&63)+fromCharCode(128|63&i)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var i=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),i>=2?"=":b64chars.charAt(r>>>6&63),i>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,i){return i?_encode(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var i=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(i>>>10))+fromCharCode(56320+(1023&i));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var i=e.length,r=i%4,n=(i>0?b64tab[e.charAt(0)]<<18:0)|(i>1?b64tab[e.charAt(1)]<<12:0)|(i>2?b64tab[e.charAt(2)]<<6:0)|(i>3?b64tab[e.charAt(3)]:0),o=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return o.length-=[0,0,2,1][r],o.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(e){return encode(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__(48))},492:function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,o=r(1),t=(n=o)&&"object"===typeof n&&"default"in n?n.default:n,s=new(r(551)),a=s.getBrowser(),l=(s.getCPU(),s.getDevice()),d=s.getEngine(),u=s.getOS(),c=s.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},b=function(e){var i=m();return i&&(i.platform.includes(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,i){return(C=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E="mobile",A="tablet",x="smarttv",S="console",O="wearable",N=void 0,k="Chrome",B="Firefox",T="Opera",P="Yandex",F="Safari",V="Internet Explorer",M="Edge",j="Chromium",D="IE",R="Mobile Safari",L="iOS",W="Android",I="Windows Phone",z={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},U=function(e,i,r,n,o){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(r.name),engineVersion:w(r.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(o)}},q=function(e,i,r,n){return function(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?v(r,!0).forEach(function(i){p(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(r.name),osVersion:w(r.version),ua:w(n)})},G=function(e,i,r,n){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(n)}},K=function(e,i,r,n){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(n)}},H=function(e,i,r,n){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(n)}},Y=function(e){switch(e){case E:return{isMobile:!0};case A:return{isTablet:!0};case x:return{isSmartTV:!0};case S:return{isConsole:!0};case O:return{isWearable:!0};case N:return{isBrowser:!0};default:return z}}(l.type);var X=l.type===x,Z=l.type===S,Q=l.type===O,$=a.name===R,J=a.name===j,ee=function(){switch(l.type){case E:case A:return!0;default:return!1}}(),ie=l.type===E,re=l.type===A,ne=l.type===N,oe=u.name===W,te=u.name===I,se=u.name===L,ae=a.name===k,le=a.name===B,de=a.name===F||a.name===R,ue=a.name===T,ce=a.name===V||a.name===D,we=w(u.version),me=w(u.name),be=w(a.version),fe=w(a.major),he=w(a.name),pe=w(l.vendor),ge=w(l.model),ve=w(d.name),ye=w(d.version),Ce=w(c),_e=a.name===M,Ee=a.name===P,Ae=w(l.type,"browser"),xe=function(){var e=m();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),Se=b("iPad"),Oe=b("iPhone"),Ne=b("iPod"),ke=function(){var e=m(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&i.includes("electron")}();i.AndroidView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return oe?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.BrowserView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return ne?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.ConsoleView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return Z?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.CustomView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return e.condition?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.IEView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return ce?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.IOSView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return se?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return ie?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.MobileView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return ee?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.SmartTVView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return X?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.TabletView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return re?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.WearableView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return Q?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,r=e.children,n=e.viewClassName,s=e.style;return te?i?t.createElement(o.Fragment,null,r):t.createElement("div",{className:n,style:s},r):null},i.browserName=he,i.browserVersion=fe,i.deviceDetect=function(){var e=Y.isBrowser,i=Y.isMobile,r=Y.isTablet,n=Y.isSmartTV,o=Y.isConsole,t=Y.isWearable;return e?U(e,a,d,u,c):n?G(n,d,u,c):o?K(o,d,u,c):i?q(Y,l,u,c):r?q(Y,l,u,c):t?H(t,d,u,c):void 0},i.deviceType=Ae,i.engineName=ve,i.engineVersion=ye,i.fullBrowserVersion=be,i.getUA=Ce,i.isAndroid=oe,i.isBrowser=ne,i.isChrome=ae,i.isChromium=J,i.isConsole=Z,i.isEdge=_e,i.isElectron=ke,i.isFirefox=le,i.isIE=ce,i.isIOS=se,i.isIOS13=xe,i.isIPad13=Se,i.isIPhone13=Oe,i.isIPod13=Ne,i.isMobile=ee,i.isMobileOnly=ie,i.isMobileSafari=$,i.isOpera=ue,i.isSafari=de,i.isSmartTV=X,i.isTablet=re,i.isWearable=Q,i.isWinPhone=te,i.isYandex=Ee,i.mobileModel=ge,i.mobileVendor=pe,i.osName=me,i.osVersion=we,i.withOrientationChange=function(e){return function(i){function r(e){var i,n,o;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(i=!(o=y(r).call(this,e))||"object"!==typeof o&&"function"!==typeof o?_(n):o).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(_(i)),i.onOrientationChange=i.onOrientationChange.bind(_(i)),i.onPageLoad=i.onPageLoad.bind(_(i)),i.state={isLandscape:!1,isPortrait:!1},i}var n,o,s;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&C(e,i)}(r,t.Component),n=r,(o=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":f(window))&&ee&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,g({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&h(n.prototype,o),s&&h(n,s),r}()}},551:function(e,i,r){var n;!function(o,t){"use strict";var s="model",a="name",l="type",d="vendor",u="version",c="mobile",w="tablet",m="smarttv",b={extend:function(e,i){var r={};for(var n in e)i[n]&&i[n].length%2===0?r[n]=i[n].concat(e[n]):r[n]=e[n];return r},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f={rgx:function(e,i){for(var r,n,o,t,s,a,l=0;l<i.length&&!s;){var d=i[l],u=i[l+1];for(r=n=0;r<d.length&&!s;)if(s=d[r++].exec(e))for(o=0;o<u.length;o++)a=s[++n],"object"===typeof(t=u[o])&&t.length>0?2==t.length?"function"==typeof t[1]?this[t[0]]=t[1].call(this,a):this[t[0]]=t[1]:3==t.length?"function"!==typeof t[1]||t[1].exec&&t[1].test?this[t[0]]=a?a.replace(t[1],t[2]):void 0:this[t[0]]=a?t[1].call(this,a,t[2]):void 0:4==t.length&&(this[t[0]]=a?t[3].call(this,a.replace(t[1],t[2])):void 0):this[t]=a||void 0;l+=2}},str:function(e,i){for(var r in i)if("object"===typeof i[r]&&i[r].length>0){for(var n=0;n<i[r].length;n++)if(b.has(i[r][n],e))return"?"===r?void 0:r}else if(b.has(i[r],e))return"?"===r?void 0:r;return e}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},p={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],u],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,f.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,d,[l,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[d,"Apple"],[l,w]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[d,"Apple"],[l,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,s,[l,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[d,"Amazon"],[l,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,f.str,h.device.amazon.model],[d,"Amazon"],[l,c]],[/android.+aft([bms])\sbuild/i],[s,[d,"Amazon"],[l,m]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,d,[l,c]],[/\((ip[honed|\s\w*]+);/i],[s,[d,"Apple"],[l,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,s,[l,c]],[/\(bb10;\s(\w+)/i],[s,[d,"BlackBerry"],[l,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[d,"Asus"],[l,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[s,"Xperia Tablet"],[l,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[d,"Sony"],[l,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,s,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[d,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[d,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[d,f.str,h.device.sprint.vendor],[s,f.str,h.device.sprint.model],[l,c]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[s,/_/g," "],[l,c]],[/(nexus\s9)/i],[s,[d,"HTC"],[l,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[s,[d,"Huawei"],[l,c]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[d,"Huawei"],[l,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,s,[l,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[d,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[d,"Microsoft"],[l,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[d,"Motorola"],[l,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[d,"Motorola"],[l,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,b.trim],[s,b.trim],[l,m]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[d,"Samsung"],[l,m]],[/\(dtv[\);].+(aquos)/i],[s,[d,"Sharp"],[l,m]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],s,[l,w]],[/smart-tv.+(samsung)/i],[d,[l,m],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],s,[l,c]],[/sie-(\w*)/i],[s,[d,"Siemens"],[l,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],s,[l,c]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[d,"Acer"],[l,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[d,"LG"],[l,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],s,[l,w]],[/(lg) netcast\.tv/i],[d,s,[l,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[d,"LG"],[l,c]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,s,[l,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[d,"Lenovo"],[l,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,s,[l,c]],[/linux;.+((jolla));/i],[d,s,[l,c]],[/((pebble))app\/[\d\.]+\s/i],[d,s,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,s,[l,c]],[/crkey/i],[[s,"Chromecast"],[d,"Google"],[l,m]],[/android.+;\s(glass)\s\d/i],[s,[d,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[d,"Google"],[l,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[d,"Google"],[l,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[d,"Xiaomi"],[l,c]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[d,"Xiaomi"],[l,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[d,"Meizu"],[l,c]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],s,[l,c]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[d,"OnePlus"],[l,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[d,"RCA"],[l,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[d,"Dell"],[l,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[d,"Verizon"],[l,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[d,"Barnes & Noble"],s,[l,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[d,"NuVision"],[l,w]],[/android.+;\s(k88)\sbuild/i],[s,[d,"ZTE"],[l,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[d,"Swiss"],[l,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[d,"Swiss"],[l,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[d,"Zeki"],[l,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],s,[l,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[d,"Insignia"],[l,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[d,"NextBook"],[l,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],s,[l,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],s,[l,c]],[/android.+;\s(PH-1)\s/i],[s,[d,"Essential"],[l,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[d,"Envizen"],[l,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,s,[l,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[d,"MachSpeed"],[l,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,s,[l,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[d,"Rotor"],[l,w]],[/android.+(KS(.+))\s+build/i],[s,[d,"Amazon"],[l,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,s,[l,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,b.lowerize],d,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,m]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[d,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,f.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,f.str,h.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},g=function e(i,r){if("object"===typeof i&&(r=i,i=void 0),!(this instanceof e))return new e(i,r).getResult();var n=i||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),t=r?b.extend(p,r):p;return this.getBrowser=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,t.browser),e.major=b.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return f.rgx.call(e,n,t.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return f.rgx.call(e,n,t.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,t.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};g.VERSION="0.7.21",g.BROWSER={NAME:a,MAJOR:"major",VERSION:u},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:s,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:c,SMARTTV:m,TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:u},g.OS={NAME:a,VERSION:u},"undefined"!==typeof i?("undefined"!==typeof e&&e.exports&&(i=e.exports=g),i.UAParser=g):void 0===(n=function(){return g}.call(i,r,i,e))||(e.exports=n);var v=o&&(o.jQuery||o.Zepto);if(v&&!v.ua){var y=new g;v.ua=y.getResult(),v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var r in i)v.ua[r]=i[r]}}}("object"===typeof window?window:this)}}]);