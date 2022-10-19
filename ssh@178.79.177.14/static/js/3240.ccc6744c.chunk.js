"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3240],{54065:function(n,e,t){t.d(e,{Z:function(){return u}});var i=t(74165),r=t(15861),a=t(15671),o=t(43144),s=t(27415),c=t(72426),d=t.n(c),u=function(){function n(){(0,a.Z)(this,n)}return(0,o.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"6315dbfd1241d0001e764e26",n.next=3,s.Z.get("/tenant/".concat("6315dbfd1241d0001e764e26","/mediatique/"));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"6315dbfd1241d0001e764e26",n.next=3,s.Z.get("/tenant/".concat("6315dbfd1241d0001e764e26","/mediatique/").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"6315dbfd1241d0001e764e26",n.next=3,s.Z.get("/tenant/".concat("6315dbfd1241d0001e764e26","/mediatique/").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){var e=n.split("T")[0];return d()(e).format("LL")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},53240:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var i,r,a=t(30168),o=t(29439),s=t(72791),c=t(79271),d=t(86538),u=(t(85862),t(54065)),l=t(65650),p=t(2579),f=t(33594),h=t(80184);function m(){var n=(0,c.UO)().entity_type;switch(n){case"photos":n="autres";break;case"documentaires":n="documentaire";break;case"podcasts":n="podcast"}var e="?filter[type]=".concat(n),t=(0,s.useState)([]),i=(0,o.Z)(t,2),r=i[0],a=i[1],d=(0,s.useState)(!0),m=(0,o.Z)(d,2),y=m[0],g=m[1];return(0,s.useEffect)((function(){!function(n){u.Z.getMediathequesBasedOnType(n).then((function(n){var e;null===(e=n.rows)||void 0===e||e.map((function(n){a((function(e){return e.concat(n)}))})),g(!1)}))}(e)}),[]),(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"app__contenu",children:(0,h.jsxs)("section",{className:"wideContent",children:[(0,h.jsx)("h1",{children:n}),(0,h.jsx)(l.Z,{view:"M\xe9diath\xe8ques / "+n}),y?(0,h.jsxs)(x,{children:[(0,h.jsx)(p.Z,{height:300,width:270}),(0,h.jsx)(p.Z,{height:300,width:270}),(0,h.jsx)(p.Z,{height:300,width:270}),(0,h.jsx)(p.Z,{height:300,width:270})]}):(0,h.jsx)(v,{children:null===r||void 0===r?void 0:r.map((function(n,e){return(0,h.jsx)(f.Z,{dataSource:n},e)}))})]})})})}var x=d.ZP.section(i||(i=(0,a.Z)(["\n    width: 100%;\n    margin: 2rem 0;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    .react-loading-skeleton{\n        width: 100%;\n        height: 200px;\n    }\n"]))),v=d.ZP.section(r||(r=(0,a.Z)(["\n    width: 100%;\n    margin: 2rem 0;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n    grid-gap: 1rem;\n\n    @media (max-width: 767px){\n        padding: 0 .5rem;\n    }\n"])))},33594:function(n,e,t){t.d(e,{Z:function(){return l}});var i,r=t(30168),a=(t(72791),t(86538)),o=t(82535),s=t(72426),c=t.n(s),d=t(40071),u=t(80184);function l(n){var e,t=n.dataSource;return(0,u.jsxs)(p,{className:"videoCardVertical",children:[(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,u.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+t.photos[0].downloadUrl+")"},children:(0,u.jsx)(o.Z,{data:t,entity:"mainGridPlayer"})}):(0,u.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,u.jsx)(o.Z,{data:t,entity:"mainGridPlayer"})}),(0,u.jsxs)("div",{className:"dateAndType",children:[(0,u.jsxs)("div",{className:"contentType",children:[(0,u.jsx)(d._DQ,{className:"icon"}),t.type]}),(0,u.jsx)("span",{className:"contentDate",children:function(n){var e=n.split("T")[0];return c()(e).format("LL")}(t.updatedAt)})]}),(0,u.jsx)("div",{className:"verticalPlayerTitle",children:(0,u.jsx)("span",{children:t.titleFR})})]},t._id)}var p=a.ZP.div(i||(i=(0,r.Z)(["\n    position: relative;\n    height: 330px !important;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    .cardThumbnail{\n        width: 100%;\n        height: 200px;\n        background-size: cover;\n        background-position: center;\n        position: relative;\n    }\n    .hasNoThumbnail{\n        background-image: url('https://imgur.com/N1ZiTM4.jpeg');\n    }\n\n    .dateAndType{\n        height: 30px;\n        color: #fff;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        span{\n            color: #fff;\n        }\n\n        .contentType{\n            width: 100px;\n            border: 1px solid red;\n            border-radius: .5rem;\n            height: 30px;\n\n            font-family: 'Proxima Nova';\n            font-style: normal;\n            font-weight: 400;\n            font-size: 1rem;\n            line-height: 15px;\n            color: red;\n            padding: .3rem .5rem;\n            \n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n\n            .icon{\n                margin-right: 5px;\n            }\n        }\n\n        .contentDate{\n            color: rgba(122, 122, 122, 1);\n            font-size: 12px;\n            font-family: 'Proxima Nova';\n        }\n    }\n\n    .verticalPlayerTitle{\n        height: 50px;\n\n        span{\n            width: 100%;\n            font-family: 'Proxima Nova';\n            text-transform: capitalize !important;\n            line-height: 1.5;\n            font-weight: 700;\n            font-size: 1rem;\n            color: var(--violet);\n        }\n    }\n"])))},82535:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r,a,o=t(30168),s=(t(72791),t(86538)),c=t(91523),d=t(39126),u=t(78820),l=t(80184);function p(n){var e=n.data,t=n.entity;return(0,l.jsxs)("div",{children:["main"===t&&(0,l.jsx)(c.rU,{to:"/Mediatheque/entity/"+e._id,children:(0,l.jsx)(h,{children:{videos:(0,l.jsx)(d.mz0,{}),autres:(0,l.jsx)(u.Zju,{}),documentaire:(0,l.jsx)(u.Zju,{}),photos:(0,l.jsx)(u.Zju,{}),podcast:(0,l.jsx)(u.Zju,{})}[e.type]})}),""===t&&(0,l.jsx)(c.rU,{to:"/Mediatheque/entity/"+e._id,children:(0,l.jsx)(f,{children:{videos:(0,l.jsx)(d.mz0,{}),autres:(0,l.jsx)(u.Zju,{}),documentaire:(0,l.jsx)(u.Zju,{}),photos:(0,l.jsx)(u.Zju,{}),podcast:(0,l.jsx)(u.Zju,{})}[e.type]})}),"mainGridPlayer"===t&&(0,l.jsx)(c.rU,{to:"/Mediatheque/entity/"+e._id,children:(0,l.jsx)(m,{children:{videos:(0,l.jsx)(d.mz0,{}),autres:(0,l.jsx)(u.Zju,{}),documentaire:(0,l.jsx)(u.Zju,{}),photos:(0,l.jsx)(u.Zju,{}),podcast:(0,l.jsx)(u.Zju,{})}[e.type]})})]})}var f=s.ZP.div(i||(i=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 140px;\n    left: 10px;\n"]))),h=s.ZP.div(r||(r=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 290px;\n    left: 10px;\n"]))),m=s.ZP.div(a||(a=(0,o.Z)(["\n    height: 50px;\n    width: 50px;\n    font-size: 1.4rem;\n    border-radius: 50%;\n    color: red;\n    background-color: #fff;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 140px;\n    left: 10px;\n"])))},65650:function(n,e,t){t.d(e,{Z:function(){return c}});var i,r=t(30168),a=(t(72791),t(86538)),o=t(91523),s=t(80184);function c(n){var e,t=n.view;return(0,s.jsx)("div",{children:(0,s.jsxs)(d,{children:[(0,s.jsx)(o.rU,{to:"/",className:"homeLinkInBC",children:"Accueil"})," ",(0,s.jsxs)("span",{className:"currentView",children:["/ ",(e=t,e.charAt(0).toUpperCase()+e.slice(1))]})]})})}var d=a.ZP.div(i||(i=(0,r.Z)(["\n    margin: .7rem 0;\n    font-size: '1rem';\n    font-family: \"Proxima Nova\";\n\n    .currentView{\n        color: var(--gray3);\n    }\n\n    .homeLinkInBC{\n        text-decoration: none;\n        color: var(--gray2);\n        \n        &:hover{\n            text-decoration: underline;\n        }\n    }\n"])))},85862:function(){},2579:function(n,e,t){t.d(e,{Z:function(){return d}});var i=t(29439),r=t(1413),a=t(45987),o=t(72791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],c=o.createContext({});function d(n){for(var e,t,d,u=n.count,l=void 0===u?1:u,p=n.wrapper,f=n.className,h=n.containerClassName,m=n.containerTestId,x=n.circle,v=void 0!==x&&x,y=n.style,g=(0,a.Z)(n,s),j=o.useContext(c),Z=(0,r.Z)({},g),b=0,w=Object.entries(g);b<w.length;b++){var k=(0,i.Z)(w[b],2),N=k[0];"undefined"===typeof k[1]&&delete Z[N]}var T=(0,r.Z)((0,r.Z)((0,r.Z)({},j),Z),{},{circle:v}),P=(0,r.Z)((0,r.Z)({},y),function(n){var e=n.baseColor,t=n.highlightColor,i=n.width,r=n.height,a=n.borderRadius,o=n.circle,s=n.direction,c=n.duration,d=n.enableAnimation,u=void 0===d||d,l={};return"rtl"===s&&(l["--animation-direction"]="reverse"),"number"===typeof c&&(l["--animation-duration"]="".concat(c,"s")),u||(l["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(l.width=i),"string"!==typeof r&&"number"!==typeof r||(l.height=r),"string"!==typeof a&&"number"!==typeof a||(l.borderRadius=a),o&&(l.borderRadius="50%"),"undefined"!==typeof e&&(l["--base-color"]=e),"undefined"!==typeof t&&(l["--highlight-color"]=t),l}(T)),C="react-loading-skeleton";f&&(C+=" ".concat(f));for(var z=null!==(e=T.inline)&&void 0!==e&&e,q=[],M=Math.ceil(l),_=0;_<M;_++){var A=P;if(M>l&&_===M-1){var L=null!==(t=A.width)&&void 0!==t?t:"100%",U=l%1,E="number"===typeof L?L*U:"calc(".concat(L," * ").concat(U,")");A=(0,r.Z)((0,r.Z)({},A),{},{width:E})}var D=o.createElement("span",{className:C,style:A,key:_},"\u200c");z?q.push(D):q.push(o.createElement(o.Fragment,{key:_},D,o.createElement("br",null)))}return o.createElement("span",{className:h,"data-testid":m,"aria-live":"polite","aria-busy":null===(d=T.enableAnimation)||void 0===d||d},p?q.map((function(n,e){return o.createElement(p,{key:e},n)})):q)}}}]);
//# sourceMappingURL=3240.ccc6744c.chunk.js.map