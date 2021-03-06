<div class="z-doc-titles"></div>

# 详情页面：ZdetailSimpleBaseHOC

`ZdetailSimpleBaseHOC`是一个函数，传入`pageConfig`参数配置，返回一个展示详细内容结构的组件

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
let defaultConfig = {
	pageHeader: {
		show: true,
		// any
		title: "详情页",
		//any
		content: "描述",
		//element | node
		rightMoreContent: <div>右边</div>,
	},
	detail: {
		panelHeader: "基础信息",
		items: [
			{
				key: "serviceName",
				label: "服务名称",
			},
			{
				key: "serviceCode",
				label: "服务编码",
			},
			{
				key: "serviceProt",
				label: "约定端口号",
				render: (value, record) => {
					return <span className="z-text-red">{value}</span>;
				},
			},
			{
				key: "serviceRemark",
				label: "服务描述",
				span: { lg: 12 },
				render: (value, record) => {
					return value;
				},
			},
		],
		// 用于修改每个item的结构的钩子，(item,data)=>{return <div>{`${item.label}:${data[item.key]}`}</div>}
		itemsRender: null,
		// 获取详情数据的后台接口函数，必须返回 Promise
		detailApiInterface: (id, props) => {
			return api.config.getServiceDetail({ serviceId: id });
		},
	},
	// 更多渲染内容
	moreContentRender: function(detail, panel) {
		return (
			<div className="z-panel z-margin-top-20">
				<div className="z-panel-body">更多内容</div>
			</div>
		);
	},
};
```

<div class="z-doc-titles"></div>

## pageConfig

除了如下的属性，pageConfig还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的props

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>detail</td>
			<td>表单配置，请看下面的pageConfig.detail</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender</td>
			<td>在表单之后添加更多内容的渲染函数,有两个参数detail：detailApiInterface接口获取的详情数据、panel:组件的实例对象</td>
			<td>(detail,tool) =>{return;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender</td>
			<td>列表面板上面的渲染函数</td>
			<td>function(detail,tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender</td>
			<td>列表面板下面的渲染函数</td>
			<td>function(detail,tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
			<tr>
			<td>exportSomething</td>
			<td>是一个获取tool的钩子，相当于组件的componentDidMount</td>
			<td>function(tool){ myTool=tool }</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

## pageConfig.detail

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>panelHeader</td>
			<td>列表面板的头部内容,为null则不显示面板头部</td>
			<td>string | function(tool){return ;}</td>
			<td>列表</td>
		</tr>
		<tr>
			<td>items</td>
			<td>同 <span class="z-history-href" data-path="/main/component-doc/Zinfo-doc">组件/Zinfo</span> 的items属性</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>defaultSpan</td>
			<td>同 <span class="z-history-href" data-path="/main/component-doc/Zinfo-doc">组件/Zinfo</span> 的defaultSpan属性</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>detailApiInterface</td>
			<td>获取详细数据的后台接口函数,必须返回Promise,参数有 detailId : ZeditSimpleFormHOC(pageConfig)得到组件的detailId属性，props ：ZeditSimpleFormHOC(pageConfig)得到组件的其他属性。then((re)=>{})的回调中re结构须：{ data:{} }</td>
			<td>(detailId, props,tool) =>{return Promise;}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

## tool 参数

pageConfig 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请查看 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span> ），比如 tool.showRightModal，还提供如下内容：

### tool.methods

tool.methods 是一个对象，内容如下：

<table>
	<thead>
		<tr>
			<th>方法</th>
			<th>说明</th>
			<th>使用方式</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>showLoading</td>
			<td>用于 显示/取消 当前页的loading的方法，必需参数show：true|false</td>
			<td>tool.methods.showLoading(true)</td>
		</tr>
		<tr>
			<td>getDetailData</td>
			<td>会触发pageConfig.detail.detailApiInterface函数</td>
			<td>tool.methods.getDetailData()</td>
		</tr>
		<tr>
			<td>openModal</td>
			<td>根据当前位置打开下一级rightModal</td>
			<td>tool.methods.openModal(content)</td>
		</tr>
		<tr>
			<td>closeCurrentModal</td>
			<td>关闭当前的rightModal</td>
			<td>tool.methods.closeCurrentModal()</td>
		</tr>
		<tr>
			<td>notice</td>
			<td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>
			<td>tool.methods.notice.success("操作成功" [,config])</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

### tool.$router

tool.$router是一个对象，内容如下：

<table>
	<thead>
		<tr>
			<th>属性</th>
			<th>说明</th>
			<th>使用方式</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>history</td>
			<td>可以调用push、replace等跳转路由path得方法，<a href="https://reacttraining.com/react-router/web/api/history" target="_blank"> 更多请查看react-router的history</a></td>
			<td>tool.$router.history.push("/login")</td>
		</tr>
		<tr>
			<td>location</td>
			<td>当前路由的相关信息,<a href="https://reacttraining.com/react-router/web/api/location" target="_blank"> 更多请查看react-router的location</a></td>
			<td>tool.$router.location.pathname</td>
		</tr>
	</tbody>
</table>