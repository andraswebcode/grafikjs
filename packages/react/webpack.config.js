const path = require('path');

module.exports = (env) => {
	const { production } = env;
	const minSfx = production ? '.min' : '';

	return {
		mode: production ? 'production' : 'development',
		watch: !production,
		entry: {
			'grafik-react': './src/index.ts'
		},
		output: {
			filename: `[name]${minSfx}.js`,
			path: path.resolve(__dirname, 'dist'),
			library: 'grafikReact',
			libraryTarget: 'umd',
			globalObject: 'window'
		},
		devtool: false,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js']
		}
	};
};
