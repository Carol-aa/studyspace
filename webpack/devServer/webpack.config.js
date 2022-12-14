const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        compress: true,
        //是否在服务器端进行代码压缩
        port: 3000,
        headers: { 
            //    key:value
            'X-Access-Token': 'abc123232314'
        },
        proxy: {
            '/api': 'http://localhost:9000'
        },//跨域,
        // https:true,//可访问到https   但默认情况下有安全问题 默认忽略  开发时再配置证书 
        // http2: true,//默认访问https
        // historyApiFallback: true//可访问任意路径
        hot :true //热替换

    },
    plugins: [
        new HtmlPlugin({
            filename: '[name][contenthash].html',
            template: './index.html'
        })
    ]
}