(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o);a(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(7),l=a(8),i=a(10),m=a(9),u=a(13),h=a(11),d=[{path:"/landscape-image-clustering",fileName:"Landscape-Image-Clustering.md",title:"Landscape Image Clustering based on Color Histogram",date:"September 16, 2018",summary:"My original thought about this project is to cluster the landscape images by their colors. I developed a web crawler to download 8892 landscape photos from mob.org. \nHowever, I ran up against difficulty in extracting the color features from the images."},{path:"/text-co-occurrence-network",fileName:"Text-Co-occurrence-Network.md",title:"Text Co-occurrence Network Analysis for The Hunger Games",date:"September 08, 2018",summary:"I am a fan of The Hunger Games, and I have read all the three books. The story of The Hunger Games is narrated by the young girl, Katniss Everdeen. There are many characters in the story, and what I am going to do is to describe the connections between the characters from a data science perspective."}],p=(a(44),a(136)),g={home:"/blog",blogPrefix:"https://raw.githubusercontent.com/YanjieHe/blog/master/posts/"},b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={currentPage:e.currentPage},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor03"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"Home"===this.state.currentPage?"nav-item active":"nav-item"},r.a.createElement("span",{className:"nav-link",onClick:function(){return e.props.history.push(g.home)}},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"Categories"===this.state.currentPage?"nav-item active":"nav-item"},r.a.createElement("span",{className:"nav-link",onClick:function(){return e.props.history.push(g.home+"/categories")}},"Categories")),r.a.createElement("li",{className:"Tags"===this.state.currentPage?"nav-item active":"nav-item"},r.a.createElement("span",{className:"nav-link",onClick:function(){return e.props.history.push(g.home+"/tags")}},"Tags")),r.a.createElement("li",{className:"About"===this.state.currentPage?"nav-item active":"nav-item"},r.a.createElement("span",{className:"nav-link",onClick:function(){return e.props.history.push(g.home+"/about")}},"About")))))}}]),t}(r.a.Component),v=Object(p.a)(b),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).renderBlog=a.renderBlog.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderBlog",value:function(e,t,a,n){var o=this;return r.a.createElement("div",{className:"shadow p-3 mb-5 bg-white rounded",style:{width:"100%"}},r.a.createElement("h5",null,r.a.createElement("span",{onClick:function(){return o.props.history.push(g.home+e)}},t),r.a.createElement("span",{className:"badge badge-info",id:"date-badge"},a)),r.a.createElement("hr",null),r.a.createElement("p",null,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,{currentPage:"Home"}),d.map(function(t){return e.renderBlog(t.path,t.title,t.date,t.summary)}))}}]),t}(r.a.Component),E=Object(p.a)(f),y=(a(48),a(49),a(52),a(135)),w=a(137),k=a(134),N=a(37),O=a.n(N),C=(a(132),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={markdown:"",title:e.post.title,date:e.post.date,fileName:e.post.fileName},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g.blogPrefix+this.state.fileName;fetch(t).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{currentPage:"Home"}),r.a.createElement("div",{className:"shadow p-3 mb-5 bg-white rounded"},r.a.createElement("h3",{className:"mt-4"},this.state.title),r.a.createElement("p",{align:"right"},"Posted on ",this.state.date),r.a.createElement(O.a,{source:this.state.markdown,escapeHtml:!1})))}}]),t}(r.a.Component)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).renderOneCategory=a.renderOneCategory.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderOneCategory",value:function(e,t){return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},e,r.a.createElement("span",{className:"badge badge-primary badge-pill"},t))}},{key:"renderBlog",value:function(e,t,a,n){var o=this;return r.a.createElement("div",{className:"shadow p-3 mb-5 bg-white rounded",style:{width:"100%"}},r.a.createElement("h5",null,r.a.createElement("span",{onClick:function(){return o.props.history.push("/blog"+e)}},t),r.a.createElement("span",{className:"badge badge-info",id:"date-badge"},a)),r.a.createElement("hr",null),r.a.createElement("p",null,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,{currentPage:"Categories"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-10 col-sm-3",style:{"padding-bottom":"50px"}},r.a.createElement("ul",{className:"list-group"},this.renderOneCategory("C++",90),this.renderOneCategory("Arts",30),this.renderOneCategory("Machine Learning",5))),r.a.createElement("div",{className:"col-xs-10 col-sm-7"},d.map(function(t){return e.renderBlog(t.path,t.title,t.date,t.summary)}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(y.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{key:"/",path:g.home,exact:!0,component:E}),r.a.createElement(k.a,{key:"/categories",path:g.home+"/categories",exact:!0,component:j}),d.map(function(e){return r.a.createElement(k.a,{key:e.path,path:g.home+e.path,exact:!0,component:function(){return r.a.createElement(C,{post:e})}})}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,t,a){e.exports=a(133)},43:function(e,t,a){},44:function(e,t,a){},52:function(e,t,a){}},[[38,1,2]]]);
//# sourceMappingURL=main.c6663270.chunk.js.map