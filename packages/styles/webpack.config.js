const path = require('path');

module.exports = env => {

	const {
		production
	} = env;
	const minSfx = production ? '.min' : '';

	return {
		mode:production ? 'production' : 'development',
		watch:!production,
		devtool:false,
		module:{
			rules:[{
				test:/\.scss$/,
				exclude:/node_modules/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}]
		}
	};

};
