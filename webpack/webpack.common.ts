import * as Webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

interface Configuration extends Webpack.Configuration {
    devServer?: WebpackDevServer.Configuration
}

const config: Configuration = {
    resolve: {
        extensions: [`*`, `.scss`, `.css`, `.js`, `.jsx`, `.ts`, `.tsx`]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: `ts-loader`,
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: `asset/resource`
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: `asset/resource`
            }
        ]
    },

    plugins: [
        new Webpack.ProgressPlugin(),
        new Webpack.BannerPlugin({
            banner: `[file]\nCreated with the Krunker CSS Engine.\nLicensed under the terms of the GNU AGPL v3.` // You can customize this as you wish; it will appear at the top of each of your files.
        })
    ]
};

export default config;
