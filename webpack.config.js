const path = require("path");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        port: 8016,
    }
};