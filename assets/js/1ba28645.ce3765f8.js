(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[2253],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6618:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={},l={unversionedId:"spectra/physical_chemistry/tga/README",id:"spectra/physical_chemistry/tga/README",isDocsHomePage:!1,title:"Thermogravimetric analysis",description:"This module allows visualizing and processing TGA curves. You can upload txt files and jcamp files.",source:"@site/docs/30_spectra/physical_chemistry/tga/README.md",sourceDirName:"30_spectra/physical_chemistry/tga",slug:"/spectra/physical_chemistry/tga/README",permalink:"/docs/spectra/physical_chemistry/tga/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/physical_chemistry/tga/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PXRD pattern database lookup",permalink:"/docs/spectra/physical_chemistry/pxrd/lookup/index"},next:{title:"XPS",permalink:"/docs/spectra/physical_chemistry/xps/README"}},s=[{value:"Upload",id:"upload",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Processing",id:"processing",children:[{value:"Normalization",id:"normalization",children:[]}]}],c={toc:s};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This module allows visualizing and processing TGA curves. You can upload ",(0,a.kt)("inlineCode",{parentName:"p"},"txt")," files and ",(0,a.kt)("inlineCode",{parentName:"p"},"jcamp")," files."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the TGA analysis module",src:n(1211).Z})),(0,a.kt)("h2",{id:"upload"},"Upload"),(0,a.kt)("p",null,"Files can be uploaded either by drag-and-drop to the field on the left-hand-side (1 in the image) or automatically from the instrument. The files will appear in field 2. Note that you can only upload files to samples to which you have write access."),(0,a.kt)("h2",{id:"visualization"},"Visualization"),(0,a.kt)("p",null,"To add patterns to the visualizer, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," in field 1. The sample will then appear in field 3 from which you can control the visualization settings."),(0,a.kt)("p",null,"If you click on the color in a row, you can select any color you which for the line and you can use the control buttons in the top right corner of field 3 to control which figures you show in a spectrum."),(0,a.kt)("p",null,"In the chart you can draw a rectangle to zoom and double click to reset. You can move the graphs by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"SHIFT")," while dragging them."),(0,a.kt)("p",null,"Currently, we can display weight vs. temperature and weight vs. time. A percentage-weight-loss view is currently being implemented."),(0,a.kt)("h2",{id:"processing"},"Processing"),(0,a.kt)("p",null,"Field 4 gives you some basic processing tools."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Units: select if you plot ",(0,a.kt)("inlineCode",{parentName:"li"},"Weight [mg] versus temperature [\xb0C]")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Weight [mg] versus time [s]")," "),(0,a.kt)("li",{parentName:"ul"},"Display tracking info: display information about the position of the mouse")),(0,a.kt)("h3",{id:"normalization"},"Normalization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Range: select the min / max X value to display"),(0,a.kt)("li",{parentName:"ul"},"Processing: display either the normal spectrum, first derivative or second derivative"),(0,a.kt)("li",{parentName:"ul"},"Number of points: reduce the number of points in the spectra. This is a nice feature\nthat allows to align the spectra on the 'x' axis but can only be used if the spectrum\nis monotone !"),(0,a.kt)("li",{parentName:"ul"},"Filters: various filter allowing to process the data. By default the ",(0,a.kt)("inlineCode",{parentName:"li"},"Divide by max Y")," filter\nis applied and allows to get as max Y value 1."),(0,a.kt)("li",{parentName:"ul"},"Exclusions: define zone that should be ignored during processing.")))}u.isMDXComponent=!0},1211:function(e,t,n){"use strict";t.Z=n.p+"assets/images/analysis-0155c4e40ed9e1717ed1523136cc2eb2.png"}}]);