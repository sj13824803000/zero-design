<div class="z-doc-titles"></div>

# 代码书写约定规范

1、scss : className 的单词之间以“-”连接,如`z-panel-body`; 相同的样式值多次使用到请使用变量（scss 变量写法如：`$--border-color:#f0fef2`）;

2、js : 变量名和普通函数名如果是多个单词,请使用骆驼峰形式如`myName`，构造函数名和 class 类名,请以首字母大写、多个单词以骆驼峰形式，如`MyComponent`;

3、js : 声明函数参数超过 3 个时，请使用对象参数形式，如 `showMyDreams(show,isBox,byElement)`,`showMyDreams({show,isBox,byElement,allData})`;

4、react : 禁用组件生命周期函数：`componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate`,因为这些可能在以后 react 中被废弃的函数;

5、react : ref 属性禁用字符串方式, 如禁用`<div ref="myBox"></div>`，推荐用法`<div ref={(el)=>{this.myBoxEl=el;}}></div>`;

6、react : 组件内跟`setState`无关的属性，请不要写进 `state`中。

7、react : v16.7.0之前的react组件写法：

```jsx
import React from "react";
import PropTypes from "prop-types";

class MyComponent extends React.Component {
	// 定义props的类型(如果有props规定必须要写)
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.any,
	};
	// props的默认值（如果需要）
	static defaultProps = {
		className: "z-body",
	};
	// 定义初始state
	state = {
		listData: [],
	};
	// 安装组件（插入树中）后
	componentDidMount(){

	},
	// props更新或state更新后
	componentDidUpdate(prevProps,prevState){

	},
	// 卸载和销毁组件之前
	componentWillUnmount(){

	}
	render() {
		const { className, children } = this.props;
		return (
			<div className={className}>
				{this.state.listData.map((item) => {
					return <p>{item.name}</p>;
				})}
				{children}
			</div>
		);
	}
}
```

<p class="z-margin-bottom-30 "></p>

# zerod-admin-webpack 开发约定规范

以下看到的`@`符号，是开发目录 `src` 的别名（绝对路径）

<div class="z-doc-titles"></div>

## 后台接口 @/Api

0、后台接口请求响应体应该这样的 ： { code:状态码,data:数据 ,msg:"提示" }

1、`@/App.api.js` 会自动加载 `@/Api/`下的`.api.js`

2、对应后台 `swagger` 接口文档，如login分类的接口，就创建一个`login.api.js`，在这个js中统一写login相关的接口函数

3、规定写法：

```jsx
// 例如login.api.js
import httpAjax from "@/zTool/httpAjax";
export default {
	name: "login", //空间命名，用于支持多个.api.js中的apis出现相同的函数命名
	apis: {
		//获取列表接口
		getList(query) {
			return httpAjax("post", "接口路径", query);
		},
		//获取验证码
		getCode(query) {
			return httpAjax("get", "接口路径", query);
		},
	},
};
```

4、例如在`Home/index.jsx`中使用接口

```jsx
// 导入@/App.api.js即可
import api from "@/App.api.js";

api.login.getList(查询参数).then(re=>{

}).catch(re=>{

}).finally(()=>{

});
```
<div class="z-doc-titles"></div>

## 静态资源

1、衡量小文件可进行打包处理的，统一放 `@/assets` 目录，如小图片在 `@/assets/images`

2、较大文件，不宜打包处理的，统一放 `static`目录，但不能 `import png from '../static/images/my.png'` 的方式引入， 以`<img src="../../static/images/my.png">`等方式使用

<div class="z-doc-titles"></div>

## 通用组件 @/components

1、组件命名：以大写`A`开头，驼峰命名法

2、一个大组件就是一个文件夹，文件夹命名与组件命名相同，里面有对应的 `index.jsx（必需文件）`和 `style.scss`,  
如 `AtabBar` 组件。

```jsx
//例子：AtabBar 的 index.jsx
//使用模块化的css
import cssClass from "./style.scss";

import React from "react";
class AtabBar extends React.Component {
	render(){
		return <div></div>
	}
}
export default {
	name: "AtabBar", //组件命名(必需)
	component: AtabBar, //必需
};
```

3、`@/components` 下的所有 `index.jsx`会在 `@/components/load-components.js`自动加载，使用的时候如

```jsx
//例如，在路由组件中使用通用组件只需
import components from "@/components/load-components";
//然后必须这样：需要什么组件，将组件命名const出来
const { AtabBar, ApageTitle } = components;
```

<div class="z-doc-titles"></div>

## HOC 组件 @/HOC

1、组件命名：以大写`A`开头`HOC`结尾

2、一个大组件就是一个文件夹，文件夹命名与组件命名相同，里面有对应的 `index.jsx（必需文件）`和 `style.scss`  
如 `AshowDemoHOC` 组件。

```jsx
//例子：AshowDemoHOC 的 index.jsx
//使用模块化的css
import cssClass from "./style.scss";

import React from "react";
function AshowDemoHOC(Comp) {
	return class Common extends React.Component {
		render() {
			return <Comp />;
		}
	};
}

export default {
	name: "AshowDemoHOC", //组件命名(必需)
	component: AshowDemoHOC, //必需
};
```

3、`@/HOC` 下的所有 `index.jsx`会在 `@/HOC/load-HOC.js`自动加载，使用的时候如

```jsx
//例如，在路由组件中使用HOC组件只需
import HOC from "@/components/load-HOC";
//然后必须这样：需要什么组件，将组件命名解构出来
const { AshowDemoHOC } = HOC;
const NewComponent = AshowDemoHOC(config);
```

<div class="z-doc-titles"></div>

## 路由组件 @/views

