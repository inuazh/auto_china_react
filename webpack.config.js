const path = require('path'); // Для работы с путями

const config = {
    mode: 'development',
    entry: {
        index: './src/js/index.js', // Точка входа для index.js
        catalog: './src/js/catalog.js', // Точка входа для catalog.js
        card: './src/js/card.js' // Точка входа для card.js
    },
    output: {
        path: path.resolve(__dirname, 'build/js'), // Папка для сборки
        filename: '[name].bundle.js', // [name] будет заменён на 'index', 'catalog', 'card'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Обработка CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/, // Обработка JavaScript и JSX файлов
                exclude: /node_modules/, // Исключение для node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        esmodules: true, // Поддержка ES модуля
                                    },
                                },
                            ],
                            '@babel/preset-react', // Поддержка React
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Позволяет использовать import без указания расширений
    },
};

module.exports = config;

