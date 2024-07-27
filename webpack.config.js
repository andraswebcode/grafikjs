const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
	{
		mode: 'development',
		entry: {
			vue: './src/vue.ts',
			svgimport: './src/svgimport.ts'
		},
		output: {
			filename: `[name].js`,
			path: path.resolve(__dirname, 'public')
		},
		devServer: {
			static: {
				directory: path.join(__dirname, 'public')
			},
			compress: true,
			port: 9000
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/,
					options: {
						appendTsSuffixTo: [/\.vue$/]
					}
				},
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					use: 'vue-loader'
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.vue']
		},
		plugins: [new VueLoaderPlugin()]
	},
	{
		mode: 'development',
		entry: {
			core: './packages/core/src/index.ts'
		},
		output: {
			filename: `[name].js`,
			path: path.resolve(__dirname, 'public'),
			library: 'grafik',
			libraryTarget: 'umd',
			globalObject: 'window'
		},
		module: {
			rules: [
				{
					test: /\.ts?$/,
					loader: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.js']
		}
	}
];
