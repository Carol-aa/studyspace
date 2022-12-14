
const HTmlPlugin=require('html-webpack-plugin')

const path = require('path')
module.exports = {
    mode: 'development',
    entry: "./src/app.js",
    output:{
        publicPath:'./',
        clean:true,
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')//文件路径别名
        },
        // extensions: ['json', 'js', '.vue']//文件解析优先顺序
    },
    plugins:[
        new HTmlPlugin({
            template:'./public/index.html',
            filename:'[name].boundle.html',
        })
    ],
    devServer:{
        liveReload:true,
        static:{
           
            directory:path.resolve(__dirname,'dist')
        }
    }
}