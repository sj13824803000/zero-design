<div class="z-doc-titles"></div>

# 列表展示：ZsearchListHOC

`ZsearchListHOC`是一个函数，传入`pageConfig`参数配置，返回一个有头有尾有查询列表的组件

`ZsearchListHOC`内置了一个`ZlistPanel`组件，可以`import {ZlistPanel} from "zerod"`引入，`ZlistPanel`的 props 同 `pageConfig.list`

1、table 类型

<div class="z-demo-box" data-render="demo1" data-title="此demo结合ZeditSimpleFormHOC、ZdetailSimpleBaseHOC的完整示例"></div>

```jsx
import React from "react";
import { Input, message } from "antd";
import { ZsearchListHOC, zTool } from "zerod";

import api from "@/App.api.js";

import getEditPage from "./getEditPage.js";
import getDetailPage from "./getDetailPage.js";

const pageConfig = {
	pageHeader: {
		show: true,
		trademark: (
			<img
				src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
				width="60"
				className="z-margin-right-15"
			/>
		),
		// array>[object] | null,如果是null则不显示面包屑
		breadcrumbRoutes: [
			{ path: "config", name: "案例", link: false },
			{ path: "serviceWithTableList", name: "表格列表", link: true },
		],
		// any
		title: "服务器配置",
		// any
		content:
			"微服务的定义，维护其配置。除了Eureka Service及Config Center两种服务不在这里配置，其他服务都必须在此定义和配置！",
		// element | node | function
		rightMoreContent: <div>右边内容</div>,
	},
	searchForm: {
		// array>[object] | null，如果是null则不显示搜索表单
		items: [
			{
				key: "serviceCode",
				label: "服务编码",
				render: (form) => {
					return <Input placeholder="请输入内容" />;
				},
			},
			{
				key: "serviceName",
				label: "服务名称",
				render: (form) => {
					return <Input placeholder="请输入内容" />;
				},
			},
		],
	},
	list: {
		// table | card
		listType: "table",
		cardCoverRender: null, // listType=="card"时的一个前置render
		panelHeader: "列表",
		// 表格操作列的字段key
		actionDataIndex: "serviceName",
		// antd  Table的参数
		tableParams: {
			//通过展开查看更多内容
			expandedRowRender: (record, index, indent, expanded) => {
				return (
					<div>
						<dl className="z-info">
							<dt className="z-info-left z-padding-bottom-10">服务名称</dt>
							<dd className="z-info-right z-padding-bottom-10">{record.serviceName}</dd>
						</dl>
						<dl className="z-info">
							<dt className="z-info-left z-padding-bottom-10">服务编码</dt>
							<dd className="z-info-right z-padding-bottom-10">{record.serviceCode}</dd>
						</dl>
						<dl className="z-info">
							<dt className="z-info-left z-padding-bottom-10">服务描述</dt>
							<dd className="z-info-right z-padding-bottom-10">{record.remark}</dd>
						</dl>
					</div>
				);
			},
		},
		// 表格列map数据数据，同antd的表格 columns
		tableColumns: [
			{
				title: "服务名称",
				dataIndex: "serviceName",
				sorter: true, //启用排序字段
			},
			{
				title: "服务编码",
				dataIndex: "serviceCode",
				sorter: true, //启用排序字段
			},
			{
				title: "约定端口号",
				dataIndex: "servicePort",
				render: (text, record, index, instance) => {
					return <span className="z-text-red">{text}</span>;
				},
			},
			{
				title: "服务描述",
				dataIndex: "remark",
			},
		],
		// 是否显示新建按钮
		showAddBtn: true,
		addPageRender: (panel) => {
			const AddPage = getEditPage({
				pageType: "add",
				headerTitle: "新增服务配置",
				headerContent: "新增一个服务,需要录入服务编码服务名称端口号等信息",
				// 保存数据成功的回调
				afterSubmitSuccess: (closeRightModal) => {
					// 保存数据成功后刷新列表数据
					panel.methods.getListData();
					// 关闭右边modal
					closeRightModal();
				},
			});
			return <AddPage />;
		},
		// 是否显示详情按钮
		showDetailBtn: true,
		detailPageRender: (record) => {
			const DetailPage = getDetailPage({ headerTitle: record.serviceName, headerContent: record.remark });
			return <DetailPage detailId={record.id} />;
		},
		// 是否显示修改按钮
		showUpdateBtn: true,
		// 修改按钮权限控制代码
		updateBtnPermCod: "",
		updatePageRender: (record, panel) => {
			const UpdatePage = getEditPage({
				pageType: "update",
				headerTitle: record.serviceName,
				headerContent: record.remark,
				afterSubmitSuccess: (closeRightModal) => {
					panel.methods.getListData(); // 保存数据成功后刷新列表数据
				},
			});
			return <UpdatePage detailId={record.id} />;
		},
		// 是否显示删除按钮
		showDeleteBtn: true,
		// 删除按钮权限控制代码
		deleteBtnPermCod: "",
		//更多操作按钮的map数据
		moreBtnMap: [
			{
				key: "0",
				name: "默认的按钮",
			},
		],
		//更多操作按钮的的点击事件
		onMoreBtnClick: (item, record) => {
			message.success(`您当前点击的是[${record.serviceName}]这条数据`);
		},
		// 获取列表数据的后台接口函数，其必须内部返回Promise
		listApiInterface: (query) => {
			return api.config.getServiceList(Object.assign(query, { servcieName: query.serviceName })); //处理字段名
		},
		// 删除按钮的后台接口函数，其必须内部返回Promise
		deleteApiInterface: (data) => {
			return api.config.deleteService({ id: data.id });
		},
		//是否显示分页
		showPagination: true,
		// 分页类型 paging | infinite
		paginationType: "paging",
	},
};
export default ZsearchListHOC(pageConfig);
```

