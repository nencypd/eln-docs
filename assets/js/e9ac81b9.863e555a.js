(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[9419],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2508:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={},c={unversionedId:"spectra/mass/deconvolution/README",id:"spectra/mass/deconvolution/README",isDocsHomePage:!1,title:"Mass spectra deconvolution",description:"This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps.",source:"@site/docs/spectra/mass/deconvolution/README.md",sourceDirName:"spectra/mass/deconvolution",slug:"/spectra/mass/deconvolution/README",permalink:"/docs/spectra/mass/deconvolution/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/spectra/mass/deconvolution/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Isotherm analysis",permalink:"/docs/spectra/isotherm/README"},next:{title:"Mass fragmentation",permalink:"/docs/spectra/mass/fragmentation/README"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps."),(0,a.kt)("p",null,"The workflow is the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"make a peak picking (centroid) of the mass spectrum"),(0,a.kt)("li",{parentName:"ul"},"generate all the theoretical isotopic distribution of all entities to look for"),(0,a.kt)("li",{parentName:"ul"},"align the theoretical and experimental peaks"),(0,a.kt)("li",{parentName:"ul"},"calculate a non-negative matrix factorization"),(0,a.kt)("li",{parentName:"ul"},"create a report")))}u.isMDXComponent=!0}}]);