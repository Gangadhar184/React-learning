//we do bundling process here in this file
//configuration details for bundling

const path = require("path");
module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname, "public")
    },
    devtool: 'source-map',
    mode : "development",
    devServer : {
        static:{
            directory : path.resolve(__dirname, "public")
        },
        port : 3500,
    }
}
