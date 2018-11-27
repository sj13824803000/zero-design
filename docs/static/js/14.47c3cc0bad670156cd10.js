(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("kSOj"),a=n.n(o),r=n("Ds8w"),l=n.n(r),s=n("6ato"),c=n.n(s),i=n("2dj7"),u=n.n(i),d=n("Xtzg"),m=n.n(d),p=n("0dFU"),h=n.n(p),g=n("6cB7"),f=n.n(g);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function o(){return c()(this,o),m()(this,(o.__proto__||l()(o)).apply(this,arguments))}return h()(o,n),u()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return f.a.createElement("div",{ref:function(e){t.boxEl=e}},f.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.Component)}}},JFRy:function(t,e){t.exports='<h1 id="-zcodehighlight">代码高亮组件：ZcodeHighlight</h1>\n<p><code>ZcodeHighlight</code>依赖于代码高亮插件<code>prismjs</code>,默认支持<code>html</code>语言,如需支持更多语言，请在<code>zerod-admin-webpack</code>脚手架的<code>.babelrc</code>文件中修改：</p>\n<pre><code class="language-json">&quot;plugins&quot;: [\n    [&quot;prismjs&quot;, {\n        &quot;languages&quot;: [&quot;javascript&quot;, &quot;css&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;http&quot;,&quot;icon&quot;,&quot;java&quot;,&quot;json&quot;,&quot;yaml&quot;],//已设置支持的语言，\n        &quot;plugins&quot;: [&quot;line-numbers&quot;],\n        &quot;theme&quot;: &quot;tomorrow&quot;,//主题\n        &quot;css&quot;: true\n    }]</code></pre>\n<p>更多支持的语言请查看：<a href="https://prismjs.com/#languages-list" target="_blank">https://prismjs.com/#languages-list</a></p>\n<h2 id="-">使用组件</h2>\n<p>1、基本使用</p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZcodeHighlight } from &quot;zerod&quot;;\nclass Myjavascript extends React.Component{\n    render(){\n        return (\n            &lt;ZcodeHighlight lang=&quot;javascript&quot; mode=&quot;block&quot;&gt;\n                //注意这里，需要高亮的代码是字符串\n                 {`\n                    function getCode(){\n                        let a=0;\n                        retrun a;\n                    }\n                 `}\n            &lt;/ZcodeHighlight&gt;\n        );\n    }\n}</code></pre>\n<p>2、当<code>mode=&quot;html&quot;</code>时</p>\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZcodeHighlight } from &quot;zerod&quot;;\nclass MyHtml extends React.Component{\n    render(){\n        return (\n            &lt;ZcodeHighlight mode=&quot;html&quot;&gt;\n                 {`&lt;h1&gt;代码高亮组件：ZcodeHighlight&lt;/h1&gt;\n                &lt;p&gt;\n                    ZcodeHighlight依赖于代码高亮插件prismjs,默认支持html语言,如需支持更多语言，请在zerod-admin-webpack脚手架的.babelrc文件中修改：\n                &lt;/p&gt;\n                &lt;pre class=&quot;line-numbers&quot;&gt;\n                    &lt;code class=&quot;language-json&quot; &gt;\n                        &quot;plugins&quot;: [\n                            [&quot;prismjs&quot;, {\n                                &quot;languages&quot;: [&quot;javascript&quot;, &quot;css&quot;, &quot;scss&quot;, &quot;jsx&quot;,&quot;http&quot;,&quot;icon&quot;,&quot;java&quot;,&quot;json&quot;,&quot;yaml&quot;],//设置支持的语言，\n                                &quot;plugins&quot;: [&quot;line-numbers&quot;],\n                                &quot;theme&quot;: &quot;tomorrow&quot;,//主题\n                                &quot;css&quot;: true\n                            }]\n                    &lt;/code&gt;\n                &lt;/pre&gt;`}\n            &lt;/ZcodeHighlight&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zcodehighlight-props">ZcodeHighlight 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>mode</td>\n            <td>显示模式，block：块，inline：内联，html：直接是html元素</td>\n            <td>string : block | inline | html</td>\n            <td>block</td>\n        </tr>\n        <tr>\n            <td>lang</td>\n            <td>高亮代码的语言,更多支持的语言请查看：<a href="https://prismjs.com/#languages-list" target="_blank">https://prismjs.com/#languages-list</a>,当mode="html"时，lang参数无任何作用</td>\n            <td>string</td>\n            <td>html</td>\n        </tr>\n        <tr>\n            <td>children</td>\n            <td>要高亮的代码</td>\n            <td>string</td>\n            <td>-</td>\n        </tr>\n    </tbody>\n</table>\n'},ebhq:function(t,e,n){"use strict";var o=n("Q2cO"),a=n.n(o),r=n("jjl2"),l={},s=[];r.keys().forEach(function(t){var e=void 0;try{e=r(t).default}catch(e){throw Error(t+":"+e)}if(void 0===e||"object"!==(void 0===e?"undefined":a()(e)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof e.HOC)throw Error(t+":HOC有误");var n=e.name;if("string"!=typeof n)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(t+":name属性请以A开头HOC结尾");if(n=n.trim(),s.includes(n))throw Error(t+":"+n+"此HOC名称已被使用");s.push(n),l[n]=e.HOC}),e.a=l},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="jjl2"},m7Gq:function(t,e,n){"use strict";n.r(e);var o=n("ebhq"),a=n("JFRy"),r=n.n(a),l=o.a.AmdDocHOC;e.default=l(r.a)},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("unDg"),a=n.n(o),r=n("Ds8w"),l=n.n(r),s=n("6ato"),c=n.n(s),i=n("2dj7"),u=n.n(i),d=n("Xtzg"),m=n.n(d),p=n("0dFU"),h=n.n(p),g=n("6cB7"),f=n.n(g),v=n("VUem"),q=n.n(v),E=(n("T9cD"),n("tmCC")),b=n("tW/l"),y=n.n(b);var w=Object(E.r)();e.default={name:"AmdDocHOC",HOC:function(t,e){var n=function(n){function o(){var t,e,n,r;c()(this,o);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return e=n=m()(this,(t=o.__proto__||l()(o)).call.apply(t,[this].concat(i))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var t=[],e=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(e).forEach(function(e){t.push({name:e.dataset.title?e.dataset.title:e.nextElementSibling.innerText,el:e.nextElementSibling,active:-n.scrollInstance.scroll.y==e.nextElementSibling.offsetTop-24})}),t.length&&n.setState({navs:t},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var t=E.x.BuildScroll;n.navScroollInstance=new t(n.navEl,{scrollbars:"custom"}),E.x.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),E.x.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var t=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(t){t.active=!1});for(var e=n.state.navs.length,o=0;o<e;o++){var r=n.state.navs[o];if(t>=r.el.offsetTop-120){if(!(o<e-1)){r.active=!0;break}var l=n.state.navs[o+1];if(l&&t<l.el.offsetTop-120){r.active=!0;break}}}n.setState({navs:[].concat(a()(n.state.navs))})}})},n.navScrollTo=function(t){n.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},r=e,m()(n,r)}return h()(o,n),u()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){q.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=a}}return e}(n);if(e&&"function"==typeof e[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=e[o.render]();t.renderEls.push(n),q.a.render(r,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var l=document.createElement("img");l.addEventListener("click",function(){l.src=l.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=l.open?"0px":"auto",l.open=!l.open},!1),l.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=o.title?o.title:"",e.appendChild(s),a&&e.appendChild(l),t.appendChild(e),a&&r.appendChild(a),t.appendChild(r),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return f.a.createElement(E.l.Template,null,f.a.createElement(w,{pageHeader:{show:!1},hasBodyPadding:!1},f.a.createElement("div",{className:"z-panel "+y.a["z-md-doc"],ref:function(t){return e.mdEl=t}},f.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},f.a.createElement(E.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?q.a.createPortal(f.a.createElement("div",{className:y.a["z-nav-box"],ref:function(t){return e.navEl=t}},f.a.createElement("div",{ref:function(t){return e.navContentEl=t}},f.a.createElement("section",null,this.state.navs.map(function(t,n){return f.a.createElement("div",{title:t.name,className:y.a["z-nav"]+" "+(t.active?y.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(f.a.Component);return E.i.setConsumer(n)}}}}]);