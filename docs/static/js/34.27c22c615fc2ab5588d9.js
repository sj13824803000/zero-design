(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+fre":function(t,e,n){"use strict";n.r(e);var a=n("L3G2"),o=n.n(a),r=n("Ds8w"),s=n.n(r),c=n("6ato"),l=n.n(c),i=n("2dj7"),d=n.n(i),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("6cB7"),v=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function a(){return l()(this,a),m()(this,(a.__proto__||s()(a)).apply(this,arguments))}return f()(a,n),d()(a,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(e){t.boxEl=e}},v.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(v.a.Component)}}},BIrZ:function(t,e){t.exports='<h1 id="-ztabs">标签页：Ztabs</h1>\n<p><code>Ztabs</code>是将<code>antd</code>的<code>Tabs</code>、<code>Tabs.TabPane</code> 的结构转成数据结构直接渲染的方式，</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Ztabs } from &quot;zerod&quot;;\n\nclass Myjavascript extends React.Component {\n    tabPanes = [\n        { tab: &quot;基本信息&quot;, key: &quot;1&quot;, content: &quot;基本信息内容&quot; },\n        { tab: &quot;配置信息&quot;, key: &quot;2&quot;, content: &quot;配置信息内容&quot; },\n        {\n            tab: &quot;其他信息&quot;,\n            key: &quot;3&quot;,\n            content: () =&gt; {\n                return &quot;其他内容&quot;;\n            },\n        },\n    ];\n    render() {\n        return &lt;Ztabs tabPanes={this.tabPanes} /&gt;;\n    }\n}</code></pre>\n<h2 id="ztabs-props">Ztabs 的 Props</h2>\n<p><code>Ztabs</code>除了<code>tabPanes</code>参数，还有同<a href="https://ant.design/components/tabs-cn/">Antd 的 Tabs 组件的参数</a></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>tabPanes</td>\n            <td>选项卡数据，数据结构有{tab ：标签title，key:对应Antd的Tabs组件 activeKey，content：string | ()=>内容 }</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},IJP7:function(t,e,n){"use strict";n.r(e);var a=n("Ds8w"),o=n.n(a),r=n("6ato"),s=n.n(r),c=n("2dj7"),l=n.n(c),i=n("Xtzg"),d=n.n(i),u=n("0dFU"),m=n.n(u),p=n("6cB7"),f=n.n(p),h=n("tmCC"),v=n("ebhq"),b=n("BIrZ"),g=n.n(b),y=v.a.AmdDocHOC;e.default=y(g.a,{demo1:function(){var t=function(t){function e(){var t,n,a,r;s()(this,e);for(var c=arguments.length,l=Array(c),i=0;i<c;i++)l[i]=arguments[i];return n=a=d()(this,(t=e.__proto__||o()(e)).call.apply(t,[this].concat(l))),a.tabPanes=[{tab:"基本信息",key:"1",content:"基本信息内容"},{tab:"配置信息",key:"2",content:"配置信息内容"},{tab:"其他信息",key:"3",content:function(){return"其他内容"}}],r=n,d()(a,r)}return m()(e,t),l()(e,[{key:"render",value:function(){return f.a.createElement(h.x,{tabPanes:this.tabPanes})}}]),e}(f.a.Component);return f.a.createElement(t,null)}})},ebhq:function(t,e,n){"use strict";var a=n("Q2cO"),o=n.n(a),r=n("jjl2"),s={},c=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":o()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),c.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");c.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var a=n("unDg"),o=n.n(a),r=n("Ds8w"),s=n.n(r),c=n("6ato"),l=n.n(c),i=n("2dj7"),d=n.n(i),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("6cB7"),v=n.n(h),b=n("VUem"),g=n.n(b),y=(n("T9cD"),n("tmCC")),E=n("tW/l"),w=n.n(E);var C=Object(y.s)();e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function a(){var t,e,n,r;l()(this,a);for(var c=arguments.length,i=Array(c),d=0;d<c;d++)i[d]=arguments[d];return e=n=m()(this,(t=a.__proto__||s()(a)).call.apply(t,[this].concat(i))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=y.z.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),y.z.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),y.z.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,a=0;a<e;a++){var r=n.state.navs[a];if(t>=r.el.offsetTop-120){if(!(a<e-1)){r.active=!0;break}var s=n.state.navs[a+1];if(s&&t<s.el.offsetTop-120){r.active=!0;break}}}n.setState({navs:[].concat(o()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=e,m()(n,r)}return f()(a,n),d()(a,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){g.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var a=t.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var o=t.attributes[n].nodeValue;e[a.match(/^data-(\w+)/)[1]]=o}}return e}(n);if(e&&"function"==typeof e[a.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[a.render]();t.renderEls.push(n),g.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var c=document.createElement("span");c.innerText=a.title?a.title:"",e.appendChild(c),o&&e.appendChild(s),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return v.a.createElement(y.m.Template,null,v.a.createElement(C,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+w.a["z-md-doc"],ref:function(t){return e.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(y.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?g.a.createPortal(v.a.createElement("div",{className:w.a["z-nav-box"],ref:function(t){return e.navEl=t}},v.a.createElement("div",{ref:function(t){return e.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,n){return v.a.createElement("div",{title:t.name,className:w.a["z-nav"]+" "+(t.active?w.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),a}(v.a.Component);return y.i.setConsumer(n)}}}}]);