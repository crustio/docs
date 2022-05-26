(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(186)),i={title:"Load Accounts"},c={unversionedId:"keyring/examples/load-accounts",id:"keyring/examples/load-accounts",isDocsHomePage:!1,title:"Load Accounts",description:"The following example shows how to load all accounts from the keyring as pairs and convert them into JSON format.",source:"@site/docs/keyring/examples/load-accounts.md",slug:"/keyring/examples/load-accounts",permalink:"/docs/keyring/examples/load-accounts",editUrl:"https://github.com/crustio/docs/edit/master/docs/keyring/examples/load-accounts.md",version:"current"},s=[],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following example shows how to load all accounts from the keyring as pairs and convert them into JSON format."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// Import Keyring class and utility function\nconst { Keyring } = require('@polkadot/keyring');\nconst { stringToU8a } = require('@polkadot/util');\n\nasync function main () {\n  // Create account seed for Alice and Bob\n  const ALICE_SEED = 'Alice'.padEnd(32, ' ');\n  const BOB_SEED = 'Bob'.padEnd(32, ' ');\n\n  // Create an instance of the Keyring\n  const keyring = new Keyring();\n\n  // Create their pairs with account seeds. Add to keyring pair dictionary\n  keyring.addFromSeed(stringToU8a(ALICE_SEED));\n  keyring.addFromSeed(stringToU8a(BOB_SEED));\n\n  // Note that we did not use `addFromAddress` since it does not add the\n  // secret key to memory so we cannot later retrieve it with `getPairs`\n\n  // Retrieve all keyring pairs from the keyring pair dictionary\n  keyring\n    .getPairs()\n    .forEach((pair, index) => {\n      const { address } = pair;\n\n      console.log(`\\nAccount with index #${index} has json: `, JSON.stringify(keyring.toJson(address), null, 2));\n    });\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}u.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?o.a.createElement(y,c(c({ref:n},l),{},{components:t})):o.a.createElement(y,c({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);