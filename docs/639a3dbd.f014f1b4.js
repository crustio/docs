(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(186)),o={title:"Vue"},c={unversionedId:"ui-identicon/vue",id:"ui-identicon/vue",isDocsHomePage:!1,title:"Vue",description:"A generic identity icon that can render icons based on an address.",source:"@site/docs/ui-identicon/vue.md",slug:"/ui-identicon/vue",permalink:"/ui-identicon/vue",editUrl:"https://github.com/crustio/docs/edit/master/docs/ui-identicon/vue.md",version:"current",sidebar:"reference",previous:{title:"React Native",permalink:"/ui-identicon/react-native"},next:{title:"Overview",permalink:"/ui-keyring"}},l=[{value:"Usage Examples",id:"usage-examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A generic identity icon that can render icons based on an address."),Object(a.b)("h2",{id:"usage-examples"},"Usage Examples"),Object(a.b)("p",null,"To install the component, do ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/vue-identicon")),Object(a.b)("p",null,"Inside a Vue component, you can now render any account with the associated icon, with associated props -"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"value")," - the address you wish to display"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"size")," (optional, defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"64"),") - the size in pixels"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"theme")," (optional, defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"substrate"),") - the theme to use, one of",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"polkadot")," or"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"substrate")," (equivalent to ",Object(a.b)("inlineCode",{parentName:"li"},"jdenticon"),") or"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"beachball")," or"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"empty")," (displays nothing)")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"<template>\n  <Identicon\n    :size=\"128\"\n    :theme=\"'polkadot'\"\n    :value=\"'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'\"\n  />\n</template>\n\n<script>\n  import Identicon from '@polkadot/vue-identicon';\n\n  export default {\n    ...\n    components: { Identicon }\n    ...\n  };\n<\/script>\n")))}p.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);