(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{173:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(59),r=a.n(o),l=(a(72),a(73),a(14)),s=a(13),u=a(60),i=a(5),m=a(6),p=a(8),h=a(7),d=a(9),b=a(22),f=a.n(b),E=(a(90),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleInputChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a.handleonSubmit=function(){var e=a.state,t=e.title,n=e.body,c=e.author;return t&&n&&c?(f.a.post("https://qootest.com/posts",{title:t,body:n,author:c}).then((function(){alert("\u6210\u529f"),a.setState({title:"",body:"",author:""})})).catch((function(){return alert("\u5931\u6557")})),null):alert("empty")},a.state={title:"",body:"",author:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body,n=e.author;return c.a.createElement("section",{className:"addPost"},c.a.createElement("form",null,c.a.createElement("input",{className:"addPost__title",type:"text",value:t,name:"title",onChange:this.handleInputChange,placeholder:"title"}),c.a.createElement("input",{className:"addPost__author",type:"text",value:n,name:"author",onChange:this.handleInputChange,placeholder:"author"}),c.a.createElement("textarea",{className:"addPost__body",value:a,name:"body",onChange:this.handleInputChange,placeholder:"content"}),c.a.createElement("input",{className:"addPost__submit",type:"button",onClick:this.handleonSubmit,value:"Submit"})))}}]),t}(n.Component)),g=a(61),v=a.n(g),_=(a(173),function(){return c.a.createElement("section",{className:"loadging_wrapper"},c.a.createElement("div",{className:"loadingio-spinner-ripple-wzjb4cnjpyc"},c.a.createElement("div",{className:"ldio-lo6hsbn369h"},c.a.createElement("div",null),c.a.createElement("div",null))))}),j=a(209),y=a(208),O=a(205),N=a(206),I=a(207),k=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){j.a.registerLanguage("jsx",O.a),j.a.registerLanguage("css",N.a),j.a.registerLanguage("javascript",I.a)}},{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return c.a.createElement("figure",{className:"highlight"},c.a.createElement(j.a,{language:t,style:y.a},a))}}]),t}(n.PureComponent);k.defaultProps={language:null};var x=k,C=(a(194),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={data:{author:"",boyd:"",createdAt:1573649501347,title:""}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;fetch("https://qootest.com/posts/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data,t=e.title,a=e.author,n=e.body,o=e.createdAt;if(!t)return c.a.createElement(_,null);var r=new Date(o);return c.a.createElement("section",{className:"article wrapper"},c.a.createElement("h1",{className:"article__title"},t),c.a.createElement("header",{className:"article__info"},c.a.createElement("address",{className:"article__author"},"Author:"," ".concat(a)),c.a.createElement("time",{className:"article__time"},r.toDateString())),c.a.createElement("div",{className:"article__text"},c.a.createElement("div",null,c.a.createElement(v.a,{source:n,escapeHtml:!1,renderers:{code:x}}))),c.a.createElement(l.b,{type:"button",className:"article__button button",to:"/post"},"Return"))}}]),t}(n.Component)),w=(a(196),a(197),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.body,n=e.value,o=this.props.history;return c.a.createElement("li",{className:"post"},c.a.createElement("h1",{className:"post__title"},t),c.a.createElement("p",{className:"post__text"},a),c.a.createElement("button",{type:"button",className:"post__button button",onClick:function(){o.push("/post/".concat(n))}},"View details"))}}]),t}(n.PureComponent)),P=Object(s.e)(w),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={posts:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://qootest.com/posts?_sort=id&_order=desc&&_limit=200&_page=1").then((function(t){e.setState({posts:t.data})}))}},{key:"render",value:function(){var e=this.state.posts;return e[0]?c.a.createElement("ul",{className:"posts wrapper"},e.map((function(e){return e.title?c.a.createElement(P,{title:e.title,body:e.body,value:e.id,key:e.id}):null}))):c.a.createElement(_,null)}}]),t}(n.Component),A=(a(198),a(199),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.to,n=e.exact;return c.a.createElement(s.a,{path:a,exact:n},(function(e){var n=e.match;return c.a.createElement("li",{className:"nav__button ".concat(n?"nav__buttom-checked":"")},c.a.createElement(l.b,{to:a},t))}))}}]),t}(n.PureComponent)),L=function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(A,{exact:!0,to:"/"},"Home"),c.a.createElement(A,{exact:!1,to:"/post"},"PostList"),c.a.createElement(A,{exact:!1,to:"/about"},"About"),c.a.createElement(A,{exact:!1,to:"/addpost"},"AddPost")))},q=(a(200),function(){return c.a.createElement("article",{className:"about"},"I am about page. I am about page. I  I am about page.I am about page. I am about page. am about page. I am about page. I am about page. I am about page. I am about page. I am about page. I am about page.")}),D=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",{className:"header__title"},"Hello, World"),c.a.createElement("p",{className:"header__text"},"This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."),c.a.createElement("div",{className:"header__button button"},"Learn more")))},H=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement(L,null),c.a.createElement(s.a,{exact:!0,path:"/",component:D}),c.a.createElement(s.a,{path:"/about",component:q}),c.a.createElement(s.a,{exact:!0,path:"/post",component:S}),c.a.createElement(s.a,{path:"/post/:postId",component:C}),c.a.createElement(s.a,{path:"/addpost",component:E})),c.a.createElement("div",{className:"bottom"},c.a.createElement("div",{id:"line"}),c.a.createElement("footer",null,"\xa9 Company 2019")))};r.a.render(c.a.createElement(H,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(201)},72:function(e,t,a){},73:function(e,t,a){},90:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.6e038921.chunk.js.map