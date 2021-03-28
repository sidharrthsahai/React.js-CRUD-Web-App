(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(22),i=c.n(o),r=(c(43),c.p,c(44),c(74)),a=c(84),l=c(85),j=(c(28),c(12)),d=c(73),u=c(75),b=c(2),h=function(){return Object(n.useEffect)((function(){document.title="Home"}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)(d.a,{className:"text-center",children:[Object(b.jsx)("h1",{children:"Code with Sid"}),Object(b.jsx)("p",{children:"This page displays the courses I took during my Master's in Computer Science from University College Dublin"}),Object(b.jsx)(r.a,{children:Object(b.jsx)(u.a,{color:"info",children:"Start Using"})})]})})},O=c(19),x=c.n(O),p=c(76),g=c(77),m=c(78),f=c(79),C="http://localhost:9090",v=function(e){var t=e.course,c=e.update;return Object(b.jsx)(p.a,{className:"text-center",children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(m.a,{tag:"h6",className:"font-weight-bold",children:t.title}),Object(b.jsx)(f.a,{children:t.description}),Object(b.jsxs)(r.a,{className:"text-center",children:[Object(b.jsx)(u.a,{color:"danger",onClick:function(){var e;e=t.id,x.a.delete("".concat(C,"/courses/").concat(e)).then((function(t){j.b.success("Course deleted"),c(e)}),(function(e){j.b.error("Course not deleted! Something went wrong!")}))},children:"Delete"}),Object(b.jsx)(u.a,{color:"warning ml-3",children:"Update"})]})]})})},w=c(23),y=function(){Object(n.useEffect)((function(){document.title="All Courses"}),[]);Object(n.useEffect)((function(){x.a.get("".concat(C,"/courses")).then((function(e){console.log(e.data),j.b.success("Courses have safely landed inside the server"),s(e.data)}),(function(e){console.log(e),j.b.error("Something went wrong")}))}),[]);var e=Object(n.useState)([]),t=Object(w.a)(e,2),c=t[0],s=t[1],o=function(e){s(c.filter((function(t){return t.id!=e})))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"All Courses"}),Object(b.jsx)("p",{children:"My favourite courses which I opted to take are as follows :"}),c.length>0?c.map((function(e){return Object(b.jsx)(v,{course:e,update:o},e.id)})):"No Courses"]})},N=c(17),S=c(80),E=c(81),I=c(82),A=function(){Object(n.useEffect)((function(){document.title="Add Course"}),[]);var e=Object(n.useState)({}),t=Object(w.a)(e,2),c=t[0],s=t[1],o=function(e){x.a.post("".concat(C,"/courses"),e).then((function(e){console.log(e),console.log("success"),j.b.success("New course posted inside the server"),s({id:"",title:"",description:""})}),(function(e){console.log(e),console.log("error"),j.b.error("Oops! Something went haywire!")}))};return Object(b.jsx)(n.Fragment,{children:Object(b.jsxs)(S.a,{onSubmit:function(e){console.log(c),o(c),e.preventDefault()},children:[Object(b.jsxs)(E.a,{children:[Object(b.jsx)("label",{for:"userId",children:" Course Id "}),Object(b.jsx)(I.a,{type:"text",placeholder:"Enter here",name:"userId",id:"userId",onChange:function(e){s(Object(N.a)(Object(N.a)({},c),{},{id:e.target.value}))}})]}),Object(b.jsxs)(E.a,{children:[Object(b.jsx)("label",{for:"title",children:" Course Title "}),Object(b.jsx)(I.a,{type:"text",placeholder:"Enter title here",id:"title",onChange:function(e){s(Object(N.a)(Object(N.a)({},c),{},{title:e.target.value}))}})]}),Object(b.jsxs)(E.a,{children:[Object(b.jsx)("label",{for:"description",children:" Course Description "}),Object(b.jsx)(I.a,{type:"textarea",placeholder:"Enter description here",id:"description",style:{height:125},onChange:function(e){s(Object(N.a)(Object(N.a)({},c),{},{description:e.target.value}))}})]}),Object(b.jsxs)(r.a,{className:"text-center",children:[Object(b.jsx)(u.a,{type:"submit",color:"success",children:"Add Course"}),Object(b.jsx)(u.a,{type:"reset",onClick:function(){s({id:"",title:"",description:""})},color:"warning ml-3",children:"Clear"})]})]})})};var k=function(e){return e.name,e.title,Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{className:"my-2 bg-warning",children:Object(b.jsx)(g.a,{children:Object(b.jsx)("h1",{className:"text-center my-2",children:"Welcome to Courses Application"})})})})},D=c(83),F=c(15),T=function(){return Object(b.jsxs)(D.a,{children:[Object(b.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/",action:!0,children:"Home"}),Object(b.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/add-course",action:!0,children:"Add Course"}),Object(b.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/view-courses",action:!0,children:"View Courses"}),Object(b.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",action:!0,children:"About"}),Object(b.jsx)(F.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",action:!0,children:"Contact"})]})},B=c(7);var M=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(F.a,{children:[Object(b.jsx)(j.a,{}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(k,{}),Object(b.jsxs)(a.a,{children:[Object(b.jsx)(l.a,{md:4,children:Object(b.jsx)(T,{})}),Object(b.jsxs)(l.a,{md:8,children:[Object(b.jsx)(B.a,{path:"/",component:h,exact:!0}),Object(b.jsx)(B.a,{path:"/add-course",component:A,exact:!0}),Object(b.jsx)(B.a,{path:"/view-courses",component:y,exact:!0})]})]})]})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),o(e),i(e)}))};c(71);i.a.render(Object(b.jsx)(M,{}),document.getElementById("root")),i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.0bdb3b61.chunk.js.map