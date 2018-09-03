const path = require('path');
const baseDir = path.join(__dirname,'..');
const webpack = require('webpack');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
	mode:'development',
	devtool:'eval-source-map',
	devServer:{
		contentBase:path.resolve(baseDir,"dist/"),
		historyApiFallback:true,
		inline:true,
		hot:true,
		compress:true,
		progress:true
	},
	entry:{
		app:path.resolve(baseDir,'src/js/app.js'),
		order:path.resolve(baseDir,'src/js/order.js'),
		vue:['vue']
	},
	output:{
		filename:'[name].min.js',
		path:path.resolve(baseDir,'dist/js/'),
		// publicPath:'/'
	},
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	module:{
		rules:[
			//支持将ES2015 JS语法转译成浏览器认识的JS语法
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				options:{
					presets:['env'],
				}
			},{
				test:/\.css$/,
				loader:'css-loader',
				exclude:/node_modules/
			},{
				test:/\.scss$/,
				use:[
					'style-loader',
					{
						loader:'css-loader',
					  	options:{
							minimize:true,
						}
					},
					'sass-loader'
				],
			},{
				test:/\.vue$/,
				use:['vue-loader'],
				exclude:/node_modules/
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new vueLoaderPlugin()
	]
}