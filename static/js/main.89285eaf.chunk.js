(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,a,t){},107:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=(t(99),t(19)),i=t(20),s=t(22),m=t(21),u=(t(38),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.pageState={},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"ERROR 404")}}]),t}(n.Component)),d=t(24),p=t.n(d),h=t(31),b=t(6),f=t(2),g=t(5),j="#333842",k="#282c34",E="#070709",x="#E8F3F8",v="#1d2026",C="#F36B21",O=function(){return window.innerWidth<400?window.innerWidth:window.innerWidth-310},w=t(39),N=t(162),S=t(132),y=t(164),P=t(54),L=t(133),T=t(134),A=t(135),I=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.onClickIcon=function(){var e=Object(h.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null,e.t0=a,e.next="download"===e.t0?4:"linkedin"===e.t0?6:"github"===e.t0?8:10;break;case 4:return t=w.a,e.abrupt("break",10);case 6:return t=w.c,e.abrupt("break",10);case 8:return t=w.b,e.abrupt("break",10);case 10:(t?window.open(t,"_blank"):window).focus();case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.pageState={},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,n=a.handleClickAbout;return r.a.createElement("div",{className:t.list,role:"presentation"},r.a.createElement(N.a,{className:t.drawer,variant:"persistent",anchor:"left",open:!0,classes:{paper:Object(f.a)("Content",t.drawerPaper)}},r.a.createElement(S.a,{className:t.listInside},r.a.createElement(y.a,{button:!0,key:"Download",title:"Download CV",onClick:function(){return e.onClickIcon("download")}},r.a.createElement(L.a,{className:t.lateralIcon})),r.a.createElement(y.a,{button:!0,key:"LinkedIn",title:"LinkedIn",onClick:function(){return e.onClickIcon("linkedin")}},r.a.createElement(T.a,{className:t.lateralIcon})),r.a.createElement(y.a,{button:!0,key:"GitHub",title:"GitHub",onClick:function(){return e.onClickIcon("github")}},r.a.createElement(A.a,{className:t.lateralIcon})),r.a.createElement("div",{className:t.about},r.a.createElement(y.a,{button:!0,key:"About",title:"About",onClick:n},r.a.createElement(P.a,{className:t.aboutText},"About"))))))}}]),t}(n.Component);Object(b.i)(I,{pageState:b.n});var R=Object(g.a)((function(e){return{drawer:{width:60,flexShrink:0},drawerPaper:{boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)",backgroundColor:j,color:x,width:60},list:{width:250,textAlign:"left"},listInside:{flex:1,display:"flex",flexDirection:"column"},listItem:{"&:hover":{backgroundColor:E}},nestedList:{width:40,marginLeft:20},nestedItem:{"&:hover":{backgroundColor:j}},lateralIcon:{height:40,width:40,marginLeft:-5,marginTop:3,padding:0,justifyContent:"center"},about:{display:"flex",flexGrow:"inherit",justifyContent:"flex-end",textAlign:"center",flexDirection:"column"},aboutText:{marginLeft:"-0.5rem"}}}))(I),D=t(159),W=t(136),B=t(137),z=t(70),F=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.pageState={isProjectsOpen:!0},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.selectedProject,n=e.handleChangeProject,c=this.pageState.isProjectsOpen;return r.a.createElement("div",{className:a.list,role:"presentation"},r.a.createElement(N.a,{open:c,anchor:"left",variant:"persistent",className:a.drawer,classes:{paper:Object(f.a)("Content",a.drawerPaper)}},r.a.createElement(D.a,{component:"span",className:a.box},r.a.createElement(P.a,{variant:"caption",className:Object(f.a)("p-0 mb-0 mt-0","ml-3")},"EXPLORER")),r.a.createElement("div",{className:Object(f.a)(a.category,"form-inline ml-3","p-0 mb-0 mt-0")},c?r.a.createElement(W.a,null):r.a.createElement(B.a,null),r.a.createElement(P.a,{className:Object(f.a)("ml-2","p-0 mb-0 mt-0")},"PROJECTS")),r.a.createElement(D.a,{component:"span",className:a.projects},r.a.createElement(S.a,{component:"nav",className:a.list},Object.keys(z).map((function(e,c){return r.a.createElement(y.a,{key:c,className:e===t?a.selectedItem:"",button:!0,onClick:function(){n(e)}},r.a.createElement(P.a,null,z[e].name))}))))))}}]),t}(n.Component);Object(b.i)(F,{pageState:b.n});var H=Object(g.a)((function(e){return{drawer:{width:250,flexShrink:0},drawerPaper:{left:60,boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)",backgroundColor:j,color:x,width:250},list:{textAlign:"left"},listItem:{"&:hover":{backgroundColor:E}},category:{boxShadow:"2px 2px 2px rgba(0, 0, 0, 0.16), 2px 2px 2px rgba(0, 0, 0, 0.23)",backgroundColor:j,color:x,height:30},nestedList:{width:230,marginLeft:20},nestedItem:{"&:hover":{backgroundColor:j}},box:{backgroundColor:k,color:x,paddingLeft:10,flexShrink:0},projects:{backgroundColor:k,color:x,flexShrink:0,height:"87%"},selectedItem:{backgroundColor:j}}}))(F),J=t(36),M=t(79),G=t(71),q=t.n(G),K=t(72),Q=t.n(K),U=t(73),X=t.n(U),Y=t(74),_=t.n(Y),V=t(75),$=t.n(V),Z=t(85),ee=t(138),ae=t(86),te=t(139),ne=t(140),re=t(141),ce=t(142),oe=t(143),le=function(e){var a=e.children,t=e.className;return r.a.createElement("h1",{className:t},a)},ie=function(e){var a=e.children,t=e.className;return r.a.createElement("h2",{className:t},a)},se=function(e){var a=e.children,t=e.className;return r.a.createElement("h3",{className:t},a)},me=function(e){var a=e.className;return r.a.createElement("hr",{className:a})},ue=function(e){var a=e.children,t=e.className;return r.a.createElement("p",{className:t},a)},de=function(e){var a=e.children,t=e.className;return r.a.createElement("ul",{className:t},a)},pe=function(e){var a=e.children,t=e.className;return r.a.createElement("pre",{className:t},a)},he=function(e){var a=e.src,t=e.className,n=e.title,c=e.classNameProfile;return r.a.createElement("img",{src:a,alt:n,className:Object(f.a)("profile"===n?c:"",t)})},be=function(e){var a=e.children,t=e.classes,n=a[0],c=a[1],o=n.props.children.props.children,l=c.props.children,i=[],s={},m=[];return o.map((function(e,a){return i[a]=e.props.children[0],s[i[a]]="",!0})),l.map((function(e,a){var t=e.props.children,n=Object(Z.a)({},s);return Object.keys(s).map((function(e,a){return n[e]=t[a].props.children[0]})),m[a]=n,!0})),r.a.createElement(ee.a,{className:t.tableContainer,component:ae.a},r.a.createElement(te.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(ne.a,null,r.a.createElement(re.a,{className:t.tableTitleBar},i.map((function(e){return r.a.createElement(ce.a,{className:t.tableTitle},e)})))),r.a.createElement(oe.a,null,m.map((function(e){return r.a.createElement(re.a,{key:e[Object.keys(e)[0]],className:t.tableRow},Object.keys(e).map((function(a,n){return r.a.createElement(ce.a,{scope:"row",key:"".concat(a,"-").concat(n),className:t.tableData},e[a])})))})))))},fe=function(e){return{overrides:{h1:{component:le,props:{className:e.h1}},h2:{component:ie,props:{className:e.h2}},h3:{component:se,props:{className:e.h3}},hr:{component:me,props:{className:e.hr}},p:{component:ue,props:{className:e.p}},ul:{component:de,props:{className:e.ul}},pre:{component:pe,props:{className:e.pre}},img:{component:he,props:{className:e.img,classNameProfile:e.imgProfile}},table:{component:be,props:{classes:e}}}}},ge=(t(104),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.loadMd=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchSelected();case 2:return e.next=4,e.sent.text();case 4:n.pageState.markdown=e.sent;case 5:case"end":return e.stop()}}),e)}))),n.fetchSelected=Object(h.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null,e.t0=n.props.selectedTab,e.next=0===e.t0?4:1===e.t0?8:2===e.t0?12:3===e.t0?16:20;break;case 4:return e.next=6,fetch(Q.a);case 6:return a=e.sent,e.abrupt("break",23);case 8:return e.next=10,fetch(_.a);case 10:return a=e.sent,e.abrupt("break",23);case 12:return e.next=14,fetch(X.a);case 14:return a=e.sent,e.abrupt("break",23);case 16:return e.next=18,fetch($.a);case 18:return a=e.sent,e.abrupt("break",23);case 20:return e.next=22,fetch(q.a);case 22:a=e.sent;case 23:return e.abrupt("return",a);case 24:case"end":return e.stop()}}),e)}))),n.pageState={markdown:""},n.loadMd(),n}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.width,n=this.pageState.markdown;return this.loadMd(),r.a.createElement("div",{className:Object(f.a)("Container",a.container),style:{width:t}},r.a.createElement("div",{className:Object(f.a)("Content",a.content)},r.a.createElement(M.a,{options:fe(a)},n)))}}]),t}(n.Component));Object(b.i)(ge,{pageState:b.n});var je=Object(g.a)((function(e){return{container:{display:"flex",flexDirection:"row",height:"100vh",marginLeft:"auto"},content:{flex:1,color:x,overflowY:"scroll",paddingLeft:20,fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',paddingBottom:60},h1:{textAlign:"center",paddingTop:10,paddingBottom:10},h2:{paddingTop:5,paddingBottom:5},h3:{paddingTop:5,paddingBottom:5},hr:{backgroundColor:j,maxWidth:"50%",marginRight:"50%"},p:{fontSize:"1rem",padding:10},ul:{fontSize:"1rem",marginLeft:20},pre:{fontSize:"1rem",marginLeft:20,backgroundColor:j,padding:10,paddingLeft:15,paddingRight:15,maxWidth:"80%",width:"min-content",color:C},img:{borderRadius:4,maxWidth:250,maxHeigh:250},imgProfile:{float:"right",marginRight:"5%",marginLeft:"5%",marginTop:30},tableContainer:{width:"fit-content",maxWidth:"90%",marginLeft:"5%",backgroundColor:j},table:{width:"fit-content"},tableTitleBar:{},tableTitle:{color:x},tableRow:{},tableData:{color:x,minWidth:120}}}))(Object(J.a)(ge)),ke=t(144),Ee=t(145),xe=t(146),ve=t(147),Ce=t(148),Oe=t(149),we=t(81),Ne=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.handleClick=function(){n.props.handleClick(n.props.index)},n.pageState={},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.selected,n=e.text,c=e.ico;return r.a.createElement("div",{className:Object(f.a)("",t?a.selected:a.tab),onClick:this.handleClick},r.a.createElement(P.a,{className:Object(f.a)("text-left align-middle mt-1 ml-2"),variant:"inherit"},c,n))}}]),t}(n.Component);Object(b.i)(Ne,{pageState:b.n,handleClick:b.f});var Se=Object(g.a)((function(e){return{tab:{height:35,padding:0,paddingLeft:10,paddingRight:20,marginTop:-30,color:x,backgroundColor:k,cursor:"pointer"},selected:{height:35,padding:0,paddingLeft:10,paddingRight:20,marginTop:-30,color:x,backgroundColor:E,cursor:"pointer"}}}))(Object(J.a)(Ne)),ye=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.handleChange=function(e){n.props.handleChangeTab(e)},n.pageState={},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,n=a.selectedTab,c=a.selectedProject,o=a.width;return r.a.createElement("div",{className:Object(f.a)("headerContainer",t.headerContainer),style:{width:o}},r.a.createElement(ke.a,{className:Object(f.a)("header",t.header),position:"sticky"},r.a.createElement(Ee.a,{className:"pl-0"},r.a.createElement(Se,{index:0,text:o>730?"Profile":"",selected:0===n,className:"border border-dark",handleClick:this.handleChange,ico:r.a.createElement(xe.a,{className:"mr-2"})}),r.a.createElement(Se,{index:1,text:o>730?"Experience":"",selected:1===n,className:"border border-dark",handleClick:this.handleChange,ico:r.a.createElement(ve.a,{className:"mr-2"})}),r.a.createElement(Se,{index:2,text:o>730?"Education":"",selected:2===n,className:"border border-dark",handleClick:this.handleChange,ico:r.a.createElement(Ce.a,{className:"mr-2"})}),r.a.createElement(Se,{index:3,text:o>730?"Skills":"",selected:3===n,className:"border border-dark",handleClick:this.handleChange,ico:r.a.createElement(Oe.a,{className:"mr-2"})}),function(){if(c)return r.a.createElement(Se,{index:4,text:o>730?z[c].name:"",selected:4===n,className:"border border-dark",handleClick:e.handleChange,ico:r.a.createElement(we.a,{className:"mr-2 fa-lg",icon:["fab",z[c].ico]})})}())),r.a.createElement(ke.a,{className:Object(f.a)("subHeader",t.subHeader),position:"sticky"},r.a.createElement(P.a,{variant:"caption",className:Object(f.a)("m-1 ml-3")},"src > portfolio > ",function(){switch(n){case 0:return"Profile";case 1:return"Experience";case 2:return"Education";case 3:return"Skills";default:return"Projects > ".concat(z[c].name)}}())))}}]),t}(n.Component);Object(b.i)(ye,{pageState:b.n});var Pe=Object(g.a)((function(e){return{headerContainer:{display:"flex",flexDirection:"column",marginLeft:"auto"},header:{flexShrink:0,height:35,backgroundColor:k},subHeader:{flexShrink:0,height:25,backgroundColor:v}}}))(Object(J.a)(ye)),Le=t(82),Te=t(84),Ae=t(60),Ie=t(53),Re=t(61),De=(t(107),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).pageState={},n.resize=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.pageState.width=O();case 1:case"end":return e.stop()}}),e)}))),n.handleChangeProject=function(e){n.pageState.selectedProject=e,n.pageState.selectedTab=4},n.handleChangeTab=function(e){n.pageState.selectedTab=e},n.handleClickAbout=function(){n.pageState.isAboutOpen=!0},n.handleCloseAbout=function(){n.pageState.isAboutOpen=!1},n.pageState={selectedProject:null,selectedTab:0,width:O(),isAboutOpen:!1},Ie.b.add([Re.a,Re.c,Re.b]),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"render",value:function(){var e=this.pageState,a=e.selectedProject,t=e.selectedTab,c=e.width,o=e.isAboutOpen,l=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(Xe,null),r.a.createElement(na,{isOpen:o,handleClose:this.handleCloseAbout}),r.a.createElement(Pe,{selectedTab:t,selectedProject:a,handleChangeTab:this.handleChangeTab,width:c}),r.a.createElement("div",{className:Object(f.a)("App",l.app)},r.a.createElement(R,{handleClickAbout:this.handleClickAbout}),r.a.createElement(H,{selectedProject:a,handleChangeProject:this.handleChangeProject}),r.a.createElement(je,{selectedTab:t,selectedProject:a,width:c})))}}]),t}(n.Component));Object(b.i)(De,{pageState:b.n});var We=Object(g.a)({app:{minWidth:"100%",position:"absolute",overflow:"hidden"},content:{padding:10}})(Object(J.a)(De)),Be=[{component:We}],ze=[{path:Ae.b.home,exact:!0,component:We},{path:"*",component:u}],Fe=t(7),He=function(e){return r.a.createElement(Fe.c,null,e.map((function(e,a){var t=e.component,n=Object(Te.a)(e,["component"]),c=t;return r.a.createElement(Fe.a,Object.assign({key:a},n),r.a.createElement(c,null))})))},Je=(Object(n.memo)((function(){return He(Be)})),Object(n.memo)((function(){return He(ze)}))),Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le.a,{basename:"".concat(Ae.a,"/")},r.a.createElement(Je,null)))},Ge=function(){return r.a.createElement(Me,null)},qe=t(83),Ke=t(163),Qe=t(161),Ue=t(151),Xe=function(){var e=Object(n.useState)(!0),a=Object(qe.a)(e,2),t=a[0],c=a[1];return r.a.createElement(Ke.a,{autoHideDuration:8e3,key:"underConstructionSnackbar",open:t,onClose:function(){c(!1)},anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(Qe.a,{severity:"info"},r.a.createElement(Ue.a,null,"Informaci\xf3n"),"Esta p\xe1gina a\xfan est\xe1 en construcci\xf3n, por lo que puede haber secciones sin contenido o con contenido a la mitad."))},Ye=t(160),_e=t(152),Ve=t(153),$e=t(150),Ze=t(155),ea=t(156),aa=t(157),ta=t(154),na=Object(g.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},card:{color:x,backgroundColor:j,padding:5,outline:"none"},icon:{color:x,"&:focus":{outline:"none"}},close:{"&:focus":{outline:"none"}},item:{flex:2},data:{flex:6,marginLeft:10},lineContainer:{display:"flex"}}}))((function(e){var a=e.classes,t=e.isOpen,n=e.handleClose,c=function(){var e=Object(h.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null,e.t0=a,e.next="linkedin"===e.t0?4:"github"===e.t0?6:8;break;case 4:return t=w.c,e.abrupt("break",8);case 6:return t=w.b,e.abrupt("break",8);case 8:(t?window.open(t,"_blank"):window).focus();case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(Ye.a,{open:t,onClose:n,className:a.modal,disableAutoFocus:!0,disableEnforceFocus:!0},r.a.createElement(_e.a,{className:a.card},r.a.createElement(Ve.a,{title:"About",action:r.a.createElement($e.a,{className:a.close,onClick:n},r.a.createElement(ta.a,null))}),r.a.createElement(Ze.a,null),r.a.createElement(ea.a,null,r.a.createElement("p",{className:a.lineContainer},r.a.createElement(P.a,{variant:"body1",component:"body1",className:a.item},"Creador:"),r.a.createElement(P.a,{variant:"code",component:"code",className:a.data},"Juan Carlos Lamas Alfaro")),r.a.createElement("p",{className:a.lineContainer},r.a.createElement(P.a,{variant:"body1",component:"body1",className:a.item},"E-mail:"),r.a.createElement(P.a,{variant:"code",component:"code",className:a.data},"jclamas.95@gmail.com"))),r.a.createElement(aa.a,null,r.a.createElement($e.a,{className:a.icon,onClick:function(){return c("linkedin")}},r.a.createElement(T.a,null)),r.a.createElement($e.a,{className:a.icon,onClick:function(){return c("github")}},r.a.createElement(A.a,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e){e.exports=JSON.parse('{"a":"https://1drv.ms/b/s!AmfDX1skph9SgsRIoPRgSCOYKwqaAg?e=wKz8SA","c":"https://www.linkedin.com/in/juan-carlos-lamas-alfaro-95153212a/","b":"https://github.com/cococov"}')},60:function(e){e.exports=JSON.parse('{"a":"portfolio","b":{"home":"/"}}')},70:function(e){e.exports=JSON.parse('{"portfolio.jsx":{"uri":"project/portfoliojsx","name":"portfolio.jsx","title":"portfolio","language":"javaScript","ico":"react"},"user-crud.jsx":{"uri":"project/user-crud","name":"userCrud.jsx","title":"User CRUD - SQLite and MySQL Sync","language":"javaScript","ico":"react"},"magiclife.jsx":{"uri":"project/magiclifejsx","name":"magiclife.jsx","title":"Magic Life","language":"javaScript","ico":"react"},"minesweeper.java":{"uri":"project/minesweepeerjava","name":"minesweeper.java","title":"Minesweeper (Buscaminas)","language":"Java","ico":"java"},"something.py":{"uri":"project/somethingpy","name":"something.py","title":"Something","language":"Something","ico":"python"}}')},71:function(e,a,t){e.exports=t.p+"static/media/error404.c361ca1d.md"},72:function(e,a,t){e.exports=t.p+"static/media/profile.3fecabd8.md"},73:function(e,a,t){e.exports=t.p+"static/media/education.be3717cf.md"},74:function(e,a,t){e.exports=t.p+"static/media/experience.a9782ec0.md"},75:function(e,a,t){e.exports=t.p+"static/media/skills.f9217cfe.md"},94:function(e,a,t){e.exports=t(109)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.89285eaf.chunk.js.map