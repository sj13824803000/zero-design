(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+fre":function(t,n,e){"use strict";e.r(n);var o=e("kSOj"),a=e.n(o),r=e("Ds8w"),l=e.n(r),d=e("6ato"),s=e.n(d),i=e("2dj7"),c=e.n(i),u=e("Xtzg"),m=e.n(u),h=e("0dFU"),p=e.n(h),f=e("6cB7"),v=e.n(f);n.default={name:"AshowDemoHOC",HOC:function(t,n){return function(e){function o(){return s()(this,o),m()(this,(o.__proto__||l()(o)).apply(this,arguments))}return p()(o,e),c()(o,[{key:"componentDidMount",value:function(){var e=this.boxEl.querySelector(".z-open-modal-btn");e._scroll=n,e._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(n){t.boxEl=n}},v.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(v.a.Component)}}},auj8:function(t,n){t.exports='<h1 id="-zrightmodal">右抽屉窗口：ZrightModal</h1>\n<p><code>ZrightModal</code>是从右边弹出的一种窗口模式，可以减少多层路由跳转的一种交互方式</p>\n<p>如果是使用<code>ZmainHOC</code>实现了主页布局，基本上不再需要单独使用<code>ZrightModal</code>，请查看 上下文的<code>ZerodMainContext</code></p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="以下是截取了`ZmainHOC `中使用`Zlayout.Zbody + ZrightModal`的部分代码展示"></div>\n\n<pre><code class="language-jsx">&lt;Zlayout.Zbody\n    className={`${cssClass[&quot;z-main-body&quot;]} z-scroll-color app-body`}\n    scroll\n    getScrollInstance={(instance) =&gt; (this.mainBodyScrollInstance = instance)}\n    insertToScrollWraper={\n        &lt;Zlayout.Template&gt;\n            &lt;ZpageLoading showLoading={this.state.isShowLoading} /&gt;\n            &lt;ZrightModal\n                show={this.state.isShowRightModal}//打开modal的状态\n                scroll //启用滚动条\n                getScrollInstance={(instance) =&gt; (this.rightBodyScrollInstance = instance)}//获取滚动条实例\n                showLoading={this.state.isShowModalLoading} //显示loading的状态\n                onClose={() =&gt; {\n                    this.methods.showRightModal(false);//关闭modal\n                }}\n                onTransitionend={this.methods.afterModalTransitionend}//modal过渡动画执行完之后\n            &gt;\n                {this.state.rightModalContent}\n            &lt;/ZrightModal&gt;\n        &lt;/Zlayout.Template&gt;\n    }\n&gt;\n    &lt;section&gt;\n        &lt;Switch&gt;{this.navRoutes}&lt;/Switch&gt;\n    &lt;/section&gt;\n&lt;/Zlayout.Zbody&gt;</code></pre>\n<h2 id="zrightmodal-props">ZrightModal 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>children</td>\n            <td>即this.props.children</td>\n            <td>any</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>show</td>\n            <td>是否打开ZrightModal</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>width</td>\n            <td>窗口宽度</td>\n            <td>string</td>\n            <td>90%</td>\n        </tr>\n        <tr>\n            <td>zIndex</td>\n            <td>层级</td>\n            <td>number</td>\n            <td>999</td>\n        </tr>\n        <tr>\n            <td>onClose</td>\n            <td>点击关闭按钮的事件，()=>{}</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showLoading</td>\n            <td>是否显示loading</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>scroll</td>\n            <td>是否启用滚动条</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getScrollInstance</td>\n            <td>获取滚动条的实例，scroll=true时有效</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onTransitionend</td>\n            <td>当打开或关闭ZrightModal的过渡动画完成后执行的钩子</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},bBUQ:function(t,n,e){"use strict";e.r(n);var o=e("6cB7"),a=e.n(o),r=e("ebhq"),l=e("auj8"),d=e.n(l),s=r.a.AmdDocHOC,i=r.a.AshowDemoHOC;n.default=s(d.a,{demo1:function(){var t=i(a.a.createElement("div",{className:"z-padding-20"},a.a.createElement("div",{className:"z-panel"},a.a.createElement("div",{className:"z-panel-body z-text-center"},"我就是这个窗口"))),!1);return a.a.createElement(t,null)}})},ebhq:function(t,n,e){"use strict";var o=e("Q2cO"),a=e.n(o),r=e("jjl2"),l={},d=[];r.keys().forEach(function(t){var n=void 0;try{n=r(t).default}catch(n){throw Error(t+":"+n)}if(void 0===n||"object"!==(void 0===n?"undefined":a()(n)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof n.HOC)throw Error(t+":HOC有误");var e=n.name;if("string"!=typeof e)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(e))throw Error(t+":name属性请以A开头HOC结尾");if(e=e.trim(),d.includes(e))throw Error(t+":"+e+"此HOC名称已被使用");d.push(e),l[e]=n.HOC}),n.a=l},jjl2:function(t,n,e){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var n=r(t);return e(n)}function r(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,n,e){"use strict";e.r(n);var o=e("unDg"),a=e.n(o),r=e("Ds8w"),l=e.n(r),d=e("6ato"),s=e.n(d),i=e("2dj7"),c=e.n(i),u=e("Xtzg"),m=e.n(u),h=e("0dFU"),p=e.n(h),f=e("6cB7"),v=e.n(f),g=e("VUem"),E=e.n(g),y=(e("T9cD"),e("tmCC")),b=e("tW/l"),w=e.n(b);var C=Object(y.r)();n.default={name:"AmdDocHOC",HOC:function(t,n){var e=function(e){function o(){var t,n,e,r;s()(this,o);for(var d=arguments.length,i=Array(d),c=0;c<d;c++)i[c]=arguments[c];return n=e=m()(this,(t=o.__proto__||l()(o)).call.apply(t,[this].concat(i))),e.renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=y.x.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),y.x.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),y.x.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",function(){if(!e.unmounted){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var r=e.state.navs[o];if(t>=r.el.offsetTop-120){if(!(o<n-1)){r.active=!0;break}var l=e.state.navs[o+1];if(l&&t<l.el.offsetTop-120){r.active=!0;break}}}e.setState({navs:[].concat(a()(e.state.navs))})}})},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=n,m()(e,r)}return p()(o,e),c()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){E.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,e=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(e).forEach(function(e){var o=function(t){var n={};if(t.dataset)return t.dataset;for(var e=0;e<t.attributes.length;e++){var o=t.attributes[e].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[e].nodeValue;n[o.match(/^data-(\w+)/)[1]]=a}}return n}(e);if(n&&"function"==typeof n[o.render]){var a=e.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=n[o.render]();t.renderEls.push(e),E.a.render(r,e,function(){var t=document.createElement("div");t.className="z-demo-footer";var n=document.createElement("div");n.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var d=document.createElement("span");d.innerText=o.title?o.title:"",n.appendChild(d),a&&n.appendChild(l),t.appendChild(n),a&&r.appendChild(a),t.appendChild(r),e.appendChild(t)})}}),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof n.target._render&&t.props.showRightModal({show:!0,modal:n.target._modal?n.target._modal:"mainModal",content:n.target._render(),scroll:n.target._scroll,onTransitionend:function(n){t.setState({closeModaled:!n})}})},10)},!1),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==n.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var e=n.target._modal?n.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:e,content:null,scroll:!0,onTransitionend:function(n){t.setState({closeModaled:!n})}}),t.props.showModalLoading(!0,e),setTimeout(function(){t.props.showModalLoading(!1,e)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var n=this;return v.a.createElement(y.l.Template,null,v.a.createElement(C,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+w.a["z-md-doc"],ref:function(t){return n.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(y.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?E.a.createPortal(v.a.createElement("div",{className:w.a["z-nav-box"],ref:function(t){return n.navEl=t}},v.a.createElement("div",{ref:function(t){return n.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,e){return v.a.createElement("div",{title:t.name,className:w.a["z-nav"]+" "+(t.active?w.a.active:""),key:e,onClick:function(){n.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(v.a.Component);return y.i.setConsumer(e)}}}}]);