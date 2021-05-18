(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3705],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4509:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={},o={unversionedId:"spectra/machine_learning/analysis/README",id:"spectra/machine_learning/analysis/README",isDocsHomePage:!1,title:"Create analytical report from spectra",description:"This program allows defining and apply analytical procedure on one or more spectra. The general principle is:",source:"@site/docs/30_spectra/machine_learning/analysis/README.md",sourceDirName:"30_spectra/machine_learning/analysis",slug:"/spectra/machine_learning/analysis/README",permalink:"/docs/spectra/machine_learning/analysis/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/30_spectra/machine_learning/analysis/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a report",permalink:"/docs/samples/create_reports"},next:{title:"index",permalink:"/docs/spectra/machine_learning/analysis/chart/index"}},s=[{value:"Spectra selection, normalization and previsualization",id:"spectra-selection-normalization-and-previsualization",children:[]},{value:"Load existing analytical procedure",id:"load-existing-analytical-procedure",children:[]},{value:"Create ranges",id:"create-ranges",children:[]},{value:"Create a function to apply on the spectra",id:"create-a-function-to-apply-on-the-spectra",children:[]},{value:"Design a report (Twig template)",id:"design-a-report-twig-template",children:[]}],c={toc:s};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This program allows defining and apply analytical procedure on one or more spectra. The general principle is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"select spectra"),(0,l.kt)("li",{parentName:"ul"},"define parameters for spectra normalization"),(0,l.kt)("li",{parentName:"ul"},"define ranges that will be associated to a variable and for which the following parameters are calculated:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"integration"),(0,l.kt)("li",{parentName:"ul"},"point for min y value"),(0,l.kt)("li",{parentName:"ul"},"point for max y value")))),(0,l.kt)("p",null,"This software allows either to create new analytical report of to use an existing one."),(0,l.kt)("h2",{id:"spectra-selection-normalization-and-previsualization"},"Spectra selection, normalization and previsualization"),(0,l.kt)("p",null,"The first step is to select the spectra, and you may follow this ",(0,l.kt)("a",{parentName:"p",href:"spectraAnalysis_spectraSelection"},"tutorial")),(0,l.kt)("p",null,"Once spectra have been selected, data normalization filters can be applied and ",(0,l.kt)("a",{parentName:"p",href:"spectraAnalysis_normalization"},"more information is available here"),"."),(0,l.kt)("p",null,"The superimposed spectra can be manipulated without numerous ",(0,l.kt)("a",{parentName:"p",href:"spectraAnalysis_visualization"},"advanced features described here"),"."),(0,l.kt)("h2",{id:"load-existing-analytical-procedure"},"Load existing analytical procedure"),(0,l.kt)("p",null,"If analytical procedure has been defined previously it can be loaded by clicking on the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," icon."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"load save",src:n(9536).Z})),(0,l.kt)("p",null,"By clicking on the ",(0,l.kt)("inlineCode",{parentName:"p"},"disk")," icon analytical procedure can be saved."),(0,l.kt)("p",null,"The following parameters are considered when loading / saving analytical procedure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"preferences"),(0,l.kt)("li",{parentName:"ul"},"ranges that define variables"),(0,l.kt)("li",{parentName:"ul"},"code that calculates information from the spectra"),(0,l.kt)("li",{parentName:"ul"},"twig template that generates the report"),(0,l.kt)("li",{parentName:"ul"},"a free description explaining the analysis")),(0,l.kt)("h2",{id:"create-ranges"},"Create ranges"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"Check results")," tab you are able to define ranges in the spectrum and a variable name for each of the range as well as a description."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"add ranges",src:n(8999).Z})),(0,l.kt)("p",null,"To define a zone press the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALT")," key and then click once on the left, once on the right of the range. A variable name will be automatically created and can easily be renamed from the table. A description for each variable can also be specified."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"edit ranges",src:n(8359).Z})),(0,l.kt)("h2",{id:"create-a-function-to-apply-on-the-spectra"},"Create a function to apply on the spectra"),(0,l.kt)("p",null,"To create the function click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Edit calculations")," tab."),(0,l.kt)("p",null,"To define a formula you need to write a javascript code that will modify the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),". This variable contains 2 properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"spectra: all the information related to the selected spectra"),(0,l.kt)("li",{parentName:"ul"},"report: an empty object that allows to store global statistics about the analysis")),(0,l.kt)("p",null,"At anytime you can check the content of the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," using the JSON explorer."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"data explorer",src:n(8750).Z})),(0,l.kt)("p",null,"A basic example would be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (let spectrum of data.spectra) {\n  // You are free to define new properties in the empty object 'results'\n  spectrum.results.ratio =\n    (spectrum.ranges.alcohol.integration -\n      spectrum.ranges.aldehyde.integration) /\n    spectrum.ranges.aromatic.integration;\n}\n")),(0,l.kt)("p",null,"A more advanced and complete example is presented here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// The following line allows to have a log in the browser console.\n// To display the console: `View \u2192 Developer \u2192 JavaScript Console`\n// console.log(data);\n\n/*\nThe data object gives access to the spectra as well as the report.\nThe report is a property of data that allows to store any global\ninformation about the spectra.\n*/\n\nfor (let spectrum of data.spectra) {\n  // You are free to define new properties in the empty object \'results\'\n  spectrum.results.ratio =\n    (spectrum.ranges.alcohol.integration -\n      spectrum.ranges.aldehyde.integration) /\n    spectrum.ranges.aromatic.integration;\n}\n\n/*\n    You can calculate some statistics for all the spectra\n*/\ndata.report.minAlcohol = Number.MAX_VALUE;\ndata.report.maxAlcohol = Number.MIN_VALUE;\nfor (let spectrum of data.spectra) {\n  if (spectrum.ranges.alcohol.integration > data.report.maxAlcohol) {\n    data.report.maxAlcohol = spectrum.ranges.alcohol.integration;\n  }\n  if (spectrum.ranges.alcohol.integration < data.report.minAlcohol) {\n    data.report.minAlcohol = spectrum.ranges.alcohol.integration;\n  }\n}\n\n/*\n    You can even create a chart\n*/\nlet points = { x: [], y: [] };\nfor (let spectrum of data.spectra) {\n  points.x.push(points.x.length + 1);\n  points.y.push(spectrum.results.ratio);\n}\n\ndata.report.chart = {\n  axes: {\n    x: {\n      label: "Sample number",\n    },\n    y: {\n      label: "Ratio",\n    },\n  },\n  series: [\n    {\n      data: points,\n      label: "customLabel",\n    },\n  ],\n};\n')),(0,l.kt)("p",null,"In order to test the script you need to click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Generate results"),". You will see the new properties that you added in the JSON explorer."),(0,l.kt)("h2",{id:"design-a-report-twig-template"},"Design a report (Twig template)"),(0,l.kt)("p",null,"The last tab, ",(0,l.kt)("inlineCode",{parentName:"p"},"Design report"),", allows creating advanced reports for the analysis."),(0,l.kt)("p",null,"The reports are based on the\n",(0,l.kt)("a",{parentName:"p",href:"https://twig.symfony.com/doc/2.x/"},"Twig template engine")),(0,l.kt)("p",null,"The report is principally written in HTML with at the top some CSS information. In is also possible to include an inline image (like the SVG of the company logo)."),(0,l.kt)("p",null,"In order to limit the CSS to the report it is important to wrap the report in a div and to name it. Like for example ",(0,l.kt)("inlineCode",{parentName:"p"},'<div id="report">'),". All the CSS selector with therefore start with ",(0,l.kt)("inlineCode",{parentName:"p"},"#report")," to limit the CSS to this specific div."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n  #report {\n    font-family: sans-serif;\n  }\n  #report h1 {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  #report th,\n  #report td {\n    text-align: left;\n    padding: 4px;\n  }\n  #report tr:nth-child(even) {\n    background: #ddd;\n  }\n  #report tr:nth-child(odd) {\n    background: #fff;\n  }\n  #report tr:first-child {\n    color: white;\n    background: #222;\n  }\n  #report table {\n    border: 0;\n    border-collapse: collapse;\n    width: 100%;\n  }\n</style>\n<div id="report">\n  <div align="right">\n    <svg\n      id="Layer_1"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 540.3 88.7"\n      width="200"\n    >\n      <style>\n        .st0 {\n          fill: #4a3866;\n        }\n        .st1 {\n          fill: #ff2753;\n        }\n        .st2 {\n          fill: #fff;\n        }\n        .st3 {\n          fill: #ffdd5a;\n        }\n      </style>\n      <path\n        class="st0"\n        d="M51.9 81.9s-2.4 4.3 1.3 5.3c5.4 1.4 7.3-7.5 7.3-7.5l-8.6 2.2z"\n      />\n      <path\n        class="st0"\n        d="M52.8 82.1s-3.6 8-8.7 6.4c-5.1-1.6 1.4-7 1.4-7l7.3.6z"\n      />\n      <path\n        class="st0"\n        d="M46.2 81S39 91.8 34.4 87.2c-2.6-2.6 1.9-8.7 1.9-8.7l9.9 2.5z"\n      />\n      <path\n        class="st1"\n        d="M49.8 0C27.1 0 8.7 18.4 8.7 41.2c0 3.2.4 6.4 1.1 9.4-3 1.7-6.8 5-7 10.5h6.7s-8.1 4.6-8.4 11.6l6.1-1.4S.4 77.9.1 84.8l21-14.2c7.4 7.3 17.6 11.8 28.8 11.8C72.6 82.4 91 63.9 91 41.2 91 18.4 72.6 0 49.8 0z"\n      />\n      <path\n        class="st2"\n        d="M41.7 72.1l31.3-54S55.7 3.8 41.7 15.6c-16 13.5-13.3 46.2 0 56.5z"\n      />\n      <path\n        class="st0"\n        d="M60 28.1c0 5.2-4.2 9.5-9.5 9.5S41 33.4 41 28.1c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5z"\n      />\n      <path class="st3" d="M60 56.4l30.3 25.1s36.1-48.6-10-61.1L60 56.4z" />\n      <path\n        class="st2"\n        d="M94.3 37.6s8.5 6.6 1.8 15.4c.7-7.7-1.8-15.4-1.8-15.4z"\n      />\n      <g>\n        <path\n          class="st0"\n          d="M142.8 26v48h-10.4V21h5.4c2.7-.1 5 2.3 5 5zM185.8 53.5c0 14.2-6.3 21.4-18.8 21.4s-18.7-7.2-18.7-21.4c0-14.4 6.2-21.4 18.7-21.4s18.8 7.1 18.8 21.4zm-27 0c.1 8 2.8 12.1 8.1 12.1s8-4.2 8-12.4c0-8-2.7-12-8-12s-8.1 4.1-8.1 12.3zM192 52.7c.3-13.3 7.4-20 21.2-20h1.5v10.8h-3.5c-5.8 0-8.7 3-8.7 9V74H192V52.7zM239.1 74.9c-12.5-.4-18.7-7.6-18.7-21.7 0-14 6.3-21.1 18.9-21.1 13.1 0 19.3 8 18.5 24.2h-26.7c.4 6.3 3.1 9.5 8.2 9.5 2.4 0 4.7-1 6.7-3 .9-1 2.1-1.5 3.5-1.5h7.6c-2.3 8.8-7.9 13.6-18 13.6zm-7.9-26h15.5c-.6-5.5-3.2-8.3-7.6-8.3s-7.1 2.8-7.9 8.3zM274.3 47.6V74h-10.5V49.7c0-11.8 5.9-17.6 17.7-17.6 5.3 0 9.4 1.2 12.3 3.5 3-2.3 7-3.4 12.3-3.4 11.8 0 17.6 5.8 17.5 17.6v24.3h-5.4c-3.4-.2-5.1-1.9-5.1-5.1V47.8c-.2-4.3-2.6-6.4-7.2-6.4s-6.9 2.1-7 6.4V74h-10.5V47.6c-.2-4.3-2.6-6.4-7.2-6.4-4.5 0-6.9 2.1-6.9 6.4zM359.5 26v48h-10.4V21h5.4c2.7-.1 5 2.3 5 5zM402.5 53.5c0 14.2-6.3 21.4-18.8 21.4S365 67.7 365 53.5c0-14.4 6.2-21.4 18.7-21.4s18.8 7.1 18.8 21.4zm-26.9 0c.1 8 2.8 12.1 8.1 12.1s8-4.2 8-12.4c0-8-2.7-12-8-12-5.4 0-8.1 4.1-8.1 12.3zM408.7 52.7c.3-13.3 7.4-20 21.2-20h1.5v10.8h-3.5c-5.8 0-8.7 3-8.7 9V74h-10.5V52.7zM455.8 74.9c-12.5-.4-18.7-7.6-18.7-21.7 0-14 6.3-21.1 18.9-21.1 13.1 0 19.3 8 18.5 24.2h-26.7c.4 6.3 3.1 9.5 8.2 9.5 2.4 0 4.7-1 6.7-3 .9-1 2.1-1.5 3.5-1.5h7.6c-2.2 8.8-7.9 13.6-18 13.6zm-7.9-26h15.5c-.6-5.5-3.2-8.3-7.6-8.3-4.4 0-7.1 2.8-7.9 8.3zM491 47.6V74h-10.5V49.7c0-11.8 5.9-17.6 17.7-17.6 5.3 0 9.4 1.2 12.3 3.5 3-2.3 7-3.4 12.3-3.4 11.8 0 17.6 5.8 17.5 17.6v24.3H535c-3.4-.2-5.1-1.9-5.1-5.1V47.8c-.2-4.3-2.6-6.4-7.2-6.4s-6.9 2.1-7 6.4V74h-10.5V47.6c-.2-4.3-2.6-6.4-7.2-6.4s-7 2.1-7 6.4z"\n        />\n      </g>\n    </svg>\n  </div>\n\n  <h1>Analysis report</h1>\n  <table>\n    <tr>\n      <th>Reference</th>\n      <th>Filename</th>\n      <th>Raio</th>\n    </tr>\n    {% for spectrum in data.spectra %}\n    <tr>\n      <td>{{ spectrum.toc.reference }}</td>\n      <td>\n        {{ spectrum.jcamp.filename|replace({"spectra/ir/": "", ".jdx":"",\n        ".JDX":""}) }}\n      </td>\n      <td>\n        {% if spectrum.results.ratio<1 %}\n        <span style="color: red">\n          {{ spectrum.results.ratio|number_format(2) }}\n        </span>\n        {% else %}\n        <span style="color: green">\n          {{ spectrum.results.ratio|number_format(2) }}\n        </span>\n        {% endif %}\n      </td>\n    </tr>\n    {% endfor %}\n  </table>\n\n  <h1>Global report</h1>\n  <table>\n    <tr>\n      <th>Over 10</th>\n      <td>{{data.report.over10}}</td>\n    </tr>\n    <tr>\n      <th>Min alcohol</th>\n      <td>{{data.report.minAlcohol|number_format(2)}}</td>\n    </tr>\n    <tr>\n      <th>Max alcohol</th>\n      <td>{{data.report.maxAlcohol|number_format(2)}}</td>\n    </tr>\n  </table>\n\n  <div style="text-align: center; width: 100%; height: 300px">\n    {{rendertypeBlock(data.report.chart,\'chart\')}}\n  </div>\n</div>\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"report",src:n(9753).Z})))}p.isMDXComponent=!0},8999:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-ranges-4550cd3e85f323510369acbdab6275f9.gif"},8750:function(e,t,n){"use strict";t.Z=n.p+"assets/images/data-explorer-317cf5a5787ca25087ae382cd2b0d191.png"},8359:function(e,t,n){"use strict";t.Z=n.p+"assets/images/edit-ranges-cc8eb911ab14a5676f5048d1913fe9a3.gif"},9536:function(e,t){"use strict";t.Z="data:image/png;base64,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"},9753:function(e,t,n){"use strict";t.Z=n.p+"assets/images/report-751311c5a5c6bac24b9e7c7d8f88ced0.png"}}]);