(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+fre":function(t,e,n){"use strict";n.r(e);n("89bW");var a=n("XXxv"),o=n("Ds8w"),r=n.n(o),i=n("6ato"),s=n.n(i),c=n("2dj7"),d=n.n(c),l=n("Xtzg"),m=n.n(l),u=n("0dFU"),p=n.n(u),h=n("ZS5U"),g=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return s()(this,o),m()(this,(o.__proto__||r()(o)).apply(this,arguments))}return p()(o,n),d()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return g.a.createElement("div",{ref:function(e){t.boxEl=e}},g.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(g.a.Component)}}},eb3m:function(t,e){t.exports='<h1 id="-zbgimage">展示图片：ZbgImage</h1>\n<p><code>ZbgImage</code>是以背景图的方式展示一张图片</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">//默认：无url\n&lt;ZbgImage style={{height:&quot;240px&quot;}}/&gt;\n//有url，position:&quot;center&quot;\n&lt;ZbgImage style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;\n//有url，position:&quot;top&quot;\n&lt;ZbgImage position=&quot;top&quot; style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;</code></pre>\n<h2 id="zbgimage-props">ZbgImage 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>url</td>\n            <td>背景图片路径</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>position</td>\n            <td>背景图片在可视区域的位置</td>\n            <td>center | top</td>\n            <td>center</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>点击事件</td>\n            <td>funtion(e){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var a=n("Q2cO"),o=n.n(a),r=n("jjl2"),i={},s=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":o()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),s.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");s.push(n),i[n]=e.HOC}),e.a=i},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("Ds8w"),o=n.n(a),r=n("6ato"),i=n.n(r),s=n("2dj7"),c=n.n(s),d=n("Xtzg"),l=n.n(d),m=n("0dFU"),u=n.n(m),p=n("ZS5U"),h=n.n(p),g=n("FY2y"),f=n.n(g),b=(n("T9cD"),n("tmCC")),v=n("tW/l"),y=n.n(v);var E=Object(b.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function a(){var t,e,n,r;i()(this,a);for(var s=arguments.length,c=Array(s),d=0;d<s;d++)c[d]=arguments[d];return e=n=l()(this,(t=a.__proto__||o()(a)).call.apply(t,[this].concat(c))),n.renderEls=[],r=e,l()(n,r)}return u()(a,n),c()(a,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(t){f.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),f.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var i=document.createElement("img");i.addEventListener("click",function(){i.src=i.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=i.open?"0px":"auto",i.open=!i.open},!1),i.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=a.title?a.title:"",e.appendChild(s),o&&e.appendChild(i),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(t){}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal(!0,n,null,!0),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)})}},{key:"render",value:function(){var e=this;return h.a.createElement(E,{pageHeader:{show:!1},hasBodyPadding:!1},h.a.createElement("div",{className:"z-panel "+y.a["z-md-doc"],ref:function(t){return e.mdEl=t}},h.a.createElement("div",{className:"z-panel-body"},h.a.createElement(b.d,{mode:"html"},t))))}}]),a}(h.a.Component);return b.i.setConsumer(n)}}},xwxM:function(t,e,n){"use strict";n.r(e);n("qt0U");var a=n("CcUD"),o=(n("VMtr"),n("ubpN")),r=n("Ds8w"),i=n.n(r),s=n("6ato"),c=n.n(s),d=n("2dj7"),l=n.n(d),m=n("Xtzg"),u=n.n(m),p=n("0dFU"),h=n.n(p),g=n("ZS5U"),f=n.n(g),b=n("tmCC"),v=n("ebhq"),y=n("eb3m"),E=n.n(y),w=v.a.AmdDocHOC;e.default=w(E.a,{demo1:function(){var t=function(t){function e(){return c()(this,e),u()(this,(e.__proto__||i()(e)).apply(this,arguments))}return h()(e,t),l()(e,[{key:"render",value:function(){return f.a.createElement(a.a,{gutter:20},f.a.createElement(o.a,{span:8},f.a.createElement(b.b,{style:{height:"300px"}}),f.a.createElement("p",{className:"z-text-center z-margin-top-15"},f.a.createElement("span",{className:"z-text-gray z-margin-left-5"},"默认：无url"))),f.a.createElement(o.a,{span:8},f.a.createElement(b.b,{style:{height:"300px"},url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598348104&di=4e0d2935d8b0d5f0d716b61652354e16&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2016%2F0804%2F36%2F4.jpg%2521960.jpg"}),f.a.createElement("p",{className:"z-text-center z-margin-top-15"},f.a.createElement("span",{className:"z-text-gray z-margin-left-5"},'有url，position:"center"'))),f.a.createElement(o.a,{span:8},f.a.createElement(b.b,{position:"top",style:{height:"300px"},url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598529458&di=be8bc62d177075515b4d4c82a5ea6cc8&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20180720%2Fe4b632ad21ce12e7b5c731a2475aff5a.jpg"}),f.a.createElement("p",{className:"z-text-center z-margin-top-15"},f.a.createElement("span",{className:"z-text-gray z-margin-left-5"},'有url，position:"top"'))))}}]),e}(f.a.Component);return f.a.createElement(t,null)}})}}]);