0、一个路由组件就是一个文件夹，文件夹命名：以大写字母开头，驼峰命名法

1、`@/views`下的目录结构按照路由层级结构划分

2、每个路由组件有对应的 `index.jsx、style.scss` 和`A.route.js(路由配置)`

3、路由组件一般使用异步加载，使用 `@/lazyLoad/`懒加载：

```jsx
//例如：Home页面有 index.jsx、style.scss和Home.route.js
// A.route.js写法：
import lazyLoad from "@/lazyLoad/lazyLoad";
const Home = lazyLoad(()=>import("./"));
export default [
	{
		path: "/Home",
		component: Home,
	},
];
```
<div class="z-doc-titles"></div>

## 状态管理仓库 @/store

状态管理的工具使用的是`redux` + `react-redux`

`@/store`主要分为三个部分：`reducers`、`actions`、`mapStateToProps`

`@/store/index.js`中创建了 store，绝大多数不需要修改此文件

如果要设置 store 中某些状态的初始值，请在`@/store/initialState.js`配置

### reducers

绝大多数不需要修改`@/store/reducers/index.js`，它自动加载了`@/store/reducers`下所有以`.mutation.js`后缀的文件

`.mutation.js`内书写的格式如下：

```js
// 变异状态 例子：
export default {
	//命名空间，用于区分 多个.mutation.js里mutations中存在相同函数名
	name: "evaluate",
	//状态变异的函数结构:
	mutations: {
		// 如果 actions/index.js中 type 为"evaluate.changeInput1"的action函数被触发，就会触发这里的changeInput1函数去变异相应的状态
		changeInput1(state, action) {
			return {
				...state,
				currentValue: action.payload.value,
			};
		},
		// 同理
		changeInput2(state, action) {
			return {
				...state,
				maxValue: action.payload.value,
			};
		},
	},
};
```

### actions

actions 的作用是，其他地方或者其他组件内部想要改变 store 仓库里的什么状态

`@/store/actions/index.js`内书写的格式如下：

```js
// action函数之一
export const numberChange1 = (value) => ({
	type: "evaluate.changeInput1", //要触发的是 命名空间为evaluate的 `.mutation.js`中的 `changeInput1`函数
	payload: {
		value,
	},
});
// action函数之一
export const numberChange2 = (value) => ({
	type: "evaluate.changeInput2", // 同理
	payload: {
		value,
	},
});
```

### mapStateToProps

mapStateToProps 的作用是，其他地方或者其他组件内部想要取 store 仓库中的什么状态

`@/store/mapStateToProps/index.js`内书写的格式如下：

```js
//mapStateToProps函数之一
export const getInputValueState1 = function(state) {
	// 这里取得 store仓库中的currentValue状态 给某个组件的props.value
	return {
		value: state.currentValue,
	};
};
//mapStateToProps函数之一
export const getInputValueState2 = function(state) {
	// 这里取得 store仓库中的maxValue状态 给某个组件的props.value
	return {
		value: state.maxValue,
	};
};
```

### react-redux 的 connect

当已经写好了`.mutation.js`、`actions`、`mapStateToProps`，这时需要`connect`将`mapStateToProps`和`actons`与`组件`进行连接

假如有 `Input` 这样的组件,它有 value 和 onChange 两个 props，它与 `mapStateToProps`和`actions`的连接如下：

```jsx
import React from "react";
import { Input } from "antd";
import { connect } from "react-redux";
import { numberChange1 } from "@/store/actions";
import { getInputValueState1 } from "@/store/mapStateToProps";

const NewInput = connect(
	getInputValueState1,
	{
		onChange: numberChange1,
	},
)(Input);
```
<div class="z-doc-titles"></div>

## react 上下文 使用

1、`@/App.context.js` 会自动加载 `@/context/`下的以大写字母开头且以`Context`结尾的`.js`

2、例：`AppRootContext.js`

```jsx
import React from "react";
const defaultValue = {};
const context = React.createContext(defaultValue); //创建上下文
const { Provider, Consumer } = context;
//提供启用上下文的方法
const setConsumer = (ChildComponent) => {
	return class ContextConsumer extends React.Component {
		render() {
			return <Consumer>{(value) => <ChildComponent {...this.props} {...value} />}</Consumer>;
		}
	};
};
export default {
	name: "AppRootContext", //上下文名称（必需）,首字母要大写,以Context结尾
	loadingText: "加载中...", //一些固定值
	Provider,
	Consumer,
	setConsumer,
};
```

3、使用上下文 例子：

上文

```jsx
//引入上下文
import contexts from "@/App.context.js";
//将上下文的名称 const 出来
const { AppRootContext } = contexts;

//在 App.jsx中通过 AppRootContext.Provider 组件更改 上文value
<AppRootContext.Provider
	value={{
		updateLoading: this.methods.updateLoading,
		timeoutHideLoading: this.methods.timeoutHideLoading,
		updateDialog: this.methods.updateDialog,
		updatePicker: this.methods.updatePicker,
		setPageStorage: this.methods.setPageStorage,
		getPageStorage: this.methods.getPageStorage,
		clearPageStorage: this.methods.clearPageStorage,
	}}
>
	{/*这里包含下文的组件*/}
</AppRootContext.Provider>;
```

下文

```jsx
//引入上下文
import contexts from "@/App.context.js";
//将上下文的名称 const 出来
const { AppRootContext } = contexts;

//在 Report/index.jsx中通过 AppRootContext.setConsumer(Report) 获取上文的value
//这时在 Report组件中就可以 通过props使用这些东西

this.props.updateLoading();
this.props.timeoutHideLoading();
this.props.updateDialog();
```
