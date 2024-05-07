const path = require('path');

module.exports = env => {

	const {
		production
	} = env;
	const minSfx = production ? '.min' : '';

	return {
		mode:production ? 'production' : 'development',
		watch:!production,
		entry:{
			'grafik':'./src/index.ts'
		},
		output:{
			filename:`[name]${minSfx}.js`,
			path:path.resolve(__dirname, 'dist'),
			library:'grafik',
			libraryTarget:'umd',
			globalObject:'window'
		},
		devtool:false,
		module:{
			rules:[{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}]
		},
		resolve:{
			extensions:['.ts', '.js']
		}
	};

};
