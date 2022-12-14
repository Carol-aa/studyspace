
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {

    entry: {
        main: {
            import: ['./src/app.js', './src/app2.js'],
            dependOn: 'lodash',
            filename:'./assest1/[name].js'
        },
        main2: {
            import: './src/app3.js',
            dependOn: 'lodash',
            filename:'./assest2/[name].js'

        },
        lodash: {
            import :'lodash',
            filename:'./common/[name].js' 
        }
    },
    output: {
        clean: true,
        filename:'[name].js'
    },

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /\node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlPlugin({
            title: '自定义变量哈',//自定义变量 ,可以随意设置，这里用title，去模板html文件中查看是如何访问的
            //htmlWebpackPlugin是系统提供的而不是自定义的 不能瞎用哈
            template: './public/index.html',
            inject: 'head',//定义当前生成的script标签应该放在body还是head中,自己定义文件注入到哪里  
            //<script defer src="main.js"></script><script defer src="main2.js"></script><script defer src="lodash.js"></script></head>
            chunks: ['main'],//可手动选择要加载的chunk 到默认的 template: './public/index.html',中去
            filename: './assest1/index.html',
            publicPath:'http://www.a.com',//设置各自的src公共路径
             
        }),
        new HtmlPlugin({
            template: 'index2.html',
            inject: 'body',
            chunks: ['main2'],
            filename: './assest2/index2.html',//有多个窗口就必须设置filename否则会发生冲突 
            publicPath:'http://www.b.com'
        })
    ]
}