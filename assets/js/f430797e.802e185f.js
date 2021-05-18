(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7350],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4792:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),s={},o={unversionedId:"spectra/mining/pca/README",id:"spectra/mining/pca/README",isDocsHomePage:!1,title:"Calculate PCA for spectra",description:"While superimposing spectra allows checking differences between 2 or 3 experiments it become tedious to compare a large set of data.",source:"@site/docs/spectra/mining/pca/README.md",sourceDirName:"spectra/mining/pca",slug:"/spectra/mining/pca/README",permalink:"/docs/spectra/mining/pca/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/spectra/mining/pca/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deconvolution of spectra",permalink:"/docs/spectra/mining/deconvolution/README"},next:{title:"Calculate the similarity between spectra",permalink:"/docs/spectra/mining/similarity/README"}},c=[{value:"Spectra selection, normalization and previsualization",id:"spectra-selection-normalization-and-previsualization",children:[]},{value:"Create the PCA model",id:"create-the-pca-model",children:[]},{value:"Advanced analysis",id:"advanced-analysis",children:[]},{value:"References",id:"references",children:[]}],l={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While superimposing spectra allows checking differences between 2 or 3 experiments it become tedious to compare a large set of data."),(0,i.kt)("p",null,"Many data mining algorithms may help in those cases and here we propose to analyze the data using principal component analysis."),(0,i.kt)("p",null,"Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables (here spectra) into a set of values of linearly uncorrelated variables called principal components. If there are n observations with p variables, then the number of distinct principal components is min(n-1,p). This transformation is defined in such a way that the first principal component has the largest possible variance (that is, accounts for as much of the variability in the data as possible), and each succeeding component in turn has the highest variance possible under the constraint that it is orthogonal to the preceding components. The resulting vectors (each being a linear combination of the variables and containing n observations) are an uncorrelated orthogonal basis set. PCA is sensitive to the relative scaling of the original variables."),(0,i.kt)("p",null,"The workflow is the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select samples and add spectra"),(0,i.kt)("li",{parentName:"ul"},"Preprocess the spectra using various parameters"),(0,i.kt)("li",{parentName:"ul"},"Calculate the PCA"),(0,i.kt)("li",{parentName:"ul"},"Display each spectrum in the new space")),(0,i.kt)("a",{href:"spectraAnalysis_spectraSelection"},"."),(0,i.kt)("h2",{id:"spectra-selection-normalization-and-previsualization"},"Spectra selection, normalization and previsualization"),(0,i.kt)("p",null,"The first step is to select the spectra, and you may follow this ",(0,i.kt)("a",{parentName:"p",href:"spectraAnalysis_spectraSelection"},"tutorial")),(0,i.kt)("p",null,"Once spectra have been selected, data normalization filters can be applied and ",(0,i.kt)("a",{parentName:"p",href:"spectraAnalysis_normalization"},"more information is available here"),"."),(0,i.kt)("p",null,"The superimposed spectra can be manipulated without numerous ",(0,i.kt)("a",{parentName:"p",href:"spectraAnalysis_visualization"},"advanced features described here"),"."),(0,i.kt)("h2",{id:"create-the-pca-model"},"Create the PCA model"),(0,i.kt)("p",null,"In order to generate the PCA model you should click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Recalculate PCA")," button that can be found in the PCA tab."),(0,i.kt)("p",null,"Even after creating the model you may still add new spectra. Those spectra will be projected to the new PCA space. The spectra used for the calculations are represented using a filled circle while the one projected are represented with a circle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"result",src:a(7317).Z})),(0,i.kt)("p",null,"By default each sample will have a different color."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sample PCA",src:a(9821).Z})),(0,i.kt)("p",null,"In the list of selected sample you can check which spectra are used for the PCA calculation and which one are just projected on the model."),(0,i.kt)("h2",{id:"advanced-analysis"},"Advanced analysis"),(0,i.kt)("p",null,"By selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"PCA PC")," you can check the various principal component as well as the explained variance."),(0,i.kt)("p",null,"While PC1 versus PC2 offers usually a good separation it is not always the best that can be achieved and in this view we plot the 4 first principal components against each other."),(0,i.kt)("p",null,"In this specific example we can see that the best separation is obtained when using PC2 versus PC3."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pca versus",src:a(8999).Z})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"doi.org/10.1007/s11483-012-9279-7")))}p.isMDXComponent=!0},8999:function(e,t,a){"use strict";t.Z=a.p+"assets/images/pcaVersus-f0ec24ea240ac15cc1650cda262503a7.png"},7317:function(e,t,a){"use strict";t.Z=a.p+"assets/images/result-71acdf6f75fb460bcc1bc18ac075285e.png"},9821:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samplePCA-1b6621ea7563f6a1ed7ce9a3d7a9ff53.png"}}]);