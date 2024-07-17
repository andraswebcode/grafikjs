const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	const { production } = env;

	return {
		mode: production ? 'production' : 'development',
		// watch:!production,
		entry: './src/styles.scss',
		output: {
			path: path.resolve(__dirname, 'dist')
		},
		devtool: false,
		module: {
			rules: [
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: production ? 'styles.min.css' : 'styles.css'
			})
		]
	};
};
