let path = require('path')

module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        path: path.join(__dirname, './public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            }
        ]
    }
}