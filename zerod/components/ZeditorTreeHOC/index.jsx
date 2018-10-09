import React from "react";
// import { Input } from "antd";

// 工具
import { mergeConfig } from "../zTool";

import {ZpageWraperHOC} from "../ZpageWrapper";

import { const_getListConfig } from "../constant";
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
		render() {
            let {tree, insertLocation, searchForm, pageHeader, ...otherConfig} = this.config;
            return (
                <PageWraper pageHeader={pageHeader} {...otherConfig}>
                    <ZtreePanel
                        colFormItems={searchForm.items}
                        searchForm={searchForm}
                        {...tree}
                        insertLocation={insertLocation}
                    />
                </PageWraper>
            );
		}
	}

	return List;
}

export default ZeditorTreeHOC;
