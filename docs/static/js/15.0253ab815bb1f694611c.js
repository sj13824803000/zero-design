(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("kSOj"),a=n.n(o),r=n("Ds8w"),l=n.n(r),c=n("6ato"),s=n.n(c),i=n("2dj7"),d=n.n(i),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("6cB7"),v=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return s()(this,o),m()(this,(o.__proto__||l()(o)).apply(this,arguments))}return f()(o,n),d()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(e){t.boxEl=e}},v.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(v.a.Component)}}},Fnhc:function(t,e){t.exports='<h1 id="-zcolorpicker">颜色选择器：ZcolorPicker</h1>\n<p><code>ZcolorPicker</code>是一个颜色选择器控件，支持在<code>Form</code>、<code>Zform</code>等表单中使用</p>\n<p>依赖 <a href="http://casesandberg.github.io/react-color/" target="_blank">react-color 库</a> ，目前只选用了<code>react-color</code>的<code>SketchPicker</code>组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZcolorPicker } from &quot;zerod&quot;;\nclass Myjavascript extends React.Component {\n    state = {\n        color: &quot;#FFFFFF&quot;,\n    };\n    colorChange = (value) =&gt; {\n        console.log(value);\n    };\n    render() {\n        return &lt;ZcolorPicker value={this.state.state} onChange={this.colorChange} valueType=&quot;hex&quot; /&gt;;\n    }\n}</code></pre>\n<h2 id="zcolorpicker-props">ZcolorPicker 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n         <tr>\n            <td>valueType</td>\n            <td>颜色值类型,hex:十六进制模式，rgb：RGB模式(包括rgba)</td>\n            <td>hex | rgb</td>\n            <td>hex</td>\n        </tr>\n        <tr>\n            <td>value</td>\n            <td>颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultValue</td>\n            <td>第一次渲染的颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>颜色值改变后触发</td>\n            <td>(value)=>{}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var o=n("Q2cO"),a=n.n(o),r=n("jjl2"),l={},c=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":a()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),c.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");c.push(n),l[n]=e.HOC}),e.a=l},g6qu:function(t,e,n){"use strict";n.r(e);var o=n("Ds8w"),a=n.n(o),r=n("6ato"),l=n.n(r),c=n("2dj7"),s=n.n(c),i=n("Xtzg"),d=n.n(i),u=n("0dFU"),m=n.n(u),p=n("6cB7"),f=n.n(p),h=n("tmCC"),v=n("ebhq"),g=n("Fnhc"),E=n.n(g),b=v.a.AmdDocHOC;e.default=b(E.a,{demo1:function(){var t=function(t){function e(){return l()(this,e),d()(this,(e.__proto__||a()(e)).apply(this,arguments))}return m()(e,t),s()(e,[{key:"render",value:function(){return f.a.createElement(h.e,null)}}]),e}(f.a.Component);return f.a.createElement(t,null)}})},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("unDg"),a=n.n(o),r=n("Ds8w"),l=n.n(r),c=n("6ato"),s=n.n(c),i=n("2dj7"),d=n.n(i),u=n("Xtzg"),m=n.n(u),p=n("0dFU"),f=n.n(p),h=n("6cB7"),v=n.n(h),g=n("VUem"),E=n.n(g),b=(n("T9cD"),n("tmCC")),y=n("tW/l"),C=n.n(y);var w=Object(b.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function o(){var t,e,n,r;s()(this,o);for(var c=arguments.length,i=Array(c),d=0;d<c;d++)i[d]=arguments[d];return e=n=m()(this,(t=o.__proto__||l()(o)).call.apply(t,[this].concat(i))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=b.x.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),b.x.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),b.x.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,o=0;o<e;o++){var r=n.state.navs[o];if(t>=r.el.offsetTop-120){if(!(o<e-1)){r.active=!0;break}var l=n.state.navs[o+1];if(l&&t<l.el.offsetTop-120){r.active=!0;break}}}n.setState({navs:[].concat(a()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=e,m()(n,r)}return f()(o,n),d()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){E.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),E.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var c=document.createElement("span");c.innerText=o.title?o.title:"",e.appendChild(c),a&&e.appendChild(l),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return v.a.createElement(b.l.Template,null,v.a.createElement(w,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+C.a["z-md-doc"],ref:function(t){return e.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(b.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?E.a.createPortal(v.a.createElement("div",{className:C.a["z-nav-box"],ref:function(t){return e.navEl=t}},v.a.createElement("div",{ref:function(t){return e.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,n){return v.a.createElement("div",{title:t.name,className:C.a["z-nav"]+" "+(t.active?C.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(v.a.Component);return b.i.setConsumer(n)}}}}]);