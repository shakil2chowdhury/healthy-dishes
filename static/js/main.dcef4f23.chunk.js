(this["webpackJsonphealthy-dishes"]=this["webpackJsonphealthy-dishes"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},64:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(20),a=s.n(n),r=(s(40),s(41),s(5)),d=s(3),l=s(7),o=s(17),j=s(4),b=s(34),h=s.n(b),u=s(35),O=s(13),m=Object(O.b)({name:"dishes",initialState:[{id:1,title:"Ice Cream",protein:4.6,fat:15,carb:31,calories:277.4,img:"https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg"},{id:2,title:"Medium Meatball",protein:4,fat:6.3,carb:2.3,calories:345,img:"https://www.flavcity.com/wp-content/uploads/2018/06/meatballs-tomato-sauce-500x500.jpg"},{id:3,title:"Milk Shake",protein:14,fat:12,carb:96,calories:237,img:"https://image.freepik.com/free-photo/milkshake-set-table_140725-9239.jpg"}],reducers:{addDish:function(e,t){var s={id:Math.random(),title:t.payload.title,protein:t.payload.protein,fat:t.payload.fat,carb:t.payload.carb,img:t.payload.img,calories:4*t.payload.protein+9*t.payload.fat+4*t.payload.carb};e.push(s)},deleteDish:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},updateDish:function(e,t){e.map((function(e){e.id===t.payload.id&&(e.title=t.payload.title,e.protein=t.payload.protein,e.fat=t.payload.fat,e.carb=t.payload.carb,e.calories=4*t.payload.protein+9*t.payload.fat+4*t.payload.carb)}))}}}),p=m.actions,x=p.addDish,f=p.deleteDish,g=(p.updateDish,p.dishList,m.reducer),v=(s(64),s(0)),y=function(){return Object(v.jsxs)("div",{className:"flex-column sidebar-main",children:[Object(v.jsx)("div",{className:"mt-2",children:Object(v.jsx)(r.b,{to:"/addDish",children:"Add Dishes"})}),Object(v.jsx)("div",{className:"mt-2",children:Object(v.jsx)(r.b,{to:"/dishList",children:"View Dishes"})}),Object(v.jsx)("div",{className:"mt-2",children:Object(v.jsx)(r.b,{to:"/user",children:"User Dashboard"})}),Object(v.jsx)("div",{className:"mt-2",children:Object(v.jsx)(r.b,{to:"/login",onClick:function(){window.location.href="/"},children:"Log out"})})]})},w=function(){var e,t=Object(l.b)(),s=Object(l.c)((function(e){return e.loginUser})).map((function(e){return e})),i=Object(u.a)(),n=i.register,a=i.handleSubmit,d=i.formState.errors,b=Object(c.useState)("https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg"),O=Object(j.a)(b,2),m=O[0],p=O[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),w=g[0],N=g[1],C=Object(c.useState)(),D=Object(j.a)(C,2),k=D[0],L=D[1];return Object(v.jsx)(v.Fragment,{children:"admin"===(null===(e=s[1])||void 0===e?void 0:e.user)?Object(v.jsx)("section",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"row admin-container",children:[Object(v.jsx)("div",{className:"col-md-2 py-5 sidebar-admin",children:Object(v.jsx)(y,{})}),Object(v.jsx)("div",{className:"col-md-10",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"text-center my-3",children:"Add Dishes From Here"}),w&&Object(v.jsx)("span",{className:"text-success text-center",children:"Your Dish Has Been Added Successfully"}),Object(v.jsx)("form",{onSubmit:a((function(e){L(4*e.dishProtein+9*e.dishFat+4*e.dishCarb),e.img=m,t(x({id:Date.now(),title:e.dishName,protein:e.dishProtein,fat:e.dishFat,carb:e.dishCar,calories:4*e.dishProtein+9*e.dishFat+4*e.dishCarb,img:e.img}),N(!0))})),children:Object(v.jsxs)("div",{className:"form-row d-flex",children:[Object(v.jsxs)("div",{class:"form-group col-md-5 ml-5",children:[Object(v.jsx)("label",{for:"dishName",children:"Dish Name"}),Object(v.jsx)("input",Object(o.a)({class:"form-control mb-2",id:"dishName",placeholder:"Dish Name"},n("dishName"))),Object(v.jsx)("label",{for:"dishCar",children:"Carbohydrate"}),Object(v.jsx)("input",Object(o.a)({class:"form-control mb-2",id:"dishCar",placeholder:"Carb"},n("dishCar"))),Object(v.jsx)("label",{for:"dishProtein",children:"Protein Quantity"}),Object(v.jsx)("input",Object(o.a)({class:"form-control mb-2",id:"dishProtein",placeholder:"Protein Quantity"},n("dishProtein")))]}),Object(v.jsxs)("div",{className:"form-group col-md-6 mx-2",children:[Object(v.jsx)("label",{for:"serviceImage",children:"Dish Image"}),Object(v.jsx)("input",{name:"dishImage",type:"file",onChange:function(e){var t=new FormData;t.set("key","a59c77f7cce19a6af12a528420d40cb6"),t.append("image",e.target.files[0]),h.a.post("https://api.imgbb.com/1/upload",t).then((function(e){return p(e.data.data.display_url)})).catch((function(e){return console.log(e)}))},className:"form-control mb-2"}),d.bookCover&&Object(v.jsx)("span",{className:"d-block text-danger",children:"* Image is required"}),Object(v.jsx)("label",{for:"dishFat",children:"Fat Quantity"}),Object(v.jsx)("input",Object(o.a)({class:"form-control mb-2",id:"dishFat",placeholder:"Fat Quantity"},n("dishFat"))),Object(v.jsx)("label",{for:"dishCarb",children:"Calories"}),Object(v.jsx)("input",Object(o.a)({class:"form-control mb-2",id:"dishCarb",placeholder:k},n("dishCarb")))]}),Object(v.jsx)("input",{class:"form-control my-2 btn btn-secondary",type:"submit"})]})})]})})]})}):Object(v.jsx)("section",{className:"container-fluid not-container",children:Object(v.jsxs)("div",{className:"text-center align-items-center not-found",children:[Object(v.jsx)("h2",{children:"404 not found!"}),Object(v.jsx)("p",{children:Object(v.jsx)(r.b,{to:"/login",children:"Click Here For Login!!"})})]})})})},N=(s(68),function(){var e,t=Object(l.c)((function(e){return e.dishes})),s=Object(l.c)((function(e){return e.loginUser})).map((function(e){return e})),c=Object(l.b)();return Object(v.jsx)(v.Fragment,{children:"admin"===(null===(e=s[1])||void 0===e?void 0:e.user)?Object(v.jsx)("section",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"row admin-container",children:[Object(v.jsx)("div",{className:"col-md-2 py-5 sidebar-admin",children:Object(v.jsx)(y,{})}),Object(v.jsx)("div",{className:"col-md-10",children:Object(v.jsx)("div",{className:"order-list",children:Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"Dish Name"}),Object(v.jsx)("th",{scope:"col",children:"Carbohydrates"}),Object(v.jsx)("th",{scope:"col",children:"Protein"}),Object(v.jsx)("th",{scope:"col",children:"Fat"}),Object(v.jsx)("th",{scope:"col",children:"Calories"}),Object(v.jsx)("th",{scope:"col",children:"Remove"})]})}),t.map((function(e){return Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"row",children:e.title}),Object(v.jsx)("td",{children:e.protein}),Object(v.jsx)("td",{children:e.fat}),Object(v.jsx)("td",{children:e.carb}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{className:"btn btn-secondary",children:e.calories})}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{className:"btn btn-secondary",onClick:function(t){c(f({id:e.id}))},children:"X"})})]},e.id)},e.id)}))]})})})]})}):Object(v.jsx)("section",{className:"container-fluid h-100",children:Object(v.jsxs)("div",{className:"text-center align-items-center not-found",children:[Object(v.jsx)("h2",{children:"404 not found!"}),Object(v.jsx)("p",{children:Object(v.jsx)(r.b,{to:"/login",children:"Click Here For Login!!"})})]})})})}),C=function(){var e,t=Object(l.c)((function(e){return e.loginUser})).map((function(e){return e}));return Object(v.jsx)(v.Fragment,{children:"admin"===(null===(e=t[1])||void 0===e?void 0:e.user)?Object(v.jsx)("section",{className:"container-fluid",children:Object(v.jsxs)("div",{className:"row admin-container",children:[Object(v.jsx)("div",{className:"col-md-2 py-5 sidebar-admin",children:Object(v.jsx)(y,{})}),Object(v.jsxs)("div",{className:"col-md-10 admin-panel",children:[Object(v.jsx)("h1",{children:"Welcome to admin panel."}),Object(v.jsxs)("h2",{children:["If you want to add dishes ",Object(v.jsx)(r.b,{to:"/addDish",children:"click here"})]}),Object(v.jsxs)("h2",{children:["If you want to see all dish list ",Object(v.jsx)(r.b,{to:"/dishList",children:"click here"})]}),Object(v.jsxs)("h2",{children:["If you want to check users view of the dishes ",Object(v.jsx)(r.b,{to:"/user",children:"click here"})]}),Object(v.jsx)(r.a,{children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{path:"/addDish",children:Object(v.jsx)(w,{})}),Object(v.jsx)(d.b,{path:"/dishList",children:Object(v.jsx)(N,{})})]})})]})]})}):Object(v.jsx)("section",{className:"container-fluid h-100",children:Object(v.jsxs)("div",{className:"text-center align-items-center not-found",children:[Object(v.jsx)("h2",{children:"404 not found!"}),Object(v.jsx)("p",{children:Object(v.jsx)(r.b,{to:"/login",children:"Click Here For Login!!"})})]})})})},D=(s(69),function(){var e=Object(l.c)((function(e){return e.dishes})),t=Object(c.useState)(""),s=Object(j.a)(t,2),i=s[0],n=s[1];return Object(l.c)((function(e){return e.loginUser}))[1]?Object(v.jsx)("div",{className:"user-container",children:Object(v.jsxs)("div",{className:"user-main",children:[Object(v.jsxs)("h1",{children:["Welcome to Dashboard , ",Object(v.jsx)("a",{href:"/login",onClick:function(){window.location.href="/"},children:"Logout"})]}),Object(v.jsxs)("h2",{children:["Dishes are given below, ",Object(v.jsx)(r.b,{to:"/addDish",children:"Add Dish as an Admin"})]}),Object(v.jsx)("input",{type:"text",className:"search-box",placeholder:"Search Dishes",onChange:function(e){n(e.target.value)}}),Object(v.jsx)("div",{className:"dishes-list",children:e.filter((function(e){return""===i?e:e.title.toLowerCase().includes(i.toLowerCase())?Object(v.jsxs)("div",{className:"dish-container",children:[Object(v.jsx)("img",{src:e.img,alt:"use"}),Object(v.jsxs)("div",{className:"description",children:[Object(v.jsx)("h5",{children:e.title}),Object(v.jsxs)("p",{children:["Protein : ",Object(v.jsxs)("span",{children:[e.protein,"g"]})]}),Object(v.jsxs)("p",{children:["Fat: ",Object(v.jsxs)("span",{children:[e.fat,"g"]})]}),Object(v.jsxs)("p",{children:["Carbohydrates: ",Object(v.jsxs)("span",{children:[e.carb,"g"]})]}),Object(v.jsxs)("p",{children:["Calories: ",Object(v.jsxs)("span",{children:[e.calories,"g"]})]})]})]}):void 0})).map((function(e){return Object(v.jsxs)("div",{className:"dish-container",children:[Object(v.jsx)("img",{src:e.img,alt:"use"}),Object(v.jsxs)("div",{className:"description",children:[Object(v.jsx)("h5",{children:e.title}),Object(v.jsxs)("p",{children:["Protein : ",Object(v.jsxs)("span",{children:[e.protein,"g"]})]}),Object(v.jsxs)("p",{children:["Fat: ",Object(v.jsxs)("span",{children:[e.fat,"g"]})]}),Object(v.jsxs)("p",{children:["Carbohydrates: ",Object(v.jsxs)("span",{children:[e.carb,"g"]})]}),Object(v.jsxs)("p",{children:["Calories: ",Object(v.jsxs)("span",{children:[e.calories,"g"]})]})]})]})}))})]})}):Object(v.jsx)("section",{className:"container-fluid h-100",children:Object(v.jsxs)("div",{className:"text-center align-items-center not-found",children:[Object(v.jsx)("h2",{children:"404 not found!"}),Object(v.jsx)("p",{children:Object(v.jsx)(r.b,{to:"/login",children:"Click Here For Login!!"})})]})})}),k=Object(O.b)({name:"loginUser",initialState:[{}],reducers:{addLoginUser:function(e,t){var s={id:1,user:t.payload.user,pass:t.payload.pass};e.push(s)}}}),L=k.actions,F=L.addLoginUser,S=(L.loginList,k.reducer),U=(s(70),function(){var e=Object(l.c)((function(e){return e.users})).map((function(e){return e})),t=Object(l.c)((function(e){return e.loginUser})).map((function(e){return e}));console.log(t[0]);var s=Object(c.useState)(""),i=Object(j.a)(s,2),n=i[0],a=i[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),b=o[0],h=o[1],u=Object(c.useState)(""),O=Object(j.a)(u,2),m=O[0],p=O[1],x=Object(c.useState)(""),f=Object(j.a)(x,2),g=f[0],y=f[1],w=Object(c.useState)(!1),N=Object(j.a)(w,2),C=N[0],D=N[1],k=Object(d.g)(),L=Object(l.b)(),S=function(e){e.preventDefault(),D(!1===C)};return Object(v.jsx)("div",{className:"user-wrapper",children:C?Object(v.jsxs)("div",{className:"login-wrapper login-fadeInDown",children:[Object(v.jsx)("h2",{children:"Please Login As Admin"}),Object(v.jsx)("input",{type:"text",placeholder:"Enter Name",onBlur:function(e){return p(e.target.value)}}),Object(v.jsx)("input",{type:"password",placeholder:"Enter Password",onBlur:function(e){return y(e.target.value)}}),Object(v.jsx)("input",{type:"submit",onClick:function(e){if(e.preventDefault(),"admin"===m&&"1228989"===g)L(F({id:Date.now(),user:"admin",pass:"1228989"})),k.push("/admin");else if("1228989"!==g){alert("wrong username and password!")}else{alert("wrong username and password!")}}}),Object(v.jsx)("input",{type:"submit",onClick:S,value:"Login As User"})]}):Object(v.jsxs)("div",{className:"login-wrapper login-fadeInDown",children:[Object(v.jsx)("h2",{children:"Please Login As A User"}),Object(v.jsx)("input",{type:"text",placeholder:"Enter User Name",onBlur:function(e){return a(e.target.value)}}),Object(v.jsx)("input",{type:"password",placeholder:"Enter User Password",onBlur:function(e){return h(e.target.value)}}),Object(v.jsx)("input",{type:"submit",onClick:function(t){t.preventDefault();for(var s=0;s<e.length;s++)if(e[s].username===n&&e[s].password===b)k.push("/user"),L(F({id:Date.now(),user:e[s].username,pass:e[s].password}));else if(e[s].username!==n);else if(e[s].password!==b){alert("wrong username and password!")}else{alert("wrong username and password!")}}}),Object(v.jsx)("input",{type:"submit",onClick:S,value:"Login As Admin"})]})})});var P=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(r.a,{children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{exact:!0,path:"/",children:Object(v.jsx)(d.a,{to:"/login"})}),Object(v.jsx)(d.b,{path:"/admin",children:Object(v.jsx)(C,{})}),Object(v.jsx)(d.b,{path:"/addDish",children:Object(v.jsx)(w,{})}),Object(v.jsx)(d.b,{path:"/dishList",children:Object(v.jsx)(N,{})}),Object(v.jsx)(d.b,{path:"/user",children:Object(v.jsx)(D,{})}),Object(v.jsx)(d.b,{path:"/login",children:Object(v.jsx)(U,{})})]})})})},A=Object(O.b)({name:"users",initialState:[{username:"shakil",password:"1228989"},{username:"shakib",password:"120120120"}],reducers:{addUser:function(e,t){var s={username:t.payload.username,password:t.payload.password};e.push(s)}}}),I=A.actions,B=(I.addUser,I.userList,A.reducer),H=Object(O.a)({reducer:{dishes:g,users:B,loginUser:S}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(l.a,{store:H,children:Object(v.jsx)(P,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.dcef4f23.chunk.js.map