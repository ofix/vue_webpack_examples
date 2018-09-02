const path = require('path');
const baseDir = path.join(__dirname,'..');
const webpack = require('webpack');

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
		order:path.resolve(baseDir,'src/js/order.js')
	},
	output:{
		filename:'[name].min.js',
		path:path.resolve(baseDir,'dist/js/'),
		publicPath:'/'
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
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
}