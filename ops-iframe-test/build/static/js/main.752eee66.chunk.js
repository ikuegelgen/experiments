(this["webpackJsonpops-iframe-test"]=this["webpackJsonpops-iframe-test"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),o=(n(10),n(3)),r=(n(11),n(5)),l=n(0);var h=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(o.a)(s,2),h=i[0],u=i[1];return Object(c.useEffect)((function(){new r.a("http://localhost:3000/").init().then((function(e){e.setPluginLoaded(),a(e)})).catch((function(e){console.error(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Ops Iframe experiments"}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{className:"action-link",onClick:function(){console.log("GET TOKEN"),console.log(n),n&&n.getAccessToken().then((function(e){console.log(e),u(e)}))},children:"getAccessToken()"})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{className:"action-link",onClick:function(){var e={foo:"bar"};n&&n.pushGtmDataLayer(e).then((function(){u(JSON.stringify(e))}))},children:"pushGtmDataLayer()"})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{className:"action-link",onClick:function(){var e={foo:"another"},t="IframeLayer";n&&n.pushGtmDataLayer(e,t).then((function(){u(t+": "+JSON.stringify(e))}))},children:"pushGtmDataLayer() with custom layername"})}),Object(l.jsx)("textarea",{style:{width:300,height:300},value:h})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.752eee66.chunk.js.map