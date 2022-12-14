
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './app.js',
    plugins: [
        new HtmlPlugin({
            template:'./index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ] 
    },
    devServer: {
        hot: true,//开箱即用//实时看到css的变化，不必清除已经添加好的样式
        liveReload:true //自动加载更新
    }

}