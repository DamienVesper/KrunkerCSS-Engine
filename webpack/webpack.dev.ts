import merge from 'webpack-merge';
import common from './webpack.common';

import * as path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import RemovePlugin from 'remove-files-webpack-plugin';

const docLocation = `D:\\Users\\DamienVesper\\Documents`;

const config = merge(common, {
    mode: `development`,

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, `../dist`),
                to: `${docLocation}\\KrunkerResourceSwapper\\css`
            }]
        }),
        new RemovePlugin({
            after: {
                root: `${docLocation}\\KrunkerResourceSwapper\\css`,
                include: [
                    `main_custom.min.js`,
                    `social_custom.min.js`,
                    `main_custom.min.js.map`,
                    `social_custom.min.js.map`
                ]
            }
        })
    ]
});

export default config;
