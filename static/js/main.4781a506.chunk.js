(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(6),n=a.n(s),r=a(4),i=a(5),o=a(7),c=a(8),l=a(10),d=a(9),m=a(1),u=a.n(m),h=a(3),p=a.n(h),b=a(0),g=function(e){var t=e.todos;return Object(b.jsx)("ul",{className:"todo-list",children:t.map((function(e){var t=e.id,a=e.title,s=e.userId;return Object(b.jsxs)("li",{className:"todo",children:[Object(b.jsx)("span",{className:"todo__title",children:a}),Object(b.jsxs)("p",{className:"todo__id",children:["Todo ID:"," ",t,Object(b.jsx)("br",{}),"User ID:"," ",s]})]},t)}))})},y=(a(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),j=[{userId:1,id:1,title:"Have Fun",completed:!1},{userId:1,id:2,title:"Relax",completed:!1}],f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={todos:j,title:"",selectedUser:"",inputTitleError:!1,selectUserError:!1},e.submitHandler=function(t){t.preventDefault(),e.setState((function(e){if(!e.selectedUser||!e.title)return Object(i.a)(Object(i.a)({},e),{},{inputTitleError:!e.title,selectUserError:!e.selectedUser});var t=Math.max.apply(Math,Object(r.a)(e.todos.map((function(e){return e.id})))),a=y.findIndex((function(t){return e.selectedUser===t.name})),s={id:t+1,title:e.title,userId:y[a].id};return{title:"",selectedUser:"",todos:[].concat(Object(r.a)(e.todos),[s])}}))},e.titleChangeHandler=function(t){e.setState({title:t.target.value,inputTitleError:!1})},e.userChangeHandler=function(t){e.setState({selectedUser:t.target.value,selectUserError:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUser,s=e.title,n=e.selectUserError,r=e.inputTitleError;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"Create new task"}),Object(b.jsxs)("form",{className:"form",onSubmit:this.submitHandler,children:[Object(b.jsx)("div",{className:"form__input-container",children:Object(b.jsxs)("label",{className:"form__label",htmlFor:"todoTitle",children:[Object(b.jsx)("input",{type:"text",placeholder:"Task title",value:s,onChange:this.titleChangeHandler,className:p()("form__input",{"form__input--theme-error":r})}),r&&Object(b.jsx)("span",{className:"form__input-message",children:"Please enter the title"})]})}),Object(b.jsxs)("div",{className:"form__select-container",children:[Object(b.jsxs)("select",{value:a,onChange:this.userChangeHandler,className:p()("form__select",{"form__select--theme-error":n}),children:[Object(b.jsx)("option",{className:"form__select-option",value:"",children:"Choose user"}),y.map((function(e){return Object(b.jsx)("option",{className:"form__select-option",children:e.name},e.id)}))]}),n&&Object(b.jsx)("span",{className:"select__error-message",children:"Please choose a user"})]}),Object(b.jsx)("button",{type:"submit",className:"form__button",children:"Add"})]}),Object(b.jsx)(g,{todos:t})]})}}]),a}(u.a.Component);n.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4781a506.chunk.js.map