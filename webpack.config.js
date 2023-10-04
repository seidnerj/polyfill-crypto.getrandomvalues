const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'crypto-getrandomvalues-polyfill.js',
        globalObject: 'this',
        library: {
            name: 'cryptoGetrandomvaluesPolyfill',
            type: 'umd',
        },
    },
};

