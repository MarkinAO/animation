!function(){var t={9662:function(t,r,n){var e=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},6077:function(t,r,n){var e=n(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||e(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:function(t,r,n){var e=n(5112),o=n(30),i=n(3070).f,u=e("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},9670:function(t,r,n){var e=n(111),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,r,n){var e=n(5656),o=n(1400),i=n(6244),u=function(t){return function(r,n,u){var c,a=e(r),f=i(a),s=o(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},2092:function(t,r,n){var e=n(9974),o=n(1702),i=n(8361),u=n(7908),c=n(6244),a=n(5417),f=o([].push),s=function(t){var r=1==t,n=2==t,o=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,b,m,g){for(var d,h,S=u(y),x=i(S),w=e(b,m),O=c(x),j=0,E=g||a,T=r?E(y,O):n||p?E(y,0):void 0;O>j;j++)if((v||j in x)&&(h=w(d=x[j],j,S),t))if(r)T[j]=h;else if(h)switch(t){case 3:return!0;case 5:return d;case 6:return j;case 2:f(T,d)}else switch(t){case 4:return!1;case 7:f(T,d)}return l?-1:o||s?s:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},1589:function(t,r,n){var e=n(1400),o=n(6244),i=n(6135),u=Array,c=Math.max;t.exports=function(t,r,n){for(var a=o(t),f=e(r,a),s=e(void 0===n?a:n,a),l=u(c(s-f,0)),p=0;f<s;f++,p++)i(l,p,t[f]);return l.length=p,l}},206:function(t,r,n){var e=n(1702);t.exports=e([].slice)},7475:function(t,r,n){var e=n(3157),o=n(4411),i=n(111),u=n(5112)("species"),c=Array;t.exports=function(t){var r;return e(t)&&(r=t.constructor,(o(r)&&(r===c||e(r.prototype))||i(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?c:r}},5417:function(t,r,n){var e=n(7475);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},4326:function(t,r,n){var e=n(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,r,n){var e=n(1694),o=n(614),i=n(4326),u=n(5112)("toStringTag"),c=Object,a="Arguments"==i(function(){return arguments}());t.exports=e?i:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=c(t),u))?n:a?i(r):"Object"==(e=i(r))&&o(r.callee)?"Arguments":e}},9920:function(t,r,n){var e=n(2597),o=n(3887),i=n(1236),u=n(3070);t.exports=function(t,r,n){for(var c=o(r),a=u.f,f=i.f,s=0;s<c.length;s++){var l=c[s];e(t,l)||n&&e(n,l)||a(t,l,f(r,l))}}},8544:function(t,r,n){var e=n(7293);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6178:function(t){t.exports=function(t,r){return{value:t,done:r}}},8880:function(t,r,n){var e=n(9781),o=n(3070),i=n(9114);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},9114:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:function(t,r,n){"use strict";var e=n(4948),o=n(3070),i=n(9114);t.exports=function(t,r,n){var u=e(r);u in t?o.f(t,u,i(0,n)):t[u]=n}},8709:function(t,r,n){"use strict";var e=n(9670),o=n(2140),i=TypeError;t.exports=function(t){if(e(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw i("Incorrect hint");return o(this,t)}},7045:function(t,r,n){var e=n(6339),o=n(3070);t.exports=function(t,r,n){return n.get&&e(n.get,r,{getter:!0}),n.set&&e(n.set,r,{setter:!0}),o.f(t,r,n)}},8052:function(t,r,n){var e=n(614),o=n(3070),i=n(6339),u=n(3072);t.exports=function(t,r,n,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:r;if(e(n)&&i(n,f,c),c.global)a?t[r]=n:u(r,n);else{try{c.unsafe?t[r]&&(a=!0):delete t[r]}catch(t){}a?t[r]=n:o.f(t,r,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:function(t,r,n){var e=n(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},9781:function(t,r,n){var e=n(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var r="object"==typeof document&&document.all,n=void 0===r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:n}},317:function(t,r,n){var e=n(7854),o=n(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,r,n){var e=n(317)("span").classList,o=e&&e.constructor&&e.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,r,n){var e,o,i=n(7854),u=n(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,r,n){var e=n(7854),o=n(1236).f,i=n(8880),u=n(8052),c=n(3072),a=n(9920),f=n(4705);t.exports=function(t,r){var n,s,l,p,v,y=t.target,b=t.global,m=t.stat;if(n=b?e:m?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in r){if(p=r[s],l=t.dontCallGetSet?(v=o(n,s))&&v.value:n[s],!f(b?s:y+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:function(t,r,n){var e=n(4374),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(e?u.bind(i):function(){return u.apply(i,arguments)})},9974:function(t,r,n){var e=n(1470),o=n(9662),i=n(4374),u=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?u(t,r):function(){return t.apply(r,arguments)}}},4374:function(t,r,n){var e=n(7293);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,r,n){var e=n(4374),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,r,n){var e=n(9781),o=n(2597),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},5668:function(t,r,n){var e=n(1702),o=n(9662);t.exports=function(t,r,n){try{return e(o(Object.getOwnPropertyDescriptor(t,r)[n]))}catch(t){}}},1470:function(t,r,n){var e=n(4326),o=n(1702);t.exports=function(t){if("Function"===e(t))return o(t)}},1702:function(t,r,n){var e=n(4374),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,r,n){var e=n(7854),o=n(614);t.exports=function(t,r){return arguments.length<2?(n=e[t],o(n)?n:void 0):e[t]&&e[t][r];var n}},8044:function(t,r,n){var e=n(1702),o=n(3157),i=n(614),u=n(4326),c=n(1340),a=e([].push);t.exports=function(t){if(i(t))return t;if(o(t)){for(var r=t.length,n=[],e=0;e<r;e++){var f=t[e];"string"==typeof f?a(n,f):"number"!=typeof f&&"Number"!=u(f)&&"String"!=u(f)||a(n,c(f))}var s=n.length,l=!0;return function(t,r){if(l)return l=!1,r;if(o(this))return r;for(var e=0;e<s;e++)if(n[e]===t)return r}}}},8173:function(t,r,n){var e=n(9662),o=n(8554);t.exports=function(t,r){var n=t[r];return o(n)?void 0:e(n)}},7854:function(t,r,n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,r,n){var e=n(1702),o=n(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:function(t){t.exports={}},490:function(t,r,n){var e=n(5005);t.exports=e("document","documentElement")},4664:function(t,r,n){var e=n(9781),o=n(7293),i=n(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,r,n){var e=n(1702),o=n(7293),i=n(4326),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},9587:function(t,r,n){var e=n(614),o=n(111),i=n(7674);t.exports=function(t,r,n){var u,c;return i&&e(u=r.constructor)&&u!==n&&o(c=u.prototype)&&c!==n.prototype&&i(t,c),t}},2788:function(t,r,n){var e=n(1702),o=n(614),i=n(5465),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,r,n){var e,o,i,u=n(4811),c=n(7854),a=n(111),f=n(8880),s=n(2597),l=n(5465),p=n(6200),v=n(3501),y="Object already initialized",b=c.TypeError,m=c.WeakMap;if(u||l.state){var g=l.state||(l.state=new m);g.get=g.get,g.has=g.has,g.set=g.set,e=function(t,r){if(g.has(t))throw b(y);return r.facade=t,g.set(t,r),r},o=function(t){return g.get(t)||{}},i=function(t){return g.has(t)}}else{var d=p("state");v[d]=!0,e=function(t,r){if(s(t,d))throw b(y);return r.facade=t,f(t,d,r),r},o=function(t){return s(t,d)?t[d]:{}},i=function(t){return s(t,d)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw b("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,r,n){var e=n(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},614:function(t,r,n){var e=n(4154),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4411:function(t,r,n){var e=n(1702),o=n(7293),i=n(614),u=n(648),c=n(5005),a=n(2788),f=function(){},s=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=e(p.exec),y=!p.exec(f),b=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(t){return!1}},m=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(p,a(t))}catch(t){return!0}};m.sham=!0,t.exports=!l||o((function(){var t;return b(b.call)||!b(Object)||!b((function(){t=!0}))||t}))?m:b},4705:function(t,r,n){var e=n(7293),o=n(614),i=/#|\.prototype\./,u=function(t,r){var n=a[c(t)];return n==s||n!=f&&(o(r)?e(r):!!r)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},8554:function(t){t.exports=function(t){return null==t}},111:function(t,r,n){var e=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,r,n){var e=n(5005),o=n(614),i=n(7976),u=n(3307),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=e("Symbol");return o(r)&&i(r.prototype,c(t))}},3061:function(t,r,n){"use strict";var e=n(3383).IteratorPrototype,o=n(30),i=n(9114),u=n(8003),c=n(7497),a=function(){return this};t.exports=function(t,r,n,f){var s=r+" Iterator";return t.prototype=o(e,{next:i(+!f,n)}),u(t,s,!1,!0),c[s]=a,t}},1656:function(t,r,n){"use strict";var e=n(2109),o=n(6916),i=n(1913),u=n(6530),c=n(614),a=n(3061),f=n(9518),s=n(7674),l=n(8003),p=n(8880),v=n(8052),y=n(5112),b=n(7497),m=n(3383),g=u.PROPER,d=u.CONFIGURABLE,h=m.IteratorPrototype,S=m.BUGGY_SAFARI_ITERATORS,x=y("iterator"),w="keys",O="values",j="entries",E=function(){return this};t.exports=function(t,r,n,u,y,m,T){a(n,r,u);var P,k,L,A=function(t){if(t===y&&M)return M;if(!S&&t in C)return C[t];switch(t){case w:case O:case j:return function(){return new n(this,t)}}return function(){return new n(this)}},I=r+" Iterator",F=!1,C=t.prototype,N=C[x]||C["@@iterator"]||y&&C[y],M=!S&&N||A(y),_="Array"==r&&C.entries||N;if(_&&(P=f(_.call(new t)))!==Object.prototype&&P.next&&(i||f(P)===h||(s?s(P,h):c(P[x])||v(P,x,E)),l(P,I,!0,!0),i&&(b[I]=E)),g&&y==O&&N&&N.name!==O&&(!i&&d?p(C,"name",O):(F=!0,M=function(){return o(N,this)})),y)if(k={values:A(O),keys:m?M:A(w),entries:A(j)},T)for(L in k)(S||F||!(L in C))&&v(C,L,k[L]);else e({target:r,proto:!0,forced:S||F},k);return i&&!T||C[x]===M||v(C,x,M,{name:y}),b[r]=M,k}},3383:function(t,r,n){"use strict";var e,o,i,u=n(7293),c=n(614),a=n(111),f=n(30),s=n(9518),l=n(8052),p=n(5112),v=n(1913),y=p("iterator"),b=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(e=o):b=!0),!a(e)||u((function(){var t={};return e[y].call(t)!==t}))?e={}:v&&(e=f(e)),c(e[y])||l(e,y,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:b}},7497:function(t){t.exports={}},6244:function(t,r,n){var e=n(7466);t.exports=function(t){return e(t.length)}},6339:function(t,r,n){var e=n(1702),o=n(7293),i=n(614),u=n(2597),c=n(9781),a=n(6530).CONFIGURABLE,f=n(2788),s=n(9909),l=s.enforce,p=s.get,v=String,y=Object.defineProperty,b=e("".slice),m=e("".replace),g=e([].join),d=c&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),h=String(String).split("String"),S=t.exports=function(t,r,n){"Symbol("===b(v(r),0,7)&&(r="["+m(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!u(t,"name")||a&&t.name!==r)&&(c?y(t,"name",{value:r,configurable:!0}):t.name=r),d&&n&&u(n,"arity")&&t.length!==n.arity&&y(t,"length",{value:n.arity});try{n&&u(n,"constructor")&&n.constructor?c&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=l(t);return u(e,"source")||(e.source=g(h,"string"==typeof r?r:"")),t};Function.prototype.toString=S((function(){return i(this)&&p(this).source||f(this)}),"toString")},4758:function(t){var r=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?n:r)(e)}},30:function(t,r,n){var e,o=n(9670),i=n(6048),u=n(748),c=n(3501),a=n(490),f=n(317),s=n(6200),l="prototype",p="script",v=s("IE_PROTO"),y=function(){},b=function(t){return"<"+p+">"+t+"</"+p+">"},m=function(t){t.write(b("")),t.close();var r=t.parentWindow.Object;return t=null,r},g=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,r,n;g="undefined"!=typeof document?document.domain&&e?m(e):(r=f("iframe"),n="java"+p+":",r.style.display="none",a.appendChild(r),r.src=String(n),(t=r.contentWindow.document).open(),t.write(b("document.F=Object")),t.close(),t.F):m(e);for(var o=u.length;o--;)delete g[l][u[o]];return g()};c[v]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(y[l]=o(t),n=new y,y[l]=null,n[v]=t):n=g(),void 0===r?n:i.f(n,r)}},6048:function(t,r,n){var e=n(9781),o=n(3353),i=n(3070),u=n(9670),c=n(5656),a=n(1956);r.f=e&&!o?Object.defineProperties:function(t,r){u(t);for(var n,e=c(r),o=a(r),f=o.length,s=0;f>s;)i.f(t,n=o[s++],e[n]);return t}},3070:function(t,r,n){var e=n(9781),o=n(4664),i=n(3353),u=n(9670),c=n(4948),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";r.f=e?i?function(t,r,n){if(u(t),r=c(r),u(n),"function"==typeof t&&"prototype"===r&&"value"in n&&v in n&&!n[v]){var e=s(t,r);e&&e[v]&&(t[r]=n.value,n={configurable:p in n?n[p]:e[p],enumerable:l in n?n[l]:e[l],writable:!1})}return f(t,r,n)}:f:function(t,r,n){if(u(t),r=c(r),u(n),o)try{return f(t,r,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},1236:function(t,r,n){var e=n(9781),o=n(6916),i=n(5296),u=n(9114),c=n(5656),a=n(4948),f=n(2597),s=n(4664),l=Object.getOwnPropertyDescriptor;r.f=e?l:function(t,r){if(t=c(t),r=a(r),s)try{return l(t,r)}catch(t){}if(f(t,r))return u(!o(i.f,t,r),t[r])}},1156:function(t,r,n){var e=n(4326),o=n(5656),i=n(8006).f,u=n(1589),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"Window"==e(t)?function(t){try{return i(t)}catch(t){return u(c)}}(t):i(o(t))}},8006:function(t,r,n){var e=n(6324),o=n(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,r){r.f=Object.getOwnPropertySymbols},9518:function(t,r,n){var e=n(2597),o=n(614),i=n(7908),u=n(6200),c=n(8544),a=u("IE_PROTO"),f=Object,s=f.prototype;t.exports=c?f.getPrototypeOf:function(t){var r=i(t);if(e(r,a))return r[a];var n=r.constructor;return o(n)&&r instanceof n?n.prototype:r instanceof f?s:null}},7976:function(t,r,n){var e=n(1702);t.exports=e({}.isPrototypeOf)},6324:function(t,r,n){var e=n(1702),o=n(2597),i=n(5656),u=n(1318).indexOf,c=n(3501),a=e([].push);t.exports=function(t,r){var n,e=i(t),f=0,s=[];for(n in e)!o(c,n)&&o(e,n)&&a(s,n);for(;r.length>f;)o(e,n=r[f++])&&(~u(s,n)||a(s,n));return s}},1956:function(t,r,n){var e=n(6324),o=n(748);t.exports=Object.keys||function(t){return e(t,o)}},5296:function(t,r){"use strict";var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},7674:function(t,r,n){var e=n(5668),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=e(Object.prototype,"__proto__","set"))(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return o(n),i(e),r?t(n,e):n.__proto__=e,n}}():void 0)},288:function(t,r,n){"use strict";var e=n(1694),o=n(648);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,r,n){var e=n(6916),o=n(614),i=n(111),u=TypeError;t.exports=function(t,r){var n,c;if("string"===r&&o(n=t.toString)&&!i(c=e(n,t)))return c;if(o(n=t.valueOf)&&!i(c=e(n,t)))return c;if("string"!==r&&o(n=t.toString)&&!i(c=e(n,t)))return c;throw u("Can't convert object to primitive value")}},3887:function(t,r,n){var e=n(5005),o=n(1702),i=n(8006),u=n(5181),c=n(9670),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(c(t)),n=u.f;return n?a(r,n(t)):r}},857:function(t,r,n){var e=n(7854);t.exports=e},4488:function(t,r,n){var e=n(8554),o=TypeError;t.exports=function(t){if(e(t))throw o("Can't call method on "+t);return t}},8003:function(t,r,n){var e=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,r,n){t&&!n&&(t=t.prototype),t&&!o(t,i)&&e(t,i,{configurable:!0,value:r})}},6200:function(t,r,n){var e=n(2309),o=n(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,r,n){var e=n(7854),o=n(3072),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,r,n){var e=n(1913),o=n(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.31.1",mode:e?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:function(t,r,n){var e=n(1702),o=n(9303),i=n(1340),u=n(4488),c=e("".charAt),a=e("".charCodeAt),f=e("".slice),s=function(t){return function(r,n){var e,s,l=i(u(r)),p=o(n),v=l.length;return p<0||p>=v?t?"":void 0:(e=a(l,p))<55296||e>56319||p+1===v||(s=a(l,p+1))<56320||s>57343?t?c(l,p):e:t?f(l,p,p+2):s-56320+(e-55296<<10)+65536}};t.exports={codeAt:s(!1),charAt:s(!0)}},3111:function(t,r,n){var e=n(1702),o=n(4488),i=n(1340),u=n(1361),c=e("".replace),a=RegExp("^["+u+"]+"),f=RegExp("(^|[^"+u+"])["+u+"]+$"),s=function(t){return function(r){var n=i(o(r));return 1&t&&(n=c(n,a,"")),2&t&&(n=c(n,f,"$1")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},6293:function(t,r,n){var e=n(7392),o=n(7293),i=n(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},6532:function(t,r,n){var e=n(6916),o=n(5005),i=n(5112),u=n(8052);t.exports=function(){var t=o("Symbol"),r=t&&t.prototype,n=r&&r.valueOf,c=i("toPrimitive");r&&!r[c]&&u(r,c,(function(t){return e(n,this)}),{arity:1})}},2015:function(t,r,n){var e=n(6293);t.exports=e&&!!Symbol.for&&!!Symbol.keyFor},863:function(t,r,n){var e=n(1702);t.exports=e(1..valueOf)},1400:function(t,r,n){var e=n(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},5656:function(t,r,n){var e=n(8361),o=n(4488);t.exports=function(t){return e(o(t))}},9303:function(t,r,n){var e=n(4758);t.exports=function(t){var r=+t;return r!=r||0===r?0:e(r)}},7466:function(t,r,n){var e=n(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,r,n){var e=n(4488),o=Object;t.exports=function(t){return o(e(t))}},7593:function(t,r,n){var e=n(6916),o=n(111),i=n(2190),u=n(8173),c=n(2140),a=n(5112),f=TypeError,s=a("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var n,a=u(t,s);if(a){if(void 0===r&&(r="default"),n=e(a,t,r),!o(n)||i(n))return n;throw f("Can't convert object to primitive value")}return void 0===r&&(r="number"),c(t,r)}},4948:function(t,r,n){var e=n(7593),o=n(2190);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},1694:function(t,r,n){var e={};e[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},1340:function(t,r,n){var e=n(648),o=String;t.exports=function(t){if("Symbol"===e(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t){var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,r,n){var e=n(1702),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,r,n){var e=n(6293);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,r,n){var e=n(9781),o=n(7293);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,r,n){var e=n(7854),o=n(614),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},6800:function(t,r,n){var e=n(857),o=n(2597),i=n(6061),u=n(3070).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},6061:function(t,r,n){var e=n(5112);r.f=e},5112:function(t,r,n){var e=n(7854),o=n(2309),i=n(2597),u=n(9711),c=n(6293),a=n(3307),f=e.Symbol,s=o("wks"),l=a?f.for||f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)||(s[t]=c&&i(f,t)?f[t]:l("Symbol."+t)),s[t]}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6992:function(t,r,n){"use strict";var e=n(5656),o=n(1223),i=n(7497),u=n(9909),c=n(3070).f,a=n(1656),f=n(6178),s=n(1913),l=n(9781),p="Array Iterator",v=u.set,y=u.getterFor(p);t.exports=a(Array,"Array",(function(t,r){v(this,{type:p,target:e(t),index:0,kind:r})}),(function(){var t=y(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,f(void 0,!0)):f("keys"==n?e:"values"==n?r[e]:[e,r[e]],!1)}),"values");var b=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&l&&"values"!==b.name)try{c(b,"name",{value:"values"})}catch(t){}},6078:function(t,r,n){var e=n(2597),o=n(8052),i=n(8709),u=n(5112)("toPrimitive"),c=Date.prototype;e(c,u)||o(c,u,i)},8862:function(t,r,n){var e=n(2109),o=n(5005),i=n(2104),u=n(6916),c=n(1702),a=n(7293),f=n(614),s=n(2190),l=n(206),p=n(8044),v=n(6293),y=String,b=o("JSON","stringify"),m=c(/./.exec),g=c("".charAt),d=c("".charCodeAt),h=c("".replace),S=c(1..toString),x=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,j=!v||a((function(){var t=o("Symbol")();return"[null]"!=b([t])||"{}"!=b({a:t})||"{}"!=b(Object(t))})),E=a((function(){return'"\\udf06\\ud834"'!==b("\udf06\ud834")||'"\\udead"'!==b("\udead")})),T=function(t,r){var n=l(arguments),e=p(r);if(f(e)||void 0!==t&&!s(t))return n[1]=function(t,r){if(f(e)&&(r=u(e,this,y(t),r)),!s(r))return r},i(b,null,n)},P=function(t,r,n){var e=g(n,r-1),o=g(n,r+1);return m(w,t)&&!m(O,o)||m(O,t)&&!m(w,e)?"\\u"+S(d(t,0),16):t};b&&e({target:"JSON",stat:!0,arity:3,forced:j||E},{stringify:function(t,r,n){var e=l(arguments),o=i(j?T:b,null,e);return E&&"string"==typeof o?h(o,x,P):o}})},9653:function(t,r,n){"use strict";var e=n(2109),o=n(1913),i=n(9781),u=n(7854),c=n(857),a=n(1702),f=n(4705),s=n(2597),l=n(9587),p=n(7976),v=n(2190),y=n(7593),b=n(7293),m=n(8006).f,g=n(1236).f,d=n(3070).f,h=n(863),S=n(3111).trim,x="Number",w=u[x],O=c[x],j=w.prototype,E=u.TypeError,T=a("".slice),P=a("".charCodeAt),k=f(x,!w(" 0o1")||!w("0b1")||w("+0x1")),L=function(t){var r,n=arguments.length<1?0:w(function(t){var r=y(t,"number");return"bigint"==typeof r?r:function(t){var r,n,e,o,i,u,c,a,f=y(t,"number");if(v(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(r=P(f,0))||45===r){if(88===(n=P(f,2))||120===n)return NaN}else if(48===r){switch(P(f,1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+f}for(u=(i=T(f,2)).length,c=0;c<u;c++)if((a=P(i,c))<48||a>o)return NaN;return parseInt(i,e)}return+f}(r)}(t));return p(j,r=this)&&b((function(){h(r)}))?l(Object(n),this,L):n};L.prototype=j,k&&!o&&(j.constructor=L),e({global:!0,constructor:!0,wrap:!0,forced:k},{Number:L});var A=function(t,r){for(var n,e=i?m(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;e.length>o;o++)s(r,n=e[o])&&!s(t,n)&&d(t,n,g(r,n))};o&&O&&A(c[x],O),(k||o)&&A(c[x],w)},9660:function(t,r,n){var e=n(2109),o=n(6293),i=n(7293),u=n(5181),c=n(7908);e({target:"Object",stat:!0,forced:!o||i((function(){u.f(1)}))},{getOwnPropertySymbols:function(t){var r=u.f;return r?r(c(t)):[]}})},1539:function(t,r,n){var e=n(1694),o=n(8052),i=n(288);e||o(Object.prototype,"toString",i,{unsafe:!0})},8783:function(t,r,n){"use strict";var e=n(8710).charAt,o=n(1340),i=n(9909),u=n(1656),c=n(6178),a="String Iterator",f=i.set,s=i.getterFor(a);u(String,"String",(function(t){f(this,{type:a,string:o(t),index:0})}),(function(){var t,r=s(this),n=r.string,o=r.index;return o>=n.length?c(void 0,!0):(t=e(n,o),r.index+=t.length,c(t,!1))}))},4032:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(6916),u=n(1702),c=n(1913),a=n(9781),f=n(6293),s=n(7293),l=n(2597),p=n(7976),v=n(9670),y=n(5656),b=n(4948),m=n(1340),g=n(9114),d=n(30),h=n(1956),S=n(8006),x=n(1156),w=n(5181),O=n(1236),j=n(3070),E=n(6048),T=n(5296),P=n(8052),k=n(7045),L=n(2309),A=n(6200),I=n(3501),F=n(9711),C=n(5112),N=n(6061),M=n(6800),_=n(6532),R=n(8003),D=n(9909),G=n(2092).forEach,q=A("hidden"),V="Symbol",H="prototype",z=D.set,U=D.getterFor(V),B=Object[H],$=o.Symbol,W=$&&$[H],Y=o.TypeError,X=o.QObject,J=O.f,K=j.f,Q=x.f,Z=T.f,tt=u([].push),rt=L("symbols"),nt=L("op-symbols"),et=L("wks"),ot=!X||!X[H]||!X[H].findChild,it=a&&s((function(){return 7!=d(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=J(B,r);e&&delete B[r],K(t,r,n),e&&t!==B&&K(B,r,e)}:K,ut=function(t,r){var n=rt[t]=d(W);return z(n,{type:V,tag:t,description:r}),a||(n.description=r),n},ct=function(t,r,n){t===B&&ct(nt,r,n),v(t);var e=b(r);return v(n),l(rt,e)?(n.enumerable?(l(t,q)&&t[q][e]&&(t[q][e]=!1),n=d(n,{enumerable:g(0,!1)})):(l(t,q)||K(t,q,g(1,{})),t[q][e]=!0),it(t,e,n)):K(t,e,n)},at=function(t,r){v(t);var n=y(r),e=h(n).concat(pt(n));return G(e,(function(r){a&&!i(ft,n,r)||ct(t,r,n[r])})),t},ft=function(t){var r=b(t),n=i(Z,this,r);return!(this===B&&l(rt,r)&&!l(nt,r))&&(!(n||!l(this,r)||!l(rt,r)||l(this,q)&&this[q][r])||n)},st=function(t,r){var n=y(t),e=b(r);if(n!==B||!l(rt,e)||l(nt,e)){var o=J(n,e);return!o||!l(rt,e)||l(n,q)&&n[q][e]||(o.enumerable=!0),o}},lt=function(t){var r=Q(y(t)),n=[];return G(r,(function(t){l(rt,t)||l(I,t)||tt(n,t)})),n},pt=function(t){var r=t===B,n=Q(r?nt:y(t)),e=[];return G(n,(function(t){!l(rt,t)||r&&!l(B,t)||tt(e,rt[t])})),e};f||($=function(){if(p(W,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,r=F(t),n=function(t){this===B&&i(n,nt,t),l(this,q)&&l(this[q],r)&&(this[q][r]=!1),it(this,r,g(1,t))};return a&&ot&&it(B,r,{configurable:!0,set:n}),ut(r,t)},P(W=$[H],"toString",(function(){return U(this).tag})),P($,"withoutSetter",(function(t){return ut(F(t),t)})),T.f=ft,j.f=ct,E.f=at,O.f=st,S.f=x.f=lt,w.f=pt,N.f=function(t){return ut(C(t),t)},a&&(k(W,"description",{configurable:!0,get:function(){return U(this).description}}),c||P(B,"propertyIsEnumerable",ft,{unsafe:!0}))),e({global:!0,constructor:!0,wrap:!0,forced:!f,sham:!f},{Symbol:$}),G(h(et),(function(t){M(t)})),e({target:V,stat:!0,forced:!f},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!f,sham:!a},{create:function(t,r){return void 0===r?d(t):at(d(t),r)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:st}),e({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:lt}),_(),R($,V),I[q]=!0},1817:function(t,r,n){"use strict";var e=n(2109),o=n(9781),i=n(7854),u=n(1702),c=n(2597),a=n(614),f=n(7976),s=n(1340),l=n(7045),p=n(9920),v=i.Symbol,y=v&&v.prototype;if(o&&a(v)&&(!("description"in y)||void 0!==v().description)){var b={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),r=f(y,this)?new v(t):void 0===t?v():v(t);return""===t&&(b[r]=!0),r};p(m,v),m.prototype=y,y.constructor=m;var g="Symbol(test)"==String(v("test")),d=u(y.valueOf),h=u(y.toString),S=/^Symbol\((.*)\)[^)]+$/,x=u("".replace),w=u("".slice);l(y,"description",{configurable:!0,get:function(){var t=d(this);if(c(b,t))return"";var r=h(t),n=g?w(r,7,-1):x(r,S,"$1");return""===n?void 0:n}}),e({global:!0,constructor:!0,forced:!0},{Symbol:m})}},763:function(t,r,n){var e=n(2109),o=n(5005),i=n(2597),u=n(1340),c=n(2309),a=n(2015),f=c("string-to-symbol-registry"),s=c("symbol-to-string-registry");e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var r=u(t);if(i(f,r))return f[r];var n=o("Symbol")(r);return f[r]=n,s[n]=r,n}})},2165:function(t,r,n){n(6800)("iterator")},2526:function(t,r,n){n(4032),n(763),n(6620),n(8862),n(9660)},6620:function(t,r,n){var e=n(2109),o=n(2597),i=n(2190),u=n(6330),c=n(2309),a=n(2015),f=c("symbol-to-string-registry");e({target:"Symbol",stat:!0,forced:!a},{keyFor:function(t){if(!i(t))throw TypeError(u(t)+" is not a symbol");if(o(f,t))return f[t]}})},6649:function(t,r,n){var e=n(6800),o=n(6532);e("toPrimitive"),o()},3948:function(t,r,n){var e=n(7854),o=n(8324),i=n(8509),u=n(6992),c=n(8880),a=n(5112),f=a("iterator"),s=a("toStringTag"),l=u.values,p=function(t,r){if(t){if(t[f]!==l)try{c(t,f,l)}catch(r){t[f]=l}if(t[s]||c(t,s,r),o[r])for(var n in u)if(t[n]!==u[n])try{c(t,n,u[n])}catch(r){t[n]=u[n]}}};for(var v in o)p(e[v]&&e[v].prototype,v);p(i,"DOMTokenList")}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,n){if("object"!==t(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}n(6649),n(6078),n(2526),n(1817),n(1539),n(9653),n(2165),n(6992),n(8783),n(3948);var e=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=r}var n,e;return n=t,(e=[{key:"init",value:function(){this.container.innerHTML='\n        \x3c!-- Callback Chat --\x3e\n        <div class="callback-wrap">\n          <div class="callback-button"></div>\n          <form class="form">\n              <div class="title">\n                <div>Напишите нам</div>\n                <span class="cross">&#215;</span>\n              </div>      \n              <input class="input" type="text">\n              <button class="btn">Отправить</button>\n            </form>\n        </div>',this.subscribeToEvents()}},{key:"subscribeToEvents",value:function(){var t=this,r=document.querySelector(".callback-button"),n=document.querySelector(".cross"),e=function(){t.container.querySelector(".form").classList.toggle("active"),r.classList.toggle("hidden")};e=e.bind(this),r.addEventListener("click",e),n.addEventListener("click",e)}}])&&r(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,"string");if("object"!==o(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e.key),"symbol"===o(i)?i:String(i)),e)}var i}var u=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=r}var r,n;return r=t,(n=[{key:"init",value:function(){this.container.innerHTML='\n        \x3c!-- Callback Chat --\x3e\n        <div class="wrap">\n            <button class="button">Collapse</button>\n            <div class="hint">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam beatae pariatur quis dolores quidem molestias, voluptates accusantium voluptate at doloribus maxime quos aperiam eius ex cumque exercitationem, qui itaque!  </div>\n        </div>',this.subscribeToEvents()}},{key:"subscribeToEvents",value:function(){document.querySelector(".button").addEventListener("click",this.onClick)}},{key:"onClick",value:function(){var t=document.querySelector(".hint");t.classList.toggle("move"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px"}}])&&i(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,"string");if("object"!==c(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e.key),"symbol"===c(o)?o:String(o)),e)}var o}var f=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=r}var r,n;return r=t,(n=[{key:"init",value:function(){this.container.innerHTML='\n        \x3c!-- Liker --\x3e\n        <div class="liker-wrap">\n            <button class="liker">Like</button>\n        </div>',this.subscribeToEvents()}},{key:"subscribeToEvents",value:function(){document.querySelector(".liker").addEventListener("click",this.onClick)}},{key:"onClick",value:function(t){var r=["track1","track2","track3","track4"][Math.round(3*Math.random())],n=document.createElement("div");n.classList.add("like"),n.style.animationName=r,t.target.after(n),n.addEventListener("animationend",(function(){return n.remove()}))}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();new u(document.querySelector(".task1")).init(),new e(document.querySelector(".task2")).init(),new f(document.querySelector(".task3")).init()}()}();
//# sourceMappingURL=main.js.map