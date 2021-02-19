(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(214)),s={title:"Let's start with Journeys",sidebar_label:"Journeys"},i={unversionedId:"documentation/concepts/journeys",id:"documentation/concepts/journeys",isDocsHomePage:!1,title:"Let's start with Journeys",description:"Journeys are how we visualise & design conversational flow on Yellow Messenger Platform inside Studio. This section will help you get familiar with journeys.",source:"@site/docs/documentation/concepts/journeys.md",slug:"/documentation/concepts/journeys",permalink:"/docs/documentation/concepts/journeys",version:"current",sidebar_label:"Journeys",sidebar:"documentation",previous:{title:"\ud83c\udfd4 Master the Yellow Messenger Platform",permalink:"/docs/documentation/concepts/overview"},next:{title:"Inside Journeys - Steps",permalink:"/docs/documentation/concepts/steps"}},c=[{value:"Understanding &#39;Journeys&#39;",id:"understanding-journeys",children:[]},{value:"What else journeys can be used for?",id:"what-else-journeys-can-be-used-for",children:[]},{value:"How are Journeys triggered?",id:"how-are-journeys-triggered",children:[{value:"\ud83d\udccc User Intent",id:"-user-intent",children:[]},{value:"\ud83d\udccc Trigger Journey Response",id:"-trigger-journey-response",children:[]},{value:"\ud83d\udccc Events",id:"-events",children:[]}]}],u={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Journeys are how we visualise & design conversational flow")," on Yellow Messenger Platform inside Studio. This section will help you get familiar with journeys."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"understanding-journeys"},"Understanding 'Journeys'"),Object(a.b)("p",null,"To understand what journeys are, let's think about how we will start designing conversational flow for example given in previous section.\nYou already have scope of your bot ready, depending on what purpose user has for chatting with your bot, your bot will respond accordingly. Suppose user is here to book flight tickets, ",Object(a.b)("em",{parentName:"p"},"you will take them through all the steps needed to do just that.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"We call these flows, or series of steps ",Object(a.b)("inlineCode",{parentName:"strong"},"Journeys")," on our platform."))),Object(a.b)("p",null,"Rephrasing sentence above, ",Object(a.b)("em",{parentName:"p"},"If user is here to book tickets, you will take them through Journey 'Book flight tickets'."),"\nSimilarly, you can create Journeys for each major path your user can take based on their ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"intent"))," to user this bot. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can also categorize your journeys using ",Object(a.b)("inlineCode",{parentName:"p"},"Categories"),"!")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/SIfo2pR.png",alt:null}))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"}," \ud83d\udca1 ",Object(a.b)("em",{parentName:"p"},"How many journeys you create, what classifies as distinct enough purpose to create a seperate journey etc really depends on how you see it. Important conclusion here is Journeys seem to be some building blocks/components that make up your bot's overall conversational flow.")))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"what-else-journeys-can-be-used-for"},"What else journeys can be used for?"),Object(a.b)("p",null,"We already talked about how based on user's broad intent, we can take them on respective journeys. "),Object(a.b)("p",null,"But Journeys are much more than that!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Journeys are also ways for you as bot designer/developer to visualise or implement your bot logic apart from designing around broad user intents/scope.")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Design repetitively needed logic/flow :"),"\nImagine that for multiple journeys, for example Book Hotels and Book flights, you need to take user details - Name, email and phone number. This means that you need this same 'user input' logic multiple journeys. Instead of repeating this, you can save your labor by designing a new journey 'User Input' and triggering it whenever you need.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Journeys are not only about User Intent :"),"\nAs a bot developer, there can be multiple user cases where you need to design some flow - and trigger it whenever you configure it to be triggered, and not randomly because of a clear user intent. We will learn more about how journeys can be triggered in next section. ")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-are-journeys-triggered"},"How are Journeys triggered?"),Object(a.b)("h3",{id:"-user-intent"},"\ud83d\udccc User Intent"),Object(a.b)("p",null,"We've already discussed how based on what is user's intent, a journey can be triggered.\nFor this ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"Intent")),", we can define a set of ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"User Utterances")),", ie, possible things our user can say for which bot should start this journey. For example, for our 'Book flight ticket' Journey, user intents include\na) Booking New Ticket\nb) Modifying existing booking\nUser Utterances we provide should cover both these intents."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/i9dfoMq.png",alt:null}))),Object(a.b)("p",null,"This can be defined inside ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"Start Trigger"))," of a journey."),Object(a.b)("p",null,"Once we provide some possible user utterances and 'train' the bot, it can learn to recognize other possible user utterances on it's own. We will learn more about training in future sections. "),Object(a.b)("h3",{id:"-trigger-journey-response"},"\ud83d\udccc Trigger Journey Response"),Object(a.b)("p",null,"We can also set up manually when to trigger another journey from inside a journey. ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"Trigger journey"))," response will be discussed when we learn about ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../docs/documentation/concepts/steps"}),"Steps")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../docs/documentation/concepts/response-types"}),"Response types")," in future sections. "),Object(a.b)("p",null,"This can also be done through code. Refer ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../docs/developer/app/components/trigger-journey"}),"developer guide")," to know more. "),Object(a.b)("h3",{id:"-events"},"\ud83d\udccc Events"),Object(a.b)("p",null,"Another way to start a journey is through 'Events'. We will discuss events in detail in future sections. "),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Hope this section gave you a fair idea of what journeys are, and how they function. Going ahead, a journey usually consists of a series of steps. In next section, we will get a little deeper inside a journey and talk about these building blocks - ",Object(a.b)("inlineCode",{parentName:"strong"},"Steps")),"."))}l.isMDXComponent=!0}}]);