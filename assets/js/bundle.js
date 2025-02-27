(()=>{var e={117:()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=Array(t);l<t;l++)a[l]=e[l];return a}var t=wp.blocks.registerBlockType,l=wp.element.useState;t("bootenberg/auth-block",{title:"Quick Login",icon:"admin-users",category:"widgets",edit:function(){var t,a,n=(t=l(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,o,r,u=[],i=!0,s=!1;try{if(o=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;i=!1}else for(;!(i=(a=o.call(l)).done)&&(u.push(a.value),u.length!==t);i=!0);}catch(e){s=!0,n=e}finally{try{if(!i&&null!=l.return&&(r=l.return(),Object(r)!==r))return}finally{if(s)throw n}}return u}}(t,a)||function(t,l){if(t){if("string"==typeof t)return e(t,l);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,l):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0];return n[1],React.createElement("div",{className:"tailwind-auth-block"},o?React.createElement("button",{className:"bg-red-500 text-white px-4 py-2 rounded"},"Logout"):React.createElement("button",{className:"bg-blue-500 text-white px-4 py-2 rounded"},"Login"))},save:function(){return null}})},533:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=wp.blocks.registerBlockType,l=wp.element,a=l.createElement,n=l.Fragment,o=wp.blockEditor,r=o.InspectorControls,u=o.RichText,i=o.InnerBlocks,s=o.useBlockProps,b=wp.components,c=b.PanelBody,g=b.TextControl;t("gutenberg-bootstrap-blocks/tailwind-card",{title:"Card",icon:"card",category:"layout",parent:["gutenberg-bootstrap-blocks/container","gutenberg-bootstrap-blocks/tailwind-columns"],attributes:{columnClass:{type:"string",default:"col-span-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg"},title:{type:"string",default:"Tailwind Column Title"},description:{type:"string",default:"This is a customizable column block using Tailwind CSS."},buttonText:{type:"string",default:"Click Me"},buttonUrl:{type:"string",default:"#"}},edit:function(t){var l=t.attributes,o=t.setAttributes,s=l.columnClass,b=l.title,v=l.description,p=l.buttonText,d=l.buttonUrl,m=function(t,l){var a,n,r;o((a={},r=l,(n=function(t){var l=function(t){if("object"!=e(t)||!t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var a=l.call(t,"string");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(l)?l:l+""}(n=t))in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a))};return a(n,null,a(r,null,a(c,{title:"Column Settings",initialOpen:!0},a(g,{label:"Tailwind CSS Classes",value:s,onChange:function(e){return m("columnClass",e)},help:"Define Tailwind CSS classes for this column."}),a(g,{label:"Title",value:b,onChange:function(e){return m("title",e)}}),a(g,{label:"Description",value:v,onChange:function(e){return m("description",e)}}),a(g,{label:"Button Text",value:p,onChange:function(e){return m("buttonText",e)}}),a(g,{label:"Button URL",value:d,onChange:function(e){return m("buttonUrl",e)}}))),a("div",{className:s},a(u,{tagName:"h2",className:"text-xl font-bold mb-2",value:b,onChange:function(e){return m("title",e)},placeholder:"Enter title..."}),a(u,{tagName:"p",className:"mb-4",value:v,onChange:function(e){return m("description",e)},placeholder:"Enter description..."}),a("a",{href:d,className:"bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition"},p),a("div",{className:"mt-4"},a(i))))},save:function(e){var t=e.attributes,l=t.columnClass,n=t.title,o=t.description,r=t.buttonText,b=t.buttonUrl,c=s.save({className:l});return a("div",c,a(u.Content,{tagName:"h2",className:"text-xl font-bold mb-2",value:n}),a(u.Content,{tagName:"p",className:"mb-4",value:o}),a("a",{href:b,className:"bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition"},r),a("div",null,a(i.Content)))}})},436:(e,t,l)=>{var a=wp.blocks.registerBlockType,n=wp.element.createElement,o=wp.blockEditor,r=o.InspectorControls,u=o.InnerBlocks,i=o.useBlockProps,s=wp.components,b=s.PanelBody,c=s.SelectControl,g=l(477),v=g.columnOptions,p=g.colorOptions,d=g.gapOptions,m=g.paddingOptions,f=g.marginOptions,y=g.zIndexOptions;a("gutenberg-bootstrap-blocks/tailwind-columns",{title:"Columns",icon:"columns",category:"custom-category",attributes:{columns:{type:"string",default:"grid-cols-1"},colors:{type:"string",default:"bg-white"},gap:{type:"string",default:"gap-4"},padding:{type:"string",default:"p-4"},margin:{type:"string",default:"m-4"},zIndex:{type:"string",default:"z-0"}},edit:function(e){var t=e.attributes,l=e.setAttributes,a=t.columns,o=t.colors,s=t.gap,g=t.padding,h=t.margin,x=t.zIndex,C=i({className:"grid ".concat(a," ").concat(o," ").concat(s," ").concat(g," ").concat(h," ").concat(x)});return n("div",C,n(r,null,n(b,{title:"Columns Settings",initialOpen:!0},n(c,{label:"Columns",value:a,options:v,onChange:function(e){return l({columns:e})}}),n(c,{label:"Colors",value:o,options:p,onChange:function(e){return l({colors:e})}}),n(c,{label:"Gap",value:s,options:d,onChange:function(e){return l({gap:e})}}),n(c,{label:"Padding",value:g,options:m,onChange:function(e){return l({padding:e})}}),n(c,{label:"Margin",value:h,options:f,onChange:function(e){return l({margin:e})}}),n(c,{label:"Z-Index",value:x,options:y,onChange:function(e){return l({zIndex:e})}}))),n(u))},save:function(e){var t=e.attributes,l=t.columns,a=t.colors,o=t.gap,r=t.padding,s=t.margin,b=t.zIndex,c=i.save({className:" ".concat(l," ").concat(a," ").concat(o," ").concat(r," ").concat(s," ").concat(b)});return n("div",c,n(u.Content))}})},296:(e,t,l)=>{var a=wp.blocks.registerBlockType,n=wp.element.createElement,o=wp.blockEditor,r=o.InspectorControls,u=o.InnerBlocks,i=o.useBlockProps,s=wp.components,b=s.PanelBody,c=s.SelectControl,g=s.ColorPalette,v=s.ToggleControl,p=l(477),d=p.screenOptions,m=p.paddingOptions,f=p.marginOptions,y=p.justifyContentOptions,h=p.alignItemsOptions;a("gutenberg-bootstrap-blocks/container",{title:"Container",icon:"editor-table",category:"custom-category",attributes:{padding:{type:"string",default:""},margin:{type:"string",default:""},bgColor:{type:"string",default:""},screenSize:{type:"string",default:""},justifyContent:{type:"string",default:""},alignItems:{type:"string",default:""},fullWidth:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,l=e.setAttributes,a=t.padding,o=t.margin,s=t.bgColor,p=t.screenSize,x=t.justifyContent,C=t.alignItems,w=t.fullWidth,k=i({className:"".concat(w?"w-full":""," ").concat(o," ").concat(a," ").concat(p," ").concat(x," ").concat(C),style:{backgroundColor:s}});return n("div",k,n(r,null,n(b,{title:"Container Settings",initialOpen:!0},n(c,{label:"Padding",value:a,options:m,onChange:function(e){return l({padding:e})}}),n(c,{label:"Margin",value:o,options:f,onChange:function(e){return l({margin:e})}}),n(c,{label:"Screen Size",value:p,options:d,onChange:function(e){return l({screenSize:e})}}),n(c,{label:"Justify Content",value:x,options:y,onChange:function(e){return l({justifyContent:e})}}),n(c,{label:"Align Items",value:C,options:h,onChange:function(e){return l({alignItems:e})}}),n(g,{label:"Background Color",value:s,onChange:function(e){return l({bgColor:e})}}),n(v,{label:"Full Width",checked:w,onChange:function(e){return l({fullWidth:e})}}))),n(u))},save:function(e){var t=e.attributes,l=t.padding,a=t.margin,o=t.bgColor,r=t.screenSize,s=t.justifyContent,b=t.alignItems,c=t.fullWidth,g=i.save({className:" ".concat(c?"w-full":""," ").concat(a," ").concat(l," ").concat(r," ").concat(s," ").concat(b),style:{backgroundColor:o}});return n("div",g,n(u.Content))}})},477:(e,t,l)=>{"use strict";l.r(t),l.d(t,{ColorOptions:()=>u,alignItemsOptions:()=>s,columnOptions:()=>a,flexDirectionOptions:()=>c,flexOptions:()=>p,gapOptions:()=>v,gridOptions:()=>d,hoverBgColorOptions:()=>g,justifyContentOptions:()=>i,marginOptions:()=>o,paddingOptions:()=>b,textColorOptions:()=>n,zIndexOptions:()=>r});var a=[{label:"1 Column",value:"columns-1"},{label:"2 Columns",value:"columns-2"},{label:"3 Columns",value:"columns-3"},{label:"4 Columns",value:"columns-4"},{label:"5 Columns",value:"columns-5"},{label:"6 Columns",value:"columns-6"},{label:"7 Columns",value:"columns-7"},{label:"8 Columns",value:"columns-8"},{label:"9 Columns",value:"columns-9"},{label:"10 Columns",value:"columns-10"},{label:"11 Columns",value:"columns-11"},{label:"12 Columns",value:"columns-12"}],n=[{label:"Black",value:"text-black"},{label:"Gray",value:"text-gray-900"},{label:"Red",value:"text-red-900"},{label:"Green",value:"text-green-900"},{label:"Green",value:"text-white"}],o=[{label:"m-0",value:"m-0"},{label:"m-1",value:"m-1"},{label:"m-2",value:"m-2"},{label:"m-3",value:"m-3"},{label:"m-4",value:"m-4"},{label:"m-5",value:"m-5"},{label:"m-6",value:"m-6"},{label:"m-8",value:"m-8"},{label:"m-10",value:"m-10"},{label:"m-12",value:"m-12"},{label:"m-16",value:"m-16"},{label:"m-20",value:"m-20"},{label:"m-24",value:"m-24"},{label:"m-32",value:"m-32"},{label:"m-40",value:"m-40"},{label:"m-48",value:"m-48"},{label:"m-56",value:"m-56"},{label:"m-64",value:"m-64"}],r=[{label:"z-0",value:"z-0"},{label:"z-10",value:"z-10"},{label:"z-20",value:"z-20"},{label:"z-30",value:"z-30"},{label:"z-40",value:"z-40"},{label:"z-50",value:"z-50"}],u=[{label:"Inherit",value:"bg-inherit-500"},{label:"Current",value:"bg-current-500"},{label:"Transparent",value:"bg-transparent-500"},{label:"Black",value:"bg-black"},{label:"White",value:"bg-white"},{label:"Slate",value:"bg-slate-500"},{label:"Gray",value:"bg-gray-500"},{label:"Zinc",value:"bg-zinc-500"},{label:"Neutral",value:"bg-neutral-500"},{label:"Stone",value:"bg-stone-500"},{label:"Red",value:"bg-red-500"},{label:"Orange",value:"bg-orange-500"},{label:"Amber",value:"bg-amber-500"},{label:"Yellow",value:"bg-yellow-500"},{label:"Lime",value:"bg-lime-500"},{label:"Green",value:"bg-green-500"},{label:"Emerald",value:"bg-emerald-500"},{label:"Teal",value:"bg-teal-500"},{label:"Cyan",value:"bg-cyan-500"},{label:"Sky",value:"bg-sky-500"},{label:"Blue",value:"bg-blue-500"},{label:"Indigo",value:"bg-indigo-500"},{label:"Violet",value:"bg-violet-500"},{label:"Purple",value:"bg-purple-500"},{label:"Fuchsia",value:"bg-fuchsia-500"},{label:"Pink",value:"bg-pink-500"},{label:"Rose",value:"bg-rose-500"},{label:"Orange",value:"bg-orange-500 text-white"}],i=[{label:"Start",value:"justify-start"},{label:"Center",value:"justify-center"},{label:"End",value:"justify-end"},{label:"Space Between",value:"justify-between"},{label:"Space Around",value:"justify-around"}],s=[{label:"Start",value:"items-start"},{label:"Center",value:"items-center"},{label:"End",value:"items-end"},{label:"Stretch",value:"items-stretch"}],b=[{label:"p-0",value:"p-0"},{label:"p-1",value:"p-1"},{label:"p-2",value:"p-2"},{label:"p-3",value:"p-3"},{label:"p-4",value:"p-4"},{label:"p-5",value:"p-5"},{label:"p-6",value:"p-6"},{label:"p-8",value:"p-8"},{label:"p-10",value:"p-10"},{label:"p-12",value:"p-12"},{label:"p-16",value:"p-16"},{label:"p-20",value:"p-20"},{label:"p-24",value:"p-24"},{label:"p-32",value:"p-32"},{label:"p-40",value:"p-40"},{label:"p-48",value:"p-48"},{label:"p-56",value:"p-56"},{label:"p-64",value:"p-64"}],c=[{label:"Row",value:"flex-row"},{label:"Column",value:"flex-col"}],g=[{label:"Hover Inherit",value:"hover:bg-inherit"},{label:"Hover Current",value:"hover:bg-current"},{label:"Hover Transparent",value:"hover:bg-transparent"},{label:"Hover Black",value:"hover:bg-black"},{label:"Hover White",value:"hover:bg-white"},{label:"Hover Slate",value:"hover:bg-slate-500"},{label:"Hover Gray",value:"hover:bg-gray-500"},{label:"Hover Zinc",value:"hover:bg-zinc-500"},{label:"Hover Neutral",value:"hover:bg-neutral-500"},{label:"Hover Stone",value:"hover:bg-stone-500"},{label:"Hover Red",value:"hover:bg-red-500"},{label:"Hover Orange",value:"hover:bg-orange-500"},{label:"Hover Amber",value:"hover:bg-amber-500"},{label:"Hover Yellow",value:"hover:bg-yellow-500"},{label:"Hover Lime",value:"hover:bg-lime-500"},{label:"Hover Green",value:"hover:bg-green-500"},{label:"Hover Emerald",value:"hover:bg-emerald-500"},{label:"Hover Teal",value:"hover:bg-teal-500"},{label:"Hover Cyan",value:"hover:bg-cyan-500"},{label:"Hover Sky",value:"hover:bg-sky-500"},{label:"Hover Blue",value:"hover:bg-blue-500"},{label:"Hover Indigo",value:"hover:bg-indigo-500"},{label:"Hover Violet",value:"hover:bg-violet-500"},{label:"Hover Purple",value:"hover:bg-purple-500"},{label:"Hover Fuchsia",value:"hover:bg-fuchsia-500"},{label:"Hover Pink",value:"hover:bg-pink-500"},{label:"Hover Rose",value:"hover:bg-rose-500"}],v=[{label:"gap-0",value:"gap-0"},{label:"gap-1",value:"gap-1"},{label:"gap-2",value:"gap-2"},{label:"gap-3",value:"gap-3"},{label:"gap-4",value:"gap-4"},{label:"gap-5",value:"gap-5"},{label:"gap-6",value:"gap-6"},{label:"gap-8",value:"gap-8"},{label:"gap-10",value:"gap-10"},{label:"gap-12",value:"gap-12"},{label:"gap-16",value:"gap-16"},{label:"gap-20",value:"gap-20"},{label:"gap-24",value:"gap-24"},{label:"gap-32",value:"gap-32"},{label:"gap-40",value:"gap-40"},{label:"gap-48",value:"gap-48"},{label:"gap-56",value:"gap-56"},{label:"gap-64",value:"gap-64"}],p=[{label:"flex-1",value:"flex-1"},{label:"flex-auto",value:"flex-auto"},{label:"flex-initial",value:"flex-initial"},{label:"flex-none",value:"flex-none"}],d=[{label:"grid-cols-1",value:"grid-cols-1"},{label:"grid-cols-2",value:"grid-cols-2"},{label:"grid-cols-3",value:"grid-cols-3"},{label:"grid-cols-4",value:"grid-cols-4"},{label:"grid-cols-5",value:"grid-cols-5"},{label:"grid-cols-6",value:"grid-cols-6"},{label:"grid-cols-7",value:"grid-cols-7"},{label:"grid-cols-8",value:"grid-cols-8"},{label:"grid-cols-9",value:"grid-cols-9"},{label:"grid-cols-10",value:"grid-cols-10"},{label:"grid-cols-11",value:"grid-cols-11"},{label:"grid-cols-12",value:"grid-cols-12"}]},865:()=>{wp.blocks.registerBlockVariation("bootenberg/div",{name:"flex-layout",title:"Flex Layout",description:"A flex container with centered cards.",attributes:{classes:["bg-gray-100","py-10","flex","justify-center","items-center","flex-wrap"]},innerBlocks:[{name:"bootenberg/div",attributes:{classes:["container","flex","flex-wrap","justify-center"]},innerBlocks:Array.from({length:6},(function(e,t){return{name:"bootenberg/div",attributes:{classes:["bg-white","shadow-md","rounded-lg","p-5","hover:shadow-lg","transition-shadow","flex","flex-col","items-center","justify-center","m-4","w-full","sm:w-1/2","lg:w-1/3"]},innerBlocks:[{name:"core/heading",attributes:{content:"Card Title ".concat(t+1),level:3,className:"text-lg font-bold text-gray-800 mb-2 text-center"}},{name:"core/paragraph",attributes:{content:"This is a sample description for the card. You can customize this content.",className:"text-sm text-gray-600 text-center"}}]}}))}]})},838:()=>{wp.blocks.registerBlockVariation("bootenberg/div",{name:"grid-layout",title:"Grid Layout",description:"A grid container with centered cards.",attributes:{classes:["bg-gray-100","py-10","flex","justify-center","items-center"]},innerBlocks:[{name:"bootenberg/div",attributes:{classes:["container"]},innerBlocks:[{name:"bootenberg/div",attributes:{classes:["grid","lg:grid-cols-3","md:grid-cols-2","gap-6","justify-center"]},innerBlocks:Array.from({length:6},(function(e,t){return{name:"bootenberg/div",attributes:{classes:["bg-white","shadow-md","rounded-lg","p-5","hover:shadow-lg","transition-shadow","flex","flex-col","items-center","justify-center"]},innerBlocks:[{name:"core/heading",attributes:{content:"Card Title ".concat(t+1),level:3,className:"text-lg font-bold text-gray-800 mb-2 text-center"}},{name:"core/paragraph",attributes:{content:"This is a sample description for the card. You can customize this content.",className:"text-sm text-gray-600 text-center"}}]}}))}]}]})},995:()=>{wp.blocks.registerBlockVariation("bootenberg/div",{name:"custom-header",title:"Custom Header",description:"A responsive header layout with navigation.",attributes:{className:"bg-blue-500 text-white py-4"},innerBlocks:[{name:"bootenberg/div",attributes:{className:"container mx-auto flex justify-between items-center px-4"},innerBlocks:[{name:"core/image",attributes:{url:"https://via.placeholder.com/150",alt:"Logo",className:"h-10 w-auto"}},{name:"bootenberg/div",attributes:{className:"hidden md:flex gap-6 items-center"},innerBlocks:[{name:"core/navigation",attributes:{className:"flex gap-6 text-sm font-medium"}}]},{name:"bootenberg/div",attributes:{className:"flex gap-4 items-center"},innerBlocks:[{name:"core/button",attributes:{text:"Sign In",className:"bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"}},{name:"core/button",attributes:{text:"Get Started",className:"bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100"}}]},{name:"core/button",attributes:{text:"Menu",className:"md:hidden bg-transparent text-white border px-4 py-2 rounded hover:bg-white hover:text-blue-500"}}]}]})},451:()=>{wp.blocks.registerBlockVariation("core/query",{name:"custom-grid-query",title:"Custom Grid Query",description:"A grid-based dynamic layout for posts.",attributes:{className:"bg-gray-100 py-10"},innerBlocks:[{name:"core/post-template",attributes:{className:"grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4"},innerBlocks:[{name:"bootenberg/div",attributes:{classes:["bg-white","shadow-md","rounded-lg","p-5","hover:shadow-lg","transition-shadow","flex","flex-col","items-center","justify-center"]},innerBlocks:[{name:"core/post-featured-image",attributes:{className:"mb-4 rounded-lg overflow-hidden w-full h-48 object-cover"}},{name:"core/post-title",attributes:{level:3,className:"text-lg font-bold text-gray-800 mb-2 text-center"}},{name:"core/post-excerpt",attributes:{className:"text-sm text-gray-600 text-center"}},{name:"core/post-date",attributes:{className:"text-xs text-gray-500 mb-2"}},{name:"core/button",attributes:{text:"Read More",className:"mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600",url:"",linkTarget:"_self"},dynamicContent:{url:""}}]}]}]})}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,l),o.exports}l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";const e=wp.blocks,t=wp.blockEditor,a=wp.components;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)({}).hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},n.apply(null,arguments)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=Array(t);l<t;l++)a[l]=e[l];return a}(0,e.registerBlockType)("bootenberg/div",{title:"Div",icon:"editor-code",category:"custom-blocks",attributes:{classes:{type:"array",default:[]},linkUrl:{type:"string",default:""}},edit:function(e){var l=e.attributes,n=e.setAttributes,r=l.classes,u=l.linkUrl,i=(0,t.useBlockProps)();return React.createElement(React.Fragment,null,React.createElement(t.InspectorControls,null,React.createElement(a.PanelBody,{title:"Settings",initialOpen:!0},React.createElement(a.TextControl,{label:"Link URL",value:u,onChange:function(e){return n({linkUrl:e})}}),React.createElement(a.TextControl,{label:"Add Class",placeholder:"Type a class and press Enter",onKeyPress:function(e){var t,l;"Enter"===e.key&&(e.preventDefault(),(t=e.target.value).trim()&&!r.includes(t.trim())&&n({classes:[].concat((l=r,function(e){if(Array.isArray(e))return o(e)}(l)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(l)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var l={}.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[t.trim()])}),e.target.value="")}}),React.createElement("div",{style:{marginTop:"10px"}},r.map((function(e,t){return React.createElement("span",{key:t,style:{display:"inline-block",margin:"5px",padding:"5px 10px",background:"#007cba",color:"#fff",borderRadius:"3px",cursor:"pointer"},onClick:function(){return function(e){var t=r.filter((function(t,l){return l!==e}));n({classes:t})}(t)}},e," ×")}))))),React.createElement("div",i,React.createElement(t.InnerBlocks,null)))},save:function(e){var l=e.attributes,a=l.classes,o=l.linkUrl,r=t.useBlockProps.save({className:a.join(" ")}),u=React.createElement("div",r,React.createElement(t.InnerBlocks.Content,null));return o?React.createElement("a",n({href:o},r),u):u}}),l(533),l(296),l(436),l(865),l(838);const r=wp.i18n;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)({}).hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},u.apply(null,arguments)}var i=[{label:(0,r.__)("Default","bootenberg-button"),value:""},{label:(0,r.__)("Blue","bootenberg-button"),value:"bg-blue-500 hover:bg-blue-700"},{label:(0,r.__)("Red","bootenberg-button"),value:"bg-red-500 hover:bg-red-700"},{label:(0,r.__)("Green","bootenberg-button"),value:"bg-green-500 hover:bg-green-700"},{label:(0,r.__)("Yellow","bootenberg-button"),value:"bg-yellow-500 hover:bg-yellow-700"}],s=[{label:(0,r.__)("Default","bootenberg-button"),value:""},{label:(0,r.__)("Small","bootenberg-button"),value:"px-2 py-1"},{label:(0,r.__)("Medium","bootenberg-button"),value:"px-4 py-2"},{label:(0,r.__)("Large","bootenberg-button"),value:"px-6 py-3"}];(0,e.registerBlockType)("bootenberg/button",{title:(0,r.__)("Button","bootenberg-button"),icon:"button",category:"custom-category",attributes:{buttonText:{type:"string",default:"Click Me"},buttonLink:{type:"object",default:{url:"#",opensInNewTab:!1}},buttonColor:{type:"string",default:"bg-blue-500 hover:bg-blue-700"},buttonPadding:{type:"string",default:"px-4 py-2"}},edit:function(e){var l=e.attributes,n=e.setAttributes,o=l.buttonText,u=l.buttonLink,b=l.buttonColor,c=l.buttonPadding,g=(0,t.useBlockProps)({className:"".concat(b," ").concat(c," text-white rounded")});return React.createElement("div",g,React.createElement(t.InspectorControls,null,React.createElement(a.PanelBody,{title:(0,r.__)("Button Settings","bootenberg-button")},React.createElement(a.TextControl,{label:(0,r.__)("Button Text","bootenberg-button"),value:o,onChange:function(e){return n({buttonText:e})}}),React.createElement("label",null,(0,r.__)("Button Link","bootenberg-button")),React.createElement(t.__experimentalLinkControl,{value:u,onChange:function(e){return n({buttonLink:e})},settings:[{id:"opensInNewTab",label:(0,r.__)("Open in new tab","bootenberg-button")}]}),React.createElement(a.SelectControl,{label:(0,r.__)("Button Color","bootenberg-button"),value:b,options:i,onChange:function(e){return n({buttonColor:e})}}),React.createElement(a.SelectControl,{label:(0,r.__)("Button Padding","bootenberg-button"),value:c,options:s,onChange:function(e){return n({buttonPadding:e})}}))),React.createElement("a",{href:(null==u?void 0:u.url)||"#",className:"".concat(b," ").concat(c," text-white rounded"),target:null!=u&&u.opensInNewTab?"_blank":void 0,rel:null!=u&&u.opensInNewTab?"noopener noreferrer":void 0},o))},save:function(e){var l=e.attributes,a=l.buttonText,n=l.buttonLink,o=l.buttonColor,r=l.buttonPadding,i=t.useBlockProps.save({className:"".concat(o," ").concat(r," text-white rounded")});return React.createElement("a",u({href:(null==n?void 0:n.url)||"#"},i,{target:null!=n&&n.opensInNewTab?"_blank":void 0,rel:null!=n&&n.opensInNewTab?"noopener noreferrer":void 0}),a)}}),l(995),l(117),l(451)})()})();