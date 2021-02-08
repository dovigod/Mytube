/*
const path = require("path");

const ENTRY_FILE = path.resolve(__dirname, "assets","js","main.js");
const OUTPUT_DIR = path.join(__dirname,"static");

const config = {
    entry: ENTRY_FILE,
    output: OUTPUT_DIR
};
*/

const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
	entry: ['@babel/polyfill', ENTRY_FILE],
	mode: MODE,
	//giving rules, [array]
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.(scss|sass)$/,
				// regular expression
				//test if it is scss
				use: [
					//when you find scss file..
					//lots of loader
					{
						//loader == file handling method
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [[autoprefixer]]
							}
						}
					}, // takes css and plugin and translates
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	output: {
		path: OUTPUT_DIR,
		filename: '[name].js',
		chunkLoading: false,
		wasmLoading: false
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'styles.css'
		})
	]
};

module.exports = config;

//awa
