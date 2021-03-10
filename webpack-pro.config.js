/**
 * webpack-pro.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */
const { merge } = require('webpack-merge');
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack-common.config');

// const smp = new SpeedMeasurePlugin();

const MainConfig = {
    mode: 'production',
    // 控制是否生成，以及如何生成 source map，配置项很多，cheap-module-eval-source-map表示原始源代码（仅限行）
	devtool: 'source-map',

    // 代码优化配置
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    minChunks: 1,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                    // name(module) {
                    // 	const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];// npm package names are URL-safe, but some servers don't like @ symbols
                    // 	return `libs.${packageName.replace('@', '')}`;
                    // },
                },
                default: {
                    name: 'libs',
                    minChunks: 1,
                    priority: -20, // 优先级配置项
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            // 压缩js
            new TerserWebpackPlugin({
                parallel: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),

            // 压缩css
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    minifyGradients: true
                },
                canPrint: true
            })
        ]
    }
};

// smp.wrap loader所用打包时间
// module.exports = smp.wrap(merge(MainConfig, commonConfig(true)));
module.exports = merge(MainConfig, commonConfig(true));
