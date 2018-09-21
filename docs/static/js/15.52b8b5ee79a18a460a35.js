(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+fre":function(t,e,n){"use strict";n.r(e);n("A1VQ");var o=n("vfEn"),r=n("Ds8w"),a=n.n(r),d=n("6ato"),c=n.n(d),i=n("2dj7"),l=n.n(i),s=n("Xtzg"),u=n.n(s),p=n("0dFU"),m=n.n(p),h=n("ZS5U"),f=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function r(){return c()(this,r),u()(this,(r.__proto__||a()(r)).apply(this,arguments))}return m()(r,n),l()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(f.a.Component)}}},Fnhc:function(t,e){t.exports='<h1 id="-zcolorpicker">颜色选择器：ZcolorPicker</h1>\n<p><code>ZcolorPicker</code>是一个颜色选择器控件，支持在<code>Form</code>、<code>Zform</code>等表单中使用</p>\n<p>依赖 <a href="http://casesandberg.github.io/react-color/" target="_blank">react-color 库</a> ，目前只选用了<code>react-color</code>的<code>SketchPicker</code>组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZcolorPicker } from &quot;zerod&quot;;\nclass Myjavascript extends React.Component {\n    state = {\n        color: &quot;#FFFFFF&quot;,\n    };\n    colorChange = (value) =&gt; {\n        console.log(value);\n    };\n    render() {\n        return &lt;ZcolorPicker value={this.state.state} onChange={this.colorChange} valueType=&quot;hex&quot; /&gt;;\n    }\n}</code></pre>\n<h2 id="zcolorpicker-props">ZcolorPicker 的 props</h2>\n<p>可追加<code>className</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n         <tr>\n            <td>valueType</td>\n            <td>颜色值类型,hex:十六进制模式，rgb：RGB模式(包括rgba)</td>\n            <td>hex | rgb</td>\n            <td>hex</td>\n        </tr>\n        <tr>\n            <td>value</td>\n            <td>颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultValue</td>\n            <td>第一次渲染的颜色值，支持十六进制和RGB模式，如 "#FFFFFF"、"rgba(255,214,21,0.9)"</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onChange</td>\n            <td>颜色值改变后触发</td>\n            <td>(value)=>{}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var o=n("Q2cO"),r=n.n(o),a=n("jjl2"),d={},c=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":r()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),c.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");c.push(n),d[n]=e.HOC}),e.a=d},g6qu:function(t,e,n){"use strict";n.r(e);var o=n("Ds8w"),r=n.n(o),a=n("6ato"),d=n.n(a),c=n("2dj7"),i=n.n(c),l=n("Xtzg"),s=n.n(l),u=n("0dFU"),p=n.n(u),m=n("ZS5U"),h=n.n(m),f=n("tmCC"),v=n("ebhq"),g=n("Fnhc"),y=n.n(g),E=v.a.AmdDocHOC;e.default=E(y.a,{demo1:function(){var t=function(t){function e(){return d()(this,e),s()(this,(e.__proto__||r()(e)).apply(this,arguments))}return p()(e,t),i()(e,[{key:"render",value:function(){return h.a.createElement(f.e,null)}}]),e}(h.a.Component);return h.a.createElement(t,null)}})},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("Ds8w"),r=n.n(o),a=n("6ato"),d=n.n(a),c=n("2dj7"),i=n.n(c),l=n("Xtzg"),s=n.n(l),u=n("0dFU"),p=n.n(u),m=n("ZS5U"),h=n.n(m),f=n("FY2y"),v=n.n(f),g=(n("T9cD"),n("tmCC")),y=n("tW/l"),E=n.n(y),b=Object(g.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function o(){var t,e,n,a;d()(this,o);for(var c=arguments.length,i=Array(c),l=0;l<c;l++)i[l]=arguments[l];return e=n=s()(this,(t=o.__proto__||r()(o)).call.apply(t,[this].concat(i))),n.renderEls=[],a=e,s()(n,a)}return p()(o,n),i()(o,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(t){v.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){if(e&&"function"==typeof e[n.dataset.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var r=e[n.dataset.render]();t.renderEls.push(n),v.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var a=document.createElement("img");a.addEventListener("click",function(){a.src=a.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=a.open?"0px":"auto",a.open=!a.open},!1),a.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var d=document.createElement("span");d.innerText=n.dataset.title?n.dataset.title:"",e.appendChild(d),o&&e.appendChild(a),t.appendChild(e),o&&r.appendChild(o),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(t){}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal(!0,n,null,!0),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)})}},{key:"render",value:function(){var e=this;return h.a.createElement(b,{pageHeader:{show:!1},hasBodyPadding:!1},h.a.createElement("div",{className:"z-panel "+E.a["z-md-doc"],ref:function(t){return e.mdEl=t}},h.a.createElement("div",{className:"z-panel-body"},h.a.createElement(g.d,{mode:"html"},t))))}}]),o}(h.a.Component);return g.i.setConsumer(n)}}}}]);