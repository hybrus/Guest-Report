(this["webpackJsonpguest-report"]=this["webpackJsonpguest-report"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var r,n,a=c(0),s=c.n(a),i=c(26),o=c.n(i),u=(c(88),c(32)),l=c(14),j=c(2),b=c(40),d=c(45),O=c(20),m=c(6),h=c(9),p=c(19),x=c(29),f=Object(x.b)("users/login",function(){var e=Object(p.a)(Object(h.a)().mark((function e(t,c){var r,n,a,s,i;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,n=t.password,(a=new FormData).append("email",r),a.append("password",n),e.prev=4,e.next=7,fetch("https://api-dev.momenttrack.com/auth/default/system/login",{method:"POST",body:a});case 7:return s=e.sent,e.next=10,s.json();case 10:if(i=e.sent,200!==s.status){e.next=16;break}return localStorage.setItem("token",i.data.access_token),e.abrupt("return",i);case 16:return e.abrupt("return",c.rejectWithValue(i));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),c.rejectWithValue(e.t0.response.data);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t,c){return e.apply(this,arguments)}}()),g=Object(x.b)("users/fetchUserByToken",function(){var e=Object(p.a)(Object(h.a)().mark((function e(t,c){var r,n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(b.a)(t),e.prev=1,e.next=4,fetch("https://api-dev.momenttrack.com/api/lexcorp/users/me",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:if(n=e.sent,200!==r.status){e.next=12;break}return e.abrupt("return",Object(j.a)({},n.data));case 12:return e.abrupt("return",c.rejectWithValue(n));case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",c.rejectWithValue(e.t0.response.data));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,c){return e.apply(this,arguments)}}()),v=Object(x.b)("users/logout",function(){var e=Object(p.a)(Object(h.a)().mark((function e(t,c){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(b.a)(t),localStorage.removeItem("token"),e.abrupt("return",{});case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),y=Object(x.c)({name:"user",initialState:{first_name:"",email:"",guestList:"",isFetching:!1,isSuccess:!1,isError:!1,errorMessage:""},reducers:{clearState:function(e){return e.isError=!1,e.isSuccess=!1,e.isFetching=!1,e}},extraReducers:(r={},Object(m.a)(r,v.fulfilled,(function(e,t){t.payload;return e.email="",e.first_name="",e.isFetching=!1,e.isSuccess=!1,e})),Object(m.a)(r,f.fulfilled,(function(e,t){var c=t.payload;return e.email=c.email,e.first_name=c.first_name,e.isFetching=!1,e.isSuccess=!0,e})),Object(m.a)(r,f.rejected,(function(e,t){var c=t.payload;e.isFetching=!1,e.isError=!0,e.errorMessage=c.message})),Object(m.a)(r,f.pending,(function(e){e.isFetching=!0})),Object(m.a)(r,g.pending,(function(e){e.isFetching=!0})),Object(m.a)(r,g.fulfilled,(function(e,t){var c=t.payload;e.isFetching=!1,e.isSuccess=!0,e.email=c.email,e.first_name=c.first_name})),Object(m.a)(r,g.rejected,(function(e){e.isFetching=!1,e.isError=!0})),r)}),S=y.actions.clearState,k=function(e){return e.user},N=c(73),w=c(112),C=c(81),E=c(1),_=function(e){Object(b.a)(e);var t=Object(O.b)(),c=Object(l.g)(),r=Object(d.a)(),n=r.register,s=(r.errors,r.handleSubmit),i=Object(O.c)(k),o=(i.isFetching,i.isSuccess),u=i.isError,m=i.errorMessage;return Object(a.useEffect)((function(){return function(){t(S())}}),[]),Object(a.useEffect)((function(){u&&(N.b.error(m),t(S())),o&&(t(S()),c.push("/"))}),[u,o]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:Object(E.jsx)("h2",{children:"Sign in to your account"})}),Object(E.jsxs)(w.a,{onSubmit:s((function(e){t(f(e))})),method:"POST",children:[Object(E.jsxs)(w.a.Group,{className:"mb-3",controlId:"formEmail",children:[Object(E.jsx)(w.a.Label,{children:"Email"}),Object(E.jsx)(w.a.Control,Object(j.a)(Object(j.a)({type:"email",autoComplete:"email"},n("email",{pattern:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i})),{},{required:!0}))]}),Object(E.jsxs)(w.a.Group,{className:"mb-3",controlId:"formPassword",children:[Object(E.jsx)(w.a.Label,{children:"Password"}),Object(E.jsx)(w.a.Control,Object(j.a)(Object(j.a)({type:"password"},n("password",{required:!0})),{},{autoComplete:"current-password",required:!0}))]}),Object(E.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})},G=c(3),I=["component"],L=function(e){var t=e.component,c=Object(G.a)(e,I);return Object(E.jsx)(l.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return localStorage.getItem("token")?Object(E.jsx)(t,Object(j.a)({},e)):Object(E.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},T=c(111),F=c(107),D=c(113),q=c(110),A=Object(x.b)("employeeLists/employee",function(){var e=Object(p.a)(Object(h.a)().mark((function e(t,c){var r,n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(b.a)(t),e.prev=1,e.next=4,fetch("https://api-dev.momenttrack.com/api/lexcorp/users",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:if(n=e.sent,200!==r.status){e.next=12;break}return e.abrupt("return",Object(j.a)({},n));case 12:return e.abrupt("return",c.rejectWithValue(n));case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",c.rejectWithValue(e.t0.response.data));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,c){return e.apply(this,arguments)}}()),M=Object(x.c)({name:"employeeList",initialState:{employees:[]},reducers:{clearState:function(e){return e}},extraReducers:(n={},Object(m.a)(n,A.pending,(function(e){})),Object(m.a)(n,A.fulfilled,(function(e,t){var c=t.payload;e.employees=c.data})),Object(m.a)(n,A.rejected,(function(e){})),n)}),Y=(M.actions.clearState,function(e){return e.employees}),B=function(){var e=Object(l.g)(),t=Object(O.b)(),c=Object(O.c)(k),r=c.first_name,n=c.isError;Object(a.useEffect)((function(){"/login"===e.location.pathname||r||(t(g({})),t(A({})))}),[e.location]),Object(a.useEffect)((function(){n&&(t(S()),e.push("/login"))}),[n]);return Object(E.jsx)(E.Fragment,{children:!!r&&Object(E.jsx)(T.a,{variant:"dark",bg:"dark",children:Object(E.jsxs)(F.a,{children:[Object(E.jsx)(T.a.Brand,{style:{cursor:"pointer"},onClick:function(){return e.push("/")},children:"Guest Report"}),Object(E.jsx)(T.a.Toggle,{}),Object(E.jsxs)(T.a.Collapse,{className:"justify-content-end",children:[Object(E.jsxs)(D.a,{className:"me-auto",children:[Object(E.jsx)(u.b,{to:"/",exact:!0,activeClassName:"active",className:"nav-link",children:"Home"}),Object(E.jsxs)(q.a,{title:"Guest",id:"basic-nav-dropdown",children:[Object(E.jsx)(u.b,{to:"/guest-in",activeClassName:"active",className:"dropdown-item",children:"Check In"}),Object(E.jsx)(u.b,{to:"/guest-out",activeClassName:"active",className:"dropdown-item",children:"Check Out"})]})]}),Object(E.jsxs)(D.a,{className:"ms-auto",children:[Object(E.jsxs)(T.a.Text,{children:["Signed in as: ",Object(E.jsx)("strong",{children:r})]}),Object(E.jsx)(D.a.Link,{onClick:function(){t(v({})),e.push("/login")},className:"text-danger",children:" Logout"})]})]})]})})})},V=c(108),W=c(11),z=c(72),P=c.n(z),R=Object(x.c)({name:"guestList",initialState:{guests:[]},reducers:{addState:function(e,t){var c=t.payload;e.guests=[].concat(Object(W.a)(e.guests),[c])},outState:function(e,t){var c=t.payload.toUpperCase();e.guests=e.guests.map((function(e){return e.id===c?Object(j.a)(Object(j.a)({},e),{},{visit_status:"out",time_out:P()().format("MM/DD/YYYY hh:mm A")}):e})),e.loggedout=!0}}}),U=R.actions,J=U.addState,Z=U.outState,H=function(e){return e.guests},K=function(){var e=Object(O.c)(H).guests;return Object(E.jsxs)(F.a,{className:"mt-5",children:[Object(E.jsxs)(V.a,{striped:!0,bordered:!0,hover:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"ID"}),Object(E.jsx)("th",{children:"Name"}),Object(E.jsx)("th",{children:"Country"}),Object(E.jsx)("th",{children:"Employee"}),Object(E.jsx)("th",{children:"Date In"}),Object(E.jsx)("th",{children:"Date Out"}),Object(E.jsx)("th",{children:"Status"})]})}),Object(E.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(e){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:e.id}),Object(E.jsx)("td",{children:e.name}),Object(E.jsx)("td",{children:e.country}),Object(E.jsx)("td",{children:e.employee}),Object(E.jsx)("td",{children:e.time_in}),Object(E.jsx)("td",{children:e.time_out}),Object(E.jsx)("td",{children:e.visit_status})]},e.id)}))})]}),!e||(!!e&&e.length)<=0&&Object(E.jsx)("span",{className:"text-muted",children:"* no guests to show"})]})},Q=c(7),X=c(114),$=function(){var e=Object(O.b)(),t=Object(O.c)(Y).employees,c=Object(d.a)(),r=c.register,n=c.handleSubmit,s=c.reset,i=c.formState.errors,o=Object(a.useState)(),u=Object(Q.a)(o,2),b=u[0],m=u[1];Object(l.g)();return Object(a.useEffect)((function(){var e=setTimeout((function(){return m()}),2e4);return function(){return clearTimeout(e)}}),[b]),Object(E.jsx)(F.a,{className:"d-flex align-items-center align-center w-100 pt-5",style:{placeContent:"center"},children:Object(E.jsx)(X.a,{style:{width:"18rem"},children:Object(E.jsx)(w.a,{onSubmit:n((function(t){var c=t;c.id=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=t.length,r=0;r<6;r++)e+=t.charAt(Math.floor(Math.random()*c));return e.toUpperCase()}(),m(c.id),c.visit_status="in",c.time_in=P()().format("MM/DD/YYYY hh:mm A"),c.time_out="",e(J(c)),s()})),children:Object(E.jsxs)(X.a.Body,{children:[Object(E.jsx)(X.a.Title,{children:"Guest Sign in"}),Object(E.jsxs)("div",{className:b?"d-block":"d-none",children:[Object(E.jsx)("h6",{className:"mt-3 mb-1",children:"Your Guest ID:"}),Object(E.jsx)("h1",{children:b}),Object(E.jsx)("p",{children:"*use this ID to logout"})]}),Object(E.jsxs)("div",{className:b?"d-none":"d-block",children:[Object(E.jsxs)(w.a.Group,{className:"mb-3",children:[Object(E.jsx)(w.a.Label,{children:"Name"})," ",!(null===i||void 0===i||!i.name)&&Object(E.jsx)("span",{className:"text-danger",children:"* required"}),Object(E.jsx)(w.a.Control,Object(j.a)({type:"text",placeholder:"Full Name"},r("name",{required:!0})))]}),Object(E.jsxs)(w.a.Group,{className:"mb-3",children:[Object(E.jsx)(w.a.Label,{children:"Country"})," ",!(null===i||void 0===i||!i.country)&&Object(E.jsx)("span",{className:"text-danger",children:"* required"}),Object(E.jsx)(w.a.Control,Object(j.a)({type:"text",placeholder:"Country"},r("country",{required:!0})))]}),Object(E.jsxs)(w.a.Group,{className:"mb-3",children:[Object(E.jsx)(w.a.Label,{children:"Visiting Employee"}),"  ",!(null===i||void 0===i||!i.employee)&&Object(E.jsx)("span",{className:"text-danger",children:"* required"}),Object(E.jsxs)(w.a.Select,Object(j.a)(Object(j.a)({"aria-label":"Select Employee to visit"},r("employee",{required:!0})),{},{children:[Object(E.jsx)("option",{value:"",children:"Select Employee to visit"}),null===t||void 0===t?void 0:t.map((function(e){return Object(E.jsx)("option",{value:null!==e&&void 0!==e&&e.first_name?e.first_name:e.email,children:null!==e&&void 0!==e&&e.first_name?e.first_name:e.email},e.id)}))]}))]})]}),b?Object(E.jsx)(C.a,{variant:"warning",type:"button",onClick:function(){return m()},children:"Clear"}):Object(E.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})},ee=c(109),te=function(){var e=Object(O.b)(),t=Object(d.a)(),c=t.register,r=t.handleSubmit,n=t.reset,s=t.formState.errors,i=Object(a.useState)(),o=Object(Q.a)(i,2),u=o[0],l=o[1];Object(a.useEffect)((function(){var e=setTimeout((function(){return l()}),1e4);return function(){return clearTimeout(e)}}),[u]);return Object(E.jsx)(F.a,{className:"d-flex align-items-center align-center w-100 pt-5",style:{placeContent:"center"},children:Object(E.jsx)(X.a,{style:{width:"18rem"},children:Object(E.jsxs)(w.a,{onSubmit:r((function(t){l(!1),e(Z(t.id)),l(!0),n()})),children:[!!u&&Object(E.jsx)(ee.a,{variant:"success",children:"Guest Logged Out!"}),Object(E.jsxs)(X.a.Body,{children:[Object(E.jsx)(X.a.Title,{children:"Guest Logout"}),Object(E.jsxs)(w.a.Group,{className:"mb-3",children:[Object(E.jsx)(w.a.Label,{children:"Guest ID"})," ",!(null===s||void 0===s||!s.id)&&Object(E.jsx)("span",{className:"text-danger",children:"* required"}),Object(E.jsx)(w.a.Control,Object(j.a)({type:"text",placeholder:"guest ID"},c("id",{required:!0})))]}),Object(E.jsx)(C.a,{variant:"primary",type:"submit",children:"Logout"})]})]})})})};var ce=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(B,{}),Object(E.jsxs)(l.d,{children:[Object(E.jsx)(l.b,{exact:!0,component:_,path:"/login"}),Object(E.jsx)(L,{exact:!0,component:K,path:"/"}),Object(E.jsx)(L,{exact:!0,component:$,path:"/guest-in"}),Object(E.jsx)(L,{exact:!0,component:te,path:"/guest-out"}),Object(E.jsx)(l.a,{to:"/"})]})]})})},re=Object(x.a)({reducer:{user:y.reducer,employees:M.reducer,guests:R.reducer}});o.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsxs)(O.a,{store:re,children:[Object(E.jsx)(ce,{}),Object(E.jsx)(N.a,{})]})}),document.getElementById("root"))},88:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.e2f4fb55.chunk.js.map