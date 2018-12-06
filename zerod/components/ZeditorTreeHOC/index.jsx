import React from "react";
// import { Input } from "antd";

// 工具
import { mergeConfig } from "../zTool";

import {ZpageWraperHOC} from "../ZpageWrapper";

import { const_getListConfig,const_getPageWrapperProps } from "../constant";
// childs
import ZtreePanel from "./ZtreePanel";

// import cssClass from "./style.scss";

// HOC
const PageWraper = ZpageWraperHOC();

export function ZeditorTreeHOC(pageConfig) {
	pageConfig = pageConfig ? pageConfig : {};
	let defaultConfig = const_getListConfig("tree","ZtreePanel");

	defaultConfig = mergeConfig(defaultConfig, pageConfig);
	class List extends React.Component {
		config = defaultConfig;
		pageWraper = const_getPageWrapperProps(this.config);
		render() {
			return (
				<PageWraper {...this.pageWraper}>
					<ZtreePanel
                        colFormItems={this.config.searchForm.items}
                        searchForm={this.config.searchForm}
						{...this.config.tree}
						insertLocation={this.config.insertLocation}
					/>
				</PageWraper>
			);
		}
	}

	return List;
}

export default ZeditorTreeHOC;
