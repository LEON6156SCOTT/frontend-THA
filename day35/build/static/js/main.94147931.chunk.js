(this.webpackJsonpday35=this.webpackJsonpday35||[]).push([[0],{26:function(e,s,c){},27:function(e,s,c){},29:function(e,s,c){},30:function(e,s,c){},31:function(e,s,c){},32:function(e,s,c){},33:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),n=c(6),r=c.n(n),i=c(2),j=c(11),l=c.n(j),o=c(13),b=function(){return function(){var e=Object(o.a)(l.a.mark((function e(s){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./DATA/user.json").then((function(e){return e.json()})).then((function(e){s({type:"FETCH_DATA",payload:e})}));case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()},m=(c(26),c(4)),u=(c(27),c(0)),d=function(){var e=Object(t.useState)(!1),s=Object(m.a)(e,2),c=s[0],a=s[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"main-nav",children:Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)("div",{className:"logo-container",children:Object(u.jsx)("img",{className:"logo",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(u.jsx)("div",{children:c?Object(u.jsx)("input",{onBlur:function(){a(!1)},placeholder:"Search",type:"text",autoFocus:!0}):Object(u.jsx)("div",{className:"search-div",onClick:function(){return a(!0)},children:Object(u.jsxs)("span",{className:"search-span",children:[Object(u.jsx)("i",{className:"far fa-search"})," Search"]})})}),Object(u.jsxs)("div",{className:"right-menu",children:[Object(u.jsx)("i",{className:"fas fa-home"}),Object(u.jsx)("i",{className:"fab fa-facebook-messenger"}),Object(u.jsx)("i",{className:"far fa-compass"}),Object(u.jsx)("i",{className:"far fa-heart"}),Object(u.jsx)("i",{className:"fas fa-user"})]})]})})})},O=(c(29),c(30),function(){var e=Object(i.b)();Object(t.useEffect)((function(){e(b())}),[]);var s=Object(i.c)((function(e){return e.data}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsxs)("div",{className:"menu-top",children:[Object(u.jsx)("img",{className:"user-img",src:"https://picsum.photos/100",alt:""}),Object(u.jsxs)("div",{className:"user-name",children:[Object(u.jsx)("span",{children:Object(u.jsx)("strong",{children:"Instagram user"})}),Object(u.jsx)("span",{children:"Instagramer"})]})]}),Object(u.jsx)("div",{className:"menu-mid",children:Object(u.jsx)("p",{children:" Suggestions for you"})}),Object(u.jsx)("div",{className:"menu-bottom",children:s.map((function(e,s){return Object(u.jsxs)("div",{className:"sug-card",children:[Object(u.jsxs)("div",{className:"sug-user",children:[Object(u.jsx)("img",{className:"sug-img",src:e.profilePicture,alt:""}),Object(u.jsxs)("span",{className:"sug-name",children:[" ",e.username," "]})]},s),Object(u.jsx)("span",{className:"follow",children:"Follow"})]},s)}))})]})})}),f=c(8),h=function(){var e=Object(t.useState)(!1),s=Object(m.a)(e,2),c=s[0],a=s[1],n=Object(t.useState)(!1),r=Object(m.a)(n,2),i=r[0],j=r[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsxs)("div",{className:"top-left",children:[Object(u.jsx)("img",{className:"pfp",src:"https://picsum.photos/700",alt:""}),Object(u.jsx)("span",{className:"username",children:"Instagram user"})]}),Object(u.jsx)("div",{className:"top-right",children:Object(u.jsx)("i",{className:"fas fa-ellipsis-v"})})]}),Object(u.jsx)("div",{className:"img",children:Object(u.jsx)("img",{src:"https://picsum.photos/700",alt:""})}),Object(u.jsxs)("div",{className:"bottom",children:[Object(u.jsxs)("div",{className:"bottom-menu",children:[Object(u.jsxs)("div",{className:"bottom-left",children:[c?Object(u.jsx)("i",{className:"fas fa-heart",onClick:function(){return a(!1)}}):Object(u.jsx)("i",{className:"fal fa-heart",onClick:function(){return a(!0)}}),Object(u.jsx)("i",{className:"fal fa-comment"}),Object(u.jsx)("i",{className:"fal fa-paper-plane"})]}),Object(u.jsx)("div",{className:"bottom-right",children:i?Object(u.jsx)("i",{className:"fas fa-bookmark",onClick:function(){return j(!1)}}):Object(u.jsx)("i",{className:"fal fa-bookmark",onClick:function(){return j(!0)}})})]}),Object(u.jsxs)("p",{className:"likes",children:[" ",Object(u.jsx)("strong",{children:"you"})," and 256 other liked "]})]})]})})})},x=(c(31),c(32),function(){var e=Object(i.b)();Object(t.useEffect)((function(){e(b())}),[]);var s=Object(i.c)((function(e){return e.data})),c=Object(t.useRef)(null);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"story",children:[Object(u.jsx)("i",{className:"fas fa-chevron-circle-left",onClick:function(){c.current.scrollBy({top:0,left:-450,behavior:"smooth"})}}),Object(u.jsx)("i",{className:"fas fa-chevron-circle-right",onClick:function(){c.current.scrollBy({top:0,left:450,behavior:"smooth"})}}),Object(u.jsx)("div",{className:"story-sction",ref:c,children:Object(f.a)(Array(10)).map((function(){return s.map((function(e,s){return Object(u.jsxs)("div",{className:"story-card",children:[Object(u.jsx)("img",{src:e.profilePicture,alt:""}),Object(u.jsxs)("p",{className:"username",children:[" ",e.username," "]})]},s)}))}))})]})})}),p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"story-section",children:[Object(u.jsx)(x,{}),Object(f.a)(Array(10)).map((function(e,s){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{})})}))]}),Object(u.jsx)("div",{className:"post"})]})},N=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"thread-container",children:[Object(u.jsx)("div",{className:"post-section",children:Object(u.jsx)(p,{})}),Object(u.jsx)("div",{className:"menu-section",children:Object(u.jsx)(O,{})})]})})};var v=function(){var e=Object(i.b)();return Object(t.useEffect)((function(){e(b())}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{}),Object(u.jsx)(N,{})]})})},g=c(5),y={username:"x",profilePicture:"x",post:["x"]},k=Object(g.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[y],s=arguments.length>1?arguments[1]:void 0;return"FETCH_DATA"===s.type?s.payload:e}}),F=c(14),w=Object(g.c)(k,Object(g.a)(F.a));r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i.a,{store:w,children:Object(u.jsx)(v,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.94147931.chunk.js.map