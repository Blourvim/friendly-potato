(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,i){},137:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(10),r=i.n(a),o=i(14),c=i(15),s=i.n(c),l=(i(128),i(2)),d=i(28),p=i(171),u=i(11),b=(i(175),i(176),i(140),i(89));i(192),i(174),i(191),i(86),i(82),i(83),i(65),i(63),i(64),i(84),Object(p.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var g=i(189),m=(i(177),i(53)),h=i.n(m);Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},suggestionContainer:{borderStyle:"solid",borderWidth:"2px"},suggestionForm:{display:"block",borderStyle:"solid",borderWidth:"2px"}}}));i(179),i(181),i(190),i(182),i(180),i(188);var j=i(178);Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));i(183),Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var x=i(85),f=i(193),O=i(184),v=i(185),w=i(186),y=i(187),k=Object(p.a)({root:{marginTop:"2rem",width:"345px",borderRadius:"15px",paddingTop:"40px",marginBottom:"40px",backgroundColor:"#9bc8dc"},content:{paddingBottom:"30px",backgroundColor:"#9bc8dc",color:"#36454f"},media:{width:"auto",padingTop:"30px"}}),C=function(e){var t=k();console.log(e);var i=e.info,n=(i.mal_id,i.image_url),a=i.title,r=i.url,o=i.synopsis;return Object(l.jsxs)(O.a,{className:t.root,children:[Object(l.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:Object(l.jsx)(v.a,{children:Object(l.jsx)(w.a,{component:"img",alt:a,height:"auto",image:n,title:a,className:t.media})})}),Object(l.jsxs)(y.a,{className:t.content,children:[Object(l.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(l.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:o})]})]})},T=Object(p.a)((function(e){return{suggestionContainer:{marginTop:"100px",padding:"0px"},listItem:{height:"60px",display:"flex",background:"hsla(240, 100%, 80%, 0.2) ",width:"60%",marginTop:"14px",minWidth:"330px",borderRadius:"15px",borderTopLeftRadius:"60px",borderBottomLeftRadius:"60px"},avatar:{height:"60px",width:"60px"},title:{marginTop:"14px",fontSize:"1.3rem",color:"#e5e4e2",width:"90%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},ul:{padding:"0"},textField:{width:"35%",minWidth:"330px"},text:{marginBottom:"3rem",color:"#36454f",fontWeight:"bold"}}}));function N(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),i=(t[0],t[1]),a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],d=r[1],p=Object(n.useState)(void 0),u=Object(o.a)(p,2),m=(u[0],u[1],Object(n.useState)(!1)),O=Object(o.a)(m,2),v=O[0],w=O[1],y=Object(n.useState)(!1),k=Object(o.a)(y,2),N=k[0],S=k[1],R=Object(n.useCallback)(h()((function(e){e.length>=3&&s.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(e,"&genre=12&genre_exclude=0")).then((function(e){d(Object.entries(e.data.results)),console.log(e)})).catch((function(e){return console.error(e)}))}),500),[]),I=T();return Object(l.jsxs)(j.a,{align:"center",className:I.suggestionContainer,children:[Object(l.jsx)(b.a,{className:I.text,variant:"h3",children:"Find Anime"}),Object(l.jsx)("div",{children:Object(l.jsx)(g.a,{className:I.textField,id:"filled-basic",onChange:function(e){return function(e){var t=e.target.value;i(t),R(t),d(!1),w(!1),S(!1)}(e)},label:"Type Here",variant:"filled"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("ul",{className:I.ul,children:Array.isArray(c)&&c.slice([0],[10]).map((function(e){var t=e[1],i=t.mal_id,n=t.title,a=t.image_url,r=t.url,o=t.synopsis;return Object(l.jsxs)("li",{id:i,onClick:function(e){return function(e,t){console.log(e.target.firstChild.data),w(Object(x.a)({},t)),S(!0),d(e.target.firstChild.data),e.target.value="hello"}(e,{mal_id:i,title:n,image_url:a,url:r,synopsis:o})},className:I.listItem,children:[Object(l.jsx)(f.a,{className:I.avatar,src:a}),Object(l.jsx)(b.a,{className:I.title,children:n})]},i)}))}),N&&Object(l.jsx)(C,{info:v})]})]})}var S=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(N,{})})};r.a.render(Object(l.jsx)(S,{}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.e26f4959.chunk.js.map