(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2bb0":function(e,t,n){},"49ce":function(e,t,n){},"4d25":function(e,t,n){"use strict";n("4ec2")},"4ec2":function(e,t,n){},5027:function(e,t,n){"use strict";n("49ce")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("ecee"),a=n("c074"),o=n("ad3d"),s=n("2b0e"),i=n("8c4f"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Titlebar",{on:{darkModeToggle:e.darkModeToggle}}),n("router-view")],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"titlebar"},[n("h4",[e._v("Where in the world?")]),n("h6",{on:{click:e.darkModeToggle}},[n("font-awesome-icon",{attrs:{icon:"moon"}}),e._v(" "+e._s(this.darkMode?"Light":"Dark")+" Mode ")],1)])},d=[],p={name:"TitleBar",data:function(){return{darkMode:!1}},methods:{darkModeToggle:function(){this.darkMode=!this.darkMode,this.$emit("darkModeToggle",this.darkMode)}}},h=p,f=(n("f195"),n("2877")),g=Object(f["a"])(h,l,d,!1,null,"350c64d7",null),m=g.exports,v={name:"App",components:{Titlebar:m},methods:{darkModeToggle:function(e){document.documentElement.setAttribute("data-theme",e?"darkMode":"")}}},_=v,b=(n("034f"),Object(f["a"])(_,c,u,!1,null,null,null)),y=b.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[n("div",{staticClass:"inputs"},[n("Searchbar",{on:{search:e.search}}),n("RegionSelect",{attrs:{regions:e.regions},on:{regionChange:e.regionChange}})],1),n("CountryList",{attrs:{countries:e.pageCountries}}),n("Pagination",{staticClass:"pagination",attrs:{totalRecords:e.selectedCountries.length,perPage:e.perPage},on:{pageChange:e.pageChange}})],1)},P=[],k=n("1da1"),w=n("2909"),j=(n("96cf"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("b0c0"),n("4d63"),n("ac1f"),n("25f0"),n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"text",placeholder:"Search for a country..."},domProps:{value:e.searchTerm},on:{input:[function(t){t.target.composing||(e.searchTerm=t.target.value)},e.search]}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"search"}})],1)}),x=[],O={data:function(){return{searchTerm:""}},methods:{search:function(){this.searchTerm.length>3?this.$emit("search",this.searchTerm):this.$emit("search","")}}},T=O,R=(n("4d25"),Object(f["a"])(T,j,x,!1,null,"08375b3a",null)),M=R.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRegion,expression:"selectedRegion"}],attrs:{name:"Region"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedRegion=t.target.multiple?n:n[0]},e.regionChange]}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Filter by Region")]),e._l(e.regions,(function(t){return n("option",{key:t},[e._v(e._s(t))])}))],2)},S=[],E={name:"RegionSelect",data:function(){return{selectedRegion:""}},props:{regions:Array},methods:{regionChange:function(){this.$emit("regionChange",this.selectedRegion)}}},N=E,L=Object(f["a"])(N,$,S,!1,null,"9283e44e",null),D=L.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"results"},e._l(e.countries,(function(e){return n("router-link",{key:e.name.common,attrs:{to:{name:"Country",params:{country:e}},country:"country"}},[n("CountryCard",{attrs:{country:e}})],1)})),1)},F=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("img",{attrs:{src:e.country.flags.png,alt:e.country.name.common}}),n("div",{staticClass:"info"},[n("h2",[e._v(e._s(e.country.name.common))]),n("h4",[e._v(" Population: "),n("span",[e._v(e._s(e.populationFormatted))])]),n("h4",[e._v(" Region: "),n("span",[e._v(e._s(e.country.region))])]),n("h4",[e._v(" Captial: "),n("span",[e._v(e._s(e.country.capital[0]))])])])])},J=[],H=(n("5319"),{name:"CountryCard",props:["country"],computed:{populationFormatted:function(){return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}),W=H,q=(n("7c68"),Object(f["a"])(W,A,J,!1,null,"e5f7c026",null)),z=q.exports,G={name:"CountryList",components:{CountryCard:z},props:["countries"]},I=G,K=(n("c59b"),Object(f["a"])(I,B,F,!1,null,"6d1f6219",null)),Q=K.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination"},[n("button",{staticClass:"button",class:{disabled:!e.hasPrev},on:{click:e.prev}},[n("font-awesome-icon",{attrs:{icon:"angle-left"}})],1),e._l(e.availPages,(function(t){return n("button",{key:t,staticClass:"button",class:{selected:t===e.currentPage},on:{click:function(n){return e.gotoPage(t)}}},[e._v(" "+e._s(t)+" ")])})),n("button",{staticClass:"button",class:{disabled:!e.hasNext},on:{click:e.next}},[n("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)],2)},V=[],X={props:["totalRecords","perPage"],data:function(){return{currentPage:1}},computed:{totalPages:function(){return Math.ceil(this.totalRecords/this.perPage)},availPages:function(){var e=this;return new Set([1,this.currentPage-1,this.currentPage,this.currentPage+1,this.totalPages].sort((function(e,t){return e-t})).filter((function(t){return t<=e.totalPages&&t>=1})))},hasNext:function(){return this.currentPage<this.totalPages},hasPrev:function(){return this.currentPage>1}},methods:{prev:function(){this.hasPrev&&(this.currentPage--,this.$emit("pageChange",this.currentPage))},next:function(){this.hasNext&&(this.currentPage++,this.$emit("pageChange",this.currentPage))},gotoPage:function(e){e>0&&e<=this.totalPages&&(this.currentPage=e,this.$emit("pageChange",this.currentPage))}}},Y=X,Z=(n("6ccd"),Object(f["a"])(Y,U,V,!1,null,null,null)),ee=Z.exports,te={name:"Main",data:function(){return{allCountries:[],selectedRegion:null,currentPage:1,perPage:8,searchTerm:""}},components:{Searchbar:M,RegionSelect:D,CountryList:Q,Pagination:ee},computed:{regions:function(){return Object(w["a"])(new Set(this.allCountries.map((function(e){return e.region}))))},selectedCountries:function(){var e=this;return this.allCountries.filter((function(t){var n=!1;e.selectedRegion&&e.selectedRegion!==t.region&&(n=!0);var r=t.name.common+t.region+t.capital,a=new RegExp(e.searchTerm,"i");return e.searchTerm&&!a.test(r)&&(n=!0),!n}))},pageCountries:function(){var e=(this.currentPage-1)*this.perPage;return this.selectedCountries.slice(e,e+this.perPage)}},methods:{fetchData:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:this.allCountries=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),regionChange:function(e){this.selectedRegion=e},pageChange:function(e){this.currentPage=e},search:function(e){this.searchTerm=e}},mounted:function(){this.fetchData()}},ne=te,re=(n("a8d6"),Object(f["a"])(ne,C,P,!1,null,null,null)),ae=re.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[e.country?n("div",{staticClass:"controls"},[n("button",{on:{click:e.back}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}}),e._v(" Back ")],1)]):n("div",[e._v(" No Country Selected ")]),n("div",{staticClass:"details"},[n("div",{staticClass:"flag"},[n("img",{attrs:{src:e.country.flags.png,alt:e.country.name.common}})]),n("div",{staticClass:"info"},[n("h1",[e._v(e._s(e.country.name.common))]),n("div",{staticClass:"data"},[n("h4",[e._v(" Native Name: "),n("span",[e._v(e._s(Object.values(e.country.name.nativeName)[0].official))])]),n("h4",[e._v(" Population: "),n("span",[e._v(e._s(e.populationFormatted))])]),n("h4",[e._v(" Region: "),n("span",[e._v(e._s(e.country.region))])]),n("h4",[e._v(" Sub Region: "),n("span",[e._v(e._s(e.country.subregion))])]),n("h4",[e._v(" Captial: "),n("span",[e._v(e._s(e.country.capital[0]))])]),n("h4",[e._v(" Top Level Domain: "),n("span",[e._v(e._s(e.topLevelDomain))])]),n("h4",[e._v(" Currencies: "),n("span",[e._v(e._s(e.currencies))])]),n("h4",[e._v(" Languages: "),n("span",[e._v(e._s(e.languages))])])]),n("div",{staticClass:"border"},[e._v(" Border Countries: "),e._l(e.country.borders,(function(t){return n("button",{key:t},[e._v(" "+e._s(t)+" ")])}))],2)])])])},se=[],ie=(n("a15b"),n("07ac"),{name:"CountryDetails",props:["country"],computed:{populationFormatted:function(){return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},currencies:function(){return Object.values(this.country.currencies).map((function(e){return e.name})).join(", ")},languages:function(){return Object.values(this.country.languages).join(", ")},topLevelDomain:function(){return this.country.tld.join(", ")}},methods:{back:function(){this.$router.back()}}}),ce=ie,ue=(n("5027"),Object(f["a"])(ce,oe,se,!1,null,"96261246",null)),le=ue.exports;r["c"].add(a["e"],a["d"],a["c"],a["a"],a["b"]),s["a"].component("font-awesome-icon",o["a"]),s["a"].config.productionTip=!1,s["a"].use(i["a"]);var de=[{path:"/",component:ae,name:"Home"},{path:"/country",component:le,props:!0,name:"Country"}],pe=new i["a"]({routes:de});new s["a"]({router:pe,render:function(e){return e(y)}}).$mount("#app")},"6ccd":function(e,t,n){"use strict";n("a3ac")},"7c68":function(e,t,n){"use strict";n("2bb0")},"7d8e":function(e,t,n){},"85ec":function(e,t,n){},"9eaf":function(e,t,n){},a3ac:function(e,t,n){},a8d6:function(e,t,n){"use strict";n("7d8e")},c59b:function(e,t,n){"use strict";n("9eaf")},dbcb:function(e,t,n){},f195:function(e,t,n){"use strict";n("dbcb")}});
//# sourceMappingURL=app.f7d5171d.js.map