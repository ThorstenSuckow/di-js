export default {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        static: {
            directory: './'
        },
        port: 8016,
    }
};