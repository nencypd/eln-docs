(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5005],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?t.createElement(m,c(c({ref:n},p),{},{components:r})):t.createElement(m,c({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3346:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),c={},o={unversionedId:"spectra/machine_learning/analysis/chart/index",id:"spectra/machine_learning/analysis/chart/index",isDocsHomePage:!1,title:"index",description:"Insert chart",source:"@site/docs/30_spectra/machine_learning/analysis/chart/index.md",sourceDirName:"30_spectra/machine_learning/analysis/chart",slug:"/spectra/machine_learning/analysis/chart/index",permalink:"/docs/spectra/machine_learning/analysis/chart/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/machine_learning/analysis/chart/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create analytical report from spectra",permalink:"/docs/spectra/machine_learning/analysis/README"},next:{title:"index",permalink:"/docs/spectra/machine_learning/analysis/colors/index"}},l=[{value:"Insert chart",id:"insert-chart",children:[]}],s={toc:l};function p(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"insert-chart"},"Insert chart"),(0,i.kt)("p",null,"The chart is available in the report and can be easily included based\non the following example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<div style=\"text-align: center; width: 600px; height: 300px\">\n    {{rendertypeBlock(data.chart,'chart')}}\n</div>\n")))}p.isMDXComponent=!0}}]);