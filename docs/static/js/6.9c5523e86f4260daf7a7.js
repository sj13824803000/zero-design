(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+fre":function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=n("Yz+Y"),o=n.n(r),i=n("iCc5"),d=n.n(i),l=n("V7oC"),c=n.n(l),s=n("FYw3"),u=n.n(s),p=n("mRg0"),f=n.n(p),m=n("q1tI"),v=n.n(m);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function r(){return d()(this,r),u()(this,(r.__proto__||o()(r)).apply(this,arguments))}return f()(r,n),c()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{ref:function(t){e.boxEl=t}},v.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(v.a.Component)}}},"1xVk":function(e,t,n){"use strict";var a=n("tmCC");t.a=function(e,t,n,r){return t.includes("/sys")||(t="/webapi"+t),a.x.httpAjax(e,t,n,r)}},"5WI2":function(e,t,n){"use strict";n.r(t);var a=n("1xVk");t.default={name:"config",apis:{getServiceList:function(e){return Object(a.a)("post","/v1.0/config/center/pageServiceInfo",e)},deleteService:function(e){return Object(a.a)("post","/v1.0/config/center/deleteServiceInfo",e)},addService:function(e){return Object(a.a)("post","/v1.0/config/center/addServiceConfig",e)},updateService:function(e){return Object(a.a)("post","/v1.0/config/center/updateServiceInfo",e)},getServiceDetail:function(e){return Object(a.a)("post","/v1.0/config/center/getServiceConfigDetail",e)},updateServiceConfig:function(e){return Object(a.a)("post","/v1.0/config/center/updateConfigProperty",e)}}}},LQqe:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("tmCC"),i=n("WiDR"),d=n("Yz+Y"),l=n.n(d),c=n("iCc5"),s=n.n(c),u=n("V7oC"),p=n.n(u),f=n("FYw3"),m=n.n(f),v=n("mRg0"),g=n.n(v),h=n("17x9"),b=n.n(h),y=function(e){function t(){var e,n,a,o;s()(this,t);for(var i=arguments.length,d=Array(i),c=0;c<i;c++)d[c]=arguments[c];return n=a=m()(this,(e=t.__proto__||l()(t)).call.apply(e,[this].concat(d))),a.getConfig=function(e){return e?r.a.createElement("div",{style:{background:"#2B2B2B",padding:16}},e.split("\n").map(function(e,t){var n=e;if(e.startsWith("#"))n=r.a.createElement("span",{style:{color:"#629755"}},e);else if(e.indexOf("=")>0){var a=e.indexOf("="),o=e.substring(0,a),i=e.substring(a+1,e.length);n=r.a.createElement("span",null,r.a.createElement("span",{style:{color:"#9876AA"}},o),r.a.createElement("span",{style:{color:"rgba(255,255,255,0.85)"}},"="),r.a.createElement("span",{style:{color:"#BABABA"}},i))}return r.a.createElement("div",{key:e+"-"+t},n)})):r.a.createElement("div",{className:"z-text-center z-text-gray"},"无相关配置信息")},a.tabContent=function(e){return a.getConfig(e.serviceConfig.confProperty)},a.defaultTabPanes=[{tab:"默认环境",key:"default",serviceConfig:{},content:a.tabContent},{tab:"开发环境",key:"dev",serviceConfig:{},content:a.tabContent},{tab:"测试环境",key:"test",serviceConfig:{},content:a.tabContent},{tab:"生产环境",key:"prod",serviceConfig:{},content:a.tabContent}],o=n,m()(a,o)}return g()(t,e),p()(t,[{key:"getTabPanes",value:function(e){var t=this.props.data;return t&&t.cfgcPropertyDOList?e.map(function(e,n){e.serviceId=t.serviceId;for(var a=t.cfgcPropertyDOList,r=0;r<a.length;r++)if(e.key===a[r].environment){e.serviceConfig=a[r];break}return e}):[]}},{key:"render",value:function(){var e=this.getTabPanes(this.defaultTabPanes);return r.a.createElement("div",{className:"z-panel z-margin-top-20"},r.a.createElement("div",{className:"z-panel-heading"},"配置信息"),r.a.createElement("div",{className:"z-panel-body"},r.a.createElement(o.v,{tabPanes:e})))}}]),t}(r.a.Component);y.propTypes={data:b.a.object};var C=o.i.setConsumer(y);t.a=function(e){var t=e.insertLocation,n=e.headerTitle,a=e.headerContent,d=e.panelAfterRender,l={insertLocation:t||"mainModal_top",pageHeader:{show:!0,breadcrumbRoutes:null,title:n,content:a,rightMoreContent:r.a.createElement("div",null,"右边")},detail:{panelHeader:"基础信息",items:[{key:"serviceName",label:"服务名称"},{key:"serviceCode",label:"服务编码"},{key:"serviceProt",label:"约定端口号",render:function(e,t){return r.a.createElement("span",{className:"z-text-red"},e)}},{key:"serviceRemark",label:"服务描述",span:{lg:12},render:function(e,t){return e}}],detailApiInterface:function(e,t){return i.a.config.getServiceDetail({serviceId:e})}},panelAfterRender:"function"==typeof d?d:function(e){return r.a.createElement(C,{data:e})},panelBeforeRender:function(){return r.a.createElement("div",{className:"z-panel z-margin-bottom-20"},r.a.createElement("div",{className:"z-panel-body"},"panelBeforeRender"))},moreContentRender:function(){return r.a.createElement("div",{className:"z-panel z-margin-top-20"},r.a.createElement("div",{className:"z-panel-body"},"moreContentRender"))}};return Object(o.f)(l)}},O3gd:function(e,t,n){"use strict";n.r(t);var a=n("1xVk");t.default={name:"login",apis:{getUserInfo:function(){return Object(a.a)("post","/loginUserInfo")}}}},Revr:function(e,t,n){var a={"./area.api.js":"eAri","./config.api.js":"5WI2","./login.api.js":"O3gd"};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="Revr"},WiDR:function(e,t,n){"use strict";var a=n("EJiy"),r=n.n(a),o=n("Revr"),i={},d=[];o.keys().forEach(function(e){var t=void 0;try{t=o(e).default}catch(t){throw Error(e+":"+t)}if(void 0===t||"object"!==(void 0===t?"undefined":r()(t)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("object"!=r()(t.apis))throw Error(e+":apis不是object");var n=t.name;if("string"!=typeof n)throw Error(e+":缺少name属性");if(n=n.trim(),d.includes(n))throw Error(e+":"+n+"此命名空间已被使用");d.push(n),i[n]=t.apis}),t.a=i},eAri:function(e,t,n){"use strict";n.r(t);var a=n("1xVk");t.default={name:"area",apis:{getChildList:function(e){return Object(a.a)("get","/mzfwjg/sys/areas/"+e.id+"/children")}}}},ebhq:function(e,t,n){"use strict";var a=n("EJiy"),r=n.n(a),o=n("jjl2"),i={},d=[];o.keys().forEach(function(e){var t=void 0;try{t=o(e).default}catch(t){throw Error(e+":"+t)}if(void 0===t||"object"!==(void 0===t?"undefined":r()(t)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("function"!=typeof t.HOC)throw Error(e+":HOC有误");var n=t.name;if("string"!=typeof n)throw Error(e+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(e+":name属性请以A开头HOC结尾");if(n=n.trim(),d.includes(n))throw Error(e+":"+n+"此HOC名称已被使用");d.push(n),i[n]=t.HOC}),t.a=i},jjl2:function(e,t,n){var a={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="jjl2"},lzuH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("ebhq"),i=n("vjXJ"),d=n.n(i),l=n("LQqe"),c=o.a.AmdDocHOC,s=o.a.AshowDemoHOC;t.default=c(d.a,{demo1:function(){var e=Object(l.a)({insertLocation:"mainModal",headerTitle:"详情页",headerContent:"页面描述",panelAfterRender:function(){return r.a.createElement("div",{className:"z-panel z-margin-top-20"},r.a.createElement("div",{className:"z-panel-body"},"panelAfterRender"))}}),t=s(r.a.createElement(e,{detailId:"21"}));return r.a.createElement(t,null)}})},pnNO:function(e,t,n){"use strict";n.r(t);var a=n("Yz+Y"),r=n.n(a),o=n("iCc5"),i=n.n(o),d=n("V7oC"),l=n.n(d),c=n("FYw3"),s=n.n(c),u=n("mRg0"),p=n.n(u),f=n("q1tI"),m=n.n(f),v=n("i8i4"),g=n.n(v),h=(n("17x9"),n("tmCC")),b=n("tW/l"),y=n.n(b);var C=Object(h.r)();t.default={name:"AmdDocHOC",HOC:function(e,t){var n=function(n){function a(){var e,t,n,o;i()(this,a);for(var d=arguments.length,l=Array(d),c=0;c<d;c++)l[c]=arguments[c];return t=n=s()(this,(e=a.__proto__||r()(a)).call.apply(e,[this].concat(l))),n.renderEls=[],o=t,s()(n,o)}return p()(a,n),l()(a,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(e){g.a.unmountComponentAtNode(e)})}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var a=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var a=e.attributes[n].nodeName;if(/^data-\w+$/.test(a)){var r=e.attributes[n].nodeValue;t[a.match(/^data-(\w+)/)[1]]=r}}return t}(n);if(t&&"function"==typeof t[a.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var o=t[a.render]();e.renderEls.push(n),g.a.render(o,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var o=document.createElement("div");o.className="z-demo-code";var i=document.createElement("img");i.addEventListener("click",function(){i.src=i.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",o.style.height=i.open?"0px":"auto",i.open=!i.open},!1),i.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var d=document.createElement("span");d.innerText=a.title?a.title:"",t.appendChild(d),r&&t.appendChild(i),e.appendChild(t),r&&o.appendChild(r),e.appendChild(o),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof t.target._render&&e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:t.target._render(),scroll:t.target._scroll,onTransitionend:function(e){}})},10)},!1),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";e.props.showRightModal(!0,n,null,!0),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10)})}},{key:"render",value:function(){var t=this;return m.a.createElement(C,{pageHeader:{show:!1},hasBodyPadding:!1},m.a.createElement("div",{className:"z-panel "+y.a["z-md-doc"],ref:function(e){return t.mdEl=e}},m.a.createElement("div",{className:"z-panel-body"},m.a.createElement(h.d,{mode:"html"},e))))}}]),a}(m.a.Component);return h.i.setConsumer(n)}}},vjXJ:function(e,t){e.exports='<h1 id="-zdetailsimplebasehoc">详情页面：ZdetailSimpleBaseHOC</h1>\n<p><code>ZdetailSimpleBaseHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个展示详细内容结构的组件</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>\n\n<pre><code class="language-jsx">let defaultConfig = {\n    insertLocation: &quot;mainModal&quot;,\n    pageHeader: {\n        show: true,\n        // any\n        title: &quot;详情页&quot;,\n        //any\n        content: &quot;描述&quot;,\n        //element | node\n        rightMoreContent: &lt;div&gt;右边&lt;/div&gt;,\n    },\n    detail: {\n        panelHeader: &quot;基础信息&quot;,\n        items: [\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n            },\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n            },\n            {\n                key: &quot;serviceProt&quot;,\n                label: &quot;约定端口号&quot;,\n                render: (value, record) =&gt; {\n                    return &lt;span className=&quot;z-text-red&quot;&gt;{value}&lt;/span&gt;;\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务描述&quot;,\n                span: { lg: 12 },\n                render: (value, record) =&gt; {\n                    return value;\n                },\n            },\n        ],\n        // 用于修改每个item的结构的钩子，(item,data)=&gt;{return &lt;div&gt;{`${item.label}:${data[item.key]}`}&lt;/div&gt;}\n        itemsRender: null,\n        // 获取详情数据的后台接口函数，必须返回 Promise\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n    },\n    // 更多渲染内容\n    moreContentRender: function(detail, panel) {\n        return (\n            &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                &lt;div className=&quot;z-panel-body&quot;&gt;更多内容&lt;/div&gt;\n            &lt;/div&gt;\n        );\n    },\n};</code></pre>\n<h2 id="pageconfig">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>insertLocation</td>\n            <td>这个组件渲染在的位置，会影响内置事件对显示loading,打开/关闭rightModal的操作。例如：insertLocation="mainRoute"，点击新增按钮时会打开 mainModal。以此类推：mainRoute > mainModal > mainModal_top > appModal > appModal_top</td>\n            <td>mainRoute | mainModal | mainModal_top | appModal  | appModal_top</td>\n            <td>mainModal</td>\n        </tr>\n        <tr>\n            <td>pageHeader</td>\n            <td>页头内容,除了show属性，其他属性同 组件/ZpageHeader的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>detail</td>\n            <td>表单配置，请看下面的pageConfig.detail</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>moreContentRender</td>\n            <td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>\n            <td>(detail,tool) =>{return;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode|Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode|Element;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id="pageconfig-detail">pageConfig.detail</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部</td>\n            <td>string | function(){return ;}</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>items</td>\n            <td>同 组件/Zinfo的items属性</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>同 组件/Zinfo的defaultSpan属性</td>\n            <td>array[object]</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>detailApiInterface</td>\n            <td>获取详细数据的后台接口函数,必须返回Promise,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。接口响应体的data属性必须 object类型</td>\n            <td>(detailId, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n\n<h2 id="tool-">tool 参数</h2>\n<p>pageConfig 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<h3 id="tool-showloading">tool.showLoading</h3>\n<p>用于显示/取消当前页的loading  :  tool.showLoading(true)</p>\n'}}]);