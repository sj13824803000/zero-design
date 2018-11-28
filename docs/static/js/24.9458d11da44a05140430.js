(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+fre":function(t,n,e){"use strict";e.r(n);var o=e("kSOj"),r=e.n(o),a=e("Ds8w"),d=e.n(a),s=e("6ato"),l=e.n(s),i=e("2dj7"),c=e.n(i),u=e("Xtzg"),m=e.n(u),p=e("0dFU"),f=e.n(p),h=e("6cB7"),v=e.n(h);n.default={name:"AshowDemoHOC",HOC:function(t,n){return function(e){function o(){return l()(this,o),m()(this,(o.__proto__||d()(o)).apply(this,arguments))}return f()(o,e),c()(o,[{key:"componentDidMount",value:function(){var e=this.boxEl.querySelector(".z-open-modal-btn");e._scroll=n,e._render=function(){return t}}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{ref:function(n){t.boxEl=n}},v.a.createElement(r.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(v.a.Component)}}},"0van":function(t,n){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zsearchform">查询表单：ZsearchForm</h1>\n<p><code>ZsearchForm</code>是有栅栏布局的横向排版的，将<code>antd</code>的<code>Form</code>、<code>Form.item</code> 的结构转成数据结构直接渲染的方式，并且带有查询、重置、折叠按钮</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { ZsearchForm } from &quot;zerod&quot;;\nimport { Input, message } from &quot;antd&quot;;\n\nclass Myjavascript extends React.Component {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: (form) =&gt; {\n                //异步加载表单控件\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve(&lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;);\n                    }, 5000);\n                });\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n            render: (form) =&gt; {\n                return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;serviceRemark&quot;,\n            label: &quot;服务说明&quot;,\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n    ];\n    render() {\n        return (\n            &lt;ZsearchForm\n                colFormItems={this.items}\n                onSearch={(values) =&gt; {\n                    message.success(&quot;提交成功：&quot; + JSON.stringify(values));\n                }}\n                collapseCount={2}\n            /&gt;\n        );\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h3 id="zsearchform-props">ZsearchForm Props</h3>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，请看下面的items结构</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onSearch</td>\n            <td>验证表单后的提交事件</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onReset</td>\n            <td>重置表单后的事件</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>noCollapse</td>\n            <td>禁用折叠</td>\n            <td>boolean</td>\n            <td>false</td>\n        </tr>\n        <tr>\n            <td>collapseCount</td>\n            <td>启用折叠后，折叠起来显示的数量</td>\n            <td>number</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>formDefaultValues</td>\n            <td>返显表单的数据，如{serviceName:"名称"}，"serviceName"对应items属性里面的key</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n          <tr>\n            <td>getFormInstance</td>\n            <td>获取Form实例的钩子，外部通过(form)=>{this.formIstance=form;}获得form实例对象,通过this.formInstance.调用antd<a href="https://ant.design/components/form-cn/" target="_blank">表单相关方法</a></td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n          <tr>\n            <td>afterItemsRendered</td>\n            <td>所有表单控件渲染完的回调，包括异步渲染控件</a></td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>render</td>\n            <td>渲染表单控件的钩子。支持异步加载：必须return的是Promise对象。例如使用了后台接口：(form)=>api.getOptions.then(re=>{return 表单控件})</td>\n            <td>(form)=>{return ReactNode | Element | Promise}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>isFormItem</td>\n            <td>默认为true、如果为false则render函数可以渲染非表单控件内容</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>可以给每项添加className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>options</td>\n            <td><a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>,可以配置验证规则}</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},E1JP:function(t,n,e){"use strict";e.r(n);var o=e("omC7"),r=e.n(o),a=e("mGQZ"),d=e.n(a),s=e("bypa"),l=e.n(s),i=e("Asgo"),c=e.n(i),u=e("Ds8w"),m=e.n(u),p=e("6ato"),f=e.n(p),h=e("2dj7"),v=e.n(h),g=e("Xtzg"),b=e.n(g),E=e("0dFU"),y=e.n(E),q=e("6cB7"),w=e.n(q),C=e("tmCC"),x=e("ebhq"),k=e("0van"),z=e.n(k),S=x.a.AmdDocHOC;n.default=S(z.a,{demo1:function(){var t=function(t){function n(){var t,e,o,r;f()(this,n);for(var a=arguments.length,d=Array(a),s=0;s<a;s++)d[s]=arguments[s];return e=o=b()(this,(t=n.__proto__||m()(n)).call.apply(t,[this].concat(d))),o.items=[{key:"serviceCode",label:"服务编码",render:function(t){return new c.a(function(t){setTimeout(function(){t(w.a.createElement(l.a,{placeholder:"请输入服务编码"}))},5e3)})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceName",label:"服务名称",render:function(t){return w.a.createElement(l.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceRemark",label:"服务说明",render:function(t){return w.a.createElement(l.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}}],r=e,b()(o,r)}return y()(n,t),v()(n,[{key:"render",value:function(){return w.a.createElement(C.s,{colFormItems:this.items,onSearch:function(t){d.a.success("提交成功："+r()(t))},collapseCount:2})}}]),n}(w.a.Component);return w.a.createElement(t,null)}})},ebhq:function(t,n,e){"use strict";var o=e("Q2cO"),r=e.n(o),a=e("jjl2"),d={},s=[];a.keys().forEach(function(t){var n=void 0;try{n=a(t).default}catch(n){throw Error(t+":"+n)}if(void 0===n||"object"!==(void 0===n?"undefined":r()(n)))throw Error(t+":内没有 export default 或者export default格式有误 ");if("function"!=typeof n.HOC)throw Error(t+":HOC有误");var e=n.name;if("string"!=typeof e)throw Error(t+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(e))throw Error(t+":name属性请以A开头HOC结尾");if(e=e.trim(),s.includes(e))throw Error(t+":"+e+"此HOC名称已被使用");s.push(e),d[e]=n.HOC}),n.a=d},jjl2:function(t,n,e){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var n=a(t);return e(n)}function a(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="jjl2"},pnNO:function(t,n,e){"use strict";e.r(n);var o=e("unDg"),r=e.n(o),a=e("Ds8w"),d=e.n(a),s=e("6ato"),l=e.n(s),i=e("2dj7"),c=e.n(i),u=e("Xtzg"),m=e.n(u),p=e("0dFU"),f=e.n(p),h=e("6cB7"),v=e.n(h),g=e("VUem"),b=e.n(g),E=(e("T9cD"),e("tmCC")),y=e("tW/l"),q=e.n(y);var w=Object(E.r)();n.default={name:"AmdDocHOC",HOC:function(t,n){var e=function(e){function o(){var t,n,e,a;l()(this,o);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return n=e=m()(this,(t=o.__proto__||d()(o)).call.apply(t,[this].concat(i))),e.renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=E.x.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),E.x.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),E.x.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",function(){if(!e.unmounted){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var a=e.state.navs[o];if(t>=a.el.offsetTop-120){if(!(o<n-1)){a.active=!0;break}var d=e.state.navs[o+1];if(d&&t<d.el.offsetTop-120){a.active=!0;break}}}e.setState({navs:[].concat(r()(e.state.navs))})}})},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},a=n,m()(e,a)}return f()(o,e),c()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(t){b.a.unmountComponentAtNode(t)})}},{key:"componentDidMount",value:function(){var t=this,e=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(e).forEach(function(e){var o=function(t){var n={};if(t.dataset)return t.dataset;for(var e=0;e<t.attributes.length;e++){var o=t.attributes[e].nodeName;if(/^data-\w+$/.test(o)){var r=t.attributes[e].nodeValue;n[o.match(/^data-(\w+)/)[1]]=r}}return n}(e);if(n&&"function"==typeof n[o.render]){var r=e.nextElementSibling;r=r&&"pre"==r.localName?r:null;var a=n[o.render]();t.renderEls.push(e),b.a.render(a,e,function(){var t=document.createElement("div");t.className="z-demo-footer";var n=document.createElement("div");n.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var d=document.createElement("img");d.addEventListener("click",function(){d.src=d.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=d.open?"0px":"auto",d.open=!d.open},!1),d.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var s=document.createElement("span");s.innerText=o.title?o.title:"",n.appendChild(s),r&&n.appendChild(d),t.appendChild(n),r&&a.appendChild(r),t.appendChild(a),e.appendChild(t)})}}),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof n.target._render&&t.props.showRightModal({show:!0,modal:n.target._modal?n.target._modal:"mainModal",content:n.target._render(),scroll:n.target._scroll,onTransitionend:function(n){t.setState({closeModaled:!n})}})},10)},!1),this.mdEl.addEventListener("click",function(n){"string"==typeof n.target.className&&n.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==n.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var e=n.target._modal?n.target._modal:"mainModal";t.props.showRightModal({show:!0,modal:e,content:null,scroll:!0,onTransitionend:function(n){t.setState({closeModaled:!n})}}),t.props.showModalLoading(!0,e),setTimeout(function(){t.props.showModalLoading(!1,e)},2e3)}},10)}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var n=this;return v.a.createElement(E.l.Template,null,v.a.createElement(w,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+q.a["z-md-doc"],ref:function(t){return n.mdEl=t}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(E.d,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?b.a.createPortal(v.a.createElement("div",{className:q.a["z-nav-box"],ref:function(t){return n.navEl=t}},v.a.createElement("div",{ref:function(t){return n.navContentEl=t}},v.a.createElement("section",null,this.state.navs.map(function(t,e){return v.a.createElement("div",{title:t.name,className:q.a["z-nav"]+" "+(t.active?q.a.active:""),key:e,onClick:function(){n.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(v.a.Component);return E.i.setConsumer(e)}}}}]);