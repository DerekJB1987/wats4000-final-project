webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Sun Times")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(t){n("Sh7F")},null,null).exports,o=n("/ocq"),i=n("fZjL"),l=n.n(i),u=n("mtWM"),c=n.n(u),h={name:"Suntimes",data:function(){return{results:null,lat:"47.606209",lng:"-122.332069",keys:[]}},methods:{getLocation:function(){var t=this;console.log("hello"),c.a.get("https://api.sunrise-sunset.org/json",{params:{lat:this.lat,lng:this.lng}}).then(function(e){t.results=e.data.results,t.keys=l()(t.results),console.log("times")}).catch(function(t){console.log(t)})},toLocalTZ:function(t){var e=t.split("")[0].split(":"),n=(t.split("")[1],this.$moment.utc(new Date));return(n=n.set({hour:e[0],minute:e[1],second:e[2]})).local().format("hh:mm:ss A")}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suntimes"},[n("p",[n("router-link",{attrs:{to:"locationsearch"}},[t._v("Location Search")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Sun Times")])],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.getLocation(e)}}},[n("p",[t._v("Enter a latitude:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],attrs:{type:"text",placeholder:"47.606209"},domProps:{value:t.lat},on:{input:function(e){e.target.composing||(t.lat=e.target.value)}}}),t._v(" and longitude:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lng,expression:"lng"}],attrs:{type:"text",placeholder:"-122.332069"},domProps:{value:t.lng},on:{input:function(e){e.target.composing||(t.lng=e.target.value)}}}),t._v(" to find your sunrise and sunset times.\n      "),n("button",{attrs:{type:"submit"}},[t._v("Search")])])]),t._v(" "),t.results?n("ul",{staticClass:"results"},t._l(t.keys,function(e,s){return n("li",{key:s,staticClass:"item"},[n("p",[n("strong",[t._v(t._s(e))])]),t._v(" "),n("p",[t._v(t._s(t.toLocalTZ(t.results[e])))])])})):t._e(),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This API is attributed to sunrise-sunset.org located at\n    "),e("a",{attrs:{href:"https://sunrise-sunset.org/",target:"_blank"}},[this._v("sunrise-sunset.org")])])}]};var v=n("VU/8")(h,p,!1,function(t){n("xmxW")},"data-v-d515a8ee",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"locationsearch"},[e("p",[e("router-link",{attrs:{to:"locationsearch"}},[this._v("Location Search")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Sun Times")])],1),this._v(" "),e("h2",[this._v("Location Search")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A helpful resource to get geo coordinates is located at "),e("a",{attrs:{href:"https://www.gps-coordinates.net/",target:"_blank"}},[this._v("GPS-coordinates.net")])])}]};var _=n("VU/8")(null,m,!1,function(t){n("iAf9")},"data-v-4246eaf8",null).exports;s.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"SunTimes",component:v},{path:"/locationsearch",name:"LocationsSearch",component:_}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:d,components:{App:r},template:"<App/>"}),s.a.use(n("8AgW"))},Sh7F:function(t,e){},iAf9:function(t,e){},xmxW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.23289c8d38aea96c9275.js.map