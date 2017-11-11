module.exports = {
    entry: {
        bundle: './main.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: [".vue",".js",".json"],
        alias: {
            'vue$': 'vue/dist/vue.js',
        }
    },
};
