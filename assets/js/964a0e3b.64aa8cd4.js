(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[2284],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4125:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={},c={unversionedId:"spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/README",id:"spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/README",isDocsHomePage:!1,title:"Peak picking and assignment",description:"Peak picking image",source:"@site/docs/30_spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/README.md",sourceDirName:"30_spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra",slug:"/spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/README",permalink:"/docs/spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Superimposition",permalink:"/docs/spectra/organic_chemistry/nmr/superimposition"},next:{title:"index",permalink:"/docs/spectra/organic_chemistry/nmr/view-and-assign-nmr-spectra/impurities/index"}},s=[],p={toc:s};function l(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Peak picking image",src:n(3960).Z})),(0,a.kt)("p",null,"As you open the tab the table will be filled with the Spectra available for the selected sample. Select one line to plot the corresponding NMR spectrum. We recommend you start from our Auto peak-picking. You will see the detected Ranges and their integrals just to the right of the spectrum. Select a range to see a list of the associated Signals with their multiplicities and coupling constants. Adjust the table values according to your own criterion. Use the J edition table to modify the multiplicity and coupling constants. A publication-ready report of your peak picking is automatically generated below the Spectra table. Don\u2019t forget to Save your changes."),(0,a.kt)("p",null,"Integration is automatically computed upon defining the corresponding range and cannot be edited manually. You may edit the Pub int column on the Ranges table to fine-tune the integral values in the report."),(0,a.kt)("p",null,"To assign a peak select a range in the Ranges table and then select the nuclei to be assigned in the Structure. An icon appears in the last column of the Ranges table showing that the peak has been assigned; click that icon to remove the assignment. Assigned nuclei are highlighted whenever the corresponding peak is selected in the NMR spectrum."))}l.isMDXComponent=!0},3960:function(e,t,n){"use strict";t.Z=n.p+"assets/images/peakPicking-d665695b19de9db0dd9e74f31e7321ee.png"}}]);