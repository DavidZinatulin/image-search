(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e){e.exports={search:"Search",save:"Save",loading:"Loading",load_more:"Load more",no_results_found:"Your search query did not return any results",saved_queries:"Saved queries"}},308:function(e,t,n){},309:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){"use strict";n.r(t);n(134);var r=n(1),a=n(129),o=n(63),i=n(31),c=n(132),u=5;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={saved:[]};function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={data:[],loading:!1,notFound:!1},p=Object(i.combineReducers)({queriesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_QUERY":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},e,{saved:t.saved});default:return e}},imagesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_IMAGES":return m({},e,{loading:t.loading});case"RECEIVE_IMAGES":return m({},e,{loading:t.loading,data:t.data,notFound:t.notFound});case"CLEAR_IMAGES":return m({},e,{data:t.data,notFound:t.notFound});default:return e}}}),v=n(133);n(308),n(309);var y=n(28),b={name:"searchForm",fields:[{name:"query",type:"textfield",defaultValue:""}]},h=n(94),g=n.n(h);function E(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function _(e,t){return w.apply(this,arguments)}function w(){var e;return e=regeneratorRuntime.mark(function e(t,n){var r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new g.a({applicationId:"85a50f15e68b34857485776e608edfe5c46c5369709f02fcfb3174d326299399",secret:"b9486f308cbac374f031ead01e993df5854b96de1374f74fd60e19ad82b8c599"}),e.next=3,r.search.photos(t,n,u);case 3:return a=e.sent,e.next=6,Object(h.toJson)(a);case 6:return o=e.sent,e.abrupt("return",o.results);case 8:case"end":return e.stop()}},e,this)}),(w=function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){E(o,r,a,i,c,"next",e)}function c(e){E(o,r,a,i,c,"throw",e)}i(void 0)})}).apply(this,arguments)}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}var j=function(e,t,n){return function(){var r,a=(r=regeneratorRuntime.mark(function r(a){var o,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"REQUEST_IMAGES",loading:!0}),r.next=3,_(e,t);case 3:o=r.sent,i=0===o.length,a({type:"RECEIVE_IMAGES",loading:!1,data:[].concat(O(n),O(o)),notFound:i});case 6:case"end":return r.stop()}},r,this)}),function(){var e=this,t=arguments;return new Promise(function(n,a){var o=r.apply(e,t);function i(e){S(o,n,a,i,c,"next",e)}function c(e){S(o,n,a,i,c,"throw",e)}i(void 0)})});return function(e){return a.apply(this,arguments)}}()};function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(325);var k=function(e){var t=e.structure,n=e.values,a=e.onUpdate,o=e.onSubmit,i=function(e){a(t.name,e.target.name,e.target.value)};return r.createElement("div",{className:"form",onKeyPress:function(e){"Enter"===e.key&&o(t.name)}},t.fields.map(function(e,t){return r.createElement("div",{key:t},function(e){var t=e.name;switch(e.type){case"textfield":return r.createElement("input",{type:"text",className:"form-control",name:t,value:n[t],onChange:i})}}(e))}))},P=(n(326),function(e){var t=e.onClick,n=e.label,a=e.className,o=void 0===a?"":a,i=e.disabled,c=void 0!==i&&i;return r.createElement("button",{className:"btn ".concat(o),onClick:t,disabled:c},n)}),A=function(e){var t=e.data,n=e.loading,a=e.notFound,o=e.loadMore,i=n&&r.createElement("div",{className:"image-grid__loader-overlay"},r.createElement("div",{className:"image-grid__loader-container"},r.createElement("div",{className:"loader"}),r.createElement("h3",null,y.loading,"..."))),c=!n&&t.length>0&&r.createElement("div",{className:"image-grid__button-container"},r.createElement(P,{onClick:o,label:y.load_more,className:"btn-success"})),u=a&&r.createElement("div",null,y.no_results_found),s=r.createElement("div",{className:"image-grid__scroll-container"},u,r.createElement("div",{className:"card-columns"},t.map(function(e,t){return r.createElement("div",{key:t,className:"card"},r.createElement("img",{src:e.urls.thumb,alt:"",className:"card-img-top"}))})));return r.createElement("div",{className:"image-grid"},r.createElement("div",{className:"position-relative"},s,i),c)},F=(n(327),function(e){var t=e.saved,n=e.onClick;return r.createElement("div",{className:"query-list"},r.createElement("div",null,y.saved_queries,":"),t.map(function(e,t){return r.createElement("div",{key:t,onClick:function(){return n(e)},className:"list-group-item"},e)}))});function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var U,L,T=function(e){function t(){var e,n,r,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=M(t).call(this))||"object"!==I(r)&&"function"!=typeof r?x(n):r).state=q({},b.name,(a=b.fields,o={},a.map(function(e){o[e.name]=e.defaultValue}),o)),e._handleFormUpdate=e._handleFormUpdate.bind(x(x(e))),e._submitSearchForm=e._submitSearchForm.bind(x(x(e))),e._loadMoreImages=e._loadMoreImages.bind(x(x(e))),e._saveQuery=e._saveQuery.bind(x(x(e))),e._loadQuery=e._loadQuery.bind(x(x(e))),e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,r["Component"]),n=t,(a=[{key:"_handleFormUpdate",value:function(e,t,n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){q(e,t,n[t])})}return e}({},this.state[e],q({},t,n));this.setState(q({},e,r))}},{key:"_submitSearchForm",value:function(){var e=this.state[b.name].query;this.props.initialLoad(e)}},{key:"_loadMoreImages",value:function(){var e=this.state[b.name].query,t=this.props.images.data,n=Math.ceil(t.length/u)+1;this.props.loadImages(e,n,t)}},{key:"_saveQuery",value:function(){var e=this.state[b.name].query,t=this.props.queries.saved;this.props.saveQuery(e,t)}},{key:"_loadQuery",value:function(e){this._handleFormUpdate(b.name,"query",e),this.props.initialLoad(e)}},{key:"render",value:function(){var e=this.props,t=e.images,n=e.queries,a=this.state[b.name].query,o=""===a||a===n.saved[0];return r.createElement("div",{className:"app"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-8"},r.createElement(k,{structure:b,values:this.state.searchForm,onUpdate:this._handleFormUpdate,onSubmit:this._submitSearchForm})),r.createElement("div",{className:"col-sm-4 app__inline-buttons"},r.createElement(P,{onClick:this._submitSearchForm,label:y.search,className:"btn-primary"}),r.createElement(P,{onClick:this._saveQuery,label:y.save,className:"btn-success",disabled:o}))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-8"},r.createElement(A,R({},t,{loadMore:this._loadMoreImages}))),r.createElement("div",{className:"col-sm-4"},r.createElement(F,R({},n,{onClick:this._loadQuery}))))))}}])&&C(n.prototype,a),o&&C(n,o),t}(),G=Object(o.b)(function(e){return{images:e.imagesReducer,queries:e.queriesReducer}},function(e){return{loadImages:function(t,n,r){return e(j(t,n,r))},initialLoad:function(t){return e(function(e){return function(t){t({type:"CLEAR_IMAGES",data:[],notFound:!1}),t(j(e,1,[]))}}(t))},saveQuery:function(t,n){return e(function(e,t){return{type:"SAVE_QUERY",saved:[e].concat(N(t))}}(t,n))}}})(T),V=(L=Object(i.applyMiddleware)(v.a),L=Object(c.composeWithDevTools)(L),Object(i.createStore)(p,U,L));a.render(r.createElement(o.a,{store:V},r.createElement("div",{className:"app"},r.createElement(G,null))),document.getElementById("root"))}},[[328,1,2]]]);