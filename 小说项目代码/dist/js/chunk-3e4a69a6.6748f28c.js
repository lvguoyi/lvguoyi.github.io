(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4a69a6"],{"1dde":function(t,s,e){var i=e("d039"),o=e("b622"),a=e("2d00"),n=o("species");t.exports=function(t){return a>=51||!i((function(){var s=[],e=s.constructor={};return e[n]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"28c2":function(t,s,e){"use strict";var i=e("749d"),o=e.n(i);o.a},"4e22":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("keep-alive",[e("Sea")],1)],1)},o=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("van-row",{staticClass:"searchInp"},[e("van-col",{attrs:{span:"22",offset:"1"}},[e("div",{staticClass:"inp"},[e("span",{staticClass:"iconfont icon-back-copy-copy fl",on:{click:t.gohomePage}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:[function(s){s.target.composing||(t.value=s.target.value)},t.inp]}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.delShow,expression:"delShow"}],staticClass:"iconfont icon-shanchu del",on:{click:t.del}}),e("button",{on:{click:t.search}},[t._v("搜索")])])])],1),0==t.searchList.length?e("van-row",{staticClass:"hot"},[e("van-col",{attrs:{span:"22",offset:"1"}},[e("h5",[t._v("搜索热词")]),t._l(t.hot,(function(s,i){return e("span",{key:i,on:{click:function(s){return t.goHot(i)}}},[t._v(t._s(s))])}))],2)],1):t._e(),0==t.searchList.length?e("van-row",{staticClass:"history"},[e("van-col",{staticClass:"top",attrs:{span:"22",offset:"1"}},[e("h5",{staticClass:"fl"},[t._v("搜索记录")]),e("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.$store.state.historyList.length,expression:"$store.state.historyList.length != 0"}],staticClass:"iconfont icon-shanchu1 fr",on:{click:t.delHistory}},[t._v(" 清空记录")])]),e("van-col",{directives:[{name:"show",rawName:"v-show",value:0!=t.$store.state.historyList.length,expression:"$store.state.historyList.length != 0"}],staticClass:"center",attrs:{span:"22",offset:"1"}},t._l(t.$store.state.historyList,(function(s,i){return e("span",{key:i,on:{click:function(s){return t.his(i)}}},[t._v(t._s(s))])})),0),e("van-col",{directives:[{name:"show",rawName:"v-show",value:0==t.$store.state.historyList.length,expression:"$store.state.historyList.length == 0"}],staticClass:"bottom",attrs:{span:"22",offset:"1"}},[e("span",{staticClass:"none"},[t._v("还没有任何搜索记录")])])],1):t._e(),0!=t.searchList.length?e("van-row",{staticClass:"searchList"},[e("van-col",{attrs:{span:"22",offset:"1"}},[e("p",{staticClass:"word"},[t._v(" 搜索: "),e("i",[t._v("'"+t._s(t.value)+"'")])]),e("ul",[t._l(t.searchList[0],(function(s,i){return e("li",{key:i,on:{click:function(s){return t.toDetails(i)}}},[e("span",{staticClass:"iconfont icon-shu fl"}),t._v(" "+t._s(s.title)+" ")])})),e("p",[t._v("没有更多了~")])],2)])],1):t._e(),e("van-row",{staticClass:"big"},[e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"box clear",class:{active:t.addClass}},[e("h5",[t._v("确定清空搜索记录吗?")]),e("span",{staticClass:"n fl",on:{click:t.no}},[t._v("取消")]),e("span",{staticClass:"y fr",on:{click:t.yes}},[t._v("确定")])])])],1)],1)},n=[],r=(e("fb6a"),e("a434"),{data:function(){return{searchList:[],delShow:!1,value:"",foo:!0,hot:["第一狂妃","后娘","穿越","三生三世枕上书","穿越之细水长流","掌中之物","我家师父超凶的","混在古代的厨子"],addClass:!1}},methods:{getSearchList:function(t){var s=this;this.axios.get("https://api.kele8.cn/agent/http://novel.kele8.cn/search?keyword="+t,{}).then((function(t){console.log(t.data),0==s.searchList.length?(s.searchList.push(t.data.books.slice(0,20)),s.$store.state.list.push(t.data.books.slice(0,20))):(s.searchList.splice(0,s.searchList.length),s.searchList.push(t.data.books.slice(0,20)),s.$store.state.list.splice(0,s.$store.state.list.length),s.$store.state.list.push(t.data.books.slice(0,20)))})).catch((function(t){console.log(t)}))},inp:function(){var t=this;if(""!=this.value){if(this.delShow=!0,!this.foo)return;this.getSearchList(this.value),setTimeout((function(){t.foo=!0}),100)}else this.delShow=!1,this.searchList.splice(0,this.searchList.length)},del:function(){this.value="",this.delShow=!1,this.searchList.splice(0,this.searchList.length)},goArr:function(t){for(var s=0;s<t.length;s++)for(var e=s+1;e<t.length;e++)t[s]==t[e]&&(t.splice(e,1),e--);return t},search:function(){""!=this.value?(this.$store.state.historyList.push(this.value),this.goArr(this.$store.state.historyList)):this.searchList.splice(0,this.searchList.length)},toDetails:function(t){this.$router.push({name:"details",query:{id:this.searchList[0][t]._id,router:"search"}}),this.$store.state.historyList.push(this.searchList[0][t].title),this.goArr(this.$store.state.historyList)},gohomePage:function(){this.$router.push({name:"homePage"}),this.$store.state.titleShow=!0,this.$store.state.foo=!1},goHot:function(t){this.value=this.hot[t],this.delShow=!0,this.getSearchList(this.value),this.$store.state.historyList.push(this.value),this.goArr(this.$store.state.historyList)},his:function(t){this.delShow=!0,this.value=this.$store.state.historyList[t],this.getSearchList(this.value)},delHistory:function(){this.addClass=!0},no:function(){this.addClass=!1},yes:function(){var t=this;this.addClass=!1,setTimeout((function(){t.$store.state.historyList.splice(0,t.$store.state.historyList.length)}),300)}},created:function(){if(this.$store.state.foo){var t=this.$store.state.historyList.length-1,s=this.$store.state.historyList[t];this.getSearchList(s),this.value=s,this.delShow=!!s,this.searchList=this.$store.state.list}this.$store.state.titleShow=!1},beforeDestroy:function(){}}),c=r,h=(e("28c2"),e("2877")),l=Object(h["a"])(c,a,n,!1,null,"5da36f80",null),u=l.exports,f={components:{Sea:u}},v=f,d=Object(h["a"])(v,i,o,!1,null,"d365e11c",null);s["default"]=d.exports},"65f0":function(t,s,e){var i=e("861d"),o=e("e8b5"),a=e("b622"),n=a("species");t.exports=function(t,s){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?i(e)&&(e=e[n],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===s?0:s)}},"749d":function(t,s,e){},8418:function(t,s,e){"use strict";var i=e("c04e"),o=e("9bf2"),a=e("5c6c");t.exports=function(t,s,e){var n=i(s);n in t?o.f(t,n,a(0,e)):t[n]=e}},a434:function(t,s,e){"use strict";var i=e("23e7"),o=e("23cb"),a=e("a691"),n=e("50c4"),r=e("7b0b"),c=e("65f0"),h=e("8418"),l=e("1dde"),u=e("ae40"),f=l("splice"),v=u("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,p=Math.min,g=9007199254740991,y="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,s){var e,i,l,u,f,v,L=r(this),w=n(L.length),m=o(t,w),C=arguments.length;if(0===C?e=i=0:1===C?(e=0,i=w-m):(e=C-2,i=p(d(a(s),0),w-m)),w+e-i>g)throw TypeError(y);for(l=c(L,i),u=0;u<i;u++)f=m+u,f in L&&h(l,u,L[f]);if(l.length=i,e<i){for(u=m;u<w-i;u++)f=u+i,v=u+e,f in L?L[v]=L[f]:delete L[v];for(u=w;u>w-i+e;u--)delete L[u-1]}else if(e>i)for(u=w-i;u>m;u--)f=u+i-1,v=u+e-1,f in L?L[v]=L[f]:delete L[v];for(u=0;u<e;u++)L[u+m]=arguments[u+2];return L.length=w-i+e,l}})},ae40:function(t,s,e){var i=e("83ab"),o=e("d039"),a=e("5135"),n=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,s){if(a(r,t))return r[t];s||(s={});var e=[][t],h=!!a(s,"ACCESSORS")&&s.ACCESSORS,l=a(s,0)?s[0]:c,u=a(s,1)?s[1]:void 0;return r[t]=!!e&&!o((function(){if(h&&!i)return!0;var t={length:-1};h?n(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,l,u)}))}},e8b5:function(t,s,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fb6a:function(t,s,e){"use strict";var i=e("23e7"),o=e("861d"),a=e("e8b5"),n=e("23cb"),r=e("50c4"),c=e("fc6a"),h=e("8418"),l=e("b622"),u=e("1dde"),f=e("ae40"),v=u("slice"),d=f("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),g=[].slice,y=Math.max;i({target:"Array",proto:!0,forced:!v||!d},{slice:function(t,s){var e,i,l,u=c(this),f=r(u.length),v=n(t,f),d=n(void 0===s?f:s,f);if(a(u)&&(e=u.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?o(e)&&(e=e[p],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return g.call(u,v,d);for(i=new(void 0===e?Array:e)(y(d-v,0)),l=0;v<d;v++,l++)v in u&&h(i,l,u[v]);return i.length=l,i}})}}]);
//# sourceMappingURL=chunk-3e4a69a6.6748f28c.js.map