(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7031],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8040:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={},l={unversionedId:"spectra/mass/fragmentation/README",id:"spectra/mass/fragmentation/README",isDocsHomePage:!1,title:"Mass fragmentation",description:"Simulation of mass fragmentation",source:"@site/docs/spectra/mass/fragmentation/README.md",sourceDirName:"spectra/mass/fragmentation",slug:"/spectra/mass/fragmentation/README",permalink:"/docs/spectra/mass/fragmentation/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/spectra/mass/fragmentation/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mass spectra deconvolution",permalink:"/docs/spectra/mass/deconvolution/README"},next:{title:"index",permalink:"/docs/spectra/mass/fragmentation/assign/index"}},s=[{value:"Simulation of mass fragmentation",id:"simulation-of-mass-fragmentation",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"simulation-of-mass-fragmentation"},"Simulation of mass fragmentation"),(0,o.kt)("p",null,"Analysis of mass fragments of small molecules obtained for example by electronic impact may be cumbersome."),(0,o.kt)("p",null,"In order to facilitate the process, this tool allow to draw a molecule and select the breakable bonds. The system will then generate all the possible fragments and will recombine them."),(0,o.kt)("h4",{id:"select-the-ionization-method"},"Select the ionization method"),(0,o.kt)("p",null,"In order to observe a mass spectrum the molecule has to be charged and this ionization has an impact on the mass. You may enter a list of ionizations that was applied to the molecule in the following box:"),(0,o.kt)("img",{src:"images/ionizations.png"}),(0,o.kt)("p",null,"For instance for electronic impact you would enter a simple \u2018+\u2019. Meaning that we have removed an electron to charge the molecule."),(0,o.kt)("h4",{id:"draw--edit-the-molecule"},"Draw / edit the molecule"),(0,o.kt)("p",null,"You may either draw a molecule directly in the editor or paste a molfile coming from another software. For instance if you have a molecule in ChemDraw\u2122 you may select the molecule and \u2018Edit -",">"," Copy as \u2026 -",">"," MOL Text\u2019. Then you may put the mouse over the drawing applet and press \u2018CTRL + V\u2019 ","(","on windows",")"," or \u2318 + V\u2019 on mac."),(0,o.kt)("p",null,"If you would like to draw efficiently the molecules directly in the editor click on the little question mark and try to learn all the shortcuts."),(0,o.kt)("img",{src:"images/jsme-help.png"}),(0,o.kt)("h4",{id:"define-the-cleavable-bonds"},"Define the cleavable bonds"),(0,o.kt)("p",null,"In the drawing applet you should select the blue bullet icon and click on the bonds that are breakable."),(0,o.kt)("img",{src:"images/break.png"}),(0,o.kt)("p",null,"The fragments with their corresponding mass will be calculated on the fly as well all the possible recombinations of those fragments. This may be useful to determine unknown side products of a reaction."),(0,o.kt)("h4",{id:"analyze-the-results"},"Analyze the results"),(0,o.kt)("p",null,"A virtual spectrum will all the possibility is generated and a mouse over the annotation over the peak will highlight the required parts of the molecules to reach the mass."),(0,o.kt)("img",{src:"images/analyze.png"}),(0,o.kt)("p",null,"If you have a XY text file or jcamp containing an experimental spectrum you may directly drag and drop or paste on the drop zone."),(0,o.kt)("p",null,"You may also have mass spectra saved in the database and one click on the name will superimpose the spectrum to the predicted one."))}m.isMDXComponent=!0}}]);