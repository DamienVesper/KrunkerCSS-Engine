import merge from 'webpack-merge';
import common from './webpack.common';

import * as Webpack from 'webpack';
import * as path from 'path';

const config = merge(common, {
    mode: `development`,
    devtool: `source-map`,

    entry: path.resolve(__dirname, `../src/index.tsx`),

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`
                ]
            },
            {
                test: /\.css$/,
                use: [`style-loader`, `css-loader`]
            }
        ]
    },

    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.resolve(__dirname, `../dist`),
        publicPath: `/dist`,
        filename: `bundle.min.js`,
        clean: true
    },

    devServer: {
        contentBase: path.resolve(__dirname, `../public`),
        historyApiFallback: true,
        port: 8080,
        publicPath: `http://localhost:3000/dist`,
        hotOnly: true
    }
});

export default config;
