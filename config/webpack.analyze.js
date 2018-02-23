const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const analyzeConfig = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerHost: "0.0.0.0"
        })
    ]
};

const commonConfig = require('./webpack.common.js');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = merge(commonConfig({ env: ENV }), analyzeConfig);
