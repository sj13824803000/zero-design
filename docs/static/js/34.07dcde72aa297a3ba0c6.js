(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+fre":function(e,t,n){"use strict";n.r(t);var o=n("L3G2"),a=n.n(o),r=n("Ds8w"),s=n.n(r),l=n("6ato"),i=n.n(l),c=n("2dj7"),d=n.n(c),u=n("Xtzg"),p=n.n(u),f=n("0dFU"),m=n.n(f),h=n("6cB7"),v=n.n(h);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function o(){return i()(this,o),p()(this,(o.__proto__||s()(o)).apply(this,arguments))}return m()(o,n),d()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{ref:function(t){e.boxEl=t}},v.a.createElement(a.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(v.a.Component)}}},"+xuy":function(e,t,n){"use strict";n.r(t);var o=n("ebhq"),a=n("ny2T"),r=n.n(a),s=o.a.AmdDocHOC;t.default=s(r.a)},ebhq:function(e,t,n){"use strict";var o=n("Q2cO"),a=n.n(o),r=n("jjl2"),s={},l=[];r.keys().forEach(function(e){var t=void 0;try{t=r(e).default}catch(t){throw Error(e+":"+t)}if(void 0===t||"object"!==(void 0===t?"undefined":a()(t)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("function"!=typeof t.HOC)throw Error(e+":HOC有误");var n=t.name;if("string"!=typeof n)throw Error(e+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(e+":name属性请以A开头HOC结尾");if(n=n.trim(),l.includes(n))throw Error(e+":"+n+"此HOC名称已被使用");l.push(n),s[n]=t.HOC}),t.a=s},jjl2:function(e,t,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function a(e){var t=r(e);return n(t)}function r(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="jjl2"},ny2T:function(e,t){e.exports='<h1 id="zerodrootcontext">ZerodRootContext</h1>\n<p>在<code>ZappHOC</code>中启用了<code>ZerodRootContext</code>的上文，通过<code>ZerodRootContext.setConsumer(组件)</code>包装的组件，可以使用<code>this.props</code>调用以下东西：</p>\n<p>目前只有：</p>\n<h2 id="-footerlinks">页面的底部链接：footerLinks</h2>\n<p>对应<code>ZappHOC</code>的 pageConfig.footerLinks</p>\n<h2 id="-footercopyright">页面的底部版权信息：footerCopyright</h2>\n<p>对应<code>ZappHOC</code>的 pageConfig.footerCopyright</p>\n<h2 id="-key">用于转发后台接口响应体数据的key</h2>\n<p>对应<code>ZappHOC</code>的 pageConfig.responseKeys</p>\n'},pnNO:function(e,t,n){"use strict";n.r(t);var o=n("unDg"),a=n.n(o),r=n("Ds8w"),s=n.n(r),l=n("6ato"),i=n.n(l),c=n("2dj7"),d=n.n(c),u=n("Xtzg"),p=n.n(u),f=n("0dFU"),m=n.n(f),h=n("6cB7"),v=n.n(h),g=n("VUem"),E=n.n(g),y=(n("T9cD"),n("tmCC")),C=n("tW/l"),w=n.n(C);var b=Object(y.r)();t.default={name:"AmdDocHOC",HOC:function(e,t){e='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+e;var n=function(n){function o(){var e,t,n,r;i()(this,o);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return t=n=p()(this,(e=o.__proto__||s()(o)).call.apply(e,[this].concat(c))),n.renderEls=[],n.state={navs:[],closeModaled:!0},n.setNavs=function(){var e=[],t=n.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(t).forEach(function(t){e.push({name:t.dataset.title?t.dataset.title:t.nextElementSibling.innerText,el:t.nextElementSibling,active:-n.scrollInstance.scroll.y==t.nextElementSibling.offsetTop-24})}),e.length&&n.setState({navs:e},function(){if(n.bindScrollEvent(),n.navEl&&n.navContentEl){var e=y.x.BuildScroll;n.navScroollInstance=new e(n.navEl,{scrollbars:"custom"}),y.x.listenDivSizeChange(n.navEl,n.navScroollInstance.refresh),y.x.listenDivSizeChange(n.navContentEl,n.navScroollInstance.refresh)}})},n.bindScrollEvent=function(){n.scrollInstance.scroll.on("scrollEnd",function(){if(!n.unmounted){var e=-n.scrollInstance.scroll.y;n.state.navs.forEach(function(e){e.active=!1});for(var t=n.state.navs.length,o=0;o<t;o++){var r=n.state.navs[o];if(e>=r.el.offsetTop-120){if(!(o<t-1)){r.active=!0;break}var s=n.state.navs[o+1];if(s&&e<s.el.offsetTop-120){r.active=!0;break}}}n.setState({navs:[].concat(a()(n.state.navs))})}})},n.navScrollTo=function(e){n.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},r=t,p()(n,r)}return m()(o,n),d()(o,[{key:"componentWillUnmount",value:function(){this.unmounted=!0,this.renderEls.forEach(function(e){E.a.unmountComponentAtNode(e)})}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var o=e.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var a=e.attributes[n].nodeValue;t[o.match(/^data-(\w+)/)[1]]=a}}return t}(n);if(t&&"function"==typeof t[o.render]){var a=n.nextElementSibling;a=a&&"pre"==a.localName?a:null;var r=t[o.render]();e.renderEls.push(n),E.a.render(r,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var r=document.createElement("div");r.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",r.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=o.title?o.title:"",t.appendChild(l),a&&t.appendChild(s),e.appendChild(t),a&&r.appendChild(a),e.appendChild(r),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof t.target._render&&e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:t.target._render(),scroll:t.target._scroll,onTransitionend:function(t){e.setState({closeModaled:!t})}})},10)},!1),this.mdEl.addEventListener("click",function(t){if("string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";e.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(t){e.setState({closeModaled:!t})}}),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof t.target.className&&t.target.className.includes("z-history-href")){var n=t.target.dataset.path;"string"==typeof n&&e.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var t=this;return v.a.createElement(y.l.Template,null,v.a.createElement(b,{pageHeader:{show:!1},hasBodyPadding:!1},v.a.createElement("div",{className:"z-panel "+w.a["z-md-doc"],ref:function(e){return t.mdEl=e}},v.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},v.a.createElement(y.d,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?E.a.createPortal(v.a.createElement("div",{className:w.a["z-nav-box"],ref:function(e){return t.navEl=e}},v.a.createElement("div",{ref:function(e){return t.navContentEl=e}},v.a.createElement("section",null,this.state.navs.map(function(e,n){return v.a.createElement("div",{title:e.name,className:w.a["z-nav"]+" "+(e.active?w.a.active:""),key:n,onClick:function(){t.navScrollTo(e)}},e.name)})))),document.body):null)}}]),o}(v.a.Component);return y.i.setConsumer(n)}}}}]);