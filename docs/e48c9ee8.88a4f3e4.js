(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(186)),a={title:"Listen to new blocks"},s={unversionedId:"api/examples/promise/listen-to-blocks",id:"api/examples/promise/listen-to-blocks",isDocsHomePage:!1,title:"Listen to new blocks",description:"This example shows how to subscribe to new blocks.",source:"@site/docs/api/examples/promise/listen-to-blocks.md",slug:"/api/examples/promise/listen-to-blocks",permalink:"/api/examples/promise/listen-to-blocks",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/examples/promise/listen-to-blocks.md",version:"current",sidebar:"reference",previous:{title:"Simple Connect",permalink:"/api/examples/promise/simple-connect"},next:{title:"Listen to balance changes",permalink:"/api/examples/promise/listen-to-balance-change"}},c=[],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This example shows how to subscribe to new blocks."),Object(i.b)("p",null,"It displays the block number every time a new block is seen by the node you are connected to."),Object(i.b)("p",null,"NOTE: The example runs until you stop it with CTRL+C"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\nconst { typesBundleForPolkadot } = require('@crustio/type-definitions');\n\nasync function main () {\n  // Here we don't pass the (optional) provider, connecting directly to the default\n  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure\n  // the API has connected to the node and completed the initialisation process\n  const api = await ApiPromise.create({\n            provider: new WsProvider('ws://127.0.0.1:9944'),\n            typesBundle: typesBundleForPolkadot\n        });\n\n  // We only display a couple, then unsubscribe\n  let count = 0;\n\n  // Subscribe to the new headers on-chain. The callback is fired when new headers\n  // are found, the call itself returns a promise with a subscription that can be\n  // used to unsubscribe from the newHead subscription\n  const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {\n    console.log(`Chain is at block: #${header.number}`);\n\n    if (++count === 256) {\n      unsubscribe();\n      process.exit(0);\n    }\n  });\n}\n\nmain().catch(console.error);\n")))}l.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return t?o.a.createElement(d,s(s({ref:n},p),{},{components:t})):o.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);