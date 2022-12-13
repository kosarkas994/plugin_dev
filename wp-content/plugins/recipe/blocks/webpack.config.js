const path              =   require( 'path' );
const webpack           =   require( 'webpack' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports          =   {
    entry:                  './app/index.js',
    output: {
        path:               path.resolve( __dirname, 'dist' ),
        filename:           'bundle.js',
    },
    mode:                   'development',
    watch:                  true,
    devtool:                'inline-source-map',
    module: {
        rules: [
            {
                test:       /\.js$/,
                exclude:    /(node_modules)/,
                use:        'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ] 
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: 'blocks-[name].css'
        })
    ]
};
