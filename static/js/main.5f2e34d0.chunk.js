(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(16)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),o=(t(12),t(1)),u=(t(13),t(14),t(2)),s=function(e){var a=e.stage;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card ".concat("security-code"===a?"flipped":"")},r.a.createElement("div",{className:"face front"},r.a.createElement(u.a,null),r.a.createElement("div",null)),r.a.createElement("div",{className:"face back"},r.a.createElement(u.a,null))))},i=t(5),m=(t(15),function(e){var a=e.className,t=e.stage,n=e.label,c=e.value,l=e.regex,o=e.setFunc,u=e.error,s=e.setError;return r.a.createElement("div",{className:"input-container ".concat(a===t?"enabled":"disabled"," ").concat(u?"error":"")},r.a.createElement("span",null,n),u&&r.a.createElement("span",{className:"error"},u),r.a.createElement("input",{disabled:a!==t,onChange:function(e){e.target.value.match(l)?(u&&s(""),o(Object(i.a)({},c,{value:e.target.value}))):c.value.length!==c.max&&s("Valid characters only")},value:c.value}))}),d=function(){var e=Object(n.useState)("card-number"),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({value:"",max:16}),u=Object(o.a)(l,2),i=u[0],d=u[1],v=Object(n.useState)({value:"",max:21}),b=Object(o.a)(v,2),E=b[0],g=b[1],h=Object(n.useState)({value:"",max:4}),x=Object(o.a)(h,2),p=x[0],N=x[1],f=Object(n.useState)({value:"",max:3}),w=Object(o.a)(f,2),j=w[0],y=w[1],O=Object(n.useState)(!1),S=Object(o.a)(O,2),k=S[0],C=S[1],F=Object(n.useState)(""),$=Object(o.a)(F,2),M=$[0],R=$[1];return r.a.createElement("div",{className:"app"},r.a.createElement(s,{stage:t,cardNumber:i,cardholderName:E,validThru:p,securityCode:j}),r.a.createElement("span",{className:"headline"},"Type in your card details:"),r.a.createElement("div",{className:"inputs-container ".concat(t)},r.a.createElement(m,{stage:t,className:"card-number",label:"Card Number",setFunc:d,value:i,regex:new RegExp("^[0-9]{0,".concat(i.max,"}$")),error:M,setError:R}),r.a.createElement(m,{stage:t,className:"cardholder-name",label:"Cardholder Name",setFunc:g,value:E,regex:new RegExp("^[a-z,A-Z ]{0,".concat(E.max,"}$")),error:M,setError:R}),r.a.createElement(m,{stage:t,className:"valid-thru",label:"Valid Thru",setFunc:N,value:p,regex:new RegExp("^[0-9]{0,".concat(p.max,"}$")),error:M,setError:R}),r.a.createElement(m,{stage:t,className:"security-code",label:"Security Code (CVV)",setFunc:y,value:j,regex:new RegExp("^[0-9]{0,".concat(j.max,"}$")),error:M,setError:R})),r.a.createElement("button",{className:k?"croak":"",onClick:function(){C(!0),function(e){"card-number"===e?i.value.length===i.max?c("cardholder-name"):R("Must be a valid card number"):"cardholder-name"===e?E.value.length>0?c("valid-thru"):R("Must be a valid name"):"valid-thru"===e?p.value.length===p.max?c("security-code"):R("Must be a valid month/year"):"security-code"===e&&(j.value.length===j.max?(setTimeout(function(){return y("")},200),c("card-number"),d(""),g(""),N("")):R("Must be a valid security code"))}(t)},onAnimationEnd:function(){return C(!1)},type:"button"},"security-code"===t?"Done":"Next"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.5f2e34d0.chunk.js.map