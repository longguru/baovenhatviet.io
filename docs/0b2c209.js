(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(n,t,e){"use strict";var o=e(42),component=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Nuxt"),n._v(" "),e("div",{attrs:{id:"fb-root"}}),n._v(" "),e("div",{staticClass:"fb-customerchat",attrs:{id:"fb-customer-chat"}}),n._v(" "),e("script",[n._v('\n      var chatbox = document.getElementById(\'fb-customer-chat\');\n      chatbox.setAttribute("page_id", "105530131117556");\n      chatbox.setAttribute("attribution", "biz_inbox");\n    ')]),n._v(" "),e("script",[n._v("\n      window.fbAsyncInit = function() {\n        FB.init({\n          xfbml            : true,\n          version          : 'v13.0'\n        });\n      };\n\n      (function(d, s, id) {\n        var js, fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) return;\n        js = d.createElement(s); js.id = id;\n        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';\n        fjs.parentNode.insertBefore(js, fjs);\n      }(document, 'script', 'facebook-jssdk'));\n    ")]),n._v(" "),e("script",{attrs:{id:"mcjs"}},[n._v('!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/dafd0f159bea8e5be932061e6/4f30f06ab5a9e872095c82db6.js");')]),n._v(" "),e("script",{attrs:{async:"",src:"https://www.googletagmanager.com/gtag/js?id=UA-201783842-9"}}),n._v(" "),e("script",[n._v("\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-201783842-9');\n")])],1)}),[],!1,null,null,null);t.a=component.exports},168:function(n,t,e){e(169),n.exports=e(170)},218:function(n,t,e){var content=e(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(122).default)("382a115c",content,!0,{sourceMap:!1})},219:function(n,t,e){var o=e(121)((function(i){return i[1]}));o.push([n.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.pointer-events-none{\n  pointer-events:none;\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.top-0{\n  top:0px;\n}\n\n.top-auto{\n  top:auto;\n}\n\n.right-0{\n  right:0px;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.bottom-auto{\n  bottom:auto;\n}\n\n.left-0{\n  left:0px;\n}\n\n.z-50{\n  z-index:50;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-6{\n  margin-top:1.5rem;\n  margin-bottom:1.5rem;\n}\n\n.mt-0{\n  margin-top:0px;\n}\n\n.mt-1{\n  margin-top:0.25rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mt-32{\n  margin-top:8rem;\n}\n\n.-mt-20{\n  margin-top:-5rem;\n}\n\n.-mt-24{\n  margin-top:-6rem;\n}\n\n.-mt-48{\n  margin-top:-12rem;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.mr-3{\n  margin-right:0.75rem;\n}\n\n.mr-4{\n  margin-right:1rem;\n}\n\n.mr-auto{\n  margin-right:auto;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.mb-6{\n  margin-bottom:1.5rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.ml-3{\n  margin-left:0.75rem;\n}\n\n.ml-auto{\n  margin-left:auto;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-16{\n  height:4rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-16{\n  width:4rem;\n}\n\n.w-full{\n  width:100%;\n}\n\n.min-w-0{\n  min-width:0px;\n}\n\n.max-w-full{\n  max-width:100%;\n}\n\n.flex-auto{\n  flex:1 1 auto;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.list-none{\n  list-style-type:none;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.content-center{\n  align-content:center;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.whitespace-nowrap{\n  white-space:nowrap;\n}\n\n.break-words{\n  overflow-wrap:break-word;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.rounded-t-lg{\n  border-top-left-radius:0.5rem;\n  border-top-right-radius:0.5rem;\n}\n\n.border-0{\n  border-width:0px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-solid{\n  border-style:solid;\n}\n\n.border-transparent{\n  border-color:transparent;\n}\n\n.border-gray-400{\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n}\n\n.bg-transparent{\n  background-color:transparent;\n}\n\n.bg-black{\n  --tw-bg-opacity:1;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.bg-red-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n\n.bg-green-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(52, 211, 153, var(--tw-bg-opacity));\n}\n\n.bg-blue-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(96, 165, 250, var(--tw-bg-opacity));\n}\n\n.bg-pink-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(251, 207, 232, var(--tw-bg-opacity));\n}\n\n.bg-pink-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 168, 212, var(--tw-bg-opacity));\n}\n\n.bg-pink-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(219, 39, 119, var(--tw-bg-opacity));\n}\n\n.bg-cover{\n  background-size:cover;\n}\n\n.bg-center{\n  background-position:center;\n}\n\n.fill-current{\n  fill:currentColor;\n}\n\n.p-3{\n  padding:0.75rem;\n}\n\n.p-5{\n  padding:1.25rem;\n}\n\n.p-8{\n  padding:2rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.py-5{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n}\n\n.py-20{\n  padding-top:5rem;\n  padding-bottom:5rem;\n}\n\n.py-24{\n  padding-top:6rem;\n  padding-bottom:6rem;\n}\n\n.pt-6{\n  padding-top:1.5rem;\n}\n\n.pt-8{\n  padding-top:2rem;\n}\n\n.pt-16{\n  padding-top:4rem;\n}\n\n.pr-12{\n  padding-right:3rem;\n}\n\n.pb-2{\n  padding-bottom:0.5rem;\n}\n\n.pb-6{\n  padding-bottom:1.5rem;\n}\n\n.pb-20{\n  padding-bottom:5rem;\n}\n\n.pb-32{\n  padding-bottom:8rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.align-middle{\n  vertical-align:middle;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.text-5xl{\n  font-size:3rem;\n  line-height:1;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.uppercase{\n  text-transform:uppercase;\n}\n\n.leading-none{\n  line-height:1;\n}\n\n.leading-normal{\n  line-height:1.5;\n}\n\n.leading-relaxed{\n  line-height:1.625;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-300{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.text-pink-600{\n  --tw-text-opacity:1;\n  color:rgba(219, 39, 119, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-900:hover{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.placeholder-gray-400::-moz-placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-400:-ms-input-placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-400::placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n\n.opacity-75{\n  opacity:0.75;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-md:hover{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-lg:hover{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.focus\\:ring:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:w-4\\/12{\n    width:33.333333%;\n  }\n\n  .md\\:w-5\\/12{\n    width:41.666667%;\n  }\n\n  .md\\:justify-between{\n    justify-content:space-between;\n  }\n\n  .md\\:pr-12{\n    padding-right:3rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:static{\n    position:static;\n  }\n\n  .lg\\:-mt-64{\n    margin-top:-16rem;\n  }\n\n  .lg\\:mr-1{\n    margin-right:0.25rem;\n  }\n\n  .lg\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .lg\\:ml-auto{\n    margin-left:auto;\n  }\n\n  .lg\\:block{\n    display:block;\n  }\n\n  .lg\\:flex{\n    display:flex;\n  }\n\n  .lg\\:hidden{\n    display:none;\n  }\n\n  .lg\\:w-auto{\n    width:auto;\n  }\n\n  .lg\\:w-4\\/12{\n    width:33.333333%;\n  }\n\n  .lg\\:w-6\\/12{\n    width:50%;\n  }\n\n  .lg\\:flex-row{\n    flex-direction:row;\n  }\n\n  .lg\\:justify-start{\n    justify-content:flex-start;\n  }\n\n  .lg\\:bg-transparent{\n    background-color:transparent;\n  }\n\n  .lg\\:p-10{\n    padding:2.5rem;\n  }\n\n  .lg\\:py-2{\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n  }\n\n  .lg\\:pt-0{\n    padding-top:0px;\n  }\n\n  .lg\\:pt-12{\n    padding-top:3rem;\n  }\n\n  .lg\\:pt-24{\n    padding-top:6rem;\n  }\n\n  .lg\\:pb-64{\n    padding-bottom:16rem;\n  }\n\n  .lg\\:text-white{\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity));\n  }\n\n  .lg\\:text-gray-300{\n    --tw-text-opacity:1;\n    color:rgba(209, 213, 219, var(--tw-text-opacity));\n  }\n\n  .lg\\:hover\\:text-gray-300:hover{\n    --tw-text-opacity:1;\n    color:rgba(209, 213, 219, var(--tw-text-opacity));\n  }\n\n  .lg\\:shadow-none{\n    --tw-shadow:0 0 #0000;\n    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),o.locals={},n.exports=o}},[[168,6,1,7]]]);