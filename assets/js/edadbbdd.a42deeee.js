(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4341],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function A(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):A(A({},e),t)),a},c=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=l(a),m=r,h=g["".concat(s,".").concat(m)]||g[m]||d[m]||o;return a?n.createElement(h,A(A({ref:e},c),{},{components:a})):n.createElement(h,A({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,A=new Array(o);A[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,A[1]=i;for(var l=2;l<o;l++)A[l]=a[l];return n.createElement.apply(null,A)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4029:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return A},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),A={},i={unversionedId:"tools/science/chemistry/ocl-editor/general/README",id:"tools/science/chemistry/ocl-editor/general/README",isDocsHomePage:!1,title:"OCL editor",description:"OpenChemLib Chemical Editor Concepts",source:"@site/docs/50_tools/science/chemistry/ocl-editor/general/README.md",sourceDirName:"50_tools/science/chemistry/ocl-editor/general",slug:"/tools/science/chemistry/ocl-editor/general/README",permalink:"/docs/tools/science/chemistry/ocl-editor/general/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/50_tools/science/chemistry/ocl-editor/general/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/tools/science/chemistry/ocl-editor/atom-properties/README"},next:{title:"README",permalink:"/docs/tools/science/chemistry/ocl-editor/stereo/README"}},s=[{value:"OpenChemLib Chemical Editor Concepts",id:"openchemlib-chemical-editor-concepts",children:[]}],l={toc:s};function c(t){var e=t.components,A=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,A,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"openchemlib-chemical-editor-concepts"},(0,o.kt)("a",{parentName:"h3",href:"http://www.openmolecules.org/"},"OpenChemLib")," Chemical Editor Concepts"),(0,o.kt)("p",null,"The structure editor is used to draw chemical molecules, substructure fragments, reactions and simple drawing objects like text, boxes, etc. Its functionality changes depending on the kind of object","(","s",")"," being edited. Thus, the atom mapping tool is only available, when a reaction is edited. Query feature dialogs only open, when a substructure is edited, etc.  "),(0,o.kt)("h4",{id:"atom-and-bond-hot-keys"},"Atom and Bond Hot-Keys"),(0,o.kt)("p",null,"Hot-keys allow to quickly change atom and bond types. When the mouse is moved over an atom or bond then the atom or bond is automatically highlighted, indicating that mouse clicks or pressing a hot-key affect the highlighted object."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Hot-Key"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'Delete'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atoms Bonds Mapping"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Delete"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Deletes highlighted and selected atoms and bonds. When a reaction is edited and the mapping tool is selected, then pressing the 'Delete' key removes all atom mapping from the reaction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'1','2','3', ...")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom Chain"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Attaches a chain of 'n' carbon atoms to the highlighted atom provided that its valence maximum is not exceeded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'a','b','c', ...")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom Symbol"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the symbol of the highlighted atom according to the typed sequence of atoms. E.g. typing 'n' followed by 'a' converts the atom to a sodium atom.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'+', '-'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Charge Modifiers"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Increases or decreases the charge of the highlighted atom.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'?'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Connection Point"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Converts an atom into a connection point of a substituent or building block.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'q'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom, Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Query Feature Dialog"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If a substructure query is edited then this key opens a query feature dialog, which allows to specify additional atom/bond conditions for the substructure search.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'1','2','3'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond Order"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the highlighted bond into a single, double or triple bond.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'u'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Up Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the highlighted bond into 'up' stereo bond, if at least one of the associated atoms is a relative or absolute stereo center.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'d'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Down Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the highlighted bond into 'down' stereo bond, if at least one of the associated atoms is a relative or absolute stereo center.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'c'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Cross Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the highlighted bond into a double bond with unknown configuration.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'4','5','6','7'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Annelate Ring"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Annellates a new saturated ring with the respective ring size to the highlighted bond.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"'b'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Annelate Benzo"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Annellates a new benzene ring to the highlighted bond.")))),(0,o.kt)("h4",{id:"buttons-and-tools"},"Buttons and Tools"),(0,o.kt)("p",null,"Chemical structures are drawn by selecting an appropriate tool and applying it while moving, clicking and dragging the mouse pointer over the drawing area. While the selection of a tool has no immidiate effect on the drawn structure, pressing a button does. Currently available buttons allow to clean up atom coordinates or to revert the most recent structure change."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Button or Tool"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(326).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom Tools"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Atom Tools cover atoms frequently used in organic chemistry. After selecting one of these tools, you may place new atoms by clicking into the empty space or change existing atom by clicking onto them.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(5734).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Atom Detail Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Double clicking an atom with this tool selected will open a dialog window for specifying an unusual atom label, specific isotop, abnormal valence and/or radical state. When closing the dialog the double clicked atom is changed accordingly. The dialog settings are remembered applied to any other clicked atom, as long as the tool is selected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(950).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Charge Tools"),(0,o.kt)("td",{parentName:"tr",align:"left"},"These tools let you assign charges to atoms. Multiple clicks on the same atom will increase or decrease the charge by 1. The ",(0,o.kt)("strong",{parentName:"td"},"Osiris Structure Editor")," assumes the presence of implicit hydrogens at any charged or non charged atoms to meet the atom's default valence. However, implicit hydrogens are only shown on hetero atoms.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(4070).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ring Tools"),(0,o.kt)("td",{parentName:"tr",align:"left"},"After selecting one of the predefined rings, one may create a new ring or attach a ring to an existing bond or atom to create annelated ring systems or a spiro compound, respectively.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(9).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond Tools"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Bond Tools allow you to create new bonds and to change existing bonds concerning their order or stereo-orientation. By clicking into the open space you create a new bond of the selected type including two carbon atoms. Clicking onto an existing atom will attach a new carbon. Dragging the mouse from one atom to another one will just connect these atoms or increment the bond order between them, if they were already connected. If the plain single bond tool is selected, bonds may be multiply clicked to cycle through the possible bond orders. Where reasonable, it also toggles between double bonds with known or unknown configuration, the so-called cross bond. When using stereo bonds please consider that the pointed tip of the bond should always point to the stereo center.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(980).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Chain Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Chain Tool provides the fastest way to draw aliphatic carbon chains in zig-zag orientation. With the selected Chain Tool click into the empty space or at an existing atom and drag the mouse to create a new zig-zag chain and flip its orientation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(6889).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"ESR Tools"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The editor supports the enhanced stereo recognition ","(","ESR",")"," introduced by Molecular Design Ltd. with IsisDraw V2.5. The ESR Tools allow to define for every stereo center, whether it is an absolute one or if it belongs to a group of stereo centers that have the drawn, but relative configuration. For any group of relative stereo centers one may define that the drawn ",(0,o.kt)("strong",{parentName:"td"},"and")," the inverse configurations are present, i.e. that we have a racemic situation concerning the group members. This is indicated by green stereo bonds and an ampersand '",(0,o.kt)("strong",{parentName:"td"},"&"),"' at the stereo centers. Likewise one may define groups of relative stereo centers that contain either the drawn configuration ",(0,o.kt)("strong",{parentName:"td"},"or")," the opposite one. Stereo centers of such a group are indicated by blue stereo bonds and the word '",(0,o.kt)("strong",{parentName:"td"},"or"),"' at the stereo centers. In addition to the '",(0,o.kt)("strong",{parentName:"td"},"&"),"' or '",(0,o.kt)("strong",{parentName:"td"},"or"),"' indicators group numbers show which stereo centers belong to the same group.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(1255).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown Configuration Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This symbol is used to denote an unknown stereo configuration at a chiral center.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(8978).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Cleanup Button"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A cleanup will generate new coordinates of an existing molecule. It rearranges bond and atom positions in order to have a proper 2D structure. If a part of the molecule or reaction is selected, the cleanup will retain the relative orientation of the non-selected atoms.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(230).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lasso Pointer Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This tools allows you to select multiple atoms and bonds to rearrange, rotate, resize, delete or duplicate at the same time. Just drag the mouse pointer around the atoms of interest. Selected atoms and bonds are shown in red. By pressing the control key you switch to the rectangular selection mode and the shift key lets you add atoms to the current selection. By clicking onto an atom or bonds and dragging the mouse one may more it or all selected atoms, if the clicked one is selected. When pressing the shift key while dragging a selected fragment, an automatically created copy of the selected fragment is dragged. Where the editor needs to support multiple molecules, e.g. if a reaction is edited, then every reactant and product is indicated by a large light gray indicator in the background ","(","'A', 'B', 'P1', etc.",")",". Where independent fragments shall be treated as one molecule, e.g. anion and kation of one salt, one must locate those fragments close enough that there is only one indicator behind them. If a reaction or molecule query is edited, then one may double click an atom or a set of selected atoms to open a query feature dialog to specify additional conditions for a fragment to match in a substructure search. The same applies to individual or multiple selected bonds. If the edited object is not a query then double clicking of an atom or bond will just select the entire fragment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(5550).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Delete Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"It allows you to delete individual atoms or bonds or selected parts of the molecule. Selected areas may also be removed by pressing the delete key from the keyboard.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(5068).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Zoom and Rotate Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This tool allows to zoom or rotate the entire drawing or a selected subset. Just click at the intended origin for the rotation or zooming and drag the mouse vertically to zoom or horizontically to rotate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(5098).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Mapping Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This tool is only available when a reaction is edited. Use this tool to map reactant atoms to the respective product atoms. This is done by clicking on a reactant atom and dragging the mouse onto the corresponding product atom. The editor will acknowledge the link by displaying a red mapping number at both atoms. Afterwards it tries to map atoms in the vicinity automatically and displays green numbers at automatically mapped atoms. Please assign manually as many reactant-product pairs as are needed that the entire reaction is mapped completely and correctly. Pressing the 'Delete' key while this tool is selected removes all mapping from the reaction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{src:a(7114).Z})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Text Tool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text tool may only be selected in certain situations. If it is selected one may use it to place text elements directly into the drawing. These text elements will be integral part of the drawing and, thus, move, resize and rotate with the molecules or reaction.")))))}c.isMDXComponent=!0},326:function(t,e){"use strict";e.Z="data:image/gif;base64,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"},9:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgBKANUAAPr6+v39/dTU1ODg4NfX187Ozvf39/Hx8ubl5tHR0snIycPDw+bm5tHR0evs68bGxcvLy+vs7Ozs6/Hx8ff49+Dg3+zr7L29vcDAwOzr6/Ly8ebm5d/g4NfY1/j39+vr6+Xl5sC/v8zMzOXm5fLy8sXFxvj49/Lx8fLx8uXm5rq6usvLzODf4MvMy/Hy8svMzNra2t3d3ePj4/T09Onp6e7u7qqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWAEoAAAb/QJxwSCwahbqbcslsMoU31SW0eChahYSAAItVZAiawwa9YKoKSKGx7Q5kDFqkRsbdzrn0uh17xy01GnU3CyU5OVl8byA0EjUHM4NWEIcCHW5gNB81JDMGgwoiWYddHJlzkAYAgyuJBIcsMhtyNSeeAAGDrl2HjI6QHrg6g2yXXjKHDjUTtwE6w1CKcDSHwMLPg1x9smI1h6rOz9B2mCPdLjOH4eKDMaZhgBozFACH4thQbyk0GY/NOvbYQZnmCMW/ZwHH3QjTjxm9dQhz4LND48ayGSau3bs3yCKkhxtDDrJBsqTJkyaPqFQZsqXLlzBjypwpc6VNIkmc6GwCRQoV/ytYtGj7EmZMmTOT9mjzQ2sQnhxq2CydFm9QoUM5hGLy5U9SGqw5MIXZ1OkTlFCjsL6jlWoVlFZawOaYNccWOF1a5ebwF8wZMUtdKug9OEgaA70as2GapTfhoHLdGktU6C5TvHSNFerj50+V3ok3CNYwCE6uQDsML4IEmFBhxYsZIU4+rcTf6pcjUeo+ebM3zd/Agwt32ftmzp3Ie05BE5QPUTGDzKCJargpFDx6pGL6E8hqCQUvdm3jCslr1BzG3ozl5AmUqASkKodBdYuV+Fh0azXDyyfWoV8z9KVQMYEhk4MyzIADmmE5bAJJDolBMdUsyjyYA0SPbWOOMuioszJRO2td5mFEmsmwTz9trRPQIKKRppFjUKTm0IuzuWYRM7HdU6NCHs2jkUu57SZkcTYFAQA7"},980:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAANfX187Ozt3d3fr6+vf39/39/fHx8snIyeDg4NHR0ubl5uvs6+bm5sPDw9HR0fHx8ezs6/f498bGxcvLy+vs7L29vcDAwOXl5ubm5fLy8fj399fY1+zr7MXFxuzr6+Df4ODg3/Lx8d/g4MzMzMvMzPLy8vj49/Hy8svMy8C/v+Xm5eXm5uvr68vLzPLx8rq6utTU1Nra2uPj4/T09O7u7unp6aqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbrQJxwSCwahbqbcslsMoW3VyXVkBxQgQQMEBOAZIrawgatWKqHScCx7SJkjBqFRsbdzp30ui14xzk0GXU3DXkkWXxvFzUQNAYzg1ZqbBtuYDUsNCUzBIMHI4hcAiKXc48EA4MtoTE5HzIYcjQhnDkFg6w5uouNjxq6OoOUrTkyugs0D7U5OsFQbbpwNbq+wM2DXNGxyLoE1tdQxDIqYjQnM7rMzeB2AsVhgBkzEQPq6852bys1Ho6cAwXurRskrZGLfwEFsrsRpp8yegkV4rtR40ayGSYAShwIxeIjiBs52rFBsqTJkyaPqFQZBAA7"},950:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhMAAWANUAANTU1NfX1+Dg4Pf3987OzsnIyfHx8ubl5tHR0tHR0cPDw+vs7Ozs6+vs6+bm5sbGxcvLy/f498DAwPHx8eDf4L29vcXFxuzr7PLy8dfY1+zr6+Xl5ubm5d/g4MvMzOXm5svLzPLx8fLx8vLy8uXm5eDg38zMzPj49+vr68C/v8vMy/j397q6uvHy8uPj4/39/dra2vT09Pr6+t3d3e7u7unp6aqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAwABYAAAb/QJxwSCwacbqk7shk6m7QqHQqRSqR1CxVeGNVUopHQUVAAAKwWcl1qDVs1iSu+w2Py+f0uv3mViR2EAQJeTMCLg41CzRwSks3f4GDhYeJi3BzgBYFgoRohog1FzQYjVc3mpyTn5WipJg3CpseeKwuGzUMNAYxpnKxs7Vph7i6vLBinQAZw2w1KDQjMQO+j8mTzKBt0NLUXAUmwjM5OW2LvAMy1XPg4h3O59PqXCDiFOSKNCHyL+s39WY+UXDBId++dP242HNBzliMFTJe6PC3sNiuhxEnciGUjZxHjwiT+OOY5uPHkBrnUDLpMaPIOI9WsszhMuUNWwUbkOPnyB9OjDcXUb6c04wEUHJCXzoiCspoAxotePbkMuNdm1EYyNVU4q+qM6wxImwdeuPQhxoago5VesosWrUSHZENpUuEVLkal96gS8Nu0qlz2qSdEHYtV5iB3xIWGxevzRo3aBA+YfiwXsiSY1Bu7BhWZF6MHU/V+7kw585cbKhezbo1a8Q3XMt23aQ2kaW2awcBADs="},8978:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWALMAAObl5uXl5sbGxcPDw729vePj49TU1N3d3fT09P39/aqqquzs7CEhIczMzAAAAP///yH5BAAAAAAALAAAAAAWABYAAAS2kMlJq5Vv6c07lwtBDENjGuihFgWgKeBINo6CGofisBoCMwtSqaFLHWqu3i84bBhqKl1gg/CBBCanQXco1KiIxJJmM7KmSocYRHRAu7yFz01YA29clrvnqCceS0Yrbm5VCYcPgCBmBQuEDoaIincqcBqFh32JkwuVOmCHCQR0nDluCj1hYX8Po5xeqHI6YZqbiUtxcn2HrracSbJqrLWbS2C7m73FIKmhrL7LQArT1NXW1RfZ2REAOw=="},5550:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAANfX187OzvHx8u7u7uDg4MnIyebl5tHR0tHR0d3d3cPDw+vs7MbGxevs68vLy+bm5vHx8ff49+Dg38DAwNfY1/f398XFxuvr6+zr6+bm5b29vezr7ODf4MvMzMC/v8zMzObl5eXm5rq6usvMy/Ly8cvLzPj499/g4PHy8vLx8ezs6+Xl5tTU1OPj4/39/dra2vT09Pr6+unp6aqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbfwJpwSCwahTeacslsMoU0kcajYBRGgQML8EpIWgZZYwbVTKoFRwCx7RJaD9liQK7Rzpb0up14xzcDJHU0CnkdWW02ios2AjCDVmpsFC82b2EXijAVgwUfiFw2J2ByjTYVMYMloJUcLRmlKTA2MS6DrDauKzIqjbO1N4OTlV8gYjYQvy43wVCJfjKZjrTLzIOhb7ANvtTM1lCVjIooyt7fdgk2pIA25ebNdgQ2ITIYAwKKwO/wNC3i+dX2DQpjL1kEffv4yaAxIJkJhAkHMXR0MGBCfjMyatzIceORjx+DAAA7"},6889:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgBKANUAAPr6+tTU1NfX1/39/ePj48/Oz/T09MnJyeDg4O7u7unp6MPDw9HR0tHR0ff398vLy+bl5vf498DAwL29vfj39/Hx8sXFxuDf4N/g4NfY1/Hx8cvLzOXm5evs68vMy8vMzObm5sbFxevs7NLR0sbGxsbGxeXm5uDg38zMzMC/v/Ly8bq6uvj49/Lx8uzr69ra2t3d3aqqquzs7CEhIf8AAAD/AAAA/wAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWAEoAAAb/wJlwSCwabzOcbMlsOptI2WqSWpAOngIjIHjBaASIohOLTiSL0uFRaHC9tLhClCjPZGjLuv3+xuMJKnYyC3ofWn0If38GgyF7bhleiot/gwcoiF0wGJV/AIMbBSN9F55xAAODml4XBJ4UqTiDkV4nr5UOsrNRibiLsQM4w4ObCLg3NzQGusLDvHeTBBxxycy7z4Ocyck03DfC39AyxybeNxXJAOLZUQQg3wbJA8k43MRREMkJyRH19cPqDVLw7ca6e+wGyUhQwUAEbM8ijotBsaLFixaRGNm48YbEjyBDihxJsqRJkBxTEkGi5IlLJ1GmVLmSZcsmG2HGDDqTBlIf/xtA59SJksfnTaBAAw0qdOCQzUlIkTaK8ohNLRgIoka9lOkpJ61IQUURRWrTBbBAU63y6gpssHFXb4Fthu+OL7fYiknTes1ZXRnSOETtK1EbhjCD79kTGKUc0obz/nkc904B0BbMJC/+K8ZFAg0OD24GOHAhaBayFJOOsrDhQ78hB2GcjVGjypSTT+rezbv3x9sqWb4cviQmFStYWMGokZOMGTRqrPapQV3ooKLSN1HfrjQKU6eJtm+feqcqH0lYxYvnqhyD+u1i75At9Z662ijKXb1/SysA+lvv0TWOL/vlFYUxBKgnj2LjBCbegvTkZlgYDz7E4DjlbNeQLhdSBiyCAtRhxqFHBY3T2WehRRjQancoYJoBqDlTEGN3tJYiSbLRpmMZM/bo4w1BAAA7"},230:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAAPr6+tra2t3d3f39/dfX19TU1MnIyeDg4Pf39/Hx8sPDw9HR0c7Ozubl5ubm5svLy9HR0sbGxb29vcDAwOXl5vLy8ezr7MXFxuvs7Ovs6/f499/g4PHx8eDf4NfY1+bl5eDg3+zs6/Lx8cC/v/j498vLzMzMzPLx8rq6uuzr6/Ly8uXm5eXm5vHy8svMzMvMy+vr6/T09O7u7uPj4+np6aqqquzs7CEhIf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAb1wJtwSCwahTibcslsMoU2lGSkiBheDEiBEBCAZg1apgaVTKqGB2Ox7R5mDhpGRr7Zzpf0Osfv52gWMhV1Ngp5Ln1cAm8UNHwJMYRWDzlsHl05YDQwMio5CIQGJjlaiht8cjKQOQCEJaRtAh0zfTIiMQg5A4QMObGzFH4xfAM4hAs5l14zH45+AMXGUFt9cDQffnw424QEfG+12drSdgE5BzkrORkyLXwA49xQAqd8gRXD0PHkNm8sjqpwQdsWj5C1EDlOCIyGoyCUMClycIihYeA2gjnk2aFhQ8ZEEhYvNszIryOkigxFiiRUo6XLlzBfHpk5MwgAOw=="},5098:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAAO7u7tfX1+np6ff39+Dg4M7OzsnIyfHx8tHR0sPDw9HR0ebl5sbGxff498vLy8XFxtfY19/g4ODf4L29vfj398DAwOXl5uDg37q6usC/v+bm5ebl5cvMzPHx8fLx8uzr6+vs6+bm5uvs7PLy8cvMy8vLzPHy8uXm5evr68zMzPLx8fj499TU1P39/dra2vr6+t3d3ePj4/T09Kqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbRwJpwSCwahTeacslsMoU0zCSTYBhIBQQr4IJdYgsBaAadVKoGR0Gx7RJiNpsIQK7Rzo/0ug17x+MjdTQJeRxZfG8WfzYyglZqbBBuYAIocTIDggYph1wwEXBxAAeYL4IlnV0SMRoCcSqlLYKpMKsWrgCMFC8tN4KRXV8buB2xN75QiDEhuKS7vceCnn7NxsfIdpMnoibW14KflH8yDbzX31B+Nh+j3ueCoXEe7u9QC4vk5uf1dgI0lyv07UNnh0a7ctAGEqQxo6HDhxAfHpk4MQgAOw=="},5734:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAANTU1M7OztfX1/f39/Hx8uDg4MnIyebl5sPDw9HR0evs6+bm5uvs7Ozs68bGxdHR0svLy/Hx8ff49+vr68DAwPj398XFxuXl5vLy8b29vd/g4NfY17q6uvLy8vHy8uXm5czMzObl5cC/v8vMy/Lx8ebm5eDg3+zr68vMzMvLzOXm5uzr7Pj49/Lx8uPj4/39/fr6+tra2t3d3fT09O7u7unp6aqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbiQJxwSCwahbqbcslsMoU3TkaEcBhGgQdAEJOZXIeawgbNUKoGSCCx7RZcixqDRsbdzpb0ui17x1c0GHU3CHkoWXxvFzUNNAQzg1ZqbBtuYDUTNB0zA4MGIAE5ojkyGpdzjwMwgymhbaIuJXI0JJwwL4OIXDKii42PFbc6g5RdoiFiNBG2LzrDUHyicZnAws6DuwWiyanW11CWH8kezM7mg6VgooEzoi+iOvCDbyo1oqnw+TnPdnCMNC3KmRs4KMwJZTMkeBv4zU6NGwhZLGTIT4mjhBMpDrLBsaPHjx6PiBQZBAA7"},4070:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhMABKANUAAN3d3fr6+tra2v39/dTU1NfX1/f39+Dg4PHx8s7OzsnIyebl5uvs6+bm5sPDw9HR0tHR0fHx8cbGxezs68vLy+vs7Pf49+zr7MDAwPLy8eDg3/j39729vcXFxuzr6+vr6+bm5eDf4OXl5t/g4NfY1+bl5fHy8svLzMvMy7q6usvMzPj498C/v+Xm5uXm5czMzPLy8vLx8fLx8uPj4/T09O7u7unp6aqqquzs7CEhIQAAAP///wAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAwAEoAAAb/wJxwSCwac7vk7shk7nDQqHQqRSqR1CxViEtxWA6JApV4EAoCgGa2sDFu1mSu+w2Py+f0uv3mcjB2FAkQeQAHMw02FTVwSks4f4GDhYeJi3BzgB0KgoRohog2FzUZjVc4mpyTn5WipJg4DpsqeKwzIjYTNQg0pnKxs7Vph7i6vLBinQQkw2w2HzUwNAa+j8k62NnaOtHTsAovwgA6zou8BgHVc+AJOoUj5Trn6Vwn4uQ6ijUx0wED6jjsPdDxKcQMEPp09PvH5d4tG9x4bfC3AyAeHWkMFtulY+KAilwIMVOjo4QbHREWJgEoUoeaGSYZ1EipgyLIOZR0JIKGoKNN/5COcKLR0YonjQ06Pq7kwkoHQpnnkjoC+Inc0139dEzl0iyfTBNZHQE9NUyHCzc1wKIboFUJLADw8o3KQMMCxbZLg+KAO0Muqbp3t8451GKb4a16CevwgHVtErw3cYTSJUOl2LynQhneJhhHG8Yp7Sq9PPbX55mAR1+GZQMH6hU/SQNs/Tr2ai6ueYkmjfhU7tS83XK5Qby48ePG4zxCzhx5k+dEgkJ/Hry69evYs2vfzr279+/dp1O/Ir7JEy3ocSjHkl4LFy9gxJAx82mPG4Dw7cwvZL/PnEjJrNKMJYysBwkgAUKAzYD6wJKKMrYkMhdAD7ZDkADYhDIhF7IoQP8LfdgQkwtWAHWoAjaU9KWDMb1wkSAB2BiCzTPdUGOgGNiI1EwbH2DjDRfsmIERX21E1A9ACuggDjxtmENDTbAItCAABiG0CDZrAXSCDvRldJA+/BiQFCxlXEjlQywi9ZFF7hSEJlYTaQULIUOuERNq6LTFkg4j2YlWSmvJyUUeRIViVJzC6QUjg4cGBktVX0K1EF5UuXTIVfMoJegcXaGllj+QAYThIWd9ZdkOm+7FpA5zAReqgeM40+puSqRKmA0eyKMSZKU9cgg2jGVaq55cTFbDZrwCNJmPjqH66hynhWZbb6bhiho2H2Fz2xy0pQSbarfp1S0N32orG25Y0Rr/HEC/qcsbLM3FS5yB8sZbnnnk3VsEePz26++/AAfsr75GSEdwdO25F9R5CU/xXh3yidMffhDf0eVLfMACoCqeMHiJgRt3MmUrH2fSoTJDtrKhXhViMxQ5Er7CYTADYZThRscYaCKKtmDDIjKqYDPSrzpAI42NeuGog47j6MAjs9+8wHMaTCrCLD16JbkkG9hgBWU9XBZSJZhP+qMll2aOfaUOYjI0RztivymRVGwueibORwWQqoJ9wvRnWL3OwbdLfsoEKKiR2V0UnIgHjsOihe7EeLaRFWBppI0F5rjlsWJqWaqjzlBqWp9j9suoZnk6qVapwuW0K3TRSims5LQxT6veeNk6Q2HBlp7oKUT3LmbuxM6xbGXNJmvgsgol/6xn1kawWbinRPukVOZ2Nu631c3mmreg8ircHO1OKxa76ZrfWb3N0cu+cwdHl2/8QQAAOw=="},7114:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAANra2v39/dTU1NfX187Ozvf39+Dg4PHx8vr6+snIycPDw9HR0ubl5tHR0ezs6+bm5svLy8bGxevs7Ozr6+vs6+Df4OXl5sDAwPf49729vezr7ODg3/Hx8d/g4MXFxuXm5fj49/Ly8czMzMvMy+bm5fLx8sC/v/j39/Hy8svMzLq6uvLx8eXm5vLy8uvr69fY1+Pj493d3e7u7vT09Onp6aqqquzs7CEhIf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbrwJtwSCwahTibcslsMoU2VcakiCRGhIVgAIhtYAwapQbNXKoJCKGx7RpgD5pERr7Zzp70uh17xzUyIXU2CnkpWXxvFjQOMgczg1ZqbC9uYDQuMi0zBYMJIohcMR2Xc48FCIM5q6wxFTAkcjIrM6sBg1mrXa+LjY8nqziDbKterBSrtaw5g1urBqs0qwesAcGDXKswyzmcOQE411Bdqx+rMijeweJ2o9Ea3Dnhy4NvLDQTjpwI4Dj+/4PgMJJRYl+/fwChhMnHYQYGfggjDqJhQ0ZDEBAjIhxU8dHDgxr9DapBsqTJkyaPqFQZBAA7"},1255:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAAODg4OPj49fX1/r6+s7OztTU1Pf39/Hx8snIycPDw9HR0tHR0evs7MvLy8bGxebl5uvs6+bm5vHx8cDAwOzs6/Ly8ff49729vfj39+Dg3+Df4NfY1+zr7PLy8rq6uuvr6+zr68C/v/j498vMy8zMzMXFxt/g4OXm5svLzPLx8f39/dra2vT09Onp6d3d3e7u7qqqquzs7CEhIf8AAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbqQJlwSCwahbWYcslsMoUxzyWUcCBGBEVBsHJlAo8WBAa9TKqIBmGx7QICkRbjRZbFzjSams11vSN5LxV1MQklCHk0bX4BiS8HLIRWe4l+iR8vHSwGhAgkWW2JNHKPmwOEKFkzqzMaeXI0KTQGAyqEqn2reRSPNBi1NYRsG10ZujQvojQ1wVCLAKsteZAYNCrMzXZ90DNieZvWy8yEbgGrEMmzwNjZMS4mYC0cgnnr7IRvJy2rkHnX7OOgwGlBYRU4cQDbhQHxQgILC/YSEmoRoyELERElQqkICeK/hNgIwRhJsqTJkkdSpgwCADs="},5068:function(t,e){"use strict";e.Z="data:image/gif;base64,R0lGODlhFgAWANUAANfX1/T09M7OzuDg4Onp6e7u7snIydHR0vf398PDw9HR0ebm5r29vcbGxcvLy+bl5uDg39fY18XFxvHx8sDAwOXl5vHx8ff49/j39+zs67q6ut/g4PLy8ezr6+vs7MC/v8zMzPLy8uXm5uDf4MvMzOvs6/j498vMy+zr7MvLzNTU1P39/fr6+uPj493d3dra2uzs7KqqqiEhIQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAWABYAAAbaQJlwSCwahTSYcslsMoUwDeOTaBhOgoMK8HJBWg9CKQZlUKoGh0Cx7Q5aC4KnQJbBzpL0uu16x1EFHHUwCXkkWXxvFTEZBRMBg1ZqbBFuLWQzMSEBCIMGIIhcLgwyM6amMQgsgymhL6WnsZkrg64uIy0VsDEBGCwrNIOUXV+YmZy/NMFQiXCnvL7AyoOibzHPyNLTUC+y3qbK23YuG9+mMuHhg28isjLJ6eIwcAQZMzKp8PHLdmEdBRYCXNC3bxABGAADmCBYEArCRwO17ZMXo6LFixgvHtm4MQgAOw=="}}]);