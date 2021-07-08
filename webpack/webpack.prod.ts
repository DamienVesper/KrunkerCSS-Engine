import merge from 'webpack-merge';
import common from './webpack.common';

import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';
import RemovePlugin from 'remove-files-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,
    plugins: [
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
    }
});

export default config;
