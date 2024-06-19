const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = env => {

	const {
		production
	} = env;
	const minSfx = production ? '.min' : '';

	return {
		mode:production ? 'production' : 'development',
		watch:!production,
		entry:{
			'grafik-vue':'./src/index.ts'
		},
		output:{
			filename:`[name]${minSfx}.js`,
			path:path.resolve(__dirname, 'dist'),
			library:'grafikVue',
			libraryTarget:'umd',
			globalObject:'window'
		},
		devtool:false,
		module:{
			rules:[{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},{
				test: /\.vue$/,
				exclude:/node_modules/,
				loader: 'vue-loader'
			}]
		},
		resolve:{
			extensions:['.ts', '.js', '.vue']
		},
		plugins: [
			new VueLoaderPlugin()
		]
	};

};
