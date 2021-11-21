(this["webpackJsonpomdb-api-redux"]=this["webpackJsonpomdb-api-redux"]||[]).push([[0],{40:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(18),r=n.n(s),i=(n(40),n(10)),l=n(3),o=n(1);var j=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid container",children:[Object(o.jsx)(i.b,{className:"navbar-brand text-light",to:"/",children:"Movie API Redux"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item mx-3",children:Object(o.jsx)("i",{className:"fab fa-imdb fa-3x"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("i",{className:"fab fa-react fa-3x"})})]})})]})})},b=n(11),u=n(12),d=n(15),m=n(14),h=(n(47),n(13));var O=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(o.jsx)("img",{src:t.Poster,className:"card-img-top",alt:t.title}),Object(o.jsxs)("div",{className:"card-body text-center w-100",children:[Object(o.jsx)("h5",{className:"card-title",children:t.title}),Object(o.jsxs)("p",{className:"card-text",children:["Year: ",t.Year]}),Object(o.jsx)(i.b,{to:"/movie/".concat(t.imdbID),className:"btn btn-primary",children:"View Details"})]})]})};var p=function(){return Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("img",{src:"https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-24.jpg"})})},v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.loading,a=0!==t.length?t.Search.map((function(e){return Object(o.jsx)(O,{movie:e},e.imdbID)})):null;return Object(o.jsx)("div",{className:"container my-5 container-movies",children:n?Object(o.jsx)(p,{}):a})}}]),n}(a.Component),x=Object(h.b)((function(e){return{movies:e.movies,loading:e.loading}}),null)(v),g=n(25),f=n.n(g),y="SET_QUERY",N="FETCH_REQUEST",E="FETCH_REQUEST_SUCCESS",F="FETCH_REQUEST_FAILURE",S="FETCH_SINGLE_MOVIE",w="87db9a8e",C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).submitHandler=function(t){var n=e.props,a=n.query,c=n.fetchMoviesFn;t.preventDefault(),c(a)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.setQueryFn;return Object(o.jsx)("div",{className:"form-container py-5 bg-light",children:Object(o.jsxs)("form",{className:"container",onSubmit:this.submitHandler,children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"search",className:"form-label",children:"Search Movie:"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"search","aria-describedby":"search",onChange:function(t){return e(t.target.value)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-success",children:"Search"})]})})}}]),n}(a.Component),T=Object(h.b)((function(e){return{query:e.query}}),(function(e){return{setQueryFn:function(t){return e(function(e){return{type:y,payload:e}}(t))},fetchMoviesFn:function(t){return e(function(e){return function(t){t({type:N}),f.a.get("https://www.omdbapi.com/?apikey=".concat(w,"&s=").concat(e)).then((function(e){t({type:E,payload:e.data})})).catch((function(e){t({type:F,payload:e.message})}))}}(t))}}}))(C),k=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{}),Object(o.jsx)(x,{})]})}}]),n}(a.Component),D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchMovieFn(e),console.log(this.props)}},{key:"render",value:function(){var e=this.props.movie,t=e.Title,n=e.Year,a=e.Released,c=e.Runtime,s=e.Actors,r=e.Genre,l=e.Plot,j=e.Ratings,b=e.Poster;return Object(o.jsxs)("div",{className:"container container-movieDetail my-5",children:[Object(o.jsx)("div",{className:"left-img",children:Object(o.jsx)("img",{src:b,alt:""})}),Object(o.jsxs)("div",{className:"right-detail ms-5",children:[Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Title: "}),t]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Year: "}),n]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Release Date: "}),a]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Duration: "}),c]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Actors: "}),s]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Genre: "}),r]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Details: "}),l]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Ratings: "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("ul",{className:"list-group ",children:j?j.map((function(e,t){return Object(o.jsxs)("li",{className:"list-group-item ratings-list-item",children:[Object(o.jsxs)("strong",{children:[e.Source,": "]})," ",e.Value]},t)})):null})]})]}),Object(o.jsx)(i.b,{to:"/",className:"my-3 btn btn-warning",children:"Go Back"})]})]})}}]),n}(a.Component),R=Object(h.b)((function(e){return{movie:e.movie}}),(function(e){return{fetchMovieFn:function(t){return e(function(e){return function(t){f.a.get("https://www.omdbapi.com/?apikey=".concat(w,"&i=").concat(e)).then((function(e){t({type:S,payload:e.data})}))}}(t))}}}))(D),M=n(20),I=n(34),_=n(9),H={query:"",movies:[],movie:{},loading:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(_.a)(Object(_.a)({},e),{},{query:t.payload});case N:return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case E:return Object(_.a)(Object(_.a)({},e),{},{loading:!1,movies:t.payload});case F:return Object(_.a)(Object(_.a)({},e),{},{loading:!1});case S:return Object(_.a)(Object(_.a)({},e),{},{movie:t.payload});default:return e}},Q=[n(35).a],U=Object(M.createStore)(P,Object(I.composeWithDevTools)(M.applyMiddleware.apply(void 0,Q))),q=function(){return Object(o.jsx)(h.a,{store:U,children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",component:k,exact:!0}),Object(o.jsx)(l.a,{path:"/movie/:id",component:R,exact:!0})]})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root")),A()}},[[66,1,2]]]);
//# sourceMappingURL=main.4c8b3120.chunk.js.map