//删除通用代码


module.exports = {
   
    // './src/index.jsx',单入口
    output: {
        filename: '[name].[contenthash].js',
    },
    mode:'development',
    //  'development',
     
    
    devServer: {
        static: '../dist'
    },
    devtool: 'inline-source-map'

}
