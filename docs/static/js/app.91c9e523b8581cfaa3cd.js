webpackJsonp([0],{"0A59":function(t,e){},"1/oy":function(t,e){},"4GQ+":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},K2LD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("Jmt5"),n("9M+g");var s=n("7+uW"),r=n("e6fC"),o=n("yJzH"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("UJbQ")},null,null).exports,l=n("/ocq"),u={props:{start:{type:Boolean}},data:function(){return{}},methods:{onStart:function(){this.$emit("onStart")}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"start-sort"}},[n("p",[t._v("Instructions:")]),t._v(" "),n("p",[t._v("Drag and Drop Sorting List")]),t._v(" "),n("b-button",{staticStyle:{"margin-top":"60px"},on:{click:function(e){return e.preventDefault(),t.onStart(e)}}},[t._v("Start")])],1)},staticRenderFns:[]};var d=n("VU/8")(u,c,!1,function(t){n("4GQ+")},"data-v-5e92973e",null).exports,h=n("DAYN"),p={components:{draggable:n.n(h).a},props:{phrases:{type:Array,required:!0}},data:function(){return{sortedPhrases:[],options:{handle:".handle",scroll:!0,group:{name:"Phrases",pull:!1,put:!0}}}},mounted:function(){for(var t=0;t<this.phrases.length;t++)this.sortedPhrases.push({index:t+1,phrase:this.phrases[t]})},methods:{onBack:function(){this.$emit("initialize")},onDone:function(){var t=this.sortedPhrases.map(function(t){return t.phrase});this.$emit("onEnd",t)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"draggable-phrases"}},[n("div",{staticClass:"fixed-top",staticStyle:{"text-align":"left",top:"16px",left:"16px",right:"16px"}},[n("b-button",{staticStyle:{width:"auto"},on:{click:function(e){return e.preventDefault(),t.onBack(e)}}},[t._v("Back")]),t._v(" "),n("b-button",{staticStyle:{float:"right",width:"auto"},on:{click:function(e){return e.preventDefault(),t.onDone(e)}}},[t._v("Done")])],1),t._v(" "),n("div",{staticStyle:{"overflow-y":"hidden"}},[n("div",{staticClass:"d-flex",attrs:{id:"scroll-container"}},[n("draggable",{staticStyle:{width:"100%"},attrs:{options:t.options},model:{value:t.sortedPhrases,callback:function(e){t.sortedPhrases=e},expression:"sortedPhrases"}},[n("transition-group",t._l(t.sortedPhrases,function(e){return n("div",{key:"phrase-"+e.index,staticClass:"d-flex"},[n("div",{staticClass:"phrase-row phrase-row-number d-flex justify-content-center align-content-center"},[t._v(t._s(e.index)+".")]),t._v(" "),n("div",{staticClass:"phrase-row d-flex justify-content-center align-items-center"},[n("div",{staticStyle:{flex:"1"}},[t._v(t._s(e.phrase))]),t._v(" "),n("i",{staticClass:"handle"},[n("v-icon",{attrs:{name:"move"}})],1)])])}))],1)],1)])])},staticRenderFns:[]};var v=n("VU/8")(p,f,!1,function(t){n("eZNK")},"data-v-08acb83a",null).exports,m={props:{results:{type:Array,required:!0}},methods:{onRestart:function(){this.$emit("onStart",!0)},onBack:function(){this.$emit("initialize")}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sorted-results"}},[t._m(0),t._v(" "),n("div",{staticStyle:{position:"absolute",top:"120px",left:"0",right:"0",bottom:"100px","overflow-y":"auto"}},[n("ol",t._l(t.results,function(e,s){return n("li",{key:"phrase-"+s},[t._v(t._s(e))])}))]),t._v(" "),n("div",{staticClass:"fixed-bottom",staticStyle:{bottom:"30px"}},[n("b-button",{on:{click:function(e){return e.preventDefault(),t.onBack(e)}}},[t._v("Back")]),t._v(" "),n("b-button",{on:{click:function(e){return e.preventDefault(),t.onRestart(e)}}},[t._v("Restart")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed-top",staticStyle:{top:"30px"}},[e("p",[this._v("You are finished!")]),this._v(" "),e("p",[this._v("Here are your results:")])])}]};var _={components:{StartSort:d,DraggableSortPhrases:v,SortedResults:n("VU/8")(m,y,!1,function(t){n("K2LD")},"data-v-00bb7226",null).exports},data:function(){return{status:"none",sortedResults:null,phrases:["I like my owrk -- it does me good","The universe is a remarkably harmonious system","The world makes little sense to me","No matter how hard I work, I shall always feel frustrated","My working conditions are poor, and ruin my work","I fee at home in the world","I hate my work","My life is messing up the world","My work contributes nothing to the world","My work brings out the best in me","I enjoy being myself","I curse the day I was born","I love my work","The lack of meaning in the Universe disturbs me","The more I understand my place in the world, the better I get in my work","My work makes me unhappy","I love the beauty of the world","My work adds to the beauty and harmony of the world"]}},methods:{initialize:function(){this.status="none",this.sortedResults=null},onStart:function(){this.status="started",this.sortedResults=null},onEnd:function(t){this.status="ended",this.sortedResults=t}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sort-phrases"}},[t.sortedResults?n("div",{staticStyle:{height:"100%"}},[n("sorted-results",{attrs:{results:t.sortedResults},on:{onStart:t.onStart,initialize:t.initialize}})],1):t._e(),t._v(" "),t.sortedResults?t._e():n("div",{staticStyle:{height:"100%"}},["none"===t.status?n("start-sort",{on:{onStart:t.onStart}}):t._e(),t._v(" "),"started"===t.status?n("draggable-sort-phrases",{attrs:{phrases:t.phrases},on:{onEnd:function(e){t.onEnd(e)},initialize:t.initialize}}):t._e()],1)])},staticRenderFns:[]};var g=n("VU/8")(_,b,!1,function(t){n("0A59")},"data-v-3df2a4fa",null).exports;s.a.use(l.a);var w=new l.a({routes:[{path:"/",name:"SortPhrases",component:g}]});s.a.config.productionTip=!1,s.a.use(r.a),s.a.use(o.a,"v-icon"),new s.a({el:"#app",router:w,components:{App:i},template:"<App/>"})},UJbQ:function(t,e){},eZNK:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.91c9e523b8581cfaa3cd.js.map