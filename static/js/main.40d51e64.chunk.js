(this["webpackJsonp3dp-invoice"]=this["webpackJsonp3dp-invoice"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},,function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),l=t.n(r),i=(t(20),t(2)),o=t(6),u=t(3),s=t.n(u),m=t(5),d=(t(22),t(7)),p=t.n(d);t(23),t(25);p.a.initializeApp({apiKey:"AIzaSyAAvuA7BTJRVFRym3cRHHzwfPIM3NaCTP0",authDomain:"crwn-db-b2bb7.firebaseapp.com",databaseURL:"https://crwn-db-b2bb7.firebaseio.com",projectId:"crwn-db-b2bb7",storageBucket:"crwn-db-b2bb7.appspot.com",messagingSenderId:"281711477222",appId:"1:281711477222:web:7f1a80f4d9c5158ff89627"});p.a.auth();var b=p.a.firestore();var v=function(e){var a=e.onClick,t=e.details,n=t.productName,r=t.quantity,l=t.indiPrice,i=t.address,o=r*l,u=o+.18*o,d=new Date,p="".concat(d.getFullYear()).concat(d.getMonth()).concat(d.getHours()).concat(d.getMinutes()).concat(d.getSeconds()),v=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("invoices").add({address:i,createdAt:d,finalPrice:u,name:n,pricePerQuantity:l,quantity:r,invoiceNumber:p});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"display-invoice"},c.a.createElement("div",{className:"invoice-container"},c.a.createElement("p",{className:"close",onClick:a},"CLOSE"),c.a.createElement("h2",null,"Invoice"),c.a.createElement("p",null,c.a.createElement("span",null,n.toUpperCase())),c.a.createElement("p",null,"Quantity: ",c.a.createElement("span",null,r)),c.a.createElement("p",null,"Price per item: ",c.a.createElement("span",null,"\u20b9",l)),c.a.createElement("p",null,"Total Price: ",c.a.createElement("span",null,"\u20b9",o)),c.a.createElement("p",null,"Final Price with GST(18%) added: ",c.a.createElement("span",null,"\u20b9",u)),c.a.createElement("p",null,"Invoice Number: ",c.a.createElement("span",null,p)),c.a.createElement("p",null,"Address of the customer: ",c.a.createElement("span",null,i)),c.a.createElement("button",{onClick:v,className:"firebase-button"},"Add to Database")))};t(29);var f=function(e){var a=e.buttonValue,t=e.onClick;return c.a.createElement("div",null,c.a.createElement("button",{onClick:t},a))},E=(t(30),t(14)),h=(t(31),function(e){var a=e.inputName,t=e.labelName,n=e.inputType,r=e.onChange,l=e.value;Object(E.a)(e,["inputName","labelName","inputType","onChange","value"]);return c.a.createElement("div",{className:"form-element"},c.a.createElement("label",{htmlFor:a},t),c.a.createElement("br",null),c.a.createElement("input",{type:n,name:a,value:l,onChange:r}))});t(32);var y=function(e){var a=e.onClick,t=Object(n.useState)([]),r=Object(o.a)(t,2),l=r[0],i=r[1],u=function(){var e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("invoices").get();case 2:(a=e.sent).docs.map((function(e){return console.log(e.data())})),i(a.docs);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var d=l.map((function(e,a){var t=e.data(),n=t.name,r=t.invoiceNumber,l=t.quantity,i=t.pricePerQuantity,o=t.finalPrice,u=t.address;return c.a.createElement("div",{className:"card"},c.a.createElement("h1",null,a+1,".",n.toUpperCase()),c.a.createElement("p",null,"Quantity:",l),c.a.createElement("p",null,"Price per item:\u20b9",i),c.a.createElement("p",null,"Final Price with GST(18%) added:\u20b9",o),c.a.createElement("p",null,"Invoice Number:",r),c.a.createElement("p",null,"Address of the customer:",u))}));return c.a.createElement("div",{className:"firebase-data"},c.a.createElement("div",{className:"invoices-header"},c.a.createElement("p",{className:"close",onClick:a},"CLOSE"),c.a.createElement("h1",null,"Invoices so far...")),c.a.createElement("div",{className:"card-grid"},l.length>0?d:c.a.createElement("h1",{style:{marginLeft:"135%"}},"Loading...")))},N=function(){var e=Object(n.useState)({productName:"",quantity:0,indiPrice:0,finalPrice:0,address:"",displayInvoice:!1,displayFirebaseData:!1}),a=Object(o.a)(e,2),t=a[0],r=a[1],l=function(e){var a=e.target.name,t=e.target.value;r((function(e){return"productName"===a?Object(i.a)(Object(i.a)({},e),{},{productName:t}):"quantity"===a?Object(i.a)(Object(i.a)({},e),{},{quantity:t}):"indiPrice"===a?Object(i.a)(Object(i.a)({},e),{},{indiPrice:t}):"address"===a?Object(i.a)(Object(i.a)({},e),{},{address:t}):void 0}))};return c.a.createElement("div",{className:"form"},c.a.createElement("h1",null,"Fill this form"),c.a.createElement(h,{inputName:"productName",inputType:"text",labelName:"Product Name",onChange:l,value:t.productName}),c.a.createElement(h,{inputName:"quantity",inputType:"number",labelName:"Quantity",onChange:l,value:t.quantity}),c.a.createElement(h,{inputName:"indiPrice",inputType:"number",labelName:"Individual Price",onChange:l,value:t.indiPrice}),c.a.createElement("label",{htmlFor:"address",className:"address-label"},"Address"),c.a.createElement("textarea",{name:"address",cols:"24",rows:"8",onChange:l,value:t.address}),c.a.createElement("div",{className:"button-group"},c.a.createElement(f,{buttonValue:"Get the invoice",onClick:function(){t.productName.length>0&&t.quantity>0&&t.indiPrice>0&&t.address.length>0?r((function(e){return Object(i.a)(Object(i.a)({},e),{},{displayInvoice:!t.displayInvoice})})):alert("Enter all the details to proceed further")}}),c.a.createElement(f,{buttonValue:"View Data from Firebase",onClick:function(){r((function(e){return Object(i.a)(Object(i.a)({},e),{},{displayFirebaseData:!t.displayFirebaseData})}))}})),t.displayInvoice?c.a.createElement(v,{onClick:function(){r((function(e){return Object(i.a)(Object(i.a)({},e),{},{displayInvoice:!t.displayInvoice})}))},details:t}):null,t.displayFirebaseData?c.a.createElement(y,{onClick:function(){r((function(e){return Object(i.a)(Object(i.a)({},e),{},{displayFirebaseData:!t.displayFirebaseData})}))}}):null)};t(33);var g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("h1",null,"Invoice")),c.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.40d51e64.chunk.js.map