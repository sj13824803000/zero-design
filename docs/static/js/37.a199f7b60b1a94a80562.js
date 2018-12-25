(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"+fre":function(t,e,o){"use strict";o.r(e);var n=o("L3G2"),a=o.n(n),i=o("Ds8w"),s=o.n(i),l=o("6ato"),r=o.n(l),u=o("2dj7"),c=o.n(u),d=o("Xtzg"),p=o.n(d),m=o("0dFU"),q=o.n(m),I=o("6cB7"),g=o.n(I);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(o){function n(){return r()(this,n),p()(this,(n.__proto__||s()(n)).apply(this,arguments))}return q()(n,o),c()(n,[{key:"componentDidMount",value:function(){var o=this.boxEl.querySelector(".z-open-modal-btn");o._scroll=e,o._render=function(){return t}}},{key:"render",value:function(){var t=this;return g.a.createElement("div",{ref:function(e){t.boxEl=e}},g.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),n}(g.a.Component)}}},KnEK:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-">移动端网页开发</h1>\n<p><code>zerod-admin-webpack</code>脚手架同样适用于移动端网页开发，但是要做一些相关的配置调整</p>\n<h2 id="-">首先</h2>\n<p>移动端开发不使用<code>antd</code>库，所以先把<code>antd</code>相关的去掉</p>\n<h2 id="-package-json-">在 package.json 中</h2>\n<pre><code class="language-js">{\n    &quot;dependencies&quot;: {\n        // &quot;antd&quot;: &quot;^3.6.1&quot;,去掉\n        &quot;axios&quot;: &quot;^0.18.0&quot;,\n        // &quot;babel-polyfill&quot;: &quot;^6.26.0&quot;,去掉\n        &quot;iscroll&quot;: &quot;^5.2.0&quot;,\n        &quot;less&quot;: &quot;^3.7.1&quot;,\n        &quot;less-loader&quot;: &quot;^4.1.0&quot;,\n        &quot;lodash&quot;: &quot;^4.17.10&quot;,\n        &quot;node-sass&quot;: &quot;^4.9.2&quot;,\n        //&quot;prismjs&quot;: &quot;^1.15.0&quot;,如果不需要代码高亮，也去掉这个\n        &quot;react&quot;: &quot;^16.4.0&quot;,\n        &quot;react-dom&quot;: &quot;^16.4.0&quot;,\n        &quot;react-loadable&quot;: &quot;^5.4.0&quot;,\n        &quot;react-router-dom&quot;: &quot;^4.3.1&quot;,\n        &quot;sass-loader&quot;: &quot;^7.0.3&quot;,\n        &quot;zerod&quot;: &quot;*&quot;\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-babelrc-">在.babelrc 中，把如下不需要用到的都去掉</h2>\n<pre><code class="language-js">        // [\n        //     &quot;import&quot;,\n        //     {\n        //         &quot;libraryName&quot;: &quot;antd&quot;,\n        //         &quot;style&quot;: true,\n        //         &quot;libraryDirectory&quot;: &quot;es&quot;\n        //     }\n        // ],\n        // [\n        //     &quot;import&quot;,\n        //     {\n        //         &quot;libraryName&quot;: &quot;zerod&quot;,\n        //         &quot;style&quot;: false,\n        //         &quot;libraryDirectory&quot;: &quot;components&quot;,\n        //         &quot;camel2DashComponentName&quot;: false\n        //     }\n        // ],\n        // [\n        //     &quot;prismjs&quot;,\n        //     {\n        //         &quot;languages&quot;: [&quot;javascript&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;json&quot;,&quot;yaml&quot;],\n        //         &quot;plugins&quot;: [&quot;line-numbers&quot;],\n        //         &quot;theme&quot;: &quot;tomorrow&quot;,\n        //         &quot;css&quot;: true\n        //     }\n        // ]</code></pre>\n<h2 id="-config-index-js-babel-polyfill-ant-design-false">在 config/index.js 中, 去掉 &quot;babel-polyfill&quot;,将&quot;ant.design&quot;改为 false</h2>\n<pre><code class="language-js">const config = {\n    //入口js\n    entry: {\n        app: [&quot;./src/main.js&quot;],\n    },\n    // entry: {\n    //     app: [&quot;babel-polyfill&quot;, &quot;./src/main.js&quot;],\n    // },\n    copyName: shareName,\n    //babel-loader 要包含的文件夹是哪些\n    &quot;babel-includes&quot;: [\n        ...new Set([\n            &quot;src&quot;,\n            &quot;node_modules/zerod&quot;,\n            `node_modules/${shareName}`,\n            &quot;node_modules/webpack-dev-server/client&quot;,\n        ]),\n    ],\n    //是否使用了ant design 组件库，管理theme，当用于微信等移动端开发时请设置为false\n    &quot;ant.design&quot;: false,\n    // &quot;ant.design&quot;: true,</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-postcssrc-js-viewportwidth-viewportheight-">移动端自适应方案：在.postcssrc.js 中，用如下 代码框的配置 替换全部，再修改 viewportWidth 和 viewportHeight 对应设计稿的宽度和高度</h2>\n<h3 id="-rem-rem-vw-vh-vm-">移动端自适应，以前用rem加媒体查询来做自适应，如今，rem方式也完成了它的历史使命，改用vw、vh 、vm等视窗单位</h3>\n<h3 id="-px-postcss-px-">但是我们在项目依然用<code>px</code>单位来写，使用postcss的插件自动将px转成视窗单位</h3>\n<h3 id="-">最后还要安装插件包：</h3>\n<p><code>npm install postcss-aspect-ratio-mini postcss-write-svg postcss-preset-env postcss-px-to-viewport cssnano cssnano-preset-advanced --save-dev</code></p>\n<pre><code class="language-js">// 容器适配，可以使用vw\n// 文本的适配，可以使用vw\n// 大于1px的边框、圆角、阴影都可以使用vw\n// 内距和外距，可以使用vw\n\nmodule.exports = {\n    plugins: {\n        &quot;postcss-import&quot;: {},\n        &quot;postcss-url&quot;: {},\n        &quot;postcss-aspect-ratio-mini&quot;: {},\n        &quot;postcss-write-svg&quot;: { utf8: false },\n        &quot;postcss-preset-env&quot;: { stage: 0, autoprefixer: { grid: true } },\n        &quot;postcss-px-to-viewport&quot;: {\n            viewportWidth: 419, // (Number) 设计稿的宽度（标准像素）.\n            viewportHeight: 741, // (Number) 设计稿的高度（标准像素）.\n            unitPrecision: 3, // // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）\n            viewportUnit: &quot;vw&quot;, //指定需要转换成的视窗单位，建议使用vw\n            selectorBlackList: [&quot;.not-vw&quot;, /^.weui-/, &#39;[class^=&quot;weui&quot;]&#39;], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名\n            minPixelValue: 1, // 于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值\n            mediaQuery: false, // 允许在媒体查询中转换`px`\n        },\n        // &quot;postcss-viewport-units&quot;: {},\n        cssnano: {\n            preset: &quot;advanced&quot;,\n            autoprefixer: false,\n            &quot;postcss-zindex&quot;: false,\n        },\n        // to edit target browsers: use &quot;browserslist&quot; field in package.json\n        // &quot;autoprefixer&quot;: {}\n    },\n};\n</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-index-html-">在 index.html 中,用如下模板替换（这个模板只是参考）</h2>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n\n&lt;head&gt;\n  &lt;meta charset=&quot;utf-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;&gt;\n  &lt;meta charset=&quot;utf-8&quot;&gt;\n  &lt;meta content=&quot;yes&quot; name=&quot;apple-mobile-web-app-capable&quot;&gt;\n  &lt;meta content=&quot;yes&quot; name=&quot;apple-touch-fullscreen&quot;&gt;\n  &lt;meta content=&quot;telephone=no,email=no&quot; name=&quot;format-detection&quot;&gt;\n  &lt;title&gt;项目标题&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;div id=&quot;app&quot; class=&quot;app-content&quot;&gt;\n    &lt;!-- css  &amp;&amp; js加载前的loading --&gt;\n    &lt;div style=&quot;position: fixed;font-size: 16px;z-index: 5000;width: 7.6em;min-height: 7.6em;top: 180px;left: 50%;margin-left: -3.8em;background: rgba(40, 40, 40, 0.75);text-align: center;border-radius: 5px;color: #ffffff;&quot;&gt;\n      &lt;i style=&quot;margin: 30px 0 0; width: 38px;height: 38px;vertical-align: middle;display: inline-block;background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=)\n      no-repeat;background-size: 100%;&quot;&gt;&lt;/i&gt;\n      &lt;p style=&quot;padding:0;margin-top: 8px;&quot;&gt;加载中...&lt;/p&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;!-- built files will be auto injected --&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;</code></pre>\n'},Ncpu:function(t,e,o){"use strict";o.r(e);var n=o("ebhq"),a=o("KnEK"),i=o.n(a),s=n.a.AmdDocHOC;e.default=s(i.a)},ebhq:function(t,e,o){"use strict";var n=o("Q2cO"),a=o.n(n),i=o("jjl2"),s={},l=[];i.keys().forEach(function(t){var e=void 0;try{e=i(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":a()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var o=e.name;if("string"!=typeof o)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(o))throw Error(t+":name属性请以A开头HOC结尾");if(o=o.trim(),l.includes(o))throw Error(t+":"+o+"此HOC名称已被使用");l.push(o),s[o]=e.HOC}),e.a=s},jjl2:function(t,e,o){var n={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=i(t);return o(e)}function i(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="jjl2"},pnNO:function(t,e,o){"use strict";o.r(e);var n=o("unDg"),a=o.n(n),i=o("Ds8w"),s=o.n(i),l=o("6ato"),r=o.n(l),u=o("2dj7"),c=o.n(u),d=o("Xtzg"),p=o.n(d),m=o("0dFU"),q=o.n(m),I=o("6cB7"),g=o.n(I),v=o("VUem"),h=o.n(v),f=(o("T9cD"),o("tmCC")),y=o("tW/l"),b=o.n(y);var w=Object(f.s)();e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var o=function(o){function n(){var t,e,o,i;r()(this,n);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return e=o=p()(this,(t=n.__proto__||s()(n)).call.apply(t,[this].concat(u))),o.renderEls=[],o.state={navs:[],closeModaled:!0},o.setNavs=function(){var t=[],e=o.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-o.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&o.setState({navs:t},function(){if(o.bindScrollEvent(),o.navEl&&o.navContentEl){var t=f.z.BuildScroll;o.navScroollInstance=new t(o.navEl,{scrollbars:"custom"}),f.z.listenDivSizeChange(o.navEl,o.navScroollInstance.refresh),f.z.listenDivSizeChange(o.navContentEl,o.navScroollInstance.refresh)}})},o.bindScrollEvent=function(){o.scrollInstance.scroll.on("scrollEnd",function(){if(!o.unmounted){var t=-o.scrollInstance.scroll.y;o.state.navs.forEach(function(t){t.active=!1});for(var e=o.state.navs.length,n=0;n<e;n++){var i=o.state.navs[n];if(t>=i.el.offsetTop-120){if(!(n<e-1)){i.active=!0;break}var s=o.state.navs[n+1];if(s&&t<s.el.offsetTop-120){i.active=!0;break}}}o.setState({navs:[].concat(a()(o.state.navs))})}})},o.navScrollTo=function(t){o.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},i=e,p()(o,i)}return q()(n,o),c()(n,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){h.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,o=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(o).forEach(function(o){var n=function(t){var e={};if(t.dataset)return t.dataset;for(var o=0;o<t.attributes.length;o++){var n=t.attributes[o].nodeName;if(/^data-\w+$/.test(n)){var a=t.attributes[o].nodeValue;e[n.match(/^data-(\w+)/)[1]]=a}}return e}(o);if(e&&"function"==typeof e[n.render]){var a=o.nextElementSibling;a=a&&"pre"==a.localName?a:null;var i=e[n.render]();t.renderEls.push(o),h.a.render(i,o,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var i=document.createElement("div");i.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",i.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=n.title?n.title:"",e.appendChild(l),a&&e.appendChild(s),t.appendChild(e),a&&i.appendChild(a),t.appendChild(i),o.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var o=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:o,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,o),setTimeout(function(){t.props.showModalLoading(!1,o)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var o=e.target.dataset.path;"string"==typeof o&&t.props.$router.history.push(o)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return g.a.createElement(f.m.Template,null,g.a.createElement(w,{pageHeader:{show:!1},hasBodyPadding:!1},g.a.createElement("div",{className:"z-panel "+b.a["z-md-doc"],ref:function(t){return e.mdEl=t}},g.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},g.a.createElement(f.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?h.a.createPortal(g.a.createElement("div",{className:b.a["z-nav-box"],ref:function(t){return e.navEl=t}},g.a.createElement("div",{ref:function(t){return e.navContentEl=t}},g.a.createElement("section",null,this.state.navs.map(function(t,o){return g.a.createElement("div",{title:t.name,className:b.a["z-nav"]+" "+(t.active?b.a.active:""),key:o,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),n}(g.a.Component);return f.i.setConsumer(o)}}}}]);