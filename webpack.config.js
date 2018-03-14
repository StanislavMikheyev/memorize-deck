const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'src/app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
