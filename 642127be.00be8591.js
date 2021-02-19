(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(214)),a={title:"Inside Journeys - Steps",sidebar_label:"Steps"},i={unversionedId:"documentation/concepts/steps",id:"documentation/concepts/steps",isDocsHomePage:!1,title:"Inside Journeys - Steps",description:"Steps can be seen as building blocks of a Journey.",source:"@site/docs/documentation/concepts/steps.md",slug:"/documentation/concepts/steps",permalink:"/docs/documentation/concepts/steps",version:"current",sidebar_label:"Steps",sidebar:"documentation",previous:{title:"Let's start with Journeys",permalink:"/docs/documentation/concepts/journeys"},next:{title:"Response types - Message",permalink:"/docs/documentation/concepts/response-types-message"}},c=[{value:"Building Journey using &#39;Steps&#39;",id:"building-journey-using-steps",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Steps can be seen as building blocks of a Journey"),". "),Object(s.b)("h2",{id:"building-journey-using-steps"},"Building Journey using 'Steps'"),Object(s.b)("p",null,"A journey is usually built up using series of smaller steps. Each Journey should have minimum of two steps configured."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"First step always is a ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"Start Trigger")),". Start trigger - as we have discussed in previous section - a step that let's you configure what all can make this journey trigger - User Utterances, Events etc. "),Object(s.b)("li",{parentName:"ul"},"Following the ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"Start Trigger")),", we can a series of steps configuring different ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"../docs/documentation/concepts/response-types#message-types"}),Object(s.b)("strong",{parentName:"a"},"message types"))," inside them."),Object(s.b)("li",{parentName:"ul"},"These steps can also be connected to ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"../docs/documentation/concepts/response-types#Action-Nodes"}),Object(s.b)("strong",{parentName:"a"},"Action Nodes"))," to perform some action or some ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"../docs/documentation/concepts/response-types#Logic"}),Object(s.b)("strong",{parentName:"a"},"Logic"))," like condition can be applied for branching of steps inside journey.")),Object(s.b)("p",null,"Let's have a look at our flight booking journey.\n",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/ebPN2v2.png",alt:null}))),Object(s.b)("p",null,"This journey consists of multiple steps - Start Trigger, User Details, Options etc which is then branched into two flows based on Condition logic. Later we also hit an API using API action node, say to fetch available flights. "),Object(s.b)("hr",null),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"We saw how steps with action nodes & logic come together to help us design our flows (Journeys). Looking at a Journey, one should easily be able deduce what is happening in that journey."),"\n",Object(s.b)("strong",{parentName:"p"},"In upcoming sections, we will explore various types of responses - message types that make up steps and action nodes, and logic.")))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(a,".").concat(d)]||l[d]||b[d]||s;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);