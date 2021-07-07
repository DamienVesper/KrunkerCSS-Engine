import merge from 'webpack-merge';
import common from './webpack.common';

import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,
    entry: path.resolve(__dirname, `../src/Userscript.ts`),

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [`sass-loader`, MiniCSSExtractPlugin.loader, `css-loader`]
            }
        ]
    },

    plugins: [new MiniCSSExtractPlugin()],

    optimization: {
        minimizer: [
            `...`,
            new CSSMinimizerPlugin()
        ]
    },

    output: {
        path: path.resolve(__dirname, `../dist`),
        filename: `userscript.min.js`
    }
});

export default config;
