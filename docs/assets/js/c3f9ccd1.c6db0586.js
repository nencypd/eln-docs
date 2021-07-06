(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7770],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5857:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a={},s="Deal with modified peptide or nucleotide sequences",l={unversionedId:"samples/sample-edition/includes/modifiedSequences/README",id:"samples/sample-edition/includes/modifiedSequences/README",isDocsHomePage:!1,title:"Deal with modified peptide or nucleotide sequences",description:"Peptides, proteins and nucleotides may contain non-natural amino acids or nucleic bases. They may also have chain modifications at the terminal positions. This could be the result of post-translational modifications (PTM), synthesis using non-natural amino acids, etc.",source:"@site/docs/20_samples/10_sample-edition/includes/modifiedSequences/README.md",sourceDirName:"20_samples/10_sample-edition/includes/modifiedSequences",slug:"/samples/sample-edition/includes/modifiedSequences/README",permalink:"/docs/eln/samples/sample-edition/includes/modifiedSequences/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/20_samples/10_sample-edition/includes/modifiedSequences/README.md",version:"current",frontMatter:{}},c=[],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deal-with-modified-peptide-or-nucleotide-sequences"},"Deal with modified peptide or nucleotide sequences"),(0,o.kt)("p",null,"Peptides, proteins and nucleotides may contain non-natural amino acids or nucleic bases. They may also have chain modifications at the terminal positions. This could be the result of post-translational modifications (PTM), synthesis using non-natural amino acids, etc."),(0,o.kt)("p",null,"In order to deal with those cases the system allows entering sequences using one-letter code and all the modifications in parentheses either at a terminal position or directly after the residue."),(0,o.kt)("p",null,"Everything that is in parentheses will stay untouched and if a terminal position contains a parenthesis it will not be modified."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7749).Z})),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Peptidic sequence",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AAA(NH2) = HAlaAlaAlaNH2"),(0,o.kt)("li",{parentName:"ul"},"(Me)C(S-1Se)(NH2) = Selenocysteine with N-terminal methylated and C-terminal amide"))),(0,o.kt)("li",{parentName:"ul"},"Nucleic sequence",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AA(C6H11O) = AA(C6H11O) : A dinucleotide on a glucose")))))}d.isMDXComponent=!0},7749:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sequence-f616c42db4d81933f2b1c0fed79e741c.png"}}]);