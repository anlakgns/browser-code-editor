(this.webpackJsonpvsclone=this.webpackJsonpvsclone||[]).push([[0],{209:function(e,t,n){},249:function(e,t){},285:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"createFile",(function(){return L})),n.d(r,"updateFile",(function(){return D})),n.d(r,"deleteFile",(function(){return R})),n.d(r,"createFolder",(function(){return S})),n.d(r,"deleteFolder",(function(){return A})),n.d(r,"createFileInFolder",(function(){return z})),n.d(r,"deleteFileInFolder",(function(){return W})),n.d(r,"createNodeAttempt",(function(){return V})),n.d(r,"selectFileForView",(function(){return B})),n.d(r,"createBundle",(function(){return M}));var o,a=n(75),i=n.n(a),c=n(52),d=n(32),l=n(151),u=n(152);!function(e){e.CREATE_NODE_ATTEMPT="attempt_to_create_node",e.SELECT_FILE_INFO_FOR_VIEW="select_file_info_for_view",e.DELETE_FILE="delete_file",e.CREATE_FILE="add_file",e.UPDATE_FILE="update_file",e.DELETE_FOLDER="delete_folder",e.CREATE_FOLDER="create_folder",e.CREATE_FILE_IN_FOLDER="add_file_in_folder",e.DELETE_FILE_IN_FOLDER="delete_file_in_folder",e.BUNDLE_START="bundle_start",e.BUNDLE_COMPLETE="bundle_complete"}(o||(o={}));var s,f,p=n(77),m={allNodes:[{name:"main",nodeId:"main",nodeType:"folder",files:[{name:"index",nodeId:"entryPoint",nodeType:"file",fileFormat:"javascript",code:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport WelcomeCard from 'browser/main/welcomeCard';\n// import 'bulmaswatch/superhero/bulmaswatch.min.css';\n\nconst mainStyle = {\n  backgroundColor: '#273035',\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  alignItems: 'center',\n  height: '100vh',\n  width: '100%',\n};\n\nconst App = () => {\n  return (\n    <div style={mainStyle}>\n      <WelcomeCard />\n    </div>\n  );\n};\n\nReactDOM.render(<App />, document.querySelector('#root'));",text:"",parent:"main"},{name:"welcomeCard",nodeId:"welcomeCard",nodeType:"file",fileFormat:"javascript",code:'import React from \'react\';\n\nconst mainStyle = {\n  display: \'flex\',\n  flexDirection: \'column\',\n  alignItems: \'flex-start\',\n  width: "50%",\n  gap: "0.5rem"\n};\n\nconst headline1 = {\n  fontWeight: "bold",\n  fontSize:"1.2rem",\n  color: "#FBAF20"\n}\n\nconst headline2 = {\n  fontWeight: "bold",\n  fontSize:"3rem",\n  color: "white"\n}\n\nconst description = {\n  fontSize:"1rem",\n  color: "white",\n  opacity: 0.5\n}\n\nconst WelcomeCard = () => {\n  return (\n    <div style={mainStyle}>\n      <div style={headline1}> Hello, this is your default preview</div>\n      <div style={headline2}>Nix React Editor</div>\n      <div style={description}>\n        The app is not stable yet. If you follow the guide there will not be a\n        problem. If you encounter any unexcepted problem please contact with me\n        with the email : anilakgunes@gmail.com\n      </div>\n    </div>\n  );\n};\n\nexport default WelcomeCard\n\n',text:"",parent:"main"}]},{name:"public",nodeId:"public",nodeType:"folder",files:[{name:"index.html",nodeId:"html",nodeType:"file",fileFormat:"html",code:"\x3c!-- This is your default html for your preview. Please do not change if you are totally aware of what you are doing. I highly do not recommend the changes here, because application is not stable yet.  --\x3e \n\n\n<html>\n    <head>\n      <style> html, body {background-color: white; padding:0; margin:0;} #root {background-color: white} </style>\n    </head>\n    <body>\n      <div id=\"root\"></div>\n      <script>\n\n        const handleError = (err) => {\n          const root = document.querySelector('#root')\n          root.innerHTML = '<div style=\"color: red\"><h4>Runtime Error</h4>' + err + '</div>'\n          console.error(err)\n        }\n\n        window.addEventListener('error', (event)=> {\n          event.preventDefault()\n          handleError(event.error)\n        })\n\n        window.addEventListener('message', (event) => {\n          try {\n            eval(event.data)\n          } catch(err) {\n            handleError(err)\n          }\n        });\n      <\/script>\n    </body>\n  </html>\n  ",text:"",parent:"public"}]}],attemptToCreate:{status:!1,nodeType:null,parentNodeId:null},selectedFileInfoToView:null},h=Object(p.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.CREATE_FILE:var n={name:t.payload.name,nodeId:b(),nodeType:"file",fileFormat:"javascript",code:"",text:"",parent:"workspace"};return e.allNodes.push(n),e;case o.UPDATE_FILE:var r,a=t.payload,i=a.nodeId,c=a.cellType,d=a.newContent,l=a.parent;if("workspace"===l){var u=e.allNodes.findIndex((function(e){return e.nodeId===i}));r=e.allNodes[u]}if("workspace"!==l){var s=e.allNodes.findIndex((function(e){return e.nodeId===l})),f=e.allNodes[s];if("folder"===f.nodeType){var p,h=null===(p=f.files)||void 0===p?void 0:p.findIndex((function(e){return e.nodeId===i}));r=f.files[h]}}return"file"===r.nodeType&&(r[c]=d),e;case o.DELETE_FILE:e.allNodes=e.allNodes.filter((function(e){return e.nodeId!==t.payload.nodeId}));var j=e.selectedFileInfoToView.nodeId===t.payload.nodeId;return j&&(e.selectedFileInfoToView=null),e;case o.CREATE_FOLDER:var x={name:t.payload.name,nodeId:b(),nodeType:"folder",files:[]};return e.allNodes.push(x),e;case o.DELETE_FOLDER:return e.allNodes=e.allNodes.filter((function(e){return e.nodeId!==t.payload.nodeId})),e;case o.CREATE_FILE_IN_FOLDER:var O={name:t.payload.name,nodeId:b(),nodeType:"file",fileFormat:"javascript",code:"",text:"",parent:t.payload.folderNodeId},y=e.allNodes.findIndex((function(e){return e.nodeId===t.payload.folderNodeId})),v=e.allNodes[y];return"files"in v&&v.files.push(O),e;case o.DELETE_FILE_IN_FOLDER:var g,w=e.allNodes.findIndex((function(e){return e.nodeId===t.payload.folderNodeId})),I=e.allNodes[w];"files"in I&&(I.files=I.files.filter((function(e){return e.nodeId!==t.payload.fileNodeId})));var E=(null===(g=e.selectedFileInfoToView)||void 0===g?void 0:g.nodeId)===t.payload.fileNodeId;return E&&(e.selectedFileInfoToView=null),e;case o.CREATE_NODE_ATTEMPT:var T=t.payload,k=T.nodeType,F=T.status,_=T.parentNodeId;return e.attemptToCreate={status:F,nodeType:k,parentNodeId:_},e;case o.SELECT_FILE_INFO_FOR_VIEW:var N,C;if("workspace"===t.payload.parent&&(N=e.allNodes.findIndex((function(e){return e.nodeId===t.payload.nodeId}))),"workspace"!==t.payload.parent){var L=e.allNodes.find((function(e){return e.nodeId===t.payload.parent}));N=e.allNodes.findIndex((function(e){return e.nodeId===t.payload.parent})),"folder"===L.nodeType&&(C=L.files.findIndex((function(e){return e.nodeId===t.payload.nodeId})))}return e.selectedFileInfoToView={nodeId:t.payload.nodeId,parent:t.payload.parent,index:N,subIndex:C},e;default:return e}})),b=function(){return Math.random().toString(36).substr(2,5)},j=h,x={loading:!1,code:"",err:""},O=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.BUNDLE_START:return e={loading:!0,code:"",err:""};case o.BUNDLE_COMPLETE:return e={loading:!1,code:t.payload.bundle,err:t.payload.err};default:return e}})),y=Object(d.combineReducers)({nodes:j,bundle:O}),v=Object(d.createStore)(y,{},Object(l.composeWithDevTools)(Object(d.applyMiddleware)(u.a))),g=n(9),w=n.n(g),I=n(27),E=n(153),T=n(105),k=n.n(T),F=n(154),_=n.n(F).a.createInstance({name:"filecache"}),N=function(e,t){return{name:"fetchPlugin",setup:function(n){n.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),n.onLoad({filter:/.*/},function(){var e=Object(I.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.path.startsWith("browser")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,_.getItem(t.path);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.onLoad({filter:/.css$/},function(){var e=Object(I.a)(w.a.mark((function e(t){var n,r,o,a,i,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(t.path);case 2:return n=e.sent,r=n.data,o=n.request,a=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),i="\n          const style = document.createElement('style');\n          style.innerText = '".concat(a,"';\n          document.head.appendChild(style)\n          "),c={loader:"jsx",contents:i,resolveDir:new URL("./",o.responseURL).pathname},e.next=10,_.setItem(t.path,c);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.onLoad({filter:/.*/},function(){var e=Object(I.a)(w.a.mark((function e(n){var r,o,a,i,c,d,l,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.path.startsWith("browser")){e.next=9;break}return e.next=3,k.a.get(n.path);case 3:return o=e.sent,a=o.data,i=o.request,r={loader:"jsx",contents:a,resolveDir:new URL("./",i.responseURL).pathname},e.next=9,_.setItem(n.path,r);case 9:return n.path.startsWith("browser")&&(d=n.path.split("/"),"folder"===(l=t.find((function(e){return e.name===d[1]}))).nodeType&&(u=l.files.find((function(e){return e.name===d[2]})),c=void 0===u?"":u.code),"file"===l.nodeType&&(c=l.code),r={loader:"jsx",contents:c}),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},C=function(){var e=Object(I.a)(w.a.mark((function e(t,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=4;break}return e.next=3,E.startService({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm"});case 3:s=e.sent;case 4:return e.prev=4,e.next=7,s.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(I.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.path.startsWith("browser")){e.next=2;break}return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 2:if(!t.path.startsWith("browser")){e.next=4;break}return e.abrupt("return",{namespace:"a",path:t.path});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},N(t,n)],define:{"process.env.NODE_ENV":'"production"',global:"window"}});case 7:return r=e.sent,e.abrupt("return",{code:r.outputFiles[0].text,err:""});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",{code:"",err:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(e){return{type:o.CREATE_FILE,payload:{name:e}}},D=function(e,t,n,r){return{type:o.UPDATE_FILE,payload:{nodeId:e,cellType:t,newContent:n,parent:r}}},R=function(e){return{type:o.DELETE_FILE,payload:{nodeId:e}}},S=function(e){return{type:o.CREATE_FOLDER,payload:{name:e}}},A=function(e){return{type:o.DELETE_FOLDER,payload:{nodeId:e}}},z=function(e,t){return{type:o.CREATE_FILE_IN_FOLDER,payload:{folderNodeId:e,name:t}}},W=function(e,t){return{type:o.DELETE_FILE_IN_FOLDER,payload:{folderNodeId:e,fileNodeId:t}}},V=function(e,t,n){return{type:o.CREATE_NODE_ATTEMPT,payload:{nodeType:e,status:t,parentNodeId:n}}},B=function(e,t){return{type:o.SELECT_FILE_INFO_FOR_VIEW,payload:{nodeId:e,parent:t}}},M=function(e,t){return function(){var n=Object(I.a)(w.a.mark((function n(r){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:o.BUNDLE_START}),n.next=3,C(e,t);case 3:a=n.sent,r({type:o.BUNDLE_COMPLETE,payload:{bundle:a.code,err:a.err}});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},P=n(26),U=n(309),G=n(312),q=c.c,H=n(8),$=n(161),Y=n.n($),J=n(306),K=n(83),Q=n.n(K),X=n(41),Z=n.n(X),ee=n(160),te=n.n(ee),ne=n(0),re=function(){var e=Object(c.b)();return Object(ne.useMemo)((function(){return Object(d.bindActionCreators)(r,e)}),[e])},oe=n(82),ae=n.n(oe),ie=n(1),ce=Object(P.a)(U.a)((function(e){e.theme;return{cursor:"pointer"}})),de=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center",padding:"0.1rem 1.5rem",justifyContent:"space-between"}})),le=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center"}})),ue=Object(P.a)(Z.a)((function(e){return{color:e.theme.palette.secondary.main,fontSize:"1.2rem",marginRight:"0.4rem",marginLeft:"1.1rem"}})),se=Object(P.a)(G.a)((function(e){e.theme;return{color:"#dddddd",fontWeight:"bold",fontSize:"0.8rem"}})),fe=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.4rem"}})),pe=Object(P.a)(J.a)((function(e){return{padding:0,margin:0,color:e.theme.palette.custom.textGrey}})),me=Object(P.a)(ae.a)((function(e){return{color:e.theme.palette.custom.textGrey,fontSize:"1.2rem"}})),he=function(e){var t=e.node,n=re(),r=n.selectFileForView,o=n.deleteFile,a=n.deleteFileInFolder,i=q((function(e){return e.nodes.selectedFileInfoToView}));return Object(ie.jsx)(ce,{sx:{background:t.nodeId===(null===i||void 0===i?void 0:i.nodeId)?"linear-gradient(to right, transparent 10%, orange )":"transparent"},children:Object(ie.jsxs)(de,{children:[Object(ie.jsxs)(le,{onClick:function(){r(t.nodeId,t.parent)},children:[Object(ie.jsx)(ue,{}),Object(ie.jsx)(se,{children:t.name})]}),Object(ie.jsx)(fe,{children:Object(ie.jsx)(pe,{onClick:function(){"workspace"!==t.parent&&a(t.parent,t.nodeId),"workspace"===t.parent&&o(t.nodeId)},children:Object(ie.jsx)(me,{})})})]},t.nodeId)})},be=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",alignItems:"center",marginLeft:"1.2rem",marginBottom:"1rem"}})),je=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center",padding:"0.1rem 1.5rem",justifyContent:"space-between",width:"100%"}})),xe=Object(P.a)(Q.a)((function(e){return{color:e.theme.palette.secondary.main,fontSize:"1.2rem",marginRight:"0.4rem"}})),Oe=Object(P.a)(Z.a)((function(e){return{color:e.theme.palette.secondary.main,fontSize:"1.2rem",marginRight:"0.4rem"}})),ye=Object(P.a)("input")((function(e){var t=e.theme;return{lineHeight:"0.8rem",outline:"none",borderColor:t.palette.custom.orange,backgroundColor:"transparent",borderRadius:"0.2rem",color:t.palette.custom.orange,width:"100%"}})),ve=Object(P.a)("form")((function(e){e.theme;return{width:"100%"}})),ge=function(e){var t=e.parentNodeId,n=q((function(e){return e.nodes.attemptToCreate})),r=Object(ne.useState)(),o=Object(H.a)(r,2),a=o[0],i=o[1],c=re(),d=c.createFolder,l=c.createFile,u=c.createNodeAttempt,s=c.createFileInFolder,f=function(e){"charCode"in e&&"Enter"!==e.key||(""!==a?("folder"===n.nodeType&&(d(a),u(null,!1,null),i("")),"file"===n.nodeType&&("workspace"===t?l(a):s(t,a),u(null,!1,null),i(""))):u(null,!1,null))};return Object(ie.jsx)(be,{children:Object(ie.jsxs)(je,{children:["folder"===n.nodeType?Object(ie.jsx)(xe,{}):Object(ie.jsx)(Oe,{}),Object(ie.jsx)(ve,{onBlur:f,onKeyPress:f,children:Object(ie.jsx)(ye,{value:a,onChange:function(e){return i(e.target.value)},autoFocus:!0,id:"standard-basic"})})]})})},we=Object(P.a)(U.a)((function(e){e.theme;return{}})),Ie=Object(P.a)(U.a)((function(e){e.theme;return{marginLeft:"1rem"}})),Ee=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center",padding:"0.1rem 1.5rem",justifyContent:"space-between"}})),Te=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center"}})),ke=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.4rem"}})),Fe=Object(P.a)(Q.a)((function(e){return{color:e.theme.palette.secondary.main,fontSize:"1.2rem",marginRight:"0.4rem"}})),_e=Object(P.a)(te.a)((function(e){return{color:e.theme.palette.custom.textGrey,padding:0,margin:0,fontSize:"1.2rem"}})),Ne=Object(P.a)(J.a)((function(e){return{padding:0,margin:0,color:e.theme.palette.custom.textGrey}})),Ce=Object(P.a)(G.a)((function(e){e.theme;return{color:"#dddddd",fontWeight:"bold",fontSize:"0.8rem"}})),Le=Object(P.a)(Y.a)((function(e){return{color:e.theme.palette.custom.textGrey,padding:0,margin:0,fontSize:"1.2rem"}})),De=Object(P.a)(J.a)((function(e){return{padding:0,margin:0,color:e.theme.palette.custom.textGrey}})),Re=Object(P.a)(J.a)((function(e){return{padding:0,margin:0,color:e.theme.palette.custom.textGrey}})),Se=Object(P.a)(ae.a)((function(e){return{color:e.theme.palette.custom.textGrey,fontSize:"1.2rem"}})),Ae=Object(P.a)(Z.a)((function(e){return{color:e.theme.palette.custom.textGrey,fontSize:"1.2rem"}})),ze=function(e){var t=e.node,n=Object(ne.useState)(!1),r=Object(H.a)(n,2),o=r[0],a=r[1],i=q((function(e){return e.nodes.attemptToCreate})),c=re(),d=c.createNodeAttempt,l=c.deleteFolder,u=t.files;return Object(ie.jsxs)(we,{children:[Object(ie.jsxs)(Ee,{children:[Object(ie.jsxs)(Te,{children:[Object(ie.jsx)(Ne,{onClick:function(){a(!o)},children:o?Object(ie.jsx)(_e,{}):Object(ie.jsx)(Le,{})}),Object(ie.jsx)(Fe,{}),Object(ie.jsx)(Ce,{children:t.name})]}),Object(ie.jsxs)(ke,{children:[Object(ie.jsx)(De,{onClick:function(){d("file",!0,t.nodeId),a(!0)},children:Object(ie.jsx)(Ae,{})}),Object(ie.jsx)(Re,{onClick:function(){l(t.nodeId)},children:Object(ie.jsx)(Se,{})})]})]},t.nodeId),!0===i.status&&i.parentNodeId===t.nodeId?Object(ie.jsx)(ge,{parentNodeId:t.nodeId}):"",Object(ie.jsx)(Ie,{children:o?u.map((function(e){return Object(ie.jsx)(he,{node:e},e.nodeId)})):""})]})},We=Object(P.a)(U.a)((function(e){e.theme;return{}})),Ve=function(e){var t=e.node;return Object(ie.jsx)(We,{children:"folder"===t.nodeType?Object(ie.jsx)(ze,{node:t}):Object(ie.jsx)(he,{node:t})})},Be=Object(P.a)(U.a)((function(e){e.theme;return{}})),Me=function(){var e=q((function(e){return e.nodes.allNodes}));return Object(ie.jsx)(Be,{children:e.map((function(e){return Object(ie.jsx)(Ve,{node:e},e.nodeId)}))})},Pe=Object(P.a)(U.a)((function(e){return{background:e.theme.palette.custom.dark2,width:"18rem",minWidth:"15rem",resize:"horizontal",overflow:"auto",display:"flex",flexDirection:"column"}})),Ue=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"row",alignItems:"center",padding:"0rem 1rem",gap:"0.5rem",marginTop:"1.5rem",marginBottom:"1rem"}})),Ge=Object(P.a)(G.a)((function(e){return{color:e.theme.palette.custom.orange,fontWeight:"bold",paddingTop:"1.5rem 0rem"}})),qe=function(){var e=q((function(e){return e.nodes.attemptToCreate}));return Object(ie.jsxs)(Pe,{children:[Object(ie.jsx)(Ue,{children:Object(ie.jsx)(Ge,{variant:"subtitle2",children:"Workspace"})}),!0===e.status&&"workspace"===e.parentNodeId?Object(ie.jsx)(ge,{parentNodeId:"workspace"}):"",Object(ie.jsx)(Me,{})]})},He=n(162),$e=n.n(He),Ye=n(163),Je=n.n(Ye),Ke=Object(P.a)(U.a)((function(e){return{background:e.theme.palette.custom.dark1,width:"3.5rem",display:"flex",flexDirection:"column",padding:"1rem 0rem"}})),Qe=Object(P.a)($e.a)((function(e){return{color:e.theme.palette.custom.orange,fontSize:"1.8rem"}})),Xe=Object(P.a)(Je.a)((function(e){return{color:e.theme.palette.custom.orange,fontSize:"1.4rem"}})),Ze=Object(P.a)(Z.a)((function(e){return{color:e.theme.palette.custom.orange,fontSize:"1.8rem"}})),et=function(){var e=re().createNodeAttempt;return Object(ie.jsxs)(Ke,{children:[Object(ie.jsx)(J.a,{children:Object(ie.jsx)(Xe,{})}),Object(ie.jsx)(J.a,{onClick:function(){e("folder",!0,"workspace")},children:Object(ie.jsx)(Qe,{})}),Object(ie.jsx)(J.a,{onClick:function(){e("file",!0,"workspace")},children:Object(ie.jsx)(Ze,{})})]})},tt=n(308),nt=n(168),rt=n(310),ot=Object(nt.a)({palette:{primary:{main:"#fca500"},secondary:{main:"#007fd4"},custom:{dark1:"#333333",dark2:"#242424",dark3:"#1A1A1A",textGrey:"#aaaaaa",textWhite:"#ffffff",editorColor:"#202124",orange:"#fca500",orangeLight:"#33fca500"}}}),at=ot=Object(rt.a)(ot),it=n(311),ct=(n(209),n(101)),dt=n.n(ct),lt=n(164),ut=n.n(lt),st=n(165),ft=n.n(st),pt=n(166),mt=n.n(pt),ht=n(167),bt=n.n(ht),jt=n(169),xt=Object(P.a)(U.a)((function(e){return{background:e.theme.palette.custom.editorColor,width:"100%",height:"100%",position:"relative",padding:"2rem 0rem"}})),Ot=Object(P.a)("button")((function(e){var t=e.theme;return{position:"absolute",backgroundColor:t.palette.custom.orange,top:"1rem",width:"6rem",zIndex:1e3,right:"3rem",fontSize:"0.7rem",fontWeight:"bold",padding:"0.4rem",border:"none",outline:"none",borderRadius:"0.2rem",cursor:"pointer",transition:"transform 0.3s ease-in","&:hover":{backgroundColor:t.palette.custom.dark2,color:t.palette.custom.orange},"&:active":{transform:"translate(0px, 5px)"}}})),yt=Object(P.a)("button")((function(e){var t=e.theme;return{position:"absolute",backgroundColor:t.palette.custom.orange,top:"4rem",width:"6rem",zIndex:1e3,right:"3rem",fontSize:"0.7rem",fontWeight:"bold",padding:"0.4rem",border:"none",outline:"none",borderRadius:"0.2rem",cursor:"pointer",transition:"transform 0.3s ease-in","&:hover":{backgroundColor:t.palette.custom.dark2,color:t.palette.custom.orange},"&:active":{transform:"translate(0px, 5px)"}}})),vt=function(e){var t=e.onChange,n=e.initialValue,r=e.fileFormat,o=e.doBundle,a=Object(ne.useRef)(),i="javascript"===r?"babel":"html";return Object(ie.jsxs)(xt,{children:[Object(ie.jsx)(Ot,{onClick:function(){try{var e=a.current.getModel().getValue(),t=ut.a.format(e,{parser:i,plugins:[ft.a,mt.a],useTabs:!1,semi:!0,singleQuote:!0}).replace(/\n$/,"");a.current.setValue(t)}catch(n){console.log(n)}},children:"Format"}),Object(ie.jsx)(yt,{onClick:o,children:"Re-Bundle"}),Object(ie.jsx)(dt.a,{editorDidMount:function(e,n){var r;a.current=n,n.onDidChangeModelContent((function(){t(e())})),null===(r=n.getModel())||void 0===r||r.updateOptions({tabSize:2}),new jt.a(window.monaco,bt.a,n).highLightOnDidChangeModelContent((function(){}),(function(){}),void 0,(function(){}))},value:n,language:r,theme:"dark",height:"100%",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0}})]})},gt=Object(P.a)(U.a)((function(e){return{background:e.theme.palette.custom.dark1,width:"100%",height:"100%"}})),wt=function(e){var t=e.file,n=e.doBundle,r=re().updateFile,o=Object(ne.useState)(t.code),a=Object(H.a)(o,2),i=a[0],c=a[1];return Object(ne.useEffect)((function(){r(t.nodeId,"code",i,t.parent)}),[i]),Object(ie.jsx)(gt,{children:Object(ie.jsx)(vt,{doBundle:n,initialValue:t.code,onChange:function(e){return function(e){c(e)}(e)},fileFormat:t.fileFormat})})},It=n(304),Et=Object(P.a)(U.a)((function(e){e.theme;return{width:"100%",display:"flex",height:"1.5rem"}})),Tt=Object(P.a)(U.a)((function(e){e.theme;return{flex:1,display:"flex",justifyContent:"center",fontSize:"0.9rem",fontWeight:"bold"}})),kt=Object(P.a)(U.a)((function(e){return{flex:1,color:e.theme.palette.custom.dark2,opacity:.9,fontWeight:"bold",fontSize:"0.9rem",display:"flex",justifyContent:"center"}}));!function(e){e[e.code=0]="code",e[e.preview=1]="preview",e[e.default=2]="default"}(f||(f={}));var Ft,_t=function(e){var t=e.fileName,n=e.viewState,r=e.setViewState,o=Object(It.a)();return Object(ie.jsxs)(Et,{children:[Object(ie.jsx)(Tt,{onClick:function(){r(f.code)},sx:{backgroundColor:n===f.code?o.palette.custom.orange:o.palette.custom.dark2,color:n===f.code?o.palette.custom.dark2:o.palette.custom.orange},children:t}),Object(ie.jsx)(kt,{sx:{backgroundColor:n===f.preview?o.palette.custom.orange:o.palette.custom.dark2,color:n===f.preview?o.palette.custom.dark2:o.palette.custom.orange},onClick:function(){r(f.preview)},children:"preview"})]})},Nt=Object(P.a)(U.a)((function(e){e.theme;return{position:"relative",height:"100%",flexGrow:1}})),Ct=Object(P.a)("iframe")((function(e){e.theme;return{height:"100%",width:"100%"}})),Lt=Object(P.a)(U.a)((function(e){e.theme;return{position:"absolute",top:"10px",left:"10px",color:"red"}})),Dt=function(e){var t=e.code,n=e.err,r=Object(ne.useRef)(),o=q((function(e){var t=e.nodes.allNodes.find((function(e){return"public"===e.nodeId}));if("folder"===t.nodeType)return t.files.find((function(e){return"html"===e.nodeId})).code}));return Object(ne.useEffect)((function(){r.current.srcdoc=o,setTimeout((function(){r.current.contentWindow.postMessage(t,"*")}),50)}),[t,o]),Object(ie.jsxs)(Nt,{children:[Object(ie.jsx)(Ct,{ref:r,title:"code preview",sandbox:"allow-scripts",srcDoc:o}),n&&Object(ie.jsx)(Lt,{children:n})]})},Rt=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"3rem"}})),St=Object(P.a)(G.a)((function(e){e.theme;return{color:"orange",fontSize:"2rem"}})),At=Object(P.a)(G.a)((function(e){return{color:e.theme.palette.custom.textGrey,fontSize:"1rem",marginTop:"2rem",width:"70%"}})),zt=Object(P.a)("ul")((function(e){return{color:e.theme.palette.custom.textGrey,fontSize:"1rem",marginTop:"1rem",width:"70%"}})),Wt=Object(P.a)("li")((function(e){return{color:e.theme.palette.custom.textGrey,fontSize:"1rem",marginTop:"1rem"}})),Vt=function(){return Object(ie.jsxs)(Rt,{children:[Object(ie.jsx)(St,{children:"Welcome to Nix Browser Editor"}),Object(ie.jsx)(At,{children:"Nix editor is a react browser editor. Nix editor is not stable yet that's why we would like to follow the guide we provide."}),Object(ie.jsxs)(zt,{children:[Object(ie.jsx)(Wt,{children:'Please do not delete default folders which are "main" and "public". There are entry points for bundler.'}),Object(ie.jsx)(Wt,{children:'Please starts with "browser" to import a local files. such as "import Navbar from "browser/src/navbar"'}),Object(ie.jsx)(Wt,{children:"Please do not use relative path for local file. Use always absolute path."}),Object(ie.jsx)(Wt,{children:"Nested folder structure is not supported yet. You can only have files in your folders."}),Object(ie.jsx)(Wt,{children:"Please use inline styles for components. Individual css files are not supported yet. However you can import bulma or tailwind libraries and can use with classname attributes."}),Object(ie.jsx)(Wt,{children:"The html file in public folder is your default preview html file. It is not recommended to change it unless you are aware of exactly how the editor works."}),Object(ie.jsx)(Wt,{children:"You can't rename folders or files. You need to delete and recreate them. Also you can't move them as well."})]})]})},Bt=Object(P.a)(U.a)((function(e){e.theme;return{display:"flex",flexGrow:1,flexDirection:"column"}}));!function(e){e[e.code=0]="code",e[e.preview=1]="preview",e[e.default=2]="default"}(Ft||(Ft={}));var Mt=function(){var e=Object(ne.useState)(Ft.default),t=Object(H.a)(e,2),n=t[0],r=t[1],o=q((function(e){var t,n=e.nodes.allNodes.find((function(e){return"main"===e.nodeId}));return"folder"===n.nodeType&&(t=n.files.find((function(e){return"entryPoint"===e.nodeId})).code),t})),a=re().createBundle,i=q((function(e){return e.bundle})),c=q((function(e){return e.nodes.allNodes})),d=function(){a(o,c)};Object(ne.useEffect)((function(){if(i.code){var e=setTimeout(Object(I.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d();case 1:case"end":return e.stop()}}),e)}))),750);return function(){clearTimeout(e)}}d()}),[o,a]);var l=q((function(e){return e.nodes.selectedFileInfoToView})),u=q((function(e){if("workspace"===(null===l||void 0===l?void 0:l.parent))return e.nodes.allNodes[null===l||void 0===l?void 0:l.index];if("workspace"!==(null===l||void 0===l?void 0:l.parent)){var t=e.nodes.allNodes[null===l||void 0===l?void 0:l.index];if("folder"===(null===t||void 0===t?void 0:t.nodeType))return t.files[null===l||void 0===l?void 0:l.subIndex]}}));Object(ne.useEffect)((function(){null===l&&r(Ft.default)}),[l]);return Object(ie.jsxs)(Bt,{children:[u?Object(ie.jsx)(_t,{fileName:null===u||void 0===u?void 0:u.name,setViewState:r,viewState:n}):"",function(){switch(n){case Ft.code:return Object(ie.jsx)(wt,{doBundle:d,file:"file"===(null===u||void 0===u?void 0:u.nodeType)&&u});case Ft.preview:return Object(ie.jsx)(Dt,{code:i.code,err:i.err});case Ft.default:return Object(ie.jsx)(Vt,{})}}()]})},Pt=Object(P.a)(U.a)((function(e){return{display:"flex",flexDirection:"row",background:e.theme.palette.custom.dark3,minHeight:"100vh",width:"100vw"}})),Ut=function(){return Object(ie.jsx)(c.a,{store:v,children:Object(ie.jsxs)(tt.a,{theme:at,children:[Object(ie.jsx)(it.a,{}),Object(ie.jsxs)(Pt,{children:[Object(ie.jsx)(et,{}),Object(ie.jsx)(qe,{}),Object(ie.jsx)(Mt,{})]})]})})};i.a.render(Object(ie.jsx)(Ut,{}),document.querySelector("#root"))}},[[285,1,2]]]);
//# sourceMappingURL=main.6e3a70cc.chunk.js.map