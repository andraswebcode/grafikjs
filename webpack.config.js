const path = require('path');

module.exports = [{
	mode:'development',
	watch:true,
	entry:{
		'vanilla':'./src/index.ts',
		'react':'./src/react.ts'
	},
	output:{
		filename:`[name].js`,
		path:path.resolve(__dirname, 'demos')
	},
	devtool:false,
	externals:{
		'react':'React',
		'react-dom':'ReactDOM'
	},
	module:{
		rules:[{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	},
	resolve:{
		extensions:['.ts', '.tsx', '.js']
	}
}];
