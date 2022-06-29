const path = require(`path`)

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
		},
	},
}
