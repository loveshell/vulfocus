(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687dd78a"],{"02f4":function(e,t,a){var n=a("4588"),i=a("be13");e.exports=function(e){return function(t,a){var l,r,o=String(i(t)),s=n(a),c=o.length;return s<0||s>=c?e?"":void 0:(l=o.charCodeAt(s),l<55296||l>56319||s+1===c||(r=o.charCodeAt(s+1))<56320||r>57343?e?o.charAt(s):l:e?o.slice(s,s+2):r-56320+(l-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var n=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},"214f":function(e,t,a){"use strict";a("b0c5");var n=a("2aba"),i=a("32e9"),l=a("79e5"),r=a("be13"),o=a("2b4c"),s=a("520a"),c=o("species"),u=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var m=o(e),d=!l((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),v=d?!l((function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[m](""),!t})):void 0;if(!d||!v||"replace"===e&&!u||"split"===e&&!f){var p=/./[m],h=a(r,m,""[e],(function(e,t,a,n,i){return t.exec===s?d&&!i?{done:!0,value:p.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}})),g=h[0],b=h[1];n(String.prototype,e,g),i(RegExp.prototype,m,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},3007:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return c}));var n=a("b775");function i(e,t){void 0===e&&(e="");var a="/images/?query="+e,i="";return!0===t&&(i="flag",a+="&flag="+i),Object(n["a"])({url:a,method:"get"})}function l(e){return Object(n["a"])({url:"/images/"+e+"/start/",method:"get"})}function r(){return Object(n["a"])({url:"/container/",method:"get"})}function o(e){return Object(n["a"])({url:"/container/"+e+"/delete/",method:"delete"})}function s(e){return Object(n["a"])({url:"/container/"+e+"/stop/",method:"get"})}function c(e,t){return Object(n["a"])({url:"/container/"+e+"/flag/?flag="+t,method:"get"})}},"386d":function(e,t,a){"use strict";var n=a("cb7c"),i=a("83a1"),l=a("5f1b");a("214f")("search",1,(function(e,t,a,r){return[function(a){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=r(a,e,this);if(t.done)return t.value;var o=n(e),s=String(this),c=o.lastIndex;i(c,0)||(o.lastIndex=0);var u=l(o,s);return i(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]}))},"520a":function(e,t,a){"use strict";var n=a("0bfb"),i=RegExp.prototype.exec,l=String.prototype.replace,r=i,o="lastIndex",s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[o]||0!==t[o]}(),c=void 0!==/()??/.exec("")[1],u=s||c;u&&(r=function(e){var t,a,r,u,f=this;return c&&(a=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(t=f[o]),r=i.call(f,e),s&&r&&(f[o]=f.global?r.index+r[0].length:t),c&&r&&r.length>1&&l.call(r[0],a,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)})),r}),e.exports=r},"5f1b":function(e,t,a){"use strict";var n=a("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var l=a.call(e,t);if("object"!==typeof l)throw new TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},a481:function(e,t,a){"use strict";var n=a("cb7c"),i=a("4bf8"),l=a("9def"),r=a("4588"),o=a("0390"),s=a("5f1b"),c=Math.max,u=Math.min,f=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,p){return[function(n,i){var l=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,l,i):a.call(String(l),n,i)},function(e,t){var i=p(a,e,this,t);if(i.done)return i.value;var f=n(e),m=String(this),d="function"===typeof t;d||(t=String(t));var g=f.global;if(g){var b=f.unicode;f.lastIndex=0}var y=[];while(1){var x=s(f,m);if(null===x)break;if(y.push(x),!g)break;var _=String(x[0]);""===_&&(f.lastIndex=o(m,l(f.lastIndex),b))}for(var I="",k=0,w=0;w<y.length;w++){x=y[w];for(var S=String(x[0]),L=c(u(r(x.index),m.length),0),T=[],$=1;$<x.length;$++)T.push(v(x[$]));var D=x.groups;if(d){var C=[S].concat(T,L,m);void 0!==D&&C.push(D);var O=String(t.apply(void 0,C))}else O=h(S,m,L,T,D,t);L>=k&&(I+=m.slice(k,L)+O,k=L+S.length)}return I+m.slice(k)}];function h(e,t,n,l,r,o){var s=n+e.length,c=l.length,u=d;return void 0!==r&&(r=i(r),u=m),a.call(o,u,(function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":o=r[i.slice(1,-1)];break;default:var u=+i;if(0===u)return a;if(u>c){var m=f(u/10);return 0===m?a:m<=c?void 0===l[m-1]?i.charAt(1):l[m-1]+i.charAt(1):a}o=l[u-1]}return void 0===o?"":o}))}}))},b0c5:function(e,t,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},e036:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{visible:e.centerDialogVisible,title:"添加",width:"60%"},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-tabs",{attrs:{value:"add"},on:{"tab-click":e.handleClick}},[a("el-tab-pane",{attrs:{name:"add",label:"添加"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"label-width":"80px","element-loading-text":"添加中"}},[a("el-form-item",{attrs:{label:"漏洞名称"}},[a("el-input",{attrs:{size:"medium"},model:{value:e.vulInfo.vul_name,callback:function(t){e.$set(e.vulInfo,"vul_name",t)},expression:"vulInfo.vul_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"镜像"}},[a("el-col",{attrs:{span:17}},["file"===e.imgType?a("el-upload",{ref:"upload",attrs:{"http-request":e.uploadImg,accept:".tar",action:"/CombinationImage/",limit:1,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"medium",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1):e._e(),e._v(" "),"text"===e.imgType?a("el-autocomplete",{staticStyle:{width:"100%"},attrs:{size:"medium","fetch-suggestions":e.querySearchAsync},on:{select:e.handleSelect},model:{value:e.vulInfo.name,callback:function(t){e.$set(e.vulInfo,"name",t)},expression:"vulInfo.name"}}):e._e()],1),e._v(" "),a("el-col",{staticStyle:{float:"right",right:"0"},attrs:{span:5}},[a("el-button",{attrs:{size:"medium"},on:{click:function(t){return t.stopPropagation(),e.changeType(t)}},model:{value:e.imgType,callback:function(t){e.imgType=t},expression:"imgType"}},[e._v(e._s(e.imgTypeText))])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Rank"}},[a("el-input-number",{attrs:{min:.5,max:5,precision:1,step:.5,size:"medium"},model:{value:e.vulInfo.rank,callback:function(t){e.$set(e.vulInfo,"rank",t)},expression:"vulInfo.rank"}}),e._v("\n                   \n                "),a("el-tooltip",{attrs:{content:"默认分数为2.5分，可根据漏洞的利用难度进行评判",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",size:"medium"},model:{value:e.vulInfo.desc,callback:function(t){e.$set(e.vulInfo,"desc",t)},expression:"vulInfo.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.uploadImg}},[e._v("提 交")])],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{name:"local",label:"本地导入"}},[a("div",{staticClass:"filter-container"},[a("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:e.localSearch,callback:function(t){e.localSearch=t},expression:"localSearch"}}),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.batchLocalAdd}},[e._v("\n                一键导入\n              ")]),e._v("   \n              "),a("el-tooltip",{attrs:{content:"一键导入默认导入分数为 2.5 分,漏洞名称为镜像名称,漏洞描述为漏洞名称",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.localLoading,expression:"localLoading"}],staticStyle:{width:"100%"},attrs:{data:e.localImageList.filter((function(t){return!e.localSearch||t.name.toLowerCase().includes(e.localSearch.toLowerCase())})),"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectLocalImages}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"标签",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[!0===n.flag?a("el-tag",{attrs:{effect:"dark",type:"info"}},[e._v("已导入")]):!1===n.flag?a("el-tag",{attrs:{effect:"dark"}},[e._v("未导入")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"danger",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLocalRemove(n.name)}}},[e._v("移除")])]}}])})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"filter-container"},[a("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:e.handleQuery}},[e._v("\n        查询\n      ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-edit"},on:{click:e.openCreate}},[e._v("\n        添加\n      ")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"",align:"center"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"image_name",label:"镜像名称","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"image_vul_name",label:"漏洞名称","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"image_port",label:"端口",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rank",label:"分数",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"image_desc","show-overflow-tooltip":!0,label:"描述"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[!1===n.is_ok?a("el-tag",{attrs:{effect:"dark"}},[a("i",{staticClass:"el-icon-loading"}),e._v("下载中")]):e._e(),e._v(" "),!0===n.is_ok?a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")]):e._e()]}}])})],1)],1)},i=[],l=(a("386d"),a("a481"),a("7f7f"),a("ac6a"),a("3007")),r=a("bc3a"),o=a.n(r);function s(e){var t="https://hub.docker.com/api/content/v1/products/search?page_size=50&q=vulfocus%2F"+e+"&type=image";return o()({method:"get",url:t,headers:{"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9","Search-Version":"v3"}})}var c=a("b775");function u(e){return Object(c["a"])({url:"/images/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function f(e){return Object(c["a"])({url:"/images/"+e+"/delete/"})}function m(){return Object(c["a"])({url:"/images/local/local/"})}function d(e){return Object(c["a"])({url:"/images/local/local_add/",method:"post",data:e})}var v=a("ea7f"),p={name:"index",data:function(){return{tableData:[],search:"",localSearch:"",centerDialogVisible:!1,startCon:!1,vulInfo:{rank:"",name:"",vul_name:"",desc:""},imgType:"text",imgTypeText:"切换为文件",loading:!1,summaries:[],taskCheckInterval:null,tmpImageNameList:[],localImageList:[],tmpLocalImageList:[],localLoading:!0,selectLocalImages:[]}},created:function(){this.initTableData(),this.initSummariesList()},methods:{querySearchAsync:function(e,t){var a=this,n=this.summaries;null===e||""===e||0===e.length?(this.initSummariesList(),t(n)):s(e).then((function(e){if(a.summaries=[],200===e.status){var i=e.data["summaries"];null!=i&&i.forEach((function(e,t,n){a.summaries.push({value:e["name"]})})),n=a.summaries,t(n)}}))},searchSummariesList:function(e){var t=this;this.summaries=[],s(e).then((function(e){if(t.summaries=[],200===e.status){var a=e.data["summaries"];a.forEach((function(e,a,n){t.summaries.push({value:e["name"]})}))}}))},initSummariesList:function(){this.searchSummariesList("")},initTableData:function(){var e=this;clearInterval(this.taskCheckInterval),Object(l["e"])(void 0,!0).then((function(t){e.tableData=t.data,e.tableData.forEach((function(t,a,n){var i=t.image_name;e.tmpImageNameList.indexOf(i)>-1&&e.$notify({title:"成功",message:i+" 添加成功",type:"success"})}));var a=t.data;e.taskCheckInterval=window.setInterval((function(){setTimeout((function(){var t=[];t=e.checkTask(a),null!=t&&0!==t.length||clearInterval(e.taskCheckInterval)}),0)}),5e3)}))},openCreate:function(){this.centerDialogVisible=!0,this.vulInfo.rank=2.5,this.vulInfo.name="",this.vulInfo.vul_name="",this.vulInfo.desc=""},changeType:function(){"file"===this.imgType?(this.imgType="text",this.imgTypeText="切换为文件"):(this.imgType="file",this.imgTypeText="切换为文本")},uploadImg:function(e){var t=this,a=new FormData;if(null!=this.$refs.upload){var n=this.$refs.upload.uploadFiles;(null!=this.$refs.upload.uploadFiles||this.$refs.upload.uploadFiles.length>0)&&a.set("file",n[0].raw)}a.set("rank",this.vulInfo.rank),a.set("image_name",this.vulInfo.name),a.set("image_vul_name",this.vulInfo.vul_name),a.set("image_desc",this.vulInfo.desc),this.loading=!0,u(a).then((function(e){t.loading=!1;var a=e.data,n=a["data"];if(null!=n&&(n.indexOf("成功")>-1||n.indexOf("失败")>-1)){var i=n.replace("拉取镜像","").replace("任务下发成功","").replace(" ","");t.tmpImageNameList.push(i),n.indexOf("成功")>-1?(t.$notify({title:"成功",message:n,type:"success"}),t.centerDialogVisible=!1,t.initTableData()):(t.$notify({title:n,message:n,type:"error"}),t.centerDialogVisible=!1)}else t.$notify({title:"成功",message:a["msg"],type:"success"}),t.centerDialogVisible=!1,t.initTableData()}))},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){f(e.image_id).then((function(e){var a=e.data;200===a.status?(t.$notify({title:"成功",message:"删除成功!",type:"success"}),t.initTableData()):t.$notify({title:"失败",message:a.msg,type:"error"})}))})).catch((function(){}))},handleQuery:function(){var e=this;Object(l["e"])(this.search,!0).then((function(t){e.tableData=t.data}))},handleSelect:function(e){this.vulInfo.name=e.value,this.vulInfo.vul_name=e.value.replace("vulfocus/",""),this.vulInfo.desc=e.value.replace("vulfocus/","")},checkTask:function(e){var t=this,a=[],n={};e.forEach((function(e,t,i){var l=e["is_ok"],r=e["status"]["task_id"];!1===l&&null!=r&&""!==r&&(a.push(r),n[r]=e)}));var i=a.join(",");if(null!=i&&""!==i){var l=new FormData;l.set("task_ids",i),Object(v["a"])(l).then((function(e){var i=e.data.data;for(var l in i){var r=i[l],o=r["status"];1!==o&&(t.removeArray(a,l),n[l].is_ok=!0,200===r["data"]["status"]?t.$notify({title:"成功",message:r["data"]["msg"],type:"success"}):t.$notify({title:"失败",message:r["data"]["msg"],type:"error"}))}}))}return a},removeArray:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t){e.splice(a,1);break}},loadLocalImages:function(){var e=this;this.localLoading=!0,m().then((function(t){var a=t.data,n=a.status,i=a.data;200===n&&(e.localImageList=i,e.tmpLocalImageList=i),e.localLoading=!1}))},handleClick:function(e,t){var a=e.name;"local"===a&&this.loadLocalImages()},handleLocalRemove:function(e){for(var t=0;t<this.localImageList.length;t++)if(this.localImageList[t].name===e){this.localImageList.splice(t,1);break}},handleSelectLocalImages:function(e){var t=[];for(var a in e)t.push(e[a].name);this.selectLocalImages=t},batchLocalAdd:function(){var e=this;if(0!==this.selectLocalImages.length){var t=new FormData;t.set("image_names",this.selectLocalImages.join(",")),d(t).then((function(t){var a=t.data,n=a.data,i=a.status;if(200===i){for(var l=0;l<n.length;l++){var r=n[l],o=r.replace(" ","").replace("拉取镜像","").replace("任务下发成功","");e.tmpImageNameList.push(o),e.$notify({title:"成功",message:r,type:"success"})}e.centerDialogVisible=!1,e.initTableData()}else 201===i?e.$notify({title:"失败",message:a["msg"],type:"info"}):e.$notify({title:"失败",message:a["msg"],type:"error"})}))}}}},h=p,g=a("2877"),b=Object(g["a"])(h,n,i,!1,null,"1fef312a",null);t["default"]=b.exports},ea7f:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a("b775");function i(e){return Object(n["a"])({url:"/tasks/"+e+"/get/",method:"get"})}function l(e){return Object(n["a"])({url:"/tasks/batch/batch/",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-687dd78a.cb7b6954.js.map