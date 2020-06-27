const path = require("path");
const HtmlWebpackPlugin =  require('html-webpack-plugin')


module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			use: "babel-loader"
		}
		]
	},
	plugins:[
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "./public/index.html")
	})
	],
	mode: "production"
	
	
};