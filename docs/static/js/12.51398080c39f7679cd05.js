(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("kSOj"),o=n.n(a),r=n("Ds8w"),l=n.n(r),s=n("6ato"),i=n.n(s),c=n("2dj7"),d=n.n(c),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("6cB7"),v=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return i()(this,a),m()(this,(a.__proto__||l()(a)).apply(this,arguments))}return f()(a,n),d()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(e){t.boxEl=e}},v.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(v.a.Component)}}},eb3m:function(t,e){t.exports='<h1 id="-zbgimage">展示图片：ZbgImage</h1>\n<p><code>ZbgImage</code>是以背景图的方式展示一张图片</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">//默认：无url\n&lt;ZbgImage style={{height:&quot;240px&quot;}}/&gt;\n//有url，position:&quot;center&quot;\n&lt;ZbgImage style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;\n//有url，position:&quot;top&quot;\n&lt;ZbgImage position=&quot;top&quot; style={{height:&quot;240px&quot;}} url=&quot;http://s9.sinaimg.cn/mw690/0023XbZbzy7ekiybAnKd8&amp;690&quot;/&gt;</code></pre>\n<h2 id="zbgimage-props">ZbgImage 的 props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>url</td>\n            <td>背景图片路径</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>position</td>\n            <td>背景图片在可视区域的位置</td>\n            <td>center | top</td>\n            <td>center</td>\n        </tr>\n        <tr>\n            <td>onClick</td>\n            <td>点击事件</td>\n            <td>funtion(e){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var a=n("Q2cO"),o=n.n(a),r=n("jjl2"),l={},s=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":o()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),s.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");s.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("unDg"),o=n.n(a),r=n("Ds8w"),l=n.n(r),s=n("6ato"),i=n.n(s),c=n("2dj7"),d=n.n(c),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("6cB7"),v=n.n(h),g=n("VUem"),b=n.n(g),E=(n("T9cD"),n("tmCC")),y=n("tW/l"),z=n.n(y);var x=Object(E.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function a(){var t,e,n,r;i()(this,a);for(var s=arguments.length,c=Array(s),d=0;d<s;d++)c[d]=arguments[d];return e=n=m()(this,(t=a.__proto__||l()(a)).call.apply(t,[this].concat(c))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=E.x.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),E.x.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),E.x.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,a=0;a<e;a++){var r=n.state.navs[a];if(t>=r.el.offsetTop-120){if(!(a<e-1)){r.active=!0;break}var l=n.state.navs[a+1];if(l&&t<l.el.offsetTop-120){r.active=!0;break}}}n.setState({navs:[].concat(o()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=e,m()(n,r)}return f()(a,n),d()(a,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){b.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),b.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=a.title?a.title:"",e.appendChild(s),o&&e.appendChild(l),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return v.a.createElement(E.l.Template,null,v.a.createElement(x,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+z.a["z-md-doc"],ref:function(t){return e.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(E.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?b.a.createPortal(v.a.createElement("div",{className:z.a["z-nav-box"],ref:function(t){return e.navEl=t}},v.a.createElement("div",{ref:function(t){return e.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,n){return v.a.createElement("div",{title:t.name,className:z.a["z-nav"]+" "+(t.active?z.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(v.a.Component);return E.i.setConsumer(n)}}},xwxM:function(t,e,n){"use strict";n.r(e);var a=n("Xmyv"),o=n.n(a),r=n("ioOQ"),l=n.n(r),s=n("Ds8w"),i=n.n(s),c=n("6ato"),d=n.n(c),u=n("2dj7"),m=n.n(u),p=n("Xtzg"),f=n.n(p),h=n("0dFU"),v=n.n(h),g=n("6cB7"),b=n.n(g),E=n("tmCC"),y=n("ebhq"),z=n("eb3m"),x=n.n(z),w=y.a.AmdDocHOC;e.default=w(x.a,{demo1:function(){var t=function(t){function e(){return d()(this,e),f()(this,(e.__proto__||i()(e)).apply(this,arguments))}return v()(e,t),m()(e,[{key:"render",value:function(){return b.a.createElement(o.a,{gutter:20},b.a.createElement(l.a,{span:8},b.a.createElement(E.b,{style:{height:"300px"}}),b.a.createElement("p",{className:"z-text-center z-margin-top-15"},b.a.createElement("span",{className:"z-text-gray z-margin-left-5"},"默认：无url"))),b.a.createElement(l.a,{span:8},b.a.createElement(E.b,{style:{height:"300px"},url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598348104&di=4e0d2935d8b0d5f0d716b61652354e16&imgtype=0&src=http%3A%2F%2Fpic2016.ytqmx.com%3A82%2F2016%2F0804%2F36%2F4.jpg%2521960.jpg"}),b.a.createElement("p",{className:"z-text-center z-margin-top-15"},b.a.createElement("span",{className:"z-text-gray z-margin-left-5"},'有url，position:"center"'))),b.a.createElement(l.a,{span:8},b.a.createElement(E.b,{position:"top",style:{height:"300px"},url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535598529458&di=be8bc62d177075515b4d4c82a5ea6cc8&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20180720%2Fe4b632ad21ce12e7b5c731a2475aff5a.jpg"}),b.a.createElement("p",{className:"z-text-center z-margin-top-15"},b.a.createElement("span",{className:"z-text-gray z-margin-left-5"},'有url，position:"top"'))))}}]),e}(b.a.Component);return b.a.createElement(t,null)}})}}]);