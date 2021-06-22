(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7069],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9206:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},c={unversionedId:"for_developers/token/README",id:"for_developers/token/README",isDocsHomePage:!1,title:"README",description:"Creating access tokens",source:"@site/docs/89_for_developers/token/README.md",sourceDirName:"89_for_developers/token",slug:"/for_developers/token/README",permalink:"/docs/eln/for_developers/token/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/89_for_developers/token/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backing up the system",permalink:"/docs/eln/installation/backup"},next:{title:"jsme-tip",permalink:"/docs/eln/includes/jsme-tip"}},s=[{value:"Creating access tokens",id:"creating-access-tokens",children:[{value:"Creating user token",id:"creating-user-token",children:[]},{value:"Creating entry tokens",id:"creating-entry-tokens",children:[]}]},{value:"Deleting tokens",id:"deleting-tokens",children:[]}],l={toc:s};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-access-tokens"},"Creating access tokens"),(0,a.kt)("p",null,"Access tokens can be used as alternative authentication mechanism to access certain documents of the ELN.\nToken can be created for samples and entries and with different rights."),(0,a.kt)("p",null,"Especially useful are tokens when you want to programmatically access certain documents of the ELN. You can do so, for example, using our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cheminfo-py/cheminfopy"},"cheminfopy")," library. But you can also use tokens to give collaborators a URL with which they can\naccess certain documents of the ELN, e.g., to see one specific sample. This view allows creating bespoke tokens."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9403).Z})),(0,a.kt)("p",null,"For all tokens, the view will display some useful URLs in the bottom right."),(0,a.kt)("h3",{id:"creating-user-token"},"Creating user token"),(0,a.kt)("p",null,'To create a user token you only need to click the button "create user token" in the bottom left box.\nA new token of type ',(0,a.kt)("inlineCode",{parentName:"p"},"user")," will then show up in the top right table. With user tokens you can access all entries for a user."),(0,a.kt)("p",null,'For example, clicking the link under the heading "List all accessible entries:" will lead you to a page which you can find a JSON document will all entries.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7254).Z})),(0,a.kt)("h3",{id:"creating-entry-tokens"},"Creating entry tokens"),(0,a.kt)("p",null,'In some cases, you only want to allow access to specific samples. In this case, you can select the samples of interest can then create tokens for them by clicking the "+" icon.'),(0,a.kt)("h2",{id:"deleting-tokens"},"Deleting tokens"),(0,a.kt)("p",null,"You can delete any token by just clicking at the trash can icon."))}u.isMDXComponent=!0},7254:function(e,t,n){"use strict";t.Z=n.p+"assets/images/all_entries-1127441c27f5ae00a9db3c60f2bfba5a.png"},9403:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tokenview-535ebba5d14141d6845ca34345ab41ae.png"}}]);