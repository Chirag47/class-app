(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e){e.exports=[{classname:"Class I",students:[{name:"student 1",marks:{Maths:35,Science:64,English:42}},{name:"student 2",marks:{Maths:20,Science:100,English:62}},{name:"student 3",marks:{Maths:60,Science:90,English:62}}]},{classname:"Class II",students:[{name:"student 4",marks:{Maths:64,Science:100,English:42}},{name:"student 5",marks:{Maths:53,Science:27,English:62}},{name:"student 6",marks:{Maths:63,Science:94,English:67}}]}]},123:function(e,t,a){e.exports=a(391)},132:function(e,t,a){},134:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(8),c=a.n(r),l=a(43),o=a(39),u=a(88),i=Object(o.b)({selectedClass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SET_CLASS_SELECTION"===t.type?t.text:e},showAverage:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_AVG_BUTTON"===t.type?!t.value:e},classes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"SET_CLASSES"===t.type?[].concat(Object(u.a)(e),Object(u.a)(t.classes)):e}}),m=(a(132),a(133),a(40)),d=a(41),h=a(45),v=a(42),g=a(44),E=(a(134),a(10)),f=(a(387),a(64));a(388);function p(e){return s.a.createElement(E.Layout.Row,null,s.a.createElement(E.Layout.Col,{span:"8"},e.subjectName),s.a.createElement(E.Layout.Col,{span:"16"},s.a.createElement(E.Progress,{percentage:e.subjectScore})))}var b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).studentAggregate=a.studentAggregate.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"studentAggregate",value:function(){var e=0;for(var t in this.props.student.marks)e+=this.props.student.marks[t];var a=Object.keys(this.props.student.marks).length;return Number.parseFloat(e/a).toFixed(2)}},{key:"render",value:function(){return s.a.createElement(E.Card,{className:"box-card",header:s.a.createElement("div",{className:"boxHeader"},s.a.createElement("span",null,this.props.student.name),s.a.createElement("span",{className:"percentage"},this.studentAggregate(),"%"))},Object.keys(this.props.student.marks)&&Object.keys(this.props.student.marks).map(function(e){return s.a.createElement(p,{key:e,subjectName:e,subjectScore:this.props.student.marks[e]})},this))}}]),t}(s.a.Component);function y(e){return s.a.createElement("div",{className:"headingContainer"},s.a.createElement(E.Layout.Row,{className:"headingRow"},s.a.createElement("div",{className:"classDetailColumn"},s.a.createElement("h2",null,e.classObject.classname),s.a.createElement("h6",null,e.classObject.students.length," Students")),s.a.createElement("div",{className:"buttonColumn"},s.a.createElement(E.Button,{className:"button",type:e.showAverage?"default":"primary"},s.a.createElement("div",{onClick:function(){return e.clickHandler(e.showAverage)}},e.showAverage?"Show Average":"Hide Average")))),s.a.createElement(E.Layout.Row,{gutter:"20",style:!1===e.showAverage?{display:"block"}:{display:"none"}},s.a.createElement(E.Layout.Col,{span:"18",offset:"3",className:"averageDetails"},"Classroom Average Performance: ",e.classAverage,"%")))}var k=function(e){var t=e.classObject,a=e.classAverage,n=e.showAverage,r=e.toggleAvgButton;return console.log(n,"func"),s.a.createElement(E.Layout.Col,{span:"20",className:"mainPanel"},t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{classObject:t,classAverage:a,clickHandler:r,showAverage:n}),s.a.createElement("div",{style:{overflowY:"auto",padding:"10px"}},t.students&&t.students.map(function(e){return s.a.createElement(b,{student:e,key:e.name})}))),!t&&s.a.createElement("div",{className:"empty"},s.a.createElement("span",null,"Select a Class")))},C=0;var O=function(e,t){return e.filter(function(e){return e.classname===t})[0]},j=function(e,t){var a=O(e,t),n=0;if(a){var s=a.students;return console.log(s,"clss"),s.forEach(function(e){var t=0;for(var a in e.marks)t+=e.marks[a];t/=Object.keys(e.marks).length,n+=t}),Number.parseFloat(n/a.students.length).toFixed(2)}return 0},w=function(e){return e.showAverage},S=Object(l.b)(function(e){return{classObject:O(e.classes,e.selectedClass),classAverage:j(e.classes,e.selectedClass),showAverage:w(e)}},function(e){return{toggleAvgButton:function(t){return e(function(e){return{type:"TOGGLE_AVG_BUTTON",id:C++,value:e}}(t))}}})(k);a(389);function A(e){return s.a.createElement("div",null,e.classes&&e.classes.map(function(t){return s.a.createElement(E.Layout.Row,{key:t},s.a.createElement(E.Layout.Col,{offset:"1"},s.a.createElement("div",{className:e.selectedClass===t?"name active":"name",onClick:e.handleClick.bind(null,t)},t)))},this))}var N=function(e){var t=e.classes,a=e.selectedClass,n=e.setSelectedClass;return s.a.createElement(E.Layout.Col,{span:"4",className:"sidePanel"},s.a.createElement(E.Layout.Row,{className:"heading"},s.a.createElement("h3",null," School: XYZ ")),s.a.createElement(A,{classes:t,selectedClass:a,handleClick:n}))},L=Object(l.b)(function(e){return{classes:(t=e.classes,t.map(function(e){return e.classname})),selectedClass:e.selectedClass};var t},function(e){return{setSelectedClass:function(t){return e({type:"SET_CLASS_SELECTION",id:C++,text:t})}}})(N),T=(a(390),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(E.Layout.Row,{className:"layout"},s.a.createElement(L,null),s.a.createElement(S,null))}}]),t}(s.a.Component)),_=a(122),x=function(e){function t(e){var a;return Object(m.a)(this,t),a=Object(h.a)(this,Object(v.a)(t).call(this,e)),window.store.dispatch({type:"SET_CLASSES",id:C++,classes:_}),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(T,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=Object(o.c)(i);window.store=B,c.a.render(s.a.createElement(l.a,{store:B},s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,1,2]]]);
//# sourceMappingURL=main.ec9ac3c5.chunk.js.map