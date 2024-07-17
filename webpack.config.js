const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
	{
		mode: 'development',
		// watch: true,
		entry: {
			vue: './src/vue.ts'
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
		// devtool: false,
		// externals: {},
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
	}
];
