(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[2621],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4821:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i={},l={unversionedId:"samples/sample-edition/README",id:"samples/sample-edition/README",isDocsHomePage:!1,title:"Create and edit a sample",description:"You will see several modules covering the canvas and a few buttons. The buttons are there to Save your sample, to display this Help, and to generate a Report. The modules allow you to edit your sample\u2019s data, to upload your spectra, and to display your spectra and other non-editable sample attributes.",source:"@site/docs/samples/sample-edition/README.md",sourceDirName:"samples/sample-edition",slug:"/samples/sample-edition/README",permalink:"/docs/samples/sample-edition/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/samples/sample-edition/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sample rights",permalink:"/docs/samples/rights/README"},next:{title:"index",permalink:"/docs/samples/sample-edition/binap/index"}},s=[],c={toc:s};function p(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You will see several modules covering the canvas and a few buttons. The buttons are there to Save your sample, to display this Help, and to generate a Report. The modules allow you to edit your sample\u2019s data, to upload your spectra, and to display your spectra and other non-editable sample attributes."),(0,a.kt)("p",null,"Sample code: The sample\u2019s unique identifier, defined at creation ","(","i.e. CAS number",")",". Non-editable."),(0,a.kt)("p",null,"Creation date: The sample\u2019s creation date. Non-editable."),(0,a.kt)("p",null,"Modif. date: The date of the last modification to the sample\u2019s data. Non-editable."),(0,a.kt)("p",null,"Description: A brief description of the sample. Editable."),(0,a.kt)("p",null,"Structure editor: Edit the structure associated with the sample. Powered by ",(0,a.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". If you are using ChemDraw you may \u2018copy as -",">"," molfile\u2019, go over the structure editor and press CTRL + V."),(0,a.kt)("p",null,"Physical: Read and edit the physical constants associated with the sample: boiling point ","(","bp",")",", melting point ","(","mp",")",", density and refractive index ","(","nd",")","."),(0,a.kt)("p",null,"MF and mw: Molecular formula and molecular weight associated with the sample. Editable."),(0,a.kt)("p",null,"Attachments: A list of all files attached ","(","e.g. jcamp files",")","."),(0,a.kt)("p",null,"Drop/Paste your NMR/MS/IR spectra: Drag and drop your spectra data to upload it. Creates a new entry in the NMR/MS/IR table. Only Jcamp format is acceptable for NMR. MS and IR spectra may be uploaded in other file formats such as PDF, but Jcamp is recommended."),(0,a.kt)("p",null,"NMR: Displays the list of NMR spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on either the Jcamp or FID column to download the fourier-transformed or untransformed data respectively. Clicking on a row displays the corresponding spectrum in the Selected spectrum module in the lower right."),(0,a.kt)("p",null,"MS: Displays the list of mass spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on the Jcamp, PDF or File column to download the spectrum in the corresponding format according to availability. Clicking on a row displays the spectrum in the Selected spectrum module in the lower right."),(0,a.kt)("p",null,"IR: Displays the list of infrared spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on the Jcamp, PDF or File column to download the spectrum in the corresponding format according to availability. Clicking on a row displays the spectrum in the Selected spectrum module to the lower right."),(0,a.kt)("p",null,"Selected spectrum: Displays the currently selected spectrum. Click, hold, and select an area to zoom on it. Double click to zoom back out. ","(","By default zoom is active only on the x-axis; to activate zoom on both the x and y-axis, which may be useful when working with 2D spectra, access the module\u2019s advanced configuration by right-clicking on it and choosing Parameters on the dropdown menu",")","."))}p.isMDXComponent=!0}}]);