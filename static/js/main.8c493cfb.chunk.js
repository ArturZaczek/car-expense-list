(this["webpackJsonpkalkulator-wydatkow-na-samochod"]=this["webpackJsonpkalkulator-wydatkow-na-samochod"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(31),o=c.n(s),i=(c(46),c(29)),r=(c(47),c(48),c(30)),l=c(19),u=c(39),d=c(28),j=Object({NODE_ENV:"production",PUBLIC_URL:"/car-expense-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyABfw0WNsy78vzqxvG3d0opdjtlXm1_9U4",REACT_APP_APP_ID:"1:1026753788642:web:f37719446ccccee4fabcbb",REACT_APP_AUTH_DOMAIN:"car-payment-calculator-291b8.firebaseapp.com",REACT_APP_DATABASE_URL:"https://car-payment-calculator-291b8-default-rtdb.europe-west1.firebasedatabase.app",REACT_APP_MESSAGING_SENDER_ID:"1026753788642",REACT_APP_PROJECT_ID:"car-payment-calculator-291b8",REACT_APP_STORAGE_BUCKET:"car-payment-calculator-291b8.appspot.com"}),b={apiKey:j.REACT_APP_API_KEY,authDomain:j.REACT_APP_AUTH_DOMAIN,databaseURL:j.REACT_APP_DATABASE_URL,projectId:j.REACT_APP_PROJECT_ID,storageBucket:j.REACT_APP_STORAGE_BUCKET,messagingSenderId:j.REACT_APP_MESSAGING_SENDER_ID,appId:j.REACT_APP_APP_ID},O=(Object(u.a)(b),Object(d.a)()),p=c(10),h=c(6),m=Object(n.createContext)(null),x=function(e){var t=e.children,c=Object(n.useState)(),a=Object(p.a)(c,2),s=a[0],o=a[1],i=Object(n.useState)(),r=Object(p.a)(i,2),l=r[0],u=r[1],d=Object(n.useState)(!1),j=Object(p.a)(d,2),b=j[0],O=j[1];return Object(h.jsx)(m.Provider,{value:{list:s,setList:o,user:l,setUser:u,infoShow:b,setInfoShow:O},children:t})},f=function(){var e=Object(n.useContext)(m),t=e.user,c=e.setUser,a=e.setList,s=e.setInfoShow,o=new r.a,i=Object(r.b)();i.languageCode="pl";var u=function(){s(!1),Object(r.c)(i,o).then((function(e){c(e.user)})).catch((function(e){console.warn(e)}))},d=function(){Object(r.d)(i).then((function(e){c()})).catch((function(e){console.warn(e)}))};return Object(n.useEffect)((function(){var e=Object(l.c)(O,"/".concat(""));Object(l.b)(e,(function(e){a(e.val())}))}),["",a]),Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("div",{className:"logo"}),Object(h.jsx)("h1",{className:"title",children:"Car expenses list"}),Object(h.jsx)("button",{className:"loginBtn",onClick:!0===Boolean(t)?d:u,children:!0===Boolean(t)?"Sing Out":"Sing in Google"}),Object(h.jsx)("button",{className:"loginBtn2",onClick:!0===Boolean(t)?d:u})]})},v=(c(52),function(){var e=Object(n.useContext)(m).user;return Object(h.jsx)("menu",{className:"menu",children:Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("ul",{children:["  ",Object(h.jsx)("li",{className:"list",children:Object(h.jsx)(i.b,{className:"link",to:"/",children:"Home"})}),!0===Boolean(e)?Object(h.jsx)("li",{className:"list",children:Object(h.jsx)(i.b,{className:"link",to:"/expenses",children:"Expenses"})}):null]}),"  "]})})}),C=c(11),N=c(41),E=(c(57),function(){var e=Object(n.useContext)(m),t=e.user,c=e.infoShow,a=e.setInfoShow,s=Object(n.useState)(Number("")),o=Object(p.a)(s,2),i=o[0],r=o[1],l=Object(n.useState)(""),u=Object(p.a)(l,2),j=u[0],b=u[1],x=Object(n.useState)(""),f=Object(p.a)(x,2),v=f[0],C=f[1],E=Object(n.useState)(""),g=Object(p.a)(E,2),S=g[0],P=g[1],_=Object(N.a)(),A=function(){r(Number("")),b(""),C(""),P("")};return Object(h.jsxs)("section",{className:"divForm",children:[!0===c?Object(h.jsx)("p",{className:"infoShowText",children:"Musisz si\u0119 zaogowa\u0107 aby doda\u0107 sw\xf3j wydatek!"}):null,Object(h.jsxs)("form",{className:"form",method:"post",onSubmit:function(e){e.preventDefault(),!0===Boolean(t)?function(e,c,n,a){Object(d.c)(Object(d.b)(O,"/".concat(null===t||void 0===t?void 0:t.uid,"/").concat(_)),{id:_,price:Number(e),productName:c,date:n,carBrand:a,createDate:(new Date).toUTCString()})}(i,j,v,S):a(!0),A()},children:[Object(h.jsxs)("label",{className:"label label1",children:["Price:",Object(h.jsx)("input",{onChange:function(e){r(Number(null===e||void 0===e?void 0:e.target.value))},type:"number",value:0===i?"":i,placeholder:"Price for item... E.g. $50",required:!0})]}),Object(h.jsxs)("label",{className:"label label2",children:["Item:",Object(h.jsx)("input",{onChange:function(e){b(String(null===e||void 0===e?void 0:e.target.value))},type:"text",value:j,placeholder:"Purchased item... E.g. Fuel",required:!0})]}),Object(h.jsxs)("label",{className:"label label3",children:["Date:",Object(h.jsx)("input",{onChange:function(e){C(String(null===e||void 0===e?void 0:e.target.value))},type:"date",value:v,lang:"en",required:!0})]}),Object(h.jsxs)("label",{className:"label label4",children:["Car Brand:",Object(h.jsxs)("select",{onChange:function(e){P(String(e.target.value))},name:"auto",id:"auto",value:S,required:"none"===S,children:[Object(h.jsx)("option",{value:"none",children:" - Choose -"}),Object(h.jsx)("option",{value:"ford",children:"Ford"}),Object(h.jsx)("option",{value:"hyundai",children:"Hyundai"}),Object(h.jsx)("option",{value:"volkswagen",children:"Volkswagen"})]})]}),Object(h.jsx)("button",{type:"submit",className:"submitBtn",children:"Save"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),A(),console.log("reset")},className:"btn",type:"button",children:"Cancel"})]})]})}),g=(c(58),c(59),function(e){var t=e.children,c=e.isOpen,a=e.handleOnClose,s=e.shouldBeCloseOnOutsideClick,i=Object(n.useRef)(null),r=Object(n.useRef)(null);Object(n.useEffect)((function(){if(i.current){var e=i.current;c?(r.current=document.activeElement,e.showModal()):r.current&&(e.close(),r.current.focus())}}),[c]),Object(n.useEffect)((function(){var e=i.current,t=function(e){e.preventDefault(),a()};return e.addEventListener("cancel",t),function(){e.removeEventListener("cancel",t)}}),[a]);return o.a.createPortal(Object(h.jsx)("dialog",{className:"modal",ref:i,onClick:function(e){var t=e.target,c=i.current;s&&t===c&&a()},children:t}),document.body)}),S=(c(60),function(e){var t=e.isOpenPopup,c=e.hidePopup,a=e.id,s=e.priceFromExpensesList,o=e.dateFromExpensesList,i=e.carBrandFromExpensesList,r=e.productNameFromExpensesList,u=e.createDateFromExpensesList,d=Object(n.useContext)(m),j=d.list,b=d.user,x=[];for(var f in j["".concat(b.uid)])x.push(f);var v=Object(n.useState)(Number(s)),C=Object(p.a)(v,2),N=C[0],E=C[1],S=Object(n.useState)(r),P=Object(p.a)(S,2),_=P[0],A=P[1],D=Object(n.useState)(o),T=Object(p.a)(D,2),B=T[0],w=T[1],R=Object(n.useState)(i),y=Object(p.a)(R,2),k=y[0],I=y[1],F=Object(n.useState)(!1),L=Object(p.a)(F,2),U=L[0],q=L[1];return console.log(U),Object(h.jsx)(g,{isOpen:t,handleOnClose:c,shouldBeCloseOnOutsideClick:!1,children:Object(h.jsxs)("div",{className:"divEdit",children:[!0===U?Object(h.jsx)("p",{className:"warningText",children:"You can't save without changing any value"}):null,Object(h.jsxs)("form",{className:"formEdit",method:"post",onSubmit:function(e){0===N&&""===_&&""===B&&""===k?q(!0):(c(),q(!1),x.map((function(e){return j["".concat(b.uid)]["".concat(e)].id===a&&Object(l.e)(Object(l.c)(O,"/".concat(b.uid,"/").concat(a)),{price:Number(N),productName:_,createDate:u,date:B,id:a,carBrand:k,editDate:(new Date).toUTCString()}),null}))),e.preventDefault()},children:[Object(h.jsxs)("label",{className:"label",children:["Price:",Object(h.jsx)("input",{onChange:function(e){E(Number(null===e||void 0===e?void 0:e.target.value))},type:"number",value:0===N?"":N,placeholder:"Price for item... E.g. $50",required:!0})]}),Object(h.jsxs)("label",{className:"label",children:["Item:",Object(h.jsx)("input",{onChange:function(e){A(String(null===e||void 0===e?void 0:e.target.value))},type:"text",value:_,placeholder:"Purchased item... E.g. Fuel",required:!0})]}),Object(h.jsxs)("label",{className:"label",children:["Date:",Object(h.jsx)("input",{onChange:function(e){w(String(null===e||void 0===e?void 0:e.target.value))},type:"date",value:B,lang:"en",required:!0})]}),Object(h.jsxs)("label",{className:"label",children:["Car Brand:",Object(h.jsxs)("select",{onChange:function(e){I(String(e.target.value))},value:k,required:"none"===k,children:[Object(h.jsx)("option",{value:"none",children:" - Choose -"}),Object(h.jsx)("option",{value:"ford",children:"Ford"}),Object(h.jsx)("option",{value:"hyundai",children:"Hyundai"}),Object(h.jsx)("option",{value:"volkswagen",children:"Volkswagen"})]})]}),Object(h.jsx)("button",{className:"btnSubmit",type:"submit",children:"Save"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),q(!1),c()},className:"btnCancel",type:"button",children:"Cancel"})]})]})})}),P=function(e){var t=e.date,c=void 0===t?"2021-07-01":t,a=e.productName,s=void 0===a?"Akumulator":a,o=e.price,i=void 0===o?50:o,r=e.carBrand,u=void 0===r?"Ford":r,d=e.id,j=e.createDate,b=Object(n.useState)(!1),x=Object(p.a)(b,2),f=x[0],v=x[1],C=Object(n.useContext)(m),N=C.list,E=C.user,g=[];for(var P in N["".concat(E.uid)])g.push(P);return Object(h.jsx)("li",{className:"liList",children:Object(h.jsxs)("article",{className:"expenseList",children:[Object(h.jsx)("h3",{children:"Car maintenance purchases"}),Object(h.jsx)("p",{children:"Purchased item: ".concat(s)}),Object(h.jsx)("p",{children:"For the car: ".concat(u)}),Object(h.jsx)("p",{children:"Cost: $".concat(i)}),Object(h.jsx)("p",{children:"Purchased on: ".concat(c)}),Object(h.jsx)("button",{onClick:function(){g.map((function(e){if(N["".concat(E.uid)]["".concat(e)].id===d){var t=Object(l.c)(O,"/".concat(E.uid,"/").concat(d));Object(l.d)(t)}return null}))},className:"btn",children:"Delete"}),Object(h.jsx)("button",{onClick:function(){v(!0)},className:"btn",children:"Edit"}),Object(h.jsx)(S,{id:d,isOpenPopup:f,hidePopup:function(e){e&&e.preventDefault(),v(!1)},priceFromExpensesList:i,dateFromExpensesList:c,carBrandFromExpensesList:u,productNameFromExpensesList:s,createDateFromExpensesList:j},d)]})})},_=(c(61),function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(m),o=s.list,i=s.user,r=Boolean(o["".concat(i.uid)])&&Object.entries(o["".concat(i.uid)]),l=[];Boolean(o["".concat(i.uid)])&&r.forEach((function(e){"productName"!==c?l.push([e[1]["".concat(c)],e[1].id]):l.push([String(e[1].productName).toLowerCase(),e[1].id])}));var u=l.sort().sort((function(e,t){return e[0]-t[0]})).map((function(e){return Object(h.jsx)(P,{id:o["".concat(i.uid)]["".concat(e[1])].id,date:o["".concat(i.uid)]["".concat(e[1])].date,carBrand:o["".concat(i.uid)]["".concat(e[1])].carBrand,price:Number(o["".concat(i.uid)]["".concat(e[1])].price),productName:o["".concat(i.uid)]["".concat(e[1])].productName,createDate:o["".concat(i.uid)]["".concat(e[1])].createDate},o["".concat(i.uid)]["".concat(e[1])].id)}));return Object(h.jsxs)("section",{className:"sectionExpenses",children:[Object(h.jsx)("ul",{className:"ulExpenses",children:Boolean(o["".concat(i.uid)])?u:Object(h.jsx)("p",{className:"nonExpenses",children:"You didn't even spend a buck"})}),Object(h.jsxs)("div",{className:"expensesCalculating",children:["Total expenses $".concat(function(){var e=0;return l.sort((function(e,t){return e[0]-t[0]})).forEach((function(t){return e+=Number(o["".concat(i.uid)]["".concat(t[1])].price)})),e.toFixed(2)}()),Object(h.jsxs)("label",{className:"sort",children:[" Sort:",Object(h.jsxs)("select",{className:"sortSelect",onChange:function(e){a(String(e.target.value))},value:c,children:[Object(h.jsx)("option",{value:"-",disabled:void 0!==c,children:"-Choose-"}),Object(h.jsx)("option",{value:"price",children:"Price"}),Object(h.jsx)("option",{value:"carBrand",children:"Car brand"}),Object(h.jsx)("option",{value:"date",children:"Date"}),Object(h.jsx)("option",{value:"productName",children:"Item"})]})]})]})]})}),A=(c(62),function(){var e=Object(n.useContext)(m).user;return Object(h.jsx)("main",{className:"main",children:Object(h.jsxs)(C.d,{children:[Object(h.jsx)(C.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(E,{})}}),!1===Boolean(e)?Object(h.jsx)(C.a,{from:"/expenses",to:"/"}):Object(h.jsx)(C.b,{exact:!0,path:"/expenses",render:function(){return Object(h.jsx)(_,{})}})]})})}),D=function(){return Object(h.jsxs)(x,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(v,{}),Object(h.jsx)(A,{})]})})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),T()}},[[63,1,2]]]);
//# sourceMappingURL=main.8c493cfb.chunk.js.map