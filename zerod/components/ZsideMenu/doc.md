# 左侧菜单组件：ZsideMenu

`ZsideMenu` 将`antd`的 `Menu`、`Menu.Item`、`Menu.SubMenu`转成数据结构直接渲染的方式

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZsideMenu } from "zerod";
const menus = [
	{
		path: "/start-doc",
		name: "开始",
		// iconClass: "",
	},
	{
		path: "/component-doc",
		name: "组件",
		children: [
			{
				path: "/ZcodeHighlight-doc",
				name: "代码高亮 : ZcodeHighlight",
				iconClass: "",
			},
		],
	},
	{
		path: "/config",
		name: "案例",
		children: [
			{
				path: "/serviceWithTableList",
				name: "表格列表",
				iconClass: "",
			},
		],
	},
];
<ZsideMenu menuData={menus} />;
```

### ZsideMenu Props

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
			<td>menuData</td>
			<td>菜单数据，每个对象的属性有iconClass：小图标、name、path：路由地址必须以"/"开头的、若有子菜单，则还有children属性。iconClass默认支持antd的Icon组件的type,还支持函数return自定义图标, (请使用变量缓存所需设置的值而非直接使用字面量)</td>
			<td>array[object]</td>
			<td>-</td>
		</tr>
		<tr>
			<td>collapsed</td>
			<td>是否折叠菜单</td>
			<td>boolean</td>
			<td>false</td>
		</tr>
        <tr>
			<td>theme</td>
			<td>菜单的主题 'light' | 'dark'</td>
			<td>string</td>
			<td>light</td>
		</tr>
        <tr>
			<td>openAllSubmenu</td>
			<td>是否展开所有二级菜单</td>
			<td>string</td>
			<td>light</td>
		</tr>
        <tr>
			<td>onSelect</td>
			<td>点击选中菜单项触发的函数，如果函数内return false 则不会跳转menuData中对应项的path路径</td>
			<td>function({ item, key, selectedKeys }){}</td>
			<td>--</td>
		</tr>
        <tr>
			<td>onOpenChange</td>
			<td>展开/折叠二级菜单触发的函数，并且是展开/折叠过渡动画完了才触发</td>
			<td>function(keys){}</td>
			<td>--</td>
		</tr>
        <!-- <tr>
			<td>iconTheme</td>
			<td>同antd的Icon组件的theme属性，</td>
			<td>'filled' | 'outlined' | 'twoTone'</td>
			<td>outlined</td>
		</tr> -->
	</tbody>
</table>
