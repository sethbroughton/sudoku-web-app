(function(e){function r(r){for(var n,a,l=r[0],i=r[1],c=r[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(r);while(d.length)d.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var i=t[l];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},u=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var s=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"07e1":function(e,r,t){"use strict";var n=t("2acc"),o=t.n(n);o.a},"2acc":function(e,r,t){},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("sudoku")],1)},u=[],a=t("2877"),l={},i=Object(a["a"])(l,o,u,!1,null,null,null),c=i.exports,s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"sudoku-board"},[e._l(9,(function(r,n){return t("div",{key:n},e._l(9,(function(r,o){return t("div",{key:o},[t("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:e.board[n][o],expression:"board[i][j]",modifiers:{number:!0,lazy:!0}}],staticClass:"cell",attrs:{type:"number",min:"1",max:"9"},domProps:{value:e.board[n][o]},on:{change:function(r){e.$set(e.board[n],o,e._n(r.target.value))},blur:function(r){return e.$forceUpdate()}}})])})),0)})),t("div",{attrs:{id:"example-1"}},[t("button",{on:{click:e.displayBoard}},[e._v("Solve")])])],2)},f=[],d={data:function(){return{board:[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]]}},methods:{checkGuess:function(e,r,t,n){for(var o=r,u=0;u<n.length;u++)if(n[o][u]==e)return!1;for(var a=t,l=0;l<n.length;l++)if(n[l][a]==e)return!1;for(var i=r-r%3,c=t-t%3,s=i;s<i+3;s++)for(var f=c;f<c+3;f++)if(n[s][f]==e)return!1;return!0},solveSudoku:function(e){for(var r=0;r<e.length;r++)for(var t=0;t<e.length;t++)if(""==e[r][t]){for(var n=1;n<=9;n++)if(this.checkGuess(n,r,t,e)){if(e[r][t]=n,this.$forceUpdate(),this.solveSudoku(e))return!0;e[r][t]=""}return!1}return this.board=e,!0},displayBoard:function(){var e=this.board;this.solveSudoku(e),console.log(e),this.$forceUpdate()}}},p=d,v=(t("6d74"),Object(a["a"])(p,s,f,!1,null,null,null)),b=v.exports,h=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"cell",on:{click:function(r){return e.$emit("click")}}},[""!==e.value?t("span",[e._v(e._s(e.value))]):e._e()])},m=[],y=(t("a9e3"),{props:{value:Number}}),_=y,g=(t("07e1"),Object(a["a"])(_,h,m,!1,null,null,null)),k=g.exports;n["a"].component("sudoku",b),n["a"].component("cell",k),new n["a"]({el:"#app",render:function(e){return e(c)}})},"6d74":function(e,r,t){"use strict";var n=t("cd6b"),o=t.n(n);o.a},cd6b:function(e,r,t){}});
//# sourceMappingURL=app.2058ab9b.js.map