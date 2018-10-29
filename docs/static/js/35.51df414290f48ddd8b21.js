(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"+fre":function(e,o,t){"use strict";t.r(o);t("89bW");var n=t("XXxv"),a=t("Ds8w"),l=t.n(a),r=t("6ato"),s=t.n(r),c=t("2dj7"),i=t.n(c),d=t("Xtzg"),u=t.n(d),p=t("0dFU"),m=t.n(p),h=t("ZS5U"),z=t.n(h);o.default={name:"AshowDemoHOC",HOC:function(e,o){return function(t){function a(){return s()(this,a),u()(this,(a.__proto__||l()(a)).apply(this,arguments))}return m()(a,t),i()(a,[{key:"componentDidMount",value:function(){var t=this.boxEl.querySelector(".z-open-modal-btn");t._scroll=o,t._render=function(){return e}}},{key:"render",value:function(){var e=this;return z.a.createElement("div",{ref:function(o){e.boxEl=o}},z.a.createElement(n.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(z.a.Component)}}},"3dgd":function(e,o,t){"use strict";t.r(o);t("ZS5U");var n=t("ebhq"),a=t("KoJr"),l=t.n(a),r=n.a.AmdDocHOC;o.default=r(l.a)},KoJr:function(e,o){e.exports='<h1 id="-ztool">工具库 zTool</h1>\n<p><code>zTool</code>积累了一些通用的工具函数，包括对需要对 DOM 元素操作的一些函数</p>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-httpajax">zTool.httpAjax</h2>\n<p>对<code>axios</code>(优秀的 ajax 库)的二次封装，并统一了<code>get</code>、<code>post</code>、<code>put</code>、<code>delete</code>、<code>patch</code>请求方式的传参方式</p>\n<p>zTool.httpAjax()返回一个 Promise 对象,当<code>noCallback === false</code>时,默认对响应结果的处理：</p>\n<p>只有 <code>result.data.code === 0</code> 时才会进入<code>then((re)=&gt;{})</code>回调，其他情况都会进入<code>catch((re)=&gt;{})</code>回调,并且<code>then((re)=&gt;{})</code>和<code>catch((re)=&gt;{})</code>回调中的参数<code>re</code>其实是<code>result.data</code></p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {string} method //get || post || put    .....\n * @param {string} url //接口url\n * @param {object} query //接口参数，key，value 对应\n * @param {object} config //axios的config参数，更多请看https://github.com/axios/axios\n * @param {boolean} noCallback //默认false，因为httpAjax函数默认会有对特殊请求结果的统一处理，noCallback=true时，就是不需要默认的统一处理\n */\n//例：\nzTool\n    .httpAjax(&quot;get&quot;, &quot;/webapi/v1.0/config/center/deleteServiceInfo&quot;, { id: &quot;41&quot; })\n    .then((re) =&gt; {})\n    .then((re) =&gt; {})\n    .catch((re) =&gt; {})\n    .finally(() =&gt; {});\nzTool.httpAjax(&quot;post&quot;, &quot;/webapi/v1.0/config/center/updateConfigProperty&quot;, { id: &quot;41&quot;, name: &quot;我们的故事&quot; });</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-isurl">zTool.isUrl</h2>\n<p>判断是否 url</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {string} url //\n */\nzTool.isUrl(&quot;https://github.com/axios/axios&quot;); // true</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-parsequerystring">zTool.parseQueryString</h2>\n<p>获取 url 问号后面的参数，并转成对象</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {string} url //\n */\nzTool.parseQueryString(&quot;http://my.com/select?id=100&amp;selected=1&quot;); //{id:100,selected:1}\nzTool.parseQueryString(&quot;?id=100&amp;selected=1&quot;); //{id:100,selected:1}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-filterquery">zTool.filterQuery</h2>\n<p>只取一个对象中的某些属性</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {array}  //\n * @param {object}  //\n */\nzTool.filterQuery([&quot;name&quot;, &quot;selected&quot;], { name: &quot;萧雨&quot;, selected: false, id: &quot;85&quot;, woch: &quot;犹豫&quot; }); //得到新对象： {name:&quot;萧雨&quot;,selected:false}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-buildscroll">zTool.BuildScroll</h2>\n<p><code>zTool.BuildScroll</code> 是一个构造函数，是对<a href="http://iscrolljs.com/#intro" target="_blank">漂亮滚动条插件 ISroll</a>的 <code>new IScroll(el,opt)</code> 的二次封装,并且解决嵌套滚动条的问题，且对 options 有一些默认值</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //需要生成滚动条的盒子\n * @param {object} opttions //IScroll的配置，更多请看http://iscrolljs.com/#intro\n */\n//scroollInstance有三个属性:\n//scroollInstance.scroll：其实是new IScroll(el,opt)的实例，\n//scroollInstance.refresh:更新滚动条的函数，\n//scroollInstance.nextScrollToTop：布尔值,默认false，下次调用refresh()时是否滚动条回到顶部\nconst scroollInstance = new zTool.BuildScroll(el, opt);\n\n// 结合zTool.listenDivSizeChange达到自动更新滚动条的效果\nclass My extends React.Component {\n    componentDidMount() {\n        this.scroollInstance = new zTool.BuildScroll(this.bodyEl, { scrollbars: &quot;custom&quot; });\n        zTool.listenDivSizeChange(this.bodyEl, this.scroollInstance.refresh);\n        zTool.listenDivSizeChange(this._contentEl, this.scroollInstance.refresh);\n    }\n    render() {\n        return (\n            &lt;section ref={(el) =&gt; (this.bodyEl = el)}&gt;\n                &lt;div ref={(el) =&gt; (this._contentEl = el)} style={{ position: &quot;relative&quot; }}&gt;\n                    &lt;div&gt;{this.props.children}&lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/section&gt;\n        );\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-listendivsizechange">zTool.listenDivSizeChange</h2>\n<p>监听盒子（div）尺寸变化 ,只对 section，div 等块状元素有效，对 textarea 无效</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //需要生成滚动条的盒子\n * @param {function} callback //回调函数\n */\nzTool.listenDivSizeChange(document.querySelector(&quot;#id&quot;), ()=&gt;{\n    //盒子高度/宽度变化了\n}));</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-scrolldisablewheel">zTool.scrollDisableWheel</h2>\n<p>用于解决外层使用了<code>zTool.BuildScroll</code>创建了滚动条，内部存在如：<code>textarea</code>出现滚动条时滚轮对<code>textarea</code>无效问题</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //textarea等\n */\nzTool.scrollDisableWheel(document.querySelector(&quot;#textarea&quot;));</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-gennonduplicateid">zTool.GenNonDuplicateID</h2>\n<p>用于随机产生不重复 id</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {number} randomLength //时间戳之前的随机个数，默认8\n */\nzTool.GenNonDuplicateID(8);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-eetostring">zTool.EetoString</h2>\n<p>科学计数法转字符串,(数字位数过大，浏览器会以科学计数法方式显示，我们想要显示完整的数字就转成字符串来显示)</p>\n<pre><code class="language-jsx">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {number} num //数字\n */\nzTool.EetoString(6.5e8); //&quot;650000000&quot;\nzTool.EetoString(6.5e-7); //&quot;0.65000000&quot;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-loadfilelist">zTool.loadFileList</h2>\n<p>动态加载 .js、.css 的函数，支持多个文件同时加载，支持多个文件按顺序加载</p>\n<p>如果是&quot;http&quot; | &quot;https&quot; 开头,但没有.js|.css后缀的路径只支持加载js</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {array} files //js、css路径的数组，\n * @param {boolean} isSequence //是否按files数组的顺序加载，默认false\n */\n//例：\nzTool\n    .loadFileList([\n        &quot;./static/introJs/introjs.min.css&quot;,\n        &quot;./static/introJs/themes/introjs-flattener.css&quot;,\n        &quot;./static/introJs/intro.min.js&quot;,\n    ])\n    .then(() =&gt; {\n        //所有文件加载完的回调\n    });</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-datatypetest">zTool.dataTypeTest</h2>\n<p>检测数据类型，返回对应数据类型的名称</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n\nzTool.dataTypeTest(54); // number\nzTool.dataTypeTest(&quot;you&quot;); // string\nzTool.dataTypeTest({ name: &quot;bun&quot; }); // object\nzTool.dataTypeTest([54, &quot;47&quot;]); // array\nzTool.dataTypeTest(true); // boolean\nzTool.dataTypeTest(new Date(&quot;2018-08-07&quot;)); // date\nzTool.dataTypeTest(null); // null\nzTool.dataTypeTest(undefined); // undefined\nzTool.dataTypeTest(function() {}); // function\nzTool.dataTypeTest(new Symbol()); // symbol\nzTool.dataTypeTest(new Set()); // set\nzTool.dataTypeTest(new Map()); // map</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-deepcopy">zTool.deepCopy</h2>\n<p>深度复制对象或数组</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n\nconst newArray = zTool.deepCopy([{ name: &quot;1&quot;, children: [{ name: &quot;1-1&quot; }] }]);\nconst newObj = zTool.deepCopy({ name: &quot;1&quot;, children: [{ name: &quot;1-1&quot; }] });</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-arrayfilterby">zTool.arrayFilterBy</h2>\n<p>根据条件过滤数组，只能过滤两种情况：一、数组里面全是对象，二、数组里面全是字符串或者其他类型的</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {array} array //原数组\n * @param {} property //过滤条件\n */\n//用法一如：\nvar arr = [{ name: &quot;水果&quot;, value: 1 }, { name: &quot;蔬菜&quot;, value: 2 }];\nzTool.arrayFilterBy(arr, { value: 2 }); //得到[{name:&quot;蔬菜&quot;,value:2}]\n//用法二如：\nvar arr = [1, 2, 3, 2, 4, 3, 5, 3];\nzTool.arrayFilterBy(arr, 3); //得到 [3,3,3]\n//用法三如：\nvar arr = [{ name: &quot;水果&quot;, value: 1 }, { name: &quot;蔬菜&quot;, value: 2 }, { name: &quot;草莓&quot;, value: 4 }];\nzTool.arrayFilterBy(arr, [{ value: 2 }, { value: 4 }]); //得到[{name:&quot;蔬菜&quot;,value:2},{name:&quot;草莓&quot;,value:4}]\n//用法四如：\nvar arr = [1, 2, 3, 2, 4, 3, 5, 3];\narrayFilterBy(arr, [3, 2]); //得到 [3,3,3,2,2]</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-on">zTool.on</h2>\n<p>事件绑定，同 <code>element.addEventListener(event,handle,false)</code>;</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //绑定事件的DOM\n * @param {string} event //事件名，如&quot;click&quot;\n * @param {function} handler //事件回调\n */\n//例：\nzTool.on(document.querySelector(&quot;#id&quot;), &quot;click&quot;, (e) =&gt; {\n    //回调\n});</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-off">zTool.off</h2>\n<p>移除事件，同 <code>element.removeEventListener(event,handle,false)</code>，参数同<code>zTool.on</code></p>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-once">zTool.once</h2>\n<p>绑定一次性事件，参数同<code>zTool.on</code></p>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-hasclass">zTool.hasClass</h2>\n<p>检测某个 DOM 元素是否存在某个样式类名,返回<code>boolean</code>值</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //绑定事件的DOM\n * @param {string} clasName //样式类名\n */\n//例：\nconst hasFLoat = zTool.hasClass(document.querySelector(&quot;#id&quot;), &quot;z-float&quot;);\nconsole.log(hasFLoat);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-addclass">zTool.addClass</h2>\n<p>给某个 DOM 元素添加样式类名</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //绑定事件的DOM\n * @param {string} clasName //样式类名\n */\n//例：\nzTool.addClass(document.querySelector(&quot;#id&quot;), &quot;z-float z-font-size-20&quot;);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-removeclass">zTool.removeClass</h2>\n<p>给某个 DOM 元素移除样式类名</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //绑定事件的DOM\n * @param {string} clasName //样式类名\n */\n//例：\nzTool.removeClass(document.querySelector(&quot;#id&quot;), &quot;z-font-size-20&quot;);</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-getstyle">zTool.getStyle</h2>\n<p>获取某个元素的某个样式</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //绑定事件的DOM\n * @param {string} styleName //样式名\n */\n//例：\nconst height = zTool.getStyle(document.querySelector(&quot;#id&quot;), &quot;height&quot;); // 100px</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="ztool-setstyle">zTool.setStyle</h2>\n<p>给某个元素设置 style</p>\n<pre><code class="language-js">import { zTool } from &quot;zerod&quot;;\n/**\n *\n * @param {HTMLElement} el //绑定事件的DOM\n * @param {string} styleName //样式名\n */\n//例：\nzTool.setStyle(document.querySelector(&quot;#id&quot;), &quot;height&quot;, &quot;500px&quot;);</code></pre>\n'},ebhq:function(e,o,t){"use strict";var n=t("Q2cO"),a=t.n(n),l=t("jjl2"),r={},s=[];l.keys().forEach(function(e){var o=void 0;try{o=l(e).default}catch(o){throw Error(e+":"+o)}if(void 0===o||"object"!==(void 0===o?"undefined":a()(o)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("function"!=typeof o.HOC)throw Error(e+":HOC有误");var t=o.name;if("string"!=typeof t)throw Error(e+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(t))throw Error(e+":name属性请以A开头HOC结尾");if(t=t.trim(),s.includes(t))throw Error(e+":"+t+"此HOC名称已被使用");s.push(t),r[t]=o.HOC}),o.a=r},jjl2:function(e,o,t){var n={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(e){var o=l(e);return t(o)}function l(e){var o=n[e];if(!(o+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o}a.keys=function(){return Object.keys(n)},a.resolve=l,e.exports=a,a.id="jjl2"},pnNO:function(e,o,t){"use strict";t.r(o);var n=t("unDg"),a=t.n(n),l=t("Ds8w"),r=t.n(l),s=t("6ato"),c=t.n(s),i=t("2dj7"),d=t.n(i),u=t("Xtzg"),p=t.n(u),m=t("0dFU"),h=t.n(m),z=t("ZS5U"),v=t.n(z),q=t("FY2y"),f=t.n(q),g=(t("T9cD"),t("tmCC")),T=t("tW/l"),y=t.n(T);var E=Object(g.r)();o.default={name:"AmdDocHOC",HOC:function(e,o){var t=function(t){function n(){var e,o,t,l;c()(this,n);for(var s=arguments.length,i=Array(s),d=0;d<s;d++)i[d]=arguments[d];return o=t=p()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(i))),t.renderEls=[],t.state={navs:[],closeModaled:!0},t.setNavs=function(){var e=[],o=t.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(o).forEach(function(o){e.push({name:o.dataset.title?o.dataset.title:o.nextElementSibling.innerText,el:o.nextElementSibling,active:-t.scrollInstance.scroll.y==o.nextElementSibling.offsetTop-24})}),e.length&&t.setState({navs:e},function(){if(t.bindScrollEvent(),t.navEl&&t.navContentEl){var e=g.x.BuildScroll;t.navScroollInstance=new e(t.navEl,{scrollbars:"custom"}),g.x.listenDivSizeChange(t.navEl,t.navScroollInstance.refresh),g.x.listenDivSizeChange(t.navContentEl,t.navScroollInstance.refresh)}})},t.bindScrollEvent=function(){t.scrollInstance.scroll.on("scrollEnd",function(){if(!t.unmounted){var e=-t.scrollInstance.scroll.y;t.state.navs.forEach(function(e){e.active=!1});for(var o=t.state.navs.length,n=0;n<o;n++){var l=t.state.navs[n];if(e>=l.el.offsetTop-120){if(!(n<o-1)){l.active=!0;break}var r=t.state.navs[n+1];if(r&&e<r.el.offsetTop-120){l.active=!0;break}}}t.setState({navs:[].concat(a()(t.state.navs))})}})},t.navScrollTo=function(e){t.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},l=o,p()(t,l)}return h()(n,t),d()(n,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(e){f.a.unmountComponentAtNode(e)})}},{key:"componentDidMount",value:function(){var e=this,t=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(t).forEach(function(t){var n=function(e){var o={};if(e.dataset)return e.dataset;for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].nodeName;if(/^data-\w+$/.test(n)){var a=e.attributes[t].nodeValue;o[n.match(/^data-(\w+)/)[1]]=a}}return o}(t);if(o&&"function"==typeof o[n.render]){var a=t.nextElementSibling;a=a&&"pre"==a.localName?a:null;var l=o[n.render]();e.renderEls.push(t),f.a.render(l,t,function(){var e=document.createElement("div");e.className="z-demo-footer";var o=document.createElement("div");o.className="z-demo-code-btn z-flex-space-between";var l=document.createElement("div");l.className="z-demo-code";var r=document.createElement("img");r.addEventListener("click",function(){r.src=r.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",l.style.height=r.open?"0px":"auto",r.open=!r.open},!1),r.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=n.title?n.title:"",o.appendChild(s),a&&o.appendChild(r),e.appendChild(o),a&&l.appendChild(a),e.appendChild(l),t.appendChild(e)})}}),this.mdEl.addEventListener("click",function(o){"string"==typeof o.target.className&&o.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof o.target._render&&e.props.showRightModal({show:!0,modal:o.target._modal?o.target._modal:"mainModal",content:o.target._render(),scroll:o.target._scroll,onTransitionend:function(o){e.setState({closeModaled:!o})}})},10)},!1),this.mdEl.addEventListener("click",function(o){"string"==typeof o.target.className&&o.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==o.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var t=o.target._modal?o.target._modal:"mainModal";e.props.showRightModal({show:!0,modal:t,content:null,scroll:!0,onTransitionend:function(o){e.setState({closeModaled:!o})}}),e.props.showModalLoading(!0,t),setTimeout(function(){e.props.showModalLoading(!1,t)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var o=this;return v.a.createElement(g.l.Template,null,v.a.createElement(E,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+y.a["z-md-doc"],ref:function(e){return o.mdEl=e}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(g.d,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?f.a.createPortal(v.a.createElement("div",{className:y.a["z-nav-box"],ref:function(e){return o.navEl=e}},v.a.createElement("div",{ref:function(e){return o.navContentEl=e}},v.a.createElement("section",null,this.state.navs.map(function(e,t){return v.a.createElement("div",{title:e.name,className:y.a["z-nav"]+" "+(e.active?y.a.active:""),key:t,onClick:function(){o.navScrollTo(e)}},e.name)})))),document.body):null)}}]),n}(v.a.Component);return g.i.setConsumer(t)}}}}]);