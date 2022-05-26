(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(186)),i={title:"Validate Address"},s={unversionedId:"util-crypto/examples/validate-address",id:"util-crypto/examples/validate-address",isDocsHomePage:!1,title:"Validate Address",description:"- This function will return true if the address is a legitamate Polkadot address and false if it is not",source:"@site/docs/util-crypto/examples/validate-address.md",slug:"/util-crypto/examples/validate-address",permalink:"/util-crypto/examples/validate-address",editUrl:"https://github.com/crustio/docs/edit/master/docs/util-crypto/examples/validate-address.md",version:"current",sidebar:"reference",previous:{title:"Create Mnemonic",permalink:"/util-crypto/examples/create-mnemonic"},next:{title:"Encrypt & Decrypt Messages",permalink:"/util-crypto/examples/encrypt-decrypt"}},c=[],d={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This function will return true if the address is a legitamate Polkadot address and false if it is not")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Works both with Ed25519 and Sr25519 key types"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const { decodeAddress, encodeAddress } = require('@polkadot/keyring');\nconst { hexToU8a, isHex } = require('@polkadot/util');\n\nconst address = '5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE';\n\nconst isValidAddressPolkadotAddress = () => {\n  try {\n    encodeAddress(\n      isHex(address)\n        ? hexToU8a(address)\n        : decodeAddress(address)\n    );\n\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nconst isValid = isValidAddressPolkadotAddress();\n\nconsole.log(isValid);\n")))}l.isMDXComponent=!0},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return r?a.a.createElement(m,s(s({ref:t},d),{},{components:r})):a.a.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);