2、card 类型 + 按字段排序 + 无限追加的分页类型

<div class="z-demo-box" data-render="demo2" data-title="关键代码如下"></div>

```jsx
const pageConfig = {
	list: {
		listType: "card",
		// 分页类型
		paginationType: "infinite",
		getPageSize: (listType) => 2,
		tableColumns: [
			{
				title: "服务名称",
				dataIndex: "serviceName",
				sorter: true, //启用排序
			},
			{
				title: "服务编码",
				dataIndex: "serviceCode",
				sorter: true, //启用排序
			},
			{
				title: "约定端口号",
				dataIndex: "servicePort",
				render: (text, record, index, instance) => {
					return <span className="z-text-red">{text}</span>;
				},
			},
			{
				title: "服务描述",
				dataIndex: "remark",
			},
		],
	},
};
```

2、simple 类型

<div class="z-demo-box" data-render="demo3" data-title="关键代码如下"></div>

```jsx
const pageConfig = {
	list: {
		listType: "simple",
		// 分页类型
		paginationType: "infinite",
		getPageSize: (listType) => 3,
		tableColumns: [
			{
				title: "服务名称",
				dataIndex: "serviceName",
				sorter: true, //启用排序
			},
			{
				title: "服务编码",
				dataIndex: "serviceCode",
				sorter: true, //启用排序
			},
			{
				title: "约定端口号",
				dataIndex: "servicePort",
				render: (text, record, index, instance) => {
					return <span className="z-text-red">{text}</span>;
				},
			},
			{
				title: "服务描述",
				dataIndex: "remark",
			},
		],
	},
};
```

<div class="z-doc-titles"></div>

## pageConfig

除了如下的属性，pageConfig 还包含 <span class="z-history-href" data-path="/main/HOC-doc/ZpageWraperHOC-doc">HOC/页面头尾结构：ZpageWrapper</span> 的 props

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
			<td>searchForm</td>
			<td>
				<p>1、<code>searchForm.defaultExpanded</code> 是否默认展开表单,(默认false)</p>
				<p>2、<code>searchForm.insertTo</code> 此属性可以是:一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false || (tool)=>{return 一个已存在的dom元素 || 一个已存在的dom元素的Id || true || false}，其用途为：将searchForm插到某个dom元素内,如为true则插到页头显示,(默认false)</p>
				<p>3、<code>searchForm的其他属性</code>还包含： 请查看 <span class="z-history-href" data-path="/main/component-doc/ZsearchForm-doc">组件/ZsearchForm</span> 的 props  (除了onSearch, onReset, noCollapse ,hidden ,其他都有效)。</p>
				<p>4、其中<code>searchForm.items</code>的<code>render函数</code>的参数在这里多加tool,如：items:[{render:(form,changeFormItems,tool)=>{},key:"myKey"}]。</p>
				<p>5、其中<code>searchForm.items</code>的<code>options函数</code>的参数在这里多加tool,如：items:[{options:(tool)=>options}]。</p>
				<p>6、<code>searchForm</code>的其他<code>函数属性</code>除了原有的参数，还多加tool，如 <code>searchForm.afterItemsRendered</code>:(form,methods,tool)=>{}</p>
			</td>
			<td>object</td>
			<td>--</td>
		</tr>
		<tr>
			<td>list</td>
			<td>列表展示，请看下面的pageConfig.list</td>
			<td>object</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

