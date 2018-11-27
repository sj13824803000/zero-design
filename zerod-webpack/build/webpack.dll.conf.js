const path = require("path");
const webpack = require("webpack");
const config = require("../config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const package = require("../package.json");
const webpackConfig = {
	mode: "production",
	entry: {
		vendor: Object.keys(package.dependencies).filter((key) => {
			return !["antd", "uuid"].includes(key);
		}).concat(["moment"]),
	},
	output: {
		path: path.join(__dirname, "../static"),
		filename: "[name].dll.js",
    libraryTarget: 'var', // 链接库(react.dll.js)输出方式 默认'var'形式赋给变量 b
    library: '_dll_[name]_[hash]' // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				uglifyOptions: {
					warnings: false,
				},
			}),
		],
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "./", "[name].manifest.json"),
      name: '_dll_[name]_[hash]', // 和library 一致，输出的manifest.json中的name值
    //   context: __dirname,
		}),
	],
};

webpack(webpackConfig, (err, stats) => {
	if(err)
	console.log(err);
});
