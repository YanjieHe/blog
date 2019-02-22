(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),s=a.n(o);a(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(10),l=a(11),c=a(16),m=a(13),h=a(12),g=a(17),d=[{path:"/landscape-image-clustering",title:"Landscape Image Clustering based on Color Histogram",date:"September 16, 2018",summary:"Clustering the landscape images by their colors.",content:'My original thought about this project is to cluster the landscape images by their colors. I developed a web crawler to download 8892 landscape photos from <a href="https://wallpaper.mob.org/gallery/tag=landscape/">mob.org</a>.\n\nHowever, I ran up against difficulty in extracting the color features from the images. I was inspired by an assignment given by Professor Harvey. In the assignment, the material guides us to use the proportional of the channel to classify whether a certain picture depicts summer or winter. From this perspective, I searched some information online and was attracted by the concept of color histogram.\n\nTherefore, I designed my procedure as followings. Interestingly, I found a paper that has a similar approach to mine.<sup>[1]<sup>\n\nThe first step is quite obvious, to read the image as a three-dimensional matrix. The first and second dimensions are the count of rows and columns, and the third dimension is the color vector representing RGB, whose length is three. So it is basically an (N, M, 3) matrix.\n\nLet\u2019s take this picture as an example.\n\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/sample.jpg" alt = "Sample">\n\nIn this picture, the blue, yellow, green and red color seems to be dominant. If we plot the pixels in three-dimensional space, the distribution will look like this.\n\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/sample_color_scatter.png" alt = "Sample Color Scatter">\n\nSecondly, I count the frequency of the occurrence of primary colors and use it as the features of the images. Sometimes it is better to view the image in other color spaces, like HSV or HSL, which is more friendly to human\u2019s eyes. In this project, I still choose the RGB color space for simplicity.\n\nSince there are 256 possible values for a one color dimension, I transformed the value by dividing them with 26 so there will be 10 possible values for each color dimension, which will lessen the burden of calculation.\n\nThe third step is to apply the K-means algorithm to cluster the images. Here I write a scala script and run it on the spark, which will make four clusters. The color histogram of the cluster centers is shown in the figure.\n\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/cluster_centers_hist.png" alt = "Cluster Centers Color Histogram">\n\nThe centers look separated from each other, which is indicating a good result to me. Hopefully, the different clusters can be distinguished by human eyes. I collected 400 images of each cluster and display them in the followings.\n\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_0.png" alt = "400images_0">\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_1.png" alt = "400images_1">\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_2.png" alt = "400images_2">\n<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_3.png" alt = "400images_3">\n\nThey look great, aren\u2019t they? Each cluster appears to have a different color theme.\n\nReference:\n\n1. Amro, Anas Nassar, Ibrahim Tamimi, Hashem. (2013). Clustering of Digital Images based on Color Histogram.</li>\n2. Sharon Lin and Pat Hanrahan. 2013. Modeling how people extract color themes from images. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI \u201813). ACM, New York, NY, USA, 3101-3110.\n'}],u=(a(44),a(132)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).renderBlog=a.renderBlog.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"renderBlog",value:function(e,t,a,n){var o=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,r.a.createElement("a",{onClick:function(){return o.props.history.push("/blog/"+e)}},t),r.a.createElement("span",{className:"badge badge-info",id:"date-badge"},a)),r.a.createElement("hr",null),r.a.createElement("p",null,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"\u4f55\u71d5\u6770\u7684\u535a\u5ba2 (Yanjie He's Blog)"),r.a.createElement("p",null,"Good things come to those who keep moving forward."))),d.map(function(t){return e.renderBlog(t.path,t.title,t.date,t.summary)}))}}]),t}(r.a.Component),f=Object(u.a)(p),b=(a(48),a(131)),w=a(133),y=a(130),v=a(35),C=a.n(v),I=(a(128),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={markdown:e.content,title:e.title,date:e.date},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{class:"mt-4",id:"blog-text"},this.state.title),r.a.createElement("p",{align:"right"},"Posted on ",this.state.date),r.a.createElement("div",{class:"shadow p-3 mb-5 bg-white rounded",id:"blog-text"},r.a.createElement(C.a,{source:this.state.markdown,escapeHtml:!1})))}}]),t}(r.a.Component));s.a.render(r.a.createElement(b.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{path:"/blog/",exact:!0,component:f}),d.map(function(e){return r.a.createElement(y.a,{path:"/blog/"+e.path,exact:!0,component:function(){return r.a.createElement(I,{title:e.title,date:e.date,content:e.content})}})}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){e.exports=a(129)},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.1d59fef1.chunk.js.map