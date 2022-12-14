// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserWebpackPlugin=require('terser-webpack-plugin')
// module.exports = (env)=>{
//     console.log(env.production)//可以根据env决定开发环境
//     return {
//         entry: {
//             index: {
//                 import: './src/index.jsx', 
//                 dependOn: 'shared'
//             },
//             another: {
//                 import: './src/another.js', 
//                 dependOn: 'shared'
//             },
//             shared:'lodash'//若有该模块 则用共享空间
//         },//多入口
//         // './src/index.jsx',单入口
//         output: {
//             filename: '[name].[contenthash].js',
//             //contenthash文件内容改变时文件也会及时更新····
//             path: path.resolve(__dirname, './dist'),
//             clean: true,
//             publicPath:'http//localhost:8080/'//引入文件的公共路径·
//         },
//         mode: env.production ? 'production' : 'development',
//         //  'development',
//         plugins: [
//             new HtmlWebpackPlugin({
//                 filename: 'app.html',
//                 template: './public/index.html'
//             }),
//             // '@babel/plugin-syntax-jsx'
//         ],
//         module: {
//             rules: [
//                 {
//                     test: /\.jsx/,
//                     exclude: /.node_modules/,
    
//                     use: [
//                         {
//                             loader: 'babel-loader',
//                             options: {
//                                 presets: ['@babel/preset-react'],
//                             },
//                         }
//                     ]
//                 },
//                 {
//                     test: /\.css/,
//                     use: ['style-loader', 'css-loader']
//                 },
//                 // {
//                 //     test: /\.js/,
//                 //     exclude:/node_modules/,
//                 //     use: {
//                 //         loader:'babel-loader',
//                 //         options:{
//                 //              presets:['@babel/preset-env'],
//                 //             plugins:[
//                 //                 [
//                 //                     '@babel/plugin-transform-runtime'
//                 //                 ]
//                 //             ]
//                 //         }
//                 //     }
//                 // },
           
//             ],
            
//         },
//         optimization:{
//             minimizer:[
//                 new TerserWebpackPlugin(),//代码压缩···只有生产模式可以压缩  开发模式不能压缩
//             ]
//         },
//         devServer: {
//             static: './dist'
//         },
//         devtool: 'inline-source-map'
    
//     }
// }