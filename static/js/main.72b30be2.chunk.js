(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(4),l=n.n(a),o=n(2),r=(n(9),n(0));var i=function(){var t=s.a.useState(0),e=Object(o.a)(t,2),n=e[0],c=e[1],a=s.a.useState(!1),l=Object(o.a)(a,2),i=l[0],b=l[1],u=s.a.useState(0),j=Object(o.a)(u,2),_=j[0],h=j[1];return s.a.useEffect((function(){var t=null;return i?t=setInterval((function(){c((function(t){return t+10}))}),10):clearInterval(t),function(){return clearInterval(t)}}),[i]),Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("ul",{className:"time",children:[Object(r.jsx)("li",{className:"time__elem",children:("0"+Math.floor(n/36e5%60)).slice(-2)}),Object(r.jsx)("li",{className:"time__elem",children:("0"+Math.floor(n/6e4%60)).slice(-2)}),Object(r.jsx)("li",{className:"time__elem",children:("0"+Math.floor(n/1e3%60)).slice(-2)})]}),Object(r.jsxs)("div",{className:"buttons",children:[!i&&Object(r.jsx)("button",{className:"buttons__btn buttons__btn--green",onClick:function(){return b(!0)},children:"Start"}),i&&Object(r.jsx)("button",{className:"buttons__btn buttons__btn--red",onClick:function(){b(!1),c(0)},children:"Stop"}),Object(r.jsx)("button",{className:"buttons__btn buttons__btn--yellow",onClick:function(){h(Date.now()),Date.now()-_<300&&b(!1)},children:"wait"}),Object(r.jsx)("button",{className:"buttons__btn buttons__btn--grey",onClick:function(){b(!0),c(0)},children:"Reset"})]})]})};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(i,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.72b30be2.chunk.js.map