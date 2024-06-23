const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
	{
		mode: 'development',
		watch: true,
		entry: {
			vanilla: './src/index.ts',
			react: './src/react.ts',
			vue: './src/vue.ts'
		},
		output: {
			filename: `[name].js`,
			path: path.resolve(__dirname, 'demos')
		},
		devtool: false,
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM'
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
	}
];
