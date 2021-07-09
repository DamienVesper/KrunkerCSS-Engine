import merge from 'webpack-merge';
import common from './webpack.common';

import RemovePlugin from 'remove-files-webpack-plugin';

/**
 * The location of the Documents folder on your system.
 * This will need to be changed in accordance with your install location.
 */
const docLocation = `C:\\Users\\Username\\Documents`;

const config = merge(common, {
    mode: `development`,
    devtool: false,

    output: {
        path: `${docLocation}\\KrunkerResourceSwapper\\css`
    },

    plugins: [
        new RemovePlugin({
            after: {
                root: `${docLocation}\\KrunkerResourceSwapper\\css`,
                include: [
                    `main_custom.min.js`,
                    `social_custom.min.js`
                ]
            }
        })
    ]
});

export default config;
