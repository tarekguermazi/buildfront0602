"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[405],{9932:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(74165),a=n(15861),r=n(15671),o=n(43144),s=n(27415),l=n(56856),c=function(){function t(){(0,r.Z)(this,t)}return(0,o.Z)(t,null,[{key:"getCategoriesList",value:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(){var e,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(e,"/category-publication"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(e,n){var a,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(a,"/search?filter=").concat(e,"&limit=10&offset=").concat(n,"&validated={true}"));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(e,n,a){var r,o,c,d,u,h;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(c,"/category-publication?filter[titleFR]=").concat(n));case 3:return d=t.sent,u=null===(r=d.data.rows[0])||void 0===r?void 0:r.publications,h={rows:null!==u&&void 0!==u?u:[],count:null!==(o=null===u||void 0===u?void 0:u.length)&&void 0!==o?o:0},t.abrupt("return",h);case 7:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(e,n,a){var r,o;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(r,"/publication?filter[descriptionFR]=").concat(e,"&limit=5&offset=").concat(a,"&filter[statut]=archive").concat(n));case 3:return o=t.sent,t.abrupt("return",o.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(e,n,a){var r,o;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(r,"/publication/search?filter=").concat(e,"&limit=10&offset=").concat(a,"&advanced[statut]=").concat(n.statut,"&advanced[thematique]=").concat(n.thematique,"&advanced[category]=").concat(n.category));case 3:return o=t.sent,t.abrupt("return",o.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()}]),t}()},70651:function(t,e,n){n.d(e,{Z:function(){return h}});var i,a=n(30168),r=(n(72791),n(91523)),o=n(86538),s=n(53540),l=n(72426),c=n.n(l),d=n(27314),u=n(80184);function h(t){var e=t._id,n=t.date,i=t.content,a=t.thumbnail,o=t.title,l=t.entite,h=t.type,p=c()(n).format("l");return(0,u.jsxs)(g,{children:[(0,u.jsx)(r.rU,{to:"/"+l+"/"+e,children:(0,u.jsx)("div",{className:"search__description",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"evenement__left",children:a?(0,u.jsx)("img",{className:"lazyload",style:{width:100,height:100},src:a,alt:""}):(0,u.jsx)("img",{className:"lazyload",style:{width:100,height:100},src:d.Ap,alt:""})}),(0,u.jsxs)("div",{className:"evenement__right",children:[(0,u.jsxs)("div",{className:"date",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{className:"lazyload",src:d.YN,alt:"",srcSet:""}),p]}),h?(0,u.jsx)("div",{className:"cardHeader",children:(0,u.jsx)("span",{className:"categoryBadge",children:h})}):null]}),o?(0,u.jsx)("div",{className:"title",children:o.length>100?(0,s.ZP)(o.substring(0,100)+"..."):(0,s.ZP)(o)}):null,i?(0,u.jsx)("div",{className:"right__footer",children:i.length>100?(0,s.ZP)(i.substring(0,100)+"..."):(0,s.ZP)(i)}):null]})]})})}),(0,u.jsx)("hr",{})]})}var g=o.ZP.div(i||(i=(0,a.Z)(['\n  /* LEFT SECTION */\n  hr {\n    height: 1px;\n    background-color: #2b2840;\n    border: none;\n  }\n  .cardContent {\n    flex-grow: 1;\n    height: 100%;\n    padding-left: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    .cardHeader {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      font-size: 12px;\n      font-family: "Proxima Nova";\n\n      .categoryBadge {\n        background: #f8d7da;\n        border-radius: 3px;\n        color: var(--dark--red);\n        padding: 0.4rem 0.5rem;\n        font-size: 12px;\n        font-family: "Proxima Nova";\n      }\n    }\n\n    .title {\n      margin-top: 1.5rem;\n      color: var(--violet);\n\n      span {\n        font-family: "Bebas Neue Pro";\n        font-style: normal;\n        font-weight: 700;\n        font-size: 23px;\n        line-height: 24px;\n      }\n    }\n  }\n  hr {\n    margin-top: 10px;\n    margin-bottom: 5px;\n  }\n'])))},3227:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var i,a=n(30168),r=n(29439),o=n(72791),s=(0,o.createContext)(null),l=n(86538),c=n(9932),d=n(2579),u=n(70651),h=n(39126),g=n(25930),p=n(15945),f=n(80184);function v(t){var e=t.currentPostsToShow,n=p.Z.TabPane,i=(0,o.useContext)(s).isLoading,a=localStorage.getItem("language"),r=function(t){console.log("attachmentsArray",t);var e="https://via.placeholder.com/270x175";return t.forEach((function(t){if(t.downloadUrl&&t.downloadUrl.length>=1){var n=t.downloadUrl.substring(t.downloadUrl.lastIndexOf(".")+1,t.downloadUrl.length);"png, jpg, jpeg, gif".includes(n)&&(e=t.downloadUrl)}})),e};return(0,f.jsx)("div",{children:(0,f.jsx)(x,{children:!0===i?(0,f.jsx)("section",{children:(0,f.jsx)(d.Z,{height:170})}):(0,f.jsx)("section",{children:e.count>0?(0,f.jsx)("section",{children:(0,f.jsxs)(p.Z,{className:"links",defaultActiveKey:e.rows.rowsEvent.length>0?"0":e.rows.rowsPublication.length>0?"1":e.rows.rowsGlosaire.length>0?"2":"3",onChange:function(t){},children:[(0,f.jsx)(n,{className:"",tab:(0,g.ag)("menu.Ev\xe8nements"),disabled:e.rows.rowsEvent.length<=0,children:(0,f.jsx)(f.Fragment,{children:e.rows.rowsEvent.map((function(t,e){var n,i,o,s;return t.supports.length>=1&&(n=r(t.supports)),"fr"===a?(0,f.jsx)(u.Z,{type:t.category?t.category.titleFR:null,title:t.titleFR,entite:"Evenements",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.updatedAt,content:t.descriptionFR,thumbnail:n},e):"ar"===a?(0,f.jsx)(u.Z,{type:t.category?t.category.titleAR:null,title:t.titleAR,entite:"Evenements",_id:null!==(o=t._id)&&void 0!==o?o:0,date:t.updatedAt,content:t.descriptionAR,thumbnail:n},e):"en"===a?(0,f.jsx)(u.Z,{type:t.category?t.category.titleEN:null,title:t.titleEN,entite:"Evenements",_id:null!==(s=t._id)&&void 0!==s?s:0,date:t.updatedAt,content:t.descriptionEN,thumbnail:n},e):void 0}))})},"0"),(0,f.jsx)(n,{tab:(0,g.ag)("menu.Publications"),disabled:e.rows.rowsPublication.length<=0,children:(0,f.jsx)(f.Fragment,{children:e.rows.rowsPublication.map((function(t,e){var n,i,o,s;return t.photos.length>=1&&(console.log("searchResult.photos",t.photos),n=r(t.photos)),"fr"===a?(0,f.jsx)(u.Z,{type:t.category?t.category.titleFR:null,title:t.titleFR,entite:"detail",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.updatedAt,content:t.descriptionFR,thumbnail:n},e):"ar"===a?(0,f.jsx)(u.Z,{type:t.category?t.category.titleAR:null,title:t.titleAR,entite:"detail",_id:null!==(o=t._id)&&void 0!==o?o:0,date:t.updatedAt,content:t.descriptionAR,thumbnail:n},e):"en"===a?(0,f.jsx)(u.Z,{type:t.category?t.category.titleEN:null,title:t.titleEN,entite:"detail",_id:null!==(s=t._id)&&void 0!==s?s:0,date:t.updatedAt,content:t.descriptionEN,thumbnail:n},e):void 0}))})},"1"),(0,f.jsx)(n,{tab:(0,g.ag)("menu.Glossaire"),disabled:e.rows.rowsGlosaire.length<=0,children:(0,f.jsx)(f.Fragment,{children:e.rows.rowsGlosaire.map((function(t,e){var n,i,r;return"fr"===a?(0,f.jsx)(u.Z,{type:t.categorie?t.categorie.titleFR:null,title:t.nomFR,entite:"Glossaire",_id:null!==(n=t._id)&&void 0!==n?n:0,date:t.updatedAt,content:t.definitionFR,thumbnail:""},e):"ar"===a?(0,f.jsx)(u.Z,{type:t.categorie?t.categorie.titleAR:null,title:t.nomAR,entite:"Glossaire",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.updatedAt,content:t.definitionAR,thumbnail:""},e):"en"===a?(0,f.jsx)(u.Z,{type:t.categorie?t.categorie.titleEN:null,title:t.nomEN,entite:"Glossaire",_id:null!==(r=t._id)&&void 0!==r?r:0,date:t.updatedAt,content:t.definitionEN,thumbnail:""},e):void 0}))})},"2"),(0,f.jsx)(n,{tab:(0,g.ag)("menu.M\xe9diath\xe8que"),disabled:e.rows.rowsMediatheque.length<=0,children:(0,f.jsx)(f.Fragment,{children:e.rows.rowsMediatheque.map((function(t,e){var n,i,o,s;return t.photos.length>=1&&(n=r(t.photos)),"fr"===a?(0,f.jsx)(u.Z,{type:t.type,title:t.titleFR,entite:"Mediatheque/entity",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.updatedAt,content:t.descriptionFR,thumbnail:n},e):"ar"===a?(0,f.jsx)(u.Z,{type:t.type,title:t.titleAR,entite:"Mediatheque/entity",_id:null!==(o=t._id)&&void 0!==o?o:0,date:t.updatedAt,content:t.descriptionAR,thumbnail:n},e):"en"===a?(0,f.jsx)(u.Z,{type:t.type,title:t.titleEN,entite:"Mediatheque/entity",_id:null!==(s=t._id)&&void 0!==s?s:0,date:t.updatedAt,content:t.descriptionEN,thumbnail:n},e):void 0}))})},"3")]})}):(0,f.jsxs)("h3",{id:"noDataFound",children:[(0,f.jsx)(h.$gH,{}),"\xa0",(0,g.ag)("common.noData")]})})})})}var m,x=l.ZP.div(i||(i=(0,a.Z)(['\n  width: 100%;\n  margin: 1rem 0;\n\n  #noDataFound {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 100;\n    font-size: 1.5rem;\n    text-align: center;\n    color: #c7c6c6;\n\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n'])));n(85862);function y(t){var e=t.location,n=(0,o.useContext)(s),i=n.setIsLoading,a=n.SRP,r=n.setSRP,l=(n.searchString,n.setcurrentPageIndex);(0,o.useEffect)((function(){var t;t=e.HOME_SEARCH_STRING,i(!0),c.Z.getSearchResultsForPublicationsBasedOnSearchString(t,0).then((function(t){l(0),r(t),i(!1)}))}),[]);return a.length>=1&&a[0].rows.length>=1&&a[0].rows,(0,f.jsx)(w,{children:(0,f.jsx)(v,{currentPostsToShow:a})})}var Z,w=l.ZP.div(m||(m=(0,a.Z)(["\n\tmargin-top: 1rem;\n"])));function b(t){var e=t.location,n=(0,o.useState)(!1),i=(0,r.Z)(n,2),a=i[0],l=i[1],c=(0,o.useState)(e.HOME_SEARCH_STRING),d=(0,r.Z)(c,2),u=d[0],h=d[1],g=(0,o.useState)([]),p=(0,r.Z)(g,2),v=p[0],m=p[1],x=(0,o.useState)("autre"),Z=(0,r.Z)(x,2),w=Z[0],b=Z[1];console.log("first ",e);var _=(0,o.useState)(0),P=(0,r.Z)(_,2),R=P[0],N=P[1],S=(0,o.useState)(5),A=(0,r.Z)(S,2),E=A[0],F=A[1];return(0,f.jsx)(s.Provider,{value:{isLoading:a,setIsLoading:l,SRP:v,setSRP:m,searchString:u,setSearchString:h,publicationFilter:w,setpublicationFilter:b,currentPageIndex:R,setcurrentPageIndex:N,numberOfPostsPerPage:E,setnumberOfPostsPerPage:F},children:(0,f.jsx)(j,{children:(0,f.jsx)("section",{className:"wideContent",children:(0,f.jsx)(y,{location:e})})})})}var j=l.ZP.section(Z||(Z=(0,a.Z)(["\n\tmax-width: 1170px;\n\tmargin: auto;\n\n\t@media (max-width: 1071px) {\n\t\tmargin: 150px 0 0 0;\n\t}\n\t.wideContent {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t}\n"])))}}]);
//# sourceMappingURL=405.7133514b.chunk.js.map