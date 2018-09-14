(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+fre":function(t,n,o){"use strict";o.r(n);o("E+SP");var e=o("uNIX"),a=o("Ds8w"),r=o.n(a),d=o("6ato"),l=o.n(d),i=o("2dj7"),s=o.n(i),u=o("Xtzg"),c=o.n(u),p=o("0dFU"),m=o.n(p),h=o("bRCM"),g=o.n(h);n.default={name:"AshowDemoHOC",HOC:function(t,n){return function(o){function a(){return l()(this,a),c()(this,(a.__proto__||r()(a)).apply(this,arguments))}return m()(a,o),s()(a,[{key:"componentDidMount",value:function(){var o=this.boxEl.querySelector(".z-open-modal-btn");o._scroll=n,o._render=function(){return t}}},{key:"render",value:function(){var t=this;return g.a.createElement("div",{ref:function(n){t.boxEl=n}},g.a.createElement(e.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),a}(g.a.Component)}}},"9Q6a":function(t,n){t.exports='<h1 id="zerodmaincontext">ZerodMainContext</h1>\n<p>在<code>ZmainHOC</code>中启用了<code>ZerodMainContext</code>的上文，通过<code>ZerodMainContext.setConsumer(组件)</code>包装的组件，可以使用<code>this.props</code>调用以下东西：</p>\n<h2 id="-showrightmodal-">打开右边窗口: showRightModal()</h2>\n<p>showRightModal 函数有四个参数，<code>show</code>:是否显示，<code>modal</code>: &quot;mainModal&quot; | &quot;appModal&quot;，<code>content</code>：窗口的内容，<code>scroll</code>：窗口内是否启用滚动条,<code>onTransitionend</code>:打开关闭的过渡动画执行完后的回调</p>\n<p>2018-08-22 新增 onTransitionend 属性，以后可能还会有其他参数，为了向下兼容，还可以这样</p>\n<pre><code class="language-jsx">this.props.showRightModal({\n    show: true,\n    modal: &quot;mainModal&quot;,\n    content: null,\n    scroll: true,\n    onTransitionend: (show) =&gt; {},\n});</code></pre>\n<div class="z-demo-box" data-render="open-modal" data-title="关闭窗口只需两个参数 this.props.showRightModal (false,\'mainModal\')"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Button } from &quot;antd&quot;;\nimport { ZerodMainContext } from &quot;zerod&quot;;\nclass OpenModal extends React.Component {\n    methods = {\n        openMainModal: (e) =&gt; {\n            this.props.showRightModal(\n                true,\n                &quot;mainModal&quot;,\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;main子路由位置的右边窗口&lt;/div&gt;\n                &lt;/div&gt;,\n            );\n        },\n        openAppModal: (e) =&gt; {\n            this.props.showRightModal(\n                true,\n                &quot;appModal&quot;,\n                &lt;div className=&quot;z-panel&quot;&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;标题&lt;/div&gt;\n                    &lt;div className=&quot;z-panel-heading&quot;&gt;最外边的右边窗口&lt;/div&gt;\n                &lt;/div&gt;,\n            );\n        },\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button type=&quot;dashed&quot; className=&quot;z-open-modal-btn&quot; onClick={this.methods.openMainModal}&gt;\n                    打开main子路由位置的右边窗口\n                &lt;/Button&gt;\n\n                &lt;Button type=&quot;dashed&quot; className=&quot;z-open-modal-btn z-margin-left-20&quot; onClick={this.methods.openAppModal}&gt;\n                    打开最外边的右边窗口\n                &lt;/Button&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nconst OutPut = ZerodMainContext.setConsumer(OpenModal);</code></pre>\n<h2 id="-loading-showrouteloading-">显示路由区域: loading showRouteLoading()</h2>\n<p>showRouteLoading 函数有一个参数，<code>show</code>:是否显示</p>\n<div class="z-demo-box" data-render="route-loading" data-title="this.props.showRouteLoading(true)"></div>\n\n<pre><code class="language-jsx">class MyScript extends React.Component {\n    methods = {\n        showRouteLoading: (e) =&gt; {\n            this.props.showRouteLoading(true);\n            setTimeout(() =&gt; {\n                this.props.showRouteLoading(false);\n            }, 2000);\n        },\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button type=&quot;primary&quot; className=&quot;z-show-loading-btn&quot; onClick={this.methods.showRouteLoading}&gt;\n                    显示路由位置的loading\n                &lt;/Button&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nconst OutPut = ZerodMainContext.setConsumer(MyScript);\nreturn &lt;OutPut /&gt;;</code></pre>\n<h2 id="-loading-showmodalloading-">显示右边窗口: loading showModalLoading()</h2>\n<p>showModalLoading 函数有两个参数，<code>show</code>:是否显示，<code>modal</code>: &quot;mainModal&quot; | &quot;appModal&quot;</p>\n<div class="z-demo-box" data-render="modal-loading" data-title="this.props.showModalLoading(true, modal);"></div>\n\n<pre><code class="language-jsx">class MyScript extends React.Component {\n    methods = {\n        showModalLoading: (e, modal) =&gt; {\n            this.props.showRightModal(true, modal);\n            this.props.showModalLoading(true, modal);\n            setTimeout(() =&gt; {\n                this.props.showModalLoading(false, modal);\n            }, 2000);\n        },\n    };\n    render() {\n        return (\n            &lt;div&gt;\n                &lt;Button\n                    type=&quot;primary&quot;\n                    className=&quot;z-show-loading-btn&quot;\n                    onClick={(e) =&gt; {\n                        this.methods.showModalLoading(e, &quot;mainModal&quot;);\n                    }}\n                &gt;\n                    显示mainModal的loading\n                &lt;/Button&gt;\n                &lt;Button\n                    type=&quot;primary&quot;\n                    className=&quot;z-show-loading-btn z-margin-left-20&quot;\n                    onClick={(e) =&gt; {\n                        this.methods.showModalLoading(e, &quot;appModal&quot;);\n                    }}\n                &gt;\n                    显示appModal的loading\n                &lt;/Button&gt;\n            &lt;/div&gt;\n        );\n    }\n}\nconst OutPut = ZerodMainContext.setConsumer(MyScript);\nreturn &lt;OutPut /&gt;;</code></pre>\n<h2 id="-getsidemenudata-">获取左边导航栏数据: getSideMenuData()</h2>\n<p>getSideMenuData()返回的是一个数组</p>\n<h2 id="-setscrolltotop-">下次滚动条更新的时候，让滚动条回到顶部: setScrollToTop()</h2>\n<p>setScrollToTop 函数有一个参数，<code>witch</code>:哪个地方滚动条更新: &quot;mainRoute&quot; | &quot;mainModal&quot; | &quot;appModal&quot;</p>\n<h2 id="-getuserinfo-">获取用户登录信息: getUserInfo()</h2>\n<p>ZmainHOC 的 componentDidMount 钩子中的 callback 函数注入的 userInfo 数据，可以通过 getUserInfo()获得</p>\n<h2 id="-settemporarystorage-data-gettemporarystorage-">临时存储器: setTemporaryStorage(data)  和 getTemporaryStorage()</h2>\n<p>setTemporaryStorage(data)用于跨页面临时存储一些数据，data参数是一个对象：{&quot;key&quot;:&quot;存储的数据&quot;}；getTemporaryStorage()获取当前存储器的数据</p>\n'},IvrI:function(t,n,o){"use strict";o.r(n);o("E+SP");var e=o("uNIX"),a=o("Ds8w"),r=o.n(a),d=o("6ato"),l=o.n(d),i=o("2dj7"),s=o.n(i),u=o("Xtzg"),c=o.n(u),p=o("0dFU"),m=o.n(p),h=o("bRCM"),g=o.n(h),f=o("ebhq"),v=o("tmCC"),M=o("9Q6a"),w=o.n(M),q=f.a.AmdDocHOC;n.default=q(w.a,{"open-modal":function(){var t=function(t){function n(){var t,o,e,a;l()(this,n);for(var d=arguments.length,i=Array(d),s=0;s<d;s++)i[s]=arguments[s];return o=e=c()(this,(t=n.__proto__||r()(n)).call.apply(t,[this].concat(i))),e.methods={openMainModal:function(t){t.target._modal="mainModal",t.target._render=function(){return g.a.createElement("div",{className:"z-panel"},g.a.createElement("div",{className:"z-panel-heading"},"标题"),g.a.createElement("div",{className:"z-panel-heading"},'modal="mainModal"的右边窗口'))}},openAppModal:function(t){t.target._modal="appModal",t.target._render=function(){return g.a.createElement("div",{className:"z-panel"},g.a.createElement("div",{className:"z-panel-heading"},"标题"),g.a.createElement("div",{className:"z-panel-heading"},'modal="appModal"的右边窗口'))}}},a=o,c()(e,a)}return m()(n,t),s()(n,[{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement(e.a,{type:"primary",className:"z-open-modal-btn",onClick:this.methods.openMainModal},'modal="mainModal" 的右边窗口'),g.a.createElement(e.a,{type:"primary",className:"z-open-modal-btn z-margin-left-20",onClick:this.methods.openAppModal},'modal="appModal" 的右边窗口'))}}]),n}(g.a.Component),n=v.h.setConsumer(t);return g.a.createElement(n,null)},"route-loading":function(){var t=function(t){function n(){var t,o,e,a;l()(this,n);for(var d=arguments.length,i=Array(d),s=0;s<d;s++)i[s]=arguments[s];return o=e=c()(this,(t=n.__proto__||r()(n)).call.apply(t,[this].concat(i))),e.methods={showRouteLoading:function(t){t.target._modal="mainRoute"}},a=o,c()(e,a)}return m()(n,t),s()(n,[{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement(e.a,{type:"primary",className:"z-show-loading-btn",onClick:this.methods.showRouteLoading},"显示路由位置的loading"))}}]),n}(g.a.Component),n=v.h.setConsumer(t);return g.a.createElement(n,null)},"modal-loading":function(){var t=function(t){function n(){var t,o,e,a;l()(this,n);for(var d=arguments.length,i=Array(d),s=0;s<d;s++)i[s]=arguments[s];return o=e=c()(this,(t=n.__proto__||r()(n)).call.apply(t,[this].concat(i))),e.methods={showModalLoading:function(t,n){t.target._modal=n}},a=o,c()(e,a)}return m()(n,t),s()(n,[{key:"render",value:function(){var t=this;return g.a.createElement("div",null,g.a.createElement(e.a,{type:"primary",className:"z-show-loading-btn",onClick:function(n){t.methods.showModalLoading(n,"mainModal")}},"显示mainModal的loading"),g.a.createElement(e.a,{type:"primary",className:"z-show-loading-btn z-margin-left-20",onClick:function(n){t.methods.showModalLoading(n,"appModal")}},"显示appModal的loading"))}}]),n}(g.a.Component),n=v.h.setConsumer(t);return g.a.createElement(n,null)}})},ebhq:function(t,n,o){"use strict";var e=o("Q2cO"),a=o.n(e),r=o("jjl2"),d={},l=[];r.keys().forEach(function(t){var n=void 0;try{n=r(t).default}catch(n){throw Error(t+":"+n)}if(void 0===n||"object"!==(void 0===n?"undefined":a()(n)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof n.HOC)throw Error(t+":HOC有误");var o=n.name;if("string"!=typeof o)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(o))throw Error(t+":name属性请以A开头HOC结尾");if(o=o.trim(),l.includes(o))throw Error(t+":"+o+"此HOC名称已被使用");l.push(o),d[o]=n.HOC}),n.a=d},jjl2:function(t,n,o){var e={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var n=r(t);return o(n)}function r(t){var n=e[t];if(!(n+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n}a.keys=function(){return Object.keys(e)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,n,o){"use strict";o.r(n);var e=o("Ds8w"),a=o.n(e),r=o("6ato"),d=o.n(r),l=o("2dj7"),i=o.n(l),s=o("Xtzg"),u=o.n(s),c=o("0dFU"),p=o.n(c),m=o("bRCM"),h=o.n(m),g=o("XSGX"),f=o.n(g),v=(o("17x9"),o("tmCC")),M=o("tW/l"),w=o.n(M),q=Object(v.p)();n.default={name:"AmdDocHOC",HOC:function(t,n){var o=function(o){function e(){var t,n,o,r;d()(this,e);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return n=o=u()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(i))),o.renderEls=[],r=n,u()(o,r)}return p()(e,o),i()(e,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(t){f.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,o=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(o).forEach(function(o){if(n&&"function"==typeof n[o.dataset.render]){var e=o.nextElementSibling;e=e&&"pre"==e.localName?e:null;var a=n[o.dataset.render]();t.renderEls.push(o),f.a.render(a,o,function(){var t=document.createElement("div");t.className="z-demo-footer";var n=document.createElement("div");n.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var r=document.createElement("img");r.addEventListener("click",function(){r.src=r.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=r.open?"0px":"auto",r.open=!r.open},!1),r.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var d=document.createElement("span");d.innerText=o.dataset.title?o.dataset.title:"",n.appendChild(d),e&&n.appendChild(r),t.appendChild(n),e&&a.appendChild(e),t.appendChild(a),o.appendChild(t)})}}),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof n.target._render&&t.props.showRightModal({show:!0,modal:n.target._modal?n.target._modal:"mainModal",content:n.target._render(),scroll:n.target._scroll,onTransitionend:function(t){}})},10)},!1),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==n.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var o=n.target._modal?n.target._modal:"mainModal";t.props.showRightModal(!0,o,null,!0),t.props.showModalLoading(!0,o),setTimeout(function(){t.props.showModalLoading(!1,o)},2e3)}},10)})}},{key:"render",value:function(){var n=this;return h.a.createElement(q,{pageHeader:{show:!1},hasBodyPadding:!1},h.a.createElement("div",{className:"z-panel "+w.a["z-md-doc"],ref:function(t){return n.mdEl=t}},h.a.createElement("div",{className:"z-panel-body"},h.a.createElement(v.d,{mode:"html"},t))))}}]),e}(h.a.Component);return v.h.setConsumer(o)}}}}]);