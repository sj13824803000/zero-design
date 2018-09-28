(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+fre":function(t,e,n){"use strict";n.r(e);n("A1VQ");var o=n("vfEn"),r=n("Ds8w"),a=n.n(r),i=n("6ato"),d=n.n(i),c=n("2dj7"),s=n.n(c),l=n("Xtzg"),u=n.n(l),p=n("0dFU"),m=n.n(p),h=n("ZS5U"),f=n.n(h);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function r(){return d()(this,r),u()(this,(r.__proto__||a()(r)).apply(this,arguments))}return m()(r,n),s()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(f.a.Component)}}},aX1M:function(t,e,n){"use strict";n.r(e);n("u4fl");var o=n("+W1U"),r=n("Ds8w"),a=n.n(r),i=n("6ato"),d=n.n(i),c=n("2dj7"),s=n.n(c),l=n("Xtzg"),u=n.n(l),p=n("0dFU"),m=n.n(p),h=n("ZS5U"),f=n.n(h),g=n("tmCC"),v=n("ebhq"),y=n("bnU3"),w=n.n(y),E=v.a.AmdDocHOC;e.default=E(w.a,{demo1:function(){var t=function(t){function e(){var t,n,r,i;d()(this,e);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=r=u()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(s))),r.footerLinks=[{key:"hua-cloud",title:"华云中盛科技有限公司",href:"http://www.hua-cloud.com.cn/",blankTarget:!0},{key:"szhcf",title:"华成峰集团",href:"http://www.szhcf.com.cn/",blankTarget:!0}],r.footerCopyright=f.a.createElement("div",null,"Copyright ",f.a.createElement(o.a,{type:"copyright"})," 2018 华云中盛-政务事业部技术团队出品"),i=n,u()(r,i)}return m()(e,t),s()(e,[{key:"render",value:function(){return f.a.createElement(g.o,{links:this.footerLinks,copyright:this.footerCopyright})}}]),e}(f.a.Component);return f.a.createElement(t,null)}})},bnU3:function(t,e){t.exports='<h1 id="-zpagefooter">页脚组件：ZpageFooter</h1>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZpageFooter } from &quot;zerod&quot;;\nimport { Icon } from &quot;antd&quot;;\nclass PageFooter extends React.Component {\n    footerLinks = [\n        {\n            key: &quot;hua-cloud&quot;,\n            title: &quot;华云中盛科技有限公司&quot;,\n            href: &quot;http://www.hua-cloud.com.cn/&quot;,\n            blankTarget: true,\n        },\n        {\n            key: &quot;szhcf&quot;,\n            title: &quot;华成峰集团&quot;,\n            href: &quot;http://www.szhcf.com.cn/&quot;,\n            blankTarget: true,\n        },\n    ];\n    footerCopyright = () =&gt; (\n        &lt;div&gt;\n            Copyright &lt;Icon type=&quot;copyright&quot; /&gt; 2018 华云中盛-政务事业部技术团队出品\n        &lt;/div&gt;\n    );\n    render() {\n        return &lt;ZpageFooter links={this.footerLinks} copyright={this.footerCopyright} /&gt;;\n    }\n}\n\nexport default PageFooter;</code></pre>\n<h2 id="zpagefooter-props">ZpageFooter 的 Props</h2>\n<p>可追加<code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>links</td>\n            <td>快速链接</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>copyright</td>\n            <td>版权信息</td>\n            <td>string | function</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var o=n("Q2cO"),r=n.n(o),a=n("jjl2"),i={},d=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":r()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),d.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");d.push(n),i[n]=e.HOC}),e.a=i},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("Ds8w"),r=n.n(o),a=n("6ato"),i=n.n(a),d=n("2dj7"),c=n.n(d),s=n("Xtzg"),l=n.n(s),u=n("0dFU"),p=n.n(u),m=n("ZS5U"),h=n.n(m),f=n("FY2y"),g=n.n(f),v=(n("T9cD"),n("tmCC")),y=n("tW/l"),w=n.n(y);var E=Object(v.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function o(){var t,e,n,a;i()(this,o);for(var d=arguments.length,c=Array(d),s=0;s<d;s++)c[s]=arguments[s];return e=n=l()(this,(t=o.__proto__||r()(o)).call.apply(t,[this].concat(c))),n.renderEls=[],a=e,l()(n,a)}return p()(o,n),c()(o,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(t){g.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var r=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=r}}return e}(n);if(e&&"function"==typeof e[o.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var a=e[o.render]();t.renderEls.push(n),g.a.render(a,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var i=document.createElement("img");i.addEventListener("click",function(){i.src=i.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=i.open?"0px":"auto",i.open=!i.open},!1),i.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var d=document.createElement("span");d.innerText=o.title?o.title:"",e.appendChild(d),r&&e.appendChild(i),t.appendChild(e),r&&a.appendChild(r),t.appendChild(a),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(t){}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal(!0,n,null,!0),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)})}},{key:"render",value:function(){var e=this;return h.a.createElement(E,{pageHeader:{show:!1},hasBodyPadding:!1},h.a.createElement("div",{className:"z-panel "+w.a["z-md-doc"],ref:function(t){return e.mdEl=t}},h.a.createElement("div",{className:"z-panel-body"},h.a.createElement(v.d,{mode:"html"},t))))}}]),o}(h.a.Component);return v.i.setConsumer(n)}}}}]);