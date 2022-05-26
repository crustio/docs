(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(186)),o={title:"Loading saved pairs"},c={unversionedId:"ui-keyring/start/loading",id:"ui-keyring/start/loading",isDocsHomePage:!1,title:"Loading saved pairs",description:"Adding accounts is good. Having access to these accounts when added via const { pair } = keyring.addUr(...) is better, but being able to access these to iterate over at a later point (even after reload), is magic. Here we will try to add some magic to your experience, allowing you to retrieve accounts as well as subscribe to changes as they happen.",source:"@site/docs/ui-keyring/start/loading.md",slug:"/ui-keyring/start/loading",permalink:"/ui-keyring/start/loading",editUrl:"https://github.com/crustio/docs/edit/master/docs/ui-keyring/start/loading.md",version:"current",sidebar:"reference",previous:{title:"Addresses",permalink:"/ui-keyring/start/addresses"},next:{title:"Overview",permalink:"/extension"}},s=[{value:"Loading all available",id:"loading-all-available",children:[]},{value:"Subscriptions (Optional)",id:"subscriptions-optional",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Adding accounts is good. Having access to these accounts when added via ",Object(i.b)("inlineCode",{parentName:"p"},"const { pair } = keyring.addUr(...)")," is better, but being able to access these to iterate over at a later point (even after reload), is magic. Here we will try to add some magic to your experience, allowing you to retrieve accounts as well as subscribe to changes as they happen."),Object(i.b)("h2",{id:"loading-all-available"},"Loading all available"),Object(i.b)("p",null,"As we've seen in the keyring init section, when we can ",Object(i.b)("inlineCode",{parentName:"p"},"loadAll"),", it loads all added added - this includes those added via ",Object(i.b)("inlineCode",{parentName:"p"},"addUri(...)")," which transparently saves to the provided storage. Loading means it is available in the keyring, to get a list of the accounts, we can then do -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { u8aToHex } from '@polkadot/util';\n\n...\nconst accounts = keyring.getAccounts();\n\naccounts.forEach(({ address, meta, publicKey }) =>\n  console.log(address, JSON.stringify(meta), u8aToHex(publicKey))\n);\n")),Object(i.b)("p",null,"The above interface was probably not quite what you have been expecting, rather you would have expected to get back a list of the pairs, but rather you received a list of the account descriptors. Some rationale for this approach - since we have ",Object(i.b)("inlineCode",{parentName:"p"},"getAccounts()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"getAddresses()")," (for contacts) and ",Object(i.b)("inlineCode",{parentName:"p"},"getContracts()")," the consistent interface here is applicable. Instead based on an address, you can then retrieve a specific pair -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"accounts.forEach(({ address }) => {\n  // retrieve via address or publicKey\n  const pair = getPair(address);\n\n  // display the locked account status\n  console.log(address, pair.isLocked);\n});\n")),Object(i.b)("p",null,"Similarly we have a ",Object(i.b)("inlineCode",{parentName:"p"},"getPairs()")," that mirrors ",Object(i.b)("inlineCode",{parentName:"p"},"getAccounts()"),", but retrieves the list of available pairs - which is the output you probably expected from the initial ",Object(i.b)("inlineCode",{parentName:"p"},"getAccounts()")," call."),Object(i.b)("h2",{id:"subscriptions-optional"},"Subscriptions (Optional)"),Object(i.b)("p",null,"In addition to the retrieving of accounts on demand, we can actually subscribe to accounts for the keyring. This subscription returns a list of all accounts as they are updated, i.e. when a new account is added it will callback with a list of all the account, including the new one, when an account is removed, it will callback with a list of accounts, excluding the removed member."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"...\n// create a subscription to all available accounts, updated real-time\nconst sub = keyring.accounts.subject.subscribe((accounts) => {\n  accounts.forEach(({ json, option }) =>\n    // json is the stored data, including address\n    // option is a { name: meta.name, value: address }\n  );\n});\n\n...\n// at some point  when we are not interested anymore, we can unsubscribe\nsub.unsubscribe();\n")),Object(i.b)("p",null,"As with the ",Object(i.b)("inlineCode",{parentName:"p"},"get{Accounts|Addresses|Contracts}()")," functions, similarly we have in addition to ",Object(i.b)("inlineCode",{parentName:"p"},"keyring.accounts.subject")," the ",Object(i.b)("inlineCode",{parentName:"p"},"keyring.addresses.subject")," and ",Object(i.b)("inlineCode",{parentName:"p"},"keyring.contracts.subject")," subscriptions available, with the same generic result set."))}d.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,g=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?r.a.createElement(g,c(c({ref:t},l),{},{components:n})):r.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);