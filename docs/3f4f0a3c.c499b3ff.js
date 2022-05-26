(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{186:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||a;return r?i.a.createElement(m,s(s({ref:t},p),{},{components:r})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(186)),o={id:"FAQ",title:"FAQ"},s={unversionedId:"keyring/FAQ",id:"keyring/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that Keyring users find.",source:"@site/docs/keyring/FAQ.md",slug:"/keyring/FAQ",permalink:"/docs/keyring/FAQ",editUrl:"https://github.com/crustio/docs/edit/master/docs/keyring/FAQ.md",version:"current",sidebar:"reference",previous:{title:"Substrate Uri",permalink:"/docs/keyring/start/suri"},next:{title:"Overview",permalink:"/docs/util-crypto"}},c=[{value:"How do I extract the secretKey from the keypair?",id:"how-do-i-extract-the-secretkey-from-the-keypair",children:[]},{value:"My pair address does not match with my chain",id:"my-pair-address-does-not-match-with-my-chain",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that Keyring users find."),Object(a.b)("h2",{id:"how-do-i-extract-the-secretkey-from-the-keypair"},"How do I extract the secretKey from the keypair?"),Object(a.b)("p",null,"It is not possible. Each pair has a closure around the actual sensitive information and while it exposes functions to use the secret, it does not expose the secret itself. So while there is a ",Object(a.b)("inlineCode",{parentName:"p"},".publicKey")," getter on a pair, the equivalent ",Object(a.b)("inlineCode",{parentName:"p"},".secretKey")," does not exist. Doing this allows extra protection for a certain kinds of attacks and leaks of keys in all JS-based environments."),Object(a.b)("p",null,"If the interfaces on the pair are not enough and explicit access to the secret is required, the best approach would be to explicitly derive the keys (e.g., the mnemonic). As example of an ",Object(a.b)("a",{parentName:"p",href:"../util-crypto/examples/create-mnemonic"},"ed25519 secretKey extraction")," can be found in the util-crypto examples."),Object(a.b)("h2",{id:"my-pair-address-does-not-match-with-my-chain"},"My pair address does not match with my chain"),Object(a.b)("p",null,"By default the keyring will use the substrate generic 42 as an ss58Format ",Object(a.b)("a",{parentName:"p",href:"/docs/keyring/start/create"},"when not specified"),". In these cases all addresses will start with a ",Object(a.b)("inlineCode",{parentName:"p"},"5"),". To match with the address for a specific Substrate chain, pass the correct format as defined in the chain properties."),Object(a.b)("p",null,"While the address ",Object(a.b)("a",{parentName:"p",href:"/docs/keyring/start/ss58"},"represents the same underlying publicKey")," despite how it is represented, the human-readable format will be different based on the formatting provided."))}l.isMDXComponent=!0}}]);