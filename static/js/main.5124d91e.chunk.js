(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),l=n.n(c),r=(n(27),n(4)),i=n(5),s=n(9),u=n(6),m=n(8),p=n(19),h=n.n(p),b=(n(28),n(7)),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchPosts()}},{key:"componentWillReceiveProps",value:function(e){e.newPost&&this.props.posts.unshift(e.newPost)}},{key:"render",value:function(){var e=this.props.posts.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))});return o.a.createElement("div",null,o.a.createElement("h1",null,"Posts"),e)}}]),t}(a.Component),f=Object(b.b)(function(e){return{posts:e.posts.items,newPost:e.posts.item}},{fetchPosts:function(){return function(e){fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_POST",payload:t})})}}})(d),E=n(11),O=n(1),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:"",body:""},n.onChange=n.onChange.bind(Object(O.a)(Object(O.a)(n))),n.onSubmit=n.onSubmit.bind(Object(O.a)(Object(O.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,body:this.state.body};this.props.createPost(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Add Post"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",null,o.a.createElement("label",null,"Title: "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"title",onChange:this.onChange,value:this.state.title})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("label",null,"Body: "),o.a.createElement("br",null),o.a.createElement("textarea",{name:"body",onChange:this.onChange,value:this.state.body})),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(a.Component),j=Object(b.b)(null,{createPost:function(e){return function(t){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"NEW_POST",payload:e})})}}})(y),v=n(2),g=n(21),w=n(14),S={items:[],item:{}},_=Object(v.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POST":return Object(w.a)({},e,{items:t.payload});case"NEW_POST":return Object(w.a)({},e,{item:t.payload});default:return e}}}),P=[g.a],k=Object(v.e)(_,{},Object(v.d)(v.a.apply(void 0,P),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(b.a,{store:k},o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),o.a.createElement(j,null),o.a.createElement("hr",null),o.a.createElement(f,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.5124d91e.chunk.js.map