'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const del = require('del');
const colors = require('colors');

const demo_source = path.resolve(__dirname, 'demo');
const demo_entry = path.resolve(demo_source, 'index.ts');
const demo_template = path.resolve(demo_source, 'index.html');

const dist_base = path.resolve(__dirname, 'dist');
const dist_page = path.resolve(dist_base, 'index.html');

const isPro = process.env.NODE_ENV === 'pro';

del.sync(dist_base);
console.warn(`DELETE: ${ dist_base }\n`.cyan);

module.exports = {
    entry: {
        demo: demo_entry
    },
    output: {
        path: dist_base,
        publicPath: '/',
        filename:  `js/[name]${ isPro ? '-[chunkhash:8]' : '' }.min.js`
    },
    module : {
        rules: [
            {
               enforce: 'pre',
               test: /\.js|\.ts$/,
               use: 'source-map-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader?silent'
            },
            {
                test: /\.html$/,
                use: 'html-loader?-minimize'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract('css-loader?sourceMap!ruby-sass-loader?sourceMap')
            },
            {
                test: /\.png|\.gif|\.jpg|\.jpeg|\.ico$/,
                use: 'url-loader?limit=1024&name=image/[name]-[hash:8].[ext]'
            },
            {
                test: /\.eot|\.svg|\.ttf|\.woff|\.woff2$/,
                use: 'url-loader?limit=1024&name=font/[name]-[hash:8].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`css/[name]${ isPro ? '-[contenthash:8]' : '' }.min.css`),
        new HtmlWebpackPlugin({
            filename: dist_page,
            template: demo_template,
            inject: true,
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    externals: {
        '@angular/common': 'ng.common',
        '@angular/core': 'ng.core',
        '@angular/compiler': 'ng.compiler',
        '@angular/forms': 'ng.forms',
        '@angular/http': 'ng.http',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
        '@angular/router': 'ng.router'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devtool: "source-map"
}