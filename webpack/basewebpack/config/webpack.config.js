const { merge } = require('webpack-merge')//合并生产和开发环境的webpack配置
const commonConfig = require('./webpack.config.base')
const devConfig = require('./webpack.config.dev')
const productionConfig = require('./webpack.config.prod')
//npx webpack --env goal=local --env production --progress
module.exports = (env) => {
    console.log(env)
    switch (true) {
        case env.development:
            return merge(commonConfig, devConfig);
        case env.production:
            return merge(commonConfig, productionConfig);
            default:
                return new Error('No matching configuration was found')
    }
}