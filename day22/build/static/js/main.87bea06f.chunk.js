(this.webpackJsonpday22=this.webpackJsonpday22||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(6),a=n.n(i),r=n(5),u=(n(12),n(13),n(0)),j=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Tanmay's Meme Generator"}),Object(u.jsx)("div",{className:"templates",children:e.templates.map((function(t){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{onClick:function(){return e.setMeme(t)},className:"images",style:{backgroundImage:"url(".concat(t.url,")")}})},t.id)}))})]})},o=n(7),l=(n(15),function(e){return console.log(e.meme.box_count),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Tanmay's Meme Generator"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{className:"image",src:e.meme.url}),Object(u.jsx)("div",{className:"inputs",children:Object(o.a)(Array(e.meme.box_count)).map((function(e,t){return Object(u.jsx)("input",{},t)}))}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return e.setMeme(null)},children:"Go Back"}),Object(u.jsx)("button",{children:"Generate Meme"})]})]})]})});var m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),a=Object(r.a)(i,2),o=a[0],m=a[1];return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){s(e.data.memes)}))}),[]),Object(u.jsx)("div",{className:"App",children:null===o?Object(u.jsx)(j,{templates:n,setMeme:m}):Object(u.jsx)(l,{templates:n,setMeme:m,meme:o})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.87bea06f.chunk.js.map