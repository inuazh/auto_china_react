const path = require('path');

const config = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        catalog: './src/js/catalog.js',
        card: './src/js/card.js',
    },
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
                type: 'asset/resource', // Встроенный тип Webpack для ресурсов
                generator: {
                    filename: '../img/[name][ext]', // Куда складывать обработанные изображения
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

module.exports = config;
