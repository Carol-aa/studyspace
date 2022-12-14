const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {


            output: {
                filename: '[name].[contenthash].js',
                publicPath: 'http//localhost:8080/'//引入文件的公共路径·
            },
            mode: 'production',

            optimization: {
                minimizer: [
                    new TerserWebpackPlugin(),//代码压缩···只有生产模式可以压缩  开发模式不能压缩
                ]
            },

         
}
