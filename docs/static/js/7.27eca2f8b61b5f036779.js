(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+fre":function(e,t,n){"use strict";n.r(t);n("89bW");var r=n("XXxv"),o=n("Ds8w"),a=n.n(o),d=n("6ato"),i=n.n(d),s=n("2dj7"),u=n.n(s),l=n("Xtzg"),p=n.n(l),c=n("0dFU"),m=n.n(c),g=n("ZS5U"),f=n.n(g);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function o(){return i()(this,o),p()(this,(o.__proto__||a()(o)).apply(this,arguments))}return m()(o,n),u()(o,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{ref:function(t){e.boxEl=t}},f.a.createElement(r.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),o}(f.a.Component)}}},"0cU6":function(e,t,n){"use strict";n.r(t);var r=n("6ZY3"),o=n.n(r),a=n("bS4n"),d=n.n(a),i=n("unDg"),s=n.n(i),u=(n("uIkl"),n("Zcwe")),l=(n("xpJR"),n("DmjY")),p=(n("89bW"),n("XXxv")),c=n("ZS5U"),m=n.n(c),g=n("ebhq"),f=n("XBpp"),h=n.n(f),v=n("3P0Q"),b=n("tmCC"),q=n("40mi"),y=n("WiDR"),C=g.a.AmdDocHOC,w=g.a.AshowDemoHOC;function x(e){var t=[{key:"quick",label:"快捷操作",render:function(e){return m.a.createElement(p.a,{onClick:function(){e.setFieldsValue({confProperty:q.a.default})}},"模板配置")}},{key:"confProperty",label:"默认配置",render:function(e){return m.a.createElement(l.a.TextArea,{rows:15,placeholder:"请输入默认配置",ref:function(e){b.x.scrollDisableWheel(e.textAreaRef)}})},options:{rules:[{required:!0,message:"不能为空。"}]}}],n=[{key:"serviceCode",label:"服务编码",render:function(e){return m.a.createElement(l.a,{placeholder:"请输入服务编码"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceName",label:"服务名称",render:function(e){return m.a.createElement(l.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"remark",label:"服务说明",render:function(e){return m.a.createElement(l.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",label:"端口号",render:function(e){return m.a.createElement(u.a,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}}];return"add"===e&&(n=[].concat(s()(n),t)),{insertLocation:"mainModal",pageHeader:d()({show:!0},v.a,{breadcrumbRoutes:[]}),form:{type:e,panelHeader:"add"==e?"新增服务信息":"修改服务信息",items:n,detailApiInterface:function(e,t){return y.a.config.getServiceDetail({serviceId:e})},submitApiInterface:function(t,n){return"add"===e?y.a.config.addService(o()({},t,{environment:"default"})):y.a.config.updateService(o()({},t,{serviceId:n.detailId}))}},moreContentRender:function(){return m.a.createElement("div",{className:"z-panel z-margin-top-20"},m.a.createElement("div",{className:"z-panel-body"},"moreContentRender"))},panelBeforeRender:function(){return m.a.createElement("div",{className:"z-panel z-margin-bottom-20"},m.a.createElement("div",{className:"z-panel-body"},"panelBeforeRender"))},panelAfterRender:function(){return m.a.createElement("div",{className:"z-panel z-margin-top-20"},m.a.createElement("div",{className:"z-panel-body"},"panelAfterRender"))}}}t.default=C(h.a,{demo1:function(){var e=Object(b.g)(x("add")),t=w(m.a.createElement(e,null),!0);return m.a.createElement(t,null)},demo2:function(){var e=Object(b.g)(x("update")),t=w(m.a.createElement(e,{detailId:1}),!0);return m.a.createElement(t,null)}})},"1xVk":function(e,t,n){"use strict";var r=n("tmCC");t.a=function(e,t,n,o){return t.includes("/sys")||(t="/webapi"+t),r.x.httpAjax(e,t,n,o)}},"3P0Q":function(e,t,n){"use strict";var r=n("ZS5U"),o=n.n(r);t.a={trademark:function(){return o.a.createElement("div",{className:"z-padding-top-10"},o.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",width:"80",height:"auto",className:"z-margin-right-18"}))},breadcrumbRoutes:[{path:"config",name:"案例",link:!1},{path:"serviceWithTableList",name:"表格列表",link:!0}],title:"服务器配置",content:"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",rightMoreContent:o.a.createElement("div",null,"右边内容")}},"40mi":function(e,t,n){"use strict";t.a={default:"#Web服务器相关配置\nserver.port=11110\nserver.context-path=/\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.driverClassName=com.mysql.jdbc.Driver\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\nspring.datasource.druid.validation-query=SELECT 'x' from dual\nspring.datasource.druid.test-while-idle=true\nspring.datasource.druid.time-between-eviction-runs-millis=10000\nspring.datasource.druid.min-evictable-idle-time-millis=300000\nspring.datasource.druid.poolPreparedStatements=true\nspring.datasource.druid.maxPoolPreparedStatementPerConnectionSize=20\nspring.datasource.druid.filters=stat,slf4j\nspring.datasource.druid.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=1000\nspring.datasource.druid.useGlobalDataSourceStat=true\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0\n#json格式化\nspring.jackson.date-format=yyyy-MM-dd HH:mm:ss\nspring.jackson.time-zone=Asia/Shanghai\n#session共享\nspring.session.store-type=redis\n#文件上传\nspring.http.multipart.enabled=true\nspring.http.multipart.max-file-size=10MB\nspring.http.multipart.max-request-size=10MB\n#mybatis\nmybatis.configuration.mapUnderscoreToCamelCase=true\nmybatis.configuration.jdbcTypeForNull=NULL\n#日志\nlogging.level.com.hyzs=DEBUG\n#关闭\nendpoints.shutdown.enabled=true\nendpoints.shutdown.sensitive=false\n#分布助手配置\nlogging.pagehelper.helper-dialect=mysql\nlogging.pagehelper.reasonable=true\nlogging.pagehelper.support-methods-arguments=true\nlogging.pagehelper.params=count=countSql",dev:"#开发环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",test:"#测试环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0",prod:"#生产环境配置\n#数据连接配置\nspring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull\nspring.datasource.druid.username=user\nspring.datasource.druid.password=admin@1\nspring.datasource.druid.initial-size=5\nspring.datasource.druid.maxActive=10\nspring.datasource.druid.minIdle=10\n\n#注册中心地址\neureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka\n\n#Redis连接\nspring.redis.database=0\nspring.redis.host=172.16.8.18\nspring.redis.port=6379\nspring.redis.password=hyzs\nspring.redis.pool.maxActive=11\nspring.redis.pool.maxIdle=11\nspring.redis.pool.maxWait=-1\nspring.redis.pool.minIdle=0"}},"5WI2":function(e,t,n){"use strict";n.r(t);var r=n("tmCC");t.default={name:"config",apis:{getServiceList:function(e){return r.x.httpAjax("post","/webapi/v1.0/config/center/pageServiceInfo",e)},deleteService:function(e){return r.x.httpAjax("post","/webapi/v1.0/config/center/deleteServiceInfo",e)},addService:function(e){return r.x.httpAjax("post","/webapi/v1.0/config/center/addServiceConfig",e)},updateService:function(e){return r.x.httpAjax("post","/webapi/v1.0/config/center/updateServiceInfo",e)},getServiceDetail:function(e){return r.x.httpAjax("post","/webapi/v1.0/config/center/getServiceConfigDetail",e)},updateServiceConfig:function(e){return r.x.httpAjax("post","/webapi/v1.0/config/center/updateConfigProperty",e)}}}},O3gd:function(e,t,n){"use strict";n.r(t);var r=n("1xVk");t.default={name:"login",apis:{getUserInfo:function(){return Object(r.a)("post","/loginUserInfo")}}}},Revr:function(e,t,n){var r={"./area.api.js":"eAri","./config.api.js":"5WI2","./login.api.js":"O3gd"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="Revr"},WiDR:function(e,t,n){"use strict";var r=n("Q2cO"),o=n.n(r),a=n("Revr"),d={},i=[];a.keys().forEach(function(e){var t=void 0;try{t=a(e).default}catch(t){throw Error(e+":"+t)}if(void 0===t||"object"!==(void 0===t?"undefined":o()(t)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("object"!=o()(t.apis))throw Error(e+":apis不是object");var n=t.name;if("string"!=typeof n)throw Error(e+":缺少name属性");if(n=n.trim(),i.includes(n))throw Error(e+":"+n+"此命名空间已被使用");i.push(n),d[n]=t.apis}),t.a=d},XBpp:function(e,t){e.exports='<h1 id="-zeditsimpleformhoc">编辑页面：ZeditSimpleFormHOC</h1>\n<p><code>ZeditSimpleFormHOC</code>是一个函数，传入<code>pageConfig</code>参数配置，返回一个表单编辑结构的组件</p>\n<p>1、新增表单</p>\n<div class="z-demo-box" data-render="demo1" data-title="新增表单"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Input, InputNumber, Button } from &quot;antd&quot;;\nimport { ZeditSimpleFormHOC, zTool } from &quot;zerod&quot;;\nimport defaultConfigData from &quot;@/mock/serviceDefaultConfigData.js&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\nconst pageCofig = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n        breadcrumbRoutes: [],\n    },\n    form: {\n        type: &quot;add&quot;,\n        panelHeader: &quot;新增服务信息&quot;,\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务说明&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;servicePort&quot;,\n                detailKey: &quot;serviceProt&quot;,\n                label: &quot;端口号&quot;,\n                render: (form) =&gt; {\n                    return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;quick&quot;,\n                label: &quot;快捷操作&quot;,\n                render: (form) =&gt; {\n                    return (\n                        &lt;Button\n                            onClick={() =&gt; {\n                                form.setFieldsValue({\n                                    confProperty: defaultConfigData.default,\n                                });\n                            }}\n                        &gt;\n                            模板配置\n                        &lt;/Button&gt;\n                    );\n                },\n            },\n            {\n                key: &quot;confProperty&quot;,\n                label: &quot;默认配置&quot;,\n                render: (form) =&gt; {\n                    return (\n                        &lt;Input.TextArea\n                            rows={15}\n                            placeholder=&quot;请输入默认配置&quot;\n                            ref={(el) =&gt; {\n                                zTool.scrollDisableWheel(el.textAreaRef);\n                            }}\n                        /&gt;\n                    );\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n        ],\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n        submitApiInterface: (values, props) =&gt; {\n            return api.config.addService(Object.assign({}, values, { environment: &quot;default&quot; }));\n        },\n    },\n};\nexport default ZeditSimpleFormHOC(pageConfig);</code></pre>\n<p>2、修改表单</p>\n<div class="z-demo-box" data-render="demo2" data-title=\'form.type="update"时为修改表单,这时才会调用form.detailApiInterface钩子，使用moreContentRender函数在页面末端追加更多内容\'></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Input, InputNumber, Button } from &quot;antd&quot;;\nimport { ZeditSimpleFormHOC, zTool } from &quot;zerod&quot;;\nimport defaultConfigData from &quot;@/mock/serviceDefaultConfigData.js&quot;;\n// 后台接口\nimport api from &quot;@/App.api.js&quot;;\nconst pageCofig = {\n    pageHeader: {\n        show: true,\n        ...pageHeader,\n        breadcrumbRoutes: [],\n    },\n    form: {\n        type: &quot;update&quot;,\n        panelHeader: &quot;修改服务信息&quot;,\n        items: [\n            {\n                key: &quot;serviceCode&quot;,\n                label: &quot;服务编码&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceName&quot;,\n                label: &quot;服务名称&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;serviceRemark&quot;,\n                label: &quot;服务说明&quot;,\n                render: (form) =&gt; {\n                    return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n            {\n                key: &quot;servicePort&quot;,\n                detailKey: &quot;serviceProt&quot;,\n                label: &quot;端口号&quot;,\n                render: (form) =&gt; {\n                    return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n                },\n                //antd的 form.getFieldDecorator的options\n                options: {\n                    //验证规则\n                    rules: [\n                        {\n                            required: true,\n                            message: &quot;不能为空。&quot;,\n                        },\n                    ],\n                },\n            },\n        ],\n        detailApiInterface: (id, props) =&gt; {\n            return api.config.getServiceDetail({ serviceId: id });\n        },\n        submitApiInterface: (values, props) =&gt; {\n            return api.config.updateService(Object.assign({}, values, { serviceId: props.detailId }));\n        },\n    },\n    moreContentRender: function(detail, panel) {\n        return (\n            &lt;div className=&quot;z-panel z-margin-top-20&quot;&gt;\n                &lt;div className=&quot;z-panel-body&quot;&gt;更多内容&lt;/div&gt;\n            &lt;/div&gt;\n        );\n    },\n};\nexport default ZeditSimpleFormHOC(pageConfig);</code></pre>\n<h2 id="pageconfig">pageConfig</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr>\n            <td>pageHeader</td>\n            <td>页头内容,除了show属性(默认false)，其他属性同 组件/ZpageHeader的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>pageFooter</td>\n            <td>页尾内容,除了show属性(默认true)，其他属性同 组件/pageFooter的Props</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>hasBodyPadding</td>\n            <td>中间部分是否有padding值</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>form</td>\n            <td>表单配置，请看下面的pageConfig.form</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>moreContentRender</td>\n            <td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>\n            <td>(detail,tool) =>{return;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>panelBeforeRender</td>\n            <td>列表面板上面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode|Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>panelAfterRender</td>\n            <td>列表面板下面的渲染函数</td>\n            <td>function(detail,tool){return ReacNode|Element;}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id="pageconfig-form">pageConfig.form</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>type</td>\n            <td>表单类型：新增操作 | 修改操作</td>\n            <td>add | update</td>\n            <td>mainRoute</td>\n        </tr>\n        <tr>\n            <td>panelHeader</td>\n            <td>列表面板的头部内容,为null则不显示面板头部</td>\n            <td>string | function(){return ;}</td>\n            <td>列表</td>\n        </tr>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，结构：同 组件/Zform 的items结构</td>\n            <td>array[object] | null</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>同 组件/Zform 的defaultSpan属性</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>submitBtnName</td>\n            <td>同 组件/Zform 的submitBtnName属性</td>\n            <td>string</td>\n            <td>保存</td>\n        </tr>\n        <tr>\n            <td>submitMsg</td>\n            <td>同 组件/Zform 的submitMsg属性</td>\n            <td>string</td>\n            <td>点击确定按钮提交数据</td>\n        </tr>\n        <tr>\n            <td>submitBtnRender</td>\n            <td>同 组件/Zform 的submitBtnRender属性</td>\n            <td>funtion(onSubmit,props){return ReactNode | Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>detailApiInterface</td>\n            <td>获取详细数据的后台接口函数,必须返回Promise,只有form.type="update"才自动调用,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。接口响应体的data属性必须 object类型</td>\n            <td>(detailId, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>submitApiInterface</td>\n            <td>保存数据的后台接口函数,即保存按钮点击触发的函数,必须返回Promise,参数有：values:表单的值，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性</td>\n            <td>(values, props,tool) =>{return Promise;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>showSubmitBtn</td>\n            <td>是否显示提交按钮</td>\n            <td>boolean</td>\n            <td>true</td>\n        </tr>\n        <tr>\n            <td>afterSubmitSuccess</td>\n            <td>保存数据成功的回调 values：表单的值</td>\n            <td>(value, tool) =>{}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2 id="tool-">tool 参数</h2>\n<p>pageConfig 中的一些函数如<code>moreContentRender</code>提供了<code>tool</code>参数出来，有如下内容：</p>\n<p><code>tool</code>对象不但包含<code>ZerodMainContext</code>提供的东西（请查看 上下文/ ZerodMainContext ），比如 tool.showRightModal，还提供如下内容：</p>\n<h3 id="tool-getforminstance">tool.getFormInstance</h3>\n<p>是一个函数，可以 const myform=tool.getFormInstance()取得 antd 中经 Form.create() 包装过的组件自带的 this.props.form 属性 ；<a href="https://ant.design/components/form-cn/" target="_blank"> 更多请查看 antd 的 Form</a></p>\n<h3 id="tool-methods">tool.methods</h3>\n<p>tool.methods 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>方法</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>showLoading</td>\n            <td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>\n            <td>tool.methods.showLoading(true)</td>\n        </tr>\n        <tr>\n            <td>getFormDetailData</td>\n            <td>会触发pageConfig.form.detailApiInterface函数</td>\n            <td>tool.methods.getFormDetailData()</td>\n        </tr>\n        <tr>\n            <td>openModal</td>\n            <td>根据当前位置打开下一级rightModal</td>\n            <td>tool.methods.openModal(content)</td>\n        </tr>\n        <tr>\n            <td>closeCurrentModal</td>\n            <td>关闭当前的rightModal</td>\n            <td>tool.methods.closeCurrentModal()</td>\n        </tr>\n        <tr>\n            <td>onSubmit</td>\n            <td>ZeditSimpleFormHOC的submit方法，需参数values:表单的所有值的map对象，tool.submit(values)会触发submitApiInterface，异步回调后会触发afterSuccess</td>\n            <td>tool.methods.onSubmit(values)</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3 id="tool-router">tool.$router</h3>\n<p>tool.$router 是一个对象，内容如下：</p>\n<table>\n    <thead>\n        <tr>\n            <th>属性</th>\n            <th>说明</th>\n            <th>使用方式</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>history</td>\n            <td>可以调用push、replace等跳转路由path得方法，<a href="https://reacttraining.com/react-router/web/api/history" target="_blank"> 更多请查看react-router的history</a></td>\n            <td>tool.$router.history.push("/login")</td>\n        </tr>\n        <tr>\n            <td>location</td>\n            <td>当前路由的相关信息,<a href="https://reacttraining.com/react-router/web/api/location" target="_blank"> 更多请查看react-router的location</a></td>\n            <td>tool.$router.location.pathname</td>\n        </tr>\n    </tbody>\n</table>\n'},eAri:function(e,t,n){"use strict";n.r(t);var r=n("1xVk");t.default={name:"area",apis:{getChildList:function(e){return Object(r.a)("get","/mzfwjg/sys/areas/"+e.id+"/children")}}}},ebhq:function(e,t,n){"use strict";var r=n("Q2cO"),o=n.n(r),a=n("jjl2"),d={},i=[];a.keys().forEach(function(e){var t=void 0;try{t=a(e).default}catch(t){throw Error(e+":"+t)}if(void 0===t||"object"!==(void 0===t?"undefined":o()(t)))throw Error(e+":内没有 export default 或者export default格式有误 ");if("function"!=typeof t.HOC)throw Error(e+":HOC有误");var n=t.name;if("string"!=typeof n)throw Error(e+":缺少name属性");if(!/^A[A-z0-9]*HOC$/.test(n))throw Error(e+":name属性请以A开头HOC结尾");if(n=n.trim(),i.includes(n))throw Error(e+":"+n+"此HOC名称已被使用");i.push(n),d[n]=t.HOC}),t.a=d},jjl2:function(e,t,n){var r={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="jjl2"},pnNO:function(e,t,n){"use strict";n.r(t);var r=n("Ds8w"),o=n.n(r),a=n("6ato"),d=n.n(a),i=n("2dj7"),s=n.n(i),u=n("Xtzg"),l=n.n(u),p=n("0dFU"),c=n.n(p),m=n("ZS5U"),g=n.n(m),f=n("FY2y"),h=n.n(f),v=(n("T9cD"),n("tmCC")),b=n("tW/l"),q=n.n(b);var y=Object(v.r)();t.default={name:"AmdDocHOC",HOC:function(e,t){var n=function(n){function r(){var e,t,n,a;d()(this,r);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return t=n=l()(this,(e=r.__proto__||o()(r)).call.apply(e,[this].concat(s))),n.renderEls=[],a=t,l()(n,a)}return c()(r,n),s()(r,[{key:"componentWillUnmount",value:function(){this.renderEls.forEach(function(e){h.a.unmountComponentAtNode(e)})}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var r=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var r=e.attributes[n].nodeName;if(/^data-\w+$/.test(r)){var o=e.attributes[n].nodeValue;t[r.match(/^data-(\w+)/)[1]]=o}}return t}(n);if(t&&"function"==typeof t[r.render]){var o=n.nextElementSibling;o=o&&"pre"==o.localName?o:null;var a=t[r.render]();e.renderEls.push(n),h.a.render(a,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var d=document.createElement("img");d.addEventListener("click",function(){d.src=d.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=d.open?"0px":"auto",d.open=!d.open},!1),d.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var i=document.createElement("span");i.innerText=r.title?r.title:"",t.appendChild(i),o&&t.appendChild(d),e.appendChild(t),o&&a.appendChild(o),e.appendChild(a),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){"function"==typeof t.target._render&&e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:t.target._render(),scroll:t.target._scroll,onTransitionend:function(e){}})},10)},!1),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn")&&setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";e.props.showRightModal(!0,n,null,!0),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10)})}},{key:"render",value:function(){var t=this;return g.a.createElement(y,{pageHeader:{show:!1},hasBodyPadding:!1},g.a.createElement("div",{className:"z-panel "+q.a["z-md-doc"],ref:function(e){return t.mdEl=e}},g.a.createElement("div",{className:"z-panel-body"},g.a.createElement(v.d,{mode:"html"},e))))}}]),r}(g.a.Component);return v.i.setConsumer(n)}}}}]);