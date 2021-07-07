import merge from 'webpack-merge';
import common from './webpack.common';

import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';
import RemovePlugin from 'remove-files-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,
    entry: {
        main_custom: path.resolve(__dirname, `../src/build/main.ts`),
        social_custom: path.resolve(__dirname, `../src/build/social.ts`)
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [`sass-loader`, MiniCSSExtractPlugin.loader, `css-loader`]
            }
        ]
    },

    plugins: [
        new MiniCSSExtractPlugin(),
        new RemovePlugin({
            after: {
                root: path.resolve(__dirname, `../dist`),
                include: [
                    `main_custom.min.js`,
                    `social_custom.min.js`,
                    `main_custom.min.js.LICENSE.txt`,
                    `social_custom.min.js.LICENSE.txt`
                ]
            }
        })
    ],

    optimization: {
        minimizer: [
            `...`,
            new CSSMinimizerPlugin()
        ]
    },

    output: {
        path: path.resolve(__dirname, `../dist`),
        filename: `[name].min.js`,
        clean: true
    }
});

export default config;
