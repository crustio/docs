(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(186)),i={title:"Accounts"},s={unversionedId:"ui-keyring/start/accounts",id:"ui-keyring/start/accounts",isDocsHomePage:!1,title:"Accounts",description:"With our keyring setup completed in the previous section, and all available accounts loaded, we are ready to proceed. However we have not actually loaded any accounts yet, since well, we have not created or stored any previously. So let's change that.",source:"@site/docs/ui-keyring/start/accounts.md",slug:"/ui-keyring/start/accounts",permalink:"/docs/ui-keyring/start/accounts",editUrl:"https://github.com/crustio/docs/edit/master/docs/ui-keyring/start/accounts.md",version:"current",sidebar:"reference",previous:{title:"Initialization",permalink:"/docs/ui-keyring/start/init"},next:{title:"Addresses",permalink:"/docs/ui-keyring/start/addresses"}},c=[{value:"Adding accounts",id:"adding-accounts",children:[]},{value:"Non-mnemonic seeds and derivation",id:"non-mnemonic-seeds-and-derivation",children:[]},{value:"Managing addresses",id:"managing-addresses",children:[]}],d={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With our keyring setup completed in the previous section, and all available accounts loaded, we are ready to proceed. However we have not actually loaded any accounts yet, since well, we have not created or stored any previously. So let's change that."),Object(o.b)("h2",{id:"adding-accounts"},"Adding accounts"),Object(o.b)("p",null,"The keyring has a number of ways to add accounts, but in 99% of the cases, you should need only a single method to add an account to the keyring - ",Object(o.b)("inlineCode",{parentName:"p"},"addUri(suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType)"),". Let's jump in with some explicit examples -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { mnemonicGenerate } from '@polkadot/util-crypto';\n\n...\n// generate a random mnemonic, 12 words in length\nconst mnemonic = mnemonicGenerate(12);\n\n// add the account, encrypt the stored JSON with an account-specific password\nconst { pair, json } = keyring.addUri(mnemonic, 'myStr0ngP@ssworD', { name: 'mnemonic acc' });\n")),Object(o.b)("p",null,"The above example is relatively straight-forward. Create an account with the specified mnemonic, encrypt the account (as stored) with the password and attach some metadata to the account. It returns a pair instance (we will work with these later) as well as the encrypted json as is saved to the store."),Object(o.b)("p",null,"Metadata is free form, with any indicators that you would find useful in your application. Some fields that are known to be used in (and also exists other keyring entries such as contacts & contracts) includes -"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"genesisHash")," - a hex value of the genesis this accounts belong to. If specified, the account will only be loaded when the same genesisHash is available in the keyring options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"name")," - a human-readable description for the account"))),Object(o.b)("h2",{id:"non-mnemonic-seeds-and-derivation"},"Non-mnemonic seeds and derivation"),Object(o.b)("p",null,"Generally, we would encourage all wallets and users to only support mnemonic phrases - these are portable between crypto implementations, has built-in checksums and is a standard across the blockchain environment. In some cases however, either due to the need to provide backwards compatibility or for closed environments, other seed types may be used. The ",Object(o.b)("inlineCode",{parentName:"p"},"addUri")," will detect the type of input, i.e. if a hex-encoded value is provided, it will treat it as a raw seed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { randomAsHex } from '@polkadot/util-crypto';\n\n...\n// generate a random hex raw seed, this needs to be 32 bytes in length\nconst seed = randomAsHex(32);\n\n// add the account, encrypting it, override to ed25519\nconst { pair, json } = keyring.addUri(seed, 'weakpass', { name: 'hex seed acc' }, 'ed25519');\n")),Object(o.b)("p",null,"In all the above examples non-derived accounts are assumed. However, luke the ",Object(o.b)("inlineCode",{parentName:"p"},"addFromUri")," method in the base keyring, the UI Keyring also supports full ",Object(o.b)("a",{parentName:"p",href:"/docs/keyring/start/ss58"},"ss58 derivation paths"),". The only difference between the methods in the 2 libraries is that the UI variant requires the use of a password for all operations."),Object(o.b)("h2",{id:"managing-addresses"},"Managing addresses"),Object(o.b)("p",null,"In addition to managing accounts, the keyring also allows the developer to manage ",Object(o.b)("a",{parentName:"p",href:"/docs/ui-keyring/start/addresses"},"addresses where an actual secret is not available"),"."))}l.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(b,s(s({ref:t},d),{},{components:n})):r.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);