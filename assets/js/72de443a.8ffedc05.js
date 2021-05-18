(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7897],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2083:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={},c={unversionedId:"spectra/organic_chemistry/ir/autoPeakPicking/index",id:"spectra/organic_chemistry/ir/autoPeakPicking/index",isDocsHomePage:!1,title:"Auto peak picking",description:"Auto peak picking is based on the Savitzky Golay filter.",source:"@site/docs/30_spectra/organic_chemistry/ir/autoPeakPicking/index.md",sourceDirName:"30_spectra/organic_chemistry/ir/autoPeakPicking",slug:"/spectra/organic_chemistry/ir/autoPeakPicking/index",permalink:"/docs/spectra/organic_chemistry/ir/autoPeakPicking/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/organic_chemistry/ir/autoPeakPicking/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"View and process infrared spectra",permalink:"/docs/spectra/organic_chemistry/ir/README"},next:{title:"Peak peaking",permalink:"/docs/spectra/organic_chemistry/ir/peakPicking/index"}},s=[],u={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Auto peak picking is based on the Savitzky Golay filter."),(0,o.kt)("p",null,"It allows to find all the peak between 2 wavelengths (from / to) that has a ratio\nsignal to noise over a defined limit (Noise level)."))}p.isMDXComponent=!0}}]);