(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("kSOj"),l=n.n(a),o=n("Ds8w"),s=n.n(o),i=n("6ato"),d=n.n(i),c=n("2dj7"),r=n.n(c),m=n("Xtzg"),u=n.n(m),g=n("0dFU"),v=n.n(g),p=n("6cB7"),f=n.n(p);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return d()(this,a),u()(this,(a.__proto__||s()(a)).apply(this,arguments))}return v()(a,n),r()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(l.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(f.a.Component)}}},Iajx:function(t,e,n){"use strict";n.r(e);var a=n("Xmyv"),l=n.n(a),o=n("ioOQ"),s=n.n(o),i=n("6cB7"),d=n.n(i),c=n("ebhq"),r=n("irHV"),m=n.n(r),u=c.a.AmdDocHOC;e.default=u(m.a,{"text-color":function(){return d.a.createElement("div",{className:"z-flex-space-between"},["z-text-blue","z-text-light-blue","z-text-green","z-text-yellow","z-text-red","z-text-black","z-text-light-black","z-text-gray","z-text-light-gray"].map(function(t,e){return d.a.createElement("div",{className:t,key:e},t)}))},"default-panel":function(){return d.a.createElement(l.a,{gutter:40},d.a.createElement(s.a,{span:12},d.a.createElement("div",{className:"z-panel"},d.a.createElement("div",{className:"z-panel-heading"},"标题"),d.a.createElement("div",{className:"z-panel-body"},"无边框面板"))),d.a.createElement(s.a,{span:12},d.a.createElement("div",{className:"z-panel is-panel-border"},d.a.createElement("div",{className:"z-panel-heading"},"标题"),d.a.createElement("div",{className:"z-panel-body"},"有边框面板"))))},"default-info":function(){return d.a.createElement("div",null,d.a.createElement("dl",{className:"z-info"},d.a.createElement("dt",{className:"z-info-left"},d.a.createElement("span",{className:"z-margin-bottom-10"},"标题1")),d.a.createElement("dd",{className:"z-info-right"},d.a.createElement("span",{className:"z-margin-bottom-10"},"为了使我们有更高的可控性，即自由控制顶点位置，WebGL把这个权力交给了我们，这就是可编程渲染管线（不用理解）。"))),d.a.createElement("dl",{className:"z-info"},d.a.createElement("dt",{className:"z-info-left"},d.a.createElement("span",{className:"z-margin-bottom-10"},"标题2")),d.a.createElement("dd",{className:"z-info-right"},d.a.createElement("span",{className:"z-margin-bottom-10"},"我们引入了一个新的名词，叫“顶点着色器”"))))}})},ebhq:function(t,e,n){"use strict";var a=n("Q2cO"),l=n.n(a),o=n("jjl2"),s={},i=[];o.keys().forEach(function(t){var e=void 0;try{e=o(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":l()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),i.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");i.push(n),s[n]=e.HOC}),e.a=s},irHV:function(t,e){t.exports='<h1 id="-">通用样式</h1>\n<p>积累了一些通用的样式类</p>\n<p><code>zerod-admin-webpack</code> 脚手架中的<code>src/app.scss</code>已经全部引入 <code>@import &#39;~zerod/index.scss&#39;;</code>，所以可以直接使用如下的所有的样式类名</p>\n<div class="z-doc-titles"></div>\n\n<h2 id="-">字体颜色</h2>\n<div class="z-demo-box" data-render="text-color" data-title="定义了一些字体颜色"></div>\n\n<pre><code class="language-html">&lt;div className=&quot;z-text-blue&quot;&gt;z-text-blue&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-">面板</h2>\n<div class="z-demo-box" data-render="default-panel" data-title="默认面板"></div>\n\n<pre><code class="language-html">// 无边框面板\n&lt;div className=&quot;z-panel&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body&quot;&gt;无边框面板&lt;/div&gt;\n&lt;/div&gt;\n// 有边框面板\n&lt;div className=&quot;z-panel is-panel-border&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n&lt;/div&gt;\n\n// 有边框+只有上圆角\n&lt;div className=&quot;z-panel is-panel-border is-radius-top&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n&lt;/div&gt;\n// 有边框+只有下圆角\n&lt;div className=&quot;z-panel is-panel-border is-radius-bottom&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body&quot;&gt;有边框面板&lt;/div&gt;\n&lt;/div&gt;\n\n// 面板body全无padding\n&lt;div className=&quot;z-panel&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body is-no-padding&quot;&gt;内容&lt;/div&gt;\n&lt;/div&gt;\n// 面板body左右无padding\n&lt;div className=&quot;z-panel&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body is-no-padding-sides&quot;&gt;内容&lt;/div&gt;\n&lt;/div&gt;\n// 面板body上下无padding\n&lt;div className=&quot;z-panel&quot;&gt;\n    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n    &lt;div className=&quot;z-panel-body is-no-padding-vertical&quot;&gt;内容&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="z-info">z-info</h2>\n<div class="z-demo-box" data-render="default-info" data-title="信息面板"></div>\n\n<pre><code class="language-html">&lt;div&gt;\n    &lt;dl className=&quot;z-info&quot;&gt;\n        &lt;dt className=&quot;z-info-left&quot;&gt;&lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题1&lt;/span&gt;&lt;/dt&gt;\n        &lt;dd className=&quot;z-info-right&quot;&gt;\n            &lt;span className=&quot;z-margin-bottom-10&quot;&gt;为了使我们有更高的可控性，即自由控制顶点位置，WebGL把这个权力交给了我们，这就是可编程渲染管线（不用理解）。&lt;/span&gt;\n        &lt;/dd&gt;\n    &lt;/dl&gt;\n    &lt;dl className=&quot;z-info&quot;&gt;\n        &lt;dt className=&quot;z-info-left&quot;&gt;&lt;span className=&quot;z-margin-bottom-10&quot;&gt;标题2&lt;/span&gt;&lt;/dt&gt;\n        &lt;dd className=&quot;z-info-right&quot;&gt;&lt;span className=&quot;z-margin-bottom-10&quot;&gt;我们引入了一个新的名词，叫“顶点着色器”&lt;/span&gt;&lt;/dd&gt;\n    &lt;/dl&gt;\n&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-">元素浮动</h2>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-float.scss&#39;;</code></p>\n<pre><code class="language-html">&lt;div className=&quot;z-clear-fix&quot;&gt; //清除浮动\n    &lt;div className=&quot;z-float-left&quot;&gt;&lt;/div&gt; //左浮动\n    &lt;div className=&quot;z-float-right&quot;&gt;&lt;/div&gt; //右浮动\n&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-">字体大小</h2>\n<p>定义了 12-100px 的字体大小</p>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-font-size.scss&#39;;</code></p>\n<pre><code class="language-html">&lt;div className=&quot;z-font-size-16&quot;&gt;16像素大小&lt;/div&gt;\n&lt;div className=&quot;z-font-size-16-important&quot;&gt;权重优先&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-">文本对齐</h2>\n<p>定义了文本对齐的 clasName</p>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-text-align.scss&#39;;</code></p>\n<pre><code class="language-html">&lt;div className=&quot;z-text-left&quot;&gt;文本居左&lt;/div&gt;\n&lt;div className=&quot;z-text-center&quot;&gt;文本居中&lt;/div&gt;\n&lt;div className=&quot;z-text-right&quot;&gt;文本居右&lt;/div&gt;\n&lt;div className=&quot;z-text-underline&quot;&gt;文字下划线&lt;/div&gt;\n&lt;div className=&quot;z-text-underline-hover&quot;&gt;文字hover后显示下划线&lt;/div&gt;\n&lt;div className=&quot;z-vertical-top&quot;&gt;文字顶部对齐&lt;/div&gt;\n&lt;div className=&quot;z-vertical-middle&quot;&gt;文字中间对齐&lt;/div&gt;\n&lt;div className=&quot;z-vertical-bottom&quot;&gt;文字底部对齐&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="margin-padding-">margin 和 padding 值</h2>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-margin-padding.scss&#39;;</code></p>\n<p>定义了 0-100px 的 margin 和 padding 值的 className</p>\n<p>如需提高权重，加后缀：&quot;-important&quot;</p>\n<p><code>z-margin-10</code> : 四个方位 margin 值为 10px</p>\n<p><code>z-margin-left-10</code> : margin-left 为 10px</p>\n<p><code>z-margin-top-10</code> : margin-top 为 10px</p>\n<p><code>z-margin-right-10</code> : margin-right 为 10px</p>\n<p><code>z-margin-bottom-10</code> : margin-bottom 为 10px</p>\n<p><code>z-margin-bottom-10-important</code> :权重优先</p>\n<p>同理<code>padding</code>值 ：</p>\n<p><code>z-padding-10</code> : 四个方位 padding 值为 10px</p>\n<div class="z-doc-titles"></div>\n\n<h2 id="flex-">flex 盒子(更多请了解弹性布局)</h2>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-flex.scss&#39;;</code></p>\n<pre><code class="language-html">//z-flex-1只到z-flex-5\n&lt;div className=&quot;z-flex&quot;&gt; //启用弹性盒子\n    &lt;div className=&quot;z-flex-1&quot;&gt;&lt;/div&gt; //占比1\n    &lt;div className=&quot;z-flex-2&quot;&gt;&lt;/div&gt; //占比2\n&lt;/div&gt;\n\n//盒子子元素水平居中\n&lt;div className=&quot;z-flex-items-h-center&quot;&gt;\n    //内部子元素呈水平居中\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n//盒子子元素垂直居中\n&lt;div className=&quot;z-flex-items-v-center&quot;&gt;\n    //内部子元素呈垂直居中\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n//盒子子元素水平垂直居中\n&lt;div className=&quot;z-flex-items-center&quot;&gt;\n    //内部子元素呈水平垂直居中\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n//子元素自身高度跟随内容\n&lt;div className=&quot;z-flex&quot;&gt; //父元素\n    &lt;div&gt;子元素默认高度占父元素100%&lt;/div&gt;\n    &lt;div className=&quot;z-flex-self-baseline&quot;&gt;子元素高度跟随内容高度&lt;/div&gt;\n&lt;/div&gt;\n\n//子元素 两端对齐\n&lt;div className=&quot;z-flex-space-between&quot;&gt; //父元素\n    &lt;div&gt;最左&lt;/div&gt;\n    &lt;div&gt;中间&lt;/div&gt;\n    &lt;div&gt;最右&lt;/div&gt;\n&lt;/div&gt;\n\n//子元素自身垂直居中\n&lt;div className=&quot;z-flex&quot;&gt; //父元素\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div className=&quot;z-flex-self-center&quot;只有我是垂直居中&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="-em-">定义了 em 单位的字体缩进</h2>\n<p>1-10em 单位的字体缩进</p>\n<p>单独引入：<code>@import &#39;~zerod/scss/cmomon/z-text-indent.scss&#39;;</code></p>\n<p>如需提高权重，加后缀：&quot;-important&quot;</p>\n<pre><code class="language-html">&lt;div className=&quot;z-text-indent-2&quot;&gt;文本&lt;/div&gt;</code></pre>\n'},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function l(t){var e=o(t);return n(e)}function o(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}l.keys=function(){return Object.keys(a)},l.resolve=o,t.exports=l,l.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("unDg"),l=n.n(a),o=n("Ds8w"),s=n.n(o),i=n("6ato"),d=n.n(i),c=n("2dj7"),r=n.n(c),m=n("Xtzg"),u=n.n(m),g=n("0dFU"),v=n.n(g),p=n("6cB7"),f=n.n(p),z=n("VUem"),h=n.n(z),q=(n("T9cD"),n("tmCC")),N=n("tW/l"),b=n.n(N);var x=Object(q.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function a(){var t,e,n,o;d()(this,a);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return e=n=u()(this,(t=a.__proto__||s()(a)).call.apply(t,[this].concat(c))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=q.x.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),q.x.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),q.x.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,a=0;a<e;a++){var o=n.state.navs[a];if(t>=o.el.offsetTop-120){if(!(a<e-1)){o.active=!0;break}var s=n.state.navs[a+1];if(s&&t<s.el.offsetTop-120){o.active=!0;break}}}n.setState({navs:[].concat(l()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},o=e,u()(n,o)}return v()(a,n),r()(a,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){h.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var l=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=l}}return e}(n);if(e&&"function"==typeof e[a.render]){var l=n.nextElementSibling;l=l&&"pre"==l.localName?l:null;var o=e[a.render]();t.renderEls.push(n),h.a.render(o,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var i=document.createElement("span");i.innerText=a.title?a.title:"",e.appendChild(i),l&&e.appendChild(s),t.appendChild(e),l&&o.appendChild(l),t.appendChild(o),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return f.a.createElement(q.l.Template,null,f.a.createElement(x,{pageHeader:{show:!1},hasBodyPadding:!1},f.a.createElement("div",{className:"z-panel "+b.a["z-md-doc"],ref:function(t){return e.mdEl=t}},f.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},f.a.createElement(q.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?h.a.createPortal(f.a.createElement("div",{className:b.a["z-nav-box"],ref:function(t){return e.navEl=t}},f.a.createElement("div",{ref:function(t){return e.navContentEl=t}},f.a.createElement("section",null,this.state.navs.map(function(t,n){return f.a.createElement("div",{title:t.name,className:b.a["z-nav"]+" "+(t.active?b.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(f.a.Component);return q.i.setConsumer(n)}}}}]);