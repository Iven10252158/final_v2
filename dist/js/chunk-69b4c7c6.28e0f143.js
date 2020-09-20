(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69b4c7c6"],{"14c3":function(t,e,a){var r=a("c6b6"),o=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,a){var r=a("da84"),o=a("fdbc"),i=a("17c2"),n=a("9112");for(var s in o){var c=r[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,o=a("a640"),i=a("ae40"),n=o("forEach"),s=i("forEach");t.exports=n&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1fae":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[t._v("後台 產品列表")]),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v("建立新的產品")]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[a("img",{attrs:{src:e.imageUrl,width:"130",height:"160",alt:""}})]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-left"},[t._v(" "+t._s(e.origin_price)+" ")]),a("td",{staticClass:"text-left"},[t._v(" "+t._s(e.price)+" ")]),a("td",[e.enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openModal("delete",e)}}},[t._v(" 刪除 ")])])])])})),0)]),a("pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getProducts}}),a("div",{ref:"productModal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("modal",{attrs:{products:t.products,"temp-product":t.tempProduct},on:{update:t.getProducts}})],1)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("預覽")]),a("th",[t._v("產品名稱")]),a("th",[t._v("原價")]),a("th",[t._v("售價")]),a("th",[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])}],i=(a("99af"),a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[t._v("Next")])])],2)])}),n=[],s={name:"pagination",props:["pages"],methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},c=s,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[0],expression:"tempProduct.imageUrl[0]"}],staticClass:"form-control",attrs:{id:"imageUrl",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.imageUrl,0,e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或上傳圖片")]),a("input",{ref:"file",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl[0],alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("商品名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,r=e.target,o=r.checked?1:0;if(Array.isArray(a)){var i=null,n=t._i(a,i);r.checked?n<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):n>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v(" 確認 ")])])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],m=(a("4160"),a("159b"),{name:"modal",props:["products","tempProduct"],methods:{updateProduct:function(){var t=this;if(this.tempProduct.id)this.products.forEach((function(e,a){if(e.id===t.tempProduct.id){var r="".concat("https://course-ec-api.hexschool.io/api/").concat("35e5ec2f-4b81-4496-9634-fef29022b381","/admin/ec/product/").concat(t.tempProduct.id);t.$http.patch(r,t.tempProduct).then((function(e){console.log(e),t.$emit("update")}))}}));else{var e=(new Date).getTime(),a=e.id,r="".concat("https://course-ec-api.hexschool.io/api/").concat("35e5ec2f-4b81-4496-9634-fef29022b381","/admin/ec/product");this.$http.post(r,this.tempProduct,a).then((function(e){console.log(e),t.$emit("update")}))}},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.file.files[0];console.log(e);var a=new FormData;a.append("file",e);var r="".concat("https://course-ec-api.hexschool.io/api/").concat("35e5ec2f-4b81-4496-9634-fef29022b381","/admin/storage");this.$http.post(r,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.status&&t.$set(t.tempProduct.imageUrl,0,e.data.data.path),console.log(e)}))}}}),v=m,g=Object(l["a"])(v,p,f,!1,null,null,null),h=g.exports,b={components:{pagination:d,modal:h},data:function(){return{products:[],tempProduct:{imageUrl:[]},pagination:{},token:""}},methods:{getProducts:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("35e5ec2f-4b81-4496-9634-fef29022b381","/admin/ec/products");this.token=document.cookie.replace(/(?:(?:^|.*;\s*)weekfourToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.get(e).then((function(e){console.log(e),t.products=e.data.data,t.pagination=e.data.meta.pagination}))},openModal:function(t,e){switch(t){case"new":this.tempProduct={imageUrl:[]},$(this.$refs.productModal).modal("show");break;case"edit":this.getProducts(e.id);break;case"delete":$(this.$refs.productModal).modal("show"),this.tempProduct=Object.assign({},e);break;default:break}}},created:function(){this.getProducts()}},_=b,P=Object(l["a"])(_,r,o,!1,null,null,null);e["default"]=P.exports},4160:function(t,e,a){"use strict";var r=a("23e7"),o=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5319:function(t,e,a){"use strict";var r=a("d784"),o=a("825a"),i=a("7b0b"),n=a("50c4"),s=a("a691"),c=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,p=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,a,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,_=h?"$":"$0";return[function(a,r){var o=c(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,o,r):e.call(String(o),a,r)},function(t,r){if(!h&&b||"string"===typeof r&&-1===r.indexOf(_)){var i=a(e,t,this,r);if(i.done)return i.value}var c=o(t),f=String(this),m="function"===typeof r;m||(r=String(r));var v=c.global;if(v){var x=c.unicode;c.lastIndex=0}var C=[];while(1){var y=u(c,f);if(null===y)break;if(C.push(y),!v)break;var E=String(y[0]);""===E&&(c.lastIndex=l(f,n(c.lastIndex),x))}for(var $="",S=0,k=0;k<C.length;k++){y=C[k];for(var w=String(y[0]),L=d(p(s(y.index),f.length),0),R=[],T=1;T<y.length;T++)R.push(g(y[T]));var A=y.groups;if(m){var U=[w].concat(R,L,f);void 0!==A&&U.push(A);var M=String(r.apply(void 0,U))}else M=P(w,f,L,R,A,r);L>=S&&($+=f.slice(S,L)+M,S=L+w.length)}return $+f.slice(S)}];function P(t,a,r,o,n,s){var c=r+t.length,l=o.length,u=v;return void 0!==n&&(n=i(n),u=m),e.call(s,u,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,r);case"'":return a.slice(c);case"<":s=n[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var d=f(u/10);return 0===d?e:d<=l?void 0===o[d-1]?i.charAt(1):o[d-1]+i.charAt(1):e}s=o[u-1]}return void 0===s?"":s}))}}))},6547:function(t,e,a){var r=a("a691"),o=a("1d80"),i=function(t){return function(e,a){var i,n,s=String(o(e)),c=r(a),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(n=s.charCodeAt(c+1))<56320||n>57343?t?s.charAt(c):i:t?s.slice(c,c+2):n-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,e,a){"use strict";var r=a("6547").charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},9263:function(t,e,a){"use strict";var r=a("ad6d"),o=a("9f7f"),i=RegExp.prototype.exec,n=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,a,o,s,d=this,p=l&&d.sticky,f=r.call(d),m=d.source,v=0,g=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,v++),a=new RegExp("^(?:"+m+")",f)),u&&(a=new RegExp("^"+m+"$(?!\\s)",f)),c&&(e=d.lastIndex),o=i.call(p?a:d,g),p?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:c&&o&&(d.lastIndex=d.global?o.index+o[0].length:e),u&&o&&o.length>1&&n.call(o[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),t.exports=s},"9f7f":function(t,e,a){"use strict";var r=a("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,a){"use strict";var r=a("23e7"),o=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,a){"use strict";var r=a("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,a){var r=a("83ab"),o=a("d039"),i=a("5135"),n=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var a=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:c,d=i(e,1)?e[1]:void 0;return s[t]=!!a&&!o((function(){if(l&&!r)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,u,d)}))}},b727:function(t,e,a){var r=a("0366"),o=a("44ad"),i=a("7b0b"),n=a("50c4"),s=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,d=6==t,p=5==t||d;return function(f,m,v,g){for(var h,b,_=i(f),P=o(_),x=r(m,v,3),C=n(P.length),y=0,E=g||s,$=e?E(f,C):a?E(f,0):void 0;C>y;y++)if((p||y in P)&&(h=P[y],b=x(h,y,_),t))if(e)$[y]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return y;case 2:c.call($,h)}else if(u)return!1;return d?-1:l||u?u:$}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d784:function(t,e,a){"use strict";a("ac1f");var r=a("6eeb"),o=a("d039"),i=a("b622"),n=a("9263"),s=a("9112"),c=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var m=i(t),v=!o((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),g=v&&!o((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return e=!0,null},a[m](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||p)||"split"===t&&!f){var h=/./[m],b=a(m,""[t],(function(t,e,a,r,o){return e.exec===n?v&&!o?{done:!0,value:h.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=b[0],P=b[1];r(String.prototype,t,_),r(RegExp.prototype,m,2==e?function(t,e){return P.call(t,this,e)}:function(t){return P.call(t,this)})}d&&s(RegExp.prototype[m],"sham",!0)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-69b4c7c6.28e0f143.js.map