const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js'
    },
    devServer:{
        contentBase:path.join(__dirname,'public'),
        compress:false,
        port:8080,
        publicPath:'/vritual/'
    }
}