## pageConfig.list

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
			<td>listType</td>
			<td>列表类型</td>
			<td>table | card | simple</td>
			<td>table</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> cardCoverRender</td>
			<td>listType="card" | "simple"，卡片的上部渲染函数或者是自定义图标、图片等</td>
			<td>function(record){return ;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>cardSpan</td>
			<td>listType="card" | "simple"，栅栏占格,默认{ xxl:6,xl:8:lg:12:md:24}</td>
			<td>number | object</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelHeader</td>
			<td>列表面板的头部内容,为null则不显示面板头部。也可以是一个对象：{left:(tool)=>span,center:(tool)=>span,right:(tool)=>span,}</td>
			<td>string | (tool)=>span | object</td>
			<td>列表</td>
		</tr>
		<tr>
			<td>tableParams</td>
			<td><a href="https://ant.design/components/table-cn/" target="_blank">Antd 的Table参数</a>,除了columns、dataSource、pagination，其他都可用,默认rowKey:"id"</td>
			<td>object</td>
			<td>{rowkey:"id"}</td>
		</tr>
		<tr>
			<td>tableColumns</td>
			<td>表格列数据,<a href="https://ant.design/components/table-cn/" target="_blank">同Antd的表格 columns</a>，其中render函数参数为：(text,record,index,tool)=>自定义内容。尽管属性名与"table"相关,当listType="card"时也是有效的,也是必需的。在此，还额外增加show属性，为是否默认显示此列(字段)。</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>actionColumnWidth</td>
			<td>表格操作列的宽度</td>
			<td>string | number</td>
			<td>360</td>
		</tr>
		<tr>
			<td>actionDataIndex</td>
			<td>操作区的key</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> actionRender</td>
			<td>操作区的render,可以自定义操作按钮</td>
			<td>(text, record,index,tool,isListCard)=>{return [按钮1,按钮2]}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>listApiInterface</td>
			<td>获取列表数据的后台接口函数,其必须返回Promise,参数有query:查询表单相关值、分页数据、排序字段,sorter:更多排序数据。接口响应体的data属性支持 array和object类型</td>
			<td>(query,sorter,tool) => Promise对象</td>
			<td>--</td>
		</tr>
		<tr>
			<td>deleteApiInterface</td>
			<td>删除按钮后台接口函数,其必须返回Promise,参数有data:每一行数据</td>
			<td>(data,tool) => Promise对象</td>
			<td>--</td>
		</tr>
		<tr>
			<td>showPagination</td>
			<td>是否启用分页</td>
			<td>boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>paginationType</td>
			<td>分页类型,paging:普通分页，infinite:无限追加</td>
			<td>paging | infinite</td>
			<td>paging</td>
		</tr>
		<tr>
			<td>getPageSize</td>
			<td>设置pageSize的钩子 (listType, isListCard)=>isListCard ? 8 : 10</td>
			<td>function</td>
			<td>(listType, isListCard,tool)=>isListCard ? 8 : 10</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showAddBtn</td>
			<td>是否显示新增按钮</td>
			<td>boolean | function(tool){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>addPageRender</td>
			<td>新增按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showDetailBtn</td>
			<td>是否显示详情按钮</td>
			<td>boolean | function(record,index,tool){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>detailPageRender</td>
			<td>详情按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(record,tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showUpdateBtn</td>
			<td>是否显示修改按钮</td>
			<td>boolean | function(record,index,tool){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>updatePageRender</td>
			<td>修改按钮打开的页面渲染函数,如果函数return false,此函数相当于按钮点击事件的回调；tool参数是列表组件的内部提供的一些工具方法</td>
			<td>function(record,tool){return ReacNode|Element}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> showDeleteBtn</td>
			<td>是否显示删除按钮</td>
			<td>boolean | function(record,index,tool){return false}</td>
			<td>true</td>
		</tr>
		<tr>
			<td>moreBtnType</td>
			<td>更多操作按钮显示类型</td>
			<td>rounding | menu</td>
			<td>rounding</td>
		</tr>
		<tr>
			<td>moreBtnMap</td>
			<td>更多操作按钮的map数据,[{key: "0",name: "默认的按钮", <i class="zero-icon zerod-shengchangzhouqi"></i> show: boolean | function(record,index,item){return true;},disabled:boolean}]</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onMoreBtnClick</td>
			<td>更多操作按钮点击事件，参数有item:当前按钮的map对象，record:当前行的数据</td>
			<td>function(item, record,tool){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelBeforeRender</td>
			<td>列表面板上面的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> panelAfterRender</td>
			<td>列表面板下面的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> moreContentRender</td>
			<td>分页控件下面更多内容的渲染函数</td>
			<td>function(tool){return ReacNode|Element;}</td>
			<td>--</td>
		</tr>
			<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> addBtnDisabled</td>
			<td>是否禁用新建按钮</td>
			<td>boolean | function(tool){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> detailBtnDisabled</td>
			<td>是否禁用详情按钮</td>
			<td>boolean | function(record,index,tool){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> updateBtnDisabled</td>
			<td>是否禁用修改按钮</td>
			<td>boolean | function(record,index,tool){return false}</td>
			<td>false</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> deleteBtnDisabled</td>
			<td>是否禁用删除按钮</td>
			<td>boolean | function(record,index,tool){return false}</td>
			<td>false</td>
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

## tool 参数

pageConfig.list 中的一些函数如`moreContentRender`提供了`tool`参数出来，有如下内容：

`tool`对象不但包含`ZerodMainContext`提供的东西（请 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">查看 上下文/ZerodMainContext</span>），比如 tool.showRightModal，还提供如下内容：

### tool.getPage

获取当前列表的分页相关信息的函数

### tool.getSearchQuery

获取当前查询表单中各控件的值的函数

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
			<td>getListData</td>
			<td>更新列表数据的方法，会触发pageConfig.list的listApiInterface函数；可选参数有isMerge:是否当前列表追加数据、否的话是覆盖原数据，moreQuery:是一个对象，是更多传入listApiInterface的参数</td>
			<td>tool.methods.getListData()</td>
		</tr>
		<tr>
			<td>removeOneData</td>
			<td>移除当前列表的一条数据，必需参数rowData:一行的数据 或者 对应pageConfig.list.tableParams.rowKey的数据(默认是id)，如传入 {id:5}，则会移除列表数据中id=5的那一条 </td>
			<td>tool.methods.removeOneData({id:5})</td>
		</tr>
		<tr>
			<td>openModal</td>
			<td>打开当前列表所在位置关联的rightModal，与tool.showRightModal有区别；必需参数content:窗口的内容</td>
			<td>tool.methods.openModal(<\div\>内容<\/div\>)</td>
		</tr>
		<tr>
			<td>closeCurrentModal</td>
			<td>关闭当前的rightModal</td>
			<td>tool.methods.closeCurrentModal()</td>
		</tr>
		<tr>
			<td>currentListData</td>
			<td>获取当前列表的全部数据(数组)的方法</td>
			<td>const listData=tool.methods.currentListData()</td>
		</tr>
		<tr>
			<td>setDataState</td>
			<td>用于主动更新列表数据状态的方法，必需参数data:列表数据(数组)</td>
			<td>tool.methods.setDataState([...tool.methods.currentListData()])</td>
		</tr>
		<tr>
			<td>onAdd</td>
			<td>新增按钮的点击事件，会触发pageConfig.list.addPageRender函数</td>
			<td>tool.methods.onAdd()</td>
		</tr>
		<tr>
			<td>onUpdate</td>
			<td>修改按钮的点击事件，会触发pageConfig.list.updatePageRender函数</td>
			<td>tool.methods.onUpdate(record)</td>
		</tr>
		<tr>
			<td>onDetail</td>
			<td>详情按钮的点击事件，会触发pageConfig.list.detailPageRender函数</td>
			<td>tool.methods.onDetail(record)</td>
		</tr>
		<tr>
			<td>onDelete</td>
			<td>删除按钮的点击事件，会触发pageConfig.list.deleteApiInterface函数</td>
			<td>tool.methods.onDelete(text,record)</td>
		</tr>
		<tr>
			<td>notice</td>
			<td>是一个对象，弹出提示通告的方式，跟ZmainHOC中的noticeType有关，属性函数有success、error、info、warning，它们的参数有 content:提示内容，config:同antd的 notification 和 message 参数</td>
			<td>tool.methods.notice.success("操作成功" [,config])</td>
		</tr>
	</tbody>
</table>

<div class="z-doc-titles"></div>

### tool.\$router

tool.\$router 是一个对象，内容如下：

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
