module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="MRYV")}({"+ZQJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n("cDcd")),a=u(n("rf6O")),i=n("oncg");function u(e){return e&&e.__esModule?e:{default:e}}n("WXJR");var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchQuery:""},n.setSearchQuery=n.setSearchQuery.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"setSearchQuery",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"render",value:function(){return o.default.createElement("div",{className:"form-group search-bar"},o.default.createElement("p",null,"Find your movie"),o.default.createElement(l,{setSearchQuery:this.setSearchQuery}),o.default.createElement("p",null,"Search by:"),o.default.createElement(f,null),o.default.createElement(s,{searchQuery:this.state.searchQuery}))}}]),t}();function l(e){return o.default.createElement("input",{type:"text",className:"form-control",onChange:e.setSearchQuery,placeholder:"Search"})}function f(){return o.default.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},o.default.createElement("label",{className:"btn btn-danger btn-sm active"},o.default.createElement("input",{type:"radio",name:"options",id:"option2",autoComplete:"off"})," Title"),o.default.createElement("label",{className:"btn btn-danger btn-sm"},o.default.createElement("input",{type:"radio",name:"options",id:"option2",autoComplete:"off"})," Genre"))}function s(e){return o.default.createElement(i.Link,{to:"/search/"+e.searchQuery},o.default.createElement("button",{type:"button",className:"btn btn-danger btn-sm search-button"},"Search"))}t.default=c,s.propTypes={searchQuery:a.default.string},l.propTypes={setSearchQuery:a.default.func}},"0Cyf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("cDcd"),i=(r=a)&&r.__esModule?r:{default:r};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"render",value:function(){return"This page is not available."}}]),t}();t.default=u},"209A":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("cDcd"),i=(r=a)&&r.__esModule?r:{default:r};n("9yI2");var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.PureComponent),o(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"form-group info-bar"},i.default.createElement("p",{className:"movie-counter"},"7 movies found"),i.default.createElement("div",{className:"sort-movie"},i.default.createElement("p",null,"sort by:"),i.default.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},i.default.createElement("label",{className:"btn btn-secondary btn-sm active"},i.default.createElement("input",{type:"radio",name:"options",id:"option2",autoComplete:"off"})," Title"),i.default.createElement("label",{className:"btn btn-secondary btn-sm"},i.default.createElement("input",{type:"radio",name:"options",id:"option2",autoComplete:"off"})," Genre"))))}}]),t}();t.default=u},"7ITC":function(e,t){e.exports=require("react-dom/server")},"7oih":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("cDcd")),a=(u(n("rf6O")),u(n("ZBbe"))),i=u(n("DrSH"));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.store;return o.createElement("div",{className:"layout"},o.createElement(a.default,null),o.createElement(i.default,{store:e}))}}]),t}();t.default=c},"8Vax":function(e,t){e.exports=require("babel-polyfill")},"9ClG":function(e,t){e.exports=require("react-hot-loader")},"9ZMk":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"",""])},"9yI2":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".info-bar {\n  background-color: #ddd;\n  padding: 20px;\n  width: 100%; }\n\np {\n  color: #555;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.sort-movie {\n  float: right; }\n",""])},Cq13:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".movies-container {\n  flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-align-items: center;\n  -webkit-justify-content: center;\n  align-items: center;\n  display: flex;\n  justify-content: center; }\n  .movies-container .movie {\n    border: 1px solid black;\n    cursor: pointer;\n    font-size: 11px;\n    height: 380px;\n    margin: 20px;\n    position: relative;\n    width: 200px; }\n    .movies-container .movie img {\n      width: 100%; }\n    .movies-container .movie .movie-data {\n      padding: 10px;\n      position: relative; }\n      .movies-container .movie .movie-data p {\n        display: block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n      .movies-container .movie .movie-data .movie-name {\n        width: 80%; }\n      .movies-container .movie .movie-data .movie-genres {\n        font-size: 10px; }\n      .movies-container .movie .movie-data .movie-year {\n        border: 1px solid black;\n        bottom: 38px;\n        padding: 2px;\n        position: absolute;\n        right: 10px; }\n",""])},DrSH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=p(n("cDcd")),a=p(n("+ZQJ")),i=p(n("209A")),u=n("oncg"),c=p(n("gc65")),l=p(n("Jd7k")),f=p(n("vO1j")),s=p(n("0Cyf"));function p(e){return e&&e.__esModule?e:{default:e}}n("bWQM");var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.BrowserRouter,null,o.default.createElement("div",{className:"main-page container"},o.default.createElement(a.default,null),o.default.createElement(i.default,null),o.default.createElement(u.Switch,null,o.default.createElement(u.Route,{exact:!0,path:"/",component:c.default}),o.default.createElement(u.Route,{path:"/movie/:id?",component:l.default}),o.default.createElement(u.Route,{path:"/search/:query?",component:f.default}),o.default.createElement(u.Route,{component:s.default}))))}}]),t}();t.default=d},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},Jd7k:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n("cDcd")),a=u(n("rf6O")),i=n("h74D");function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tasks:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.movies.filter(function(t){return t.id.toString()===e.props.match.params.id});return o.default.createElement("div",{className:"movie-details container"},o.default.createElement("p",{className:"movie-title"},"Title: ",t[0].title),o.default.createElement("p",{className:"movie-year"},"Release Date: ",t[0].release_date),o.default.createElement("p",{className:"movie-description"},"Overview: ",t[0].overview),o.default.createElement("img",{src:t[0].poster_path}))}}]),t}();c.propTypes={movies:a.default.array.isRequired},t.default=(0,i.connect)(function(e,t){return{movies:e.movies}})(c)},MRYV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function(e,t){var n=(0,o.renderToString)(r.default.createElement(a.default,null));t.send('\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset="utf-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">\n            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"><\/script>\t<title>React Fundamentals</title>\n        </head>\n        <body>\n            <div id="app">'+n+'</div>\n            <script src="js/main.js"><\/script>\n        </body>\n        </html>\n    ')}};var r=i(n("cDcd")),o=n("7ITC"),a=i(n("tjUo"));function i(e){return e&&e.__esModule?e:{default:e}}},UHk2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"getAllMovies",value:function(){return fetch("http://react-cdp-api.herokuapp.com/movies").then(function(e){return e.json()}).catch(function(e){return e})}}]),e}();t.default=o},"W+0S":function(e,t){e.exports=require("isomorphic-fetch")},WXJR:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".search-bar {\n  background-color: #bbb;\n  margin-bottom: 0;\n  padding: 20px;\n  width: 100%; }\n\np {\n  color: #fff;\n  display: inline-block;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.btn-group {\n  margin-left: 10px; }\n\ninput {\n  margin-bottom: 20px; }\n\n.search-button {\n  float: right;\n  width: 150px; }\n",""])},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZBbe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("cDcd"),i=(r=a)&&r.__esModule?r:{default:r};n("dEGB");var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"render",value:function(){return i.default.createElement("header",{className:"header"},i.default.createElement("span",{className:"title"},"netflix roulette"))}}]),t}();t.default=u},ZSx1:function(e,t){e.exports=require("redux-thunk")},aWi5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_MOVIES_SUCCESS="GET_MOVIES_SUCCESS"},bWQM:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".main-page {\n  width: 80%; }\n  .main-page .tasks {\n    width: 60%; }\n",""])},cDcd:function(e,t){e.exports=require("react")},dEGB:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"header {\n  padding: 20px;\n  width: 80%;\n  margin: 0 auto; }\n  header .title {\n    font-size: 30px; }\n",""])},dFyD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("cDcd"),i=(r=a)&&r.__esModule?r:{default:r};var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasError:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.default.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}();t.default=u},gc65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n("cDcd")),a=l(n("rf6O")),i=n("h74D"),u=l(n("kKTL")),c=l(n("dFyD"));function l(e){return e&&e.__esModule?e:{default:e}}n("9ZMk");var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(c.default,null,o.default.createElement(u.default,{movies:this.props.movies})))}}]),t}();f.propTypes={movies:a.default.array.isRequired},t.default=(0,i.connect)(function(e,t){return{movies:e.movies}})(f)},h74D:function(e,t){e.exports=require("react-redux")},kKTL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n("cDcd")),a=u(n("rf6O")),i=n("oncg");function u(e){return e&&e.__esModule?e:{default:e}}n("Cq13");var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=void 0;return this.props&&this.props.movies&&(e=this.props.movies.map(function(e,t){var n=e.genres?e.genres.join(", "):"",r=e.release_date?e.release_date.substring(0,4):"";return o.default.createElement(i.Link,{to:"/movie/"+e.id,key:t},o.default.createElement("div",{className:"movie"},o.default.createElement("img",{src:e.poster_path}),o.default.createElement("div",{className:"movie-data"},o.default.createElement("p",{className:"movie-name",title:e.title},e.title),o.default.createElement("p",{className:"movie-genres",title:n},n),o.default.createElement("p",{className:"movie-year"},r))))})),o.default.createElement("div",{className:"movies-container"},e)}}]),t}();t.default=c,c.propTypes={movies:a.default.array.isRequired}},oncg:function(e,t){e.exports=require("react-router-dom")},rKB8:function(e,t){e.exports=require("redux")},rf6O:function(e,t){e.exports=require("prop-types")},tPtM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.GET_MOVIES_SUCCESS:return{movies:t.movies.data};default:return e}};var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("aWi5"));var o={movies:[{title:"Mock movie",genre:"unknown",year:2002},{title:"Mock movie",genre:"unknown",year:2002}]}},tjUo:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=l(n("cDcd"));n("W+0S"),n("8Vax");l(n("7oih"));var o=n("9ClG"),a=n("rKB8"),i=(n("h74D"),l(n("ZSx1"))),u=l(n("tPtM")),c=(n("oncg"),n("wu7J"));function l(e){return e&&e.__esModule?e:{default:e}}(0,a.createStore)(u.default,(0,a.applyMiddleware)(i.default)).dispatch((0,c.loadMovies)());t.default=(0,o.hot)(e)(function(){r.default.createElement("div",null,"hehehe")})}).call(this,n("YuTi")(e))},vO1j:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("cDcd"),i=(r=a)&&r.__esModule?r:{default:r};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"render",value:function(){return i.default.createElement("h1",null,"Search: ",this.props.match.params.query)}}]),t}();t.default=u},wu7J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadMoviesSuccess=void 0,t.loadMovies=function(){return function(e){return i.default.getAllMovies().then(function(t){e(u(t))}).catch(function(e){throw e})}};var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("aWi5")),a=n("UHk2"),i=(r=a)&&r.__esModule?r:{default:r};var u=t.loadMoviesSuccess=function(e){return{type:o.GET_MOVIES_SUCCESS,movies:e}}}});